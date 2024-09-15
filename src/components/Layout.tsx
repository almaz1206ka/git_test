import React from "react";
import { useGate, useUnit } from "effector-react";
import { counter, event, PageGate } from ".";

export const Layout = () => {
    const count = useUnit(counter);

    useGate(PageGate, {count})
    return <>
    <button onClick={() => event()}></button>
    <div>123</div></>
}