// === Module 13871: getInitialSubscriptionPayload ===

// Module 13871 (getInitialSubscriptionPayload)
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7476 */;
import useThermalState from "useThermalState" /* 8763 */;
import getIsScreenLandscape from "getIsScreenLandscape" /* 8944 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 13834 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import map from "map" /* 8708 */;
import initializeState from "initializeState" /* 7453 */;
import { TransportTypes } from "RPC_SCOPE_CONFIG" /* 4277 */;
import { RPCEvents } from "ME" /* 676 */;
import items3 from "items3" /* 4481 */;
import { asLaunched } from "FrameLayoutModes" /* 8709 */;

require = fn;
({ ActivityLayoutMode: error, ActivityScreenOrientation: closure_8 } = items3);
const result = require("obj132").fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(closure_1, closure_2, c3) {
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === closure_2) {
    const application3 = dependencyMap.application;
    let id;
    if (application3 != null) {
      id = application3.id;
    }
    let layoutModeForApp = null;
    if (null != id) {
      layoutModeForApp = store.getLayoutModeForApp(id);
    }
    let tmp39 = null;
    if (null != layoutModeForApp) {
      let obj = { is_pip_mode: null };
      obj[0] = layoutModeForApp !== constants.FOCUSED;
      tmp39 = obj;
    }
    return tmp39;
  } else if (RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE === closure_2) {
    const application2 = dependencyMap.application;
    let id1;
    if (application2 != null) {
      id1 = application2.id;
    }
    let layoutModeForApp1 = null;
    if (null != id1) {
      layoutModeForApp1 = store.getLayoutModeForApp(id1);
    }
    let tmp34 = null;
    if (null != layoutModeForApp1) {
      obj = { layout_mode: null };
      obj[0] = layoutModeForApp1;
      tmp34 = obj;
    }
    return tmp34;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === closure_2) {
    if (dependencyMap.source.type !== TransportTypes.POST_MESSAGE) {
      return null;
    } else {
      const tmp27 = asLaunched(frameByIframeId.getFrameByIframeId(dependencyMap.source.iframeId));
      let tmp28 = null;
      if (null != tmp27) {
        obj1 = { layout_mode: null };
        obj1[0] = tmp27.data.layoutMode;
        tmp28 = obj1;
      }
      return tmp28;
    }
  } else if (RPCEvents.THERMAL_STATE_UPDATE === closure_2) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: null };
      obj2[0] = thermalState;
      tmp23 = obj2;
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === closure_2) {
    const obj3 = { screen_orientation: null };
    obj3[0] = obj3.getIsScreenLandscape() ? constants.LANDSCAPE : constants.PORTRAIT;
    return obj3;
  } else if (RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === closure_2) {
    obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  } else if (RPCEvents.QUEST_ENROLLMENT_STATUS_UPDATE === closure_2) {
    quest_id = quest_id.quest_id;
    if (quest_id) {
      quest = quest.getQuest(quest_id);
      obj = getApplicationIdsByTaskTypes;
      const activityApplicationId = obj.getActivityApplicationId(quest);
      let tmp11 = null;
      if (null != quest) {
        tmp11 = null;
        if (null != activityApplicationId) {
          const application = dependencyMap.application;
          let id2;
          if (application != null) {
            id2 = application.id;
          }
          tmp11 = null;
          if (activityApplicationId === id2) {
            const obj4 = { quest_id: null, is_enrolled: null, enrolled_at: null };
            obj4[0] = quest_id;
            const userStatus = quest.userStatus;
            let enrolledAt;
            if (userStatus != null) {
              enrolledAt = userStatus.enrolledAt;
            }
            obj4[1] = null != enrolledAt;
            const userStatus2 = quest.userStatus;
            let enrolledAt1;
            if (userStatus2 != null) {
              enrolledAt1 = userStatus2.enrolledAt;
            }
            if (enrolledAt1 == null) {
              enrolledAt1 = null;
            }
            obj4[2] = enrolledAt1;
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