// discord_app/design/components/Icon/native/ClipView.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult from "module_4146";
import { __INTERNAL_VIEW_CONFIG } from "../../../../../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx";
import { useCutoutBackgroundColor } from "CutoutBackgroundContext.tsx";

let StyleSheet;
let c3;
let c4;
let c5;
const require = arg1;
function SolidCutout(arg0) {
  let backgroundColor;
  let cutout;
  ({ backgroundColor, cutout } = arg0);
  const style = [closure_10.solidCutout];
  if (cutout.shape === obj.Circle) {
    obj = { backgroundColor: null, borderRadius: null, height: null, width: null, left: null, top: null };
    obj[0] = backgroundColor;
    obj[1] = cutout.size / 2;
    ({ size: obj[2], size: obj[3], x: obj[4], y: obj[5] } = cutout);
    style.push(obj);
  } else {
    obj = { backgroundColor: null, borderRadius: null, height: null, width: null, left: null, top: null };
    obj[0] = backgroundColor;
    ({ cornerRadius: obj2[1], height: obj2[2], width: obj2[3], x: obj2[4], y: obj2[5] } = cutout);
    style.push(obj);
    if (null != cutout.rotationDegrees) {
      obj = { transform: null };
      const obj1 = { rotate: null };
      const _HermesInternal = HermesInternal;
      obj1[0] = "" + cutout.rotationDegrees + "deg";
      const items1 = [obj1];
      obj[0] = items1;
      style.push(obj);
    }
  }
  return callback(closure_3, { style });
}
function SolidCutoutOverlay(arg0) {
  let cutouts;
  let require;
  ({ backgroundColor: require, cutouts } = arg0);
  return callback(closure_3, { pointerEvents: "none", style: closure_10.solidCutoutContainer, children: cutouts.map((cutout) => outer1_4(outer1_8, { backgroundColor: closure_0, cutout }, arg1)) });
}
({ StyleSheet, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_7 = [];
obj = { solidCutoutContainer: null, solidCutout: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
obj[1] = { position: "absolute" };
const styles = StyleSheet.create(obj);
const result = require("jsxProd").fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default function ClipView(cutouts) {
  let children;
  let style;
  cutouts = cutouts.cutouts;
  ({ children, style } = cutouts);
  const merged = Object.assign(cutouts, Object.create(null));
  let obj = useCutoutBackgroundColor;
  const cutoutBackgroundColor = obj.useCutoutBackgroundColor();
  let tmp4 = null;
  let tmp5 = cutouts;
  if (null != cutoutBackgroundColor) {
    let tmp7 = null != cutouts;
    if (tmp7) {
      tmp7 = cutouts.length > 0;
    }
    let tmp8 = null;
    if (tmp7) {
      obj = { backgroundColor: null, cutouts: null };
      obj[0] = cutoutBackgroundColor;
      obj[1] = cutouts;
      tmp8 = callback(SolidCutoutOverlay, obj);
    }
    tmp4 = tmp8;
    tmp5 = closure_7;
    const tmp6 = closure_7;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.cutouts = tmp5;
  obj.style = style;
  const items = [children, tmp4];
  obj.children = items;
  return callback2(__INTERNAL_VIEW_CONFIG, obj);
};
export const ClipViewAnimated = animatedComponent;
export const CutoutShape = obj;