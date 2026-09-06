// === Module 6600: ConfirmEmailChangeStart ===

// Module 6600 (ConfirmEmailChangeStart)
import Text_Text from "Text/Text" /* 4556 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, image: { height: 190, width: 220, resizeMode: "contain" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, button: { marginTop: 16, width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  const tmp = closure_12();
  _require = tmp;
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  let obj1 = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp6[1];
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1114).intl;
    obj = { oldEmail: stateFromStores.email };
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    obj1 = { style: tmp.container, children: null };
    let obj2 = { style: tmp.image, source: navigation(6602) };
    const items1 = [closure_10(closure_7, obj2), , , ];
    const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(1114).intl;
    obj3.children = intl2.string(tmp2(1114).t.dQ71Wa);
    items1[1] = closure_10(tmp2(4556).Text, obj3);
    items1[2] = intl.format(tmp2(1114).t.oMFSgi, obj).map((children, index) => closure_2_10(Text_Text.Text, { style: body.body, variant: "text-sm/medium", color: "text-default", children }, index));
    const obj4 = { style: tmp.button, children: null };
    const obj5 = { text: null, onPress: null, loading: null, grow: true };
    const intl3 = tmp2(1114).intl;
    obj5.text = intl3.string(tmp2(1114).t.rXV81H);
    obj5.onPress = tmp7;
    obj5.loading = tmp6[0];
    obj4.children = closure_10(tmp2(4975).Button, obj5);
    items1[3] = closure_10(closure_6, obj4);
    obj1.children = items1;
    obj.children = closure_11(closure_6, obj1);
    return closure_10(closure_8, obj);
  }
};