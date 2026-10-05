// === Module 11552: ContentClassificationVisibility ===

// Module 11552 (ContentClassificationVisibility)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5898 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5900 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

const ContentClassificationVisibility = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  let obj;
  if (null != contentClassification) {
    let DISPLAY;
    obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== nsfwAllowed) {
        DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!channel.isPrivate()) {
          if (!channel.nsfw) {
            DISPLAY = obj.BLOCK_CHANNEL_RESTRICTION;
          }
        }
        DISPLAY = obj.DISPLAY;
      }
    }
    return DISPLAY;
  }
  DISPLAY = obj.DISPLAY;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((data, isPrivate) => {
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return nsfwAllowed;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === isPrivate) {
    if (cResult[3] === data) {
      if (cResult[4] === stateFromStores) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  if (null != data) {
    let DISPLAY;
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj2);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== stateFromStores) {
        DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!isPrivate.isPrivate()) {
          if (!isPrivate.nsfw) {
            DISPLAY = obj.BLOCK_CHANNEL_RESTRICTION;
          }
        }
        DISPLAY = obj.DISPLAY;
      }
    }
    cResult[2] = isPrivate;
    cResult[3] = data;
    cResult[4] = stateFromStores;
    cResult[5] = DISPLAY;
    tmp8 = DISPLAY;
  }
  DISPLAY = obj.DISPLAY;
}) : ((data, isPrivate) => {
  let obj;
  get_initialized;
  [][0] = UserStore;
  if (null != data) {
    let DISPLAY;
    obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== tmp4) {
        DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!isPrivate.isPrivate()) {
          if (!isPrivate.nsfw) {
            DISPLAY = obj.BLOCK_CHANNEL_RESTRICTION;
          }
        }
        DISPLAY = obj.DISPLAY;
      }
    }
    return DISPLAY;
  }
  DISPLAY = obj.DISPLAY;
});
let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export { ContentClassificationVisibility };
export { getContentClassificationVisibility };
export const useContentClassificationVisibility = tmp2;