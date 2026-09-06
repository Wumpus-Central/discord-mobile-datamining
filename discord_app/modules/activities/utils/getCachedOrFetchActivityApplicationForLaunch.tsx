// discord_app/modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
let closure_7 = async function _getCachedOrFetchActivityApplicationForLaunch(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          let activityConfigs;
          let applications;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          application = application.getApplication(closure_0);
          if (isUsableApplicationRecord(application)) {
            c5 = 3;
            const obj1 = { value: application, done: true };
            return obj1;
          } else {
            channel = channel.getChannel(tmp41);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            let obj6 = EmbeddedActivitiesActionCreators;
            let obj2 = { guildId: guild_id };
            c4 = 1;
            c5 = 1;
            const obj3 = { value: obj6.fetchShelf(obj2), done: false };
            return obj3;
          }
          tmp41 = closure_1;
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_1 = value;
          activityConfigs = closure_130_1.activityConfigs;
          applications = closure_130_1.applications;
          const obj5 = { applicationId: closure_130_0, activityConfigs, applications };
          closure_130_4 = closure_131_1(closure_131_2[5])(obj5);
          let application1;
          if (closure_130_4 != null) {
            application1 = closure_130_4.application;
          }
          if (tmp38(application1)) {
            let application2;
            if (closure_130_4 != null) {
              application2 = closure_130_4.application;
            }
            c5 = 3;
            obj6 = { value: application2, done: true };
            return obj6;
          } else {
            obj2 = closure_131_0(closure_131_2[6]);
            c4 = 2;
            c5 = 1;
            const obj7 = { value: obj2.fetchApplication(closure_130_0), done: false };
            return obj7;
          }
          tmp38 = closure_131_8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_130_5 = value;
        c5 = 3;
        obj = { value: closure_131_5.createFromServer(closure_130_5), done: true };
        return obj;
      }
    } catch (tmp24) {
      c5 = tmp;
      throw tmp24;
    }
  }
};
function isUsableApplicationRecord(embeddedActivityConfig) {
  return null != embeddedActivityConfig && null != embeddedActivityConfig.embeddedActivityConfig;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx");

export default function getCachedOrFetchActivityApplicationForLaunch() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
