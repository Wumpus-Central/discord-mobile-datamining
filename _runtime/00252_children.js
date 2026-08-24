// _runtime/00252_children.js
import noopAll from "00019_noop.js";
import ViewDefault from "00108_View.js";
import RootTagContext from "00253_RootTagContext.js";
import get_hairlineWidthDefault from "00254_get_hairlineWidth.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
noopAll;
let closure_4 = get_hairlineWidthDefault.create({ root: { flex: 1 } });

export default function _default(rootTag) {
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  let tmp2 = children;
  if (null != WrapperComponent) {
    let obj = { initialProps: null, children: null };
    obj[0] = tmp;
    obj[1] = children;
    tmp2 = <WrapperComponent initialProps={null}>{null}</WrapperComponent>;
  }
  obj = { value: RootTagContext.createRootTag(rootTag.rootTag), children: null };
  const obj3 = RootTagContext;
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj[1] = jsx(ViewDefault, { style: rootViewStyle, pointerEvents: "box-none", children: tmp2 });
  return jsx(RootTagContext.RootTagContext.Provider, { value: RootTagContext.createRootTag(rootTag.rootTag), children: null });
};