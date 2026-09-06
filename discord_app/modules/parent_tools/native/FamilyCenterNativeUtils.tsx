// === Module 11913: FAMILY_CENTER_REQUEST_MODAL_KEY ===

// Module 11913 (FAMILY_CENTER_REQUEST_MODAL_KEY)
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 7539 */;
import closure_3 from "initialize" /* 4774 */;
import items from "items" /* 7538 */;
import { AnalyticEvents } from "ME" /* 1074 */;

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
    _modDef4763.pushLazy(asyncRequireImpl(11914, dependencyMap.paths), obj, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  pendingConnection = pendingConnection.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = _modDef4763;
    obj.popWithKey(c7);
    obj = { userId: null, linkCode: null };
    ({ teenId: obj3[0], linkCode: obj3[1] } = pendingConnection);
    _modDef4763.pushLazy(asyncRequireImpl(11914, dependencyMap.paths), obj, c7);
    flag = true;
    const obj2 = _modDef4763;
  }
  return flag;
};