// === Module 17259: useConjureDraftHasText ===

// Module 17259 (useConjureDraftHasText)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 17260 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureDraftHasText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureDraftHasText(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      return "" !== ConjureComposerDraftStore.getDraft(closure_0).trim();
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const obj = require("c");
  [tmp4, tmp5] = noop.useState(tmp2);
  const tmp3 = _slicedToArray(noop.useState(tmp2), 2);
  const tmp8 = _slicedToArray(noop.useState(arg0), 2)[0] !== arg0;
  if (cResult[2] === tmp4) {
    if (cResult[3] === arg0) {
      if (cResult[4] === tmp8) {
        let tmp9 = cResult[5];
      }
      if (tmp8) {
        tmp7(arg0);
        tmp5(tmp9);
      }
      if (cResult[6] !== tmp9) {
        const items = [tmp9, tmp5];
        cResult[6] = tmp9;
        cResult[7] = items;
        let tmp14 = items;
      } else {
        tmp14 = cResult[7];
      }
      return tmp14;
    }
  }
  let tmp10 = tmp4;
  if (tmp8) {
    tmp10 = "" !== ConjureComposerDraftStore.getDraft(arg0).trim();
    const str = ConjureComposerDraftStore.getDraft(arg0);
  }
  cResult[2] = tmp4;
  cResult[3] = arg0;
  cResult[4] = tmp8;
  cResult[5] = tmp10;
  tmp9 = tmp10;
  const tmp6 = _slicedToArray(noop.useState(arg0), 2);
}) : (function useConjureDraftHasText(arg0) {
  closure_0 = arg0;
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
});