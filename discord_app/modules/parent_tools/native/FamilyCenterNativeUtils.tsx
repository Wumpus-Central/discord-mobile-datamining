// discord_app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import FamilyCenterPendingConnectionStore from "../FamilyCenterPendingConnectionStore.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ FAMILY_CENTER_LINK_REQUEST_REGEX: closure_4, FamilyCenterAction: hasOwnProperty } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let c7 = "family-center-request-modal";
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(pathname, FamilyCenterQRCodeScan) {
  const match = pathname.match(React3);
  if (null === match) {
    return null;
  } else {
    const obj2 = { action: hasOwnProperty.ScanQRCode, selected_teen_id: match[1], source: FamilyCenterQRCodeScan };
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
    const obj3 = FamilyCenterActionCreatorsDefault;
    obj3.setPendingConnection(match[1], match[2]);
    const obj5 = { userId: match[1], linkCode: match[2] };
    const obj4 = ModalActionCreatorsDefault;
    obj4.pushLazy(asyncRequire(11539, dependencyMap.paths), obj5, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  const pendingConnection = FamilyCenterPendingConnectionStore.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(c7);
    const obj4 = { userId: null, linkCode: null };
    ({ teenId: obj3.userId, linkCode: obj3.linkCode } = pendingConnection);
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(11539, dependencyMap.paths), obj4, c7);
    flag = true;
  }
  return flag;
};
