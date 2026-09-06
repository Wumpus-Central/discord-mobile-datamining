// discord_app/modules/content_classification/ContentClassificationVisibility.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ContentClassificationToAgeRestriction from "../../../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx";
import AgeRestrictionStatus from "../../../discord_common/js/shared/shared-constants/AgeRestrictionStatus.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const ContentClassificationVisibility = {
  DISPLAY: "display",
  BLOCK_UNDERAGE: "block_underage",
  BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export { ContentClassificationVisibility };
export const getContentClassificationVisibility = function getContentClassificationVisibility(
  contentClassification,
  channel,
  nsfwAllowed,
) {
  if (null != contentClassification) {
    const obj = {
      type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL,
      data: contentClassification,
    };
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
export const useContentClassificationVisibility = function useContentClassificationVisibility(data, isPrivate) {
  initialize;
  [][0] = UserStore;
  if (null != data) {
    const obj = { type: tmp(5113).ContentClassificationVariant.MINIMAL, data };
    const result = tmp(5113).contentClassificationToAgeRestriction(obj);
    if (result === tmp(5115).AgeRestrictionStatus.ADULT) {
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
