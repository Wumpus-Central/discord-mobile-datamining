// === Module 17472: _executeHeadlessTask ===

// Module 17472 (_executeHeadlessTask)
import closure_4 from "asyncGeneratorStep" /* 5 */;
import { AppState } from "get ActivityIndicator" /* 17 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import linkFromAppsFlyer from "linkFromAppsFlyer" /* 16770 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
function _executeHeadlessTask() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c12 === 2) {
        c12 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp11;
        throwTypeErrorResult = globalThis;
        if (tmp12 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c12 = 2;
            switch (c11) {
              case 0:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c12 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_7 = tmp4;
                  let promise = tmp13;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = callback3;
                  let logger;
                  closure_4 = undefined;
                  c5 = undefined;
                  let authStore;
                  closure_7 = undefined;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = closure_1_3;
                  throwTypeErrorResult = callback;
                  const _HermesInternal6 = HermesInternal;
                  throwTypeErrorResult = callback2(closure_1_3[5]);
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new throwTypeErrorResult("Task " + callback);
                  logger = throwTypeErrorResult;
                  const _Date6 = Date;
                  closure_4 = Date.now();
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = closure_1_3;
                  obj1 = { message: "Executing headless task.", data: null };
                  const obj2 = { name: null };
                  obj2[0] = callback;
                  obj1[1] = obj2;
                  throwTypeErrorResult = callback2(closure_1_3[6]).addBreadcrumb(obj1);
                  throwTypeErrorResult = callback3;
                  throwTypeErrorResult = closure_1_3;
                  const obj56 = callback2(closure_1_3[6]);
                  throwTypeErrorResult = callback3(closure_1_3[7]).recordStartHeadlessTask();
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = closure_1_3;
                  const obj59 = callback3(closure_1_3[7]);
                  throwTypeErrorResult = callback(closure_1_3[8]).closeFastConnectSocket();
                  c5 = false;
                  let constants = 1;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = closure_1_3;
                  if (!callback2(closure_1_3[9]).wasEverActive) {
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = closure_1_3;
                    callback2(closure_1_3[9]).extraProperties.headless_task_ran = true;
                  }
                  throwTypeErrorResult = closure_1_5;
                  if ("active" !== closure_1_5.currentState) {
                    throwTypeErrorResult = throwTypeErrorResult.log("Pausing socket in headless task because app state is not active");
                    throwTypeErrorResult = callback3;
                    throwTypeErrorResult = closure_1_3;
                    throwTypeErrorResult = callback3(closure_1_3[10]).setIsPaused(true);
                    const obj41 = callback3(closure_1_3[10]);
                  }
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = closure_1_3;
                  const obj60 = callback(closure_1_3[8]);
                  throwTypeErrorResult = constants;
                  let obj3 = { client_app_state: null, name: null };
                  throwTypeErrorResult = closure_1_5;
                  obj3[0] = closure_1_5.currentState;
                  obj3[1] = throwTypeErrorResult;
                  throwTypeErrorResult = callback2(closure_1_3[11]).track(constants.HEADLESS_TASK_INVOKED, obj3);
                  throwTypeErrorResult = closure_1_7;
                  c11 = 3;
                  c12 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = closure_1_7();
                  return obj4;
                }
              break;
              case 1:
                throwTypeErrorResult = promise;
                throwTypeErrorResult = closure_7;
                throwTypeErrorResult = closure_10;
                throwTypeErrorResult = closure_10;
                authStore = closure_10;
                constants = 0;
                const _Date4 = Date;
                throwTypeErrorResult = closure_4;
                authStore = Date.now() - closure_4;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = logger;
                const obj5 = { message: "Finished headless task.", data: null };
                let obj6 = { name: null, success: null, duration: null };
                throwTypeErrorResult = callback;
                obj6[0] = callback;
                throwTypeErrorResult = c5;
                obj6[1] = c5;
                throwTypeErrorResult = authStore;
                obj6[2] = authStore + "ms";
                obj5[1] = obj6;
                throwTypeErrorResult = callback2(logger[6]).addBreadcrumb(obj5);
                throwTypeErrorResult = logger;
                throwTypeErrorResult = logger.log("Unpausing socket");
                throwTypeErrorResult = callback3;
                throwTypeErrorResult = logger;
                const obj33 = callback2(logger[6]);
                throwTypeErrorResult = callback3(logger[10]).setIsPaused(false);
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = logger;
                throwTypeErrorResult = callback;
                const _HermesInternal4 = HermesInternal;
                throwTypeErrorResult = callback2(logger[13]);
                throwTypeErrorResult = throwTypeErrorResult("headless_task:" + callback);
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = logger;
                const obj36 = callback3(logger[10]);
                throwTypeErrorResult = constants;
                let obj7 = { client_app_state: null, name: null, success: null, duration_ms: null };
                throwTypeErrorResult = c5;
                obj7[0] = c5.currentState;
                throwTypeErrorResult = callback;
                obj7[1] = callback;
                throwTypeErrorResult = c5;
                obj7[2] = c5;
                throwTypeErrorResult = authStore;
                obj7[3] = authStore;
                closure_7 = callback2(logger[11]).track(constants.HEADLESS_TASK_COMPLETED, obj7, { flush: true });
                throwTypeErrorResult = promise;
                throwTypeErrorResult = closure_7;
                constants = 2;
                throwTypeErrorResult = closure_7;
                const items = [closure_7, ];
                throwTypeErrorResult = callback;
                throwTypeErrorResult = logger;
                const obj37 = callback2(logger[11]);
                items[1] = callback(logger[14]).timeoutPromise(1500);
                c11 = 14;
                c12 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = Promise.race(items);
                return obj8;
              case 2:
                throwTypeErrorResult = promise;
                throwTypeErrorResult = closure_10;
                throwTypeErrorResult = closure_10;
                constants = 0;
                promise = closure_10;
                throwTypeErrorResult = logger;
                throwTypeErrorResult = promise;
                throwTypeErrorResult = logger.warn("Failed to submit analytics", promise);
                throwTypeErrorResult = authStore;
                throw authStore;
              case 3:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else {
                  c5 = arg1;
                  if (arg0 === 2) {
                    constants = 0;
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    const _Date3 = Date;
                    throwTypeErrorResult = closure_4;
                    authStore = Date.now() - closure_4;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    let obj24 = callback2(logger[6]);
                    let obj9 = { message: "Finished headless task.", data: null };
                    const obj10 = { name: null, success: null, duration: null };
                    throwTypeErrorResult = callback;
                    obj10[0] = callback;
                    throwTypeErrorResult = c5;
                    obj10[1] = c5;
                    throwTypeErrorResult = authStore;
                    obj10[2] = authStore + "ms";
                    obj9[1] = obj10;
                    throwTypeErrorResult = obj24.addBreadcrumb(obj9);
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = logger.log("Unpausing socket");
                    throwTypeErrorResult = callback3;
                    throwTypeErrorResult = logger;
                    let obj27 = callback3(logger[10]);
                    throwTypeErrorResult = obj27.setIsPaused(false);
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = callback;
                    const _HermesInternal3 = HermesInternal;
                    throwTypeErrorResult = callback2(logger[13]);
                    throwTypeErrorResult = throwTypeErrorResult("headless_task:" + callback);
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    let obj28 = callback2(logger[11]);
                    throwTypeErrorResult = constants;
                    const obj11 = { client_app_state: null, name: null, success: null, duration_ms: null };
                    throwTypeErrorResult = c5;
                    obj11[0] = c5.currentState;
                    throwTypeErrorResult = callback;
                    obj11[1] = callback;
                    throwTypeErrorResult = c5;
                    obj11[2] = c5;
                    throwTypeErrorResult = authStore;
                    obj11[3] = authStore;
                    closure_7 = obj28.track(constants.HEADLESS_TASK_COMPLETED, obj11, { flush: true });
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    constants = 3;
                    throwTypeErrorResult = closure_7;
                    const items1 = [closure_7, ];
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = logger;
                    let obj30 = callback(logger[14]);
                    items1[1] = obj30.timeoutPromise(1500);
                    c11 = 6;
                    c12 = 1;
                    const obj12 = { value: null, done: false };
                    obj12[0] = Promise.race(items1);
                    return obj12;
                  } else {
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = logger.log("initHeadlessTask completed");
                    throwTypeErrorResult = promise;
                    c11 = 4;
                    c12 = 1;
                    const obj13 = { value: null, done: false };
                    obj13[0] = promise.promise;
                    return obj13;
                  }
                }
              break;
              case 4:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else {
                  closure_4 = arg1;
                  if (arg0 === 2) {
                    constants = 0;
                    const _Date2 = Date;
                    authStore = Date.now() - closure_4;
                    let obj15 = callback2(logger[6]);
                    const obj14 = { message: "Finished headless task.", data: null };
                    obj15 = { name: null, success: null, duration: null };
                    obj15[0] = callback;
                    obj15[1] = c5;
                    obj15[2] = authStore + "ms";
                    obj14[1] = obj15;
                    obj15.addBreadcrumb(obj14);
                    logger.log("Unpausing socket");
                    let obj18 = callback3(logger[10]);
                    obj18.setIsPaused(false);
                    throwTypeErrorResult = callback;
                    const _HermesInternal2 = HermesInternal;
                    throwTypeErrorResult = callback2(logger[13])("headless_task:" + callback);
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    let obj19 = callback2(logger[11]);
                    throwTypeErrorResult = constants;
                    const obj16 = { client_app_state: null, name: null, success: null, duration_ms: null };
                    throwTypeErrorResult = c5;
                    obj16[0] = c5.currentState;
                    throwTypeErrorResult = callback;
                    obj16[1] = callback;
                    throwTypeErrorResult = c5;
                    obj16[2] = c5;
                    throwTypeErrorResult = authStore;
                    obj16[3] = authStore;
                    closure_7 = obj19.track(constants.HEADLESS_TASK_COMPLETED, obj16, { flush: true });
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    constants = 4;
                    throwTypeErrorResult = closure_7;
                    const items2 = [closure_7, ];
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = logger;
                    let obj21 = callback(logger[14]);
                    items2[1] = obj21.timeoutPromise(1500);
                    c11 = 8;
                    c12 = 1;
                    const obj17 = { value: null, done: false };
                    obj17[0] = Promise.race(items2);
                    return obj17;
                  } else {
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = logger.log("Flux Initialized");
                    throwTypeErrorResult = authStore;
                    throwTypeErrorResult = promise;
                    if (authStore.isAuthenticated()) {
                      obj18 = { analyticsToken: null, user: null };
                      obj18[0] = authStore.getAnalyticsToken();
                      obj19 = { id: null };
                      obj19[0] = authStore.getId();
                      obj18[1] = obj19;
                      callback(logger[12]).AnalyticsActionHandlers.handleConnectionOpen(obj18);
                      logger.log("Analytics Initialized");
                      const AnalyticsActionHandlers = callback(logger[12]).AnalyticsActionHandlers;
                    } else {
                      logger.log("Analytics Init skipped; not authenticated");
                    }
                    callback2()(callback3);
                    c11 = 9;
                    c12 = 1;
                  }
                }
              break;
              case 5:
                constants = 0;
                promise = closure_10;
                logger.warn("Failed to submit analytics", promise);
                c12 = 3;
                constants = 0;
                c12 = 3;
                const obj20 = { value: null, done: true };
                obj20[0] = arg1;
                return obj20;
              case 6:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  constants = 0;
                }
              break;
              case 7:
                constants = 0;
                promise = closure_10;
                logger.warn("Failed to submit analytics", promise);
                c12 = 3;
                constants = 0;
                c12 = 3;
                obj21 = { value: null, done: true };
                obj21[0] = arg1;
                return obj21;
              case 8:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  constants = 0;
                }
              break;
              case 9:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else {
                  logger = arg1;
                  if (arg0 === 2) {
                    constants = 0;
                    const _Date = Date;
                    authStore = Date.now() - closure_4;
                    obj3 = callback2(logger[6]);
                    const obj22 = { message: "Finished headless task.", data: null };
                    const obj23 = { name: null, success: null, duration: null };
                    obj23[0] = callback;
                    obj23[1] = c5;
                    obj23[2] = authStore + "ms";
                    obj22[1] = obj23;
                    obj3.addBreadcrumb(obj22);
                    logger.log("Unpausing socket");
                    obj6 = callback3(logger[10]);
                    obj6.setIsPaused(false);
                    const _HermesInternal = HermesInternal;
                    callback2(logger[13])("headless_task:" + callback);
                    obj7 = callback2(logger[11]);
                    obj24 = { client_app_state: null, name: null, success: null, duration_ms: null };
                    obj24[0] = c5.currentState;
                    obj24[1] = callback;
                    obj24[2] = c5;
                    obj24[3] = authStore;
                    closure_7 = obj7.track(constants.HEADLESS_TASK_COMPLETED, obj24, { flush: true });
                    constants = 5;
                    const items3 = [closure_7, ];
                    obj9 = callback(logger[14]);
                    items3[1] = obj9.timeoutPromise(1500);
                    c11 = 11;
                    c12 = 1;
                    const obj25 = { value: null, done: false };
                    obj25[0] = Promise.race(items3);
                    return obj25;
                  } else {
                    throwTypeErrorResult = promise;
                    c5 = true;
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = logger.log("Task completed successfully");
                    constants = 0;
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    const _Date5 = Date;
                    throwTypeErrorResult = closure_4;
                    authStore = Date.now() - closure_4;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    const obj26 = { message: "Finished headless task.", data: null };
                    obj27 = { name: null, success: null, duration: null };
                    throwTypeErrorResult = callback;
                    obj27[0] = callback;
                    throwTypeErrorResult = c5;
                    obj27[1] = c5;
                    throwTypeErrorResult = authStore;
                    obj27[2] = authStore + "ms";
                    obj26[1] = obj27;
                    throwTypeErrorResult = callback2(logger[6]).addBreadcrumb(obj26);
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = logger.log("Unpausing socket");
                    throwTypeErrorResult = callback3;
                    throwTypeErrorResult = logger;
                    const obj48 = callback2(logger[6]);
                    throwTypeErrorResult = callback3(logger[10]).setIsPaused(false);
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    throwTypeErrorResult = callback;
                    const _HermesInternal5 = HermesInternal;
                    throwTypeErrorResult = callback2(logger[13]);
                    throwTypeErrorResult = throwTypeErrorResult("headless_task:" + callback);
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = logger;
                    const obj51 = callback3(logger[10]);
                    throwTypeErrorResult = constants;
                    obj28 = { client_app_state: null, name: null, success: null, duration_ms: null };
                    throwTypeErrorResult = c5;
                    obj28[0] = c5.currentState;
                    throwTypeErrorResult = callback;
                    obj28[1] = callback;
                    throwTypeErrorResult = c5;
                    obj28[2] = c5;
                    throwTypeErrorResult = authStore;
                    obj28[3] = authStore;
                    closure_7 = callback2(logger[11]).track(constants.HEADLESS_TASK_COMPLETED, obj28, { flush: true });
                    throwTypeErrorResult = promise;
                    throwTypeErrorResult = closure_7;
                    constants = 6;
                    throwTypeErrorResult = closure_7;
                    const items4 = [closure_7, ];
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = logger;
                    const obj52 = callback2(logger[11]);
                    items4[1] = callback(logger[14]).timeoutPromise(1500);
                    c11 = 13;
                    c12 = 1;
                    const obj29 = { value: null, done: false };
                    obj29[0] = Promise.race(items4);
                    return obj29;
                  }
                }
              break;
              case 10:
                constants = 0;
                promise = closure_10;
                logger.warn("Failed to submit analytics", promise);
                c12 = 3;
                constants = 0;
                c12 = 3;
                obj30 = { value: null, done: true };
                obj30[0] = arg1;
                return obj30;
              case 11:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  constants = 0;
                }
              break;
              case 12:
                constants = 0;
                promise = closure_10;
                logger.warn("Failed to submit analytics", promise);
                c12 = 3;
                constants = 0;
                c12 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              case 13:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  constants = 0;
                }
              break;
              default:
                if (arg0 === 1) {
                  c12 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  constants = 0;
                  c12 = 3;
                  const obj31 = { value: null, done: true };
                  obj31[0] = arg1;
                  return obj31;
                } else {
                  constants = 0;
                }
            }
          } catch (throwTypeErrorResult) {
            closure_10 = throwTypeErrorResult;
            throwTypeErrorResult = constants;
            if (tmp5 === constants) {
              throwTypeErrorResult = tmp3;
              c12 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c11 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c11 = throwTypeErrorResult;
            } else if (tmp3 === throwTypeErrorResult) {
              c11 = tmp10;
            } else if (tmp6 === throwTypeErrorResult) {
              c11 = tmp9;
            } else if (tmp10 === throwTypeErrorResult) {
              c11 = tmp8;
            } else {
              c11 = tmp7;
            }
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ initHeadlessTask: error, applicationReady: closure_8 } = linkFromAppsFlyer);
const result = require("set").fileFinishedImporting("modules/app_startup/native/executeHeadlessTask.tsx");

export default function executeHeadlessTask() {
  const self = this;
  const apply = _executeHeadlessTask.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};