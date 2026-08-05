// discord_app/modules/custom_status/utils/removeCustomStatus.tsx
const result = require("set").fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  require("../setCustomStatus.tsx")({ text: "", emojiInfo: null, clearAfter: null });
};