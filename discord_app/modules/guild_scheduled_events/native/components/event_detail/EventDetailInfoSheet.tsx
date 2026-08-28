// discord_app/modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useGuildScheduledEventUserCountDefault from "../../../useGuildScheduledEventUserCount.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../../../stores/GuildMemberStore.tsx";
import closure_7 from "../../../../../stores/GuildStore.tsx";
import closure_8 from "../../../../../stores/RTCConnectionStore.tsx";
import closure_9 from "../../../../../stores/UserStore.tsx";
import { AGE_VERIFICATION_STAGE_CHANNEL_TYPES as closure_10 } from "../../../GuildScheduledEventsConstants.tsx";
import { GUILD_EVENT_INFO_ACTION_SHEET_KEY as closure_11 } from "../../GuildEventModalConstants.tsx";
import { Fonts } from "../../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

const require = arg1;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { eventContainer: null, eventHeader: null, eventTitle: null, controlsContainer: null, eventTitleContainer: null, eventDescriptionContainer: null, guildTextStyle: null, interestedContainer: null, interestedIcon: null, ageVerificationContainer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: 19 };
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
createCacheKey[2] = {};
let obj1 = {};
createCacheKey[3] = { paddingTop: ThemesDefault.space.PX_16 };
let obj2 = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[4] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
let obj3 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_4 };
let obj4 = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_4 };
const obj5 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_SUBTLE, 14));
createCacheKey[6] = obj5;
const importDefaultResult1 = importDefaultResult;
createCacheKey[7] = { paddingTop: ThemesDefault.space.PX_8, flexDirection: "row" };
let obj6 = { paddingTop: ThemesDefault.space.PX_8, flexDirection: "row" };
createCacheKey[8] = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[9] = { marginTop: 16 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj7 = { marginRight: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  let React;
  let creator;
  let creatorMember;
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = callback3();
  let obj = guildEvent(589);
  let items = [creatorMember];
  React = obj.useStateFromStores(items, () => creatorMember.roleStyle);
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
  let obj2 = guildEvent(9613);
  const result = obj2.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = React.useEffect(() => {
    const guildEventUserCounts = closure_1_1(closure_1_2[17]).getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const obj = closure_1_1(closure_1_2[17]);
    const guildEventsForCurrentUser = closure_1_1(closure_1_2[17]).getGuildEventsForCurrentUser(guildEvent.guild_id);
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
      obj[0] = closure_1_9.getUser(tmp.creator_id);
      obj[1] = closure_1_6.getMember(tmp.guild_id, tmp.creator_id);
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  obj = { style: items7, onLayout, children: null };
  items7 = [tmp.eventContainer, ];
  obj = { paddingBottom: safeBottomPadding + 16 };
  items7[1] = obj;
  obj1 = { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId };
  const items8 = [callback(guildEvent(9680).GuildEventCardHeader, obj1), , , , , , , , , ];
  obj2 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = callback(guildEvent(9680).GuildEventCardTitle, obj2);
  obj3 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = callback(guildEvent(9680).GuildEventCardSimpleGuildInfo, obj3);
  items8[3] = callback(guildEvent(9680).GuildEventSimpleLocation, { event: guildEvent });
  obj4 = { style: tmp.interestedContainer, children: null };
  const items9 = [callback(guildEvent(9685).BellIcon, { size: "sm", style: tmp.interestedIcon }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = guildEvent(1236).intl;
  obj6[2] = intl.format(guildEvent(1236).t["+DLsD8"], { count: useGuildScheduledEventUserCountDefault(guildEvent.guild_id, guildEvent.id, recurrenceId) });
  items9[1] = callback(guildEvent(4442).Text, obj6);
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
    const items10 = [tmp13(tmp2(1297).Avatar, obj8), ];
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
        tmp4 = closure_1_12(guildEvent(closure_1_2[23]).RoleDot, obj);
      }
      const items = [tmp4, ];
      let tmp14;
      if (null != creatorMember) {
        if ("username" === closure_3) {
          if (null != tmp13.colorString) {
            obj = { color: null };
            obj[0] = tmp13.colorString;
            tmp14 = obj;
          }
        }
      }
      obj = { style: tmp14, children: null };
      let nick;
      if (creatorMember != null) {
        nick = tmp13.nick;
      }
      if (nick == null) {
        nick = closure_1_1(closure_1_2[24]).getName(creator);
        const obj4 = closure_1_1(closure_1_2[24]);
      }
      obj1 = { children: null };
      obj[1] = nick;
      items[1] = closure_1_12(guildEvent(closure_1_2[23]).LegacyText, obj);
      obj1[0] = items;
      return closure_1_13(closure_1_14, obj1);
    };
    obj9[2] = intl2.format(tmp2(1236).t["66DLFs"], obj10);
    items10[1] = tmp13(tmp2(4442).Text, obj9);
    obj7[1] = items10;
    tmp11Result = tmp11(tmp12, obj7);
  }
  items8[5] = tmp11Result;
  items8[6] = callback(guildEvent(9680).GuildEventCardDescription, { event: guildEvent, style: tmp.eventDescriptionContainer });
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj12 = { noBackground: true, divider: null, onConfirmPress: null, channelId: null, style: null };
    const items11 = [tmp2(8627).DividerPosition.TOP, tmp2(8627).DividerPosition.BOTTOM];
    obj12[1] = items11;
    obj12[2] = function onConfirmPress() {
      return callback(4413).hideAllActionSheets();
    };
    obj12[3] = guildEvent.channel_id;
    obj12[4] = tmp.ageVerificationContainer;
    hasItem = tmp13(tmp7(8627), obj12);
    const tmp7Result = tmp7(8627);
  }
  items8[7] = hasItem;
  const obj13 = { direction: "horizontal", style: tmp.controlsContainer, children: null };
  const items12 = [
    callback(guildEvent(9680).GuildEventCardPrimaryAction, {
      event: guildEvent,
      onCloseAction() {
        closure_1_1(closure_1_2[14]).hideActionSheet(closure_1_11);
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
    tmp13Result = tmp13(tmp2(9680).GuildEventShareAction, obj15);
  }
  items12[1] = tmp13Result;
  items12[2] = callback(guildEvent(9680).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  obj13[2] = items12;
  items8[8] = callback2(guildEvent(5341).ButtonGroup, obj13);
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
    tmp13Result = tmp13(tmp7(9704), obj16);
  }
  items8[9] = tmp13Result;
  obj[2] = items8;
  return callback2(creator, obj);
};
export const closeGuildEventInfoActionSheet = function closeGuildEventInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_11);
};