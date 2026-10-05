// discord_app/design/components/Pile/native/Pile.native.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import ClipView from "../../Icon/native/ClipView.tsx";
import PileOverflow from "PileOverflow.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const ClipViewDefault = ClipView;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ pile: { flexDirection: "row" } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (size) {
      let arr2;
      let gap;
      let shape;
      let tmp4;
      let tmp8;
      let tmp9;
      let obj = shape(gap[5]);
      const cResult = obj.c(21);
      ({ "aria-label": tmp4, shape } = size);
      size = size.size;
      gap = size.gap;
      const depthX = size.depthX;
      const depthY = size.depthY;
      const children = size.children;
      const tmp5 = closure_6();
      if (cResult[0] !== children) {
        let tmp6 = depthX;
        const Children = depthX.Children;
        const toArrayResult = Children.toArray(children);
        const found = toArrayResult.filter(tmp(tmp2[6]).isNotNullish);
        cResult[0] = children;
        cResult[1] = found;
        arr2 = found;
      } else {
        arr2 = cResult[1];
      }
      const length = arr2.length;
      const tmpResult = shape(gap[7]);
      if (tmpResult.isArray(size)) {
        if (size.length !== length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Pile: size array must have the same number of elements as children");
          throw error;
        }
      }
      if (cResult[2] === length) {
        if (cResult[3] === children) {
          if (cResult[4] === depthX) {
            if (cResult[5] === depthY) {
              if (cResult[6] === gap) {
                if (cResult[7] === shape) {
                  if (cResult[8] === size) {
                    tmp9 = cResult[9];
                  }
                  if (cResult[17] === tmp4) {
                    if (cResult[18] === tmp5.pile) {
                      let tmp13;
                      if (cResult[19] === tmp9) {
                        tmp13 = cResult[20];
                      }
                      return tmp13;
                    }
                  }
                  let obj2 = { style: tmp8, accessible: true, "aria-label": tmp4, children: tmp9 };
                  const tmp16 = length(depthY, obj2);
                  cResult[17] = tmp4;
                  cResult[18] = tmp5.pile;
                  cResult[19] = tmp9;
                  cResult[20] = tmp16;
                  tmp13 = tmp16;
                }
              }
            }
          }
        }
      }
      if (cResult[10] === length) {
        if (cResult[11] === depthX) {
          if (cResult[12] === depthY) {
            if (cResult[13] === gap) {
              if (cResult[14] === shape) {
                let tmp10;
                if (cResult[15] === size) {
                  tmp10 = cResult[16];
                }
                const Children1 = depthX.Children;
                const mapped = Children1.map(children, tmp10);
                cResult[2] = length;
                cResult[3] = children;
                cResult[4] = depthX;
                let num6 = 5;
                cResult[5] = depthY;
                let num7 = 6;
                cResult[6] = gap;
                let num8 = 7;
                cResult[7] = shape;
                cResult[8] = size;
                cResult[9] = mapped;
                tmp9 = mapped;
              }
            }
          }
        }
      }
      const fn = function x(type, id) {
        let result;
        let result1;
        let result2;
        let result3;
        if (react.isValidElement(type)) {
          let obj4;
          let tmp6 = size;
          const obj = _mod12;
          if (obj.isArray(size)) {
            tmp6 = tmp5[id];
          }
          let tmp8;
          if (id < length - 1) {
            let tmp9 = tmp5;
            const tmp3Result = _mod12;
            if (tmp3Result.isArray(size)) {
              tmp9 = tmp5[id + 1];
            }
            if (ClipView.CutoutShape.Circle === shape) {
              const point = { shape, x: result, y: result1, size: tmp9 + 2 * gap };
              if (null == depthX) {
                result = -gap;
              } else {
                result = tmp6 * (1 - tmp20);
              }
              if (null == depthY) {
                result1 = -gap;
              } else {
                result1 = tmp6 * (1 - tmp24);
              }
              tmp8 = point;
            } else if (ClipView.CutoutShape.RoundedRect === shape) {
              size = {
                shape,
                x: result2,
                y: result3,
                width: tmp9 + 2 * gap,
                height: tmp9 + 2 * gap,
                cornerRadius: tmp9 / 3 + gap,
              };
              if (null == depthX) {
                result2 = -gap;
              } else {
                result2 = tmp6 * (1 - tmp12);
              }
              if (null == depthY) {
                result3 = -gap;
              } else {
                result3 = tmp6 * (1 - tmp16);
              }
              tmp8 = size;
            } else {
              const tmp3Result3 = GlobalUtils;
              tmp3Result3.assertNever(shape);
            }
          }
          let num6 = 0;
          let num7 = 0;
          if (id > 0) {
            let sum;
            let tmp28 = tmp5;
            const tmp3Result4 = _mod12;
            if (tmp3Result4.isArray(size)) {
              tmp28 = tmp5[id - 1];
            }
            if (null == depthX) {
              sum = -tmp28;
            } else {
              sum = -tmp28 * tmp29 + gap;
            }
            let num8 = 0;
            if (null != depthY) {
              num8 = id * (tmp28 - tmp28 * depthY + gap);
            }
            num6 = num8;
            num7 = sum;
          }
          const items = [{ height: tmp6, marginLeft: num7, marginTop: num6 }];
          const obj2 = { height: tmp6, marginLeft: num7, marginTop: num6 };
          if (type.type === PileOverflow.PileOverflow) {
            obj4 = { minWidth: tmp6 };
            const obj3 = { minWidth: tmp6 };
          } else {
            obj4 = { width: tmp6 };
          }
          items[1] = obj4;
          let tmp34Result = type;
          if (null != tmp8) {
            const items1 = [tmp8];
            tmp34Result = jsx(ClipViewDefault, { cutouts: items1, children: type });
          }
          return (
            <View key={id} style={items}>
              {tmp34Result}
            </View>
          );
        } else {
          return null;
        }
      };
      cResult[10] = length;
      cResult[11] = depthX;
      cResult[12] = depthY;
      cResult[13] = gap;
      cResult[14] = shape;
      cResult[15] = size;
      cResult[16] = fn;
      tmp10 = fn;
    }
  : function (aria_label) {
      let Children1;
      let children;
      ({ shape: require, size } = aria_label);
      ({ gap: dependencyMap, depthX: react, depthY: View, children } = aria_label);
      const prop = aria_label["aria-label"];
      const Children = react.Children;
      const tmp2 = closure_6();
      const toArrayResult = Children.toArray(children);
      const length = toArrayResult.filter(GlobalUtils.isNotNullish).length;
      let obj = _mod12;
      if (obj.isArray(size)) {
        if (size.length !== length) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Pile: size array must have the same number of elements as children");
          let tmp6 = error;
          throw error;
        }
      }
      let obj2 = {
        style: tmp2.pile,
        accessible: true,
        "aria-label": prop,
        children: Children1.map(children, (type, id) => {
          let result;
          let result1;
          let result2;
          let result3;
          if (react.isValidElement(type)) {
            let obj4;
            let tmp6 = size;
            const obj = _mod12;
            if (obj.isArray(size)) {
              tmp6 = tmp5[id];
            }
            let tmp8;
            if (id < length - 1) {
              let tmp9 = tmp5;
              const tmp3Result = _mod12;
              if (tmp3Result.isArray(size)) {
                tmp9 = tmp5[id + 1];
              }
              if (ClipView.CutoutShape.Circle === require) {
                const point = { shape: require, x: result, y: result1, size: tmp9 + 2 * dependencyMap };
                if (null == react) {
                  result = -dependencyMap;
                } else {
                  result = tmp6 * (1 - tmp20);
                }
                if (null == View) {
                  result1 = -dependencyMap;
                } else {
                  result1 = tmp6 * (1 - tmp24);
                }
                tmp8 = point;
              } else if (ClipView.CutoutShape.RoundedRect === require) {
                size = {
                  shape: require,
                  x: result2,
                  y: result3,
                  width: tmp9 + 2 * dependencyMap,
                  height: tmp9 + 2 * dependencyMap,
                  cornerRadius: tmp9 / 3 + dependencyMap,
                };
                if (null == react) {
                  result2 = -dependencyMap;
                } else {
                  result2 = tmp6 * (1 - tmp12);
                }
                if (null == View) {
                  result3 = -dependencyMap;
                } else {
                  result3 = tmp6 * (1 - tmp16);
                }
                tmp8 = size;
              } else {
                const tmp3Result3 = GlobalUtils;
                tmp3Result3.assertNever(require);
              }
            }
            let num6 = 0;
            let num7 = 0;
            if (id > 0) {
              let sum;
              let tmp28 = tmp5;
              const tmp3Result4 = _mod12;
              if (tmp3Result4.isArray(size)) {
                tmp28 = tmp5[id - 1];
              }
              if (null == react) {
                sum = -tmp28;
              } else {
                sum = -tmp28 * tmp29 + dependencyMap;
              }
              let num8 = 0;
              if (null != View) {
                num8 = id * (tmp28 - tmp28 * View + dependencyMap);
              }
              num6 = num8;
              num7 = sum;
            }
            const items = [{ height: tmp6, marginLeft: num7, marginTop: num6 }];
            const obj2 = { height: tmp6, marginLeft: num7, marginTop: num6 };
            if (type.type === PileOverflow.PileOverflow) {
              obj4 = { minWidth: tmp6 };
              const obj3 = { minWidth: tmp6 };
            } else {
              obj4 = { width: tmp6 };
            }
            items[1] = obj4;
            let tmp34Result = type;
            if (null != tmp8) {
              const items1 = [tmp8];
              tmp34Result = jsx(ClipViewDefault, { cutouts: items1, children: type });
            }
            return (
              <View key={id} style={items}>
                {tmp34Result}
              </View>
            );
          } else {
            return null;
          }
        }),
      };
      Children1 = react.Children;
      return length(View, obj2);
    };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = tmp2;
