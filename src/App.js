import React, { Suspense, useEffect, useState, createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./reducer/CounterSlice";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}></Suspense>

      {state.data?.map((v) => (
        <p key={v.id}>{v.title}</p>
      ))}
      <button onClick={() => dispatch(fetchTodos())}>fetch data</button>
    </>
  );
};

export default App;
