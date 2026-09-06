// discord_app/modules/custom_status/utils/removeCustomStatus.tsx
import setCustomStatusDefault from "../setCustomStatus.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
}
