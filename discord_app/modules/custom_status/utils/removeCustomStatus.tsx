// discord_app/modules/custom_status/utils/removeCustomStatus.tsx
import { setCustomStatus } from "../setCustomStatus.tsx";
const result = require("set").fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatus({ text: "", emojiInfo: null, clearAfter: null });
};