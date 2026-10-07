// === Module 16789: useConjureTraceDetail ===

// Module 16789 (useConjureTraceDetail)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/useConjureTraceDetail.tsx");

export const useConjureTraceDetail = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, detailId) => {
  _require = arg0;
  dependencyMap = detailId;
  const cResult = require("c").c(11);
  let obj = require("c");
  const tmp = _require;
  [tmp5, _slicedToArray] = noop.useState(null);
  if (cResult[0] === detailId) {
    if (cResult[1] === arg0) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (null == detailId) {
      return null;
    } else {
      if (cResult[4] !== detailId) {
        const cachedTraceDetailResult = tmp(16785).cachedTraceDetail(detailId);
        cResult[4] = detailId;
        cResult[5] = cachedTraceDetailResult;
        let tmp9 = cachedTraceDetailResult;
        const tmpResult = tmp(16785);
      } else {
        tmp9 = cResult[5];
      }
      if (null != tmp9) {
        if (cResult[6] !== tmp9) {
          const obj3 = { status: "loaded", rich: tmp9 };
          cResult[6] = tmp9;
          cResult[7] = obj3;
        }
      } else {
        if (cResult[8] === detailId) {
          if (cResult[9] === tmp5) {
            return cResult[10];
          }
        }
        detailId = undefined;
        if (tmp5 != null) {
          detailId = tmp5.detailId;
        }
        const tmp12 = detailId === detailId ? tmp5.detail : { status: "loading" };
        cResult[8] = detailId;
        cResult[9] = tmp5;
        cResult[10] = tmp12;
      }
    }
  }
  const fn = function c() {
    if (null != detailId) {
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const traceDetail = closure_0(detailId[4]).fetchTraceDetail(abortController, detailId, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
      obj = closure_0(detailId[4]);
    }
  };
  const items = [arg0, detailId];
  cResult[0] = detailId;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : ((arg0, detailId) => {
  _require = arg0;
  dependencyMap = detailId;
  [tmp2, _slicedToArray] = noop.useState(null);
  const items = [arg0, detailId];
  const effect = noop.useEffect(() => {
    if (null != detailId) {
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const traceDetail = closure_0(detailId[4]).fetchTraceDetail(abortController, detailId, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
      obj = closure_0(detailId[4]);
    }
  }, items);
  if (null == detailId) {
    return null;
  } else {
    const cachedTraceDetailResult = require("ConjureTraceDetail").cachedTraceDetail(detailId);
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
});