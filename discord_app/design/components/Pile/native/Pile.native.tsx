// === Module 11596: Pile ===

// Module 11596 (Pile)
import _mod12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ClipView from "ClipView" /* 9016 */;
import PileOverflow from "PileOverflow" /* 11597 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ pile: { flexDirection: "row" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = ReactCompilerGating.isReactCompilerEnabled() ? (function Pile(size) {
  const cResult = shape(gap[5]).c(21);
  ({ aria-label: tmp4, shape } = size);
  size = size.size;
  gap = size.gap;
  const depthX = size.depthX;
  const depthY = size.depthY;
  const children = size.children;
  const tmp5 = closure_6();
  if (cResult[0] !== children) {
    const Children = depthX.Children;
    const found = Children.toArray(children).filter(tmp(tmp2[6]).isNotNullish);
    cResult[0] = children;
    cResult[1] = found;
    let arr2 = found;
    const toArrayResult = Children.toArray(children);
  } else {
    arr2 = cResult[1];
  }
  const length = arr2.length;
  const obj = shape(gap[5]);
  if (tmpResult.isArray(size)) {
    if (size.length !== length) {
      const _Error = Error;
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
                if (cResult[17] === tmp4) {
                  if (cResult[18] === tmp5.pile) {
                    if (cResult[19] === tmp9) {
                      let tmp14 = cResult[20];
                    }
                    return tmp14;
                  }
                }
                let obj2 = { style: tmp8, accessible: true, "aria-label": tmp4, children: cResult[9] };
                const tmp17 = length(depthY, obj2);
                cResult[17] = tmp4;
                cResult[18] = tmp5.pile;
                cResult[19] = cResult[9];
                cResult[20] = tmp17;
                tmp14 = tmp17;
              }
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
            if (cResult[15] === size) {
              let tmp10 = cResult[16];
            }
            const Children1 = depthX.Children;
            const mapped = Children1.map(children, tmp10);
            cResult[2] = length;
            cResult[3] = children;
            cResult[4] = depthX;
            cResult[5] = depthY;
            cResult[6] = gap;
            cResult[7] = shape;
            cResult[8] = size;
            cResult[9] = mapped;
          }
        }
      }
    }
  }
  const fn = function x(type, id) {
    if (noop.isValidElement(type)) {
      let tmp6 = size;
      if (obj.isArray(size)) {
        tmp6 = tmp5[id];
      }
      let tmp8;
      if (id < length - 1) {
        let sum = tmp5;
        if (tmp3Result.isArray(tmp5)) {
          sum = tmp5[id + 1];
        }
        if (ClipView.CutoutShape.Circle === shape) {
          const point = { shape, x: null, y: null, size: null };
          if (null == depthX) {
            let result = -gap;
          } else {
            result = tmp6 * (1 - tmp20);
          }
          point.x = result;
          if (null == depthY) {
            let result1 = -gap;
          } else {
            result1 = tmp6 * (1 - tmp24);
          }
          point.y = result1;
          sum = sum + 2 * gap;
          point.size = sum;
        } else if (ClipView.CutoutShape.RoundedRect === shape) {
          size = { shape, x: null, y: null, width: null, height: null, cornerRadius: null };
          if (null == depthX) {
            let result2 = -gap;
          } else {
            result2 = tmp6 * (1 - tmp12);
          }
          size.x = result2;
          if (null == depthY) {
            let result3 = -gap;
          } else {
            result3 = tmp6 * (1 - tmp16);
          }
          size.y = result3;
          size.width = sum + 2 * gap;
          size.height = sum + 2 * gap;
          size.cornerRadius = sum / 3 + gap;
          tmp8 = size;
        } else {
          GlobalUtils.assertNever(shape);
          const tmp3Result3 = GlobalUtils;
        }
        tmp3Result = _mod12;
      }
      let num6 = 0;
      let num7 = 0;
      if (id > 0) {
        let tmp29 = tmp5;
        if (tmp3Result4.isArray(tmp5)) {
          tmp29 = tmp5[id - 1];
        }
        if (null == depthX) {
          let sum1 = -tmp29;
        } else {
          sum1 = -tmp29 * tmp30 + gap;
        }
        let num8 = 0;
        if (null != depthY) {
          num8 = id * (tmp29 - tmp29 * depthY + gap);
        }
        num6 = num8;
        num7 = sum1;
        tmp3Result4 = _mod12;
      }
      const obj2 = { height: tmp6, marginLeft: num7, marginTop: num6 };
      const items = [obj2, ];
      if (type.type === PileOverflow.PileOverflow) {
        const obj3 = { minWidth: tmp6 };
        let obj4 = obj3;
      } else {
        obj4 = { width: tmp6 };
      }
      const obj5 = { style: null, children: null };
      items[1] = obj4;
      obj5.style = items;
      let tmp35Result = type;
      if (null != tmp8) {
        const obj6 = { cutouts: null, children: null };
        const items1 = [tmp8];
        obj6.cutouts = items1;
        obj6.children = type;
        tmp35Result = jsx(ClipViewDefault, { cutouts: null, children: null });
      }
      obj5.children = tmp35Result;
      return <View key={id} style={null}>{null}</View>;
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
}) : (function Pile(aria_label) {
  ({ shape: require, size } = aria_label);
  ({ gap: dependencyMap, depthX: noop, depthY: View, children } = aria_label);
  const Children = noop.Children;
  const tmp = closure_6();
  const length = Children.toArray(children).filter(GlobalUtils.isNotNullish).length;
  const toArrayResult = Children.toArray(children);
  if (obj.isArray(size)) {
    if (size.length !== length) {
      const _Error = Error;
      const error = new Error("Pile: size array must have the same number of elements as children");
      throw error;
    }
  }
  let obj2 = { style: tmp.pile, accessible: true, "aria-label": aria_label["aria-label"], children: null };
  const Children1 = noop.Children;
  obj2.children = Children1.map(children, (type, id) => {
    if (noop.isValidElement(type)) {
      let tmp6 = size;
      if (obj.isArray(size)) {
        tmp6 = tmp5[id];
      }
      let tmp8;
      if (id < length - 1) {
        let sum = tmp5;
        if (tmp3Result.isArray(tmp5)) {
          sum = tmp5[id + 1];
        }
        if (ClipView.CutoutShape.Circle === shape) {
          const point = { shape, x: null, y: null, size: null };
          if (null == closure_1_3) {
            let result = -dependencyMap;
          } else {
            result = tmp6 * (1 - tmp20);
          }
          point.x = result;
          if (null == View) {
            let result1 = -dependencyMap;
          } else {
            result1 = tmp6 * (1 - tmp24);
          }
          point.y = result1;
          sum = sum + 2 * dependencyMap;
          point.size = sum;
        } else if (ClipView.CutoutShape.RoundedRect === shape) {
          size = { shape, x: null, y: null, width: null, height: null, cornerRadius: null };
          if (null == closure_1_3) {
            let result2 = -dependencyMap;
          } else {
            result2 = tmp6 * (1 - tmp12);
          }
          size.x = result2;
          if (null == View) {
            let result3 = -dependencyMap;
          } else {
            result3 = tmp6 * (1 - tmp16);
          }
          size.y = result3;
          size.width = sum + 2 * dependencyMap;
          size.height = sum + 2 * dependencyMap;
          size.cornerRadius = sum / 3 + dependencyMap;
          tmp8 = size;
        } else {
          GlobalUtils.assertNever(shape);
          const tmp3Result3 = GlobalUtils;
        }
        tmp3Result = _mod12;
      }
      let num6 = 0;
      let num7 = 0;
      if (id > 0) {
        let tmp29 = tmp5;
        if (tmp3Result4.isArray(tmp5)) {
          tmp29 = tmp5[id - 1];
        }
        if (null == closure_1_3) {
          let sum1 = -tmp29;
        } else {
          sum1 = -tmp29 * tmp30 + dependencyMap;
        }
        let num8 = 0;
        if (null != View) {
          num8 = id * (tmp29 - tmp29 * View + dependencyMap);
        }
        num6 = num8;
        num7 = sum1;
        tmp3Result4 = _mod12;
      }
      const obj2 = { height: tmp6, marginLeft: num7, marginTop: num6 };
      const items = [obj2, ];
      if (type.type === PileOverflow.PileOverflow) {
        const obj3 = { minWidth: tmp6 };
        let obj4 = obj3;
      } else {
        obj4 = { width: tmp6 };
      }
      const obj5 = { style: null, children: null };
      items[1] = obj4;
      obj5.style = items;
      let tmp35Result = type;
      if (null != tmp8) {
        const obj6 = { cutouts: null, children: null };
        const items1 = [tmp8];
        obj6.cutouts = items1;
        obj6.children = type;
        tmp35Result = jsx(ClipViewDefault, { cutouts: null, children: null });
      }
      obj5.children = tmp35Result;
      return <View key={id} style={null}>{null}</View>;
    } else {
      return null;
    }
  });
  return length(View, obj2);
});