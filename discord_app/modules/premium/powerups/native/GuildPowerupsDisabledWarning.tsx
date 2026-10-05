// discord_app/modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import WarningIcon2 from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let text;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, text: { flex: 1 } };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  borderColor: nativeDefault.colors.STATUS_WARNING_BACKGROUND,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
};
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      let first;
      let items;
      const obj = react;
      const cResult = obj.c(7);
      text = text.text;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
        const WarningIcon = WarningIcon2.WarningIcon;
        const tmp8 = React3(WarningIcon, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.text) {
        let tmp9;
        if (cResult[2] === text) {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.container) {
          let tmp11;
          if (cResult[5] === tmp9) {
            tmp11 = cResult[6];
          }
          return tmp11;
        }
        const obj3 = { style: tmp4.container, children: items };
        items = [first, tmp9];
        const tmp14 = hasOwnProperty(View, obj3);
        cResult[4] = tmp4.container;
        cResult[5] = tmp9;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
      const obj4 = { style: tmp4.text, variant: "text-md/semibold", color: "text-feedback-warning", children: text };
      const tmp10 = React3(Text_Text.Text, obj4);
      cResult[1] = tmp4.text;
      cResult[2] = text;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : (text) => {
      let items;
      text = text.text;
      const tmp = closure_6();
      const obj = { style: tmp.container, children: items };
      const obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
      const WarningIcon = WarningIcon2.WarningIcon;
      items = [React3(WarningIcon, obj2)];
      const obj3 = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: text };
      items[1] = React3(Text_Text.Text, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default tmp3;
