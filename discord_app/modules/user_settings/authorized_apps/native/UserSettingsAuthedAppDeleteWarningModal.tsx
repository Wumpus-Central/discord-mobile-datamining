// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx
import jsxProd from "jsxProd";

let c3;
let c4;
let c5;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  let onDelete;
  let scopes;
  application = application.application;
  ({ scopes, onDelete } = application);
  let obj = require(10916) /* isSocialLayerApplication */;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = require(1236) /* getSystemLocale */.intl;
  if (result) {
    obj = { applicationName: null };
    obj[0] = application.name;
    let formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t["paC+US"], obj);
  } else {
    formatToPlainStringResult = intl.string(tmp(1236).t["DT39A+"]);
  }
  const intl2 = tmp(1236).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp(1236).t;
  if (result) {
    obj = { applicationName: null };
    obj[0] = application.name;
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj);
  } else {
    const obj1 = { applicationName: null };
    obj1[0] = application.name;
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj1);
  }
  let tmp9 = importDefault(11869)(application.id);
  if (tmp9) {
    const obj2 = { children: null };
    let tmp8Result = tmp8(10340);
    const intl3 = tmp(1236).intl;
    const obj3 = { applicationName: null };
    obj3[0] = application.name;
    obj2[0] = intl3.format(tmp(1236).t.KRnERi, obj3);
    tmp9 = callback(tmp8Result, obj2);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (result) {
    const obj4 = { look: null, children: null };
    tmp8Result = tmp8(10340);
    obj4[0] = tmp(10340).InfoBoxLooks.WARNING;
    const intl4 = tmp(1236).intl;
    obj4[1] = intl4.string(tmp(1236).t.LY35Zy);
    tmp12 = callback(tmp8Result, obj4);
  }
  items[1] = tmp12;
  const obj5 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: closure_5(closure_4, { children: items }), actions: null };
  const obj6 = { children: null };
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl5 = tmp(1236).intl;
  obj7[1] = intl5.string(require(1236) /* getSystemLocale */.t.xUqheM);
  obj7[2] = onDelete;
  const items1 = [callback(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj7, "confirm"), ];
  const obj8 = { variant: "secondary", text: null };
  const intl6 = tmp(1236).intl;
  obj8[1] = intl6.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  items1[1] = callback(require(4628) /* getAlertModalItemKey */.AlertActionButton, obj8, "cancel");
  obj6[0] = items1;
  obj5[3] = closure_5(closure_4, obj6);
  return callback(require(4628) /* getAlertModalItemKey */.AlertModal, obj5);
};