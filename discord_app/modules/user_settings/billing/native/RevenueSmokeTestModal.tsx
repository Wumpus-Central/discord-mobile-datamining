// discord_app/modules/user_settings/billing/native/RevenueSmokeTestModal.tsx
import _modDef15232 from "../../../billing/native/smoke/BillingFlows.android.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/07769_createNativeStackNavigator.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function RevenueSmokeTestModal() {
  let obj = NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: callback(closure_1_2[5]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(closure_1_1(closure_1_2[6])());
      return obj;
    },
    children: <Screen name="RunAllFlows" options={function options() {
      return { title: "Run All Payment Flows" };
    }} component={_modDef15232.RunAllFlows} />
  };
  ({ Navigator, Screen } = closure_4);
  obj[2] = <Navigator screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.create(null));
        const merged1 = Object.assign(merged);
        return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: callback(closure_1_2[5]).getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(callback);
    let merged1 = Object.assign(closure_1_1(closure_1_2[6])());
    return obj;
  }}><Screen name="RunAllFlows" options={function options() {
    return { title: "Run All Payment Flows" };
  }} component={_modDef15232.RunAllFlows} /></Navigator>;
  return jsx(require("../../../payments/native/NativePaymentContext.tsx").NativePaymentContextProvider, {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: callback(closure_1_2[5]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(closure_1_1(closure_1_2[6])());
      return obj;
    },
    children: <Screen name="RunAllFlows" options={function options() {
      return { title: "Run All Payment Flows" };
    }} component={_modDef15232.RunAllFlows} />
  });
});
const result = require("set").fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;