// discord_app/modules/rpc/server/events/subscriptionHelpers.tsx
import participantFromServer from "participantFromServer";
import map from "map";
import initializeState from "initializeState";
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCEvents } from "ME";
import items3 from "items3";
import { asLaunched } from "FrameLayoutModes";
import { useThermalState } from "../../../device/useThermalState.tsx";
import { getApplicationIdsByTaskTypes } from "../../../quests/utils/QuestTaskUtils.tsx";
import { getIsScreenLandscape } from "../../../screen/useIsScreenLandscape.native.tsx";
import { activityInstanceConnectedParticipants } from "../../helpers/activityInstanceConnectedParticipants.tsx";

let error;
let metroImportAll;
const require = arg1;
({ ActivityLayoutMode: error, ActivityScreenOrientation: metroImportAll } = items3);
const result = require("initializeState").fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(closure_1, participantFromServer, c3) {
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === participantFromServer) {
    const application3 = closure_1.application;
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
  } else if (tmp.ACTIVITY_LAYOUT_MODE_UPDATE === participantFromServer) {
    const application2 = closure_1.application;
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
  } else if (tmp.FRAME_LAYOUT_MODE_UPDATE === participantFromServer) {
    if (closure_1.source.type !== TransportTypes.POST_MESSAGE) {
      return null;
    } else {
      const tmp27 = asLaunched(frameByIframeId.getFrameByIframeId(closure_1.source.iframeId));
      let tmp28 = null;
      if (null != tmp27) {
        const obj1 = { layout_mode: null };
        obj1[0] = tmp27.data.layoutMode;
        tmp28 = obj1;
      }
      return tmp28;
    }
  } else if (tmp.THERMAL_STATE_UPDATE === participantFromServer) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: null };
      obj2[0] = thermalState;
      tmp23 = obj2;
    }
    return tmp23;
  } else if (tmp.ORIENTATION_UPDATE === participantFromServer) {
    let obj3 = getIsScreenLandscape;
    obj3 = { screen_orientation: null };
    obj3[0] = obj3.getIsScreenLandscape() ? closure_8.LANDSCAPE : closure_8.PORTRAIT;
    return obj3;
  } else if (tmp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === participantFromServer) {
    obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  } else if (tmp.QUEST_ENROLLMENT_STATUS_UPDATE === participantFromServer) {
    const quest_id = c3.quest_id;
    if (quest_id) {
      quest = quest.getQuest(quest_id);
      obj = getApplicationIdsByTaskTypes;
      const activityApplicationId = obj.getActivityApplicationId(quest);
      let tmp11 = null;
      if (null != quest) {
        tmp11 = null;
        if (null != activityApplicationId) {
          const application = closure_1.application;
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