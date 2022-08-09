import "./styles.css";
import { IActiveCard, IChooserData, IFormDetails, IInputData, IPageData } from "../../utils/interfaces";
import { useEffect, useState } from "react";

const Page = ({ heading, subHeading, inputData, ctaName, chooserData, icon, handleCtaClick }: IPageData & { handleCtaClick: () => void }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [currentInput, setCurrentInput] = useState<IFormDetails>({ label: "", value: "" });
  useEffect(() => {
    const formDetails = JSON.parse(localStorage.getItem("formDetails") ?? "{}");
    const currentInputValue = new Map();
    currentInputValue.set(currentInput.label, currentInput.value);
    localStorage.setItem("formDetails", JSON.stringify({ ...formDetails, ...Object.fromEntries(currentInputValue) }))
  }, [currentInput]);
  return (
    <div className="page">
        {icon && <img src={icon} alt="logo" height={78} width={90} />}
        <article>
            <h2>{heading}</h2>
            <p>{subHeading}</p>
        </article>
        {chooserData && (
            <div className="optionWrapper">
                {chooserData?.map((chooser, index) => <OptionComponent key={String(index)} {...chooser} activeCard={activeCard} setActiveCard={setActiveCard} index={index} /> )}
            </div>
        )}
        <form onSubmit={handleCtaClick}>
            {inputData?.map((inputField, index) => <TextField key={String(index)} {...inputField} setCurrentInput={setCurrentInput} /> )}
            <input className="cta" type="submit" value={ctaName}></input>
        </form>
    </div>
  )
};

const TextField = ({ label, placeholder, isOptional, inputAdornment, setCurrentInput }: IInputData & { setCurrentInput: any }) => {
    const handleInputChange = (value: string) => {
        setCurrentInput({
            label,
            value
        });
    };
    return (
        <div className="textfield">
            <label>{label}<span className="lightText">{isOptional && " (optional)"}</span></label>
            <div className="inputField">
                {inputAdornment && <div className="inputAdornment">{inputAdornment}</div>}
                <input onChange={(e) => handleInputChange(e.target.value)} type="text" name={label} placeholder={placeholder} style={{ borderTopLeftRadius: inputAdornment && 0, borderBottomLeftRadius: inputAdornment && 0 }} />
            </div>
        </div>
    )
};

const OptionComponent = ({ icon, heading, subHeading, activeCard, setActiveCard, index }: IChooserData & IActiveCard) => {
    const handleSetActiveCard = () => {
        setActiveCard(index);
    }
    return (
        <div className={`${activeCard === index ? "activeOption" : ""} option`} onClick={handleSetActiveCard}>
            <img src={icon} alt= {heading} height={30} width={30} />
            <h3>{heading}</h3>
            <p>{subHeading}</p>
        </div>
    )
};

export default Page;
