// discord_app/modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import Constants2 from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const type = Constants2.ACCEPT_FRIEND_REQUEST_CONFIRMATION_MODAL_ID;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/people/strangers/AcceptFriendRequestModalActionCreators.native.tsx");

export const openAcceptFriendRequestConfirmModal = function openAcceptFriendRequestConfirmModal(arg0) {
  ({ onConfirm: require, onCancel: importDefault } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type };
  obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  const obj3 = actions_AlertActionCreatorsDefault;
  const obj4 = {
    importer() {
      let onConfirm;
      const promise = asyncRequire(10608, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (View) => {
          closure_0 = View;
          const merged = Object.assign(View);
          return (
            <closure_0
              onCancel={function onCancel() {
                closure_0.onClose();
                if (closure_2_1 != null) {
                  tmp2();
                }
              }}
              onConfirm={onConfirm}
            />
          );
        };
      });
    },
    isDismissable: false,
  };
  obj3.openLazy(obj4);
};
