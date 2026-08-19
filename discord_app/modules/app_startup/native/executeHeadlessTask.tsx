// discord_app/modules/app_startup/native/executeHeadlessTask.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { AppState } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import linkFromAppsFlyer from "NativeAppStartup.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

const require = fn;
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
        HermesBuiltin.throwTypeError();
      } else if (tmp12 === 3) {
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
                let logger;
                closure_4 = undefined;
                c5 = undefined;
                let authStore;
                closure_7 = undefined;
                const _HermesInternal = HermesInternal;
                let tmp232 = callback2(closure_1_3[5]);
                tmp232 = new tmp232("Task " + callback);
                logger = tmp232;
                const _Date6 = Date;
                closure_4 = Date.now();
                obj1 = { message: "Executing headless task.", data: null };
                const obj2 = { name: null };
                obj2[0] = callback;
                obj1[1] = obj2;
                callback2(closure_1_3[6]).addBreadcrumb(obj1);
                const obj56 = callback2(closure_1_3[6]);
                const result = callback3(closure_1_3[7]).recordStartHeadlessTask();
                const obj59 = callback3(closure_1_3[7]);
                const result1 = callback(closure_1_3[8]).closeFastConnectSocket();
                c5 = false;
                let constants = 1;
                if (!callback2(closure_1_3[9]).wasEverActive) {
                  callback2(closure_1_3[9]).extraProperties.headless_task_ran = true;
                }
                if ("active" !== closure_1_5.currentState) {
                  tmp232.log("Pausing socket in headless task because app state is not active");
                  callback3(closure_1_3[10]).setIsPaused(true);
                  const obj41 = callback3(closure_1_3[10]);
                }
                const obj60 = callback(closure_1_3[8]);
                let obj3 = { client_app_state: null, name: null };
                obj3[0] = closure_1_5.currentState;
                obj3[1] = callback;
                callback2(closure_1_3[11]).track(constants.HEADLESS_TASK_INVOKED, obj3);
                c11 = 3;
                c12 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = closure_1_7();
                return obj4;
              }
            break;
            case 1:
              authStore = closure_10;
              constants = 0;
              const _Date4 = Date;
              authStore = Date.now() - closure_4;
              const obj5 = { message: "Finished headless task.", data: null };
              let obj6 = { name: null, success: null, duration: null };
              obj6[0] = callback;
              obj6[1] = c5;
              obj6[2] = authStore + "ms";
              obj5[1] = obj6;
              callback2(logger[6]).addBreadcrumb(obj5);
              logger.log("Unpausing socket");
              const obj33 = callback2(logger[6]);
              callback3(logger[10]).setIsPaused(false);
              const obj36 = callback3(logger[10]);
              let obj7 = { client_app_state: null, name: null, success: null, duration_ms: null };
              obj7[0] = c5.currentState;
              obj7[1] = callback;
              obj7[2] = c5;
              obj7[3] = authStore;
              closure_7 = callback2(logger[11]).track(constants.HEADLESS_TASK_COMPLETED, obj7, { flush: true });
              constants = 2;
              const items = [closure_7, ];
              const obj37 = callback2(logger[11]);
              items[1] = callback(logger[13]).timeoutPromise(1500);
              c11 = 14;
              c12 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = Promise.race(items);
              return obj8;
            case 2:
              constants = 0;
              promise = closure_10;
              logger.warn("Failed to submit analytics", promise);
              throw authStore;
            case 3:
              if (arg0 === 1) {
                c12 = 3;
                throw arg1;
              } else {
                c5 = arg1;
                if (arg0 === 2) {
                  constants = 0;
                  const _Date3 = Date;
                  authStore = Date.now() - closure_4;
                  let obj24 = callback2(logger[6]);
                  let obj9 = { message: "Finished headless task.", data: null };
                  const obj10 = { name: null, success: null, duration: null };
                  obj10[0] = callback;
                  obj10[1] = c5;
                  obj10[2] = authStore + "ms";
                  obj9[1] = obj10;
                  obj24.addBreadcrumb(obj9);
                  logger.log("Unpausing socket");
                  let obj27 = callback3(logger[10]);
                  obj27.setIsPaused(false);
                  let obj28 = callback2(logger[11]);
                  const obj11 = { client_app_state: null, name: null, success: null, duration_ms: null };
                  obj11[0] = c5.currentState;
                  obj11[1] = callback;
                  obj11[2] = c5;
                  obj11[3] = authStore;
                  closure_7 = obj28.track(constants.HEADLESS_TASK_COMPLETED, obj11, { flush: true });
                  constants = 3;
                  const items1 = [closure_7, ];
                  let obj30 = callback(logger[13]);
                  items1[1] = obj30.timeoutPromise(1500);
                  c11 = 6;
                  c12 = 1;
                  const obj12 = { value: null, done: false };
                  obj12[0] = Promise.race(items1);
                  return obj12;
                } else {
                  logger.log("initHeadlessTask completed");
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
                  let obj19 = callback2(logger[11]);
                  const obj16 = { client_app_state: null, name: null, success: null, duration_ms: null };
                  obj16[0] = c5.currentState;
                  obj16[1] = callback;
                  obj16[2] = c5;
                  obj16[3] = authStore;
                  closure_7 = obj19.track(constants.HEADLESS_TASK_COMPLETED, obj16, { flush: true });
                  constants = 4;
                  const items2 = [closure_7, ];
                  let obj21 = callback(logger[13]);
                  items2[1] = obj21.timeoutPromise(1500);
                  c11 = 8;
                  c12 = 1;
                  const obj17 = { value: null, done: false };
                  obj17[0] = Promise.race(items2);
                  return obj17;
                } else {
                  logger.log("Flux Initialized");
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
                  obj7 = callback2(logger[11]);
                  obj24 = { client_app_state: null, name: null, success: null, duration_ms: null };
                  obj24[0] = c5.currentState;
                  obj24[1] = callback;
                  obj24[2] = c5;
                  obj24[3] = authStore;
                  closure_7 = obj7.track(constants.HEADLESS_TASK_COMPLETED, obj24, { flush: true });
                  constants = 5;
                  const items3 = [closure_7, ];
                  obj9 = callback(logger[13]);
                  items3[1] = obj9.timeoutPromise(1500);
                  c11 = 11;
                  c12 = 1;
                  const obj25 = { value: null, done: false };
                  obj25[0] = Promise.race(items3);
                  return obj25;
                } else {
                  c5 = true;
                  logger.log("Task completed successfully");
                  constants = 0;
                  const _Date5 = Date;
                  authStore = Date.now() - closure_4;
                  const obj26 = { message: "Finished headless task.", data: null };
                  obj27 = { name: null, success: null, duration: null };
                  obj27[0] = callback;
                  obj27[1] = c5;
                  obj27[2] = authStore + "ms";
                  obj26[1] = obj27;
                  callback2(logger[6]).addBreadcrumb(obj26);
                  logger.log("Unpausing socket");
                  const obj48 = callback2(logger[6]);
                  callback3(logger[10]).setIsPaused(false);
                  const obj51 = callback3(logger[10]);
                  obj28 = { client_app_state: null, name: null, success: null, duration_ms: null };
                  obj28[0] = c5.currentState;
                  obj28[1] = callback;
                  obj28[2] = c5;
                  obj28[3] = authStore;
                  closure_7 = callback2(logger[11]).track(constants.HEADLESS_TASK_COMPLETED, obj28, { flush: true });
                  constants = 6;
                  const items4 = [closure_7, ];
                  const obj52 = callback2(logger[11]);
                  items4[1] = callback(logger[13]).timeoutPromise(1500);
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
        } catch (tmp183) {
          closure_10 = tmp183;
          if (tmp5 === constants) {
            c12 = tmp3;
            throw tmp183;
          } else if (tmp2 === tmp185) {
            c11 = tmp2;
          } else if (tmp === tmp185) {
            c11 = tmp;
          } else if (tmp3 === tmp185) {
            c11 = tmp10;
          } else if (tmp6 === tmp185) {
            c11 = tmp9;
          } else if (tmp10 === tmp185) {
            c11 = tmp8;
          } else {
            c11 = tmp7;
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
let result = require("obj132").fileFinishedImporting("modules/app_startup/native/executeHeadlessTask.tsx");

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