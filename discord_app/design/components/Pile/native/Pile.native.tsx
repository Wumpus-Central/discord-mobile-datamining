// === Module 11000: Pile ===

// Module 11000 (Pile)
import _mod12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ClipViewDefault from "ClipView" /* 8813 */;
import PileOverflow from "PileOverflow" /* 11001 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ pile: { flexDirection: "row" } });
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria_label) {
  ({ shape: require, size } = aria_label);
  ({ gap: dependencyMap, depthX: noop, depthY: View, children } = aria_label);
  let Children = noop.Children;
  const tmp = closure_6();
  const tmp2 = noop;
  const length = Children.toArray(children).filter(GlobalUtils.isNotNullish).length;
  let obj = _mod12;
  if (obj.isArray(size)) {
    if (size.length !== length) {
      const _Error = Error;
      const error = new Error("Pile: size array must have the same number of elements as children");
      throw error;
    }
  }
  obj = { style: tmp.pile, accessible: true, "aria-label": aria_label["aria-label"], children: null };
  Children = tmp2.Children;
  obj.children = Children.map(children, (type, arg1) => {
    if (noop.isValidElement(type)) {
      let obj = _mod12;
      let tmp6 = size;
      if (obj.isArray(size)) {
        tmp6 = tmp5[arg1];
      }
      let tmp8;
      if (arg1 < length - 1) {
        let tmp3Result = tmp3(12);
        let sum = tmp5;
        if (tmp3Result.isArray(tmp5)) {
          sum = tmp5[arg1 + 1];
        }
        if (tmp3(8813).CutoutShape.Circle === closure_1_0) {
          const point = { shape: tmp10, x: null, y: null, size: null };
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
        } else if (tmp3(8813).CutoutShape.RoundedRect === tmp10) {
          size = { shape: tmp10, x: null, y: null, width: null, height: null, cornerRadius: null };
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
          tmp3Result = tmp3(1369);
          tmp3Result.assertNever(tmp10);
        }
      }
      let num6 = 0;
      let num7 = 0;
      if (arg1 > 0) {
        let tmp29 = tmp5;
        if (tmp3Result1.isArray(tmp5)) {
          tmp29 = tmp5[arg1 - 1];
        }
        if (null == closure_1_3) {
          let sum1 = -tmp29;
        } else {
          sum1 = -tmp29 * tmp30 + dependencyMap;
        }
        let num8 = 0;
        if (null != View) {
          num8 = arg1 * (tmp29 - tmp29 * View + dependencyMap);
        }
        num6 = num8;
        num7 = sum1;
        tmp3Result1 = tmp3(12);
      }
      obj = { height: tmp6, marginLeft: num7, marginTop: num6 };
      const items = [obj, ];
      if (type.type === PileOverflow.PileOverflow) {
        obj = { minWidth: tmp6 };
        let obj1 = obj;
      } else {
        obj1 = { width: tmp6 };
      }
      const obj2 = { style: null, children: null };
      items[1] = obj1;
      obj2.style = items;
      let tmp35Result = type;
      if (null != tmp8) {
        const obj3 = { cutouts: null, children: null };
        const items1 = [tmp8];
        obj3.cutouts = items1;
        obj3.children = type;
        tmp35Result = tmp35(ClipViewDefault, obj3);
      }
      obj2.children = tmp35Result;
      return <View key={arg1} style={null}>{null}</View>;
    } else {
      return null;
    }
  });
  return length(View, obj);
};