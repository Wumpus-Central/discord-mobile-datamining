// === Module 17532: VoicePanelFloatingCTAUtils ===

// Module 17532 (VoicePanelFloatingCTAUtils)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import XSmallIcon from "XSmallIcon" /* 6210 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 7938 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8370 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 8510 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11988 */;
import SoundboardIcon from "SoundboardIcon" /* 12279 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17500 */;
import GuildScheduledEventsNoticesActionCreators from "GuildScheduledEventsNoticesActionCreators" /* 17534 */;
import useChannelFloatingCTAContentDefault from "useChannelFloatingCTAContent" /* 17535 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17536 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import EventBannerStore from "EventBannerStore" /* 17533 */;
import ChannelStore from "ChannelStore" /* 2063 */;

const require = globalThis.__r;

require = fn;
function getBadConnectionCTAProps(arg0) {
  _require = arg0;
  const obj = { label: null, subLabel: null, icon: null, onPress: null, trailing: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.uv1tVh);
  const intl2 = require("util").intl;
  obj.subLabel = intl2.string(require("util").t["gQ14+g"]);
  obj.icon = jsx(require("RowButton").RowButton.Icon, { IconComponent: require("CircleErrorIcon").CircleErrorIcon, variant: "translucent" });
  obj.onPress = function onPress() {
    let tmp;
    if (closure_0 != null) {
      tmp = closure_0();
    }
    return tmp;
  };
  const obj3 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, children: null };
  const intl3 = require("util").intl;
  obj3.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  obj3.onPress = function onPress() {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    if (closure_0 != null) {
      closure_0();
    }
  };
  obj3.children = jsx(require("XSmallIcon").XSmallIcon, { color: "interactive-icon-default" });
  obj.trailing = <Pressable accessibilityRole="button" accessibilityLabel={null} hitSlop={4} onPress={null}>{null}</Pressable>;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function getDismissableCTAProps(arg0) {
  ({ dismissableContent, channel: require } = arg0);
  if (dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {
      icon: jsx(SoundboardIcon.SoundboardIcon, { color: "interactive-icon-default" }),
      onPress() {
          if (null != _require) {
            const obj2 = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
            const result = soundboard_SoundboardActionCreators.showSoundboardSoundPickerActionSheet(obj2);
          }
          const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
        },
      label: null,
      trailing: null
    };
    let obj2 = { quest: util.t.XLlWUe };
    obj.label = getDeviceSpecificString.getDeviceSpecificString(obj2, util.t.IJgkPX);
    obj.trailing = <closure_19 />;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
const Pressable = fn(17).Pressable;
let closure_8 = fn(6059).isGuildScheduledEventActive;
const constants = fn(2069).GuildScheduledEventEntityTypes;
const jsx = fn(21).jsx;
const OverrideFloatingCTA = { BAD_CONNECTION: "BAD_CONNECTION" };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildEventControlsProps(id) {
  const cResult = imminentUpcomingGuildEvents(576).c(28);
  stateFromStores(4991)();
  let obj = imminentUpcomingGuildEvents(576);
  const tmp4 = stateFromStores;
  const tmp6 = stateFromStores(17500)(noop.useContext(stateFromStores(11988)).channelId);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  imminentUpcomingGuildEvents = imminentUpcomingGuildEvents(8630).useImminentUpcomingGuildEvents(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EventBannerStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== imminentUpcomingGuildEvents) {
    const fn = function u() {
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
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  let obj2 = imminentUpcomingGuildEvents(8630);
  stateFromStores = imminentUpcomingGuildEvents(573).useStateFromStores(first, tmp11, tmp12);
  const tmpResult = imminentUpcomingGuildEvents(573);
  let tmp15 = null != stateFromStores;
  imminentUpcomingGuildEvents(8548).useManageResourcePermissions(id).canManageGuildEvent(stateFromStores);
  if (tmp15) {
    tmp15 = closure_8(stateFromStores);
  }
  if (cResult[4] !== stateFromStores) {
    const nextRecurrenceIdInEvent = tmp(8496).getNextRecurrenceIdInEvent(stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = nextRecurrenceIdInEvent;
    let tmp17 = nextRecurrenceIdInEvent;
    const tmpResult4 = tmp(8496);
  } else {
    tmp17 = cResult[5];
  }
  dependencyMap = tmp17;
  let guild_id;
  const tmpResult3 = imminentUpcomingGuildEvents(8548);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  tmp4(8492)(guild_id, id1, tmp17);
  if (cResult[6] === stateFromStores) {
    if (cResult[9] !== stateFromStores) {
      class F {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[21]);
            dismissEventBannerResult = obj.dismissEventBanner(tmp.id);
          }
          return;
        }
      }
      cResult[9] = stateFromStores;
      cResult[10] = F;
    } else {
      class F {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[21]);
            dismissEventBannerResult = obj.dismissEventBanner(tmp.id);
          }
          return;
        }
      }
    }
    if (tmp6) {
      class F {
        constructor() {
          if (null != closure_1) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[21]);
            dismissEventBannerResult = obj.dismissEventBanner(tmp.id);
          }
          return;
        }
      }
    }
  }
  const fn2 = function f() {
    if (null != stateFromStores) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(tmp, closure_2);
    }
  };
  cResult[6] = stateFromStores;
  cResult[7] = tmp17;
  cResult[8] = fn2;
  const tmp4Result = tmp4(8492);
}) : (function useGuildEventControlsProps(id) {
  const tmp = stateFromStores;
  const tmp3 = stateFromStores(nextRecurrenceIdInEvent[11])();
  const tmp4 = stateFromStores(nextRecurrenceIdInEvent[13])(noop.useContext(stateFromStores(nextRecurrenceIdInEvent[12])).channelId);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  imminentUpcomingGuildEvents = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[14]).useImminentUpcomingGuildEvents(id);
  let obj2 = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[14]);
  const items = [EventBannerStore];
  const items1 = [imminentUpcomingGuildEvents];
  stateFromStores = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[15]).useStateFromStores(items, () => {
    let found = imminentUpcomingGuildEvents.find((id) => !eventDismissed.isEventDismissed(id.id));
    if (found == null) {
      found = null;
    }
    return found;
  }, items1);
  const tmp5Result = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[15]);
  let tmp10 = null != stateFromStores;
  const tmp5Result5 = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[16]);
  if (tmp10) {
    tmp10 = closure_8(stateFromStores);
  }
  const canManageGuildEventResult = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[16]).useManageResourcePermissions(id).canManageGuildEvent(stateFromStores);
  nextRecurrenceIdInEvent = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[17]).getNextRecurrenceIdInEvent(stateFromStores);
  let guild_id;
  const tmp5Result6 = imminentUpcomingGuildEvents(nextRecurrenceIdInEvent[17]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const items2 = [stateFromStores, nextRecurrenceIdInEvent];
  const tmpResult = tmp(nextRecurrenceIdInEvent[18]);
  [][0] = stateFromStores;
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(tmp, nextRecurrenceIdInEvent);
    }
  }, items2);
  if (tmp4) {
    if (null != stateFromStores) {
      if (canManageGuildEventResult) {
        if (!tmp10) {
          ({ scheduled_start_time, name, entity_type } = stateFromStores);
          const obj3 = { eventTimeData: null, isStage: null, theme: null, event: null };
          const tmp5Result7 = tmp5(tmp2[22]);
          obj3.eventTimeData = tmp5(tmp2[17]).getEventTimeData(scheduled_start_time);
          obj3.isStage = entity_type === constants.STAGE_INSTANCE;
          obj3.theme = tmp3;
          obj3.event = stateFromStores;
          const obj4 = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
          const obj5 = { IconComponent: tmp5(tmp2[24]).CalendarIcon, variant: "translucent" };
          obj4.icon = jsx(tmp5(tmp2[23]).RowButton.Icon, { IconComponent: tmp5(tmp2[24]).CalendarIcon, variant: "translucent" });
          obj4.label = name;
          const intl = tmp5(tmp2[25]).intl;
          const obj6 = { count: tmpResultResult };
          const _HermesInternal = HermesInternal;
          obj4.subLabel = "" + tmp5Result7.getGuildScheduledEventHeaderProps(obj3).text + " \u2022 " + intl.formatToPlainString(tmp5(tmp2[25]).t.NywdIj, obj6);
          const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl2 = tmp5(tmp2[25]).intl;
          obj7.accessibilityLabel = intl2.string(tmp5(tmp2[25]).t.cpT0Cq);
          obj7.onPress = tmp18;
          obj7.children = jsx(tmp5(tmp2[26]).XSmallIcon, { color: "interactive-icon-default" });
          obj4.trailing = <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
          return obj4;
        }
      }
    }
  }
  tmpResultResult = tmp(nextRecurrenceIdInEvent[18])(guild_id, id1, nextRecurrenceIdInEvent);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCallInviteProps(id) {
  _require = id;
  const cResult = require("c").c(8);
  const tmp4 = useIsConnectedToVoiceChannelDefault(noop.useContext(VoicePanelStateContextDefault).channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
      let id;
      if (user != null) {
        id = user.id;
      }
      let tmp3 = null != id;
      if (tmp3) {
        tmp3 = 1 === ChannelRTCStore.getParticipants(user.id).length;
      }
      return tmp3;
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp7);
  const tmpResult = require("useStateFromStores");
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const inviteMembersCallback = require("useInviteMembersCallback").useInviteMembersCallback(id);
  if (cResult[3] === id) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === inviteMembersCallback) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
  }
  let tmp12;
  if (null != id) {
    if (!id.isDM()) {
      if (tmp4) {
        if (stateFromStores) {
          const obj2 = { label: null, subLabel: null, icon: null, onPress: null };
          const intl = tmp(1126).intl;
          obj2.label = intl.string(tmp(1126).t.N4nebq);
          const intl2 = tmp(1126).intl;
          obj2.subLabel = intl2.string(tmp(1126).t.o2XPr2);
          const obj3 = { IconComponent: tmp(10310).GroupPlusIcon, variant: "translucent" };
          obj2.icon = jsx(tmp(8557).RowButton.Icon, { IconComponent: tmp(10310).GroupPlusIcon, variant: "translucent" });
          obj2.onPress = inviteMembersCallback;
          tmp12 = obj2;
        }
      }
    }
  }
  cResult[3] = id;
  cResult[4] = tmp4;
  cResult[5] = stateFromStores;
  cResult[6] = inviteMembersCallback;
  cResult[7] = tmp12;
  tmp11 = tmp12;
  const tmpResult2 = require("useInviteMembersCallback");
}) : (function useCallInviteProps(id) {
  _require = id;
  const tmp2 = useIsConnectedToVoiceChannelDefault(noop.useContext(VoicePanelStateContextDefault).channelId);
  const items = [ChannelRTCStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    let id;
    if (user != null) {
      id = user.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = 1 === ChannelRTCStore.getParticipants(user.id).length;
    }
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
          const obj2 = { label: null, subLabel: null, icon: null, onPress: null };
          const intl = tmp3(1126).intl;
          obj2.label = intl.string(tmp3(1126).t.N4nebq);
          const intl2 = tmp3(1126).intl;
          obj2.subLabel = intl2.string(tmp3(1126).t.o2XPr2);
          const obj3 = { IconComponent: tmp3(10310).GroupPlusIcon, variant: "translucent" };
          obj2.icon = jsx(tmp3(8557).RowButton.Icon, { IconComponent: tmp3(10310).GroupPlusIcon, variant: "translucent" });
          obj2.onPress = tmp6;
          tmp7 = obj2;
        }
      }
    }
  }
  return tmp7;
});
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFloatingCTAProps(arg0) {
  let tmp = closure_17(useStateFromSharedValueDefault(noop.useContext(VoicePanelStateContextDefault).showFloatingCTA));
  const tmp2 = closure_13(arg0);
  if (tmp == null) {
    tmp = tmp2;
  }
  if (tmp == null) {
    tmp = tmp3;
  }
  return tmp;
}) : (function useFloatingCTAProps(arg0) {
  let tmp = closure_17(useStateFromSharedValueDefault(noop.useContext(VoicePanelStateContextDefault).showFloatingCTA));
  const tmp2 = closure_13(arg0);
  if (tmp == null) {
    tmp = tmp2;
  }
  if (tmp == null) {
    tmp = tmp3;
  }
  return tmp;
});
let closure_15 = tmp3;
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOverrideFloatingCTAProps(arg0) {
  const obj = c;
  const cResult = obj.c(2);
  const setShowFloatingCTA = noop.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
  if (arg0 !== obj.BAD_CONNECTION) {
    return null;
  } else if (cResult[0] !== setShowFloatingCTA) {
    const tmp4 = getBadConnectionCTAProps(() => setShowFloatingCTA(null));
    cResult[0] = setShowFloatingCTA;
    cResult[1] = tmp4;
  }
}) : (function useOverrideFloatingCTAProps(arg0) {
  closure_0 = arg0;
  setShowFloatingCTA = noop.useContext(setShowFloatingCTA(11988)).setShowFloatingCTA;
  const items = [setShowFloatingCTA, arg0];
  return noop.useMemo(() => {
    let tmp = null;
    if (closure_0 === obj.BAD_CONNECTION) {
      tmp = getBadConnectionCTAProps(() => setShowFloatingCTA(null));
    }
    return tmp;
  }, items);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseSoundboardMobileFloatingCtaIcon() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.cpT0Cq);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: first, onPress: handleSoundboardMobileFloatingCtaClose, children: jsx(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" }) };
    const tmp10 = <Pressable accessibilityRole="button" accessibilityLabel={first} onPress={handleSoundboardMobileFloatingCtaClose}>{jsx(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" })}</Pressable>;
    cResult[1] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function CloseSoundboardMobileFloatingCtaIcon() {
  const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = handleSoundboardMobileFloatingCtaClose;
  obj.children = jsx(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" });
  return <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export { OverrideFloatingCTA };
export const useShouldShowFloatingCTA = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowFloatingCTA(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  const obj = require("c");
  const tmp = _require;
  const tmp4 = useChannelFloatingCTAContentDefault(arg0);
  const first = _slicedToArray(require("useGetDismissibleContent").useGetDismissibleContent(tmp4), 1)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ChannelStore.getChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = require("useGetDismissibleContent");
  const stateFromStores = tmp(573).useStateFromStores(first1, tmp8);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === first) {
      let tmp10 = cResult[5];
    }
    return null != tmp10 || null != closure_15(stateFromStores);
  }
  const tmp11 = getDismissableCTAProps({ dismissableContent: first, channel: stateFromStores });
  cResult[3] = stateFromStores;
  cResult[4] = first;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const tmpResult = tmp(573);
}) : (function useShouldShowFloatingCTA(arg0) {
  _require = arg0;
  const tmp = dismissableContent(stateFromStores[29])(arg0);
  dismissableContent = _slicedToArray(require("useGetDismissibleContent").useGetDismissibleContent(tmp), 1)[0];
  const obj = require("useGetDismissibleContent");
  const items = [ChannelStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  const items1 = [dismissableContent, stateFromStores];
  const memo = noop.useMemo(() => getDismissableCTAProps({ dismissableContent, channel: stateFromStores }), items1);
  const obj2 = require("useStateFromStores");
  return null != memo || null != closure_15(stateFromStores);
});
export const useFloatingCTAProps = tmp3;
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };