// === Module 11654: GameInviteVoiceCount ===

// Module 11654 (GameInviteVoiceCount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4, marginLeft: 8 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
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
}) : ((channel) => {
  let items2;
  channel = channel.channel;
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const tmp = closure_7();
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel).length, items1);
  let tmp5 = null;
  if (0 !== stateFromStores) {
    const obj2 = { style: tmp.container, children: items2 };
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const VoiceNormalIcon = tmp2(5892).VoiceNormalIcon;
    items2 = [closure_5(VoiceNormalIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: stateFromStores };
    items2[1] = closure_5(channel(4892).Text, obj4);
    tmp5 = closure_6(View, obj2);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/game_invite_channels/native/GameInviteVoiceCount.tsx");

export default tmp4;