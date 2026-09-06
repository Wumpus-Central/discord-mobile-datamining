// discord_app/modules/user_settings/billing/native/PaymentFlowTestModal.tsx
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import getNavigationModalPresentationDefault from "../../../main_tabs_v2/native/utils/getNavigationModalPresentation.tsx";
import PaymentFlowTestDefault from "PaymentFlowTest.android.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7913);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default noop.memo(function PaymentFlowTestModal() {
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[4]).GenericHeaderTitle, { title: children.children });
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
  obj = {
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: PaymentFlowTestDefault,
  };
  ({ Navigator, Screen } = closure_4);
  obj.children = (
    <Screen
      name="PaymentFlowTest"
      options={function options() {
        return { title: "Payment Flow Test" };
      }}
      component={PaymentFlowTestDefault}
    />
  );
  return (
    <Navigator
      name="PaymentFlowTest"
      options={function options() {
        return { title: "Payment Flow Test" };
      }}
      component={PaymentFlowTestDefault}
    />
  );
});
