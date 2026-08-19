// === Module 4787: contentClassificationToAgeRestrictionConclusion ===

// Module 4787 (contentClassificationToAgeRestrictionConclusion)
import obj132 from "obj132" /* 2 */;
import fromStringAll from "fromString" /* 506 */;
import AgeRestrictionSource from "AgeRestrictionSource" /* 4788 */;
import AgeRestrictionStatus8 from "AgeRestrictionStatus" /* 4789 */;
import frozen from "frozen" /* 4790 */;
import set from "set" /* 4791 */;
import set2 from "set" /* 4792 */;
import set3 from "set" /* 4793 */;

function contentClassificationToAgeRestrictionConclusion(data) {
  if (null == data) {
    return obj;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        let ADULT = dependencyMap;
        const deserializer3 = fromStringAll;
        const deserializeResult = deserializer3.deserialize(data.discord_classifications);
        obj = { source: null, status: null };
        obj[0] = AgeRestrictionSource.AgeRestrictionSource.DISCORD_CLASSIFICATION;
        if (obj12.has(deserializeResult, frozen.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
          ADULT = AgeRestrictionStatus8.AgeRestrictionStatus.ADULT;
          obj[1] = ADULT;
          let tmp12 = obj;
        } else {
          const tmp29Result = fromStringAll;
          const AgeRestrictionStatus3 = AgeRestrictionStatus8.AgeRestrictionStatus;
          obj[1] = fromStringAll.hasAny(deserializeResult, frozen.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
          const hasAnyResult = fromStringAll.hasAny(deserializeResult, frozen.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        }
        items.push(tmp12);
        obj12 = fromStringAll;
      }
    } else if (null != data.manual_classifications) {
      const deserializer = fromStringAll;
      const deserializeResult1 = deserializer.deserialize(data.manual_classifications);
      obj1 = fromStringAll;
      obj = { source: null, status: null };
      obj[0] = AgeRestrictionSource.AgeRestrictionSource.MANUAL_CLASSIFICATION;
      if (obj1.has(deserializeResult1, frozen.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj[1] = AgeRestrictionStatus8.AgeRestrictionStatus.ADULT;
        let tmp9 = obj;
      } else {
        const tmp6Result = fromStringAll;
        const AgeRestrictionStatus2 = AgeRestrictionStatus8.AgeRestrictionStatus;
        obj[1] = fromStringAll.hasAny(deserializeResult1, frozen.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj;
        const hasAnyResult1 = fromStringAll.hasAny(deserializeResult1, frozen.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
      }
      items.push(tmp9);
    } else if (null != data.automated_classifications) {
      const deserializer2 = fromStringAll;
      const deserializeResult2 = deserializer2.deserialize(data.automated_classifications);
      obj1 = { source: null, status: null };
      obj1[0] = AgeRestrictionSource.AgeRestrictionSource.AUTOMATED_CLASSIFICATION;
      if (obj10.has(deserializeResult2, frozen.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj1[1] = AgeRestrictionStatus8.AgeRestrictionStatus.ADULT;
        let tmp2 = obj1;
      } else {
        const tmp26Result = fromStringAll;
        const AgeRestrictionStatus = AgeRestrictionStatus8.AgeRestrictionStatus;
        obj1[1] = fromStringAll.hasAny(deserializeResult2, frozen.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj1;
        const hasAnyResult2 = fromStringAll.hasAny(deserializeResult2, frozen.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
      }
      items.push(tmp2);
      obj10 = fromStringAll;
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
                let tmp21 = require;
              } else {
                EVERYONE = AgeRestrictionStatus7.EVERYONE;
                tmp21 = require;
              }
              const obj2 = { source: null, status: null };
              obj2[0] = tmp21(4788).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB;
              obj2[1] = EVERYONE;
              AgeRestrictionStatus7 = items.push(obj2);
              someResult = themes.some((item, index) => {
                const ADULT_THEMES = callback(4794).ContentRatingIGDBThemeSets.ADULT_THEMES;
                return ADULT_THEMES.has(item);
              });
            }
          } else {
            const IS_ADULT = set3.ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus6 = AgeRestrictionStatus8.AgeRestrictionStatus;
            const obj3 = { source: null, status: null };
            const AGENCY_CLASSIFICATION_GOP = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP;
            obj3[0] = AGENCY_CLASSIFICATION_GOP;
            obj3[1] = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            AgeRestrictionStatus6 = items.push(obj3);
          }
        } else {
          const IS_ADULT_ONLY2 = set2.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem1 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus5 = AgeRestrictionStatus8.AgeRestrictionStatus;
          const obj4 = { source: null, status: null };
          const AGENCY_CLASSIFICATION_PEGI = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI;
          obj4[0] = AGENCY_CLASSIFICATION_PEGI;
          obj4[1] = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          AgeRestrictionStatus5 = items.push(obj4);
        }
      } else {
        const IS_ADULT_ONLY = set.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem2 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus4 = AgeRestrictionStatus8.AgeRestrictionStatus;
        const obj5 = { source: null, status: null };
        const AGENCY_CLASSIFICATION_ESRB = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB;
        obj5[0] = AGENCY_CLASSIFICATION_ESRB;
        obj5[1] = hasItem2 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
        AgeRestrictionStatus4 = items.push(obj5);
      }
    }
    return (function _mostRestrictiveConclusion(items) {
      let tmp = null;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != tmp) {
          obj = callback2(4795);
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
let obj = { source: AgeRestrictionSource.AgeRestrictionSource.NO_CLASSIFICATION, status: AgeRestrictionStatus8.AgeRestrictionStatus.EVERYONE };
const result = obj132.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export const ContentClassificationVariant = obj;
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };