// discord_app/modules/application_commands/native/ContextMenuCommandNavigator.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";
import { NavigationStack } from "../../../design/components/Navigator/native/Navigator.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";

let c5;
let closure_6;
let require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: { flex: 1 }, content: null };
createNativeStackNavigator = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createNativeStackNavigator[1] = createNativeStackNavigator;
createNativeStackNavigator = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("jsxProd").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  let Navigator;
  let Screen;
  const tmp = createNativeStackNavigator();
  const require = tmp;
  const layoutEffect = React.useLayoutEffect(() => tmp(6843).trackAppUIViewed(), []);
  let obj = NavigationStack /* NavigationStack */;
  const importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = useSafeAreaInsets();
  obj = { style: items, children: null };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      navigation = navigation.navigation;
      const obj = {
        contentStyle: tmp.content,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[9]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: null
      };
      if (navigation.getState().routes[0].key === navigation.route.key) {
        let renderModalCloseImage = tmp(outer1_2[9]).getRenderModalCloseImage(navigation);
        const obj3 = tmp(outer1_2[9]);
      } else {
        renderModalCloseImage = tmp(outer1_2[9]).getRenderModalBackImage(navigation);
        const obj2 = tmp(outer1_2[9]);
      }
      obj[4] = renderModalCloseImage;
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null
  };
  const obj1 = { name: "root", options: null, getComponent: null };
  let obj2 = { title: null };
  ({ Navigator, Screen } = createNativeStackNavigator);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj2[0] = intl.string(getSystemLocale /* getSystemLocale */.t.PHjkRE);
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return tmp(15812).default;
  };
  const items1 = [
    callback(Screen, obj1),
    callback(createNativeStackNavigator.Screen, {
      name: "app",
      options(route) {
        const section = route.route.params.section;
        let title;
        if (section != null) {
          title = section.name;
        }
        return { title };
      },
      getComponent() {
        return tmp(15814).default;
      }
    })
  ];
  obj[1] = items1;
  obj[1] = callback2(Navigator, obj);
  return callback(View, obj);
};