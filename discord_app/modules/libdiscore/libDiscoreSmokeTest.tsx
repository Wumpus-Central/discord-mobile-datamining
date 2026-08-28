// === Module 17435: libDiscoreSmokeTest ===

// Module 17435 (libDiscoreSmokeTest)
import timestampDefault from "timestamp" /* 3 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
function libDiscoreSmokeTest() {
  const self = this;
  const apply = _libDiscoreSmokeTest.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _libDiscoreSmokeTest() {
  const self = this;
  const tmp = callback(function*() {
    if (logger === 2) {
      logger = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        logger = 2;
        let tmp7 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            let callback = tmp7;
            callback = undefined;
            tmp7 = closure_1_6;
            if (!closure_1_6) {
              c3 = 1;
              let obj2 = closure_1_0(closure_1_2[3]);
              c4 = 2;
              logger = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.initLibdiscore();
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            callback3(table);
          } else if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            logger = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = callback(table[4]);
            callback = obj.rustMultiply(6, 7);
            logger.info("The answer for life the universe and everything is:", callback);
            callback2();
            c3 = 0;
          }
          tmp7 = closure_1;
          c6 = true;
        }
        logger = 3;
      } catch (tmp24) {
        table = tmp24;
        if (tmp4 === c3) {
          logger = tmp2;
          throw tmp24;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function trackLibdiscoreSuccess() {
  const items = [];
  const prop = items(1914).ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((getEnabledFeatureName) => {
    const enabledFeatureName = getEnabledFeatureName.getEnabledFeatureName();
    if (null != enabledFeatureName) {
      items.push(enabledFeatureName);
    }
  });
  expandEventPropertiesDefault.track(AnalyticEvents.LIBDISCORE_LOADED, { success: true, experimental_features: items });
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
  expandEventPropertiesDefault.track(AnalyticEvents.LIBDISCORE_LOADED, { success: false, error: combined });
}
let closure_5 = new timestampDefault("libdiscore");
let c6 = false;
const tmp2 = new timestampDefault("libdiscore");
const result = require("set").fileFinishedImporting("modules/libdiscore/libDiscoreSmokeTest.tsx");

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