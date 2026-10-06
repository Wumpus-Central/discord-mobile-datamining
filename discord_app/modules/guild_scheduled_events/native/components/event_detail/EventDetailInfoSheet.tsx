// === Module 9320: EventDetailInfoSheet ===

// Module 9320 (EventDetailInfoSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 1188 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import StageChannelAgeVerificationNoticeDefault from "StageChannelAgeVerificationNotice" /* 8116 */;
import GuildEventModalConstants from "GuildEventModalConstants" /* 9210 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 9305 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9306 */;
import GuildEventRecurrencesDefault from "GuildEventRecurrences" /* 9321 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildEvent;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let react = react_mod;
const View = react_native.View;
const set = GuildScheduledEventsConstants.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
let closure_11 = GuildEventModalConstants.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
const Fonts = Constants.Fonts;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { eventContainer: obj2, eventHeader: { paddingTop: 19 }, eventTitle: obj3, controlsContainer: obj4, eventTitleContainer: obj5, eventDescriptionContainer: obj6, guildTextStyle: obj7, interestedContainer: obj8, interestedIcon: obj9, ageVerificationContainer: { marginTop: 16 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20));
obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj5 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj6 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4 };
obj7 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 14));
obj8 = { paddingTop: nativeDefault.space.PX_8, flexDirection: "row" };
obj9 = { marginRight: nativeDefault.space.PX_8 };
let closure_15 = createStyles(obj);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildEvent) => {
  let creatorMember;
  let items6;
  let obj4;
  let onCloseActionSheet;
  let onLayout;
  let onRecurrencePress;
  let recurrenceId;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = guildEvent(onRecurrencePress[16]);
  const cResult = obj.c(101);
  guildEvent = guildEvent.guildEvent;
  ({ onLayout, onCloseActionSheet } = guildEvent);
  ({ recurrenceId, onRecurrencePress } = guildEvent);
  const safeBottomPadding = guildEvent.safeBottomPadding;
  let tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [creatorMember];
    class C {
      constructor() {
        return creatorMember.roleStyle;
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = guildEvent(onRecurrencePress[17]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, C);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [RTCConnectionStore];
    class C {
      constructor() {
        return creatorMember.roleStyle;
      }
    }
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== guildEvent.channel_id) {
    class M {
      constructor() {
        const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
        return isConnectedResult;
      }
    }
    const items2 = [guildEvent.channel_id];
    class C {
      constructor() {
        return creatorMember.roleStyle;
      }
    }
    cResult[3] = guildEvent.channel_id;
    cResult[4] = M;
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    class M {
      constructor() {
        const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
        return isConnectedResult;
      }
    }
    tmp12 = cResult[5];
  }
  const tmpResult4 = guildEvent(onRecurrencePress[17]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, M, tmp12);
  if (cResult[6] !== guildEvent.recurrence_rule) {
    class M {
      constructor() {
        const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
        return isConnectedResult;
      }
    }
    const result = obj4.recurrenceRuleFromServer(guildEvent.recurrence_rule);
    class C {
      constructor() {
        return creatorMember.roleStyle;
      }
    }
    cResult[7] = result;
    let tmp14 = result;
  } else {
    class M {
      constructor() {
        const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
        return isConnectedResult;
      }
    }
  }
  if (cResult[8] === guildEvent.guild_id) {
    let tmp19;
    class M {
      constructor() {
        const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
        return isConnectedResult;
      }
    }
    const effect = stateFromStores.useEffect(O, items6);
    class C {
      constructor() {
        return creatorMember.roleStyle;
      }
    }
    onCloseActionSheet(onRecurrencePress[20])(guildEvent.guild_id, guildEvent.id, recurrenceId);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
          return isConnectedResult;
        }
      }
      const items3 = [GuildStore];
      class C {
        constructor() {
          return creatorMember.roleStyle;
        }
      }
      cResult[12] = items3;
      tmp19 = items3;
    } else {
      class M {
        constructor() {
          const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
          return isConnectedResult;
        }
      }
    }
    if (cResult[13] !== guildEvent.guild_id) {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
      cResult[13] = guildEvent.guild_id;
      class C {
        constructor() {
          return creatorMember.roleStyle;
        }
      }
      cResult[14] = U;
    } else {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
    }
    const tmpResult5 = guildEvent(onRecurrencePress[17]);
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp19, U);
    if (cResult[15] !== onCloseActionSheet) {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
      cResult[15] = onCloseActionSheet;
      class C {
        constructor() {
          return creatorMember.roleStyle;
        }
      }
      cResult[16] = tmp23;
    } else {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
    }
    const sum = safeBottomPadding + 16;
    if (cResult[17] !== sum) {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
      tmp26[0] = sum;
      class C {
        constructor() {
          return creatorMember.roleStyle;
        }
      }
      cResult[18] = tmp26;
    } else {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
      const items4 = [UserStore, ];
      class C {
        constructor() {
          return creatorMember.roleStyle;
        }
      }
      items4[1] = GuildMemberStore;
      cResult[19] = items4;
    } else {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
    }
    if (cResult[20] === guildEvent.creator_id) {
      class U {
        constructor() {
          return null != GuildStore.getGuild(guildEvent.guild_id);
        }
      }
      if (cResult[23] !== guildEvent) {
        class U {
          constructor() {
            return null != GuildStore.getGuild(guildEvent.guild_id);
          }
        }
        tmp30[0] = guildEvent;
        class C {
          constructor() {
            return creatorMember.roleStyle;
          }
        }
        cResult[24] = tmp30;
      } else {
        class U {
          constructor() {
            return null != GuildStore.getGuild(guildEvent.guild_id);
          }
        }
      }
      guildEvent(onRecurrencePress[17]);
      class C {
        constructor() {
          return creatorMember.roleStyle;
        }
      }
      const creator = tmp32.creator;
      creatorMember = tmp32.creatorMember;
      if (cResult[25] === tmp26) {
        class U {
          constructor() {
            return null != GuildStore.getGuild(guildEvent.guild_id);
          }
        }
        if (cResult[28] === guildEvent) {
          class U {
            constructor() {
              return null != GuildStore.getGuild(guildEvent.guild_id);
            }
          }
        }
        class C {
          constructor() {
            return creatorMember.roleStyle;
          }
        }
        tmp38[0] = guildEvent;
        tmp38[1] = tmp4.eventHeader;
        tmp38[5] = recurrenceId;
        cResult[28] = guildEvent;
        cResult[29] = recurrenceId;
        cResult[30] = tmp4.eventHeader;
        cResult[31] = closure_12(guildEvent(onRecurrencePress[21]).GuildEventCardHeader, tmp38);
        const tmp39 = closure_12(guildEvent(onRecurrencePress[21]).GuildEventCardHeader, tmp38);
      }
      const items5 = [tmp4.eventContainer, tmp26];
      cResult[25] = tmp26;
      cResult[26] = tmp4.eventContainer;
      cResult[27] = items5;
    }
    const fn = function q() {
      let obj;
      if (null != guildEvent.creator_id) {
        obj = { creator: UserStore.getUser(guildEvent.creator_id), creatorMember: GuildMemberStore.getMember(guildEvent.guild_id, guildEvent.creator_id) };
        const obj2 = { creator: UserStore.getUser(guildEvent.creator_id), creatorMember: GuildMemberStore.getMember(guildEvent.guild_id, guildEvent.creator_id) };
      } else {
        obj = { creator: null, creatorMember: null };
      }
      return obj;
    };
    cResult[20] = guildEvent.creator_id;
    cResult[21] = guildEvent.guild_id;
    cResult[22] = fn;
  }
  class O {
    constructor() {
      const obj = GuildScheduledEventManagerDefault;
      const guildEventUserCounts = obj.getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
      const obj2 = GuildScheduledEventManagerDefault;
      const guildEventsForCurrentUser = obj2.getGuildEventsForCurrentUser(guildEvent.guild_id);
    }
  }
  items6 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  cResult[8] = guildEvent.guild_id;
  cResult[9] = guildEvent.id;
  cResult[10] = O;
  cResult[11] = items6;
}) : ((guildEvent) => {
  let closure_3;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items12;
  let items7;
  let items8;
  let items9;
  let obj17;
  let onLayout;
  let recurrenceId;
  let safeBottomPadding;
  guildEvent = guildEvent.guildEvent;
  ({ onCloseActionSheet: importDefault, recurrenceId, onRecurrencePress: dependencyMap } = guildEvent);
  let creatorMember;
  ({ safeBottomPadding, onLayout } = guildEvent);
  const tmp = closure_15();
  let obj = guildEvent(504);
  let items = [creatorMember];
  react = obj.useStateFromStores(items, () => creatorMember.roleStyle);
  let obj2 = guildEvent(504);
  const items1 = [RTCConnectionStore];
  const items2 = [guildEvent.channel_id];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const isConnectedResult = RTCConnectionStore.isConnected() && RTCConnectionStore.getChannelId() === guildEvent.channel_id;
    return isConnectedResult;
  }, items2);
  let obj3 = guildEvent(9214);
  const result = obj3.recurrenceRuleFromServer(guildEvent.recurrence_rule);
  const items3 = [, ];
  ({ guild_id: arr4[0], id: arr4[1] } = guildEvent);
  const effect = react.useEffect(() => {
    const obj = GuildScheduledEventManagerDefault;
    const guildEventUserCounts = obj.getGuildEventUserCounts(guildEvent.guild_id, guildEvent.id, []);
    const obj2 = GuildScheduledEventManagerDefault;
    const guildEventsForCurrentUser = obj2.getGuildEventsForCurrentUser(guildEvent.guild_id);
  }, items3);
  const tmp8 = useGuildScheduledEventUserCountDefault(guildEvent.guild_id, guildEvent.id, recurrenceId);
  let obj4 = guildEvent(504);
  const items4 = [GuildStore];
  const stateFromStores1 = obj4.useStateFromStores(items4, () => null != GuildStore.getGuild(guildEvent.guild_id));
  let obj5 = guildEvent(504);
  const items5 = [UserStore, GuildMemberStore];
  const items6 = [guildEvent];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items5, () => {
    let obj;
    if (null != guildEvent.creator_id) {
      obj = { creator: UserStore.getUser(guildEvent.creator_id), creatorMember: GuildMemberStore.getMember(guildEvent.guild_id, guildEvent.creator_id) };
      const obj2 = { creator: UserStore.getUser(guildEvent.creator_id), creatorMember: GuildMemberStore.getMember(guildEvent.guild_id, guildEvent.creator_id) };
    } else {
      obj = { creator: null, creatorMember: null };
    }
    return obj;
  }, items6);
  const creator = stateFromStoresObject.creator;
  creatorMember = stateFromStoresObject.creatorMember;
  const obj6 = { style: items7, onLayout, children: items8 };
  items7 = [tmp.eventContainer, ];
  const obj7 = { paddingBottom: safeBottomPadding + 16 };
  items7[1] = obj7;
  items8 = [, , , , , , , , , ];
  const obj8 = { event: guildEvent, style: tmp.eventHeader, showUserCount: false, showEndDate: true, showCreator: false, recurrenceId };
  items8[0] = closure_12(guildEvent(9296).GuildEventCardHeader, obj8);
  const obj9 = { event: guildEvent, textStyle: tmp.eventTitle, style: tmp.eventTitleContainer };
  items8[1] = closure_12(guildEvent(9296).GuildEventCardTitle, obj9);
  const obj10 = { event: guildEvent, textStyle: tmp.guildTextStyle };
  items8[2] = closure_12(guildEvent(9296).GuildEventCardSimpleGuildInfo, obj10);
  items8[3] = closure_12(guildEvent(9296).GuildEventSimpleLocation, { event: guildEvent });
  const obj11 = { style: tmp.interestedContainer, children: items9 };
  items9 = [, ];
  const obj12 = { size: "sm", style: tmp.interestedIcon };
  items9[0] = closure_12(guildEvent(9301).BellIcon, obj12);
  const obj13 = { variant: "text-sm/medium", color: "text-default", children: intl.format(guildEvent(1126).t["+DLsD8"], { count: tmp8 }) };
  const Text = guildEvent(4892).Text;
  intl = guildEvent(1126).intl;
  items9[1] = closure_12(Text, obj13);
  items8[4] = closure_13(creator, obj11);
  let tmp11Result = null != creator && stateFromStores1;
  if (tmp11Result) {
    const obj14 = { style: tmp.interestedContainer, children: items10 };
    const obj15 = { user: creator, guildId: guildEvent.guild_id, size: guildEvent(1188).AvatarSizes.XSMALL_20, style: tmp.interestedIcon };
    const Avatar = tmp2(1188).Avatar;
    items10 = [closure_12(Avatar, obj15), ];
    const obj16 = { variant: "text-sm/medium", color: "text-default", children: intl2.format(guildEvent(1126).t["66DLFs"], obj17) };
    const Text2 = tmp2(4892).Text;
    intl2 = tmp2(1126).intl;
    obj17 = {
      usernameHook() {
          let nick;
          let tmp4 = "dot" === closure_3;
          if (tmp4) {
            let colorString;
            if (creatorMember != null) {
              colorString = creatorMember.colorString;
            }
            tmp4 = null != colorString;
          }
          if (tmp4) {
            const obj = { size: "small", color: null, colors: null };
            ({ colorString: obj.color, colorStrings: obj.colors } = creatorMember);
            tmp4 = closure_12(native.RoleDot, obj);
          }
          const items = [tmp4, ];
          let tmp14;
          const LegacyText = native.LegacyText;
          if (null != creatorMember) {
            if ("username" === closure_3) {
              if (null != creatorMember.colorString) {
                tmp14 = { color: creatorMember.colorString };
                const obj2 = { color: creatorMember.colorString };
              }
            }
          }
          const obj3 = { style: tmp14, children: nick };
          nick = undefined;
          if (creatorMember != null) {
            nick = creatorMember.nick;
          }
          if (nick == null) {
            const obj4 = UserUtilsDefault;
            nick = obj4.getName(creator);
          }
          const obj5 = { children: items };
          items[1] = closure_12(LegacyText, obj3);
          return map1(authStore2, obj5);
        }
    };
    items10[1] = closure_12(Text2, obj16);
    tmp11Result = closure_13(tmp12, obj14);
  }
  items8[5] = tmp11Result;
  const obj18 = { event: guildEvent, style: tmp.eventDescriptionContainer };
  items8[6] = closure_12(guildEvent(9296).GuildEventCardDescription, obj18);
  let hasItem = set.has(guildEvent.entity_type);
  if (hasItem) {
    const obj19 = {
      noBackground: true,
      divider: items11,
      onConfirmPress() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideAllActionSheets();
        },
      channelId: guildEvent.channel_id,
      style: tmp.ageVerificationContainer
    };
    items11 = [, ];
    const tmp7Result = StageChannelAgeVerificationNoticeDefault;
    items11[0] = guildEvent(8116).DividerPosition.TOP;
    items11[1] = guildEvent(8116).DividerPosition.BOTTOM;
    hasItem = closure_12(tmp7Result, obj19);
  }
  items8[7] = hasItem;
  const obj20 = { direction: "horizontal", style: tmp.controlsContainer, children: items12 };
  const ButtonGroup = tmp2(5599).ButtonGroup;
  items12 = [, , ];
  const obj21 = {
    event: guildEvent,
    onCloseAction() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_11);
      if (importDefault != null) {
        importDefault();
      }
    },
    isConnected: stateFromStores,
    recurrenceId
  };
  items12[0] = closure_12(guildEvent(9296).GuildEventCardPrimaryAction, obj21);
  let tmp13Result = null;
  if (stateFromStores1) {
    const obj22 = { event: guildEvent };
    tmp13Result = closure_12(tmp2(9296).GuildEventShareAction, obj22);
  }
  items12[1] = tmp13Result;
  items12[2] = closure_12(guildEvent(9296).GuildEventModeratorAction, { event: guildEvent, recurrenceId });
  items8[8] = closure_13(ButtonGroup, obj20);
  let tmp13Result2 = null != result;
  if (tmp13Result2) {
    const obj23 = {
      guildId: guildEvent.guild_id,
      recurrenceRule: result,
      guildEventId: guildEvent.id,
      onRecurrencePress(arg0) {
          return dependencyMap(arg0);
        },
      activeRecurrenceId: recurrenceId
    };
    tmp13Result2 = closure_12(GuildEventRecurrencesDefault, obj23);
  }
  items8[9] = tmp13Result2;
  return closure_13(creator, obj6);
});
function closeGuildEventInfoActionSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(closure_11);
}
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx");

export default tmp8;
export { closeGuildEventInfoActionSheet };