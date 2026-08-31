// discord_app/modules/verification/native/components/ConfirmEmailChangeStart.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
({ View: closure_6, Image: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, image: { height: 190, width: 220, resizeMode: "contain" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, button: { marginTop: 16, width: "100%" } });
const result = require("set").fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  const tmp = callback4();
  const _require = tmp;
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  obj1 = initialize;
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = callback(React.useState(false), 2);
  dependencyMap = tmp6[1];
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = tmp2(1236).intl;
    obj = { oldEmail: null };
    obj[0] = stateFromStores.email;
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    let obj2 = { style: null, source: null };
    obj2[0] = tmp.image;
    obj2[1] = navigation(7669);
    const items1 = [callback2(closure_7, obj2), , , ];
    const obj3 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj3[0] = tmp.title;
    const intl2 = tmp2(1236).intl;
    obj3[4] = intl2.string(tmp2(1236).t.dQ71Wa);
    items1[1] = callback2(tmp2(4444).Text, obj3);
    items1[2] = intl.format(tmp2(1236).t.oMFSgi, obj).map((children) => closure_1_10(lib(table[15]).Text, { style: lib.body, variant: "text-sm/medium", color: "text-default", children }, arg1));
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.button;
    const obj5 = { text: null, onPress: null, loading: null, grow: true };
    const intl3 = tmp2(1236).intl;
    obj5[0] = intl3.string(tmp2(1236).t.rXV81H);
    obj5[1] = tmp7;
    obj5[2] = tmp6[0];
    obj4[1] = callback2(tmp2(4896).Button, obj5);
    items1[3] = callback2(closure_6, obj4);
    obj1[1] = items1;
    obj[2] = callback3(closure_6, obj1);
    return callback2(closure_8, obj);
  }
};