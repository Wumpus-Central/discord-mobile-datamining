// discord_app/modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TimerIcon from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj = {
  pill: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_79,
    borderRadius: nativeDefault.radii.round,
    flexDirection: "row",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  text: { textTransform: "uppercase" },
};
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_79,
  borderRadius: nativeDefault.radii.round,
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: 6,
  paddingVertical: 2,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function QuestDockLimitedTimePill() {
        const cResult = c.c(7);
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
          const tmp8 = React4(TimerIcon.TimerIcon, obj2);
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["h/uBCR"]);
          cResult[1] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp4.text) {
          const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp4.text, children: tmp9 };
          const tmp13 = React4(Text_Text.Text, obj3);
          cResult[2] = tmp4.text;
          cResult[3] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] === tmp4.pill) {
          if (cResult[5] === tmp11) {
            let tmp14 = cResult[6];
          }
          return tmp14;
        }
        const obj4 = { style: tmp4.pill, accessible: true, accessibilityRole: "text", children: null };
        const items = [first, tmp11];
        obj4.children = items;
        const tmp15 = hasOwnProperty(View, obj4);
        cResult[4] = tmp4.pill;
        cResult[5] = tmp11;
        cResult[6] = tmp15;
        tmp14 = tmp15;
      }
    : function QuestDockLimitedTimePill() {
        const tmp = closure_6();
        const obj = { style: tmp.pill, accessible: true, accessibilityRole: "text", children: null };
        const items = [React4(TimerIcon.TimerIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT })];
        const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t["h/uBCR"]);
        items[1] = React4(Text_Text.Text, obj3);
        obj.children = items;
        return hasOwnProperty(View, obj);
      },
);
