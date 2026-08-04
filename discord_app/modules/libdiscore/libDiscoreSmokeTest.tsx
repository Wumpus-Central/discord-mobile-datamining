// discord_app/modules/libdiscore/libDiscoreSmokeTest.tsx
import items from "items";
import { AnalyticEvents } from "ME";

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
            let closure_1 = tmp3;
            let callback = tmp7;
            callback = undefined;
            tmp7 = outer1_6;
            if (!outer1_6) {
              let c3 = 1;
              let obj2 = outer1_0(outer1_2[3]);
              c4 = 2;
              logger = 1;
              const obj1 = { value: null, done: false };
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
          let c6 = true;
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
  const _libDiscoreSmokeTest = tmp;
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
  const prop = items(1866).ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((getEnabledFeatureName) => {
    const enabledFeatureName = getEnabledFeatureName.getEnabledFeatureName();
    if (null != enabledFeatureName) {
      items.push(enabledFeatureName);
    }
  });
  importDefault(698).track(AnalyticEvents.LIBDISCORE_LOADED, { success: true, experimental_features: items });
}
function trackLibdiscoreFailure(arg0) {
  let message;
  let name;
  tmp2.error("Failed to execute smoke test:", arg0);
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
  importDefault(698).track(AnalyticEvents.LIBDISCORE_LOADED, { success: false, error: combined });
}
let c5 = new require("_initLibdiscore")("libdiscore");
let c6 = false;
const tmp2 = new require("_initLibdiscore")("libdiscore");
const result = require("timestamp").fileFinishedImporting("modules/libdiscore/libDiscoreSmokeTest.tsx");

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