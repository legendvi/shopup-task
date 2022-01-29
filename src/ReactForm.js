import { useRef, useState, useCallback } from "react";
import GridCard from "./GridCard";
function ReactForm() {
  const [data, setData] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    console.log(`Name is ${nameRef.current.value}`);
    console.log(`Email is ${emailRef.current.value}`);
    console.log(`Password is ${passwordRef.current.value}`);
  };

  const handleReset = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const handleSearch = async (value) => {
    // log your value here
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=T150oKJwi6hHK9HZsEMxwA7WfrzpdCyo&q=${value}`
    );
    const body = await res.json();
    console.log(body.data);
    setData(body.data);
  };

  const debounce = (callback, delay) => {
    // add your debounce logic here
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        callback.apply(context, args);
      }, delay);
    };
  };
  const debouncedSearch = useCallback(debounce(handleSearch, 1000), []);
  return (
    <>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input placeholder="name" type="text" ref={nameRef} />
        </label>
        <label>
          Email:
          <input placeholder="email" type="text" ref={emailRef} />
        </label>

        <label>
          Password:
          <input placeholder="password" type="text" ref={passwordRef} />
        </label>
        <hr />
        <button onClick={(e) => nameRef.current.focus()}>
          Focus Name Input
        </button>
        <button onClick={(e) => emailRef.current.focus()}>
          Focus Email Input
        </button>
        <button onClick={(e) => passwordRef.current.focus()}>
          Focus Password Input
        </button>
        <hr />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            onChange={(e) => debouncedSearch(e.target.value)}
          />
        </label>
      </div>
      {data && <GridCard data={data} />}
    </>
  );
}

export default ReactForm;
