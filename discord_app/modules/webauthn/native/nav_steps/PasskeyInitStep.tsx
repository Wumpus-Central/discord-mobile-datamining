// discord_app/modules/webauthn/native/nav_steps/PasskeyInitStep.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import WebAuthnActionCreators from "../../WebAuthnActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import WebAuthnStore from "../../WebAuthnStore.tsx";

require = fn;
function CredentialList(navigation) {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let obj = navigation(504);
  let items = [WebAuthnStore];
  const credentials = obj.useStateFromStoresObject(items, () => ({
    credentials: credentials.getCredentials(),
  })).credentials;
  const tmp3 = closure_10();
  closure_1 = tmp3;
  [c2, c3] = _slicedToArray(noop.useState(false), 2);
  if (0 === credentials.length) {
    obj = { style: tmp3.upsellContainer, children: null };
    const items1 = [closure_8(tmp(5692).PasskeysSpotIllustration, { scale: 0.6 })];
    obj = { variant: "text-md/normal", style: tmp3.upsellText, children: null };
    let intl2 = tmp(1114).intl;
    obj.children = intl2.string(tmp(1114).t.FSNwFW);
    items1[1] = closure_8(tmp(4556).Text, obj);
    obj.children = items1;
    return closure_9(View, obj);
  } else {
    const obj1 = { title: null, hasIcons: false, children: null };
    let intl = tmp(1114).intl;
    obj1.title = intl.string(tmp(1114).t["4RIqrQ"]);
    obj1.children = credentials.map((label) => {
      let obj = { label: label.name, trailing: null, subLabel: null };
      const credential = label;
      obj = { style: closure_1.iconButtonGroup, children: null };
      obj = {
        variant: "secondary",
        icon: closure_1_8(navigation(_undefined[14]).TrashIcon, {
          color: closure_1(_undefined[7]).colors.TEXT_FEEDBACK_CRITICAL,
        }),
        accessibilityLabel: null,
        size: "sm",
        disabled: null,
        loading: null,
        onPress: null,
      };
      const intl = navigation(_undefined[11]).intl;
      obj.accessibilityLabel = intl.string(navigation(_undefined[11]).t.N86XcP);
      obj.disabled = _undefined;
      obj.loading = _undefined;
      obj.onPress = function onPress() {
        const obj = { credential, deleting, setDeleting };
        return obj.openLazy(asyncRequireImpl(14669, dependencyMap.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj);
      };
      const items = [closure_1_8(navigation(_undefined[13]).IconButton, obj)];
      const obj2 = {
        variant: "secondary",
        icon: closure_1_8(navigation(_undefined[18]).PencilIcon, {}),
        accessibilityLabel: null,
        size: "sm",
        disabled: null,
        loading: null,
        onPress: null,
      };
      const intl2 = navigation(_undefined[11]).intl;
      obj2.accessibilityLabel = intl2.string(navigation(_undefined[11]).t.bt75uw);
      obj2.disabled = _undefined;
      obj2.loading = _undefined;
      obj2.onPress = function onPress() {
        navigation.push(WebAuthnScreens.EDIT, { credential });
      };
      items[1] = closure_1_8(navigation(_undefined[13]).IconButton, obj2);
      obj.children = items;
      obj.trailing = closure_1_9(navigation(_undefined[12]).ButtonGroup, obj);
      let formatResult = null;
      if (null != label.last_used) {
        const intl3 = tmp2(tmp3[11]).intl;
        const obj3 = { lastUsed: tmp2(tmp3[21]).formatDate(label.last_used) };
        formatResult = intl3.format(tmp2(tmp3[11]).t["7JgxF5"], obj3);
        const tmp2Result = tmp2(tmp3[21]);
      }
      obj.subLabel = formatResult;
      return closure_1_8(navigation(_undefined[20]).TableRow, obj, label.id);
    });
    return closure_8(tmp(5687).TableRowGroup, obj1);
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}
const View = fn(17).View;
const WebAuthnScreens = fn(14657).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  upsellContainer: null,
  upsellText: null,
  iconButtonGroup: null,
  headerAddButton: null,
};
createStyles = {
  flex: 1,
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between",
  marginLeft: nativeDefault.space.PX_16,
  marginRight: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_8,
};
createStyles.container = createStyles;
createStyles.upsellContainer = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
let obj1 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.upsellText = {
  color: nativeDefault.colors.TEXT_SUBTLE,
  marginTop: nativeDefault.space.PX_16,
  textAlign: "center",
};
let obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
createStyles.iconButtonGroup = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
createStyles.headerAddButton = { alignSelf: "center" };
let closure_10 = createStyles.createStyles(createStyles);
let closure_11 = { top: 12, bottom: 12, left: 12, right: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let navigation;
    let hasFetchedCredentials;
    let obj = navigation(hasFetchedCredentials[22]);
    navigation = obj.useNavigation();
    const tmp5 = closure_10();
    closure_1 = tmp5;
    let obj1 = navigation(hasFetchedCredentials[8]);
    const items = [WebAuthnStore];
    hasFetchedCredentials = obj1.useStateFromStoresObject(items, () => ({
      hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials(),
    })).hasFetchedCredentials;
    const items1 = [hasFetchedCredentials];
    const effect = noop.useEffect(() => {
      if (!hasFetchedCredentials) {
        const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
      }
    }, items1);
    const items2 = [navigation, tmp5.headerAddButton];
    const layoutEffect = noop.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight() {
          if (navigation(hasFetchedCredentials[24]).hasWebAuthn) {
            const obj = { text: null, style: null, hitSlop: null, onPress: null, foregroundRipple: true };
            const intl = tmp(tmp2[11]).intl;
            obj.text = intl.string(tmp(tmp2[11]).t.OYkgVk);
            obj.style = headerAddButton.headerAddButton;
            obj.hitSlop = hitSlop;
            obj.onPress = function onPress() {
              closure_1_0.push(constants.REGISTER);
            };
            return closure_2_8(tmp(tmp2[25]).HeaderActionButton, obj);
          }
        },
      });
    }, items2);
    obj = { children: null };
    obj = { style: tmp5.container, children: null };
    obj1 = { navigation };
    obj.children = closure_8(CredentialList, obj1);
    obj.children = closure_8(View, obj);
    return closure_8(navigation(hasFetchedCredentials[26]).Form, obj);
  }
}
