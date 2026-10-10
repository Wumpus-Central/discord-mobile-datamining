// === Module 18449: WarningNotice ===

// Module 18449 (WarningNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef13878 from "module_13878" /* 13878 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 }, horizontalContainer: { flexDirection: "row", alignItems: "center" }, message: { flex: 1, marginStart: 10, textAlignVertical: "center" }, actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" }, containerYellow: null, textYellow: null, alertIcon: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
obj2.containerYellow = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
obj2.textYellow = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.alertIcon = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WarningNotice(arg0) {
  const cResult = c.c(26);
  ({ style, notice, ctaLabel, onClick, submitting, disabled } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      if (cResult[2] === tmp4.containerYellow) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp4.alertIcon) {
        const obj2 = { style: tmp4.alertIcon, source: _modDef13878 };
        const tmp10 = React4(FastImageDefault, obj2);
        cResult[4] = tmp4.alertIcon;
        cResult[5] = tmp10;
        let tmp6 = tmp10;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.message) {
        if (cResult[7] === tmp4.textYellow) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === notice) {
          if (cResult[10] === tmp11) {
            let tmp12 = cResult[11];
          }
          if (cResult[12] === tmp4.horizontalContainer) {
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp12) {
                let tmp15 = cResult[15];
              }
              if (cResult[16] === ctaLabel) {
                if (cResult[17] === disabled) {
                  if (cResult[18] === onClick) {
                    if (cResult[19] === tmp4.actionButtonWrapper) {
                      if (cResult[20] === submitting) {
                        let tmp19 = cResult[21];
                      }
                      if (cResult[22] === tmp5) {
                        if (cResult[23] === tmp15) {
                          if (cResult[24] === tmp19) {
                            let tmp24 = cResult[25];
                          }
                          return tmp24;
                        }
                      }
                      const obj3 = { style: tmp5, children: null };
                      const items = [tmp15, tmp19];
                      obj3.children = items;
                      const tmp27 = hasOwnProperty(View, obj3);
                      cResult[22] = tmp5;
                      cResult[23] = tmp15;
                      cResult[24] = tmp19;
                      cResult[25] = tmp27;
                      tmp24 = tmp27;
                    }
                  }
                }
              }
              let tmp21 = null != onClick && null != ctaLabel;
              if (tmp21) {
                const obj4 = { style: tmp4.actionButtonWrapper, children: null };
                const obj5 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
                obj4.children = React4(components_Button_Button.Button, obj5);
                tmp21 = React4(View, obj4);
              }
              cResult[16] = ctaLabel;
              cResult[17] = disabled;
              cResult[18] = onClick;
              cResult[19] = tmp4.actionButtonWrapper;
              cResult[20] = submitting;
              cResult[21] = tmp21;
              tmp19 = tmp21;
            }
          }
          const obj6 = { style: tmp4.horizontalContainer, children: null };
          const items1 = [tmp6, tmp12];
          obj6.children = items1;
          const tmp18 = hasOwnProperty(View, obj6);
          cResult[12] = tmp4.horizontalContainer;
          cResult[13] = tmp6;
          cResult[14] = tmp12;
          cResult[15] = tmp18;
          tmp15 = tmp18;
        }
        const obj7 = { style: tmp11, variant: "text-sm/medium", color: "interactive-text-active", children: notice };
        const tmp14 = React4(Text_Text.Text, obj7);
        cResult[9] = notice;
        cResult[10] = tmp11;
        cResult[11] = tmp14;
        tmp12 = tmp14;
      }
      const items2 = [, ];
      ({ message: arr2[0], textYellow: arr2[1] } = tmp4);
      cResult[6] = tmp4.message;
      cResult[7] = tmp4.textYellow;
      cResult[8] = items2;
      tmp11 = items2;
    }
  }
  const items3 = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp4);
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = tmp4.containerYellow;
  cResult[3] = items3;
  tmp5 = items3;
}) : (function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj.style = items;
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const obj3 = { style: tmp.alertIcon, source: _modDef13878 };
  const items1 = [React4(FastImageDefault, obj3), ];
  const obj4 = { style: null, variant: "text-sm/medium", color: "interactive-text-active", children: notice };
  const items2 = [, ];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  obj4.style = items2;
  items1[1] = React4(Text_Text.Text, obj4);
  obj2.children = items1;
  const items3 = [hasOwnProperty(View, obj2), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: null };
    const obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj5.children = React4(components_Button_Button.Button, obj6);
    tmp4Result = React4(View, obj5);
  }
  items3[1] = tmp4Result;
  obj.children = items3;
  return hasOwnProperty(View, obj);
});