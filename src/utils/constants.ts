import { IPageData } from "./interfaces";
import logo from "../assets/finished.png";
import self from "../assets/self.png";
import team from "../assets/team.png";

export const pageData: IPageData[] = [
    {
        heading: "Welcome! First things first...",
        subHeading: "You can always change them later.",
        ctaName: "Create Workspace",
        inputData: [
            {
                label:"Full Name",
                placeholder: "Steve Jobs"
            },
            {
                label:"Display Name",
                placeholder: "Steve"
            },
        ]
    },
    {
        heading: "Let's set up a home for all your work",
        subHeading: "You can always create another workspace later.",
        ctaName: "Create Workspace",
        inputData: [
            {
                label:"Workspace Name",
                placeholder: "Eden"
            },
            {
                label:"Workspace URL",
                placeholder: "Example",
                isOptional: true,
                inputAdornment: "www.eden.com/"
            },
        ]
    },
    {
        heading: "How are you planning to use Eden?",
        subHeading: "We'll streamline your setup experience accordingly.",
        ctaName: "Create Workspace",
        chooserData: [
            {
                icon: self,
                heading:"For myself",
                subHeading: "Write better. Think more clearly. Stay Organized."
            },
            {
                icon: team,
                heading:"With my team",
                subHeading: "Wikis, docs, tasks & projects, all in one place."
            },
        ]
    },
    {
        icon: logo,
        heading: "Congratulations, Eren!",
        subHeading: "You have completed onboarding, you can start using the Eden!",
        ctaName: "Launch Eden"
    },
]