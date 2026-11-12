// discord_app/modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx
import util from "../../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import getDeviceSpecificString from "../../../../intl/overrides/getDeviceSpecificString.tsx";
import StageChannelActionCreatorExtras from "../../../../stage_channels/StageChannelActionCreatorExtras.native.tsx";
import StageChannelActionCreators from "../../../../stage_channels/StageChannelActionCreators.tsx";
import XSmallIcon from "../../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../../../guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx";
import SoundboardIcon from "../../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import speakOnStageDefault from "../../../../stage_channels/native/speakOnStage.tsx";
import GuildScheduledEventsNoticesActionCreators from "../../../../guild_scheduled_events/GuildScheduledEventsNoticesActionCreators.tsx";
import soundboard_SoundboardActionCreators from "../../../../soundboard/native/SoundboardActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../../calls/ChannelRTCStore.tsx";
import EventBannerStore from "../../../../guild_scheduled_events/EventBannerStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
function useStageCTAProps(stateFromStores) {
  _require = stateFromStores;
  const context = noop.useContext(showControls(11918));
  showControls = context.showControls;
  const tmp4 = showControls(19735)(context.channelId);
  const isStageUnifiedCall = require("StageChannelUnifiedCallExperiment").useIsStageUnifiedCall(
    stateFromStores,
    "VoicePanelFloatingCTA",
  );
  const obj2 = require("StageChannelUnifiedCallExperiment");
  const tmp7 = showControls(11883)();
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const stageBlockedUsersCount = require("useStageBlockedUsersCount").useStageBlockedUsersCount(id);
  const obj3 = require("useStageBlockedUsersCount");
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const stageIgnoredUsersCount = require("useStageBlockedUsersCount").useStageIgnoredUsersCount(id1);
  dependencyMap = tmp12;
  items = [null != stateFromStores && isStageUnifiedCall && tmp4 && tmp7, showControls];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      showControls();
    }
  }, items);
  let tmp14;
  if (null != stateFromStores && isStageUnifiedCall && tmp4 && tmp7) {
    const obj4 = { label: null, subLabel: null, icon: null, trailing: null };
    const intl = tmp5(1113).intl;
    obj4.label = intl.string(tmp5(1113).t.Ul1RJQ);
    if (stageBlockedUsersCount > 0) {
      const tmp15 = tmp(12828)(stageBlockedUsersCount, stageIgnoredUsersCount);
    }
    obj4.subLabel = tmp15;
    const obj5 = { IconComponent: tmp5(11886).HandRequestSpeakIcon, variant: "translucent" };
    obj4.icon = closure_11(tmp5(8043).RowButton.Icon, obj5);
    const obj6 = { direction: "horizontal", spacing: tmp(575).space.PX_8, children: null };
    const obj7 = {
      size: "sm",
      variant: "secondary",
      icon: closure_11(tmp5(7483).XSmallIcon, {}),
      accessibilityLabel: null,
      onPress: null,
    };
    const intl2 = tmp5(1113).intl;
    obj7.accessibilityLabel = intl2.string(tmp5(1113).t["1YDv7a"]);
    obj7.onPress = function onPress() {
      return StageChannelActionCreators.audienceAckRequestToSpeak(closure_0, true);
    };
    const items1 = [closure_11(tmp5(7922).IconButton, obj7)];
    const obj8 = {
      size: "sm",
      variant: "primary",
      icon: closure_11(tmp5(7831).CheckmarkSmallIcon, { color: "white" }),
      accessibilityLabel: null,
      onPress: null,
    };
    const intl3 = tmp5(1113).intl;
    obj8.accessibilityLabel = intl3.string(tmp5(1113).t.MpO0px);
    obj8.onPress = function onPress() {
      return speakOnStageDefault(closure_0);
    };
    items1[1] = closure_11(tmp5(7922).IconButton, obj8);
    obj6.children = items1;
    obj4.trailing = closure_12(tmp5(6274).Stack, obj6);
    tmp14 = obj4;
  }
  closure_129_0 = stateFromStores;
  const tmp5Result = require("useStageBlockedUsersCount");
  const tmp18 = showControls(19735)(noop.useContext(showControls(11918)).channelId);
  const isStageUnifiedCall1 = require("StageChannelUnifiedCallExperiment").useIsStageUnifiedCall(
    stateFromStores,
    "VoicePanelFloatingCTA",
  );
  const tmp5Result3 = require("StageChannelUnifiedCallExperiment");
  let id2;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  const stageChannelStartEvent = require("useStageChannelConnectAction").useStageChannelStartEvent(id2);
  if (null != stateFromStores) {
    if (isStageUnifiedCall1) {
      if (tmp18) {
        if (tmp22) {
          if (!tmp23) {
            const obj9 = { label: null, subLabel: null, icon: null, onPress: null };
            const intl4 = tmp5(1113).intl;
            obj9.label = intl4.string(tmp5(1113).t.OYbHfv);
            const intl5 = tmp5(1113).intl;
            obj9.subLabel = intl5.string(tmp5(1113).t.yXwLMQ);
            const obj10 = { IconComponent: tmp5(7952).StageIcon, variant: "translucent" };
            obj9.icon = closure_11(tmp5(8043).RowButton.Icon, obj10);
            obj9.onPress = function onPress() {
              return StageChannelActionCreatorExtras.openStageChannelSettings(closure_0);
            };
            const tmp24 = obj9;
          }
        }
      }
    }
  }
  if (tmp14 == null) {
    tmp14 = tmp24;
  }
  return tmp14;
}
function useFloatingCTAProps(stateFromStores) {
  let tmp3 = setShowFloatingCTA(11186)(noop.useContext(setShowFloatingCTA(11918)).showFloatingCTA);
  _require = tmp3;
  setShowFloatingCTA = undefined;
  setShowFloatingCTA = noop.useContext(setShowFloatingCTA(11918)).setShowFloatingCTA;
  items = [setShowFloatingCTA, tmp3];
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
  const tmp5 = setShowFloatingCTA(5484)();
  const tmp6 = setShowFloatingCTA(19735)(noop.useContext(setShowFloatingCTA(11918)).channelId);
  let id1;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const imminentUpcomingGuildEvents = require("useGuildScheduledEvents").useImminentUpcomingGuildEvents(id1);
  closure_129_0 = imminentUpcomingGuildEvents;
  let obj2 = require("useGuildScheduledEvents");
  const items1 = [EventBannerStore];
  const items2 = [imminentUpcomingGuildEvents];
  stateFromStores = require("useStateFromStores").useStateFromStores(
    items1,
    () => {
      let found = closure_0.find((id) => !eventDismissed.isEventDismissed(id.id));
      if (found == null) {
        found = null;
      }
      return found;
    },
    items2,
  );
  closure_129_1 = stateFromStores;
  const tmp7Result = require("useStateFromStores");
  let tmp12 = null != stateFromStores;
  const tmp7Result7 = require("useManageResourcePermissions");
  if (tmp12) {
    tmp12 = closure_8(stateFromStores);
  }
  const canManageGuildEventResult = require("useManageResourcePermissions")
    .useManageResourcePermissions(stateFromStores)
    .canManageGuildEvent(stateFromStores);
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
  const tmpResult = setShowFloatingCTA(7902);
  [][0] = stateFromStores;
  const callback = noop.useCallback(() => {
    if (null != setShowFloatingCTA) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openStartGuildEventModal(
        tmp,
        dependencyMap,
      );
    }
  }, items3);
  if (tmp6) {
    if (null != stateFromStores) {
      if (canManageGuildEventResult) {
        if (!tmp12) {
          ({ scheduled_start_time, name, entity_type } = stateFromStores);
          const obj3 = { eventTimeData: null, isStage: null, theme: null, event: null };
          const tmp7Result9 = tmp7(15450);
          obj3.eventTimeData = tmp7(7906).getEventTimeData(scheduled_start_time);
          obj3.isStage = entity_type === constants.STAGE_INSTANCE;
          obj3.theme = tmp5;
          obj3.event = stateFromStores;
          const obj4 = { onPress: callback, icon: null, label: null, subLabel: null, trailing: null };
          const obj5 = { IconComponent: tmp7(8391).CalendarIcon, variant: "translucent" };
          obj4.icon = closure_11(tmp7(8043).RowButton.Icon, obj5);
          obj4.label = name;
          const intl = tmp7(1113).intl;
          const obj6 = { count: tmpResultResult };
          const _HermesInternal = HermesInternal;
          obj4.subLabel =
            "" +
            tmp7Result9.getGuildScheduledEventHeaderProps(obj3).text +
            " \u2022 " +
            intl.formatToPlainString(tmp7(1113).t.NywdIj, obj6);
          const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          const intl2 = tmp7(1113).intl;
          obj7.accessibilityLabel = intl2.string(tmp7(1113).t.cpT0Cq);
          obj7.onPress = tmp20;
          obj7.children = closure_11(tmp7(7483).XSmallIcon, { color: "interactive-icon-default" });
          obj4.trailing = closure_11(Pressable, obj7);
          const tmp21 = obj4;
          const tmp7Result10 = tmp7(7906);
        }
      }
    }
  }
  closure_130_0 = stateFromStores;
  const context = noop.useContext(tmp(11918));
  ({ channelId, isDockEnabled } = context);
  tmpResultResult = setShowFloatingCTA(7902)(guild_id, id2, nextRecurrenceIdInEvent);
  const tmp27 = setShowFloatingCTA(19735)(channelId);
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
  if (!isDockEnabled) {
    if (null != stateFromStores) {
      if (!stateFromStores.isDM()) {
        if (tmp27) {
          if (stateFromStores1) {
            const obj8 = { label: null, subLabel: null, icon: null, onPress: null };
            const intl3 = tmp7(1113).intl;
            obj8.label = intl3.string(tmp7(1113).t.N4nebq);
            const intl4 = tmp7(1113).intl;
            obj8.subLabel = intl4.string(tmp7(1113).t.o2XPr2);
            const obj9 = { IconComponent: tmp7(10912).GroupPlusIcon, variant: "translucent" };
            obj8.icon = closure_11(tmp7(8043).RowButton.Icon, obj9);
            obj8.onPress = tmp30;
            const tmp31 = obj8;
          }
        }
      }
    }
  }
  if (memo == null) {
    memo = tmp21;
  }
  if (memo == null) {
    memo = tmp31;
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
  obj.icon = closure_11(require("RowButton").RowButton.Icon, {
    IconComponent: require("CircleErrorIcon").CircleErrorIcon,
    variant: "translucent",
  });
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
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA,
    );
    if (closure_0 != null) {
      closure_0();
    }
  };
  obj3.children = closure_11(require("XSmallIcon").XSmallIcon, { color: "interactive-icon-default" });
  obj.trailing = closure_11(Pressable, obj3);
  return obj;
}
function handleSoundboardMobileFloatingCtaClose() {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA,
  );
}
function CloseSoundboardMobileFloatingCtaIcon() {
  const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = handleSoundboardMobileFloatingCtaClose;
  obj.children = closure_1_11(XSmallIcon.XSmallIcon, { color: "interactive-icon-default" });
  return closure_1_11(Pressable, obj);
}
function getDismissableCTAProps(arg0) {
  ({ dismissableContent, channel: require } = arg0);
  if (dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA === dismissableContent) {
    return getBadConnectionCTAProps();
  } else if (dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA === dismissableContent) {
    let obj = {
      icon: closure_11(SoundboardIcon.SoundboardIcon, { color: "interactive-icon-default" }),
      onPress() {
        if (null != _require) {
          const obj2 = { channel: tmp, analyticsSource: "SOUNDBOARD_MOBILE_FLOATING_CTA" };
          const result = soundboard_SoundboardActionCreators.showSoundboardSoundPickerActionSheet(obj2);
        }
        const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA,
        );
      },
      label: null,
      trailing: null,
    };
    let obj2 = { quest: util.t.XLlWUe };
    obj.label = getDeviceSpecificString.getDeviceSpecificString(obj2, util.t.IJgkPX);
    obj.trailing = closure_11(CloseSoundboardMobileFloatingCtaIcon, {});
    return obj;
  } else {
    const DONUT_MOBILE_NUX = dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    return null;
  }
}
const Pressable = fn(17).Pressable;
let closure_8 = fn(6966).isGuildScheduledEventActive;
const constants = fn(5098).GuildScheduledEventEntityTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const OverrideFloatingCTA = { BAD_CONNECTION: "BAD_CONNECTION" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelFloatingCTAUtils.tsx");

export const FLOATING_CTA_HIDE_TIMEOUT = 5000;
export { OverrideFloatingCTA };
export { useStageCTAProps };
export function useShouldShowFloatingCTA(channelId) {
  _require = channelId;
  const tmp = dismissableContent(stateFromStores[41])(channelId);
  dismissableContent = _slicedToArray(require("useGetDismissibleContent").useGetDismissibleContent(tmp), 1)[0];
  const obj = require("useGetDismissibleContent");
  items = [ChannelStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  const items1 = [dismissableContent, stateFromStores];
  const memo = noop.useMemo(() => getDismissableCTAProps({ dismissableContent, channel: stateFromStores }), items1);
  const obj2 = require("useStateFromStores");
  let tmp7 = null != useStageCTAProps(stateFromStores);
  const tmp5 = useStageCTAProps(stateFromStores);
  if (!tmp7) {
    tmp7 = null != memo;
  }
  if (!tmp7) {
    tmp7 = null != tmp6;
  }
  return tmp7;
}
export { useFloatingCTAProps };
export { getBadConnectionCTAProps };
export { getDismissableCTAProps };
