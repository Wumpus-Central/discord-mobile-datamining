// discord_app/modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TimerIcon2 from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const NEUTRAL_79 = nativeDefault.unsafe_rawColors.NEUTRAL_79;
let obj = { pill: obj2, text: { textTransform: "uppercase" } };
obj2 = {
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: NEUTRAL_79,
  borderRadius: nativeDefault.radii.round,
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: 6,
  paddingVertical: 2,
};
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let items;
        let tmp11;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(7);
        const tmp4 = closure_6();
        const pill = tmp4.pill;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
          const TimerIcon = TimerIcon2.TimerIcon;
          const tmp8 = React3(TimerIcon, obj2);
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        const text = tmp4.text;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t["h/uBCR"]);
          cResult[1] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp4.text) {
          const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: text, children: tmp9 };
          const tmp13 = React3(Text_Text.Text, obj3);
          cResult[2] = tmp4.text;
          cResult[3] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] === tmp4.pill) {
          let tmp14;
          if (cResult[5] === tmp11) {
            tmp14 = cResult[6];
          }
          return tmp14;
        }
        const obj4 = { style: pill, accessible: true, accessibilityRole: "text", children: items };
        items = [first, tmp11];
        const tmp15 = hasOwnProperty(View, obj4);
        cResult[4] = tmp4.pill;
        cResult[5] = tmp11;
        cResult[6] = tmp15;
        tmp14 = tmp15;
      }
    : () => {
        let intl;
        let items;
        const tmp = closure_6();
        const obj = { style: tmp.pill, accessible: true, accessibilityRole: "text", children: items };
        const obj2 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
        const TimerIcon = TimerIcon2.TimerIcon;
        items = [React3(TimerIcon, obj2)];
        const obj3 = {
          variant: "text-xs/bold",
          color: "text-overlay-light",
          style: tmp.text,
          children: intl.string(intl2.t["h/uBCR"]),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items[1] = React3(Text, obj3);
        return hasOwnProperty(View, obj);
      },
);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx");

export default memoResult;
