// discord_app/modules/user_profile/native/UserProfileRecentActivityCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UnknownGameIcon from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import utils from "../../content_inventory/utils.tsx";
import ContentInventoryTypes from "../../content_inventory/ContentInventoryTypes.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import ContentInventoryActivityImageUtils from "../../content_inventory/ContentInventoryActivityImageUtils.tsx";
import BadgesAll from "../../icymi/native/content_inventory/Badges.tsx";
import TrendingType from "../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import useTrackUserProfileActivityActionDefault from "../hooks/useTrackUserProfileActivityAction.tsx";
import useTrackUserProfileActivityViewDefault from "../hooks/native/useTrackUserProfileActivityView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function getEntryText(entry) {
  if (obj.isGamingLikeEntry(entry)) {
    const obj2 = { title: entry.extra.game_name };
    return obj2;
  } else {
    if (tmpResult.isWatchedMediaEntry(entry)) {
      const obj3 = { title: entry.extra.media_title, subtitle: entry.extra.media_subtitle };
      return obj3;
    } else {
      if (tmpResult3.isListenedSessionEntry(entry)) {
        const first = entry.extra.entries[0];
        let media;
        if (first != null) {
          media = first.media;
        }
        let title;
        if (media != null) {
          title = media.title;
        }
        const obj4 = { title, subtitle: null };
        let name;
        if (media != null) {
          const first1 = media.artists[0];
          if (first1 != null) {
            name = first1.name;
          }
        }
        obj4.subtitle = name;
        return obj4;
      } else {
        if (tmpResult4.isLaunchedActivityEntry(entry)) {
          const obj5 = { title: entry.extra.activity_name };
          let obj6 = obj5;
        } else {
          obj6 = { title: "r" };
        }
        return obj6;
      }
      tmpResult3 = ContentInventoryTypes;
    }
    tmpResult = ContentInventoryTypes;
  }
  obj = ContentInventoryTypes;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [
  {
    Badge: BadgesAll.GameTimestampBadge,
    predicate() {
      return true;
    },
  },
  ,
  ,
  ,
  ,
];
let obj = {
  Badge: BadgesAll.GameTimestampBadge,
  predicate() {
    return true;
  },
};
items[1] = { Badge: BadgesAll.NewGameBadge, predicate: fn(8271).isEntryNew };
let obj2 = { Badge: BadgesAll.NewGameBadge, predicate: fn(8271).isEntryNew };
items[2] = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  },
};
let obj3 = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  },
};
items[3] = {
  Badge: BadgesAll.TrendingBadge,
  predicate(traits) {
    const trendingType = utils.getTrendingType(traits);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  },
};
let obj4 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(traits) {
    const trendingType = utils.getTrendingType(traits);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  },
};
items[4] = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(traits) {
    return null != utils.getResurrectedEntryLastPlayTime(traits);
  },
};
let obj5 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(traits) {
    return null != utils.getResurrectedEntryLastPlayTime(traits);
  },
};
items[5] = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    let tmp3 = true === utils.isEntryMarathon(entry);
    if (tmp3) {
      tmp3 = null != utils.getMarathonDescription(entry).text;
      const tmpResult = utils;
    }
    return tmp3;
  },
};
const createStyles = fn(5092);
let obj7 = {
  body: null,
  content: null,
  imageContainer: null,
  imageAspectRatio: null,
  posterImageAspectRatio: null,
  largeImage: null,
  smallImageBackground: null,
  smallImage: null,
  badges: null,
  badgeCell: null,
};
let obj6 = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    let tmp3 = true === utils.isEntryMarathon(entry);
    if (tmp3) {
      tmp3 = null != utils.getMarathonDescription(entry).text;
      const tmpResult = utils;
    }
    return tmp3;
  },
};
obj7.body = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj7.content = { flex: 1 };
obj7.imageContainer = { position: "relative" };
obj7.imageAspectRatio = { width: 60, maxHeight: 60, aspectRatio: "1 / 1" };
obj7.posterImageAspectRatio = { width: 60, maxHeight: 100, aspectRatio: "2 / 3" };
let size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
obj7.largeImage = size;
const rect = {
  borderRadius: 16,
  position: "absolute",
  right: -4,
  bottom: -4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj7.smallImageBackground = rect;
obj7.smallImage = { width: 24, height: 24, borderRadius: 12 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj7.badges = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
};
const obj10 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
};
obj7.badgeCell = { width: "50%", paddingRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj7);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GamingEntryBadges(entry) {
      let tmp2 = dependencyMap;
      const cResult = badgeCell(576).c(14);
      badgeCell = entry.entry;
      let str = closure_9();
      if (cResult[0] === badgeCell) {
        if (cResult[1] === str.badgeCell) {
          if (cResult[2] === str.badges) {
            if (cResult[9] === cResult[3]) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === tmp7) {
                    let tmp12 = cResult[13];
                  }
                  return tmp12;
                }
              }
            }
            const obj2 = { location: cResult[4], style: cResult[5], children: cResult[6] };
            const tmp14 = closure_6(cResult[3], obj2);
            cResult[9] = cResult[3];
            cResult[10] = cResult[4];
            cResult[11] = cResult[5];
            cResult[12] = cResult[6];
            cResult[13] = tmp14;
            tmp12 = tmp14;
          }
        }
      }
      if (cResult[7] !== badgeCell) {
        class E {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
        cResult[7] = badgeCell;
        cResult[8] = E;
      } else {
        class E {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
      }
      const found = items.filter(E);
      let TopGameBadge = importAll;
      let obj = badgeCell(576);
      if (tmpResult.isTopGameEntry(badgeCell)) {
        class E {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
        const obj3 = { style: str.badgeCell, children: null };
        TopGameBadge = BadgesAll.TopGameBadge;
        const obj4 = { entry: badgeCell };
        tmp2 = closure_6(TopGameBadge, obj4);
        obj3.children = tmp2;
        const tmp10 = closure_6(View, obj3);
      } else {
        class E {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
      }
      cResult[0] = badgeCell;
      badgeCell = str.badgeCell;
      cResult[1] = badgeCell;
      cResult[2] = str.badges;
      cResult[3] = BadgesAll.BadgesContainer;
      str = "user-profile";
      cResult[4] = "user-profile";
      cResult[5] = str.badges;
      cResult[6] = tmp10;
      tmpResult = badgeCell(8459);
    }
  : function GamingEntryBadges(entry) {
      entry = entry.entry;
      const tmp = closure_9();
      const badgeCell = tmp;
      const found = items.filter((predicate) => predicate.predicate(entry));
      let obj = { location: "user-profile", style: tmp.badges, children: null };
      if (obj2.isTopGameEntry(entry)) {
        const obj3 = { style: tmp.badgeCell, children: null };
        const obj4 = { entry };
        obj3.children = closure_6(BadgesAll.TopGameBadge, obj4);
        let mapped = closure_6(View, obj3);
      } else {
        mapped = found.map((Badge, index) => {
          const obj = { style: badgeCell.badgeCell, children: timestampProducer(Badge.Badge, { entry }) };
          return timestampProducer(View, obj, index);
        });
      }
      obj.children = mapped;
      return closure_6(BadgesAll.BadgesContainer, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EntryImage(poster) {
        const cResult = c.c(26);
        ({ largeImage, smallImage } = poster);
        const tmp4 = closure_9();
        let src;
        if (largeImage != null) {
          src = largeImage.src;
        }
        if (null == src) {
          if (cResult[0] === tmp4.imageAspectRatio) {
            if (cResult[1] === tmp4.imageContainer) {
              let tmp25 = cResult[2];
            }
            const tmpResult = shared;
            const colors = nativeDefault.colors;
            const tmp28 = shared.isThemeDark(obj2.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
            if (cResult[3] === tmp4.largeImage) {
              if (cResult[4] === tmp28) {
                let tmp29 = cResult[5];
              }
              if (cResult[6] === tmp25) {
                if (cResult[7] === tmp29) {
                  let tmp32 = cResult[8];
                }
                return tmp32;
              }
              const obj3 = { style: tmp25, children: tmp29 };
              const tmp35 = timestampProducer(View, obj3);
              cResult[6] = tmp25;
              cResult[7] = tmp29;
              cResult[8] = tmp35;
              tmp32 = tmp35;
            }
            const obj4 = { size: "custom", style: tmp4.largeImage, color: tmp28 };
            const tmp31 = timestampProducer(UnknownGameIcon.UnknownGameIcon, obj4);
            cResult[3] = tmp4.largeImage;
            cResult[4] = tmp28;
            cResult[5] = tmp31;
            tmp29 = tmp31;
            const isThemeDarkResult = shared.isThemeDark(obj2.useThemeContext().theme);
          }
          items = [,];
          ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp4);
          cResult[0] = tmp4.imageAspectRatio;
          cResult[1] = tmp4.imageContainer;
          cResult[2] = items;
          tmp25 = items;
        } else {
          const tmp6 = poster.poster ? tmp4.posterImageAspectRatio : tmp4.imageAspectRatio;
          if (cResult[9] === tmp4.imageContainer) {
            if (cResult[10] === tmp6) {
              let tmp7 = cResult[11];
            }
            if (cResult[12] !== largeImage.src) {
              const source = AvatarUtils.makeSource(largeImage.src);
              cResult[12] = largeImage.src;
              cResult[13] = source;
              let tmp8 = source;
              const tmpResult3 = AvatarUtils;
            } else {
              tmp8 = cResult[13];
            }
            if (cResult[14] === largeImage.alt) {
              if (cResult[15] === tmp4.largeImage) {
                if (cResult[16] === tmp8) {
                  let tmp10 = cResult[17];
                }
                if (cResult[18] === smallImage) {
                  if (cResult[19] === tmp4.smallImage) {
                    if (cResult[20] === tmp4.smallImageBackground) {
                      let tmp14 = cResult[21];
                    }
                    if (cResult[22] === tmp7) {
                      if (cResult[23] === tmp10) {
                        if (cResult[24] === tmp14) {
                          let tmp21 = cResult[25];
                        }
                        return tmp21;
                      }
                    }
                    const obj5 = { style: tmp7, children: null };
                    const items1 = [tmp10, tmp14];
                    obj5.children = items1;
                    const tmp24 = React5(View, obj5);
                    cResult[22] = tmp7;
                    cResult[23] = tmp10;
                    cResult[24] = tmp14;
                    cResult[25] = tmp24;
                    tmp21 = tmp24;
                  }
                }
                let src1;
                if (smallImage != null) {
                  src1 = smallImage.src;
                }
                let tmp16 = null != src1;
                if (tmp16) {
                  const obj6 = { style: tmp4.smallImageBackground, children: null };
                  const obj7 = { source: null, accessibilityLabel: null, style: null };
                  const tmp20 = FastImageDefault;
                  obj7.source = AvatarUtils.makeSource(smallImage.src);
                  obj7.accessibilityLabel = smallImage.alt;
                  obj7.style = tmp4.smallImage;
                  obj6.children = timestampProducer(tmp20, obj7);
                  tmp16 = timestampProducer(View, obj6);
                  const tmpResult4 = AvatarUtils;
                }
                cResult[18] = smallImage;
                cResult[19] = tmp4.smallImage;
                cResult[20] = tmp4.smallImageBackground;
                cResult[21] = tmp16;
                tmp14 = tmp16;
              }
            }
            const obj8 = { source: tmp8, accessibilityLabel: largeImage.alt, style: tmp4.largeImage };
            const tmp13 = timestampProducer(FastImageDefault, obj8);
            cResult[14] = largeImage.alt;
            cResult[15] = tmp4.largeImage;
            cResult[16] = tmp8;
            cResult[17] = tmp13;
            tmp10 = tmp13;
          }
          const items2 = [tmp4.imageContainer, tmp6];
          cResult[9] = tmp4.imageContainer;
          cResult[10] = tmp6;
          cResult[11] = items2;
          tmp7 = items2;
        }
        obj2 = native;
      }
    : function EntryImage(poster) {
        ({ largeImage, smallImage } = poster);
        const tmp = closure_9();
        let src;
        if (largeImage != null) {
          src = largeImage.src;
        }
        if (null == src) {
          const obj2 = { style: null, children: null };
          items = [,];
          ({ imageContainer: arr2[0], imageAspectRatio: arr2[1] } = tmp);
          obj2.style = items;
          let obj3 = { size: "custom", style: tmp.largeImage, color: null };
          const tmp2Result = shared;
          const colors = nativeDefault.colors;
          obj3.color = shared.isThemeDark(obj.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
          obj3 = timestampProducer(UnknownGameIcon.UnknownGameIcon, obj3);
          obj2.children = obj3;
          timestampProducer(View, obj2);
          const isThemeDarkResult = shared.isThemeDark(obj.useThemeContext().theme);
        } else {
          const items1 = [tmp.imageContainer];
          const obj4 = { style: null, children: null };
          items1[1] = poster.poster ? tmp.posterImageAspectRatio : tmp.imageAspectRatio;
          obj4.style = items1;
          const obj5 = { source: null, accessibilityLabel: null, style: null };
          const tmp7 = FastImageDefault;
          obj5.source = AvatarUtils.makeSource(largeImage.src);
          obj5.accessibilityLabel = largeImage.alt;
          obj5.style = tmp.largeImage;
          const items2 = [timestampProducer(tmp7, obj5)];
          let src1;
          if (smallImage != null) {
            src1 = smallImage.src;
          }
          let tmp5Result = null != src1;
          if (tmp5Result) {
            const obj6 = { style: tmp.smallImageBackground, children: null };
            const obj7 = { source: null, accessibilityLabel: null, style: null };
            const tmp6Result = FastImageDefault;
            obj7.source = AvatarUtils.makeSource(smallImage.src);
            obj7.accessibilityLabel = smallImage.alt;
            obj7.style = tmp.smallImage;
            obj6.children = timestampProducer(tmp6Result, obj7);
            tmp5Result = timestampProducer(View, obj6);
            const tmp2Result4 = AvatarUtils;
          }
          items2[1] = tmp5Result;
          obj4.children = items2;
          return React5(View, obj4);
        }
        obj = native;
      },
);
ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EntryCardBody(arg0) {
        const cResult = c.c(24);
        ({ entry, largeImage, smallImage, title, subtitle, style } = arg0);
        const tmp4 = closure_9();
        if (cResult[0] !== entry) {
          const isWatchedMediaEntryResult = ContentInventoryTypes.isWatchedMediaEntry(entry);
          cResult[0] = entry;
          cResult[1] = isWatchedMediaEntryResult;
          let tmp5 = isWatchedMediaEntryResult;
          const tmpResult = ContentInventoryTypes;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === largeImage) {
          if (cResult[3] === smallImage) {
            if (cResult[4] === tmp5) {
              let tmp7 = cResult[5];
            }
            if (cResult[6] !== title) {
              const isNullOrEmptyResult = StringUtils.isNullOrEmpty(title);
              let tmp11 = !isNullOrEmptyResult;
              if (!isNullOrEmptyResult) {
                const obj2 = {
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  children: title,
                };
                tmp11 = timestampProducer(Text_Text.Text, obj2);
              }
              cResult[6] = title;
              cResult[7] = tmp11;
              let tmp9 = tmp11;
              const tmpResult4 = StringUtils;
            } else {
              tmp9 = cResult[7];
            }
            if (cResult[8] !== subtitle) {
              const isNullOrEmptyResult1 = StringUtils.isNullOrEmpty(subtitle);
              let tmp15 = !isNullOrEmptyResult1;
              if (!isNullOrEmptyResult1) {
                const obj3 = { variant: "text-xs/medium", lineClamp: 1, children: subtitle };
                tmp15 = timestampProducer(Text_Text.Text, obj3);
              }
              cResult[8] = subtitle;
              cResult[9] = tmp15;
              let tmp13 = tmp15;
              const tmpResult5 = StringUtils;
            } else {
              tmp13 = cResult[9];
            }
            if (cResult[10] !== entry) {
              let isGamingLikeEntryResult = ContentInventoryTypes.isGamingLikeEntry(entry);
              if (isGamingLikeEntryResult) {
                const obj4 = { entry };
                isGamingLikeEntryResult = timestampProducer(closure_10, obj4);
              }
              cResult[10] = entry;
              cResult[11] = isGamingLikeEntryResult;
              let tmp17 = isGamingLikeEntryResult;
              const tmpResult6 = ContentInventoryTypes;
            } else {
              tmp17 = cResult[11];
            }
            if (cResult[12] === tmp4.content) {
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp13) {
                  if (cResult[15] === tmp17) {
                    let tmp21 = cResult[16];
                  }
                  if (cResult[17] === tmp4.body) {
                    if (cResult[18] === tmp7) {
                      if (cResult[19] === tmp21) {
                        let tmp25 = cResult[20];
                      }
                      if (cResult[21] === style) {
                        if (cResult[22] === tmp25) {
                          let tmp29 = cResult[23];
                        }
                        return tmp29;
                      }
                      const obj5 = { style, children: tmp25 };
                      const tmp32 = timestampProducer(View, obj5);
                      cResult[21] = style;
                      cResult[22] = tmp25;
                      cResult[23] = tmp32;
                      tmp29 = tmp32;
                    }
                  }
                  const obj6 = { style: tmp4.body, children: null };
                  items = [tmp7, tmp21];
                  obj6.children = items;
                  const tmp28 = React5(View, obj6);
                  cResult[17] = tmp4.body;
                  cResult[18] = tmp7;
                  cResult[19] = tmp21;
                  cResult[20] = tmp28;
                  tmp25 = tmp28;
                }
              }
            }
            const obj7 = { style: tmp4.content, children: null };
            const items1 = [tmp9, tmp13, tmp17];
            obj7.children = items1;
            const tmp24 = React5(View, obj7);
            cResult[12] = tmp4.content;
            cResult[13] = tmp9;
            cResult[14] = tmp13;
            cResult[15] = tmp17;
            cResult[16] = tmp24;
            tmp21 = tmp24;
          }
        }
        const tmp8 = timestampProducer(closure_11, { largeImage, smallImage, poster: tmp5 });
        cResult[2] = largeImage;
        cResult[3] = smallImage;
        cResult[4] = tmp5;
        cResult[5] = tmp8;
        tmp7 = tmp8;
      }
    : function EntryCardBody(arg0) {
        ({ entry, title, subtitle } = arg0);
        ({ largeImage, smallImage, style } = arg0);
        const tmp = closure_9();
        const obj = { style, children: null };
        const obj2 = { style: tmp.body, children: null };
        const obj3 = { largeImage, smallImage, poster: ContentInventoryTypes.isWatchedMediaEntry(entry) };
        items = [timestampProducer(closure_11, obj3)];
        const obj5 = { style: tmp.content, children: null };
        const isNullOrEmptyResult = StringUtils.isNullOrEmpty(title);
        let tmp2Result = !isNullOrEmptyResult;
        if (!isNullOrEmptyResult) {
          const obj7 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            children: title,
          };
          tmp2Result = timestampProducer(Text_Text.Text, obj7);
        }
        const items1 = [tmp2Result, ,];
        const isNullOrEmptyResult1 = StringUtils.isNullOrEmpty(subtitle);
        let tmp2Result2 = !isNullOrEmptyResult1;
        if (!isNullOrEmptyResult1) {
          const obj8 = { variant: "text-xs/medium", lineClamp: 1, children: subtitle };
          tmp2Result2 = timestampProducer(Text_Text.Text, obj8);
        }
        items1[1] = tmp2Result2;
        const tmp5Result = StringUtils;
        let isGamingLikeEntryResult = ContentInventoryTypes.isGamingLikeEntry(entry);
        if (isGamingLikeEntryResult) {
          const obj9 = { entry };
          isGamingLikeEntryResult = timestampProducer(closure_10, obj9);
        }
        items1[2] = isGamingLikeEntryResult;
        obj5.children = items1;
        items[1] = React5(View, obj5);
        obj2.children = items;
        obj.children = React5(View, obj2);
        return timestampProducer(View, obj);
      },
);
ReactCompilerGating = fn(558);
const obj11 = { width: "50%", paddingRight: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRecentActivityCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileRecentActivityCard(arg0) {
      const cResult = c.c(33);
      ({ user, entry, style } = arg0);
      if (cResult[0] !== entry) {
        const obj2 = { entry, showCoverImage: false, trackingSource: "user_profile_recent_activity_native" };
        cResult[0] = entry;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const imageForContentEntry = ContentInventoryActivityImageUtils.useImageForContentEntry(tmp4);
      ({ largeImage, smallImage } = imageForContentEntry);
      const tmpResult = ContentInventoryActivityImageUtils;
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_PROFILE_RECENT_ACTIVITY_CARD,
      ).analyticsLocations;
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === entry) {
          if (cResult[4] === user) {
            let tmp8 = cResult[5];
          }
          const tmp9 = tmp6(13140)(tmp8);
          _require = tmp9;
          if (cResult[6] === tmp9) {
            if (cResult[7] === user.id) {
              let tmp10 = cResult[8];
            }
            tmp6(13141)(tmp10);
            let application_id;
            if ("application_id" in entry.extra) {
              application_id = entry.extra.application_id;
            }
            if (cResult[9] === application_id) {
              if (cResult[10] === user.id) {
                let tmp14 = cResult[11];
              }
              const tmp15 = tmp6(8879)(tmp14);
              importDefault = tmp15;
              if (cResult[12] === tmp9) {
                if (cResult[13] === tmp15) {
                  let tmp16 = cResult[14];
                }
                if (cResult[15] !== entry) {
                  const str2 = getEntryText(entry).title;
                  class T {
                    constructor() {
                      tmp = closure_0({ action: "PRESS_TEXT" });
                      if (closure_1 != null) {
                        tmp2 = closure_1();
                      }
                      return;
                    }
                  }
                  let trimmed;
                  if (str2 != null) {
                    trimmed = str2.trim();
                  }
                  let trimmed1;
                  if (str3 != null) {
                    trimmed1 = str3.trim();
                  }
                  cResult[15] = entry;
                  cResult[16] = trimmed1;
                  cResult[17] = trimmed;
                  let tmp17 = trimmed1;
                  let tmp18 = trimmed;
                  const tmp20 = getEntryText(entry);
                } else {
                  tmp17 = cResult[16];
                  tmp18 = cResult[17];
                }
                if (cResult[18] === entry) {
                  if (cResult[19] === largeImage) {
                    if (cResult[20] === smallImage) {
                      if (cResult[21] === style) {
                        if (cResult[22] === tmp17) {
                          if (cResult[23] === tmp18) {
                            let tmp24 = cResult[24];
                          }
                          if (cResult[25] === tmp24) {
                            if (cResult[26] === tmp16) {
                              if (cResult[27] === tmp15) {
                                if (cResult[28] === tmp18) {
                                  let tmp27 = cResult[29];
                                }
                                if (cResult[30] === analyticsLocations) {
                                  if (cResult[31] === tmp27) {
                                    let tmp30 = cResult[32];
                                  }
                                  return tmp30;
                                }
                                const obj3 = { value: null, children: null };
                                class T {
                                  constructor() {
                                    tmp = closure_0({ action: "PRESS_TEXT" });
                                    if (closure_1 != null) {
                                      tmp2 = closure_1();
                                    }
                                    return;
                                  }
                                }
                                obj3.children = tmp27;
                                const tmp32 = timestampProducer(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
                                cResult[30] = analyticsLocations;
                                cResult[31] = tmp27;
                                cResult[32] = tmp32;
                                tmp30 = tmp32;
                              }
                            }
                          }
                          class T {
                            constructor() {
                              tmp = closure_0({ action: "PRESS_TEXT" });
                              if (closure_1 != null) {
                                tmp2 = closure_1();
                              }
                              return;
                            }
                          }
                          cResult[25] = tmp24;
                          cResult[26] = tmp16;
                          cResult[27] = tmp15;
                          cResult[28] = tmp18;
                          cResult[29] = tmp24;
                          tmp27 = tmp29;
                        }
                      }
                    }
                  }
                }
                class T {
                  constructor() {
                    tmp = closure_0({ action: "PRESS_TEXT" });
                    if (closure_1 != null) {
                      tmp2 = closure_1();
                    }
                    return;
                  }
                }
                const obj4 = { entry, largeImage, smallImage, title: tmp18, subtitle: tmp17, style };
                const tmp26 = timestampProducer(closure_12, obj4);
                cResult[18] = entry;
                cResult[19] = largeImage;
                cResult[20] = smallImage;
                cResult[21] = style;
                cResult[22] = tmp17;
                cResult[23] = tmp18;
                cResult[24] = tmp26;
                tmp24 = tmp26;
              }
              class T {
                constructor() {
                  tmp = closure_0({ action: "PRESS_TEXT" });
                  if (closure_1 != null) {
                    tmp2 = closure_1();
                  }
                  return;
                }
              }
              cResult[12] = tmp9;
              cResult[13] = tmp15;
              cResult[14] = T;
              tmp16 = T;
            }
            const obj5 = {
              location: "UserProfileRecentActivityCard",
              applicationId: application_id,
              source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
              trackEntryPointImpression: true,
              sourceUserId: user.id,
            };
            cResult[9] = application_id;
            cResult[10] = user.id;
            cResult[11] = obj5;
            tmp14 = obj5;
          }
          tmp11[0] = user.id;
          tmp11[1] = tmp9;
          cResult[6] = tmp9;
          cResult[7] = user.id;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        }
      }
      const obj6 = { display: "recent", user, entry, analyticsLocations };
      cResult[2] = analyticsLocations;
      cResult[3] = entry;
      cResult[4] = user;
      cResult[5] = obj6;
      tmp8 = obj6;
    }
  : function UserProfileRecentActivityCard(style) {
      ({ user, entry } = style);
      closure_1 = undefined;
      const imageForContentEntry = ContentInventoryActivityImageUtils.useImageForContentEntry({
        entry,
        showCoverImage: false,
        trackingSource: "user_profile_recent_activity_native",
      });
      ({ largeImage, smallImage } = imageForContentEntry);
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_PROFILE_RECENT_ACTIVITY_CARD,
      ).analyticsLocations;
      const tmp6 = useTrackUserProfileActivityActionDefault({ display: "recent", user, entry, analyticsLocations });
      closure_0 = tmp6;
      useTrackUserProfileActivityViewDefault({ userId: user.id, onAction: tmp6 });
      let application_id;
      if ("application_id" in entry.extra) {
        application_id = entry.extra.application_id;
      }
      const obj3 = {
        location: "UserProfileRecentActivityCard",
        applicationId: application_id,
        source: null,
        trackEntryPointImpression: true,
        sourceUserId: null,
      };
      const obj2 = { userId: user.id, onAction: tmp6 };
      obj3.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
      obj3.sourceUserId = user.id;
      const tmp4ResultResult = useOpenGameProfileModalDefault(obj3);
      closure_1 = tmp4ResultResult;
      items = [tmp6, tmp4ResultResult];
      const callback = noop.useCallback(() => {
        closure_0({ action: "PRESS_TEXT" });
        if (closure_1 != null) {
          closure_1();
        }
      }, items);
      const tmp4Result = useOpenGameProfileModalDefault;
      ({ title, subtitle } = getEntryText(entry));
      let str;
      if (title != null) {
        str = title.trim();
      }
      let trimmed;
      if (subtitle != null) {
        trimmed = subtitle.trim();
      }
      const tmp15 = timestampProducer(closure_12, {
        entry,
        largeImage,
        smallImage,
        title: str,
        subtitle: trimmed,
        style: style.style,
      });
      const obj4 = { value: analyticsLocations, children: null };
      let tmp14Result = tmp15;
      if (null != tmp4ResultResult) {
        const obj5 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
        const intl = util.intl;
        if (str == null) {
          str = "";
        }
        const obj6 = { gameName: str };
        obj5.accessibilityLabel = intl.formatToPlainString(util.t["9sZWVp"], obj6);
        obj5.children = tmp15;
        tmp14Result = timestampProducer(Pressables.PressableOpacity, obj5);
      }
      obj4.children = tmp14Result;
      return timestampProducer(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
    };
