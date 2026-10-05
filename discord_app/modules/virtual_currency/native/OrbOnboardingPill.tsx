// discord_app/modules/virtual_currency/native/OrbOnboardingPill.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let items;
      let tmp11;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = _false(OrbsIcon.OrbsIcon, { size: "sm" });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          variant: "text-sm/semibold",
          color: "redesign-button-tertiary-text",
          children: intl.string(intl2.t["9JpRfC"]),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        const tmp10 = _false(Text, obj2);
        cResult[1] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.container) {
        const obj3 = { style: tmp4.container, children: items };
        items = [first, tmp8];
        const tmp14 = React3(View, obj3);
        cResult[2] = tmp4.container;
        cResult[3] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[3];
      }
      return tmp11;
    }
  : () => {
      let intl;
      let items;
      const obj = { style: closure_5().container, children: items };
      items = [_false(OrbsIcon.OrbsIcon, { size: "sm" })];
      const obj2 = {
        variant: "text-sm/semibold",
        color: "redesign-button-tertiary-text",
        children: intl.string(intl2.t["9JpRfC"]),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = _false(Text, obj2);
      return React3(View, obj);
    };
tmp4.displayName = "OrbOnboardingPill";
let obj = { container: obj2 };
obj2 = {
  height: 36,
  borderRadius: nativeDefault.radii.round,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  flexShrink: 0,
  gap: 4,
};
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default tmp4;
export const OrbOnboardingPill = tmp4;
