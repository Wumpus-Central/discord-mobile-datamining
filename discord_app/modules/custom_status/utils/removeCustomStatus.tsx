// discord_app/modules/custom_status/utils/removeCustomStatus.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import setCustomStatusDefault from "../setCustomStatus.tsx";

const result = obj132.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};