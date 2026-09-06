// === Module 12597: UserSettingsAuthedAppDeleteWarningModal ===

// Module 12597 (UserSettingsAuthedAppDeleteWarningModal)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4910 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 11532 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 12598 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  application = application.application;
  ({ scopes, onDelete } = application);
  let obj = isSocialLayerApplication;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = util.intl;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t["paC+US"], obj);
  } else {
    formatToPlainStringResult = intl.string(tmp(1114).t["DT39A+"]);
  }
  const intl2 = tmp(1114).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp(1114).t;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj);
  } else {
    const obj1 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj1);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj2 = { children: null };
    let tmp8Result = tmp8(9459);
    const intl3 = tmp(1114).intl;
    const obj3 = { applicationName: application.name };
    obj2.children = intl3.format(tmp(1114).t.KRnERi, obj3);
    tmp9 = React3(tmp8Result, obj2);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (result) {
    const obj4 = { look: null, children: null };
    tmp8Result = tmp8(9459);
    obj4.look = tmp(9459).InfoBoxLooks.WARNING;
    const intl4 = tmp(1114).intl;
    obj4.children = intl4.string(tmp(1114).t.LY35Zy);
    tmp12 = React3(tmp8Result, obj4);
  }
  items[1] = tmp12;
  const obj5 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React4, { children: items }), actions: null };
  const obj6 = { children: null };
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl5 = tmp(1114).intl;
  obj7.text = intl5.string(util.t.xUqheM);
  obj7.onPress = onDelete;
  const items1 = [React3(AlertModal.AlertActionButton, obj7, "confirm"), ];
  const obj8 = { variant: "secondary", text: null };
  const intl6 = tmp(1114).intl;
  obj8.text = intl6.string(util.t["ETE/oC"]);
  items1[1] = React3(AlertModal.AlertActionButton, obj8, "cancel");
  obj6.children = items1;
  obj5.actions = hasOwnProperty(React4, obj6);
  return React3(AlertModal.AlertModal, obj5);
};