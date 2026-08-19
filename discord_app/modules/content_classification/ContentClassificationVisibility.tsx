// === Module 11127: ContentClassificationVisibility ===

// Module 11127 (ContentClassificationVisibility)
import initialize from "initialize" /* 589 */;
import contentClassificationToAgeRestrictionConclusion from "contentClassificationToAgeRestrictionConclusion" /* 4787 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 4789 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
let obj = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
let result = require("obj132").fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export const ContentClassificationVisibility = obj;
export const getContentClassificationVisibility = function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    obj = { type: null, data: null };
    obj[0] = contentClassificationToAgeRestrictionConclusion.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
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
};
export const useContentClassificationVisibility = function useContentClassificationVisibility(arg0, isPrivate) {
  initialize;
  [][0] = closure_2;
  if (null != arg0) {
    obj = { type: null, data: null };
    obj[0] = contentClassificationToAgeRestrictionConclusion.ContentClassificationVariant.MINIMAL;
    obj[1] = arg0;
    const result = contentClassificationToAgeRestrictionConclusion.contentClassificationToAgeRestriction(obj);
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
};