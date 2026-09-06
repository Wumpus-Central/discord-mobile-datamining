// === Module 11913: FamilyCenterNativeUtils ===

// Module 11913 (FamilyCenterNativeUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7539 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 4774 */;

require = fn;
const FamilyCenterConstants = fn(7538);
({ FAMILY_CENTER_LINK_REQUEST_REGEX: closure_4, FamilyCenterAction: hasOwnProperty } = FamilyCenterConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
let c7 = "family-center-request-modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(pathname, FamilyCenterQRCodeScan) {
  const match = pathname.match(React4);
  if (null === match) {
    return null;
  } else {
    let obj = { action: ScanQRCode.ScanQRCode, selected_teen_id: match[1], source: FamilyCenterQRCodeScan };
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
    FamilyCenterActionCreatorsDefault.setPendingConnection(match[1], match[2]);
    obj = { userId: match[1], linkCode: match[2] };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11914, dependencyMap.paths), obj, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  const pendingConnection = FamilyCenterPendingConnectionStore.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = ModalActionCreatorsDefault;
    obj.popWithKey(c7);
    obj = { userId: null, linkCode: null };
    ({ teenId: obj3.userId, linkCode: obj3.linkCode } = pendingConnection);
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11914, dependencyMap.paths), obj, c7);
    flag = true;
  }
  return flag;
};