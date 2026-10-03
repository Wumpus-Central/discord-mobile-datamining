// === Module 17864: EligibilityChecklist ===

// Module 17864 (EligibilityChecklist)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 5974 */;
import FormSeparatorDefault from "FormSeparator" /* 15031 */;
import _modDef17865 from "module_17865" /* 17865 */;
import _modDef17866 from "module_17866" /* 17866 */;
import noop from "module_19" /* 19 */;

const native = Spacer(1188);
const Text_Text = Spacer(4886);
const components_Button_Button = Spacer(5594);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Spacer = require;
  let obj = dependencyMap;
  const cResult = c.c(30);
  ({ isLast, item } = arg0);
  let divider = closure_7();
  if (cResult[0] === divider.row) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    if (item.checked) {
      let tmp4Result = _modDef17865;
      let tmp6 = importDefault;
    } else {
      tmp4Result = _modDef17866;
      tmp6 = importDefault;
    }
    if (cResult[3] === divider.rowStatusIcon) {
      if (cResult[4] === tmp4Result) {
        let tmp7 = cResult[5];
      }
      const tmp10 = item.checked ? item.checkedLabel : item.uncheckedLabel;
      if (cResult[6] === divider.rowLabel) {
        if (cResult[7] === tmp10) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] !== item.description) {
          const obj3 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
          const tmp16 = React4(Text_Text.Text, obj3);
          cResult[9] = item.description;
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] === item.actionHandler) {
          if (cResult[12] === item.actionLabel) {
            if (cResult[13] === divider.actionButtonWrapper) {
              let tmp17 = cResult[14];
            }
            if (cResult[15] === divider.rowTextColumn) {
              if (cResult[16] === tmp11) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === tmp17) {
                    let tmp22 = cResult[19];
                  }
                  if (cResult[20] === tmp3) {
                    if (cResult[21] === tmp7) {
                      if (cResult[22] === tmp22) {
                        let tmp26 = cResult[23];
                      }
                      if (cResult[24] === isLast) {
                        if (cResult[25] === divider.divider) {
                          if (cResult[27] === tmp26) {
                            if (cResult[28] === tmp30) {
                              let tmp34 = cResult[29];
                            }
                            return tmp34;
                          }
                          const obj4 = { children: null };
                          const items = [tmp26, cResult[26]];
                          obj4.children = items;
                          const tmp37 = hasOwnProperty(timestampProducer, obj4);
                          cResult[27] = tmp26;
                          cResult[28] = cResult[26];
                          cResult[29] = tmp37;
                          tmp34 = tmp37;
                        }
                      }
                      if (isLast) {
                        Spacer = native.Spacer;
                        obj = { size: 16 };
                        let tmp31Result = React4(Spacer, obj);
                      } else {
                        const obj5 = { style: divider.divider };
                        tmp31Result = React4(tmp6(15031), obj5);
                      }
                      cResult[24] = isLast;
                      divider = divider.divider;
                      cResult[25] = divider;
                      cResult[26] = tmp31Result;
                    }
                  }
                  const obj6 = { style: tmp3, children: null };
                  const items1 = [tmp7, tmp22];
                  obj6.children = items1;
                  const tmp29 = hasOwnProperty(View, obj6);
                  cResult[20] = tmp3;
                  cResult[21] = tmp7;
                  cResult[22] = tmp22;
                  cResult[23] = tmp29;
                  tmp26 = tmp29;
                }
              }
            }
            const obj8 = { style: divider.rowTextColumn, children: null };
            const items2 = [tmp11, tmp14, tmp17];
            obj8.children = items2;
            const tmp25 = hasOwnProperty(View, obj8);
            cResult[15] = divider.rowTextColumn;
            cResult[16] = tmp11;
            cResult[17] = tmp14;
            cResult[18] = tmp17;
            cResult[19] = tmp25;
            tmp22 = tmp25;
          }
        }
        let tmp19 = null != item.actionHandler && null != item.actionLabel;
        if (tmp19) {
          const obj9 = { style: divider.actionButtonWrapper, children: null };
          ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
          obj9.children = React4(components_Button_Button.Button, { text: null, onPress: null, grow: true });
          tmp19 = React4(View, obj9);
          const obj10 = { text: null, onPress: null, grow: true };
        }
        cResult[11] = item.actionHandler;
        cResult[12] = item.actionLabel;
        cResult[13] = divider.actionButtonWrapper;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
      const obj11 = { style: divider.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp10 };
      const tmp13 = React4(Text_Text.Text, obj11);
      cResult[6] = divider.rowLabel;
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
    const obj20 = { style: divider.rowStatusIcon, source: tmp4Result };
    const tmp9 = React4(tmp6(5974), obj20);
    cResult[3] = divider.rowStatusIcon;
    cResult[4] = tmp4Result;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const items3 = [divider.row, item.checked && divider.eligibleRow];
  cResult[0] = divider.row;
  cResult[1] = item.checked && divider.eligibleRow;
  cResult[2] = items3;
  tmp3 = items3;
}) : ((item) => {
  item = item.item;
  const tmp = closure_7();
  const items = [tmp.row, ];
  let eligibleRow = item.checked;
  if (eligibleRow) {
    eligibleRow = tmp.eligibleRow;
  }
  const obj = { style: items, children: null };
  items[1] = eligibleRow;
  const obj2 = { style: tmp.rowStatusIcon, source: null };
  if (item.checked) {
    let tmp6Result = _modDef17865;
  } else {
    tmp6Result = _modDef17866;
  }
  obj2.source = tmp6Result;
  const items1 = [React4(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.rowTextColumn, children: null };
  const items2 = [React4(Text_Text.Text, { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel }), React4(Text_Text.Text, { variant: "text-sm/normal", color: "interactive-text-default", children: item.description }), ];
  let tmp5Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp5Result) {
    const obj6 = { style: tmp.actionButtonWrapper, children: null };
    ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
    obj6.children = React4(components_Button_Button.Button, { text: null, onPress: null, grow: true });
    tmp5Result = React4(View, obj6);
    const obj8 = { text: null, onPress: null, grow: true };
  }
  items2[2] = tmp5Result;
  obj3.children = items2;
  items1[1] = hasOwnProperty(View, obj3);
  obj.children = items1;
  const children = [hasOwnProperty(View, obj), ];
  if (item.isLast) {
    let tmp5Result2 = React4(native.Spacer, { size: 16 });
  } else {
    const obj15 = { style: tmp.divider };
    tmp5Result2 = React4(FormSeparatorDefault, obj15);
  }
  children[1] = tmp5Result2;
  return hasOwnProperty(timestampProducer, { children });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = items(576).c(7);
  items = style.items;
  style = style.style;
  let num = 0;
  if (0 === items.length) {
    return null;
  } else if (cResult[0] !== items) {
    if (cResult[2] !== items.length) {
      const fn = function o(item, arg1) {
        return React4(closure_8, { item, isLast: arg1 === items.length - 1 }, item.checkedLabel);
      };
      cResult[2] = items.length;
      cResult[3] = fn;
      let tmp3 = fn;
    } else {
      tmp3 = cResult[3];
    }
    const mapped = items.map(tmp3);
    cResult[num] = items;
    num = 1;
    cResult[1] = mapped;
  } else {
    if (cResult[4] === cResult[1]) {
      if (cResult[5] === style) {
        let tmp6 = cResult[6];
      }
      return tmp6;
    }
    const obj2 = { style, children: cResult[1] };
    const tmp9 = closure_4(View, obj2);
    cResult[4] = cResult[1];
    cResult[5] = style;
    cResult[6] = tmp9;
    tmp6 = tmp9;
  }
  const obj = items(576);
}) : ((items) => {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: tmp, children: items.map((item, index) => React4(closure_8, { item, isLast: index === items.length - 1 }, item.checkedLabel)) };
    return closure_4(View, obj);
  }
});