// discord_app/modules/user_profile/hooks/useUserProfileWidgets.tsx
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";
import WidgetStore from "../WidgetStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserProfileWidgets(arg0) {
      _require = arg0;
      const cResult = require("c").c(10);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return null != closure_0 && AuthenticationStore.getId() === closure_0;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [WidgetStore];
        const fn2 = function v() {
          return pendingWidgets.getPendingWidgets();
        };
        cResult[4] = items2;
        cResult[5] = fn2;
        let tmp10 = fn2;
        let tmp9 = items2;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [UserProfileStore];
        cResult[6] = items3;
        let tmp13 = items3;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] !== arg0) {
        class F {
          constructor() {
            if (null == closure_0) {
              return [];
            } else {
              tmp2 = closure_3;
              userProfile = closure_3.getUserProfile(tmp);
              widgets = undefined;
              if (userProfile != null) {
                widgets = userProfile.widgets;
              }
              if (widgets == null) {
                widgets = [];
              }
              return widgets;
            }
          }
        }
        const items4 = [arg0];
        cResult[7] = arg0;
        cResult[8] = F;
        cResult[9] = items4;
        let tmp16 = items4;
      } else {
        class F {
          constructor() {
            if (null == closure_0) {
              return [];
            } else {
              tmp2 = closure_3;
              userProfile = closure_3.getUserProfile(tmp);
              widgets = undefined;
              if (userProfile != null) {
                widgets = userProfile.widgets;
              }
              if (widgets == null) {
                widgets = [];
              }
              return widgets;
            }
          }
        }
        tmp16 = cResult[9];
      }
      const tmpResult3 = require("initialize");
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp13, F, tmp16);
      let tmp18 = stateFromStoresArray;
      if (stateFromStores) {
        class F {
          constructor() {
            if (null == closure_0) {
              return [];
            } else {
              tmp2 = closure_3;
              userProfile = closure_3.getUserProfile(tmp);
              widgets = undefined;
              if (userProfile != null) {
                widgets = userProfile.widgets;
              }
              if (widgets == null) {
                widgets = [];
              }
              return widgets;
            }
          }
        }
        tmp18 = stateFromStoresArray;
        if (null !== stateFromStores1) {
          class F {
            constructor() {
              if (null == closure_0) {
                return [];
              } else {
                tmp2 = closure_3;
                userProfile = closure_3.getUserProfile(tmp);
                widgets = undefined;
                if (userProfile != null) {
                  widgets = userProfile.widgets;
                }
                if (widgets == null) {
                  widgets = [];
                }
                return widgets;
              }
            }
          }
        }
      }
      return tmp18;
    }
  : function useUserProfileWidgets(arg0) {
      _require = arg0;
      const items = [AuthenticationStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => null != closure_0 && AuthenticationStore.getId() === closure_0,
        items1,
      );
      const obj = require("initialize");
      const items2 = [WidgetStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items2, () =>
        pendingWidgets.getPendingWidgets(),
      );
      const obj2 = require("initialize");
      const items3 = [UserProfileStore];
      const items4 = [arg0];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items3,
        () => {
          if (null == closure_0) {
            return [];
          } else {
            const userProfile = UserProfileStore.getUserProfile(tmp);
            let widgets;
            if (userProfile != null) {
              widgets = userProfile.widgets;
            }
            if (widgets == null) {
              widgets = [];
            }
            return widgets;
          }
        },
        items4,
      );
      let tmp4 = stateFromStoresArray;
      if (stateFromStores) {
        tmp4 = stateFromStoresArray;
        if (null !== stateFromStores1) {
          tmp4 = stateFromStores1;
        }
      }
      return tmp4;
    };
