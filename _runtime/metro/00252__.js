// _runtime/metro/00252__.js
import Fragment from "../react/00021_Fragment.js";
import ViewDefault from "../00108_View.js";
import react2 from "../00253_react.js";
import react from "../00019_react.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";

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
}
