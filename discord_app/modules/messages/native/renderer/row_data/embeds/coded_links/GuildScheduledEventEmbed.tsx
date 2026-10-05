// === Module 13052: GuildScheduledEventEmbed ===

// Module 13052 (GuildScheduledEventEmbed)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import AssetRegistryDefault from "AssetRegistry" /* 4805 */;
import useChannelName from "useChannelName" /* 5043 */;
import Constants from "Constants" /* 7226 */;
import react_native2 from "react-native" /* 7595 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7604 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7608 */;
import ScheduleUtils from "ScheduleUtils" /* 9163 */;
import useEventSchedule from "useEventSchedule" /* 9166 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 9178 */;
import EntityUtils from "EntityUtils" /* 9180 */;
import GuildEventUtils from "GuildEventUtils" /* 9258 */;
import useCanInviteForGuildEvent from "useCanInviteForGuildEvent" /* 9262 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9271 */;
import GuildScheduledEventHeaderUtils from "GuildScheduledEventHeaderUtils" /* 9272 */;
import ShareDefault from "Share" /* 9518 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10024 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13053 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7037 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import MarkupUtils from "MarkupUtils" /* 4877 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function createGuildScheduledEventEmbed(type) {
  let acceptLabelActiveBackgroundColor;
  let acceptLabelGreenColor;
  let assetUriForEmbed3;
  let assetUriForEmbed4;
  let assetUriForEmbed5;
  let channel;
  let description;
  let entity_type2;
  let flag2;
  let guild;
  let guildEvent;
  let guild_id;
  let headerColor;
  let headerColor2;
  let icon;
  let id;
  let id2;
  let items1;
  let name;
  let name1;
  let prop;
  let recurrenceId;
  let shouldChangeTextColor;
  let stringResult2;
  let text;
  let theme;
  let tmp22;
  let tmp7Result19;
  let tmp7Result22;
  let toLocaleStringResult;
  let userCount;
  ({ channel, guildEvent, userCount, guild, theme, recurrenceId } = type);
  type = type.type;
  const colors = getEmbedThemeColorsDefault(theme).colors;
  if (channel != null) {
    id = channel.id;
  }
  let tmp3;
  if (null != guild) {
    tmp3 = getGuildIconSource(guild, 128, false);
  }
  let assetUriForEmbed;
  if (null != tmp3) {
    const obj = renderer_EmbedUtils;
    assetUriForEmbed = obj.getAssetUriForEmbed(tmp3);
  }
  const obj2 = useCanInviteForGuildEvent;
  const result = obj2.isGuildEventInvitable(guildEvent);
  const entity_type = guildEvent.entity_type;
  const EXTERNAL = constants.EXTERNAL;
  const tmp9 = metroRequire(guildEvent);
  const result1 = GuildScheduledEventStore.isInterestedInEventRecurrence(guildEvent.id, recurrenceId);
  ({ description, name, entity_type: entity_type2 } = guildEvent);
  const STAGE_INSTANCE = constants.STAGE_INSTANCE;
  const obj3 = useEventSchedule;
  const eventSchedule = obj3.getEventSchedule(guildEvent, recurrenceId);
  let toISOStringResult;
  const getEventTimeData = ScheduleUtils.getEventTimeData;
  ScheduleUtils;
  if (eventSchedule != null) {
    const startTime = eventSchedule.startTime;
    toISOStringResult = startTime.toISOString();
  }
  const tmp14 = entity_type2 === STAGE_INSTANCE;
  const eventTimeData = getEventTimeData(toISOStringResult);
  const tmp7Result = GuildScheduledEventHeaderUtils;
  const guildScheduledEventHeaderProps = tmp7Result.getGuildScheduledEventHeaderProps({ eventTimeData, isStage: tmp14, theme, event: guildEvent });
  const color = guildScheduledEventHeaderProps.color;
  const obj4 = { titleColor: colors.titleColor, borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, embedCanBeTapped: null != guild };
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = intl5.intl;
  const stringResult = intl.string(intl5.t.DlcqlU);
  const tmp7Result12 = renderer_EmbedUtils;
  const assetUriForEmbed1 = tmp7Result12.getAssetUriForEmbed(AssetRegistryDefault2);
  const tmp7Result13 = renderer_EmbedUtils;
  const assetUriForEmbed2 = tmp7Result13.getAssetUriForEmbed(ShareDefault);
  if (null != guild) {
    if (tmp9) {
      let stringResult1;
      const acceptLabelActiveBackgroundColor2 = colors.acceptLabelActiveBackgroundColor;
      if (entity_type === EXTERNAL) {
        const intl4 = intl5.intl;
        stringResult1 = intl4.string(intl5.t.GoCQxU);
      } else {
        const intl3 = intl5.intl;
        stringResult1 = intl3.string(intl5.t.IaYdtW);
      }
      acceptLabelGreenColor = colors.acceptLabelGreenColor;
      flag2 = false;
      stringResult2 = stringResult1;
      tmp22 = assetUriForEmbed2;
      acceptLabelActiveBackgroundColor = acceptLabelActiveBackgroundColor2;
    } else if (result1) {
      acceptLabelActiveBackgroundColor = colors.backgroundColor;
      const tmp7Result14 = renderer_EmbedUtils;
      assetUriForEmbed3 = tmp7Result14.getAssetUriForEmbed(AssetRegistryDefault);
      acceptLabelGreenColor = colors.acceptLabelDisabledTextColor;
      tmp22 = assetUriForEmbed2;
      stringResult2 = stringResult;
      flag2 = result1;
    } else {
      ({ acceptLabelActiveBackgroundColor, acceptLabelGreenColor } = colors);
      tmp22 = assetUriForEmbed2;
      assetUriForEmbed3 = assetUriForEmbed1;
      stringResult2 = stringResult;
      flag2 = result1;
    }
  } else {
    const tmp7Result15 = react_native2;
    acceptLabelActiveBackgroundColor = tmp7Result15.processColorOrThrow(nativeDefault.unsafe_rawColors.GREEN_360);
    const intl2 = intl5.intl;
    stringResult2 = intl2.string(intl5.t.XpeFYr);
    acceptLabelGreenColor = colors.acceptLabelGreenColor;
    flag2 = false;
  }
  let parseToASTResult;
  if (null != description) {
    const obj5 = { channelId: id, allowLinks: true, allowEmojiLinks: true, allowHeading: true, allowList: true };
    const tmpResult = MarkupUtils;
    parseToASTResult = tmpResult.parseToAST(description, true, obj5);
  }
  const tmp7Result16 = EntityUtils;
  const locationFromEvent = tmp7Result16.getLocationFromEvent(guildEvent);
  let tmp27;
  if (null != locationFromEvent) {
    const obj6 = { channelId: id, guildId: guildEvent.guild_id, allowLinks: true, allowEmojiLinks: true };
    tmp27 = closure_16(locationFromEvent, true, obj6);
  }
  let tmp29 = locationFromEvent;
  if (locationFromEvent == null) {
    let channelName;
    if (null != channel) {
      const tmp7Result17 = useChannelName;
      channelName = tmp7Result17.computeChannelName(channel, UserStore, RelationshipStore);
    }
    tmp29 = channelName;
  }
  const tmp7Result18 = GuildEventUtils;
  const eventLocationIconSource = tmp7Result18.getEventLocationIconSource(guildEvent, channel, tmp17);
  const user = UserStore.getUser(guildEvent.creator_id);
  const getGuildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts;
  ({ guild_id, id: id2 } = guildEvent);
  GuildScheduledEventManagerDefault;
  if (null != recurrenceId) {
    const items = [recurrenceId];
    items1 = items;
  } else {
    items1 = [];
  }
  const guildEventUserCounts = getGuildEventUserCounts(guild_id, id2, items1);
  const tmpResult4 = GuildScheduledEventManagerDefault;
  const guildEventsForCurrentUser = tmpResult4.getGuildEventsForCurrentUser(guildEvent.guild_id);
  const obj7 = { acceptLabelBackgroundColor: acceptLabelActiveBackgroundColor, acceptLabelBorderColor: prop, acceptLabelColor: acceptLabelGreenColor, acceptLabelIcon: assetUriForEmbed3, acceptLabelText: stringResult2, badgeCount: toLocaleStringResult, badgeIcon: tmp7Result19.getAssetUriForEmbed(AssetRegistryDefault3), channelIcon: assetUriForEmbed4, channelName: tmp29, content: parseToASTResult, creatorAvatar: assetUriForEmbed5, extendedType: CodedLinkExtendedType.GUILD_SCHEDULED_EVENT, guildIcon: assetUriForEmbed, guildName: name1, headerColor, headerIcon: tmp7Result22.getAssetUriForEmbed(icon), headerText: text, headerTextColor: headerColor2, isRsvped: flag2, locationContent: tmp27, secondaryActionIcon: tmp22, titleText: name, type, guildEventId: guildEvent.id };
  const merged = Object.assign(obj4);
  prop = undefined;
  if (flag2) {
    prop = colors.acceptLabelDisabledBorderColor;
  }
  toLocaleStringResult = undefined;
  if (userCount != null) {
    toLocaleStringResult = userCount.toLocaleString();
  }
  assetUriForEmbed4 = undefined;
  tmp7Result19 = renderer_EmbedUtils;
  if (null != eventLocationIconSource) {
    const tmp7Result20 = renderer_EmbedUtils;
    assetUriForEmbed4 = tmp7Result20.getAssetUriForEmbed(eventLocationIconSource);
  }
  assetUriForEmbed5 = undefined;
  if (null != user) {
    const tmp7Result21 = renderer_EmbedUtils;
    assetUriForEmbed5 = tmp7Result21.getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
  }
  name1 = undefined;
  if (guild != null) {
    name1 = guild.name;
  }
  headerColor = processColor(color);
  if (headerColor == null) {
    headerColor = colors.headerColor;
  }
  tmp7Result22 = renderer_EmbedUtils;
  if (shouldChangeTextColor) {
    let headerColor3 = processColor(color);
    if (headerColor3 == null) {
      headerColor3 = colors.headerColor;
    }
    headerColor2 = headerColor3;
  } else {
    headerColor2 = colors.headerColor;
  }
  return obj7;
}
const processColor = react_native.processColor;
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: hasOwnProperty, isGuildScheduledEventActive: metroRequire } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
const getGuildIconSource = GuildRecord.getGuildIconSource;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const InviteTypes = Constants.InviteTypes;
let closure_16 = MarkupUtils.astParserFor(MarkupUtils.guildEventLocationRules);
let closure_18 = {};
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx");

export const createGuildScheduledEventInviteEmbed = function createGuildScheduledEventInviteEmbed(invite, theme) {
  let GUILD;
  let fromInviteGuildResult;
  let guild_id;
  let tmp11Result;
  const channel = invite.channel;
  let id1;
  const getChannel = ChannelStore.getChannel;
  if (channel != null) {
    id1 = channel.id;
  }
  const channel1 = getChannel(id1);
  if (channel1 != null) {
    guild_id = channel1.guild_id;
  }
  const guild_scheduled_event = invite.guild_scheduled_event;
  let id2;
  const getGuildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent;
  if (guild_scheduled_event != null) {
    id2 = guild_scheduled_event.id;
  }
  const guildScheduledEvent = getGuildScheduledEvent(id2);
  const guild_scheduled_event2 = invite.guild_scheduled_event;
  if (guild_scheduled_event2 != null) {
    const id = guild_scheduled_event2.id;
  }
  if (null == guildScheduledEvent) {
    tmp11Result = null;
    if (null != guild_id) {
      const obj4 = GuildScheduledEventsActionCreatorsDefault;
      const guildEventsForGuild = obj4.fetchGuildEventsForGuild(guild_id);
      tmp11Result = null;
    }
  } else {
    if (null != guild_id) {
      const obj = GuildScheduledEventManagerDefault;
      const guildEventUserCounts = obj.getGuildEventUserCounts(guild_id, guildScheduledEvent.id, []);
    }
    const obj2 = { channel: channel1, guildEvent: guildScheduledEvent, userCount: tmp7, guild: fromInviteGuildResult, theme, type: GUILD };
    if (null != invite.guild) {
      const obj3 = GuildRecordUtils;
      fromInviteGuildResult = obj3.fromInviteGuild(invite.guild);
    } else {
      let guild_id1;
      const getGuild = GuildStore.getGuild;
      if (channel1 != null) {
        guild_id1 = channel1.guild_id;
      }
      fromInviteGuildResult = getGuild(guild_id1);
    }
    GUILD = invite.type;
    if (GUILD == null) {
      GUILD = InviteTypes.GUILD;
    }
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
    const obj2 = first(9163);
    nextRecurrenceIdInEvent = obj2.getNextRecurrenceIdInEvent(guildScheduledEvent);
  }
  if (null != guildScheduledEvent) {
    if (!closure_5(guildScheduledEvent)) {
      let items1;
      const getGuildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts;
      const id = guildScheduledEvent.id;
      GuildScheduledEventManagerDefault;
      if (null != nextRecurrenceIdInEvent) {
        const items = [nextRecurrenceIdInEvent];
        items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = getGuildEventUserCounts(first, id, items1);
      let channel_id;
      const userCount = GuildScheduledEventStore.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      const getChannel = ChannelStore.getChannel;
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      const obj3 = { channel: getChannel(channel_id), guildEvent: guildScheduledEvent, userCount, guild: GuildStore.getGuild(first), theme, type: InviteTypes.GUILD, recurrenceId: nextRecurrenceIdInEvent };
      return createGuildScheduledEventEmbed(obj3);
    }
  }
  if (!closure_18[first]) {
    const obj4 = GuildScheduledEventsActionCreatorsDefault;
    const guildEventsForGuild = obj4.fetchGuildEventsForGuild(first);
    const nextPromise = guildEventsForGuild.then(() => {
      delete closure_18[first];
      return tmp;
    });
    nextPromise.catch(() => {
      delete closure_18[first];
      return tmp;
    });
    tmp18[first] = true;
  }
  return null;
};