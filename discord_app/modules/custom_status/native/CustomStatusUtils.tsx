// discord_app/modules/custom_status/native/CustomStatusUtils.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(11114, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};
