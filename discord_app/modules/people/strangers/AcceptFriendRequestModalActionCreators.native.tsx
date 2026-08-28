// === Module 9017: openAcceptFriendRequestConfirmModal ===

// Module 9017 (openAcceptFriendRequestConfirmModal)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import _modDef4823 from "module_4823" /* 4823 */;
import RELATIONSHIP_COUNT_ANIMATION_THRESHOLD from "RELATIONSHIP_COUNT_ANIMATION_THRESHOLD" /* 9018 */;

let closure_3 = RELATIONSHIP_COUNT_ANIMATION_THRESHOLD.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = ME.AnalyticEvents;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { type: closure_3 };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {
    importer() {
      return closure_1_0(closure_1_2[6])(closure_1_2[5], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
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
  _modDef4823.openLazy(obj);
};