// discord_app/modules/user_settings/billing/native/RevenueSmokeTestModal.tsx
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import BillingFlowsDefault from "../../../billing/native/smoke/BillingFlows.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(8245);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default noop.memo(function RevenueSmokeTestModal() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = { skuIDs: [], activeSubscription: null, children: null };
  const obj3 = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
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
  ({ Navigator, Screen } = closure_4);
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
            return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
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
});
