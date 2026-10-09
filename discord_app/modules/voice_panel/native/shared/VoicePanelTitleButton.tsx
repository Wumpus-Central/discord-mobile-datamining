// === Module 17709: VoicePanelTitleButton ===

// Module 17709 (VoicePanelTitleButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import BaseTextButton from "BaseTextButton" /* 5377 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5406 */;
import useChannelNameDefault from "useChannelName" /* 5418 */;
import _modDef6829 from "module_6829" /* 6829 */;
import _modDef8147 from "module_8147" /* 8147 */;
import _modDef8151 from "module_8151" /* 8151 */;
import native from "native" /* 8525 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11925 */;
import ShieldLockIcon from "ShieldLockIcon" /* 12971 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17646 */;
import VoicePanelHeaderUserState from "VoicePanelHeaderUserState" /* 17682 */;
import _modDef17710 from "module_17710" /* 17710 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 17711 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import StageInstanceStore from "StageInstanceStore" /* 2069 */;
import ChannelStore from "ChannelStore" /* 2064 */;

require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(5114).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let closure_11 = createStyles.createStyles({ userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 } });
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelButtonIcons() {
  const cResult = c.c(4);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.VHXh8a);
    const tmp8 = options(ShieldLockIcon.ShieldLockIcon, obj2);
    const obj3 = { source: _modDef6829 };
    const tmp10 = options(BaseTextButton.BaseTextButton.Icon, obj3);
    cResult[0] = tmp8;
    cResult[1] = tmp10;
    tmp5 = tmp8;
    tmp6 = tmp10;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.channelButtons) {
    const obj4 = { style: tmp4.channelButtons, children: null };
    const items = [tmp5, tmp6];
    obj4.children = items;
    const tmp14 = collapsed(View, obj4);
    cResult[2] = tmp4.channelButtons;
    cResult[3] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  return tmp11;
}) : (function ChannelButtonIcons() {
  const obj = { style: closure_11().channelButtons, children: null };
  const obj2 = { size: "xs", accessibilityLabel: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.VHXh8a);
  const items = [options(ShieldLockIcon.ShieldLockIcon, obj2), options(BaseTextButton.BaseTextButton.Icon, { source: _modDef6829 })];
  obj.children = items;
  return collapsed(View, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelButton(channelId) {
  const cResult = channelId(576).c(12);
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  const tmp9 = useChannelNameDefault(stateFromStores);
  if (cResult[3] !== channelId) {
    const obj2 = { channelId };
    cResult[3] = channelId;
    cResult[4] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = channelId(504);
  const isCallSecureFramesVerified = channelId(8790).useIsCallSecureFramesVerified(tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["Y2b7+e"]);
    cResult[5] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[5];
  }
  let str = tmp9;
  if (tmp9 == null) {
    str = "???";
  }
  if (cResult[6] !== isCallSecureFramesVerified) {
    if (isCallSecureFramesVerified) {
      let tmp8Result = closure_9(closure_12, {});
    } else {
      tmp8Result = _modDef6829;
    }
    cResult[6] = isCallSecureFramesVerified;
    cResult[7] = tmp8Result;
  } else {
    if (cResult[8] === onPress) {
      if (cResult[9] === str) {
        if (cResult[10] === tmp14) {
          let tmp19 = cResult[11];
        }
        return tmp19;
      }
    }
    const obj3 = { accessibilityRole: "button", accessibilityHint: tmp12, text: str, icon: cResult[7], iconOpticalOffsetMargin: -nativeDefault.space.PX_4, iconPosition: "end", onPress, maxFontSizeMultiplier: 2 };
    const tmp21 = closure_9(tmp(8525).HeaderButton, obj3);
    cResult[8] = onPress;
    cResult[9] = str;
    cResult[10] = cResult[7];
    cResult[11] = tmp21;
    tmp19 = tmp21;
  }
  const tmpResult2 = channelId(8790);
}) : (function ChannelButton(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let str = useChannelNameDefault(stateFromStores);
  const obj = channelId(504);
  const isCallSecureFramesVerified = channelId(8790).useIsCallSecureFramesVerified({ channelId });
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconOpticalOffsetMargin: null, iconPosition: "end", onPress: null, maxFontSizeMultiplier: 2 };
  const intl = channelId(1126).intl;
  obj3.accessibilityHint = intl.string(channelId(1126).t["Y2b7+e"]);
  if (str == null) {
    str = "???";
  }
  obj3.text = str;
  if (isCallSecureFramesVerified) {
    let tmp3Result = closure_9(closure_12, {});
  } else {
    tmp3Result = _modDef6829;
  }
  obj3.icon = tmp3Result;
  obj3.iconOpticalOffsetMargin = -nativeDefault.space.PX_4;
  obj3.onPress = channelId.onPress;
  return closure_9(channelId(8525).HeaderButton, obj3);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamButton(onPress) {
  const cResult = c.c(7);
  onPress = onPress.onPress;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const name = NicknameUtilsDefault.useName(guildId, channelId, onPress.participant.user);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["Y2b7+e"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== name) {
    const intl2 = util.intl;
    const obj3 = { username: name };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t.I0mOAs, obj3);
    cResult[1] = name;
    cResult[2] = formatToPlainStringResult;
    let tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === name) {
    if (cResult[4] === onPress) {
      if (cResult[5] === tmp9) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const tmp12 = options(native.HeaderButton, { accessibilityRole: "button", accessibilityHint: first, accessibilityLabel: tmp9, text: name, icon: _modDef17710, iconPosition: "start", onPress });
  cResult[3] = name;
  cResult[4] = onPress;
  cResult[5] = tmp9;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const obj4 = { accessibilityRole: "button", accessibilityHint: first, accessibilityLabel: tmp9, text: name, icon: _modDef17710, iconPosition: "start", onPress };
}) : (function StreamButton(arg0) {
  ({ participant, onPress } = arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const name = NicknameUtilsDefault.useName(guildId, channelId, participant.user);
  const obj2 = { accessibilityRole: "button", accessibilityHint: null, accessibilityLabel: null, text: null, icon: null, iconPosition: "start", onPress: null };
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t["Y2b7+e"]);
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(util.t.I0mOAs, { username: name });
  obj2.text = name;
  obj2.icon = _modDef17710;
  obj2.onPress = onPress;
  return options(native.HeaderButton, obj2);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityButton(participant) {
  const cResult = participant(576).c(12);
  participant = participant.participant;
  const onPress = participant.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== participant.applicationId) {
    const fn = function s() {
      return ApplicationStore.getApplication(participant.applicationId);
    };
    cResult[1] = participant.applicationId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = participant(576);
  const stateFromStores = participant(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["Y2b7+e"]);
    cResult[3] = stringResult;
    let tmp8 = stringResult;
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
    if (cResult[5] === str) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] !== participant.applicationId) {
      const obj2 = { applicationId: participant.applicationId };
      const tmp15 = closure_9(QuestActivityButtonDefault, obj2);
      cResult[7] = participant.applicationId;
      cResult[8] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp10) {
      if (cResult[10] === tmp12) {
        let tmp16 = cResult[11];
      }
      return tmp16;
    }
    const obj3 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
    const items1 = [tmp10, tmp12];
    obj3.children = items1;
    const tmp19 = closure_10(tmp(5374).Stack, obj3);
    cResult[9] = tmp10;
    cResult[10] = tmp12;
    cResult[11] = tmp19;
    tmp16 = tmp19;
  }
  const tmpResult = participant(504);
  const tmp11 = closure_9(participant(8525).HeaderButton, { accessibilityRole: "button", accessibilityHint: tmp8, text: str, icon: _modDef8147, iconPosition: "start", onPress, shrink: true });
  cResult[4] = onPress;
  cResult[5] = str;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj4 = { accessibilityRole: "button", accessibilityHint: tmp8, text: str, icon: _modDef8147, iconPosition: "start", onPress, shrink: true };
}) : (function ActivityButton(participant) {
  participant = participant.participant;
  const items = [ApplicationStore];
  const stateFromStores = participant(504).useStateFromStores(items, () => ApplicationStore.getApplication(participant.applicationId));
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconPosition: "start", onPress: null, shrink: true };
  const intl = participant(1126).intl;
  obj3.accessibilityHint = intl.string(participant(1126).t["Y2b7+e"]);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  obj3.text = str;
  obj3.icon = _modDef8147;
  obj3.onPress = participant.onPress;
  const items1 = [closure_9(participant(8525).HeaderButton, obj3), closure_9(QuestActivityButtonDefault, { applicationId: participant.applicationId })];
  obj2.children = items1;
  return closure_10(participant(5374).Stack, obj2);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserButton(arg0) {
  const cResult = c.c(6);
  ({ participant, onPress } = arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const tmp4 = closure_11();
  const name = NicknameUtilsDefault.useName(guildId, channelId, participant.user);
  const voicePanelHeaderUserStateIcons = VoicePanelHeaderUserState.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp4.userIcons);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["Y2b7+e"]);
    cResult[0] = stringResult;
    let first = stringResult;
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
        if (cResult[4] === str) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = options(native.HeaderButton, { accessibilityRole: "button", accessibilityHint: first, icon: voicePanelHeaderUserStateIcons, iconPosition: str, text: name, onPress });
  cResult[1] = voicePanelHeaderUserStateIcons;
  cResult[2] = name;
  cResult[3] = onPress;
  cResult[4] = str;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function UserButton(participant) {
  participant = participant.participant;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const tmp = closure_11();
  const name = NicknameUtilsDefault.useName(guildId, channelId, participant.user);
  const voicePanelHeaderUserStateIcons = VoicePanelHeaderUserState.useVoicePanelHeaderUserStateIcons(participant, guildId, tmp.userIcons);
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, icon: null, iconPosition: null, text: null, onPress: null };
  const intl = util.intl;
  obj3.accessibilityHint = intl.string(util.t["Y2b7+e"]);
  obj3.icon = voicePanelHeaderUserStateIcons;
  let str;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  obj3.iconPosition = str;
  obj3.text = name;
  obj3.onPress = participant.onPress;
  return options(native.HeaderButton, obj3);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function StageButton(channelId) {
  const cResult = channelId(576).c(14);
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return StageInstanceStore.getStageInstanceByChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== channelId) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
    cResult[5] = channelId;
    cResult[6] = I;
  } else {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
  }
  const tmpResult = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp9, I);
  const tmp14 = useChannelNameDefault(stateFromStores1);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
    const stringResult = obj4.string(tmp(1126).t["Y2b7+e"]);
    cResult[7] = stringResult;
    const tmp15 = stringResult;
  } else {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
  }
  if (cResult[8] === tmp14) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
    if (stateFromStores != null) {
      class I {
        constructor() {
          return closure_7.getChannel(channelId);
        }
      }
    }
    if (cResult[9] === undefined) {
      class I {
        constructor() {
          return closure_7.getChannel(channelId);
        }
      }
    }
    if (cResult[11] === onPress) {
      class I {
        constructor() {
          return closure_7.getChannel(channelId);
        }
      }
      return tmp20;
    }
    const obj2 = { accessibilityRole: "button", accessibilityHint: tmp15, text: tmp18, icon: _modDef8151, iconPosition: "start", onPress };
    const tmp22 = closure_9(tmp(8525).HeaderButton, obj2);
    cResult[11] = onPress;
    cResult[12] = tmp18;
    cResult[13] = tmp22;
    tmp20 = tmp22;
  }
  let stringResult1;
  if (stateFromStores != null) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
  }
  if (stringResult1 == null) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
  }
  if (stringResult1 == null) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
    stringResult1 = obj5.string(tmp(1126).t.zLZPmk);
  }
  cResult[8] = tmp14;
  if (stateFromStores != null) {
    class I {
      constructor() {
        return closure_7.getChannel(channelId);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = stringResult1;
  const tmpResult2 = channelId(504);
}) : (function StageButton(channelId) {
  channelId = channelId.channelId;
  const items = [StageInstanceStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId), items1);
  const obj = channelId(504);
  const items2 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconPosition: "start", onPress: null };
  const intl = channelId(1126).intl;
  obj3.accessibilityHint = intl.string(channelId(1126).t["Y2b7+e"]);
  let topic;
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
  obj3.text = topic;
  obj3.icon = _modDef8151;
  obj3.onPress = channelId.onPress;
  return closure_9(channelId(8525).HeaderButton, obj3);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelTitleButton() {
  const cResult = guildId(576).c(19);
  const context = noop.useContext(channelId(11925));
  guildId = context.guildId;
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
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = guildId(576);
  const tmp4 = channelId;
  const derivedStateFromSharedValue = guildId(8378).useDerivedStateFromSharedValue(focused, first);
  const tmp8 = tmp4(17681)(derivedStateFromSharedValue, channelId, guildId);
  if (cResult[1] === channelId) {
    if (cResult[2] === guildId) {
      let tmp9 = cResult[3];
    }
    if (null != tmp8) {
      if (tmp8.type === ParticipantTypes.STREAM) {
        if (cResult[4] === tmp9) {
          if (cResult[5] === tmp8) {
            let tmp29 = cResult[6];
          }
          return tmp29;
        }
        const obj2 = { participant: tmp8, onPress: tmp9 };
        const tmp32 = closure_9(closure_14, obj2);
        cResult[4] = tmp9;
        cResult[5] = tmp8;
        cResult[6] = tmp32;
        tmp29 = tmp32;
      } else if (tmp8.type === ParticipantTypes.ACTIVITY) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp8) {
            let tmp25 = cResult[9];
          }
          return tmp25;
        }
        const obj3 = { participant: tmp8, onPress: tmp9 };
        const tmp28 = closure_9(closure_15, obj3);
        cResult[7] = tmp9;
        cResult[8] = tmp8;
        cResult[9] = tmp28;
        tmp25 = tmp28;
      } else if (tmp8.type === ParticipantTypes.USER) {
        if (cResult[10] === tmp9) {
          if (cResult[11] === tmp8) {
            let tmp21 = cResult[12];
          }
          return tmp21;
        }
        const obj4 = { participant: tmp8, onPress: tmp9 };
        const tmp24 = closure_9(closure_16, obj4);
        cResult[10] = tmp9;
        cResult[11] = tmp8;
        cResult[12] = tmp24;
        tmp21 = tmp24;
      }
    }
    if (channelType === tmp(1106).ChannelTypes.GUILD_STAGE_VOICE) {
      if (cResult[13] === channelId) {
      }
      const obj5 = { channelId, onPress: tmp9 };
      const tmp19 = closure_9(closure_17, obj5);
      cResult[13] = channelId;
      cResult[14] = tmp9;
      cResult[15] = tmp19;
    } else {
      if (cResult[16] === channelId) {
        if (cResult[17] === tmp9) {
          let tmp12 = cResult[18];
        }
        return tmp12;
      }
      const obj6 = { channelId, onPress: tmp9 };
      const tmp15 = closure_9(closure_13, obj6);
      cResult[16] = channelId;
      cResult[17] = tmp9;
      cResult[18] = tmp15;
      tmp12 = tmp15;
    }
  }
  class S {
    constructor() {
      obj = closure_0(closure_2[30]);
      result = obj.openVoicePanelSettingsActionSheet(guildId, channelId);
      return;
    }
  }
  cResult[1] = channelId;
  cResult[2] = guildId;
  cResult[3] = S;
  tmp9 = S;
  const tmpResult = guildId(8378);
}) : (function VoicePanelTitleButton() {
  const context = noop.useContext(channelId(11925));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  const derivedStateFromSharedValue = guildId(8378).useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = channelId(17681)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = noop.useCallback(() => {
    const result = VoicePanelSettingsActionCreators.openVoicePanelSettingsActionSheet(guildId, channelId);
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
  return closure_9(channelType === guildId(1106).ChannelTypes.GUILD_STAGE_VOICE ? closure_17 : closure_13, { channelId, onPress });
}));