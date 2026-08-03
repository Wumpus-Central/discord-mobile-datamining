import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;

export default function usePreventRemove(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const first = callback(key.useState(() => callback(first[2]).nanoid()), 1)[0];
  const tmp2 = importDefault(first[3])();
  callback = tmp2;
  key = importDefault(first[4])().key;
  const setPreventRemove = importDefault(first[5])().setPreventRemove;
  const items = [setPreventRemove, first, key, arg0];
  const effect = key.useEffect(() => {
    setPreventRemove(first, key, closure_0);
    return () => {
      callback(closure_2, noop, false);
    };
  }, items);
  const tmp4 = importDefault(first[6])((preventDefault) => {
    if (closure_0) {
      preventDefault.preventDefault();
      const obj = { data: null };
      obj[0] = preventDefault.data;
      callback2(obj);
    }
  });
  let closure_6 = tmp4;
  const items1 = [tmp2, tmp4];
  const effect1 = key.useEffect(() => {
    let addListenerResult;
    if (_slicedToArray != null) {
      addListenerResult = _slicedToArray.addListener("beforeRemove", closure_6);
    }
    return addListenerResult;
  }, items1);
};