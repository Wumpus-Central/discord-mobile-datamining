// discord_app/modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import StageChannelParticipants from "../../../stage_channels/StageChannelParticipants.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import MarkupRulesUtils from "../../../markup/MarkupRulesUtils.tsx";
import StageChannelModalActionCreators from "../../../stage_channels/StageChannelModalActionCreators.tsx";
import EntityUtils from "../../utils/EntityUtils.tsx";
import LocationIcon from "../../../../design/components/Icon/native/redesign/generated/LocationIcon.tsx";
import CalendarIcon from "../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.native.tsx";
import useScaledTextLineHeight from "../../../screen/native/useScaledTextLineHeight.android.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageChannelParticipantStore from "../../../stage_channels/StageChannelParticipantStore.tsx";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import MarkupUtils from "../../../markup/MarkupUtils.tsx";

require = fn;
function UserSummaryRow(arg0) {
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount, isLiveStreaming } = arg0);
  closure_2 = Math.max(users.length - max, 0);
  const tmp = closure_27(closure_19);
  dependencyMap = tmp;
  if (0 !== users.length) {
    let obj = { style: tmp.container, children: null };
    let items = [
      users.map((user, index) => {
        if (index < max) {
          if (index === tmp - 1) {
            if (closure_2 > 0) {
              const items = [closure_3.wrapper];
              let obj2 = 0 !== index;
              if (obj2) {
                obj2 = { marginLeft: 4 };
              }
              const obj3 = { style: null, children: null };
              items[1] = obj2;
              obj3.style = items;
              const obj4 = { style: closure_3.overflowCircle, children: null };
              const obj5 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: null };
              const _HermesInternal = HermesInternal;
              obj5.children = "+" + tmp2 + 1;
              obj4.children = map1(Text_Text.Text, obj5);
              obj3.children = map1(View, obj4);
              let tmp3Result = map1(View, obj3, "overflow");
            }
            return tmp3Result;
          }
          const items1 = [closure_3.wrapper];
          let obj = 0 !== index;
          if (obj) {
            obj = { marginLeft: 4 };
          }
          const obj6 = { style: null, children: null };
          items1[1] = obj;
          obj6.style = items1;
          const obj7 = { user, guildId, size: XSMALL };
          obj6.children = map1(native.Avatar, obj7);
          tmp3Result = map1(View, obj6, index);
        }
      }),
      ,
    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      let items1 = [tmp.wrapper];
      let obj2 = { style: null, children: null };
      items1[1] = users.length > 0 && { marginLeft: 4 };
      obj2.style = items1;
      let obj3 = { style: null, children: null };
      const items2 = [,];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      obj3.style = items2;
      let obj4 = { size: "custom", style: max(10377).makeSizeStyle(14) };
      const items3 = [closure_13(max(12784).HeadphonesIcon, obj4)];
      let obj6 = {
        variant: "text-xs/semibold",
        style: { marginLeft: 4 },
        maxFontSizeMultiplier: 1,
        children: audienceCount,
      };
      items3[1] = closure_13(max(4752).Text, obj6);
      obj3.children = items3;
      obj2.children = closure_14(View, obj3);
      tmp8Result = closure_13(View, obj2);
      let obj5 = max(10377);
      const tmp9 = users.length > 0 && { marginLeft: 4 };
    }
    items[1] = tmp8Result;
    if (isLiveStreaming) {
      let obj7 = { style: { marginLeft: 4 } };
      isLiveStreaming = closure_13(max(1177).LiveTag, obj7);
    }
    items[2] = isLiveStreaming;
    obj.children = items;
    let tmp4Result = closure_14(View, obj);
  } else if (null == audienceCount) {
    tmp4Result = null;
  }
  return tmp4Result;
}
function JoinChannelButton(label) {
  ({ channel, disabled } = label);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_29();
  const items = [channel];
  const tmp2 = useThemeDefault();
  const obj = { style: tmp.button, children: null };
  const callback = noop.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
      if (activeEventOrStageInstanceChannel.isGuildVoice()) {
        PrivateChannelCallUtils.openGuildVoiceModal(activeEventOrStageInstanceChannel);
        const tmp4Result = PrivateChannelCallUtils;
      } else {
        StageChannelModalActionCreators.connectAndOpen(activeEventOrStageInstanceChannel);
        const tmp4Result2 = StageChannelModalActionCreators;
      }
    }
  }, items);
  const obj2 = { onPress: callback, variant: null, size: "sm", disabled: null, text: null };
  const tmp3 = useIsUsingClientThemeDefault();
  let str = "tertiary";
  if (obj3.isThemeLight(tmp2)) {
    str = "tertiary";
    if (!tmp3) {
      str = "active";
    }
  }
  obj2.variant = str;
  obj2.disabled = disabled;
  obj2.text = label.label;
  obj.children = closure_13(channel(5186).Button, obj2);
  return closure_13(View, obj);
}
function GuildVoiceEventNotice(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const items = [SortedVoiceStateStore];
  const stateFromStoresArray = channel(504).useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  const obj = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items1, () =>
    PermissionStore.can(Permissions.CONNECT, channel),
  );
  const obj2 = channel(504);
  const items2 = [ApplicationStreamingStore];
  const obj4 = {
    heading: null,
    topic: null,
    location: null,
    LocationIcon: null,
    LiveIcon: null,
    voiceUsers: null,
    joinButton: null,
  };
  const stateFromStores1 = channel(504).useStateFromStores(
    items2,
    () => ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id).length > 0,
  );
  const intl = channel(1115).intl;
  obj4.heading = intl.string(channel(1115).t["X2K3/4"]);
  obj4.topic = channel.guildEvent.name;
  obj4.location = tmp2;
  const obj3 = channel(504);
  obj4.LocationIcon = channel(5239).getChannelIconComponent(channel);
  obj4.LiveIcon = channel(9883).CalendarIcon;
  obj4.voiceUsers = closure_13(UserSummaryRow, {
    guildId: channel.guild_id,
    users: stateFromStoresArray,
    isLiveStreaming: stateFromStores1,
  });
  let tmp7Result;
  if (stateFromStores) {
    const obj7 = { channel, label: null };
    const intl2 = tmp3(1115).intl;
    obj7.label = intl2.string(tmp3(1115).t.VJlc0S);
    tmp7Result = closure_13(JoinChannelButton, obj7);
  }
  obj4.joinButton = tmp7Result;
  return closure_13(closure_31, obj4);
}
function GuildExternalEventNotice(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const locationFromEvent = EntityUtils.getLocationFromEvent(guildEvent);
  let tmp4 = null;
  if (null != locationFromEvent) {
    const obj2 = { heading: null, topic: null, location: null, LocationIcon: null, LiveIcon: null, joinButton: null };
    const intl = util.intl;
    obj2.heading = intl.string(util.t.TxqPQR);
    obj2.topic = guildEvent.name;
    obj2.location = closure_26(locationFromEvent, true);
    obj2.LocationIcon = LocationIcon.LocationIcon;
    obj2.LiveIcon = CalendarIcon.CalendarIcon;
    const obj3 = { guildEvent };
    obj2.joinButton = map1(SeeDetailButton, obj3);
    tmp4 = map1(closure_31, obj2);
  }
  return tmp4;
}
function SeeDetailButton(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const items = [guildEvent];
  const obj = { style: closure_29().button, children: null };
  const callback = noop.useCallback(() => {
    const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
      eventId: guildEvent.id,
      event: guildEvent,
    });
  }, items);
  const obj2 = { onPress: callback, variant: "active", size: "sm", text: null };
  const intl = guildEvent(1115).intl;
  obj2.text = intl.string(guildEvent(1115).t.z4FcDs);
  obj.children = closure_13(guildEvent(5186).Button, obj2);
  return closure_13(View, obj);
}
function GuildLiveStageNotice(channel) {
  channel = channel.channel;
  const tmp2 = useChannelNameDefault(channel);
  const stageParticipants = channel(5648).useStageParticipants(
    channel.id,
    channel(5642).StageChannelParticipantNamedIndex.SPEAKER,
  );
  const found = stageParticipants.filter(
    (type) => type.type === channel(dependencyMap[38]).StageChannelParticipantTypes.VOICE,
  );
  const mapped = found.map((user) => user.user);
  const obj = channel(5648);
  const items = [StageChannelParticipantStore];
  const items1 = [channel.id];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () =>
      StageChannelParticipantStore.getParticipantCount(
        channel.id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      ),
    items1,
  );
  const obj2 = channel(504);
  const items2 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () =>
    PermissionStore.can(Permissions.CONNECT, channel),
  );
  const obj3 = channel(504);
  const stageHasStream = channel(5634).useStageHasStream(channel.id);
  const obj4 = channel(5634);
  const guildActiveEvent = channel(9750).useGuildActiveEvent(channel.guild_id);
  const obj6 = {
    heading: null,
    location: null,
    LocationIcon: null,
    LiveIcon: null,
    topic: null,
    voiceUsers: null,
    joinButton: null,
  };
  const intl = channel(1115).intl;
  obj6.heading = intl.string(channel(1115).t["X2K3/4"]);
  obj6.location = tmp2;
  let channelIconComponent;
  if (null != guildActiveEvent) {
    channelIconComponent = tmp3(5239).getChannelIconComponent(channel);
    const tmp3Result = tmp3(5239);
  }
  obj6.LocationIcon = channelIconComponent;
  if (null != guildActiveEvent) {
    let StageIcon = tmp3(9883).CalendarIcon;
  } else {
    StageIcon = tmp3(5315).StageIcon;
  }
  obj6.LiveIcon = StageIcon;
  obj6.topic = channel.stageInstance.topic;
  obj6.voiceUsers = closure_13(UserSummaryRow, {
    guildId: channel.guild_id,
    users: mapped,
    isLiveStreaming: stageHasStream,
    audienceCount: stateFromStores,
  });
  let tmp9Result;
  if (stateFromStores1) {
    const obj8 = { channel, label: null };
    const intl2 = tmp3(1115).intl;
    obj8.label = intl2.string(tmp3(1115).t["7vb2cc"]);
    tmp9Result = closure_13(JoinChannelButton, obj8);
  }
  obj6.joinButton = tmp9Result;
  return closure_13(closure_31, obj6);
}
const View = fn(17).View;
const constants = fn(2047).GuildScheduledEventEntityTypes;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const XSMALL = fn(1177).AvatarSizes.XSMALL;
const height = fn(1177).AVATAR_SIZE_MAP[XSMALL];
const PX_122 = nativeDefault.space.PX_12;
let c21 = "text-xs/bold";
let c22 = "text-md/semibold";
let c23 = "text-xs/medium";
const PX_82 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const guildEventRules = MarkupUtils.guildEventRules;
let obj = {};
const merged = Object.assign(guildEventRules);
let obj2 = {};
const merged1 = Object.assign(guildEventRules.channelMention);
obj2.react = fn(10384).inlineChannelMentionReact;
obj.channelMention = obj2;
obj.guild = {
  react(content, output, state) {
    if (typeof content.content === "string") {
      content = content.content;
    } else {
      content = MarkupRulesUtils.smartOutput(content, output, state);
    }
    return content;
  },
};
obj.channel = { react: fn(10384).inlineChannelReact };
let closure_26 = MarkupUtils.reactParserFor(obj);
let createStyles = fn(4756);
let closure_27 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginTop: PX_82 },
    overflowCircle: {
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
      borderRadius: nativeDefault.radii.round,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height,
      paddingHorizontal: 6,
    },
    wrapper: null,
    badge: null,
    audienceBadge: null,
  };
  const obj2 = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  const obj3 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    paddingHorizontal: 6,
  };
  obj.wrapper = {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height,
  };
  const obj4 = {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height,
  };
  obj.badge = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  const obj5 = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  obj.audienceBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
