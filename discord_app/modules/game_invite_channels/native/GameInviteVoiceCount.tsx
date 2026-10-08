// discord_app/modules/game_invite_channels/native/GameInviteVoiceCount.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameInviteVoiceCount(channel) {
      const cResult = channel(576).c(10);
      channel = channel.channel;
      let container = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedVoiceStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function h() {
          return SortedVoiceStateStore.getVoiceStatesForChannel(channel).length;
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp6, tmp7);
      if (0 === stateFromStores) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
          const tmp12 = closure_5(tmp(8204).VoiceNormalIcon, obj2);
          cResult[4] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] !== stateFromStores) {
          const obj3 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
          const tmp15 = closure_5(tmp(5086).Text, obj3);
          cResult[5] = stateFromStores;
          cResult[6] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === container.container) {
        }
        const obj4 = { style: container.container, children: null };
        const items2 = [tmp9, tmp13];
        obj4.children = items2;
        const tmp19 = closure_6(View, obj4);
        container = container.container;
        cResult[7] = container;
        cResult[8] = tmp13;
        cResult[9] = tmp19;
      }
      const tmpResult = channel(504);
    }
  : function GameInviteVoiceCount(channel) {
      channel = channel.channel;
      const tmp = closure_7();
      const items = [SortedVoiceStateStore];
      const items1 = [channel];
      const stateFromStores = channel(504).useStateFromStores(
        items,
        () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length,
        items1,
      );
      let tmp5 = null;
      if (0 !== stateFromStores) {
        const obj2 = { style: tmp.container, children: null };
        const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
        const items2 = [closure_5(tmp2(8204).VoiceNormalIcon, obj3)];
        const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
        items2[1] = closure_5(tmp2(5086).Text, obj4);
        obj2.children = items2;
        tmp5 = closure_6(View, obj2);
      }
      return tmp5;
    };
