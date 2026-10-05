// === Module 17222: VoicePanelFloatingCTAUtils ===

// Module 17222 (VoicePanelFloatingCTAUtils)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import getDeviceSpecificString2 from "getDeviceSpecificString" /* 7452 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 7941 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9174 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11901 */;
import SoundboardIcon from "SoundboardIcon" /* 12185 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17190 */;
import GuildScheduledEventsNoticesActionCreators from "GuildScheduledEventsNoticesActionCreators" /* 17224 */;
import useChannelFloatingCTAContentDefault from "useChannelFloatingCTAContent" /* 17225 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17226 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import EventBannerStore from "EventBannerStore" /* 17223 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getBadConnectionCTAProps(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  _require = arg0;
  let obj = {
    label: intl.string(require("intl").t.uv1tVh),
    subLabel: intl2.string(require("intl").t["gQ14+g"]),
    icon: null,
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    trailing: null
  };
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  ({ IconComponent: require("CircleErrorIcon").CircleErrorIcon, variant: "translucent" });
  const Icon = require("RowButton").RowButton.Icon;
  ({
    accessibilityRole: "button",
    accessibilityLabel: intl3.string(require("intl").t.cpT0Cq),
    hitSlop: 4,
    onPress() {
      const VOICE_PANEL_BAD_CONNECTION_CTA = dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA;
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(VOICE_PANEL_BAD_CONNECTION_CTA);
      if (closure_0 != null) {
        closure_0();
      }
    },
    children: null
  });
  intl3 = require("intl").intl;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function getDismissableCTAProps(arg0) {
  let dismissableContent;
  let getDeviceSpecificString;
  let obj2;
  let require;
  ({ dismissableContent, channel: require } = arg0);
  if (dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {
      icon: jsx(SoundboardIcon.SoundboardIcon, { color: "interactive-icon-default" }),
      onPress() {
          if (null != _require) {
            const obj2 = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
            const obj = soundboard_SoundboardActionCreators;
            const result = obj.showSoundboardSoundPickerActionSheet(obj2);
          }
          const obj3 = DismissibleContentUnsafeUtils;
          const result1 = obj3.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
        },
      label: getDeviceSpecificString(obj2, intl4.t.IJgkPX),
      trailing: null
    };
    obj2 = { quest: intl4.t.XLlWUe };
    getDeviceSpecificString = getDeviceSpecificString2.getDeviceSpecificString;
    getDeviceSpecificString2;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
const Pressable = react_native.Pressable;
let closure_8 = GuildScheduledEventStore.isGuildScheduledEventActive;
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const jsx = Fragment.jsx;
const OverrideFloatingCTA = { BAD_CONNECTION: "BAD_CONNECTION" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let closure_2;
  let first;
  let imminentUpcomingGuildEvents;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp18;
  const tmp = imminentUpcomingGuildEvents;
  let obj = imminentUpcomingGuildEvents(576);
  const cResult = obj.c(28);
  stateFromStores(4791)();
  id = undefined;
  const tmp6 = stateFromStores(17190)(react.useContext(stateFromStores(11901)).channelId);
  const useImminentUpcomingGuildEvents = imminentUpcomingGuildEvents(9160).useImminentUpcomingGuildEvents;
  imminentUpcomingGuildEvents(9160);
  const tmp4 = stateFromStores;
  if (id != null) {
    id = id.id;
  }
  imminentUpcomingGuildEvents = useImminentUpcomingGuildEvents(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EventBannerStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== imminentUpcomingGuildEvents) {
    const fn = function u() {
      let eventDismissed;
      let found = imminentUpcomingGuildEvents.find((id) => !eventDismissed.isEventDismissed(id.id));
      if (found == null) {
        found = null;
      }
      return found;
    };
    const items1 = [imminentUpcomingGuildEvents];
    cResult[1] = imminentUpcomingGuildEvents;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = tmp(573);
  stateFromStores = tmpResult.useStateFromStores(first, tmp12, tmp13);
  let tmp16 = null != stateFromStores;
  const tmpResult3 = tmp(9169);
  tmpResult3.useManageResourcePermissions(id).canManageGuildEvent(stateFromStores);
  if (tmp16) {
    tmp16 = closure_8(stateFromStores);
  }
  if (cResult[4] !== stateFromStores) {
    const tmpResult4 = tmp(9163);
    const nextRecurrenceIdInEvent = tmpResult4.getNextRecurrenceIdInEvent(stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = nextRecurrenceIdInEvent;
    tmp18 = nextRecurrenceIdInEvent;
  } else {
    tmp18 = cResult[5];
  }
  dependencyMap = tmp18;
  let guild_id;
  const tmp4Result = tmp4(9270);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  tmp4Result(guild_id, id1, tmp18);
  if (cResult[6] === stateFromStores) {
    if (cResult[9] !== stateFromStores) {
      class O {
        constructor() {
          if (null != stateFromStores) {
            const obj = GuildScheduledEventsNoticesActionCreators;
            obj.dismissEventBanner(tmp.id);
          }
        }
      }
      cResult[9] = stateFromStores;
      cResult[10] = O;
    } else {
      class O {
        constructor() {
          if (null != stateFromStores) {
            const obj = GuildScheduledEventsNoticesActionCreators;
            obj.dismissEventBanner(tmp.id);
          }
        }
      }
    }
    if (tmp6) {
      class O {
        constructor() {
          if (null != stateFromStores) {
            const obj = GuildScheduledEventsNoticesActionCreators;
            obj.dismissEventBanner(tmp.id);
          }
        }
      }
    }
  }
  class P {
    constructor() {
      if (null != stateFromStores) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = GuildScheduledEventModalActionCreators;
        const result = obj2.openStartGuildEventModal(tmp, closure_2);
      }
    }
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp18;
  cResult[8] = P;
}) : ((id) => {
  let entity_type;
  let imminentUpcomingGuildEvents;
  let intl;
  let intl2;
  let name;
  let nextRecurrenceIdInEvent;
  let obj5;
  let scheduled_start_time;
  let stateFromStores;
  let text;
  let tmp5Result8;
  const tmp = stateFromStores;
  const tmp3 = stateFromStores(nextRecurrenceIdInEvent[11])();
  id = undefined;
  const tmp4 = stateFromStores(nextRecurrenceIdInEvent[13])(react.useContext(stateFromStores(nextRecurrenceIdInEvent[12])).channelId);
  const useImminentUpcomingGuildEvents = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[14]).useImminentUpcomingGuildEvents;
  imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[14]);
  if (id != null) {
    id = id.id;
  }
  imminentUpcomingGuildEvents = useImminentUpcomingGuildEvents(id);
  const items = [EventBannerStore];
  const items1 = [imminentUpcomingGuildEvents];
  const tmp5Result = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[15]);
  stateFromStores = tmp5Result.useStateFromStores(items, () => {
    let eventDismissed;
    let found = imminentUpcomingGuildEvents.find((id) => !eventDismissed.isEventDismissed(id.id));
    if (found == null) {
      found = null;
    }
    return found;
  }, items1);
  let tmp11 = null != stateFromStores;
  const tmp5Result5 = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[16]);
  const canManageGuildEventResult = tmp5Result5.useManageResourcePermissions(id).canManageGuildEvent(stateFromStores);
  if (tmp11) {
    tmp11 = closure_8(stateFromStores);
  }
  const tmp5Result6 = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[17]);
  nextRecurrenceIdInEvent = tmp5Result6.getNextRecurrenceIdInEvent(stateFromStores);
  let guild_id;
  const tmpResult = tmp(nextRecurrenceIdInEvent[18]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const items2 = [stateFromStores, nextRecurrenceIdInEvent];
  [][0] = stateFromStores;
  const tmpResultResult = tmpResult(guild_id, id1, nextRecurrenceIdInEvent);
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = GuildScheduledEventModalActionCreators;
      const result = obj2.openStartGuildEventModal(tmp, nextRecurrenceIdInEvent);
    }
  }, items2);
  if (tmp4) {
    if (null != stateFromStores) {
      if (canManageGuildEventResult) {
        if (!tmp11) {
          ({ scheduled_start_time, name, entity_type } = stateFromStores);
          const STAGE_INSTANCE = constants.STAGE_INSTANCE;
          let obj2 = { eventTimeData: tmp5Result8.getEventTimeData(scheduled_start_time), isStage: entity_type === STAGE_INSTANCE, theme: tmp3, event: stateFromStores };
          const getGuildScheduledEventHeaderProps = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[22]).getGuildScheduledEventHeaderProps;
          imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[22]);
          tmp5Result8 = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[17]);
          const obj3 = { onPress: callback, icon: null, label: name, subLabel: "" + text + " \u2022 " + intl.formatToPlainString(imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[25]).t.NywdIj, obj5), trailing: null };
          text = getGuildScheduledEventHeaderProps(obj2).text;
          ({ IconComponent: imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[24]).CalendarIcon, variant: "translucent" });
          const Icon = tmp5(tmp2[23]).RowButton.Icon;
          intl = tmp5(tmp2[25]).intl;
          const _HermesInternal = HermesInternal;
          obj5 = { count: tmpResultResult };
          ({ accessibilityRole: "button", accessibilityLabel: intl2.string(imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[25]).t.cpT0Cq), onPress: tmp19, children: null });
          intl2 = tmp5(tmp2[25]).intl;
          return obj3;
        }
      }
    }
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let intl;
  let intl2;
  let tmp7;
  let user;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp4 = useIsConnectedToVoiceChannelDefault(react.useContext(VoicePanelStateContextDefault).channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
      let id;
      if (user != null) {
        id = user.id;
      }
      const tmp3 = null != id && 1 === ChannelRTCStore.getParticipants(user.id).length;
      return tmp3;
    };
    cResult[1] = id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  id = undefined;
  const useInviteMembersCallback = require("useInviteMembersCallback").useInviteMembersCallback;
  if (id != null) {
    id = id.id;
  }
  const inviteMembersCallback = useInviteMembersCallback(id);
  if (cResult[3] === id) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === stateFromStores) {
        let tmp12;
        if (cResult[6] === inviteMembersCallback) {
          tmp12 = cResult[7];
        }
        return tmp12;
      }
    }
  }
  let tmp13;
  if (null != id) {
    if (!id.isDM()) {
      if (tmp4) {
        if (stateFromStores) {
          const obj2 = { label: intl.string(require("intl").t.N4nebq), subLabel: intl2.string(require("intl").t.o2XPr2), icon: null, onPress: inviteMembersCallback };
          intl = tmp(1126).intl;
          intl2 = tmp(1126).intl;
          ({ IconComponent: require("GroupPlusIcon").GroupPlusIcon, variant: "translucent" });
          const Icon = tmp(8897).RowButton.Icon;
          tmp13 = obj2;
        }
      }
    }
  }
  cResult[3] = id;
  cResult[4] = tmp4;
  cResult[5] = stateFromStores;
  cResult[6] = inviteMembersCallback;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((id) => {
  let intl;
  let intl2;
  let user;
  _require = id;
  let tmp3 = _require;
  const items = [ChannelRTCStore];
  const tmp2 = useIsConnectedToVoiceChannelDefault(react.useContext(VoicePanelStateContextDefault).channelId);
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (user != null) {
      id = user.id;
    }
    const tmp3 = null != id && 1 === ChannelRTCStore.getParticipants(user.id).length;
    return tmp3;
  });
  require("useInviteMembersCallback");
  if (id != null) {
    id = id.id;
  }
  let tmp7;
  if (null != id) {
    if (!id.isDM()) {
      if (tmp2) {
        if (stateFromStores) {
          const obj2 = { label: intl.string(tmp3(1126).t.N4nebq), subLabel: intl2.string(tmp3(1126).t.o2XPr2), icon: null, onPress: tmp6 };
          intl = tmp3(1126).intl;
          intl2 = tmp3(1126).intl;
          ({ IconComponent: tmp3(9716).GroupPlusIcon, variant: "translucent" });
          const Icon = tmp3(8897).RowButton.Icon;
          tmp7 = obj2;
        }
      }
    }
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first1;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp4 = useChannelFloatingCTAContentDefault(arg0);
  const obj2 = require("useGetDismissibleContent");
  const first = _slicedToArray(obj2.useGetDismissibleContent(tmp4), 1)[0];
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp8);
  if (cResult[3] === stateFromStores) {
    let tmp10;
    if (cResult[4] === first) {
      tmp10 = cResult[5];
    }
    const tmp14 = null != tmp10 || null != closure_15(stateFromStores);
    return tmp14;
  }
  const tmp11 = getDismissableCTAProps({ dismissableContent: first, channel: stateFromStores });
  cResult[3] = stateFromStores;
  cResult[4] = first;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let closure_0;
  let dismissableContent;
  let stateFromStores;
  _require = arg0;
  const tmp = dismissableContent(stateFromStores[29])(arg0);
  let obj = require("useGetDismissibleContent");
  dismissableContent = _slicedToArray(obj.useGetDismissibleContent(tmp), 1)[0];
  const items = [ChannelStore];
  const obj2 = require("useStateFromStores");
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  const items1 = [dismissableContent, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = { dismissableContent, channel: stateFromStores };
    return getDismissableCTAProps(obj);
  }, items1);
  const tmp5 = null != memo || null != closure_15(stateFromStores);
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = closure_17(useStateFromSharedValueDefault(react.useContext(VoicePanelStateContextDefault).showFloatingCTA));
  const tmp2 = closure_13(arg0);
  const tmp3 = closure_14(arg0);
  if (tmp == null) {
    tmp = tmp2;
  }
  if (tmp == null) {
    tmp = tmp3;
  }
  return tmp;
}) : ((arg0) => {
  let tmp = closure_17(useStateFromSharedValueDefault(react.useContext(VoicePanelStateContextDefault).showFloatingCTA));
  const tmp2 = closure_13(arg0);
  const tmp3 = closure_14(arg0);
  if (tmp == null) {
    tmp = tmp2;
  }
  if (tmp == null) {
    tmp = tmp3;
  }
  return tmp;
});
let closure_15 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(2);
  const setShowFloatingCTA = react.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
  let tmp2 = null;
  if (arg0 === obj.BAD_CONNECTION) {
    let tmp3;
    if (cResult[0] !== setShowFloatingCTA) {
      const tmp5 = getBadConnectionCTAProps(() => setShowFloatingCTA(null));
      cResult[0] = setShowFloatingCTA;
      cResult[1] = tmp5;
      tmp3 = tmp5;
    } else {
      tmp3 = cResult[1];
    }
    tmp2 = tmp3;
  }
  return tmp2;
}) : ((arg0) => {
  let setShowFloatingCTA;
  let closure_0 = arg0;
  setShowFloatingCTA = react.useContext(setShowFloatingCTA(11901)).setShowFloatingCTA;
  const items = [setShowFloatingCTA, arg0];
  return react.useMemo(() => {
    let tmp = null;
    if (closure_0 === obj.BAD_CONNECTION) {
      tmp = getBadConnectionCTAProps(() => setShowFloatingCTA(null));
    }
    return tmp;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.cpT0Cq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = <Pressable accessibilityRole="button" accessibilityLabel={first} onPress={handleSoundboardMobileFloatingCtaClose}>{jsx(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" })}</Pressable>;
    cResult[1] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const intl = intl4.intl;
  return <Pressable accessibilityRole="button" accessibilityLabel={intl.string(intl4.t.cpT0Cq)} onPress={handleSoundboardMobileFloatingCtaClose}>{null}</Pressable>;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export { OverrideFloatingCTA };
export const useShouldShowFloatingCTA = tmp2;
export const useFloatingCTAProps = tmp3;
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };