import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter.reducer";
import { CountState } from "./counter.reducer";

interface CounterStore {
  counts: CountState;
}

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(({ counts }: CounterStore) => counts.count);

  return (
    <div>
      Counter : {count}
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
      <button onClick={() => dispatch({ type: "cong10", payload: 10 })}>
        Cong 10
      </button>
    </div>
  );
};

export default Counter;
