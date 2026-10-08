// discord_app/design/components/Icon/native/ClipView.tsx
import c from "../../../../../_runtime/00576_c.js";
import CutoutBackgroundContext from "CutoutBackgroundContext.tsx";
import ClipViewNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["children", "cutouts", "style"];
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const CutoutShape = { Circle: "circle", RoundedRect: "rounded-rect" };
let closure_9 = [];
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SolidCutout(arg0) {
      const obj = c;
      const cResult = obj.c(25);
      ({ backgroundColor: x, cutout } = arg0);
      if (cResult[0] === x) {
        if (cResult[1] === cutout.cornerRadius) {
          if (cResult[2] === cutout.height) {
            if (cResult[3] === cutout.rotationDegrees) {
              if (cResult[4] === cutout.shape) {
                if (cResult[5] === cutout.size) {
                  if (cResult[6] === cutout.width) {
                    if (cResult[7] === cutout.x) {
                      if (cResult[8] === cutout.y) {
                        return cResult[9];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const items = [closure_12.solidCutout];
      if (cutout.shape !== obj.Circle) {
        if (cResult[16] === x) {
          if (cResult[17] === cutout.cornerRadius) {
            if (cResult[18] === cutout.height) {
              if (cResult[19] === cutout.width) {
                if (cResult[20] === cutout.x) {
                  if (cResult[21] === cutout.y) {
                    let tmp2 = cResult[22];
                  }
                  items.push(tmp2);
                  if (null != cutout.rotationDegrees) {
                    const _HermesInternal = HermesInternal;
                    const combined = "" + cutout.rotationDegrees + "deg";
                    if (cResult[23] !== combined) {
                      const obj3 = { transform: null };
                      const obj4 = { rotate: combined };
                      const items1 = [obj4];
                      obj3.transform = items1;
                      cResult[23] = combined;
                      cResult[24] = obj3;
                      let tmp5 = obj3;
                    } else {
                      tmp5 = cResult[24];
                    }
                    items.push(tmp5);
                  }
                  const obj5 = { style: items };
                  const tmp12 = timestampProducer(hasOwnProperty, obj5);
                  cResult[0] = x;
                  cResult[1] = cutout.cornerRadius;
                  cResult[2] = cutout.height;
                  cResult[3] = cutout.rotationDegrees;
                  cResult[4] = cutout.shape;
                  cResult[5] = cutout.size;
                  ({ width: tmp[6], x } = cutout);
                  cResult[7] = x;
                  cutout = cutout.y;
                  cResult[8] = cutout;
                  cResult[9] = tmp12;
                }
              }
            }
          }
        }
        const size = { backgroundColor: x, borderRadius: null, height: null, width: null, left: null, top: null };
        ({
          cornerRadius: obj2.borderRadius,
          height: obj2.height,
          width: obj2.width,
          x: obj2.left,
          y: obj2.top,
        } = cutout);
        cResult[16] = x;
        cResult[17] = cutout.cornerRadius;
        cResult[18] = cutout.height;
        cResult[19] = cutout.width;
        cResult[20] = cutout.x;
        cResult[21] = cutout.y;
        cResult[22] = size;
        tmp2 = size;
      }
      const result = cutout.size / 2;
      if (cResult[10] === x) {
        if (cResult[11] === cutout.size) {
          if (cResult[12] === cutout.x) {
            if (cResult[13] === cutout.y) {
              if (cResult[14] === result) {
                let tmp8 = cResult[15];
              }
              items.push(tmp8);
            }
          }
        }
      }
      const size1 = {
        backgroundColor: x,
        borderRadius: result,
        height: cutout.size,
        width: cutout.size,
        left: cutout.x,
        top: cutout.y,
      };
      cResult[10] = x;
      cResult[11] = cutout.size;
      cResult[12] = cutout.x;
      cResult[13] = cutout.y;
      cResult[14] = result;
      cResult[15] = size1;
      tmp8 = size1;
    }
  : function SolidCutout(arg0) {
      ({ backgroundColor, cutout } = arg0);
      const style = [closure_12.solidCutout];
      if (cutout.shape === obj.Circle) {
        const size = {
          backgroundColor,
          borderRadius: cutout.size / 2,
          height: null,
          width: null,
          left: null,
          top: null,
        };
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
          const obj3 = { transform: null };
          const obj4 = { rotate: null };
          const _HermesInternal = HermesInternal;
          obj4.rotate = "" + cutout.rotationDegrees + "deg";
          const items1 = [obj4];
          obj3.transform = items1;
          style.push(obj3);
        }
      }
      return timestampProducer(hasOwnProperty, { style });
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SolidCutoutOverlay(backgroundColor) {
      const cResult = backgroundColor(576).c(7);
      backgroundColor = backgroundColor.backgroundColor;
      const cutouts = backgroundColor.cutouts;
      if (cResult[0] === backgroundColor) {
        if (cResult[1] === cutouts) {
          if (cResult[5] !== cResult[2]) {
            const obj2 = { pointerEvents: "none", style: closure_12.solidCutoutContainer, children: tmp2 };
            const tmp9 = closure_6(closure_5, obj2);
            cResult[5] = tmp2;
            cResult[6] = tmp9;
            let tmp5 = tmp9;
          } else {
            tmp5 = cResult[6];
          }
          return tmp5;
        }
      }
      if (cResult[3] !== backgroundColor) {
        const fn = function u(cutout, arg1) {
          return timestampProducer(closure_10, { backgroundColor, cutout }, arg1);
        };
        cResult[3] = backgroundColor;
        cResult[4] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[4];
      }
      const mapped = cutouts.map(tmp3);
      cResult[0] = backgroundColor;
      cResult[1] = cutouts;
      cResult[2] = mapped;
      const obj = backgroundColor(576);
    }
  : function SolidCutoutOverlay(arg0) {
      ({ backgroundColor: require, cutouts } = arg0);
      return closure_6(closure_5, {
        pointerEvents: "none",
        style: closure_12.solidCutoutContainer,
        children: cutouts.map((cutout, index) => timestampProducer(closure_10, { backgroundColor, cutout }, index)),
      });
    };
ReactCompilerGating = fn(558);
let obj5 = { solidCutoutContainer: null, solidCutout: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.solidCutoutContainer = {};
obj5.solidCutout = { position: "absolute" };
const styles = StyleSheet.create(obj5);
const ClipViewNativeComponent = ReanimatedRexport.createAnimatedComponent(ClipViewNativeComponentDefault);
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Icon/native/ClipView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ClipView(arg0) {
      const cResult = c.c(14);
      if (cResult[0] !== arg0) {
        ({ children, cutouts, style } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = cutouts;
        cResult[3] = tmp9;
        cResult[4] = style;
        let tmp6 = style;
        let tmp5 = tmp9;
        let arr = cutouts;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        arr = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const cutoutBackgroundColor = CutoutBackgroundContext.useCutoutBackgroundColor();
      let tmp11 = null;
      let tmp12 = arr;
      if (null != cutoutBackgroundColor) {
        let tmp14 = null != arr;
        if (tmp14) {
          tmp14 = arr.length > 0;
        }
        if (!tmp14) {
          tmp11 = null;
          tmp12 = closure_9;
        } else {
          if (cResult[5] === cutoutBackgroundColor) {
          }
          const obj2 = { backgroundColor: cutoutBackgroundColor, cutouts: arr };
          const tmp19 = timestampProducer(closure_11, obj2);
          cResult[5] = cutoutBackgroundColor;
          cResult[6] = arr;
          cResult[7] = tmp19;
        }
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp12) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === tmp6) {
                let tmp21 = cResult[13];
              }
              return tmp21;
            }
          }
        }
      }
      const obj3 = {};
      const tmpResult = CutoutBackgroundContext;
      const merged = Object.assign(tmp5);
      obj3.cutouts = tmp12;
      obj3.style = tmp6;
      const items = [tmp4, tmp11];
      obj3.children = items;
      const tmp24 = React5(ClipViewNativeComponentDefault, obj3);
      cResult[8] = tmp4;
      cResult[9] = tmp12;
      cResult[10] = tmp5;
      cResult[11] = tmp11;
      cResult[12] = tmp6;
      cResult[13] = tmp24;
      tmp21 = tmp24;
    }
  : function ClipView(cutouts) {
      cutouts = cutouts.cutouts;
      ({ children, style } = cutouts);
      const merged = Object.assign(cutouts, Object.assign({ children: 0, cutouts: 0, style: 0 }));
      const cutoutBackgroundColor = CutoutBackgroundContext.useCutoutBackgroundColor();
      let tmp4 = null;
      let tmp5 = cutouts;
      if (null != cutoutBackgroundColor) {
        let tmp7 = null != cutouts;
        if (tmp7) {
          tmp7 = cutouts.length > 0;
        }
        let tmp8 = null;
        if (tmp7) {
          const obj2 = { backgroundColor: cutoutBackgroundColor, cutouts };
          tmp8 = timestampProducer(closure_11, obj2);
        }
        tmp4 = tmp8;
        tmp5 = closure_9;
      }
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.cutouts = tmp5;
      obj3.style = style;
      const items = [children, tmp4];
      obj3.children = items;
      return React5(ClipViewNativeComponentDefault, obj3);
    };
export const ClipViewAnimated = ClipViewNativeComponent;
export { CutoutShape };
