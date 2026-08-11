// discord_app/modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import getRRule from "getRRule";
import importAllResult from "IconButton";
import get_ActivityIndicator from "canEveryoneRoleViewEvent";
import fetchFingerprint from "fetchFingerprint";
import closure_10 from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import scheduledEventSort from "scheduledEventSort";
import closure_17 from "scheduledEventSort";
import { GuildScheduledEventEntityTypes as closure_18 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";
import sum from "sum";
import jsxProd from "openCreateOrEditGuildEventModal";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { GuildIconSizes } from "../../../guild/native/GuildIcon.tsx";
import { useWindowDimensions } from "../../../screen/useWindowDimensions.native.tsx";
import { canEveryoneRoleViewEvent } from "../../useCanInviteForGuildEvent.tsx";
import { useEventException } from "../../useEventException.tsx";
import { ThrottledButton } from "ThrottledButton.tsx";

let Fonts;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function usePrimaryActionButtonType(event, isConnected) {
  let channel_id;
  let importDefault;
  const _require = event;
  ({ guild_id: importDefault, channel_id } = event);
  const scheduled_start_time = event.scheduled_start_time;
  const items = [scheduled_start_time];
  const items1 = [createGuildRecordFromRust];
  const stateFromStores = _require(channel_id[26]).useStateFromStores(items1, () => outer1_12.getGuild(closure_1));
  const obj = _require(channel_id[26]);
  const tmp = _require;
  const tmp2 = channel_id;
  const tmp3 = createGuildRecordFromRust;
  const items2 = [closure_10];
  const items3 = [channel_id];
  let stateFromStores1 = _require(channel_id[26]).useStateFromStores(items2, () => outer1_10.getChannel(channel_id), items3);
  const obj2 = _require(channel_id[26]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEventResult = _require(channel_id[27]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const obj3 = _require(channel_id[27]);
  const items4 = [tmp3];
  if (tmpResult.useStateFromStores(items4, () => null != outer1_12.getGuild(event.guild_id))) {
    if (callback2(event)) {
      let RSVP = obj12.ENDED;
    } else if (callback3(event)) {
      if (event.entity_type !== constants.EXTERNAL) {
        if (!isConnected) {
          const JOIN = tmp14.JOIN;
        }
      }
    } else {
      if (importAllResult.useMemo(() => event(channel_id[32]).getEventTimeData(scheduled_start_time), items).withinStartWindow) {
        if (canManageGuildEventResult) {
          RSVP = obj12.START;
        }
      }
      RSVP = obj12.RSVP;
    }
  } else {
    return obj12.JOIN_GUILD;
  }
}
class GuildEventCardRSVPAction {
  constructor(arg0) {
    ({ event, recurrenceId } = global);
    tmp = event;
    tmp2 = closure_2;
    obj = require("initialize");
    items = [];
    items[0] = Pressable;
    items1 = [, ];
    items1[0] = event.id;
    items1[1] = recurrenceId;
    items2 = [, ];
    items2[0] = obj.useStateFromStores(items, () => outer1_17.isInterestedInEventRecurrence(event.id, c1), items1);
    items2[1] = () => {
      const result = event(outer1_2[21]).handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    };
    tmp3 = getRRule(items2, 2);
    first = tmp3[0];
    str = "secondary";
    if (first) {
      str = "tertiary";
    }
    if (first) {
      BellIcon = require("CheckmarkLargeIcon").CheckmarkLargeIcon;
    } else {
      BellIcon = require("BellIcon").BellIcon;
    }
    obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: null, variant: null, icon: null, text: null, onPress: null, grow: true };
    tmp5 = require("ThrottledButton");
    intl = require("getSystemLocale").intl;
    obj[2] = "" + intl.string(require("getSystemLocale").t.DlcqlU) + ", " + event.name;
    obj[3] = str;
    obj[4] = jsx(BellIcon, { size: "sm" });
    intl2 = require("getSystemLocale").intl;
    obj[5] = intl2.string(require("getSystemLocale").t.DlcqlU);
    obj[6] = tmp3[1];
    return jsx(tmp5, obj);
  }
}
class GuildEventJoinAndRSVPAction {
  constructor(arg0) {
    event = global.event;
    recurrenceId = global.recurrenceId;
    recurrenceId = undefined;
    f82271 = undefined;
    useState = undefined;
    _handleJoinGuild = function _handleJoinGuild(closure_5, arg1) {
      const self = this;
      const tmp = callback(function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                const guild_id = tmp3;
                v02(true);
                v02 = 1;
                let obj1 = v0(outer1_2[33]);
                obj1 = { source: null };
                obj1[0] = outer1_20.DIRECTORY_EVENTS;
                v0 = 2;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.joinGuild(outer1_0.guild_id, obj1);
                return obj2;
              }
            } else if (1 === tmp7) {
              v02 = 0;
              v02(false);
              throw callback;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 0;
              v02(false);
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              outer1_0(outer1_2[34]).transitionToGuild(guild_id.guild_id);
              let tmp11 = v0;
              if (!v0) {
                tmp11 = outer1_16(outer1_0);
              }
              if (!tmp11) {
                callback();
              }
              v02 = 0;
              v02(false);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp32) {
            callback = tmp32;
            if (tmp4 === v02) {
              c4 = tmp2;
              throw tmp32;
            } else {
              v0 = tmp;
            }
          }
        }
      });
      const _handleJoinGuild = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj = require("initialize");
    items = [];
    items[0] = Pressable;
    items1 = [, ];
    items1[0] = event.id;
    items1[1] = recurrenceId;
    items2 = [, ];
    items2[0] = obj.useStateFromStores(items, () => outer1_17.isInterestedInEventRecurrence(event.id, c1), items1);
    items2[1] = () => {
      const result = event(outer1_2[21]).handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    };
    tmp = _handleJoinGuild(items2, 2);
    [recurrenceId, f82271] = tmp;
    tmp2 = _handleJoinGuild(closure_5.useState(false), 2);
    useState = tmp2[1];
    obj = { loading: tmp2[0], variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
    tmp3 = require("ThrottledButton");
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t.VJlc0S);
    intl2 = require("getSystemLocale").intl;
    obj[3] = "" + intl2.string(require("getSystemLocale").t.VJlc0S) + ", " + event.name;
    obj[4] = function handleJoinGuild() {
      const self = this;
      const apply = _handleJoinGuild.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return jsx(tmp3, obj);
  }
}
class UserCountIconPill {
  constructor(arg0) {
    event = global.event;
    tmp = closure_2;
    guild_id = undefined;
    tmp2 = require("useGuildScheduledEventUserCount");
    if (event != null) {
      guild_id = event.guild_id;
    }
    id = undefined;
    if (event != null) {
      id = event.id;
    }
    tmp2Result = tmp2(guild_id, id, global.recurrenceId);
    obj = { accessibilityLabel: null, IconComponent: null, text: null };
    intl = require("getSystemLocale").intl;
    obj[0] = "" + intl.formatToPlainString(require("getSystemLocale").t["+DLsD8"], { count: tmp2Result }) + ", " + event.name;
    obj[1] = require("GroupIcon").GroupIcon;
    obj[2] = tmp2Result.toLocaleString();
    return jsx(require("Button").IconPill, obj);
  }
}
class GuildEventCardTitle {
  constructor(arg0) {
    event = global.event;
    ({ style, textStyle, condensed, onPress } = global);
    tmp2 = jsx;
    obj = { accessibilityRole: "button", accessibilityHint: null, accessibilityLabel: null, onPress: null, style: null, children: null };
    tmp = defineProperty();
    tmp3 = Pressable;
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t.epxpiy);
    obj[2] = event.name;
    obj[3] = onPress;
    items = [, ];
    items[0] = tmp.topicContainer;
    items[1] = style;
    obj[4] = items;
    obj = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: textStyle, lineClamp: null, children: null };
    num = undefined;
    if (condensed) {
      num = 1;
    }
    obj[3] = num;
    obj[4] = event.name;
    obj[5] = tmp2(require("Text").Text, obj);
    return tmp2(tmp3, obj);
  }
}
class GuildEventCardDescription {
  constructor(arg0) {
    event = global.event;
    description = event.description;
    ({ style, textStyle, numberOfLines, condensed } = global);
    tmp2 = null;
    if (null != description) {
      num = 0;
      tmp2 = null;
      if (description.length > 0) {
        tmp2 = null;
        if (!condensed) {
          tmp2 = null;
          if (null != description) {
            tmp3 = jsx;
            tmp4 = View;
            obj = { style: null, children: null };
            items = [, ];
            items[0] = tmp.detailsContainer;
            items[1] = style;
            obj[0] = items;
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = { variant: "text-md/medium", color: "text-subtle", style: null, lineClamp: null, children: null };
            obj[2] = textStyle;
            obj[3] = numberOfLines;
            obj3 = require("guildEventDetailsParser");
            obj1 = { guildId: null, allowLinks: true, allowHeading: true, allowList: true };
            obj1[0] = event.guild_id;
            flag = true;
            obj[4] = obj3.guildEventDetailsParser(description, true, obj1);
            obj[1] = jsx(require("Text").Text, obj);
            tmp2 = jsx(View, obj);
          }
        }
      }
    }
    return tmp2;
  }
}
let c5 = importAllResult;
({ View: closure_6, Image: error, Pressable: metroImportAll } = get_ActivityIndicator);
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = scheduledEventSort);
({ Permissions: closure_19, JoinGuildSources: closure_20 } = ME);
({ Fonts, NOOP: closure_21 } = sum);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
let obj = { imageHeaderContainer: null, imageHeaderBanner: null, headerContainer: null, dateContainer: null, dateIcon: null, newBadge: null, topicContainer: null, detailsContainer: null, channelContainer: null, channelIcon: null, channelText: null, guildInfoContainer: null, guildIcon: null, guildInfo: null, guildInfoChannelContainer: null, guildInfoChannelText: null, creatorAvatar: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj[0] = obj;
obj[1] = { width: "100%", aspectRatio: 2.5 };
obj[2] = { flexDirection: "row", alignItems: "center" };
obj[3] = { flexDirection: "row", alignItems: "center", flex: 1 };
createCacheKey = { marginRight: require("Themes").space.PX_8 };
obj[4] = createCacheKey;
obj[5] = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj2 = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
obj[6] = { paddingTop: require("Themes").space.PX_8 };
let obj3 = { paddingTop: require("Themes").space.PX_8 };
obj[7] = { paddingTop: require("Themes").space.PX_8 };
let obj4 = { paddingTop: require("Themes").space.PX_8 };
obj[8] = { flexDirection: "row", alignItems: "center", paddingTop: require("Themes").space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", paddingTop: require("Themes").space.PX_8 };
obj[9] = { marginRight: require("Themes").space.PX_8 };
let obj6 = { marginRight: require("Themes").space.PX_8 };
obj[10] = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
let obj7 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
obj[11] = { flexDirection: "row", alignItems: "center", paddingTop: require("Themes").space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", paddingTop: require("Themes").space.PX_8 };
obj[12] = { marginRight: require("Themes").space.PX_8, borderRadius: require("Themes").radii.sm };
obj[13] = { flexDirection: "column" };
obj[14] = { flexDirection: "row", alignItems: "center" };
let obj9 = { marginRight: require("Themes").space.PX_8, borderRadius: require("Themes").radii.sm };
obj[15] = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
let obj10 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj[16] = { marginRight: require("Themes").space.PX_8 };
const styles = createCacheKey.createStyles(obj);
let obj12 = { RSVP: 0, [0]: "RSVP", JOIN: 1, [1]: "JOIN", START: 2, [2]: "START", STARTED: 3, [3]: "STARTED", CONNECTED: 4, [4]: "CONNECTED", END: 5, [5]: "END", ENDED: 6, [6]: "ENDED", JOIN_GUILD: 7, [7]: "JOIN_GUILD" };
let obj11 = { marginRight: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo(function GuildEventCardPrimaryAction(event) {
  let c3;
  let channel_id;
  let importDefault;
  let recurrenceId;
  event = event.event;
  ({ onCloseAction: importDefault, recurrenceId } = event);
  c3 = undefined;
  channel_id = undefined;
  let closure_5;
  let closure_6;
  ({ guild_id: c3, channel_id } = event);
  let obj = event(recurrenceId[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  closure_5 = obj.useStateFromStores(items, () => outer1_10.getChannel(channel_id), items1);
  closure_6 = channel_id(importDefault(recurrenceId[35])(), 2)[1];
  const tmp4 = usePrimaryActionButtonType(event, event.isConnected);
  let obj1 = event(recurrenceId[26]);
  const items2 = [getUncachedChannelPermissions];
  const stateFromStores = obj1.useStateFromStores(items2, () => outer1_13.can(outer1_19.CONNECT, closure_5));
  if (obj12.ENDED === tmp4) {
    obj = { variant: "secondary", text: null, accessibilityLabel: null, grow: true, disabled: true, onPress: null };
    let tmp3Result = tmp3(tmp2[31]);
    const intl10 = tmp(tmp2[20]).intl;
    obj[1] = intl10.string(tmp(tmp2[20]).t.Pj7Xrv);
    const intl11 = tmp(tmp2[20]).intl;
    const _HermesInternal6 = HermesInternal;
    obj[2] = "" + intl11.string(tmp(tmp2[20]).t.Pj7Xrv) + ", " + event.name;
    obj[5] = closure_21;
    return callback4(tmp3Result, obj);
  } else {
    function handleListenIn() {
      if (null != closure_5) {
        if (event.entity_type === outer1_18.STAGE_INSTANCE) {
          callback2(c3, tmp.id);
        }
        event(recurrenceId[39]).openGuildVoiceModal(tmp);
        if (callback != null) {
          callback();
        }
        const obj = event(recurrenceId[39]);
      }
    }
    if (tmp6.JOIN === tmp4) {
      const intl9 = tmp(tmp2[20]).intl;
      const string = intl9.string;
      const t = tmp(tmp2[20]).t;
      if (stateFromStores) {
        let stringResult = string(t.ZYO5OK);
      } else {
        stringResult = string(t.TVBCKZ);
      }
      obj = { variant: "active", text: null, accessibilityLabel: null, onPress: null, disabled: null, grow: true };
      obj[1] = stringResult;
      const _HermesInternal5 = HermesInternal;
      tmp3Result = tmp3(tmp2[31]);
      obj[2] = "" + stringResult + ", " + event.name;
      obj[3] = handleListenIn;
      obj[4] = !stateFromStores;
      return callback4(tmp3Result, obj);
    } else if (tmp6.CONNECTED === tmp4) {
      obj1 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
      const intl7 = tmp(tmp2[20]).intl;
      obj1[1] = intl7.string(tmp(tmp2[20]).t.aW2YlJ);
      const intl8 = tmp(tmp2[20]).intl;
      const _HermesInternal4 = HermesInternal;
      obj1[2] = "" + intl8.string(tmp(tmp2[20]).t.aW2YlJ) + ", " + event.name;
      obj1[3] = handleListenIn;
      return callback4(tmp3(tmp2[31]), obj1);
    } else if (tmp6.RSVP === tmp4) {
      const obj2 = { event: null, recurrenceId: null };
      obj2[0] = event;
      obj2[1] = recurrenceId;
      return callback4(GuildEventCardRSVPAction, obj2);
    } else if (tmp6.START === tmp4) {
      const obj3 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
      const intl5 = tmp(tmp2[20]).intl;
      obj3[1] = intl5.string(tmp(tmp2[20]).t.cK1GGY);
      const intl6 = tmp(tmp2[20]).intl;
      const _HermesInternal3 = HermesInternal;
      obj3[2] = "" + intl6.string(tmp(tmp2[20]).t.cK1GGY) + ", " + event.name;
      obj3[3] = function handleStartEvent() {
        if (closure_1 != null) {
          tmp();
        }
        const result = event(recurrenceId[21]).openStartGuildEventModal(event, recurrenceId);
      };
      return callback4(tmp3(tmp2[31]), obj3);
    } else if (tmp6.STARTED === tmp4) {
      const obj4 = { variant: "secondary", text: null, accessibilityLabel: null, grow: true, disabled: true, onPress: null };
      let intl3 = tmp(tmp2[20]).intl;
      obj4[1] = intl3.string(tmp(tmp2[20]).t.Yz0V6O);
      let intl4 = tmp(tmp2[20]).intl;
      const _HermesInternal2 = HermesInternal;
      obj4[2] = "" + intl4.string(tmp(tmp2[20]).t.Yz0V6O) + ", " + event.name;
      obj4[5] = closure_21;
      return callback4(tmp3(tmp2[31]), obj4);
    } else if (tmp6.END === tmp4) {
      const obj5 = { variant: "secondary", text: null, accessibilityLabel: null, onPress: null, grow: true };
      let intl = tmp(tmp2[20]).intl;
      obj5[1] = intl.string(tmp(tmp2[20]).t.qaYzPA);
      let intl2 = tmp(tmp2[20]).intl;
      const _HermesInternal = HermesInternal;
      obj5[2] = "" + intl2.string(tmp(tmp2[20]).t.qaYzPA) + ", " + event.name;
      obj5[3] = function handleEndEvent() {
        let obj = outer1_1(recurrenceId[36]);
        obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
        const intl = event(recurrenceId[20]).intl;
        obj[0] = intl.string(event(recurrenceId[20]).t.qaYzPA);
        const intl2 = event(recurrenceId[20]).intl;
        obj[1] = intl2.string(event(recurrenceId[20]).t.bnDQ7E);
        const intl3 = event(recurrenceId[20]).intl;
        obj[2] = intl3.string(event(recurrenceId[20]).t.gm1Vej);
        const intl4 = event(recurrenceId[20]).intl;
        obj[3] = intl4.string(event(recurrenceId[20]).t.p89ACt);
        obj[4] = function onConfirm() {
          return outer1_1(outer1_2[37]).endEvent(closure_0.id, closure_0.guild_id);
        };
        obj[5] = outer1_1(recurrenceId[38]).Colors.RED;
        obj.show(obj);
      };
      return callback4(tmp3(tmp2[31]), obj5);
    } else if (tmp6.JOIN_GUILD === tmp4) {
      const obj6 = { event: null, recurrenceId: null };
      obj6[0] = event;
      obj6[1] = recurrenceId;
      return callback4(GuildEventJoinAndRSVPAction, obj6);
    } else {
      tmp(tmp2[40]).assertNever(tmp4);
    }
  }
});
let result = require("noop").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx");

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = function GuildEventShareAction(event) {
  event = event.event;
  let importDefault;
  let dependencyMap;
  const tmp3 = canEveryoneRoleViewEvent(event);
  importDefault = tmp3;
  let obj = event(8966);
  obj = { guildId: event.guild_id, guildEventId: event.id };
  dependencyMap = obj.SHARE_EVENT_DETAILS_LINK(obj);
  obj = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
  const intl = event(1236).intl;
  obj[0] = "" + intl.string(event(1236).t.RDE0Sc) + ", " + event.name;
  obj[1] = function onPress() {
    if (c1) {
      let tmpResult = tmp(tmp2[21]);
      tmpResult.openShareEvent(event);
    } else {
      tmpResult = tmp(tmp2[22]);
      tmpResult.copy(table);
      event(table[23]).presentLinkCopied();
      const obj2 = event(table[23]);
    }
  };
  obj[2] = importDefault(tmp3 ? 9099 : 4248);
  return closure_22(event(7753).IconButton, obj);
};
export const GuildEventModeratorAction = function GuildEventModeratorAction(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  let channel_id;
  let ensureGuildLoaded;
  channel_id = event.channel_id;
  let obj = event(channel_id[26]);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.getGuild(event.guild_id));
  const items1 = [closure_10];
  const items2 = [channel_id];
  let stateFromStores1 = event(channel_id[26]).useStateFromStores(items1, () => outer1_10.getChannel(channel_id), items2);
  const obj2 = event(channel_id[26]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  ensureGuildLoaded = event(channel_id[27]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  obj = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
  const intl = tmp(tmp2[20]).intl;
  obj[0] = "" + intl.string(event(channel_id[20]).t.HIgA5a) + ", " + event.name;
  obj[1] = function onPress() {
    return event(channel_id[21]).showGuildEventModeratorActionSheet(event, ensureGuildLoaded, recurrenceId);
  };
  obj[2] = recurrenceId(channel_id[28]);
  return callback4(event(channel_id[19]).IconButton, obj);
};
export const useEventRsvpState = function useEventRsvpState(id) {
  const _require = id;
  let closure_1 = arg1;
  const items = [closure_17];
  const items1 = [id.id, arg1];
  const items2 = [
    _initialize.useStateFromStores(items, () => outer1_17.isInterestedInEventRecurrence(event.id, c1), items1),
    () => {
      const result = event(outer1_2[21]).handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    }
  ];
  return items2;
};
export const GuildEventIndicateInterestAction = function GuildEventIndicateInterestAction(event) {
  event = event.event;
  const importDefault = null;
  let obj = event(589);
  const items = [closure_17];
  const items1 = [event.id, null];
  const items2 = [
    obj.useStateFromStores(items, () => outer1_17.isInterestedInEventRecurrence(event.id, c1), items1),
    () => {
      const result = event(outer1_2[21]).handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    }
  ];
  const tmp3 = callback(items2, 2);
  const first = tmp3[0];
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    let BellIcon = tmp(4255).CheckmarkLargeIcon;
  } else {
    BellIcon = tmp(9142).BellIcon;
  }
  obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: null, variant: null, icon: null, text: null, onPress: null, grow: true };
  const intl = tmp(1236).intl;
  obj[2] = "" + intl.string(event(1236).t.DlcqlU) + ", " + event.name;
  obj[3] = str;
  obj[4] = callback4(BellIcon, { size: "sm" });
  const intl2 = tmp(1236).intl;
  obj[5] = intl2.string(event(1236).t.DlcqlU);
  obj[6] = tmp3[1];
  return callback4(ThrottledButton, obj);
};
export const PrimaryActionType = obj12;
export { usePrimaryActionButtonType };
export { GuildEventCardRSVPAction };
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = memoResult;
export const GuildEventCardImageHeader = function GuildEventCardImageHeader(event) {
  let c0;
  let tmp5;
  event = event.event;
  let _require;
  let tmp = styles();
  let width = useWindowDimensions().width;
  [tmp5, c0] = callback(importAllResult.useState(0), 2);
  if (null == event.image) {
    return null;
  } else {
    if (tmp5 > 0) {
      width = tmp5;
    }
    let obj = _getAvatarURL;
    obj = { style: null, onLayout: null, children: null };
    obj[0] = tmp.imageHeaderContainer;
    obj[1] = tmp6;
    obj = { style: null, source: null, resizeMode: "cover" };
    obj[0] = tmp.imageHeaderBanner;
    obj[1] = obj.makeSource(tmp2(9141)(event, width));
    obj[2] = callback4(closure_7, obj);
    return callback4(closure_6, obj);
  }
  tmp2 = importDefault;
  const tmp4 = callback(importAllResult.useState(0), 2);
};
export { UserCountIconPill };
export const GuildEventCardHeader = function GuildEventCardHeader(event) {
  let recurrenceId;
  let shouldChangeTextColor;
  let showUserCount;
  let text;
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
  let importDefault;
  let dependencyMap;
  let color;
  shouldChangeTextColor = undefined;
  const tmp = styles();
  let id;
  let tmp2 = importDefault;
  const tmp4 = useTheme();
  if (event != null) {
    id = event.id;
  }
  let obj = useEventException(recurrenceId, id);
  if (obj == null) {
    obj = {};
  }
  const is_canceled = obj.is_canceled;
  const tmp8 = tmp2(8954)(event, recurrenceId);
  let toISOStringResult;
  if (tmp8 != null) {
    const startTime = tmp8.startTime;
    toISOStringResult = startTime.toISOString();
  }
  importDefault = toISOStringResult;
  let tmp10;
  if (flag) {
    let toISOStringResult1;
    if (tmp8 != null) {
      const endTime = tmp8.endTime;
      if (endTime != null) {
        toISOStringResult1 = endTime.toISOString();
      }
    }
    tmp10 = toISOStringResult1;
  }
  dependencyMap = tmp10;
  const items = [toISOStringResult, tmp10];
  const memo = importAllResult.useMemo(() => event(_undefined[32]).getEventTimeData(c1, _undefined), items);
  let obj2 = event(9145);
  obj = { eventTimeData: memo, isStage: event.entity_type === constants.STAGE_INSTANCE, theme: tmp4, event, isCanceled: undefined !== is_canceled && is_canceled, recurrenceId };
  const guildScheduledEventHeaderProps = obj2.getGuildScheduledEventHeaderProps(obj);
  color = guildScheduledEventHeaderProps.color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  const endDateTimeString = memo.endDateTimeString;
  let tmp15 = null;
  if (showUserCount) {
    const obj1 = { event: null, recurrenceId: null };
    obj1[0] = event;
    obj1[1] = recurrenceId;
    const tmp18 = callback4(UserCountIconPill, obj1);
    let tmp16Result = tmp18;
    if (!flag2) {
      obj2 = { accessibilityRole: "button", onPress: null, children: null };
      obj2[1] = function handleOpenRSVPList() {

      };
      obj2[2] = tmp18;
      tmp16Result = tmp16(tmp13(4846).PressableOpacity, obj2);
    }
    tmp15 = tmp16Result;
    tmp16 = callback4;
  }
  const tmp5 = useEventException;
  const tmp7 = undefined !== is_canceled && is_canceled;
  const items1 = [mergeGuildAvatar];
  const items2 = [event];
  const stateFromStores = event(589).useStateFromStores(items1, () => outer1_14.getUser(event.creator_id), items2);
  let tmp21 = null != endDateTimeString;
  if (tmp21) {
    tmp21 = "" !== endDateTimeString;
  }
  let formatResult = text;
  if (tmp21) {
    const intl = tmp13(1236).intl;
    const obj3 = { start: null, startHook: null, end: null };
    obj3[0] = text;
    obj3[1] = function startHook(children) {
      let tmp2 = shouldChangeTextColor;
      if (shouldChangeTextColor) {
        let obj = { color: null };
        obj[0] = color;
        tmp2 = obj;
      }
      obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp2, children };
      return outer1_22(event(_undefined[52]).Text, obj);
    };
    obj3[2] = endDateTimeString;
    formatResult = intl.format(tmp13(1236).t.vHYgJW, obj3);
  }
  const obj4 = { style: items3, children: null };
  items3 = [tmp.headerContainer, event.style];
  if (flag4) {
    const obj5 = { containerStyle: null, variant: "text-xs/bold" };
    obj5[0] = tmp.newBadge;
    let tmp25Result = tmp25(tmp13(1297).NewTag, obj5);
    let tmp27 = tmp25;
  } else {
    const obj6 = { size: "sm", color: null, style: null };
    obj6[1] = color;
    obj6[2] = tmp.dateIcon;
    tmp25Result = tmp25(tmp13(9050).CalendarIcon, obj6);
    tmp27 = tmp25;
  }
  const items4 = [tmp25Result, , , ];
  const obj7 = { style: tmp.dateContainer, children: null };
  if (tmp21) {
    const obj8 = { variant: "text-sm/semibold", color: "text-default", children: null };
    obj8[2] = formatResult;
    let obj9 = obj8;
  } else {
    let str2 = "text-subtle";
    if (flag5) {
      str2 = "text-strong";
    }
    obj9 = { variant: "text-sm/semibold", color: null, style: null, children: null };
    obj9[1] = str2;
    if (shouldChangeTextColor) {
      const obj10 = { color: null };
      obj10[0] = color;
      shouldChangeTextColor = obj10;
    }
    obj9[2] = shouldChangeTextColor;
    obj9[3] = formatResult;
  }
  obj7[1] = tmp27(event(4299).Text, obj9);
  items4[1] = tmp27(closure_6, obj7);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    const obj11 = { accessible: true, accessibilityLabel: null, user: null, guildId: null, size: null, style: null };
    const intl2 = tmp13(1236).intl;
    const obj12 = { username: null };
    obj12[0] = stateFromStores.username;
    const _HermesInternal = HermesInternal;
    obj11[1] = "" + intl2.formatToPlainString(tmp13(1236).t["+3iypQ"], obj12) + ", " + event.name;
    obj11[2] = stateFromStores;
    obj11[3] = event.guild_id;
    obj11[4] = tmp13(1297).AvatarSizes.XSMALL_20;
    obj11[5] = tmp.creatorAvatar;
    flag3 = tmp27(tmp13(1297).Avatar, obj11);
  }
  items4[2] = flag3;
  items4[3] = tmp15;
  obj4[1] = items4;
  return closure_23(closure_6, obj4);
};
export { GuildEventCardTitle };
export { GuildEventCardDescription };
export const GuildEventCardMetaInfo = function GuildEventCardMetaInfo(textStyle) {
  let condensed;
  let descriptionContainerStyle;
  let descriptionStyle;
  let event;
  ({ event, condensed } = textStyle);
  let obj = { children: null };
  obj = { event, textStyle: textStyle.titleStyle, style: textStyle.titleContainerStyle, condensed, onPress: textStyle.onTitlePress };
  ({ descriptionStyle, descriptionContainerStyle } = textStyle);
  const items = [callback4(GuildEventCardTitle, obj), callback4(GuildEventCardDescription, { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 })];
  obj[0] = items;
  return callback5(closure_24, obj);
};
export const GuildEventSimpleLocation = function GuildEventSimpleLocation(event) {
  event = event.event;
  let channel_id;
  let stateFromStores;
  const tmp = styles();
  channel_id = event.channel_id;
  let obj = channel_id(589);
  const items = [closure_10];
  const items1 = [channel_id];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channel_id), items1);
  let obj1 = channel_id(589);
  const items2 = [trackCommunicationDisabled, fetchFingerprint];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guild_id;
    const id = outer1_9.getId();
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_11.isMember(guild_id, id);
  }, items3);
  let tmp7 = stateFromStores(4494)(stateFromStores);
  let obj2 = channel_id(8951);
  const locationFromEvent = obj2.getLocationFromEvent(event);
  if (null == stateFromStores) {
    if (null == locationFromEvent) {
      return null;
    }
  }
  let tmp2Result = tmp2(9038);
  const eventLocationIconComponent = tmp2Result.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
  obj = { style: tmp.channelContainer, children: null };
  let tmp12 = null != eventLocationIconComponent;
  if (tmp12) {
    obj = { size: "sm", style: null };
    obj[1] = tmp.channelIcon;
    tmp12 = callback4(eventLocationIconComponent, obj);
  }
  const items4 = [tmp12, ];
  obj1 = { style: tmp.channelText, accessibilityLabel: null, variant: "text-sm/medium", color: "text-default", children: null };
  if (null != stateFromStores) {
    obj2 = { channel: null };
    obj2[0] = stateFromStores;
    let combined = stateFromStores(9039)(obj2);
  } else if (null != locationFromEvent) {
    const intl = tmp2(1236).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp2(1236).t.gwSn4I) + ", " + locationFromEvent;
  }
  obj1[1] = combined;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      tmp2Result = tmp2(9040);
      const obj3 = { guildId: null };
      obj3[0] = event.guild_id;
      result = tmp2Result.guildEventLocationParser(locationFromEvent, true, obj3);
    }
    tmp7 = result;
  }
  obj1[4] = tmp7;
  items4[1] = callback4(channel_id(4299).Text, obj1);
  obj[1] = items4;
  return closure_23(closure_6, obj);
};
export const GuildEventCardSimpleGuildInfo = function GuildEventCardSimpleGuildInfo(arg0) {
  let event;
  let style;
  let textStyle;
  let guild_id;
  ({ event, style, textStyle } = arg0);
  const tmp = styles();
  guild_id = event.guild_id;
  let obj = guild_id(589);
  const items = [createGuildRecordFromRust];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.getGuild(guild_id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items2 = [tmp.guildInfoContainer, style];
    obj[0] = items2;
    obj = { guild: null, size: null, style: null };
    obj[0] = stateFromStores;
    obj[1] = tmp2(5779).GuildIconSizes.XSMALL_20;
    obj[2] = tmp.guildIcon;
    const items3 = [callback4(GuildIconSizes, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.guildInfo;
    const obj2 = { variant: "text-sm/semibold", style: null, children: null };
    obj2[1] = textStyle;
    obj2[2] = stateFromStores.name;
    obj1[1] = callback4(tmp2(4299).Text, obj2);
    items3[1] = callback4(closure_6, obj1);
    obj[1] = items3;
    tmp5 = callback5(closure_6, obj);
    const tmp10 = GuildIconSizes;
  }
  return tmp5;
};
export const GuildEventCardGuildInfo = function GuildEventCardGuildInfo(event) {
  event = event.event;
  let channel_id;
  let guild_id;
  let stateFromStores;
  const tmp = styles();
  channel_id = event.channel_id;
  guild_id = event.guild_id;
  let obj = channel_id(stateFromStores[26]);
  const items = [closure_10];
  const items1 = [channel_id];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channel_id), items1);
  let obj1 = channel_id(stateFromStores[26]);
  const items2 = [createGuildRecordFromRust];
  const items3 = [guild_id];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_12.getGuild(guild_id), items3);
  let obj2 = channel_id(stateFromStores[26]);
  const items4 = [trackCommunicationDisabled, fetchFingerprint];
  const items5 = [stateFromStores];
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    let guild_id;
    const id = outer1_9.getId();
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_11.isMember(guild_id, id);
  }, items5);
  const tmp8 = guild_id(stateFromStores[55])(stateFromStores);
  if (null == stateFromStores1) {
    return null;
  } else {
    let tmp2Result = tmp2(tmp3[56]);
    const locationFromEvent = tmp2Result.getLocationFromEvent(event);
    let tmp12Result = null != stateFromStores || null != locationFromEvent;
    let tmp10 = tmp8;
    if (tmp8 == null) {
      tmp10 = locationFromEvent;
    }
    tmp2Result = tmp2(tmp3[57]);
    const eventLocationIconSource = tmp2Result.getEventLocationIconSource(event, stateFromStores, stateFromStores2);
    obj = { style: null, children: null };
    obj[0] = tmp.guildInfoContainer;
    obj = { guild: null, size: null, style: null };
    obj[0] = stateFromStores1;
    obj[1] = tmp2(tmp3[59]).GuildIconSizes.SMALL;
    obj[2] = tmp.guildIcon;
    const items6 = [callback4(tmp7(tmp3[59]), obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.guildInfo;
    obj2 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: null };
    obj2[2] = stateFromStores1.name;
    const items7 = [callback4(tmp2(tmp3[52]).Text, obj2), ];
    if (tmp12Result) {
      const obj3 = { style: null, accessible: true, accessibilityLabel: null, children: null };
      obj3[0] = tmp.guildInfoChannelContainer;
      if (null != stateFromStores) {
        const obj4 = { channel: null };
        obj4[0] = stateFromStores;
        let combined = tmp7(tmp3[58])(obj4);
      } else if (null != locationFromEvent) {
        const intl = tmp2(tmp3[20]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp2(tmp3[20]).t.gwSn4I) + ", " + locationFromEvent;
      }
      obj3[2] = combined;
      let tmp14Result = null != eventLocationIconSource;
      if (tmp14Result) {
        const obj5 = { source: null, size: null, style: null, disableColor: true };
        obj5[0] = eventLocationIconSource;
        obj5[1] = tmp2(tmp3[45]).Icon.Sizes.EXTRA_SMALL;
        obj5[2] = tmp.channelIcon;
        tmp14Result = tmp14(tmp2(tmp3[45]).Icon, obj5);
      }
      const items8 = [tmp14Result, ];
      const obj6 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
      obj6[0] = tmp.guildInfoChannelText;
      obj6[3] = tmp10;
      items8[1] = tmp14(tmp2(tmp3[52]).Text, obj6);
      obj3[3] = items8;
      tmp12Result = tmp12(tmp13, obj3);
    }
    items7[1] = tmp12Result;
    obj1[1] = items7;
    items6[1] = closure_23(closure_6, obj1);
    obj[1] = items6;
    return closure_23(closure_6, obj);
  }
};