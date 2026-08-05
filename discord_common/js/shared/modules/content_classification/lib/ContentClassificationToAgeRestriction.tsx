// discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx
function contentClassificationToAgeRestrictionConclusion(data) {
  if (null == data) {
    return obj;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        let ADULT = dependencyMap;
        const deserializeResult = importAll(506).deserialize(data.discord_classifications);
        const obj14 = importAll(506);
        const tmp29 = importAll;
        obj = { source: null, status: null };
        obj[0] = require("../../../shared-constants/AgeRestrictionSource.tsx") /* AgeRestrictionSource */.AgeRestrictionSource.DISCORD_CLASSIFICATION;
        if (obj15.has(deserializeResult, require("../../../shared-constants/DiscordContentClassificationFlags.tsx") /* frozen */.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
          ADULT = tmp28(7007).AgeRestrictionStatus.ADULT;
          obj[1] = ADULT;
          let tmp12 = obj;
        } else {
          const tmp29Result = tmp29(506);
          const AgeRestrictionStatus3 = tmp28(7007).AgeRestrictionStatus;
          obj[1] = tmp29(506).hasAny(deserializeResult, tmp28(7008).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
          const hasAnyResult = tmp29(506).hasAny(deserializeResult, tmp28(7008).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        }
        items.push(tmp12);
        obj15 = importAll(506);
      }
    } else if (null != data.manual_classifications) {
      let obj1 = importAll(506);
      const deserializeResult1 = obj1.deserialize(data.manual_classifications);
      let obj2 = importAll(506);
      obj = { source: null, status: null };
      obj[0] = require("../../../shared-constants/AgeRestrictionSource.tsx") /* AgeRestrictionSource */.AgeRestrictionSource.MANUAL_CLASSIFICATION;
      if (obj2.has(deserializeResult1, require("../../../shared-constants/DiscordContentClassificationFlags.tsx") /* frozen */.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj[1] = tmp4(7007).AgeRestrictionStatus.ADULT;
        let tmp9 = obj;
      } else {
        const tmp6Result = tmp6(506);
        const AgeRestrictionStatus2 = tmp4(7007).AgeRestrictionStatus;
        obj[1] = tmp6(506).hasAny(deserializeResult1, tmp4(7008).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj;
        const hasAnyResult1 = tmp6(506).hasAny(deserializeResult1, tmp4(7008).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
      }
      items.push(tmp9);
      tmp6 = importAll;
    } else if (null != data.automated_classifications) {
      const deserializeResult2 = importAll(506).deserialize(data.automated_classifications);
      const obj11 = importAll(506);
      const tmp26 = importAll;
      obj1 = { source: null, status: null };
      obj1[0] = require("../../../shared-constants/AgeRestrictionSource.tsx") /* AgeRestrictionSource */.AgeRestrictionSource.AUTOMATED_CLASSIFICATION;
      if (obj12.has(deserializeResult2, require("../../../shared-constants/DiscordContentClassificationFlags.tsx") /* frozen */.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj1[1] = tmp24(7007).AgeRestrictionStatus.ADULT;
        let tmp2 = obj1;
      } else {
        const tmp26Result = tmp26(506);
        const AgeRestrictionStatus = tmp24(7007).AgeRestrictionStatus;
        obj1[1] = tmp26(506).hasAny(deserializeResult2, tmp24(7008).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj1;
        const hasAnyResult2 = tmp26(506).hasAny(deserializeResult2, tmp24(7008).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
      }
      items.push(tmp2);
      obj12 = importAll(506);
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
              let AgeRestrictionStatus7 = require("../../../shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AgeRestrictionStatus;
              if (someResult) {
                let EVERYONE = AgeRestrictionStatus7.ADULT;
                let tmp21 = tmp18;
              } else {
                EVERYONE = AgeRestrictionStatus7.EVERYONE;
                tmp21 = tmp18;
              }
              obj2 = { source: null, status: null };
              obj2[0] = tmp21(7006).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB;
              obj2[1] = EVERYONE;
              AgeRestrictionStatus7 = items.push(obj2);
              someResult = themes.some((arg0) => {
                const ADULT_THEMES = callback(7012).ContentRatingIGDBThemeSets.ADULT_THEMES;
                return ADULT_THEMES.has(arg0);
              });
            }
          } else {
            let AGENCY_CLASSIFICATION_GOP = dependencyMap;
            const IS_ADULT = require("../../../shared-constants/ContentRatingGOPClassification.tsx") /* set */.ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus6 = require("../../../shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AgeRestrictionStatus;
            const obj3 = { source: null, status: null };
            AGENCY_CLASSIFICATION_GOP = require("../../../shared-constants/AgeRestrictionSource.tsx") /* AgeRestrictionSource */.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP;
            obj3[0] = AGENCY_CLASSIFICATION_GOP;
            obj3[1] = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            AgeRestrictionStatus6 = items.push(obj3);
            const tmp16 = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            const tmp35 = require;
          }
        } else {
          let AGENCY_CLASSIFICATION_PEGI = dependencyMap;
          const IS_ADULT_ONLY2 = require("../../../shared-constants/ContentRatingPEGIRating.tsx") /* set */.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem1 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus5 = require("../../../shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AgeRestrictionStatus;
          const obj4 = { source: null, status: null };
          AGENCY_CLASSIFICATION_PEGI = require("../../../shared-constants/AgeRestrictionSource.tsx") /* AgeRestrictionSource */.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI;
          obj4[0] = AGENCY_CLASSIFICATION_PEGI;
          obj4[1] = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          AgeRestrictionStatus5 = items.push(obj4);
          const tmp15 = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          const tmp33 = require;
        }
      } else {
        let AGENCY_CLASSIFICATION_ESRB = dependencyMap;
        const IS_ADULT_ONLY = require("../../../shared-constants/ContentRatingESRBRating.tsx") /* set */.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem2 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus4 = require("../../../shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AgeRestrictionStatus;
        const obj5 = { source: null, status: null };
        AGENCY_CLASSIFICATION_ESRB = require("../../../shared-constants/AgeRestrictionSource.tsx") /* AgeRestrictionSource */.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB;
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
          let obj = callback2(7013);
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
obj = { source: require("AgeRestrictionSource").AgeRestrictionSource.NO_CLASSIFICATION, status: require("AgeRestrictionStatus").AgeRestrictionStatus.EVERYONE };
const result = require("fromString").fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export const ContentClassificationVariant = obj;
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };