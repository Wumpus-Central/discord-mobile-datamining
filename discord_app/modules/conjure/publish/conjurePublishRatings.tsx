// === Module 12476: conjurePublishRatings ===

// Module 12476 (conjurePublishRatings)
import Storage4 from "Storage" /* 510 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10718 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function subscribe(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
}
function submitConjurePublishRating(arg0) {
  ({ projectId, turnId, rating, cta, status } = arg0);
  const Storage = Storage4.Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp5;
  if (obj[projectId] != null) {
    tmp5 = tmp4[turnId];
  }
  if (tmp5 == null) {
    tmp5 = null;
  }
  if (null != tmp5) {
    return null;
  } else {
    const obj2 = { projectId, turnId, rating, publishReason: null, surface: null };
    let str = cta.reason;
    if (str == null) {
      str = "first_publish";
    }
    obj2.publishReason = str;
    let surface;
    if (status != null) {
      surface = status.surface;
    }
    if (surface == null) {
      surface = cta.surface;
    }
    obj2.surface = surface;
    const result = ConjureAnalytics.trackConjureRatingSubmitted(obj2);
    const Storage2 = Storage4.Storage;
    value2 = Storage2.get(conjurePublishRatings);
    if (value2 == null) {
      value2 = {};
    }
    const Storage3 = Storage4.Storage;
    const obj3 = {};
    const merged = Object.assign(value2);
    const obj4 = {};
    const merged1 = Object.assign(value2[projectId]);
    obj4[turnId] = rating;
    obj3[projectId] = obj4;
    const result1 = Storage3.set(conjurePublishRatings, obj3);
    closure_8 = closure_8 + 1;
    const item = set.forEach((fn) => fn());
    return obj2;
  }
}
const conjurePublishRatings = "conjurePublishRatings";
let obj = { 1: null, 2: _modDef3830.GhbsGA, 3: _modDef3830.cm0nwU, 4: _modDef3830.kGvlh2, 5: _modDef3830.dVBSUg };
obj[5] = _modDef3830.DKlgF7;
const set = new Set();
let closure_8 = 0;
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishRating(projectId) {
  const cResult = projectId(cta[7]).c(10);
  projectId = projectId.projectId;
  const turnId = projectId.turnId;
  cta = projectId.cta;
  const status = projectId.status;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return closure_1_8;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const syncExternalStore = noop.useSyncExternalStore(subscribe, first);
  if (cResult[1] === projectId) {
    if (cResult[2] === turnId) {
      let tmp6 = cResult[3];
    }
    if (cResult[4] === cta) {
      if (cResult[5] === projectId) {
        if (cResult[6] === status) {
          if (cResult[7] === tmp6) {
            if (cResult[8] === turnId) {
              let tmp9 = cResult[9];
            }
            return tmp9;
          }
        }
      }
    }
    const obj2 = {
      rating: tmp6,
      rate(rating) {
          const tmp = submitConjurePublishRating({ projectId, turnId, rating, cta, status });
          let tmp2 = null;
          if (null != tmp) {
            tmp2 = null;
            if (rating <= 2) {
              tmp2 = tmp;
            }
          }
          return tmp2;
        }
    };
    cResult[4] = cta;
    cResult[5] = projectId;
    cResult[6] = status;
    cResult[7] = tmp6;
    cResult[8] = turnId;
    cResult[9] = obj2;
    tmp9 = obj2;
  }
  const Storage = projectId(cta[4]).Storage;
  let obj3 = Storage.get(conjurePublishRatings);
  if (obj3 == null) {
    obj3 = {};
  }
  let tmp8;
  if (obj3[projectId] != null) {
    tmp8 = tmp7[turnId];
  }
  if (tmp8 == null) {
    tmp8 = null;
  }
  cResult[1] = projectId;
  cResult[2] = turnId;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : (function useConjurePublishRating(projectId) {
  projectId = projectId.projectId;
  const turnId = projectId.turnId;
  ({ cta: dependencyMap, status: _slicedToArray } = projectId);
  const syncExternalStore = noop.useSyncExternalStore(subscribe, () => closure_1_8);
  const Storage = projectId(510).Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp3;
  if (obj[projectId] != null) {
    tmp3 = tmp2[turnId];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  return {
    rating: tmp3,
    rate(rating) {
      const tmp = submitConjurePublishRating({ projectId, turnId, rating, cta, status });
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = null;
        if (rating <= 2) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  };
});
function conjurePublishRatingLabel(arg0) {
  const intl = util.intl;
  return intl.string(obj[arg0]);
}
function submitConjurePublishRatingFeedback(projectId, str) {
  const trimmed = str.trim();
  const substr = trimmed.slice(0, 256);
  if ("" !== substr) {
    const result = ConjureAnalytics.trackConjureRatingFeedbackSubmitted(projectId, substr);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishRatings.tsx");

export const CONJURE_PUBLISH_RATINGS = [1, 2, 3, 4, 5];
export { conjurePublishRatingLabel };
export const conjurePublishRatingOptionLabel = function conjurePublishRatingOptionLabel(rating) {
  const intl = util.intl;
  obj = { rating, label: null };
  const intl2 = util.intl;
  obj.label = intl2.string(obj[rating]);
  return intl.formatToPlainString(_modDef3830.NU7Dex, obj);
};
export const conjurePublishRatingThanks = function conjurePublishRatingThanks(rating) {
  if (rating <= 2) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3830["nIc9/M"]);
  } else if (3 === rating) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3830.ausj8U);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3830.HilSjw);
  }
  return stringResult;
};
export const CONJURE_RATING_FEEDBACK_MAX_LENGTH = 256;
export { submitConjurePublishRating };
export { submitConjurePublishRatingFeedback };
export const useConjurePublishRating = tmp3;
export const useConjureRatingFeedback = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRatingFeedback(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  const str = tmp2[0];
  if (cResult[0] !== str) {
    let trimmed = str.trim();
    cResult[0] = str;
    cResult[1] = trimmed;
    let tmp3 = trimmed;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === arg0) {
    if (cResult[3] === str) {
      let tmp5 = cResult[4];
    }
    if (cResult[5] === "" !== tmp3) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === str) {
          let tmp7 = cResult[8];
        }
        return tmp7;
      }
    }
    const obj2 = { text: str, setText: tmp2[1], canSend: "" !== tmp3, send: tmp5 };
    cResult[5] = "" !== tmp3;
    cResult[6] = tmp5;
    cResult[7] = str;
    cResult[8] = obj2;
    tmp7 = obj2;
  }
  const fn = function j() {
    const trimmed = str.trim();
    const substr = trimmed.slice(0, 256);
    if ("" !== substr) {
      const result = ConjureAnalytics.trackConjureRatingFeedbackSubmitted(closure_0, substr);
    }
  };
  cResult[2] = arg0;
  cResult[3] = str;
  cResult[4] = fn;
  tmp5 = fn;
}) : (function useConjureRatingFeedback(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(""), 2);
  const str = tmp[0];
  return {
    text: str,
    setText: tmp[1],
    canSend: "" !== str.trim(),
    send() {
      const trimmed = str.trim();
      const substr = trimmed.slice(0, 256);
      if ("" !== substr) {
        const result = ConjureAnalytics.trackConjureRatingFeedbackSubmitted(closure_0, substr);
      }
    }
  };
});