import initialize from "initialize";
import items from "items";
import { AnalyticEvents } from "ME";

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
    let obj = importDefault(698);
    obj = { action: null, selected_teen_id: null, source: null };
    obj[0] = ScanQRCode.ScanQRCode;
    obj[1] = match[1];
    obj[2] = FamilyCenterQRCodeScan;
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
    importDefault(6907).setPendingConnection(match[1], match[2]);
    const obj3 = importDefault(6907);
    obj = { userId: null, linkCode: null };
    obj[0] = match[1];
    obj[1] = match[2];
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11234, dependencyMap.paths), obj, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  pendingConnection = pendingConnection.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = importDefault(4490);
    obj.popWithKey(c7);
    obj = { userId: null, linkCode: null };
    ({ teenId: obj3[0], linkCode: obj3[1] } = pendingConnection);
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11234, dependencyMap.paths), obj, c7);
    flag = true;
    const obj2 = importDefault(4490);
  }
  return flag;
};