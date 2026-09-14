// === Module 16887: UsernameSearchScreen ===

// Module 16887 (UsernameSearchScreen)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { background: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: null, iosPaddingThemeAdjust: null, container: null, inputContainer: null, headerText: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.content = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.iosPaddingThemeAdjust = { paddingTop: nativeDefault.space.PX_40 };
let obj5 = { paddingTop: nativeDefault.space.PX_40 };
obj2.container = { flexGrow: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { flexGrow: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.inputContainer = { marginTop: nativeDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
obj2.headerText = { textTransform: "none" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default function UsernameSearchScreen(navigation) {
  navigation = navigation.navigation;
  let ref;
  const tmp = closure_10();
  const effect = noop.useEffect(() => {
    ref(1240).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL });
  }, []);
  const insets = ref(7084)().insets;
  ref = noop.useRef(null);
  const items = [navigation];
  const effect1 = noop.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      closing = navigation(5043).getIsScreenReaderEnabled();
      const obj = navigation(5043);
    }
    if (!closing) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }), items);
  const clientThemesOverride = navigation(7975).useClientThemesOverride();
  let obj = navigation(7975);
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
  obj2 = navigation(1363);
  const items2 = [closure_8(ref(5206), { absolute: true }), ];
  const obj5 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items3 = [tmp.container, prop, ];
  const tmp3Result = ref(5659);
  items3[2] = { paddingBottom: insets.bottom + ref(576).space.PX_16 };
  obj5.contentContainerStyle = items3;
  const obj7 = { style: tmp.inputContainer, autoFocusInput: false, headerText: null, headerTextStyle: null, ref: null };
  const obj6 = { paddingBottom: insets.bottom + ref(576).space.PX_16 };
  const intl = tmp7(1114).intl;
  obj7.headerText = intl.string(navigation(1114).t.YEOwDM);
  obj7.headerTextStyle = tmp.headerText;
  obj7.ref = ref;
  obj5.children = closure_8(ref(13944), obj7);
  items2[1] = closure_8(closure_4, obj5);
  obj4.children = items2;
  obj3.children = closure_9(tmp3Result, obj4);
  return closure_8(closure_5, obj3);
};