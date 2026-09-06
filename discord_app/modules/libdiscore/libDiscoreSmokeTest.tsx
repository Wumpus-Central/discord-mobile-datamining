// discord_app/modules/libdiscore/libDiscoreSmokeTest.tsx
import LoggerDefault from "../debug/Logger.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import initLibdiscore from "../../../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx";
import libdiscoreExperiments from "libdiscoreExperiments.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function libDiscoreSmokeTest() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _libDiscoreSmokeTest(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      let tmp7 = c4;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          tmp7 = timestampProducer;
          if (!timestampProducer) {
            c3 = 1;
            let obj2 = initLibdiscore;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: obj2.initLibdiscore(), done: false };
            return obj1;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_129_9(closure_2);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          obj = closure_129_0(closure_129_2[4]);
          closure_128_0 = obj.rustMultiply(6, 7);
          closure_129_5.info("The answer for life the universe and everything is:", closure_128_0);
          closure_129_8();
          c3 = 0;
        }
        tmp7 = closure_1;
        closure_129_6 = true;
      }
      c5 = 3;
    } catch (tmp24) {
      closure_2 = tmp24;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp24;
      } else {
        c4 = tmp;
      }
    }
  }
};
function trackLibdiscoreSuccess() {
  const items = [];
  const prop = libdiscoreExperiments.ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((getEnabledFeatureName) => {
    const enabledFeatureName = getEnabledFeatureName.getEnabledFeatureName();
    if (null != enabledFeatureName) {
      items.push(enabledFeatureName);
    }
  });
  AnalyticsUtilsDefault.track(AnalyticEvents.LIBDISCORE_LOADED, { success: true, experimental_features: items });
}
function trackLibdiscoreFailure(arg0) {
  logger.error("Failed to execute smoke test:", arg0);
  if (arg0 instanceof Error) {
    ({ message, name } = arg0);
  } else {
    message = "Unknown error";
    if (null != arg0) {
      const _String = String;
      message = String(arg0);
    }
    name = null;
  }
  let text = message;
  if (message.length > 1000) {
    text = `${message.substring(0, 997)}...`;
  }
  let combined = text;
  if (null != name) {
    const _HermesInternal = HermesInternal;
    combined = "" + name + ": " + text;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.LIBDISCORE_LOADED, { success: false, error: combined });
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const logger = new LoggerDefault("libdiscore");
let c6 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/libdiscore/libDiscoreSmokeTest.tsx");

export default libDiscoreSmokeTest;
export { libDiscoreSmokeTest };
export { trackLibdiscoreSuccess };
export const formatErrorMessage = function formatErrorMessage(arg0) {
  if (arg0 instanceof Error) {
    ({ message, name } = arg0);
  } else {
    message = "Unknown error";
    if (null != arg0) {
      const _String = String;
      message = String(arg0);
    }
    name = null;
  }
  let text = message;
  if (message.length > 1000) {
    text = `${message.substring(0, 997)}...`;
  }
  let combined = text;
  if (null != name) {
    const _HermesInternal = HermesInternal;
    combined = "" + name + ": " + text;
  }
  return combined;
};
export { trackLibdiscoreFailure };
