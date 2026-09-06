// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let NativeStackNavigator = fn(7913);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4560);
NativeStackNavigator = { header: null };
NativeStackNavigator = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
NativeStackNavigator.header = NativeStackNavigator;
let closure_6 = createStyles.createStyles(NativeStackNavigator);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  _require = closure_6();
  let obj = require("Navigator");
  closure_1 = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      let merged = Object.assign(closure_1);
      return {
        headerStyle: closure_0.header,
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(dependencyMap[6]).GenericHeaderTitle, { title: children.children });
        },
        headerTitleAlign: "center",
      };
    },
    initialRouteName: "default",
    children: null,
  };
  obj = {
    name: "default",
    options(navigation) {
      const obj = { title: null, headerLeft: null };
      const intl = closure_0(1114).intl;
      obj.title = intl.string(closure_0(1114).t.jVshKt);
      obj.headerLeft = closure_0(7863).getRenderModalCloseImage(navigation.navigation);
      const merged = Object.assign(closure_1(10925)());
      return obj;
    },
    getComponent() {
      return closure_0(16456).default;
    },
  };
  const items = [
    closure_3(closure_5.Screen, obj),
    closure_3(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: closure_0(7863).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return closure_0(16457).default;
      },
    }),
  ];
  obj.children = items;
  return closure_4(closure_5.Navigator, obj);
}
