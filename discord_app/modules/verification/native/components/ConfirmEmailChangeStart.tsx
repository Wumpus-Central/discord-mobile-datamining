// discord_app/modules/verification/native/components/ConfirmEmailChangeStart.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, navigation;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ View: metroRequire, Image: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({
  container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" },
  image: { height: 190, width: 220, resizeMode: "contain" },
  title: { marginTop: 16, textAlign: "center" },
  body: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  button: { marginTop: 16, width: "100%" },
});
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  let Button;
  let body;
  let currentUser;
  let first;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let obj9;
  const tmp = closure_12();
  _require = tmp;
  const tmp3 = dependencyMap;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  [first, dependencyMap] = react.useState(false);
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1126).intl;
    let obj3 = { oldEmail: stateFromStores.email };
    let obj4 = {
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      children: closure_11(closure_6, obj5),
    };
    obj5 = { style: tmp.container, children: items1 };
    let obj6 = { style: tmp.image, source: navigation(6101) };
    const formatResult = intl.format(require("intl").t.oMFSgi, obj3);
    items1 = [closure_10(closure_7, obj6), , ,];
    let obj7 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: intl2.string(require("intl").t.dQ71Wa),
    };
    const Text = tmp2(4892).Text;
    intl2 = tmp2(1126).intl;
    items1[1] = closure_10(Text, obj7);
    items1[2] = formatResult.map((children, index) => {
      const obj = { style: body.body, variant: "text-sm/medium", color: "text-default", children };
      return authStore(Text_Text.Text, obj, index);
    });
    let obj8 = { style: tmp.button, children: closure_10(Button, obj9) };
    obj9 = { text: intl3.string(require("intl").t.rXV81H), onPress: tmp8, loading: first, grow: true };
    Button = tmp2(5601).Button;
    intl3 = tmp2(1126).intl;
    items1[3] = closure_10(closure_6, obj8);
    return closure_10(closure_8, obj4);
  }
}
