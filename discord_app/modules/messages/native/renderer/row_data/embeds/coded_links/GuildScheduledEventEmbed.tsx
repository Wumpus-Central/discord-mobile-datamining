// === Module 12819: createGuildScheduledEventEmbed ===

// Module 12819 (createGuildScheduledEventEmbed)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1430 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8208 */;
import frozen from "frozen" /* 8210 */;
import _modDef8820 from "module_8820" /* 8820 */;
import getRRule from "getRRule" /* 8822 */;
import getChannelFromEvent from "getChannelFromEvent" /* 8825 */;
import useEventSchedule from "useEventSchedule" /* 8828 */;
import getGuildEventsForCurrentUserDefault from "getGuildEventsForCurrentUser" /* 8833 */;
import canEveryoneRoleViewEvent from "canEveryoneRoleViewEvent" /* 8838 */;
import getEventLocationIconSource from "getEventLocationIconSource" /* 8922 */;
import registerAssetDefault from "registerAsset" /* 12820 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { processColor } from "get ActivityIndicator" /* 17 */;
import scheduledEventSort from "scheduledEventSort" /* 4374 */;
import closure_7 from "scheduledEventSort" /* 4374 */;
import { getGuildIconSource } from "GuildNSFWContentLevel" /* 1434 */;
import closure_9 from "ensureGuildLoaded" /* 1391 */;
import closure_10 from "createGuildRecordFromRust" /* 1910 */;
import closure_11 from "markAllUserIdListsStale" /* 4033 */;
import closure_12 from "mergeGuildAvatar" /* 1922 */;
import { CodedLinkExtendedType } from "CodedLinkExtendedType" /* 10549 */;
import { GuildScheduledEventEntityTypes as closure_14 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import { InviteTypes } from "InviteSendStates" /* 4375 */;

require = arg1;
function createGuildScheduledEventEmbed(type) {
  ({ channel, guildEvent, userCount, guild, theme, recurrenceId } = type);
  const colors = getEmbedThemeColorsDefault(theme).colors;
  if (channel != null) {
    const id = channel.id;
  }
  let tmp3;
  if (null != guild) {
    tmp3 = getGuildIconSource(guild, 128, false);
  }
  let assetUriForEmbed;
  if (null != tmp3) {
    let obj = frozen;
    assetUriForEmbed = obj.getAssetUriForEmbed(tmp3);
  }
  obj1 = canEveryoneRoleViewEvent;
  const result = obj1.isGuildEventInvitable(guildEvent);
  const result1 = store.isInterestedInEventRecurrence(guildEvent.id, recurrenceId);
  ({ description, name, entity_type } = guildEvent);
  const tmp9 = callback3(guildEvent);
  const eventSchedule = useEventSchedule.getEventSchedule(guildEvent, recurrenceId);
  const obj3 = useEventSchedule;
  let toISOStringResult;
  if (eventSchedule != null) {
    const startTime = eventSchedule.startTime;
    toISOStringResult = startTime.toISOString();
  }
  const eventTimeData = getRRule.getEventTimeData(toISOStringResult);
  let tmp7Result = tmp7(12456);
  const guildScheduledEventHeaderProps = tmp7Result.getGuildScheduledEventHeaderProps({ eventTimeData, isStage: entity_type === constants.STAGE_INSTANCE, theme, event: guildEvent });
  const color = guildScheduledEventHeaderProps.color;
  obj = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: tmp16 };
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = tmp7(1236).intl;
  const stringResult = intl.string(getSystemLocale.t.DlcqlU);
  tmp7Result = tmp7(8210);
  const assetUriForEmbed1 = tmp7Result.getAssetUriForEmbed(tmp(8213));
  const obj4 = getRRule;
  const tmp13 = entity_type === constants.STAGE_INSTANCE;
  const assetUriForEmbed2 = frozen.getAssetUriForEmbed(tmp(10882));
  if (null != guild) {
    if (tmp9) {
      if (guildEvent.entity_type === constants.EXTERNAL) {
        const intl4 = tmp7(1236).intl;
        let stringResult1 = intl4.string(tmp7(1236).t.GoCQxU);
      } else {
        const intl3 = tmp7(1236).intl;
        stringResult1 = intl3.string(tmp7(1236).t.IaYdtW);
      }
      const acceptLabelGreenColor2 = colors.acceptLabelGreenColor;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      let assetUriForEmbed3 = tmp7(8210).getAssetUriForEmbed(tmp(8801));
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      let tmp21 = assetUriForEmbed2;
      let stringResult2 = stringResult;
      let flag2 = result1;
      const tmp7Result2 = tmp7(8210);
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      tmp21 = assetUriForEmbed2;
      assetUriForEmbed3 = assetUriForEmbed1;
      stringResult2 = stringResult;
      flag2 = result1;
    }
  } else {
    acceptLabelActiveBackgroundColor = tmp7(8200).processColorOrThrow(tmp(712).unsafe_rawColors.GREEN_360);
    const intl2 = tmp7(1236).intl;
    stringResult2 = intl2.string(tmp7(1236).t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
    const tmp7Result3 = tmp7(8200);
  }
  let parseToASTResult;
  if (null != description) {
    let tmpResult = tmp(6844);
    obj = { channelId: null, allowLinks: true, allowEmojiLinks: true, allowHeading: true, allowList: true };
    obj[0] = id;
    parseToASTResult = tmpResult.parseToAST(description, true, obj);
  }
  const tmp7Result1 = frozen;
  let locationFromEvent = getChannelFromEvent.getLocationFromEvent(guildEvent);
  if (locationFromEvent == null) {
    let channelName;
    if (null != channel) {
      channelName = tmp7(4989).computeChannelName(channel, user, closure_11);
      const tmp7Result5 = tmp7(4989);
    }
    locationFromEvent = channelName;
  }
  const tmp7Result4 = getChannelFromEvent;
  const eventLocationIconSource = getEventLocationIconSource.getEventLocationIconSource(guildEvent, channel, tmp16);
  user = user.getUser(guildEvent.creator_id);
  tmpResult = tmp(8833);
  ({ guild_id, id: id2 } = guildEvent);
  if (null != recurrenceId) {
    const items = [recurrenceId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCounts = tmpResult.getGuildEventUserCounts(guild_id, id2, items1);
  const tmp7Result6 = getEventLocationIconSource;
  const guildEventsForCurrentUser = getGuildEventsForCurrentUserDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
  obj1 = {};
  const merged = Object.assign(obj);
  obj1.acceptLabelBackgroundColor = acceptLabelActiveBackgroundColor;
  let prop;
  if (flag2) {
    prop = colors.acceptLabelDisabledBorderColor;
  }
  obj1.acceptLabelBorderColor = prop;
  obj1.acceptLabelColor = acceptLabelGreenColor;
  obj1.acceptLabelIcon = assetUriForEmbed3;
  obj1.acceptLabelText = stringResult2;
  let toLocaleStringResult;
  if (userCount != null) {
    toLocaleStringResult = userCount.toLocaleString();
  }
  obj1.badgeCount = toLocaleStringResult;
  const tmpResult1 = getGuildEventsForCurrentUserDefault;
  obj1.badgeIcon = frozen.getAssetUriForEmbed(registerAssetDefault);
  let assetUriForEmbed4;
  if (null != eventLocationIconSource) {
    assetUriForEmbed4 = tmp7(8210).getAssetUriForEmbed(eventLocationIconSource);
    const tmp7Result8 = tmp7(8210);
  }
  obj1.channelIcon = assetUriForEmbed4;
  obj1.channelName = locationFromEvent;
  obj1.content = parseToASTResult;
  let assetUriForEmbed5;
  if (null != user) {
    assetUriForEmbed5 = tmp7(8210).getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
    const tmp7Result9 = tmp7(8210);
  }
  obj1.creatorAvatar = assetUriForEmbed5;
  obj1.extendedType = CodedLinkExtendedType.GUILD_SCHEDULED_EVENT;
  obj1.guildIcon = assetUriForEmbed;
  name = undefined;
  if (guild != null) {
    name = guild.name;
  }
  obj1.guildName = name;
  let headerColor = processColor(color);
  if (headerColor == null) {
    headerColor = colors.headerColor;
  }
  obj1.headerColor = headerColor;
  const tmp40 = processColor;
  const tmp7Result7 = frozen;
  obj1.headerIcon = frozen.getAssetUriForEmbed(icon);
  obj1.headerText = text;
  if (shouldChangeTextColor) {
    let headerColor3 = tmp40(color);
    if (headerColor3 == null) {
      headerColor3 = colors.headerColor;
    }
    let headerColor2 = headerColor3;
  } else {
    headerColor2 = colors.headerColor;
  }
  obj1.headerTextColor = headerColor2;
  obj1.isRsvped = flag2;
  obj1.secondaryActionIcon = tmp21;
  obj1.titleText = name;
  obj1.type = type.type;
  obj1.guildEventId = guildEvent.id;
  return obj1;
}
({ isGuildEventEnded: c5, isGuildScheduledEventActive: closure_6 } = scheduledEventSort);
let closure_17 = {};
let result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

export const createGuildScheduledEventInviteEmbed = function createGuildScheduledEventInviteEmbed(invite, closure_2) {
  let channel = invite.channel;
  let id;
  if (channel != null) {
    id = channel.id;
  }
  channel = store2.getChannel(id);
  if (channel != null) {
    let guild_id = channel.guild_id;
  }
  const guild_scheduled_event = invite.guild_scheduled_event;
  let id1;
  if (guild_scheduled_event != null) {
    id1 = guild_scheduled_event.id;
  }
  const guildScheduledEvent = store.getGuildScheduledEvent(id1);
  const guild_scheduled_event2 = invite.guild_scheduled_event;
  if (guild_scheduled_event2 != null) {
    id = guild_scheduled_event2.id;
  }
  if (null == guildScheduledEvent) {
    let tmp11Result = null;
    if (null != guild_id) {
      const guildEventsForGuild = _modDef8820.fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
      const obj4 = _modDef8820;
    }
  } else {
    if (null != guild_id) {
      let obj = getGuildEventsForCurrentUserDefault;
      const guildEventUserCounts = obj.getGuildEventUserCounts(guild_id, guildScheduledEvent.id, []);
    }
    obj = { channel: null, guildEvent: null, userCount: null, guild: null, theme: null, type: null };
    obj[0] = channel;
    obj[1] = guildScheduledEvent;
    obj[2] = tmp7;
    if (null != invite.guild) {
      let fromInviteGuildResult = fromGuildPropertiesWithAdditionalFields.fromInviteGuild(invite.guild);
      const obj3 = fromGuildPropertiesWithAdditionalFields;
    } else {
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      fromInviteGuildResult = store3.getGuild(guild_id);
    }
    obj[3] = fromInviteGuildResult;
    obj[4] = closure_2;
    let GUILD = invite.type;
    if (GUILD == null) {
      GUILD = InviteTypes.GUILD;
    }
    obj[5] = GUILD;
    tmp11Result = createGuildScheduledEventEmbed(obj);
    const tmp11 = createGuildScheduledEventEmbed;
  }
  return tmp11Result;
};
export const createGuildScheduledEventLinkEmbed = function createGuildScheduledEventLinkEmbed(code, closure_2) {
  const tmp = callback(code.split("-"), 3);
  const first = tmp[0];
  let nextRecurrenceIdInEvent = tmp[2];
  let obj = store;
  const guildScheduledEvent = store.getGuildScheduledEvent(tmp[1]);
  if (nextRecurrenceIdInEvent == null) {
    nextRecurrenceIdInEvent = first(8822).getNextRecurrenceIdInEvent(guildScheduledEvent);
    const obj2 = first(8822);
  }
  if (null != guildScheduledEvent) {
    if (!callback2(guildScheduledEvent)) {
      if (null != nextRecurrenceIdInEvent) {
        const items = [nextRecurrenceIdInEvent];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = getGuildEventsForCurrentUserDefault.getGuildEventUserCounts(first, guildScheduledEvent.id, items1);
      let channel_id;
      const userCount = obj.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      obj = { channel: null, guildEvent: null, userCount: null, guild: null, theme: null, type: null, recurrenceId: null };
      obj[0] = store2.getChannel(channel_id);
      obj[1] = guildScheduledEvent;
      obj[2] = userCount;
      obj[3] = store3.getGuild(first);
      obj[4] = closure_2;
      obj[5] = InviteTypes.GUILD;
      obj[6] = nextRecurrenceIdInEvent;
      return createGuildScheduledEventEmbed(obj);
    }
  }
  if (!table[first]) {
    const guildEventsForGuild = _modDef8820.fetchGuildEventsForGuild(first);
    const obj5 = _modDef8820;
    guildEventsForGuild.then(() => {
      delete tmp3[tmp2];
      return tmp;
    }).catch(() => {
      delete tmp3[tmp2];
      return tmp;
    });
    tmp17[first] = true;
    const nextPromise = guildEventsForGuild.then(() => {
      delete tmp3[tmp2];
      return tmp;
    });
  }
  return null;
};