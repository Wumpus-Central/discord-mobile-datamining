// discord_app/modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let application, channel, closure_2, closure_3;

let obj = function _getCachedOrFetchActivityApplicationForLaunch() {
  obj = _asyncToGenerator(async (applicationId, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj3;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let activityConfigs;
          let applications;
          let closure_4;
          let closure_5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp2;
              closure_2 = tmp;
              closure_1 = undefined;
              activityConfigs = undefined;
              applications = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              application = application.getApplication(applicationId);
              const tmp39 = closure_1;
              if (isUsableApplicationRecord(application)) {
                c5 = 3;
                return { value: application, done: true };
              } else {
                channel = channel.getChannel(tmp39);
                let guild_id;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                c4 = 1;
                c5 = 1;
                const obj6 = { guildId: guild_id };
                const obj8 = { value: obj7.fetchShelf(obj6), done: false };
                obj7 = EmbeddedActivitiesActionCreators;
                return obj8;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              activityConfigs = closure_1.activityConfigs;
              applications = closure_1.applications;
              const obj10 = { applicationId, activityConfigs, applications };
              closure_4 = closure_131_1(closure_131_2[5])(obj10);
              let application1;
              if (closure_4 != null) {
                application1 = closure_4.application;
              }
              if (closure_131_8(application1)) {
                let application2;
                if (closure_4 != null) {
                  application2 = closure_4.application;
                }
                c5 = 3;
                return { value: application2, done: true };
              } else {
                c4 = 2;
                c5 = 1;
                const obj12 = { value: obj3.fetchApplication(applicationId), done: false };
                obj3 = closure_131_0(closure_131_2[6]);
                return obj12;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_5 = value;
            c5 = 3;
            obj = { value: closure_131_5.createFromServer(closure_5), done: true };
            return obj;
          }
        } catch (tmp23) {
          c5 = 3;
          throw tmp23;
        }
      }
    })();
  });
  return obj(...arguments);
};
function isUsableApplicationRecord(embeddedActivityConfig) {
  return null != embeddedActivityConfig && null != embeddedActivityConfig.embeddedActivityConfig;
}
const result = size.fileFinishedImporting("modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx");

export default function getCachedOrFetchActivityApplicationForLaunch() {
  return obj(...arguments);
}
