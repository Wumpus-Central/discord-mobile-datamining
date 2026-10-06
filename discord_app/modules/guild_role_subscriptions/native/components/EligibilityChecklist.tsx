// === Module 17934: EligibilityChecklist ===

// Module 17934 (EligibilityChecklist)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FastImageDefault from "FastImage" /* 5981 */;
import FormSeparatorDefault from "FormSeparator" /* 15050 */;
import AssetRegistryDefault from "AssetRegistry" /* 17935 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17936 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isLast;
  let item;
  let items;
  let items1;
  let items2;
  let obj9;
  const obj = react2;
  const cResult = obj.c(30);
  ({ isLast, item } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === tmp4.row) {
    let tmp6;
    let tmp7Result;
    let tmp9;
    if (cResult[1] === (item.checked && tmp4.eligibleRow)) {
      tmp6 = cResult[2];
    }
    if (item.checked) {
      tmp7Result = AssetRegistryDefault;
      tmp9 = importDefault;
    } else {
      tmp7Result = AssetRegistryDefault2;
      tmp9 = importDefault;
    }
    if (cResult[3] === tmp4.rowStatusIcon) {
      let tmp10;
      if (cResult[4] === tmp7Result) {
        tmp10 = cResult[5];
      }
      const tmp13 = item.checked ? item.checkedLabel : item.uncheckedLabel;
      if (cResult[6] === tmp4.rowLabel) {
        let tmp14;
        let tmp17;
        if (cResult[7] === tmp13) {
          tmp14 = cResult[8];
        }
        if (cResult[9] !== item.description) {
          const obj2 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
          const tmp19 = React3(Text_Text.Text, obj2);
          cResult[9] = item.description;
          cResult[10] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] === item.actionHandler) {
          if (cResult[12] === item.actionLabel) {
            let tmp20;
            if (cResult[13] === tmp4.actionButtonWrapper) {
              tmp20 = cResult[14];
            }
            if (cResult[15] === tmp4.rowTextColumn) {
              if (cResult[16] === tmp14) {
                if (cResult[17] === tmp17) {
                  let tmp25;
                  if (cResult[18] === tmp20) {
                    tmp25 = cResult[19];
                  }
                  if (cResult[20] === tmp6) {
                    if (cResult[21] === tmp10) {
                      let tmp29;
                      let tmp34Result;
                      if (cResult[22] === tmp25) {
                        tmp29 = cResult[23];
                      }
                      if (cResult[24] === isLast) {
                        let tmp33;
                        if (cResult[25] === tmp4.divider) {
                          tmp33 = cResult[26];
                        }
                        if (cResult[27] === tmp29) {
                          let tmp36;
                          if (cResult[28] === tmp33) {
                            tmp36 = cResult[29];
                          }
                          return tmp36;
                        }
                        const obj3 = { children: items };
                        items = [tmp29, tmp33];
                        const tmp39 = hasOwnProperty(metroRequire, obj3);
                        cResult[27] = tmp29;
                        cResult[28] = tmp33;
                        cResult[29] = tmp39;
                        tmp36 = tmp39;
                      }
                      if (isLast) {
                        tmp34Result = React3(native.Spacer, { size: 16 });
                      } else {
                        const obj4 = { style: tmp4.divider };
                        tmp34Result = React3(tmp9(15050), obj4);
                      }
                      cResult[24] = isLast;
                      cResult[25] = tmp4.divider;
                      cResult[26] = tmp34Result;
                      tmp33 = tmp34Result;
                    }
                  }
                  const obj5 = { style: tmp6, children: items1 };
                  items1 = [tmp10, tmp25];
                  const tmp32 = hasOwnProperty(View, obj5);
                  cResult[20] = tmp6;
                  cResult[21] = tmp10;
                  cResult[22] = tmp25;
                  cResult[23] = tmp32;
                  tmp29 = tmp32;
                }
              }
            }
            const obj7 = { style: tmp4.rowTextColumn, children: items2 };
            items2 = [tmp14, tmp17, tmp20];
            const tmp28 = hasOwnProperty(View, obj7);
            cResult[15] = tmp4.rowTextColumn;
            cResult[16] = tmp14;
            cResult[17] = tmp17;
            cResult[18] = tmp20;
            cResult[19] = tmp28;
            tmp25 = tmp28;
          }
        }
        let tmp22 = null != item.actionHandler && null != item.actionLabel;
        if (tmp22) {
          const obj8 = { style: tmp4.actionButtonWrapper, children: React3(components_Button_Button.Button, obj9) };
          obj9 = { text: null, onPress: null, grow: true };
          ({ actionLabel: obj6.text, actionHandler: obj6.onPress } = item);
          tmp22 = React3(View, obj8);
        }
        cResult[11] = item.actionHandler;
        cResult[12] = item.actionLabel;
        cResult[13] = tmp4.actionButtonWrapper;
        cResult[14] = tmp22;
        tmp20 = tmp22;
      }
      const obj10 = { style: tmp4.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp13 };
      const tmp16 = React3(Text_Text.Text, obj10);
      cResult[6] = tmp4.rowLabel;
      cResult[7] = tmp13;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
    const obj19 = { style: tmp4.rowStatusIcon, source: tmp7Result };
    const tmp12 = React3(tmp9(5981), obj19);
    cResult[3] = tmp4.rowStatusIcon;
    cResult[4] = tmp7Result;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  }
  const items3 = [tmp4.row, item.checked && tmp4.eligibleRow];
  cResult[0] = tmp4.row;
  cResult[1] = item.checked && tmp4.eligibleRow;
  cResult[2] = items3;
  tmp6 = items3;
}) : ((item) => {
  let items1;
  let items2;
  let obj8;
  let tmp5Result2;
  let tmp6Result;
  item = item.item;
  const isLast = item.isLast;
  const tmp = closure_7();
  const items = [tmp.row, ];
  const eligibleRow = item.checked && tmp.eligibleRow;
  const obj = { style: items, children: items1 };
  items[1] = eligibleRow;
  const obj2 = { style: tmp.rowStatusIcon, source: tmp6Result };
  const tmp8 = FastImageDefault;
  if (item.checked) {
    tmp6Result = AssetRegistryDefault;
  } else {
    tmp6Result = AssetRegistryDefault2;
  }
  items1 = [React3(tmp8, obj2), ];
  const obj3 = { style: tmp.rowTextColumn, children: items2 };
  items2 = [, , ];
  const obj4 = { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel };
  items2[0] = React3(Text_Text.Text, obj4);
  const obj5 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
  items2[1] = React3(Text_Text.Text, obj5);
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj6 = { style: tmp.actionButtonWrapper, children: React3(components_Button_Button.Button, obj8) };
    obj8 = { text: null, onPress: null, grow: true };
    ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
    tmp5Result = React3(View, obj6);
  }
  items2[2] = tmp5Result;
  items1[1] = hasOwnProperty(View, obj3);
  const children = [hasOwnProperty(View, obj), ];
  if (isLast) {
    tmp5Result2 = React3(native.Spacer, { size: 16 });
  } else {
    const obj15 = { style: tmp.divider };
    tmp5Result2 = React3(FormSeparatorDefault, obj15);
  }
  children[1] = tmp5Result2;
  return hasOwnProperty(metroRequire, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let items;
  let obj = items(576);
  const cResult = obj.c(7);
  items = style.items;
  style = style.style;
  if (0 === items.length) {
    return null;
  } else {
    let tmp2;
    if (cResult[0] !== items) {
      let tmp3;
      if (cResult[2] !== items.length) {
        const fn = function o(item, arg1) {
          const obj = { item, isLast: arg1 === items.length - 1 };
          return React3(closure_8, obj, item.checkedLabel);
        };
        cResult[2] = items.length;
        cResult[3] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[3];
      }
      const mapped = items.map(tmp3);
      cResult[0] = items;
      cResult[1] = mapped;
      tmp2 = mapped;
    } else {
      tmp2 = cResult[1];
    }
    if (cResult[4] === tmp2) {
      let tmp5;
      if (cResult[5] === style) {
        tmp5 = cResult[6];
      }
      return tmp5;
    }
    const obj2 = { style, children: tmp2 };
    const tmp8 = closure_4(View, obj2);
    cResult[4] = tmp2;
    cResult[5] = style;
    cResult[6] = tmp8;
    tmp5 = tmp8;
  }
}) : ((items) => {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    let obj = {
      style: tmp,
      children: items.map((item, index) => {
          const obj = { item, isLast: index === items.length - 1 };
          return React3(closure_8, obj, item.checkedLabel);
        })
    };
    return closure_4(View, obj);
  }
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default tmp4;