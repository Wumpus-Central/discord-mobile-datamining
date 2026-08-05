import { children } from "00251_children.js";
import { RootTagContext } from "00253_RootTagContext.js";
import { 00038__ } from "metro/00038__.js";
// _runtime/00246_renderApplication.js
import noop from "noop";
import 00247__ from "metro/00247__.js";
import { jsx } from "jsxProd";

const require = arg1;

export default function renderApplication(arg0) {
  let RootComponent;
  let WrapperComponent;
  let debugName;
  let displayMode;
  let initialProps;
  let isLogBox;
  let rootTag;
  let rootViewStyle;
  let useOffscreen;
  ({ initialProps, rootTag, debugName, displayMode } = arg0);
  ({ RootComponent, WrapperComponent, rootViewStyle, isLogBox, useOffscreen } = arg0);
  00038__(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
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
  let tmp4Result = tmp4(children, obj);
  if (true === useOffscreen) {
    if (null != displayMode) {
      let str = "hidden";
      if (displayMode === tmp(257).VISIBLE) {
        str = "visible";
      }
      obj = { mode: null, children: null };
      obj[0] = str;
      obj[1] = tmp4Result;
      tmp4Result = tmp4(unstable_Activity.unstable_Activity, obj);
    }
  }
  tmp = importDefault;
  const tmp5 = children;
  const obj1 = { element: tmp4Result, rootTag: null };
  const obj4 = importAll(114);
  obj1[1] = RootTagContext /* RootTagContext */.createRootTag(rootTag);
  obj4.renderElement(obj1);
};