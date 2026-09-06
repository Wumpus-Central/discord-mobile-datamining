// === Module 14503: subscriptionHelpers ===

// Module 14503 (subscriptionHelpers)
import useIsScreenLandscape from "useIsScreenLandscape" /* 5126 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import useThermalState from "useThermalState" /* 9565 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14464 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import FramesStore from "FramesStore" /* 9510 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
const TransportTypes = fn(4465).TransportTypes;
const RPCEvents = fn(1074).RPCEvents;
const Constants = fn(1920);
({ ActivityLayoutMode: closure_7, ActivityScreenOrientation: closure_8 } = Constants);
const asLaunched = fn(9511).asLaunched;
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
      let obj = { is_pip_mode: layoutModeForApp !== constants.FOCUSED };
      tmp39 = obj;
    }
    return tmp39;
  } else if (tmp.ACTIVITY_LAYOUT_MODE_UPDATE === arg1) {
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
      obj = { layout_mode: layoutModeForApp1 };
      tmp34 = obj;
    }
    return tmp34;
  } else if (tmp.FRAME_LAYOUT_MODE_UPDATE === arg1) {
    if (application.source.type !== TransportTypes.POST_MESSAGE) {
      return null;
    } else {
      const tmp27 = asLaunched(FramesStore.getFrameByIframeId(application.source.iframeId));
      let tmp28 = null;
      if (null != tmp27) {
        const obj1 = { layout_mode: tmp27.data.layoutMode };
        tmp28 = obj1;
      }
      return tmp28;
    }
  } else if (tmp.THERMAL_STATE_UPDATE === arg1) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: thermalState };
      tmp23 = obj2;
    }
    return tmp23;
  } else if (tmp.ORIENTATION_UPDATE === arg1) {
    const obj3 = { screen_orientation: null };
    obj3.screen_orientation = obj3.getIsScreenLandscape() ? React6.LANDSCAPE : React6.PORTRAIT;
    return obj3;
  } else if (tmp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === arg1) {
    obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  } else if (tmp.QUEST_ENROLLMENT_STATUS_UPDATE === arg1) {
    quest_id = quest_id.quest_id;
    if (quest_id) {
      const quest = QuestStore.getQuest(quest_id);
      obj = QuestTaskUtils;
      const activityApplicationId = obj.getActivityApplicationId(quest);
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
            const obj4 = { quest_id, is_enrolled: null, enrolled_at: null };
            const userStatus = quest.userStatus;
            let enrolledAt;
            if (userStatus != null) {
              enrolledAt = userStatus.enrolledAt;
            }
            obj4.is_enrolled = null != enrolledAt;
            const userStatus2 = quest.userStatus;
            let enrolledAt1;
            if (userStatus2 != null) {
              enrolledAt1 = userStatus2.enrolledAt;
            }
            if (enrolledAt1 == null) {
              enrolledAt1 = null;
            }
            obj4.enrolled_at = enrolledAt1;
            tmp11 = obj4;
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