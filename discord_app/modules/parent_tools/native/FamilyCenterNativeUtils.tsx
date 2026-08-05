// discord_app/modules/parent_tools/native/FamilyCenterNativeUtils.tsx
import initialize from "initialize";
import items from "items";
import { AnalyticEvents } from "ME";
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { maybeFetchCollectiblesForInvoices } from "../FamilyCenterActionCreators.tsx";

let c4;
let c5;
const require = arg1;
({ FAMILY_CENTER_LINK_REQUEST_REGEX: c4, FamilyCenterAction: c5 } = items);
let c7 = "family-center-request-modal";
const result = require("ME").fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(pathname, FamilyCenterQRCodeScan) {
  const match = pathname.match(closure_4);
  if (null === match) {
    return null;
  } else {
    let obj = expandEventProperties;
    obj = { action: null, selected_teen_id: null, source: null };
    obj[0] = ScanQRCode.ScanQRCode;
    obj[1] = match[1];
    obj[2] = FamilyCenterQRCodeScan;
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
    maybeFetchCollectiblesForInvoices.setPendingConnection(match[1], match[2]);
    const obj3 = maybeFetchCollectiblesForInvoices;
    obj = { userId: null, linkCode: null };
    obj[0] = match[1];
    obj[1] = match[2];
    ModalActionCreators.pushLazy(asyncRequireImpl(11206, dependencyMap.paths), obj, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  pendingConnection = pendingConnection.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = ModalActionCreators;
    obj.popWithKey(c7);
    obj = { userId: null, linkCode: null };
    ({ teenId: obj3[0], linkCode: obj3[1] } = pendingConnection);
    ModalActionCreators.pushLazy(asyncRequireImpl(11206, dependencyMap.paths), obj, c7);
    flag = true;
    const obj2 = ModalActionCreators;
  }
  return flag;
};