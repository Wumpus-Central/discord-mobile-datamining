// discord_app/modules/voice_panel/native/shared/VoicePanelTitleButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import BaseTextButton from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
import _modDef5033 from "../../../../../_runtime/metro/05033__.js";
import _modDef7142 from "../../../../../_runtime/metro/07142__.js";
import native from "../../../../design/components/experimental/native.tsx";
import ShieldLockIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldLockIcon.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import QuestActivityButtonDefault from "../../../frames/panel/native/QuestActivityButton.tsx";
import VoicePanelHeaderUserState from "../header/VoicePanelHeaderUserState.tsx";
import _modDef17108 from "../../../../../_runtime/metro/17108__.js";
import VoicePanelSettingsActionCreators from "../header/VoicePanelSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const _modDef5037 = tmp5(5037);
require = fn;
function ChannelButtonIcons() {
  let obj = { style: closure_11().channelButtons, children: null };
  obj = { size: "xs", accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.VHXh8a);
  const items = [React7(ShieldLockIcon.ShieldLockIcon, obj)];
  obj = { source: _modDef7142 };
  items[1] = React7(BaseTextButton.BaseTextButton.Icon, obj);
  obj.children = items;
  return closure_1_10(View, obj);
}
function ChannelButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let str = useChannelNameDefault(stateFromStores);
  const isCallSecureFramesVerified = channelId(9131).useIsCallSecureFramesVerified({ channelId });
  obj = {
    accessibilityRole: "button",
    accessibilityHint: null,
    text: null,
    icon: null,
    iconOpticalOffsetMargin: null,
    iconPosition: "end",
    onPress: null,
    maxFontSizeMultiplier: 2,
  };
  const intl = channelId(1114).intl;
  obj.accessibilityHint = intl.string(channelId(1114).t["Y2b7+e"]);
  if (str == null) {
    str = "???";
  }
  obj.text = str;
  if (isCallSecureFramesVerified) {
    let tmp3Result = tmp5(ChannelButtonIcons, {});
  } else {
    tmp3Result = tmp3(7142);
  }
  obj.icon = tmp3Result;
  obj.iconOpticalOffsetMargin = -nativeDefault.space.PX_4;
  obj.onPress = channelId.onPress;
  return closure_9(channelId(8902).HeaderButton, obj);
}
function StreamButton(arg0) {
  ({ participant, onPress } = arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  let obj = NicknameUtilsDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  obj = {
    accessibilityRole: "button",
    accessibilityHint: null,
    accessibilityLabel: null,
    text: null,
    icon: null,
    iconPosition: "start",
    onPress: null,
  };
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t["Y2b7+e"]);
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.formatToPlainString(util.t.I0mOAs, { username: name });
  obj.text = name;
  obj.icon = _modDef17108;
  obj.onPress = onPress;
  return React7(native.HeaderButton, obj);
}
function ActivityButton(participant) {
  participant = participant.participant;
  let obj = participant(504);
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    ApplicationStore.getApplication(participant.applicationId),
  );
  obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  obj = {
    accessibilityRole: "button",
    accessibilityHint: null,
    text: null,
    icon: null,
    iconPosition: "start",
    onPress: null,
    shrink: true,
  };
  const intl = participant(1114).intl;
  obj.accessibilityHint = intl.string(participant(1114).t["Y2b7+e"]);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  obj.text = str;
  obj.icon = _modDef5033;
  obj.onPress = participant.onPress;
  const items1 = [
    closure_9(participant(8902).HeaderButton, obj),
    closure_9(QuestActivityButtonDefault, { applicationId: participant.applicationId }),
  ];
  obj.children = items1;
  return closure_10(participant(4973).Stack, obj);
}
function UserButton(participant) {
  participant = participant.participant;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  let obj = NicknameUtilsDefault;
  const name = obj.useName(guildId, channelId, participant.user);
  const tmp = closure_11();
  const voicePanelHeaderUserStateIcons = VoicePanelHeaderUserState.useVoicePanelHeaderUserStateIcons(
    participant,
    guildId,
    tmp.userIcons,
  );
  obj = {
    accessibilityRole: "button",
    accessibilityHint: null,
    icon: null,
    iconPosition: null,
    text: null,
    onPress: null,
  };
  const intl = util.intl;
  obj.accessibilityHint = intl.string(util.t["Y2b7+e"]);
  obj.icon = voicePanelHeaderUserStateIcons;
  let str;
  if (null != voicePanelHeaderUserStateIcons) {
    str = "start";
  }
  obj.iconPosition = str;
  obj.text = name;
  obj.onPress = participant.onPress;
  return React7(native.HeaderButton, obj);
}
function StageButton(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [StageInstanceStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => StageInstanceStore.getStageInstanceByChannel(channelId),
    items1,
  );
  const items2 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  obj = {
    accessibilityRole: "button",
    accessibilityHint: null,
    text: null,
    icon: null,
    iconPosition: "start",
    onPress: null,
  };
  const intl = channelId(1114).intl;
  obj.accessibilityHint = intl.string(channelId(1114).t["Y2b7+e"]);
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
  obj.text = topic;
  obj.icon = _modDef5037;
  obj.onPress = channelId.onPress;
  return closure_9(channelId(8902).HeaderButton, obj);
}
const View = fn(17).View;
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  userIcons: { marginLeft: -6 },
  channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default noop.memo(function VoicePanelTitleButton() {
  const context = noop.useContext(channelId(12272));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  let obj = guildId(8265);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = channelId(17104)(derivedStateFromSharedValue, channelId, guildId);
  const items = [guildId, channelId];
  const onPress = noop.useCallback(() => {
    const result = VoicePanelSettingsActionCreators.openVoicePanelSettingsActionSheet(guildId, channelId);
  }, items);
  if (null != tmp3) {
    if (tmp3.type === ParticipantTypes.STREAM) {
      obj = { participant: tmp3, onPress };
      return closure_9(StreamButton, obj);
    } else if (tmp3.type === tmp5.ACTIVITY) {
      obj = { participant: tmp3, onPress };
      return closure_9(ActivityButton, obj);
    } else if (tmp3.type === tmp5.USER) {
      const obj1 = { participant: tmp3, onPress };
      return closure_9(UserButton, obj1);
    }
  }
  return closure_9(channelType === guildId(1094).ChannelTypes.GUILD_STAGE_VOICE ? StageButton : ChannelButton, {
    channelId,
    onPress,
  });
});
