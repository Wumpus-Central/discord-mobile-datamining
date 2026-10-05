// === Module 7157: AppStartInfo ===

// Module 7157 (AppStartInfo)
import react_nativeDefault from "react-native" /* 4743 */;
import react_nativeDefault2 from "react-native" /* 7158 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c3;

let closure_4 = {};
let obj = {
  getAppUIViewed() {
    const obj = react_nativeDefault2;
    const mainActivityCreationTime = obj.getMainActivityCreationTime();
    let tmp2 = null != mainActivityCreationTime;
    if (tmp2) {
      let flag = closure_4[mainActivityCreationTime];
      if (!flag) {
        tmp3[mainActivityCreationTime] = true;
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  getAppStartInfo() {
    return (async function() {
      let obj6;
      if (c3 === 2) {
        c3 = 3;
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
          let appCreatedTime;
          let closure_1;
          let closure_2;
          let app_start_type;
          let app_launch_scenario;
          let appFirstVisibleTime;
          let obj9;
          let mainActivityCreationTime;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c0 = 0;
              appCreatedTime = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              app_start_type = undefined;
              app_launch_scenario = undefined;
              appFirstVisibleTime = undefined;
              obj9 = undefined;
              mainActivityCreationTime = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: obj6.getAppStartedTimestamp(), done: false };
              obj6 = react_nativeDefault;
              return obj4;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              appCreatedTime = value;
              if (appCreatedTime <= 0) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!");
                throw error;
              } else {
                const items = [, , ];
                const obj12 = closure_129_0(closure_129_1[3]);
                items[0] = obj12.getAppStartType();
                const obj13 = closure_129_0(closure_129_1[3]);
                items[1] = obj13.getLaunchScenario();
                const obj14 = closure_129_0(closure_129_1[3]);
                items[2] = obj14.getAppFirstVisibleTimestamp();
                c2 = 2;
                c3 = 1;
                const obj7 = { value: all(items), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_1 = value;
            closure_2 = closure_129_2(closure_1, 3);
            app_start_type = closure_2[0];
            app_launch_scenario = closure_2[1];
            appFirstVisibleTime = closure_2[2];
            obj9 = { app_start_type, app_launch_scenario };
            const obj11 = closure_129_0(closure_129_1[2]);
            mainActivityCreationTime = obj11.getMainActivityCreationTime();
            if (null != mainActivityCreationTime) {
              obj9.android_time_creation_to_create_main_activity = mainActivityCreationTime - appCreatedTime;
            }
            const obj = { appCreatedTime, appFirstVisibleTime, extraProperties: obj9 };
            c3 = 3;
            const obj10 = { value: obj, done: true };
            return obj10;
          }
        } catch (tmp17) {
          c3 = 3;
          throw tmp17;
        }
      }
    })();
  }
};
const result = size.fileFinishedImporting("modules/tti_analytics/native/AppStartInfo.android.tsx");

export const AppStartInfo = obj;