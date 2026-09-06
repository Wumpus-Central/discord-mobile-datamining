// === Module 16867: ContextMenuCommandNavigator ===

// Module 16867 (ContextMenuCommandNavigator)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let NativeStackNavigator = fn(7913);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4560);
NativeStackNavigator = { container: { flex: 1 }, content: null };
NativeStackNavigator = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
NativeStackNavigator.content = NativeStackNavigator;
let closure_8 = createStyles.createStyles(NativeStackNavigator);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  const tmp = closure_8();
  _require = tmp;
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7475).trackAppUIViewed(), []);
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = useSafeAreaInsetsDefault();
  obj = { style: null, children: null };
  const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj.style = items;
  obj = {
    screenOptions(navigation) {
      navigation = navigation.navigation;
      const obj = {
        contentStyle: closure_0.content,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_5(closure_1_0(dependencyMap[9]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
        headerLeft: null
      };
      if (navigation.getState().routes[0].key === navigation.route.key) {
        let renderModalCloseImage = HeaderShared.getRenderModalCloseImage(navigation);
      } else {
        renderModalCloseImage = HeaderShared.getRenderModalBackImage(navigation);
      }
      obj.headerLeft = renderModalCloseImage;
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: null
  };
  const obj1 = { name: "root", options: null, getComponent: null };
  let obj2 = { title: null };
  ({ Navigator, Screen } = Screen);
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.PHjkRE);
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return closure_0(16868).default;
  };
  const items1 = [
    closure_5(Screen, obj1),
    closure_5(Screen.Screen, {
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
        return closure_0(16870).default;
      }
    })
  ];
  obj.children = items1;
  obj.children = closure_6(Navigator, obj);
  return closure_5(View, obj);
};