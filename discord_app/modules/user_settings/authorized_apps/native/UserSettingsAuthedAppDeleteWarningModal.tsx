// === Module 12732: UserSettingsAuthedAppDeleteWarningModal ===

// Module 12732 (UserSettingsAuthedAppDeleteWarningModal)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 4989 */;
import InfoBox from "InfoBox" /* 9591 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 11666 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 12733 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

const InfoBoxDefault = InfoBox;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  application = application.application;
  ({ scopes, onDelete } = application);
  const result = isSocialLayerApplication.isSocialLayerSDKAuthorization(application, scopes);
  const intl = util.intl;
  if (result) {
    const obj2 = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(util.t["paC+US"], obj2);
  } else {
    formatToPlainStringResult = intl.string(util.t["DT39A+"]);
  }
  const intl2 = util.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = util.t;
  if (result) {
    const obj3 = { applicationName: application.name };
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
  } else {
    const obj4 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj5 = { children: null };
    const intl3 = util.intl;
    const obj6 = { applicationName: application.name };
    obj5.children = intl3.format(util.t.KRnERi, obj6);
    tmp9 = React3(InfoBoxDefault, obj5);
    const tmp8Result = InfoBoxDefault;
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (result) {
    const obj7 = { look: InfoBox.InfoBoxLooks.WARNING, children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(util.t.LY35Zy);
    tmp12 = React3(InfoBoxDefault, obj7);
    const tmp8Result2 = InfoBoxDefault;
  }
  items[1] = tmp12;
  const obj8 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React4, { children: items }), actions: null };
  const obj9 = { children: null };
  const obj10 = { variant: "destructive", text: null, onPress: null };
  const intl5 = util.intl;
  obj10.text = intl5.string(util.t.xUqheM);
  obj10.onPress = onDelete;
  const items1 = [React3(AlertModal.AlertActionButton, obj10, "confirm"), ];
  const obj11 = { variant: "secondary", text: null };
  const intl6 = util.intl;
  obj11.text = intl6.string(util.t["ETE/oC"]);
  items1[1] = React3(AlertModal.AlertActionButton, obj11, "cancel");
  obj9.children = items1;
  obj8.actions = hasOwnProperty(React4, obj9);
  return React3(AlertModal.AlertModal, obj8);
};