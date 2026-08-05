import { asyncRequireImpl } from "../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
// discord_app/components_native/premium/openPremiumModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(closure_0) {
  return ModalActionCreators.pushLazy(asyncRequireImpl /* asyncRequireImpl */(6783, dependencyMap.paths), closure_0, "PREMIUM_KEY", { presentation: "modal" });
};