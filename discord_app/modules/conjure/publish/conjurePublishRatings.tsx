// discord_app/modules/conjure/publish/conjurePublishRatings.tsx
import Storage4 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef4028 from "../intl/ConjureUntranslated.messages.js";
import ConjureAnalytics from "../shared/ConjureAnalytics.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function subscribe(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
}
function markConjurePublishRatingViewed(turnId) {
  ({ projectId, turnId } = turnId);
  const Storage = Storage4.Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp4;
  if (obj[projectId] != null) {
    tmp4 = tmp3[turnId];
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  if (null == tmp4) {
    const Storage3 = Storage4.Storage;
    value2 = Storage3.get(conjurePublishRatingViews);
    if (value2 == null) {
      value2 = {};
    }
    let tmp6;
    if (value2[turnId.projectId] != null) {
      tmp6 = tmp5[turnId.turnId];
    }
    if (true !== tmp6) {
      const result = ConjureAnalytics.trackConjureRatingViewed(turnId);
      const Storage2 = Storage4.Storage;
      const obj2 = {};
      const merged = Object.assign(value2);
      const obj3 = {};
      const merged1 = Object.assign(value2[turnId.projectId]);
      obj3[turnId.turnId] = true;
      obj2[turnId.projectId] = obj3;
      const result1 = Storage2.set(conjurePublishRatingViews, obj2);
      const tmpResult = ConjureAnalytics;
    }
  }
}
function submitConjurePublishRating(rating) {
  rating = rating.rating;
  const merged = Object.assign(rating, Object.assign({ rating: 0 }));
  ({ projectId, turnId } = merged);
  const Storage = Storage4.Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp6;
  if (obj[projectId] != null) {
    tmp6 = tmp5[turnId];
  }
  if (tmp6 == null) {
    tmp6 = null;
  }
  if (null != tmp6) {
    return null;
  } else {
    ({ cta, status } = merged);
    const obj2 = {
      projectId: null,
      turnId: null,
      publishReason: null,
      surface: null,
      placement: null,
      publishState: null,
    };
    ({ projectId: obj7.projectId, turnId: obj7.turnId } = merged);
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
    obj2.placement = merged.placement;
    let publishState;
    if (status != null) {
      publishState = status.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    const obj3 = {};
    obj2.publishState = publishState;
    const merged1 = Object.assign(obj2);
    obj3.rating = rating;
    const result = ConjureAnalytics.trackConjureRatingSubmitted(obj3);
    const Storage2 = Storage4.Storage;
    value2 = Storage2.get(conjurePublishRatings);
    if (value2 == null) {
      value2 = {};
    }
    const Storage3 = Storage4.Storage;
    const obj4 = {};
    const merged2 = Object.assign(value2);
    const obj5 = {};
    const merged3 = Object.assign(value2[projectId]);
    obj5[turnId] = rating;
    obj4[projectId] = obj5;
    const result1 = Storage3.set(conjurePublishRatings, obj4);
    closure_9 = closure_9 + 1;
    const item = set.forEach((fn) => fn());
    return obj3;
  }
}
const conjurePublishRatings = "conjurePublishRatings";
const conjurePublishRatingViews = "conjurePublishRatingViews";
let obj = { 1: null, 2: _modDef4028.GhbsGA, 3: _modDef4028.cm0nwU, 4: _modDef4028.kGvlh2, 5: _modDef4028.dVBSUg };
obj[5] = _modDef4028.DKlgF7;
const set = new Set();
let closure_9 = 0;
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
  return intl.formatToPlainString(_modDef4028.NU7Dex, obj);
}
export function conjurePublishRatingThanks(rating) {
  if (rating <= 2) {
    const intl3 = util.intl;
    let stringResult = intl3.string(_modDef4028["nIc9/M"]);
  } else if (3 === rating) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef4028.ausj8U);
  } else {
    const intl = util.intl;
    stringResult = intl.string(_modDef4028.HilSjw);
  }
  return stringResult;
}
export const CONJURE_RATING_FEEDBACK_MAX_LENGTH = 256;
export { markConjurePublishRatingViewed };
export { submitConjurePublishRating };
export function submitConjurePublishRatingFeedback(projectId, str) {
  const trimmed = str.trim();
  const substr = trimmed.slice(0, 256);
  if ("" !== substr) {
    const result = ConjureAnalytics.trackConjureRatingFeedbackSubmitted(projectId, substr);
  }
}
export function useConjurePublishRating(projectId) {
  _require = projectId;
  projectId = projectId.projectId;
  const turnId = projectId.turnId;
  const syncExternalStore = surface.useSyncExternalStore(subscribe, () => closure_1_9);
  ({ projectId: projectId2, turnId: turnId2, cta, status, placement } = projectId);
  let str = cta.reason;
  if (str == null) {
    str = "first_publish";
  }
  surface = undefined;
  if (status != null) {
    surface = status.surface;
  }
  if (surface == null) {
    surface = cta.surface;
  }
  let publishState;
  if (status != null) {
    publishState = status.publishState;
  }
  if (publishState == null) {
    publishState = null;
  }
  items = [projectId, turnId, str, surface, placement, publishState];
  const effect = surface.useEffect(() => {
    markConjurePublishRatingViewed({ projectId, turnId, publishReason: str, surface, placement, publishState });
  }, items);
  const Storage = require("Storage").Storage;
  let obj2 = Storage.get(placement);
  if (obj2 == null) {
    obj2 = {};
  }
  let tmp6;
  if (obj2[projectId] != null) {
    tmp6 = tmp5[turnId];
  }
  if (tmp6 == null) {
    tmp6 = null;
  }
  return {
    rating: tmp6,
    rate(stateFromStores) {
      obj = {};
      const merged = Object.assign(closure_0);
      obj.rating = stateFromStores;
      const tmp2 = submitConjurePublishRating(obj);
      let tmp3 = null;
      if (null != tmp2) {
        tmp3 = null;
        if (stateFromStores <= 2) {
          tmp3 = tmp2;
        }
      }
      return tmp3;
    },
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
    },
  };
}
