// === Module 10606: AcceptFriendRequestModalActionCreators ===

// Module 10606 (AcceptFriendRequestModalActionCreators)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import Constants2 from "Constants" /* 10607 */;
import size from "module_2" /* 2 */;

const type = Constants2.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type });
  const obj2 = { type };
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(10608, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (View) => {
          const obj = {};
          const merged = Object.assign(View);
          obj.onCancel = function onCancel() {
            View.onClose();
            if (closure_2_1 != null) {
              tmp2();
            }
          };
          obj.onConfirm = onConfirm;
          return <View />;
        };
      });
    },
    isDismissable: false
  });
};