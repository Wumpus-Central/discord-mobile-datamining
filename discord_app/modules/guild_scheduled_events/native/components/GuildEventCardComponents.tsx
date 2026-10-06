// === Module 9296: GuildEventCardComponents ===

// Module 9296 (GuildEventCardComponents)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl12 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4583 */;
import Text_Text from "Text/Text" /* 4892 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5103 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import AlertDefault from "Alert" /* 5790 */;
import GroupIcon from "GroupIcon" /* 5880 */;
import GuildIconDefault from "GuildIcon" /* 5978 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import ScheduleUtils from "ScheduleUtils" /* 9198 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9209 */;
import guildEventDetailsParser from "guildEventDetailsParser" /* 9294 */;
import useCanInviteForGuildEventDefault from "useCanInviteForGuildEvent" /* 9297 */;
import BellIcon2 from "BellIcon" /* 9301 */;
import ThrottledButtonDefault from "ThrottledButton" /* 9302 */;
import getGuildEventImageDefault from "getGuildEventImage" /* 9304 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 9305 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 7050 */;
import Constants_mod from "Constants" /* 1085 */;
import Constants_mod2 from "Constants" /* 1096 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, dependencyMap, importDefault;

let Fonts;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
class GuildEventJoinAndRSVPAction {
  constructor(event) {
    let c1;
    let c2;
    let intl;
    let intl2;
    event = event.event;
    importDefault = undefined;
    dependencyMap = undefined;
    let obj = function _handleJoinGuild() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        let closure_1;
        let obj4;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                guild_id = tmp4;
                closure_2_3(true);
                c3 = 2;
                const obj6 = { source: constants.DIRECTORY_EVENTS };
                c4 = 3;
                c5 = 1;
                const obj7 = { value: obj4.joinGuild(guild_id.guild_id, obj6), done: false };
                obj4 = tmp(closure_2[35]);
                return obj7;
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_129_3(false);
              throw closure_2;
            } else {
              if (2 === c4) {
                c3 = 1;
                guild_id = closure_2;
                const obj3 = guild_id(closure_2[37]);
                const result = obj3.ignoreJoinGuildRefused(guild_id);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_3(false);
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                obj = guild_id(closure_2[36]);
                obj.transitionToGuild(closure_129_0.guild_id);
                const tmp10 = closure_129_1 || closure_1_16(closure_129_0);
                if (!tmp10) {
                  closure_129_2();
                }
                c3 = 1;
              }
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp42) {
            closure_2 = tmp42;
            if (0 === c3) {
              c5 = 3;
              throw tmp42;
            } else if (1 === tmp44) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = obj(closure_26(event, event.recurrenceId), 2);
    [c1, c2] = tmp;
    const tmp2 = obj(react.useState(false), 2);
    let closure_3 = tmp2[1];
    obj = {
      loading: tmp2[0],
      variant: "active",
      text: intl.string(event(1126).t.VJlc0S),
      accessibilityLabel: "" + intl2.string(event(1126).t.VJlc0S) + ", " + event.name,
      onPress: function handleJoinGuild() {
        return obj(...arguments);
      },
      grow: true
    };
    const tmp3 = ThrottledButtonDefault;
    intl = event(1126).intl;
    intl2 = event(1126).intl;
    return closure_22(tmp3, obj);
  }
}
({ View: metroRequire, Image: metroImportDefault, Pressable: metroImportAll } = react_native);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
let Constants = Constants_mod2;
({ Permissions: closure_19, JoinGuildSources: closure_20 } = Constants);
Constants = Constants_mod2;
({ Fonts, NOOP: closure_21 } = Constants);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let createStyles = createStyles_mod;
let obj = { imageHeaderContainer: obj2, imageHeaderBanner: { width: "100%", aspectRatio: 2.5 }, headerContainer: { flexDirection: "row", alignItems: "center" }, dateContainer: { flexDirection: "row", alignItems: "center", flex: 1 }, dateIcon: obj3, newBadge: obj4, topicContainer: obj5, detailsContainer: obj6, channelContainer: obj7, channelIcon: obj8, channelText: obj9, guildInfoContainer: obj10, guildIcon: obj11, guildInfo: { flexDirection: "column" }, guildInfoChannelContainer: { flexDirection: "row", alignItems: "center" }, guildInfoChannelText: obj12, creatorAvatar: obj13 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { marginRight: nativeDefault.space.PX_8 };
obj4 = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { paddingTop: nativeDefault.space.PX_8 };
obj6 = { paddingTop: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj8 = { marginRight: nativeDefault.space.PX_8 };
obj9 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
obj10 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj11 = { marginRight: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj12 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj13 = { marginRight: nativeDefault.space.PX_8 };
const styles = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let closure_1;
  let closure_2;
  const obj = event(576);
  const cResult = obj.c(12);
  event = event.event;
  const tmp5 = useCanInviteForGuildEventDefault(event);
  const tmp4 = importDefault;
  importDefault = tmp5;
  if (cResult[0] === event.guild_id) {
    let tmp6;
    if (cResult[1] === event.id) {
      tmp6 = cResult[2];
    }
    dependencyMap = tmp6;
    if (cResult[3] === tmp5) {
      if (cResult[4] === event) {
        let tmp8;
        let tmp10;
        if (cResult[5] === tmp6) {
          tmp8 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(event(1126).t.RDE0Sc);
          cResult[7] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[7];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp10 + ", " + event.name;
        const tmp4Result = tmp4(tmp5 ? 9300 : 4846);
        if (cResult[8] === tmp8) {
          if (cResult[9] === combined) {
            let tmp14;
            if (cResult[10] === tmp4Result) {
              tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
        let obj2 = { accessibilityLabel: combined, onPress: tmp8, icon: tmp4Result, variant: "secondary" };
        const tmp16 = closure_22(event(7586).IconButton, obj2);
        cResult[8] = tmp8;
        cResult[9] = combined;
        cResult[10] = tmp4Result;
        cResult[11] = tmp16;
        tmp14 = tmp16;
      }
    }
    const fn = function s() {
      if (closure_1) {
        const tmpResult = GuildScheduledEventModalActionCreators;
        tmpResult.openShareEvent(event);
      } else {
        const tmpResult2 = ClipboardUtils;
        tmpResult2.copy(closure_2);
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    };
    cResult[3] = tmp5;
    cResult[4] = event;
    cResult[5] = tmp6;
    cResult[6] = fn;
    tmp8 = fn;
  }
  let tmpResult = tmp(9299);
  const obj3 = { guildId: event.guild_id, guildEventId: event.id };
  const result = tmpResult.SHARE_EVENT_DETAILS_LINK(obj3);
  cResult[0] = event.guild_id;
  cResult[1] = event.id;
  cResult[2] = result;
  tmp6 = result;
}) : ((event) => {
  let closure_1;
  let closure_2;
  let intl;
  event = event.event;
  importDefault = undefined;
  const tmp3 = useCanInviteForGuildEventDefault(event);
  const tmp = importDefault;
  importDefault = tmp3;
  let obj2 = { guildId: event.guild_id, guildEventId: event.id };
  const obj = event(9299);
  dependencyMap = obj.SHARE_EVENT_DETAILS_LINK(obj2);
  const obj3 = {
    accessibilityLabel: "" + intl.string(event(1126).t.RDE0Sc) + ", " + event.name,
    onPress() {
      if (closure_1) {
        const tmpResult = GuildScheduledEventModalActionCreators;
        tmpResult.openShareEvent(event);
      } else {
        const tmpResult2 = ClipboardUtils;
        tmpResult2.copy(closure_2);
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    },
    icon: tmp(tmp3 ? 9300 : 4846),
    variant: "secondary"
  };
  const IconButton = event(7586).IconButton;
  intl = event(1126).intl;
  return closure_22(IconButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let channel_id;
  let first;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  let obj = event(channel_id[18]);
  const cResult = obj.c(18);
  event = event.event;
  const recurrenceId = event.recurrenceId;
  channel_id = event.channel_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== event.guild_id) {
    const fn = function l() {
      return GuildStore.getGuild(event.guild_id);
    };
    cResult[1] = event.guild_id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = event(channel_id[28]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== channel_id) {
    const fn2 = function y() {
      return ChannelStore.getChannel(channel_id);
    };
    const items2 = [channel_id];
    cResult[4] = channel_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  const tmpResult3 = event(channel_id[28]);
  let stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10, tmp11);
  const useManageResourcePermissions = event(channel_id[29]).useManageResourcePermissions;
  event(channel_id[29]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEvent = useManageResourcePermissions(stateFromStores1).canManageGuildEvent;
  if (cResult[7] === canManageGuildEvent) {
    let tmp14;
    let tmp16;
    if (cResult[8] === event) {
      tmp14 = cResult[9];
    }
    let closure_3 = tmp14;
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[24]).intl;
      const stringResult = intl.string(event(channel_id[24]).t.HIgA5a);
      cResult[10] = stringResult;
      tmp16 = stringResult;
    } else {
      tmp16 = cResult[10];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp16 + ", " + event.name;
    if (cResult[11] === tmp14) {
      if (cResult[12] === event) {
        let tmp19;
        if (cResult[13] === recurrenceId) {
          tmp19 = cResult[14];
        }
        if (cResult[15] === combined) {
          let tmp20;
          if (cResult[16] === tmp19) {
            tmp20 = cResult[17];
          }
          return tmp20;
        }
        const obj2 = { accessibilityLabel: combined, onPress: tmp19, icon: recurrenceId(channel_id[30]), variant: "secondary" };
        const IconButton = tmp(tmp2[27]).IconButton;
        const tmp23 = closure_22(IconButton, obj2);
        cResult[15] = combined;
        cResult[16] = tmp19;
        cResult[17] = tmp23;
        tmp20 = tmp23;
      }
    }
    const fn3 = function p() {
      const obj = GuildScheduledEventModalActionCreators;
      return obj.showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
    };
    cResult[11] = tmp14;
    cResult[12] = event;
    cResult[13] = recurrenceId;
    cResult[14] = fn3;
    tmp19 = fn3;
  }
  const canManageGuildEventResult = canManageGuildEvent(event);
  cResult[7] = canManageGuildEvent;
  cResult[8] = event;
  cResult[9] = canManageGuildEventResult;
  tmp14 = canManageGuildEventResult;
}) : ((event) => {
  let intl;
  event = event.event;
  const recurrenceId = event.recurrenceId;
  let closure_3;
  const channel_id = event.channel_id;
  let obj = event(channel_id[28]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  const items1 = [ChannelStore];
  const items2 = [channel_id];
  const obj2 = event(channel_id[28]);
  let stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel_id), items2);
  const useManageResourcePermissions = event(channel_id[29]).useManageResourcePermissions;
  event(channel_id[29]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const obj3 = {
    accessibilityLabel: "" + intl.string(event(channel_id[24]).t.HIgA5a) + ", " + event.name,
    onPress() {
      const obj = GuildScheduledEventModalActionCreators;
      return obj.showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
    },
    icon: recurrenceId(channel_id[30]),
    variant: "secondary"
  };
  const IconButton = tmp(tmp2[27]).IconButton;
  intl = tmp(tmp2[24]).intl;
  return closure_22(IconButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let first;
  let user;
  _require = id;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id.id) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] === id.guild_id) {
      if (cResult[6] === id.id) {
        let tmp9;
        if (cResult[7] === arg1) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          let tmp10;
          if (cResult[10] === stateFromStores) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
        const items1 = [stateFromStores, tmp9];
        cResult[9] = tmp9;
        cResult[10] = stateFromStores;
        cResult[11] = items1;
        tmp10 = items1;
      }
    }
    const fn2 = function u() {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.handleGuildScheduledEventRsvp(user.id, closure_1, user.guild_id);
    };
    cResult[5] = id.guild_id;
    cResult[6] = id.id;
    cResult[7] = arg1;
    cResult[8] = fn2;
    tmp9 = fn2;
  }
  const fn = function o() {
    return GuildScheduledEventStore.isInterestedInEventRecurrence(user.id, closure_1);
  };
  const items2 = [id.id, arg1];
  cResult[1] = id.id;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : ((id, arg1) => {
  let user;
  _require = id;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [GuildScheduledEventStore];
  const items1 = [id.id, arg1];
  const items2 = [
    obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(user.id, closure_1), items1),
    () => {
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.handleGuildScheduledEventRsvp(user.id, closure_1, user.guild_id);
    }
  ];
  return items2;
});
let closure_26 = tmp12;
ReactCompilerGating = ReactCompilerGating_mod;
let obj14 = { RSVP: 0, [0]: "RSVP", JOIN: 1, [1]: "JOIN", START: 2, [2]: "START", STARTED: 3, [3]: "STARTED", CONNECTED: 4, [4]: "CONNECTED", END: 5, [5]: "END", ENDED: 6, [6]: "ENDED", JOIN_GUILD: 7, [7]: "JOIN_GUILD" };
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let BellIcon;
  let tmp11;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(12);
  event = event.event;
  [tmp5, tmp6] = closure_26(event, null);
  let str = "secondary";
  _slicedToArray(closure_26(event, null), 2);
  if (tmp5) {
    str = "tertiary";
  }
  if (tmp5) {
    BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
  } else {
    BellIcon = BellIcon2.BellIcon;
  }
  if (cResult[0] !== tmp5) {
    const obj2 = { checked: tmp5 };
    cResult[0] = tmp5;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl12.intl;
    const stringResult = intl.string(intl12.t.DlcqlU);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  const combined = "" + tmp8 + ", " + event.name;
  if (cResult[3] !== BellIcon) {
    const tmp13 = afk(BellIcon, { size: "sm" });
    cResult[3] = BellIcon;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl12.intl;
    const stringResult1 = intl2.string(intl12.t.DlcqlU);
    cResult[5] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === str) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === combined) {
          let tmp16;
          if (cResult[10] === tmp11) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
    }
  }
  const tmp17 = afk(ThrottledButtonDefault, { accessibilityRole: "togglebutton", accessibilityState: tmp7, accessibilityLabel: combined, variant: str, icon: tmp11, text: tmp14, onPress: tmp6, grow: true });
  cResult[6] = tmp6;
  cResult[7] = str;
  cResult[8] = tmp7;
  cResult[9] = combined;
  cResult[10] = tmp11;
  cResult[11] = tmp17;
  tmp16 = tmp17;
}) : ((event) => {
  let BellIcon;
  let first;
  let intl;
  let intl2;
  let tmp3;
  let tmp6;
  event = event.event;
  [first, tmp3] = closure_26(event, null);
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
    tmp6 = require;
  } else {
    BellIcon = BellIcon2.BellIcon;
    tmp6 = require;
  }
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: "" + intl.string(tmp6(1126).t.DlcqlU) + ", " + event.name, variant: str, icon: afk(BellIcon, { size: "sm" }), text: intl2.string(tmp6(1126).t.DlcqlU), onPress: tmp3, grow: true };
  const tmp8 = ThrottledButtonDefault;
  intl = tmp6(1126).intl;
  intl2 = tmp6(1126).intl;
  return afk(tmp8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  let JOIN_GUILD;
  let channel_id;
  let entity_type;
  let first;
  let scheduled_start_time;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp6;
  let tmp8;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(10);
  guild_id = guild_id.guild_id;
  channel_id = guild_id.channel_id;
  ({ scheduled_start_time, entity_type } = guild_id);
  const obj2 = require("ScheduleUtils");
  const withinStartWindow = obj2.getEventTimeData(scheduled_start_time).withinStartWindow;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function o() {
      return GuildStore.getGuild(guild_id);
    };
    cResult[1] = guild_id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== channel_id) {
    const fn2 = function b() {
      return ChannelStore.getChannel(channel_id);
    };
    const items2 = [channel_id];
    cResult[4] = channel_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  const tmpResult4 = require("get initialized");
  let stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10, tmp11);
  const useManageResourcePermissions = require("useManageResourcePermissions").useManageResourcePermissions;
  require("useManageResourcePermissions");
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEventResult = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(guild_id);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildStore];
    cResult[7] = items3;
    tmp15 = items3;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== guild_id.guild_id) {
    class G {
      constructor() {
        return null != GuildStore.getGuild(guild_id.guild_id);
      }
    }
    cResult[8] = guild_id.guild_id;
    cResult[9] = G;
  } else {
    class G {
      constructor() {
        return null != GuildStore.getGuild(guild_id.guild_id);
      }
    }
  }
  const tmpResult6 = require("get initialized");
  if (tmpResult6.useStateFromStores(tmp15, G)) {
    let RSVP;
    class G {
      constructor() {
        return null != GuildStore.getGuild(guild_id.guild_id);
      }
    }
    if (closure_15(guild_id)) {
      class G {
        constructor() {
          return null != GuildStore.getGuild(guild_id.guild_id);
        }
      }
      RSVP = obj14.ENDED;
    } else {
      class G {
        constructor() {
          return null != GuildStore.getGuild(guild_id.guild_id);
        }
      }
      if (closure_16(guild_id)) {
        let tmp20;
        class G {
          constructor() {
            return null != GuildStore.getGuild(guild_id.guild_id);
          }
        }
        if (entity_type === constants.EXTERNAL) {
          class G {
            constructor() {
              return null != GuildStore.getGuild(guild_id.guild_id);
            }
          }
          tmp20 = canManageGuildEventResult ? tmp21.END : tmp21.STARTED;
        } else {
          class G {
            constructor() {
              return null != GuildStore.getGuild(guild_id.guild_id);
            }
          }
          if (arg1) {
            class G {
              constructor() {
                return null != GuildStore.getGuild(guild_id.guild_id);
              }
            }
          } else {
            class G {
              constructor() {
                return null != GuildStore.getGuild(guild_id.guild_id);
              }
            }
          }
        }
        RSVP = tmp20;
      } else {
        class G {
          constructor() {
            return null != GuildStore.getGuild(guild_id.guild_id);
          }
        }
        RSVP = obj14.RSVP;
      }
    }
    JOIN_GUILD = RSVP;
  } else {
    class G {
      constructor() {
        return null != GuildStore.getGuild(guild_id.guild_id);
      }
    }
    JOIN_GUILD = obj14.JOIN_GUILD;
  }
  return JOIN_GUILD;
}) : ((scheduled_start_time, arg1) => {
  let JOIN_GUILD;
  let channel_id;
  _require = scheduled_start_time;
  ({ guild_id: importDefault, channel_id } = scheduled_start_time);
  scheduled_start_time = scheduled_start_time.scheduled_start_time;
  const items = [scheduled_start_time];
  const entity_type = scheduled_start_time.entity_type;
  const withinStartWindow = react.useMemo(() => {
    const obj = ScheduleUtils;
    return obj.getEventTimeData(scheduled_start_time);
  }, items).withinStartWindow;
  let obj = require("get initialized");
  const items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  const items2 = [ChannelStore];
  const items3 = [channel_id];
  const obj2 = require("get initialized");
  let stateFromStores1 = obj2.useStateFromStores(items2, () => ChannelStore.getChannel(channel_id), items3);
  const useManageResourcePermissions = require("useManageResourcePermissions").useManageResourcePermissions;
  require("useManageResourcePermissions");
  const tmp = _require;
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEventResult = useManageResourcePermissions(stateFromStores1).canManageGuildEvent(scheduled_start_time);
  const items4 = [GuildStore];
  const tmpResult = tmp(channel_id[28]);
  if (tmpResult.useStateFromStores(items4, () => null != GuildStore.getGuild(scheduled_start_time.guild_id))) {
    let RSVP;
    if (closure_15(scheduled_start_time)) {
      RSVP = obj14.ENDED;
    } else if (closure_16(scheduled_start_time)) {
      let JOIN;
      if (entity_type === constants.EXTERNAL) {
        JOIN = canManageGuildEventResult ? obj14.END : obj14.STARTED;
      } else if (arg1) {
        JOIN = canManageGuildEventResult ? obj14.END : obj14.CONNECTED;
      } else {
        JOIN = obj14.JOIN;
      }
      RSVP = JOIN;
    } else {
      if (withinStartWindow) {
        if (canManageGuildEventResult) {
          RSVP = obj14.START;
        }
      }
      RSVP = obj14.RSVP;
    }
    JOIN_GUILD = RSVP;
  } else {
    JOIN_GUILD = obj14.JOIN_GUILD;
  }
  return JOIN_GUILD;
});
let closure_28 = tmp14;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let BellIcon;
  let tmp11;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(12);
  event = event.event;
  [tmp5, tmp6] = closure_26(event, event.recurrenceId);
  let str = "secondary";
  _slicedToArray(closure_26(event, event.recurrenceId), 2);
  if (tmp5) {
    str = "tertiary";
  }
  if (tmp5) {
    BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
  } else {
    BellIcon = BellIcon2.BellIcon;
  }
  if (cResult[0] !== tmp5) {
    const obj2 = { checked: tmp5 };
    cResult[0] = tmp5;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl12.intl;
    const stringResult = intl.string(intl12.t.DlcqlU);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  const combined = "" + tmp8 + ", " + event.name;
  if (cResult[3] !== BellIcon) {
    const tmp13 = afk(BellIcon, { size: "sm" });
    cResult[3] = BellIcon;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl12.intl;
    const stringResult1 = intl2.string(intl12.t.DlcqlU);
    cResult[5] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === str) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === combined) {
          let tmp16;
          if (cResult[10] === tmp11) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
    }
  }
  const tmp17 = afk(ThrottledButtonDefault, { accessibilityRole: "togglebutton", accessibilityState: tmp7, accessibilityLabel: combined, variant: str, icon: tmp11, text: tmp14, onPress: tmp6, grow: true });
  cResult[6] = tmp6;
  cResult[7] = str;
  cResult[8] = tmp7;
  cResult[9] = combined;
  cResult[10] = tmp11;
  cResult[11] = tmp17;
  tmp16 = tmp17;
}) : ((event) => {
  let BellIcon;
  let first;
  let intl;
  let intl2;
  let tmp3;
  let tmp6;
  event = event.event;
  [first, tmp3] = closure_26(event, event.recurrenceId);
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
    tmp6 = require;
  } else {
    BellIcon = BellIcon2.BellIcon;
    tmp6 = require;
  }
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: "" + intl.string(tmp6(1126).t.DlcqlU) + ", " + event.name, variant: str, icon: afk(BellIcon, { size: "sm" }), text: intl2.string(tmp6(1126).t.DlcqlU), onPress: tmp3, grow: true };
  const tmp8 = ThrottledButtonDefault;
  intl = tmp6(1126).intl;
  intl2 = tmp6(1126).intl;
  return afk(tmp8, obj);
});
let closure_29 = tmp15;
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardPrimaryAction(event) {
  let first;
  let recurrenceId;
  let tmp10;
  let tmp6;
  let tmp7;
  const tmp = event;
  let obj = event(recurrenceId[18]);
  const cResult = obj.c(56);
  event = event.event;
  const onCloseAction = event.onCloseAction;
  recurrenceId = event.recurrenceId;
  const guild_id = event.guild_id;
  const channel_id = event.channel_id;
  const isConnected = event.isConnected;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel_id) {
    const fn = function o() {
      return ChannelStore.getChannel(channel_id);
    };
    const items1 = [channel_id];
    cResult[1] = channel_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[28]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  let closure_6 = channel_id(onCloseAction(tmp2[38])(), 2)[1];
  closure_28(event, isConnected);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class C {
      constructor() {
        return PermissionStore.can(constants.CONNECT, stateFromStores);
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = C;
  } else {
    class C {
      constructor() {
        return PermissionStore.can(constants.CONNECT, stateFromStores);
      }
    }
  }
  const tmpResult2 = tmp(recurrenceId[28]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, C);
  if (cResult[7] === event.guild_id) {
    class C {
      constructor() {
        return PermissionStore.can(constants.CONNECT, stateFromStores);
      }
    }
    if (cResult[10] === event) {
      class C {
        constructor() {
          return PermissionStore.can(constants.CONNECT, stateFromStores);
        }
      }
    }
    function handleStartEvent() {
      if (onCloseAction != null) {
        tmp();
      }
      const obj = GuildScheduledEventModalActionCreators;
      const result = obj.openStartGuildEventModal(event, recurrenceId);
    }
    cResult[10] = event;
    cResult[11] = onCloseAction;
    cResult[12] = recurrenceId;
    cResult[13] = handleStartEvent;
  }
  function handleEndEvent() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj = {
      title: intl.string(intl12.t.qaYzPA),
      body: intl2.string(intl12.t.bnDQ7E),
      cancelText: intl3.string(intl12.t.gm1Vej),
      confirmText: intl4.string(intl12.t.p89ACt),
      onConfirm() {
        const obj = onCloseAction(recurrenceId[40]);
        return obj.endEvent(event.id, event.guild_id);
      },
      confirmColor: AlertDefault.Colors.RED
    };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl12.intl;
    intl2 = intl12.intl;
    intl3 = intl12.intl;
    intl4 = intl12.intl;
    show(obj);
  }
  cResult[7] = event.guild_id;
  cResult[8] = event.id;
  cResult[9] = handleEndEvent;
}) : (function GuildEventCardPrimaryAction(event) {
  let c3;
  let channel_id;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let recurrenceId;
  event = event.event;
  ({ onCloseAction: importDefault, recurrenceId } = event);
  c3 = undefined;
  channel_id = undefined;
  ({ guild_id: c3, channel_id } = event);
  const tmp = event;
  const isConnected = event.isConnected;
  let obj = event(recurrenceId[28]);
  const items = [ChannelStore];
  const items1 = [channel_id];
  const id = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  let closure_6 = channel_id(require("useSelectStage")(), 2)[1];
  const tmp4 = closure_28(event, isConnected);
  const items2 = [PermissionStore];
  const obj2 = event(recurrenceId[28]);
  const stateFromStores = obj2.useStateFromStores(items2, () => PermissionStore.can(constants.CONNECT, id));
  if (obj14.ENDED === tmp4) {
    const obj3 = { variant: "secondary", text: intl10.string(tmp(recurrenceId[24]).t.Pj7Xrv), accessibilityLabel: "" + intl11.string(tmp(recurrenceId[24]).t.Pj7Xrv) + ", " + event.name, grow: true, disabled: true, onPress };
    const tmp3Result = require("ThrottledButton");
    intl10 = tmp(recurrenceId[24]).intl;
    intl11 = tmp(recurrenceId[24]).intl;
    const _HermesInternal6 = HermesInternal;
    return closure_22(tmp3Result, obj3);
  } else {
    function handleListenIn() {
      if (null != id) {
        if (event.entity_type === constants.STAGE_INSTANCE) {
          closure_6(c3, id.id);
        }
        const obj = PrivateChannelCallUtils;
        obj.openGuildVoiceModal(id);
        if (importDefault != null) {
          importDefault();
        }
      }
    }
    if (obj14.JOIN === tmp4) {
      let stringResult;
      const intl9 = tmp(recurrenceId[24]).intl;
      const string = intl9.string;
      const t = tmp(recurrenceId[24]).t;
      if (stateFromStores) {
        stringResult = string(t.ZYO5OK);
      } else {
        stringResult = string(t.TVBCKZ);
      }
      const _HermesInternal5 = HermesInternal;
      const obj4 = { variant: "active", text: stringResult, accessibilityLabel: "" + stringResult + ", " + event.name, onPress: handleListenIn, disabled: !stateFromStores, grow: true };
      const tmp3Result6 = require("ThrottledButton");
      return closure_22(tmp3Result6, obj4);
    } else if (obj14.CONNECTED === tmp4) {
      const obj5 = { variant: "active", text: intl7.string(tmp(recurrenceId[24]).t.aW2YlJ), accessibilityLabel: "" + intl8.string(tmp(recurrenceId[24]).t.aW2YlJ) + ", " + event.name, onPress: handleListenIn, grow: true };
      const tmp3Result7 = require("ThrottledButton");
      intl7 = tmp(recurrenceId[24]).intl;
      intl8 = tmp(recurrenceId[24]).intl;
      const _HermesInternal4 = HermesInternal;
      return closure_22(tmp3Result7, obj5);
    } else if (obj14.RSVP === tmp4) {
      const obj6 = { event, recurrenceId };
      return closure_22(closure_29, obj6);
    } else if (obj14.START === tmp4) {
      const obj7 = {
        variant: "active",
        text: intl5.string(tmp(recurrenceId[24]).t.cK1GGY),
        accessibilityLabel: "" + intl6.string(tmp(recurrenceId[24]).t.cK1GGY) + ", " + event.name,
        onPress: function handleStartEvent() {
              if (importDefault != null) {
                tmp();
              }
              const obj = GuildScheduledEventModalActionCreators;
              const result = obj.openStartGuildEventModal(event, recurrenceId);
            },
        grow: true
      };
      const tmp3Result8 = require("ThrottledButton");
      intl5 = tmp(recurrenceId[24]).intl;
      intl6 = tmp(recurrenceId[24]).intl;
      const _HermesInternal3 = HermesInternal;
      return closure_22(tmp3Result8, obj7);
    } else if (obj14.STARTED === tmp4) {
      const obj8 = { variant: "secondary", text: intl3.string(tmp(recurrenceId[24]).t.Yz0V6O), accessibilityLabel: "" + intl4.string(tmp(recurrenceId[24]).t.Yz0V6O) + ", " + event.name, grow: true, disabled: true, onPress };
      const tmp3Result9 = require("ThrottledButton");
      intl3 = tmp(recurrenceId[24]).intl;
      intl4 = tmp(recurrenceId[24]).intl;
      const _HermesInternal2 = HermesInternal;
      return closure_22(tmp3Result9, obj8);
    } else if (obj14.END === tmp4) {
      const obj9 = {
        variant: "secondary",
        text: intl.string(tmp(recurrenceId[24]).t.qaYzPA),
        accessibilityLabel: "" + intl2.string(tmp(recurrenceId[24]).t.qaYzPA) + ", " + event.name,
        onPress: function handleEndEvent() {
              let intl;
              let intl2;
              let intl3;
              let intl4;
              let obj = {
                title: intl.string(intl12.t.qaYzPA),
                body: intl2.string(intl12.t.bnDQ7E),
                cancelText: intl3.string(intl12.t.gm1Vej),
                confirmText: intl4.string(intl12.t.p89ACt),
                onConfirm() {
                  const obj = require("GuildScheduledEventsActionCreators");
                  return obj.endEvent(event.id, event.guild_id);
                },
                confirmColor: AlertDefault.Colors.RED
              };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl12.intl;
              intl2 = intl12.intl;
              intl3 = intl12.intl;
              intl4 = intl12.intl;
              show(obj);
            },
        grow: true
      };
      const tmp3Result10 = require("ThrottledButton");
      intl = tmp(recurrenceId[24]).intl;
      intl2 = tmp(recurrenceId[24]).intl;
      const _HermesInternal = HermesInternal;
      return closure_22(tmp3Result10, obj9);
    } else if (obj14.JOIN_GUILD === tmp4) {
      const obj10 = { event, recurrenceId };
      return closure_22(GuildEventJoinAndRSVPAction, obj10);
    } else {
      const tmpResult = tmp(recurrenceId[43]);
      tmpResult.assertNever(tmp4);
    }
  }
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardImageHeader(event) {
  let closure_129_0;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  event = event.event;
  const tmp4 = styles();
  let width = useWindowDimensionsDefault().width;
  [tmp7, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      if (width > 0) {
        closure_1_0((arg0) => {
          let tmp = width;
          if (Math.abs(arg0 - width) < 1) {
            tmp = arg0;
          }
          return tmp;
        });
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (null == event.image) {
    return null;
  } else {
    if (tmp7 > 0) {
      width = tmp7;
    }
    if (cResult[1] === event) {
      let tmp9;
      if (cResult[2] === width) {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        let tmp11;
        if (cResult[5] === tmp4.imageHeaderBanner) {
          tmp11 = cResult[6];
        }
        if (cResult[7] === tmp4.imageHeaderContainer) {
          let tmp15;
          if (cResult[8] === tmp11) {
            tmp15 = cResult[9];
          }
          return tmp15;
        }
        const obj2 = { style: tmp4.imageHeaderContainer, onLayout: first, children: tmp11 };
        const tmp18 = afk(metroRequire, obj2);
        cResult[7] = tmp4.imageHeaderContainer;
        cResult[8] = tmp11;
        cResult[9] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { style: tmp4.imageHeaderBanner, source: tmp9, resizeMode: "cover" };
      const tmp14 = afk(metroImportDefault, obj3);
      cResult[4] = tmp9;
      cResult[5] = tmp4.imageHeaderBanner;
      cResult[6] = tmp14;
      tmp11 = tmp14;
    }
    const tmpResult = AvatarUtils;
    const source = tmpResult.makeSource(getGuildEventImageDefault(event, width));
    cResult[1] = event;
    cResult[2] = width;
    cResult[3] = source;
    tmp9 = source;
  }
}) : (function GuildEventCardImageHeader(event) {
  let c0;
  let obj;
  let obj3;
  let tmp5;
  event = event.event;
  c0 = undefined;
  const tmp = styles();
  let width = useWindowDimensionsDefault().width;
  [tmp5, c0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (null == event.image) {
    return null;
  } else {
    if (tmp5 > 0) {
      width = tmp5;
    }
    const obj2 = { style: tmp.imageHeaderContainer, onLayout: tmp6, children: afk(metroImportDefault, obj3) };
    obj3 = { style: tmp.imageHeaderBanner, source: obj.makeSource(getGuildEventImageDefault(event, width)), resizeMode: "cover" };
    obj = AvatarUtils;
    return afk(metroRequire, obj2);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp18 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserCountIconPill(event) {
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  event = event.event;
  const recurrenceId = event.recurrenceId;
  let guild_id;
  const tmp4 = useGuildScheduledEventUserCountDefault;
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  const tmp4Result = tmp4(guild_id, id, recurrenceId);
  if (cResult[0] !== tmp4Result) {
    const intl = intl12.intl;
    const obj2 = { count: tmp4Result };
    const formatToPlainStringResult = intl.formatToPlainString(intl12.t["+DLsD8"], obj2);
    cResult[0] = tmp4Result;
    cResult[1] = formatToPlainStringResult;
    tmp7 = formatToPlainStringResult;
  } else {
    tmp7 = cResult[1];
  }
  const combined = "" + tmp7 + ", " + event.name;
  if (cResult[2] !== tmp4Result) {
    const toLocaleStringResult = tmp4Result.toLocaleString();
    cResult[2] = tmp4Result;
    cResult[3] = toLocaleStringResult;
    tmp10 = toLocaleStringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === combined) {
    let tmp12;
    if (cResult[5] === tmp10) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj3 = { accessibilityLabel: combined, IconComponent: GroupIcon.GroupIcon, text: tmp10 };
  const IconPill = native.IconPill;
  const tmp13 = afk(IconPill, obj3);
  cResult[4] = combined;
  cResult[5] = tmp10;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function UserCountIconPill(event) {
  let intl;
  event = event.event;
  const recurrenceId = event.recurrenceId;
  let guild_id;
  const tmp2 = useGuildScheduledEventUserCountDefault;
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  const tmp2Result = tmp2(guild_id, id, recurrenceId);
  const obj = { accessibilityLabel: "" + intl.formatToPlainString(intl12.t["+DLsD8"], { count: tmp2Result }) + ", " + event.name, IconComponent: GroupIcon.GroupIcon, text: tmp2Result.toLocaleString() };
  const IconPill = native.IconPill;
  intl = intl12.intl;
  return afk(IconPill, obj);
});
let closure_31 = tmp18;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp19 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardHeader(event) {
  let color;
  let isActive;
  let isNew;
  let isPreview;
  let recurrenceId;
  let shouldChangeTextColor;
  let showCreator;
  let showEndDate;
  let showUserCount;
  let style;
  let text;
  let tmp17;
  let obj = event(shouldChangeTextColor[18]);
  const cResult = obj.c(49);
  event = event.event;
  ({ recurrenceId, showUserCount, showEndDate, isPreview, showCreator, isNew, isActive, style } = event);
  const tmp4 = undefined === showUserCount || showUserCount;
  const tmp8 = styles();
  let id;
  const tmp10 = color(shouldChangeTextColor[50])();
  const tmp11 = color(shouldChangeTextColor[51]);
  const tmp9 = color;
  if (event != null) {
    id = event.id;
  }
  let obj2 = tmp11(recurrenceId, id);
  const entity_type = event.entity_type;
  if (obj2 == null) {
    obj2 = {};
  }
  const is_canceled = obj2.is_canceled;
  const tmp13 = undefined !== is_canceled && is_canceled;
  const tmp14 = tmp9(shouldChangeTextColor[52])(event, recurrenceId);
  let startTime1;
  const first = cResult[0];
  if (tmp14 != null) {
    startTime1 = tmp14.startTime;
  }
  if (first !== startTime1) {
    let toISOStringResult;
    if (tmp14 != null) {
      const startTime = tmp14.startTime;
      toISOStringResult = startTime.toISOString();
    }
    let startTime2;
    if (tmp14 != null) {
      startTime2 = tmp14.startTime;
    }
    cResult[0] = startTime2;
    cResult[1] = toISOStringResult;
    tmp17 = toISOStringResult;
  } else {
    tmp17 = cResult[1];
  }
  let endTime;
  const tmp20 = cResult[2];
  if (tmp14 != null) {
    endTime = tmp14.endTime;
  }
  if (tmp20 === endTime) {
    let tmp22;
    if (cResult[3] === (undefined !== showEndDate && showEndDate)) {
      tmp22 = cResult[4];
    }
    if (cResult[5] === tmp22) {
      let tmp26;
      let tmp31;
      let tmp40;
      if (cResult[6] === tmp17) {
        tmp26 = cResult[7];
      }
      const STAGE_INSTANCE = constants.STAGE_INSTANCE;
      const obj3 = { eventTimeData: tmp26, isStage: entity_type === STAGE_INSTANCE, theme: tmp10, event, isCanceled: tmp13, recurrenceId };
      const tmpResult = event(shouldChangeTextColor[53]);
      const guildScheduledEventHeaderProps = tmpResult.getGuildScheduledEventHeaderProps(obj3);
      color = guildScheduledEventHeaderProps.color;
      ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
      const endDateTimeString = tmp26.endDateTimeString;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        function handleOpenRSVPList() {

        }
        cResult[8] = handleOpenRSVPList;
        tmp31 = handleOpenRSVPList;
      } else {
        tmp31 = cResult[8];
      }
      if (tmp4) {
        if (cResult[9] === event) {
          let tmp33;
          if (cResult[10] === recurrenceId) {
            tmp33 = cResult[11];
          }
          let tmp38 = tmp33;
          if (!(undefined !== isPreview && isPreview)) {
            const obj4 = { accessibilityRole: "button", onPress: tmp31, children: tmp33 };
            tmp38 = closure_22(tmp(shouldChangeTextColor[54]).PressableOpacity, obj4);
          }
          cResult[12] = undefined !== isPreview && isPreview;
          cResult[13] = tmp33;
          cResult[14] = tmp38;
        }
        const obj5 = { event, recurrenceId };
        const tmp36 = closure_22(closure_31, obj5);
        cResult[9] = event;
        cResult[10] = recurrenceId;
        cResult[11] = tmp36;
        tmp33 = tmp36;
      }
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[15] = items;
        tmp40 = items;
      } else {
        tmp40 = cResult[15];
      }
      if (cResult[16] !== event.creator_id) {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
        cResult[16] = event.creator_id;
        cResult[17] = Z;
      } else {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
      }
      if (cResult[18] !== event) {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
        tmp44[0] = event;
        cResult[18] = event;
        cResult[19] = tmp44;
      } else {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
      }
      const tmpResult3 = event(shouldChangeTextColor[28]);
      const stateFromStores = tmpResult3.useStateFromStores(tmp40, Z, tmp44);
      let tmp46 = null != endDateTimeString;
      if (tmp46) {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
        tmp46 = "" !== endDateTimeString;
      }
      if (tmp46) {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
        const obj6 = {
          start: text,
          startHook(children) {
                  let tmp2 = shouldChangeTextColor;
                  const Text = Text_Text.Text;
                  if (shouldChangeTextColor) {
                    tmp2 = { color };
                    const obj = { color };
                  }
                  const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp2, children };
                  return afk(Text, obj2);
                },
          end: endDateTimeString
        };
        obj9.format(event(shouldChangeTextColor[24]).t.vHYgJW, obj6);
      }
      if (cResult[20] === style) {
        let tmp50Result;
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
        if (cResult[23] === color) {
          class Z {
            constructor() {
              return UserStore.getUser(event.creator_id);
            }
          }
        }
        if (undefined !== isNew && isNew) {
          class Z {
            constructor() {
              return UserStore.getUser(event.creator_id);
            }
          }
          tmp53[0] = tmp8.newBadge;
          tmp50Result = closure_22(tmp(shouldChangeTextColor[48]).NewTag, tmp53);
        } else {
          class Z {
            constructor() {
              return UserStore.getUser(event.creator_id);
            }
          }
          tmp51[1] = color;
          tmp51[2] = tmp8.dateIcon;
          tmp50Result = closure_22(tmp(shouldChangeTextColor[56]).CalendarIcon, tmp51);
        }
        cResult[23] = color;
        cResult[24] = undefined !== isNew && isNew;
        cResult[25] = tmp8.dateIcon;
        cResult[26] = tmp8.newBadge;
        cResult[27] = tmp50Result;
      }
      const items1 = [tmp8.headerContainer, style];
      cResult[20] = style;
      cResult[21] = tmp8.headerContainer;
      cResult[22] = items1;
    }
    const tmpResult4 = event(shouldChangeTextColor[34]);
    const eventTimeData = tmpResult4.getEventTimeData(tmp17, tmp22);
    cResult[5] = tmp22;
    cResult[6] = tmp17;
    cResult[7] = eventTimeData;
    tmp26 = eventTimeData;
  }
  let tmp23;
  if (undefined !== showEndDate && showEndDate) {
    class Z {
      constructor() {
        return UserStore.getUser(event.creator_id);
      }
    }
    if (tmp14 != null) {
      class Z {
        constructor() {
          return UserStore.getUser(event.creator_id);
        }
      }
      if (tmp25 != null) {
        class Z {
          constructor() {
            return UserStore.getUser(event.creator_id);
          }
        }
      }
    }
    tmp23 = tmp24;
  }
  if (tmp14 != null) {
    class Z {
      constructor() {
        return UserStore.getUser(event.creator_id);
      }
    }
  }
  cResult[2] = undefined;
  cResult[3] = undefined !== showEndDate && showEndDate;
  cResult[4] = tmp23;
  tmp22 = tmp23;
}) : (function GuildEventCardHeader(event) {
  let Text;
  let c1;
  let intl2;
  let items3;
  let items4;
  let obj12;
  let obj15;
  let recurrenceId;
  let shouldChangeTextColor;
  let showUserCount;
  let text;
  let tmp25Result;
  let tmp27;
  event = event.event;
  ({ recurrenceId, showUserCount } = event);
  if (showUserCount === undefined) {
    showUserCount = true;
  }
  let flag = event.showEndDate;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = event.isPreview;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = event.showCreator;
  if (flag3 === undefined) {
    flag3 = true;
  }
  let flag4 = event.isNew;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = event.isActive;
  if (flag5 === undefined) {
    flag5 = false;
  }
  importDefault = undefined;
  let toISOStringResult1;
  let color;
  shouldChangeTextColor = undefined;
  const style = event.style;
  const tmp = styles();
  let tmp2 = importDefault;
  let id;
  const tmp4 = require("useTheme")();
  const tmp5 = require("useEventException");
  if (event != null) {
    id = event.id;
  }
  let obj = tmp5(recurrenceId, id);
  const entity_type = event.entity_type;
  if (obj == null) {
    obj = {};
  }
  const is_canceled = obj.is_canceled;
  const tmp7 = undefined !== is_canceled && is_canceled;
  const tmp8 = tmp2(toISOStringResult1[52])(event, recurrenceId);
  let toISOStringResult;
  if (tmp8 != null) {
    const startTime = tmp8.startTime;
    toISOStringResult = startTime.toISOString();
  }
  importDefault = toISOStringResult;
  let tmp10;
  if (flag) {
    toISOStringResult1 = undefined;
    if (tmp8 != null) {
      const endTime = tmp8.endTime;
      if (endTime != null) {
        toISOStringResult1 = endTime.toISOString();
      }
    }
    tmp10 = toISOStringResult1;
  }
  toISOStringResult1 = tmp10;
  const items = [toISOStringResult, tmp10];
  const memo = react.useMemo(() => {
    const obj = ScheduleUtils;
    return obj.getEventTimeData(c1, toISOStringResult1);
  }, items);
  const STAGE_INSTANCE = constants.STAGE_INSTANCE;
  let obj2 = event(tmp3[53]);
  const obj3 = { eventTimeData: memo, isStage: entity_type === STAGE_INSTANCE, theme: tmp4, event, isCanceled: tmp7, recurrenceId };
  const guildScheduledEventHeaderProps = obj2.getGuildScheduledEventHeaderProps(obj3);
  color = guildScheduledEventHeaderProps.color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  const endDateTimeString = memo.endDateTimeString;
  let tmp15 = null;
  if (showUserCount) {
    const obj4 = { event, recurrenceId };
    const tmp18 = closure_22(closure_31, obj4);
    let tmp16Result = tmp18;
    if (!flag2) {
      const obj5 = {
        accessibilityRole: "button",
        onPress: function handleOpenRSVPList() {

            },
        children: tmp18
      };
      tmp16Result = closure_22(tmp13(tmp3[54]).PressableOpacity, obj5);
    }
    tmp15 = tmp16Result;
  }
  const items1 = [UserStore];
  const items2 = [event];
  const tmp13Result = event(toISOStringResult1[28]);
  const stateFromStores = tmp13Result.useStateFromStores(items1, () => UserStore.getUser(event.creator_id), items2);
  let formatResult = text;
  if (null != endDateTimeString && "" !== endDateTimeString) {
    const intl = tmp13(tmp3[24]).intl;
    const obj6 = {
      start: text,
      startHook(children) {
          let tmp2 = shouldChangeTextColor;
          const Text = Text_Text.Text;
          if (shouldChangeTextColor) {
            tmp2 = { color };
            const obj = { color };
          }
          const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp2, children };
          return afk(Text, obj2);
        },
      end: endDateTimeString
    };
    formatResult = intl.format(tmp13(tmp3[24]).t.vHYgJW, obj6);
  }
  const obj7 = { style: items3, children: items4 };
  items3 = [tmp.headerContainer, style];
  if (flag4) {
    const obj8 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
    tmp25Result = closure_22(tmp13(tmp3[48]).NewTag, obj8);
    tmp27 = closure_22;
  } else {
    const obj9 = { size: "sm", color, style: tmp.dateIcon };
    tmp25Result = closure_22(tmp13(tmp3[56]).CalendarIcon, obj9);
    tmp27 = closure_22;
  }
  items4 = [tmp25Result, , , ];
  const obj10 = { style: tmp.dateContainer, children: tmp27(Text, obj12) };
  Text = tmp13(tmp3[55]).Text;
  if (null != endDateTimeString && "" !== endDateTimeString) {
    obj12 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
    const obj11 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
  } else {
    let str2 = "text-subtle";
    if (flag5) {
      str2 = "text-strong";
    }
    obj12 = { variant: "text-sm/semibold", color: str2, style: shouldChangeTextColor, children: formatResult };
    if (shouldChangeTextColor) {
      shouldChangeTextColor = { color };
      const obj13 = { color };
    }
  }
  items4[1] = tmp27(closure_6, obj10);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    obj14 = { accessible: true, accessibilityLabel: "" + intl2.formatToPlainString(event(toISOStringResult1[24]).t["+3iypQ"], obj15) + ", " + event.name, user: stateFromStores, guildId: event.guild_id, size: event(toISOStringResult1[48]).AvatarSizes.XSMALL_20, style: tmp.creatorAvatar };
    const Avatar = tmp13(tmp3[48]).Avatar;
    intl2 = tmp13(tmp3[24]).intl;
    const _HermesInternal = HermesInternal;
    obj15 = { username: stateFromStores.username };
    flag3 = tmp27(Avatar, obj14);
  }
  items4[2] = flag3;
  items4[3] = tmp15;
  return closure_23(closure_6, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp20 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardTitle(condensed) {
  let event;
  let first;
  let style;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(13);
  ({ event, style, textStyle, onPress } = condensed);
  condensed = condensed.condensed;
  const tmp4 = styles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl12.intl;
    const stringResult = intl.string(intl12.t.epxpiy);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === style) {
    let tmp7;
    if (cResult[2] === tmp4.topicContainer) {
      tmp7 = cResult[3];
    }
    let num2;
    if (condensed) {
      num2 = 1;
    }
    if (cResult[4] === event.name) {
      if (cResult[5] === num2) {
        let tmp8;
        if (cResult[6] === textStyle) {
          tmp8 = cResult[7];
        }
        if (cResult[8] === event.name) {
          if (cResult[9] === onPress) {
            if (cResult[10] === tmp7) {
              let tmp11;
              if (cResult[11] === tmp8) {
                tmp11 = cResult[12];
              }
              return tmp11;
            }
          }
        }
        const obj2 = { accessibilityRole: "button", accessibilityHint: first, accessibilityLabel: event.name, onPress, style: tmp7, children: tmp8 };
        const tmp14 = afk(metroImportAll, obj2);
        cResult[8] = event.name;
        cResult[9] = onPress;
        cResult[10] = tmp7;
        cResult[11] = tmp8;
        cResult[12] = tmp14;
        tmp11 = tmp14;
      }
    }
    const obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: textStyle, lineClamp: num2, children: event.name };
    const tmp10 = afk(Text_Text.Text, obj3);
    cResult[4] = event.name;
    cResult[5] = num2;
    cResult[6] = textStyle;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp4.topicContainer, style];
  cResult[1] = style;
  cResult[2] = tmp4.topicContainer;
  cResult[3] = items;
  tmp7 = items;
}) : (function GuildEventCardTitle(event) {
  let Text;
  let condensed;
  let intl;
  let items;
  let num;
  let obj2;
  let style;
  let textStyle;
  event = event.event;
  ({ style, textStyle, condensed, onPress } = event);
  const obj = { accessibilityRole: "button", accessibilityHint: intl.string(intl12.t.epxpiy), accessibilityLabel: event.name, onPress, style: items, children: afk(Text, obj2) };
  const tmp = styles();
  intl = intl12.intl;
  items = [tmp.topicContainer, style];
  obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: textStyle, lineClamp: num, children: event.name };
  num = undefined;
  Text = Text_Text.Text;
  if (condensed) {
    num = 1;
  }
  return afk(metroImportAll, obj);
});
let closure_32 = tmp20;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp21 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardDescription(condensed) {
  let description;
  let event;
  let guild_id;
  let numberOfLines;
  let style;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(13);
  ({ event, style, textStyle, numberOfLines } = condensed);
  ({ description, guild_id } = event);
  condensed = condensed.condensed;
  const tmp4 = styles();
  let tmp5 = null;
  if (null != description) {
    tmp5 = null;
    if (description.length > 0) {
      tmp5 = null;
      if (!condensed) {
        tmp5 = null;
        if (null != description) {
          if (cResult[0] === style) {
            let tmp6;
            if (cResult[1] === tmp4.detailsContainer) {
              tmp6 = cResult[2];
            }
            if (cResult[3] === description) {
              let tmp7;
              if (cResult[4] === guild_id) {
                tmp7 = cResult[5];
              }
              if (cResult[6] === numberOfLines) {
                if (cResult[7] === tmp7) {
                  let tmp9;
                  if (cResult[8] === textStyle) {
                    tmp9 = cResult[9];
                  }
                  if (cResult[10] === tmp6) {
                    let tmp12;
                    if (cResult[11] === tmp9) {
                      tmp12 = cResult[12];
                    }
                    tmp5 = tmp12;
                  }
                  const obj2 = { style: tmp6, children: tmp9 };
                  const tmp15 = afk(metroRequire, obj2);
                  cResult[10] = tmp6;
                  cResult[11] = tmp9;
                  cResult[12] = tmp15;
                  tmp12 = tmp15;
                }
              }
              const obj3 = { variant: "text-md/medium", color: "text-subtle", style: textStyle, lineClamp: numberOfLines, children: tmp7 };
              const tmp11 = afk(Text_Text.Text, obj3);
              cResult[6] = numberOfLines;
              cResult[7] = tmp7;
              cResult[8] = textStyle;
              cResult[9] = tmp11;
              tmp9 = tmp11;
            }
            const obj4 = { guildId: guild_id, allowLinks: true, allowHeading: true, allowList: true };
            const tmpResult = guildEventDetailsParser;
            const result = tmpResult.guildEventDetailsParser(description, true, obj4);
            cResult[3] = description;
            cResult[4] = guild_id;
            cResult[5] = result;
            tmp7 = result;
          }
          const items = [tmp4.detailsContainer, style];
          cResult[0] = style;
          cResult[1] = tmp4.detailsContainer;
          cResult[2] = items;
          tmp6 = items;
        }
      }
    }
  }
  return tmp5;
}) : (function GuildEventCardDescription(event) {
  let Text;
  let condensed;
  let items;
  let numberOfLines;
  let obj2;
  let obj3;
  let obj4;
  let style;
  let textStyle;
  event = event.event;
  const description = event.description;
  const guild_id = event.guild_id;
  ({ style, textStyle, numberOfLines, condensed } = event);
  let tmp2 = null;
  if (null != description) {
    tmp2 = null;
    if (description.length > 0) {
      tmp2 = null;
      if (!condensed) {
        tmp2 = null;
        if (null != description) {
          const obj = { style: items, children: afk(Text, obj2) };
          items = [tmp.detailsContainer, style];
          obj2 = { variant: "text-md/medium", color: "text-subtle", style: textStyle, lineClamp: numberOfLines, children: obj3.guildEventDetailsParser(description, true, obj4) };
          Text = Text_Text.Text;
          obj4 = { guildId: guild_id, allowLinks: true, allowHeading: true, allowList: true };
          obj3 = guildEventDetailsParser;
          tmp2 = afk(metroRequire, obj);
        }
      }
    }
  }
  return tmp2;
});
let closure_33 = tmp21;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp22 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardMetaInfo(arg0) {
  let condensed;
  let descriptionContainerStyle;
  let descriptionStyle;
  let event;
  let items;
  let onTitlePress;
  let titleContainerStyle;
  let titleStyle;
  const obj = react2;
  const cResult = obj.c(14);
  ({ event, titleStyle, titleContainerStyle, onTitlePress, descriptionStyle, descriptionContainerStyle, condensed } = arg0);
  if (cResult[0] === condensed) {
    if (cResult[1] === event) {
      if (cResult[2] === onTitlePress) {
        if (cResult[3] === titleContainerStyle) {
          let tmp2;
          if (cResult[4] === titleStyle) {
            tmp2 = cResult[5];
          }
          if (cResult[6] === condensed) {
            if (cResult[7] === descriptionContainerStyle) {
              if (cResult[8] === descriptionStyle) {
                let tmp4;
                if (cResult[9] === event) {
                  tmp4 = cResult[10];
                }
                if (cResult[11] === tmp2) {
                  let tmp8;
                  if (cResult[12] === tmp4) {
                    tmp8 = cResult[13];
                  }
                  return tmp8;
                }
                const obj2 = { children: items };
                items = [tmp2, tmp4];
                const tmp11 = closure_23(closure_24, obj2);
                cResult[11] = tmp2;
                cResult[12] = tmp4;
                cResult[13] = tmp11;
                tmp8 = tmp11;
              }
            }
          }
          const obj3 = { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 };
          const tmp7 = afk(closure_33, obj3);
          cResult[6] = condensed;
          cResult[7] = descriptionContainerStyle;
          cResult[8] = descriptionStyle;
          cResult[9] = event;
          cResult[10] = tmp7;
          tmp4 = tmp7;
        }
      }
    }
  }
  const tmp3 = afk(closure_32, { event, textStyle: titleStyle, style: titleContainerStyle, condensed, onPress: onTitlePress });
  cResult[0] = condensed;
  cResult[1] = event;
  cResult[2] = onTitlePress;
  cResult[3] = titleContainerStyle;
  cResult[4] = titleStyle;
  cResult[5] = tmp3;
  tmp2 = tmp3;
}) : (function GuildEventCardMetaInfo(textStyle) {
  let condensed;
  let descriptionContainerStyle;
  let descriptionStyle;
  let event;
  let items;
  ({ event, condensed } = textStyle);
  const obj = { children: items };
  const obj2 = { event, textStyle: textStyle.titleStyle, style: textStyle.titleContainerStyle, condensed, onPress: textStyle.onTitlePress };
  ({ descriptionStyle, descriptionContainerStyle } = textStyle);
  items = [afk(closure_32, obj2), afk(closure_33, { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 })];
  return closure_23(closure_24, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp23 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventSimpleLocation(event) {
  let channel_id;
  let first;
  let items4;
  let tmp10;
  let tmp15;
  let tmp17;
  let tmp35;
  let tmp7;
  let tmp8;
  const obj = channel_id(576);
  const cResult = obj.c(44);
  event = event.event;
  const tmp4 = styles();
  channel_id = event.channel_id;
  let guild_id = event.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel_id) {
    const fn = function l() {
      return ChannelStore.getChannel(channel_id);
    };
    const items1 = [channel_id];
    cResult[1] = channel_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = channel_id(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildMemberStore, AuthenticationStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  let guild_id1;
  const tmp13 = cResult[5];
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  if (tmp13 !== guild_id1) {
    let guild_id2;
    if (stateFromStores != null) {
      guild_id2 = stateFromStores.guild_id;
    }
    const fn2 = function _() {
      let guild_id;
      const id = AuthenticationStore.getId();
      const isMember = GuildMemberStore.isMember;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return isMember(guild_id, id);
    };
    cResult[5] = guild_id2;
    cResult[6] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const items3 = [stateFromStores];
    cResult[7] = stateFromStores;
    cResult[8] = items3;
    tmp17 = items3;
  } else {
    tmp17 = cResult[8];
  }
  const tmpResult5 = channel_id(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp15, tmp17);
  const tmp20 = stateFromStores(5049)(stateFromStores);
  const tmp19 = stateFromStores;
  if (cResult[9] === stateFromStores) {
    if (cResult[10] === tmp20) {
      if (cResult[11] === event) {
        if (cResult[12] === guild_id) {
          if (cResult[13] === stateFromStores1) {
            let tmp21;
            let tmp22;
            let tmp23;
            let tmp24;
            let tmp25;
            let tmp26;
            let tmp27;
            let tmp28;
            let tmp29;
            let tmp30;
            if (cResult[14] === tmp4) {
              tmp21 = cResult[15];
              tmp22 = cResult[16];
              tmp23 = cResult[17];
              tmp24 = cResult[18];
              tmp25 = cResult[19];
              tmp26 = cResult[20];
              tmp27 = cResult[21];
              tmp28 = cResult[22];
              tmp29 = cResult[23];
              tmp30 = cResult[24];
            }
            const _Symbol = Symbol;
            if (tmp27 === Symbol.for("react.early_return_sentinel")) {
              if (cResult[32] === tmp21) {
                if (cResult[33] === tmp23) {
                  if (cResult[34] === tmp24) {
                    if (cResult[35] === tmp28) {
                      if (cResult[36] === tmp29) {
                        let tmp51;
                        if (cResult[37] === tmp30) {
                          tmp51 = cResult[38];
                        }
                        if (cResult[39] === tmp22) {
                          if (cResult[40] === tmp25) {
                            if (cResult[41] === tmp26) {
                              let tmp54;
                              if (cResult[42] === tmp51) {
                                tmp54 = cResult[43];
                              }
                              tmp27 = tmp54;
                            }
                          }
                        }
                        const obj2 = { style: tmp25, children: items4 };
                        items4 = [tmp26, tmp51];
                        const tmp56 = closure_23(tmp22, obj2);
                        cResult[39] = tmp22;
                        cResult[40] = tmp25;
                        cResult[41] = tmp26;
                        cResult[42] = tmp51;
                        cResult[43] = tmp56;
                        tmp54 = tmp56;
                      }
                    }
                  }
                }
              }
              const obj3 = { style: tmp28, accessibilityLabel: tmp29, variant: tmp30, color: tmp23, children: tmp24 };
              const tmp53 = closure_22(tmp21, obj3);
              cResult[32] = tmp21;
              cResult[33] = tmp23;
              cResult[34] = tmp24;
              cResult[35] = tmp28;
              cResult[36] = tmp29;
              cResult[37] = tmp30;
              cResult[38] = tmp53;
              tmp51 = tmp53;
            }
            return tmp27;
          }
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult6 = channel_id(9215);
  const locationFromEvent = tmpResult6.getLocationFromEvent(event);
  if (null != stateFromStores) {
    if (cResult[25] === stateFromStores) {
      if (cResult[26] === event) {
        let tmp41;
        if (cResult[27] === stateFromStores1) {
          tmp41 = cResult[28];
        }
        if (cResult[29] === tmp41) {
          const Text = tmp(4892).Text;
          const channelText = tmp4.channelText;
          if (null != stateFromStores) {
            const obj4 = { channel: stateFromStores };
            let combined = tmp19(9295)(obj4);
          } else if (null != locationFromEvent) {
            const intl = tmp(1126).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl.string(tmp(1126).t.gwSn4I) + ", " + locationFromEvent;
          }
          if (tmp20 == null) {
            let result = null;
            if (null != locationFromEvent) {
              const obj5 = { guildId: guild_id };
              const tmpResult7 = channel_id(9294);
              result = tmpResult7.guildEventLocationParser(locationFromEvent, true, obj5);
            }
          }
          tmp35 = forResult;
        }
        let tmp46 = null != tmp41;
        if (tmp46) {
          const obj6 = { size: "sm", style: tmp4.channelIcon };
          tmp46 = closure_22(tmp41, obj6);
        }
        cResult[29] = tmp41;
        cResult[30] = tmp4.channelIcon;
        cResult[31] = tmp46;
      }
    }
    const tmpResult8 = channel_id(9293);
    const eventLocationIconComponent = tmpResult8.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
    cResult[25] = stateFromStores;
    cResult[26] = event;
    cResult[27] = stateFromStores1;
    cResult[28] = eventLocationIconComponent;
    tmp41 = eventLocationIconComponent;
  } else {
    tmp35 = null;
  }
  cResult[9] = stateFromStores;
  cResult[10] = tmp20;
  cResult[11] = event;
  cResult[12] = guild_id;
  cResult[13] = stateFromStores1;
  cResult[14] = tmp4;
  cResult[15] = tmp40;
  cResult[16] = tmp43;
  cResult[17] = str2;
  cResult[18] = tmp38;
  cResult[19] = tmp44;
  cResult[20] = tmp36;
  cResult[21] = tmp35;
  cResult[22] = tmp34;
  cResult[23] = tmp33;
  cResult[24] = str;
  tmp30 = str;
  tmp29 = tmp33;
  tmp28 = tmp34;
  tmp27 = tmp35;
  tmp26 = tmp36;
  tmp25 = tmp44;
  tmp24 = tmp38;
  tmp23 = str2;
  tmp22 = tmp43;
  tmp21 = tmp40;
}) : (function GuildEventSimpleLocation(event) {
  let combined;
  let items4;
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  const items = [ChannelStore];
  const items1 = [channel_id];
  const obj = channel_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [stateFromStores];
  const obj2 = channel_id(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild_id;
    const id = AuthenticationStore.getId();
    const isMember = GuildMemberStore.isMember;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return isMember(guild_id, id);
  }, items3);
  let tmp7 = stateFromStores(5049)(stateFromStores);
  const obj3 = channel_id(9215);
  const locationFromEvent = obj3.getLocationFromEvent(event);
  const tmp6 = stateFromStores;
  if (null == stateFromStores) {
    if (null == locationFromEvent) {
      return null;
    }
  }
  const tmp2Result = channel_id(9293);
  const eventLocationIconComponent = tmp2Result.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
  let tmp12 = null != eventLocationIconComponent;
  const obj4 = { style: tmp.channelContainer, children: items4 };
  if (tmp12) {
    const obj5 = { size: "sm", style: tmp.channelIcon };
    tmp12 = closure_22(eventLocationIconComponent, obj5);
  }
  items4 = [tmp12, ];
  const obj6 = { style: tmp.channelText, accessibilityLabel: combined, variant: "text-sm/medium", color: "text-default", children: tmp7 };
  const Text = tmp2(4892).Text;
  if (null != stateFromStores) {
    const obj7 = { channel: stateFromStores };
    combined = tmp6(9295)(obj7);
  } else if (null != locationFromEvent) {
    const intl = tmp2(1126).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp2(1126).t.gwSn4I) + ", " + locationFromEvent;
  }
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      const obj8 = { guildId: guild_id };
      const tmp2Result2 = channel_id(9294);
      result = tmp2Result2.guildEventLocationParser(locationFromEvent, true, obj8);
    }
    tmp7 = result;
  }
  items4[1] = closure_22(Text, obj6);
  return closure_23(closure_6, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardSimpleGuildInfo(event) {
  let first;
  let guild_id;
  let items2;
  let style;
  let textStyle;
  let tmp7;
  let tmp8;
  const obj = guild_id(576);
  const cResult = obj.c(20);
  ({ style, textStyle } = event);
  event = event.event;
  const tmp4 = styles();
  guild_id = event.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function l() {
      return GuildStore.getGuild(guild_id);
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = guild_id(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let tmp10 = null;
  if (null != stateFromStores) {
    if (cResult[4] === style) {
      let tmp11;
      if (cResult[5] === tmp4.guildInfoContainer) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === stateFromStores) {
        let tmp12;
        if (cResult[8] === tmp4.guildIcon) {
          tmp12 = cResult[9];
        }
        if (cResult[10] === stateFromStores.name) {
          let tmp17;
          if (cResult[11] === textStyle) {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp4.guildInfo) {
            let tmp20;
            if (cResult[14] === tmp17) {
              tmp20 = cResult[15];
            }
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp12) {
                let tmp24;
                if (cResult[18] === tmp20) {
                  tmp24 = cResult[19];
                }
                tmp10 = tmp24;
              }
            }
            const obj2 = { style: tmp11, children: items2 };
            items2 = [tmp12, tmp20];
            const tmp27 = closure_23(closure_6, obj2);
            cResult[16] = tmp11;
            cResult[17] = tmp12;
            cResult[18] = tmp20;
            cResult[19] = tmp27;
            tmp24 = tmp27;
          }
          const obj3 = { style: tmp4.guildInfo, children: tmp17 };
          const tmp23 = closure_22(closure_6, obj3);
          cResult[13] = tmp4.guildInfo;
          cResult[14] = tmp17;
          cResult[15] = tmp23;
          tmp20 = tmp23;
        }
        const obj4 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
        const tmp19 = closure_22(guild_id(4892).Text, obj4);
        cResult[10] = stateFromStores.name;
        cResult[11] = textStyle;
        cResult[12] = tmp19;
        tmp17 = tmp19;
      }
      const obj5 = { guild: stateFromStores, size: guild_id(5978).GuildIconSizes.XSMALL_20, style: tmp4.guildIcon };
      const tmp15 = GuildIconDefault;
      const tmp16 = closure_22(tmp15, obj5);
      cResult[7] = stateFromStores;
      cResult[8] = tmp4.guildIcon;
      cResult[9] = tmp16;
      tmp12 = tmp16;
    }
    const items3 = [tmp4.guildInfoContainer, style];
    cResult[4] = style;
    cResult[5] = tmp4.guildInfoContainer;
    cResult[6] = items3;
    tmp11 = items3;
  }
  return tmp10;
}) : (function GuildEventCardSimpleGuildInfo(arg0) {
  let event;
  let items2;
  let items3;
  let obj5;
  let style;
  let textStyle;
  ({ event, style, textStyle } = arg0);
  const tmp = styles();
  const guild_id = event.guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { style: items2, children: items3 };
    items2 = [tmp.guildInfoContainer, style];
    const obj3 = { guild: stateFromStores, size: guild_id(5978).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
    const tmp10 = GuildIconDefault;
    items3 = [closure_22(tmp10, obj3), ];
    const obj4 = { style: tmp.guildInfo, children: closure_22(guild_id(4892).Text, obj5) };
    obj5 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
    items3[1] = closure_22(closure_6, obj4);
    tmp5 = closure_23(closure_6, obj2);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp25 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEventCardGuildInfo(event) {
  let channel_id;
  let first;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp7;
  let tmp8;
  const obj = channel_id(stateFromStores[18]);
  const cResult = obj.c(46);
  event = event.event;
  styles();
  channel_id = event.channel_id;
  let guild_id = event.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel_id) {
    const fn = function l() {
      return ChannelStore.getChannel(channel_id);
    };
    const items1 = [channel_id];
    cResult[1] = channel_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = channel_id(stateFromStores[28]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guild_id) {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
    const items3 = [guild_id];
    cResult[5] = guild_id;
    cResult[6] = C;
    cResult[7] = items3;
    tmp13 = items3;
  } else {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
    tmp13 = cResult[7];
  }
  const tmpResult4 = channel_id(stateFromStores[28]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, C, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
    const items4 = [GuildMemberStore, AuthenticationStore];
    cResult[8] = items4;
    tmp15 = items4;
  } else {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
  }
  const tmp17 = cResult[9];
  if (stateFromStores != null) {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
  }
  if (tmp17 !== undefined) {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
    if (stateFromStores != null) {
      class C {
        constructor() {
          return GuildStore.getGuild(guild_id);
        }
      }
    }
    const fn2 = function x() {
      guild_id = undefined;
      const id = AuthenticationStore.getId();
      const isMember = GuildMemberStore.isMember;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return isMember(guild_id, id);
    };
    cResult[9] = tmp19;
    cResult[10] = fn2;
    tmp18 = fn2;
  } else {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
  }
  if (cResult[11] !== stateFromStores) {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
    tmp21[0] = stateFromStores;
    cResult[11] = stateFromStores;
    cResult[12] = tmp21;
  } else {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
  }
  const tmpResult5 = channel_id(stateFromStores[28]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp18, tmp21);
  const tmp23 = guild_id(stateFromStores[58])(stateFromStores);
  if (null == stateFromStores1) {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
  } else {
    class C {
      constructor() {
        return GuildStore.getGuild(guild_id);
      }
    }
    const tmpResult6 = channel_id(stateFromStores[59]);
    const locationFromEvent = tmpResult6.getLocationFromEvent(event);
    let tmp29 = tmp23;
    if (tmp23 == null) {
      let result;
      class C {
        constructor() {
          return GuildStore.getGuild(guild_id);
        }
      }
      if (null != locationFromEvent) {
        class C {
          constructor() {
            return GuildStore.getGuild(guild_id);
          }
        }
        const obj2 = { guildId: guild_id };
        result = obj6.guildEventLocationParser(locationFromEvent, true, obj2);
      }
      tmp29 = result;
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp23;
    cResult[15] = event;
    cResult[16] = guild_id;
    cResult[17] = locationFromEvent;
    cResult[18] = null != stateFromStores || null != locationFromEvent;
    cResult[19] = tmp29;
  }
}) : (function GuildEventCardGuildInfo(event) {
  let combined;
  let items6;
  let items7;
  let items8;
  event = event.event;
  let stateFromStores;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  const items = [ChannelStore];
  const items1 = [channel_id];
  const obj = channel_id(stateFromStores[28]);
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const items2 = [GuildStore];
  const items3 = [guild_id];
  const obj2 = channel_id(stateFromStores[28]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(guild_id), items3);
  const items4 = [GuildMemberStore, AuthenticationStore];
  const items5 = [stateFromStores];
  const obj3 = channel_id(stateFromStores[28]);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => {
    guild_id = undefined;
    const id = AuthenticationStore.getId();
    const isMember = GuildMemberStore.isMember;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return isMember(guild_id, id);
  }, items5);
  const tmp8 = guild_id(stateFromStores[58])(stateFromStores);
  if (null == stateFromStores1) {
    return null;
  } else {
    const tmp2Result = channel_id(stateFromStores[59]);
    const locationFromEvent = tmp2Result.getLocationFromEvent(event);
    let tmp13Result = null != stateFromStores || null != locationFromEvent;
    let tmp10 = tmp8;
    if (tmp8 == null) {
      let result = null;
      if (null != locationFromEvent) {
        const obj4 = { guildId: guild_id };
        const tmp2Result3 = channel_id(stateFromStores[57]);
        result = tmp2Result3.guildEventLocationParser(locationFromEvent, true, obj4);
      }
      tmp10 = result;
    }
    const tmp2Result4 = channel_id(stateFromStores[60]);
    const eventLocationIconSource = tmp2Result4.getEventLocationIconSource(event, stateFromStores, stateFromStores2);
    const obj5 = { style: tmp.guildInfoContainer, children: items6 };
    const obj6 = { guild: stateFromStores1, size: channel_id(stateFromStores[62]).GuildIconSizes.SMALL, style: tmp.guildIcon };
    const tmp7Result = guild_id(stateFromStores[62]);
    items6 = [closure_22(tmp7Result, obj6), ];
    const obj7 = { style: tmp.guildInfo, children: items7 };
    const obj8 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    items7 = [closure_22(channel_id(stateFromStores[55]).Text, obj8), ];
    if (tmp13Result) {
      const obj9 = { style: tmp.guildInfoChannelContainer, accessible: true, accessibilityLabel: combined, children: items8 };
      if (null != stateFromStores) {
        const obj10 = { channel: stateFromStores };
        combined = tmp7(tmp3[61])(obj10);
      } else if (null != locationFromEvent) {
        const intl = tmp2(tmp3[24]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp2(tmp3[24]).t.gwSn4I) + ", " + locationFromEvent;
      }
      let tmp15Result = null != eventLocationIconSource;
      if (tmp15Result) {
        const obj11 = { source: eventLocationIconSource, size: channel_id(stateFromStores[48]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon, disableColor: true };
        const Icon = tmp2(tmp3[48]).Icon;
        tmp15Result = closure_22(Icon, obj11);
      }
      items8 = [tmp15Result, ];
      const obj12 = { style: tmp.guildInfoChannelText, variant: "text-xs/medium", color: "text-default", children: tmp10 };
      items8[1] = closure_22(channel_id(stateFromStores[55]).Text, obj12);
      tmp13Result = closure_23(closure_6, obj9);
    }
    items7[1] = tmp13Result;
    items6[1] = closure_23(closure_6, obj7);
    return closure_23(closure_6, obj5);
  }
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx");

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = tmp10;
export const GuildEventModeratorAction = tmp11;
export const useEventRsvpState = tmp12;
export const GuildEventIndicateInterestAction = tmp13;
export const PrimaryActionType = obj14;
export const usePrimaryActionButtonType = tmp14;
export const GuildEventCardRSVPAction = tmp15;
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = memoResult;
export const GuildEventCardImageHeader = tmp17;
export const UserCountIconPill = tmp18;
export const GuildEventCardHeader = tmp19;
export const GuildEventCardTitle = tmp20;
export const GuildEventCardDescription = tmp21;
export const GuildEventCardMetaInfo = tmp22;
export const GuildEventSimpleLocation = tmp23;
export const GuildEventCardSimpleGuildInfo = tmp24;
export const GuildEventCardGuildInfo = tmp25;