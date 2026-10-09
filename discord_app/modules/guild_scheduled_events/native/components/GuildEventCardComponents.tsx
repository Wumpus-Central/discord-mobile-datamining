// discord_app/modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import CheckmarkLargeIcon from "../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import GroupIcon from "../../../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import useGuildScheduledEventUserCountDefault from "../../useGuildScheduledEventUserCount.tsx";
import ScheduleUtils from "../../utils/ScheduleUtils.tsx";
import useCanInviteForGuildEventDefault from "../../useCanInviteForGuildEvent.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import guildEventDetailsParser from "../../guildEventDetailsParser.native.tsx";
import getGuildEventImageDefault from "../../utils/getGuildEventImage.tsx";
import BellIcon2 from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import ThrottledButtonDefault from "ThrottledButton.tsx";
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

require = fn;
class GuildEventJoinAndRSVPAction {
  constructor(arg0) {
    event = global.event;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = async function _handleJoinGuild(noop) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (noop === 1) {
          throw value;
        } else if (noop === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (noop === 1) {
              c5 = 3;
              throw value;
            } else if (noop === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              event = tmp8;
              asyncGeneratorStep(true);
              c3 = 2;
              const obj6 = { source: constants.DIRECTORY_EVENTS };
              c4 = 3;
              c5 = 1;
              const obj7 = { value: tmp4(tmp46[35]).joinGuild(guild_id.guild_id, obj6), done: false };
              return obj7;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_3(false);
            throw tmp46;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_0 = tmp46;
              const result = event(tmp46[37]).ignoreJoinGuildRefused(closure_128_0);
              c3 = 0;
              closure_129_3(false);
              c5 = 3;
              const obj3 = event(tmp46[37]);
            } else if (noop === 1) {
              c5 = 3;
              throw value;
            } else if (noop !== 2) {
              event(tmp46[36]).transitionToGuild(closure_129_0.guild_id);
              let tmp14 = closure_129_1;
              if (!closure_129_1) {
                tmp14 = closure_1_15(closure_129_0);
              }
              if (!tmp14) {
                closure_129_2();
              }
              c3 = 1;
              const obj = event(tmp46[36]);
            }
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } catch (tmp46) {
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp46;
          } else if (tmp2 === tmp48) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    tmp = closure_4(useEventRsvpState(event, global.recurrenceId), 2);
    [closure_1, closure_2] = tmp;
    tmp2 = closure_4(closure_5.useState(false), 2);
    closure_3 = tmp2[1];
    obj = { loading: tmp2[0], variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
    tmp3 = closure_1(closure_2[33]);
    intl = event(closure_2[24]).intl;
    obj.text = intl.string(event(closure_2[24]).t.VJlc0S);
    intl2 = event(closure_2[24]).intl;
    obj.accessibilityLabel = "" + intl2.string(event(closure_2[24]).t.VJlc0S) + ", " + event.name;
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
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
let GuildScheduledEventStore = fn(6061);
({ isGuildEventEnded: closure_14, isGuildScheduledEventActive: closure_15 } = GuildScheduledEventStore);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
const constants = fn(2070).GuildScheduledEventEntityTypes;
let Constants = fn(1085);
({ Permissions: closure_18, JoinGuildSources: closure_19 } = Constants);
Constants = fn(1096);
({ Fonts, NOOP: closure_20 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(5091);
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
fn(558);
let obj14 = { marginRight: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventShareAction(event) {
      const cResult = event(576).c(12);
      event = event.event;
      const tmp5 = useCanInviteForGuildEventDefault(event);
      importDefault = tmp5;
      if (cResult[0] === event.guild_id) {
        if (cResult[1] === event.id) {
          let tmp6 = cResult[2];
        }
        dependencyMap = tmp6;
        if (cResult[3] === tmp5) {
          if (cResult[4] === event) {
            if (cResult[5] === tmp6) {
              let tmp8 = cResult[6];
            }
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.RDE0Sc);
              cResult[7] = stringResult;
              let tmp10 = stringResult;
            } else {
              tmp10 = cResult[7];
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + tmp10 + ", " + event.name;
            const tmp4Result = tmp4(tmp5 ? 8713 : 5041);
            if (cResult[8] === tmp8) {
              if (cResult[9] === combined) {
                if (cResult[10] === tmp4Result) {
                  let tmp14 = cResult[11];
                }
                return tmp14;
              }
            }
            let obj2 = { accessibilityLabel: combined, onPress: tmp8, icon: tmp4Result, variant: "secondary" };
            const tmp16 = closure_21(tmp(8114).IconButton, obj2);
            cResult[8] = tmp8;
            cResult[9] = combined;
            cResult[10] = tmp4Result;
            cResult[11] = tmp16;
            tmp14 = tmp16;
          }
        }
        function handlePress() {
          if (closure_1) {
            guild_scheduled_events_GuildScheduledEventModalActionCreators.openShareEvent(event);
            const tmpResult = guild_scheduled_events_GuildScheduledEventModalActionCreators;
          } else {
            ClipboardUtils.copy(closure_2);
            const tmpResult2 = ClipboardUtils;
            ToastUtils.presentLinkCopied();
          }
        }
        cResult[3] = tmp5;
        cResult[4] = event;
        cResult[5] = tmp6;
        cResult[6] = handlePress;
        tmp8 = handlePress;
      }
      const obj = event(576);
      tmp4 = importDefault;
      const result = event(8517).SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
      cResult[0] = event.guild_id;
      cResult[1] = event.id;
      cResult[2] = result;
      tmp6 = result;
      const obj3 = { guildId: event.guild_id, guildEventId: event.id };
      let tmpResult = event(8517);
    }
  : function GuildEventShareAction(event) {
      event = event.event;
      const tmp3 = useCanInviteForGuildEventDefault(event);
      importDefault = tmp3;
      dependencyMap = event(8517).SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
      const obj3 = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
      const intl = event(1126).intl;
      obj3.accessibilityLabel = "" + intl.string(event(1126).t.RDE0Sc) + ", " + event.name;
      obj3.onPress = function handlePress() {
        if (closure_1) {
          guild_scheduled_events_GuildScheduledEventModalActionCreators.openShareEvent(event);
          const tmpResult = guild_scheduled_events_GuildScheduledEventModalActionCreators;
        } else {
          ClipboardUtils.copy(closure_2);
          const tmpResult2 = ClipboardUtils;
          ToastUtils.presentLinkCopied();
        }
      };
      obj3.icon = importDefault(tmp3 ? 8713 : 5041);
      return closure_21(event(8114).IconButton, obj3);
    };
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEventRsvpState(id, arg1) {
      _require = id;
      closure_1 = arg1;
      const cResult = require("c").c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildScheduledEventStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id.id) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        if (cResult[5] === id.guild_id) {
          if (cResult[6] === id.id) {
            if (cResult[7] === arg1) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              if (cResult[10] === stateFromStores) {
                let tmp10 = cResult[11];
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
        function handleRSVP() {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(
            user.id,
            closure_1,
            user.guild_id,
          );
        }
        cResult[5] = id.guild_id;
        cResult[6] = id.id;
        cResult[7] = arg1;
        cResult[8] = handleRSVP;
        tmp9 = handleRSVP;
        const tmpResult = tmp(504);
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
      const obj = require("c");
      tmp = _require;
    }
  : function useEventRsvpState(id, arg1) {
      _require = id;
      closure_1 = arg1;
      const items = [GuildScheduledEventStore];
      const items1 = [id.id, arg1];
      const items2 = [
        require("initialize").useStateFromStores(
          items,
          () => GuildScheduledEventStore.isInterestedInEventRecurrence(user.id, closure_1),
          items1,
        ),
        function handleRSVP() {
          const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.handleGuildScheduledEventRsvp(
            user.id,
            closure_1,
            user.guild_id,
          );
        },
      ];
      return items2;
    };
let closure_25 = tmp10;
ReactCompilerGating = fn(558);
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
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventModeratorAction(event) {
      const cResult = event(channel_id[18]).c(18);
      event = event.event;
      const recurrenceId = event.recurrenceId;
      channel_id = event.channel_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== event.guild_id) {
        const fn = function l() {
          return GuildStore.getGuild(event.guild_id);
        };
        cResult[1] = event.guild_id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = event(channel_id[18]);
      const stateFromStores = event(channel_id[28]).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== channel_id) {
        const fn2 = function h() {
          return ChannelStore.getChannel(channel_id);
        };
        const items2 = [channel_id];
        cResult[4] = channel_id;
        cResult[5] = fn2;
        cResult[6] = items2;
        let tmp11 = items2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const tmpResult = event(channel_id[28]);
      let stateFromStores1 = event(channel_id[28]).useStateFromStores(tmp8, tmp10, tmp11);
      const tmpResult3 = event(channel_id[28]);
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      const canManageGuildEvent = event(channel_id[29]).useManageResourcePermissions(
        stateFromStores1,
      ).canManageGuildEvent;
      if (cResult[7] === canManageGuildEvent) {
        if (cResult[8] === event) {
          let tmp13 = cResult[9];
        }
        closure_3 = tmp13;
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[24]).intl;
          const stringResult = intl.string(tmp(tmp2[24]).t.HIgA5a);
          cResult[10] = stringResult;
          let tmp15 = stringResult;
        } else {
          tmp15 = cResult[10];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp15 + ", " + event.name;
        if (cResult[11] === tmp13) {
          if (cResult[12] === event) {
            if (cResult[13] === recurrenceId) {
              let tmp18 = cResult[14];
            }
            if (cResult[15] === combined) {
              if (cResult[16] === tmp18) {
                let tmp19 = cResult[17];
              }
              return tmp19;
            }
            const obj2 = {
              accessibilityLabel: combined,
              onPress: tmp18,
              icon: recurrenceId(tmp2[30]),
              variant: "secondary",
            };
            const tmp22 = closure_21(tmp(tmp2[27]).IconButton, obj2);
            cResult[15] = combined;
            cResult[16] = tmp18;
            cResult[17] = tmp22;
            tmp19 = tmp22;
          }
        }
        const fn3 = function p() {
          return guild_scheduled_events_GuildScheduledEventModalActionCreators.showGuildEventModeratorActionSheet(
            event,
            closure_3,
            recurrenceId,
          );
        };
        cResult[11] = tmp13;
        cResult[12] = event;
        cResult[13] = recurrenceId;
        cResult[14] = fn3;
        tmp18 = fn3;
      }
      const canManageGuildEventResult = canManageGuildEvent(event);
      cResult[7] = canManageGuildEvent;
      cResult[8] = event;
      cResult[9] = canManageGuildEventResult;
      tmp13 = canManageGuildEventResult;
      const tmpResult4 = event(channel_id[29]);
    }
  : function GuildEventModeratorAction(event) {
      event = event.event;
      const recurrenceId = event.recurrenceId;
      closure_3 = undefined;
      const channel_id = event.channel_id;
      const items = [GuildStore];
      const stateFromStores = event(channel_id[28]).useStateFromStores(items, () =>
        GuildStore.getGuild(event.guild_id),
      );
      const obj = event(channel_id[28]);
      const items1 = [ChannelStore];
      const items2 = [channel_id];
      let stateFromStores1 = event(channel_id[28]).useStateFromStores(
        items1,
        () => ChannelStore.getChannel(channel_id),
        items2,
      );
      const obj2 = event(channel_id[28]);
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      closure_3 = event(channel_id[29]).useManageResourcePermissions(stateFromStores1).canManageGuildEvent(event);
      const obj4 = { accessibilityLabel: null, onPress: null, icon: null, variant: "secondary" };
      const intl = tmp(tmp2[24]).intl;
      obj4.accessibilityLabel = "" + intl.string(event(channel_id[24]).t.HIgA5a) + ", " + event.name;
      obj4.onPress = function onPress() {
        return guild_scheduled_events_GuildScheduledEventModalActionCreators.showGuildEventModeratorActionSheet(
          event,
          closure_3,
          recurrenceId,
        );
      };
      obj4.icon = recurrenceId(channel_id[30]);
      return closure_21(event(channel_id[27]).IconButton, obj4);
    };
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePrimaryActionButtonType(guild_id, arg1) {
      _require = guild_id;
      const cResult = require("c").c(10);
      guild_id = guild_id.guild_id;
      channel_id = guild_id.channel_id;
      ({ scheduled_start_time, entity_type } = guild_id);
      const obj = require("c");
      const withinStartWindow = require("ScheduleUtils").getEventTimeData(scheduled_start_time).withinStartWindow;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id) {
        const fn = function o() {
          return GuildStore.getGuild(guild_id);
        };
        cResult[1] = guild_id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj2 = require("ScheduleUtils");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== channel_id) {
        class C {
          constructor() {
            return closure_9.getChannel(channel_id);
          }
        }
        const items2 = [channel_id];
        cResult[4] = channel_id;
        cResult[5] = C;
        cResult[6] = items2;
        let tmp11 = items2;
      } else {
        class C {
          constructor() {
            return closure_9.getChannel(channel_id);
          }
        }
        tmp11 = cResult[6];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, C, tmp11);
      const tmpResult4 = require("initialize");
      if (stateFromStores1 == null) {
        class C {
          constructor() {
            return closure_9.getChannel(channel_id);
          }
        }
      }
      const tmpResult5 = require("useManageResourcePermissions");
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_9.getChannel(channel_id);
          }
        }
        const items3 = [GuildStore];
        cResult[7] = items3;
        const tmp14 = items3;
      } else {
        class C {
          constructor() {
            return closure_9.getChannel(channel_id);
          }
        }
      }
      if (cResult[8] !== guild_id.guild_id) {
        class G {
          constructor() {
            return null != closure_11.getGuild(closure_0.guild_id);
          }
        }
        cResult[8] = guild_id.guild_id;
        cResult[9] = G;
      } else {
        class G {
          constructor() {
            return null != closure_11.getGuild(closure_0.guild_id);
          }
        }
      }
      const canManageGuildEventResult = require("useManageResourcePermissions")
        .useManageResourcePermissions(stateFromStores1)
        .canManageGuildEvent(guild_id);
      if (tmpResult6.useStateFromStores(tmp14, G)) {
        class G {
          constructor() {
            return null != closure_11.getGuild(closure_0.guild_id);
          }
        }
        if (closure_14(guild_id)) {
          class G {
            constructor() {
              return null != closure_11.getGuild(closure_0.guild_id);
            }
          }
          let RSVP = obj15.ENDED;
        } else {
          class G {
            constructor() {
              return null != closure_11.getGuild(closure_0.guild_id);
            }
          }
          if (closure_15(guild_id)) {
            class G {
              constructor() {
                return null != closure_11.getGuild(closure_0.guild_id);
              }
            }
            if (entity_type !== constants.EXTERNAL) {
              class G {
                constructor() {
                  return null != closure_11.getGuild(closure_0.guild_id);
                }
              }
              if (arg1) {
                class G {
                  constructor() {
                    return null != closure_11.getGuild(closure_0.guild_id);
                  }
                }
              } else {
                class G {
                  constructor() {
                    return null != closure_11.getGuild(closure_0.guild_id);
                  }
                }
              }
            }
          } else {
            class G {
              constructor() {
                return null != closure_11.getGuild(closure_0.guild_id);
              }
            }
            RSVP = obj15.RSVP;
          }
        }
      } else {
        class G {
          constructor() {
            return null != closure_11.getGuild(closure_0.guild_id);
          }
        }
        return obj15.JOIN_GUILD;
      }
      tmpResult6 = require("initialize");
    }
  : function usePrimaryActionButtonType(scheduled_start_time, arg1) {
      _require = scheduled_start_time;
      ({ guild_id: importDefault, channel_id } = scheduled_start_time);
      scheduled_start_time = scheduled_start_time.scheduled_start_time;
      const items = [scheduled_start_time];
      const items1 = [GuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items1, () =>
        GuildStore.getGuild(importDefault),
      );
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
        .canManageGuildEvent(scheduled_start_time);
      const obj3 = require("useManageResourcePermissions");
      const items4 = [GuildStore];
      if (tmpResult.useStateFromStores(items4, () => null != GuildStore.getGuild(scheduled_start_time.guild_id))) {
        if (closure_14(scheduled_start_time)) {
          let RSVP = obj15.ENDED;
        } else if (closure_15(scheduled_start_time)) {
          if (scheduled_start_time.entity_type !== constants.EXTERNAL) {
            if (!arg1) {
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
      tmpResult = tmp(channel_id[28]);
    };
let closure_27 = tmp12;
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardRSVPAction(event) {
      const cResult = c.c(12);
      event = event.event;
      [tmp5, tmp6] = closure_25(event, event.recurrenceId);
      let str = "secondary";
      if (tmp5) {
        str = "tertiary";
      }
      if (tmp5) {
        let BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
      } else {
        BellIcon = BellIcon2.BellIcon;
      }
      if (cResult[0] !== tmp5) {
        const obj2 = { checked: tmp5 };
        cResult[0] = tmp5;
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.DlcqlU);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      const combined = "" + tmp8 + ", " + event.name;
      if (cResult[3] !== BellIcon) {
        const tmp13 = guild(BellIcon, { size: "sm" });
        cResult[3] = BellIcon;
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.DlcqlU);
        cResult[5] = stringResult1;
        let tmp14 = stringResult1;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === str) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === combined) {
              if (cResult[10] === tmp11) {
                let tmp16 = cResult[11];
              }
              return tmp16;
            }
          }
        }
      }
      const tmp17 = guild(ThrottledButtonDefault, {
        accessibilityRole: "togglebutton",
        accessibilityState: tmp7,
        accessibilityLabel: combined,
        variant: str,
        icon: tmp11,
        text: tmp14,
        onPress: tmp6,
        grow: true,
      });
      cResult[6] = tmp6;
      cResult[7] = str;
      cResult[8] = tmp7;
      cResult[9] = combined;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp16 = tmp17;
      const tmp4 = _slicedToArray(closure_25(event, event.recurrenceId), 2);
    }
  : function GuildEventCardRSVPAction(event) {
      event = event.event;
      [first, obj.onPress] = closure_25(event, event.recurrenceId);
      let str = "secondary";
      if (first) {
        str = "tertiary";
      }
      if (first) {
        let BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
        let tmp5 = require;
      } else {
        BellIcon = BellIcon2.BellIcon;
        tmp5 = require;
      }
      const obj = {
        accessibilityRole: "togglebutton",
        accessibilityState: { checked: first },
        accessibilityLabel: null,
        variant: null,
        icon: null,
        text: null,
        onPress: null,
        grow: true,
      };
      const intl = tmp5(1126).intl;
      obj.accessibilityLabel = "" + intl.string(tmp5(1126).t.DlcqlU) + ", " + event.name;
      obj.variant = str;
      obj.icon = guild(BellIcon, { size: "sm" });
      const intl2 = tmp5(1126).intl;
      obj.text = intl2.string(tmp5(1126).t.DlcqlU);
      return guild(ThrottledButtonDefault, obj);
    };
let closure_28 = tmp13;
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventIndicateInterestAction(event) {
      const cResult = c.c(12);
      event = event.event;
      [tmp5, tmp6] = closure_25(event, null);
      let str = "secondary";
      if (tmp5) {
        str = "tertiary";
      }
      if (tmp5) {
        let BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
      } else {
        BellIcon = BellIcon2.BellIcon;
      }
      if (cResult[0] !== tmp5) {
        const obj2 = { checked: tmp5 };
        cResult[0] = tmp5;
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.DlcqlU);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      const combined = "" + tmp8 + ", " + event.name;
      if (cResult[3] !== BellIcon) {
        const tmp13 = guild(BellIcon, { size: "sm" });
        cResult[3] = BellIcon;
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.DlcqlU);
        cResult[5] = stringResult1;
        let tmp14 = stringResult1;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === str) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === combined) {
              if (cResult[10] === tmp11) {
                let tmp16 = cResult[11];
              }
              return tmp16;
            }
          }
        }
      }
      const tmp17 = guild(ThrottledButtonDefault, {
        accessibilityRole: "togglebutton",
        accessibilityState: tmp7,
        accessibilityLabel: combined,
        variant: str,
        icon: tmp11,
        text: tmp14,
        onPress: tmp6,
        grow: true,
      });
      cResult[6] = tmp6;
      cResult[7] = str;
      cResult[8] = tmp7;
      cResult[9] = combined;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp16 = tmp17;
      const tmp4 = _slicedToArray(closure_25(event, null), 2);
    }
  : function GuildEventIndicateInterestAction(event) {
      event = event.event;
      [first, obj.onPress] = closure_25(event, null);
      let str = "secondary";
      if (first) {
        str = "tertiary";
      }
      if (first) {
        let BellIcon = CheckmarkLargeIcon.CheckmarkLargeIcon;
        let tmp5 = require;
      } else {
        BellIcon = BellIcon2.BellIcon;
        tmp5 = require;
      }
      const obj = {
        accessibilityRole: "togglebutton",
        accessibilityState: { checked: first },
        accessibilityLabel: null,
        variant: null,
        icon: null,
        text: null,
        onPress: null,
        grow: true,
      };
      const intl = tmp5(1126).intl;
      obj.accessibilityLabel = "" + intl.string(tmp5(1126).t.DlcqlU) + ", " + event.name;
      obj.variant = str;
      obj.icon = guild(BellIcon, { size: "sm" });
      const intl2 = tmp5(1126).intl;
      obj.text = intl2.string(tmp5(1126).t.DlcqlU);
      return guild(ThrottledButtonDefault, obj);
    };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildEventCardPrimaryAction(event) {
        const cResult = event(recurrenceId[18]).c(56);
        event = event.event;
        const onCloseAction = event.onCloseAction;
        recurrenceId = event.recurrenceId;
        const guild_id = event.guild_id;
        const channel_id = event.channel_id;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
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
          let tmp7 = items1;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        let obj = event(recurrenceId[18]);
        const stateFromStores = event(recurrenceId[28]).useStateFromStores(first, tmp6, tmp7);
        closure_6 = channel_id(onCloseAction(tmp2[38])(), 2)[1];
        closure_27(event, event.isConnected);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PermissionStore];
          cResult[4] = items2;
          let tmp10 = items2;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== stateFromStores) {
          class C {
            constructor() {
              return closure_12.can(Permissions.CONNECT, closure_5);
            }
          }
          cResult[5] = stateFromStores;
          cResult[6] = C;
        } else {
          class C {
            constructor() {
              return closure_12.can(Permissions.CONNECT, closure_5);
            }
          }
        }
        const tmpResult = event(recurrenceId[28]);
        const stateFromStores1 = event(recurrenceId[28]).useStateFromStores(tmp10, C);
        if (cResult[7] === event.guild_id) {
          class C {
            constructor() {
              return closure_12.can(Permissions.CONNECT, closure_5);
            }
          }
          if (cResult[10] === event) {
            class C {
              constructor() {
                return closure_12.can(Permissions.CONNECT, closure_5);
              }
            }
          }
          function handleStartEvent() {
            if (onCloseAction != null) {
              tmp();
            }
            const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(
              event,
              recurrenceId,
            );
          }
          cResult[10] = event;
          cResult[11] = onCloseAction;
          cResult[12] = recurrenceId;
          cResult[13] = handleStartEvent;
        }
        function handleEndEvent() {
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
            return onCloseAction(recurrenceId[40]).endEvent(event.id, event.guild_id);
          };
          obj2.confirmColor = common_AlertDefault.Colors.RED;
          actions_AlertActionCreatorsDefault.show(obj2);
        }
        cResult[7] = event.guild_id;
        cResult[8] = event.id;
        cResult[9] = handleEndEvent;
        const tmpResult2 = event(recurrenceId[28]);
      }
    : function GuildEventCardPrimaryAction(event) {
        event = event.event;
        ({ onCloseAction: importDefault, recurrenceId } = event);
        c3 = undefined;
        channel_id = undefined;
        ({ guild_id: c3, channel_id } = event);
        const items = [ChannelStore];
        const items1 = [channel_id];
        const id = event(recurrenceId[28]).useStateFromStores(items, () => ChannelStore.getChannel(channel_id), items1);
        closure_6 = channel_id(require("useSelectStage")(), 2)[1];
        const tmp4 = closure_27(event, event.isConnected);
        let obj = event(recurrenceId[28]);
        const items2 = [PermissionStore];
        const stateFromStores = event(recurrenceId[28]).useStateFromStores(items2, () =>
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
          const intl10 = tmp(recurrenceId[24]).intl;
          obj3.text = intl10.string(tmp(recurrenceId[24]).t.Pj7Xrv);
          const intl11 = tmp(recurrenceId[24]).intl;
          const _HermesInternal6 = HermesInternal;
          obj3.accessibilityLabel = "" + intl11.string(tmp(recurrenceId[24]).t.Pj7Xrv) + ", " + event.name;
          obj3.onPress = onPress;
          return closure_21(require("ThrottledButton"), obj3);
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
            const intl9 = tmp(recurrenceId[24]).intl;
            const string = intl9.string;
            const t = tmp(recurrenceId[24]).t;
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
            return closure_21(require("ThrottledButton"), obj4);
          } else if (obj15.CONNECTED === tmp4) {
            const obj5 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
            const intl7 = tmp(recurrenceId[24]).intl;
            obj5.text = intl7.string(tmp(recurrenceId[24]).t.aW2YlJ);
            const intl8 = tmp(recurrenceId[24]).intl;
            const _HermesInternal4 = HermesInternal;
            obj5.accessibilityLabel = "" + intl8.string(tmp(recurrenceId[24]).t.aW2YlJ) + ", " + event.name;
            obj5.onPress = handleListenIn;
            return closure_21(require("ThrottledButton"), obj5);
          } else if (obj15.RSVP === tmp4) {
            const obj6 = { event, recurrenceId };
            return closure_21(closure_28, obj6);
          } else if (obj15.START === tmp4) {
            const obj7 = { variant: "active", text: null, accessibilityLabel: null, onPress: null, grow: true };
            const intl5 = tmp(recurrenceId[24]).intl;
            obj7.text = intl5.string(tmp(recurrenceId[24]).t.cK1GGY);
            const intl6 = tmp(recurrenceId[24]).intl;
            const _HermesInternal3 = HermesInternal;
            obj7.accessibilityLabel = "" + intl6.string(tmp(recurrenceId[24]).t.cK1GGY) + ", " + event.name;
            obj7.onPress = function handleStartEvent() {
              if (importDefault != null) {
                tmp();
              }
              const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(
                event,
                recurrenceId,
              );
            };
            return closure_21(require("ThrottledButton"), obj7);
          } else if (obj15.STARTED === tmp4) {
            const obj8 = {
              variant: "secondary",
              text: null,
              accessibilityLabel: null,
              grow: true,
              disabled: true,
              onPress: null,
            };
            let intl3 = tmp(recurrenceId[24]).intl;
            obj8.text = intl3.string(tmp(recurrenceId[24]).t.Yz0V6O);
            let intl4 = tmp(recurrenceId[24]).intl;
            const _HermesInternal2 = HermesInternal;
            obj8.accessibilityLabel = "" + intl4.string(tmp(recurrenceId[24]).t.Yz0V6O) + ", " + event.name;
            obj8.onPress = onPress;
            return closure_21(require("ThrottledButton"), obj8);
          } else if (obj15.END === tmp4) {
            const obj9 = { variant: "secondary", text: null, accessibilityLabel: null, onPress: null, grow: true };
            let intl = tmp(recurrenceId[24]).intl;
            obj9.text = intl.string(tmp(recurrenceId[24]).t.qaYzPA);
            let intl2 = tmp(recurrenceId[24]).intl;
            const _HermesInternal = HermesInternal;
            obj9.accessibilityLabel = "" + intl2.string(tmp(recurrenceId[24]).t.qaYzPA) + ", " + event.name;
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
            return closure_21(require("ThrottledButton"), obj9);
          } else if (obj15.JOIN_GUILD === tmp4) {
            const obj10 = { event, recurrenceId };
            return closure_21(GuildEventJoinAndRSVPAction, obj10);
          } else {
            tmp(recurrenceId[43]).assertNever(tmp4);
            const tmpResult = tmp(recurrenceId[43]);
          }
        }
        let obj2 = event(recurrenceId[28]);
      },
);
ReactCompilerGating = fn(558);
let tmp16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserCountIconPill(event) {
      const cResult = c.c(7);
      event = event.event;
      let guild_id;
      if (event != null) {
        guild_id = event.guild_id;
      }
      let id;
      if (event != null) {
        id = event.id;
      }
      const tmp4Result = useGuildScheduledEventUserCountDefault(guild_id, id, event.recurrenceId);
      if (cResult[0] !== tmp4Result) {
        const intl = util.intl;
        const obj2 = { count: tmp4Result };
        const formatToPlainStringResult = intl.formatToPlainString(util.t["+DLsD8"], obj2);
        cResult[0] = tmp4Result;
        cResult[1] = formatToPlainStringResult;
        let tmp7 = formatToPlainStringResult;
      } else {
        tmp7 = cResult[1];
      }
      const combined = "" + tmp7 + ", " + event.name;
      if (cResult[2] !== tmp4Result) {
        const toLocaleStringResult = tmp4Result.toLocaleString();
        cResult[2] = tmp4Result;
        cResult[3] = toLocaleStringResult;
        let tmp10 = toLocaleStringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === combined) {
        if (cResult[5] === tmp10) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
      const tmp13 = guild(native.IconPill, {
        accessibilityLabel: combined,
        IconComponent: GroupIcon.GroupIcon,
        text: tmp10,
      });
      cResult[4] = combined;
      cResult[5] = tmp10;
      cResult[6] = tmp13;
      tmp12 = tmp13;
      const obj3 = { accessibilityLabel: combined, IconComponent: GroupIcon.GroupIcon, text: tmp10 };
    }
  : function UserCountIconPill(event) {
      event = event.event;
      let guild_id;
      if (event != null) {
        guild_id = event.guild_id;
      }
      let id;
      if (event != null) {
        id = event.id;
      }
      const tmp2Result = useGuildScheduledEventUserCountDefault(guild_id, id, event.recurrenceId);
      const obj = { accessibilityLabel: null, IconComponent: null, text: null };
      const intl = util.intl;
      obj.accessibilityLabel =
        "" + intl.formatToPlainString(util.t["+DLsD8"], { count: tmp2Result }) + ", " + event.name;
      obj.IconComponent = GroupIcon.GroupIcon;
      obj.text = tmp2Result.toLocaleString();
      return guild(native.IconPill, obj);
    };
let closure_30 = tmp16;
ReactCompilerGating = fn(558);
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardImageHeader(event) {
      const cResult = c.c(10);
      event = event.event;
      const tmp4 = styles();
      let width = useWindowDimensionsDefault().width;
      [tmp7, require] = noop.useState(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(nativeEvent) {
          const width = nativeEvent.nativeEvent.layout.width;
          if (width > 0) {
            _require((arg0) => {
              let tmp = width;
              if (Math.abs(arg0 - width) < 1) {
                tmp = arg0;
              }
              return tmp;
            });
          }
        };
        cResult[0] = fn;
        let first = fn;
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
          if (cResult[2] === width) {
            let tmp9 = cResult[3];
          }
          if (cResult[4] === tmp9) {
            if (cResult[5] === tmp4.imageHeaderBanner) {
              let tmp11 = cResult[6];
            }
            if (cResult[7] === tmp4.imageHeaderContainer) {
              if (cResult[8] === tmp11) {
                let tmp14 = cResult[9];
              }
              return tmp14;
            }
            const obj2 = { style: tmp4.imageHeaderContainer, onLayout: first, children: tmp11 };
            const tmp17 = guild(timestampProducer, obj2);
            cResult[7] = tmp4.imageHeaderContainer;
            cResult[8] = tmp11;
            cResult[9] = tmp17;
            tmp14 = tmp17;
          }
          const obj3 = { style: tmp4.imageHeaderBanner, source: tmp9, resizeMode: "cover" };
          const tmp13 = guild(FastImageDefault, obj3);
          cResult[4] = tmp9;
          cResult[5] = tmp4.imageHeaderBanner;
          cResult[6] = tmp13;
          tmp11 = tmp13;
        }
        const source = AvatarUtils.makeSource(getGuildEventImageDefault(event, width));
        cResult[1] = event;
        cResult[2] = width;
        cResult[3] = source;
        tmp9 = source;
        const tmpResult = AvatarUtils;
      }
      const tmp6 = _slicedToArray(noop.useState(0), 2);
    }
  : function GuildEventCardImageHeader(event) {
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
        const source = AvatarUtils.makeSource(getGuildEventImageDefault(event, width));
        const obj3 = { style: tmp.imageHeaderBanner, source, resizeMode: "cover" };
        obj2.children = guild(FastImageDefault, obj3);
        return guild(timestampProducer, obj2);
      }
      const tmp4 = _slicedToArray(noop.useState(0), 2);
    };