createStyles = fn(4756);
let obj4 = {
  card: { padding: PX_122 },
  row: { flexDirection: "row", alignItems: "center" },
  infoRow: { marginTop: PX_4 },
  liveNowIcon: { marginEnd: 4 },
  uppercase: { textTransform: "uppercase" },
  headingText: null,
  liveDot: null,
  calendarIcon: null,
  topic: null,
  button: null,
};
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj4.headingText = { marginTop: num };
let size = {
  width: 7,
  height: 7,
  marginRight: 7,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
  borderRadius: nativeDefault.radii.xs,
};
obj4.liveDot = size;
obj4.calendarIcon = { marginRight: 7 };
obj4.topic = { marginTop: PX_82 };
obj4.button = { marginTop: PX_82 };
let closure_29 = createStyles.createStyles(obj4);
let closure_31 = noop.memo((arg0) => {
  ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
  ({ heading, topic, voiceUsers, joinButton } = arg0);
  const tmp = closure_29();
  const obj = { style: tmp.row, children: null };
  if (null != LiveIcon) {
    const obj2 = { size: "xxs", color: "status-positive", style: tmp.calendarIcon };
    let tmp5 = map1(LiveIcon, obj2);
    let tmp4 = map1;
  } else {
    tmp4 = map1;
    const obj3 = { style: tmp.liveDot };
    tmp5 = map1(View, obj3);
  }
  const items = [tmp5];
  let str = "text-xs/semibold";
  if (isLiveStreaming) {
    str = c21;
  }
  const obj4 = { variant: str, color: "status-positive", style: null, children: null };
  const items1 = [tmp.headingText];
  if (isLiveStreaming) {
    isLiveStreaming = tmp.uppercase;
  }
  items1[1] = isLiveStreaming;
  obj4.style = items1;
  obj4.children = heading;
  items[1] = tmp4(Text_Text.Text, obj4);
  obj.children = items;
  const items2 = [
    closure_1_14(View, obj),
    voiceUsers,
    tmp4(Text_Text.Text, {
      style: tmp.topic,
      lineClamp: 1,
      variant,
      color: "redesign-channel-name-text",
      children: topic,
    }),
    ,
  ];
  const obj6 = { style: null, children: null };
  const items3 = [,];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  obj6.style = items3;
  let tmp2Result = null != _location;
  if (tmp2Result) {
    let tmp4Result = null != LocationIcon;
    if (tmp4Result) {
      const obj7 = { style: tmp.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
      tmp4Result = tmp4(LocationIcon, obj7);
    }
    const items4 = [tmp4Result];
    const obj8 = {
      lineClamp: 1,
      variant: variant2,
      color: "redesign-channel-name-muted-text",
      style: null,
      children: null,
    };
    let num = 0;
    if (tmp7Result.isAndroid()) {
      num = -2;
    }
    const obj9 = { children: null };
    const obj10 = { marginTop: num, flexShrink: 1 };
    obj8.style = obj10;
    obj8.children = _location;
    items4[1] = tmp4(Text_Text.Text, obj8);
    obj9.children = items4;
    tmp2Result = closure_1_14(__initData, obj9);
    tmp7Result = PlatformUtils2;
  }
  const obj11 = { children: null };
  obj6.children = tmp2Result;
  items2[3] = tmp4(View, obj6);
  items2[4] = joinButton;
  obj11.children = items2;
  return closure_1_14(View, obj11);
});
let obj3 = { react: fn(10384).inlineChannelReact };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx",
);

