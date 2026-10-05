// discord_app/modules/rpc/server/events/subscriptionHelpers.tsx
import Constants2 from "../../../../Constants.tsx";
import Constants3 from "../../Constants.tsx";
import useIsScreenLandscape from "../../../screen/useIsScreenLandscape.native.tsx";
import QuestTaskUtils from "../../../quests/utils/QuestTaskUtils.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import useThermalState from "../../../device/useThermalState.tsx";
import activityInstanceConnectedParticipants from "../../helpers/activityInstanceConnectedParticipants.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ConjureBuilderPreviewStore from "../../../conjure/preview/ConjureBuilderPreviewStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import QuestStore from "../../../quests/QuestStore.tsx";
import Constants from "../../../activities/Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
const TransportTypes = Constants3.TransportTypes;
const RPCEvents = Constants2.RPCEvents;
({ ActivityLayoutMode: metroImportDefault, ActivityScreenOrientation: metroImportAll } = Constants);
const asLaunched = FramesConstants.asLaunched;
const result = size.fileFinishedImporting("modules/rpc/server/events/subscriptionHelpers.tsx");

export const getInitialSubscriptionPayload = function getInitialSubscriptionPayload(application, arg1, quest_id) {
  let enrolledAt;
  let enrolledAt1;
  let obj4;
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
      tmp39 = { is_pip_mode: layoutModeForApp !== metroImportDefault.FOCUSED };
      const obj2 = { is_pip_mode: layoutModeForApp !== metroImportDefault.FOCUSED };
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
      tmp34 = { layout_mode: layoutModeForApp1 };
      const obj5 = { layout_mode: layoutModeForApp1 };
    }
    return tmp34;
  } else if (RPCEvents.FRAME_LAYOUT_MODE_UPDATE === arg1) {
    if (application.source.type !== TransportTypes.POST_MESSAGE) {
      return null;
    } else {
      const tmp27 = asLaunched(FramesStore.getFrameByIframeId(application.source.iframeId));
      let tmp28 = null;
      if (null != tmp27) {
        tmp28 = { layout_mode: tmp27.data.layoutMode };
        const obj7 = { layout_mode: tmp27.data.layoutMode };
      }
      return tmp28;
    }
  } else if (RPCEvents.THERMAL_STATE_UPDATE === arg1) {
    const obj6 = useThermalState;
    const thermalState = obj6.getThermalState();
    let tmp23 = null;
    if (thermalState !== useThermalState.ThermalStates.UNHANDLED) {
      tmp23 = { thermal_state: thermalState };
      const obj8 = { thermal_state: thermalState };
    }
    return tmp23;
  } else if (RPCEvents.ORIENTATION_UPDATE === arg1) {
    const obj9 = {
      screen_orientation: obj4.getIsScreenLandscape() ? metroImportAll.LANDSCAPE : metroImportAll.PORTRAIT,
    };
    obj4 = useIsScreenLandscape;
    return obj9;
  } else if (RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE === arg1) {
    const obj3 = activityInstanceConnectedParticipants;
    return obj3.activityInstanceConnectedParticipants();
  } else if (RPCEvents.QUEST_ENROLLMENT_STATUS_UPDATE === arg1) {
    quest_id = quest_id.quest_id;
    if (quest_id) {
      const quest = QuestStore.getQuest(quest_id);
      const obj = QuestTaskUtils;
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
            const userStatus = quest.userStatus;
            const obj10 = { quest_id, is_enrolled: null != enrolledAt, enrolled_at: enrolledAt1 };
            enrolledAt = undefined;
            if (userStatus != null) {
              enrolledAt = userStatus.enrolledAt;
            }
            const userStatus2 = quest.userStatus;
            enrolledAt1 = undefined;
            if (userStatus2 != null) {
              enrolledAt1 = userStatus2.enrolledAt;
            }
            if (enrolledAt1 == null) {
              enrolledAt1 = null;
            }
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
