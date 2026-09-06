// discord_app/modules/activities/handlePressJoinActivity.tsx
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import getEmbeddedActivityJoinability from "utils/getEmbeddedActivityJoinability.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

require = fn;
function handlePressJoinActivity(arg0) {
  ({ embeddedActivityJoinability, handleCanJoin } = arg0);
  if (getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN === embeddedActivityJoinability) {
    if (handleCanJoin != null) {
      handleCanJoin();
    }
  } else if (
    tmp(9531).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === embeddedActivityJoinability
  ) {
    const result = tmp(9532).showActivitiesInvalidPermissionsAlert();
    const tmpResult = tmp(9532);
  } else if (
    tmp(9531).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === embeddedActivityJoinability
  ) {
    let obj = { title: null, body: null, hideActionSheet: false };
    const intl7 = tmp(1114).intl;
    obj.title = intl7.string(tmp(1114).t.PtobXW);
    const intl8 = tmp(1114).intl;
    obj.body = intl8.string(tmp(1114).t.UXoQTp);
    AlertActionCreatorsDefault.show(obj);
  } else if (tmp(9531).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === embeddedActivityJoinability) {
    obj = { title: null, body: null, hideActionSheet: false };
    const intl5 = tmp(1114).intl;
    obj.title = intl5.string(tmp(1114).t.PtobXW);
    const intl6 = tmp(1114).intl;
    obj.body = intl6.string(tmp(1114).t.uGDCcw);
    AlertActionCreatorsDefault.show(obj);
  } else if (tmp(9531).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === embeddedActivityJoinability) {
    let obj2 = AlertActionCreatorsDefault;
    const obj1 = { title: null, body: null, hideActionSheet: false };
    const intl3 = tmp(1114).intl;
    obj1.title = intl3.string(tmp(1114).t.PtobXW);
    const intl4 = tmp(1114).intl;
    obj1.body = intl4.string(tmp(1114).t["4WuFRE"]);
    obj2.show(obj1);
  } else {
    obj = AlertActionCreatorsDefault;
    obj2 = { title: null, body: null, hideActionSheet: false };
    const intl = tmp(1114).intl;
    obj2.title = intl.string(tmp(1114).t.PtobXW);
    const intl2 = tmp(1114).intl;
    obj2.body = intl2.string(tmp(1114).t.FUCQco);
    obj.show(obj2);
  }
}
let closure_12 = async function _maybeJoinEmbeddedActivity(arg0, value) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      const embeddedActivitiesForChannel = closure_130_10.getEmbeddedActivitiesForChannel(closure_129_0);
      closure_129_8 = embeddedActivitiesForChannel.find((applicationId) => {
        let tmp = applicationId.applicationId === closure_1_1;
        if (tmp) {
          tmp = null == closure_1_2 || applicationId.launchId === tmp2;
          const tmp4 = null == closure_1_2 || applicationId.launchId === tmp2;
        }
        return tmp;
      });
      closure_129_9 = closure_129_3;
      if (null == closure_129_9) {
        let obj4 = closure_130_1(closure_130_2[12]);
        c3 = 2;
        c4 = 1;
        return { value: obj4.fetchApplication(closure_129_1), done: false };
      }
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else {
    closure_129_10 = value;
    closure_129_9 = closure_130_4.createFromServer(closure_129_10);
  }
  if (null != closure_129_8) {
    if (null != closure_129_9) {
      const currentUser = closure_130_8.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      let obj3 = { embeddedActivityJoinability: null, handleCanJoin: null };
      obj4 = {
        userId: id,
        application: closure_129_9,
        channelId: closure_129_0,
        currentUser,
        isActivitiesEnabledForCurrentPlatform: null,
        ChannelStore: null,
        VoiceStateStore: null,
        PermissionStore: null,
        GuildStore: null,
      };
      obj3 = closure_130_0(closure_130_2[13]);
      obj4.isActivitiesEnabledForCurrentPlatform = obj3.getIsActivitiesEnabledForCurrentPlatform();
      obj4.ChannelStore = closure_130_5;
      obj4.VoiceStateStore = closure_130_9;
      obj4.PermissionStore = closure_130_7;
      obj4.GuildStore = closure_130_6;
      obj3.embeddedActivityJoinability = closure_130_1(closure_130_2[8])(obj4);
      obj3.handleCanJoin = function handleCanJoin() {
        const self = this;
        const apply = closure_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      closure_130_11(obj3);
      closure_130_1(closure_130_2[8]);
    }
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({
    channelId: closure_129_0,
    applicationId: closure_129_1,
    launchId: closure_129_2,
    inputApplication: closure_129_3,
    analyticsLocations: closure_129_4,
    launchingComponentId: closure_129_5,
    sectionName: closure_129_6,
    inviterUserId: closure_129_7,
  } = closure_0);
  closure_129_12 = function _handleCanJoin() {
    const self = this;
    const tmp = c3(function* (arg0, value) {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else if (null != applicationId) {
              const obj1 = {
                applicationId: applicationId.applicationId,
                activityChannelId,
                locationObject: {},
                analyticsLocations,
                componentId,
                sectionName,
                inviterUserId,
              };
              v1 = 1;
              c0 = 1;
              const obj2 = { value: v1(closure_1_2[14])(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp13) {
          c0 = tmp;
          throw tmp13;
        }
      }
    });
    closure_12 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return "PX_16";
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/handlePressJoinActivity.tsx");

export default handlePressJoinActivity;
export const maybeJoinEmbeddedActivity = function maybeJoinEmbeddedActivity() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
