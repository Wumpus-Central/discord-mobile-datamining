// === Module 9890: openAcceptFriendRequestConfirmModal ===

// Module 9890 (openAcceptFriendRequestConfirmModal)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef4656 from "module_4656" /* 4656 */;
import RELATIONSHIP_COUNT_ANIMATION_THRESHOLD from "RELATIONSHIP_COUNT_ANIMATION_THRESHOLD" /* 9891 */;

let closure_3 = RELATIONSHIP_COUNT_ANIMATION_THRESHOLD.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = ME.AnalyticEvents;
const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  let obj = { type: closure_3 };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {
    importer() {
      return asyncRequireImpl(dependencyMap[5], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onCancel = function onCancel() {
            closure_0.onClose();
            if (closure_1_1 != null) {
              tmp2();
            }
          };
          obj.onConfirm = closure_0;
          return closure_2_5(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};