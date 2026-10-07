// discord_app/modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
    padding: nativeDefault.space.PX_12,
    backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  },
  text: { flex: 1 },
};
let closure_6 = createStyles.createStyles(obj);
let obj2 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      const cResult = c.c(7);
      text = text.text;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
        const tmp8 = React4(WarningIcon.WarningIcon, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.text) {
        if (cResult[2] === text) {
          let tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.container) {
          if (cResult[5] === tmp9) {
            let tmp11 = cResult[6];
          }
          return tmp11;
        }
        const obj3 = { style: tmp4.container, children: null };
        const items = [first, tmp9];
        obj3.children = items;
        const tmp14 = hasOwnProperty(View, obj3);
        cResult[4] = tmp4.container;
        cResult[5] = tmp9;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = React4(Text_Text.Text, {
        style: tmp4.text,
        variant: "text-md/semibold",
        color: "text-feedback-warning",
        children: text,
      });
      cResult[1] = tmp4.text;
      cResult[2] = text;
      cResult[3] = tmp10;
      tmp9 = tmp10;
      const obj4 = { style: tmp4.text, variant: "text-md/semibold", color: "text-feedback-warning", children: text };
    }
  : (children) => {
      const tmp = closure_6();
      const obj = { style: tmp.container, children: null };
      const items = [
        React4(WarningIcon.WarningIcon, { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" }),
        React4(Text_Text.Text, {
          style: tmp.text,
          variant: "text-md/semibold",
          color: "text-feedback-warning",
          children: children.text,
        }),
      ];
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
