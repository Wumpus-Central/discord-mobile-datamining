// === Module 11565: ContentClassificationVisibility ===

// Module 11565 (ContentClassificationVisibility)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5905 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5907 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ContentClassificationVisibility = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
const ReactCompilerGating = fn(558);
function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    const obj = ContentClassificationToAgeRestriction;
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj2);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== nsfwAllowed) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export { ContentClassificationVisibility };
export { getContentClassificationVisibility };
export const useContentClassificationVisibility = ReactCompilerGating.isReactCompilerEnabled() ? ((data, isPrivate) => {
  const obj = c;
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === isPrivate) {
    if (cResult[3] === data) {
      if (cResult[4] === stateFromStores) {
        return cResult[5];
      }
    }
  }
  if (null != data) {
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data };
    const result = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction(obj2);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== stateFromStores) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
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
    const tmpResult2 = ContentClassificationToAgeRestriction;
  }
  DISPLAY = obj.DISPLAY;
  const tmpResult = initialize;
}) : ((data, isPrivate) => {
  initialize;
  [][0] = UserStore;
  if (null != data) {
    const obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data };
    const result = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction(obj);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== tmp4) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
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