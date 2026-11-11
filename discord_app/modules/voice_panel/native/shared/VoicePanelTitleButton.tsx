// discord_app/modules/voice_panel/native/shared/VoicePanelTitleButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BaseTextButton from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import StageChannelParticipants from "../../../stage_channels/StageChannelParticipants.tsx";
import StageChannelParticipantStoreHooks from "../../../stage_channels/StageChannelParticipantStoreHooks.tsx";
import GroupIcon from "../../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import _modDef7840 from "../../../../../_runtime/metro/07840__.js";
import native from "../../../../design/components/experimental/native.tsx";
import _modDef7953 from "../../../../../_runtime/metro/07953__.js";
import _modDef7973 from "../../../../../_runtime/metro/07973__.js";
import ShieldLockIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldLockIcon.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import QuestActivityButtonDefault from "../../../frames/panel/native/QuestActivityButton.tsx";
import VoicePanelSettingsActionCreators from "../header/VoicePanelSettingsActionCreators.tsx";
import VoicePanelHeaderUserState from "../header/VoicePanelHeaderUserState.tsx";
import _modDef19841 from "../../../../../_runtime/metro/19841__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
function ChannelButtonIcons() {
  const obj = { style: closure_11().channelButtons, children: null };
  const obj2 = { size: "xs", accessibilityLabel: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.VHXh8a);
  items = [
    React6(ShieldLockIcon.ShieldLockIcon, obj2),
    React6(BaseTextButton.BaseTextButton.Icon, { source: _modDef7840 }),
  ];
  obj.children = items;
  return closure_1_10(View, obj);
}
function ChannelButton(channelId) {
  channelId = channelId.channelId;
  items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let str = useChannelNameDefault(stateFromStores);
  const obj = channelId(504);
  const isCallSecureFramesVerified = channelId(10541).useIsCallSecureFramesVerified({ channelId });
  const obj3 = {
    accessibilityRole: "button",
    accessibilityHint: null,
    text: null,
    icon: null,
    iconOpticalOffsetMargin: null,
    iconPosition: "end",
    onPress: null,
    maxFontSizeMultiplier: 2,
  };
  const intl = channelId(1113).intl;
  obj3.accessibilityHint = intl.string(channelId(1113).t["Y2b7+e"]);
  if (str == null) {
    str = "???";
  }
  obj3.text = str;
  if (isCallSecureFramesVerified) {
    let tmp3Result = closure_9(ChannelButtonIcons, {});
  } else {
    tmp3Result = _modDef7840;
  }
  obj3.icon = tmp3Result;
  obj3.iconOpticalOffsetMargin = -nativeDefault.space.PX_4;
  obj3.onPress = channelId.onPress;
  return closure_9(channelId(7932).HeaderButton, obj3);
}
function StreamButton(arg0) {
  ({ participant, onPress } = arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const name = NicknameUtilsDefault.useName(guildId, channelId, participant.user);
  const obj2 = {
    accessibilityRole: "button",
    accessibilityHint: null,
    accessibilityLabel: null,
    text: null,
    icon: null,
    iconPosition: "start",
    onPress: null,
  };
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t["Y2b7+e"]);
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.formatToPlainString(util.t.I0mOAs, { username: name });
  obj2.text = name;
  obj2.icon = _modDef19841;
  obj2.onPress = onPress;
  return React6(native.HeaderButton, obj2);
}
function ActivityButton(participant) {
  participant = participant.participant;
  items = [ApplicationStore];
  const stateFromStores = participant(504).useStateFromStores(items, () =>
    ApplicationStore.getApplication(participant.applicationId),
  );
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: null };
  const obj3 = {
    accessibilityRole: "button",
    accessibilityHint: null,
    text: null,
    icon: null,
    iconPosition: "start",
    onPress: null,
    shrink: true,
  };
  const intl = participant(1113).intl;
  obj3.accessibilityHint = intl.string(participant(1113).t["Y2b7+e"]);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "???";
  }
  obj3.text = str;
  obj3.icon = _modDef7973;
  obj3.onPress = participant.onPress;
  const items1 = [
    closure_9(participant(7932).HeaderButton, obj3),
    closure_9(QuestActivityButtonDefault, { applicationId: participant.applicationId }),
  ];
  obj2.children = items1;
  return closure_10(participant(6274).Stack, obj2);
}
function UserButton(participant) {
  participant = participant.participant;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ guildId, channelId } = context);
  const tmp = closure_11();
  const name = NicknameUtilsDefault.useName(guildId, channelId, participant.user);
  const voicePanelHeaderUserStateIcons = VoicePanelHeaderUserState.useVoicePanelHeaderUserStateIcons(
    participant,
    guildId,
    tmp.userIcons,
  );
  const obj3 = {
    accessibilityRole: "button",
    accessibilityHint: null,
    icon: null,
    iconPosition: null,
    text: null,
    onPress: null,
  };
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
  return React6(native.HeaderButton, obj3);
}
function StageCounts(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_11();
  const actualStageSpeakerCount = StageChannelParticipantStoreHooks.useActualStageSpeakerCount(channelId);
  const obj3 = { style: tmp.stageCounts, children: null };
  const stageParticipantsCount = StageChannelParticipantStoreHooks.useStageParticipantsCount(
    channelId,
    StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
  );
  items = [
    React6(MicrophoneIcon.MicrophoneIcon, {
      size: "xs",
      color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
    }),
    React6(Text_Text.Text, {
      variant: "body-sm/medium",
      color: "none",
      style: tmp.stageCountsText,
      children: actualStageSpeakerCount,
    }),
    ,
  ];
  const obj4 = { size: "xs", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  const obj5 = {
    variant: "body-sm/medium",
    color: "none",
    style: tmp.stageCountsText,
    children: actualStageSpeakerCount,
  };
  items[2] = React6(GroupIcon.GroupIcon, {
    size: "xs",
    color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
    style: tmp.stageCountsGroupIcon,
  });
  items[3] = React6(Text_Text.Text, {
    variant: "body-sm/medium",
    color: "none",
    style: tmp.stageCountsText,
    children: stageParticipantsCount,
  });
  obj3.children = items;
  return closure_1_10(View, obj3);
}
function StageButton(channelId) {
  channelId = channelId.channelId;
  const onPress = channelId.onPress;
  items = [StageInstanceStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(
    items,
    () => StageInstanceStore.getStageInstanceByChannel(channelId),
    items1,
  );
  const obj = channelId(504);
  const items2 = [ChannelStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const tmp6 = useChannelNameDefault(stateFromStores1);
  const isStageUnifiedCall = channelId(11891).useIsStageUnifiedCall(stateFromStores1, "VoicePanelTitleButton");
  let topic;
  const obj3 = channelId(11891);
  if (stateFromStores != null) {
    topic = stateFromStores.topic;
  }
  if (topic == null) {
    topic = tmp6;
  }
  if (topic == null) {
    const intl = tmp(1113).intl;
    topic = intl.string(tmp(1113).t.zLZPmk);
  }
  if (isStageUnifiedCall) {
    const obj4 = {
      accessibilityRole: "button",
      accessibilityHint: null,
      accessibilityLabel: null,
      text: null,
      icon: null,
      iconPosition: "end",
      onPress: null,
      shrink: true,
    };
    const intl3 = tmp(1113).intl;
    obj4.accessibilityHint = intl3.string(tmp(1113).t["Y2b7+e"]);
    const _HermesInternal = HermesInternal;
    obj4.accessibilityLabel = "" + topic + ", " + tmp8;
    obj4.text = topic;
    const obj5 = { channelId };
    obj4.icon = closure_9(StageCounts, obj5);
    obj4.onPress = onPress;
    let obj6 = obj4;
  } else {
    obj6 = {
      accessibilityRole: "button",
      accessibilityHint: null,
      text: null,
      icon: null,
      iconPosition: "start",
      onPress: null,
    };
    const intl2 = tmp(1113).intl;
    obj6.accessibilityHint = intl2.string(tmp(1113).t["Y2b7+e"]);
    obj6.text = topic;
    obj6.icon = _modDef7953;
    obj6.onPress = onPress;
  }
  return closure_9(channelId(7932).HeaderButton, obj6);
}
const View = fn(17).View;
const ParticipantTypes = fn(5920).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5243);
let obj = {
  userIcons: { marginLeft: -6 },
  channelButtons: { alignItems: "center", flexDirection: "row", gap: 2 },
  stageCounts: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4 },
  stageCountsGroupIcon: null,
  stageCountsText: null,
};
let obj3 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj.stageCountsGroupIcon = { marginStart: nativeDefault.space.PX_4 };
let obj4 = { marginStart: nativeDefault.space.PX_4 };
obj.stageCountsText = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(obj);
let obj5 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelTitleButton.tsx");

export default noop.memo(function VoicePanelTitleButton() {
  const context = noop.useContext(channelId(11924));
  const guildId = context.guildId;
  channelId = context.channelId;
  ({ channelType, focused } = context);
  const derivedStateFromSharedValue = guildId(11192).useDerivedStateFromSharedValue(focused, (id) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return id;
  });
  const tmp3 = channelId(19837)(derivedStateFromSharedValue, channelId, guildId);
  items = [guildId, channelId];
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
  return closure_9(channelType === guildId(1093).ChannelTypes.GUILD_STAGE_VOICE ? StageButton : ChannelButton, {
    channelId,
    onPress,
  });
});
