// discord_app/modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_6, AnalyticsSections: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { background: null, content: null, iosPaddingThemeAdjust: null, container: null, inputContainer: null, headerText: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_40 };
const obj2 = { paddingTop: ThemesDefault.space.PX_40 };
createCacheKey[3] = { flexGrow: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj3 = { flexGrow: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
createCacheKey[5] = { textTransform: "none" };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj4 = { marginTop: ThemesDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default function UsernameSearchScreen(navigation) {
  navigation = navigation.navigation;
  let ref;
  const tmp = callback3();
  const effect = React.useEffect(() => {
    let obj = ref(table[6]);
    obj = { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  }, []);
  const insets = ref(5446)().insets;
  ref = React.useRef(null);
  const items = [navigation];
  const effect1 = React.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      closing = closure_1_0(closure_1_2[8]).getIsScreenReaderEnabled();
      const obj = closure_1_0(closure_1_2[8]);
    }
    if (!closing) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }), items);
  let obj = navigation(8540);
  const clientThemesOverride = obj.useClientThemesOverride();
  obj1 = navigation(500);
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
  obj = { style: items1, children: null };
  items1 = [tmp.content, clientThemesOverride];
  let tmp3Result = tmp3(6582);
  const items2 = [callback(ref(9128), { absolute: true }), ];
  obj1 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: null, children: null };
  const items3 = [tmp.container, prop, { paddingBottom: insets.bottom + ref(712).space.PX_16 }];
  obj1[2] = items3;
  const obj3 = { style: tmp.inputContainer, autoFocusInput: false, headerText: null, headerTextStyle: null, ref: null };
  tmp3Result = tmp3(13373);
  const intl = tmp7(1236).intl;
  obj3[2] = intl.string(navigation(1236).t.YEOwDM);
  obj3[3] = tmp.headerText;
  obj3[4] = ref;
  obj1[3] = callback(tmp3Result, obj3);
  items2[1] = callback(closure_4, obj1);
  obj[1] = items2;
  obj[1] = callback2(tmp3Result, obj);
  return callback(closure_5, obj);
};