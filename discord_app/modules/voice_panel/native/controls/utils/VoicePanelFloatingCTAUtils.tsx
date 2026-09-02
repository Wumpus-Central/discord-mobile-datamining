// === Module 16870: useFloatingCTAProps ===

// Module 16870 (useFloatingCTAProps)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4298 */;
import XSmallIcon from "XSmallIcon" /* 5559 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getParticipants" /* 4494 */;
import closure_7 from "initialize" /* 16871 */;
import { isGuildScheduledEventActive as closure_8 } from "scheduledEventSort" /* 7280 */;
import closure_9 from "ensureGuildLoaded" /* 1386 */;
import { GuildScheduledEventEntityTypes as closure_10 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1392 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function useFloatingCTAProps(stateFromStores) {
  obj = React;
  let tmp3 = stateFromStores(nextRecurrenceIdInEvent[29])(React.useContext(stateFromStores(nextRecurrenceIdInEvent[10])).showFloatingCTA);
  let _require = tmp3;
  stateFromStores = undefined;
  const setShowFloatingCTA = React.useContext(stateFromStores(nextRecurrenceIdInEvent[10])).setShowFloatingCTA;
  stateFromStores = setShowFloatingCTA;
  const items = [setShowFloatingCTA, tmp3];
  let memo = React.useMemo(() => {
    let tmp = null;
    if (closure_0 === closure_1_12.BAD_CONNECTION) {
      tmp = closure_1_14(() => callback(null));
    }
    return tmp;
  }, items);
  _require = undefined;
  stateFromStores = undefined;
  nextRecurrenceIdInEvent = undefined;
  const tmp5 = stateFromStores(nextRecurrenceIdInEvent[9])();
  obj1 = _require(nextRecurrenceIdInEvent[12]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const imminentUpcomingGuildEvents = obj1.useImminentUpcomingGuildEvents(id);
  _require = imminentUpcomingGuildEvents;
  let tmp7Result = tmp7(tmp2[13]);
  const items1 = [closure_7];
  const items2 = [imminentUpcomingGuildEvents];
  stateFromStores = tmp7Result.useStateFromStores(items1, () => {
    let found = stateFromStores.find((id) => !eventDismissed.isEventDismissed(id.id));
    if (found == null) {
      found = null;
    }
    return found;
  }, items2);
  tmp7Result = tmp7(tmp2[14]);
  let tmp12 = null != stateFromStores;
  const tmp6 = stateFromStores(nextRecurrenceIdInEvent[11])(React.useContext(stateFromStores(nextRecurrenceIdInEvent[10])).channelId);
  if (tmp12) {
    tmp12 = callback2(stateFromStores);
  }
  const canManageGuildEventResult = tmp7Result.useManageResourcePermissions(stateFromStores).canManageGuildEvent(stateFromStores);
  nextRecurrenceIdInEvent = _require(nextRecurrenceIdInEvent[15]).getNextRecurrenceIdInEvent(stateFromStores);
  let guild_id;
  const tmp7Result1 = _require(nextRecurrenceIdInEvent[15]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const items3 = [stateFromStores, nextRecurrenceIdInEvent];
  const tmpResult = stateFromStores(nextRecurrenceIdInEvent[16]);
  [][0] = stateFromStores;
  const callback = obj.useCallback(() => {
    if (null != stateFromStores) {
      stateFromStores(nextRecurrenceIdInEvent[17]).hideActionSheet();
      obj = stateFromStores(nextRecurrenceIdInEvent[17]);
      const result = stateFromStores(nextRecurrenceIdInEvent[18]).openStartGuildEventModal(tmp, nextRecurrenceIdInEvent);
      const obj2 = stateFromStores(nextRecurrenceIdInEvent[18]);
    }
  }, items3);
  if (tmp6) {
    if (null != stateFromStores) {
      if (canManageGuildEventResult) {
        if (!tmp12) {
          ({ scheduled_start_time, name, entity_type } = stateFromStores);
          obj = { eventTimeData: null, isStage: null, theme: null, event: null };
          const tmp7Result2 = tmp7(tmp2[20]);
          obj[0] = tmp7(tmp2[15]).getEventTimeData(scheduled_start_time);
          obj[1] = entity_type === constants.STAGE_INSTANCE;
          obj[2] = tmp5;
          obj[3] = stateFromStores;
          obj = { onPress: null, icon: null, label: null, subLabel: null, trailing: null };
          obj[0] = callback;
          obj1 = { IconComponent: null, variant: "translucent" };
          obj1[0] = tmp7(tmp2[22]).CalendarIcon;
          obj[1] = jsx(tmp7(tmp2[21]).RowButton.Icon, { IconComponent: null, variant: "translucent" });
          obj[2] = name;
          const intl = tmp7(tmp2[23]).intl;
          let obj2 = { count: null };
          obj2[0] = tmpResultResult;
          const _HermesInternal = HermesInternal;
          obj[3] = "" + tmp7Result2.getGuildScheduledEventHeaderProps(obj).text + " \u2022 " + intl.formatToPlainString(tmp7(tmp2[23]).t.NywdIj, obj2);
          const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl2 = tmp7(tmp2[23]).intl;
          obj3[1] = intl2.string(tmp7(tmp2[23]).t.cpT0Cq);
          obj3[2] = tmp20;
          obj3[3] = jsx(tmp7(tmp2[24]).XSmallIcon, { color: "interactive-icon-default" });
          obj[4] = <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
          const tmp21 = obj;
          const tmp7Result3 = tmp7(tmp2[15]);
        }
      }
    }
  }
  _require = stateFromStores;
  tmpResultResult = stateFromStores(nextRecurrenceIdInEvent[16])(guild_id, id1, nextRecurrenceIdInEvent);
  const tmp26 = stateFromStores(nextRecurrenceIdInEvent[11])(obj.useContext(stateFromStores(nextRecurrenceIdInEvent[10])).channelId);
  const items4 = [closure_6];
  const stateFromStores1 = _require(nextRecurrenceIdInEvent[13]).useStateFromStores(items4, () => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = 1 === closure_1_6.getParticipants(tmp.id).length;
    }
    return tmp3;
  });
  _require(nextRecurrenceIdInEvent[25]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (null != stateFromStores) {
    if (tmp26) {
      if (stateFromStores1) {
        const obj4 = { label: null, subLabel: null, icon: null, onPress: null };
        const intl3 = tmp7(tmp2[23]).intl;
        obj4[0] = intl3.string(tmp7(tmp2[23]).t.N4nebq);
        const intl4 = tmp7(tmp2[23]).intl;
        obj4[1] = intl4.string(tmp7(tmp2[23]).t.o2XPr2);
        const obj5 = { IconComponent: null, variant: "translucent" };
        obj5[0] = tmp7(tmp2[26]).GroupPlusIcon;
        obj4[2] = jsx(tmp7(tmp2[21]).RowButton.Icon, { IconComponent: null, variant: "translucent" });
        obj4[3] = tmp29;
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
  const _require = arg0;
  obj = { label: null, subLabel: null, icon: null, onPress: null, trailing: null };
  const intl = _require(1233).intl;
  obj[0] = intl.string(_require(1233).t.uv1tVh);
  const intl2 = _require(1233).intl;
  obj[1] = intl2.string(_require(1233).t["gQ14+g"]);
  obj = { IconComponent: _require(7717).CircleErrorIcon, variant: "translucent" };
  obj[2] = jsx(_require(8374).RowButton.Icon, { IconComponent: _require(7717).CircleErrorIcon, variant: "translucent" });
  obj[3] = function onPress() {
    let tmp;
    if (callback != null) {
      tmp = callback();
    }
    return tmp;
  };
  obj = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 4, onPress: null, children: null };
  const intl3 = _require(1233).intl;
  obj[1] = intl3.string(_require(1233).t.cpT0Cq);
  obj[3] = function onPress() {
    const result = callback(closure_1_2[30]).UNSAFE_markDismissibleContentAsDismissed(callback(closure_1_2[32]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    if (callback != null) {
      callback();
    }
  };
  obj[4] = jsx(_require(5559).XSmallIcon, { color: "interactive-icon-default" });
  obj[4] = <Pressable accessibilityRole="button" accessibilityLabel={null} hitSlop={4} onPress={null}>{null}</Pressable>;
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
}
function CloseSoundboardMobileFloatingCtaIcon() {
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[2] = handleSoundboardMobileFloatingCtaClose;
  obj[3] = jsx(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" });
  return <Pressable accessibilityRole="button" accessibilityLabel={null} onPress={null}>{null}</Pressable>;
}
function getDismissableCTAProps(arg0) {
  ({ dismissableContent, channel: require } = arg0);
  if (DismissibleContent.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (tmp(1372).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    obj = { icon: null, onPress: null, label: null, trailing: null };
    obj[0] = jsx(tmp(12316).SoundboardIcon, { color: "interactive-icon-default" });
    obj[1] = function onPress() {
      if (null != closure_0) {
        obj = closure_1_0(closure_1_2[33]);
        obj = { channel: null, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
        obj[0] = tmp;
        const result = obj.showSoundboardSoundPickerActionSheet(obj);
      }
      const result1 = closure_1_0(closure_1_2[30]).UNSAFE_markDismissibleContentAsDismissed(closure_1_0(closure_1_2[32]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    };
    obj = { quest: null };
    obj[0] = tmp(1233).t.XLlWUe;
    obj[2] = tmp(7578).getDeviceSpecificString(obj, tmp(1233).t.IJgkPX);
    obj[3] = <CloseSoundboardMobileFloatingCtaIcon />;
    return obj;
  } else {
    const DONUT_MOBILE_NUX = tmp(1372).DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
let obj = { BAD_CONNECTION: "BAD_CONNECTION" };
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export const OverrideFloatingCTA = obj;
export const useShouldShowFloatingCTA = function useShouldShowFloatingCTA(channelId) {
  const _require = channelId;
  const tmp = first(stateFromStores[27])(channelId);
  first = callback(_require(stateFromStores[28]).useGetDismissibleContent(tmp), 1)[0];
  obj = _require(stateFromStores[28]);
  const items = [closure_9];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => closure_1_9.getChannel(closure_0));
  const items1 = [first, stateFromStores];
  const memo = React.useMemo(() => closure_1_17({ dismissableContent: first, channel: stateFromStores }), items1);
  const obj2 = _require(stateFromStores[13]);
  return null != memo || null != useFloatingCTAProps(stateFromStores);
};
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };