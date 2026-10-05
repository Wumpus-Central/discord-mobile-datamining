// discord_app/modules/saved_messages/native/ForLaterCardStatusHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  icon: obj3,
  label: { flexShrink: 1 },
  actionsContainer: { marginVertical: -4, marginLeft: "auto" },
};
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  gap: 8,
  marginHorizontal: -16,
  marginTop: -16,
  paddingHorizontal: 16,
  paddingVertical: 12,
};
createStyles = createStyles.createStyles;
obj3 = {
  padding: 6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
};
let closure_6 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let IconComponent;
      let actions;
      let isCritical;
      let items;
      let label;
      let lineClamp;
      const obj = react;
      const cResult = obj.c(19);
      ({ IconComponent, label, isCritical, lineClamp, actions } = arg0);
      const tmp5 = closure_6();
      const colors = nativeDefault.colors;
      const tmp6 =
        undefined !== isCritical && isCritical ? colors.TEXT_FEEDBACK_CRITICAL : colors.INTERACTIVE_TEXT_DEFAULT;
      if (cResult[0] === IconComponent) {
        let tmp7;
        if (cResult[1] === tmp6) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === tmp5.icon) {
          let tmp9;
          if (cResult[4] === tmp7) {
            tmp9 = cResult[5];
          }
          let str = "mobile-text-heading-primary";
          if (undefined !== isCritical && isCritical) {
            str = "text-feedback-critical";
          }
          if (cResult[6] === label) {
            if (cResult[7] === lineClamp) {
              if (cResult[8] === tmp5.label) {
                let tmp13;
                if (cResult[9] === str) {
                  tmp13 = cResult[10];
                }
                if (cResult[11] === actions) {
                  let tmp16;
                  if (cResult[12] === tmp5.actionsContainer) {
                    tmp16 = cResult[13];
                  }
                  if (cResult[14] === tmp5.container) {
                    if (cResult[15] === tmp9) {
                      if (cResult[16] === tmp13) {
                        let tmp20;
                        if (cResult[17] === tmp16) {
                          tmp20 = cResult[18];
                        }
                        return tmp20;
                      }
                    }
                  }
                  const obj2 = { style: tmp5.container, children: items };
                  items = [tmp9, tmp13, tmp16];
                  const tmp23 = hasOwnProperty(View, obj2);
                  cResult[14] = tmp5.container;
                  cResult[15] = tmp9;
                  cResult[16] = tmp13;
                  cResult[17] = tmp16;
                  cResult[18] = tmp23;
                  tmp20 = tmp23;
                }
                const obj3 = { style: tmp5.actionsContainer, children: actions };
                const tmp19 = React3(View, obj3);
                cResult[11] = actions;
                cResult[12] = tmp5.actionsContainer;
                cResult[13] = tmp19;
                tmp16 = tmp19;
              }
            }
          }
          const obj4 = { variant: "text-md/semibold", color: str, style: tmp5.label, lineClamp, children: label };
          const tmp15 = React3(Text_Text.Text, obj4);
          cResult[6] = label;
          cResult[7] = lineClamp;
          cResult[8] = tmp5.label;
          cResult[9] = str;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        }
        const obj5 = { style: tmp5.icon, children: tmp7 };
        const tmp12 = React3(View, obj5);
        cResult[3] = tmp5.icon;
        cResult[4] = tmp7;
        cResult[5] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = React3(IconComponent, { size: "xxs", color: tmp6 });
      cResult[0] = IconComponent;
      cResult[1] = tmp6;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : (isCritical) => {
      let INTERACTIVE_TEXT_DEFAULT;
      let IconComponent;
      let actions;
      let items;
      let label;
      let lineClamp;
      let flag = isCritical.isCritical;
      ({ IconComponent, label } = isCritical);
      if (flag === undefined) {
        flag = false;
      }
      ({ lineClamp, actions } = isCritical);
      const tmp = closure_6();
      const obj = { style: tmp.container, children: items };
      const obj2 = {
        style: tmp.icon,
        children: React3(IconComponent, { size: "xxs", color: INTERACTIVE_TEXT_DEFAULT }),
      };
      const colors = nativeDefault.colors;
      if (flag) {
        INTERACTIVE_TEXT_DEFAULT = colors.TEXT_FEEDBACK_CRITICAL;
      } else {
        INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
      }
      items = [React3(View, obj2), ,];
      let str = "mobile-text-heading-primary";
      const Text = Text_Text.Text;
      if (flag) {
        str = "text-feedback-critical";
      }
      const obj3 = { variant: "text-md/semibold", color: str, style: tmp.label, lineClamp, children: label };
      items[1] = React3(Text, obj3);
      const obj4 = { style: tmp.actionsContainer, children: actions };
      items[2] = React3(View, obj4);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardStatusHeader.tsx");

export const ForLaterCardStatusHeader = tmp4;
