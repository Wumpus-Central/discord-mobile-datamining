// discord_app/modules/custom_status/utils/removeCustomStatus.tsx
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9295 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};