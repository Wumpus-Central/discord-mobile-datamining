// _runtime/00999_browserReplayIntegrationNoop.js
import init from "01000_init.js";

require = arg1;
const dependencyMap = arg6;
function browserReplayIntegrationNoop() {}

export const browserReplayIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  if (obj2.notWeb()) {
    if (typeof browserReplayIntegrationNoop === "function") {
      const obj3 = {
        name: "Replay",
        start() {},
        startBuffering() {},
        stop() {
          return Promise.resolve();
        },
        flush() {
          return Promise.resolve();
        },
        getReplayId() {},
        getRecordingMode() {},
      };
      let replayIntegrationResult = obj3;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _Object = Object;
    let mask = obj.mask;
    const merged = Object.assign({}, obj);
    if (!mask) {
      mask = [];
    }
    const obj4 = { mask: null, unmask: null };
    const items = [".sentry-react-native-mask"];
    HermesBuiltin.arraySpread(mask, 1);
    obj4.mask = items;
    const tmp8 = obj.unmask || [];
    const items1 = [".sentry-react-native-unmask:not(.sentry-react-native-mask *) > *"];
    HermesBuiltin.arraySpread(tmp8, 1);
    obj4.unmask = items1;
    replayIntegrationResult = init.replayIntegration(Object.assign(merged, obj4));
    const tmpResult = init;
  }
  return replayIntegrationResult;
};
