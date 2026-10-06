// discord_app/modules/webauthn/native/WebAuthnDeleteActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import WebAuthnActionCreators from "../WebAuthnActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, credential;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { alignItems: "center" }, subtitle: obj2, sheetContent: obj3, sheetBody: obj4 };
obj2 = { textAlign: "center", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (credential) => {
      let Button;
      let content;
      let deleting;
      let intl3;
      let items;
      let obj10;
      let obj7;
      let onPress;
      let setDeleting;
      let sheetBody;
      let sheetContent;
      let subtitle;
      let tmp = credential;
      let obj = credential(onPress[6]);
      const cResult = obj.c(26);
      credential = credential.credential;
      ({ deleting, setDeleting } = credential);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const obj = setDeleting(first[7]);
          obj.hideActionSheet();
        };
        cResult[0] = fn;
        onPress = fn;
      } else {
        onPress = cResult[0];
      }
      if (cResult[1] === credential) {
        let tmp6;
        let tmp7;
        let tmp9;
        let tmp12;
        let tmp15;
        let tmp17;
        if (cResult[2] === setDeleting) {
          tmp6 = cResult[3];
        }
        ({ sheetContent, sheetBody } = tmp4);
        if (cResult[4] !== credential.name) {
          let intl = tmp(tmp2[10]).intl;
          let obj2 = { keyName: credential.name };
          const formatToPlainStringResult = intl.formatToPlainString(tmp(onPress[10]).t.mI3CoL, obj2);
          cResult[4] = credential.name;
          cResult[5] = formatToPlainStringResult;
          tmp7 = formatToPlainStringResult;
        } else {
          tmp7 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { onPress };
          const tmp11 = closure_4(tmp(onPress[15]).ActionSheetCloseButton, obj3);
          cResult[6] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp7) {
          const obj4 = { title: tmp7, trailing: tmp9 };
          const tmp14 = closure_4(tmp(onPress[16]).BottomSheetTitleHeader, obj4);
          cResult[7] = tmp7;
          cResult[8] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[8];
        }
        const _Symbol2 = Symbol;
        ({ content, subtitle } = tmp4);
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(tmp2[10]).intl;
          const stringResult = intl2.string(tmp(onPress[10]).t.IfTbc1);
          cResult[9] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] !== tmp4.subtitle) {
          const obj5 = { variant: "heading-md/normal", style: subtitle, children: tmp15 };
          const tmp19 = closure_4(tmp(onPress[17]).Text, obj5);
          cResult[10] = tmp4.subtitle;
          cResult[11] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] === tmp4.content) {
          let tmp20;
          let tmp24;
          let tmp28;
          if (cResult[13] === tmp17) {
            tmp20 = cResult[14];
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { children: closure_4(Button, obj7) };
            obj7 = { text: intl3.string(tmp(onPress[10]).t["lqK//z"]), onPress, variant: "primary", grow: true };
            Button = tmp(tmp2[18]).Button;
            intl3 = tmp(tmp2[10]).intl;
            const tmp27 = closure_4(View, obj6);
            cResult[15] = tmp27;
            tmp24 = tmp27;
          } else {
            tmp24 = cResult[15];
          }
          const _Symbol4 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[10]).intl;
            const stringResult1 = intl4.string(tmp(onPress[10]).t.zYOk0f);
            cResult[16] = stringResult1;
            tmp28 = stringResult1;
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] === deleting) {
            let tmp30;
            if (cResult[18] === tmp6) {
              tmp30 = cResult[19];
            }
            if (cResult[20] === tmp4.sheetBody) {
              if (cResult[21] === tmp4.sheetContent) {
                if (cResult[22] === tmp20) {
                  if (cResult[23] === tmp30) {
                    let tmp34;
                    if (cResult[24] === tmp12) {
                      tmp34 = cResult[25];
                    }
                    return tmp34;
                  }
                }
              }
            }
            const obj8 = { contentStyles: sheetContent, bodyStyles: sheetBody, children: items };
            items = [tmp12, tmp20, tmp24, tmp30];
            const tmp36 = closure_5(tmp(onPress[19]).BottomSheet, obj8);
            cResult[20] = tmp4.sheetBody;
            cResult[21] = tmp4.sheetContent;
            cResult[22] = tmp20;
            cResult[23] = tmp30;
            cResult[24] = tmp12;
            cResult[25] = tmp36;
            tmp34 = tmp36;
          }
          const obj9 = { children: closure_4(tmp(onPress[18]).Button, obj10) };
          obj10 = {
            text: tmp28,
            onPress: tmp6,
            variant: "destructive",
            disabled: deleting,
            loading: deleting,
            grow: true,
          };
          const tmp33 = closure_4(View, obj9);
          cResult[17] = deleting;
          cResult[18] = tmp6;
          cResult[19] = tmp33;
          tmp30 = tmp33;
        }
        const obj11 = { style: content, children: tmp17 };
        const tmp23 = closure_4(View, obj11);
        cResult[12] = tmp4.content;
        cResult[13] = tmp17;
        cResult[14] = tmp23;
        tmp20 = tmp23;
      }
      const fn2 = function y() {
        const tmp = setDeleting(true);
        first();
        let obj = WebAuthnActionCreators;
        const result = obj.deleteWebAuthnCredential(credential);
        const nextPromise = result.then(() => {
          let intl;
          const obj = {
            key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
            content: intl.string(credential(onPress[10]).t.ZnkeXs),
            icon: setDeleting(onPress[11]),
            IconComponent: credential(onPress[12]).CircleCheckIcon,
            iconColor: "status-positive",
          };
          const open = setDeleting(onPress[9]).open;
          setDeleting(onPress[9]);
          intl = credential(onPress[10]).intl;
          open(obj);
        });
        const catchPromise = nextPromise.catch((error) => {
          const obj = setDeleting(onPress[9]);
          const obj2 = {
            key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY",
            content: error.message,
            icon: setDeleting(onPress[13]),
            IconComponent: credential(onPress[14]).WarningIcon,
            iconColor: "icon-feedback-critical",
          };
          obj.open(obj2);
        });
        catchPromise.finally(() => {
          setDeleting(false);
        });
      };
      cResult[1] = credential;
      cResult[2] = setDeleting;
      cResult[3] = fn2;
      tmp6 = fn2;
    }
  : (credential) => {
      let Button;
      let Button2;
      let Text;
      let deleting;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj3;
      let obj5;
      let obj7;
      let obj9;
      credential = credential.credential;
      ({ deleting, setDeleting: importDefault } = credential);
      function handleClose() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
      let tmp = closure_6();
      let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: items };
      BottomSheet = credential(6652).BottomSheet;
      let obj2 = {
        title: intl.formatToPlainString(credential(1126).t.mI3CoL, obj3),
        trailing: closure_4(credential(6703).ActionSheetCloseButton, { onPress: handleClose }),
      };
      const BottomSheetTitleHeader = credential(6651).BottomSheetTitleHeader;
      intl = credential(1126).intl;
      obj3 = { keyName: credential.name };
      items = [closure_4(BottomSheetTitleHeader, obj2), , ,];
      const obj4 = { style: tmp.content, children: closure_4(Text, obj5) };
      obj5 = { variant: "heading-md/normal", style: tmp.subtitle, children: intl2.string(credential(1126).t.IfTbc1) };
      Text = credential(4892).Text;
      intl2 = credential(1126).intl;
      items[1] = closure_4(View, obj4);
      const obj6 = { children: closure_4(Button, obj7) };
      obj7 = { text: intl3.string(credential(1126).t["lqK//z"]), onPress: handleClose, variant: "primary", grow: true };
      Button = credential(5601).Button;
      intl3 = credential(1126).intl;
      items[2] = closure_4(View, obj6);
      const obj8 = { children: closure_4(Button2, obj9) };
      obj9 = {
        text: intl4.string(credential(1126).t.zYOk0f),
        onPress() {
          const tmp = importDefault(true);
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let obj2 = WebAuthnActionCreators;
          const result = obj2.deleteWebAuthnCredential(credential);
          const nextPromise = result.then(() => {
            let intl;
            const obj = {
              key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
              content: intl.string(credential(closure_1_2[10]).t.ZnkeXs),
              icon: closure_1_1(closure_1_2[11]),
              IconComponent: credential(closure_1_2[12]).CircleCheckIcon,
              iconColor: "status-positive",
            };
            const open = closure_1_1(closure_1_2[9]).open;
            closure_1_1(closure_1_2[9]);
            intl = credential(closure_1_2[10]).intl;
            open(obj);
          });
          const catchPromise = nextPromise.catch((error) => {
            const obj = closure_1_1(closure_1_2[9]);
            const obj2 = {
              key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY",
              content: error.message,
              icon: closure_1_1(closure_1_2[13]),
              IconComponent: credential(closure_1_2[14]).WarningIcon,
              iconColor: "icon-feedback-critical",
            };
            obj.open(obj2);
          });
          catchPromise.finally(() => {
            closure_1_1(false);
          });
        },
        variant: "destructive",
        disabled: deleting,
        loading: deleting,
        grow: true,
      };
      Button2 = credential(5601).Button;
      intl4 = credential(1126).intl;
      items[3] = closure_4(View, obj8);
      return closure_5(BottomSheet, obj);
    };
let result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default tmp5;
