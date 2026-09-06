// discord_app/modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import Constants2 from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};
