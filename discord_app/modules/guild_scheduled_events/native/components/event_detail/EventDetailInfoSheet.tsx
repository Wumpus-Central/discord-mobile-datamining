// discord_app/modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUserDefault from "../../../../../utils/UserUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelAgeVerificationNoticeContentDefault from "../../../../stage_channels/native/StageChannelAgeVerificationNotice.tsx";
import useGuildScheduledEventUserCountDefault from "../../../useGuildScheduledEventUserCount.tsx";
import getGuildEventsForCurrentUserDefault from "../../../GuildScheduledEventManager.tsx";
import GuildEventRecurrencesDefault from "../GuildEventRecurrences.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../../a11y/AccessibilityStore.tsx";
import trackCommunicationDisabled from "../../../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../../../stores/GuildStore.tsx";
import createRTCConnection from "../../../../../stores/RTCConnectionStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { AGE_VERIFICATION_STAGE_CHANNEL_TYPES as closure_10 } from "../../../GuildScheduledEventsConstants.tsx";
import { GUILD_EVENT_INFO_ACTION_SHEET_KEY as closure_11 } from "../../GuildEventModalConstants.tsx";
import { Fonts } from "../../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

const require = fn;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: 19 };
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
createCacheKey[2] = {};
createCacheKey[3] = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[4] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_4 };
const obj5 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_SUBTLE, 14));
createCacheKey[6] = obj5;
const importDefaultResult1 = importDefaultResult;
createCacheKey[7] = { paddingTop: ThemesDefault.space.PX_8, flexDirection: "row" };
createCacheKey[8] = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[9] = { marginTop: 16 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  let creatorMember;
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = callback3();
  let obj = guildEvent(589);
  let items = [creatorMember];
  const React = obj.useStateFromStores(items, () => creatorMember.roleStyle);
  obj1 = guildEvent(589);
  const items1 = [closure_8];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let isConnectedResult = closure_1_8.isConnected();
    if (isConnectedResult) {
      isConnectedResult = closure_1_8.getChannelId() === guildEvent.channel_id;
    }
    return isConnectedResult;
  }, items2);
  let obj2 = guildEvent(8784);
  const result = obj2.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = React.useEffect(() => {
    const guildEventUserCounts = getGuildEventsForCurrentUserDefault.getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const guildEventsForCurrentUser = getGuildEventsForCurrentUserDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  let obj3 = guildEvent(589);
  const items4 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items4, () => null != closure_1_7.getGuild(guildEvent.guild_id));
  let obj4 = guildEvent(589);
  const items5 = [closure_9, closure_6];
  const items6 = [guildEvent];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items5, () => {
    if (null != guildEvent.creator_id) {
      let obj = { creator: null, creatorMember: null };
      obj[0] = closure_1_9.getUser(guildEvent.creator_id);
      obj[1] = closure_1_6.getMember(guildEvent.guild_id, guildEvent.creator_id);
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  const items7 = [tmp.eventContainer, ];
  obj = { paddingBottom: safeBottomPadding + 16 };
  items7[1] = obj;
  obj1 = { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId };
  const items8 = [callback(guildEvent(8800).GuildEventCardHeader, obj1), , , , , , , , , ];
  obj2 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = callback(guildEvent(8800).GuildEventCardTitle, obj2);
  obj3 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = callback(guildEvent(8800).GuildEventCardSimpleGuildInfo, obj3);
  items8[3] = callback(guildEvent(8800).GuildEventSimpleLocation, { event: guildEvent });
  obj4 = { style: tmp.interestedContainer, children: null };
  const items9 = [callback(guildEvent(10003).BellIcon, { size: "sm", style: tmp.interestedIcon }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = guildEvent(1236).intl;
  obj6[2] = intl.format(guildEvent(1236).t["+DLsD8"], { count: useGuildScheduledEventUserCountDefault(guildEvent.guild_id, guildEvent.id, recurrenceId) });
  items9[1] = callback(guildEvent(4734).Text, obj6);
  obj4[1] = items9;
  items8[4] = callback2(creator, obj4);
  let tmp11Result = null != creator && stateFromStores1;
  if (tmp11Result) {
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.interestedContainer;
    const obj8 = { user: null, guildId: null, size: null, style: null };
    obj8[0] = creator;
    obj8[1] = guildEvent.guild_id;
    obj8[2] = tmp2(1297).AvatarSizes.XSMALL_20;
    obj8[3] = tmp.interestedIcon;
    const items10 = [callback(tmp2(1297).Avatar, obj8), ];
    const obj9 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(1236).intl;
    const obj10 = { usernameHook: null };
    obj10[0] = function usernameHook() {
      let tmp4 = "dot" === closure_3;
      if (tmp4) {
        let colorString;
        if (creatorMember != null) {
          colorString = creatorMember.colorString;
        }
        tmp4 = null != colorString;
      }
      if (tmp4) {
        let obj = { size: "small", color: null, colors: null };
        ({ colorString: obj[1], colorStrings: obj[2] } = creatorMember);
        tmp4 = closure_1_12(guildEvent(dependencyMap[23]).RoleDot, obj);
      }
      const items = [tmp4, ];
      let tmp14;
      if (null != creatorMember) {
        if ("username" === closure_3) {
          if (null != creatorMember.colorString) {
            obj = { color: null };
            obj[0] = creatorMember.colorString;
            tmp14 = obj;
          }
        }
      }
      obj = { style: tmp14, children: null };
      let nick;
      if (creatorMember != null) {
        nick = creatorMember.nick;
      }
      if (nick == null) {
        nick = nameFromUserDefault.getName(creator);
      }
      obj1 = { children: null };
      obj[1] = nick;
      items[1] = closure_1_12(guildEvent(dependencyMap[23]).LegacyText, obj);
      obj1[0] = items;
      return closure_1_13(closure_1_14, obj1);
    };
    obj9[2] = intl2.format(tmp2(1236).t["66DLFs"], obj10);
    items10[1] = callback(tmp2(4734).Text, obj9);
    obj7[1] = items10;
    tmp11Result = callback2(tmp12, obj7);
  }
  items8[5] = tmp11Result;
  items8[6] = callback(guildEvent(8800).GuildEventCardDescription, { event: guildEvent, style: tmp.eventDescriptionContainer });
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj12 = { noBackground: true, divider: null, onConfirmPress: null, channelId: null, style: null };
    const items11 = [tmp2(8077).DividerPosition.TOP, tmp2(8077).DividerPosition.BOTTOM];
    obj12[1] = items11;
    obj12[2] = function onConfirmPress() {
      return callback(4342).hideAllActionSheets();
    };
    obj12[3] = guildEvent.channel_id;
    obj12[4] = tmp.ageVerificationContainer;
    hasItem = callback(StageChannelAgeVerificationNoticeContentDefault, obj12);
    const tmp7Result = StageChannelAgeVerificationNoticeContentDefault;
  }
  items8[7] = hasItem;
  const obj13 = { direction: "horizontal", style: tmp.controlsContainer, children: null };
  const items12 = [
    callback(guildEvent(8800).GuildEventCardPrimaryAction, {
      event: guildEvent,
      onCloseAction() {
        ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_1_11);
        if (callback != null) {
          callback();
        }
      },
      isConnected: stateFromStores,
      recurrenceId
    }),
  ,

  ];
  let tmp13Result = null;
  if (stateFromStores1) {
    const obj15 = { event: null };
    obj15[0] = guildEvent;
    tmp13Result = callback(tmp2(8800).GuildEventShareAction, obj15);
  }
  items12[1] = tmp13Result;
  items12[2] = callback(guildEvent(8800).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  obj13[2] = items12;
  items8[8] = callback2(guildEvent(6687).ButtonGroup, obj13);
  tmp13Result = null != result;
  if (tmp13Result) {
    const obj16 = { guildId: null, recurrenceRule: null, guildEventId: null, onRecurrencePress: null, activeRecurrenceId: null };
    obj16[0] = guildEvent.guild_id;
    obj16[1] = result;
    obj16[2] = guildEvent.id;
    obj16[3] = function onRecurrencePress(arg0) {
      return dependencyMap(arg0);
    };
    obj16[4] = recurrenceId;
    tmp13Result = callback(GuildEventRecurrencesDefault, obj16);
  }
  items8[9] = tmp13Result;
  obj[2] = items8;
  return callback2(creator, obj);
};
export const closeGuildEventInfoActionSheet = function closeGuildEventInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_11);
};