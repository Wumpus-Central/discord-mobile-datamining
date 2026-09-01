// discord_app/modules/custom_status/utils/removeCustomStatus.tsx
import set from "../../../../_runtime/00002_set.js";
import setCustomStatusDefault from "../setCustomStatus.tsx";

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
}
