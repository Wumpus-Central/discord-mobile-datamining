// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let animatedStyles;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { messagesHeaderContainer: obj2 };
obj2 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  alignItems: "center",
  marginHorizontal: nativeDefault.space.PX_24,
};
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animatedStyles) => {
      let first;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(6);
      animatedStyles = animatedStyles.animatedStyles;
      const tmp4 = closure_4();
      const messagesHeaderContainer = tmp4.messagesHeaderContainer;
      const textNormal = animatedStyles.textNormal;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.OIgYlQ);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== animatedStyles.textNormal) {
        const tmp9 = jsx(Text_Text.Text, {
          animated: true,
          style: textNormal,
          variant: "text-lg/bold",
          children: first,
        });
        cResult[1] = animatedStyles.textNormal;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.messagesHeaderContainer) {
        let tmp10;
        if (cResult[4] === tmp7) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = <View style={messagesHeaderContainer}>{tmp7}</View>;
      cResult[3] = tmp4.messagesHeaderContainer;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : (animatedStyles) => {
      let intl;
      animatedStyles = animatedStyles.animatedStyles;
      ({
        animated: true,
        style: animatedStyles.textNormal,
        variant: "text-lg/bold",
        children: intl.string(intl2.t.OIgYlQ),
      });
      const Text = Text_Text.Text;
      intl = intl2.intl;
      return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx",
);

export default tmp3;
