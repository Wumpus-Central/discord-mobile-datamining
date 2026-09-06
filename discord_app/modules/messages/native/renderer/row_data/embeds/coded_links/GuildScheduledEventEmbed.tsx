// === Module 13213: GuildScheduledEventEmbed ===

// Module 13213 (GuildScheduledEventEmbed)
import util from "util" /* 1114 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import useEventSchedule from "useEventSchedule" /* 9668 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9703 */;
import EntityUtils from "EntityUtils" /* 9705 */;
import GuildEventUtils from "GuildEventUtils" /* 9769 */;
import useCanInviteForGuildEvent from "useCanInviteForGuildEvent" /* 9773 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9781 */;
import _modDef13214 from "module_13214" /* 13214 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
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
    let obj = renderer_EmbedUtils;
    assetUriForEmbed = obj.getAssetUriForEmbed(tmp3);
  }
  let obj1 = useCanInviteForGuildEvent;
  const result = obj1.isGuildEventInvitable(guildEvent);
  const result1 = GuildScheduledEventStore.isInterestedInEventRecurrence(guildEvent.id, recurrenceId);
  ({ description, name, entity_type } = guildEvent);
  const tmp9 = timestampProducer(guildEvent);
  const eventSchedule = useEventSchedule.getEventSchedule(guildEvent, recurrenceId);
  let toISOStringResult;
  if (eventSchedule != null) {
    const startTime = eventSchedule.startTime;
    toISOStringResult = startTime.toISOString();
  }
  const eventTimeData = ScheduleUtils.getEventTimeData(toISOStringResult);
  let tmp7Result = tmp7(9782);
  const guildScheduledEventHeaderProps = tmp7Result.getGuildScheduledEventHeaderProps({ eventTimeData, isStage: entity_type === constants.STAGE_INSTANCE, theme, event: guildEvent });
  const color = guildScheduledEventHeaderProps.color;
  obj = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: tmp16 };
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = tmp7(1114).intl;
  const stringResult = intl.string(util.t.DlcqlU);
  tmp7Result = tmp7(7946);
  const assetUriForEmbed1 = tmp7Result.getAssetUriForEmbed(tmp(7949));
  const tmp13 = entity_type === constants.STAGE_INSTANCE;
  const assetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed(tmp(9857));
  if (null != guild) {
    if (tmp9) {
      if (guildEvent.entity_type === constants.EXTERNAL) {
        const intl4 = tmp7(1114).intl;
        let stringResult1 = intl4.string(tmp7(1114).t.GoCQxU);
      } else {
        const intl3 = tmp7(1114).intl;
        stringResult1 = intl3.string(tmp7(1114).t.IaYdtW);
      }
      const acceptLabelGreenColor2 = colors.acceptLabelGreenColor;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      let assetUriForEmbed3 = tmp7(7946).getAssetUriForEmbed(tmp(9566));
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      let tmp21 = assetUriForEmbed2;
      let stringResult2 = stringResult;
      let flag2 = result1;
      const tmp7Result2 = tmp7(7946);
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      tmp21 = assetUriForEmbed2;
      assetUriForEmbed3 = assetUriForEmbed1;
      stringResult2 = stringResult;
      flag2 = result1;
    }
  } else {
    acceptLabelActiveBackgroundColor = tmp7(7936).processColorOrThrow(tmp(576).unsafe_rawColors.GREEN_360);
    const intl2 = tmp7(1114).intl;
    stringResult2 = intl2.string(tmp7(1114).t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
    const tmp7Result3 = tmp7(7936);
  }
  let parseToASTResult;
  if (null != description) {
    let tmpResult = tmp(4550);
    obj = { channelId: id, allowLinks: true, allowEmojiLinks: true, allowHeading: true, allowList: true };
    parseToASTResult = tmpResult.parseToAST(description, true, obj);
  }
  const tmp7Result1 = renderer_EmbedUtils;
  let locationFromEvent = EntityUtils.getLocationFromEvent(guildEvent);
  if (locationFromEvent == null) {
    let channelName;
    if (null != channel) {
      channelName = tmp7(4713).computeChannelName(channel, UserStore, RelationshipStore);
      const tmp7Result5 = tmp7(4713);
    }
    locationFromEvent = channelName;
  }
  const tmp7Result4 = EntityUtils;
  const eventLocationIconSource = GuildEventUtils.getEventLocationIconSource(guildEvent, channel, tmp16);
  const user = UserStore.getUser(guildEvent.creator_id);
  tmpResult = tmp(9781);
  ({ guild_id, id: id2 } = guildEvent);
  if (null != recurrenceId) {
    const items = [recurrenceId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCounts = tmpResult.getGuildEventUserCounts(guild_id, id2, items1);
  const tmp7Result6 = GuildEventUtils;
  const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
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
  const tmpResult1 = GuildScheduledEventManagerDefault;
  obj1.badgeIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef13214);
  let assetUriForEmbed4;
  if (null != eventLocationIconSource) {
    assetUriForEmbed4 = tmp7(7946).getAssetUriForEmbed(eventLocationIconSource);
    const tmp7Result8 = tmp7(7946);
  }
  obj1.channelIcon = assetUriForEmbed4;
  obj1.channelName = locationFromEvent;
  obj1.content = parseToASTResult;
  let assetUriForEmbed5;
  if (null != user) {
    assetUriForEmbed5 = tmp7(7946).getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
    const tmp7Result9 = tmp7(7946);
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
  const tmp7Result7 = renderer_EmbedUtils;
  obj1.headerIcon = renderer_EmbedUtils.getAssetUriForEmbed(icon);
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
const processColor = fn(17).processColor;
let GuildScheduledEventStore = fn(7526);
({ isGuildEventEnded: hasOwnProperty, isGuildScheduledEventActive: metroRequire } = GuildScheduledEventStore);
const getGuildIconSource = fn(1975).getGuildIconSource;
const CodedLinkExtendedType = fn(11309).CodedLinkExtendedType;
const constants = fn(1963).GuildScheduledEventEntityTypes;
const InviteTypes = fn(7736).InviteTypes;
let closure_17 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

export const createGuildScheduledEventInviteEmbed = function createGuildScheduledEventInviteEmbed(invite, theme) {
  let channel = invite.channel;
  let id;
  if (channel != null) {
    id = channel.id;
  }
  channel = ChannelStore.getChannel(id);
  if (channel != null) {
    let guild_id = channel.guild_id;
  }
  const guild_scheduled_event = invite.guild_scheduled_event;
  let id1;
  if (guild_scheduled_event != null) {
    id1 = guild_scheduled_event.id;
  }
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id1);
  const guild_scheduled_event2 = invite.guild_scheduled_event;
  if (guild_scheduled_event2 != null) {
    id = guild_scheduled_event2.id;
  }
  if (null == guildScheduledEvent) {
    let tmp11Result = null;
    if (null != guild_id) {
      const guildEventsForGuild = GuildScheduledEventsActionCreatorsDefault.fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
    }
  } else {
    if (null != guild_id) {
      let obj = GuildScheduledEventManagerDefault;
      const guildEventUserCounts = obj.getGuildEventUserCounts(guild_id, guildScheduledEvent.id, []);
    }
    obj = { channel, guildEvent: guildScheduledEvent, userCount: tmp7, guild: null, theme: null, type: null };
    if (null != invite.guild) {
      let fromInviteGuildResult = GuildRecordUtils.fromInviteGuild(invite.guild);
    } else {
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      fromInviteGuildResult = GuildStore.getGuild(guild_id);
    }
    obj.guild = fromInviteGuildResult;
    obj.theme = theme;
    let GUILD = invite.type;
    if (GUILD == null) {
      GUILD = InviteTypes.GUILD;
    }
    obj.type = GUILD;
    tmp11Result = createGuildScheduledEventEmbed(obj);
  }
  return tmp11Result;
};
export const createGuildScheduledEventLinkEmbed = function createGuildScheduledEventLinkEmbed(code, theme) {
  const tmp = _slicedToArray(code.split("-"), 3);
  const first = tmp[0];
  let nextRecurrenceIdInEvent = tmp[2];
  let obj = GuildScheduledEventStore;
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(tmp[1]);
  if (nextRecurrenceIdInEvent == null) {
    nextRecurrenceIdInEvent = first(9665).getNextRecurrenceIdInEvent(guildScheduledEvent);
    const obj2 = first(9665);
  }
  if (null != guildScheduledEvent) {
    if (!closure_5(guildScheduledEvent)) {
      if (null != nextRecurrenceIdInEvent) {
        const items = [nextRecurrenceIdInEvent];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(first, guildScheduledEvent.id, items1);
      let channel_id;
      const userCount = obj.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      obj = { channel: ChannelStore.getChannel(channel_id), guildEvent: guildScheduledEvent, userCount, guild: GuildStore.getGuild(first), theme, type: InviteTypes.GUILD, recurrenceId: nextRecurrenceIdInEvent };
      return createGuildScheduledEventEmbed(obj);
    }
  }
  if (!closure_17[first]) {
    const guildEventsForGuild = GuildScheduledEventsActionCreatorsDefault.fetchGuildEventsForGuild(first);
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