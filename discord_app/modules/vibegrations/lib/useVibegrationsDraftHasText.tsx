// === Module 16609: useVibegrationsDraftHasText ===

// Module 16609 (useVibegrationsDraftHasText)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsComposerDraftStore from "VibegrationsComposerDraftStore" /* 16610 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsDraftHasText.tsx");

export default function useVibegrationsDraftHasText(arg0) {
  _slicedToArray = arg0;
  [tmp2, tmp3] = noop.useState(() => "" !== VibegrationsComposerDraftStore.getDraft(closure_0).trim());
  const tmp4 = _slicedToArray(noop.useState(arg0), 2);
  if (tmp4[0] !== arg0) {
    tmp2 = "" !== VibegrationsComposerDraftStore.getDraft(arg0).trim();
    const str = VibegrationsComposerDraftStore.getDraft(arg0);
  }
  if (tmp4[0] !== arg0) {
    tmp4[1](arg0);
    tmp3(tmp2);
  }
  const items = [tmp2, tmp3];
  return items;
};