// discord_app/modules/custom_status/native/CustomStatusUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4689;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9030, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};