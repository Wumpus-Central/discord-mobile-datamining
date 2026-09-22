// === Module 17091: useVibegrationsTraceDetail ===

// Module 17091 (useVibegrationsTraceDetail)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsTraceDetail.tsx");

export const useVibegrationsTraceDetail = function useVibegrationsTraceDetail(projectId, detailId) {
  _require = projectId;
  dependencyMap = detailId;
  [tmp2, _slicedToArray] = noop.useState(null);
  const items = [projectId, detailId];
  const effect = noop.useEffect(() => {
    if (null != detailId) {
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const traceDetail = projectId(detailId[2]).fetchTraceDetail(abortController, detailId, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
      obj = projectId(detailId[2]);
    }
  }, items);
  if (null == detailId) {
    return null;
  } else {
    const cachedTraceDetailResult = require("VibegrationsTraceDetail").cachedTraceDetail(detailId);
    if (null != cachedTraceDetailResult) {
      const obj2 = { status: "loaded", rich: cachedTraceDetailResult };
      let tmp8 = obj2;
    } else {
      detailId = undefined;
      if (tmp2 != null) {
        detailId = tmp2.detailId;
      }
      tmp8 = detailId === detailId ? tmp2.detail : { status: "loading" };
    }
    return tmp8;
  }
  const tmp = _slicedToArray(noop.useState(null), 2);
};