import { createStore, sample, createEvent } from "effector";
import { createGate } from "effector-react";

const store = createStore({})
const store1 = createStore({})

export const PageGate = createGate();
sample({
//@ts-ignore
    clock: PageGate.state,
    target: store
})
sample({
//@ts-ignore
    clock: PageGate.open,
    target: store1
})

store.watch(item => console.log(item, "state"))
store1.watch(item => console.log(item, "open"))

export const counter = createStore(1);
export const event = createEvent();

sample({
    clock: event,
    source: counter,
    fn: (counter) => counter += 1,
    target: counter
})

sample({
    clock: event,
    source: counter,
    fn: (counter) => counter += 2,
    target: counter
})
