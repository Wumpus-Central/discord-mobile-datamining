// discord_app/design/components/Icon/native/ClipView.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import CutoutBackgroundContext from "CutoutBackgroundContext.tsx";
import ClipViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let StyleSheet;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj3;
let closure_3 = ["children", "cutouts", "style"];
({ StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const CutoutShape = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_9 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let backgroundColor;
      let cutout;
      let items1;
      const obj = react2;
      const cResult = obj.c(25);
      ({ backgroundColor, cutout } = arg0);
      if (cResult[0] === backgroundColor) {
        if (cResult[1] === cutout.cornerRadius) {
          if (cResult[2] === cutout.height) {
            if (cResult[3] === cutout.rotationDegrees) {
              if (cResult[4] === cutout.shape) {
                if (cResult[5] === cutout.size) {
                  if (cResult[6] === cutout.width) {
                    if (cResult[7] === cutout.x) {
                      let tmp2;
                      if (cResult[8] === cutout.y) {
                        tmp2 = cResult[9];
                      }
                      return tmp2;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const items = [closure_12.solidCutout];
      if (cutout.shape === obj.Circle) {
        const result = cutout.size / 2;
        if (cResult[10] === backgroundColor) {
          if (cResult[11] === cutout.size) {
            if (cResult[12] === cutout.x) {
              if (cResult[13] === cutout.y) {
                let tmp9;
                if (cResult[14] === result) {
                  tmp9 = cResult[15];
                }
                items.push(tmp9);
              }
            }
          }
        }
        size = { backgroundColor, borderRadius: result, height: null, width: null, left: null, top: null };
        ({ size: obj5.height, size: obj5.width, x: obj5.left, y: obj5.top } = cutout);
        cResult[10] = backgroundColor;
        cResult[11] = cutout.size;
        cResult[12] = cutout.x;
        cResult[13] = cutout.y;
        cResult[14] = result;
        cResult[15] = size;
        tmp9 = size;
      } else {
        if (cResult[16] === backgroundColor) {
          if (cResult[17] === cutout.cornerRadius) {
            if (cResult[18] === cutout.height) {
              if (cResult[19] === cutout.width) {
                if (cResult[20] === cutout.x) {
                  let tmp3;
                  if (cResult[21] === cutout.y) {
                    tmp3 = cResult[22];
                  }
                  items.push(tmp3);
                  if (null != cutout.rotationDegrees) {
                    let tmp6;
                    const _HermesInternal = HermesInternal;
                    const combined = "" + cutout.rotationDegrees + "deg";
                    if (cResult[23] !== combined) {
                      const obj3 = { transform: items1 };
                      items1 = [{ rotate: combined }];
                      const obj4 = { rotate: combined };
                      cResult[23] = combined;
                      cResult[24] = obj3;
                      tmp6 = obj3;
                    } else {
                      tmp6 = cResult[24];
                    }
                    items.push(tmp6);
                  }
                }
              }
            }
          }
        }
        const size1 = { backgroundColor, borderRadius: null, height: null, width: null, left: null, top: null };
        ({
          cornerRadius: obj2.borderRadius,
          height: obj2.height,
          width: obj2.width,
          x: obj2.left,
          y: obj2.top,
        } = cutout);
        cResult[16] = backgroundColor;
        cResult[17] = cutout.cornerRadius;
        cResult[18] = cutout.height;
        cResult[19] = cutout.width;
        cResult[20] = cutout.x;
        cResult[21] = cutout.y;
        cResult[22] = size1;
        tmp3 = size1;
      }
      const tmp11 = metroRequire(hasOwnProperty, { style: items });
      cResult[0] = backgroundColor;
      cResult[1] = cutout.cornerRadius;
      cResult[2] = cutout.height;
      cResult[3] = cutout.rotationDegrees;
      cResult[4] = cutout.shape;
      cResult[5] = cutout.size;
      cResult[6] = cutout.width;
      cResult[7] = cutout.x;
      cResult[8] = cutout.y;
      cResult[9] = tmp11;
      tmp2 = tmp11;
    }
  : (arg0) => {
      let backgroundColor;
      let cutout;
      let items1;
      ({ backgroundColor, cutout } = arg0);
      const style = [closure_12.solidCutout];
      if (cutout.shape === obj.Circle) {
        size = { backgroundColor, borderRadius: cutout.size / 2, height: null, width: null, left: null, top: null };
        ({ size: obj.height, size: obj.width, x: obj.left, y: obj.top } = cutout);
        style.push(size);
      } else {
        const size1 = { backgroundColor, borderRadius: null, height: null, width: null, left: null, top: null };
        ({
          cornerRadius: obj2.borderRadius,
          height: obj2.height,
          width: obj2.width,
          x: obj2.left,
          y: obj2.top,
        } = cutout);
        style.push(size1);
        if (null != cutout.rotationDegrees) {
          const obj3 = { transform: items1 };
          const _HermesInternal = HermesInternal;
          const push = style.push;
          items1 = [{ rotate: "" + cutout.rotationDegrees + "deg" }];
          const obj4 = { rotate: "" + cutout.rotationDegrees + "deg" };
          push(obj3);
        }
      }
      return metroRequire(hasOwnProperty, { style });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (backgroundColor) => {
      let tmp3;
      let obj = backgroundColor(576);
      const cResult = obj.c(7);
      backgroundColor = backgroundColor.backgroundColor;
      const cutouts = backgroundColor.cutouts;
      if (cResult[0] === backgroundColor) {
        let tmp2;
        let tmp5;
        if (cResult[1] === cutouts) {
          tmp2 = cResult[2];
        }
        if (cResult[5] !== tmp2) {
          const obj2 = { pointerEvents: "none", style: closure_12.solidCutoutContainer, children: tmp2 };
          const tmp9 = closure_6(closure_5, obj2);
          cResult[5] = tmp2;
          cResult[6] = tmp9;
          tmp5 = tmp9;
        } else {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
      if (cResult[3] !== backgroundColor) {
        const fn = function u(cutout, id) {
          const obj = { backgroundColor, cutout };
          return metroRequire(closure_10, obj, id);
        };
        cResult[3] = backgroundColor;
        cResult[4] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[4];
      }
      const mapped = cutouts.map(tmp3);
      cResult[0] = backgroundColor;
      cResult[1] = cutouts;
      cResult[2] = mapped;
      tmp2 = mapped;
    }
  : (arg0) => {
      let backgroundColor;
      let cutouts;
      ({ backgroundColor: require, cutouts } = arg0);
      let obj = {
        pointerEvents: "none",
        style: closure_12.solidCutoutContainer,
        children: cutouts.map((cutout, index) => {
          const obj = { backgroundColor: require, cutout };
          return metroRequire(closure_10, obj, index);
        }),
      };
      return closure_6(closure_5, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let obj2 = { solidCutoutContainer: obj3, solidCutout: { position: "absolute" } };
obj3 = {};
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let arr;
      let children;
      let cutouts;
      let items;
      let style;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(14);
      if (cResult[0] !== arg0) {
        ({ children, cutouts, style } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = cutouts;
        cResult[3] = tmp9;
        cResult[4] = style;
        tmp6 = style;
        tmp5 = tmp9;
        arr = cutouts;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        arr = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const tmpResult = CutoutBackgroundContext;
      const cutoutBackgroundColor = tmpResult.useCutoutBackgroundColor();
      let tmp11 = null;
      let tmp12 = arr;
      if (null != cutoutBackgroundColor) {
        let tmp15 = null;
        const tmp14 = null != arr && arr.length > 0;
        if (tmp14) {
          if (cResult[5] === cutoutBackgroundColor) {
            let tmp16;
            if (cResult[6] === arr) {
              tmp16 = cResult[7];
            }
            tmp15 = tmp16;
          }
          const obj2 = { backgroundColor: cutoutBackgroundColor, cutouts: arr };
          const tmp19 = metroRequire(closure_11, obj2);
          cResult[5] = cutoutBackgroundColor;
          cResult[6] = arr;
          cResult[7] = tmp19;
          tmp16 = tmp19;
        }
        tmp11 = tmp15;
        tmp12 = closure_9;
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp12) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp11) {
              let tmp20;
              if (cResult[12] === tmp6) {
                tmp20 = cResult[13];
              }
              return tmp20;
            }
          }
        }
      }
      const obj3 = { cutouts: tmp12, style: tmp6, children: items };
      const tmp21 = ClipViewNativeComponentDefault;
      const merged = Object.assign(tmp5);
      items = [tmp4, tmp11];
      const tmp23 = metroImportDefault(tmp21, obj3);
      cResult[8] = tmp4;
      cResult[9] = tmp12;
      cResult[10] = tmp5;
      cResult[11] = tmp11;
      cResult[12] = tmp6;
      cResult[13] = tmp23;
      tmp20 = tmp23;
    }
  : (cutouts) => {
      let children;
      let items;
      let style;
      cutouts = cutouts.cutouts;
      ({ children, style } = cutouts);
      const merged = Object.assign(cutouts, Object.assign({ children: 0, cutouts: 0, style: 0 }));
      const obj = CutoutBackgroundContext;
      const cutoutBackgroundColor = obj.useCutoutBackgroundColor();
      let tmp4 = null;
      let tmp5 = cutouts;
      if (null != cutoutBackgroundColor) {
        let tmp8 = null;
        const tmp7 = null != cutouts && cutouts.length > 0;
        if (tmp7) {
          const obj2 = { backgroundColor: cutoutBackgroundColor, cutouts };
          tmp8 = metroRequire(closure_11, obj2);
        }
        tmp4 = tmp8;
        tmp5 = closure_9;
      }
      const obj3 = { cutouts: tmp5, style, children: items };
      const tmp11 = ClipViewNativeComponentDefault;
      const merged1 = Object.assign(merged);
      items = [children, tmp4];
      return metroImportDefault(tmp11, obj3);
    };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = create(obj2);
const ClipViewNativeComponent = ReanimatedRexport.createAnimatedComponent(ClipViewNativeComponentDefault);
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default tmp5;
export const ClipViewAnimated = ClipViewNativeComponent;
export { CutoutShape };
