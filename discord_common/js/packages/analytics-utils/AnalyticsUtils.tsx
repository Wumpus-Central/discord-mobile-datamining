// discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import AnalyticsTrackingStore from "AnalyticsTrackingStore.tsx";
import StandardAnalyticsConstants from "StandardAnalyticsConstants.tsx";
import AnalyticsTrackingActionCreators from "AnalyticsTrackingActionCreators.tsx";
import _modDef1332 from "../../../../_runtime/metro/01332__.js";
import encodeProperties from "encodeProperties.tsx";
import AnalyticsSchema from "AnalyticsSchema.tsx";
import getSuperProperties from "getSuperProperties.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const dependencyMap = {};
let closure_5 = {};
const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx");

export const encodeProperties = encodeProperties.encodeProperties;
export const analyticsTrackingStoreMaker = AnalyticsTrackingStore.analyticsTrackingStoreMaker;
export const AnalyticsActionHandlers = AnalyticsTrackingStore.AnalyticsActionHandlers;
export const ImpressionTypes = StandardAnalyticsConstants.ImpressionTypes;
export const ImpressionGroups = StandardAnalyticsConstants.ImpressionGroups;
export const ImpressionNames = AnalyticsSchema.ImpressionNames;
export const NetworkActionNames = AnalyticsSchema.NetworkActionNames;
export const SpanTtiNames = AnalyticsSchema.SpanTtiNames;
export const getSuperProperties = getSuperProperties.getSuperProperties;
export const getSuperPropertiesBase64 = getSuperProperties.getSuperPropertiesBase64;
export const extendSuperProperties = getSuperProperties.extendSuperProperties;
export const getOS = getSuperProperties.getOS;
export const getDevice = getSuperProperties.getDevice;
export const getCampaignParams = getSuperProperties.getCampaignParams;
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
  ({ dispatcher, TRACK_ACTION_NAME } = arg0);
  closure_2 = AnalyticsTrackingActionCreators.queueTrackingEventMaker(dispatcher, TRACK_ACTION_NAME);
  return function track(arg0, arg1) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (null != global.isServerRendering) {
      if (true === global.isServerRendering) {
        return Promise.resolve();
      }
    }
    obj = arg1;
    if (arg1 == null) {
      obj = {};
    }
    let obj3 = tmp;
    if (typeof require[arg0] === "function") {
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
        let tmp13 = null != closure_4[joined];
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
            if (_modDef1332(closure_5[joined], obj)) {
              return Promise.resolve();
            } else {
              tmp15[joined] = obj;
            }
            tmp15 = closure_5;
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
        _modDef38(false, "Unsupported analytics event config: " + obj3);
      }
    }
    if (closure_1_0 != null) {
      closure_1_0(arg0);
    }
    return closure_2(arg0, arg1, obj);
  };
};
