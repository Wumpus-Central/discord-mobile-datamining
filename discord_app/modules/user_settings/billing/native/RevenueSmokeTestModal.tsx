// discord_app/modules/user_settings/billing/native/RevenueSmokeTestModal.tsx
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import BillingFlowsDefault from "../../../billing/native/smoke/BillingFlows.android.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["children"];
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7556);
let closure_6 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = accessibilityNativeStackOptions(576).c(6);
        let obj = accessibilityNativeStackOptions(576);
        const tmp = accessibilityNativeStackOptions;
        accessibilityNativeStackOptions = accessibilityNativeStackOptions(6496).useAccessibilityNativeStackOptions();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== accessibilityNativeStackOptions) {
          const fn = function s(navigation) {
            const obj = {
              headerTitle(children) {
                const merged = Object.assign(closure_1_4(children, closure_1_3));
                return closure_1_5(accessibilityNativeStackOptions(closure_1_2[7]).GenericHeaderTitle, {
                  title: children.children,
                });
              },
              headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
              headerTitleAlign: "center",
            };
            let merged = Object.assign(accessibilityNativeStackOptions);
            const merged1 = Object.assign(getNavigationModalPresentationDefault());
            return obj;
          };
          cResult[1] = accessibilityNativeStackOptions;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            name: "RunAllFlows",
            options() {
              return { title: "Run All Payment Flows" };
            },
            component: BillingFlowsDefault.RunAllFlows,
          };
          const tmp11 = (
            <closure_6.Screen
              name="RunAllFlows"
              options={function options() {
                return { title: "Run All Payment Flows" };
              }}
              component={BillingFlowsDefault.RunAllFlows}
            />
          );
          cResult[3] = tmp11;
          let tmp7 = tmp11;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp6) {
          const obj4 = { skuIDs: first, activeSubscription: null, children: null };
          const obj5 = { screenOptions: tmp6, children: tmp7 };
          obj4.children = <closure_6.Navigator screenOptions={tmp6}>{tmp7}</closure_6.Navigator>;
          const tmp15 = jsx(tmp(10551).NativePaymentContextProvider, {
            skuIDs: first,
            activeSubscription: null,
            children: null,
          });
          cResult[4] = tmp6;
          cResult[5] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[5];
        }
        return tmp12;
      }
    : () => {
        _require = require("Navigator").useAccessibilityNativeStackOptions();
        const obj2 = { skuIDs: [], activeSubscription: null, children: null };
        const obj3 = {
          screenOptions(navigation) {
            const obj = {
              headerTitle(children) {
                const merged = Object.assign(children, Object.assign({ children: 0 }));
                const merged1 = Object.assign(merged);
                return closure_1_5(closure_1_0(closure_1_2[7]).GenericHeaderTitle, { title: children.children });
              },
              headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
              headerTitleAlign: "center",
            };
            let merged = Object.assign(closure_0);
            let merged1 = Object.assign(getNavigationModalPresentationDefault());
            return obj;
          },
          children: null,
        };
        let obj = require("Navigator");
        ({ Navigator, Screen } = closure_6);
        obj3.children = (
          <Screen
            name="RunAllFlows"
            options={function options() {
              return { title: "Run All Payment Flows" };
            }}
            component={BillingFlowsDefault.RunAllFlows}
          />
        );
        obj2.children = (
          <Navigator
            screenOptions={function screenOptions(navigation) {
              const obj = {
                headerTitle(children) {
                  const merged = Object.assign(children, Object.assign({ children: 0 }));
                  const merged1 = Object.assign(merged);
                  return closure_1_5(closure_1_0(closure_1_2[7]).GenericHeaderTitle, { title: children.children });
                },
                headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
                headerTitleAlign: "center",
              };
              let merged = Object.assign(closure_0);
              let merged1 = Object.assign(getNavigationModalPresentationDefault());
              return obj;
            }}
          >
            {null}
          </Navigator>
        );
        return jsx(require("NativePaymentContext").NativePaymentContextProvider, {
          skuIDs: [],
          activeSubscription: null,
          children: null,
        });
      },
);
