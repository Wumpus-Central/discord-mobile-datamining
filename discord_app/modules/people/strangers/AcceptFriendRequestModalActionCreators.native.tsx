// === Module 10873: AcceptFriendRequestModalActionCreators ===

// Module 10873 (AcceptFriendRequestModalActionCreators)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import Constants2 from "Constants" /* 10874 */;
import size from "module_2" /* 2 */;

const type = Constants2.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  let obj = { type };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {
    importer() {
      return asyncRequireImpl(10875, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onCancel = function onCancel() {
            closure_0.onClose();
            if (closure_2_1 != null) {
              tmp2();
            }
          };
          obj.onConfirm = onConfirm;
          return <closure_0 />;
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};