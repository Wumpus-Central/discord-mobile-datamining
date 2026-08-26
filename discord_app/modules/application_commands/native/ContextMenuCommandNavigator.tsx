// === Module 16294: ContextMenuCommandNavigator ===

// Module 16294 (ContextMenuCommandNavigator)
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 8785 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = { container: { flex: 1 }, content: null };
createNativeStackNavigator = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createNativeStackNavigator[1] = createNativeStackNavigator;
let closure_8 = createCacheKey.createStyles(createNativeStackNavigator);
const result = require("set").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  const tmp = callback3();
  const _require = tmp;
  const layoutEffect = React.useLayoutEffect(() => lib(7147).trackAppUIViewed(), []);
  let obj = _require(5955);
  importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = useSafeAreaInsetsDefault();
  obj = { style: items, children: null };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      navigation = navigation.navigation;
      const obj = {
        contentStyle: lib.content,
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
        let renderModalCloseImage = lib(closure_1_2[9]).getRenderModalCloseImage(navigation);
        const obj3 = lib(closure_1_2[9]);
      } else {
        renderModalCloseImage = lib(closure_1_2[9]).getRenderModalBackImage(navigation);
        const obj2 = lib(closure_1_2[9]);
      }
      obj[4] = renderModalCloseImage;
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null
  };
  obj1 = { name: "root", options: null, getComponent: null };
  let obj2 = { title: null };
  ({ Navigator, Screen } = Screen);
  const intl = _require(1236).intl;
  obj2[0] = intl.string(_require(1236).t.PHjkRE);
  obj1[1] = obj2;
  obj1[2] = function getComponent() {
    return lib(16295).default;
  };
  const items1 = [
    callback(Screen, obj1),
    callback(Screen.Screen, {
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
        return lib(16297).default;
      }
    })
  ];
  obj[1] = items1;
  obj[1] = callback2(Navigator, obj);
  return callback(View, obj);
};