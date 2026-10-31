// === Module 16665: PasskeyInitStep ===

// Module 16665 (PasskeyInitStep)
import nativeDefault from "native" /* 575 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6748 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WebAuthnStore from "WebAuthnStore" /* 16568 */;

require = fn;
function CredentialList(navigation) {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  c3 = undefined;
  let items = [WebAuthnStore];
  const credentials = navigation(504).useStateFromStoresObject(items, () => ({ credentials: credentials.getCredentials() })).credentials;
  const tmp3 = closure_11();
  closure_1 = tmp3;
  let obj = navigation(504);
  [c2, c3] = noop.useState(false);
  if (0 === credentials.length) {
    let obj2 = { style: tmp3.upsellContainer, children: null };
    const items1 = [closure_9(tmp(16666).PasskeysSpotIllustration, { scale: 0.6 }), ];
    let obj3 = { variant: "text-md/normal", style: tmp3.upsellText, children: null };
    let intl2 = tmp(1113).intl;
    obj3.children = intl2.string(tmp(1113).t.FSNwFW);
    items1[1] = closure_9(tmp(5624).Text, obj3);
    obj2.children = items1;
    return closure_10(View, obj2);
  } else {
    let obj4 = { title: null, hasIcons: false, children: null };
    let intl = tmp(1113).intl;
    obj4.title = intl.string(tmp(1113).t["4RIqrQ"]);
    obj4.children = credentials.map((label) => {
      let obj = { label: label.name, trailing: null, subLabel: null };
      const credential = label;
      let obj2 = { style: closure_1.iconButtonGroup, children: null };
      let obj3 = { variant: "secondary", icon: closure_1_9(navigation(_undefined[15]).TrashIcon, { color: closure_1(_undefined[8]).colors.TEXT_FEEDBACK_CRITICAL }), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      let intl = navigation(_undefined[12]).intl;
      obj3.accessibilityLabel = intl.string(navigation(_undefined[12]).t.N86XcP);
      obj3.disabled = _undefined;
      obj3.loading = _undefined;
      obj3.onPress = _undefined2(function*() {
        if (setDeleting === 2) {
          setDeleting = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            setDeleting = 2;
            if (0 === deleting) {
              if (arg0 === 1) {
                setDeleting = 3;
                throw value;
              } else if (arg0 === 2) {
                setDeleting = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp5;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                setDeleting(true);
                deleting = 1;
                setDeleting = 1;
                let obj5 = { value: tmp2(paths[16]).isLastRemainingMfaFactor("webauthn"), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              setDeleting = 3;
              throw value;
            } else if (arg0 === 2) {
              setDeleting = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_1 = value;
              setDeleting(false);
              if (closure_128_1) {
                const obj8 = { title: null, body: null, confirmColor: null, confirmText: null, cancelText: null, onConfirm: null };
                const intl = tmp2(paths[12]).intl;
                obj8.title = intl.string(tmp2(paths[12]).t["J/x6ns"]);
                const intl2 = tmp2(paths[12]).intl;
                obj8.body = intl2.string(tmp2(paths[12]).t.IMKkcn);
                obj8.confirmColor = tmp2(paths[18]).ButtonColors.RED;
                const intl3 = tmp2(paths[12]).intl;
                obj8.confirmText = intl3.string(tmp2(paths[12]).t.zYOk0f);
                const intl4 = tmp2(paths[12]).intl;
                obj8.cancelText = intl4.string(tmp2(paths[12]).t["lqK//z"]);
                closure_128_0 = _undefined2(function*() {
                  if (c4 === 2) {
                    c4 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp6 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } else {
                    try {
                      c4 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c4 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c4 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          setDeleting(true);
                          c3 = 1;
                          c1 = 2;
                          c4 = 1;
                          const obj5 = { value: tmp3(tmp24[19]).deleteWebAuthnCredentialWithToast(tmp3), done: false };
                          return obj5;
                        }
                      } else if (1 === tmp7) {
                        c3 = 0;
                        setDeleting(false);
                        throw closure_2;
                      } else if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        setDeleting(false);
                        c4 = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        c3 = 0;
                        setDeleting(false);
                        c4 = 3;
                        return { value: "HermesInternal", done: "HermesInternal" };
                      }
                    } catch (tmp24) {
                      closure_2 = tmp24;
                      if (tmp4 === c3) {
                        c4 = tmp2;
                        throw tmp24;
                      } else {
                        c1 = tmp;
                      }
                    }
                  }
                });
                obj8.onConfirm = function onConfirm() {
                  const self = this;
                  const apply = closure_1_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_2_1(paths[17]).show(obj8);
                let obj3 = closure_2_1(paths[17]);
              } else {
                const obj9 = { credential: closure_129_0, deleting, setDeleting };
                closure_2_1(paths[20]).openLazy(tmp2(paths[22])(paths[21], paths.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj9);
                let obj = closure_2_1(paths[20]);
              }
              setDeleting = 3;
            }
          } catch (tmp45) {
            setDeleting = tmp;
            throw tmp45;
          }
        }
      });
      const items = [closure_1_9(navigation(_undefined[14]).IconButton, obj3), ];
      let obj5 = { variant: "secondary", icon: closure_1_9(navigation(_undefined[23]).PencilIcon, {}), accessibilityLabel: null, size: "sm", disabled: null, loading: null, onPress: null };
      let intl2 = navigation(_undefined[12]).intl;
      obj5.accessibilityLabel = intl2.string(navigation(_undefined[12]).t.bt75uw);
      obj5.disabled = _undefined;
      obj5.loading = _undefined;
      obj5.onPress = function onPress() {
        navigation.push(UserSettingsSections.WEBAUTHN_EDIT, { credential });
      };
      items[1] = closure_1_9(navigation(_undefined[14]).IconButton, obj5);
      obj2.children = items;
      obj.trailing = closure_1_10(navigation(_undefined[13]).ButtonGroup, obj2);
      let formatResult = null;
      if (null != label.last_used) {
        let intl3 = navigation(_undefined[12]).intl;
        const obj6 = { lastUsed: navigation(_undefined[26]).formatDate(label.last_used) };
        formatResult = intl3.format(navigation(_undefined[12]).t["7JgxF5"], obj6);
        const tmp2Result = navigation(_undefined[26]);
      }
      obj.subLabel = formatResult;
      return closure_1_9(navigation(_undefined[25]).TableRow, obj, label.id);
    });
    return closure_9(tmp(7060).TableRowGroup, obj4);
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8 }, upsellContainer: null, upsellText: null, iconButtonGroup: null, headerAddButton: null };
let obj3 = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8 };
obj2.upsellContainer = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj2.upsellText = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
obj2.iconButtonGroup = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
obj2.headerAddButton = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { top: 12, bottom: 12, left: 12, right: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default function PasskeyInitStep() {
  navigation = navigation(hasFetchedCredentials[27]).useNavigation();
  const tmp2 = closure_11();
  closure_1 = tmp2;
  let obj = navigation(hasFetchedCredentials[27]);
  const items = [WebAuthnStore];
  hasFetchedCredentials = navigation(hasFetchedCredentials[9]).useStateFromStoresObject(items, () => ({ hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials() })).hasFetchedCredentials;
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
        if (navigation(hasFetchedCredentials[29]).hasWebAuthn) {
          const obj = { text: null, style: null, hitSlop: null, onPress: null, foregroundRipple: true };
          const intl = navigation(hasFetchedCredentials[12]).intl;
          obj.text = intl.string(navigation(hasFetchedCredentials[12]).t.OYkgVk);
          obj.style = headerAddButton.headerAddButton;
          obj.hitSlop = hitSlop;
          obj.onPress = function onPress() {
            closure_1_0.push(constants.WEBAUTHN_REGISTER);
          };
          return closure_2_9(navigation(hasFetchedCredentials[30]).HeaderActionButton, obj);
        }
      }
    });
  }, items2);
  const obj3 = { children: null };
  const obj2 = navigation(hasFetchedCredentials[9]);
  obj3.children = closure_9(View, { style: tmp2.container, children: closure_9(CredentialList, { navigation }) });
  return closure_9(navigation(hasFetchedCredentials[31]).Form, obj3);
};