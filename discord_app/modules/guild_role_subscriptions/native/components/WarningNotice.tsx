// === Module 19751: WarningNotice ===

// Module 19751 (WarningNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7072 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 }, horizontalContainer: { flexDirection: "row", alignItems: "center" }, message: { flex: 1, marginStart: 10, textAlignVertical: "center" }, actionButtonWrapper: { marginTop: 24, alignSelf: "center", width: "100%" }, containerYellow: null, alertIcon: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 12 };
obj2.containerYellow = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
obj2.alertIcon = { alignSelf: "flex-start", width: 20, height: 20 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WarningNotice(arg0) {
  const cResult = c.c(23);
  ({ style, notice, ctaLabel, onClick, submitting, disabled } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      if (cResult[2] === tmp4.containerYellow) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp4.alertIcon) {
        const obj2 = { style: tmp4.alertIcon, size: "custom", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, secondaryColor: nativeDefault.colors.WHITE };
        const tmp9 = React4(CircleErrorIcon.CircleErrorIcon, obj2);
        cResult[4] = tmp4.alertIcon;
        cResult[5] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[6] === notice) {
        if (cResult[7] === tmp4.message) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === tmp4.horizontalContainer) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp10) {
              let tmp13 = cResult[12];
            }
            if (cResult[13] === ctaLabel) {
              if (cResult[14] === disabled) {
                if (cResult[15] === onClick) {
                  if (cResult[16] === tmp4.actionButtonWrapper) {
                    if (cResult[17] === submitting) {
                      let tmp17 = cResult[18];
                    }
                    if (cResult[19] === tmp5) {
                      if (cResult[20] === tmp13) {
                        if (cResult[21] === tmp17) {
                          let tmp22 = cResult[22];
                        }
                        return tmp22;
                      }
                    }
                    const obj3 = { style: tmp5, children: null };
                    const items = [tmp13, tmp17];
                    obj3.children = items;
                    const tmp25 = hasOwnProperty(View, obj3);
                    cResult[19] = tmp5;
                    cResult[20] = tmp13;
                    cResult[21] = tmp17;
                    cResult[22] = tmp25;
                    tmp22 = tmp25;
                  }
                }
              }
            }
            let tmp19 = null != onClick && null != ctaLabel;
            if (tmp19) {
              const obj4 = { style: tmp4.actionButtonWrapper, children: null };
              const obj5 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
              obj4.children = React4(components_Button_Button.Button, obj5);
              tmp19 = React4(View, obj4);
            }
            cResult[13] = ctaLabel;
            cResult[14] = disabled;
            cResult[15] = onClick;
            cResult[16] = tmp4.actionButtonWrapper;
            cResult[17] = submitting;
            cResult[18] = tmp19;
            tmp17 = tmp19;
          }
        }
        const obj6 = { style: tmp4.horizontalContainer, children: null };
        const items1 = [tmp6, tmp10];
        obj6.children = items1;
        const tmp16 = hasOwnProperty(View, obj6);
        cResult[9] = tmp4.horizontalContainer;
        cResult[10] = tmp6;
        cResult[11] = tmp10;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      const obj7 = { style: tmp4.message, variant: "text-sm/medium", color: "text-feedback-warning", children: notice };
      const tmp12 = React4(Text_Text.Text, obj7);
      cResult[6] = notice;
      cResult[7] = tmp4.message;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
  }
  const items2 = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp4);
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = tmp4.containerYellow;
  cResult[3] = items2;
  tmp5 = items2;
}) : (function WarningNotice(arg0) {
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj.style = items;
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const items1 = [React4(CircleErrorIcon.CircleErrorIcon, { style: tmp.alertIcon, size: "custom", color: nativeDefault.colors.ICON_FEEDBACK_WARNING, secondaryColor: nativeDefault.colors.WHITE }), React4(Text_Text.Text, { style: tmp.message, variant: "text-sm/medium", color: "text-feedback-warning", children: notice })];
  obj2.children = items1;
  const items2 = [hasOwnProperty(View, obj2), ];
  let tmp4Result = null != onClick && null != ctaLabel;
  if (tmp4Result) {
    const obj5 = { style: tmp.actionButtonWrapper, children: null };
    const obj6 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj5.children = React4(components_Button_Button.Button, obj6);
    tmp4Result = React4(View, obj5);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  return hasOwnProperty(View, obj);
});