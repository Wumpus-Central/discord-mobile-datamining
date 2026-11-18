// discord_app/modules/premium/native/openPremiumModal.tsx
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9006, dependencyMap.paths), merged, "PREMIUM_KEY", {
    presentation: "modal",
  });
}
