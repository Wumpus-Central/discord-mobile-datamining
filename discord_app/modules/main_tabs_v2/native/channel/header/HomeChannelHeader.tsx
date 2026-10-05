// discord_app/modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/12459_AssetRegistry.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let intl;
        let items;
        let tmp12;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(4);
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, disableColor: true };
          const Icon = native.Icon;
          const tmp8 = React3(Icon, obj2);
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            variant: "heading-lg/extrabold",
            color: "interactive-text-active",
            children: intl.string(intl2.t.Ym2Ri6),
          };
          const Text = Text_Text.Text;
          intl = intl2.intl;
          const tmp11 = React3(Text, obj3);
          cResult[1] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp4.container) {
          const obj4 = { style: tmp4.container, children: items };
          items = [first, tmp9];
          const tmp15 = hasOwnProperty(View, obj4);
          cResult[2] = tmp4.container;
          cResult[3] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[3];
        }
        return tmp12;
      }
    : () => {
        let intl;
        let items;
        const obj = { style: closure_6().container, children: items };
        const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM, disableColor: true };
        const Icon = native.Icon;
        items = [React3(Icon, obj2)];
        const obj3 = {
          variant: "heading-lg/extrabold",
          color: "interactive-text-active",
          children: intl.string(intl2.t.Ym2Ri6),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items[1] = React3(Text, obj3);
        return hasOwnProperty(View, obj);
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx");

export default memoResult;
