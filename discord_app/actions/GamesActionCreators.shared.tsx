// discord_app/actions/GamesActionCreators.shared.tsx
import getOrFetchApplicationDefault from "../modules/applications/getOrFetchApplication.tsx";
import canLaunchContextlessFrame2 from "../modules/frames/utils/canLaunchContextlessFrame.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import EmbeddedActivitiesStore from "../modules/activities/EmbeddedActivitiesStore.tsx";
import PresenceStore from "../stores/PresenceStore.tsx";

require = fn;
let closure_7 = async function _tryJoinAsFrame(arg0) {
  let userId = arg0;
  c9 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === num6) {
          num6 = 1;
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp5;
            closure_7 = tmp2;
            closure_135_0 = userId;
            closure_135_1 = undefined;
            closure_135_2 = undefined;
            closure_135_3 = undefined;
            closure_135_4 = undefined;
            closure_135_5 = undefined;
            closure_135_6 = undefined;
            closure_135_7 = undefined;
            let embeddedActivityForUserId;
            userId = userId.userId;
            closure_135_1 = userId;
            ({ sessionId: closure_135_2, applicationId } = userId);
            closure_135_3 = applicationId;
            ({ channelId: closure_135_4, messageId: closure_135_5, intent: closure_135_6, activity } = userId);
            let applicationActivity2 = activity;
            if (activity == null) {
              applicationActivity2 = applicationActivity.getApplicationActivity(userId, applicationId);
            }
            closure_135_7 = applicationActivity2;
            const embedded = userId.embedded;
            const tmp48 = canLaunchContextlessFrame2;
            closure_5 = tmp48;
            canLaunchContextlessFrame = tmp48.canLaunchContextlessFrame;
            c9 = num6;
            const obj5 = { value: getOrFetchApplicationDefault(applicationId), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          num6 = canLaunchContextlessFrame(value);
          if (num6) {
            embeddedActivityForUserId = closure_134_4.getEmbeddedActivityForUserId(closure_135_1, closure_135_3, true);
            if (null != embeddedActivityForUserId) {
              const obj7 = {
                applicationId: closure_135_3,
                activityChannelId: null,
                source: null,
                locationObject: null,
                analyticsLocations: null,
              };
              const tmp29 = closure_134_1(closure_134_2[7]);
              obj7.activityChannelId = closure_134_0(closure_134_2[8]).getEmbeddedActivityLocationChannelId(
                embeddedActivityForUserId.location,
              );
              obj7.source = closure_135_0.source;
              locationObject = closure_135_0.locationObject;
              if (locationObject == null) {
                locationObject = {};
              }
              obj7.locationObject = locationObject;
              analyticsLocations = closure_135_0.analyticsLocations;
              if (analyticsLocations == null) {
                analyticsLocations = [];
              }
              obj7.analyticsLocations = analyticsLocations;
              tmp29(obj7);
              const obj4 = closure_134_0(closure_134_2[8]);
            } else {
              const obj = {
                application: null,
                userId: null,
                activity: null,
                sessionId: null,
                channelId: null,
                messageId: null,
                intent: null,
              };
              const obj8 = { id: closure_135_3 };
              obj.application = obj8;
              obj.userId = closure_135_1;
              obj.activity = closure_135_7;
              obj.sessionId = closure_135_2;
              obj.channelId = closure_135_4;
              obj.messageId = closure_135_5;
              obj.intent = closure_135_6;
              closure_134_1(closure_134_2[9])(obj);
            }
            c9 = 3;
          }
        }
        c9 = 3;
      } catch (tmp52) {
        c9 = tmp;
        throw tmp52;
      }
    }
  })();
};
const ActivityFlags = fn(1087).ActivityFlags;
const size = fn(2);
const result = size.fileFinishedImporting("actions/GamesActionCreators.shared.tsx");

export const tryJoinAsFrame = function tryJoinAsFrame() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
