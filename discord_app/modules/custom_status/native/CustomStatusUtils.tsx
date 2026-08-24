// discord_app/modules/custom_status/native/CustomStatusUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef5260;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9291, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};