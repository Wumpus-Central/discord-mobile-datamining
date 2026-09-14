// === Module 17218: VoicePanelTitleButton ===

// Module 17218 (VoicePanelTitleButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4788 */;
import useChannelNameDefault from "useChannelName" /* 4789 */;
import BaseTextButton from "BaseTextButton" /* 5057 */;
import _modDef5114 from "module_5114" /* 5114 */;
import _modDef5118 from "module_5118" /* 5118 */;
import _modDef7245 from "module_7245" /* 7245 */;
import native from "native" /* 9031 */;
import ShieldLockIcon from "ShieldLockIcon" /* 9341 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12402 */;
import QuestActivityButtonDefault from "QuestActivityButton" /* 17142 */;
import VoicePanelHeaderUserState from "VoicePanelHeaderUserState" /* 17216 */;
import _modDef17219 from "module_17219" /* 17219 */;
import VoicePanelSettingsActionCreators from "VoicePanelSettingsActionCreators" /* 17220 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4864 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function ChannelButtonIcons() {
  const obj = { style: closure_11().channelButtons, children: null };
  const obj2 = { size: "xs", accessibilityLabel: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.VHXh8a);
  const items = [React7(ShieldLockIcon.ShieldLockIcon, obj2), React7(BaseTextButton.BaseTextButton.Icon, { source: _modDef7245 })];
  obj.children = items;
  return closure_1_10(View, obj);
}
function ChannelButton(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let str = useChannelNameDefault(stateFromStores);
  const obj = channelId(504);
  const isCallSecureFramesVerified = channelId(9260).useIsCallSecureFramesVerified({ channelId });
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconOpticalOffsetMargin: null, iconPosition: "end", onPress: null, maxFontSizeMultiplier: 2 };
  const intl = channelId(1114).intl;
  obj3.accessibilityHint = intl.string(channelId(1114).t["Y2b7+e"]);
  if (str == null) {
    str = "???";
  }
  obj3.text = str;
  if (isCallSecureFramesVerified) {
    let tmp3Result = closure_9(ChannelButtonIcons, {});
  } else {
    tmp3Result = _modDef7245;
  }
  obj3.icon = tmp3Result;
  obj3.iconOpticalOffsetMargin = -nativeDefault.space.PX_4;
  obj3.onPress = channelId.onPress;
  return closure_9(channelId(9031).HeaderButton, obj3);
}
function StreamButton(arg0) {
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
  obj2.icon = _modDef17219;
  obj2.onPress = onPress;
  return React7(native.HeaderButton, obj2);
}
function ActivityButton(participant) {
  participant = participant.participant;
  const items = [ApplicationStore];
  const stateFromStores = participant(504).useStateFromStores(items, () => ApplicationStore.getApplication(participant.applicationId));
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconPosition: "start", onPress: null, shrink: true };
  const intl = participant(1114).intl;
  obj3.accessibilityHint = intl.string(participant(1114).t["Y2b7+e"]);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  obj3.text = str;
  obj3.icon = _modDef5114;
  obj3.onPress = participant.onPress;
  const items1 = [closure_9(participant(9031).HeaderButton, obj3), closure_9(QuestActivityButtonDefault, { applicationId: participant.applicationId })];
  obj2.children = items1;
  return closure_10(participant(5054).Stack, obj2);
}
function UserButton(participant) {
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
  return React7(native.HeaderButton, obj3);
}
function StageButton(channelId) {
  channelId = channelId.channelId;
  const items = [StageInstanceStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId), items1);
  const obj = channelId(504);
  const items2 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const obj3 = { accessibilityRole: "button", accessibilityHint: null, text: null, icon: null, iconPosition: "start", onPress: null };
  const intl = channelId(1114).intl;
  obj3.accessibilityHint = intl.string(channelId(1114).t["Y2b7+e"]);
  let topic;
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp6;
  }
  if (topic == null) {
    const intl2 = tmp(1114).intl;
    topic = intl2.string(tmp(1114).t.zLZPmk);
  }
  obj3.text = topic;
  obj3.icon = _modDef5118;
  obj3.onPress = channelId.onPress;
  return closure_9(channelId(9031).HeaderButton, obj3);
}
const View = fn(17).View;
const ParticipantTypes = fn(4657).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
let closure_11 = createStyles.createStyles({ userIcons: { marginLeft: -6 }, channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default noop.memo(function VoicePanelTitleButton() {
  const context = noop.useContext(channelId(12402));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  const derivedStateFromSharedValue = guildId(8385).useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = channelId(17215)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = noop.useCallback(() => {
    const result = VoicePanelSettingsActionCreators.openVoicePanelSettingsActionSheet(guildId, channelId);
  }, items);
  if (null != tmp3) {
    if (tmp3.type === ParticipantTypes.STREAM) {
      const obj2 = { participant: tmp3, onPress };
      return closure_9(StreamButton, obj2);
    } else if (tmp3.type === ParticipantTypes.ACTIVITY) {
      const obj3 = { participant: tmp3, onPress };
      return closure_9(ActivityButton, obj3);
    } else if (tmp3.type === ParticipantTypes.USER) {
      const obj4 = { participant: tmp3, onPress };
      return closure_9(UserButton, obj4);
    }
  }
  return closure_9(channelType === guildId(1094).ChannelTypes.GUILD_STAGE_VOICE ? StageButton : ChannelButton, { channelId, onPress });
});