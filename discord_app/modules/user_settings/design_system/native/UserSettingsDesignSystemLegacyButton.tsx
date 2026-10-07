// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const native = Button(1188);
const Text_Text = Button(4892);
const components_Button_Button = Button(5601);
require = fn;
function getUniqueComparisons() {
  set = new Set();
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let _HermesInternal = HermesInternal;
    let combined = "" + nextResult.look + "/" + nextResult.color;
    let tmp5 = combined;
    if (!set.has(combined)) {
      let addResult = set.add(tmp5);
      let obj = { look: null, color: null };
      ({ look: obj2.look, color: obj2.color } = tmp3);
      let arr = items.push(obj);
    }
    continue;
  }
  return items;
}
function groupByLook(items) {
  const obj = {};
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let look = nextResult.look;
    let tmp3 = look;
    let tmp2 = nextResult;
    if (null == obj[look]) {
      obj[tmp3] = [];
    }
    let arr = obj[tmp3];
    let arr2 = arr.push(tmp2);
    continue;
  }
  return obj;
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
let items = [
  {
    look: fn(1188).ButtonLooks.FILLED,
    color: fn(1188).ButtonColors.BRAND,
    size: fn(1188).ButtonSizes.LARGE,
    shrink: false,
    count: 1,
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];
let obj = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.LARGE,
  shrink: false,
  count: 1,
};
items[1] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 116,
};
let obj2 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 116,
};
items[2] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 12,
};
let obj3 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 12,
};
items[3] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 5,
};
let obj4 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 5,
};
items[4] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 2,
};
let obj5 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 2,
};
items[5] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 4,
};
let obj6 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 4,
};
items[6] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: true,
  count: 1,
};
let obj7 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: true,
  count: 1,
};
items[7] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
let obj8 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
items[8] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
let obj9 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
items[9] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 1,
};
let obj10 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 1,
};
items[10] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj11 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREEN,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[11] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 10,
};
const obj12 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 10,
};
items[12] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
const obj13 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
items[13] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 2,
};
const obj14 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 2,
};
items[14] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 1,
};
const obj15 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 1,
};
items[15] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj16 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[16] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.LIGHTGREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 2,
};
const obj17 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.LIGHTGREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 2,
};
items[17] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.LIGHTGREY,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj18 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.LIGHTGREY,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[18] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 2,
};
const obj19 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 2,
};
items[19] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 2,
};
const obj20 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 2,
};
items[20] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 2,
};
const obj21 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 2,
};
items[21] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.RED,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 8,
};
const obj22 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.RED,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 8,
};
items[22] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.RED,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
const obj23 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.RED,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
items[23] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.RED,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj24 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.RED,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[24] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 8,
};
const obj25 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 8,
};
items[25] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 3,
};
const obj26 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 3,
};
items[26] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj27 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[27] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: true,
  count: 1,
};
const obj28 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: true,
  count: 1,
};
items[28] = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.WHITE,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 1,
};
const obj29 = {
  look: fn(1188).ButtonLooks.FILLED,
  color: fn(1188).ButtonColors.WHITE,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 1,
};
items[29] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: true,
  count: 1,
};
const obj30 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: true,
  count: 1,
};
items[30] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 3,
};
const obj31 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 3,
};
items[31] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
const obj32 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: true,
  count: 1,
};
items[32] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 2,
};
const obj33 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 2,
};
items[33] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 1,
};
const obj34 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: true,
  count: 1,
};
items[34] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj35 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.LINK,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[35] = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
const obj36 = {
  look: fn(1188).ButtonLooks.LINK,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.XSMALL,
  shrink: false,
  count: 1,
};
items[36] = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 2,
};
const obj37 = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.BRAND,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 2,
};
items[37] = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
const obj38 = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.GREY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
items[38] = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
const obj39 = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.PRIMARY,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
items[39] = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
const obj40 = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.TRANSPARENT,
  size: fn(1188).ButtonSizes.MEDIUM,
  shrink: false,
  count: 1,
};
items[40] = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.WHITE,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 1,
};
let items1 = [fn(1188).ButtonColors.WHITE];
let set = new Set(items1);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (entry) => {
      let Button = require;
      let tmp = dependencyMap;
      const cResult = c.c(33);
      entry = entry.entry;
      const tmp3 = closure_13();
      if (cResult[0] !== entry.color) {
        const hasItem = set.has(entry.color);
        cResult[0] = entry.color;
        cResult[1] = hasItem;
        let tmp4 = hasItem;
      } else {
        tmp4 = cResult[1];
      }
      const combined = "" + entry.color;
      const tmp8 = entry.look === native.ButtonLooks.LINK;
      if (cResult[2] === entry.color) {
        if (cResult[3] === tmp8) {
          let comparisonSide = cResult[4];
        }
        let darkBg = tmp4;
        if (tmp4) {
          darkBg = tmp3.darkBg;
        }
        if (cResult[5] === tmp3.comparisonRow) {
          if (cResult[6] === darkBg) {
            let tmp10 = cResult[7];
          }
          let str = "text-muted";
          if (tmp4) {
            str = "text-default";
          }
          let str2 = comparisonSide;
          if (comparisonSide == null) {
            str2 = "unmapped";
          }
          if (cResult[8] === combined) {
            if (cResult[9] === str) {
              if (cResult[10] === str2) {
                let tmp12 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp17 = timestampProducer(Text_Text.Text, {
                  variant: "text-xxs/medium",
                  color: "text-muted",
                  children: "legacy",
                });
                cResult[12] = tmp17;
                let tmp15 = tmp17;
              } else {
                tmp15 = cResult[12];
              }
              let darkText = null;
              if (tmp4) {
                darkText = null;
                if (entry.look === native.ButtonLooks.FILLED) {
                  darkText = tmp3.darkText;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const fn = function v() {};
                cResult[13] = fn;
                let tmp19 = fn;
              } else {
                tmp19 = cResult[13];
              }
              if (cResult[14] === entry.color) {
                if (cResult[15] === entry.look) {
                  if (cResult[16] === combined) {
                    if (cResult[17] === darkText) {
                      let tmp20 = cResult[18];
                    }
                    if (cResult[19] === tmp3.comparisonSide) {
                      if (cResult[20] === tmp20) {
                        let tmp23 = cResult[21];
                      }
                      if (cResult[22] === comparisonSide) {
                        if (cResult[23] === tmp3.comparisonSide) {
                          if (cResult[25] === tmp3.comparisonButtons) {
                            if (cResult[26] === tmp23) {
                              if (cResult[27] === tmp27) {
                                let tmp35 = cResult[28];
                              }
                              if (cResult[29] === tmp35) {
                                if (cResult[30] === tmp10) {
                                  if (cResult[31] === tmp12) {
                                    let tmp39 = cResult[32];
                                  }
                                  return tmp39;
                                }
                              }
                              const obj2 = { style: tmp10, children: null };
                              items = [tmp12, tmp35];
                              obj2.children = items;
                              const tmp42 = hasOwnProperty(React4, obj2);
                              cResult[29] = tmp35;
                              cResult[30] = tmp10;
                              cResult[31] = tmp12;
                              cResult[32] = tmp42;
                              tmp39 = tmp42;
                            }
                          }
                          const obj3 = { style: tmp3.comparisonButtons, children: null };
                          const items1 = [tmp23, cResult[24]];
                          obj3.children = items1;
                          const tmp38 = hasOwnProperty(React4, obj3);
                          cResult[25] = tmp3.comparisonButtons;
                          cResult[26] = tmp23;
                          cResult[27] = cResult[24];
                          cResult[28] = tmp38;
                          tmp35 = tmp38;
                        }
                      }
                      if (null != comparisonSide) {
                        const obj5 = { style: tmp3.comparisonSide, children: null };
                        const items2 = [
                          timestampProducer(Text_Text.Text, {
                            variant: "text-xxs/medium",
                            color: "text-muted",
                            children: "mana",
                          }),
                        ];
                        Button = components_Button_Button.Button;
                        const obj6 = {
                          variant: comparisonSide,
                          size: "md",
                          text: comparisonSide,
                          onPress() {},
                        };
                        tmp = timestampProducer(Button, obj6);
                        items2[1] = tmp;
                        obj5.children = items2;
                        let tmp30 = hasOwnProperty(React4, obj5);
                      } else {
                        const obj7 = {
                          style: tmp3.comparisonSide,
                          children: timestampProducer(Text_Text.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: "no mapping",
                          }),
                        };
                        tmp30 = timestampProducer(React4, obj7);
                      }
                      cResult[22] = comparisonSide;
                      comparisonSide = tmp3.comparisonSide;
                      cResult[23] = comparisonSide;
                      cResult[24] = tmp30;
                    }
                    const obj8 = { style: tmp3.comparisonSide, children: null };
                    const items3 = [tmp15, tmp20];
                    obj8.children = items3;
                    const tmp26 = hasOwnProperty(React4, obj8);
                    cResult[19] = tmp3.comparisonSide;
                    cResult[20] = tmp20;
                    cResult[21] = tmp26;
                    tmp23 = tmp26;
                  }
                }
              }
              const obj9 = {
                look: null,
                color: null,
                size: null,
                shrink: true,
                text: null,
                textStyle: null,
                onPress: null,
              };
              ({ look: obj4.look, color: obj4.color } = entry);
              obj9.size = native.ButtonSizes.MEDIUM;
              obj9.text = combined;
              obj9.textStyle = darkText;
              obj9.onPress = tmp19;
              const tmp22 = timestampProducer(native.Button, obj9);
              cResult[14] = entry.color;
              cResult[15] = entry.look;
              cResult[16] = combined;
              cResult[17] = darkText;
              cResult[18] = tmp22;
              tmp20 = tmp22;
            }
          }
          const obj10 = { variant: "text-xs/medium", color: str, children: null };
          const items4 = [combined, " \u2192 ", str2];
          obj10.children = items4;
          const tmp14 = hasOwnProperty(Text_Text.Text, obj10);
          cResult[8] = combined;
          cResult[9] = str;
          cResult[10] = str2;
          cResult[11] = tmp14;
          tmp12 = tmp14;
        }
        const items5 = [tmp3.comparisonRow, darkBg];
        cResult[5] = tmp3.comparisonRow;
        cResult[6] = darkBg;
        cResult[7] = items5;
        tmp10 = items5;
      }
      let redesignVariant = null;
      if (!tmp8) {
        redesignVariant = native.getRedesignVariant(entry.color);
        const ButtonResult = native;
      }
      cResult[2] = entry.color;
      cResult[3] = tmp8;
      cResult[4] = redesignVariant;
      comparisonSide = redesignVariant;
    }
  : (entry) => {
      entry = entry.entry;
      const tmp = closure_13();
      const hasItem = set.has(entry.color);
      const combined = "" + entry.color;
      let redesignVariant = null;
      if (entry.look !== native.ButtonLooks.LINK) {
        redesignVariant = native.getRedesignVariant(entry.color);
        const tmp4Result = native;
      }
      items = [tmp.comparisonRow];
      let darkBg = hasItem;
      if (hasItem) {
        darkBg = tmp.darkBg;
      }
      const obj = { style: items, children: null };
      items[1] = darkBg;
      let str = "text-muted";
      if (hasItem) {
        str = "text-default";
      }
      const obj2 = { variant: "text-xs/medium", color: str, children: null };
      const items1 = [combined, " \u2192 "];
      let str2 = redesignVariant;
      if (redesignVariant == null) {
        str2 = "unmapped";
      }
      items1[2] = str2;
      obj2.children = items1;
      const items2 = [hasOwnProperty(Text_Text.Text, obj2)];
      const obj3 = { style: tmp.comparisonButtons, children: null };
      const obj4 = { style: tmp.comparisonSide, children: null };
      const items3 = [
        timestampProducer(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" }),
      ];
      const obj5 = {
        look: entry.look,
        color: entry.color,
        size: native.ButtonSizes.MEDIUM,
        shrink: true,
        text: combined,
        textStyle: null,
        onPress: null,
      };
      let darkText = null;
      if (hasItem) {
        darkText = null;
        if (entry.look === native.ButtonLooks.FILLED) {
          darkText = tmp.darkText;
        }
      }
      obj5.textStyle = darkText;
      obj5.onPress = function onPress() {};
      items3[1] = timestampProducer(native.Button, obj5);
      obj4.children = items3;
      const items4 = [hasOwnProperty(React4, obj4)];
      if (null != redesignVariant) {
        const obj6 = { style: tmp.comparisonSide, children: null };
        const items5 = [
          timestampProducer(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }),
        ];
        const obj7 = {
          variant: redesignVariant,
          size: "md",
          text: redesignVariant,
          onPress() {},
        };
        items5[1] = timestampProducer(components_Button_Button.Button, obj7);
        obj6.children = items5;
        let tmp9Result = hasOwnProperty(React4, obj6);
      } else {
        const obj8 = {
          style: tmp.comparisonSide,
          children: timestampProducer(Text_Text.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: "no mapping",
          }),
        };
        tmp9Result = timestampProducer(React4, obj8);
      }
      items4[1] = tmp9Result;
      obj3.children = items4;
      items2[1] = hasOwnProperty(React4, obj3);
      obj.children = items2;
      return hasOwnProperty(React4, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (combo) => {
      const cResult = c.c(21);
      combo = combo.combo;
      const tmp4 = closure_13();
      ({ color, size } = combo);
      let str = "";
      if (combo.shrink) {
        str = " / shrink";
      }
      const combined = "" + color + " / " + size + str;
      if (cResult[0] !== combo.color) {
        const hasItem = set.has(combo.color);
        cResult[0] = combo.color;
        cResult[1] = hasItem;
        let tmp6 = hasItem;
      } else {
        tmp6 = cResult[1];
      }
      let darkBg = tmp6;
      if (tmp6) {
        darkBg = tmp4.darkBg;
      }
      if (cResult[2] === tmp4.comboRow) {
        if (cResult[3] === darkBg) {
          let tmp9 = cResult[4];
        }
        let str2 = "text-muted";
        if (tmp6) {
          str2 = "text-default";
        }
        if (cResult[5] === combo.count) {
          if (cResult[6] === combined) {
            if (cResult[7] === str2) {
              let tmp10 = cResult[8];
            }
            let darkText = null;
            if (tmp6) {
              darkText = null;
              if (combo.look === native.ButtonLooks.FILLED) {
                darkText = tmp4.darkText;
              }
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function x() {};
              cResult[9] = fn;
              let tmp14 = fn;
            } else {
              tmp14 = cResult[9];
            }
            if (cResult[10] === combo.color) {
              if (cResult[11] === combo.look) {
                if (cResult[12] === combo.shrink) {
                  if (cResult[13] === combo.size) {
                    if (cResult[14] === combined) {
                      if (cResult[15] === darkText) {
                        let tmp15 = cResult[16];
                      }
                      if (cResult[17] === tmp9) {
                        if (cResult[18] === tmp10) {
                          if (cResult[19] === tmp15) {
                            let tmp18 = cResult[20];
                          }
                          return tmp18;
                        }
                      }
                      const obj2 = { style: tmp9, children: null };
                      items = [tmp10, tmp15];
                      obj2.children = items;
                      const tmp21 = hasOwnProperty(React4, obj2);
                      cResult[17] = tmp9;
                      cResult[18] = tmp10;
                      cResult[19] = tmp15;
                      cResult[20] = tmp21;
                      tmp18 = tmp21;
                    }
                  }
                }
              }
            }
            const obj4 = {
              look: null,
              color: null,
              size: null,
              shrink: null,
              text: null,
              textStyle: null,
              onPress: null,
            };
            ({ look: obj3.look, color: obj3.color, size: obj3.size, shrink: obj3.shrink } = combo);
            obj4.text = combined;
            obj4.textStyle = darkText;
            obj4.onPress = tmp14;
            const tmp17 = timestampProducer(native.Button, obj4);
            cResult[10] = combo.color;
            cResult[11] = combo.look;
            cResult[12] = combo.shrink;
            cResult[13] = combo.size;
            cResult[14] = combined;
            cResult[15] = darkText;
            cResult[16] = tmp17;
            tmp15 = tmp17;
          }
        }
        const obj7 = { variant: "text-xs/medium", color: str2, children: null };
        const items1 = [combined, " (", combo.count, ")"];
        obj7.children = items1;
        const tmp12 = hasOwnProperty(Text_Text.Text, obj7);
        cResult[5] = combo.count;
        cResult[6] = combined;
        cResult[7] = str2;
        cResult[8] = tmp12;
        tmp10 = tmp12;
      }
      const items2 = [tmp4.comboRow, darkBg];
      cResult[2] = tmp4.comboRow;
      cResult[3] = darkBg;
      cResult[4] = items2;
      tmp9 = items2;
    }
  : (combo) => {
      combo = combo.combo;
      const tmp = closure_13();
      ({ color, size } = combo);
      let str = "";
      if (combo.shrink) {
        str = " / shrink";
      }
      const combined = "" + color + " / " + size + str;
      const hasItem = set.has(combo.color);
      items = [tmp.comboRow];
      let darkBg = hasItem;
      if (hasItem) {
        darkBg = tmp.darkBg;
      }
      const obj = { style: items, children: null };
      items[1] = darkBg;
      let str2 = "text-muted";
      if (hasItem) {
        str2 = "text-default";
      }
      const obj2 = { variant: "text-xs/medium", color: str2, children: null };
      const items1 = [combined, " (", combo.count, ")"];
      obj2.children = items1;
      const items2 = [hasOwnProperty(Text_Text.Text, obj2)];
      const obj3 = {
        look: combo.look,
        color: combo.color,
        size: combo.size,
        shrink: combo.shrink,
        text: combined,
        textStyle: null,
        onPress: null,
      };
      let darkText = null;
      if (hasItem) {
        darkText = null;
        if (combo.look === native.ButtonLooks.FILLED) {
          darkText = tmp.darkText;
        }
      }
      obj3.textStyle = darkText;
      obj3.onPress = function onPress() {};
      items2[1] = timestampProducer(native.Button, obj3);
      obj.children = items2;
      return hasOwnProperty(React4, obj);
    };
const createStyles = fn(4896);
const obj45 = {
  comboRow: null,
  darkText: null,
  darkBg: null,
  comparisonRow: null,
  comparisonButtons: null,
  comparisonSide: null,
  container: null,
  header: null,
};
const obj41 = {
  look: fn(1188).ButtonLooks.OUTLINED,
  color: fn(1188).ButtonColors.WHITE,
  size: fn(1188).ButtonSizes.SMALL,
  shrink: false,
  count: 1,
};
obj45.comboRow = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
const obj46 = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
obj45.darkText = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
const obj47 = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
obj45.darkBg = {
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600,
  borderRadius: nativeDefault.radii.sm,
  marginHorizontal: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
};
const obj48 = {
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600,
  borderRadius: nativeDefault.radii.sm,
  marginHorizontal: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
};
obj45.comparisonRow = {
  gap: 4,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_8,
};
const obj49 = { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj45.comparisonButtons = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
obj45.comparisonSide = { flex: 1, gap: 2 };
const obj50 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
obj45.container = { paddingBottom: nativeDefault.space.PX_48 };
const obj51 = { paddingBottom: nativeDefault.space.PX_48 };
obj45.header = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
};
let closure_13 = createStyles.createStyles(obj45);
ReactCompilerGating = fn(558);
const obj52 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(10);
      const tmp2 = closure_13();
      if (cResult[0] !== tmp2) {
        let num = 0;
        const tmp7 = getUniqueComparisons();
        let obj2 = {};
        const iter = tmp7[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp13 = nextResult;
          if (null == obj2[nextResult.look]) {
            obj2[tmp13.look] = [];
          }
          let arr = obj2[tmp13.look];
          let arr2 = arr.push(tmp13);
          continue;
        }
        let map = globalThis;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp22 = timestampProducer(Text_Text.Text, {
            variant: "heading-xl/bold",
            children: "Migration Mapping",
          });
          const tmp23 = timestampProducer(Text_Text.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: "Legacy (uikit-native) \u2192 Mana side-by-side",
          });
          cResult[2] = tmp22;
          cResult[3] = tmp23;
          let tmp18 = tmp23;
          let tmp17 = tmp22;
        } else {
          tmp17 = cResult[2];
          tmp18 = cResult[3];
        }
        if (cResult[4] !== tmp2.header) {
          const obj3 = { spacing: 4, style: tmp2.header, children: null };
          items = [tmp17, tmp18];
          obj3.children = items;
          const tmp28 = hasOwnProperty(Stack_Stack.Stack, obj3);
          cResult[4] = tmp2.header;
          cResult[5] = tmp28;
          let map2Result = tmp28;
        } else {
          map2Result = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp33 = timestampProducer(Text_Text.Text, {
            variant: "heading-xl/bold",
            children: "Legacy Button Audit",
          });
          const tmp34 = timestampProducer(Text_Text.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: "41 combinations across 185 importers",
          });
          cResult[6] = tmp33;
          cResult[7] = tmp34;
          let map2 = tmp34;
          let tmp29 = tmp33;
        } else {
          tmp29 = cResult[6];
          map2 = cResult[7];
        }
        if (cResult[8] !== tmp2.header) {
          const obj4 = { spacing: 4, style: tmp2.header, children: null };
          const items1 = [tmp29, map2];
          obj4.children = items1;
          const tmp39 = hasOwnProperty(Stack_Stack.Stack, obj4);
          cResult[8] = tmp2.header;
          cResult[9] = tmp39;
          let tmp35 = tmp39;
        } else {
          tmp35 = cResult[9];
        }
        const obj5 = { style: tmp2.container, children: null };
        const items2 = [map2Result, , ,];
        const _Object = map.Object;
        obj2 = _Object.entries(obj2);
        map2 = obj2.map;
        map2Result = map2((arg0) => {
          [tmp2, arr] = arg0;
          const tmp = _slicedToArray(arg0, 2);
          return closure_1_6(
            Form.FormSection,
            { title: tmp2, children: arr.map((entry, index) => closure_1_6(closure_1_10, { entry }, index)) },
            "cmp-" + tmp2,
          );
        });
        items2[1] = map2Result;
        items2[2] = tmp35;
        const _Object2 = map.Object;
        const entries = _Object2.entries(groupByLook(items));
        map = entries.map;
        items2[3] = map((arg0) => {
          [tmp2, arr] = arg0;
          const tmp = _slicedToArray(arg0, 2);
          return closure_1_6(
            Form.FormSection,
            {
              title: "" + tmp2 + " (" + arr.reduce((acc, count) => acc + count.count, 0) + " usages)",
              children: arr.map((combo, index) => closure_1_6(closure_1_11, { combo }, index)),
            },
            tmp2,
          );
        });
        obj5.children = items2;
        const tmp42 = hasOwnProperty(React3, obj5);
        cResult[num] = tmp2;
        num = 1;
        cResult[1] = tmp42;
        const tmp5 = groupByLook(items);
      } else {
        return cResult[1];
      }
    }
  : () => {
      const tmp = closure_13();
      const tmp2 = groupByLook(items);
      const obj = {};
      const iter = getUniqueComparisons()[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if (null == obj[nextResult.look]) {
          obj[tmp5.look] = [];
        }
        let arr = obj[tmp5.look];
        let arr2 = arr.push(tmp5);
        continue;
      }
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { spacing: 4, style: tmp.header, children: null };
      items = [
        timestampProducer(Text_Text.Text, { variant: "heading-xl/bold", children: "Migration Mapping" }),
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "Legacy (uikit-native) \u2192 Mana side-by-side",
        }),
      ];
      obj3.children = items;
      const items1 = [hasOwnProperty(Stack_Stack.Stack, obj3), , ,];
      const entries = Object.entries(obj);
      items1[1] = entries.map((item) => {
        [tmp, arr] = item;
        return closure_1_6(
          Form.FormSection,
          { title: tmp, children: arr.map((entry, index) => closure_1_6(closure_1_10, { entry }, index)) },
          "cmp-" + tmp,
        );
      });
      const obj4 = { spacing: 4, style: tmp.header, children: null };
      const items2 = [
        timestampProducer(Text_Text.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" }),
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "41 combinations across 185 importers",
        }),
      ];
      obj4.children = items2;
      items1[2] = hasOwnProperty(Stack_Stack.Stack, obj4);
      const entries1 = Object.entries(tmp2);
      items1[3] = entries1.map((item) => {
        [tmp, arr] = item;
        return closure_1_6(
          Form.FormSection,
          {
            title: "" + tmp + " (" + arr.reduce((acc, count) => acc + count.count, 0) + " usages)",
            children: arr.map((combo, index) => closure_1_6(closure_1_11, { combo }, index)),
          },
          tmp,
        );
      });
      obj2.children = items1;
      return hasOwnProperty(React3, obj2);
    };
