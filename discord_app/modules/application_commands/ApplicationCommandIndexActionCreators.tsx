// discord_app/modules/application_commands/ApplicationCommandIndexActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../../Constants.tsx";

const require = arg1;
function _fetchApplicationCommandIndex() {
  let self = this;
  let tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              function retry() {
                const self = this;
                const apply = _retry.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              function _retry() {
                const self = this;
                const tmp = v1((arg0) => {
                  closure_0 = arg0;
                  c2 = 0;
                  c3 = 0;
                  return (/* F125642 */ function*() { ... })();
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
              function end(error) {
                const diff = performance.now() - c3;
                let obj = lib2(1242);
                obj = { duration_ms: diff, error: error.error, aborted: lib2.signal.aborted, include_applications: true, retries: Math.max(constants - 1, 0), kind: null, command_type: null, url: dependencyMap, target_type: lib.type, target_id: null, failure_statuses: null };
                const type = lib.type;
                if ("channel" === type) {
                  let channelId = tmp3.channelId;
                } else if ("guild" === type) {
                  channelId = tmp3.guildId;
                } else {
                  channelId = null;
                  if ("user" !== type) {
                    if ("application" === type) {
                      channelId = tmp3.applicationId;
                    } else {
                      lib(1369).assertNever(tmp3);
                      const obj3 = lib(1369);
                    }
                  }
                }
                obj[9] = channelId;
                obj[10] = closure_5;
                obj.track(constants.APPLICATION_COMMAND_PERFORMANCE, obj);
              }
              const _performance = performance;
              c3 = performance.now();
              c4 = 0;
              closure_5 = [];
              type = type.type;
              if ("channel" === type) {
                c2 = closure_1_5.APPLICATION_COMMAND_INDEX_CHANNEL(tmp16.channelId);
              } else {
                if ("guild" === type) {
                  c2 = closure_1_5.APPLICATION_COMMAND_INDEX_GUILD(tmp16.guildId);
                } else if ("user" !== type) {
                  if ("application" === type) {
                    c2 = closure_1_5.APPLICATION_COMMAND_INDEX_APPLICATION(tmp16.applicationId);
                  }
                }
                c2 = closure_1_5.APPLICATION_COMMAND_INDEX_USER;
              }
              function fetch() {
                const HTTP = lib(1272).HTTP;
                const value = HTTP.get({
                  url: dependencyMap,
                  retries: 3 - c4 - 1,
                  signal: lib2.signal,
                  onRequestCreated() {
                    closure_4 = tmp + 1;
                    return +closure_4;
                  },
                  rejectWithError: false
                });
                return value.then((status) => {
                  if (202 === status.status) {
                    arr = arr.push(202);
                    let dispatchResult = callback(5000);
                  } else {
                    callback2({ error: false });
                    let obj = closure_1_1(closure_1_2[2]);
                    obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target: null, index: null };
                    obj[1] = closure_0;
                    obj[2] = status.body;
                    dispatchResult = obj.dispatch(obj);
                  }
                  return dispatchResult;
                }, (status) => {
                  if (signal.signal.aborted) {
                    arr = arr.push(1001);
                    callback2({ error: true });
                  } else if (429 === status.status) {
                    arr = arr.push(429);
                    let dispatchResult = callback(status.body.retry_after * closure_1_1(closure_1_2[4]).Millis.SECOND);
                  } else {
                    let num2 = status.status;
                    if (num2 == null) {
                      num2 = 1000;
                    }
                    arr.push(num2);
                    callback2({ error: true });
                    let obj = closure_1_1(closure_1_2[2]);
                    obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target: null };
                    obj[1] = closure_0;
                    dispatchResult = obj.dispatch(obj);
                  }
                  return dispatchResult;
                });
              }
              const response = fetch();
              c3 = 1;
              c2 = 1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_6 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c4, Endpoints: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandIndexActionCreators.tsx");

export const fetchApplicationCommandIndex = function fetchApplicationCommandIndex(closure_0, abortController) {
  const self = this;
  const apply = _fetchApplicationCommandIndex.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestApplicationCommandIndex = function requestApplicationCommandIndex(target) {
  let obj = dispatcherDefault;
  obj = { type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target };
  obj.dispatch(obj);
};