// === Module 9271: Pile ===

// Module 9271 (Pile)
import apply from "apply" /* 12 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1471 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let closure_6 = createCacheKey.createStyles({ pile: { flexDirection: "row" } });
let result = require("set").fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria_label) {
  ({ shape: require, size } = aria_label);
  ({ gap: dependencyMap, depthX: closure_3, depthY: View, children } = aria_label);
  let length;
  let Children = React.Children;
  const tmp = callback();
  const tmp2 = React;
  length = Children.toArray(children).filter(isDiscordFrontendDevelopment.isNotNullish).length;
  let obj = apply;
  if (obj.isArray(size)) {
    if (size.length !== length) {
      const _Error = Error;
      error = new Error("Pile: size array must have the same number of elements as children");
      throw error;
    }
  }
  obj = {
    style: tmp.pile,
    accessible: true,
    "aria-label": aria_label["aria-label"],
    children: Children.map(children, (type) => {
      if (closure_1_3.isValidElement(type)) {
        let obj = closure_1_0(closure_1_2[5]);
        let tmp6 = size;
        if (obj.isArray(size)) {
          tmp6 = tmp5[arg1];
        }
        let tmp8;
        if (arg1 < length - 1) {
          let tmp3Result = tmp3(tmp4[5]);
          let sum = tmp5;
          if (tmp3Result.isArray(tmp5)) {
            sum = tmp5[arg1 + 1];
          }
          if (tmp3(tmp4[6]).CutoutShape.Circle === closure_0) {
            obj = { shape: null, x: null, y: null, size: null };
            obj[0] = tmp10;
            if (null == closure_3) {
              let result = -closure_2;
            } else {
              result = tmp6 * (1 - tmp20);
            }
            obj[1] = result;
            if (null == closure_4) {
              let result1 = -closure_2;
            } else {
              result1 = tmp6 * (1 - tmp24);
            }
            obj[2] = result1;
            sum = sum + 2 * closure_2;
            obj[3] = sum;
          } else if (tmp3(tmp4[6]).CutoutShape.RoundedRect === tmp10) {
            obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
            obj[0] = tmp10;
            if (null == closure_3) {
              let result2 = -closure_2;
            } else {
              result2 = tmp6 * (1 - tmp12);
            }
            obj[1] = result2;
            if (null == closure_4) {
              let result3 = -closure_2;
            } else {
              result3 = tmp6 * (1 - tmp16);
            }
            obj[2] = result3;
            obj[3] = sum + 2 * closure_2;
            obj[4] = sum + 2 * closure_2;
            obj[5] = sum / 3 + closure_2;
            tmp8 = obj;
          } else {
            tmp3Result = tmp3(tmp4[4]);
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
          if (null == closure_3) {
            let sum1 = -tmp29;
          } else {
            sum1 = -tmp29 * tmp30 + closure_2;
          }
          let num8 = 0;
          if (null != closure_4) {
            num8 = arg1 * (tmp29 - tmp29 * closure_4 + closure_2);
          }
          num6 = num8;
          num7 = sum1;
          tmp3Result1 = tmp3(tmp4[5]);
        }
        obj1 = { height: null, marginLeft: null, marginTop: null };
        obj1[0] = tmp6;
        obj1[1] = num7;
        obj1[2] = num6;
        const items = [obj1, ];
        if (type.type === closure_1_0(closure_1_2[7]).PileOverflow) {
          const obj2 = { minWidth: null };
          obj2[0] = tmp6;
          let obj3 = obj2;
        } else {
          obj3 = { width: null };
          obj3[0] = tmp6;
        }
        const obj4 = { style: null, children: null };
        items[1] = obj3;
        obj4[0] = items;
        let tmp35Result = type;
        if (null != tmp8) {
          const obj5 = { cutouts: null, children: null };
          const items1 = [tmp8];
          obj5[0] = items1;
          obj5[1] = type;
          tmp35Result = tmp35(size(tmp4[6]), obj5);
        }
        obj4[1] = tmp35Result;
        return length(closure_1_4, obj4, arg1);
      } else {
        return null;
      }
    })
  };
  Children = tmp2.Children;
  return length(View, obj);
};