// === Module 14089: CredentialList ===

// Module 14089 (CredentialList)
import ThemesDefault from "Themes" /* 712 */;
import registerAssetDefault from "registerAsset" /* 14079 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import hasFetchedCredentials from "hasFetchedCredentials" /* 14077 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14078 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function CredentialList(navigation) {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  let obj = navigation(589);
  let items = [closure_7];
  const credentials = obj.useStateFromStoresObject(items, () => ({ credentials: credentials.getCredentials() })).credentials;
  const tmp3 = callback4();
  importDefault = tmp3;
  [c2, c3] = callback(React.useState(false), 2);
  if (0 === credentials.length) {
    obj = { style: null, children: null };
    obj[0] = tmp3.upsellContainer;
    obj = { source: null, style: null };
    obj[0] = registerAssetDefault;
    obj[1] = tmp3.keychainImage;
    const items1 = [callback2(closure_5, obj), ];
    obj1 = { variant: "text-md/normal", style: null, children: null };
    obj1[1] = tmp3.upsellText;
    let intl2 = tmp(1236).intl;
    obj1[2] = intl2.string(tmp(1236).t.FSNwFW);
    items1[1] = callback2(tmp(4734).Text, obj1);
    obj[1] = items1;
    return callback3(closure_6, obj);
  } else {
    let obj2 = { title: null, hasIcons: false, children: null };
    let intl = tmp(1236).intl;
    obj2[0] = intl.string(tmp(1236).t["4RIqrQ"]);
    obj2[2] = credentials.map((item, index) => {
      closure_0 = item;
      let obj = { variant: "secondary", icon: closure_1_9(navigation(_undefined[14]).TrashIcon, { color: lib(_undefined[7]).colors.TEXT_FEEDBACK_CRITICAL }), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const intl = navigation(_undefined[11]).intl;
      obj[2] = intl.string(navigation(_undefined[11]).t.N86XcP);
      obj[4] = _undefined;
      obj[5] = _undefined;
      obj[6] = function onPress() {
        callback(paths[15]);
        const obj = { credential: closure_0, deleting: closure_1_2, setDeleting: closure_1_3 };
        return obj.openLazy(navigation(paths[17])(paths[16], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj);
      };
      const items = [closure_1_9(navigation(_undefined[13]).IconButton, obj), ];
      const obj2 = { variant: "secondary", icon: closure_1_9(navigation(_undefined[18]).PencilIcon, {}), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const intl2 = navigation(_undefined[11]).intl;
      obj2[2] = intl2.string(navigation(_undefined[11]).t.bt75uw);
      obj2[4] = _undefined;
      obj2[5] = _undefined;
      obj2[6] = function onPress() {
        item.push(WebAuthnScreens.EDIT, { credential: item });
      };
      items[1] = closure_1_9(navigation(_undefined[13]).IconButton, obj2);
      obj[1] = items;
      obj[1] = closure_1_10(navigation(_undefined[12]).ButtonGroup, obj);
      let formatResult = null;
      if (null != item.last_used) {
        const intl3 = navigation(_undefined[11]).intl;
        const obj3 = { lastUsed: null };
        obj3[0] = navigation(_undefined[21]).formatDate(item.last_used);
        formatResult = intl3.format(navigation(_undefined[11]).t["7JgxF5"], obj3);
        const tmp2Result = navigation(_undefined[21]);
      }
      obj[2] = formatResult;
      return closure_1_9(navigation(_undefined[20]).TableRow, obj, item.id);
    });
    return callback2(tmp(6286).TableRowGroup, obj2);
  }
  const tmp4 = callback(React.useState(false), 2);
}
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: ThemesDefault.space.PX_16, textAlign: "center" };
createCacheKey[3] = { flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8 };
createCacheKey[4] = { height: 125, width: 161 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let navigation;
    let obj = navigation(1500);
    navigation = obj.useNavigation();
    obj1 = navigation(589);
    const items = [closure_7];
    const hasFetchedCredentials = obj1.useStateFromStoresObject(items, () => ({ hasFetchedCredentials: closure_7.hasFetchedCredentials() })).hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = React.useEffect(() => {
      if (!hasFetchedCredentials) {
        const webAuthnCredentials = navigation(dependencyMap[23]).fetchWebAuthnCredentials();
        const obj = navigation(dependencyMap[23]);
      }
    }, items1);
    const items2 = [navigation];
    const layoutEffect = React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight() {
          if (navigation(closure_1_2[24]).hasWebAuthn) {
            const obj = { text: null, onPress: null, foregroundRipple: true };
            const intl = navigation(closure_1_2[11]).intl;
            obj[0] = intl.string(navigation(closure_1_2[11]).t.OYkgVk);
            obj[1] = function onPress() {

            };
            return closure_1_9(navigation(closure_1_2[25]).HeaderActionButton, obj);
          }
        }
      });
    }, items2);
    obj = { style: null, children: null };
    obj[0] = callback4().container;
    obj1 = { navigation: null };
    obj1[0] = navigation;
    obj[1] = callback2(CredentialList, obj1);
    obj[0] = callback2(closure_6, obj);
    return callback2(navigation(8083).Form, obj);
  }
};