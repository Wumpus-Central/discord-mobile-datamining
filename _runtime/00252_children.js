// _runtime/00252_children.js
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = require("get hairlineWidth").create({ root: { flex: 1 } });

export default function _default(rootTag) {
  let WrapperComponent;
  let children;
  let rootViewStyle;
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  let tmp2 = children;
  if (null != WrapperComponent) {
    let obj = { initialProps: null, children: null };
    obj[0] = tmp;
    obj[1] = children;
    tmp2 = <WrapperComponent initialProps={null}>{null}</WrapperComponent>;
  }
  obj = { value: null, children: null };
  obj[0] = require("00253_RootTagContext.js") /* RootTagContext */.createRootTag(rootTag.rootTag);
  const obj3 = require("00253_RootTagContext.js") /* RootTagContext */;
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj[1] = jsx(require("00108_View.js"), { style: rootViewStyle, pointerEvents: "box-none", children: tmp2 });
  return jsx(require("00253_RootTagContext.js") /* RootTagContext */.RootTagContext.Provider, { value: null, children: null });
};