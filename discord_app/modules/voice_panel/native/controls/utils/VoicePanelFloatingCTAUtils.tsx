// === Module 17529: VoicePanelFloatingCTAUtils ===

// Module 17529 (VoicePanelFloatingCTAUtils)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4577 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import XSmallIcon from "XSmallIcon" /* 5899 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 8069 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9789 */;
import SoundboardIcon from "SoundboardIcon" /* 12786 */;
import GuildScheduledEventsNoticesActionCreators from "GuildScheduledEventsNoticesActionCreators" /* 17531 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17534 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4773 */;
import EventBannerStore from "EventBannerStore" /* 17530 */;
import ChannelStore from "ChannelStore" /* 2042 */;

const require = globalThis.__r;

require = fn;
function useFloatingCTAProps(stateFromStores) {
  let tmp3 = setShowFloatingCTA(8542)(noop.useContext(setShowFloatingCTA(12529)).showFloatingCTA);
  _require = tmp3;
  setShowFloatingCTA = undefined;
  setShowFloatingCTA = noop.useContext(setShowFloatingCTA(12529)).setShowFloatingCTA;
  const items = [setShowFloatingCTA, tmp3];
  let memo = noop.useMemo(() => {
    let tmp = null;
    if (closure_0 === obj.BAD_CONNECTION) {
      tmp = getBadConnectionCTAProps(() => setShowFloatingCTA(null));
    }
    return tmp;
  }, items);
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  const tmp5 = setShowFloatingCTA(4691)();
  const tmp6 = setShowFloatingCTA(17512)(noop.useContext(setShowFloatingCTA(12529)).channelId);
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const imminentUpcomingGuildEvents = require("useGuildScheduledEvents").useImminentUpcomingGuildEvents(id1);
  closure_129_0 = imminentUpcomingGuildEvents;
  let obj2 = require("useGuildScheduledEvents");
  const items1 = [EventBannerStore];
  const items2 = [imminentUpcomingGuildEvents];
  stateFromStores = require("useStateFromStores").useStateFromStores(items1, () => {
    let found = closure_0.find((id) => !eventDismissed.isEventDismissed(id.id));
    if (found == null) {
      found = null;
    }
    return found;
  }, items2);
  closure_129_1 = stateFromStores;
  const tmp7Result = require("useStateFromStores");
  let tmp12 = null != stateFromStores;
  const tmp7Result7 = require("useManageResourcePermissions");
  if (tmp12) {
    tmp12 = closure_8(stateFromStores);
  }
  const canManageGuildEventResult = require("useManageResourcePermissions").useManageResourcePermissions(stateFromStores).canManageGuildEvent(stateFromStores);
  const nextRecurrenceIdInEvent = require("ScheduleUtils").getNextRecurrenceIdInEvent(stateFromStores);
  closure_129_2 = nextRecurrenceIdInEvent;
  let guild_id;
  const tmp7Result8 = require("ScheduleUtils");
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id2;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  const items3 = [stateFromStores, nextRecurrenceIdInEvent];
  const tmpResult = setShowFloatingCTA(9884);
  [][0] = stateFromStores;
  const callback = noop.useCallback(() => {
    if (null != setShowFloatingCTA) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = GuildScheduledEventModalActionCreators.openStartGuildEventModal(tmp, dependencyMap);
    }
  }, items3);
  if (tmp6) {
    if (null != stateFromStores) {
      if (canManageGuildEventResult) {
        if (!tmp12) {
          ({ scheduled_start_time, name, entity_type } = stateFromStores);
          const obj3 = { eventTimeData: null, isStage: null, theme: null, event: null };
          const tmp7Result9 = tmp7(9886);
          obj3.eventTimeData = tmp7(9759).getEventTimeData(scheduled_start_time);
          obj3.isStage = entity_type === constants.STAGE_INSTANCE;
          obj3.theme = tmp5;
          obj3.event = stateFromStores;
          const obj4 = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
          const obj5 = { IconComponent: tmp7(9889).CalendarIcon, variant: "translucent" };
          obj4.icon = jsx(tmp7(8878).RowButton.Icon, { IconComponent: tmp7(9889).CalendarIcon, variant: "translucent" });
          obj4.label = name;
          const intl = tmp7(1115).intl;
          const obj6 = { count: tmpResultResult };
          const _HermesInternal = HermesInternal;
          obj4.subLabel = "" + tmp7Result9.getGuildScheduledEventHeaderProps(obj3).text + " \u2022 " + intl.formatToPlainString(tmp7(1115).t.NywdIj, obj6);
          const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl2 = tmp7(1115).intl;
          obj7.accessibilityLabel = intl2.string(tmp7(1115).t.cpT0Cq);
          obj7.onPress = tmp20;
          obj7.children = jsx(tmp7(5899).XSmallIcon, { color: "interactive-icon-default" });
          obj4.trailing = <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
          const tmp21 = obj4;
          const tmp7Result10 = tmp7(9759);
        }
      }
    }
  }
  closure_130_0 = stateFromStores;
  tmpResultResult = setShowFloatingCTA(9884)(guild_id, id2, nextRecurrenceIdInEvent);
  const tmp26 = setShowFloatingCTA(17512)(noop.useContext(setShowFloatingCTA(12529)).channelId);
  const items4 = [ChannelRTCStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items4, () => {
    let id;
    if (closure_0 != null) {
      id = closure_0.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = 1 === ChannelRTCStore.getParticipants(closure_0.id).length;
    }
    return tmp3;
  });
  require("useInviteMembersCallback");
  if (stateFromStores != null) {
    let id = stateFromStores.id;
  }
  if (null != stateFromStores) {
    if (tmp26) {
      if (stateFromStores1) {
        const obj8 = { label: null, subLabel: null, icon: null, onPress: null };
        const intl3 = tmp7(1115).intl;
        obj8.label = intl3.string(tmp7(1115).t.N4nebq);
        const intl4 = tmp7(1115).intl;
        obj8.subLabel = intl4.string(tmp7(1115).t.o2XPr2);
        const obj9 = { IconComponent: tmp7(10295).GroupPlusIcon, variant: "translucent" };
        obj8.icon = jsx(tmp7(8878).RowButton.Icon, { IconComponent: tmp7(10295).GroupPlusIcon, variant: "translucent" });
        obj8.onPress = tmp29;
        const tmp30 = obj8;
      }
    }
  }
  if (memo == null) {
    memo = tmp21;
  }
  if (memo == null) {
    memo = tmp30;
  }
  return memo;
}
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
function CloseSoundboardMobileFloatingCtaIcon() {
  const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = handleSoundboardMobileFloatingCtaClose;
  obj.children = jsx(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" });
  return <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
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
    obj.trailing = <CloseSoundboardMobileFloatingCtaIcon />;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
const Pressable = fn(17).Pressable;
let closure_8 = fn(7771).isGuildScheduledEventActive;
const constants = fn(2048).GuildScheduledEventEntityTypes;
const jsx = fn(21).jsx;
const OverrideFloatingCTA = { BAD_CONNECTION: "BAD_CONNECTION" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export { OverrideFloatingCTA };
export const useShouldShowFloatingCTA = function useShouldShowFloatingCTA(channelId) {
  _require = channelId;
  const tmp = dismissableContent(stateFromStores[27])(channelId);
  dismissableContent = _slicedToArray(require("useGetDismissibleContent").useGetDismissibleContent(tmp), 1)[0];
  const obj = require("useGetDismissibleContent");
  const items = [ChannelStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  const items1 = [dismissableContent, stateFromStores];
  const memo = noop.useMemo(() => getDismissableCTAProps({ dismissableContent, channel: stateFromStores }), items1);
  const obj2 = require("useStateFromStores");
  return null != memo || null != useFloatingCTAProps(stateFromStores);
};
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };