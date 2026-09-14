// === Module 13344: GuildScheduledEventEmbed ===

// Module 13344 (GuildScheduledEventEmbed)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4626 */;
import useChannelName from "useChannelName" /* 4789 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8040 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8049 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8050 */;
import _modDef8053 from "module_8053" /* 8053 */;
import _modDef9696 from "module_9696" /* 9696 */;
import ScheduleUtils from "ScheduleUtils" /* 9795 */;
import useEventSchedule from "useEventSchedule" /* 9798 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9833 */;
import EntityUtils from "EntityUtils" /* 9835 */;
import GuildEventUtils from "GuildEventUtils" /* 9899 */;
import useCanInviteForGuildEvent from "useCanInviteForGuildEvent" /* 9903 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9911 */;
import GuildScheduledEventHeaderUtils from "GuildScheduledEventHeaderUtils" /* 9912 */;
import icons_ShareDefault from "icons/Share" /* 9987 */;
import _modDef13345 from "module_13345" /* 13345 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7629 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;
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
    assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(tmp3);
  }
  const result = useCanInviteForGuildEvent.isGuildEventInvitable(guildEvent);
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
  const tmp13 = entity_type === constants.STAGE_INSTANCE;
  const guildScheduledEventHeaderProps = GuildScheduledEventHeaderUtils.getGuildScheduledEventHeaderProps({ eventTimeData, isStage: tmp13, theme, event: guildEvent });
  const color = guildScheduledEventHeaderProps.color;
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = util.intl;
  const stringResult = intl.string(util.t.DlcqlU);
  const obj5 = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: null != guild };
  const tmp7Result = GuildScheduledEventHeaderUtils;
  const assetUriForEmbed1 = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8053);
  const tmp7Result12 = renderer_EmbedUtils;
  const assetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed(icons_ShareDefault);
  if (null != guild) {
    if (tmp9) {
      if (guildEvent.entity_type === constants.EXTERNAL) {
        const intl4 = util.intl;
        let stringResult1 = intl4.string(util.t.GoCQxU);
      } else {
        const intl3 = util.intl;
        stringResult1 = intl3.string(util.t.IaYdtW);
      }
      const acceptLabelGreenColor2 = colors.acceptLabelGreenColor;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      let assetUriForEmbed3 = renderer_EmbedUtils.getAssetUriForEmbed(_modDef9696);
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      let tmp21 = assetUriForEmbed2;
      let stringResult2 = stringResult;
      let flag2 = result1;
      const tmp7Result14 = renderer_EmbedUtils;
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      tmp21 = assetUriForEmbed2;
      assetUriForEmbed3 = assetUriForEmbed1;
      stringResult2 = stringResult;
      flag2 = result1;
    }
  } else {
    acceptLabelActiveBackgroundColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.GREEN_360);
    const intl2 = util.intl;
    stringResult2 = intl2.string(util.t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
    const tmp7Result15 = RowGeneratorStyleSheet;
  }
  let parseToASTResult;
  if (null != description) {
    const obj6 = { channelId: id, allowLinks: true, allowEmojiLinks: true, allowHeading: true, allowList: true };
    parseToASTResult = MarkupUtilsDefault.parseToAST(description, true, obj6);
    const tmpResult = MarkupUtilsDefault;
  }
  const tmp7Result13 = renderer_EmbedUtils;
  let locationFromEvent = EntityUtils.getLocationFromEvent(guildEvent);
  if (locationFromEvent == null) {
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp7Result17 = useChannelName;
    }
    locationFromEvent = channelName;
  }
  const tmp7Result16 = EntityUtils;
  const eventLocationIconSource = GuildEventUtils.getEventLocationIconSource(guildEvent, channel, tmp16);
  const user = UserStore.getUser(guildEvent.creator_id);
  const tmp7Result18 = GuildEventUtils;
  ({ guild_id, id: id2 } = guildEvent);
  if (null != recurrenceId) {
    const items = [recurrenceId];
    let items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(guild_id, id2, items1);
  const tmpResult3 = GuildScheduledEventManagerDefault;
  const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
  const obj7 = {};
  const merged = Object.assign(obj5);
  obj7.acceptLabelBackgroundColor = acceptLabelActiveBackgroundColor;
  let prop;
  if (flag2) {
    prop = colors.acceptLabelDisabledBorderColor;
  }
  obj7.acceptLabelBorderColor = prop;
  obj7.acceptLabelColor = acceptLabelGreenColor;
  obj7.acceptLabelIcon = assetUriForEmbed3;
  obj7.acceptLabelText = stringResult2;
  let toLocaleStringResult;
  if (userCount != null) {
    toLocaleStringResult = userCount.toLocaleString();
  }
  obj7.badgeCount = toLocaleStringResult;
  const tmpResult4 = GuildScheduledEventManagerDefault;
  obj7.badgeIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef13345);
  let assetUriForEmbed4;
  if (null != eventLocationIconSource) {
    assetUriForEmbed4 = renderer_EmbedUtils.getAssetUriForEmbed(eventLocationIconSource);
    const tmp7Result20 = renderer_EmbedUtils;
  }
  obj7.channelIcon = assetUriForEmbed4;
  obj7.channelName = locationFromEvent;
  obj7.content = parseToASTResult;
  let assetUriForEmbed5;
  if (null != user) {
    assetUriForEmbed5 = renderer_EmbedUtils.getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
    const tmp7Result21 = renderer_EmbedUtils;
  }
  obj7.creatorAvatar = assetUriForEmbed5;
  obj7.extendedType = CodedLinkExtendedType.GUILD_SCHEDULED_EVENT;
  obj7.guildIcon = assetUriForEmbed;
  let name1;
  if (guild != null) {
    name1 = guild.name;
  }
  obj7.guildName = name1;
  let headerColor = processColor(color);
  if (headerColor == null) {
    headerColor = colors.headerColor;
  }
  obj7.headerColor = headerColor;
  const tmp7Result19 = renderer_EmbedUtils;
  obj7.headerIcon = renderer_EmbedUtils.getAssetUriForEmbed(icon);
  obj7.headerText = text;
  if (shouldChangeTextColor) {
    let headerColor3 = processColor(color);
    if (headerColor3 == null) {
      headerColor3 = colors.headerColor;
    }
    let headerColor2 = headerColor3;
  } else {
    headerColor2 = colors.headerColor;
  }
  obj7.headerTextColor = headerColor2;
  obj7.isRsvped = flag2;
  obj7.secondaryActionIcon = tmp21;
  obj7.titleText = name;
  obj7.type = type.type;
  obj7.guildEventId = guildEvent.id;
  return obj7;
}
const processColor = fn(17).processColor;
let GuildScheduledEventStore = fn(7629);
({ isGuildEventEnded: hasOwnProperty, isGuildScheduledEventActive: metroRequire } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const getGuildIconSource = fn(1975).getGuildIconSource;
const CodedLinkExtendedType = fn(11443).CodedLinkExtendedType;
const constants = fn(1963).GuildScheduledEventEntityTypes;
const InviteTypes = fn(7838).InviteTypes;
let closure_17 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

export const createGuildScheduledEventInviteEmbed = function createGuildScheduledEventInviteEmbed(invite, theme) {
  const channel = invite.channel;
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  const channel1 = ChannelStore.getChannel(id1);
  if (channel1 != null) {
    const guild_id = channel1.guild_id;
  }
  const guild_scheduled_event = invite.guild_scheduled_event;
  let id2;
  if (guild_scheduled_event != null) {
    id2 = guild_scheduled_event.id;
  }
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id2);
  const guild_scheduled_event2 = invite.guild_scheduled_event;
  if (guild_scheduled_event2 != null) {
    const id = guild_scheduled_event2.id;
  }
  if (null == guildScheduledEvent) {
    let tmp11Result = null;
    if (null != guild_id) {
      const guildEventsForGuild = GuildScheduledEventsActionCreatorsDefault.fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
    }
  } else {
    if (null != guild_id) {
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(guild_id, guildScheduledEvent.id, []);
    }
    const obj2 = { channel: channel1, guildEvent: guildScheduledEvent, userCount: tmp7, guild: null, theme: null, type: null };
    if (null != invite.guild) {
      let fromInviteGuildResult = GuildRecordUtils.fromInviteGuild(invite.guild);
    } else {
      let guild_id1;
      if (channel1 != null) {
        guild_id1 = channel1.guild_id;
      }
      fromInviteGuildResult = GuildStore.getGuild(guild_id1);
    }
    obj2.guild = fromInviteGuildResult;
    obj2.theme = theme;
    let GUILD = invite.type;
    if (GUILD == null) {
      GUILD = InviteTypes.GUILD;
    }
    obj2.type = GUILD;
    tmp11Result = createGuildScheduledEventEmbed(obj2);
  }
  return tmp11Result;
};
export const createGuildScheduledEventLinkEmbed = function createGuildScheduledEventLinkEmbed(code, theme) {
  const tmp = _slicedToArray(code.split("-"), 3);
  const first = tmp[0];
  let nextRecurrenceIdInEvent = tmp[2];
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(tmp[1]);
  if (nextRecurrenceIdInEvent == null) {
    nextRecurrenceIdInEvent = first(9795).getNextRecurrenceIdInEvent(guildScheduledEvent);
    const obj2 = first(9795);
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
      const userCount = GuildScheduledEventStore.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      const obj4 = { channel: ChannelStore.getChannel(channel_id), guildEvent: guildScheduledEvent, userCount, guild: GuildStore.getGuild(first), theme, type: InviteTypes.GUILD, recurrenceId: nextRecurrenceIdInEvent };
      return createGuildScheduledEventEmbed(obj4);
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