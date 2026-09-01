// discord_app/modules/rpc/server/events/subscriptionHelpers.tsx
import getIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import getApplicationIdsByTaskTypes from "../../../quests/utils/QuestTaskUtils.tsx";
import useThermalState from "../../../device/useThermalState.tsx";
import activityInstanceConnectedParticipants from "../../helpers/activityInstanceConnectedParticipants.tsx";
import closure_2 from "../../../activities/EmbeddedActivitiesStore.tsx";
import closure_3 from "../../../frames/FramesStore.tsx";
import closure_4 from "../../../quests/QuestStore.tsx";
import { TransportTypes } from "../../Constants.tsx";
import { RPCEvents } from "../../../../Constants.tsx";
import items3 from "../../../activities/Constants.tsx";
import { asLaunched } from "../../../frames/FramesConstants.tsx";

require = arg1;
({ ActivityLayoutMode: error, ActivityScreenOrientation: closure_8 } = items3);
const result = require("set").fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(closure_1, closure_2, c3) {
  if (RPCEvents.ACTIVITY_PIP_MODE_UPDATE === closure_2) {
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
  } else if (tmp.ACTIVITY_LAYOUT_MODE_UPDATE === closure_2) {
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
  } else if (tmp.FRAME_LAYOUT_MODE_UPDATE === closure_2) {
    if (closure_1.source.type !== TransportTypes.POST_MESSAGE) {
      return null;
    } else {
      const tmp27 = asLaunched(frameByIframeId.getFrameByIframeId(closure_1.source.iframeId));
      let tmp28 = null;
      if (null != tmp27) {
        obj1 = { layout_mode: null };
        obj1[0] = tmp27.data.layoutMode;
        tmp28 = obj1;
      }
      return tmp28;
    }
  } else if (tmp.THERMAL_STATE_UPDATE === closure_2) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: null };
      obj2[0] = thermalState;
      tmp23 = obj2;
    }
    return tmp23;
  } else if (tmp.ORIENTATION_UPDATE === closure_2) {
    let obj3 = getIsScreenLandscape;
    obj3 = { screen_orientation: null };
    obj3[0] = obj3.getIsScreenLandscape() ? closure_8.LANDSCAPE : closure_8.PORTRAIT;
    return obj3;
  } else if (tmp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === closure_2) {
    obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  } else if (tmp.QUEST_ENROLLMENT_STATUS_UPDATE === closure_2) {
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
