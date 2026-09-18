// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import GuildRecordUtils from "../../../../../../../utils/GuildRecordUtils.tsx";
import useChannelName from "../../../../../../channel/useChannelName.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import renderer_EmbedUtils from "../../../EmbedUtils.tsx";
import _modDef8168 from "../../../../../../../../_runtime/metro/08168__.js";
import _modDef9814 from "../../../../../../../../_runtime/metro/09814__.js";
import ScheduleUtils from "../../../../../../guild_scheduled_events/utils/ScheduleUtils.tsx";
import useEventSchedule from "../../../../../../guild_scheduled_events/useEventSchedule.tsx";
import GuildScheduledEventsActionCreatorsDefault from "../../../../../../guild_scheduled_events/GuildScheduledEventsActionCreators.tsx";
import EntityUtils from "../../../../../../guild_scheduled_events/utils/EntityUtils.tsx";
import GuildEventUtils from "../../../../../../guild_scheduled_events/native/components/GuildEventUtils.tsx";
import useCanInviteForGuildEvent from "../../../../../../guild_scheduled_events/useCanInviteForGuildEvent.tsx";
import GuildScheduledEventManagerDefault from "../../../../../../guild_scheduled_events/GuildScheduledEventManager.tsx";
import GuildScheduledEventHeaderUtils from "../../../../../../guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx";
import icons_ShareDefault from "../../../../../../icons/native/Share.tsx";
import _modDef13460 from "../../../../../../../../_runtime/metro/13460__.js";
import _slicedToArray from "../../../../../../../../_runtime/metro/00032__.js";
import GuildScheduledEventStore_mod from "../../../../../../guild_scheduled_events/GuildScheduledEventStore.tsx";
import ChannelStore from "../../../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";
import MarkupUtils from "../../../../../../markup/MarkupUtils.tsx";

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
  const guildScheduledEventHeaderProps = GuildScheduledEventHeaderUtils.getGuildScheduledEventHeaderProps({
    eventTimeData,
    isStage: tmp13,
    theme,
    event: guildEvent,
  });
  const color = guildScheduledEventHeaderProps.color;
  ({ icon, shouldChangeTextColor, text } = guildScheduledEventHeaderProps);
  const intl = util.intl;
  const stringResult = intl.string(util.t.DlcqlU);
  const obj5 = {
    titleColor: colors.titleColor,
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundColor,
    thumbnailCornerRadius: 15,
    embedCanBeTapped: null != guild,
  };
  const tmp7Result = GuildScheduledEventHeaderUtils;
  const assetUriForEmbed1 = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8168);
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
      let assetUriForEmbed3 = renderer_EmbedUtils.getAssetUriForEmbed(_modDef9814);
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
    acceptLabelActiveBackgroundColor = RowGeneratorStyleSheet.processColorOrThrow(
      nativeDefault.unsafe_rawColors.GREEN_360,
    );
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
    tmp28 = closure_16(locationFromEvent, true, obj7);
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
  const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(guild_id, id2, items1);
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
  obj8.badgeIcon = renderer_EmbedUtils.getAssetUriForEmbed(_modDef13460);
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
let GuildScheduledEventStore = fn(7722);
({ isGuildEventEnded: hasOwnProperty, isGuildScheduledEventActive: metroRequire } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const getGuildIconSource = fn(1976).getGuildIconSource;
const CodedLinkExtendedType = fn(11561).CodedLinkExtendedType;
const constants = fn(1964).GuildScheduledEventEntityTypes;
const InviteTypes = fn(7938).InviteTypes;
let closure_16 = MarkupUtils.astParserFor(MarkupUtils.guildEventLocationRules);
let closure_18 = {};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx",
);

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
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(
        guild_id,
        guildScheduledEvent.id,
        [],
      );
    }
    const obj2 = {
      channel: channel1,
      guildEvent: guildScheduledEvent,
      userCount: tmp7,
      guild: null,
      theme: null,
      type: null,
    };
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
    nextRecurrenceIdInEvent = first(9910).getNextRecurrenceIdInEvent(guildScheduledEvent);
    const obj2 = first(9910);
  }
  if (null != guildScheduledEvent) {
    if (!closure_5(guildScheduledEvent)) {
      if (null != nextRecurrenceIdInEvent) {
        const items = [nextRecurrenceIdInEvent];
        let items1 = items;
      } else {
        items1 = [];
      }
      const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(
        first,
        guildScheduledEvent.id,
        items1,
      );
      let channel_id;
      const userCount = GuildScheduledEventStore.getUserCount(guildScheduledEvent.id, nextRecurrenceIdInEvent);
      if (guildScheduledEvent != null) {
        channel_id = guildScheduledEvent.channel_id;
      }
      const obj4 = {
        channel: ChannelStore.getChannel(channel_id),
        guildEvent: guildScheduledEvent,
        userCount,
        guild: GuildStore.getGuild(first),
        theme,
        type: InviteTypes.GUILD,
        recurrenceId: nextRecurrenceIdInEvent,
      };
      return createGuildScheduledEventEmbed(obj4);
    }
  }
  if (!closure_18[first]) {
    const guildEventsForGuild = GuildScheduledEventsActionCreatorsDefault.fetchGuildEventsForGuild(first);
    guildEventsForGuild
      .then(() => {
        delete tmp3[tmp2];
        return tmp;
      })
      .catch(() => {
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
