// discord_app/modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx
import util from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t.otsg2R);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["/Yx5qX"]);
  obj.show(obj);
};
