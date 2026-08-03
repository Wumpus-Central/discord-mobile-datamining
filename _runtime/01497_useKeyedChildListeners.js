import noop from "noop";


export default function useKeyedChildListeners() {
  current = current.useRef(Object.assign(Object.create(null), { getState: {}, beforeRemove: {} })).current;
  const items = [current];
  return {
    keyedListeners: current,
    addKeyedListener: current.useCallback((arg0, arg1, arg2) => {
      const table = arg0;
      let closure_1 = arg1;
      table[arg0][arg1] = arg2;
      return () => {
        table[table][closure_1] = undefined;
      };
    }, items)
  };
};