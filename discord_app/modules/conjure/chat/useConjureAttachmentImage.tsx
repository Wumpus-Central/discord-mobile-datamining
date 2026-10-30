// === Module 12455: useConjureAttachmentImage ===

// Module 12455 (useConjureAttachmentImage)
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12453 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureAttachmentImage.tsx");

export function useConjureAttachmentImage(projectId, id) {
  closure_1 = id;
  const tmp = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  noop = tmp2[1];
  [first, closure_5] = noop.useState(0);
  const items = [projectId, id, first];
  const effect = noop.useEffect(() => {
    c0 = false;
    const attachmentUrl = projectId(closure_1[2]).getAttachmentUrl(c0, closure_1);
    attachmentUrl.then((result) => {
      if (!c0) {
        closure_2(result);
      }
    }, () => {
      if (!c0) {
        if (0 === first) {
          closure_5(1);
        } else {
          closure_3(true);
        }
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const obj = { src: tmp[0], gone: tmp2[0], handleError: null };
  const items1 = [projectId, id, first];
  obj.handleError = noop.useCallback(() => {
    closure_2(null);
    const result = conjureAttachmentRequests.isAttachmentAvailable(closure_0, closure_1);
    result.then((result) => {
      if (result) {
        if (0 === first) {
          closure_1_5(1);
        }
      }
      closure_1_3(true);
    }, () => closure_1_3(true));
  }, items1);
  return obj;
}