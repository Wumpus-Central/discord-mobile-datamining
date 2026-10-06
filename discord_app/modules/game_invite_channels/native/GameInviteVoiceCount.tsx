// discord_app/modules/game_invite_channels/native/GameInviteVoiceCount.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../_runtime/00019_react.js";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let items2;
      let tmp7;
      let tmp8;
      const obj = channel(576);
      const cResult = obj.c(10);
      channel = channel.channel;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedVoiceStateStore];
        cResult[0] = items;
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      let tmp10 = null;
      if (0 !== stateFromStores) {
        let tmp11;
        let tmp15;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
          const VoiceNormalIcon = tmp(5892).VoiceNormalIcon;
          const tmp14 = closure_5(VoiceNormalIcon, obj2);
          cResult[4] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== stateFromStores) {
          const obj3 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
          const tmp17 = closure_5(channel(4892).Text, obj3);
          cResult[5] = stateFromStores;
          cResult[6] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          let tmp18;
          if (cResult[8] === tmp15) {
            tmp18 = cResult[9];
          }
          tmp10 = tmp18;
        }
        const obj4 = { style: tmp4.container, children: items2 };
        items2 = [tmp11, tmp15];
        const tmp21 = closure_6(View, obj4);
        cResult[7] = tmp4.container;
        cResult[8] = tmp15;
        cResult[9] = tmp21;
        tmp18 = tmp21;
      }
      return tmp10;
    }
  : (channel) => {
      let items2;
      channel = channel.channel;
      const items = [SortedVoiceStateStore];
      const items1 = [channel];
      const tmp = closure_7();
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length,
        items1,
      );
      let tmp5 = null;
      if (0 !== stateFromStores) {
        const obj2 = { style: tmp.container, children: items2 };
        const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
        const VoiceNormalIcon = tmp2(5892).VoiceNormalIcon;
        items2 = [closure_5(VoiceNormalIcon, obj3)];
        const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
        items2[1] = closure_5(channel(4892).Text, obj4);
        tmp5 = closure_6(View, obj2);
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default tmp4;
