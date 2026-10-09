// discord_app/modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: metroRequire, AnalyticsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  background: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  content: null,
  iosPaddingThemeAdjust: null,
  container: null,
  inputContainer: null,
  headerText: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.content = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.iosPaddingThemeAdjust = { paddingTop: nativeDefault.space.PX_40 };
let obj5 = { paddingTop: nativeDefault.space.PX_40 };
obj2.container = {
  flexGrow: 1,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj6 = {
  flexGrow: 1,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.inputContainer = { marginTop: nativeDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
obj2.headerText = { textTransform: "none" };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { marginTop: nativeDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UsernameSearchScreen(navigation) {
      const cResult = navigation(576).c(32);
      navigation = navigation.navigation;
      let obj = navigation(576);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          ref(1265).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL });
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const effect = noop.useEffect(tmp5, tmp6);
      const insets = ref(6663)().insets;
      const tmp4 = closure_10();
      if (cResult[2] !== navigation) {
        class T {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              let closing = data.data.closing;
              if (!closing) {
                closing = navigation(5361).getIsScreenReaderEnabled();
                const obj = navigation(5361);
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
        cResult[3] = T;
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        class T {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              let closing = data.data.closing;
              if (!closing) {
                closing = navigation(5361).getIsScreenReaderEnabled();
                const obj = navigation(5361);
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
      const effect1 = noop.useEffect(T, tmp10);
      ref = noop.useRef(null);
      const clientThemesOverride = navigation(9279).useClientThemesOverride();
      if (cResult[5] === insets.top) {
        class T {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              let closing = data.data.closing;
              if (!closing) {
                closing = navigation(5361).getIsScreenReaderEnabled();
                const obj = navigation(5361);
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
      const tmpResult = navigation(9279);
      let tmp13 = null;
      if (tmpResult2.isIOS()) {
        class T {
          constructor() {
            return navigation.addListener("transitionEnd", (data) => {
              let closing = data.data.closing;
              if (!closing) {
                closing = navigation(5361).getIsScreenReaderEnabled();
                const obj = navigation(5361);
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
          class T {
            constructor() {
              return navigation.addListener("transitionEnd", (data) => {
                let closing = data.data.closing;
                if (!closing) {
                  closing = navigation(5361).getIsScreenReaderEnabled();
                  const obj = navigation(5361);
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
            class T {
              constructor() {
                return navigation.addListener("transitionEnd", (data) => {
                  let closing = data.data.closing;
                  if (!closing) {
                    closing = navigation(5361).getIsScreenReaderEnabled();
                    const obj = navigation(5361);
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
      tmpResult2 = navigation(1382);
    }
  : function UsernameSearchScreen(navigation) {
      navigation = navigation.navigation;
      let ref;
      const tmp = closure_10();
      const effect = noop.useEffect(() => {
        ref(1265).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL });
      }, []);
      const insets = ref(6663)().insets;
      ref = noop.useRef(null);
      const items = [navigation];
      const effect1 = noop.useEffect(
        () =>
          navigation.addListener("transitionEnd", (data) => {
            let closing = data.data.closing;
            if (!closing) {
              closing = navigation(5361).getIsScreenReaderEnabled();
              const obj = navigation(5361);
            }
            if (!closing) {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
          }),
        items,
      );
      const clientThemesOverride = navigation(9279).useClientThemesOverride();
      let obj = navigation(9279);
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
      const obj3 = { style: tmp.background, children: null };
      const obj4 = { style: null, children: null };
      const items1 = [tmp.content, clientThemesOverride];
      obj4.style = items1;
      obj2 = navigation(1382);
      const items2 = [closure_8(ref(10196), { absolute: true })];
      const obj5 = {
        alwaysBounceVertical: false,
        keyboardShouldPersistTaps: "handled",
        contentContainerStyle: null,
        children: null,
      };
      const items3 = [tmp.container, prop];
      const tmp3Result = ref(6727);
      items3[2] = { paddingBottom: insets.bottom + ref(587).space.PX_16 };
      obj5.contentContainerStyle = items3;
      const obj7 = {
        style: tmp.inputContainer,
        autoFocusInput: false,
        headerText: null,
        headerTextStyle: null,
        ref: null,
      };
      const obj6 = { paddingBottom: insets.bottom + ref(587).space.PX_16 };
      const intl = tmp7(1126).intl;
      obj7.headerText = intl.string(navigation(1126).t.YEOwDM);
      obj7.headerTextStyle = tmp.headerText;
      obj7.ref = ref;
      obj5.children = closure_8(ref(13999), obj7);
      items2[1] = closure_8(closure_4, obj5);
      obj4.children = items2;
      obj3.children = closure_9(tmp3Result, obj4);
      return closure_8(closure_5, obj3);
    };
