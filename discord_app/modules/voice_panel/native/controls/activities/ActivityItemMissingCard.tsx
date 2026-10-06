// === Module 17315: ActivityItemMissingCard ===

// Module 17315 (ActivityItemMissingCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1;

let metroImportDefault;
let metroRequire;
let size;
let size1;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingActivity: size, disabledActivity: size1 };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  let channelId;
  let height;
  let items1;
  let tmp7;
  let width;
  const tmp2 = channelId;
  let obj = activity(channelId[7]);
  const cResult = obj.c(23);
  const tmp = activity;
  activity = activity.activity;
  const application = activity.application;
  const tmp4 = closure_8();
  const context = react.useContext(application(channelId[8]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  if (cResult[0] !== layoutManager) {
    const targetDimensions = layoutManager.getTargetDimensions(undefined);
    cResult[0] = layoutManager;
    cResult[1] = targetDimensions;
    tmp7 = targetDimensions;
  } else {
    tmp7 = cResult[1];
  }
  ({ width, height } = tmp7);
  const analyticsLocations = tmp5(tmp2[9])().analyticsLocations;
  if (cResult[2] === activity.launchId) {
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === application) {
        let tmp9;
        let tmp11;
        if (cResult[5] === channelId) {
          tmp9 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items = ["embedded_background"];
          cResult[7] = items;
          tmp11 = items;
        } else {
          tmp11 = cResult[7];
        }
        if (cResult[8] === activity.applicationId) {
          let tmp12;
          if (cResult[9] === width) {
            tmp12 = cResult[10];
          }
          const tmp13 = application(tmp2[11])(tmp12);
          const result = width / height;
          if (cResult[11] === tmp13) {
            let tmp15;
            if (cResult[12] === result) {
              tmp15 = cResult[13];
            }
            if (cResult[14] === application.id) {
              if (cResult[15] === application.name) {
                let tmp18;
                if (cResult[16] === channelId) {
                  tmp18 = cResult[17];
                }
                if (cResult[18] === tmp9) {
                  if (cResult[19] === tmp4.disabledActivity) {
                    if (cResult[20] === tmp15) {
                      let tmp21;
                      if (cResult[21] === tmp18) {
                        tmp21 = cResult[22];
                      }
                      return tmp21;
                    }
                  }
                }
                let obj2 = { activeOpacity: 0.7, onPress: tmp9, style: tmp4.disabledActivity, children: items1 };
                items1 = [tmp15, tmp18];
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
            const tmp20 = closure_6(application(tmp2[13]), obj3);
            cResult[14] = application.id;
            cResult[15] = application.name;
            cResult[16] = channelId;
            cResult[17] = tmp20;
            tmp18 = tmp20;
          }
          let obj5 = { imageBackground: tmp13, aspectRatio: result };
          const tmp17 = closure_6(application(tmp2[12]), obj5);
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
  let closure_0 = analyticsLocations(function*() {
    let inputApplication;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            const obj4 = { channelId, applicationId: inputApplication.id, launchId: v3.launchId, inputApplication, analyticsLocations };
            inputApplication = 1;
            const obj5 = v3(channelId[10]);
            v3 = 1;
            const obj6 = { value: obj5.maybeJoinEmbeddedActivity(obj4), done: false };
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        v3 = 3;
        throw tmp4;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[2] = activity.launchId;
  cResult[3] = analyticsLocations;
  cResult[4] = application;
  cResult[5] = channelId;
  cResult[6] = fn;
  tmp9 = fn;
}) : ((activity) => {
  let height;
  let items1;
  let width;
  activity = activity.activity;
  const application = activity.application;
  let channelId;
  const tmp = closure_8();
  const context = react.useContext(application(channelId[8]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  const targetDimensions = layoutManager.getTargetDimensions(undefined);
  ({ width, height } = targetDimensions);
  const analyticsLocations = application(channelId[9])().analyticsLocations;
  const items = [activity.launchId, analyticsLocations, application, channelId];
  const callback = react.useCallback(analyticsLocations(function*() {
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            const obj4 = { channelId, applicationId: application.id, launchId: activity.launchId, inputApplication: application, analyticsLocations };
            c1 = 1;
            const obj5 = v3(channelId[10]);
            v3 = 1;
            const obj6 = { value: obj5.maybeJoinEmbeddedActivity(obj4), done: false };
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        v3 = 3;
        throw tmp4;
      }
    }
  }), items);
  let obj = { applicationId: activity.applicationId, size: width, names: ["embedded_background"] };
  let obj2 = { activeOpacity: 0.7, onPress: callback, style: tmp.disabledActivity, children: items1 };
  const tmp5 = application(channelId[11])(obj);
  const PressableOpacity = activity(channelId[14]).PressableOpacity;
  let obj3 = { imageBackground: tmp5, aspectRatio: width / height };
  items1 = [closure_6(application(channelId[12]), obj3), ];
  let obj4 = { channelId, applicationId: application.id, applicationName: application.name };
  items1[1] = closure_6(application(channelId[13]), obj4);
  return closure_7(PressableOpacity, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activity;
  let application;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(4);
  ({ activity, application } = arg0);
  const tmp3 = closure_8();
  if (cResult[0] === activity) {
    if (cResult[1] === application) {
      if (cResult[2] === tmp3) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  if (null != activity) {
    let tmp7;
    if (null != application) {
      const obj2 = { activity, application };
      tmp7 = metroRequire(closure_9, obj2);
    }
    cResult[0] = activity;
    cResult[1] = application;
    cResult[2] = tmp3;
    cResult[3] = tmp7;
    tmp4 = tmp7;
  }
  const obj3 = { style: tmp3.loadingActivity, children: metroRequire(ActivityIndicator, { size: "large" }) };
  const tmp8 = NativeViewDefault;
  tmp7 = metroRequire(tmp8, obj3);
}) : ((arg0) => {
  let activity;
  let application;
  ({ activity, application } = arg0);
  const tmp = closure_8();
  if (null != activity) {
    let tmp4;
    if (null != application) {
      const obj = { activity, application };
      tmp4 = metroRequire(closure_9, obj);
    }
    return tmp4;
  }
  const obj2 = { style: tmp.loadingActivity, children: metroRequire(ActivityIndicator, { size: "large" }) };
  const tmp5 = NativeViewDefault;
  tmp4 = metroRequire(tmp5, obj2);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityItemMissingCard.tsx");

export default memoResult;