// discord_app/modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import GroupIcon from "../../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import guildEventDetailsParser from "../../guildEventDetailsParser.native.tsx";
import useCanInviteForGuildEventDefault from "../../useCanInviteForGuildEvent.tsx";
import ThrottledButtonDefault from "ThrottledButton.tsx";
import getGuildEventImageDefault from "../../utils/getGuildEventImage.tsx";
import useGuildScheduledEventUserCountDefault from "../../useGuildScheduledEventUserCount.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildScheduledEventStore_mod from "../../GuildScheduledEventStore.tsx";

const require = globalThis.__r;

require = fn;
function usePrimaryActionButtonType(event, isConnected) {
  _require = event;
  ({ guild_id: importDefault, channel_id } = event);
  const scheduled_start_time = event.scheduled_start_time;
  const items = [scheduled_start_time];
  const items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(importDefault));
  const obj = require("initialize");
  const tmp = _require;
  const items2 = [ChannelStore];
  const items3 = [channel_id];
  let stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => ChannelStore.getChannel(channel_id),
    items3,
  );
  const obj2 = require("initialize");
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  const canManageGuildEventResult = require("useManageResourcePermissions")
    .useManageResourcePermissions(stateFromStores1)
    .canManageGuildEvent(event);
  const obj3 = require("useManageResourcePermissions");
  const items4 = [GuildStore];
  if (tmpResult.useStateFromStores(items4, () => null != GuildStore.getGuild(event.guild_id))) {
    if (closure_15(event)) {
      let RSVP = obj15.ENDED;
    } else if (closure_16(event)) {
      if (event.entity_type !== constants.EXTERNAL) {
        if (!isConnected) {
          const JOIN = obj15.JOIN;
        }
      }
    } else {
      if (noop.useMemo(() => ScheduleUtils.getEventTimeData(scheduled_start_time), items).withinStartWindow) {
        if (canManageGuildEventResult) {
          RSVP = obj15.START;
        }
      }
      RSVP = obj15.RSVP;
    }
  } else {
    return obj15.JOIN_GUILD;
  }
  tmpResult = tmp(channel_id[26]);
}
class GuildEventCardRSVPAction {
  constructor(arg0) {
    ({ event, recurrenceId } = global);
    tmp = event;
    tmp2 = closure_2;
    obj = event(closure_2[26]);
    items = [];
    items[0] = closure_17;
    items1 = [,];
    items1[0] = event.id;
    items1[1] = recurrenceId;
    items2 = [,];
    items2[0] = obj.useStateFromStores(
      items,
      () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1),
      items1,
    );
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
    obj1 = {
      accessibilityRole: "togglebutton",
      accessibilityState: { checked: first },
      accessibilityLabel: null,
      variant: null,
      icon: null,
      text: null,
      onPress: null,
      grow: true,
    };
    tmp5 = recurrenceId(tmp2[31]);
    intl = tmp(tmp2[20]).intl;
    obj1.accessibilityLabel = "" + intl.string(tmp(tmp2[20]).t.DlcqlU) + ", " + event.name;
    obj1.variant = str;
    obj1.icon = jsx(BellIcon, { size: "sm" });
    intl2 = tmp(tmp2[20]).intl;
    obj1.text = intl2.string(tmp(tmp2[20]).t.DlcqlU);
    obj1.onPress = tmp3[1];
    return jsx(tmp5, obj1);
  }
}
class GuildEventJoinAndRSVPAction {
  constructor(arg0) {
    event = global.event;
    recurrenceId = global.recurrenceId;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = async function _handleJoinGuild(items2) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (items2 === 1) {
          throw value;
        } else if (items2 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              asyncGeneratorStep(true);
              c3 = 1;
              const obj5 = { source: constants.DIRECTORY_EVENTS };
              v2 = 2;
              c4 = 1;
              const obj6 = { value: v2(tmp32[33]).joinGuild(guild_id.guild_id, obj5), done: false };
              return obj6;
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
            const obj = { value, done: true };
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
    items1 = [,];
    items1[0] = event.id;
    items1[1] = recurrenceId;
    items2 = [,];
    items2[0] = obj.useStateFromStores(
      items,
      () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1),
      items1,
    );
    items2[1] = () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    };
    tmp = closure_4(items2, 2);
    [closure_1, closure_2] = tmp;
    tmp2 = closure_4(closure_5.useState(false), 2);
    closure_3 = tmp2[1];
    obj1 = { loading: tmp2[0], variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
    tmp3 = closure_1(closure_2[31]);
    intl = event(closure_2[20]).intl;
    obj1.text = intl.string(event(closure_2[20]).t.VJlc0S);
    intl2 = event(closure_2[20]).intl;
    obj1.accessibilityLabel = "" + intl2.string(event(closure_2[20]).t.VJlc0S) + ", " + event.name;
    obj1.onPress = function handleJoinGuild() {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return jsx(tmp3, obj1);
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
    obj1 = { accessibilityLabel: null, IconComponent: null, text: null };
    intl = closure_0(tmp[20]).intl;
    obj1.accessibilityLabel =
      "" + intl.formatToPlainString(closure_0(tmp[20]).t["+DLsD8"], { count: tmp2Result }) + ", " + event.name;
    obj1.IconComponent = closure_0(tmp[46]).GroupIcon;
    obj1.text = tmp2Result.toLocaleString();
    return jsx(closure_0(tmp[45]).IconPill, obj1);
  }
}
class GuildEventCardTitle {
  constructor(arg0) {
    event = global.event;
    ({ style, textStyle, condensed, onPress } = global);
    tmp2 = jsx;
    obj = {
      accessibilityRole: "button",
      accessibilityHint: null,
      accessibilityLabel: null,
      onPress: null,
      style: null,
      children: null,
    };
    tmp = closure_25();
    tmp3 = Pressable;
    intl = closure_0(closure_2[20]).intl;
    obj.accessibilityHint = intl.string(closure_0(closure_2[20]).t.epxpiy);
    obj.accessibilityLabel = event.name;
    obj.onPress = onPress;
    items = [,];
    items[0] = tmp.topicContainer;
    items[1] = style;
    obj.style = items;
    obj1 = {
      variant: "text-md/bold",
      color: "mobile-text-heading-primary",
      style: textStyle,
      lineClamp: null,
      children: null,
    };
    num = undefined;
    if (condensed) {
      num = 1;
    }
    obj1.lineClamp = num;
    obj1.children = event.name;
    obj.children = tmp2(closure_0(closure_2[52]).Text, obj1);
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
            items = [,];
            items[0] = tmp.detailsContainer;
            items[1] = style;
            obj.style = items;
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj1 = { variant: "text-md/medium", color: "text-subtle", style: null, lineClamp: null, children: null };
            obj1.style = textStyle;
            obj1.lineClamp = numberOfLines;
            obj3 = closure_0(closure_2[54]);
            obj5 = { guildId: null, allowLinks: true, allowHeading: true, allowList: true };
            obj5.guildId = event.guild_id;
            flag = true;
            obj1.children = obj3.guildEventDetailsParser(description, true, obj5);
            obj.children = jsx(closure_0(closure_2[52]).Text, obj1);
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
let GuildScheduledEventStore = fn(7854);
({ isGuildEventEnded: closure_15, isGuildScheduledEventActive: closure_16 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const constants = fn(2048).GuildScheduledEventEntityTypes;
let Constants = fn(1074);
({ Permissions: closure_19, JoinGuildSources: closure_20 } = Constants);
Constants = fn(1085);
({ Fonts, NOOP: closure_21 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(4827);
let obj = {
  imageHeaderContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  imageHeaderBanner: { width: "100%", aspectRatio: 2.5 },
  headerContainer: { flexDirection: "row", alignItems: "center" },
  dateContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  dateIcon: null,
  newBadge: null,
  topicContainer: null,
  detailsContainer: null,
  channelContainer: null,
  channelIcon: null,
  channelText: null,
  guildInfoContainer: null,
  guildIcon: null,
  guildInfo: null,
  guildInfoChannelContainer: null,
  guildInfoChannelText: null,
  creatorAvatar: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.dateIcon = { marginRight: nativeDefault.space.PX_8 };
let obj4 = { marginRight: nativeDefault.space.PX_8 };
obj.newBadge = {
  paddingHorizontal: 4,
  paddingVertical: 2,
  marginEnd: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let obj5 = {
  paddingHorizontal: 4,
  paddingVertical: 2,
  marginEnd: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj.topicContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj6 = { paddingTop: nativeDefault.space.PX_8 };
obj.detailsContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj7 = { paddingTop: nativeDefault.space.PX_8 };
obj.channelContainer = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj.channelIcon = { marginRight: nativeDefault.space.PX_8 };
let obj9 = { marginRight: nativeDefault.space.PX_8 };
obj.channelText = {
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 14,
  lineHeight: 18,
  flexShrink: 1,
};
let obj10 = {
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 14,
  lineHeight: 18,
  flexShrink: 1,
};
obj.guildInfoContainer = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj11 = { flexDirection: "row", alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj.guildIcon = { marginRight: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj.guildInfo = { flexDirection: "column" };
obj.guildInfoChannelContainer = { flexDirection: "row", alignItems: "center" };
let obj12 = { marginRight: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj.guildInfoChannelText = {
  fontFamily: Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 12,
  lineHeight: 16,
};
let obj13 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 12, lineHeight: 16 };
obj.creatorAvatar = { marginRight: nativeDefault.space.PX_8 };
const styles = createStyles.createStyles(obj);
let obj15 = {
  RSVP: 0,
  [0]: "RSVP",
  JOIN: 1,
  [1]: "JOIN",
  START: 2,
  [2]: "START",
  STARTED: 3,
  [3]: "STARTED",
  CONNECTED: 4,
  [4]: "CONNECTED",
  END: 5,
  [5]: "END",
  ENDED: 6,
  [6]: "ENDED",
  JOIN_GUILD: 7,
  [7]: "JOIN_GUILD",
};
let obj14 = { marginRight: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx",
);

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = function GuildEventShareAction(event) {
  event = event.event;
  const tmp3 = useCanInviteForGuildEventDefault(event);
  importDefault = tmp3;
  dependencyMap = event(9951).SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
  const obj3 = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
  const intl = event(1115).intl;
  obj3.accessibilityLabel = "" + intl.string(event(1115).t.RDE0Sc) + ", " + event.name;
  obj3.onPress = function onPress() {
    if (closure_1) {
      GuildScheduledEventModalActionCreators.openShareEvent(event);
      const tmpResult = GuildScheduledEventModalActionCreators;
    } else {
      ClipboardUtils.copy(closure_2);
      const tmpResult2 = ClipboardUtils;
      ToastUtils.presentLinkCopied();
    }
  };
  obj3.icon = importDefault(tmp3 ? 9952 : 4770);
  return closure_22(event(8265).IconButton, obj3);
};
export const GuildEventModeratorAction = function GuildEventModeratorAction(event) {
  event = event.event;
  const recurrenceId = event.recurrenceId;
  closure_3 = undefined;
  const channel_id = event.channel_id;
  const items = [GuildStore];
  const stateFromStores = event(channel_id[26]).useStateFromStores(items, () => GuildStore.getGuild(event.guild_id));
  const obj = event(channel_id[26]);
  const items1 = [ChannelStore];
  const items2 = [channel_id];
  let stateFromStores1 = event(channel_id[26]).useStateFromStores(
    items1,
    () => ChannelStore.getChannel(channel_id),
    items2,
  );
  const obj2 = event(channel_id[26]);
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores;
  }
  closure_3 = event(channel_id[27]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
  const obj4 = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
  const intl = tmp(tmp2[20]).intl;
  obj4.accessibilityLabel = "" + intl.string(event(channel_id[20]).t.HIgA5a) + ", " + event.name;
  obj4.onPress = function onPress() {
    return GuildScheduledEventModalActionCreators.showGuildEventModeratorActionSheet(event, closure_3, recurrenceId);
  };
  obj4.icon = recurrenceId(channel_id[28]);
  return closure_22(event(channel_id[19]).IconButton, obj4);
};
export const useEventRsvpState = function useEventRsvpState(id, arg1) {
  _require = id;
  closure_1 = arg1;
  const items = [GuildScheduledEventStore];
  const items1 = [id.id, arg1];
  const items2 = [
    require("initialize").useStateFromStores(
      items,
      () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1),
      items1,
    ),
    () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    },
  ];
  return items2;
};
export const GuildEventIndicateInterestAction = function GuildEventIndicateInterestAction(event) {
  event = event.event;
  importDefault = null;
  const items = [GuildScheduledEventStore];
  const items1 = [event.id, null];
  const items2 = [
    event(504).useStateFromStores(
      items,
      () => GuildScheduledEventStore.isInterestedInEventRecurrence(event.id, c1),
      items1,
    ),
    () => {
      const result = GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(event.id, c1, event.guild_id);
    },
  ];
  [first, obj2.onPress] = items2;
  let str = "secondary";
  if (first) {
    str = "tertiary";
  }
  if (first) {
    let BellIcon = tmp(4777).CheckmarkLargeIcon;
  } else {
    BellIcon = tmp(9953).BellIcon;
  }
  const obj2 = {
    accessibilityRole: "togglebutton",
    accessibilityState: { checked: first },
    accessibilityLabel: null,
    variant: null,
    icon: null,
    text: null,
    onPress: null,
    grow: true,
  };
  const obj = event(504);
  const intl = tmp(1115).intl;
  obj2.accessibilityLabel = "" + intl.string(event(1115).t.DlcqlU) + ", " + event.name;
  obj2.variant = str;
  obj2.icon = closure_22(BellIcon, { size: "sm" });
  const intl2 = tmp(1115).intl;
  obj2.text = intl2.string(event(1115).t.DlcqlU);
  return closure_22(ThrottledButtonDefault, obj2);
};
export const PrimaryActionType = obj15;
export { usePrimaryActionButtonType };
export { GuildEventCardRSVPAction };
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = noop.memo(function GuildEventCardPrimaryAction(event) {
  event = event.event;
  ({ onCloseAction: importDefault, recurrenceId } = event);
  c3 = undefined;
  channel_id = undefined;
  ({ guild_id: c3, channel_id } = event);
  const items = [ChannelStore];
  const items1 = [channel_id];
  const id = event(recurrenceId[26]).useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  closure_6 = channel_id(require("useSelectStage")(), 2)[1];
  const tmp4 = usePrimaryActionButtonType(event, event.isConnected);
  let obj = event(recurrenceId[26]);
  const items2 = [PermissionStore];
  const stateFromStores = event(recurrenceId[26]).useStateFromStores(items2, () =>
    PermissionStore.can(constants2.CONNECT, closure_5),
  );
  if (obj15.ENDED === tmp4) {
    const obj3 = {
      variant: "secondary",
      text: null,
      accessibilityLabel: null,
      grow: true,
      disabled: true,
      onPress: null,
    };
    const intl10 = tmp(recurrenceId[20]).intl;
    obj3.text = intl10.string(tmp(recurrenceId[20]).t.Pj7Xrv);
    const intl11 = tmp(recurrenceId[20]).intl;
    const _HermesInternal6 = HermesInternal;
    obj3.accessibilityLabel = "" + intl11.string(tmp(recurrenceId[20]).t.Pj7Xrv) + ", " + event.name;
    obj3.onPress = onPress;
    return closure_22(require("ThrottledButton"), obj3);
  } else {
    function handleListenIn() {
      if (null != id) {
        if (event.entity_type === constants.STAGE_INSTANCE) {
          closure_6(c3, id.id);
        }
        PrivateChannelCallUtils.openGuildVoiceModal(id);
        if (importDefault != null) {
          importDefault();
        }
      }
    }
    if (obj15.JOIN === tmp4) {
      const intl9 = tmp(recurrenceId[20]).intl;
      const string = intl9.string;
      const t = tmp(recurrenceId[20]).t;
      if (stateFromStores) {
        let stringResult = string(t.ZYO5OK);
      } else {
        stringResult = string(t.TVBCKZ);
      }
      const obj4 = {
        variant: "active",
        text: stringResult,
        accessibilityLabel: null,
        onPress: null,
        disabled: null,
        grow: true,
      };
      const _HermesInternal5 = HermesInternal;
      obj4.accessibilityLabel = "" + stringResult + ", " + event.name;
      obj4.onPress = handleListenIn;
      obj4.disabled = !stateFromStores;
      return closure_22(require("ThrottledButton"), obj4);
    } else if (obj15.CONNECTED === tmp4) {
      const obj5 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
      const intl7 = tmp(recurrenceId[20]).intl;
      obj5.text = intl7.string(tmp(recurrenceId[20]).t.aW2YlJ);
      const intl8 = tmp(recurrenceId[20]).intl;
      const _HermesInternal4 = HermesInternal;
      obj5.accessibilityLabel = "" + intl8.string(tmp(recurrenceId[20]).t.aW2YlJ) + ", " + event.name;
      obj5.onPress = handleListenIn;
      return closure_22(require("ThrottledButton"), obj5);
    } else if (obj15.RSVP === tmp4) {
      const obj6 = { event, recurrenceId };
      return closure_22(GuildEventCardRSVPAction, obj6);
    } else if (obj15.START === tmp4) {
      const obj7 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
      const intl5 = tmp(recurrenceId[20]).intl;
      obj7.text = intl5.string(tmp(recurrenceId[20]).t.cK1GGY);
      const intl6 = tmp(recurrenceId[20]).intl;
      const _HermesInternal3 = HermesInternal;
      obj7.accessibilityLabel = "" + intl6.string(tmp(recurrenceId[20]).t.cK1GGY) + ", " + event.name;
      obj7.onPress = function handleStartEvent() {
        if (importDefault != null) {
          tmp();
        }
        const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(event, recurrenceId);
      };
      return closure_22(require("ThrottledButton"), obj7);
    } else if (obj15.STARTED === tmp4) {
      const obj8 = {
        variant: "secondary",
        text: null,
        accessibilityLabel: null,
        grow: true,
        disabled: true,
        onPress: null,
      };
      let intl3 = tmp(recurrenceId[20]).intl;
      obj8.text = intl3.string(tmp(recurrenceId[20]).t.Yz0V6O);
      let intl4 = tmp(recurrenceId[20]).intl;
      const _HermesInternal2 = HermesInternal;
      obj8.accessibilityLabel = "" + intl4.string(tmp(recurrenceId[20]).t.Yz0V6O) + ", " + event.name;
      obj8.onPress = onPress;
      return closure_22(require("ThrottledButton"), obj8);
    } else if (obj15.END === tmp4) {
      const obj9 = { variant: "secondary", text: null, accessibilityLabel: null, onPress: null, grow: true };
      let intl = tmp(recurrenceId[20]).intl;
      obj9.text = intl.string(tmp(recurrenceId[20]).t.qaYzPA);
      let intl2 = tmp(recurrenceId[20]).intl;
      const _HermesInternal = HermesInternal;
      obj9.accessibilityLabel = "" + intl2.string(tmp(recurrenceId[20]).t.qaYzPA) + ", " + event.name;
      obj9.onPress = function handleEndEvent() {
        const obj2 = {
          title: null,
          body: null,
          cancelText: null,
          confirmText: null,
          onConfirm: null,
          confirmColor: null,
        };
        const intl = util.intl;
        obj2.title = intl.string(util.t.qaYzPA);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.bnDQ7E);
        const intl3 = util.intl;
        obj2.cancelText = intl3.string(util.t.gm1Vej);
        const intl4 = util.intl;
        obj2.confirmText = intl4.string(util.t.p89ACt);
        obj2.onConfirm = function onConfirm() {
          return require("GuildScheduledEventsActionCreators").endEvent(event.id, event.guild_id);
        };
        obj2.confirmColor = common_AlertDefault.Colors.RED;
        actions_AlertActionCreatorsDefault.show(obj2);
      };
      return closure_22(require("ThrottledButton"), obj9);
    } else if (obj15.JOIN_GUILD === tmp4) {
      const obj10 = { event, recurrenceId };
      return closure_22(GuildEventJoinAndRSVPAction, obj10);
    } else {
      tmp(recurrenceId[40]).assertNever(tmp4);
      const tmpResult = tmp(recurrenceId[40]);
    }
  }
  let obj2 = event(recurrenceId[26]);
});
export const GuildEventCardImageHeader = function GuildEventCardImageHeader(event) {
  event = event.event;
  c0 = undefined;
  let tmp = styles();
  let width = useWindowDimensionsDefault().width;
  [tmp5, c0] = noop.useState(0);
  if (null == event.image) {
    return null;
  } else {
    if (tmp5 > 0) {
      width = tmp5;
    }
    const obj2 = { style: tmp.imageHeaderContainer, onLayout: tmp6, children: null };
    const obj3 = {
      style: tmp.imageHeaderBanner,
      source: AvatarUtils.makeSource(getGuildEventImageDefault(event, width)),
      resizeMode: "cover",
    };
    obj2.children = __initData2(React5, obj3);
    return __initData2(timestampProducer, obj2);
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
  const tmp5 = require("useEventException");
  const tmp7 = undefined !== is_canceled && is_canceled;
  const guildScheduledEventHeaderProps = event(toISOStringResult1[50]).getGuildScheduledEventHeaderProps({
    eventTimeData: memo,
    isStage: event.entity_type === constants.STAGE_INSTANCE,
    theme: tmp4,
    event,
    isCanceled: tmp7,
    recurrenceId,
  });
  color = guildScheduledEventHeaderProps.color;
  ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
  const endDateTimeString = memo.endDateTimeString;
  let tmp15 = null;
  if (showUserCount) {
    const obj4 = { event, recurrenceId };
    const tmp18 = closure_22(UserCountIconPill, obj4);
    let tmp16Result = tmp18;
    if (!flag2) {
      const obj5 = {
        accessibilityRole: "button",
        onPress: function handleOpenRSVPList() {},
        children: tmp18,
      };
      tmp16Result = closure_22(tmp13(tmp3[51]).PressableOpacity, obj5);
    }
    tmp15 = tmp16Result;
  }
  const obj2 = event(toISOStringResult1[50]);
  const obj3 = {
    eventTimeData: memo,
    isStage: event.entity_type === constants.STAGE_INSTANCE,
    theme: tmp4,
    event,
    isCanceled: tmp7,
    recurrenceId,
  };
  const items1 = [UserStore];
  const items2 = [event];
  const stateFromStores = event(toISOStringResult1[26]).useStateFromStores(
    items1,
    () => UserStore.getUser(event.creator_id),
    items2,
  );
  let tmp21 = null != endDateTimeString;
  if (tmp21) {
    tmp21 = "" !== endDateTimeString;
  }
  let formatResult = text;
  if (tmp21) {
    const intl = tmp13(tmp3[20]).intl;
    const obj6 = {
      start: text,
      startHook(children) {
        let tmp2 = shouldChangeTextColor;
        if (shouldChangeTextColor) {
          const obj = { color };
          tmp2 = obj;
        }
        return __initData2(Text_Text.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          style: tmp2,
          children,
        });
      },
      end: endDateTimeString,
    };
    formatResult = intl.format(tmp13(tmp3[20]).t.vHYgJW, obj6);
  }
  const obj7 = { style: null, children: null };
  const items3 = [tmp.headerContainer, event.style];
  obj7.style = items3;
  if (flag4) {
    const obj8 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
    let tmp25Result = closure_22(tmp13(tmp3[45]).NewTag, obj8);
    let tmp27 = closure_22;
  } else {
    const obj9 = { size: "sm", color, style: tmp.dateIcon };
    tmp25Result = closure_22(tmp13(tmp3[53]).CalendarIcon, obj9);
    tmp27 = closure_22;
  }
  const items4 = [tmp25Result, , ,];
  const obj10 = { style: tmp.dateContainer, children: null };
  if (tmp21) {
    const obj11 = { variant: "text-sm/semibold", color: "text-default", children: formatResult };
    let obj12 = obj11;
  } else {
    let str2 = "text-subtle";
    if (flag5) {
      str2 = "text-strong";
    }
    obj12 = { variant: "text-sm/semibold", color: str2, style: null, children: null };
    if (shouldChangeTextColor) {
      const obj13 = { color };
      shouldChangeTextColor = obj13;
    }
    obj12.style = shouldChangeTextColor;
    obj12.children = formatResult;
  }
  obj10.children = tmp27(event(toISOStringResult1[52]).Text, obj12);
  items4[1] = tmp27(closure_6, obj10);
  if (flag3) {
    flag3 = null != stateFromStores;
  }
  if (flag3) {
    const obj14 = { accessible: true, accessibilityLabel: null, user: null, guildId: null, size: null, style: null };
    const intl2 = tmp13(tmp3[20]).intl;
    obj15 = { username: stateFromStores.username };
    const _HermesInternal = HermesInternal;
    obj14.accessibilityLabel = "" + intl2.formatToPlainString(tmp13(tmp3[20]).t["+3iypQ"], obj15) + ", " + event.name;
    obj14.user = stateFromStores;
    obj14.guildId = event.guild_id;
    obj14.size = tmp13(tmp3[45]).AvatarSizes.XSMALL_20;
    obj14.style = tmp.creatorAvatar;
    flag3 = tmp27(tmp13(tmp3[45]).Avatar, obj14);
  }
  items4[2] = flag3;
  items4[3] = tmp15;
  obj7.children = items4;
  return closure_23(closure_6, obj7);
};
export { GuildEventCardTitle };
export { GuildEventCardDescription };
export const GuildEventCardMetaInfo = function GuildEventCardMetaInfo(textStyle) {
  ({ event, condensed } = textStyle);
  const obj = { children: null };
  ({ descriptionStyle, descriptionContainerStyle } = textStyle);
  const items = [
    __initData2(GuildEventCardTitle, {
      event,
      textStyle: textStyle.titleStyle,
      style: textStyle.titleContainerStyle,
      condensed,
      onPress: textStyle.onTitlePress,
    }),
    __initData2(GuildEventCardDescription, {
      event,
      textStyle: descriptionStyle,
      style: descriptionContainerStyle,
      condensed,
      numberOfLines: 3,
    }),
  ];
  obj.children = items;
  return __initData3(__initData4, obj);
};
export const GuildEventSimpleLocation = function GuildEventSimpleLocation(event) {
  event = event.event;
  const tmp = styles();
  const channel_id = event.channel_id;
  const items = [ChannelStore];
  const items1 = [channel_id];
  const stateFromStores = channel_id(504).useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
  const obj = channel_id(504);
  const items2 = [GuildMemberStore, AuthenticationStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = channel_id(504).useStateFromStores(
    items2,
    () => {
      let guild_id;
      const id = AuthenticationStore.getId();
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return GuildMemberStore.isMember(guild_id, id);
    },
    items3,
  );
  let tmp7 = stateFromStores(4980)(stateFromStores);
  const obj2 = channel_id(504);
  const tmp6 = stateFromStores;
  const locationFromEvent = channel_id(9869).getLocationFromEvent(event);
  if (null == stateFromStores) {
    if (null == locationFromEvent) {
      return null;
    }
  }
  const obj3 = channel_id(9869);
  const eventLocationIconComponent = channel_id(9945).getEventLocationIconComponent(
    event,
    stateFromStores,
    stateFromStores1,
  );
  const obj4 = { style: tmp.channelContainer, children: null };
  let tmp12 = null != eventLocationIconComponent;
  if (tmp12) {
    const obj5 = { size: "sm", style: tmp.channelIcon };
    tmp12 = closure_22(eventLocationIconComponent, obj5);
  }
  const items4 = [tmp12];
  const obj6 = {
    style: tmp.channelText,
    accessibilityLabel: null,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  if (null != stateFromStores) {
    const obj7 = { channel: stateFromStores };
    let combined = tmp6(9946)(obj7);
  } else if (null != locationFromEvent) {
    const intl = tmp2(1115).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp2(1115).t.gwSn4I) + ", " + locationFromEvent;
  }
  obj6.accessibilityLabel = combined;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      const obj8 = { guildId: event.guild_id };
      result = tmp2(9947).guildEventLocationParser(locationFromEvent, true, obj8);
      const tmp2Result2 = tmp2(9947);
    }
    tmp7 = result;
  }
  obj6.children = tmp7;
  items4[1] = closure_22(channel_id(4823).Text, obj6);
  obj4.children = items4;
  return closure_23(closure_6, obj4);
};
export const GuildEventCardSimpleGuildInfo = function GuildEventCardSimpleGuildInfo(arg0) {
  ({ event, style, textStyle } = arg0);
  const tmp = styles();
  const guild_id = event.guild_id;
  const items = [GuildStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { style: null, children: null };
    const items2 = [tmp.guildInfoContainer, style];
    obj2.style = items2;
    const obj3 = { guild: stateFromStores, size: tmp2(5887).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
    const items3 = [closure_22(GuildIconDefault, obj3)];
    const obj4 = { style: tmp.guildInfo, children: null };
    const obj5 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
    obj4.children = closure_22(tmp2(4823).Text, obj5);
    items3[1] = closure_22(closure_6, obj4);
    obj2.children = items3;
    tmp5 = closure_23(closure_6, obj2);
  }
  return tmp5;
};
export const GuildEventCardGuildInfo = function GuildEventCardGuildInfo(event) {
  event = event.event;
  let stateFromStores;
  const tmp = styles();
  const channel_id = event.channel_id;
  let guild_id = event.guild_id;
  const items = [ChannelStore];
  const items1 = [channel_id];
  stateFromStores = channel_id(stateFromStores[26]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channel_id),
    items1,
  );
  const obj = channel_id(stateFromStores[26]);
  const items2 = [GuildStore];
  const items3 = [guild_id];
  const stateFromStores1 = channel_id(stateFromStores[26]).useStateFromStores(
    items2,
    () => GuildStore.getGuild(guild_id),
    items3,
  );
  const obj2 = channel_id(stateFromStores[26]);
  const items4 = [GuildMemberStore, AuthenticationStore];
  const items5 = [stateFromStores];
  const stateFromStores2 = channel_id(stateFromStores[26]).useStateFromStores(
    items4,
    () => {
      guild_id = undefined;
      const id = AuthenticationStore.getId();
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return GuildMemberStore.isMember(guild_id, id);
    },
    items5,
  );
  const tmp8 = guild_id(stateFromStores[55])(stateFromStores);
  if (null == stateFromStores1) {
    return null;
  } else {
    const locationFromEvent = tmp2(tmp3[56]).getLocationFromEvent(event);
    let tmp13Result = null != stateFromStores || null != locationFromEvent;
    let tmp10 = tmp8;
    if (tmp8 == null) {
      let result = null;
      if (null != locationFromEvent) {
        const obj4 = { guildId: guild_id };
        result = tmp2(tmp3[54]).guildEventLocationParser(locationFromEvent, true, obj4);
        const tmp2Result3 = tmp2(tmp3[54]);
      }
      tmp10 = result;
    }
    const tmp2Result = tmp2(tmp3[56]);
    const eventLocationIconSource = tmp2(tmp3[57]).getEventLocationIconSource(event, stateFromStores, stateFromStores2);
    const obj5 = { style: tmp.guildInfoContainer, children: null };
    const obj6 = { guild: stateFromStores1, size: null, style: null };
    const tmp2Result4 = tmp2(tmp3[57]);
    obj6.size = tmp2(tmp3[59]).GuildIconSizes.SMALL;
    obj6.style = tmp.guildIcon;
    const items6 = [closure_22(tmp7(tmp3[59]), obj6)];
    const obj7 = { style: tmp.guildInfo, children: null };
    const obj8 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    const items7 = [closure_22(tmp2(tmp3[52]).Text, obj8)];
    if (tmp13Result) {
      const obj9 = { style: tmp.guildInfoChannelContainer, accessible: true, accessibilityLabel: null, children: null };
      if (null != stateFromStores) {
        const obj10 = { channel: stateFromStores };
        let combined = tmp7(tmp3[58])(obj10);
      } else if (null != locationFromEvent) {
        const intl = tmp2(tmp3[20]).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp2(tmp3[20]).t.gwSn4I) + ", " + locationFromEvent;
      }
      obj9.accessibilityLabel = combined;
      let tmp15Result = null != eventLocationIconSource;
      if (tmp15Result) {
        const obj11 = {
          source: eventLocationIconSource,
          size: tmp2(tmp3[45]).Icon.Sizes.EXTRA_SMALL,
          style: tmp.channelIcon,
          disableColor: true,
        };
        tmp15Result = closure_22(tmp2(tmp3[45]).Icon, obj11);
      }
      const items8 = [tmp15Result];
      const obj12 = {
        style: tmp.guildInfoChannelText,
        variant: "text-xs/medium",
        color: "text-default",
        children: tmp10,
      };
      items8[1] = closure_22(tmp2(tmp3[52]).Text, obj12);
      obj9.children = items8;
      tmp13Result = closure_23(closure_6, obj9);
    }
    items7[1] = tmp13Result;
    obj7.children = items7;
    items6[1] = closure_23(closure_6, obj7);
    obj5.children = items6;
    return closure_23(closure_6, obj5);
  }
  const obj3 = channel_id(stateFromStores[26]);
};
