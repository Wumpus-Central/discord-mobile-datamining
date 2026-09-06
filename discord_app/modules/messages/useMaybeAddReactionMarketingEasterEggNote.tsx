// discord_app/modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx
import useMaybeAddPollsMarketingEasterEggNoteDefault from "../polls/useMaybeAddPollsMarketingEasterEggNote.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
}
