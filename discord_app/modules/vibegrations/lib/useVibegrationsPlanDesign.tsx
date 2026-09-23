// discord_app/modules/vibegrations/lib/useVibegrationsPlanDesign.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const VibegrationsConnectionStore = fn(13448);
({ getAttachmentUrl: c2, isAttachmentAvailable: c3 } = VibegrationsConnectionStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPlanDesign.tsx");

export const useVibegrationsPlanDesign = function useVibegrationsPlanDesign(projectId, id) {
  _slicedToArray = projectId;
  noop = id;
  const tmp = _slicedToArray(noop.useState(null), 2);
  closure_2 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_3 = tmp2[1];
  [first, closure_5] = noop.useState(0);
  const items = [projectId, id, first];
  const effect = noop.useEffect(() => {
    c0 = false;
    closure_2(c0, closure_1).then(
      (result) => {
        if (!c0) {
          closure_2(result);
        }
      },
      () => {
        if (!c0) {
          if (0 === first) {
            closure_5(1);
          } else {
            closure_3(true);
          }
        }
      },
    );
    return () => {
      c0 = true;
    };
  }, items);
  const obj = { src: tmp[0], gone: tmp2[0], handleError: null };
  const items1 = [projectId, id, first];
  obj.handleError = noop.useCallback(() => {
    closure_2(null);
    React3(closure_0, closure_1).then(
      (result) => {
        if (result) {
          if (0 === first) {
            closure_1_5(1);
          }
        }
        closure_1_3(true);
      },
      () => closure_1_3(true),
    );
  }, items1);
  return obj;
};
