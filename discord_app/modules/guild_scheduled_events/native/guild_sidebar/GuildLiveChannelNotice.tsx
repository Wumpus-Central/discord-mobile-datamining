// discord_app/modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import StageChannelParticipants from "../../../stage_channels/StageChannelParticipants.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import MarkupRulesUtils from "../../../markup/MarkupRulesUtils.tsx";
import EntityUtils from "../../utils/EntityUtils.tsx";
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
              let obj = 0 !== index;
              if (obj) {
                obj = { marginLeft: 4 };
              }
              obj = { style: null, children: null };
              items[1] = obj;
              obj.style = items;
              const obj1 = { style: closure_3.overflowCircle, children: null };
              const obj2 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: null };
              const _HermesInternal = HermesInternal;
              obj2.children = "+" + tmp2 + 1;
              obj1.children = map1(Text_Text.Text, obj2);
              obj.children = map1(View, obj1);
              let tmp3Result = map1(View, obj, "overflow");
            }
            return tmp3Result;
          }
          const items1 = [closure_3.wrapper];
          obj = 0 !== index;
          if (obj) {
            obj = { marginLeft: 4 };
          }
          const obj3 = { style: null, children: null };
          items1[1] = obj;
          obj3.style = items1;
          const obj4 = { user, guildId, size: XSMALL };
          obj3.children = map1(native.Avatar, obj4);
          tmp3Result = map1(View, obj3, index);
        }
      }),
      ,
    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      let items1 = [tmp.wrapper];
      obj = { style: null, children: null };
      items1[1] = users.length > 0 && { marginLeft: 4 };
      obj.style = items1;
      obj = { style: null, children: null };
      const items2 = [,];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      obj.style = items2;
      let obj1 = { size: "custom", style: max(10121).makeSizeStyle(14) };
      const items3 = [closure_13(max(12530).HeadphonesIcon, obj1)];
      let obj2 = {
        variant: "text-xs/semibold",
        style: { marginLeft: 4 },
        maxFontSizeMultiplier: 1,
        children: audienceCount,
      };
      items3[1] = closure_13(max(4556).Text, obj2);
      obj.children = items3;
      obj.children = tmp4(tmp5, obj);
      tmp8Result = tmp8(tmp5, obj);
      const obj5 = max(10121);
      const tmp9 = users.length > 0 && { marginLeft: 4 };
    }
    items[1] = tmp8Result;
    if (isLiveStreaming) {
      let obj3 = { style: { marginLeft: 4 } };
      isLiveStreaming = closure_13(max(1178).LiveTag, obj3);
    }
    items[2] = isLiveStreaming;
    obj.children = items;
    let tmp4Result = tmp4(tmp5, obj);
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
  let obj = { style: tmp.button, children: null };
  const callback = noop.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
      if (obj.isGuildVoice()) {
        let tmp4Result = tmp4(4767);
        tmp4Result.openGuildVoiceModal(obj);
      } else {
        tmp4Result = tmp4(8393);
        tmp4Result.connectAndOpen(obj);
      }
    }
  }, items);
  obj = { onPress: callback, variant: null, size: "sm", disabled: null, text: null };
  const tmp3 = useIsUsingClientThemeDefault();
  const tmp6 = View;
  let str = "tertiary";
  if (obj3.isThemeLight(tmp2)) {
    str = "tertiary";
    if (!tmp3) {
      str = "active";
    }
  }
  obj.variant = str;
  obj.disabled = disabled;
  obj.text = label.label;
  obj.children = closure_13(channel(4975).Button, obj);
  return closure_13(tmp6, obj);
}
function GuildVoiceEventNotice(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  let obj1 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => PermissionStore.can(Permissions.CONNECT, channel));
  const tmp2 = useChannelNameDefault(channel);
  const items2 = [ApplicationStreamingStore];
  obj = {
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
  const intl = channel(1114).intl;
  obj.heading = intl.string(channel(1114).t["X2K3/4"]);
  obj.topic = channel.guildEvent.name;
  obj.location = tmp2;
  const obj3 = channel(504);
  const tmp8 = closure_31;
  obj.LocationIcon = channel(5028).getChannelIconComponent(channel);
  obj.LiveIcon = channel(9785).CalendarIcon;
  obj = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  obj.voiceUsers = closure_13(UserSummaryRow, obj);
  let tmp7Result;
  if (stateFromStores) {
    obj1 = { channel, label: null };
    const intl2 = tmp3(1114).intl;
    obj1.label = intl2.string(tmp3(1114).t.VJlc0S);
    tmp7Result = tmp7(JoinChannelButton, obj1);
  }
  obj.joinButton = tmp7Result;
  return closure_13(tmp8, obj);
}
function GuildExternalEventNotice(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  let obj = EntityUtils;
  const locationFromEvent = obj.getLocationFromEvent(guildEvent);
  let tmp4 = null;
  if (null != locationFromEvent) {
    obj = { heading: null, topic: null, location: null, LocationIcon: null, LiveIcon: null, joinButton: null };
    const intl = tmp(1114).intl;
    obj.heading = intl.string(tmp(1114).t.TxqPQR);
    obj.topic = guildEvent.name;
    obj.location = closure_26(locationFromEvent, true);
    obj.LocationIcon = tmp(9715).LocationIcon;
    obj.LiveIcon = tmp(9785).CalendarIcon;
    obj = { guildEvent };
    obj.joinButton = map1(SeeDetailButton, obj);
    tmp4 = map1(closure_31, obj);
  }
  return tmp4;
}
function SeeDetailButton(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const items = [guildEvent];
  let obj = { style: closure_29().button, children: null };
  const callback = noop.useCallback(() => {
    const obj = { eventId: guildEvent.id, event: guildEvent };
    const result = obj.openGuildEventDetails(obj);
  }, items);
  obj = { onPress: callback, variant: "active", size: "sm", text: null };
  const intl = guildEvent(1114).intl;
  obj.text = intl.string(guildEvent(1114).t.z4FcDs);
  obj.children = closure_13(guildEvent(4975).Button, obj);
  return closure_13(View, obj);
}
function GuildLiveStageNotice(channel) {
  channel = channel.channel;
  let obj = channel(5431);
  const stageParticipants = obj.useStageParticipants(
    channel.id,
    channel(5425).StageChannelParticipantNamedIndex.SPEAKER,
  );
  const found = stageParticipants.filter(
    (type) => type.type === channel(dependencyMap[38]).StageChannelParticipantTypes.VOICE,
  );
  const mapped = found.map((user) => user.user);
  let obj1 = channel(504);
  const items = [StageChannelParticipantStore];
  const items1 = [channel.id];
  const stateFromStores = obj1.useStateFromStores(
    items,
    () =>
      StageChannelParticipantStore.getParticipantCount(
        channel.id,
        StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
      ),
    items1,
  );
  const tmp2 = useChannelNameDefault(channel);
  const items2 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () =>
    PermissionStore.can(Permissions.CONNECT, channel),
  );
  const obj3 = channel(504);
  const stageHasStream = channel(5417).useStageHasStream(channel.id);
  const obj4 = channel(5417);
  const guildActiveEvent = channel(9662).useGuildActiveEvent(channel.guild_id);
  obj = {
    heading: null,
    location: null,
    LocationIcon: null,
    LiveIcon: null,
    topic: null,
    voiceUsers: null,
    joinButton: null,
  };
  const intl = channel(1114).intl;
  obj.heading = intl.string(channel(1114).t["X2K3/4"]);
  obj.location = tmp2;
  let channelIconComponent;
  if (null != guildActiveEvent) {
    channelIconComponent = tmp3(5028).getChannelIconComponent(channel);
    const tmp3Result = tmp3(5028);
  }
  obj.LocationIcon = channelIconComponent;
  if (null != guildActiveEvent) {
    let StageIcon = tmp3(9785).CalendarIcon;
  } else {
    StageIcon = tmp3(5097).StageIcon;
  }
  obj.LiveIcon = StageIcon;
  obj.topic = channel.stageInstance.topic;
  obj = { guildId: channel.guild_id, users: mapped, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
  obj.voiceUsers = closure_13(UserSummaryRow, obj);
  let tmp9Result;
  if (stateFromStores1) {
    obj1 = { channel, label: null };
    const intl2 = tmp3(1114).intl;
    obj1.label = intl2.string(tmp3(1114).t["7vb2cc"]);
    tmp9Result = tmp9(JoinChannelButton, obj1);
  }
  obj.joinButton = tmp9Result;
  return closure_13(closure_31, obj);
}
const View = fn(17).View;
const constants = fn(1963).GuildScheduledEventEntityTypes;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const XSMALL = fn(1178).AvatarSizes.XSMALL;
const height = fn(1178).AVATAR_SIZE_MAP[XSMALL];
const PX_122 = nativeDefault.space.PX_12;
let c21 = "text-xs/bold";
let c22 = "text-md/semibold";
let c23 = "text-xs/medium";
const PX_82 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const guildEventRules = MarkupUtils.guildEventRules;
let obj = {};
const merged = Object.assign(guildEventRules);
obj = {};
const merged1 = Object.assign(guildEventRules.channelMention);
obj.react = fn(10128).inlineChannelMentionReact;
obj.channelMention = obj;
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
obj.channel = { react: fn(10128).inlineChannelReact };
let closure_26 = MarkupUtils.reactParserFor(obj);
let createStyles = fn(4560);
let closure_27 = createStyles.createStyles((height) => {
  let obj = { container: null, overflowCircle: null, wrapper: null, badge: null, audienceBadge: null };
  obj = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  obj.container = obj;
  obj = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    paddingHorizontal: 6,
  };
  obj.overflowCircle = obj;
  obj.wrapper = {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height,
  };
  const obj1 = {
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
  const obj2 = {
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
createStyles = fn(4560);
let obj2 = {
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
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj2.headingText = { marginTop: num };
let size = {
  width: 7,
  height: 7,
  marginRight: 7,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
  borderRadius: nativeDefault.radii.xs,
};
obj2.liveDot = size;
obj2.calendarIcon = { marginRight: 7 };
obj2.topic = { marginTop: PX_82 };
obj2.button = { marginTop: PX_82 };
let closure_29 = createStyles.createStyles(obj2);
let closure_31 = noop.memo((arg0) => {
  ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
  ({ heading, topic, voiceUsers, joinButton } = arg0);
  const tmp = closure_29();
  let obj = { style: tmp.row, children: null };
  if (null != LiveIcon) {
    obj = { size: "xxs", color: "status-positive", style: tmp.calendarIcon };
    let tmp5 = map1(LiveIcon, obj);
    let tmp4 = map1;
  } else {
    tmp4 = map1;
    obj = { style: tmp.liveDot };
    tmp5 = map1(tmp3, obj);
  }
  const items = [tmp5];
  let str = "text-xs/semibold";
  if (isLiveStreaming) {
    str = c21;
  }
  const obj1 = { variant: str, color: "status-positive", style: null, children: null };
  const items1 = [tmp.headingText];
  if (isLiveStreaming) {
    isLiveStreaming = tmp.uppercase;
  }
  items1[1] = isLiveStreaming;
  obj1.style = items1;
  obj1.children = heading;
  items[1] = tmp4(Text_Text.Text, obj1);
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
  const obj3 = { style: null, children: null };
  const items3 = [,];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  obj3.style = items3;
  let tmp2Result = null != _location;
  if (tmp2Result) {
    let tmp4Result = null != LocationIcon;
    if (tmp4Result) {
      const obj4 = { style: tmp.liveNowIcon, size: "xxs", color: "redesign-channel-name-muted-text" };
      tmp4Result = tmp4(LocationIcon, obj4);
    }
    const items4 = [tmp4Result];
    const obj5 = {
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
    const obj6 = { children: null };
    const obj7 = { marginTop: num, flexShrink: 1 };
    obj5.style = obj7;
    obj5.children = _location;
    items4[1] = tmp4(tmp7(4556).Text, obj5);
    obj6.children = items4;
    tmp2Result = tmp2(__initData, obj6);
    tmp7Result = tmp7(1115);
  }
  const obj8 = { children: null };
  obj3.children = tmp2Result;
  items2[3] = tmp4(View, obj3);
  items2[4] = joinButton;
  obj8.children = items2;
  return closure_1_14(View, obj8);
});
let obj1 = { react: fn(10128).inlineChannelReact };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx",
);

export default noop.memo((guild) => {
  guild = guild.guild;
  let activeEventOrStageInstanceChannel;
  let obj = activeEventOrStageInstanceChannel(16187);
  activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(guild.id);
  let obj1 = activeEventOrStageInstanceChannel(9662);
  const guildActiveEvent = obj1.useGuildActiveEvent(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(504);
  const items = [StageInstanceStore];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = obj2.useStateFromStores(
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
      if (obj.isGuildVoice()) {
        let tmp4Result = tmp4(4767);
        tmp4Result.openGuildVoiceModal(obj);
      } else {
        tmp4Result = tmp4(8393);
        tmp4Result.connectAndOpen(obj);
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
      let obj = { eventId: tmp.id, event: tmp };
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails(obj);
    } else {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = tmp2.id;
      }
      if (null != id) {
        obj = openChannelLongPressActionSheet;
        const result1 = obj.openChannelLongPressActionSheet(tmp2.id);
      }
    }
  }, items3);
  if (guildActiveEvent != null) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    obj = { guildEvent: guildActiveEvent };
    let tmp13 = closure_13(GuildExternalEventNotice, obj);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        obj = { stageInstance: stateFromStores, channel: activeEventOrStageInstanceChannel };
        tmp13 = closure_13(GuildLiveStageNotice, obj);
      }
    }
    tmp13 = null;
    if (tmp12) {
      obj1 = { guildEvent: guildActiveEvent, channel: activeEventOrStageInstanceChannel };
      tmp13 = closure_13(GuildVoiceEventNotice, obj1);
    }
    tmp12 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  }
  let tmp20 = null;
  if (null != tmp13) {
    obj2 = { variant: "secondary", style: null, onPress: null, onLongPress: null, children: null };
    const items4 = [tmp.card, guild.style];
    obj2.style = items4;
    obj2.onPress = callback;
    obj2.onLongPress = callback1;
    obj2.children = tmp13;
    tmp20 = closure_13(activeEventOrStageInstanceChannel(5607).Card, obj2);
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
    let tmpResult = tmp(10119);
    const sum = PX_82 + tmpResult.scaleTextLineHeight(c22, fontScale);
    tmpResult = tmp(1115);
    let num2 = 0;
    if (tmpResult.isAndroid()) {
      num2 = -2;
    }
    const sum1 = PX_4 + num2;
    let num3 = 0;
    const sum2 = sum1 + tmp(10119).scaleTextLineHeight(c23, fontScale);
    if (hasButton) {
      num3 = PX_82 + tmp(4980).SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp4 + num + sum + sum2 + num3 + PX_122 + PX_12;
  }
  num = PX_82 + closure_19;
};
