// discord_app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import FamilyCenterPendingConnectionStore from "../FamilyCenterPendingConnectionStore.tsx";

require = fn;
const FamilyCenterConstants = fn(6953);
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
    const obj2 = { action: ScanQRCode.ScanQRCode, selected_teen_id: match[1], source: FamilyCenterQRCodeScan };
    AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
    FamilyCenterActionCreatorsDefault.setPendingConnection(match[1], match[2]);
    const obj5 = { userId: match[1], linkCode: match[2] };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11379, dependencyMap.paths), obj5, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  const pendingConnection = FamilyCenterPendingConnectionStore.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    ModalActionCreatorsDefault.popWithKey(c7);
    ({ teenId: obj3.userId, linkCode: obj3.linkCode } = pendingConnection);
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(11379, dependencyMap.paths),
      { userId: null, linkCode: null },
      c7,
    );
    flag = true;
    const obj4 = { userId: null, linkCode: null };
  }
  return flag;
};
