// _runtime/metro/00252__.js
import ViewDefault from "../00108_View.js";
import RootTagContext from "../00253_RootTagContext.js";
import noop from "00019__.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";

require = fn;
const jsx = fn(21).jsx;
const root = get_hairlineWidth.create({ root: { flex: 1 } });

export default function _default(rootTag) {
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  let tmp2 = children;
  if (null != WrapperComponent) {
    let obj = { initialProps: tmp, children };
    tmp2 = <WrapperComponent initialProps={tmp}>{children}</WrapperComponent>;
  }
  obj = { value: RootTagContext.createRootTag(rootTag.rootTag), children: null };
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj.children = jsx(ViewDefault, { style: rootViewStyle, pointerEvents: "box-none", children: tmp2 });
  return jsx(RootTagContext.RootTagContext.Provider, {
    value: RootTagContext.createRootTag(rootTag.rootTag),
    children: null,
  });
}
