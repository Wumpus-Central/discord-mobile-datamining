// discord_app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import FamilyCenterPendingConnectionStore from "../FamilyCenterPendingConnectionStore.tsx";

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
