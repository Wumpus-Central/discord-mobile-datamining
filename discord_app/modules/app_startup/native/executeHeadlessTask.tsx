// === Module 17928: executeHeadlessTask ===

// Module 17928 (executeHeadlessTask)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import fast_connect from "fast_connect" /* 15 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7757 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13666 */;
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
        let obj = { value, done: true };
        return obj;
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
              obj = { value, done: true };
              return obj;
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
              let tmp256 = LoggerDefault;
              tmp256 = new tmp256("Task " + name);
              closure_136_3 = tmp256;
              const _Date6 = Date;
              closure_136_4 = Date.now();
              const obj1 = { message: "Executing headless task.", data: null };
              const obj2 = { name };
              obj1.data = obj2;
              SentryUtilsDefault.addBreadcrumb(obj1);
              const result = RequestGatewaySocketAll.recordStartHeadlessTask();
              const result1 = fast_connect.closeFastConnectSocket();
              closure_136_5 = false;
              c9 = 1;
              if (!TTITrackerDefault.wasEverActive) {
                TTITrackerDefault.extraProperties.headless_task_ran = true;
              }
              if ("active" !== AppState.currentState) {
                tmp256.log("Pausing socket in headless task because app state is not active");
                PauseGatewaySocketAll.setIsPaused(true);
              }
              let obj3 = { client_app_state: AppState.currentState, name };
              AnalyticsUtilsDefault.track(constants.HEADLESS_TASK_INVOKED, obj3);
              c11 = 3;
              c12 = 1;
              const obj4 = { value: closure_2_7(), done: false };
              return obj4;
            }
          break;
          case 1:
            closure_6 = closure_10;
            c9 = 0;
            const _Date4 = Date;
            closure_136_6 = Date.now() - closure_136_4;
            const obj5 = { message: "Finished headless task.", data: null };
            let obj6 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
            obj5.data = obj6;
            closure_135_1(closure_135_3[6]).addBreadcrumb(obj5);
            closure_136_3.log("Unpausing socket");
            const obj33 = closure_135_1(closure_135_3[6]);
            closure_135_2(closure_135_3[10]).setIsPaused(false);
            const _HermesInternal4 = HermesInternal;
            const obj36 = closure_135_2(closure_135_3[10]);
            closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
            const tmp174 = closure_135_1(closure_135_3[13]);
            let obj7 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
            closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj7, { flush: true });
            c9 = 2;
            const items = [closure_136_7, ];
            const obj37 = closure_135_1(closure_135_3[11]);
            items[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
            c11 = 14;
            c12 = 1;
            const obj8 = { value: Promise.race(items), done: false };
            return obj8;
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
                let obj24 = closure_135_1(closure_135_3[6]);
                let obj9 = { message: "Finished headless task.", data: null };
                const obj10 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj9.data = obj10;
                obj24.addBreadcrumb(obj9);
                closure_136_3.log("Unpausing socket");
                let obj27 = closure_135_2(closure_135_3[10]);
                obj27.setIsPaused(false);
                const _HermesInternal3 = HermesInternal;
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                let obj28 = closure_135_1(closure_135_3[11]);
                const obj11 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = obj28.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj11, { flush: true });
                c9 = 3;
                const items1 = [closure_136_7, ];
                let obj30 = closure_135_0(closure_135_3[14]);
                items1[1] = obj30.timeoutPromise(1500);
                c11 = 6;
                c12 = 1;
                const obj12 = { value: Promise.race(items1), done: false };
                return obj12;
              } else {
                closure_136_3.log("initHeadlessTask completed");
                c11 = 4;
                c12 = 1;
                const obj13 = { value: closure_135_8.promise, done: false };
                return obj13;
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
                let obj15 = closure_135_1(closure_135_3[6]);
                const obj14 = { message: "Finished headless task.", data: null };
                obj15 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj14.data = obj15;
                obj15.addBreadcrumb(obj14);
                closure_136_3.log("Unpausing socket");
                let obj18 = closure_135_2(closure_135_3[10]);
                obj18.setIsPaused(false);
                const _HermesInternal2 = HermesInternal;
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                let obj19 = closure_135_1(closure_135_3[11]);
                const obj16 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = obj19.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj16, { flush: true });
                c9 = 4;
                const items2 = [closure_136_7, ];
                let obj21 = closure_135_0(closure_135_3[14]);
                items2[1] = obj21.timeoutPromise(1500);
                c11 = 8;
                c12 = 1;
                const obj17 = { value: Promise.race(items2), done: false };
                return obj17;
              } else {
                closure_136_3.log("Flux Initialized");
                if (closure_135_6.isAuthenticated()) {
                  obj18 = { analyticsToken: closure_135_6.getAnalyticsToken(), user: null };
                  obj19 = { id: closure_135_6.getId() };
                  obj18.user = obj19;
                  closure_135_0(closure_135_3[12]).AnalyticsActionHandlers.handleConnectionOpen(obj18);
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
            const obj20 = { value, done: true };
            return obj20;
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
            obj21 = { value, done: true };
            return obj21;
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
                obj3 = closure_135_1(closure_135_3[6]);
                const obj22 = { message: "Finished headless task.", data: null };
                const obj23 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj22.data = obj23;
                obj3.addBreadcrumb(obj22);
                closure_136_3.log("Unpausing socket");
                obj6 = closure_135_2(closure_135_3[10]);
                obj6.setIsPaused(false);
                const _HermesInternal = HermesInternal;
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                obj7 = closure_135_1(closure_135_3[11]);
                obj24 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = obj7.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj24, { flush: true });
                c9 = 5;
                const items3 = [closure_136_7, ];
                obj9 = closure_135_0(closure_135_3[14]);
                items3[1] = obj9.timeoutPromise(1500);
                c11 = 11;
                c12 = 1;
                const obj25 = { value: Promise.race(items3), done: false };
                return obj25;
              } else {
                closure_136_5 = true;
                closure_136_3.log("Task completed successfully");
                c9 = 0;
                const _Date5 = Date;
                closure_136_6 = Date.now() - closure_136_4;
                const obj26 = { message: "Finished headless task.", data: null };
                obj27 = { name: closure_136_0, success: closure_136_5, duration: closure_136_6 + "ms" };
                obj26.data = obj27;
                closure_135_1(closure_135_3[6]).addBreadcrumb(obj26);
                closure_136_3.log("Unpausing socket");
                const obj48 = closure_135_1(closure_135_3[6]);
                closure_135_2(closure_135_3[10]).setIsPaused(false);
                const _HermesInternal5 = HermesInternal;
                const obj51 = closure_135_2(closure_135_3[10]);
                closure_135_1(closure_135_3[13])("headless_task:" + closure_136_0);
                const tmp230 = closure_135_1(closure_135_3[13]);
                obj28 = { client_app_state: closure_135_5.currentState, name: closure_136_0, success: closure_136_5, duration_ms: closure_136_6 };
                closure_136_7 = closure_135_1(closure_135_3[11]).track(closure_135_9.HEADLESS_TASK_COMPLETED, obj28, { flush: true });
                c9 = 6;
                const items4 = [closure_136_7, ];
                const obj52 = closure_135_1(closure_135_3[11]);
                items4[1] = closure_135_0(closure_135_3[14]).timeoutPromise(1500);
                c11 = 13;
                c12 = 1;
                const obj29 = { value: Promise.race(items4), done: false };
                return obj29;
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
            obj30 = { value, done: true };
            return obj30;
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
            obj = { value, done: true };
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
              const obj31 = { value, done: true };
              return obj31;
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
const NativeAppStartup = fn(17228);
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