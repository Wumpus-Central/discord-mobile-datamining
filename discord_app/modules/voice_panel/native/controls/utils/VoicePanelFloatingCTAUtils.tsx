// === Module 17054: VoicePanelFloatingCTAUtils ===

// Module 17054 (VoicePanelFloatingCTAUtils)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9698 */;
import GuildScheduledEventsNoticesActionCreators from "GuildScheduledEventsNoticesActionCreators" /* 17056 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17059 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import EventBannerStore from "EventBannerStore" /* 17055 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function useFloatingCTAProps(stateFromStores) {
  let obj = noop;
  let tmp3 = setShowFloatingCTA(8265)(noop.useContext(setShowFloatingCTA(12272)).showFloatingCTA);
  _require = tmp3;
  setShowFloatingCTA = undefined;
  setShowFloatingCTA = noop.useContext(setShowFloatingCTA(12272)).setShowFloatingCTA;
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
  const tmp5 = setShowFloatingCTA(4495)();
  let obj1 = require("useGuildScheduledEvents");
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(id);
  closure_129_0 = imminentUpcomingGuildEvents;
  let tmp7Result = tmp7(563);
  const items1 = [EventBannerStore];
  const items2 = [imminentUpcomingGuildEvents];
  stateFromStores = tmp7Result.useStateFromStores(items1, () => {
    let found = closure_0.find((id) => !eventDismissed.isEventDismissed(id.id));
    if (found == null) {
      found = null;
    }
    return found;
  }, items2);
  closure_129_1 = stateFromStores;
  tmp7Result = tmp7(9671);
  let tmp12 = null != stateFromStores;
  const tmp6 = setShowFloatingCTA(17037)(noop.useContext(setShowFloatingCTA(12272)).channelId);
  if (tmp12) {
    tmp12 = closure_8(stateFromStores);
  }
  const canManageGuildEventResult = tmp7Result.useManageResourcePermissions(stateFromStores).canManageGuildEvent(stateFromStores);
  const nextRecurrenceIdInEvent = require("ScheduleUtils").getNextRecurrenceIdInEvent(stateFromStores);
  closure_129_2 = nextRecurrenceIdInEvent;
  let guild_id;
  const tmp7Result1 = require("ScheduleUtils");
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const items3 = [stateFromStores, nextRecurrenceIdInEvent];
  const tmpResult = setShowFloatingCTA(9780);
  [][0] = stateFromStores;
  const callback = obj.useCallback(() => {
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
          obj = { eventTimeData: null, isStage: null, theme: null, event: null };
          const tmp7Result2 = tmp7(9782);
          obj.eventTimeData = tmp7(9665).getEventTimeData(scheduled_start_time);
          obj.isStage = entity_type === constants.STAGE_INSTANCE;
          obj.theme = tmp5;
          obj.event = stateFromStores;
          obj = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
          obj1 = { IconComponent: tmp7(9785).CalendarIcon, variant: "translucent" };
          obj.icon = jsx(tmp7(8595).RowButton.Icon, { IconComponent: tmp7(9785).CalendarIcon, variant: "translucent" });
          obj.label = name;
          const intl = tmp7(1114).intl;
          let obj2 = { count: tmpResultResult };
          const _HermesInternal = HermesInternal;
          obj.subLabel = "" + tmp7Result2.getGuildScheduledEventHeaderProps(obj).text + " \u2022 " + intl.formatToPlainString(tmp7(1114).t.NywdIj, obj2);
          const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl2 = tmp7(1114).intl;
          obj3.accessibilityLabel = intl2.string(tmp7(1114).t.cpT0Cq);
          obj3.onPress = tmp20;
          obj3.children = jsx(tmp7(5680).XSmallIcon, { color: "interactive-icon-default" });
          obj.trailing = <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
          const tmp21 = obj;
          const tmp7Result3 = tmp7(9665);
        }
      }
    }
  }
  closure_130_0 = stateFromStores;
  tmpResultResult = setShowFloatingCTA(9780)(guild_id, id1, nextRecurrenceIdInEvent);
  const tmp26 = setShowFloatingCTA(17037)(obj.useContext(setShowFloatingCTA(12272)).channelId);
  const items4 = [ChannelRTCStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items4, () => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = 1 === ChannelRTCStore.getParticipants(tmp.id).length;
    }
    return tmp3;
  });
  require("useInviteMembersCallback");
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (null != stateFromStores) {
    if (tmp26) {
      if (stateFromStores1) {
        const obj4 = { label: null, subLabel: null, icon: null, onPress: null };
        const intl3 = tmp7(1114).intl;
        obj4.label = intl3.string(tmp7(1114).t.N4nebq);
        const intl4 = tmp7(1114).intl;
        obj4.subLabel = intl4.string(tmp7(1114).t.o2XPr2);
        const obj5 = { IconComponent: tmp7(10032).GroupPlusIcon, variant: "translucent" };
        obj4.icon = jsx(tmp7(8595).RowButton.Icon, { IconComponent: tmp7(10032).GroupPlusIcon, variant: "translucent" });
        obj4.onPress = tmp29;
        const tmp30 = obj4;
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
  let obj = { label: null, subLabel: null, icon: null, onPress: null, trailing: null };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.uv1tVh);
  const intl2 = require("util").intl;
  obj.subLabel = intl2.string(require("util").t["gQ14+g"]);
  obj = { IconComponent: require("CircleErrorIcon").CircleErrorIcon, variant: "translucent" };
  obj.icon = jsx(require("RowButton").RowButton.Icon, { IconComponent: require("CircleErrorIcon").CircleErrorIcon, variant: "translucent" });
  obj.onPress = function onPress() {
    let tmp;
    if (closure_0 != null) {
      tmp = closure_0();
    }
    return tmp;
  };
  obj = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, children: null };
  const intl3 = require("util").intl;
  obj.accessibilityLabel = intl3.string(require("util").t.cpT0Cq);
  obj.onPress = function onPress() {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    if (closure_0 != null) {
      closure_0();
    }
  };
  obj.children = jsx(require("XSmallIcon").XSmallIcon, { color: "interactive-icon-default" });
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
  } else if (tmp(1943).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {
      icon: jsx(tmp(12528).SoundboardIcon, { color: "interactive-icon-default" }),
      onPress() {
          if (null != _require) {
            const obj = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
            const result = obj.showSoundboardSoundPickerActionSheet(obj);
          }
          const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
        },
      label: null,
      trailing: null
    };
    obj = { quest: tmp(1114).t.XLlWUe };
    obj.label = tmp(7824).getDeviceSpecificString(obj, tmp(1114).t.IJgkPX);
    obj.trailing = <CloseSoundboardMobileFloatingCtaIcon />;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = tmp(1943).DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
const Pressable = fn(17).Pressable;
let closure_8 = fn(7526).isGuildScheduledEventActive;
const constants = fn(1963).GuildScheduledEventEntityTypes;
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