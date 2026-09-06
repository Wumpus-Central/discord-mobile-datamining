// discord_app/modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx
import util from "../../../../intl/index.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import InfoBox from "InfoBox.tsx";
import isSocialLayerApplication from "../../../applications/isSocialLayerApplication.tsx";
import shouldWarnAuthorizedAppTwoWayDefault from "../shouldWarnAuthorizedAppTwoWay.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import size from "../../../../../_runtime/metro/00002__.js";

const InfoBoxDefault = InfoBox;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let result = size.fileFinishedImporting(
  "modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx",
);

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  application = application.application;
  ({ scopes, onDelete } = application);
  let obj = isSocialLayerApplication;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = util.intl;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(util.t["paC+US"], obj);
  } else {
    formatToPlainStringResult = intl.string(util.t["DT39A+"]);
  }
  const intl2 = util.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = util.t;
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
    let tmp8Result = InfoBoxDefault;
    const intl3 = util.intl;
    const obj3 = { applicationName: application.name };
    obj2.children = intl3.format(util.t.KRnERi, obj3);
    tmp9 = React3(tmp8Result, obj2);
  }
  const items = [tmp9];
  let tmp12 = result;
  if (result) {
    const obj4 = { look: null, children: null };
    tmp8Result = InfoBoxDefault;
    obj4.look = InfoBox.InfoBoxLooks.WARNING;
    const intl4 = util.intl;
    obj4.children = intl4.string(util.t.LY35Zy);
    tmp12 = React3(tmp8Result, obj4);
  }
  items[1] = tmp12;
  const obj5 = {
    title: formatToPlainStringResult,
    content: formatToPlainStringResult1,
    extraContent: hasOwnProperty(React4, { children: items }),
    actions: null,
  };
  const obj6 = { children: null };
  const obj7 = { variant: "destructive", text: null, onPress: null };
  const intl5 = util.intl;
  obj7.text = intl5.string(util.t.xUqheM);
  obj7.onPress = onDelete;
  const items1 = [React3(AlertModal.AlertActionButton, obj7, "confirm")];
  const obj8 = { variant: "secondary", text: null };
  const intl6 = util.intl;
  obj8.text = intl6.string(util.t["ETE/oC"]);
  items1[1] = React3(AlertModal.AlertActionButton, obj8, "cancel");
  obj6.children = items1;
  obj5.actions = hasOwnProperty(React4, obj6);
  return React3(AlertModal.AlertModal, obj5);
}
