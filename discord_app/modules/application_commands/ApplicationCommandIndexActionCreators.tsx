// === Module 9437: ApplicationCommandIndexActionCreators ===

// Module 9437 (ApplicationCommandIndexActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_6 = async function _fetchApplicationCommandIndex(arg0, arg1) {
  let type = arg0;
  closure_1 = arg1;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            function retry() {
              const self = this;
              const apply = closure_7.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            closure_7 = function _retry() {
              const self = this;
              const tmp = c3(function*(arg0) {
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp4 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c3 = 2;
                    if (0 === dependencyMap) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else if (closure_2_4 >= 3) {
                        failure_statuses.push(1002);
                        end({ error: true });
                        const obj5 = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target };
                        tmp2(dependencyMap[2]).dispatch(obj5);
                        c3 = 3;
                        const obj3 = tmp2(dependencyMap[2]);
                      } else {
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
                        dependencyMap = 1;
                        c3 = 1;
                        const obj6 = { value: promise, done: false };
                        return obj6;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 !== 2) {
                      closure_129_8();
                    }
                    c3 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } catch (tmp22) {
                    c3 = tmp;
                    throw tmp22;
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
            };
            function end(error) {
              const diff = performance.now() - closure_3;
              const obj2 = { duration_ms: diff, error: error.error, aborted: closure_1.signal.aborted, include_applications: true, retries: Math.max(c4 - 1, 0), kind: null, command_type: null, url, target_type: closure_0.type, target_id: null, failure_statuses: null };
              type = closure_0.type;
              if ("channel" === type) {
                let channelId = closure_0.channelId;
              } else if ("guild" === type) {
                channelId = closure_0.guildId;
              } else {
                channelId = null;
                if ("user" !== type) {
                  if ("application" === type) {
                    channelId = closure_0.applicationId;
                  } else {
                    closure_0(url[6]).assertNever(closure_0);
                    const obj3 = closure_0(url[6]);
                  }
                }
              }
              obj2.target_id = channelId;
              obj2.failure_statuses = failure_statuses;
              closure_1(url[5]).track(constants.APPLICATION_COMMAND_PERFORMANCE, obj2);
              const obj = closure_1(url[5]);
            }
            const _performance = performance;
            closure_3 = performance.now();
            c4 = 0;
            const failure_statuses = [];
            type = type.type;
            if ("channel" === type) {
              let url = closure_2_5.APPLICATION_COMMAND_INDEX_CHANNEL(tmp15.channelId);
            } else {
              if ("guild" === type) {
                url = closure_2_5.APPLICATION_COMMAND_INDEX_GUILD(tmp15.guildId);
              } else if ("user" !== type) {
                if ("application" === type) {
                  url = closure_2_5.APPLICATION_COMMAND_INDEX_APPLICATION(tmp15.applicationId);
                }
              }
              url = closure_2_5.APPLICATION_COMMAND_INDEX_USER;
            }
            function fetch() {
              const HTTP = target(url[3]).HTTP;
              value = HTTP.get({
                url,
                retries: 3 - c4 - 1,
                signal: closure_1.signal,
                onRequestCreated() {
                  closure_4 = tmp + 1;
                  return +closure_4;
                },
                rejectWithError: false
              });
              return value.then((status) => {
                if (202 === status.status) {
                  failure_statuses.push(202);
                  let dispatchResult = retry(5000);
                } else {
                  end({ error: false });
                  const obj2 = { type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target, index: status.body };
                  dispatchResult = closure_1(573).dispatch(obj2);
                  const obj = closure_1(573);
                }
                return dispatchResult;
              }, (status) => {
                if (closure_1_1.signal.aborted) {
                  failure_statuses.push(1001);
                  end({ error: true });
                } else if (429 === status.status) {
                  failure_statuses.push(429);
                  let dispatchResult = retry(status.body.retry_after * closure_1(1091).Millis.SECOND);
                } else {
                  let num2 = status.status;
                  if (num2 == null) {
                    num2 = 1000;
                  }
                  failure_statuses.push(num2);
                  end({ error: true });
                  const obj2 = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target };
                  dispatchResult = closure_1(573).dispatch(obj2);
                  const obj = closure_1(573);
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
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          let obj = { value, done: true };
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
};
const Constants = fn(1074);
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandIndexActionCreators.tsx");

export const fetchApplicationCommandIndex = function fetchApplicationCommandIndex() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestApplicationCommandIndex = function requestApplicationCommandIndex(target) {
  DispatcherDefault.dispatch({ type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target });
};