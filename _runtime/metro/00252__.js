// === Module 252: ? ===

// Module 252
import ViewDefault from "View" /* 108 */;
import RootTagContext from "RootTagContext" /* 253 */;
import noop from "module_19" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

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
  return jsx(RootTagContext.RootTagContext.Provider, { value: RootTagContext.createRootTag(rootTag.rootTag), children: null });
};