// discord_app/modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../../_runtime/15055_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, text: { flexGrow: 1 } };
obj2 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  flexDirection: "row",
  padding: 16,
};
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let onPress;
      let text;
      const obj = react2;
      const cResult = obj.c(8);
      ({ onPress, text } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === tmp4.text) {
        let tmp5;
        let tmp8;
        if (cResult[1] === text) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: AssetRegistryDefault };
          const Icon = native.Icon;
          const tmp11 = _false(Icon, obj2);
          cResult[3] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === onPress) {
          if (cResult[5] === tmp4.container) {
            let tmp12;
            if (cResult[6] === tmp5) {
              tmp12 = cResult[7];
            }
            return tmp12;
          }
        }
        const obj3 = { style: tmp4.container, onPress, children: items };
        items = [tmp5, tmp8];
        const tmp14 = React3(Pressables.PressableHighlight, obj3);
        cResult[4] = onPress;
        cResult[5] = tmp4.container;
        cResult[6] = tmp5;
        cResult[7] = tmp14;
        tmp12 = tmp14;
      }
      const obj4 = { style: tmp4.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
      const tmp6 = _false(Text_Text.Text, obj4);
      cResult[0] = tmp4.text;
      cResult[1] = text;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let items;
      let onPress;
      let text;
      ({ onPress, text } = arg0);
      const tmp = closure_5();
      const obj = { style: tmp.container, onPress, children: items };
      const PressableHighlight = Pressables.PressableHighlight;
      items = [,];
      const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
      items[0] = _false(Text_Text.Text, obj2);
      const obj3 = { source: AssetRegistryDefault };
      const Icon = native.Icon;
      items[1] = _false(Icon, obj3);
      return React3(PressableHighlight, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx",
);

export default tmp4;
