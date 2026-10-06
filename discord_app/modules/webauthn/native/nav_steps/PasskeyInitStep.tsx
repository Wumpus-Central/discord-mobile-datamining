// discord_app/modules/webauthn/native/nav_steps/PasskeyInitStep.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import WebAuthnActionCreators from "../../WebAuthnActionCreators.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import WebAuthnStore from "../../WebAuthnStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, setOptionsResult;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function CredentialList(navigation) {
  let _undefined;
  let c2;
  let c3;
  let intl;
  let intl2;
  let items1;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let obj = navigation(504);
  let items = [WebAuthnStore];
  const credentials = obj.useStateFromStoresObject(items, () => {
    const obj = { credentials: credentials.getCredentials() };
    return obj;
  }).credentials;
  const tmp3 = closure_10();
  let closure_1 = tmp3;
  [c2, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (0 === credentials.length) {
    let obj2 = { style: tmp3.upsellContainer, children: items1 };
    items1 = [closure_8(navigation(14604).PasskeysSpotIllustration, { scale: 0.6 })];
    let obj3 = { variant: "text-md/normal", style: tmp3.upsellText, children: intl2.string(navigation(1126).t.FSNwFW) };
    const Text = tmp(4892).Text;
    intl2 = tmp(1126).intl;
    items1[1] = closure_8(Text, obj3);
    return closure_9(View, obj2);
  } else {
    let obj4 = {
      title: intl.string(navigation(1126).t["4RIqrQ"]),
      hasIcons: false,
      children: credentials.map((label) => {
        let ButtonGroup;
        let TrashIcon;
        let deleting;
        let formatResult;
        let intl;
        let intl2;
        let items;
        let obj2;
        let obj4;
        let setDeleting;
        let tmp2Result;
        let obj = { label: label.name, trailing: closure_1_9(ButtonGroup, obj2), subLabel: formatResult };
        const credential = label;
        const TableRow = navigation(loading[20]).TableRow;
        obj2 = { style: closure_1.iconButtonGroup, children: items };
        ButtonGroup = navigation(loading[12]).ButtonGroup;
        const obj3 = {
          variant: "secondary",
          icon: closure_1_8(TrashIcon, obj4),
          accessibilityLabel: intl.string(navigation(loading[11]).t.N86XcP),
          size: "sm",
          disabled: loading,
          loading,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { credential, deleting, setDeleting };
            return obj.openLazy(asyncRequire(14606, dependencyMap.paths), "WEBAUTHN_DELETE_SHEET_KEY", obj2);
          },
        };
        const IconButton = navigation(loading[13]).IconButton;
        obj4 = { color: closure_1(loading[7]).colors.TEXT_FEEDBACK_CRITICAL };
        TrashIcon = navigation(loading[14]).TrashIcon;
        intl = navigation(loading[11]).intl;
        items = [closure_1_8(IconButton, obj3)];
        const obj5 = {
          variant: "secondary",
          icon: closure_1_8(navigation(loading[18]).PencilIcon, {}),
          accessibilityLabel: intl2.string(navigation(loading[11]).t.bt75uw),
          size: "sm",
          disabled: loading,
          loading,
          onPress() {
            const obj = { credential };
            navigation.push(UserSettingsSections.WEBAUTHN_EDIT, obj);
          },
        };
        const IconButton2 = navigation(loading[13]).IconButton;
        intl2 = navigation(loading[11]).intl;
        items[1] = closure_1_8(IconButton2, obj5);
        formatResult = null;
        if (null != label.last_used) {
          const intl3 = navigation(loading[11]).intl;
          const format = intl3.format;
          const obj6 = { lastUsed: tmp2Result.formatDate(label.last_used) };
          const v7JgxF5 = navigation(loading[11]).t["7JgxF5"];
          tmp2Result = navigation(loading[21]);
          formatResult = format(v7JgxF5, obj6);
        }
        return closure_1_8(TableRow, obj, label.id);
      }),
    };
    const TableRowGroup = tmp(6081).TableRowGroup;
    intl = tmp(1126).intl;
    return closure_8(TableRowGroup, obj4);
  }
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  upsellContainer: obj3,
  upsellText: obj4,
  iconButtonGroup: obj5,
  headerAddButton: { alignSelf: "center" },
};
obj2 = {
  flex: 1,
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between",
  marginLeft: nativeDefault.space.PX_16,
  marginRight: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: nativeDefault.space.PX_16, textAlign: "center" };
