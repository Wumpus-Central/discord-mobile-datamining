// discord_app/modules/rpc/server/events/subscriptionHelpers.tsx
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import QuestTaskUtils from "../../../quests/utils/QuestTaskUtils.tsx";
import useThermalState from "../../../device/useThermalState.tsx";
import activityInstanceConnectedParticipants from "../../helpers/activityInstanceConnectedParticipants.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import QuestStore from "../../../quests/QuestStore.tsx";

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
      obj = { layout_mode: layoutModeForApp1 };
      tmp34 = obj;
    }
    return tmp34;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === arg1) {
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
  } else if (RPCEvents.THERMAL_STATE_UPDATE === arg1) {
    const thermalState = useThermalState.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      let obj2 = { thermal_state: thermalState };
      tmp23 = obj2;
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === arg1) {
    const obj3 = { screen_orientation: null };
    obj3.screen_orientation = obj3.getIsScreenLandscape() ? React6.LANDSCAPE : React6.PORTRAIT;
    return obj3;
  } else if (RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === arg1) {
    obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  } else if (RPCEvents.QUEST_ENROLLMENT_STATUS_UPDATE === arg1) {
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
