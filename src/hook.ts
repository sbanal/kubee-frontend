import { useState } from "react";

import {getMessage, HelloResponse} from "./api";

export default (): [(id: string) => void, HelloResponse, string] => {
    const blank: HelloResponse = { message: "" };
    const [message, setMessage] = useState<HelloResponse>(blank);
    const [errorMsg, setErrorMsg] = useState("");

    const getHelloMessage = async (name: string) => {
        try {
            const user = await getMessage(name);
            setMessage(user);
            setErrorMsg("");
        } catch (error) {
            // @ts-ignore
            setErrorMsg(error.message);
            setMessage(blank);
        }
    };

    return [getHelloMessage, message, errorMsg];
};
