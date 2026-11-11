// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx
import asyncRequireImpl from "../../../../../../../_runtime/02118_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx",
);

export default {
  showModal(locationStack) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.startAtSignIn;
    if (flag === undefined) {
      flag = false;
    }
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(7361, dependencyMap.paths),
      { locationStack, startAtSignIn: flag },
      c3,
    );
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  },
};
