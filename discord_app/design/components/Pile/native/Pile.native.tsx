// === Module 11153: Pile ===

// Module 11153 (Pile)
import _mod12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ClipView from "ClipView" /* 8954 */;
import PileOverflow from "PileOverflow" /* 11154 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({ pile: { flexDirection: "row" } });
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria_label) {
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
  obj2.children = Children1.map(children, (type, key) => {
    if (noop.isValidElement(type)) {
      let tmp6 = size;
      if (obj.isArray(size)) {
        tmp6 = tmp5[key];
      }
      let tmp8;
      if (key < length - 1) {
        let sum = tmp5;
        if (tmp3Result.isArray(tmp5)) {
          sum = tmp5[key + 1];
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
      if (key > 0) {
        let tmp29 = tmp5;
        if (tmp3Result4.isArray(tmp5)) {
          tmp29 = tmp5[key - 1];
        }
        if (null == closure_1_3) {
          let sum1 = -tmp29;
        } else {
          sum1 = -tmp29 * tmp30 + dependencyMap;
        }
        let num8 = 0;
        if (null != View) {
          num8 = key * (tmp29 - tmp29 * View + dependencyMap);
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
      return <View key={key} style={null}>{null}</View>;
    } else {
      return null;
    }
  });
  return length(View, obj2);
};