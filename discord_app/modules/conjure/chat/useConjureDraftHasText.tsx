// discord_app/modules/conjure/chat/useConjureDraftHasText.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureComposerDraftStore from "ConjureComposerDraftStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureDraftHasText.tsx");

export default function useConjureDraftHasText(arg0) {
  _slicedToArray = arg0;
  [tmp2, tmp3] = noop.useState(() => "" !== ConjureComposerDraftStore.getDraft(closure_0).trim());
  const tmp4 = _slicedToArray(noop.useState(arg0), 2);
  if (tmp4[0] !== arg0) {
    tmp2 = "" !== ConjureComposerDraftStore.getDraft(arg0).trim();
    const str = ConjureComposerDraftStore.getDraft(arg0);
  }
  if (tmp4[0] !== arg0) {
    tmp4[1](arg0);
    tmp3(tmp2);
  }
  const items = [tmp2, tmp3];
  return items;
}
