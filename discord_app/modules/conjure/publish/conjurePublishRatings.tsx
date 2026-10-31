// === Module 12771: conjurePublishRatings ===

// Module 12771 (conjurePublishRatings)
import Storage4 from "Storage" /* 510 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10873 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
let obj = { 1: null, 2: _modDef3868.GhbsGA, 3: _modDef3868.cm0nwU, 4: _modDef3868.kGvlh2, 5: _modDef3868.dVBSUg };
obj[5] = _modDef3868.DKlgF7;
const set = new Set();
let closure_8 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishRatings.tsx");

export const CONJURE_PUBLISH_RATINGS = [1, 2, 3, 4, 5];
export function conjurePublishRatingLabel(arg0) {
  const intl = util.intl;
  return intl.string(obj[arg0]);
}
export function conjurePublishRatingOptionLabel(rating) {
  const intl = util.intl;
  obj = { rating, label: null };
  const intl2 = util.intl;
  obj.label = intl2.string(obj[rating]);
  return intl.formatToPlainString(_modDef3868.NU7Dex, obj);
}
export function conjurePublishRatingThanks(rating) {
  if (rating <= 2) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef3868["nIc9/M"]);
  } else if (3 === rating) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3868.ausj8U);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef3868.HilSjw);
  }
  return stringResult;
}
export const CONJURE_RATING_FEEDBACK_MAX_LENGTH = 256;
export { submitConjurePublishRating };
export function submitConjurePublishRatingFeedback(projectId, str) {
  const trimmed = str.trim();
  const substr = trimmed.slice(0, 256);
  if ("" !== substr) {
    const result = ConjureAnalytics.trackConjureRatingFeedbackSubmitted(projectId, substr);
  }
}
export function useConjurePublishRating(projectId) {
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
    rate(stateFromStores) {
      const tmp = submitConjurePublishRating({ projectId, turnId, rating: stateFromStores, cta, status });
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = null;
        if (stateFromStores <= 2) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  };
}
export function useConjureRatingFeedback(rating) {
  closure_0 = rating;
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
}