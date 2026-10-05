// _runtime/00246_renderApplication.js
import Fragment from "react/00021_Fragment.js";
import _modDef38 from "metro/00038__.js";
import renderElementAll from "00114_renderElement.js";
import reactDefault from "00251_react.js";
import react2 from "00253_react.js";
import frozenDefault from "00257_frozen.js";
import react from "00019_react.js";
import 00247__ from "metro/00247__.js";

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