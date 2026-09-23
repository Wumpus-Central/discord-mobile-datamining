// discord_app/modules/application_commands/native/ContextMenuCommandNavigator.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(8243);
const Screen = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4827);
let obj3 = { container: { flex: 1 }, content: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default function ContextMenuCommandNavigator() {
  const tmp = closure_8();
  _require = tmp;
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7803).trackAppUIViewed(), []);
  importDefault = require("Navigator").useAccessibilityNativeStackOptions();
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: null, children: null };
  const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj2.style = items;
  let obj3 = {
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
        headerLeft: null,
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
    children: null,
  };
  const obj4 = { name: "root", options: null, getComponent: null };
  const obj5 = { title: null };
  ({ Navigator, Screen } = Screen);
  const intl = require("util").intl;
  obj5.title = intl.string(require("util").t.PHjkRE);
  obj4.options = obj5;
  obj4.getComponent = function getComponent() {
    return closure_0(17418).default;
  };
  const items1 = [
    closure_5(Screen, obj4),
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
        return closure_0(17420).default;
      },
    }),
  ];
  obj3.children = items1;
  obj2.children = closure_6(Navigator, obj3);
  return closure_5(View, obj2);
}
