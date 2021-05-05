import React from 'react';
import Counter from '../Counter';
import { cleanup, fireEvent, render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter/>);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    cleanup();
})

test("header renders with correct text", () => {
    // const component = render(<Counter/>);
    // const headerElement = component.getByTestId("header");

    // or    
    const headerElement = getByTestId("header");
    
    expect(headerElement.textContent).toBe("My Counter")
})

test("counter initially start with text of 0", () => {    
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
})

test("input contains initial value of 1", () => {    
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add buttons renders with correct +", () => {    
    const addBtnEl = getByTestId("add-btn");

    expect(addBtnEl.textContent).toBe("+");
})

test("subtract buttons renders with correct -", () => {    
    const subtractBtnEl = getByTestId("subtract-btn");

    expect(subtractBtnEl.textContent).toBe("-");
})

test("change value of input works correctly", () => {    
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
    
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");    
})

test("click on plus btn adds 1 to counter", () => {    
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");    

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1");    
})

test("click on subtract btn adds 1 to counter", () => {    
    const subtractBtnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");    

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-1");    
})

test("changing input value then click on add btn works correctly", () => {    
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })    

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5");    
})

test("changing input value then click on subtract btn works correctly", () => {    
    const subtractBtnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })    

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-5");    
})

test("adding and then subtracting leads to the correct counter number", () => {    
    const subtractBtnEl = getByTestId("subtract-btn");
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })    

    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("20");    
})

test("counter contains the correct className", () => {     
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const subtractBtnEl = getByTestId("subtract-btn");
    const addBtnEl = getByTestId("add-btn");

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target: {
            value: "99"
        }
    })   

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("");

    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("green");

    fireEvent.change(inputEl, {
        target: {
            value: "300"
        }
    }) 

    fireEvent.click(subtractBtnEl);

    expect(counterEl.className).toBe("red");
});