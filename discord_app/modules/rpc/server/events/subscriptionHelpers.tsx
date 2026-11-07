// discord_app/modules/rpc/server/events/subscriptionHelpers.tsx
import QuestTaskUtils from "../../../quests/utils/QuestTaskUtils.tsx";
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import getSocketFrameDefault from "../../helpers/getSocketFrame.tsx";
import useThermalState from "../../../device/useThermalState.tsx";
import ThermalStates from "../../../../../discord_common/js/shared/constants/ThermalStates.tsx";
import activityInstanceConnectedParticipants from "../../helpers/activityInstanceConnectedParticipants.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ConjureBuilderPreviewStore from "../../../conjure/preview/ConjureBuilderPreviewStore.tsx";
import QuestStore from "../../../quests/QuestStore.tsx";

require = fn;
const RPCEvents = fn(1072).RPCEvents;
const ActivityScreenOrientation = fn(2142).ActivityScreenOrientation;
const FrameLayoutModes = fn(6902).FrameLayoutModes;
const ActivityLayoutMode = fn(11855).ActivityLayoutMode;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export function getInitialSubscriptionPayload(application, arg1, quest_id) {
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === arg1) {
    const application3 = application.application;
    let id;
    if (application3 != null) {
      id = application3.id;
    }
    let layoutModeForApp = null;
    if (null != id) {
      layoutModeForApp = EmbeddedActivitiesStore.getLayoutModeForApp(id);
    }
    if (null == layoutModeForApp) {
      const tmp47 = getSocketFrameDefault(application);
      if (null == tmp47) {
        layoutModeForApp = null;
      } else if (tmp47.data.layoutMode === FrameLayoutModes.PIP) {
        let FOCUSED2 = ActivityLayoutMode.PIP;
      } else {
        FOCUSED2 = ActivityLayoutMode.FOCUSED;
      }
    }
    let tmp53 = null;
    if (null != layoutModeForApp) {
      const obj2 = { is_pip_mode: layoutModeForApp !== ActivityLayoutMode.FOCUSED };
      tmp53 = obj2;
    }
    return tmp53;
  } else if (RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE === arg1) {
    const application2 = application.application;
    let id1;
    if (application2 != null) {
      id1 = application2.id;
    }
    let layoutModeForApp1 = null;
    if (null != id1) {
      layoutModeForApp1 = EmbeddedActivitiesStore.getLayoutModeForApp(id1);
    }
    if (null == layoutModeForApp1) {
      const tmp34 = getSocketFrameDefault(application);
      if (null == tmp34) {
        layoutModeForApp1 = null;
      } else if (tmp34.data.layoutMode === FrameLayoutModes.PIP) {
        let FOCUSED = ActivityLayoutMode.PIP;
      } else {
        FOCUSED = ActivityLayoutMode.FOCUSED;
      }
    }
    let tmp40 = null;
    if (null != layoutModeForApp1) {
      const obj5 = { layout_mode: layoutModeForApp1 };
      tmp40 = obj5;
    }
    return tmp40;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === arg1) {
    const tmp26 = getSocketFrameDefault(application);
    let tmp27 = null;
    if (null != tmp26) {
      const obj7 = { layout_mode: tmp26.data.layoutMode };
      tmp27 = obj7;
    }
    return tmp27;
  } else if (RPCEvents.THERMAL_STATE_UPDATE === arg1) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== ThermalStates.ThermalStates.UNHANDLED) {
      const obj8 = { thermal_state: thermalState };
      tmp23 = obj8;
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === arg1) {
    const obj9 = {
      screen_orientation: useIsScreenLandscape.getIsScreenLandscape()
        ? ActivityScreenOrientation.LANDSCAPE
        : ActivityScreenOrientation.PORTRAIT,
    };
    return obj9;
  } else if (RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === arg1) {
    return activityInstanceConnectedParticipants.activityInstanceConnectedParticipants();
  } else if (RPCEvents.QUEST_ENROLLMENT_STATUS_UPDATE === arg1) {
    quest_id = quest_id.quest_id;
    if (quest_id) {
      const quest = QuestStore.getQuest(quest_id);
      const activityApplicationId = QuestTaskUtils.getActivityApplicationId(quest);
      let tmp11 = null;
      if (null != quest) {
        tmp11 = null;
        if (null != activityApplicationId) {
          application = application.application;
          let id2;
          if (application != null) {
            id2 = application.id;
          }
          tmp11 = null;
          if (activityApplicationId === id2) {
            const obj10 = { quest_id, is_enrolled: null, enrolled_at: null };
            const userStatus = quest.userStatus;
            let enrolledAt;
            if (userStatus != null) {
              enrolledAt = userStatus.enrolledAt;
            }
            obj10.is_enrolled = null != enrolledAt;
            const userStatus2 = quest.userStatus;
            let enrolledAt1;
            if (userStatus2 != null) {
              enrolledAt1 = userStatus2.enrolledAt;
            }
            if (enrolledAt1 == null) {
              enrolledAt1 = null;
            }
            obj10.enrolled_at = enrolledAt1;
            tmp11 = obj10;
          }
        }
      }
      return tmp11;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
