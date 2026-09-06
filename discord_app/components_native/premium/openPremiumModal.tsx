// discord_app/components_native/premium/openPremiumModal.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7412, dependencyMap.paths), merged, "PREMIUM_KEY", {
    presentation: "modal",
  });
}
