// === Module 19100: ICYMICustomScoresModal ===

// Module 19100 (ICYMICustomScoresModal)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const NativeStackNavigator = fn(9062);
let closure_5 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5243);
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
        headerTitleAlign: "center"
      };
    },
    initialRouteName: "default",
    children: null
  };
  items = [
    closure_3(closure_5.Screen, {
      name: "default",
      options(navigation) {
        const obj = { title: null, headerLeft: null };
        const intl = closure_0(1113).intl;
        obj.title = intl.string(closure_0(1113).t.jVshKt);
        obj.headerLeft = closure_0(8985).getRenderModalCloseImage(navigation.navigation);
        const merged = Object.assign(closure_1(10845)());
        return obj;
      },
      getComponent() {
        return closure_0(19101).default;
      }
    }),
    closure_3(closure_5.Screen, {
      name: "guild",
      options(navigation) {
        const obj = { headerLeft: closure_0(8985).getRenderModalBackImage(navigation.navigation) };
        return obj;
      },
      getComponent() {
        return closure_0(19102).default;
      }
    })
  ];
  obj2.children = items;
  return closure_4(closure_5.Navigator, obj2);
};