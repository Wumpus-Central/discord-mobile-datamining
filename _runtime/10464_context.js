// _runtime/10464_context.js
import importDefaultResult from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let context = importDefaultResult.createContext({});
let closure_5 = { code: "function pnpm_indexTsx1(index,dimensions){const{itemDimensions}=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};}" };
let closure_6 = { code: "function pnpm_indexTsx2(dimensions){const{containerSize}=this.__closure;containerSize.value=dimensions;}" };

export const GlobalStateContext = context;
export const GlobalStateProvider = (arg0) => {
  let sharedValue;
  let sharedValue1;
  ({ children, value } = arg0);
  let obj = sharedValue(sharedValue1[2]);
  sharedValue = obj.useSharedValue({ width: 0, height: 0 });
  sharedValue1 = sharedValue(sharedValue1[2]).useSharedValue({});
  const fn = function c(arg0, arg1) {
    const obj = {};
    const merged = Object.assign(sharedValue1.value);
    obj[arg0] = arg1;
    sharedValue1.value = obj;
  };
  fn.__closure = { itemDimensions: sharedValue1 };
  fn.__workletHash = 9846581158902;
  fn.__initData = closure_5;
  const fn2 = function _(value) {
    sharedValue.value = value;
  };
  fn2.__closure = { containerSize: sharedValue };
  fn2.__workletHash = 5978604737778;
  fn2.__initData = closure_6;
  obj = { value: null, children: null };
  obj = {};
  let merged = Object.assign(value);
  obj.layout = { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: fn, updateContainerSize: fn2 };
  obj[0] = obj;
  obj[1] = children;
  return <context.Provider />;
};
export const useGlobalState = () => {
  context = importDefaultResult.useContext(context);
  if (context) {
    return context;
  } else {
    const _Error = Error;
    error = new Error("useGlobalState must be used within a GlobalStateProvider");
    throw error;
  }
};