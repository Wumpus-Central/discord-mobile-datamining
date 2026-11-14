// === Module 19734: ContextMenuCommandNavigator ===

// Module 19734 (ContextMenuCommandNavigator)
import nativeDefault from "native" /* 575 */;
import HeaderShared from "HeaderShared" /* 9051 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19622 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const NativeStackNavigator = fn(9128);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5306);
let obj3 = { content: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_7 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  _require = closure_7();
  const layoutEffect = noop.useLayoutEffect(() => closure_0(8678).trackAppUIViewed(), []);
  importDefault = require("Navigator").useAccessibilityNativeStackOptions();
  let obj2 = { children: null };
  let obj3 = {
    screenOptions(navigation) {
      navigation = navigation.navigation;
      const obj = {
        contentStyle: closure_0.content,
        headerShadowVisible: false,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_4(closure_1_0(dependencyMap[8]).GenericHeaderTitle, { title: children.children });
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
  const obj4 = { name: "root", options: null, getComponent: null };
  const obj5 = { title: null };
  let obj = require("Navigator");
  ({ Navigator, Screen } = Screen);
  const intl = require("util").intl;
  obj5.title = intl.string(require("util").t.PHjkRE);
  obj4.options = obj5;
  obj4.getComponent = function getComponent() {
    return closure_0(19735).default;
  };
  items = [
    closure_4(Screen, obj4),
    closure_4(Screen.Screen, {
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
        return closure_0(19737).default;
      }
    })
  ];
  obj3.children = items;
  obj2.children = closure_5(Navigator, obj3);
  return closure_4(AppFrameContainerDefault, obj2);
};