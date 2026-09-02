// === Module 15526: ? ===

// Module 15526
import _modDef15527 from "module_15527" /* 15527 */;
import { jsx } from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7831 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function RevenueSmokeTestModal() {
  let obj = _require(6016);
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
    }} component={_modDef15527.RunAllFlows} />
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
  }} component={_modDef15527.RunAllFlows} /></Navigator>;
  return jsx(_require(10815).NativePaymentContextProvider, {
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
    }} component={_modDef15527.RunAllFlows} />
  });
});
const result = require("set").fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;