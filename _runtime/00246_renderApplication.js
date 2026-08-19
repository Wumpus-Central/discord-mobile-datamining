// _runtime/00246_renderApplication.js
import _modDef38 from "metro/00038__.js";
import renderElementAll from "00114_renderElement.js";
import childrenDefault from "00251_children.js";
import RootTagContext from "00253_RootTagContext.js";
import frozenDefault from "00257_frozen.js";
import noop from "00019_noop.js";
import 00247__ from "metro/00247__.js";
import { jsx } from "react/00021_jsxProd.js";

require = fn;

export default function renderApplication(arg0) {
  ({ initialProps, rootTag, debugName, displayMode } = arg0);
  ({ RootComponent, WrapperComponent, rootViewStyle, isLogBox, useOffscreen } = arg0);
  _modDef38(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  let obj = { rootTag, WrapperComponent, rootViewStyle, initialProps: null, internal_excludeLogBox: null, children: null };
  let frozen = initialProps;
  if (initialProps == null) {
    const _Object = Object;
    frozen = Object.freeze({});
  }
  obj[3] = frozen;
  obj[4] = isLogBox;
  obj = {};
  const merged = Object.assign(initialProps);
  obj.rootTag = rootTag;
  obj[5] = <RootComponent />;
  let tmp4Result = jsx(childrenDefault, {});
  if (true === useOffscreen) {
    if (null != displayMode) {
      let str = "hidden";
      if (displayMode === frozenDefault.VISIBLE) {
        str = "visible";
      }
      obj = { mode: null, children: null };
      obj[0] = str;
      obj[1] = tmp4Result;
      tmp4Result = <unstable_Activity.unstable_Activity mode={null}>{null}</unstable_Activity.unstable_Activity>;
    }
  }
  obj1 = { element: tmp4Result, rootTag: null };
  const obj4 = renderElementAll;
  obj1[1] = RootTagContext.createRootTag(rootTag);
  obj4.renderElement(obj1);
};