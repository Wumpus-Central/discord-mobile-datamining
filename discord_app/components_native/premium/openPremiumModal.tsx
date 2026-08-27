// discord_app/components_native/premium/openPremiumModal.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4676 from "../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return _modDef4676.pushLazy(asyncRequireImpl(7089, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};