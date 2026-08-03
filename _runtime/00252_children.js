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
  obj[0] = require(253) /* RootTagContext */.createRootTag(rootTag.rootTag);
  const obj3 = require(253) /* RootTagContext */;
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  obj[1] = jsx(importDefault(108), { style: rootViewStyle, pointerEvents: "box-none", children: tmp2 });
  return jsx(require(253) /* RootTagContext */.RootTagContext.Provider, { value: null, children: null });
};