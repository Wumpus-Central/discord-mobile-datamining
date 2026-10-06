// === Module 18163: libDiscoreSmokeTest ===

// Module 18163 (libDiscoreSmokeTest)
import LoggerDefault from "Logger" /* 3 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import initLibdiscore from "initLibdiscore" /* 566 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

function libDiscoreSmokeTest() {
  return obj(...arguments);
}
let obj = function _libDiscoreSmokeTest() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            if (!closure_2_6) {
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj3.initLibdiscore(), done: false };
              obj3 = initLibdiscore;
              return obj5;
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_129_9(closure_2);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = closure_129_0(closure_129_2[4]);
            closure_0 = obj.rustMultiply(6, 7);
            logger.info("The answer for life the universe and everything is:", closure_0);
            closure_129_8();
            c3 = 0;
          }
          c6 = true;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp23) {
        closure_2 = tmp23;
        if (0 === c3) {
          c5 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
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
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.LIBDISCORE_LOADED, { success: true, experimental_features: items });
}
function trackLibdiscoreFailure(arg0) {
  let message;
  let name;
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
  obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.LIBDISCORE_LOADED, { success: false, error: combined });
}
const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("libdiscore");
let c6 = false;
const tmp2 = new LoggerDefault("libdiscore");
const result = size.fileFinishedImporting("modules/libdiscore/libDiscoreSmokeTest.tsx");

export default libDiscoreSmokeTest;
export { libDiscoreSmokeTest };
export { trackLibdiscoreSuccess };
export const formatErrorMessage = function formatErrorMessage(arg0) {
  let message;
  let name;
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