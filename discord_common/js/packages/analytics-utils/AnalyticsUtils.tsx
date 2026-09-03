// discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import logger from "AnalyticsTrackingStore.tsx";
import ImpressionGroups from "StandardAnalyticsConstants.tsx";
import queueTrackingEventMaker from "AnalyticsTrackingActionCreators.tsx";
import encodeProperties from "encodeProperties.tsx";
import ImpressionNames from "AnalyticsSchema.tsx";
import getOS from "getSuperProperties.tsx";

let closure_4 = {};
let closure_5 = {};
const result = set.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx");

export const encodeProperties = encodeProperties.encodeProperties;
export const analyticsTrackingStoreMaker = logger.analyticsTrackingStoreMaker;
export const AnalyticsActionHandlers = logger.AnalyticsActionHandlers;
export const ImpressionTypes = ImpressionGroups.ImpressionTypes;
export const ImpressionGroups = ImpressionGroups.ImpressionGroups;
export const ImpressionNames = ImpressionNames.ImpressionNames;
export const NetworkActionNames = ImpressionNames.NetworkActionNames;
export const SpanTtiNames = ImpressionNames.SpanTtiNames;
export const getSuperProperties = getOS.getSuperProperties;
export const getSuperPropertiesBase64 = getOS.getSuperPropertiesBase64;
export const extendSuperProperties = getOS.extendSuperProperties;
export const getOS = getOS.getOS;
export const getDevice = getOS.getDevice;
export const getCampaignParams = getOS.getCampaignParams;
export const isThrottled = function isThrottled(CHANNEL_OPENED) {
  let tmp = null != dependencyMap[CHANNEL_OPENED];
  if (tmp) {
    const _Date = Date;
    tmp = dependencyMap[CHANNEL_OPENED] > Date.now();
  }
  return tmp;
};
export const trackMaker = (arg0) => {
  ({ addBreadcrumb: global, analyticEventConfigs: require } = arg0);
  closure_2 = undefined;
  ({ dispatcher, TRACK_ACTION_NAME } = arg0);
  closure_2 = queueTrackingEventMaker.queueTrackingEventMaker(dispatcher, TRACK_ACTION_NAME);
  return function track(arg0, arg1) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (null != closure_1_0.isServerRendering) {
      if (true === closure_1_0.isServerRendering) {
        return Promise.resolve();
      }
    }
    obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    let obj3 = tmp;
    if (typeof table[arg0] === "function") {
      let tmpResult = tmp(obj);
      if (tmpResult == null) {
        tmpResult = null;
      }
      obj3 = tmpResult;
    }
    if (null != obj3) {
      if ("throttlePeriod" in obj3) {
        const items = [arg0];
        HermesBuiltin.arraySpread(obj3.throttleKeys(obj), 1);
        const joined = items.join("_");
        let tmp13 = null != closure_1_4[joined];
        if (tmp13) {
          const _Date = Date;
          tmp13 = tmp12[joined] > Date.now();
        }
        if (tmp13) {
          return Promise.resolve();
        } else {
          if (typeof obj3.throttlePercent === "number") {
            const _Math2 = Math;
            if (Math.random() > obj3.throttlePercent) {
              return Promise.resolve();
            }
          }
          if (obj3.deduplicate) {
            if (callback2(closure_1_3[3])(closure_1_5[joined], obj)) {
              return Promise.resolve();
            } else {
              tmp15[joined] = obj;
            }
            tmp15 = closure_1_5;
          }
          const _Date2 = Date;
          tmp12[joined] = Date.now() + obj3.throttlePeriod;
        }
      } else if ("throttlePercent" in obj3) {
        const _Math = Math;
        if (Math.random() > obj3.throttlePercent) {
          return Promise.resolve();
        }
      } else {
        const _HermesInternal = HermesInternal;
        callback2(closure_1_3[4])(false, "Unsupported analytics event config: " + obj3);
        const tmp5 = callback2(closure_1_3[4]);
      }
    }
    if (callback != null) {
      callback(arg0);
    }
    return callback2(arg0, arg1, obj);
  };
};
