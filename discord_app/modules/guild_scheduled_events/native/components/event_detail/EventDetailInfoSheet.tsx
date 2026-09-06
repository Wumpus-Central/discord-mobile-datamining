// === Module 9795: EventDetailInfoSheet ===

// Module 9795 (EventDetailInfoSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 9780 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9781 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const View = fn(17).View;
fn(1963).AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
let closure_11 = fn(9699).GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { eventContainer: null, eventHeader: null, eventTitle: null, controlsContainer: null, eventTitleContainer: null, eventDescriptionContainer: null, guildTextStyle: null, interestedContainer: null, interestedIcon: null, ageVerificationContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.eventContainer = createStyles;
createStyles.eventHeader = { paddingTop: 19 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
createStyles.eventTitle = {};
createStyles.controlsContainer = { paddingTop: nativeDefault.space.PX_16 };
let obj1 = {};
let obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles.eventTitleContainer = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles.eventDescriptionContainer = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4 };
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
createStyles.guildTextStyle = {};
let obj4 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4 };
const obj5 = {};
createStyles.interestedContainer = { paddingTop: nativeDefault.space.PX_8, flexDirection: "row" };
let obj6 = { paddingTop: nativeDefault.space.PX_8, flexDirection: "row" };
createStyles.interestedIcon = { marginRight: nativeDefault.space.PX_8 };
createStyles.ageVerificationContainer = { marginTop: 16 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default function EventDetailInfoSheet(guildEvent) {
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  let creatorMember;
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = closure_15();
  let obj = guildEvent(504);
  let items = [creatorMember];
  noop = obj.useStateFromStores(items, () => creatorMember.roleStyle);
  let obj1 = guildEvent(504);
  const items1 = [RTCConnectionStore];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let isConnectedResult = RTCConnectionStore.isConnected();
    if (isConnectedResult) {
      isConnectedResult = RTCConnectionStore.getChannelId() === guildEvent.channel_id;
    }
    return isConnectedResult;
  }, items2);
  let obj2 = guildEvent(9704);
  const result = obj2.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = noop.useEffect(() => {
    const guildEventUserCounts = GuildScheduledEventManagerDefault.getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  let obj3 = guildEvent(504);
  const items4 = [GuildStore];
  const stateFromStores1 = obj3.useStateFromStores(items4, () => null != GuildStore.getGuild(guildEvent.guild_id));
  let obj4 = guildEvent(504);
  const items5 = [UserStore, GuildMemberStore];
  const items6 = [guildEvent];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items5, () => {
    if (null != guildEvent.creator_id) {
      let obj = { creator: UserStore.getUser(tmp.creator_id), creatorMember: GuildMemberStore.getMember(tmp.guild_id, tmp.creator_id) };
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  obj = { style: null, onLayout, children: null };
  const items7 = [tmp.eventContainer, ];
  obj = { paddingBottom: safeBottomPadding + 16 };
  items7[1] = obj;
  obj.style = items7;
  obj1 = { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId };
  const items8 = [closure_12(guildEvent(9772).GuildEventCardHeader, obj1), , , , , , , , , ];
  obj2 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = closure_12(guildEvent(9772).GuildEventCardTitle, obj2);
  obj3 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = closure_12(guildEvent(9772).GuildEventCardSimpleGuildInfo, obj3);
  items8[3] = closure_12(guildEvent(9772).GuildEventSimpleLocation, { event: guildEvent });
  obj4 = { style: tmp.interestedContainer, children: null };
  const items9 = [closure_12(guildEvent(9776).BellIcon, { size: "sm", style: tmp.interestedIcon }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = guildEvent(1114).intl;
  obj6.children = intl.format(guildEvent(1114).t["+DLsD8"], { count: useGuildScheduledEventUserCountDefault(guildEvent.guild_id, guildEvent.id, recurrenceId) });
  items9[1] = closure_12(guildEvent(4556).Text, obj6);
  obj4.children = items9;
  items8[4] = closure_13(creator, obj4);
  let tmp11Result = null != creator && stateFromStores1;
  if (tmp11Result) {
    const obj7 = { style: tmp.interestedContainer, children: null };
    const obj8 = { user: creator, guildId: guildEvent.guild_id, size: tmp2(1178).AvatarSizes.XSMALL_20, style: tmp.interestedIcon };
    const items10 = [tmp13(tmp2(1178).Avatar, obj8), ];
    const obj9 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(1114).intl;
    const obj10 = {
      usernameHook() {
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
            ({ colorString: obj.color, colorStrings: obj.colors } = creatorMember);
            tmp4 = closure_2_12(native.RoleDot, obj);
          }
          const items = [tmp4, ];
          let tmp14;
          if (null != creatorMember) {
            if ("username" === closure_3) {
              if (null != tmp13.colorString) {
                obj = { color: tmp13.colorString };
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
            nick = UserUtilsDefault.getName(creator);
          }
          const obj1 = { children: null };
          obj.children = nick;
          items[1] = closure_2_12(native.LegacyText, obj);
          obj1.children = items;
          return map1(closure_2_14, obj1);
        }
    };
    obj9.children = intl2.format(tmp2(1114).t["66DLFs"], obj10);
    items10[1] = tmp13(tmp2(4556).Text, obj9);
    obj7.children = items10;
    tmp11Result = tmp11(tmp12, obj7);
  }
  items8[5] = tmp11Result;
  items8[6] = closure_12(guildEvent(9772).GuildEventCardDescription, { event: guildEvent, style: tmp.eventDescriptionContainer });
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj12 = { noBackground: true, divider: null, onConfirmPress: null, channelId: null, style: null };
    const items11 = [tmp2(8410).DividerPosition.TOP, tmp2(8410).DividerPosition.BOTTOM];
    obj12.divider = items11;
    obj12.onConfirmPress = function onConfirmPress() {
      return ActionSheetActionCreatorsDefault.hideAllActionSheets();
    };
    obj12.channelId = guildEvent.channel_id;
    obj12.style = tmp.ageVerificationContainer;
    hasItem = tmp13(tmp7(8410), obj12);
    const tmp7Result = tmp7(8410);
  }
  items8[7] = hasItem;
  const obj13 = { direction: "horizontal", style: tmp.controlsContainer, children: null };
  const items12 = [
    closure_12(guildEvent(9772).GuildEventCardPrimaryAction, {
      event: guildEvent,
      onCloseAction() {
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_11);
        if (closure_1_1 != null) {
          closure_1_1();
        }
      },
      isConnected: stateFromStores,
      recurrenceId
    }),
  ,

  ];
  let tmp13Result = null;
  if (stateFromStores1) {
    const obj15 = { event: guildEvent };
    tmp13Result = tmp13(tmp2(9772).GuildEventShareAction, obj15);
  }
  items12[1] = tmp13Result;
  items12[2] = closure_12(guildEvent(9772).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  obj13.children = items12;
  items8[8] = closure_13(guildEvent(5433).ButtonGroup, obj13);
  tmp13Result = null != result;
  if (tmp13Result) {
    const obj16 = {
      guildId: guildEvent.guild_id,
      recurrenceRule: result,
      guildEventId: guildEvent.id,
      onRecurrencePress(arg0) {
          return dependencyMap(arg0);
        },
      activeRecurrenceId: recurrenceId
    };
    tmp13Result = tmp13(tmp7(9796), obj16);
  }
  items8[9] = tmp13Result;
  obj.children = items8;
  return closure_13(creator, obj);
};
export const closeGuildEventInfoActionSheet = function closeGuildEventInfoActionSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_11);
};