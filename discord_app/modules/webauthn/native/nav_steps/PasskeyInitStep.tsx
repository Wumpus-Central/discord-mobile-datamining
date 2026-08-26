// discord_app/modules/webauthn/native/nav_steps/PasskeyInitStep.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../_runtime/14249_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../WebAuthnStore.tsx";
import { WebAuthnScreens } from "../../WebAuthnConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function CredentialList(navigation) {
  navigation = navigation.navigation;
  importDefault = undefined;
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
    items1[1] = callback2(tmp(4440).Text, obj1);
    obj[1] = items1;
    return callback3(closure_6, obj);
  } else {
    let obj2 = { title: null, hasIcons: false, children: null };
    let intl = tmp(1236).intl;
    obj2[0] = intl.string(tmp(1236).t["4RIqrQ"]);
    obj2[2] = credentials.map((label) => {
      let obj = { label: label.name, trailing: null, subLabel: null };
      closure_0 = label;
      obj = { style: lib.iconButtonGroup, children: null };
      obj = { variant: "secondary", icon: closure_1_9(navigation(_undefined[14]).TrashIcon, { color: lib(_undefined[7]).colors.TEXT_FEEDBACK_CRITICAL }), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const intl = navigation(_undefined[11]).intl;
      obj[2] = intl.string(navigation(_undefined[11]).t.N86XcP);
      obj[4] = _undefined;
      obj[5] = _undefined;
      obj[6] = function onPress() {
        let obj = callback(paths[15]);
        obj = { credential: closure_0, deleting: closure_1_2, setDeleting: closure_1_3 };
        return obj.openLazy(navigation(paths[17])(paths[16], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj);
      };
      const items = [closure_1_9(navigation(_undefined[13]).IconButton, obj), ];
      const obj2 = { variant: "secondary", icon: closure_1_9(navigation(_undefined[18]).PencilIcon, {}), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const intl2 = navigation(_undefined[11]).intl;
      obj2[2] = intl2.string(navigation(_undefined[11]).t.bt75uw);
      obj2[4] = _undefined;
      obj2[5] = _undefined;
      obj2[6] = function onPress() {
        label.push(closure_2_8.EDIT, { credential: label });
      };
      items[1] = closure_1_9(navigation(_undefined[13]).IconButton, obj2);
      obj[1] = items;
      obj[1] = closure_1_10(navigation(_undefined[12]).ButtonGroup, obj);
      let formatResult = null;
      if (null != label.last_used) {
        const intl3 = tmp2(tmp3[11]).intl;
        const obj3 = { lastUsed: null };
        obj3[0] = tmp2(tmp3[21]).formatDate(label.last_used);
        formatResult = intl3.format(tmp2(tmp3[11]).t["7JgxF5"], obj3);
        const tmp2Result = tmp2(tmp3[21]);
      }
      obj[2] = formatResult;
      return closure_1_9(navigation(_undefined[20]).TableRow, obj, label.id);
    });
    return callback2(tmp(5939).TableRowGroup, obj2);
  }
  const tmp4 = callback(React.useState(false), 2);
}
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, upsellContainer: null, upsellText: null, iconButtonGroup: null, keychainImage: null };
createCacheKey = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: ThemesDefault.space.PX_16, marginRight: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_16, alignItems: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: ThemesDefault.space.PX_16, textAlign: "center" };
let obj2 = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: ThemesDefault.space.PX_16, textAlign: "center" };
createCacheKey[3] = { flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8 };
createCacheKey[4] = { height: 125, width: 161 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj3 = { flexDirection: "row", paddingVertical: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    let navigation;
    let hasFetchedCredentials;
    let obj = navigation(1500);
    navigation = obj.useNavigation();
    obj1 = navigation(589);
    const items = [closure_7];
    hasFetchedCredentials = obj1.useStateFromStoresObject(items, () => ({ hasFetchedCredentials: closure_7.hasFetchedCredentials() })).hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = React.useEffect(() => {
      if (!hasFetchedCredentials) {
        const webAuthnCredentials = navigation(closure_1_2[23]).fetchWebAuthnCredentials();
        const obj = navigation(closure_1_2[23]);
      }
    }, items1);
    const items2 = [navigation];
    const layoutEffect = React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight() {
          if (closure_1_0(closure_1_2[24]).hasWebAuthn) {
            const obj = { text: null, onPress: null, foregroundRipple: true };
            const intl = tmp(tmp2[11]).intl;
            obj[0] = intl.string(tmp(tmp2[11]).t.OYkgVk);
            obj[1] = function onPress() {

            };
            return closure_1_9(tmp(tmp2[25]).HeaderActionButton, obj);
          }
        }
      });
    }, items2);
    obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = callback4().container;
    obj1 = { navigation: null };
    obj1[0] = navigation;
    obj[1] = callback2(CredentialList, obj1);
    obj[0] = callback2(closure_6, obj);
    return callback2(navigation(8185).Form, obj);
  }
};