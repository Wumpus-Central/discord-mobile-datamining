// discord_app/modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx
import importAllResult from "Text";
import { View } from "MINIMUM_HIT_AREA";
import getActiveStageChannelIds from "getActiveStageChannelIds";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import reset from "reset";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { GuildScheduledEventEntityTypes as closure_11 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "sum";
import jsxProd from "getLayoutStyles";
import { guildEventRules } from "get defaultRules";
import importDefaultResult from "get defaultRules";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "getActiveStageChannelIds";

let closure_14;
let closure_15;
let map1;
const require = arg1;
function UserSummaryRow(arg0) {
  let audienceCount;
  let importDefault;
  let isLiveStreaming;
  let max;
  let users;
  ({ users, max } = arg0);
  if (max === undefined) {
    max = 5;
  }
  ({ guildId: importDefault, audienceCount, isLiveStreaming } = arg0);
  let closure_2;
  let dependencyMap;
  closure_2 = Math.max(users.length - max, 0);
  const tmp = callback3(closure_19);
  dependencyMap = tmp;
  if (0 !== users.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    let items = [
      users.map((arg0, arg1) => {
          if (arg1 < max) {
            if (arg1 === tmp - 1) {
              if (closure_2 > 0) {
                const items = [_undefined.wrapper, ];
                let obj = 0 !== arg1;
                if (obj) {
                  obj = { marginLeft: 4 };
                }
                obj = { style: null, children: null };
                items[1] = obj;
                obj[0] = items;
                const obj1 = { style: null, children: null };
                obj1[0] = _undefined.overflowCircle;
                const obj2 = { variant: "text-xs/medium", lineClamp: 1, maxFontSizeMultiplier: 1, children: null };
                const _HermesInternal = HermesInternal;
                obj2[3] = "+" + tmp2 + 1;
                obj1[1] = outer1_13(max(_undefined[19]).Text, obj2);
                obj[1] = outer1_13(outer1_5, obj1);
                let tmp3Result = outer1_13(outer1_5, obj, "overflow");
                const tmp13 = outer1_13;
                const tmp14 = outer1_5;
                const tmp15 = _undefined;
              }
              return tmp3Result;
            }
            const items1 = [_undefined.wrapper, ];
            obj = 0 !== arg1;
            if (obj) {
              obj = { marginLeft: 4 };
            }
            const obj3 = { style: null, children: null };
            items1[1] = obj;
            obj3[0] = items1;
            const obj4 = { user: null, guildId: null, size: null };
            obj4[0] = arg0;
            obj4[1] = closure_1;
            obj4[2] = outer1_18;
            obj3[1] = outer1_13(max(_undefined[11]).Avatar, obj4);
            tmp3Result = outer1_13(outer1_5, obj3, arg1);
            const tmp3 = outer1_13;
            const tmp4 = outer1_5;
          }
        }),
  ,

    ];
    let tmp8Result = null != audienceCount && audienceCount > 0;
    if (tmp8Result) {
      let items1 = [tmp.wrapper, ];
      obj = { style: null, children: null };
      items1[1] = users.length > 0 && { marginLeft: 4 };
      obj[0] = items1;
      obj = { style: null, children: null };
      const items2 = [, ];
      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp);
      obj[0] = items2;
      let obj1 = { size: "custom", style: null };
      obj1[1] = max(9711).makeSizeStyle(14);
      const items3 = [callback(max(11801).HeadphonesIcon, obj1), ];
      let obj2 = { variant: "text-xs/semibold", style: null, maxFontSizeMultiplier: 1, children: null };
      obj2[1] = { marginLeft: 4 };
      obj2[3] = audienceCount;
      items3[1] = callback(max(4281).Text, obj2);
      obj[1] = items3;
      obj[1] = tmp4(tmp5, obj);
      tmp8Result = tmp8(tmp5, obj);
      const obj5 = max(9711);
      const tmp9 = users.length > 0 && { marginLeft: 4 };
    }
    items[1] = tmp8Result;
    if (isLiveStreaming) {
      let obj3 = { style: null };
      obj3[0] = { marginLeft: 4 };
      isLiveStreaming = callback(max(1297).LiveTag, obj3);
    }
    items[2] = isLiveStreaming;
    obj[1] = items;
    let tmp4Result = tmp4(tmp5, obj);
  } else if (null == audienceCount) {
    tmp4Result = null;
  }
  return tmp4Result;
}
function JoinChannelButton(label) {
  let channel;
  let disabled;
  ({ channel, disabled } = label);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback4();
  const items = [channel];
  const tmp2 = require("../../../../hooks/useTheme.tsx")();
  let obj = { style: tmp.button, children: null };
  const callback = importAllResult.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const result = outer1_2(outer1_3[22]).dismissGlobalKeyboard();
      if (obj.isGuildVoice()) {
        let tmp4Result = tmp4(tmp2[23]);
        tmp4Result.openGuildVoiceModal(obj);
      } else {
        tmp4Result = tmp4(tmp2[24]);
        tmp4Result.connectAndOpen(obj);
      }
      const obj2 = outer1_2(outer1_3[22]);
    }
  }, items);
  obj = { onPress: callback, variant: null, size: "sm", disabled: null, text: null };
  const tmp3 = require("../../../client_themes/native/useIsUsingClientTheme.tsx")();
  const tmp6 = View;
  let str = "tertiary";
  if (obj3.isThemeLight(tmp2)) {
    str = "tertiary";
    if (!tmp3) {
      str = "active";
    }
  }
  obj[1] = str;
  obj[3] = disabled;
  obj[4] = label.label;
  obj[1] = closure_13(channel(4695).Button, obj);
  return closure_13(tmp6, obj);
}
function GuildVoiceEventNotice(channel) {
  channel = channel.channel;
  let obj = channel(589);
  const items = [getVoiceStatesForGuild];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = outer1_10.getVoiceStatesForChannel(channel);
    return voiceStatesForChannel.map((user) => user.user);
  });
  let obj1 = channel(589);
  const items1 = [getUncachedChannelPermissions];
  const stateFromStores = obj1.useStateFromStores(items1, () => outer1_9.can(outer1_12.CONNECT, channel));
  const tmp2 = require("../../../channel/useChannelName.tsx")(channel);
  const items2 = [reset];
  obj = { heading: null, topic: null, location: null, LocationIcon: null, LiveIcon: null, voiceUsers: null, joinButton: null };
  const stateFromStores1 = channel(589).useStateFromStores(items2, () => outer1_8.getAllApplicationStreamsForChannel(channel.id).length > 0);
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["X2K3/4"]);
  obj[1] = channel.guildEvent.name;
  obj[2] = tmp2;
  const obj3 = channel(589);
  const tmp8 = closure_31;
  obj[3] = channel(4745).getChannelIconComponent(channel);
  obj[4] = channel(8966).CalendarIcon;
  obj = { guildId: channel.guild_id, users: stateFromStoresArray, isLiveStreaming: stateFromStores1 };
  obj[5] = callback(UserSummaryRow, obj);
  let tmp7Result;
  if (stateFromStores) {
    obj1 = { channel: null, label: null };
    obj1[0] = channel;
    const intl2 = tmp3(1236).intl;
    obj1[1] = intl2.string(tmp3(1236).t.VJlc0S);
    tmp7Result = tmp7(JoinChannelButton, obj1);
  }
  obj[6] = tmp7Result;
  return callback(tmp8, obj);
}
function GuildExternalEventNotice(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  let obj = require("../../utils/EntityUtils.tsx") /* getChannelFromEvent */;
  const locationFromEvent = obj.getLocationFromEvent(guildEvent);
  let tmp4 = null;
  if (null != locationFromEvent) {
    obj = { heading: null, topic: null, location: null, LocationIcon: null, LiveIcon: null, joinButton: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.TxqPQR);
    obj[1] = guildEvent.name;
    obj[2] = callback2(locationFromEvent, true);
    obj[3] = tmp(8895).LocationIcon;
    obj[4] = tmp(8966).CalendarIcon;
    obj = { guildEvent: null };
    obj[0] = guildEvent;
    obj[5] = callback(SeeDetailButton, obj);
    tmp4 = callback(closure_31, obj);
  }
  return tmp4;
}
function SeeDetailButton(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  const items = [guildEvent];
  let obj = { style: callback4().button, children: null };
  const callback = importAllResult.useCallback(() => {
    let obj = guildEvent(outer1_3[36]);
    obj = { eventId: guildEvent.id, event: guildEvent };
    const result = obj.openGuildEventDetails(obj);
  }, items);
  obj = { onPress: callback, variant: "active", size: "sm", text: null };
  const intl = guildEvent(1236).intl;
  obj[3] = intl.string(guildEvent(1236).t.z4FcDs);
  obj[1] = callback(guildEvent(4695).Button, obj);
  return callback(View, obj);
}
function GuildLiveStageNotice(channel) {
  channel = channel.channel;
  let obj = channel(5115);
  const stageParticipants = obj.useStageParticipants(channel.id, channel(5109).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(table[38]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  let obj1 = channel(589);
  const items = [getActiveStageChannelIds];
  const items1 = [channel.id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getParticipantCount(channel.id, channel(outer1_3[38]).StageChannelParticipantNamedIndex.AUDIENCE), items1);
  const tmp2 = require("../../../channel/useChannelName.tsx")(channel);
  const items2 = [getUncachedChannelPermissions];
  const stateFromStores1 = channel(589).useStateFromStores(items2, () => outer1_9.can(outer1_12.CONNECT, channel));
  const obj3 = channel(589);
  const stageHasStream = channel(5102).useStageHasStream(channel.id);
  const obj4 = channel(5102);
  const guildActiveEvent = channel(8960).useGuildActiveEvent(channel.guild_id);
  obj = { heading: null, location: null, LocationIcon: null, LiveIcon: null, topic: null, voiceUsers: null, joinButton: null };
  const intl = channel(1236).intl;
  obj[0] = intl.string(channel(1236).t["X2K3/4"]);
  obj[1] = tmp2;
  let channelIconComponent;
  if (null != guildActiveEvent) {
    channelIconComponent = tmp3(4745).getChannelIconComponent(channel);
    const tmp3Result = tmp3(4745);
  }
  obj[2] = channelIconComponent;
  if (null != guildActiveEvent) {
    let StageIcon = tmp3(8966).CalendarIcon;
  } else {
    StageIcon = tmp3(4806).StageIcon;
  }
  obj[3] = StageIcon;
  obj[4] = channel.stageInstance.topic;
  obj = { guildId: channel.guild_id, users: mapped, isLiveStreaming: stageHasStream, audienceCount: stateFromStores };
  obj[5] = closure_13(UserSummaryRow, obj);
  let tmp9Result;
  if (stateFromStores1) {
    obj1 = { channel: null, label: null };
    obj1[0] = channel;
    const intl2 = tmp3(1236).intl;
    obj1[1] = intl2.string(tmp3(1236).t["7vb2cc"]);
    tmp9Result = tmp9(JoinChannelButton, obj1);
  }
  obj[6] = tmp9Result;
  return closure_13(closure_31, obj);
}
let c4 = importAllResult;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const PX_8 = require("Themes").space.PX_8;
const PX_12 = require("Themes").space.PX_12;
const XSMALL = require("Button").AvatarSizes.XSMALL;
let closure_19 = require("Button").AVATAR_SIZE_MAP[XSMALL];
const PX_122 = require("Themes").space.PX_12;
let c21 = "text-xs/bold";
let c22 = "text-md/semibold";
let c23 = "text-xs/medium";
const PX_82 = require("Themes").space.PX_8;
const PX_4 = require("Themes").space.PX_4;
let obj = {};
const merged = Object.assign(guildEventRules);
obj = {};
const merged1 = Object.assign(guildEventRules.channelMention);
obj.react = require("inlineChannelMentionReact").inlineChannelMentionReact;
obj.channelMention = obj;
obj.guild = {
  react(content, output, state) {
    if (typeof content.content === "string") {
      content = content.content;
    } else {
      content = require("../../../markup/MarkupRulesUtils.tsx") /* smartOutput */.smartOutput(content, output, state);
      const obj = require("../../../markup/MarkupRulesUtils.tsx") /* smartOutput */;
    }
    return content;
  }
};
obj.channel = { react: require("inlineChannelMentionReact").inlineChannelReact };
let closure_26 = importDefaultResult.reactParserFor(obj);
let closure_27 = createCacheKey.createStyles((height) => {
  obj = { container: obj, overflowCircle: null, wrapper: null, badge: null, audienceBadge: null };
  obj = { flexDirection: "row", alignItems: "center", marginTop: PX_82 };
  obj = { backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_MOD_STRONG, borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height, paddingHorizontal: 6 };
  obj[1] = obj;
  obj[2] = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW, height: closure_19 };
  const obj1 = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW, height: closure_19 };
  obj[3] = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  const obj2 = { borderRadius: require("../../../../../discord_common/js/packages/tokens/native.tsx").radii.round, paddingHorizontal: 8, display: "flex", flexDirection: "row", alignItems: "center", height };
  obj[4] = { backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOWER };
  return obj;
});
let obj2 = { card: { padding: PX_122 }, row: { flexDirection: "row", alignItems: "center" }, infoRow: { marginTop: PX_4 }, liveNowIcon: { marginEnd: 4 }, uppercase: { textTransform: "uppercase" }, headingText: null, liveDot: null, calendarIcon: null, topic: null, button: null };
let num = 0;
if (set.isAndroid()) {
  num = -2;
}
obj2[5] = { marginTop: num };
let obj1 = { react: require("inlineChannelMentionReact").inlineChannelReact };
obj2[6] = { width: 7, height: 7, marginRight: 7, backgroundColor: require("Themes").colors.STATUS_POSITIVE, borderRadius: require("Themes").radii.xs };
obj2[7] = { marginRight: 7 };
obj2[8] = { marginTop: PX_82 };
obj2[9] = { marginTop: PX_82 };
let closure_29 = createCacheKey.createStyles(obj2);
let closure_31 = importAllResult.memo((arg0) => {
  let LiveIcon;
  let LocationIcon;
  let _location;
  let heading;
  let isLiveStreaming;
  let joinButton;
  let topic;
  let voiceUsers;
  ({ location: _location, LocationIcon, isLiveStreaming, LiveIcon } = arg0);
  ({ heading, topic, voiceUsers, joinButton } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.row, children: null };
  if (null != LiveIcon) {
    obj = { size: "xxs", color: "status-positive", style: null };
    obj[2] = tmp.calendarIcon;
    let tmp5 = callback(LiveIcon, obj);
    let tmp4 = callback;
  } else {
    tmp4 = callback;
    obj = { style: null };
    obj[0] = tmp.liveDot;
    tmp5 = callback(tmp3, obj);
  }
  const items = [tmp5, ];
  let str = "text-xs/semibold";
  if (isLiveStreaming) {
    str = c21;
  }
  const obj1 = { variant: str, color: "status-positive", style: null, children: null };
  const items1 = [tmp.headingText, ];
  if (isLiveStreaming) {
    isLiveStreaming = tmp.uppercase;
  }
  items1[1] = isLiveStreaming;
  obj1[2] = items1;
  obj1[3] = heading;
  items[1] = tmp4(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[1] = items;
  const items2 = [closure_14(View, obj), voiceUsers, tmp4(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { style: tmp.topic, lineClamp: 1, variant: c22, color: "redesign-channel-name-text", children: topic }), , ];
  const obj3 = { style: items3, children: null };
  items3 = [, ];
  ({ row: arr4[0], infoRow: arr4[1] } = tmp);
  let tmp2Result = null != _location;
  if (tmp2Result) {
    let tmp4Result = null != LocationIcon;
    if (tmp4Result) {
      const obj4 = { style: null, size: "xxs", color: "redesign-channel-name-muted-text" };
      obj4[0] = tmp.liveNowIcon;
      tmp4Result = tmp4(LocationIcon, obj4);
    }
    const items4 = [tmp4Result, ];
    const obj5 = { lineClamp: 1, variant: null, color: "redesign-channel-name-muted-text", style: null, children: null };
    obj5[1] = c23;
    let num = 0;
    if (tmp7Result.isAndroid()) {
      num = -2;
    }
    const obj6 = { children: null };
    const obj7 = { marginTop: null, flexShrink: 1 };
    obj7[0] = num;
    obj5[3] = obj7;
    obj5[4] = _location;
    items4[1] = tmp4(tmp7(4281).Text, obj5);
    obj6[0] = items4;
    tmp2Result = tmp2(closure_15, obj6);
    const tmp10 = closure_15;
    tmp7Result = tmp7(500);
  }
  const obj8 = { children: null };
  obj3[1] = tmp2Result;
  items2[3] = tmp4(View, obj3);
  items2[4] = joinButton;
  obj8[0] = items2;
  return closure_14(View, obj8);
});
let obj3 = { width: 7, height: 7, marginRight: 7, backgroundColor: require("Themes").colors.STATUS_POSITIVE, borderRadius: require("Themes").radii.xs };
let result = set.fileFinishedImporting("modules/guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx");

export default importAllResult.memo((guild) => {
  guild = guild.guild;
  let activeEventOrStageInstanceChannel;
  let guildActiveEvent;
  let obj = activeEventOrStageInstanceChannel(15191);
  activeEventOrStageInstanceChannel = obj.useActiveEventOrStageInstanceChannel(guild.id);
  let obj1 = activeEventOrStageInstanceChannel(8960);
  guildActiveEvent = obj1.useGuildActiveEvent(guild.id);
  let obj2 = activeEventOrStageInstanceChannel(589);
  const items = [handleStageInstanceCreateOrUpdate];
  const items1 = [activeEventOrStageInstanceChannel];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let id;
    if (activeEventOrStageInstanceChannel != null) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return outer1_7.getStageInstanceByChannel(id);
  }, items1);
  const items2 = [activeEventOrStageInstanceChannel];
  let id;
  const callback = importAllResult.useCallback(() => {
    if (null != activeEventOrStageInstanceChannel) {
      const result = outer1_2(outer1_3[22]).dismissGlobalKeyboard();
      if (obj.isGuildVoice()) {
        let tmp4Result = tmp4(tmp2[23]);
        tmp4Result.openGuildVoiceModal(obj);
      } else {
        tmp4Result = tmp4(tmp2[24]);
        tmp4Result.connectAndOpen(obj);
      }
      const obj2 = outer1_2(outer1_3[22]);
    }
  }, items2);
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const items3 = [id, guildActiveEvent];
  let entity_type;
  const callback1 = importAllResult.useCallback(() => {
    if (null != guildActiveEvent) {
      let obj = { eventId: null, event: null };
      obj[0] = tmp.id;
      obj[1] = tmp;
      const result = activeEventOrStageInstanceChannel(outer1_3[36]).openGuildEventDetails(obj);
      const obj2 = activeEventOrStageInstanceChannel(outer1_3[36]);
    } else {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = tmp2.id;
      }
      if (null != id) {
        obj = activeEventOrStageInstanceChannel(outer1_3[43]);
        const result1 = obj.openChannelLongPressActionSheet(tmp2.id);
      }
    }
  }, items3);
  if (guildActiveEvent != null) {
    entity_type = guildActiveEvent.entity_type;
  }
  if (entity_type === constants.EXTERNAL) {
    obj = { guildEvent: null };
    obj[0] = guildActiveEvent;
    let tmp13 = callback(GuildExternalEventNotice, obj);
  } else {
    if (null != activeEventOrStageInstanceChannel) {
      if (null != stateFromStores) {
        obj = { stageInstance: null, channel: null };
        obj[0] = stateFromStores;
        obj[1] = activeEventOrStageInstanceChannel;
        tmp13 = callback(GuildLiveStageNotice, obj);
      }
    }
    tmp13 = null;
    if (tmp12) {
      obj1 = { guildEvent: null, channel: null };
      obj1[0] = guildActiveEvent;
      obj1[1] = activeEventOrStageInstanceChannel;
      tmp13 = callback(GuildVoiceEventNotice, obj1);
    }
    tmp12 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  }
  let tmp20 = null;
  if (null != tmp13) {
    obj2 = { variant: "secondary", style: null, onPress: null, onLongPress: null, children: null };
    const items4 = [tmp.card, guild.style];
    obj2[1] = items4;
    obj2[2] = callback;
    obj2[3] = callback1;
    obj2[4] = tmp13;
    tmp20 = callback(activeEventOrStageInstanceChannel(5317).Card, obj2);
  }
  return tmp20;
});
export const LIVE_CHANNEL_NOTICE_MARGIN_TOP = PX_8;
export const LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM = PX_12;
export const getScaledLiveChannelNoticeHeight = function getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo) {
  let hasAudience;
  let hasButton;
  let hasSpeakers;
  let hasStream;
  ({ hasSpeakers, hasButton, hasAudience, hasStream } = guildLiveChannelNoticeInfo);
  require("../../../screen/native/useScaledTextLineHeight.android.tsx") /* map */;
  if (!hasSpeakers) {
    if (!hasAudience) {
      let num = 0;
    }
    let tmpResult = tmp(9370);
    const sum = PX_82 + tmpResult.scaleTextLineHeight(c22, fontScale);
    tmpResult = tmp(500);
    let num2 = 0;
    if (tmpResult.isAndroid()) {
      num2 = -2;
    }
    const sum1 = PX_4 + num2;
    let num3 = 0;
    const sum2 = sum1 + tmp(9370).scaleTextLineHeight(c23, fontScale);
    if (hasButton) {
      num3 = PX_82 + tmp(4699).SMALL_BUTTON_HEIGHT;
    }
    return PX_8 + PX_122 + tmp4 + num + sum + sum2 + num3 + PX_122 + PX_12;
  }
  num = PX_82 + closure_19;
};