export default noop.memo((guild) => {
  guild = guild.guild;
  let activeEventOrStageInstanceChannel;
  const tmp = closure_29();
  const tmp2 = activeEventOrStageInstanceChannel;
  activeEventOrStageInstanceChannel = activeEventOrStageInstanceChannel(16526).useActiveEventOrStageInstanceChannel(
    guild.id,
  );
  let obj = activeEventOrStageInstanceChannel(16526);
  const guildActiveEvent = activeEventOrStageInstanceChannel(9750).useGuildActiveEvent(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(9750);
  const items = [StageInstanceStore];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = activeEventOrStageInstanceChannel(504).useStateFromStores(
    items,
    () => {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      return StageInstanceStore.getStageInstanceByChannel(id);
    },
    items1,
  );
  closure_129_0 = activeEventOrStageInstanceChannel;
  const items2 = [activeEventOrStageInstanceChannel];
  let id;
  const callback = noop.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
      if (activeEventOrStageInstanceChannel.isGuildVoice()) {
        PrivateChannelCallUtils.openGuildVoiceModal(activeEventOrStageInstanceChannel);
        const tmp4Result = PrivateChannelCallUtils;
      } else {
        StageChannelModalActionCreators.connectAndOpen(activeEventOrStageInstanceChannel);
        const tmp4Result2 = StageChannelModalActionCreators;
      }
    }
  }, items2);
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const items3 = [id, guildActiveEvent];
  let entity_type;
  const callback1 = noop.useCallback(() => {
    if (null != guildActiveEvent) {
      const obj3 = { eventId: guildActiveEvent.id, event: guildActiveEvent };
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails(obj3);
    } else {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      if (null != id) {
        const result1 = openChannelLongPressActionSheet.openChannelLongPressActionSheet(
          activeEventOrStageInstanceChannel.id,
        );
      }
    }
  }, items3);
  if (guildActiveEvent != null) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    const obj4 = { guildEvent: guildActiveEvent };
    let tmp13 = closure_13(GuildExternalEventNotice, obj4);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        const obj5 = { stageInstance: stateFromStores, channel: activeEventOrStageInstanceChannel };
        tmp13 = closure_13(GuildLiveStageNotice, obj5);
      }
    }
    tmp13 = null;
    if (tmp12) {
      const obj6 = { guildEvent: guildActiveEvent, channel: activeEventOrStageInstanceChannel };
      tmp13 = closure_13(GuildVoiceEventNotice, obj6);
    }
    tmp12 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  }
  let tmp20 = null;
  if (null != tmp13) {
    const obj7 = { variant: "secondary", style: null, onPress: null, onLongPress: null, children: null };
    const items4 = [tmp.card, guild.style];
    obj7.style = items4;
    obj7.onPress = callback;
    obj7.onLongPress = callback1;
    obj7.children = tmp13;
    tmp20 = closure_13(tmp2(5824).Card, obj7);
  }
  return tmp20;
});
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export const getScaledLiveChannelNoticeHeight = function getScaledLiveChannelNoticeHeight(
  fontScale,
  guildLiveChannelNoticeInfo,
) {
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  useScaledTextLineHeight;
  if (!hasSpeakers) {
    if (!hasAudience) {
      let num = 0;
    }
    const sum = PX_82 + useScaledTextLineHeight.scaleTextLineHeight(c22, fontScale);
    const tmpResult = useScaledTextLineHeight;
    let num2 = 0;
    if (tmpResult3.isAndroid()) {
      num2 = -2;
    }
    const sum1 = PX_4 + num2;
    tmpResult3 = PlatformUtils2;
    let num3 = 0;
    const sum2 = sum1 + useScaledTextLineHeight.scaleTextLineHeight(c23, fontScale);
    if (hasButton) {
      num3 = PX_82 + ButtonConstants.SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp4 + num + sum + sum2 + num3 + PX_122 + PX_12;
  }
  num = PX_82 + closure_19;
};
