// === Module 10823: ? ===

// Module 10823
import _mod1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext({});
let closure_5 = { code: "(function pnpm_indexTsx1(index,dimensions){let[itemDimensions]=this.__closure;itemDimensions.value={...itemDimensions.value,[index]:dimensions};})" };
let closure_6 = { code: "(function pnpm_indexTsx2(dimensions){let[containerSize]=this.__closure;containerSize.value=dimensions;})" };

export const GlobalStateContext = context;
export (value) => {
  const sharedValue = _mod1652.useSharedValue({ width: 0, height: 0 });
  const sharedValue1 = _mod1652.useSharedValue({});
  items = [closure_5, sharedValue1];
  [tmp3, tmp4] = items;
  function pnpm_indexTsx1(arg0, arg1) {
    const obj = {};
    const merged = Object.assign(_undefined.value);
    obj[arg0] = arg1;
    _undefined.value = obj;
  }
  const items1 = [tmp4];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 6407231763087;
  pnpm_indexTsx1.__initData = tmp3;
  const items2 = [closure_6, sharedValue];
  c0 = undefined;
  [tmp5, tmp6] = items2;
  function pnpm_indexTsx2(value) {
    c0.value = value;
  }
  const items3 = [tmp6];
  pnpm_indexTsx2.__closure = items3;
  pnpm_indexTsx2.__workletHash = 15528502204235;
  pnpm_indexTsx2.__initData = tmp5;
  const obj3 = { value: null, children: null };
  const obj4 = {};
  let merged = Object.assign(value.value);
  obj4.layout = { containerSize: sharedValue, itemDimensions: sharedValue1, updateItemDimensions: pnpm_indexTsx1, updateContainerSize: pnpm_indexTsx2 };
  obj3.value = obj4;
  obj3.children = value.children;
  return <context.Provider value={null}>{null}</context.Provider>;
}
export () => {
  context = noop.useContext(context);
  if (context) {
    return context;
  } else {
    const _Error = Error;
    const error = new Error("useGlobalState must be used within a GlobalStateProvider");
    throw error;
  }
}