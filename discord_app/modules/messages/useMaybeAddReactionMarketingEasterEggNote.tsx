// discord_app/modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import useMaybeAddPollsMarketingEasterEggNoteDefault from "../polls/useMaybeAddPollsMarketingEasterEggNote.tsx";

const result = obj132.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};