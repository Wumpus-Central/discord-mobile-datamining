// === Module 246: renderApplication ===

// Module 246 (renderApplication)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import renderElementAll from "renderElement" /* 114 */;
import reactDefault from "react" /* 251 */;
import react2 from "react" /* 253 */;
import frozenDefault from "frozen" /* 257 */;
import react from "react" /* 19 */;
import module_247 from "module_247" /* 247 */;

const jsx = Fragment.jsx;

export default function renderApplication(arg0) {
  let RootComponent;
  let WrapperComponent;
  let debugName;
  let displayMode;
  let initialProps;
  let isLogBox;
  let obj5;
  let rootTag;
  let rootViewStyle;
  let useOffscreen;
  ({ initialProps, rootTag, debugName, displayMode } = arg0);
  ({ RootComponent, WrapperComponent, rootViewStyle, isLogBox, useOffscreen } = arg0);
  _modDef38(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  let frozen = initialProps;
  reactDefault;
  if (initialProps == null) {
    const _Object = Object;
    frozen = Object.freeze({});
  }
  const merged = Object.assign(initialProps);
  const tmp4Result = <tmp5 rootTag={rootTag} WrapperComponent={WrapperComponent} rootViewStyle={rootViewStyle} initialProps={frozen} internal_excludeLogBox={isLogBox}>{null}</tmp5>;
  let tmp4Result2 = tmp4Result;
  if (true === useOffscreen) {
    tmp4Result2 = tmp4Result;
    if (null != displayMode) {
      const unstable_Activity = react.unstable_Activity;
      let str = "hidden";
      if (displayMode === frozenDefault.VISIBLE) {
        str = "visible";
      }
      tmp4Result2 = <unstable_Activity mode={str}>{tmp4Result}</unstable_Activity>;
    }
  }
  const obj4 = { element: tmp4Result2, rootTag: obj5.createRootTag(rootTag) };
  const renderElement = renderElementAll.renderElement;
  renderElementAll;
  obj5 = react2;
  renderElement(obj4);
};