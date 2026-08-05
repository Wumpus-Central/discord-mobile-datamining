// discord_app/modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx
const result = require("set").fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = require("../polls/useMaybeAddPollsMarketingEasterEggNote.tsx")(arg0);
  }
  return tmp;
};