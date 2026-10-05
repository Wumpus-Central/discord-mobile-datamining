// === Module 16768: useConjureTraceDetail ===

// Module 16768 (useConjureTraceDetail)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, detailId) => {
  let closure_0;
  let tmp5;
  _require = arg0;
  dependencyMap = detailId;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, _slicedToArray] = tmp4;
  const tmp = _require;
  if (cResult[0] === detailId) {
    let tmp6;
    let tmp7;
    if (cResult[1] === arg0) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = react.useEffect(tmp6, tmp7);
    if (null == detailId) {
      return null;
    } else {
      let tmp9;
      let tmp11;
      if (cResult[4] !== detailId) {
        const tmpResult = tmp(16764);
        const cachedTraceDetailResult = tmpResult.cachedTraceDetail(detailId);
        cResult[4] = detailId;
        cResult[5] = cachedTraceDetailResult;
        tmp9 = cachedTraceDetailResult;
      } else {
        tmp9 = cResult[5];
      }
      if (null != tmp9) {
        let tmp14;
        if (cResult[6] !== tmp9) {
          const obj3 = { status: "loaded", rich: tmp9 };
          cResult[6] = tmp9;
          cResult[7] = obj3;
          tmp14 = obj3;
        } else {
          tmp14 = cResult[7];
        }
        tmp11 = tmp14;
      } else {
        if (cResult[8] === detailId) {
          if (cResult[9] === tmp5) {
            tmp11 = cResult[10];
          }
        }
        detailId = undefined;
        if (tmp5 != null) {
          detailId = tmp5.detailId;
        }
        const tmp13 = detailId === detailId ? tmp5.detail : { status: "loading" };
        cResult[8] = detailId;
        cResult[9] = tmp5;
        cResult[10] = tmp13;
        tmp11 = tmp13;
      }
      return tmp11;
    }
  }
  const fn = function c() {
    if (null != detailId) {
      let obj = closure_0(detailId[4]);
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const self = this;
        const self2 = this;
        const abortController = new AbortController();
        const tmp2Result = closure_0(detailId[4]);
        const traceDetail = tmp2Result.fetchTraceDetail(abortController, detailId, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
    }
  };
  const items = [arg0, detailId];
  cResult[0] = detailId;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
}) : ((arg0, detailId) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  dependencyMap = detailId;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, _slicedToArray] = tmp;
  const items = [arg0, detailId];
  const effect = react.useEffect(function() {
    if (null != detailId) {
      let obj = closure_0(detailId[4]);
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const self = this;
        const self2 = this;
        const abortController = new AbortController();
        const tmp2Result = closure_0(detailId[4]);
        const traceDetail = tmp2Result.fetchTraceDetail(abortController, detailId, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
    }
  }, items);
  if (null == detailId) {
    return null;
  } else {
    let tmp8;
    let obj = require("ConjureTraceDetail");
    const cachedTraceDetailResult = obj.cachedTraceDetail(detailId);
    if (null != cachedTraceDetailResult) {
      tmp8 = { status: "loaded", rich: cachedTraceDetailResult };
      const obj2 = { status: "loaded", rich: cachedTraceDetailResult };
    } else {
      detailId = undefined;
      if (tmp2 != null) {
        detailId = tmp2.detailId;
      }
      tmp8 = detailId === detailId ? tmp2.detail : { status: "loading" };
    }
    return tmp8;
  }
});
const result = size.fileFinishedImporting("modules/conjure/debug/useConjureTraceDetail.tsx");

export const useConjureTraceDetail = tmp2;