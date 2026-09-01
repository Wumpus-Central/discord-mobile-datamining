// discord_app/modules/webauthn/native/WebAuthnDeleteActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../_runtime/14324_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: { alignItems: "center" }, subtitle: null, sheetContent: null, sheetBody: null };
createCacheKey = { textAlign: "center", marginTop: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = { gap: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { gap: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/webauthn/native/WebAuthnDeleteActionSheet.tsx");

export default function WebAuthnDeleteActionSheet(credential) {
  credential = credential.credential;
  ({ deleting, setDeleting: importDefault } = credential);
  function handleClose() {
    callback(table[5]).hideActionSheet();
  }
  const tmp = callback3();
  let obj = { contentStyles: tmp.sheetContent, bodyStyles: tmp.sheetBody, children: null };
  obj = { title: null, trailing: null };
  let intl = credential(1236).intl;
  obj = { keyName: credential.name };
  obj[0] = intl.formatToPlainString(credential(1236).t.mI3CoL, obj);
  obj[1] = callback(credential(5990).ActionSheetCloseButton, { onPress: handleClose });
  const items = [callback(credential(5621).BottomSheetTitleHeader, obj), , ,];
  obj1 = { style: tmp.content, children: null };
  const items1 = [callback(closure_3, { source: registerAssetDefault })];
  const obj3 = { variant: "heading-md/normal", style: tmp.subtitle, children: null };
  const intl2 = credential(1236).intl;
  obj3[2] = intl2.string(credential(1236).t.IfTbc1);
  items1[1] = callback(credential(4474).Text, obj3);
  obj1[1] = items1;
  items[1] = callback2(closure_4, obj1);
  const obj4 = { children: null };
  const obj5 = { text: null, onPress: null, variant: "primary", grow: true };
  const intl3 = credential(1236).intl;
  obj5[0] = intl3.string(credential(1236).t["lqK//z"]);
  obj5[1] = handleClose;
  obj4[0] = callback(credential(4928).Button, obj5);
  items[2] = callback(closure_4, obj4);
  const obj6 = { children: null };
  const obj7 = { text: null, onPress: null, variant: "destructive", disabled: null, loading: null, grow: true };
  const intl4 = credential(1236).intl;
  obj7[0] = intl4.string(credential(1236).t.zYOk0f);
  obj7[1] = function onPress() {
    callback(true);
    closure_1_1(closure_1_2[5]).hideActionSheet();
    let obj = closure_1_1(closure_1_2[5]);
    const result = credential(closure_1_2[13]).deleteWebAuthnCredential(credential);
    const obj2 = credential(closure_1_2[13]);
    const nextPromise = result.then(() => {
      let obj = callback2(4194);
      obj = {
        key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
        content: null,
        icon: null,
        IconComponent: null,
        iconColor: "status-positive",
      };
      const intl = callback(1236).intl;
      obj[1] = intl.string(callback(1236).t.ZnkeXs);
      obj[2] = callback2(10445);
      obj[3] = callback(4438).CircleCheckIcon;
      obj.open(obj);
    });
    result
      .then(() => {
        let obj = callback2(4194);
        obj = {
          key: "WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY",
          content: null,
          icon: null,
          IconComponent: null,
          iconColor: "status-positive",
        };
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.ZnkeXs);
        obj[2] = callback2(10445);
        obj[3] = callback(4438).CircleCheckIcon;
        obj.open(obj);
      })
      .catch((content) => {
        let obj = callback2(4194);
        obj = {
          key: "WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY",
          content: content.message,
          icon: callback2(9594),
          IconComponent: callback(8736).WarningIcon,
          iconColor: "icon-feedback-critical",
        };
        obj.open(obj);
      })
      .finally(() => {
        callback2(false);
      });
  };
  obj7[3] = deleting;
  obj7[4] = deleting;
  obj6[0] = callback(credential(4928).Button, obj7);
  items[3] = callback(closure_4, obj6);
  obj[2] = items;
  return callback2(credential(5622).BottomSheet, obj);
}
