// discord_app/modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj = { loadingActivity: null, disabledActivity: null };
let size = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.loadingActivity = size;
const size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.disabledActivity = size1;
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityItemEmptyCard(activity) {
      const cResult = require("c").c(23);
      activity = activity.activity;
      _require = activity;
      const application = activity.application;
      const tmp4 = closure_8();
      const context = noop.useContext(application(channelId[8]));
      channelId = context.channelId;
      const layoutManager = context.layoutManager;
      if (cResult[0] !== layoutManager) {
        const targetDimensions = layoutManager.getTargetDimensions(undefined);
        cResult[0] = layoutManager;
        cResult[1] = targetDimensions;
        let tmp7 = targetDimensions;
      } else {
        tmp7 = cResult[1];
      }
      ({ width, height } = tmp7);
      const analyticsLocations = tmp5(tmp2[9])().analyticsLocations;
      if (cResult[2] === activity.launchId) {
        if (cResult[3] === analyticsLocations) {
          if (cResult[4] === application) {
            if (cResult[5] === channelId) {
              let tmp9 = cResult[6];
            }
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const items = ["embedded_background"];
              cResult[7] = items;
              let tmp11 = items;
            } else {
              tmp11 = cResult[7];
            }
            if (cResult[8] === activity.applicationId) {
              if (cResult[9] === width) {
                let tmp12 = cResult[10];
              }
              const tmp13 = tmp5(tmp2[11])(tmp12);
              const result = width / height;
              if (cResult[11] === tmp13) {
                if (cResult[12] === result) {
                  let tmp15 = cResult[13];
                }
                if (cResult[14] === application.id) {
                  if (cResult[15] === application.name) {
                    if (cResult[16] === channelId) {
                      let tmp18 = cResult[17];
                    }
                    if (cResult[18] === tmp9) {
                      if (cResult[19] === tmp4.disabledActivity) {
                        if (cResult[20] === tmp15) {
                          if (cResult[21] === tmp18) {
                            let tmp21 = cResult[22];
                          }
                          return tmp21;
                        }
                      }
                    }
                    let obj2 = { activeOpacity: 0.7, onPress: tmp9, style: tmp4.disabledActivity, children: null };
                    const items1 = [tmp15, tmp18];
                    obj2.children = items1;
                    const tmp23 = closure_7(tmp(tmp2[14]).PressableOpacity, obj2);
                    cResult[18] = tmp9;
                    cResult[19] = tmp4.disabledActivity;
                    cResult[20] = tmp15;
                    cResult[21] = tmp18;
                    cResult[22] = tmp23;
                    tmp21 = tmp23;
                  }
                }
                let obj3 = { channelId, applicationId: null, applicationName: null };
                ({ id: obj4.applicationId, name: obj4.applicationName } = application);
                const tmp20 = closure_6(tmp5(tmp2[13]), obj3);
                cResult[14] = application.id;
                cResult[15] = application.name;
                cResult[16] = channelId;
                cResult[17] = tmp20;
                tmp18 = tmp20;
              }
              const obj5 = { imageBackground: tmp13, aspectRatio: result };
              const tmp17 = closure_6(tmp5(tmp2[12]), obj5);
              cResult[11] = tmp13;
              cResult[12] = result;
              cResult[13] = tmp17;
              tmp15 = tmp17;
            }
            const obj9 = { applicationId: activity.applicationId, size: width, names: tmp11 };
            cResult[8] = activity.applicationId;
            cResult[9] = width;
            cResult[10] = obj9;
            tmp12 = obj9;
          }
        }
      }
      _require = analyticsLocations(function* () {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            v3 = 2;
            if (0 === inputApplication) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const obj4 = {
                  channelId,
                  applicationId: inputApplication.id,
                  launchId: v3.launchId,
                  inputApplication,
                  analyticsLocations,
                };
                inputApplication = 1;
                v3 = 1;
                const obj6 = { value: v3(channelId[10]).maybeJoinEmbeddedActivity(obj4), done: false };
                return obj6;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v3 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp5) {
            v3 = tmp;
            throw tmp5;
          }
        }
      });
      function t2() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[2] = activity.launchId;
      cResult[3] = analyticsLocations;
      cResult[4] = application;
      cResult[5] = channelId;
      cResult[6] = t2;
      tmp9 = t2;
      let obj = require("c");
      tmp = _require;
    }
  : function ActivityItemEmptyCard(activity) {
      activity = activity.activity;
      const application = activity.application;
      let channelId;
      const context = noop.useContext(application(channelId[8]));
      channelId = context.channelId;
      const layoutManager = context.layoutManager;
      const targetDimensions = layoutManager.getTargetDimensions(undefined);
      ({ width, height } = targetDimensions);
      const analyticsLocations = application(channelId[9])().analyticsLocations;
      const items = [activity.launchId, analyticsLocations, application, channelId];
      const callback = noop.useCallback(
        analyticsLocations(function* () {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
              v3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj4 = {
                    channelId,
                    applicationId: application.id,
                    launchId: activity.launchId,
                    inputApplication: application,
                    analyticsLocations,
                  };
                  c1 = 1;
                  v3 = 1;
                  const obj6 = { value: v3(closure_1_2[10]).maybeJoinEmbeddedActivity(obj4), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                v3 = 3;
                return { value: "IconComponent", done: "+51" };
              }
            } catch (tmp5) {
              v3 = tmp;
              throw tmp5;
            }
          }
        }),
        items,
      );
      let obj = { applicationId: activity.applicationId, size: width, names: ["embedded_background"] };
      const tmp = closure_8();
      let obj2 = { activeOpacity: 0.7, onPress: callback, style: tmp.disabledActivity, children: null };
      const tmp5 = application(channelId[11])({
        applicationId: activity.applicationId,
        size: width,
        names: ["embedded_background"],
      });
      const items1 = [
        closure_6(application(channelId[12]), {
          imageBackground: application(channelId[11])({
            applicationId: activity.applicationId,
            size: width,
            names: ["embedded_background"],
          }),
          aspectRatio: width / height,
        }),
        closure_6(application(channelId[13]), {
          channelId,
          applicationId: application.id,
          applicationName: application.name,
        }),
      ];
      obj2.children = items1;
      return closure_7(activity(channelId[14]).PressableOpacity, obj2);
    };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ActivityItemMissingCard(arg0) {
        let obj = dependencyMap;
        const cResult = c.c(4);
        ({ activity, application } = arg0);
        const tmp2 = closure_8();
        if (cResult[0] === activity) {
          if (cResult[1] === application) {
            if (cResult[2] === tmp2) {
              return cResult[3];
            }
          }
        }
        if (null != activity) {
          if (null != application) {
            const obj3 = { activity, application };
            let tmp5 = timestampProducer(closure_9, obj3);
          }
          cResult[0] = activity;
          cResult[1] = application;
          cResult[2] = tmp2;
          cResult[3] = tmp5;
        }
        obj = { style: tmp2.loadingActivity, children: timestampProducer(ActivityIndicator, { size: "large" }) };
        tmp5 = timestampProducer(NativeViewDefault, obj);
      }
    : function ActivityItemMissingCard(arg0) {
        ({ activity, application } = arg0);
        if (null != activity) {
          if (null != application) {
            const obj = { activity, application };
            let tmp4 = timestampProducer(closure_9, obj);
          }
          return tmp4;
        }
        const obj2 = { style: closure_8().loadingActivity, children: null };
        const tmp = closure_8();
        obj2.children = timestampProducer(ActivityIndicator, { size: "large" });
        tmp4 = timestampProducer(NativeViewDefault, obj2);
      },
);
