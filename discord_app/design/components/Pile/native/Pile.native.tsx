// === Module 11788: Pile ===

// Module 11788 (Pile)
import apply from "apply" /* 12 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import SolidCutout from "SolidCutout" /* 8402 */;
import map from "map" /* 11789 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
let closure_6 = createCacheKey.createStyles({ pile: { flexDirection: "row" } });
let result = require("obj132").fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria_label) {
  ({ shape: require, size } = aria_label);
  ({ gap: dependencyMap, depthX: closure_3, depthY: View, children } = aria_label);
  let Children = React.Children;
  const tmp = callback();
  const length = Children.toArray(children).filter(isDiscordFrontendDevelopment.isNotNullish).length;
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
        let obj = apply;
        let tmp6 = size;
        if (obj.isArray(size)) {
          tmp6 = size[arg1];
        }
        let tmp8;
        if (arg1 < length - 1) {
          let tmp3Result = apply;
          let sum = size;
          if (tmp3Result.isArray(size)) {
            sum = size[arg1 + 1];
          }
          if (SolidCutout.CutoutShape.Circle === closure_0) {
            obj = { shape: null, x: null, y: null, size: null };
            obj[0] = closure_0;
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
          } else if (SolidCutout.CutoutShape.RoundedRect === closure_0) {
            obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
            obj[0] = closure_0;
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
            tmp3Result = isDiscordFrontendDevelopment;
            tmp3Result.assertNever(closure_0);
          }
        }
        let num6 = 0;
        let num7 = 0;
        if (arg1 > 0) {
          let tmp29 = size;
          if (tmp3Result1.isArray(size)) {
            tmp29 = size[arg1 - 1];
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
          tmp3Result1 = apply;
        }
        obj1 = { height: null, marginLeft: null, marginTop: null };
        obj1[0] = tmp6;
        obj1[1] = num7;
        obj1[2] = num6;
        const items = [obj1, ];
        if (type.type === map.PileOverflow) {
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
          tmp35Result = length(size(dependencyMap[6]), obj5);
        }
        obj4[1] = tmp35Result;
        return length(View, obj4, arg1);
      } else {
        return null;
      }
    })
  };
  Children = React.Children;
  return length(View, obj);
};