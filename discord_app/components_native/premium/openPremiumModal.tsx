// discord_app/components_native/premium/openPremiumModal.tsx
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return ModalActionCreators.pushLazy(asyncRequireImpl(6942, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};