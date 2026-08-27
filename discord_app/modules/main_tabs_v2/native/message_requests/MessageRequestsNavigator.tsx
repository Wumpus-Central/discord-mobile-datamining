// discord_app/modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import getNavigationModalPresentationDefault from "../utils/getNavigationModalPresentation.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/07755_createNativeStackNavigator.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: null, header: null };
createNativeStackNavigator = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createNativeStackNavigator[0] = createNativeStackNavigator;
createCacheKey = { borderBottomWidth: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createNativeStackNavigator[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  const tmp = callback3();
  const _require = tmp;
  let obj = NavigationStack;
  importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = React.useLayoutEffect(() => lib(7153).trackAppUIViewed(), []);
  const rect = useSafeAreaInsetsDefault();
  obj = { style: items, children: null };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerStyle: lib.header,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[9]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: lib(closure_1_2[9]).getRenderModalCloseImage(navigation.navigation)
      };
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null
  };
  obj1 = { name: "root", options: null, getComponent: null };
  const obj2 = { title: null };
  ({ Navigator, Screen } = closure_7);
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj2[0] = intl.string(require("../../../../intl/index.native.tsx").t.e7GWjQ);
  let merged = Object.assign(getNavigationModalPresentationDefault());
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return lib(16366).default;
  };
  const items1 = [callback(Screen, obj1), , ];
  const obj3 = { name: "spam", options: null, getComponent: null };
  const obj4 = { title: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj4[0] = intl2.string(require("../../../../intl/index.native.tsx").t.ulKXHp);
  let merged1 = Object.assign(getNavigationModalPresentationDefault());
  obj3[1] = obj4;
  obj3[2] = function getComponent() {
    return lib(16385).default;
  };
  items1[1] = callback(closure_7.Screen, obj3);
  const obj5 = { name: "preview", options: null, getComponent: null };
  const obj6 = { title: null };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj6[0] = intl3.string(require("../../../../intl/index.native.tsx").t.iilwGH);
  const merged2 = Object.assign(getNavigationModalPresentationDefault());
  obj5[1] = obj6;
  obj5[2] = function getComponent() {
    return lib(16386).default;
  };
  items1[2] = callback(closure_7.Screen, obj5);
  obj[1] = items1;
  obj[1] = callback2(Navigator, obj);
  return callback(View, obj);
};