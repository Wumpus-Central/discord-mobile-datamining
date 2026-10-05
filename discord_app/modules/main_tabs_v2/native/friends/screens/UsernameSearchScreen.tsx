// === Module 16943: UsernameSearchScreen ===

// Module 16943 (UsernameSearchScreen)
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ AnalyticEvents: metroRequire, AnalyticsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, content: obj3, iosPaddingThemeAdjust: obj4, container: obj5, inputContainer: obj6, headerText: { textTransform: "none" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { paddingTop: nativeDefault.space.PX_40 };
obj5 = { flexGrow: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let constants2;
  let ref;
  let tmp10;
  let tmp5;
  let tmp6;
  let obj = navigation(576);
  const cResult = obj.c(32);
  navigation = navigation.navigation;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = ref(dependencyMap[8]);
      const obj2 = { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL };
      obj.track(constants.FRIEND_ADD_VIEWED, obj2);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  const insets = ref(6471)().insets;
  ref = react.useRef(null);
  if (cResult[2] !== navigation) {
    class S {
      constructor() {
        return navigation.addListener("transitionEnd", (data) => {
          let closing = data.data.closing;
          if (!closing) {
            const obj = navigation(dependencyMap[10]);
            closing = obj.getIsScreenReaderEnabled();
          }
          if (!closing) {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        });
      }
    }
    const items1 = [navigation];
    cResult[2] = navigation;
    cResult[3] = S;
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    class S {
      constructor() {
        return navigation.addListener("transitionEnd", (data) => {
          let closing = data.data.closing;
          if (!closing) {
            const obj = navigation(dependencyMap[10]);
            closing = obj.getIsScreenReaderEnabled();
          }
          if (!closing) {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        });
      }
    }
    tmp10 = cResult[4];
  }
  const effect1 = react.useEffect(S, tmp10);
  const tmpResult = navigation(7507);
  const clientThemesOverride = tmpResult.useClientThemesOverride();
  if (cResult[5] === insets.top) {
    class S {
      constructor() {
        return navigation.addListener("transitionEnd", (data) => {
          let closing = data.data.closing;
          if (!closing) {
            const obj = navigation(dependencyMap[10]);
            closing = obj.getIsScreenReaderEnabled();
          }
          if (!closing) {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        });
      }
    }
  }
  let tmp13 = null;
  const tmpResult2 = navigation(1369);
  if (tmpResult2.isIOS()) {
    class S {
      constructor() {
        return navigation.addListener("transitionEnd", (data) => {
          let closing = data.data.closing;
          if (!closing) {
            const obj = navigation(dependencyMap[10]);
            closing = obj.getIsScreenReaderEnabled();
          }
          if (!closing) {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        });
      }
    }
    if (null != clientThemesOverride) {
      class S {
        constructor() {
          return navigation.addListener("transitionEnd", (data) => {
            let closing = data.data.closing;
            if (!closing) {
              const obj = navigation(dependencyMap[10]);
              closing = obj.getIsScreenReaderEnabled();
            }
            if (!closing) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
          });
        }
      }
      tmp13 = null;
      if (insets.top > 0) {
        class S {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              let closing = data.data.closing;
              if (!closing) {
                const obj = navigation(dependencyMap[10]);
                closing = obj.getIsScreenReaderEnabled();
              }
              if (!closing) {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            });
          }
        }
      }
    }
  }
  cResult[5] = insets.top;
  cResult[6] = tmp4.iosPaddingThemeAdjust;
  cResult[7] = clientThemesOverride;
  cResult[8] = tmp13;
}) : ((navigation) => {
  let constants2;
  let intl;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj7;
  let tmp3Result;
  let tmp3Result2;
  navigation = navigation.navigation;
  let ref;
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = ref(dependencyMap[8]);
    const obj2 = { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj2);
  }, []);
  const insets = ref(6471)().insets;
  ref = react.useRef(null);
  const items = [navigation];
  const effect1 = react.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      const obj = navigation(dependencyMap[10]);
      closing = obj.getIsScreenReaderEnabled();
    }
    if (!closing) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }), items);
  let obj = navigation(7507);
  const clientThemesOverride = obj.useClientThemesOverride();
  let obj2 = navigation(1369);
  let prop = null;
  if (obj2.isIOS()) {
    prop = null;
    if (null != clientThemesOverride) {
      prop = null;
      if (insets.top > 0) {
        prop = tmp.iosPaddingThemeAdjust;
      }
    }
  }
  const obj3 = { style: tmp.background, children: closure_9(tmp3Result, obj4) };
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.content, clientThemesOverride];
  items2 = [, ];
  tmp3Result = ref(6537);
  items2[0] = closure_8(ref(5911), { absolute: true });
  const obj5 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: items3, children: closure_8(tmp3Result2, obj7) };
  items3 = [tmp.container, prop, { paddingBottom: insets.bottom + ref(587).space.PX_16 }];
  obj7 = { style: tmp.inputContainer, autoFocusInput: false, headerText: intl.string(navigation(1126).t.YEOwDM), headerTextStyle: tmp.headerText, ref };
  ({ paddingBottom: insets.bottom + ref(587).space.PX_16 });
  tmp3Result2 = ref(13668);
  intl = tmp7(1126).intl;
  items2[1] = closure_8(closure_4, obj5);
  return closure_8(closure_5, obj3);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default tmp6;