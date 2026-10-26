// === Module 19225: EligibilityChecklist ===

// Module 19225 (EligibilityChecklist)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import CircleXIcon from "CircleXIcon" /* 7018 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7267 */;
import FormSeparatorDefault from "FormSeparator" /* 16574 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4971);
let closure_7 = createStyles.createStyles({ row: { paddingHorizontal: 24, paddingTop: 16, flex: 0, flexDirection: "row" }, eligibleRow: { opacity: 0.8 }, rowStatusIcon: { height: 20, width: 20, marginRight: 16 }, rowTextColumn: { flex: 1, flexDirection: "column" }, rowLabel: { marginBottom: 4 }, actionButtonWrapper: { marginTop: 12 }, divider: { marginHorizontal: 24 }, lastRowSpacer: { height: 16 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function EligibilityChecklistRow(arg0) {
  const cResult = c.c(31);
  ({ isLast, item } = arg0);
  let lastRowSpacer = closure_7();
  if (cResult[0] === item.checked) {
    if (cResult[1] === lastRowSpacer.rowStatusIcon) {
      if (cResult[3] === lastRowSpacer.rowTextColumn) {
        if (cResult[4] === tmp9) {
          let tmp10 = cResult[5];
        }
        const tmp11 = item.checked ? item.checkedLabel : item.uncheckedLabel;
        if (cResult[6] === lastRowSpacer.rowLabel) {
          if (cResult[7] === tmp11) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] !== item.description) {
            const obj2 = { variant: "text-sm/normal", color: "interactive-text-default", children: item.description };
            const tmp17 = React4(Text_Text.Text, obj2);
            cResult[9] = item.description;
            cResult[10] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] === item.actionHandler) {
            if (cResult[12] === item.actionLabel) {
              if (cResult[13] === lastRowSpacer.actionButtonWrapper) {
                let tmp18 = cResult[14];
              }
              if (cResult[15] === tmp10) {
                if (cResult[16] === tmp12) {
                  if (cResult[17] === tmp15) {
                    if (cResult[18] === tmp18) {
                      let tmp23 = cResult[19];
                    }
                    if (cResult[20] === lastRowSpacer.row) {
                      if (cResult[21] === tmp4) {
                        if (cResult[22] === tmp23) {
                          let tmp27 = cResult[23];
                        }
                        if (cResult[24] === isLast) {
                          if (cResult[25] === lastRowSpacer.divider) {
                            if (cResult[26] === lastRowSpacer.lastRowSpacer) {
                              if (cResult[28] === cResult[27]) {
                                if (cResult[29] === tmp27) {
                                  let tmp37 = cResult[30];
                                }
                                return tmp37;
                              }
                              const obj3 = { children: null };
                              const items = [tmp27, cResult[27]];
                              obj3.children = items;
                              const tmp40 = hasOwnProperty(timestampProducer, obj3);
                              cResult[28] = cResult[27];
                              cResult[29] = tmp27;
                              cResult[30] = tmp40;
                              tmp37 = tmp40;
                            }
                          }
                        }
                        if (isLast) {
                          const obj4 = { style: lastRowSpacer.lastRowSpacer };
                          let tmp32Result = React4(View, obj4);
                        } else {
                          const obj5 = { style: lastRowSpacer.divider };
                          tmp32Result = React4(FormSeparatorDefault, obj5);
                        }
                        cResult[24] = isLast;
                        isLast = lastRowSpacer.divider;
                        cResult[25] = isLast;
                        lastRowSpacer = lastRowSpacer.lastRowSpacer;
                        cResult[26] = lastRowSpacer;
                        cResult[27] = tmp32Result;
                      }
                    }
                    const obj6 = { style: lastRowSpacer.row, children: null };
                    const items1 = [tmp4, tmp23];
                    obj6.children = items1;
                    const tmp30 = hasOwnProperty(View, obj6);
                    cResult[20] = lastRowSpacer.row;
                    cResult[21] = tmp4;
                    cResult[22] = tmp23;
                    cResult[23] = tmp30;
                    tmp27 = tmp30;
                  }
                }
              }
              const obj8 = { style: tmp10, children: null };
              const items2 = [tmp12, tmp15, tmp18];
              obj8.children = items2;
              const tmp26 = hasOwnProperty(View, obj8);
              cResult[15] = tmp10;
              cResult[16] = tmp12;
              cResult[17] = tmp15;
              cResult[18] = tmp18;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
          }
          let tmp20 = null != item.actionHandler && null != item.actionLabel;
          if (tmp20) {
            const obj9 = { style: lastRowSpacer.actionButtonWrapper, children: null };
            ({ actionLabel: obj7.text, actionHandler: obj7.onPress } = item);
            obj9.children = React4(components_Button_Button.Button, { text: null, onPress: null, grow: true });
            tmp20 = React4(View, obj9);
            const obj10 = { text: null, onPress: null, grow: true };
          }
          cResult[11] = item.actionHandler;
          cResult[12] = item.actionLabel;
          cResult[13] = lastRowSpacer.actionButtonWrapper;
          cResult[14] = tmp20;
          tmp18 = tmp20;
        }
        const obj11 = { style: lastRowSpacer.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp11 };
        const tmp14 = React4(Text_Text.Text, obj11);
        cResult[6] = lastRowSpacer.rowLabel;
        cResult[7] = tmp11;
        cResult[8] = tmp14;
        tmp12 = tmp14;
      }
      const items3 = [lastRowSpacer.rowTextColumn, item.checked && lastRowSpacer.eligibleRow];
      cResult[3] = lastRowSpacer.rowTextColumn;
      cResult[4] = item.checked && lastRowSpacer.eligibleRow;
      cResult[5] = items3;
      tmp10 = items3;
    }
  }
  if (item.checked) {
    const obj12 = { style: lastRowSpacer.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    let tmp5Result = React4(CircleCheckIcon.CircleCheckIcon, obj12);
  } else {
    const obj23 = { style: lastRowSpacer.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    tmp5Result = React4(CircleXIcon.CircleXIcon, obj23);
  }
  cResult[0] = item.checked;
  cResult[1] = lastRowSpacer.rowStatusIcon;
  cResult[2] = tmp5Result;
}) : (function EligibilityChecklistRow(item) {
  item = item.item;
  const tmp = closure_7();
  const obj = { style: tmp.row, children: null };
  if (item.checked) {
    const obj2 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    let tmp5Result = React4(CircleCheckIcon.CircleCheckIcon, obj2);
    let tmp10 = require;
    let tmp12 = importDefault;
    let tmp13 = React4;
  } else {
    const obj3 = { style: tmp.rowStatusIcon, size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, secondaryColor: nativeDefault.colors.WHITE };
    tmp5Result = React4(CircleXIcon.CircleXIcon, obj3);
    tmp10 = require;
    tmp12 = importDefault;
    tmp13 = React4;
  }
  const items = [tmp5Result, ];
  const items1 = [tmp.rowTextColumn, ];
  const obj4 = { style: items1, children: null };
  items1[1] = item.checked && tmp.eligibleRow;
  const items2 = [tmp13(tmp10(5234).Text, { style: tmp.rowLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: item.checked ? item.checkedLabel : item.uncheckedLabel }), tmp13(tmp10(5234).Text, { variant: "text-sm/normal", color: "interactive-text-default", children: item.description }), ];
  let tmp13Result = null != item.actionHandler && null != item.actionLabel;
  if (tmp13Result) {
    const obj7 = { style: tmp.actionButtonWrapper, children: null };
    ({ actionLabel: obj8.text, actionHandler: obj8.onPress } = item);
    obj7.children = tmp13(tmp10(5244).Button, { text: null, onPress: null, grow: true });
    tmp13Result = tmp13(View, obj7);
    const obj9 = { text: null, onPress: null, grow: true };
  }
  items2[2] = tmp13Result;
  obj4.children = items2;
  items[1] = hasOwnProperty(View, obj4);
  obj.children = items;
  const children = [hasOwnProperty(View, obj), ];
  const obj17 = { style: null };
  if (item.isLast) {
    obj17.style = tmp.lastRowSpacer;
    let tmp13Result2 = tmp13(View, obj17);
  } else {
    obj17.style = tmp.divider;
    tmp13Result2 = tmp13(tmp12(16574), obj17);
  }
  children[1] = tmp13Result2;
  return hasOwnProperty(timestampProducer, { children });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EligibilityChecklist(style) {
  const cResult = items(576).c(7);
  items = style.items;
  style = style.style;
  let num = 0;
  if (0 === items.length) {
    return null;
  } else if (cResult[0] !== items) {
    if (cResult[2] !== items.length) {
      const fn = function c(item, arg1) {
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
}) : (function EligibilityChecklist(items) {
  items = items.items;
  if (0 === items.length) {
    return null;
  } else {
    const obj = { style: tmp, children: items.map((item, index) => React4(closure_8, { item, isLast: index === items.length - 1 }, item.checkedLabel)) };
    return closure_4(View, obj);
  }
});