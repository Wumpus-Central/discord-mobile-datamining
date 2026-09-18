// discord_app/modules/custom_status/native/CustomStatusUtils.tsx
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(11367, dependencyMap.paths),
    { analyticsLocations, prompt: _prompt },
    undefined,
    { presentation: "modal" },
  );
};
