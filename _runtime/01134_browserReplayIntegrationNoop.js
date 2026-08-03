const require = arg1;
const dependencyMap = arg6;
function browserReplayIntegrationNoop() {

}
arg5.browserReplayIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  if (obj2.notWeb()) {
    if (typeof browserReplayIntegrationNoop !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    obj = { name: "Replay", start: null, startBuffering: null, stop: null, flush: null, getReplayId: null, getRecordingMode: null };
    obj[1] = function start() {

    };
    obj[2] = function startBuffering() {

    };
    obj[3] = function stop() {
      return Promise.resolve();
    };
    obj[4] = function flush() {
      return Promise.resolve();
    };
    obj[5] = function getReplayId() {

    };
    obj[6] = function getRecordingMode() {

    };
    let replayIntegrationResult = obj;
  } else {
    const _Object = Object;
    let mask = obj.mask;
    const merged = Object.assign({}, obj);
    if (!mask) {
      mask = [];
    }
    obj = { mask: null, unmask: null };
    const items = [".sentry-react-native-mask"];
    HermesBuiltin.arraySpread(mask, 1);
    obj[0] = items;
    const tmp8 = obj.unmask || [];
    const items1 = [".sentry-react-native-unmask:not(.sentry-react-native-mask *) > *"];
    HermesBuiltin.arraySpread(tmp8, 1);
    obj[1] = items1;
    replayIntegrationResult = require(1135) /* init */.replayIntegration(Object.assign(merged, obj));
    const tmpResult = require(1135) /* init */;
  }
  return replayIntegrationResult;
};