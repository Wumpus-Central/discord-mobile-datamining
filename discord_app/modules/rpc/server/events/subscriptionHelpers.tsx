import participantFromServer from "participantFromServer";
import map from "map";
import initializeState from "initializeState";
import { RPCEvents } from "ME";
import items3 from "items3";

let closure_6;
let error;
const require = arg1;
({ ActivityLayoutMode: closure_6, ActivityScreenOrientation: error } = items3);
const result = require("initializeState").fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(closure_1, participantFromServer, c3) {
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === participantFromServer) {
    const application4 = closure_1.application;
    let id;
    if (application4 != null) {
      id = application4.id;
    }
    let layoutModeForApp = null;
    if (null != id) {
      layoutModeForApp = store.getLayoutModeForApp(id);
    }
    let tmp40 = null;
    if (null != layoutModeForApp) {
      let obj = { is_pip_mode: null };
      obj[0] = layoutModeForApp !== constants.FOCUSED;
      tmp40 = obj;
    }
    return tmp40;
  } else if (tmp.ACTIVITY_LAYOUT_MODE_UPDATE === participantFromServer) {
    const application3 = closure_1.application;
    let id1;
    if (application3 != null) {
      id1 = application3.id;
    }
    let layoutModeForApp1 = null;
    if (null != id1) {
      layoutModeForApp1 = store.getLayoutModeForApp(id1);
    }
    let tmp35 = null;
    if (null != layoutModeForApp1) {
      obj = { layout_mode: null };
      obj[0] = layoutModeForApp1;
      tmp35 = obj;
    }
    return tmp35;
  } else if (tmp.FRAME_LAYOUT_MODE_UPDATE === participantFromServer) {
    const application2 = closure_1.application;
    let id2;
    if (application2 != null) {
      id2 = application2.id;
    }
    let tmp26 = null;
    if (null != id2) {
      connectedFrame = connectedFrame.getConnectedFrame();
      let layoutMode;
      if (connectedFrame != null) {
        layoutMode = connectedFrame.layoutMode;
      }
      tmp26 = layoutMode;
    }
    let tmp30 = null;
    if (null != tmp26) {
      const obj1 = { layout_mode: null };
      obj1[0] = tmp26;
      tmp30 = obj1;
    }
    return tmp30;
  } else if (tmp.THERMAL_STATE_UPDATE === participantFromServer) {
    const thermalState = require(10554) /* useThermalState */.getThermalState();
    let tmp23 = null;
    if (thermalState !== require(10554) /* useThermalState */.ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: null };
      obj2[0] = thermalState;
      tmp23 = obj2;
    }
    return tmp23;
  } else if (tmp.ORIENTATION_UPDATE === participantFromServer) {
    let obj3 = require(4815) /* getIsScreenLandscape */;
    obj3 = { screen_orientation: null };
    obj3[0] = obj3.getIsScreenLandscape() ? closure_7.LANDSCAPE : closure_7.PORTRAIT;
    return obj3;
  } else if (tmp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === participantFromServer) {
    obj2 = require(13638) /* activityInstanceConnectedParticipants */;
    return obj2.activityInstanceConnectedParticipants();
  } else if (tmp.QUEST_ENROLLMENT_STATUS_UPDATE === participantFromServer) {
    const quest_id = c3.quest_id;
    if (quest_id) {
      quest = quest.getQuest(quest_id);
      obj = require(7103) /* getApplicationIdsByTaskTypes */;
      const activityApplicationId = obj.getActivityApplicationId(quest);
      let tmp11 = null;
      if (null != quest) {
        tmp11 = null;
        if (null != activityApplicationId) {
          const application = closure_1.application;
          let id3;
          if (application != null) {
            id3 = application.id;
          }
          tmp11 = null;
          if (activityApplicationId === id3) {
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