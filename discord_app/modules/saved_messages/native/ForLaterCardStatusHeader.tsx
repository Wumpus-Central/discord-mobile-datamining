// discord_app/modules/saved_messages/native/ForLaterCardStatusHeader.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  container: {
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
  },
  icon: null,
  label: null,
  actionsContainer: null,
};
let obj2 = {
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
obj.icon = {
  padding: 6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
};
obj.label = { flexShrink: 1 };
obj.actionsContainer = { marginVertical: -4, marginLeft: "auto" };
let closure_6 = createStyles.createStyles(obj);
let obj3 = {
  padding: 6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
};
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardStatusHeader.tsx");

export const ForLaterCardStatusHeader = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForLaterCardStatusHeader(arg0) {
      const cResult = c.c(19);
      ({ IconComponent, label, isCritical, lineClamp, actions } = arg0);
      const tmp5 = closure_6();
      const colors = nativeDefault.colors;
      const tmp6 =
        undefined !== isCritical && isCritical ? colors.TEXT_FEEDBACK_CRITICAL : colors.INTERACTIVE_TEXT_DEFAULT;
      if (cResult[0] === IconComponent) {
        if (cResult[1] === tmp6) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === tmp5.icon) {
          if (cResult[4] === tmp7) {
            let tmp9 = cResult[5];
          }
          let str = "mobile-text-heading-primary";
          if (tmp4) {
            str = "text-feedback-critical";
          }
          if (cResult[6] === label) {
            if (cResult[7] === lineClamp) {
              if (cResult[8] === tmp5.label) {
                if (cResult[9] === str) {
                  let tmp13 = cResult[10];
                }
                if (cResult[11] === actions) {
                  if (cResult[12] === tmp5.actionsContainer) {
                    let tmp16 = cResult[13];
                  }
                  if (cResult[14] === tmp5.container) {
                    if (cResult[15] === tmp9) {
                      if (cResult[16] === tmp13) {
                        if (cResult[17] === tmp16) {
                          let tmp20 = cResult[18];
                        }
                        return tmp20;
                      }
                    }
                  }
                  const obj2 = { style: tmp5.container, children: null };
                  const items = [tmp9, tmp13, tmp16];
                  obj2.children = items;
                  const tmp23 = hasOwnProperty(View, obj2);
                  cResult[14] = tmp5.container;
                  cResult[15] = tmp9;
                  cResult[16] = tmp13;
                  cResult[17] = tmp16;
                  cResult[18] = tmp23;
                  tmp20 = tmp23;
                }
                const obj3 = { style: tmp5.actionsContainer, children: actions };
                const tmp19 = React4(View, obj3);
                cResult[11] = actions;
                cResult[12] = tmp5.actionsContainer;
                cResult[13] = tmp19;
                tmp16 = tmp19;
              }
            }
          }
          const obj4 = { variant: "text-md/semibold", color: str, style: tmp5.label, lineClamp, children: label };
          const tmp15 = React4(Text_Text.Text, obj4);
          cResult[6] = label;
          cResult[7] = lineClamp;
          cResult[8] = tmp5.label;
          cResult[9] = str;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        }
        const obj5 = { style: tmp5.icon, children: tmp7 };
        const tmp12 = React4(View, obj5);
        cResult[3] = tmp5.icon;
        cResult[4] = tmp7;
        cResult[5] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = React4(IconComponent, { size: "xxs", color: tmp6 });
      cResult[0] = IconComponent;
      cResult[1] = tmp6;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : function ForLaterCardStatusHeader(isCritical) {
      let flag = isCritical.isCritical;
      ({ IconComponent, label } = isCritical);
      if (flag === undefined) {
        flag = false;
      }
      ({ lineClamp, actions } = isCritical);
      const tmp = closure_6();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.icon, children: null };
      const colors = nativeDefault.colors;
      if (flag) {
        let INTERACTIVE_TEXT_DEFAULT = colors.TEXT_FEEDBACK_CRITICAL;
      } else {
        INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
      }
      obj2.children = React4(IconComponent, { size: "xxs", color: INTERACTIVE_TEXT_DEFAULT });
      const items = [React4(View, obj2), ,];
      let str = "mobile-text-heading-primary";
      if (flag) {
        str = "text-feedback-critical";
      }
      items[1] = React4(Text_Text.Text, {
        variant: "text-md/semibold",
        color: str,
        style: tmp.label,
        lineClamp,
        children: label,
      });
      items[2] = React4(View, { style: tmp.actionsContainer, children: actions });
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
