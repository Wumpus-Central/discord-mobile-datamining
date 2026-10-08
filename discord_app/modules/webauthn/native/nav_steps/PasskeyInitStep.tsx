// discord_app/modules/webauthn/native/nav_steps/PasskeyInitStep.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
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
  let items = [WebAuthnStore];
  const credentials = navigation(504).useStateFromStoresObject(items, () => ({ credentials: credentials.getCredentials() })).credentials;
  const tmp3 = closure_10();
  closure_1 = tmp3;
  let obj = navigation(504);
  [c2, c3] = noop.useState(false);
  if (0 === credentials.length) {
    let obj2 = { style: tmp3.upsellContainer, children: null };
    const items1 = [closure_8(tmp(14865).PasskeysSpotIllustration, { scale: 0.6 }), ];
    let obj3 = { variant: "text-md/normal", style: tmp3.upsellText, children: null };
    let intl2 = tmp(1126).intl;
    obj3.children = intl2.string(tmp(1126).t.FSNwFW);
    items1[1] = closure_8(tmp(5086).Text, obj3);
    obj2.children = items1;
    return closure_9(View, obj2);
  } else {
    const obj4 = { title: null, hasIcons: false, children: null };
    let intl = tmp(1126).intl;
    obj4.title = intl.string(tmp(1126).t["4RIqrQ"]);
    obj4.children = credentials.map((label) => {
      const obj = { label: label.name, trailing: null, subLabel: null };
      const credential = label;
      const obj2 = { style: closure_1.iconButtonGroup, children: null };
      const obj3 = { variant: "secondary", icon: closure_1_8(navigation(_undefined[14]).TrashIcon, { color: closure_1(_undefined[7]).colors.TEXT_FEEDBACK_CRITICAL }), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const intl = navigation(_undefined[11]).intl;
      obj3.accessibilityLabel = intl.string(navigation(_undefined[11]).t.N86XcP);
      obj3.disabled = _undefined;
      obj3.loading = _undefined;
      obj3.onPress = function onPress() {
        return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14867, dependencyMap.paths), "WEBAUTHN_DELETE_SHEET_KEY", { credential, deleting, setDeleting });
      };
      const items = [closure_1_8(navigation(_undefined[13]).IconButton, obj3), ];
      const obj5 = { variant: "secondary", icon: closure_1_8(navigation(_undefined[18]).PencilIcon, {}), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      const intl2 = navigation(_undefined[11]).intl;
      obj5.accessibilityLabel = intl2.string(navigation(_undefined[11]).t.bt75uw);
      obj5.disabled = _undefined;
      obj5.loading = _undefined;
      obj5.onPress = function onPress() {
        navigation.push(UserSettingsSections.WEBAUTHN_EDIT, { credential });
      };
      items[1] = closure_1_8(navigation(_undefined[13]).IconButton, obj5);
      obj2.children = items;
      obj.trailing = closure_1_9(navigation(_undefined[12]).ButtonGroup, obj2);
      let formatResult = null;
      if (null != label.last_used) {
        const intl3 = navigation(_undefined[11]).intl;
        const obj6 = { lastUsed: navigation(_undefined[21]).formatDate(label.last_used) };
        formatResult = intl3.format(navigation(_undefined[11]).t["7JgxF5"], obj6);
        const tmp2Result = navigation(_undefined[21]);
      }
      obj.subLabel = formatResult;
      return closure_1_8(navigation(_undefined[20]).TableRow, obj, label.id);
    });
    return closure_8(tmp(6267).TableRowGroup, obj4);
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8 }, upsellContainer: null, upsellText: null, iconButtonGroup: null, headerAddButton: null };
let obj3 = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8 };
obj2.upsellContainer = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj2.upsellText = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
obj2.iconButtonGroup = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
obj2.headerAddButton = { alignSelf: "center" };
let closure_10 = createStyles.createStyles(obj2);
let closure_11 = { top: 12, bottom: 12, left: 12, right: 12 };
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PasskeyInitStep() {
  const cResult = navigation(hasFetchedCredentials[23]).c(14);
  let obj = navigation(hasFetchedCredentials[23]);
  navigation = navigation(hasFetchedCredentials[24]).useNavigation();
  const tmp5 = closure_10();
  closure_1 = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WebAuthnStore];
    const fn = function c() {
      return { hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj2 = navigation(hasFetchedCredentials[24]);
  hasFetchedCredentials = navigation(hasFetchedCredentials[8]).useStateFromStoresObject(tmp6, tmp7).hasFetchedCredentials;
  if (cResult[2] !== hasFetchedCredentials) {
    class T {
      constructor() {
        if (!hasFetchedCredentials) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[25]);
          webAuthnCredentials = obj.fetchWebAuthnCredentials();
        }
        return;
      }
    }
    const items1 = [hasFetchedCredentials];
    cResult[2] = hasFetchedCredentials;
    cResult[3] = T;
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    class T {
      constructor() {
        if (!hasFetchedCredentials) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[25]);
          webAuthnCredentials = obj.fetchWebAuthnCredentials();
        }
        return;
      }
    }
    tmp10 = cResult[4];
  }
  const effect = noop.useEffect(T, tmp10);
  if (cResult[5] === navigation) {
    class T {
      constructor() {
        if (!hasFetchedCredentials) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[25]);
          webAuthnCredentials = obj.fetchWebAuthnCredentials();
        }
        return;
      }
    }
    const layoutEffect = noop.useLayoutEffect(S, items2);
    if (cResult[9] !== navigation) {
      class T {
        constructor() {
          if (!hasFetchedCredentials) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[25]);
            webAuthnCredentials = obj.fetchWebAuthnCredentials();
          }
          return;
        }
      }
      const obj3 = { navigation };
      const tmp15 = closure_8(CredentialList, obj3);
      cResult[9] = navigation;
      cResult[10] = tmp15;
    } else {
      class T {
        constructor() {
          if (!hasFetchedCredentials) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[25]);
            webAuthnCredentials = obj.fetchWebAuthnCredentials();
          }
          return;
        }
      }
    }
    if (cResult[11] === tmp5.container) {
      class T {
        constructor() {
          if (!hasFetchedCredentials) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[25]);
            webAuthnCredentials = obj.fetchWebAuthnCredentials();
          }
          return;
        }
      }
      return tmp16;
    }
    const obj5 = { children: null };
    const obj6 = { style: tmp5.container, children: tmp13 };
    obj5.children = closure_8(View, obj6);
    const tmp19 = closure_8(tmp(tmp2[28]).Form, obj5);
    cResult[11] = tmp5.container;
    cResult[12] = tmp13;
    cResult[13] = tmp19;
    tmp16 = tmp19;
  }
  class S {
    constructor() {
      obj = {
        headerRight() {
              if (navigation(hasFetchedCredentials[26]).hasWebAuthn) {
                const obj = { text: null, style: null, hitSlop: null, onPress: null, foregroundRipple: true };
                const intl = navigation(hasFetchedCredentials[11]).intl;
                obj.text = intl.string(navigation(hasFetchedCredentials[11]).t.OYkgVk);
                obj.style = headerAddButton.headerAddButton;
                obj.hitSlop = hitSlop;
                obj.onPress = function onPress() { ... };
                return closure_2_8(navigation(hasFetchedCredentials[27]).HeaderActionButton, obj);
              }
            }
      };
      setOptionsResult = closure_0.setOptions(obj);
      return;
    }
  }
  items2 = [navigation, tmp5.headerAddButton];
  cResult[5] = navigation;
  cResult[6] = tmp5.headerAddButton;
  cResult[7] = S;
  cResult[8] = items2;
  const tmpResult = navigation(hasFetchedCredentials[8]);
}) : (function PasskeyInitStep() {
  navigation = navigation(hasFetchedCredentials[24]).useNavigation();
  const tmp2 = closure_10();
  closure_1 = tmp2;
  let obj = navigation(hasFetchedCredentials[24]);
  const items = [WebAuthnStore];
  hasFetchedCredentials = navigation(hasFetchedCredentials[8]).useStateFromStoresObject(items, () => ({ hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials() })).hasFetchedCredentials;
  const items1 = [hasFetchedCredentials];
  const effect = noop.useEffect(() => {
    if (!hasFetchedCredentials) {
      const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
    }
  }, items1);
  const items2 = [navigation, tmp2.headerAddButton];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        if (navigation(hasFetchedCredentials[26]).hasWebAuthn) {
          const obj = { text: null, style: null, hitSlop: null, onPress: null, foregroundRipple: true };
          const intl = navigation(hasFetchedCredentials[11]).intl;
          obj.text = intl.string(navigation(hasFetchedCredentials[11]).t.OYkgVk);
          obj.style = headerAddButton.headerAddButton;
          obj.hitSlop = hitSlop;
          obj.onPress = function onPress() {
            closure_1_0.push(constants.WEBAUTHN_REGISTER);
          };
          return closure_2_8(navigation(hasFetchedCredentials[27]).HeaderActionButton, obj);
        }
      }
    });
  }, items2);
  const obj3 = { children: null };
  const obj2 = navigation(hasFetchedCredentials[8]);
  obj3.children = closure_8(View, { style: tmp2.container, children: closure_8(CredentialList, { navigation }) });
  return closure_8(navigation(hasFetchedCredentials[28]).Form, obj3);
});