ReactCompilerGating = fn(558);
let tmp18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardTitle(condensed) {
      const cResult = c.c(13);
      ({ event, style, textStyle, onPress } = condensed);
      const tmp4 = styles();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.epxpiy);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === style) {
        if (cResult[2] === tmp4.topicContainer) {
          let tmp7 = cResult[3];
        }
        let num2;
        if (condensed.condensed) {
          num2 = 1;
        }
        if (cResult[4] === event.name) {
          if (cResult[5] === num2) {
            if (cResult[6] === textStyle) {
              let tmp8 = cResult[7];
            }
            if (cResult[8] === event.name) {
              if (cResult[9] === onPress) {
                if (cResult[10] === tmp7) {
                  if (cResult[11] === tmp8) {
                    let tmp11 = cResult[12];
                  }
                  return tmp11;
                }
              }
            }
            const obj2 = {
              accessibilityRole: "button",
              accessibilityHint: first,
              accessibilityLabel: event.name,
              onPress,
              style: tmp7,
              children: tmp8,
            };
            const tmp14 = guild(React5, obj2);
            cResult[8] = event.name;
            cResult[9] = onPress;
            cResult[10] = tmp7;
            cResult[11] = tmp8;
            cResult[12] = tmp14;
            tmp11 = tmp14;
          }
        }
        const obj3 = {
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          style: textStyle,
          lineClamp: num2,
          children: event.name,
        };
        const tmp10 = guild(Text_Text.Text, obj3);
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
    }
  : function GuildEventCardTitle(event) {
      event = event.event;
      ({ style, textStyle, condensed, onPress } = event);
      const obj = {
        accessibilityRole: "button",
        accessibilityHint: null,
        accessibilityLabel: null,
        onPress: null,
        style: null,
        children: null,
      };
      const intl = util.intl;
      obj.accessibilityHint = intl.string(util.t.epxpiy);
      obj.accessibilityLabel = event.name;
      obj.onPress = onPress;
      const items = [styles().topicContainer, style];
      obj.style = items;
      const obj2 = {
        variant: "text-md/bold",
        color: "mobile-text-heading-primary",
        style: textStyle,
        lineClamp: null,
        children: null,
      };
      let num;
      if (condensed) {
        num = 1;
      }
      obj2.lineClamp = num;
      obj2.children = event.name;
      obj.children = guild(Text_Text.Text, obj2);
      return guild(React5, obj);
    };
