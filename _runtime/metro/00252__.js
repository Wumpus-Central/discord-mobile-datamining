// === Module 252: ? ===

// Module 252
import Fragment from "Fragment" /* 21 */;
import ViewDefault from "View" /* 108 */;
import react2 from "react" /* 253 */;
import react from "react" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

const jsx = Fragment.jsx;
const root = get_hairlineWidth.create({ root: { flex: 1 } });

export default function _default(rootTag) {
  let WrapperComponent;
  let children;
  let rootViewStyle;
  ({ children, WrapperComponent, rootViewStyle } = rootTag);
  rootTag = rootTag.rootTag;
  const Provider = react2.RootTagContext.Provider;
  const obj3 = react2;
  ViewDefault;
  if (!rootViewStyle) {
    rootViewStyle = root.root;
  }
  return <Provider value={obj3.createRootTag(rootTag)}>{null}</Provider>;
};