import noop from "noop";
import module_247 from "module_247";
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
  importDefault(38)(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
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
  let tmp4Result = tmp4(importDefault(251), obj);
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
  const tmp5 = importDefault(251);
  const obj1 = { element: tmp4Result, rootTag: null };
  const obj4 = importAll(114);
  obj1[1] = require(253) /* RootTagContext */.createRootTag(rootTag);
  obj4.renderElement(obj1);
};