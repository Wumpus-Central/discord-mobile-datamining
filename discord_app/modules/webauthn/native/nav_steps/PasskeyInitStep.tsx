// discord_app/modules/webauthn/native/nav_steps/PasskeyInitStep.tsx
import _slicedToArray from "_slicedToArray";
import TableRowGroupTitle from "TableRowGroupTitle";
import get_ActivityIndicator from "asyncRequireImpl";
import hasFetchedCredentials from "hasFetchedCredentials";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "useAuthSessions";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/13967_registerAsset.js";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
function CredentialList(navigation) {
  let c2;
  let c3;
  navigation = navigation.navigation;
  let importDefault;
  let dependencyMap;
  let callback;
  let obj = navigation(589);
  let items = [hasFetchedCredentials];
  const credentials = obj.useStateFromStoresObject(items, () => ({ credentials: credentials.getCredentials() })).credentials;
  const tmp3 = createCacheKey();
  importDefault = tmp3;
  [c2, c3] = callback(React.useState(false), 2);
  if (0 === credentials.length) {
    obj = { style: null, children: null };
    obj[0] = tmp3.upsellContainer;
    obj = { source: null, style: null };
    obj[0] = registerAsset;
    obj[1] = tmp3.keychainImage;
    const items1 = [callback2(closure_5, obj), ];
    let obj1 = { variant: "text-md/normal", style: null, children: null };
    obj1[1] = tmp3.upsellText;
    let intl2 = tmp(1236).intl;
    obj1[2] = intl2.string(tmp(1236).t.FSNwFW);
    items1[1] = callback2(tmp(4299).Text, obj1);
    obj[1] = items1;
    return callback3(closure_6, obj);
  } else {
    let obj2 = { title: null, hasIcons: false, children: null };
    let intl = tmp(1236).intl;
    obj2[0] = intl.string(tmp(1236).t["4RIqrQ"]);
    obj2[2] = credentials.map((label) => {
      let obj = { label: label.name, trailing: null, subLabel: null };
      let closure_0 = label;
      obj = { style: _undefined.iconButtonGroup, children: null };
      obj = { variant: "secondary", icon: null, accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const obj1 = { color: null };
      obj1[0] = _undefined(_undefined2[7]).colors.TEXT_FEEDBACK_CRITICAL;
      obj[1] = outer1_9(navigation(_undefined2[14]).TrashIcon, obj1);
      const intl = navigation(_undefined2[11]).intl;
      obj[2] = intl.string(navigation(_undefined2[11]).t.N86XcP);
      obj[4] = _undefined2;
      obj[5] = _undefined2;
      obj[6] = function onPress() {
        let obj = callback(paths[15]);
        obj = { credential: closure_0, deleting: outer1_2, setDeleting: outer1_3 };
        return obj.openLazy(navigation(paths[17])(paths[16], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj);
      };
      const items = [outer1_9(navigation(_undefined2[13]).IconButton, obj), ];
      const obj2 = { variant: "secondary", icon: null, accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      obj2[1] = outer1_9(navigation(_undefined2[18]).PencilIcon, {});
      const intl2 = navigation(_undefined2[11]).intl;
      obj2[2] = intl2.string(navigation(_undefined2[11]).t.bt75uw);
      obj2[4] = _undefined2;
      obj2[5] = _undefined2;
      obj2[6] = function onPress() {
        label.push(outer2_8.EDIT, { credential: label });
      };
      items[1] = outer1_9(navigation(_undefined2[13]).IconButton, obj2);
      obj[1] = items;
      obj[1] = outer1_10(navigation(_undefined2[12]).ButtonGroup, obj);
      let formatResult = null;
      if (null != label.last_used) {
        const intl3 = tmp2(tmp3[11]).intl;
        const obj3 = { lastUsed: null };
        obj3[0] = tmp2(tmp3[21]).formatDate(label.last_used);
        formatResult = intl3.format(tmp2(tmp3[11]).t["7JgxF5"], obj3);
        const tmp2Result = tmp2(tmp3[21]);
      }
      obj[2] = formatResult;
      return outer1_9(navigation(_undefined2[20]).TableRow, obj, label.id);
    });
    return callback2(tmp(5767).TableRowGroup, obj2);
  }
  const tmp4 = callback(React.useState(false), 2);
}
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, upsellContainer: null, upsellText: null, iconButtonGroup: null, keychainImage: null };
createCacheKey = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: require("Themes").space.PX_16, marginRight: require("Themes").space.PX_16, marginTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_16, alignItems: "center" };
let obj1 = { marginTop: require("Themes").space.PX_16, alignItems: "center" };
createCacheKey[2] = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: require("Themes").space.PX_16, textAlign: "center" };
let obj2 = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: require("Themes").space.PX_16, textAlign: "center" };
createCacheKey[3] = { flexDirection: "row", paddingVertical: require("Themes").space.PX_8 };
createCacheKey[4] = { height: 125, width: 161 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { flexDirection: "row", paddingVertical: require("Themes").space.PX_8 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let navigation;
    let hasFetchedCredentials;
    let obj = navigation(1480);
    navigation = obj.useNavigation();
    let obj1 = navigation(589);
    const items = [hasFetchedCredentials];
    hasFetchedCredentials = obj1.useStateFromStoresObject(items, () => ({ hasFetchedCredentials: hasFetchedCredentials.hasFetchedCredentials() })).hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = React.useEffect(() => {
      if (!hasFetchedCredentials) {
        const webAuthnCredentials = navigation(outer1_2[23]).fetchWebAuthnCredentials();
        const obj = navigation(outer1_2[23]);
      }
    }, items1);
    const items2 = [navigation];
    const layoutEffect = React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight() {
          if (outer1_0(outer1_2[24]).hasWebAuthn) {
            const obj = { text: null, onPress: null, foregroundRipple: true };
            const intl = tmp(tmp2[11]).intl;
            obj[0] = intl.string(tmp(tmp2[11]).t.OYkgVk);
            obj[1] = function onPress() {

            };
            return outer1_9(tmp(tmp2[25]).HeaderActionButton, obj);
          }
        }
      });
    }, items2);
    obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = createCacheKey().container;
    obj1 = { navigation: null };
    obj1[0] = navigation;
    obj[1] = callback2(CredentialList, obj1);
    obj[0] = callback2(closure_6, obj);
    return callback2(navigation(7967).Form, obj);
  }
};