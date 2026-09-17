// === Module 18199: executeHeadlessTask ===

// Module 18199 (executeHeadlessTask)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import fast_connect from "fast_connect" /* 15 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7877 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13778 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_10 = async function _executeHeadlessTask() {
  closure_1 = arg1;
  closure_2 = arg2;
  c11 = 0;
  c12 = 0;
  c9 = 0;
  return (async (arg0, value, arg2) => {
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp12 === 3) {
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
        c12 = 2;
        switch (c11) {
          case 0:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_7 = tmp4;
              closure_8 = tmp13;
              closure_136_0 = name;
              closure_136_1 = closure_1;
              closure_136_2 = closure_2;
              closure_136_3 = undefined;
              closure_136_4 = undefined;
              closure_136_5 = undefined;
              closure_136_6 = undefined;
              closure_136_7 = undefined;
              const _HermesInternal6 = HermesInternal;
              const tmp2562 = new LoggerDefault("Task " + name);
              closure_136_3 = tmp2562;
              const _Date6 = Date;
              closure_136_4 = Date.now();
              const obj5 = { message: "Executing headless task.", data: null };
              const obj6 = { name };
              obj5.data = obj6;
              SentryUtilsDefault.addBreadcrumb(obj5);
              const result = RequestGatewaySocketAll.recordStartHeadlessTask();
              const result1 = fast_connect.closeFastConnectSocket();
              closure_136_5 = false;
              c9 = 1;
              if (!TTITrackerDefault.wasEverActive) {
                TTITrackerDefault.extraProperties.headless_task_ran = true;
              }
              if ("active" !== AppState.currentState) {
                tmp2562.log("Pausing socket in headless task because app state is not active");
                PauseGatewaySocketAll.setIsPaused(true);
              }
              const obj9 = { client_app_state: AppState.currentState, name };
              AnalyticsUtilsDefault.track(constants.HEADLESS_TASK_INVOKED, obj9);
              c11 = 3;
              c12 = 1;
              const obj11 = { value: closure_2_7(), done: false };
              return obj11;
            }
          break;
          case 1:
            closure_6 = closure_10;
            c9 = 0;
            const _Date4 = Date;
            closure_136_6 = Date.now() - closure_136_4;
            const obj12 = { message: "Finished headless task.", data: null };
            const obj13 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
            obj12.data = obj13;
            closure_135_1(closure_135_3[6]).addBreadcrumb(obj12);
            closure_136_3.log("Unpausing socket");
            const obj33 = closure_135_1(closure_135_3[6]);
            closure_135_2(closure_135_3[10]).setIsPaused(false);
            const _HermesInternal4 = HermesInternal;
            const obj36 = closure_135_2(closure_135_3[10]);
            closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
            const tmp174 = closure_135_1(closure_135_3[13]);
            const obj14 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
            closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj14, { flush: true });
            c9 = 2;
            const items = [closure_136_7, ];
            const obj37 = closure_135_1(closure_135_3[11]);
            items[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
            c11 = 14;
            c12 = 1;
            const obj15 = { value: Promise.race(items), done: false };
            return obj15;
          case 2:
            c9 = 0;
            closure_136_8 = closure_10;
            closure_136_3.warn("Failed to submit analytics", closure_136_8);
            throw closure_6;
          case 3:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              closure_5 = value;
              if (arg0 === 2) {
                c9 = 0;
                const _Date3 = Date;
                closure_136_6 = Date.now() - closure_136_4;
                const obj17 = { message: "Finished headless task.", data: null };
                const obj18 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj17.data = obj18;
                closure_135_1(closure_135_3[6]).addBreadcrumb(obj17);
                closure_136_3.log("Unpausing socket");
                const obj25 = closure_135_1(closure_135_3[6]);
                closure_135_2(closure_135_3[10]).setIsPaused(false);
                const _HermesInternal3 = HermesInternal;
                const obj28 = closure_135_2(closure_135_3[10]);
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                const tmp135 = closure_135_1(closure_135_3[13]);
                const obj21 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj21, { flush: true });
                c9 = 3;
                const items1 = [closure_136_7, ];
                const obj29 = closure_135_1(closure_135_3[11]);
                items1[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
                c11 = 6;
                c12 = 1;
                const obj23 = { value: Promise.race(items1), done: false };
                return obj23;
              } else {
                closure_136_3.log("initHeadlessTask completed");
                c11 = 4;
                c12 = 1;
                const obj24 = { value: closure_135_8.promise, done: false };
                return obj24;
              }
            }
          break;
          case 4:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              closure_4 = value;
              if (arg0 === 2) {
                c9 = 0;
                const _Date2 = Date;
                closure_136_6 = Date.now() - closure_136_4;
                const obj26 = { message: "Finished headless task.", data: null };
                const obj27 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj26.data = obj27;
                closure_135_1(closure_135_3[6]).addBreadcrumb(obj26);
                closure_136_3.log("Unpausing socket");
                const obj16 = closure_135_1(closure_135_3[6]);
                closure_135_2(closure_135_3[10]).setIsPaused(false);
                const _HermesInternal2 = HermesInternal;
                const obj19 = closure_135_2(closure_135_3[10]);
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                const tmp99 = closure_135_1(closure_135_3[13]);
                const obj30 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj30, { flush: true });
                c9 = 4;
                const items2 = [closure_136_7, ];
                const obj20 = closure_135_1(closure_135_3[11]);
                items2[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
                c11 = 8;
                c12 = 1;
                const obj32 = { value: Promise.race(items2), done: false };
                return obj32;
              } else {
                closure_136_3.log("Flux Initialized");
                if (closure_135_6.isAuthenticated()) {
                  const obj34 = { analyticsToken: closure_135_6.getAnalyticsToken(), user: null };
                  const obj35 = { id: closure_135_6.getId() };
                  obj34.user = obj35;
                  closure_135_0(closure_135_3[12]).AnalyticsActionHandlers.handleConnectionOpen(obj34);
                  closure_136_3.log("Analytics Initialized");
                  const AnalyticsActionHandlers = closure_135_0(closure_135_3[12]).AnalyticsActionHandlers;
                } else {
                  closure_136_3.log("Analytics Init skipped; not authenticated");
                }
                closure_136_1()(closure_136_2);
                c11 = 9;
                c12 = 1;
              }
            }
          break;
          case 5:
            c9 = 0;
            closure_136_8 = closure_10;
            closure_136_3.warn("Failed to submit analytics", closure_136_8);
            c12 = 3;
            c9 = 0;
            c12 = 3;
            const obj38 = { value, done: true };
            return obj38;
          case 6:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c9 = 0;
            }
          break;
          case 7:
            c9 = 0;
            closure_136_8 = closure_10;
            closure_136_3.warn("Failed to submit analytics", closure_136_8);
            c12 = 3;
            c9 = 0;
            c12 = 3;
            const obj40 = { value, done: true };
            return obj40;
          case 8:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c9 = 0;
            }
          break;
          case 9:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              closure_3 = value;
              if (arg0 === 2) {
                c9 = 0;
                const _Date = Date;
                closure_136_6 = Date.now() - closure_136_4;
                const obj43 = { message: "Finished headless task.", data: null };
                const obj44 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj43.data = obj44;
                closure_135_1(closure_135_3[6]).addBreadcrumb(obj43);
                closure_136_3.log("Unpausing socket");
                const obj4 = closure_135_1(closure_135_3[6]);
                closure_135_2(closure_135_3[10]).setIsPaused(false);
                const _HermesInternal = HermesInternal;
                const obj7 = closure_135_2(closure_135_3[10]);
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                const tmp42 = closure_135_1(closure_135_3[13]);
                const obj45 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj45, { flush: true });
                c9 = 5;
                const items3 = [closure_136_7, ];
                const obj8 = closure_135_1(closure_135_3[11]);
                items3[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
                c11 = 11;
                c12 = 1;
                const obj46 = { value: Promise.race(items3), done: false };
                return obj46;
              } else {
                closure_136_5 = true;
                closure_136_3.log("Task completed successfully");
                c9 = 0;
                const _Date5 = Date;
                closure_136_6 = Date.now() - closure_136_4;
                const obj47 = { message: "Finished headless task.", data: null };
                const obj49 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj47.data = obj49;
                closure_135_1(closure_135_3[6]).addBreadcrumb(obj47);
                closure_136_3.log("Unpausing socket");
                const obj48 = closure_135_1(closure_135_3[6]);
                closure_135_2(closure_135_3[10]).setIsPaused(false);
                const _HermesInternal5 = HermesInternal;
                const obj51 = closure_135_2(closure_135_3[10]);
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                const tmp230 = closure_135_1(closure_135_3[13]);
                const obj50 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj50, { flush: true });
                c9 = 6;
                const items4 = [closure_136_7, ];
                const obj52 = closure_135_1(closure_135_3[11]);
                items4[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
                c11 = 13;
                c12 = 1;
                const obj53 = { value: Promise.race(items4), done: false };
                return obj53;
              }
            }
          break;
          case 10:
            c9 = 0;
            closure_136_8 = closure_10;
            closure_136_3.warn("Failed to submit analytics", closure_136_8);
            c12 = 3;
            c9 = 0;
            c12 = 3;
            const obj55 = { value, done: true };
            return obj55;
          case 11:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c9 = 0;
            }
          break;
          case 12:
            c9 = 0;
            closure_136_8 = closure_10;
            closure_136_3.warn("Failed to submit analytics", closure_136_8);
            c12 = 3;
            c9 = 0;
            c12 = 3;
            const obj = { value, done: true };
            return obj;
          case 13:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c9 = 0;
            }
          break;
          default:
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 0;
              c12 = 3;
              const obj57 = { value, done: true };
              return obj57;
            } else {
              c9 = 0;
            }
        }
      } catch (tmp203) {
        closure_10 = tmp203;
        if (tmp5 === c9) {
          c12 = tmp3;
          throw tmp203;
        } else if (tmp2 === tmp205) {
          c11 = tmp2;
        } else if (tmp === tmp205) {
          c11 = tmp;
        } else if (tmp3 === tmp205) {
          c11 = tmp10;
        } else if (tmp6 === tmp205) {
          c11 = tmp9;
        } else if (tmp10 === tmp205) {
          c11 = tmp8;
        } else {
          c11 = tmp7;
        }
      }
    }
  })();
};
const AppState = fn(17).AppState;
const NativeAppStartup = fn(17477);
({ initHeadlessTask: closure_7, applicationReady: closure_8 } = NativeAppStartup);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_startup/native/executeHeadlessTask.tsx");

export default function executeHeadlessTask() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};