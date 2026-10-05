// === Module 17247: VoicePanelTitleButton ===

// Module 17247 (VoicePanelTitleButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import CallConstants from "CallConstants" /* 4911 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import BaseTextButton from "BaseTextButton" /* 5595 */;
import AssetRegistryDefault from "AssetRegistry" /* 5817 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5821 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 6638 */;
import native from "native" /* 8567 */;
import ShieldLockIcon2 from "ShieldLockIcon" /* 9431 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11901 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17184 */;
import VoicePanelHeaderUserState from "VoicePanelHeaderUserState" /* 17220 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 17248 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 17249 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let items;
  let tmp11;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", accessibilityLabel: intl.string(intl3.t.VHXh8a) };
    const ShieldLockIcon = ShieldLockIcon2.ShieldLockIcon;
    intl = intl3.intl;
    const tmp8 = React4(ShieldLockIcon, obj2);
    const obj3 = { source: AssetRegistryDefault3 };
    const Icon = BaseTextButton.BaseTextButton.Icon;
    const tmp10 = React4(Icon, obj3);
    cResult[0] = tmp8;
    cResult[1] = tmp10;
    tmp5 = tmp8;
    tmp6 = tmp10;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.channelButtons) {
    const obj4 = { style: tmp4.channelButtons, children: items };
    items = [tmp5, tmp6];
    const tmp14 = authStore(View, obj4);
    cResult[2] = tmp4.channelButtons;
    cResult[3] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  return tmp11;
}) : (() => {
  let intl;
  let items;
  const obj = { style: closure_11().channelButtons, children: items };
  const obj2 = { size: "xs", accessibilityLabel: intl.string(intl3.t.VHXh8a) };
  const ShieldLockIcon = ShieldLockIcon2.ShieldLockIcon;
  intl = intl3.intl;
  items = [React4(ShieldLockIcon, obj2), ];
  const obj3 = { source: AssetRegistryDefault3 };
  const Icon = BaseTextButton.BaseTextButton.Icon;
  items[1] = React4(Icon, obj3);
  return authStore(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp6;
  const obj = channelId(576);
  const cResult = obj.c(12);
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp9 = useChannelNameDefault(stateFromStores);
  if (cResult[3] !== channelId) {
    const obj2 = { channelId };
    cResult[3] = channelId;
    cResult[4] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult2 = channelId(9345);
  const isCallSecureFramesVerified = tmpResult2.useIsCallSecureFramesVerified(tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(channelId(1126).t["Y2b7+e"]);
    cResult[5] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[5];
  }
  let str = tmp9;
  if (tmp9 == null) {
    str = "???";
  }
  if (cResult[6] !== isCallSecureFramesVerified) {
    let tmp8Result;
    if (isCallSecureFramesVerified) {
      tmp8Result = closure_9(closure_12, {});
    } else {
      tmp8Result = AssetRegistryDefault3;
    }
    cResult[6] = isCallSecureFramesVerified;
    cResult[7] = tmp8Result;
    tmp14 = tmp8Result;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === onPress) {
    if (cResult[9] === str) {
      let tmp18;
      if (cResult[10] === tmp14) {
        tmp18 = cResult[11];
      }
      return tmp18;
    }
  }
  const obj3 = { accessibilityRole: "button", accessibilityHint: tmp12, text: str, icon: tmp14, iconOpticalOffsetMargin: -nativeDefault.space.PX_4, iconPosition: "end", onPress, maxFontSizeMultiplier: 2 };
  const HeaderButton = tmp(8567).HeaderButton;
  const tmp19 = closure_9(HeaderButton, obj3);
  cResult[8] = onPress;
  cResult[9] = str;
  cResult[10] = tmp14;
  cResult[11] = tmp19;
  tmp18 = tmp19;
}) : ((channelId) => {
  let intl;
  let tmp3Result;
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  const items = [ChannelStore];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let str = useChannelNameDefault(stateFromStores);
  const obj2 = channelId(9345);
  const isCallSecureFramesVerified = obj2.useIsCallSecureFramesVerified({ channelId });
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(channelId(1126).t["Y2b7+e"]), text: str, icon: tmp3Result, iconOpticalOffsetMargin: -nativeDefault.space.PX_4, iconPosition: "end", onPress, maxFontSizeMultiplier: 2 };
  const HeaderButton = channelId(8567).HeaderButton;
  intl = channelId(1126).intl;
  if (str == null) {
    str = "???";
  }
  if (isCallSecureFramesVerified) {
    tmp3Result = closure_9(closure_12, {});
  } else {
    tmp3Result = AssetRegistryDefault3;
  }
  return closure_9(HeaderButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let channelId;
  let first;
  let guildId;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  onPress = onPress.onPress;
  const participant = onPress.participant;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const obj2 = NicknameUtilsDefault;
  const name = obj2.useName(guildId, channelId, participant.user);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["Y2b7+e"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== name) {
    const intl2 = intl3.intl;
    const obj3 = { username: name };
    const formatToPlainStringResult = intl2.formatToPlainString(intl3.t.I0mOAs, obj3);
    cResult[1] = name;
    cResult[2] = formatToPlainStringResult;
    tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === name) {
    if (cResult[4] === onPress) {
      let tmp11;
      if (cResult[5] === tmp9) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const obj4 = { accessibilityRole: "button", accessibilityHint: first, accessibilityLabel: tmp9, text: name, icon: AssetRegistryDefault4, iconPosition: "start", onPress };
  const HeaderButton = native.HeaderButton;
  const tmp12 = React4(HeaderButton, obj4);
  cResult[3] = name;
  cResult[4] = onPress;
  cResult[5] = tmp9;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let channelId;
  let guildId;
  let intl;
  let intl2;
  let onPress;
  let participant;
  ({ participant, onPress } = arg0);
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const obj = NicknameUtilsDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  const obj2 = { accessibilityRole: "button", accessibilityHint: intl.string(intl3.t["Y2b7+e"]), accessibilityLabel: intl2.formatToPlainString(intl3.t.I0mOAs, { username: name }), text: name, icon: AssetRegistryDefault4, iconPosition: "start", onPress };
  const HeaderButton = native.HeaderButton;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return React4(HeaderButton, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  let first;
  let items1;
  let tmp6;
  let tmp8;
  const obj = participant(576);
  const cResult = obj.c(12);
  participant = participant.participant;
  const onPress = participant.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== participant.applicationId) {
    const fn = function o() {
      return ApplicationStore.getApplication(participant.applicationId);
    };
    cResult[1] = participant.applicationId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = participant(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(participant(1126).t["Y2b7+e"]);
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  if (cResult[4] === onPress) {
    let tmp10;
    let tmp12;
    if (cResult[5] === str) {
      tmp10 = cResult[6];
    }
    if (cResult[7] !== participant.applicationId) {
      const obj2 = { applicationId: participant.applicationId };
      const tmp15 = closure_9(QuestActivityButtonDefault, obj2);
      cResult[7] = participant.applicationId;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp10) {
      let tmp16;
      if (cResult[10] === tmp12) {
        tmp16 = cResult[11];
      }
      return tmp16;
    }
    const obj3 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items1 };
    const Stack = tmp(5593).Stack;
    items1 = [tmp10, tmp12];
    const tmp19 = closure_10(Stack, obj3);
    cResult[9] = tmp10;
    cResult[10] = tmp12;
    cResult[11] = tmp19;
    tmp16 = tmp19;
  }
  const obj4 = { accessibilityRole: "button", accessibilityHint: tmp8, text: str, icon: AssetRegistryDefault, iconPosition: "start", onPress, shrink: true };
  const HeaderButton = tmp(8567).HeaderButton;
  const tmp11 = closure_9(HeaderButton, obj4);
  cResult[4] = onPress;
  cResult[5] = str;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((participant) => {
  let intl;
  let items1;
  let str;
  participant = participant.participant;
  const onPress = participant.onPress;
  const items = [ApplicationStore];
  const obj = participant(504);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(participant.applicationId));
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack = participant(5593).Stack;
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(participant(1126).t["Y2b7+e"]), text: str, icon: AssetRegistryDefault, iconPosition: "start", onPress, shrink: true };
  const HeaderButton = participant(8567).HeaderButton;
  intl = participant(1126).intl;
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  items1 = [closure_9(HeaderButton, obj3), ];
  const obj4 = { applicationId: participant.applicationId };
  items1[1] = closure_9(QuestActivityButtonDefault, obj4);
  return closure_10(Stack, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let first;
  let guildId;
  let onPress;
  let participant;
  const obj = react2;
  const cResult = obj.c(6);
  ({ participant, onPress } = arg0);
  const tmp4 = closure_11();
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const obj2 = NicknameUtilsDefault;
  const name = obj2.useName(guildId, channelId, participant.user);
  const obj3 = VoicePanelHeaderUserState;
  const voicePanelHeaderUserStateIcons = obj3.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp4.userIcons);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["Y2b7+e"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  let str;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  if (cResult[1] === voicePanelHeaderUserStateIcons) {
    if (cResult[2] === name) {
      if (cResult[3] === onPress) {
        let tmp10;
        if (cResult[4] === str) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = React4(native.HeaderButton, { accessibilityRole: "button", accessibilityHint: first, icon: voicePanelHeaderUserStateIcons, iconPosition: str, text: name, onPress });
  cResult[1] = voicePanelHeaderUserStateIcons;
  cResult[2] = name;
  cResult[3] = onPress;
  cResult[4] = str;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((participant) => {
  let channelId;
  let guildId;
  let intl;
  let str;
  participant = participant.participant;
  const onPress = participant.onPress;
  const tmp = closure_11();
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const obj = NicknameUtilsDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  const obj2 = VoicePanelHeaderUserState;
  const voicePanelHeaderUserStateIcons = obj2.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp.userIcons);
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(intl3.t["Y2b7+e"]), icon: voicePanelHeaderUserStateIcons, iconPosition: str, text: name, onPress };
  const HeaderButton = native.HeaderButton;
  intl = intl3.intl;
  str = undefined;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  return React4(HeaderButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let tmp15;
  let tmp21;
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = channelId(576);
  const cResult = obj.c(14);
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return StageInstanceStore.getStageInstanceByChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== channelId) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[5] = channelId;
    cResult[6] = S;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult2 = channelId(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, S);
  const tmp14 = useChannelNameDefault(stateFromStores1);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const stringResult = obj4.string(channelId(1126).t["Y2b7+e"]);
    cResult[7] = stringResult;
    tmp15 = stringResult;
  } else {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (cResult[8] === tmp14) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const tmp17 = cResult[9];
    if (stateFromStores != null) {
      class S {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
    }
    if (tmp17 === undefined) {
      class S {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
    }
    if (cResult[11] === onPress) {
      class S {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
      return tmp21;
    }
    const obj2 = { accessibilityRole: "button", accessibilityHint: tmp15, text: tmp19, icon: AssetRegistryDefault2, iconPosition: "start", onPress };
    const HeaderButton = tmp(8567).HeaderButton;
    const tmp23 = closure_9(HeaderButton, obj2);
    cResult[11] = onPress;
    cResult[12] = tmp19;
    cResult[13] = tmp23;
    tmp21 = tmp23;
  }
  let stringResult1;
  if (stateFromStores != null) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (stringResult1 == null) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (stringResult1 == null) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    stringResult1 = obj5.string(tmp(1126).t.zLZPmk);
  }
  cResult[8] = tmp14;
  if (stateFromStores != null) {
    class S {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = stringResult1;
}) : ((channelId) => {
  let intl;
  let topic;
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  const items = [StageInstanceStore];
  const items1 = [channelId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId), items1);
  const items2 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj3 = { accessibilityRole: "button", accessibilityHint: intl.string(channelId(1126).t["Y2b7+e"]), text: topic, icon: AssetRegistryDefault2, iconPosition: "start", onPress };
  const tmp6 = useChannelNameDefault(stateFromStores1);
  const HeaderButton = channelId(8567).HeaderButton;
  intl = channelId(1126).intl;
  topic = undefined;
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp6;
  }
  if (topic == null) {
    const intl2 = tmp(1126).intl;
    topic = intl2.string(tmp(1126).t.zLZPmk);
  }
  return closure_9(HeaderButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let channelType;
  let first;
  let focused;
  let guildId;
  let obj = guildId(576);
  const cResult = obj.c(19);
  const context = react.useContext(channelId(11901));
  guildId = context.guildId;
  const tmp4 = channelId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(id) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return id;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = guildId(7941);
  const derivedStateFromSharedValue = tmpResult.useDerivedStateFromSharedValue(focused, first);
  const GUILD_STAGE_VOICE = tmp(1106).ChannelTypes.GUILD_STAGE_VOICE;
  const tmp8 = tmp4(17219)(derivedStateFromSharedValue, channelId, guildId);
  if (cResult[1] === channelId) {
    let tmp9;
    let tmp12;
    if (cResult[2] === guildId) {
      tmp9 = cResult[3];
    }
    if (null != tmp8) {
      if (tmp8.type === ParticipantTypes.STREAM) {
        if (cResult[4] === tmp9) {
          let tmp28;
          if (cResult[5] === tmp8) {
            tmp28 = cResult[6];
          }
          return tmp28;
        }
        const obj2 = { participant: tmp8, onPress: tmp9 };
        const tmp31 = closure_9(closure_14, obj2);
        cResult[4] = tmp9;
        cResult[5] = tmp8;
        cResult[6] = tmp31;
        tmp28 = tmp31;
      } else if (tmp8.type === ParticipantTypes.ACTIVITY) {
        if (cResult[7] === tmp9) {
          let tmp24;
          if (cResult[8] === tmp8) {
            tmp24 = cResult[9];
          }
          return tmp24;
        }
        const obj3 = { participant: tmp8, onPress: tmp9 };
        const tmp27 = closure_9(closure_15, obj3);
        cResult[7] = tmp9;
        cResult[8] = tmp8;
        cResult[9] = tmp27;
        tmp24 = tmp27;
      } else if (tmp8.type === ParticipantTypes.USER) {
        if (cResult[10] === tmp9) {
          let tmp20;
          if (cResult[11] === tmp8) {
            tmp20 = cResult[12];
          }
          return tmp20;
        }
        const obj4 = { participant: tmp8, onPress: tmp9 };
        const tmp23 = closure_9(closure_16, obj4);
        cResult[10] = tmp9;
        cResult[11] = tmp8;
        cResult[12] = tmp23;
        tmp20 = tmp23;
      }
    }
    if (channelType === GUILD_STAGE_VOICE) {
      if (cResult[13] === channelId) {
        let tmp16;
        if (cResult[14] === tmp9) {
          tmp16 = cResult[15];
        }
        tmp12 = tmp16;
      }
      const obj5 = { channelId, onPress: tmp9 };
      const tmp19 = closure_9(closure_17, obj5);
      cResult[13] = channelId;
      cResult[14] = tmp9;
      cResult[15] = tmp19;
      tmp16 = tmp19;
    } else {
      if (cResult[16] === channelId) {
        if (cResult[17] === tmp9) {
          tmp12 = cResult[18];
        }
      }
      const obj6 = { channelId, onPress: tmp9 };
      const tmp15 = closure_9(closure_13, obj6);
      cResult[16] = channelId;
      cResult[17] = tmp9;
      cResult[18] = tmp15;
      tmp12 = tmp15;
    }
    return tmp12;
  }
  class I {
    constructor() {
      const obj = VoicePanelSettingsActionCreators;
      const result = obj.openVoicePanelSettingsActionSheet(guildId, channelId);
    }
  }
  cResult[1] = channelId;
  cResult[2] = guildId;
  cResult[3] = I;
  tmp9 = I;
}) : (() => {
  let channelId;
  let channelType;
  let focused;
  const context = react.useContext(channelId(11901));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  let obj = guildId(7941);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const GUILD_STAGE_VOICE = guildId(1106).ChannelTypes.GUILD_STAGE_VOICE;
  const tmp3 = channelId(17219)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = react.useCallback(() => {
    const obj = VoicePanelSettingsActionCreators;
    const result = obj.openVoicePanelSettingsActionSheet(guildId, channelId);
  }, items);
  if (null != tmp3) {
    if (tmp3.type === ParticipantTypes.STREAM) {
      const obj2 = { participant: tmp3, onPress };
      return closure_9(closure_14, obj2);
    } else if (tmp3.type === ParticipantTypes.ACTIVITY) {
      const obj3 = { participant: tmp3, onPress };
      return closure_9(closure_15, obj3);
    } else if (tmp3.type === ParticipantTypes.USER) {
      const obj4 = { participant: tmp3, onPress };
      return closure_9(closure_16, obj4);
    }
  }
  return closure_9(channelType === GUILD_STAGE_VOICE ? closure_17 : closure_13, { channelId, onPress });
}));
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default memoResult;