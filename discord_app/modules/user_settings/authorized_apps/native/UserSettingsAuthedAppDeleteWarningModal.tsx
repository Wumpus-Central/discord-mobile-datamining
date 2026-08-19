// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getAlertModalItemKey from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import InfoBox from "InfoBox.tsx";
import InfoBoxDefault from "InfoBox.tsx";
import isSocialLayerApplication from "../../../applications/isSocialLayerApplication.tsx";
import isAuthorizedAppTwoWayDefault from "../shouldWarnAuthorizedAppTwoWay.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let result = obj132.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  application = application.application;
  ({ scopes, onDelete } = application);
  let obj = isSocialLayerApplication;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = getSystemLocale.intl;
  if (result) {
    obj = { applicationName: null };
    obj[0] = application.name;
    let formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["paC+US"], obj);
  } else {
    formatToPlainStringResult = intl.string(getSystemLocale.t["DT39A+"]);
  }
  const intl2 = getSystemLocale.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = getSystemLocale.t;
  if (result) {
    obj = { applicationName: null };
    obj[0] = application.name;
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj);
  } else {
    obj1 = { applicationName: null };
    obj1[0] = application.name;
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj1);
  }
  let tmp9 = isAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj2 = { children: null };
    let tmp8Result = InfoBoxDefault;
    const intl3 = getSystemLocale.intl;
    const obj3 = { applicationName: null };
    obj3[0] = application.name;
    obj2[0] = intl3.format(getSystemLocale.t.KRnERi, obj3);
    tmp9 = callback(tmp8Result, obj2);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (result) {
    const obj4 = { look: null, children: null };
    tmp8Result = InfoBoxDefault;
    obj4[0] = InfoBox.InfoBoxLooks.WARNING;
    const intl4 = getSystemLocale.intl;
    obj4[1] = intl4.string(getSystemLocale.t.LY35Zy);
    tmp12 = callback(tmp8Result, obj4);
  }
  items[1] = tmp12;
  const obj5 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: callback(closure_4, { children: items }), actions: null };
  const obj6 = { children: null };
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl5 = getSystemLocale.intl;
  obj7[1] = intl5.string(getSystemLocale.t.xUqheM);
  obj7[2] = onDelete;
  const items1 = [callback(getAlertModalItemKey.AlertActionButton, obj7, "confirm"), ];
  const obj8 = { variant: "secondary", text: null };
  const intl6 = getSystemLocale.intl;
  obj8[1] = intl6.string(getSystemLocale.t["ETE/oC"]);
  items1[1] = callback(getAlertModalItemKey.AlertActionButton, obj8, "cancel");
  obj6[0] = items1;
  obj5[3] = callback(closure_4, obj6);
  return callback(getAlertModalItemKey.AlertModal, obj5);
};