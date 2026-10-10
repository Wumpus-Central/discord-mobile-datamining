// === Module 17574: ContextMenuCommandNavigator ===

// Module 17574 (ContextMenuCommandNavigator)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import HeaderShared from "HeaderShared" /* 9297 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["children"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const NativeStackNavigator = fn(9344);
let closure_9 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5092);
let obj3 = { container: { flex: 1 }, content: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_10 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContextMenuCommandNavigator() {
  const cResult = require("c").c(18);
  const tmp4 = closure_10();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return closure_0(7196).trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
  let obj = require("c");
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  const tmpResult = require("Navigator");
  ({ left, right } = accessibilityNativeStackOptions(1631)());
  if (cResult[2] === left) {
    if (cResult[3] === right) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp10) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === accessibilityNativeStackOptions) {
        if (cResult[9] === tmp4.content) {
          let tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { name: "root", options: null, getComponent: null };
          let obj3 = { title: null };
          const intl = tmp(1126).intl;
          obj3.title = intl.string(tmp(1126).t.PHjkRE);
          obj2.options = obj3;
          obj2.getComponent = function getComponent() {
            return closure_0(17575).default;
          };
          const tmp16 = closure_7(closure_9.Screen, obj2);
          cResult[11] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = {
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
                      return closure_0(17577).default;
                    }
          };
          const tmp20 = closure_7(closure_9.Screen, obj4);
          cResult[12] = tmp20;
          let tmp17 = tmp20;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== tmp12) {
          const obj5 = { screenOptions: tmp12, children: null };
          const items1 = [tmp13, tmp17];
          obj5.children = items1;
          const tmp24 = closure_8(closure_9.Navigator, obj5);
          cResult[13] = tmp12;
          cResult[14] = tmp24;
          let tmp21 = tmp24;
        } else {
          tmp21 = cResult[14];
        }
        if (cResult[15] === tmp11) {
          if (cResult[16] === tmp21) {
            let tmp25 = cResult[17];
          }
          return tmp25;
        }
        const obj6 = { style: tmp11, children: tmp21 };
        const tmp28 = closure_7(View, obj6);
        cResult[15] = tmp11;
        cResult[16] = tmp21;
        cResult[17] = tmp28;
        tmp25 = tmp28;
      }
      const fn2 = function k(navigation) {
        navigation = navigation.navigation;
        const obj = {
          contentStyle: closure_0.content,
          headerShadowVisible: false,
          headerTitle(children) {
            const merged = Object.assign(closure_1_4(children, closure_1_3));
            return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, { title: children.children });
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
        let merged = Object.assign(accessibilityNativeStackOptions);
        return obj;
      };
      cResult[8] = accessibilityNativeStackOptions;
      cResult[9] = tmp4.content;
      cResult[10] = fn2;
      tmp12 = fn2;
    }
    const items2 = [tmp4.container, tmp10];
    cResult[5] = tmp4.container;
    cResult[6] = tmp10;
    cResult[7] = items2;
    tmp11 = items2;
  }
  const obj7 = { paddingLeft: left, paddingRight: right };
  cResult[2] = left;
  cResult[3] = right;
  cResult[4] = obj7;
  tmp10 = obj7;
  const tmp9 = accessibilityNativeStackOptions(1631)();
}) : (function ContextMenuCommandNavigator() {
  const tmp = closure_10();
  _require = tmp;
  const layoutEffect = noop.useLayoutEffect(() => closure_0(7196).trackAppUIViewed(), []);
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
          return closure_1_7(closure_1_0(dependencyMap[12]).GenericHeaderTitle, { title: children.children });
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
  ({ Navigator, Screen } = closure_9);
  const intl = require("util").intl;
  obj5.title = intl.string(require("util").t.PHjkRE);
  obj4.options = obj5;
  obj4.getComponent = function getComponent() {
    return closure_0(17575).default;
  };
  const items1 = [
    closure_7(Screen, obj4),
    closure_7(closure_9.Screen, {
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
        return closure_0(17577).default;
      }
    })
  ];
  obj3.children = items1;
  obj2.children = closure_8(Navigator, obj3);
  return closure_7(View, obj2);
});