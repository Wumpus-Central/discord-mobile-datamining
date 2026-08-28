// discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx
import set from "../../../../../../_runtime/00002_set.js";
import fromStringAll from "../../../utils/BigFlagUtils.tsx";
import AgeRestrictionSource from "../../../shared-constants/AgeRestrictionSource.tsx";
import AgeRestrictionStatus8 from "../../../shared-constants/AgeRestrictionStatus.tsx";
import frozen from "../../../shared-constants/DiscordContentClassificationFlags.tsx";
import set2 from "../../../shared-constants/ContentRatingESRBRating.tsx";
import set3 from "../../../shared-constants/ContentRatingPEGIRating.tsx";
import set4 from "../../../shared-constants/ContentRatingGOPClassification.tsx";

function contentClassificationToAgeRestrictionConclusion(data) {
  if (null == data) {
    return obj;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        let ADULT = dependencyMap;
        const deserializeResult = fromStringAll.deserialize(data.discord_classifications);
        const obj14 = fromStringAll;
        const tmp29 = importAll;
        obj = { source: null, status: null };
        obj[0] = AgeRestrictionSource.AgeRestrictionSource.DISCORD_CLASSIFICATION;
        if (obj15.has(deserializeResult, frozen.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
          ADULT = tmp28(5026).AgeRestrictionStatus.ADULT;
          obj[1] = ADULT;
          let tmp12 = obj;
        } else {
          const tmp29Result = tmp29(506);
          const AgeRestrictionStatus3 = tmp28(5026).AgeRestrictionStatus;
          obj[1] = tmp29(506).hasAny(deserializeResult, tmp28(5027).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
          const hasAnyResult = tmp29(506).hasAny(deserializeResult, tmp28(5027).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        }
        items.push(tmp12);
        obj15 = fromStringAll;
      }
    } else if (null != data.manual_classifications) {
      obj1 = fromStringAll;
      const deserializeResult1 = obj1.deserialize(data.manual_classifications);
      let obj2 = fromStringAll;
      obj = { source: null, status: null };
      obj[0] = AgeRestrictionSource.AgeRestrictionSource.MANUAL_CLASSIFICATION;
      if (obj2.has(deserializeResult1, frozen.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj[1] = tmp4(5026).AgeRestrictionStatus.ADULT;
        let tmp9 = obj;
      } else {
        const tmp6Result = tmp6(506);
        const AgeRestrictionStatus2 = tmp4(5026).AgeRestrictionStatus;
        obj[1] = tmp6(506).hasAny(deserializeResult1, tmp4(5027).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj;
        const hasAnyResult1 = tmp6(506).hasAny(deserializeResult1, tmp4(5027).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
      }
      items.push(tmp9);
      tmp6 = importAll;
    } else if (null != data.automated_classifications) {
      const deserializeResult2 = fromStringAll.deserialize(data.automated_classifications);
      const obj11 = fromStringAll;
      const tmp26 = importAll;
      obj1 = { source: null, status: null };
      obj1[0] = AgeRestrictionSource.AgeRestrictionSource.AUTOMATED_CLASSIFICATION;
      if (obj12.has(deserializeResult2, frozen.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj1[1] = tmp24(5026).AgeRestrictionStatus.ADULT;
        let tmp2 = obj1;
      } else {
        const tmp26Result = tmp26(506);
        const AgeRestrictionStatus = tmp24(5026).AgeRestrictionStatus;
        obj1[1] = tmp26(506).hasAny(deserializeResult2, tmp24(5027).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj1;
        const hasAnyResult2 = tmp26(506).hasAny(deserializeResult2, tmp24(5027).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
      }
      items.push(tmp2);
      obj12 = fromStringAll;
    }
    if (null != data.agency_ratings) {
      if (null == data.agency_ratings.esrb) {
        if (null == data.agency_ratings.pegi) {
          if (null == data.agency_ratings.gop) {
            if (null != data.agency_ratings.igdb) {
              let themes = data.agency_ratings.igdb.themes;
              if (themes == null) {
                themes = [];
              }
              let AgeRestrictionStatus7 = AgeRestrictionStatus8.AgeRestrictionStatus;
              if (someResult) {
                let EVERYONE = AgeRestrictionStatus7.ADULT;
                let tmp21 = tmp18;
              } else {
                EVERYONE = AgeRestrictionStatus7.EVERYONE;
                tmp21 = tmp18;
              }
              obj2 = { source: null, status: null };
              obj2[0] = tmp21(5025).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB;
              obj2[1] = EVERYONE;
              AgeRestrictionStatus7 = items.push(obj2);
              someResult = themes.some((arg0) => {
                const ADULT_THEMES = callback(5031).ContentRatingIGDBThemeSets.ADULT_THEMES;
                return ADULT_THEMES.has(arg0);
              });
            }
          } else {
            let AGENCY_CLASSIFICATION_GOP = dependencyMap;
            const IS_ADULT = set4.ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus6 = AgeRestrictionStatus8.AgeRestrictionStatus;
            const obj3 = { source: null, status: null };
            AGENCY_CLASSIFICATION_GOP = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP;
            obj3[0] = AGENCY_CLASSIFICATION_GOP;
            obj3[1] = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            AgeRestrictionStatus6 = items.push(obj3);
            const tmp16 = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            const tmp35 = require;
          }
        } else {
          let AGENCY_CLASSIFICATION_PEGI = dependencyMap;
          const IS_ADULT_ONLY2 = set3.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem1 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus5 = AgeRestrictionStatus8.AgeRestrictionStatus;
          const obj4 = { source: null, status: null };
          AGENCY_CLASSIFICATION_PEGI = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI;
          obj4[0] = AGENCY_CLASSIFICATION_PEGI;
          obj4[1] = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          AgeRestrictionStatus5 = items.push(obj4);
          const tmp15 = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          const tmp33 = require;
        }
      } else {
        let AGENCY_CLASSIFICATION_ESRB = dependencyMap;
        const IS_ADULT_ONLY = set2.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem2 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus4 = AgeRestrictionStatus8.AgeRestrictionStatus;
        const obj5 = { source: null, status: null };
        AGENCY_CLASSIFICATION_ESRB = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB;
        obj5[0] = AGENCY_CLASSIFICATION_ESRB;
        obj5[1] = hasItem2 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
        AgeRestrictionStatus4 = items.push(obj5);
        const tmp14 = hasItem2 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
        const tmp31 = require;
      }
    }
    return (function _mostRestrictiveConclusion(items) {
      let tmp = null;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = tmp;
        if (null != tmp) {
          let tmp5 = callback2;
          let tmp6 = dependencyMap;
          obj = callback2(5032);
          let tmp7 = nextResult;
          let tmp8 = tmp;
          if (obj.compare(tmp3.status, tmp.status) > 0) {
            tmp = nextResult;
          }
        } else {
          tmp = nextResult;
        }
        continue;
      }
      if (tmp == null) {
        tmp = closure_4;
      }
      return tmp;
    })(items);
  }
}
let obj = { FULL: "full", MINIMAL: "minimal" };
obj = { source: AgeRestrictionSource.AgeRestrictionSource.NO_CLASSIFICATION, status: AgeRestrictionStatus8.AgeRestrictionStatus.EVERYONE };
const result = set.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export const ContentClassificationVariant = obj;
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };