import { Dispatch, SetStateAction } from "react";

export interface IPageData {
    heading: string;
    subHeading: string;
    ctaName: string;
    inputData?: IInputData[];
    chooserData?: IChooserData[];
    icon?: string;
}

export interface IInputData {
    label: string;
    placeholder: string;
    isOptional?: boolean;
    inputAdornment?: string;
}

export interface IChooserData {
    icon: string;
    heading: string;
    subHeading: string;
}

export interface IActiveCard { 
    activeCard: number;
    setActiveCard: Dispatch<SetStateAction<number>>;
    index: number;
}

export interface IActivePage { 
    activePage: number;
    index: number;
    totalPages: number; 
}
