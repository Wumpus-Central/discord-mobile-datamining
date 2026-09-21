// === Module 14784: subscriptionHelpers ===

// Module 14784 (subscriptionHelpers)
import useIsScreenLandscape from "useIsScreenLandscape" /* 5342 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7960 */;
import useThermalState from "useThermalState" /* 9592 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14744 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import FramesStore from "FramesStore" /* 9313 */;
import QuestStore from "QuestStore" /* 7939 */;

require = fn;
const TransportTypes = fn(4660).TransportTypes;
const RPCEvents = fn(1074).RPCEvents;
const Constants = fn(2004);
({ ActivityLayoutMode: closure_7, ActivityScreenOrientation: closure_8 } = Constants);
const asLaunched = fn(9314).asLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(application, arg1, quest_id) {
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
    let tmp39 = null;
    if (null != layoutModeForApp) {
      const obj2 = { is_pip_mode: layoutModeForApp !== constants.FOCUSED };
      tmp39 = obj2;
    }
    return tmp39;
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
    let tmp34 = null;
    if (null != layoutModeForApp1) {
      const obj5 = { layout_mode: layoutModeForApp1 };
      tmp34 = obj5;
    }
    return tmp34;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === arg1) {
    if (application.source.type !== TransportTypes.POST_MESSAGE) {
      return null;
    } else {
      const tmp27 = asLaunched(FramesStore.getFrameByIframeId(application.source.iframeId));
      let tmp28 = null;
      if (null != tmp27) {
        const obj7 = { layout_mode: tmp27.data.layoutMode };
        tmp28 = obj7;
      }
      return tmp28;
    }
  } else if (RPCEvents.THERMAL_STATE_UPDATE === arg1) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      const obj8 = { thermal_state: thermalState };
      tmp23 = obj8;
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === arg1) {
    const obj9 = { screen_orientation: useIsScreenLandscape.getIsScreenLandscape() ? React6.LANDSCAPE : React6.PORTRAIT };
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
};