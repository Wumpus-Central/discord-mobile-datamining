// === Module 16773: UsernameSearchScreen ===

// Module 16773 (UsernameSearchScreen)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsSections: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { background: null, content: null, iosPaddingThemeAdjust: null, container: null, inputContainer: null, headerText: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.background = createStyles;
createStyles.content = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.iosPaddingThemeAdjust = { paddingTop: nativeDefault.space.PX_40 };
const obj2 = { paddingTop: nativeDefault.space.PX_40 };
createStyles.container = { flexGrow: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
let obj3 = { flexGrow: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.inputContainer = { marginTop: nativeDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
createStyles.headerText = { textTransform: "none" };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default function UsernameSearchScreen(navigation) {
  navigation = navigation.navigation;
  let ref;
  const tmp = closure_10();
  const effect = noop.useEffect(() => {
    ref(1242);
    const obj = { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  }, []);
  const insets = ref(6981)().insets;
  ref = noop.useRef(null);
  const items = [navigation];
  const effect1 = noop.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      closing = navigation(4962).getIsScreenReaderEnabled();
      const obj = navigation(4962);
    }
    if (!closing) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }), items);
  let obj = navigation(7872);
  const clientThemesOverride = obj.useClientThemesOverride();
  let obj1 = navigation(1115);
  let prop = null;
  if (obj1.isIOS()) {
    prop = null;
    if (null != clientThemesOverride) {
      prop = null;
      if (insets.top > 0) {
        prop = tmp.iosPaddingThemeAdjust;
      }
    }
  }
  obj = { style: tmp.background, children: null };
  obj = { style: null, children: null };
  const items1 = [tmp.content, clientThemesOverride];
  obj.style = items1;
  tmp3(5578);
  const items2 = [closure_8(ref(5125), { absolute: true }), ];
  obj1 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items3 = [tmp.container, prop, { paddingBottom: insets.bottom + ref(576).space.PX_16 }];
  obj1.contentContainerStyle = items3;
  const obj3 = { style: tmp.inputContainer, autoFocusInput: false, headerText: null, headerTextStyle: null, ref: null };
  const tmp3Result = tmp3(13855);
  const intl = tmp7(1114).intl;
  obj3.headerText = intl.string(navigation(1114).t.YEOwDM);
  obj3.headerTextStyle = tmp.headerText;
  obj3.ref = ref;
  obj1.children = closure_8(tmp3Result, obj3);
  items2[1] = closure_8(closure_4, obj1);
  obj.children = items2;
  obj.children = closure_9(tmp3Result, obj);
  return closure_8(closure_5, obj);
};