// discord_app/design/components/Icon/native/ClipView.tsx
import CutoutBackgroundContext from "CutoutBackgroundContext.tsx";
import ClipViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
function SolidCutout(arg0) {
  ({ backgroundColor, cutout } = arg0);
  const style = [closure_10.solidCutout];
  if (cutout.shape === obj.Circle) {
    const size = { backgroundColor, borderRadius: cutout.size / 2, height: null, width: null, left: null, top: null };
    ({ size: obj.height, size: obj.width, x: obj.left, y: obj.top } = cutout);
    style.push(size);
  } else {
    const size1 = { backgroundColor, borderRadius: null, height: null, width: null, left: null, top: null };
    ({ cornerRadius: obj2.borderRadius, height: obj2.height, width: obj2.width, x: obj2.left, y: obj2.top } = cutout);
    style.push(size1);
    if (null != cutout.rotationDegrees) {
      obj = { transform: null };
      obj = { rotate: null };
      const _HermesInternal = HermesInternal;
      obj.rotate = "" + cutout.rotationDegrees + "deg";
      const items1 = [obj];
      obj.transform = items1;
      style.push(obj);
    }
  }
  return React4(React3, { style });
}
function SolidCutoutOverlay(arg0) {
  ({ backgroundColor: require, cutouts } = arg0);
  return closure_4(closure_3, {
    pointerEvents: "none",
    style: closure_10.solidCutoutContainer,
    children: cutouts.map((cutout, index) => React4(SolidCutout, { backgroundColor, cutout }, index)),
  });
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let CutoutShape = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_7 = [];
CutoutShape = { solidCutoutContainer: null, solidCutout: null };
CutoutShape = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
CutoutShape.solidCutoutContainer = CutoutShape;
CutoutShape.solidCutout = { position: "absolute" };
const styles = StyleSheet.create(CutoutShape);
const ClipViewNativeComponent = ReanimatedRexport.createAnimatedComponent(ClipViewNativeComponentDefault);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default function ClipView(cutouts) {
  cutouts = cutouts.cutouts;
  ({ children, style } = cutouts);
  const merged = Object.assign(cutouts, Object.assign({ children: 0, cutouts: 0, style: 0 }));
  obj = CutoutBackgroundContext;
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
      obj = { backgroundColor: cutoutBackgroundColor, cutouts };
      tmp8 = React4(SolidCutoutOverlay, obj);
    }
    tmp4 = tmp8;
    tmp5 = closure_7;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.cutouts = tmp5;
  obj.style = style;
  const items = [children, tmp4];
  obj.children = items;
  return hasOwnProperty(ClipViewNativeComponentDefault, obj);
}
export const ClipViewAnimated = ClipViewNativeComponent;
export { CutoutShape };