let closure_31 = tmp18;
ReactCompilerGating = fn(558);
let tmp19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardDescription(condensed) {
      const cResult = c.c(13);
      ({ event, style, textStyle, numberOfLines } = condensed);
      ({ description, guild_id } = event);
      const tmp4 = styles();
      let tmp5 = null;
      if (null != description) {
        tmp5 = null;
        if (description.length > 0) {
          tmp5 = null;
          if (!condensed.condensed) {
            tmp5 = null;
            if (null != description) {
              if (cResult[0] === style) {
                if (cResult[1] === tmp4.detailsContainer) {
                  let tmp6 = cResult[2];
                }
                if (cResult[3] === description) {
                  if (cResult[4] === guild_id) {
                    let tmp7 = cResult[5];
                  }
                  if (cResult[6] === numberOfLines) {
                    if (cResult[7] === tmp7) {
                      if (cResult[8] === textStyle) {
                        let tmp9 = cResult[9];
                      }
                      if (cResult[10] === tmp6) {
                      }
                      const obj2 = { style: tmp6, children: tmp9 };
                      const tmp15 = guild(timestampProducer, obj2);
                      cResult[10] = tmp6;
                      cResult[11] = tmp9;
                      cResult[12] = tmp15;
                    }
                  }
                  const obj3 = {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    style: textStyle,
                    lineClamp: numberOfLines,
                    children: tmp7,
                  };
                  const tmp11 = guild(Text_Text.Text, obj3);
                  cResult[6] = numberOfLines;
                  cResult[7] = tmp7;
                  cResult[8] = textStyle;
                  cResult[9] = tmp11;
                  tmp9 = tmp11;
                }
                const obj4 = { guildId: guild_id, allowLinks: true, allowHeading: true, allowList: true };
                const result = guildEventDetailsParser.guildEventDetailsParser(description, true, obj4);
                cResult[3] = description;
                cResult[4] = guild_id;
                cResult[5] = result;
                tmp7 = result;
                const tmpResult = guildEventDetailsParser;
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
    }
  : function GuildEventCardDescription(event) {
      event = event.event;
      const description = event.description;
      ({ style, textStyle, numberOfLines, condensed } = event);
      let tmp2 = null;
      if (null != description) {
        tmp2 = null;
        if (description.length > 0) {
          tmp2 = null;
          if (!condensed) {
            tmp2 = null;
            if (null != description) {
              const obj = { style: null, children: null };
              const items = [tmp.detailsContainer, style];
              obj.style = items;
              const obj2 = {
                variant: "text-md/medium",
                color: "text-subtle",
                style: textStyle,
                lineClamp: numberOfLines,
                children: null,
              };
              const obj4 = { guildId: event.guild_id, allowLinks: true, allowHeading: true, allowList: true };
              obj2.children = guildEventDetailsParser.guildEventDetailsParser(description, true, obj4);
              obj.children = guild(Text_Text.Text, obj2);
              tmp2 = guild(timestampProducer, obj);
            }
          }
        }
      }
      return tmp2;
    };
let closure_32 = tmp19;
ReactCompilerGating = fn(558);
let tmp17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardHeader(event) {
      const cResult = event(shouldChangeTextColor[18]).c(49);
      event = event.event;
      ({ recurrenceId, showUserCount, showEndDate, isPreview, showCreator, isNew, isActive, style } = event);
      newBadge = undefined !== isNew && isNew;
      const tmp6 = styles();
      let obj = event(shouldChangeTextColor[18]);
      const tmp4 = undefined === showUserCount || showUserCount;
      const tmp7 = color;
      let id;
      const tmp8 = color(shouldChangeTextColor[51])();
      if (event != null) {
        id = event.id;
      }
      let obj2 = color(shouldChangeTextColor[52])(recurrenceId, id);
      if (obj2 == null) {
        obj2 = {};
      }
      const is_canceled = obj2.is_canceled;
      const tmp12 = tmp7(shouldChangeTextColor[53])(event, recurrenceId);
      let startTime1;
      if (tmp12 != null) {
        startTime1 = tmp12.startTime;
      }
      if (cResult[0] !== startTime1) {
        let toISOStringResult;
        if (tmp12 != null) {
          const startTime = tmp12.startTime;
          toISOStringResult = startTime.toISOString();
        }
        let startTime2;
        if (tmp12 != null) {
          startTime2 = tmp12.startTime;
        }
        cResult[0] = startTime2;
        cResult[1] = toISOStringResult;
        let tmp14 = toISOStringResult;
      } else {
        tmp14 = cResult[1];
      }
      let endTime;
      if (tmp12 != null) {
        endTime = tmp12.endTime;
      }
      if (cResult[2] === endTime) {
        if (cResult[3] === tmp5) {
          let tmp18 = cResult[4];
        }
        if (cResult[5] === tmp18) {
          if (cResult[6] === tmp14) {
            let tmp22 = cResult[7];
          }
          const obj3 = {
            eventTimeData: tmp22,
            isStage: event.entity_type === constants.STAGE_INSTANCE,
            theme: tmp8,
            event,
            isCanceled: tmp11,
            recurrenceId,
          };
          const guildScheduledEventHeaderProps = tmp(shouldChangeTextColor[54]).getGuildScheduledEventHeaderProps(obj3);
          color = guildScheduledEventHeaderProps.color;
          ({ text, shouldChangeTextColor } = guildScheduledEventHeaderProps);
          const endDateTimeString = tmp22.endDateTimeString;
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            function handleOpenRSVPList() {}
            cResult[8] = handleOpenRSVPList;
          }
          if (!tmp4) {
            const _Symbol2 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [UserStore];
              cResult[15] = items;
              let tmp33 = items;
            } else {
              tmp33 = cResult[15];
            }
            if (cResult[16] !== event.creator_id) {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
              cResult[16] = event.creator_id;
              cResult[17] = Z;
            } else {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
            }
            if (cResult[18] !== event) {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
              tmp37[0] = event;
              cResult[18] = event;
              cResult[19] = tmp37;
            } else {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
            }
            const stateFromStores = tmp(shouldChangeTextColor[28]).useStateFromStores(tmp33, Z, tmp37);
            let tmp39 = null != endDateTimeString;
            if (tmp39) {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
              tmp39 = "" !== endDateTimeString;
            }
            if (tmp39) {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
              const obj4 = {
                start: text,
                startHook(children) {
                  let tmp2 = shouldChangeTextColor;
                  if (shouldChangeTextColor) {
                    const obj = { color };
                    tmp2 = obj;
                  }
                  return guild(Text_Text.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    style: tmp2,
                    children,
                  });
                },
                end: endDateTimeString,
              };
              obj8.format(tmp(shouldChangeTextColor[24]).t.vHYgJW, obj4);
            }
            if (cResult[20] === style) {
              class Z {
                constructor() {
                  return closure_13.getUser(event.creator_id);
                }
              }
              if (cResult[23] === color) {
                class Z {
                  constructor() {
                    return closure_13.getUser(event.creator_id);
                  }
                }
              }
              if (newBadge) {
                class Z {
                  constructor() {
                    return closure_13.getUser(event.creator_id);
                  }
                }
                tmp45[0] = tmp6.newBadge;
                let tmp42Result = closure_21(tmp(shouldChangeTextColor[49]).NewTag, tmp45);
              } else {
                class Z {
                  constructor() {
                    return closure_13.getUser(event.creator_id);
                  }
                }
                tmp43[1] = color;
                tmp43[2] = tmp6.dateIcon;
                tmp42Result = closure_21(tmp(shouldChangeTextColor[57]).CalendarIcon, tmp43);
              }
              cResult[23] = color;
              cResult[24] = newBadge;
              ({ dateIcon: tmp3[25], newBadge } = tmp6);
              cResult[26] = newBadge;
              cResult[27] = tmp42Result;
            }
            const items1 = [tmp6.headerContainer, style];
            cResult[20] = style;
            cResult[21] = tmp6.headerContainer;
            cResult[22] = items1;
            const tmpResult3 = tmp(shouldChangeTextColor[28]);
          } else {
            class Z {
              constructor() {
                return closure_13.getUser(event.creator_id);
              }
            }
            const obj5 = { event, recurrenceId };
            const tmp32 = closure_21(closure_30, obj5);
            cResult[9] = event;
            cResult[10] = recurrenceId;
            cResult[11] = tmp32;
          }
          const tmpResult = tmp(shouldChangeTextColor[54]);
        }
        const eventTimeData = tmp(shouldChangeTextColor[34]).getEventTimeData(tmp14, tmp18);
        cResult[5] = tmp18;
        cResult[6] = tmp14;
        cResult[7] = eventTimeData;
        tmp22 = eventTimeData;
        const tmpResult4 = tmp(shouldChangeTextColor[34]);
      }
      let tmp19;
      if (undefined !== showEndDate && showEndDate) {
        class Z {
          constructor() {
            return closure_13.getUser(event.creator_id);
          }
        }
        if (tmp12 != null) {
          class Z {
            constructor() {
              return closure_13.getUser(event.creator_id);
            }
          }
          if (tmp21 != null) {
            class Z {
              constructor() {
                return closure_13.getUser(event.creator_id);
              }
            }
          }
        }
        tmp19 = tmp20;
      }
      if (tmp12 != null) {
        class Z {
          constructor() {
            return closure_13.getUser(event.creator_id);
          }
        }
      }
      cResult[2] = undefined;
      cResult[3] = undefined !== showEndDate && showEndDate;
      cResult[4] = tmp19;
      tmp18 = tmp19;
      tmp11 = undefined !== is_canceled && is_canceled;
      const tmp9 = color(shouldChangeTextColor[52]);
    }
  : function GuildEventCardHeader(event) {
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
      const tmp8 = tmp2(toISOStringResult1[53])(event, recurrenceId);
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
      const guildScheduledEventHeaderProps = event(toISOStringResult1[54]).getGuildScheduledEventHeaderProps({
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
        const tmp18 = closure_21(closure_30, obj4);
        let tmp16Result = tmp18;
        if (!flag2) {
          const obj5 = {
            accessibilityRole: "button",
            onPress: function handleOpenRSVPList() {},
            children: tmp18,
          };
          tmp16Result = closure_21(tmp13(tmp3[55]).PressableOpacity, obj5);
        }
        tmp15 = tmp16Result;
      }
      const obj2 = event(toISOStringResult1[54]);
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
      const stateFromStores = event(toISOStringResult1[28]).useStateFromStores(
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
        const intl = tmp13(tmp3[24]).intl;
        const obj6 = {
          start: text,
          startHook(children) {
            let tmp2 = shouldChangeTextColor;
            if (shouldChangeTextColor) {
              const obj = { color };
              tmp2 = obj;
            }
            return guild(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", style: tmp2, children });
          },
          end: endDateTimeString,
        };
        formatResult = intl.format(tmp13(tmp3[24]).t.vHYgJW, obj6);
      }
      const obj7 = { style: null, children: null };
      const items3 = [tmp.headerContainer, event.style];
      obj7.style = items3;
      if (flag4) {
        const obj8 = { containerStyle: tmp.newBadge, variant: "text-xs/bold" };
        let tmp25Result = closure_21(tmp13(tmp3[49]).NewTag, obj8);
        let tmp27 = closure_21;
      } else {
        const obj9 = { size: "sm", color, style: tmp.dateIcon };
        tmp25Result = closure_21(tmp13(tmp3[57]).CalendarIcon, obj9);
        tmp27 = closure_21;
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
      obj10.children = tmp27(event(toISOStringResult1[56]).Text, obj12);
      items4[1] = tmp27(closure_6, obj10);
      if (flag3) {
        flag3 = null != stateFromStores;
      }
      if (flag3) {
        const obj14 = {
          accessible: true,
          accessibilityLabel: null,
          user: null,
          guildId: null,
          size: null,
          style: null,
        };
        const intl2 = tmp13(tmp3[24]).intl;
        obj15 = { username: stateFromStores.username };
        const _HermesInternal = HermesInternal;
        obj14.accessibilityLabel =
          "" + intl2.formatToPlainString(tmp13(tmp3[24]).t["+3iypQ"], obj15) + ", " + event.name;
        obj14.user = stateFromStores;
        obj14.guildId = event.guild_id;
        obj14.size = tmp13(tmp3[49]).AvatarSizes.XSMALL_20;
        obj14.style = tmp.creatorAvatar;
        flag3 = tmp27(tmp13(tmp3[49]).Avatar, obj14);
      }
      items4[2] = flag3;
      items4[3] = tmp15;
      obj7.children = items4;
      return closure_22(closure_6, obj7);
    };
ReactCompilerGating = fn(558);
let tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardMetaInfo(arg0) {
      const cResult = c.c(14);
      ({
        event,
        titleStyle,
        titleContainerStyle,
        onTitlePress,
        descriptionStyle,
        descriptionContainerStyle,
        condensed,
      } = arg0);
      if (cResult[0] === condensed) {
        if (cResult[1] === event) {
          if (cResult[2] === onTitlePress) {
            if (cResult[3] === titleContainerStyle) {
              if (cResult[4] === titleStyle) {
                let tmp2 = cResult[5];
              }
              if (cResult[6] === condensed) {
                if (cResult[7] === descriptionContainerStyle) {
                  if (cResult[8] === descriptionStyle) {
                    if (cResult[9] === event) {
                      let tmp4 = cResult[10];
                    }
                    if (cResult[11] === tmp2) {
                      if (cResult[12] === tmp4) {
                        let tmp8 = cResult[13];
                      }
                      return tmp8;
                    }
                    const obj2 = { children: null };
                    const items = [tmp2, tmp4];
                    obj2.children = items;
                    const tmp11 = closure_1_22(closure_1_23, obj2);
                    cResult[11] = tmp2;
                    cResult[12] = tmp4;
                    cResult[13] = tmp11;
                    tmp8 = tmp11;
                  }
                }
              }
              const obj3 = {
                event,
                textStyle: descriptionStyle,
                style: descriptionContainerStyle,
                condensed,
                numberOfLines: 3,
              };
              const tmp7 = guild(closure_32, obj3);
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
      const tmp3 = guild(closure_31, {
        event,
        textStyle: titleStyle,
        style: titleContainerStyle,
        condensed,
        onPress: onTitlePress,
      });
      cResult[0] = condensed;
      cResult[1] = event;
      cResult[2] = onTitlePress;
      cResult[3] = titleContainerStyle;
      cResult[4] = titleStyle;
      cResult[5] = tmp3;
      tmp2 = tmp3;
    }
  : function GuildEventCardMetaInfo(textStyle) {
      ({ event, condensed } = textStyle);
      const obj = { children: null };
      ({ descriptionStyle, descriptionContainerStyle } = textStyle);
      const items = [
        guild(closure_31, {
          event,
          textStyle: textStyle.titleStyle,
          style: textStyle.titleContainerStyle,
          condensed,
          onPress: textStyle.onTitlePress,
        }),
        guild(closure_32, {
          event,
          textStyle: descriptionStyle,
          style: descriptionContainerStyle,
          condensed,
          numberOfLines: 3,
        }),
      ];
      obj.children = items;
      return closure_1_22(closure_1_23, obj);
    };
ReactCompilerGating = fn(558);
let tmp21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventSimpleLocation(event) {
      const cResult = channel_id(576).c(44);
      event = event.event;
      const tmp4 = styles();
      channel_id = event.channel_id;
      let guild_id = event.guild_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
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
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = channel_id(576);
      const stateFromStores = channel_id(504).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberStore, AuthenticationStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      let guild_id1;
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      if (cResult[5] !== guild_id1) {
        let guild_id2;
        if (stateFromStores != null) {
          guild_id2 = stateFromStores.guild_id;
        }
        const fn2 = function _() {
          let guild_id;
          const id = AuthenticationStore.getId();
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          return GuildMemberStore.isMember(guild_id, id);
        };
        cResult[5] = guild_id2;
        cResult[6] = fn2;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== stateFromStores) {
        const items3 = [stateFromStores];
        cResult[7] = stateFromStores;
        cResult[8] = items3;
        let tmp16 = items3;
      } else {
        tmp16 = cResult[8];
      }
      const tmpResult = channel_id(504);
      const stateFromStores1 = channel_id(504).useStateFromStores(tmp10, tmp14, tmp16);
      const tmp19 = stateFromStores(5418)(stateFromStores);
      if (cResult[9] === stateFromStores) {
        if (cResult[10] === tmp19) {
          if (cResult[11] === event) {
            if (cResult[12] === guild_id) {
              if (cResult[13] === stateFromStores1) {
                if (cResult[14] === tmp4) {
                  let tmp20 = cResult[15];
                  let tmp21 = cResult[16];
                  let tmp22 = cResult[17];
                  let tmp23 = cResult[18];
                  let tmp24 = cResult[19];
                  let tmp25 = cResult[20];
                  let tmp26 = cResult[21];
                  let tmp27 = cResult[22];
                  let tmp28 = cResult[23];
                  let tmp29 = cResult[24];
                }
                const _Symbol = Symbol;
                if (tmp26 !== Symbol.for("react.early_return_sentinel")) {
                  return tmp26;
                } else {
                  if (cResult[32] === tmp20) {
                    if (cResult[33] === tmp22) {
                      if (cResult[34] === tmp23) {
                        if (cResult[35] === tmp27) {
                          if (cResult[36] === tmp28) {
                            if (cResult[37] === tmp29) {
                              let tmp48 = cResult[38];
                            }
                            if (cResult[39] === tmp21) {
                              if (cResult[40] === tmp24) {
                                if (cResult[41] === tmp25) {
                                }
                              }
                            }
                            const obj2 = { style: tmp24, children: null };
                            const items4 = [tmp25, tmp48];
                            obj2.children = items4;
                            const tmp53 = closure_22(tmp21, obj2);
                            cResult[39] = tmp21;
                            cResult[40] = tmp24;
                            cResult[41] = tmp25;
                            cResult[42] = tmp48;
                            cResult[43] = tmp53;
                          }
                        }
                      }
                    }
                  }
                  const obj3 = {
                    style: tmp27,
                    accessibilityLabel: tmp28,
                    variant: tmp29,
                    color: tmp22,
                    children: tmp23,
                  };
                  const tmp50 = closure_21(tmp20, obj3);
                  cResult[32] = tmp20;
                  cResult[33] = tmp22;
                  cResult[34] = tmp23;
                  cResult[35] = tmp27;
                  cResult[36] = tmp28;
                  cResult[37] = tmp29;
                  cResult[38] = tmp50;
                  tmp48 = tmp50;
                }
              }
            }
          }
        }
      }
      const tmp18 = stateFromStores;
      const tmpResult5 = channel_id(504);
      const forResult = Symbol.for("react.early_return_sentinel");
      const locationFromEvent = channel_id(8507).getLocationFromEvent(event);
      if (null != stateFromStores) {
        if (cResult[25] === stateFromStores) {
          if (cResult[26] === event) {
            if (cResult[27] === stateFromStores1) {
              let tmp38 = cResult[28];
            }
            if (cResult[29] === tmp38) {
              if (null != stateFromStores) {
                const obj4 = { channel: stateFromStores };
                let combined = tmp18(8634)(obj4);
              } else if (null != locationFromEvent) {
                const intl = tmp(1126).intl;
                const _HermesInternal = HermesInternal;
                combined = "" + intl.string(tmp(1126).t.gwSn4I) + ", " + locationFromEvent;
              }
              if (tmp19 == null) {
                let result = null;
                if (null != locationFromEvent) {
                  const obj5 = { guildId: guild_id };
                  result = tmp(8633).guildEventLocationParser(locationFromEvent, true, obj5);
                  const tmpResult7 = tmp(8633);
                }
              }
              const channelText = tmp4.channelText;
              let tmp33 = forResult;
              const Text = tmp(5087).Text;
            }
            let tmp43 = null != tmp38;
            if (tmp43) {
              const obj6 = { size: "sm", style: tmp4.channelIcon };
              tmp43 = closure_21(tmp38, obj6);
            }
            cResult[29] = tmp38;
            cResult[30] = tmp4.channelIcon;
            cResult[31] = tmp43;
          }
        }
        const eventLocationIconComponent = tmp(8632).getEventLocationIconComponent(
          event,
          stateFromStores,
          stateFromStores1,
        );
        cResult[25] = stateFromStores;
        cResult[26] = event;
        cResult[27] = stateFromStores1;
        cResult[28] = eventLocationIconComponent;
        tmp38 = eventLocationIconComponent;
        const tmpResult8 = tmp(8632);
      } else {
        tmp33 = null;
      }
      cResult[9] = stateFromStores;
      cResult[10] = tmp19;
      cResult[11] = event;
      cResult[12] = guild_id;
      cResult[13] = stateFromStores1;
      cResult[14] = tmp4;
      cResult[15] = Text;
      cResult[16] = tmp40;
      cResult[17] = str2;
      cResult[18] = tmp36;
      cResult[19] = tmp41;
      cResult[20] = tmp34;
      cResult[21] = tmp33;
      cResult[22] = channelText;
      cResult[23] = tmp32;
      cResult[24] = str;
      tmp29 = str;
      tmp28 = tmp32;
      tmp27 = channelText;
      tmp26 = tmp33;
      tmp25 = tmp34;
      tmp24 = tmp41;
      tmp23 = tmp36;
      tmp22 = str2;
      tmp21 = tmp40;
      tmp20 = Text;
      const tmpResult6 = channel_id(8507);
    }
  : function GuildEventSimpleLocation(event) {
      event = event.event;
      const tmp = styles();
      const channel_id = event.channel_id;
      const items = [ChannelStore];
      const items1 = [channel_id];
      const stateFromStores = channel_id(504).useStateFromStores(
        items,
        () => ChannelStore.getChannel(channel_id),
        items1,
      );
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
      let tmp7 = stateFromStores(5418)(stateFromStores);
      const obj2 = channel_id(504);
      const tmp6 = stateFromStores;
      const locationFromEvent = channel_id(8507).getLocationFromEvent(event);
      if (null == stateFromStores) {
        if (null == locationFromEvent) {
          return null;
        }
      }
      const obj3 = channel_id(8507);
      const eventLocationIconComponent = channel_id(8632).getEventLocationIconComponent(
        event,
        stateFromStores,
        stateFromStores1,
      );
      const obj4 = { style: tmp.channelContainer, children: null };
      let tmp12 = null != eventLocationIconComponent;
      if (tmp12) {
        const obj5 = { size: "sm", style: tmp.channelIcon };
        tmp12 = closure_21(eventLocationIconComponent, obj5);
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
        let combined = tmp6(8634)(obj7);
      } else if (null != locationFromEvent) {
        const intl = tmp2(1126).intl;
        const _HermesInternal = HermesInternal;
        combined = "" + intl.string(tmp2(1126).t.gwSn4I) + ", " + locationFromEvent;
      }
      obj6.accessibilityLabel = combined;
      if (tmp7 == null) {
        let result = null;
        if (null != locationFromEvent) {
          const obj8 = { guildId: event.guild_id };
          result = tmp2(8633).guildEventLocationParser(locationFromEvent, true, obj8);
          const tmp2Result2 = tmp2(8633);
        }
        tmp7 = result;
      }
      obj6.children = tmp7;
      items4[1] = closure_21(channel_id(5087).Text, obj6);
      obj4.children = items4;
      return closure_22(closure_6, obj4);
    };
ReactCompilerGating = fn(558);
let tmp22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardSimpleGuildInfo(event) {
      const cResult = guild_id(576).c(20);
      ({ style, textStyle } = event);
      const tmp4 = styles();
      guild_id = event.event.guild_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
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
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = guild_id(576);
      const stateFromStores = guild_id(504).useStateFromStores(first, tmp7, tmp8);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[4] === style) {
          if (cResult[5] === tmp4.guildInfoContainer) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] === stateFromStores) {
            if (cResult[8] === tmp4.guildIcon) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] === stateFromStores.name) {
              if (cResult[11] === textStyle) {
                let tmp16 = cResult[12];
              }
              if (cResult[13] === tmp4.guildInfo) {
                if (cResult[14] === tmp16) {
                  let tmp19 = cResult[15];
                }
                if (cResult[16] === tmp10) {
                  if (cResult[17] === tmp11) {
                  }
                }
                const obj2 = { style: tmp10, children: null };
                const items2 = [tmp11, tmp19];
                obj2.children = items2;
                const tmp26 = closure_22(closure_6, obj2);
                cResult[16] = tmp10;
                cResult[17] = tmp11;
                cResult[18] = tmp19;
                cResult[19] = tmp26;
              }
              const obj3 = { style: tmp4.guildInfo, children: tmp16 };
              const tmp22 = closure_21(closure_6, obj3);
              cResult[13] = tmp4.guildInfo;
              cResult[14] = tmp16;
              cResult[15] = tmp22;
              tmp19 = tmp22;
            }
            const obj4 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
            const tmp18 = closure_21(tmp(5087).Text, obj4);
            cResult[10] = stateFromStores.name;
            cResult[11] = textStyle;
            cResult[12] = tmp18;
            tmp16 = tmp18;
          }
          const obj5 = { guild: stateFromStores, size: tmp(6165).GuildIconSizes.XSMALL_20, style: tmp4.guildIcon };
          const tmp15 = closure_21(GuildIconDefault, obj5);
          cResult[7] = stateFromStores;
          cResult[8] = tmp4.guildIcon;
          cResult[9] = tmp15;
          tmp11 = tmp15;
        }
        const items3 = [tmp4.guildInfoContainer, style];
        cResult[4] = style;
        cResult[5] = tmp4.guildInfoContainer;
        cResult[6] = items3;
        tmp10 = items3;
      }
      const tmpResult = guild_id(504);
    }
  : function GuildEventCardSimpleGuildInfo(arg0) {
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
        const obj3 = { guild: stateFromStores, size: tmp2(6165).GuildIconSizes.XSMALL_20, style: tmp.guildIcon };
        const items3 = [closure_21(GuildIconDefault, obj3)];
        const obj4 = { style: tmp.guildInfo, children: null };
        const obj5 = { variant: "text-sm/semibold", style: textStyle, children: stateFromStores.name };
        obj4.children = closure_21(tmp2(5087).Text, obj5);
        items3[1] = closure_21(closure_6, obj4);
        obj2.children = items3;
        tmp5 = closure_22(closure_6, obj2);
      }
      return tmp5;
    };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx",
);

export const useGuildEventCardStyles = styles;
export const GuildEventShareAction = tmp8;
export const GuildEventModeratorAction = tmp9;
export const useEventRsvpState = tmp10;
export const GuildEventIndicateInterestAction = tmp11;
export const PrimaryActionType = obj15;
export const usePrimaryActionButtonType = tmp12;
export const GuildEventCardRSVPAction = tmp13;
export { GuildEventJoinAndRSVPAction };
export const GuildEventCardPrimaryAction = memoResult;
export const GuildEventCardImageHeader = tmp15;
export const UserCountIconPill = tmp16;
export const GuildEventCardHeader = tmp17;
export const GuildEventCardTitle = tmp18;
export const GuildEventCardDescription = tmp19;
export const GuildEventCardMetaInfo = tmp20;
export const GuildEventSimpleLocation = tmp21;
export const GuildEventCardSimpleGuildInfo = tmp22;
export const GuildEventCardGuildInfo = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildEventCardGuildInfo(event) {
      const cResult = channel_id(stateFromStores[18]).c(46);
      event = event.event;
      styles();
      channel_id = event.channel_id;
      let guild_id = event.guild_id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
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
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = channel_id(stateFromStores[18]);
      stateFromStores = channel_id(stateFromStores[28]).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== guild_id) {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
        const items3 = [guild_id];
        cResult[5] = guild_id;
        cResult[6] = C;
        cResult[7] = items3;
        let tmp13 = items3;
      } else {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult = channel_id(stateFromStores[28]);
      const stateFromStores1 = channel_id(stateFromStores[28]).useStateFromStores(tmp10, C, tmp13);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
        const items4 = [GuildMemberStore, AuthenticationStore];
        cResult[8] = items4;
        const tmp15 = items4;
      } else {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
      }
      if (stateFromStores != null) {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
      }
      if (cResult[9] !== undefined) {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
        if (stateFromStores != null) {
          class C {
            constructor() {
              return closure_11.getGuild(guild_id);
            }
          }
        }
        const fn2 = function x() {
          guild_id = undefined;
          const id = AuthenticationStore.getId();
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          return GuildMemberStore.isMember(guild_id, id);
        };
        cResult[9] = tmp18;
        cResult[10] = fn2;
        const tmp17 = fn2;
      } else {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
      }
      if (cResult[11] !== stateFromStores) {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
        tmp20[0] = stateFromStores;
        cResult[11] = stateFromStores;
        cResult[12] = tmp20;
      } else {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
      }
      const tmpResult4 = channel_id(stateFromStores[28]);
      const stateFromStores2 = channel_id(stateFromStores[28]).useStateFromStores(tmp15, tmp17, tmp20);
      const tmp22 = guild_id(stateFromStores[59])(stateFromStores);
      if (null == stateFromStores1) {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
      } else {
        class C {
          constructor() {
            return closure_11.getGuild(guild_id);
          }
        }
        const locationFromEvent = tmp(tmp2[60]).getLocationFromEvent(event);
        let tmp28 = tmp22;
        if (tmp22 == null) {
          class C {
            constructor() {
              return closure_11.getGuild(guild_id);
            }
          }
          if (null != locationFromEvent) {
            class C {
              constructor() {
                return closure_11.getGuild(guild_id);
              }
            }
            const obj2 = { guildId: guild_id };
            const result = obj6.guildEventLocationParser(locationFromEvent, true, obj2);
          }
          tmp28 = result;
        }
        cResult[13] = stateFromStores;
        cResult[14] = tmp22;
        cResult[15] = event;
        cResult[16] = guild_id;
        cResult[17] = locationFromEvent;
        cResult[18] = null != stateFromStores || null != locationFromEvent;
        cResult[19] = tmp28;
        const tmpResult6 = tmp(tmp2[60]);
      }
      const tmpResult5 = channel_id(stateFromStores[28]);
    }
  : function GuildEventCardGuildInfo(event) {
      event = event.event;
      let stateFromStores;
      const tmp = styles();
      const channel_id = event.channel_id;
      let guild_id = event.guild_id;
      const items = [ChannelStore];
      const items1 = [channel_id];
      stateFromStores = channel_id(stateFromStores[28]).useStateFromStores(
        items,
        () => ChannelStore.getChannel(channel_id),
        items1,
      );
      const obj = channel_id(stateFromStores[28]);
      const items2 = [GuildStore];
      const items3 = [guild_id];
      const stateFromStores1 = channel_id(stateFromStores[28]).useStateFromStores(
        items2,
        () => GuildStore.getGuild(guild_id),
        items3,
      );
      const obj2 = channel_id(stateFromStores[28]);
      const items4 = [GuildMemberStore, AuthenticationStore];
      const items5 = [stateFromStores];
      const stateFromStores2 = channel_id(stateFromStores[28]).useStateFromStores(
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
      const tmp8 = guild_id(stateFromStores[59])(stateFromStores);
      if (null == stateFromStores1) {
        return null;
      } else {
        const locationFromEvent = tmp2(tmp3[60]).getLocationFromEvent(event);
        let tmp13Result = null != stateFromStores || null != locationFromEvent;
        let tmp10 = tmp8;
        if (tmp8 == null) {
          let result = null;
          if (null != locationFromEvent) {
            const obj4 = { guildId: guild_id };
            result = tmp2(tmp3[58]).guildEventLocationParser(locationFromEvent, true, obj4);
            const tmp2Result3 = tmp2(tmp3[58]);
          }
          tmp10 = result;
        }
        const tmp2Result = tmp2(tmp3[60]);
        const eventLocationIconSource = tmp2(tmp3[61]).getEventLocationIconSource(
          event,
          stateFromStores,
          stateFromStores2,
        );
        const obj5 = { style: tmp.guildInfoContainer, children: null };
        const obj6 = { guild: stateFromStores1, size: null, style: null };
        const tmp2Result4 = tmp2(tmp3[61]);
        obj6.size = tmp2(tmp3[63]).GuildIconSizes.SMALL;
        obj6.style = tmp.guildIcon;
        const items6 = [closure_21(tmp7(tmp3[63]), obj6)];
        const obj7 = { style: tmp.guildInfo, children: null };
        const obj8 = {
          variant: "text-sm/medium",
          color: "mobile-text-heading-primary",
          children: stateFromStores1.name,
        };
        const items7 = [closure_21(tmp2(tmp3[56]).Text, obj8)];
        if (tmp13Result) {
          const obj9 = {
            style: tmp.guildInfoChannelContainer,
            accessible: true,
            accessibilityLabel: null,
            children: null,
          };
          if (null != stateFromStores) {
            const obj10 = { channel: stateFromStores };
            let combined = tmp7(tmp3[62])(obj10);
          } else if (null != locationFromEvent) {
            const intl = tmp2(tmp3[24]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl.string(tmp2(tmp3[24]).t.gwSn4I) + ", " + locationFromEvent;
          }
          obj9.accessibilityLabel = combined;
          let tmp15Result = null != eventLocationIconSource;
          if (tmp15Result) {
            const obj11 = {
              source: eventLocationIconSource,
              size: tmp2(tmp3[49]).Icon.Sizes.EXTRA_SMALL,
              style: tmp.channelIcon,
              disableColor: true,
            };
            tmp15Result = closure_21(tmp2(tmp3[49]).Icon, obj11);
          }
          const items8 = [tmp15Result];
          const obj12 = {
            style: tmp.guildInfoChannelText,
            variant: "text-xs/medium",
            color: "text-default",
            children: tmp10,
          };
          items8[1] = closure_21(tmp2(tmp3[56]).Text, obj12);
          obj9.children = items8;
          tmp13Result = closure_22(closure_6, obj9);
        }
        items7[1] = tmp13Result;
        obj7.children = items7;
        items6[1] = closure_22(closure_6, obj7);
        obj5.children = items6;
        return closure_22(closure_6, obj5);
      }
      const obj3 = channel_id(stateFromStores[28]);
    };
