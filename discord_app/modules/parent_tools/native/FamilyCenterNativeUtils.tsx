// discord_app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4723 from "../../../actions/ModalActionCreators.tsx";
import maybeFetchCollectiblesForInvoicesDefault from "../FamilyCenterActionCreators.tsx";
import closure_3 from "../FamilyCenterPendingConnectionStore.tsx";
import items from "../FamilyCenterConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = arg1;
({ FAMILY_CENTER_LINK_REQUEST_REGEX: c4, FamilyCenterAction: c5 } = items);
let c7 = "family-center-request-modal";
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(pathname, FamilyCenterQRCodeScan) {
  const match = pathname.match(closure_4);
  if (null === match) {
    return null;
  } else {
    let obj = expandEventPropertiesDefault;
    obj = { action: null, selected_teen_id: null, source: null };
    obj[0] = ScanQRCode.ScanQRCode;
    obj[1] = match[1];
    obj[2] = FamilyCenterQRCodeScan;
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
    maybeFetchCollectiblesForInvoicesDefault.setPendingConnection(match[1], match[2]);
    const obj3 = maybeFetchCollectiblesForInvoicesDefault;
    obj = { userId: null, linkCode: null };
    obj[0] = match[1];
    obj[1] = match[2];
    _modDef4723.pushLazy(asyncRequireImpl(11710, dependencyMap.paths), obj, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  pendingConnection = pendingConnection.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = _modDef4723;
    obj.popWithKey(c7);
    obj = { userId: null, linkCode: null };
    ({ teenId: obj3[0], linkCode: obj3[1] } = pendingConnection);
    _modDef4723.pushLazy(asyncRequireImpl(11710, dependencyMap.paths), obj, c7);
    flag = true;
    const obj2 = _modDef4723;
  }
  return flag;
};
