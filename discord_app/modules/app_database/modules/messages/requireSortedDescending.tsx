// discord_app/modules/app_database/modules/messages/requireSortedDescending.tsx
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp4 = messages.length <= 2;
  if (!tmp4) {
    tmp4 = importDefault(11).compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const tmpResult = importDefault(11);
  }
  importDefault(38)(tmp4, "messages must be sorted in descending order.");
};