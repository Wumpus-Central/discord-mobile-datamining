// discord_app/modules/application_commands/ApplicationCommandIndexActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj = function _fetchApplicationCommandIndex() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let type = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          let tmp3 = c3;
          let num2 = 0;
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
                return obj(...arguments);
              }
              obj = function _retry() {
                let target;
                obj = closure_2_3(function* (arg0) {
                  if (c3 === 2) {
                    c3 = 3;
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
                    try {
                      let dispatchResult;
                      c3 = 2;
                      if (0 === c2) {
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
                          const obj3 = tmp(c2[2]);
                          dispatchResult = obj3.dispatch(obj5);
                        } else {
                          const self = this;
                          const self2 = this;
                          const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
                          c2 = 1;
                          c3 = 1;
                          const obj6 = { value: promise, done: false };
                          return obj6;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        dispatchResult = closure_129_8();
                      }
                      c3 = 3;
                      const obj7 = { value: dispatchResult, done: true };
                      return obj7;
                    } catch (tmp18) {
                      c3 = 3;
                      throw tmp18;
                    }
                  }
                });
                return obj(...arguments);
              };
              function end(error) {
                let channelId;
                error = error.error;
                const diff = performance.now() - closure_3;
                const tmp3 = closure_2_1(closure_2_2[5]);
                const track = tmp3.track;
                const APPLICATION_COMMAND_PERFORMANCE = constants.APPLICATION_COMMAND_PERFORMANCE;
                type = closure_0.type;
                obj = {
                  duration_ms: diff,
                  error,
                  aborted: closure_1.signal.aborted,
                  include_applications: true,
                  retries: Math.max(c4 - 1, 0),
                  kind: null,
                  command_type: null,
                  url,
                  target_type: closure_0.type,
                  target_id: channelId,
                  failure_statuses,
                };
                if ("channel" === type) {
                  channelId = closure_0.channelId;
                } else if ("guild" === type) {
                  channelId = closure_0.guildId;
                } else {
                  channelId = null;
                  if ("user" !== type) {
                    if ("application" === type) {
                      channelId = closure_0.applicationId;
                    } else {
                      const obj2 = closure_2_0(closure_2_2[6]);
                      obj2.assertNever(closure_0);
                    }
                  }
                }
                track(APPLICATION_COMMAND_PERFORMANCE, obj);
              }
              const _performance = performance;
              let closure_3 = performance.now();
              let c4 = 0;
              let closure_5 = [];
              type = type.type;
              if ("channel" === type) {
                let closure_2 = closure_2_5.APPLICATION_COMMAND_INDEX_CHANNEL(tmp12.channelId);
              } else if ("guild" === type) {
                closure_2 = closure_2_5.APPLICATION_COMMAND_INDEX_GUILD(tmp12.guildId);
              } else if ("user" === type) {
                closure_2 = closure_2_5.APPLICATION_COMMAND_INDEX_USER;
              } else if ("application" === type) {
                closure_2 = closure_2_5.APPLICATION_COMMAND_INDEX_APPLICATION(tmp12.applicationId);
              }
              function fetch() {
                let target;
                const HTTP = type(closure_2_2[3]).HTTP;
                obj = {
                  url,
                  retries: 3 - c4 - 1,
                  signal: closure_1.signal,
                  onRequestCreated() {
                    closure_4 = tmp + 1;
                    return +closure_4;
                  },
                  rejectWithError: false,
                };
                const value = HTTP.get(obj);
                return value.then(
                  (status) => {
                    let dispatchResult;
                    if (202 === status.status) {
                      failure_statuses.push(202);
                      dispatchResult = retry(5000);
                    } else {
                      end({ error: false });
                      const obj2 = { type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", target, index: status.body };
                      obj = closure_1(url[2]);
                      dispatchResult = obj.dispatch(obj2);
                    }
                    return dispatchResult;
                  },
                  (status) => {
                    let dispatchResult;
                    if (closure_1_1.signal.aborted) {
                      failure_statuses.push(1001);
                      end({ error: true });
                    } else if (429 === status.status) {
                      failure_statuses.push(429);
                      dispatchResult = retry(status.body.retry_after * closure_1(url[4]).Millis.SECOND);
                    } else {
                      let num2 = status.status;
                      const push = failure_statuses.push;
                      if (num2 == null) {
                        num2 = 1000;
                      }
                      push(num2);
                      end({ error: true });
                      const obj2 = { type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", target };
                      obj = closure_1(url[2]);
                      dispatchResult = obj.dispatch(obj2);
                    }
                    return dispatchResult;
                  },
                );
              }
              c3 = 1;
              c2 = 1;
              let obj4 = { value: fetch(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandIndexActionCreators.tsx");

export const fetchApplicationCommandIndex = function fetchApplicationCommandIndex() {
  return obj(...arguments);
};
export const requestApplicationCommandIndex = function requestApplicationCommandIndex(target) {
  obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", target };
  obj.dispatch(obj2);
};
