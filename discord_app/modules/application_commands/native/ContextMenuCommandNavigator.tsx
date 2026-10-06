// === Module 17073: ContextMenuCommandNavigator ===

// Module 17073 (ContextMenuCommandNavigator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7568 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
let obj2;
let closure_3 = ["children"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = NativeStackView.createNativeStackNavigator();
let obj = { container: { flex: 1 }, content: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let intl;
  let items1;
  let left;
  let obj3;
  let right;
  let tmp5;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(18);
  const tmp4 = closure_10();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = closure_0(dependencyMap[9]);
      return obj.trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
  const tmpResult = tmp(6503);
  const accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
  ({ left, right } = accessibilityNativeStackOptions(1618)());
  accessibilityNativeStackOptions(1618)();
  if (cResult[2] === left) {
    let tmp10;
    if (cResult[3] === right) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      let tmp11;
      if (cResult[6] === tmp10) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === accessibilityNativeStackOptions) {
        let tmp12;
        let tmp13;
        let tmp17;
        let tmp21;
        if (cResult[9] === tmp4.content) {
          tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = {
            name: "root",
            options: obj3,
            getComponent() {
                      return closure_0(dependencyMap[14]).default;
                    }
          };
          obj3 = { title: intl.string(tmp(1126).t.PHjkRE) };
          const Screen = closure_9.Screen;
          intl = tmp(1126).intl;
          const tmp16 = closure_7(Screen, obj2);
          cResult[11] = tmp16;
          tmp13 = tmp16;
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
                      return closure_0(dependencyMap[15]).default;
                    }
          };
          const tmp20 = closure_7(closure_9.Screen, obj4);
          cResult[12] = tmp20;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== tmp12) {
          const obj5 = { screenOptions: tmp12, children: items1 };
          items1 = [tmp13, tmp17];
          const tmp24 = closure_8(closure_9.Navigator, obj5);
          cResult[13] = tmp12;
          cResult[14] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[14];
        }
        if (cResult[15] === tmp11) {
          let tmp25;
          if (cResult[16] === tmp21) {
            tmp25 = cResult[17];
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
      const fn2 = function _(navigation) {
        let renderModalCloseImage;
        navigation = navigation.navigation;
        let obj = {
          contentStyle: closure_0.content,
          headerShadowVisible: false,
          headerTitle(children) {
            children = children.children;
            const obj = { title: children };
            const tmp = closure_1_4(children, closure_1_3);
            const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
            const merged = Object.assign(tmp);
            return closure_1_7(GenericHeaderTitle, obj);
          },
          headerTitleAlign: "center",
          headerLeft: renderModalCloseImage
        };
        if (navigation.getState().routes[0].key === navigation.route.key) {
          const obj3 = HeaderShared;
          renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
        } else {
          const obj2 = HeaderShared;
          renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
        }
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
}) : (() => {
  let Navigator;
  let Screen;
  let closure_0;
  let closure_1;
  let intl;
  let items;
  let items1;
  let obj3;
  let obj5;
  const tmp = closure_10();
  _require = tmp;
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[9]);
    return obj.trackAppUIViewed();
  }, []);
  let obj = require("Navigator");
  importDefault = obj.useAccessibilityNativeStackOptions();
  const rect = useSafeAreaInsetsDefault();
  let obj2 = { style: items, children: closure_8(Navigator, obj3) };
  items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj3 = {
    screenOptions(navigation) {
      let renderModalCloseImage;
      navigation = navigation.navigation;
      let obj = {
        contentStyle: closure_0.content,
        headerShadowVisible: false,
        headerTitle(children) {
          children = children.children;
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const obj = { title: children };
          const GenericHeaderTitle = closure_1_0(closure_1_2[12]).GenericHeaderTitle;
          const merged1 = Object.assign(merged);
          return closure_1_7(GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: renderModalCloseImage
      };
      if (navigation.getState().routes[0].key === navigation.route.key) {
        const obj3 = HeaderShared;
        renderModalCloseImage = obj3.getRenderModalCloseImage(navigation);
      } else {
        const obj2 = HeaderShared;
        renderModalCloseImage = obj2.getRenderModalBackImage(navigation);
      }
      let merged = Object.assign(closure_1);
      return obj;
    },
    children: items1
  };
  const obj4 = {
    name: "root",
    options: obj5,
    getComponent() {
      return closure_0(dependencyMap[14]).default;
    }
  };
  ({ Navigator, Screen } = closure_9);
  obj5 = { title: intl.string(require("intl").t.PHjkRE) };
  intl = require("intl").intl;
  items1 = [closure_7(Screen, obj4), ];
  const obj6 = {
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
      return closure_0(dependencyMap[15]).default;
    }
  };
  items1[1] = closure_7(closure_9.Screen, obj6);
  return closure_7(View, obj2);
});
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandNavigator.tsx");

export default tmp3;