obj5 = { flexDirection: "row", paddingVertical: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let closure_11 = { top: 12, bottom: 12, left: 12, right: 12 };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let hasFetchedCredentials;
      let hitSlop;
      let items2;
      let obj6;
      let tmp10;
      let tmp16;
      let tmp6;
      let tmp7;
      let obj = navigation(hasFetchedCredentials[23]);
      const cResult = obj.c(14);
      const obj2 = navigation(hasFetchedCredentials[24]);
      navigation = obj2.useNavigation();
      const tmp5 = closure_10();
      let closure_1 = tmp5;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [WebAuthnStore];
        const fn = function c() {
          const obj = { hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials() };
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = navigation(hasFetchedCredentials[8]);
      hasFetchedCredentials = tmpResult.useStateFromStoresObject(tmp6, tmp7).hasFetchedCredentials;
      if (cResult[2] !== hasFetchedCredentials) {
        class T {
          constructor() {
            if (!hasFetchedCredentials) {
              const obj = WebAuthnActionCreators;
              const webAuthnCredentials = obj.fetchWebAuthnCredentials();
            }
          }
        }
        const items1 = [hasFetchedCredentials];
        cResult[2] = hasFetchedCredentials;
        cResult[3] = T;
        cResult[4] = items1;
        tmp10 = items1;
      } else {
        class T {
          constructor() {
            if (!hasFetchedCredentials) {
              const obj = WebAuthnActionCreators;
              const webAuthnCredentials = obj.fetchWebAuthnCredentials();
            }
          }
        }
        tmp10 = cResult[4];
      }
      const effect = react.useEffect(T, tmp10);
      if (cResult[5] === navigation) {
        class T {
          constructor() {
            if (!hasFetchedCredentials) {
              const obj = WebAuthnActionCreators;
              const webAuthnCredentials = obj.fetchWebAuthnCredentials();
            }
          }
        }
        const layoutEffect = react.useLayoutEffect(S, items2);
        if (cResult[9] !== navigation) {
          class T {
            constructor() {
              if (!hasFetchedCredentials) {
                const obj = WebAuthnActionCreators;
                const webAuthnCredentials = obj.fetchWebAuthnCredentials();
              }
            }
          }
          const obj3 = { navigation };
          cResult[9] = navigation;
          cResult[10] = closure_8(CredentialList, obj3);
          const tmp15 = closure_8(CredentialList, obj3);
        } else {
          class T {
            constructor() {
              if (!hasFetchedCredentials) {
                const obj = WebAuthnActionCreators;
                const webAuthnCredentials = obj.fetchWebAuthnCredentials();
              }
            }
          }
        }
        if (cResult[11] === tmp5.container) {
          class T {
            constructor() {
              if (!hasFetchedCredentials) {
                const obj = WebAuthnActionCreators;
                const webAuthnCredentials = obj.fetchWebAuthnCredentials();
              }
            }
          }
          return tmp16;
        }
        const obj5 = { children: closure_8(View, obj6) };
        obj6 = { style: tmp5.container, children: tmp13 };
        const Form = tmp(tmp2[28]).Form;
        const tmp19 = closure_8(Form, obj5);
        cResult[11] = tmp5.container;
        cResult[12] = tmp13;
        cResult[13] = tmp19;
        tmp16 = tmp19;
      }
      class S {
        constructor() {
          obj = {
            headerRight() {
              let intl;
              if (navigation(hasFetchedCredentials[26]).hasWebAuthn) {
                const obj = {
                  text: intl.string(navigation(hasFetchedCredentials[11]).t.OYkgVk),
                  style: headerAddButton.headerAddButton,
                  hitSlop,
                  onPress() {
                    /* body not rendered: F153238 */
                  },
                  foregroundRipple: true,
                };
                const HeaderActionButton = navigation(hasFetchedCredentials[27]).HeaderActionButton;
                intl = navigation(hasFetchedCredentials[11]).intl;
                return closure_2_8(HeaderActionButton, obj);
              }
            },
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
    }
  : () => {
      let hasFetchedCredentials;
      let hitSlop;
      let obj4;
      let obj = navigation(hasFetchedCredentials[24]);
      navigation = obj.useNavigation();
      const tmp2 = closure_10();
      let closure_1 = tmp2;
      const items = [WebAuthnStore];
      const obj2 = navigation(hasFetchedCredentials[8]);
      hasFetchedCredentials = obj2.useStateFromStoresObject(items, () => {
        const obj = { hasFetchedCredentials: WebAuthnStore.hasFetchedCredentials() };
        return obj;
      }).hasFetchedCredentials;
      const items1 = [hasFetchedCredentials];
      const effect = react.useEffect(() => {
        if (!hasFetchedCredentials) {
          const obj = WebAuthnActionCreators;
          const webAuthnCredentials = obj.fetchWebAuthnCredentials();
        }
      }, items1);
      const items2 = [navigation, tmp2.headerAddButton];
      const layoutEffect = react.useLayoutEffect(() => {
        let headerAddButton;
        let obj = {
          headerRight() {
            let intl;
            if (navigation(hasFetchedCredentials[26]).hasWebAuthn) {
              const obj = {
                text: intl.string(navigation(hasFetchedCredentials[11]).t.OYkgVk),
                style: headerAddButton.headerAddButton,
                hitSlop,
                onPress() {
                  closure_1_0.push(constants.WEBAUTHN_REGISTER);
                },
                foregroundRipple: true,
              };
              const HeaderActionButton = navigation(hasFetchedCredentials[27]).HeaderActionButton;
              intl = navigation(hasFetchedCredentials[11]).intl;
              return closure_2_8(HeaderActionButton, obj);
            }
          },
        };
        navigation.setOptions(obj);
      }, items2);
      const obj3 = { children: closure_8(View, obj4) };
      obj4 = { style: tmp2.container, children: closure_8(CredentialList, { navigation }) };
      const Form = navigation(hasFetchedCredentials[28]).Form;
      return closure_8(Form, obj3);
    };
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyInitStep.tsx");

export default tmp4;
