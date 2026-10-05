// === Module 15643: UserSettingsDesignSystemLegacyButton ===

// Module 15643 (UserSettingsDesignSystemLegacyButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Form from "Form" /* 8895 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let combo, entry;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
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
({ ScrollView: c3, View: closure_4 } = react_native);
({ jsxs: hasOwnProperty, jsx: metroRequire } = Fragment);
let obj = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.LARGE, shrink: false, count: 1 };
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
let obj2 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: false, count: 116 };
items[1] = obj2;
let obj3 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: true, count: 12 };
items[2] = obj3;
let obj4 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.SMALL, shrink: false, count: 5 };
items[3] = obj4;
let obj5 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.SMALL, shrink: true, count: 2 };
items[4] = obj5;
let obj6 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: false, count: 4 };
items[5] = obj6;
let obj7 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 };
items[6] = obj7;
let obj8 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
items[7] = obj8;
let obj9 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
items[8] = obj9;
let obj10 = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.SMALL, shrink: false, count: 1 };
items[9] = obj10;
items[10] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREEN, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[11] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 10 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 10 });
items[12] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[13] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: false, count: 2 });
items[14] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.SMALL, shrink: true, count: 1 });
items[15] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.GREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[16] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 });
items[17] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.LIGHTGREY, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[18] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 });
items[19] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.SMALL, shrink: true, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.SMALL, shrink: true, count: 2 });
items[20] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.XSMALL, shrink: false, count: 2 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.XSMALL, shrink: false, count: 2 });
items[21] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 });
items[22] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[23] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.RED, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[24] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 8 });
items[25] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: true, count: 3 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: true, count: 3 });
items[26] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[27] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 });
items[28] = { look: native.ButtonLooks.FILLED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.FILLED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 });
items[29] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.BRAND, size: native.ButtonSizes.XSMALL, shrink: true, count: 1 });
items[30] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: false, count: 3 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: false, count: 3 });
items[31] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.MEDIUM, shrink: true, count: 1 });
items[32] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: false, count: 2 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: false, count: 2 });
items[33] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: true, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.SMALL, shrink: true, count: 1 });
items[34] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.LINK, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[35] = { look: native.ButtonLooks.LINK, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 };
({ look: native.ButtonLooks.LINK, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.XSMALL, shrink: false, count: 1 });
items[36] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.BRAND, size: native.ButtonSizes.MEDIUM, shrink: false, count: 2 });
items[37] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.GREY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 });
items[38] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.PRIMARY, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 });
items[39] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 };
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.TRANSPARENT, size: native.ButtonSizes.MEDIUM, shrink: false, count: 1 });
items[40] = { look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 };
let items1 = [];
({ look: native.ButtonLooks.OUTLINED, color: native.ButtonColors.WHITE, size: native.ButtonSizes.SMALL, shrink: false, count: 1 });
items1[0] = native.ButtonColors.WHITE;
let set = new Set(items1);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let items1;
  let items2;
  let items3;
  let items4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(33);
  entry = entry.entry;
  const tmp4 = closure_13();
  if (cResult[0] !== entry.color) {
    const hasItem = set.has(entry.color);
    cResult[0] = entry.color;
    cResult[1] = hasItem;
    tmp5 = hasItem;
  } else {
    tmp5 = cResult[1];
  }
  const combined = "" + entry.color;
  const tmp9 = entry.look === native.ButtonLooks.LINK;
  if (cResult[2] === entry.color) {
    let tmp10;
    if (cResult[3] === tmp9) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.comparisonRow) {
      let tmp13;
      if (cResult[6] === (tmp5 && tmp4.darkBg)) {
        tmp13 = cResult[7];
      }
      let str = "text-muted";
      if (tmp5) {
        str = "text-default";
      }
      let str2 = tmp10;
      if (tmp10 == null) {
        str2 = "unmapped";
      }
      if (cResult[8] === combined) {
        if (cResult[9] === str) {
          let tmp15;
          let tmp18;
          let tmp22;
          if (cResult[10] === str2) {
            tmp15 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp20 = metroRequire(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" });
            cResult[12] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[12];
          }
          let darkText = null;
          if (tmp5) {
            darkText = null;
            if (entry.look === native.ButtonLooks.FILLED) {
              darkText = tmp4.darkText;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v() {

            };
            cResult[13] = fn;
            tmp22 = fn;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] === entry.color) {
            if (cResult[15] === entry.look) {
              if (cResult[16] === combined) {
                let tmp23;
                if (cResult[17] === darkText) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] === tmp4.comparisonSide) {
                  let tmp26;
                  let tmp33;
                  if (cResult[20] === tmp23) {
                    tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp10) {
                    let tmp30;
                    if (cResult[23] === tmp4.comparisonSide) {
                      tmp30 = cResult[24];
                    }
                    if (cResult[25] === tmp4.comparisonButtons) {
                      if (cResult[26] === tmp26) {
                        let tmp37;
                        if (cResult[27] === tmp30) {
                          tmp37 = cResult[28];
                        }
                        if (cResult[29] === tmp37) {
                          if (cResult[30] === tmp13) {
                            let tmp41;
                            if (cResult[31] === tmp15) {
                              tmp41 = cResult[32];
                            }
                            return tmp41;
                          }
                        }
                        const obj2 = { style: tmp13, children: items };
                        items = [tmp15, tmp37];
                        const tmp44 = hasOwnProperty(React3, obj2);
                        cResult[29] = tmp37;
                        cResult[30] = tmp13;
                        cResult[31] = tmp15;
                        cResult[32] = tmp44;
                        tmp41 = tmp44;
                      }
                    }
                    const obj3 = { style: tmp4.comparisonButtons, children: items1 };
                    items1 = [tmp26, tmp30];
                    const tmp40 = hasOwnProperty(React3, obj3);
                    cResult[25] = tmp4.comparisonButtons;
                    cResult[26] = tmp26;
                    cResult[27] = tmp30;
                    cResult[28] = tmp40;
                    tmp37 = tmp40;
                  }
                  if (null != tmp10) {
                    const obj5 = { style: tmp4.comparisonSide, children: items2 };
                    items2 = [metroRequire(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }), ];
                    const obj6 = {
                      variant: tmp10,
                      size: "md",
                      text: tmp10,
                      onPress() {

                                        }
                    };
                    items2[1] = metroRequire(components_Button_Button.Button, obj6);
                    tmp33 = hasOwnProperty(React3, obj5);
                  } else {
                    const obj7 = { style: tmp4.comparisonSide, children: metroRequire(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "no mapping" }) };
                    tmp33 = metroRequire(React3, obj7);
                  }
                  cResult[22] = tmp10;
                  cResult[23] = tmp4.comparisonSide;
                  cResult[24] = tmp33;
                  tmp30 = tmp33;
                }
                const obj8 = { style: tmp4.comparisonSide, children: items3 };
                items3 = [tmp18, tmp23];
                const tmp29 = hasOwnProperty(React3, obj8);
                cResult[19] = tmp4.comparisonSide;
                cResult[20] = tmp23;
                cResult[21] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
          ({ look: obj4.look, color: obj4.color } = entry);
          const obj9 = { look: null, color: null, size: native.ButtonSizes.MEDIUM, shrink: true, text: combined, textStyle: darkText, onPress: tmp22 };
          const Button = native.Button;
          const tmp25 = metroRequire(Button, obj9);
          cResult[14] = entry.color;
          cResult[15] = entry.look;
          cResult[16] = combined;
          cResult[17] = darkText;
          cResult[18] = tmp25;
          tmp23 = tmp25;
        }
      }
      const obj10 = { variant: "text-xs/medium", color: str, children: items4 };
      items4 = [combined, " \u2192 ", str2];
      const tmp17 = hasOwnProperty(Text_Text.Text, obj10);
      cResult[8] = combined;
      cResult[9] = str;
      cResult[10] = str2;
      cResult[11] = tmp17;
      tmp15 = tmp17;
    }
    const items5 = [tmp4.comparisonRow, tmp5 && tmp4.darkBg];
    cResult[5] = tmp4.comparisonRow;
    cResult[6] = tmp5 && tmp4.darkBg;
    cResult[7] = items5;
    tmp13 = items5;
  }
  let redesignVariant = null;
  if (!tmp9) {
    const tmpResult = native;
    redesignVariant = tmpResult.getRedesignVariant(entry.color);
  }
  cResult[2] = entry.color;
  cResult[3] = tmp9;
  cResult[4] = redesignVariant;
  tmp10 = redesignVariant;
}) : ((entry) => {
  let darkText;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let tmp10Result;
  entry = entry.entry;
  const tmp = closure_13();
  const hasItem = set.has(entry.color);
  const combined = "" + entry.color;
  let redesignVariant = null;
  if (entry.look !== native.ButtonLooks.LINK) {
    const tmp4Result = native;
    redesignVariant = tmp4Result.getRedesignVariant(entry.color);
  }
  items = [tmp.comparisonRow, ];
  const obj = { style: items, children: items2 };
  const tmp9 = hasItem && tmp.darkBg;
  items[1] = tmp9;
  let str = "text-muted";
  const Text = Text_Text.Text;
  if (hasItem) {
    str = "text-default";
  }
  const obj2 = { variant: "text-xs/medium", color: str, children: items1 };
  items1 = [combined, " \u2192 ", ];
  let str2 = redesignVariant;
  if (redesignVariant == null) {
    str2 = "unmapped";
  }
  items1[2] = str2;
  items2 = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.comparisonButtons, children: items4 };
  const obj4 = { style: tmp.comparisonSide, children: items3 };
  items3 = [metroRequire(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "legacy" }), ];
  const obj5 = {
    look: entry.look,
    color: entry.color,
    size: native.ButtonSizes.MEDIUM,
    shrink: true,
    text: combined,
    textStyle: darkText,
    onPress() {

    }
  };
  const Button = native.Button;
  darkText = null;
  if (hasItem) {
    darkText = null;
    if (entry.look === native.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  items3[1] = metroRequire(Button, obj5);
  items4 = [hasOwnProperty(React3, obj4), ];
  if (null != redesignVariant) {
    const obj6 = { style: tmp.comparisonSide, children: items5 };
    items5 = [metroRequire(Text_Text.Text, { variant: "text-xxs/medium", color: "text-muted", children: "mana" }), ];
    const obj7 = {
      variant: redesignVariant,
      size: "md",
      text: redesignVariant,
      onPress() {

        }
    };
    items5[1] = metroRequire(components_Button_Button.Button, obj7);
    tmp10Result = hasOwnProperty(React3, obj6);
  } else {
    const obj8 = { style: tmp.comparisonSide, children: metroRequire(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "no mapping" }) };
    tmp10Result = metroRequire(React3, obj8);
  }
  items4[1] = tmp10Result;
  items2[1] = hasOwnProperty(React3, obj3);
  return hasOwnProperty(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((combo) => {
  let color;
  let items1;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(21);
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
    tmp6 = hasItem;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.comboRow) {
    let tmp10;
    if (cResult[3] === (tmp6 && tmp4.darkBg)) {
      tmp10 = cResult[4];
    }
    let str2 = "text-muted";
    if (tmp6) {
      str2 = "text-default";
    }
    if (cResult[5] === combo.count) {
      if (cResult[6] === combined) {
        let tmp11;
        let tmp15;
        if (cResult[7] === str2) {
          tmp11 = cResult[8];
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
          const fn = function x() {

          };
          cResult[9] = fn;
          tmp15 = fn;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] === combo.color) {
          if (cResult[11] === combo.look) {
            if (cResult[12] === combo.shrink) {
              if (cResult[13] === combo.size) {
                if (cResult[14] === combined) {
                  let tmp16;
                  if (cResult[15] === darkText) {
                    tmp16 = cResult[16];
                  }
                  if (cResult[17] === tmp10) {
                    if (cResult[18] === tmp11) {
                      let tmp19;
                      if (cResult[19] === tmp16) {
                        tmp19 = cResult[20];
                      }
                      return tmp19;
                    }
                  }
                  const obj2 = { style: tmp10, children: items };
                  items = [tmp11, tmp16];
                  const tmp22 = hasOwnProperty(React3, obj2);
                  cResult[17] = tmp10;
                  cResult[18] = tmp11;
                  cResult[19] = tmp16;
                  cResult[20] = tmp22;
                  tmp19 = tmp22;
                }
              }
            }
          }
        }
        const obj4 = { look: null, color: null, size: null, shrink: null, text: combined, textStyle: darkText, onPress: tmp15 };
        ({ look: obj3.look, color: obj3.color, size: obj3.size, shrink: obj3.shrink } = combo);
        const tmp18 = metroRequire(native.Button, obj4);
        cResult[10] = combo.color;
        cResult[11] = combo.look;
        cResult[12] = combo.shrink;
        cResult[13] = combo.size;
        cResult[14] = combined;
        cResult[15] = darkText;
        cResult[16] = tmp18;
        tmp16 = tmp18;
      }
    }
    const obj7 = { variant: "text-xs/medium", color: str2, children: items1 };
    items1 = [combined, " (", combo.count, ")"];
    const tmp13 = hasOwnProperty(Text_Text.Text, obj7);
    cResult[5] = combo.count;
    cResult[6] = combined;
    cResult[7] = str2;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  const items2 = [tmp4.comboRow, tmp6 && tmp4.darkBg];
  cResult[2] = tmp4.comboRow;
  cResult[3] = tmp6 && tmp4.darkBg;
  cResult[4] = items2;
  tmp10 = items2;
}) : ((combo) => {
  let color;
  let darkText;
  let items1;
  let items2;
  combo = combo.combo;
  const tmp = closure_13();
  ({ color, size } = combo);
  let str = "";
  if (combo.shrink) {
    str = " / shrink";
  }
  const combined = "" + color + " / " + size + str;
  const hasItem = set.has(combo.color);
  items = [tmp.comboRow, ];
  const darkBg = hasItem && tmp.darkBg;
  const obj = { style: items, children: items2 };
  items[1] = darkBg;
  let str2 = "text-muted";
  const Text = Text_Text.Text;
  if (hasItem) {
    str2 = "text-default";
  }
  const obj2 = { variant: "text-xs/medium", color: str2, children: items1 };
  items1 = [combined, " (", combo.count, ")"];
  items2 = [hasOwnProperty(Text, obj2), ];
  const obj3 = {
    look: combo.look,
    color: combo.color,
    size: combo.size,
    shrink: combo.shrink,
    text: combined,
    textStyle: darkText,
    onPress() {

    }
  };
  darkText = null;
  const Button = native.Button;
  if (hasItem) {
    darkText = null;
    if (combo.look === native.ButtonLooks.FILLED) {
      darkText = tmp.darkText;
    }
  }
  items2[1] = metroRequire(Button, obj3);
  return hasOwnProperty(React3, obj);
});
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj42 = { comboRow: { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 }, darkText: { color: nativeDefault.unsafe_rawColors.GREEN_360 }, darkBg: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 }, comparisonRow: { gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 }, comparisonButtons: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" }, comparisonSide: { flex: 1, gap: 2 }, container: { paddingBottom: nativeDefault.space.PX_48 }, header: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 } };
({ gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 });
({ color: nativeDefault.unsafe_rawColors.GREEN_360 });
({ backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600, borderRadius: nativeDefault.radii.sm, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 });
({ gap: 4, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 });
({ flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" });
({ paddingBottom: nativeDefault.space.PX_48 });
({ paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 });
let closure_13 = createStyles(obj42);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let items2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(10);
  const tmp2 = closure_13();
  if (cResult[0] !== tmp2) {
    let tmp20;
    let tmp19;
    let tmp26;
    let tmp32;
    let tmp31;
    let tmp38;
    const tmp6 = groupByLook(items);
    const obj2 = {};
    const tmp8 = getUniqueComparisons();
    const iter = tmp8[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp14 = nextResult;
      if (null == obj2[nextResult.look]) {
        obj2[tmp14.look] = [];
      }
      let arr = obj2[tmp14.look];
      let arr2 = arr.push(tmp14);
      continue;
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp24 = metroRequire(Text_Text.Text, { variant: "heading-xl/bold", children: "Migration Mapping" });
      const tmp25 = metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Legacy (uikit-native) \u2192 Mana side-by-side" });
      cResult[2] = tmp24;
      cResult[3] = tmp25;
      tmp20 = tmp25;
      tmp19 = tmp24;
    } else {
      tmp19 = cResult[2];
      tmp20 = cResult[3];
    }
    if (cResult[4] !== tmp2.header) {
      const obj3 = { spacing: 4, style: tmp2.header, children: items };
      items = [tmp19, tmp20];
      const tmp30 = hasOwnProperty(Stack_Stack.Stack, obj3);
      cResult[4] = tmp2.header;
      cResult[5] = tmp30;
      tmp26 = tmp30;
    } else {
      tmp26 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp36 = metroRequire(Text_Text.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" });
      const tmp37 = metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "41 combinations across 185 importers" });
      cResult[6] = tmp36;
      cResult[7] = tmp37;
      tmp32 = tmp37;
      tmp31 = tmp36;
    } else {
      tmp31 = cResult[6];
      tmp32 = cResult[7];
    }
    if (cResult[8] !== tmp2.header) {
      const obj4 = { spacing: 4, style: tmp2.header, children: items1 };
      items1 = [tmp31, tmp32];
      const tmp42 = hasOwnProperty(Stack_Stack.Stack, obj4);
      cResult[8] = tmp2.header;
      cResult[9] = tmp42;
      tmp38 = tmp42;
    } else {
      tmp38 = cResult[9];
    }
    const obj5 = { style: tmp2.container, children: items2 };
    items2 = [tmp26, , , ];
    const _Object = Object;
    const entries = Object.entries(obj2);
    items2[1] = entries.map((item) => {
      let arr;
      let tmp2;
      [tmp2, arr] = item;
      let obj = {
        title: tmp2,
        children: arr.map((entry, index) => {
          const obj = { entry };
          return closure_1_6(closure_1_10, obj, index);
        })
      };
      _slicedToArray(item, 2);
      const FormSection = Form.FormSection;
      return closure_1_6(FormSection, obj, "cmp-" + tmp2);
    });
    items2[2] = tmp38;
    const _Object2 = Object;
    const entries1 = Object.entries(tmp6);
    items2[3] = entries1.map((item) => {
      let arr;
      let tmp2;
      [tmp2, arr] = item;
      let obj = {
        title: "" + tmp2 + " (" + arr.reduce((acc, count) => acc + count.count, 0) + " usages)",
        children: arr.map((combo, index) => {
          const obj = { combo };
          return closure_1_6(closure_1_11, obj, index);
        })
      };
      _slicedToArray(item, 2);
      const FormSection = Form.FormSection;
      return closure_1_6(FormSection, obj, tmp2);
    });
    const tmp45 = hasOwnProperty(_false, obj5);
    cResult[0] = tmp2;
    cResult[1] = tmp45;
    tmp3 = tmp45;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let items1;
  let items2;
  const tmp = closure_13();
  let obj = {};
  const tmp2 = groupByLook(items);
  const tmp3 = getUniqueComparisons();
  const iter = tmp3[Symbol.iterator]();
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
  const obj2 = { style: tmp.container, children: items1 };
  const obj3 = { spacing: 4, style: tmp.header, children: items };
  const Stack = Stack_Stack.Stack;
  items = [metroRequire(Text_Text.Text, { variant: "heading-xl/bold", children: "Migration Mapping" }), metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Legacy (uikit-native) \u2192 Mana side-by-side" })];
  items1 = [hasOwnProperty(Stack, obj3), , , ];
  const entries = Object.entries(obj);
  items1[1] = entries.map((item) => {
    let arr;
    let tmp;
    [tmp, arr] = item;
    let obj = {
      title: tmp,
      children: arr.map((entry, index) => {
        const obj = { entry };
        return closure_1_6(closure_1_10, obj, index);
      })
    };
    const FormSection = Form.FormSection;
    return closure_1_6(FormSection, obj, "cmp-" + tmp);
  });
  const obj4 = { spacing: 4, style: tmp.header, children: items2 };
  const Stack2 = Stack_Stack.Stack;
  items2 = [metroRequire(Text_Text.Text, { variant: "heading-xl/bold", children: "Legacy Button Audit" }), metroRequire(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "41 combinations across 185 importers" })];
  items1[2] = hasOwnProperty(Stack2, obj4);
  const entries1 = Object.entries(tmp2);
  items1[3] = entries1.map((item) => {
    let arr;
    let tmp;
    [tmp, arr] = item;
    let obj = {
      title: "" + tmp + " (" + arr.reduce((acc, count) => acc + count.count, 0) + " usages)",
      children: arr.map((combo, index) => {
        const obj = { combo };
        return closure_1_6(closure_1_11, obj, index);
      })
    };
    const FormSection = Form.FormSection;
    return closure_1_6(FormSection, obj, tmp);
  });
  return hasOwnProperty(_false, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemLegacyButton.tsx");

export default tmp7;