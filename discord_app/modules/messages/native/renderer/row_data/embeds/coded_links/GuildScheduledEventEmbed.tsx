// === Module 14301: GuildScheduledEventEmbed ===

// Module 14301 (GuildScheduledEventEmbed)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2082 */;
import useChannelName from "useChannelName" /* 5521 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8017 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8156 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8158 */;
import _modDef8161 from "module_8161" /* 8161 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8791 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8792 */;
import ScheduleUtils from "ScheduleUtils" /* 8794 */;
import EntityUtils from "EntityUtils" /* 8797 */;
import useEventSchedule from "useEventSchedule" /* 8802 */;
import useCanInviteForGuildEvent from "useCanInviteForGuildEvent" /* 8807 */;
import GuildEventUtils from "GuildEventUtils" /* 8921 */;
import icons_ShareDefault from "icons/Share" /* 8998 */;
import GuildScheduledEventHeaderUtils from "GuildScheduledEventHeaderUtils" /* 9048 */;
import _modDef14302 from "module_14302" /* 14302 */;
import _modDef14303 from "module_14303" /* 14303 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6332 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildStore from "GuildStore" /* 2090 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
import MarkupUtils from "MarkupUtils" /* 5179 */;

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
  const tmp9 = React5(guildEvent);
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
  const assetUriForEmbed1 = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8161);
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
      let assetUriForEmbed3 = renderer_EmbedUtils.getAssetUriForEmbed(_modDef14302);
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
    parseToASTResult = MarkupUtils.parseToAST(description, true, obj6);
    const tmpResult = MarkupUtils;
  }
  const tmp7Result13 = renderer_EmbedUtils;
  const locationFromEvent = EntityUtils.getLocationFromEvent(guildEvent);
  let tmp28;
  if (null != locationFromEvent) {
    const obj7 = { channelId: id, guildId: guildEvent.guild_id, allowLinks: true, allowEmojiLinks: true };
    tmp28 = closure_17(locationFromEvent, true, obj7);
  }
  let tmp30 = locationFromEvent;
  if (locationFromEvent == null) {
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp7Result17 = useChannelName;
    }
    tmp30 = channelName;
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
  const guildEventUserCountsForEmbed = GuildScheduledEventManagerDefault.getGuildEventUserCountsForEmbed(guild_id, id2, items1);
  const tmpResult3 = GuildScheduledEventManagerDefault;
  const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
  const obj8 = {};
  const merged = Object.assign(obj5);
  obj8.acceptLabelBackgroundColor = acceptLabelActiveBackgroundColor;
  let prop;
  if (flag2) {
    prop = colors.acceptLabelDisabledBorderColor;
  }
  obj8.acceptLabelBorderColor = prop;
  obj8.acceptLabelColor = acceptLabelGreenColor;
  obj8.acceptLabelIcon = assetUriForEmbed3;
  obj8.acceptLabelText = stringResult2;
  let toLocaleStringResult;
  if (userCount != null) {
    toLocaleStringResult = userCount.toLocaleString();
  }
  obj8.badgeCount = toLocaleStringResult;
  const tmpResult4 = GuildScheduledEventManagerDefault;
  obj8.badgeIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef14303);
  let assetUriForEmbed4;
  if (null != eventLocationIconSource) {
    assetUriForEmbed4 = renderer_EmbedUtils.getAssetUriForEmbed(eventLocationIconSource);
    const tmp7Result20 = renderer_EmbedUtils;
  }
  obj8.channelIcon = assetUriForEmbed4;
  obj8.channelName = tmp30;
  obj8.content = parseToASTResult;
  let assetUriForEmbed5;
  if (null != user) {
    assetUriForEmbed5 = renderer_EmbedUtils.getAssetUriForEmbed(user.getAvatarSource(guildEvent.guild_id));
    const tmp7Result21 = renderer_EmbedUtils;
  }
  obj8.creatorAvatar = assetUriForEmbed5;
  obj8.extendedType = CodedLinkExtendedType.GUILD_SCHEDULED_EVENT;
  obj8.guildIcon = assetUriForEmbed;
  let name1;
  if (guild != null) {
    name1 = guild.name;
  }
  obj8.guildName = name1;
  let headerColor = processColor(color);
  if (headerColor == null) {
    headerColor = colors.headerColor;
  }
  obj8.headerColor = headerColor;
  const tmp7Result19 = renderer_EmbedUtils;
  obj8.headerIcon = renderer_EmbedUtils.getAssetUriForEmbed(icon);
  obj8.headerText = text;
  if (shouldChangeTextColor) {
    let headerColor3 = processColor(color);
    if (headerColor3 == null) {
      headerColor3 = colors.headerColor;
    }
    let headerColor2 = headerColor3;
  } else {
    headerColor2 = colors.headerColor;
  }
  obj8.headerTextColor = headerColor2;
  obj8.isRsvped = flag2;
  obj8.locationContent = tmp28;
  obj8.secondaryActionIcon = tmp21;
  obj8.titleText = name;
  obj8.type = type.type;
  obj8.guildEventId = guildEvent.id;
  return obj8;
}
const processColor = fn(17).processColor;
let GuildScheduledEventStore = fn(6332);
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: closure_7 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const getGuildIconSource = fn(2086).getGuildIconSource;
const CodedLinkExtendedType = fn(9907).CodedLinkExtendedType;
const constants = fn(2074).GuildScheduledEventEntityTypes;
const InviteTypes = fn(7689).InviteTypes;
let closure_17 = MarkupUtils.astParserFor(MarkupUtils.guildEventLocationRules);
const map = new Map();
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
      const guildEventUserCountsForEmbed = GuildScheduledEventManagerDefault.getGuildEventUserCountsForEmbed(guild_id, guildScheduledEvent.id, []);
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
  importDefault = tmp3;
  let nextRecurrenceIdInEvent = tmp[2];
  const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(tmp3);
  if (nextRecurrenceIdInEvent == null) {
    nextRecurrenceIdInEvent = first(8794).getNextRecurrenceIdInEvent(guildScheduledEvent);
    let obj2 = first(8794);
  }
  if (null != guildScheduledEvent) {
    if (!closure_6(guildScheduledEvent)) {
      if (null != nextRecurrenceIdInEvent) {
        const items = [nextRecurrenceIdInEvent];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCountsForEmbed = GuildScheduledEventManagerDefault.getGuildEventUserCountsForEmbed(first, guildScheduledEvent.id, items1);
      let channel_id;
      const userCount = GuildScheduledEventStore.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      let obj4 = { channel: ChannelStore.getChannel(channel_id), guildEvent: guildScheduledEvent, userCount, guild: GuildStore.getGuild(first), theme, type: InviteTypes.GUILD, recurrenceId: nextRecurrenceIdInEvent };
      return createGuildScheduledEventEmbed(obj4);
    }
  }
  let obj5 = first(8798);
  first(8798).guardGuildEventFetch(first, tmp[1], asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp2;
            let guildScheduledEvent2;
            value = map.get(first);
            if (null == value) {
              const result = tmp5(8799).scheduleGuildEventEmbedFetch(() => closure_1(c2[30]).fetchGuildEventsForGuild(closure_1_0));
              const cleanupPromise = result.finally(() => {
                map.delete(closure_1_0);
              });
              const result1 = map.set(first, cleanupPromise);
              value = cleanupPromise;
              const obj3 = tmp5(8799);
            }
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value, done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          guildScheduledEvent2 = guildScheduledEvent.getGuildScheduledEvent(closure_129_1);
          if (null != guildScheduledEvent2) {
            if (!closure_1_6(guildScheduledEvent2)) {
              c3 = 3;
              const obj = { value: guildScheduledEvent2, done: true };
              return obj;
            }
          }
          const guildEventUnavailableError = new tmp5(8798).GuildEventUnavailableError("guild event not found");
          throw guildEventUnavailableError;
        }
      } catch (tmp23) {
        c3 = tmp;
        throw tmp23;
      }
    }
  })).catch(() => {

  });
  return null;
};