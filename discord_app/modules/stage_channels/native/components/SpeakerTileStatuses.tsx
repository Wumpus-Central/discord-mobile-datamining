// === Module 9734: SpeakerTileStatuses ===

// Module 9734 (SpeakerTileStatuses)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 6457 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9736 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5578 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let userId;

let obj2;
let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { voiceStatusWrapper: size, moderatorStatusWrapper: size1, restricted: obj2 };
size = { position: "absolute", top: 4, left: 4, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: 4, right: 4, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj2 = { marginEnd: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let fn;
  let items4;
  let tmp10;
  let tmp8;
  const obj = userId(576);
  const cResult = obj.c(18);
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    class S {
      constructor() {
        return MediaEngineStore.isLocalMute(userId);
      }
    }
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = S;
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    class S {
      constructor() {
        return MediaEngineStore.isLocalMute(userId);
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, S, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return MediaEngineStore.isLocalMute(userId);
      }
    }
    const items2 = [VoiceStateStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    class S {
      constructor() {
        return MediaEngineStore.isLocalMute(userId);
      }
    }
  }
  if (cResult[5] === channelId) {
    let tmp15;
    class S {
      constructor() {
        return MediaEngineStore.isLocalMute(userId);
      }
    }
    const tmpResult2 = userId(504);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, fn, items4);
    if (stateFromStores1 != null) {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
    }
    if (undefined == null) {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
    }
    if (stateFromStores1 != null) {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
    }
    if (undefined == null) {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
    }
    if (stateFromStores) {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
      tmp15 = channelId(9691);
    } else {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
    }
    if (null != tmp15) {
      class S {
        constructor() {
          return MediaEngineStore.isLocalMute(userId);
        }
      }
      const items3 = [tmp4.voiceStatusWrapper, style];
      cResult[9] = style;
      cResult[10] = tmp4.voiceStatusWrapper;
      cResult[11] = items3;
    }
    return null;
  }
  fn = function y() {
    return VoiceStateStore.getVoiceStateForChannel(channelId, userId);
  };
  items4 = [channelId, userId];
  cResult[5] = channelId;
  cResult[6] = userId;
  cResult[7] = fn;
  cResult[8] = items4;
}) : ((userId) => {
  let flag3;
  let tmp5;
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const items = [MediaEngineStore];
  const items1 = [userId];
  const tmp = closure_8();
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.isLocalMute(userId), items1);
  const items2 = [VoiceStateStore];
  const items3 = [channelId, userId];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => VoiceStateStore.getVoiceStateForChannel(channelId, userId), items3);
  let flag;
  if (stateFromStores1 != null) {
    flag = stateFromStores1.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (stateFromStores1 != null) {
    flag2 = stateFromStores1.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  if (stateFromStores) {
    tmp5 = channelId(9691);
    flag3 = true;
  } else if (flag2) {
    tmp5 = channelId(9126);
    flag3 = false;
  } else {
    flag3 = false;
    if (flag) {
      tmp5 = channelId(4819);
      flag3 = false;
    }
  }
  let tmp9 = null;
  if (null != tmp5) {
    const items4 = [tmp.voiceStatusWrapper, style];
    ({ source: tmp5, size: userId(1188).Icon.Sizes.SMALL, color: channelId(587).unsafe_rawColors.BLACK, disableColor: flag3 });
    const Icon = tmp2(1188).Icon;
    tmp9 = <View style={items4}>{null}</View>;
  }
  return tmp9;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  const obj = userId(576);
  const cResult = obj.c(13);
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageChannelRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === userId) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    let tmp9;
    const tmpResult = userId(504);
    if (tmpResult.useStateFromStores(first, tmp7, tmp8)) {
      tmp9 = channelId(9735);
    }
    let tmp11 = null;
    if (null != tmp9) {
      if (cResult[5] === style) {
        let tmp12;
        let tmp13;
        if (cResult[6] === tmp4.moderatorStatusWrapper) {
          tmp12 = cResult[7];
        }
        if (cResult[8] !== tmp9) {
          const Icon = tmp(1188).Icon;
          const tmp16 = <Icon source={tmp9} size={userId(1188).Icon.Sizes.SMALL} color={channelId(587).unsafe_rawColors.BLACK} />;
          cResult[8] = tmp9;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp12) {
          let tmp17;
          if (cResult[11] === tmp13) {
            tmp17 = cResult[12];
          }
          tmp11 = tmp17;
        }
        const tmp20 = <View style={tmp12}>{tmp13}</View>;
        cResult[10] = tmp12;
        cResult[11] = tmp13;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
      const items1 = [tmp4.moderatorStatusWrapper, style];
      cResult[5] = style;
      cResult[6] = tmp4.moderatorStatusWrapper;
      cResult[7] = items1;
      tmp12 = items1;
    }
    return tmp11;
  }
  const fn = function n() {
    return StageChannelRoleStore.isModerator(userId, channelId);
  };
  const items2 = [channelId, userId];
  cResult[1] = channelId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp8 = items2;
  tmp7 = fn;
}) : ((userId) => {
  userId = userId.userId;
  const channelId = userId.channelId;
  const style = userId.style;
  const items = [StageChannelRoleStore];
  const items1 = [channelId, userId];
  let tmp4;
  const tmp = closure_8();
  const obj = userId(504);
  if (obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(userId, channelId), items1)) {
    tmp4 = channelId(9735);
  }
  let tmp6 = null;
  if (null != tmp4) {
    const items2 = [tmp.moderatorStatusWrapper, style];
    ({ source: tmp4, size: userId(1188).Icon.Sizes.SMALL, color: channelId(587).unsafe_rawColors.BLACK });
    const Icon = tmp2(1188).Icon;
    tmp6 = <View style={items2}>{null}</View>;
  }
  return tmp6;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_8();
  if (cResult[0] !== tmp4.restricted) {
    const Icon = native.Icon;
    const tmp8 = <Icon style={tmp4.restricted} source={AssetRegistryDefault2} size={native.Icon.Sizes.EXTRA_SMALL} color={nativeDefault.unsafe_rawColors.RED_400} />;
    cResult[0] = tmp4.restricted;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const Icon = native.Icon;
  return <Icon style={closure_8().restricted} source={AssetRegistryDefault2} size={native.Icon.Sizes.EXTRA_SMALL} color={nativeDefault.unsafe_rawColors.RED_400} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_8();
  if (cResult[0] !== tmp4.restricted) {
    const Icon = native.Icon;
    const tmp8 = <Icon style={tmp4.restricted} source={AssetRegistryDefault} size={native.Icon.Sizes.EXTRA_SMALL} />;
    cResult[0] = tmp4.restricted;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const Icon = native.Icon;
  return <Icon style={closure_8().restricted} source={AssetRegistryDefault} size={native.Icon.Sizes.EXTRA_SMALL} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTileStatuses.tsx");

export const VoiceStatus = memoResult;
export const ModeratorStatus = memo2Result;
export const BlockedStatus = tmp6;
export const IgnoredStatus = tmp7;