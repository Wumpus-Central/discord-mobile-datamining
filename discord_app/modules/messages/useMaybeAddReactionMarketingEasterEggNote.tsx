// discord_app/modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx
import { useMaybeAddPollsMarketingEasterEggNote } from "../polls/useMaybeAddPollsMarketingEasterEggNote.tsx";
const result = require("set").fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNote(arg0);
  }
  return tmp;
};