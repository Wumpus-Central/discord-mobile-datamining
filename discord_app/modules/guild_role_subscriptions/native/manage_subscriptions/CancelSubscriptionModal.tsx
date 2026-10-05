// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, obj1, obj6, obj7, onClose;

let closure_3 = ["onClose"];
const View = react_native.View;
const jsx = Fragment.jsx;
const constants = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      let bottom;
      let closure_0;
      let initialStack;
      let params;
      let screens;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(10);
      if (cResult[0] !== onClose) {
        onClose = onClose.onClose;
        _require = onClose;
        const tmp8 = _objectWithoutProperties(onClose, closure_3);
        importDefault = tmp8;
        cResult[0] = onClose;
        cResult[1] = onClose;
        cResult[2] = tmp8;
        class N {
          constructor() {
            obj = { screens: null, initialStack: null };
            obj1 = {};
            obj6 = {
              render() {
                /* body not rendered: F146059 */
              },
              title: "Subscriptions",
              headerLeft: null,
            };
            CANCEL_SUBSCRIPTION = closure_7.CANCEL_SUBSCRIPTION;
            obj4 = closure_0(closure_2[8]);
            obj6.headerLeft = obj4.getHeaderCloseButton(closure_0);
            obj1[CANCEL_SUBSCRIPTION] = obj6;
            obj.screens = obj1;
            obj7 = { name: closure_7.CANCEL_SUBSCRIPTION, params: closure_1 };
            items = [];
            items[0] = obj7;
            obj.initialStack = items;
            return obj;
          }
        }
      } else {
        _require = cResult[1];
        importDefault = cResult[2];
      }
      bottom = require("useSafeAreaInsets")().bottom;
      if (cResult[3] === bottom) {
        if (cResult[4] === tmp4) {
          let tmp10;
          if (cResult[5] === tmp5) {
            tmp10 = cResult[6];
          }
          ({ screens, initialStack } = require("useInitialValue")(tmp10));
          require("useInitialValue")(tmp10);
          if (cResult[7] === initialStack) {
            let tmp12;
            if (cResult[8] === screens) {
              tmp12 = cResult[9];
            }
            return tmp12;
          }
          const tmp14 = jsx(tmp(bottom[10]).Navigator, { screens, initialRouteStack: initialStack });
          cResult[7] = initialStack;
          class N {
            constructor() {
              obj = { screens: null, initialStack: null };
              obj1 = {};
              obj6 = {
                render() {
                  /* body not rendered: F146059 */
                },
                title: "Subscriptions",
                headerLeft: null,
              };
              CANCEL_SUBSCRIPTION = closure_7.CANCEL_SUBSCRIPTION;
              obj4 = closure_0(closure_2[8]);
              obj6.headerLeft = obj4.getHeaderCloseButton(closure_0);
              obj1[CANCEL_SUBSCRIPTION] = obj6;
              obj.screens = obj1;
              obj7 = { name: closure_7.CANCEL_SUBSCRIPTION, params: closure_1 };
              items = [];
              items[0] = obj7;
              obj.initialStack = items;
              return obj;
            }
          }
          cResult[8] = screens;
          cResult[9] = tmp14;
          tmp12 = tmp14;
        }
      }
      class N {
        constructor() {
          obj = { screens: null, initialStack: null };
          obj1 = {};
          obj6 = {
            render() {
              /* body not rendered: F146059 */
            },
            title: "Subscriptions",
            headerLeft: null,
          };
          CANCEL_SUBSCRIPTION = closure_7.CANCEL_SUBSCRIPTION;
          obj4 = closure_0(closure_2[8]);
          obj6.headerLeft = obj4.getHeaderCloseButton(closure_0);
          obj1[CANCEL_SUBSCRIPTION] = obj6;
          obj.screens = obj1;
          obj7 = { name: closure_7.CANCEL_SUBSCRIPTION, params: closure_1 };
          items = [];
          items[0] = obj7;
          obj.initialStack = items;
          return obj;
        }
      }
      cResult[3] = bottom;
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = N;
      tmp10 = N;
    }
  : (onClose) => {
      let initialStack;
      let params;
      let screens;
      onClose = onClose.onClose;
      importDefault = Object.assign(onClose, Object.assign({ onClose: 0 }));
      let bottom;
      bottom = require("useSafeAreaInsets")().bottom;
      const tmp = require("useInitialValue")(() => {
        let items;
        let obj2;
        let obj4;
        let paddingBottom;
        const obj = { screens: obj2, initialStack: items };
        obj2 = {};
        const obj3 = {
          render(arg0) {
            const obj2 = { paddingBottom, flex: 1 };
            params(bottom[7]);
            const merged = Object.assign(arg0);
            return <View style={obj2}>{null}</View>;
          },
          title: "Subscriptions",
          headerLeft: obj4.getHeaderCloseButton(onClose),
        };
        const CANCEL_SUBSCRIPTION = constants.CANCEL_SUBSCRIPTION;
        obj2[CANCEL_SUBSCRIPTION] = obj3;
        items = [];
        const obj5 = { name: constants.CANCEL_SUBSCRIPTION, params };
        items[0] = obj5;
        obj4 = NavigatorHeader;
        return obj;
      });
      ({ screens, initialStack } = tmp);
      return jsx(onClose(bottom[10]).Navigator, { screens, initialRouteStack });
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx",
);

export default tmp3;
