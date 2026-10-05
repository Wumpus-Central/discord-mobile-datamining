// === Module 18121: executeHeadlessTask ===

// Module 18121 (executeHeadlessTask)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import fast_connect from "fast_connect" /* 15 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7253 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13477 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NativeAppStartup from "NativeAppStartup" /* 17415 */;
import size from "module_2" /* 2 */;

let closure_10, closure_7, closure_8, duration_ms, value2;

let metroImportAll;
let metroImportDefault;
let obj = function _executeHeadlessTask() {
  obj = _asyncToGenerator(async (name, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
    return (async function(arg0, value, arg2) {
      let obj13;
      let obj17;
      let obj25;
      let obj31;
      let obj47;
      let obj51;
      let obj6;
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_4;
          let success;
          c12 = 2;
          switch (c11) {
            case 0:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                closure_8 = tmp4;
                duration_ms = undefined;
                closure_7 = undefined;
                const _HermesInternal6 = HermesInternal;
                const self = this;
                const self2 = this;
                const tmp248 = LoggerDefault;
                const tmp2482 = new tmp248("Task " + name);
                value = tmp2482;
                const _Date6 = Date;
                closure_4 = Date.now();
                const obj4 = { message: "Executing headless task.", data: obj6 };
                obj6 = { name };
                const obj60 = SentryUtilsDefault;
                obj60.addBreadcrumb(obj4);
                const obj63 = RequestGatewaySocketAll;
                const result = obj63.recordStartHeadlessTask();
                const obj64 = fast_connect;
                const result1 = obj64.closeFastConnectSocket();
                success = false;
                c9 = 1;
                if (!TTITrackerDefault.wasEverActive) {
                  TTITrackerDefault.extraProperties.headless_task_ran = true;
                }
                if ("active" !== AppState.currentState) {
                  tmp2482.log("Pausing socket in headless task because app state is not active");
                  const obj45 = PauseGatewaySocketAll;
                  obj45.setIsPaused(true);
                }
                const obj7 = { client_app_state: AppState.currentState, name };
                const obj46 = AnalyticsUtilsDefault;
                obj46.track(constants.HEADLESS_TASK_INVOKED, obj7);
                c11 = 3;
                c12 = 1;
                const obj10 = { value: closure_2_7(), done: false };
                return obj10;
              }
              break;
            }
            case 1:
            {
              const _Date4 = Date;
              duration_ms = Date.now() - closure_4;
              const obj12 = { message: "Finished headless task.", data: obj13 };
              obj13 = { name, success, duration: duration_ms + "ms" };
              const obj37 = closure_135_1(closure_135_3[6]);
              obj37.addBreadcrumb(obj12);
              value.log("Unpausing socket");
              const obj40 = closure_135_2(closure_135_3[10]);
              obj40.setIsPaused(false);
              const _HermesInternal4 = HermesInternal;
              const tmp167 = closure_135_1(closure_135_3[13]);
              tmp167("headless_task:" + name);
              const obj14 = { client_app_state: closure_135_5.currentState, name, success, duration_ms };
              const obj41 = closure_135_1(closure_135_3[11]);
              closure_7 = obj41.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj14, { flush: true });
              c9 = 2;
              const items = [closure_7, ];
              const race4 = Promise.race;
              const obj43 = closure_135_0(closure_135_3[14]);
              items[1] = obj43.timeoutPromise(1500);
              c11 = 14;
              c12 = 1;
              const obj15 = { value: race4(items), done: false };
              return obj15;
            }
            case 2:
            {
              c9 = 0;
              closure_8 = closure_10;
              value.warn("Failed to submit analytics", closure_8);
              throw duration_ms;
            }
            case 3:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                const _Date3 = Date;
                duration_ms = Date.now() - closure_4;
                const obj16 = { message: "Finished headless task.", data: obj17 };
                obj17 = { name, success, duration: duration_ms + "ms" };
                const obj29 = closure_135_1(closure_135_3[6]);
                obj29.addBreadcrumb(obj16);
                value.log("Unpausing socket");
                const obj32 = closure_135_2(closure_135_3[10]);
                obj32.setIsPaused(false);
                const _HermesInternal3 = HermesInternal;
                const tmp128 = closure_135_1(closure_135_3[13]);
                tmp128("headless_task:" + name);
                const obj18 = { client_app_state: closure_135_5.currentState, name, success, duration_ms };
                const obj33 = closure_135_1(closure_135_3[11]);
                closure_7 = obj33.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj18, { flush: true });
                c9 = 3;
                const items1 = [closure_7, ];
                const race3 = Promise.race;
                const obj35 = closure_135_0(closure_135_3[14]);
                items1[1] = obj35.timeoutPromise(1500);
                c11 = 6;
                c12 = 1;
                const obj19 = { value: race3(items1), done: false };
                return obj19;
              } else {
                value.log("initHeadlessTask completed");
                c11 = 4;
                c12 = 1;
                return { value: closure_135_8.promise, done: false };
              }
              break;
            }
            case 4:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else {
                value2 = value;
                if (arg0 === 2) {
                  const _Date2 = Date;
                  duration_ms = Date.now() - closure_4;
                  const obj22 = { message: "Finished headless task.", data: obj25 };
                  obj25 = { name, success, duration: duration_ms + "ms" };
                  const obj20 = closure_135_1(closure_135_3[6]);
                  obj20.addBreadcrumb(obj22);
                  value.log("Unpausing socket");
                  const obj23 = closure_135_2(closure_135_3[10]);
                  obj23.setIsPaused(false);
                  const _HermesInternal2 = HermesInternal;
                  const tmp92 = closure_135_1(closure_135_3[13]);
                  tmp92("headless_task:" + name);
                  const obj27 = { client_app_state: closure_135_5.currentState, name, success, duration_ms };
                  const obj24 = closure_135_1(closure_135_3[11]);
                  closure_7 = obj24.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj27, { flush: true });
                  c9 = 4;
                  const items2 = [closure_7, ];
                  const race2 = Promise.race;
                  const obj26 = closure_135_0(closure_135_3[14]);
                  items2[1] = obj26.timeoutPromise(1500);
                  c11 = 8;
                  c12 = 1;
                  const obj28 = { value: race2(items2), done: false };
                  return obj28;
                } else {
                  value.log("Flux Initialized");
                  if (closure_135_6.isAuthenticated()) {
                    const obj30 = { analyticsToken: closure_135_6.getAnalyticsToken(), user: obj31 };
                    const handleConnectionOpen = closure_135_0(closure_135_3[12]).AnalyticsActionHandlers.handleConnectionOpen;
                    closure_135_0(closure_135_3[12]).AnalyticsActionHandlers;
                    obj31 = { id: closure_135_6.getId() };
                    handleConnectionOpen(obj30);
                    value.log("Analytics Initialized");
                  } else {
                    value.log("Analytics Init skipped; not authenticated");
                  }
                  c11 = 9;
                  c12 = 1;
                  const obj34 = { value: closure_1()(closure_2), done: false };
                  return obj34;
                }
              }
              break;
            }
            case 5:
            {
              c9 = 0;
              closure_8 = closure_10;
              value.warn("Failed to submit analytics", closure_8);
              c12 = 3;
              return { value, done: true };
            }
            case 6:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c12 = 3;
                return { value, done: true };
              } else {
                c9 = 0;
              }
              break;
            }
            case 7:
            {
              c9 = 0;
              closure_8 = closure_10;
              value.warn("Failed to submit analytics", closure_8);
              c12 = 3;
              return { value: value2, done: true };
            }
            case 8:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c12 = 3;
                return { value, done: true };
              } else {
                c9 = 0;
              }
              break;
            }
            case 9:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                const _Date = Date;
                duration_ms = Date.now() - closure_4;
                const obj44 = { message: "Finished headless task.", data: obj47 };
                obj47 = { name, success, duration: duration_ms + "ms" };
                const obj5 = closure_135_1(closure_135_3[6]);
                obj5.addBreadcrumb(obj44);
                value.log("Unpausing socket");
                const obj8 = closure_135_2(closure_135_3[10]);
                obj8.setIsPaused(false);
                const _HermesInternal = HermesInternal;
                const tmp34 = closure_135_1(closure_135_3[13]);
                tmp34("headless_task:" + name);
                const obj48 = { client_app_state: closure_135_5.currentState, name, success, duration_ms };
                const obj9 = closure_135_1(closure_135_3[11]);
                closure_7 = obj9.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj48, { flush: true });
                c9 = 5;
                const items3 = [closure_7, ];
                const obj11 = closure_135_0(closure_135_3[14]);
                items3[1] = obj11.timeoutPromise(1500);
                c11 = 11;
                c12 = 1;
                const obj49 = { value: race(items3), done: false };
                return obj49;
              } else {
                success = true;
                value.log("Task completed successfully");
                const _Date5 = Date;
                duration_ms = Date.now() - closure_4;
                const obj50 = { message: "Finished headless task.", data: obj51 };
                obj51 = { name, success, duration: duration_ms + "ms" };
                const obj52 = closure_135_1(closure_135_3[6]);
                obj52.addBreadcrumb(obj50);
                value.log("Unpausing socket");
                const obj55 = closure_135_2(closure_135_3[10]);
                obj55.setIsPaused(false);
                const _HermesInternal5 = HermesInternal;
                const tmp222 = closure_135_1(closure_135_3[13]);
                tmp222("headless_task:" + name);
                const obj53 = { client_app_state: closure_135_5.currentState, name, success, duration_ms };
                const obj56 = closure_135_1(closure_135_3[11]);
                closure_7 = obj56.track(closure_135_9.HEADLESS_TASK_COMPLETED, obj53, { flush: true });
                c9 = 6;
                const items4 = [closure_7, ];
                const race5 = Promise.race;
                const obj58 = closure_135_0(closure_135_3[14]);
                items4[1] = obj58.timeoutPromise(1500);
                c11 = 13;
                c12 = 1;
                const obj54 = { value: race5(items4), done: false };
                return obj54;
              }
              break;
            }
            case 10:
            {
              c9 = 0;
              closure_8 = closure_10;
              value.warn("Failed to submit analytics", closure_8);
              c12 = 3;
              return { value, done: true };
            }
            case 11:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c12 = 3;
                return { value, done: true };
              } else {
                c9 = 0;
              }
              break;
            }
            case 12:
            {
              c9 = 0;
              closure_8 = closure_10;
              value.warn("Failed to submit analytics", closure_8);
              c12 = 3;
              return { value: "IconComponent", done: null };
            }
            case 13:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c12 = 3;
                return { value, done: true };
              } else {
                c9 = 0;
              }
              break;
            }
            default:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c12 = 3;
                return { value, done: true };
              } else {
                c9 = 0;
              }
              break;
            }
          }
        } catch (tmp196) {
          closure_10 = tmp196;
          if (0 === c9) {
            c12 = 3;
            throw tmp196;
          } else if (1 === c9) {
            c11 = 1;
          } else if (2 === c9) {
            c11 = 2;
          } else if (3 === c9) {
            c11 = 5;
          } else if (4 === c9) {
            c11 = 7;
          } else if (5 === c9) {
            c11 = 10;
          } else {
            c11 = 12;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const AppState = react_native.AppState;
({ initHeadlessTask: metroImportDefault, applicationReady: metroImportAll } = NativeAppStartup);
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/app_startup/native/executeHeadlessTask.tsx");

export default function executeHeadlessTask() {
  return obj(...arguments);
};