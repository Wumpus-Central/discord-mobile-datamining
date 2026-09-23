// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(8243);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4827);
const obj3 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_6 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default function ICYMICustomScoresModal() {
  _require = closure_6();
  closure_1 = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
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
  const items = [
    closure_3(closure_5.Screen, {
      name: "default",
      options(navigation) {
        const obj = { title: null, headerLeft: null };
        const intl = closure_0(1115).intl;
        obj.title = intl.string(closure_0(1115).t.jVshKt);
        obj.headerLeft = closure_0(8192).getRenderModalCloseImage(navigation.navigation);
        const merged = Object.assign(closure_1(11271)());
        return obj;
      },
      getComponent() {
        return closure_0(16859).default;
      },
    }),
    closure_3(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: closure_0(8192).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return closure_0(16860).default;
      },
    }),
  ];
  obj2.children = items;
  return closure_4(closure_5.Navigator, obj2);
}
