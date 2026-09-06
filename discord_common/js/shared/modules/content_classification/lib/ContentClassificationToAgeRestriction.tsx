// discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx
import BigFlagUtilsAll from "../../../utils/BigFlagUtils.tsx";
import AgeRestrictionSource from "../../../shared-constants/AgeRestrictionSource.tsx";
import AgeRestrictionStatus8 from "../../../shared-constants/AgeRestrictionStatus.tsx";
import DiscordContentClassificationFlags from "../../../shared-constants/DiscordContentClassificationFlags.tsx";
import ContentRatingESRBRating from "../../../shared-constants/ContentRatingESRBRating.tsx";
import ContentRatingPEGIRating from "../../../shared-constants/ContentRatingPEGIRating.tsx";
import ContentRatingGOPClassification from "../../../shared-constants/ContentRatingGOPClassification.tsx";
import ContentRatingIGDBTheme from "../../../shared-constants/ContentRatingIGDBTheme.tsx";
import AgeRestrictionUtilsAll from "AgeRestrictionUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function contentClassificationToAgeRestrictionConclusion(data) {
  if (null == data) {
    return obj;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        let ADULT = dependencyMap;
        const deserializer3 = BigFlagUtilsAll;
        const deserializeResult = deserializer3.deserialize(data.discord_classifications);
        obj = { source: AgeRestrictionSource.AgeRestrictionSource.DISCORD_CLASSIFICATION, status: null };
        if (
          obj12.has(
            deserializeResult,
            DiscordContentClassificationFlags.DiscordContentClassificationFlags
              .EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
          )
        ) {
          ADULT = tmp28(5115).AgeRestrictionStatus.ADULT;
          obj.status = ADULT;
          let tmp12 = obj;
        } else {
          const tmp29Result = tmp29(1086);
          const AgeRestrictionStatus3 = tmp28(5115).AgeRestrictionStatus;
          obj.status = tmp29(1086).hasAny(
            deserializeResult,
            tmp28(5116).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
          )
            ? AgeRestrictionStatus3.ADULT
            : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
          const hasAnyResult = tmp29(1086).hasAny(
            deserializeResult,
            tmp28(5116).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
          );
        }
        items.push(tmp12);
        obj12 = BigFlagUtilsAll;
        tmp29 = importAll;
      }
    } else if (null != data.manual_classifications) {
      const deserializer = BigFlagUtilsAll;
      const deserializeResult1 = deserializer.deserialize(data.manual_classifications);
      let obj1 = BigFlagUtilsAll;
      obj = { source: AgeRestrictionSource.AgeRestrictionSource.MANUAL_CLASSIFICATION, status: null };
      if (
        obj1.has(
          deserializeResult1,
          DiscordContentClassificationFlags.DiscordContentClassificationFlags
            .EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
        )
      ) {
        obj.status = tmp4(5115).AgeRestrictionStatus.ADULT;
        let tmp9 = obj;
      } else {
        const tmp6Result = tmp6(1086);
        const AgeRestrictionStatus2 = tmp4(5115).AgeRestrictionStatus;
        obj.status = tmp6(1086).hasAny(
          deserializeResult1,
          tmp4(5116).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        )
          ? AgeRestrictionStatus2.ADULT
          : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj;
        const hasAnyResult1 = tmp6(1086).hasAny(
          deserializeResult1,
          tmp4(5116).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        );
      }
      items.push(tmp9);
      tmp6 = importAll;
    } else if (null != data.automated_classifications) {
      const deserializer2 = BigFlagUtilsAll;
      const deserializeResult2 = deserializer2.deserialize(data.automated_classifications);
      obj1 = { source: AgeRestrictionSource.AgeRestrictionSource.AUTOMATED_CLASSIFICATION, status: null };
      if (
        obj10.has(
          deserializeResult2,
          DiscordContentClassificationFlags.DiscordContentClassificationFlags
            .EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
        )
      ) {
        obj1.status = tmp24(5115).AgeRestrictionStatus.ADULT;
        let tmp2 = obj1;
      } else {
        const tmp26Result = tmp26(1086);
        const AgeRestrictionStatus = tmp24(5115).AgeRestrictionStatus;
        obj1.status = tmp26(1086).hasAny(
          deserializeResult2,
          tmp24(5116).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        )
          ? AgeRestrictionStatus.ADULT
          : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj1;
        const hasAnyResult2 = tmp26(1086).hasAny(
          deserializeResult2,
          tmp24(5116).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        );
      }
      items.push(tmp2);
      obj10 = BigFlagUtilsAll;
      tmp26 = importAll;
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
              const obj2 = { source: tmp21(5114).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB, status: EVERYONE };
              AgeRestrictionStatus7 = items.push(obj2);
              someResult = themes.some((item) => {
                const ADULT_THEMES = ContentRatingIGDBTheme.ContentRatingIGDBThemeSets.ADULT_THEMES;
                return ADULT_THEMES.has(item);
              });
            }
          } else {
            const IS_ADULT = ContentRatingGOPClassification.ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus6 = AgeRestrictionStatus8.AgeRestrictionStatus;
            const obj3 = { source: null, status: null };
            const AGENCY_CLASSIFICATION_GOP = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP;
            obj3.source = AGENCY_CLASSIFICATION_GOP;
            obj3.status = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            AgeRestrictionStatus6 = items.push(obj3);
            const tmp16 = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
          }
        } else {
          const IS_ADULT_ONLY2 = ContentRatingPEGIRating.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem1 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus5 = AgeRestrictionStatus8.AgeRestrictionStatus;
          const obj4 = { source: null, status: null };
          const AGENCY_CLASSIFICATION_PEGI = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI;
          obj4.source = AGENCY_CLASSIFICATION_PEGI;
          obj4.status = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          AgeRestrictionStatus5 = items.push(obj4);
          const tmp15 = hasItem1 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
        }
      } else {
        const IS_ADULT_ONLY = ContentRatingESRBRating.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem2 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus4 = AgeRestrictionStatus8.AgeRestrictionStatus;
        const obj5 = { source: null, status: null };
        const AGENCY_CLASSIFICATION_ESRB = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB;
        obj5.source = AGENCY_CLASSIFICATION_ESRB;
        obj5.status = hasItem2 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
        AgeRestrictionStatus4 = items.push(obj5);
        const tmp14 = hasItem2 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
      }
    }
    return (function _mostRestrictiveConclusion(items) {
      let tmp = null;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != tmp) {
          obj = AgeRestrictionUtilsAll;
          if (obj.compare(tmp3.status, tmp.status) > 0) {
            tmp = nextResult;
          }
        } else {
          tmp = nextResult;
        }
        continue;
      }
      if (tmp == null) {
        tmp = closure_1_4;
      }
      return tmp;
    })(items);
  }
}
let obj = { FULL: "full", MINIMAL: "minimal" };
obj = {
  source: AgeRestrictionSource.AgeRestrictionSource.NO_CLASSIFICATION,
  status: AgeRestrictionStatus8.AgeRestrictionStatus.EVERYONE,
};
const result = size.fileFinishedImporting(
  "../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx",
);

export const ContentClassificationVariant = obj;
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };
