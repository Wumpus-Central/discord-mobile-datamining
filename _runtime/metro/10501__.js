// === Module 10501: ? ===

// Module 10501
import Fragment from "Fragment" /* 21 */;
import _mod1643 from "module_1643" /* 1643 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext({});
const __initData = { code: "function pnpm_indexTsx1(index,dimensions){const{itemDimensions}=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};}" };
const __initData2 = { code: "function pnpm_indexTsx2(dimensions){const{containerSize}=this.__closure;containerSize.value=dimensions;}" };

export const GlobalStateContext = context;
export const GlobalStateProvider = (arg0) => {
  let children;
  let value;
  ({ children, value } = arg0);
  let obj = _mod1643;
  const sharedValue = obj.useSharedValue({ width: 0, height: 0 });
  const obj2 = _mod1643;
  const sharedValue1 = obj2.useSharedValue({});
  const fn = function c(arg0, arg1) {
    const obj = {};
    const merged = Object.assign(sharedValue1.value);
    obj[arg0] = arg1;
    sharedValue1.value = obj;
  };
  fn.__closure = { itemDimensions: sharedValue1 };
  fn.__workletHash = 9846581158902;
  fn.__initData = __initData;
  const fn2 = function _(value) {
    sharedValue.value = value;
  };
  fn2.__closure = { containerSize: sharedValue };
  fn2.__workletHash = 5978604737778;
  fn2.__initData = __initData2;
  const Provider = context.Provider;
  const obj4 = { layout: { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: fn, updateContainerSize: fn2 } };
  let merged = Object.assign(value);
  return <Provider value={obj4}>{children}</Provider>;
};
export const useGlobalState = function() {
  context = react.useContext(context);
  if (context) {
    return context;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("useGlobalState must be used within a GlobalStateProvider");
    throw error;
  }
};