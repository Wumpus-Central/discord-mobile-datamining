// === Module 9772: GuildEventCardComponents ===

// Module 9772 (GuildEventCardComponents)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import Text_Text from "Text/Text" /* 4556 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4767 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import GroupIcon from "GroupIcon" /* 5089 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import ScheduleUtils from "ScheduleUtils" /* 9665 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9698 */;
import guildEventDetailsParser from "guildEventDetailsParser" /* 9771 */;
import useCanInviteForGuildEventDefault from "useCanInviteForGuildEvent" /* 9773 */;
import ThrottledButtonDefault from "ThrottledButton" /* 9777 */;
import useGuildScheduledEventUserCountDefault from "useGuildScheduledEventUserCount" /* 9780 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

const getGuildEventImageDefault = tmp2(9779);
require = fn;
function usePrimaryActionButtonType(event, isConnected) {
  _require = event;
  ({ guild_id: importDefault, channel_id } = event);
  const scheduled_start_time = event.scheduled_start_time;
  const items = [scheduled_start_time];
  const items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  const obj = require("initialize");
  const tmp3 = GuildStore;
  const items2 = [ChannelStore];
  const items3 = [channel_id];
  let stateFromStores1 = require("initialize").useStateFromStores(items2, () => ChannelStore.getChannel(channel_id), items3);
  const obj2 = require("initialize");
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEventResult = require("useManageResourcePermissions").useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const obj3 = require("useManageResourcePermissions");
  const items4 = [tmp3];
  if (tmpResult.useStateFromStores(items4, () => null != GuildStore.getGuild(event.guild_id))) {
    if (closure_15(event)) {
      let RSVP = obj12.ENDED;
    } else if (closure_16(event)) {
      if (event.entity_type !== constants.EXTERNAL) {
        if (!isConnected) {
          const JOIN = tmp14.JOIN;
        }
      }
    } else {
      if (noop.useMemo(() => ScheduleUtils.getEventTimeData(scheduled_start_time), items).withinStartWindow) {
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
    obj = event(closure_2[26]);
    items = [];
    items[0] = closure_17;
    items1 = [, ];
    items1[0] = event.id;
    items1[1] = recurrenceId;
    items2 = [, ];
    items2[0] = obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1);
    items2[1] = () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    };
    tmp3 = closure_4(items2, 2);
    first = tmp3[0];
    str = "secondary";
    if (first) {
      str = "tertiary";
    }
    if (first) {
      BellIcon = tmp(tmp2[29]).CheckmarkLargeIcon;
    } else {
      BellIcon = tmp(tmp2[30]).BellIcon;
    }
    obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: null, variant: null, icon: null, text: null, onPress: null, grow: true };
    tmp5 = recurrenceId(tmp2[31]);
    intl = tmp(tmp2[20]).intl;
    obj.accessibilityLabel = "" + intl.string(tmp(tmp2[20]).t.DlcqlU) + ", " + event.name;
    obj.variant = str;
    obj.icon = jsx(BellIcon, { size: "sm" });
    intl2 = tmp(tmp2[20]).intl;
    obj.text = intl2.string(tmp(tmp2[20]).t.DlcqlU);
    obj.onPress = tmp3[1];
    return jsx(tmp5, obj);
  }
}
class GuildEventJoinAndRSVPAction {
  constructor(arg0) {
    event = global.event;
    recurrenceId = global.recurrenceId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = async function _handleJoinGuild(items2, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (items2 === 1) {
          throw value;
        } else if (items2 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v2) {
            if (items2 === 1) {
              c4 = 3;
              throw value;
            } else if (items2 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              asyncGeneratorStep(true);
              c3 = 1;
              let obj1 = v2(tmp32[33]);
              obj1 = { source: constants.DIRECTORY_EVENTS };
              v2 = 2;
              c4 = 1;
              const obj2 = { value: obj1.joinGuild(guild_id.guild_id, obj1), done: false };
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_3(false);
            throw tmp32;
          } else if (items2 === 1) {
            c4 = 3;
            throw value;
          } else if (items2 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp3(tmp32[34]).transitionToGuild(closure_128_0.guild_id);
            let tmp11 = closure_128_1;
            if (!closure_128_1) {
              tmp11 = closure_1_16(closure_128_0);
            }
            if (!tmp11) {
              closure_128_2();
            }
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp32) {
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp32;
          } else {
            v2 = tmp;
          }
        }
      }
    };
    closure_129_0 = event;
    closure_129_1 = recurrenceId;
    obj = event(closure_2[26]);
    items = [];
    items[0] = closure_17;
    items1 = [, ];
    items1[0] = event.id;
    items1[1] = recurrenceId;
    items2 = [, ];
    items2[0] = obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1);
    items2[1] = () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    };
    tmp = closure_4(items2, 2);
    [closure_1, closure_2] = tmp;
    tmp2 = closure_4(closure_5.useState(false), 2);
    closure_3 = tmp2[1];
    obj = { loading: tmp2[0], variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
    tmp3 = closure_1(closure_2[31]);
    intl = event(closure_2[20]).intl;
    obj.text = intl.string(event(closure_2[20]).t.VJlc0S);
    intl2 = event(closure_2[20]).intl;
    obj.accessibilityLabel = "" + intl2.string(event(closure_2[20]).t.VJlc0S) + ", " + event.name;
    obj.onPress = function handleJoinGuild() {
      const self = this;
      const apply = closure_4.apply;
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
    tmp2 = closure_1(closure_2[44]);
    if (event != null) {
      guild_id = event.guild_id;
    }
    id = undefined;
    if (event != null) {
      id = event.id;
    }
    tmp2Result = tmp2(guild_id, id, global.recurrenceId);
    obj = { accessibilityLabel: null, IconComponent: null, text: null };
    intl = closure_0(tmp[20]).intl;
    obj.accessibilityLabel = "" + intl.formatToPlainString(closure_0(tmp[20]).t["+DLsD8"], { count: tmp2Result }) + ", " + event.name;
    obj.IconComponent = closure_0(tmp[46]).GroupIcon;
    obj.text = tmp2Result.toLocaleString();
    return jsx(closure_0(tmp[45]).IconPill, obj);
  }
}
class GuildEventCardTitle {
  constructor(arg0) {
    event = global.event;
    ({ style, textStyle, condensed, onPress } = global);
    tmp2 = jsx;
    obj = { accessibilityRole: "button", accessibilityHint: null, accessibilityLabel: null, onPress: null, style: null, children: null };
    tmp = closure_25();
    tmp3 = Pressable;
    intl = closure_0(closure_2[20]).intl;
    obj.accessibilityHint = intl.string(closure_0(closure_2[20]).t.epxpiy);
    obj.accessibilityLabel = event.name;
    obj.onPress = onPress;
    items = [, ];
    items[0] = tmp.topicContainer;
    items[1] = style;
    obj.style = items;
    obj = { variant: "text-md/bold", color: "mobile-text-heading-primary", style: textStyle, lineClamp: null, children: null };
    num = undefined;
    if (condensed) {
      num = 1;
    }
    obj.lineClamp = num;
    obj.children = event.name;
    obj.children = tmp2(closure_0(closure_2[52]).Text, obj);
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
            obj.style = items;
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = { variant: "text-md/medium", color: "text-subtle", style: null, lineClamp: null, children: null };
            obj.style = textStyle;
            obj.lineClamp = numberOfLines;
            obj3 = closure_0(closure_2[54]);
            obj1 = { guildId: null, allowLinks: true, allowHeading: true, allowList: true };
            obj1.guildId = event.guild_id;
            flag = true;
            obj.children = obj3.guildEventDetailsParser(description, true, obj1);
            obj.children = jsx(closure_0(closure_2[52]).Text, obj);
            tmp2 = jsx(View, obj);
          }
        }
      }
    }
    return tmp2;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
let GuildScheduledEventStore = fn(7526);
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = GuildScheduledEventStore);
const constants = fn(1963).GuildScheduledEventEntityTypes;
let Constants = fn(1074);
({ Permissions: closure_19, JoinGuildSources: closure_20 } = Constants);
Constants = fn(1085);
({ Fonts, NOOP: closure_21 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
fn(4560);
let obj = { imageHeaderContainer: null, imageHeaderBanner: null, headerContainer: null, dateContainer: null, dateIcon: null, newBadge: null, topicContainer: null, detailsContainer: null, channelContainer: null, channelIcon: null, channelText: null, guildInfoContainer: null, guildIcon: null, guildInfo: null, guildInfoChannelContainer: null, guildInfoChannelText: null, creatorAvatar: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.imageHeaderContainer = obj;
obj.imageHeaderBanner = { width: "100%", aspectRatio: 2.5 };
obj.headerContainer = { flexDirection: "row", alignItems: "center" };
obj.dateContainer = { flexDirection: "row", alignItems: "center", flex: 1 };
const createStyles = { marginRight: nativeDefault.space.PX_8 };
obj.dateIcon = createStyles;
obj.newBadge = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj2 = { paddingHorizontal: 4, paddingVertical: 2, marginEnd: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.topicContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.detailsContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj.channelContainer = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj.channelIcon = { marginRight: nativeDefault.space.PX_8 };
let obj6 = { marginRight: nativeDefault.space.PX_8 };
obj.channelText = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
let obj7 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, flexShrink: 1 };
obj.guildInfoContainer = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj.guildIcon = { marginRight: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj.guildInfo = { flexDirection: "column" };
obj.guildInfoChannelContainer = { flexDirection: "row", alignItems: "center" };
let obj9 = { marginRight: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj.guildInfoChannelText = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
let obj10 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj.creatorAvatar = { marginRight: nativeDefault.space.PX_8 };
const styles = createStyles.createStyles(obj);
let obj12 = { RSVP: 0, [0]: "RSVP", JOIN: 1, [1]: "JOIN", START: 2, [2]: "START", STARTED: 3, [3]: "STARTED", CONNECTED: 4, [4]: "CONNECTED", END: 5, [5]: "END", ENDED: 6, [6]: "ENDED", JOIN_GUILD: 7, [7]: "JOIN_GUILD" };
let obj11 = { marginRight: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx");

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = function GuildEventShareAction(event) {
  event = event.event;
  const tmp3 = useCanInviteForGuildEventDefault(event);
  importDefault = tmp3;
  event(9775);
  let obj = { guildId: event.guild_id, guildEventId: event.id };
  dependencyMap = obj.SHARE_EVENT_DETAILS_LINK(obj);
  obj = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
  const intl = event(1114).intl;
  obj.accessibilityLabel = "" + intl.string(event(1114).t.RDE0Sc) + ", " + event.name;
  obj.onPress = function onPress() {
    if (closure_1) {
      let tmpResult = tmp(9698);
      tmpResult.openShareEvent(event);
    } else {
      tmpResult = tmp(7190);
      tmpResult.copy(closure_2);
      ToastUtils.presentLinkCopied();
    }
  };
  obj.icon = importDefault(tmp3 ? 9054 : 4504);
  return closure_22(event(8097).IconButton, obj);
};
export const GuildEventModeratorAction = function GuildEventModeratorAction(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  closure_3 = undefined;
  const channel_id = event.channel_id;
  let obj = event(channel_id[26]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  const items1 = [ChannelStore];
  const items2 = [channel_id];
  let stateFromStores1 = event(channel_id[26]).useStateFromStores(items1, () => ChannelStore.getChannel(channel_id), items2);
  const obj2 = event(channel_id[26]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = event(channel_id[27]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  obj = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
  const intl = tmp(tmp2[20]).intl;
  obj.accessibilityLabel = "" + intl.string(event(channel_id[20]).t.HIgA5a) + ", " + event.name;
  obj.onPress = function onPress() {
    return GuildScheduledEventModalActionCreators.showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
  };
  obj.icon = recurrenceId(channel_id[28]);
  return closure_22(event(channel_id[19]).IconButton, obj);
};
export const useEventRsvpState = function useEventRsvpState(id, arg1) {
  _require = id;
  closure_1 = arg1;
  const items = [GuildScheduledEventStore];
  const items1 = [id.id, arg1];
  const items2 = [
    require("initialize").useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1),
    () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    }
  ];
  return items2;
};
export const GuildEventIndicateInterestAction = function GuildEventIndicateInterestAction(event) {
  event = event.event;
  importDefault = null;
  let obj = event(504);
  const items = [GuildScheduledEventStore];
  const items1 = [event.id, null];
  const items2 = [
    obj.useStateFromStores(items, () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1), items1),
    () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    }
  ];
  const tmp3 = _slicedToArray(items2, 2);
  const first = tmp3[0];
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    let BellIcon = tmp(4511).CheckmarkLargeIcon;
  } else {
    BellIcon = tmp(9776).BellIcon;
  }
  obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: first }, accessibilityLabel: null, variant: null, icon: null, text: null, onPress: null, grow: true };
  const intl = tmp(1114).intl;
  obj.accessibilityLabel = "" + intl.string(event(1114).t.DlcqlU) + ", " + event.name;
  obj.variant = str;
  obj.icon = closure_22(BellIcon, { size: "sm" });
  const intl2 = tmp(1114).intl;
  obj.text = intl2.string(event(1114).t.DlcqlU);
  obj.onPress = tmp3[1];
  return closure_22(ThrottledButtonDefault, obj);
};
export const PrimaryActionType = obj12;
export { usePrimaryActionButtonType };
export { GuildEventCardRSVPAction };
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = noop.memo(function GuildEventCardPrimaryAction(event) {
  event = event.event;
  ({ onCloseAction: importDefault, recurrenceId } = event);
  c3 = undefined;
  channel_id = undefined;
  ({ guild_id: c3, channel_id } = event);
  let obj = event(recurrenceId[26]);
  const items = [ChannelStore];
  const items1 = [channel_id];
  closure_5 = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  closure_6 = channel_id(require("useSelectStage")(), 2)[1];
  const tmp4 = usePrimaryActionButtonType(event, event.isConnected);
  let obj1 = event(recurrenceId[26]);
  const items2 = [PermissionStore];
  const stateFromStores = obj1.useStateFromStores(items2, () => PermissionStore.can(constants2.CONNECT, closure_5));
  if (obj12.ENDED === tmp4) {
    obj = { variant: "secondary", text: null, accessibilityLabel: null, grow: true, disabled: true, onPress: null };
    let tmp3Result = tmp3(tmp2[31]);
    const intl10 = tmp(tmp2[20]).intl;
    obj.text = intl10.string(tmp(tmp2[20]).t.Pj7Xrv);
    const intl11 = tmp(tmp2[20]).intl;
    const _HermesInternal6 = HermesInternal;
    obj.accessibilityLabel = "" + intl11.string(tmp(tmp2[20]).t.Pj7Xrv) + ", " + event.name;
    obj.onPress = onPress;
    return closure_22(tmp3Result, obj);
  } else {
    function handleListenIn() {
      if (null != closure_5) {
        if (event.entity_type === constants.STAGE_INSTANCE) {
          closure_6(c3, tmp.id);
        }
        PrivateChannelCallUtils.openGuildVoiceModal(tmp);
        if (importDefault != null) {
          importDefault();
        }
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
      obj = { variant: "active", text: stringResult, accessibilityLabel: null, onPress: null, disabled: null, grow: true };
      const _HermesInternal5 = HermesInternal;
      tmp3Result = tmp3(tmp2[31]);
      obj.accessibilityLabel = "" + stringResult + ", " + event.name;
      obj.onPress = handleListenIn;
      obj.disabled = !stateFromStores;
      return closure_22(tmp3Result, obj);
    } else if (tmp6.CONNECTED === tmp4) {
      obj1 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
      const intl7 = tmp(tmp2[20]).intl;
      obj1.text = intl7.string(tmp(tmp2[20]).t.aW2YlJ);
      const intl8 = tmp(tmp2[20]).intl;
      const _HermesInternal4 = HermesInternal;
      obj1.accessibilityLabel = "" + intl8.string(tmp(tmp2[20]).t.aW2YlJ) + ", " + event.name;
      obj1.onPress = handleListenIn;
      return closure_22(tmp3(tmp2[31]), obj1);
    } else if (tmp6.RSVP === tmp4) {
      const obj2 = { event, recurrenceId };
      return closure_22(GuildEventCardRSVPAction, obj2);
    } else if (tmp6.START === tmp4) {
      const obj3 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
      const intl5 = tmp(tmp2[20]).intl;
      obj3.text = intl5.string(tmp(tmp2[20]).t.cK1GGY);
      const intl6 = tmp(tmp2[20]).intl;
      const _HermesInternal3 = HermesInternal;
      obj3.accessibilityLabel = "" + intl6.string(tmp(tmp2[20]).t.cK1GGY) + ", " + event.name;
      obj3.onPress = function handleStartEvent() {
        if (importDefault != null) {
          tmp();
        }
        const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
      };
      return closure_22(tmp3(tmp2[31]), obj3);
    } else if (tmp6.STARTED === tmp4) {
      const obj4 = { variant: "secondary", text: null, accessibilityLabel: null, grow: true, disabled: true, onPress: null };
      let intl3 = tmp(tmp2[20]).intl;
      obj4.text = intl3.string(tmp(tmp2[20]).t.Yz0V6O);
      let intl4 = tmp(tmp2[20]).intl;
      const _HermesInternal2 = HermesInternal;
      obj4.accessibilityLabel = "" + intl4.string(tmp(tmp2[20]).t.Yz0V6O) + ", " + event.name;
      obj4.onPress = onPress;
      return closure_22(tmp3(tmp2[31]), obj4);
    } else if (tmp6.END === tmp4) {
      const obj5 = { variant: "secondary", text: null, accessibilityLabel: null, onPress: null, grow: true };
      let intl = tmp(tmp2[20]).intl;
      obj5.text = intl.string(tmp(tmp2[20]).t.qaYzPA);
      let intl2 = tmp(tmp2[20]).intl;
      const _HermesInternal = HermesInternal;
      obj5.accessibilityLabel = "" + intl2.string(tmp(tmp2[20]).t.qaYzPA) + ", " + event.name;
      obj5.onPress = function handleEndEvent() {
        const obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.qaYzPA);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.bnDQ7E);
        const intl3 = util.intl;
        obj.cancelText = intl3.string(util.t.gm1Vej);
        const intl4 = util.intl;
        obj.confirmText = intl4.string(util.t.p89ACt);
        obj.onConfirm = function onConfirm() {
          return require("GuildScheduledEventsActionCreators").endEvent(event.id, event.guild_id);
        };
        obj.confirmColor = common_AlertDefault.Colors.RED;
        obj.show(obj);
      };
      return closure_22(tmp3(tmp2[31]), obj5);
    } else if (tmp6.JOIN_GUILD === tmp4) {
      const obj6 = { event, recurrenceId };
      return closure_22(GuildEventJoinAndRSVPAction, obj6);
    } else {
      tmp(tmp2[40]).assertNever(tmp4);
    }
  }
});
export const GuildEventCardImageHeader = function GuildEventCardImageHeader(event) {
  event = event.event;
  c0 = undefined;
  let tmp = styles();
  let width = useWindowDimensionsDefault().width;
  [tmp5, c0] = _slicedToArray(noop.useState(0), 2);
  if (null == event.image) {
    return null;
  } else {
    if (tmp5 > 0) {
      width = tmp5;
    }
    let obj = { style: tmp.imageHeaderContainer, onLayout: tmp6, children: null };
    obj = { style: tmp.imageHeaderBanner, source: null, resizeMode: "cover" };
    obj.source = obj.makeSource(getGuildEventImageDefault(event, width));
    obj.children = __initData2(React5, obj);
    return __initData2(timestampProducer, obj);
  }
  const tmp4 = _slicedToArray(noop.useState(0), 2);
};
export { UserCountIconPill };
export const GuildEventCardHeader = function GuildEventCardHeader(event) {
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
  const tmp = styles();
  let id;
  let tmp2 = importDefault;
  const tmp4 = require("useTheme")();
  if (event != null) {
    id = event.id;
  }
  let obj = require("useEventException")(recurrenceId, id);
  if (obj == null) {
    obj = {};
  }
  const is_canceled = obj.is_canceled;
  const tmp8 = tmp2(toISOStringResult1[49])(event, recurrenceId);
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
  const memo = noop.useMemo(() => ScheduleUtils.getEventTimeData(c1, toISOStringResult1), items);
  let obj2 = event(tmp3[50]);
  obj = { eventTimeData: memo, isStage: event.entity_type === constants.STAGE_INSTANCE, theme: tmp4, event, isCanceled: undefined !== is_canceled && is_canceled, recurrenceId };
  const guildScheduledEventHeaderProps = obj2.getGuildScheduledEventHeaderProps(obj);
  color = guildScheduledEventHeaderProps.color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  const endDateTimeString = memo.endDateTimeString;
  let tmp15 = null;
  if (showUserCount) {
    const obj1 = { event, recurrenceId };
    const tmp18 = closure_22(UserCountIconPill, obj1);
    let tmp16Result = tmp18;
    if (!flag2) {
      obj2 = {
        accessibilityRole: "button",
        onPress: function handleOpenRSVPList() {

            },
        children: tmp18
      };
      tmp16Result = tmp16(tmp13(tmp3[51]).PressableOpacity, obj2);
    }
    tmp15 = tmp16Result;
    tmp16 = closure_22;
  }
  const tmp5 = require("useEventException");
  const tmp7 = undefined !== is_canceled && is_canceled;
  const items1 = [UserStore];
  const items2 = [event];
  const stateFromStores = event(toISOStringResult1[26]).useStateFromStores(items1, () => UserStore.getUser(event.creator_id), items2);
  let tmp21 = null != endDateTimeString;
  if (tmp21) {
    tmp21 = "" !== endDateTimeString;
  }
  let formatResult = text;
  if (tmp21) {
    const intl = tmp13(tmp3[20]).intl;
    const obj3 = {
      start: text,
      startHook(children) {
          let tmp2 = shouldChangeTextColor;
          if (shouldChangeTextColor) {
            let obj = { color };
            tmp2 = obj;
          }
          obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp2, children };
          return __initData2(Text_Text.Text, obj);
        },
      end: endDateTimeString
    };
    formatResult = intl.format(tmp13(tmp3[20]).t.vHYgJW, obj3);
  }
  const obj4 = { style: null, children: null };
  const items3 = [tmp.headerContainer, event.style];
  obj4.style = items3;
  if (flag4) {
    const obj5 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
    let tmp25Result = tmp25(tmp13(tmp3[45]).NewTag, obj5);
    let tmp27 = tmp25;
  } else {
    const obj6 = { size: "sm", color, style: tmp.dateIcon };
    tmp25Result = tmp25(tmp13(tmp3[53]).CalendarIcon, obj6);
    tmp27 = tmp25;
  }
  const items4 = [tmp25Result, , , ];
  const obj7 = { style: tmp.dateContainer, children: null };
  if (tmp21) {
    const obj8 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
    let obj9 = obj8;
  } else {
    let str2 = "text-subtle";
    if (flag5) {
      str2 = "text-strong";
    }
    obj9 = { variant: "text-sm/semibold", color: str2, style: null, children: null };
    if (shouldChangeTextColor) {
      const obj10 = { color };
      shouldChangeTextColor = obj10;
    }
    obj9.style = shouldChangeTextColor;
    obj9.children = formatResult;
  }
  obj7.children = tmp27(event(toISOStringResult1[52]).Text, obj9);
  items4[1] = tmp27(closure_6, obj7);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    const obj11 = { accessible: true, accessibilityLabel: null, user: null, guildId: null, size: null, style: null };
    const intl2 = tmp13(tmp3[20]).intl;
    obj12 = { username: stateFromStores.username };
    const _HermesInternal = HermesInternal;
    obj11.accessibilityLabel = "" + intl2.formatToPlainString(tmp13(tmp3[20]).t["+3iypQ"], obj12) + ", " + event.name;
    obj11.user = stateFromStores;
    obj11.guildId = event.guild_id;
    obj11.size = tmp13(tmp3[45]).AvatarSizes.XSMALL_20;
    obj11.style = tmp.creatorAvatar;
    flag3 = tmp27(tmp13(tmp3[45]).Avatar, obj11);
  }
  items4[2] = flag3;
  items4[3] = tmp15;
  obj4.children = items4;
  return closure_23(closure_6, obj4);
};
export { GuildEventCardTitle };
export { GuildEventCardDescription };
export const GuildEventCardMetaInfo = function GuildEventCardMetaInfo(textStyle) {
  ({ event, condensed } = textStyle);
  let obj = { children: null };
  obj = { event, textStyle: textStyle.titleStyle, style: textStyle.titleContainerStyle, condensed, onPress: textStyle.onTitlePress };
  ({ descriptionStyle, descriptionContainerStyle } = textStyle);
  const items = [__initData2(GuildEventCardTitle, obj), __initData2(GuildEventCardDescription, { event, textStyle: descriptionStyle, style: descriptionContainerStyle, condensed, numberOfLines: 3 })];
  obj.children = items;
  return __initData3(__initData4, obj);
};
export const GuildEventSimpleLocation = function GuildEventSimpleLocation(event) {
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  let obj = channel_id(504);
  const items = [ChannelStore];
  const items1 = [channel_id];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  let obj1 = channel_id(504);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guild_id;
    const id = AuthenticationStore.getId();
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildMemberStore.isMember(guild_id, id);
  }, items3);
  let tmp7 = stateFromStores(4713)(stateFromStores);
  let obj2 = channel_id(9705);
  const locationFromEvent = obj2.getLocationFromEvent(event);
  if (null == stateFromStores) {
    if (null == locationFromEvent) {
      return null;
    }
  }
  let tmp2Result = tmp2(9769);
  const eventLocationIconComponent = tmp2Result.getEventLocationIconComponent(event, stateFromStores, stateFromStores1);
  obj = { style: tmp.channelContainer, children: null };
  let tmp12 = null != eventLocationIconComponent;
  if (tmp12) {
    obj = { size: "sm", style: tmp.channelIcon };
    tmp12 = closure_22(eventLocationIconComponent, obj);
  }
  const items4 = [tmp12, ];
  obj1 = { style: tmp.channelText, accessibilityLabel: null, variant: "text-sm/medium", color: "text-default", children: null };
  if (null != stateFromStores) {
    obj2 = { channel: stateFromStores };
    let combined = stateFromStores(9770)(obj2);
  } else if (null != locationFromEvent) {
    const intl = tmp2(1114).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp2(1114).t.gwSn4I) + ", " + locationFromEvent;
  }
  obj1.accessibilityLabel = combined;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      tmp2Result = tmp2(9771);
      const obj3 = { guildId: event.guild_id };
      result = tmp2Result.guildEventLocationParser(locationFromEvent, true, obj3);
    }
    tmp7 = result;
  }
  obj1.children = tmp7;
  items4[1] = closure_22(channel_id(4556).Text, obj1);
  obj.children = items4;
  return closure_23(closure_6, obj);
};
export const GuildEventCardSimpleGuildInfo = function GuildEventCardSimpleGuildInfo(arg0) {
  ({ event, style, textStyle } = arg0);
  const tmp = styles();
  const guild_id = event.guild_id;
  let obj = guild_id(504);
  const items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    const items2 = [tmp.guildInfoContainer, style];
    obj.style = items2;
    obj = { guild: stateFromStores, size: tmp2(5584).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
    const items3 = [closure_22(GuildIconDefault, obj), ];
    const obj1 = { style: tmp.guildInfo, children: null };
    const obj2 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
    obj1.children = closure_22(tmp2(4556).Text, obj2);
    items3[1] = closure_22(closure_6, obj1);
    obj.children = items3;
    tmp5 = closure_23(closure_6, obj);
  }
  return tmp5;
};
export const GuildEventCardGuildInfo = function GuildEventCardGuildInfo(event) {
  event = event.event;
  let stateFromStores;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  let obj = channel_id(stateFromStores[26]);
  const items = [ChannelStore];
  const items1 = [channel_id];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  let obj1 = channel_id(stateFromStores[26]);
  const items2 = [GuildStore];
  const items3 = [guild_id];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => GuildStore.getGuild(guild_id), items3);
  let obj2 = channel_id(stateFromStores[26]);
  const items4 = [GuildMemberStore, AuthenticationStore];
  const items5 = [stateFromStores];
  const stateFromStores2 = obj2.useStateFromStores(items4, () => {
    guild_id = undefined;
    const id = AuthenticationStore.getId();
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildMemberStore.isMember(guild_id, id);
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
    obj = { style: tmp.guildInfoContainer, children: null };
    obj = { guild: stateFromStores1, size: tmp2(tmp3[59]).GuildIconSizes.SMALL, style: tmp.guildIcon };
    const items6 = [closure_22(tmp7(tmp3[59]), obj), ];
    obj1 = { style: tmp.guildInfo, children: null };
    obj2 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    const items7 = [closure_22(tmp2(tmp3[52]).Text, obj2), ];
    if (tmp12Result) {
      const obj3 = { style: tmp.guildInfoChannelContainer, accessible: true, accessibilityLabel: null, children: null };
      if (null != stateFromStores) {
        const obj4 = { channel: stateFromStores };
        let combined = tmp7(tmp3[58])(obj4);
      } else if (null != locationFromEvent) {
        const intl = tmp2(tmp3[20]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp2(tmp3[20]).t.gwSn4I) + ", " + locationFromEvent;
      }
      obj3.accessibilityLabel = combined;
      let tmp14Result = null != eventLocationIconSource;
      if (tmp14Result) {
        const obj5 = { source: eventLocationIconSource, size: tmp2(tmp3[45]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelIcon, disableColor: true };
        tmp14Result = tmp14(tmp2(tmp3[45]).Icon, obj5);
      }
      const items8 = [tmp14Result, ];
      const obj6 = { style: tmp.guildInfoChannelText, variant: "text-xs/medium", color: "text-default", children: tmp10 };
      items8[1] = tmp14(tmp2(tmp3[52]).Text, obj6);
      obj3.children = items8;
      tmp12Result = tmp12(tmp13, obj3);
    }
    items7[1] = tmp12Result;
    obj1.children = items7;
    items6[1] = closure_23(closure_6, obj1);
    obj.children = items6;
    return closure_23(closure_6, obj);
  }
};