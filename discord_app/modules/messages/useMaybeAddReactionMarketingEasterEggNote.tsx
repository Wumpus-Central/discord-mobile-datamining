// === Module 9404: useMaybeAddReactionMarketingEasterEggNote ===

// Module 9404 (useMaybeAddReactionMarketingEasterEggNote)
import obj132 from "obj132" /* 2 */;
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 9405 */;

const result = obj132.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};