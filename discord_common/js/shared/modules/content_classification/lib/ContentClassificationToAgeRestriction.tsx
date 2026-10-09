// discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx
import BigFlagUtilsAll from "../../../utils/BigFlagUtils.tsx";
import AgeRestrictionSource from "../../../shared-constants/AgeRestrictionSource.tsx";
import AgeRestrictionStatus9 from "../../../shared-constants/AgeRestrictionStatus.tsx";
import DiscordContentClassificationFlags from "../../../shared-constants/DiscordContentClassificationFlags.tsx";
import ContentRatingESRBRating from "../../../shared-constants/ContentRatingESRBRating.tsx";
import ContentRatingPEGIRating from "../../../shared-constants/ContentRatingPEGIRating.tsx";
import ContentRatingGOPClassification from "../../../shared-constants/ContentRatingGOPClassification.tsx";
import ContentRatingIGDBTheme from "../../../shared-constants/ContentRatingIGDBTheme.tsx";
import ContentRatingAppleRating from "../../../shared-constants/ContentRatingAppleRating.tsx";
import AgeRestrictionUtilsAll from "AgeRestrictionUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function contentClassificationToAgeRestrictionConclusion(data) {
  if (null == data) {
    return obj2;
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
          obj13.has(
            deserializeResult,
            DiscordContentClassificationFlags.DiscordContentClassificationFlags
              .EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
          )
        ) {
          ADULT = AgeRestrictionStatus9.AgeRestrictionStatus.ADULT;
          obj.status = ADULT;
          let tmp12 = obj;
        } else {
          const tmp30Result = BigFlagUtilsAll;
          const AgeRestrictionStatus3 = AgeRestrictionStatus9.AgeRestrictionStatus;
          obj.status = BigFlagUtilsAll.hasAny(
            deserializeResult,
            DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
          )
            ? AgeRestrictionStatus3.ADULT
            : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
          const hasAnyResult = BigFlagUtilsAll.hasAny(
            deserializeResult,
            DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
          );
        }
        items.push(tmp12);
        obj13 = BigFlagUtilsAll;
      }
    } else if (null != data.manual_classifications) {
      const deserializer = BigFlagUtilsAll;
      const deserializeResult1 = deserializer.deserialize(data.manual_classifications);
      obj2 = BigFlagUtilsAll;
      const obj3 = { source: AgeRestrictionSource.AgeRestrictionSource.MANUAL_CLASSIFICATION, status: null };
      if (
        obj2.has(
          deserializeResult1,
          DiscordContentClassificationFlags.DiscordContentClassificationFlags
            .EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
        )
      ) {
        obj3.status = AgeRestrictionStatus9.AgeRestrictionStatus.ADULT;
        let tmp9 = obj3;
      } else {
        const tmp6Result = BigFlagUtilsAll;
        const AgeRestrictionStatus2 = AgeRestrictionStatus9.AgeRestrictionStatus;
        obj3.status = BigFlagUtilsAll.hasAny(
          deserializeResult1,
          DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        )
          ? AgeRestrictionStatus2.ADULT
          : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj3;
        const hasAnyResult1 = BigFlagUtilsAll.hasAny(
          deserializeResult1,
          DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        );
      }
      items.push(tmp9);
    } else if (null != data.automated_classifications) {
      const deserializer2 = BigFlagUtilsAll;
      const deserializeResult2 = deserializer2.deserialize(data.automated_classifications);
      const obj4 = { source: AgeRestrictionSource.AgeRestrictionSource.AUTOMATED_CLASSIFICATION, status: null };
      if (
        obj11.has(
          deserializeResult2,
          DiscordContentClassificationFlags.DiscordContentClassificationFlags
            .EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
        )
      ) {
        obj4.status = AgeRestrictionStatus9.AgeRestrictionStatus.ADULT;
        let tmp2 = obj4;
      } else {
        const tmp27Result = BigFlagUtilsAll;
        const AgeRestrictionStatus = AgeRestrictionStatus9.AgeRestrictionStatus;
        obj4.status = BigFlagUtilsAll.hasAny(
          deserializeResult2,
          DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        )
          ? AgeRestrictionStatus.ADULT
          : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj4;
        const hasAnyResult2 = BigFlagUtilsAll.hasAny(
          deserializeResult2,
          DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT,
        );
      }
      items.push(tmp2);
      obj11 = BigFlagUtilsAll;
    }
    if (null != data.agency_ratings) {
      if (null == data.agency_ratings.esrb) {
        if (null == data.agency_ratings.pegi) {
          if (null == data.agency_ratings.gop) {
            if (null == data.agency_ratings.igdb) {
              if (null != data.agency_ratings.apple) {
                const IS_ADULT_ONLY3 = ContentRatingAppleRating.ContentRatingAppleRatingSets.IS_ADULT_ONLY;
                const hasItem = IS_ADULT_ONLY3.has(data.agency_ratings.apple.rating);
                let AgeRestrictionStatus8 = AgeRestrictionStatus9.AgeRestrictionStatus;
                const obj5 = { source: null, status: null };
                const AGENCY_CLASSIFICATION_APPLE =
                  AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_APPLE;
                obj5.source = AGENCY_CLASSIFICATION_APPLE;
                obj5.status = hasItem ? AgeRestrictionStatus8.ADULT : AgeRestrictionStatus8.EVERYONE;
                AgeRestrictionStatus8 = items.push(obj5);
                const tmp22 = hasItem ? AgeRestrictionStatus8.ADULT : AgeRestrictionStatus8.EVERYONE;
              }
            } else {
              let themes = data.agency_ratings.igdb.themes;
              if (themes == null) {
                themes = [];
              }
              let AgeRestrictionStatus7 = AgeRestrictionStatus9.AgeRestrictionStatus;
              if (someResult) {
                let EVERYONE = AgeRestrictionStatus7.ADULT;
                let tmp21 = require;
              } else {
                EVERYONE = AgeRestrictionStatus7.EVERYONE;
                tmp21 = require;
              }
              const obj6 = { source: tmp21(6051).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB, status: EVERYONE };
              AgeRestrictionStatus7 = items.push(obj6);
              someResult = themes.some((item) => {
                const ADULT_THEMES = ContentRatingIGDBTheme.ContentRatingIGDBThemeSets.ADULT_THEMES;
                return ADULT_THEMES.has(item);
              });
            }
          } else {
            const IS_ADULT = ContentRatingGOPClassification.ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem1 = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus6 = AgeRestrictionStatus9.AgeRestrictionStatus;
            const obj7 = { source: null, status: null };
            const AGENCY_CLASSIFICATION_GOP = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP;
            obj7.source = AGENCY_CLASSIFICATION_GOP;
            obj7.status = hasItem1 ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
            AgeRestrictionStatus6 = items.push(obj7);
            const tmp16 = hasItem1 ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
          }
        } else {
          const IS_ADULT_ONLY2 = ContentRatingPEGIRating.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem2 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus5 = AgeRestrictionStatus9.AgeRestrictionStatus;
          const obj8 = { source: null, status: null };
          const AGENCY_CLASSIFICATION_PEGI = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI;
          obj8.source = AGENCY_CLASSIFICATION_PEGI;
          obj8.status = hasItem2 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
          AgeRestrictionStatus5 = items.push(obj8);
          const tmp15 = hasItem2 ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
        }
      } else {
        const IS_ADULT_ONLY = ContentRatingESRBRating.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem3 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus4 = AgeRestrictionStatus9.AgeRestrictionStatus;
        const obj9 = { source: null, status: null };
        const AGENCY_CLASSIFICATION_ESRB = AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB;
        obj9.source = AGENCY_CLASSIFICATION_ESRB;
        obj9.status = hasItem3 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
        AgeRestrictionStatus4 = items.push(obj9);
        const tmp14 = hasItem3 ? AgeRestrictionStatus4.ADULT : AgeRestrictionStatus4.EVERYONE;
      }
    }
    return (function _mostRestrictiveConclusion(items) {
      let tmp = null;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != tmp) {
          let obj = AgeRestrictionUtilsAll;
          if (obj.compare(tmp3.status, tmp.status) > 0) {
            tmp = nextResult;
          }
        } else {
          tmp = nextResult;
        }
        continue;
      }
      if (tmp == null) {
        tmp = obj2;
      }
      return tmp;
    })(items);
  }
}
const ContentClassificationVariant = { FULL: "full", MINIMAL: "minimal" };
let obj2 = {
  source: AgeRestrictionSource.AgeRestrictionSource.NO_CLASSIFICATION,
  status: AgeRestrictionStatus9.AgeRestrictionStatus.EVERYONE,
};
const result = size.fileFinishedImporting(
  "../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx",
);

export { ContentClassificationVariant };
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };
