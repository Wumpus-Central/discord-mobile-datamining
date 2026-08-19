// discord_app/modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import RELATIONSHIP_COUNT_ANIMATION_THRESHOLD from "../Constants.tsx";

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