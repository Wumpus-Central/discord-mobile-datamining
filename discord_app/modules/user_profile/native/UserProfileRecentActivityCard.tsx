// discord_app/modules/user_profile/native/UserProfileRecentActivityCard.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import shared from "../../../design/shared.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import utils from "../../content_inventory/utils.tsx";
import ContentInventoryTypes from "../../content_inventory/ContentInventoryTypes.tsx";
import UnknownGameIcon2 from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import ContentInventoryActivityImageUtils from "../../content_inventory/ContentInventoryActivityImageUtils.tsx";
import BadgesAll from "../../icymi/native/content_inventory/Badges.tsx";
import TrendingType from "../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import useTrackUserProfileActivityActionDefault from "../hooks/useTrackUserProfileActivityAction.tsx";
import useTrackUserProfileActivityViewDefault from "../hooks/native/useTrackUserProfileActivityView.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require, importDefault, poster, tmp2;

let metroImportDefault;
let metroRequire;
let obj8;
let obj9;
let rect;
let size;
function getEntryText(entry) {
  let name;
  const obj = ContentInventoryTypes;
  if (obj.isGamingLikeEntry(entry)) {
    return { title: entry.extra.game_name };
  } else {
    const tmpResult = ContentInventoryTypes;
    if (tmpResult.isWatchedMediaEntry(entry)) {
      return { title: entry.extra.media_title, subtitle: entry.extra.media_subtitle };
    } else {
      const tmpResult3 = ContentInventoryTypes;
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
        const obj4 = { title, subtitle: name };
        name = undefined;
        if (media != null) {
          const first1 = media.artists[0];
          if (first1 != null) {
            name = first1.name;
          }
        }
        return obj4;
      } else {
        let obj6;
        const tmpResult4 = ContentInventoryTypes;
        if (tmpResult4.isLaunchedActivityEntry(entry)) {
          obj6 = { title: entry.extra.activity_name };
          const obj5 = { title: entry.extra.activity_name };
        } else {
          obj6 = { title: "r" };
        }
        return obj6;
      }
    }
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  Badge: BadgesAll.GameTimestampBadge,
  predicate() {
    return true;
  },
};
let items = [obj, , , , ,];
let obj2 = { Badge: BadgesAll.NewGameBadge, predicate: utils.isEntryNew };
items[1] = obj2;
let obj3 = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    const obj = utils;
    let num = obj.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  },
};
items[2] = obj3;
let obj4 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(traits) {
    const obj = utils;
    const trendingType = obj.getTrendingType(traits);
    const tmp4 = null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
    return tmp4;
  },
};
items[3] = obj4;
let obj5 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(traits) {
    const obj = utils;
    return null != obj.getResurrectedEntryLastPlayTime(traits);
  },
};
items[4] = obj5;
let obj6 = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    const obj = utils;
    let tmp3 = true === obj.isEntryMarathon(entry);
    if (tmp3) {
      const tmpResult = utils;
      tmp3 = null != tmpResult.getMarathonDescription(entry).text;
    }
    return tmp3;
  },
};
items[5] = obj6;
let createStyles = createStyles_mod;
let obj7 = {
  body: obj8,
  content: { flex: 1 },
  imageContainer: { position: "relative" },
  imageAspectRatio: { width: 60, maxHeight: 60, aspectRatio: "1 / 1" },
  posterImageAspectRatio: { width: 60, maxHeight: 100, aspectRatio: "2 / 3" },
  largeImage: size,
  smallImageBackground: rect,
  smallImage: { width: 24, height: 24, borderRadius: 12 },
  badges: obj9,
  badgeCell: { width: "50%", paddingRight: nativeDefault.space.PX_8 },
};
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
rect = {
  borderRadius: 16,
  position: "absolute",
  right: -4,
  bottom: -4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj9 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
};
({ width: "50%", paddingRight: nativeDefault.space.PX_8 });
let closure_9 = createStyles(obj7);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (entry) => {
      let obj4;
      let tmp11;
      let obj = entry(576);
      const cResult = obj.c(14);
      const tmp = entry;
      entry = entry.entry;
      const tmp4 = closure_9();
      const badgeCell = tmp4;
      if (cResult[0] === entry) {
        if (cResult[1] === tmp4.badgeCell) {
          let tmp5;
          let str;
          let tmp6;
          let tmp7;
          if (cResult[2] === tmp4.badges) {
            tmp5 = cResult[3];
            str = cResult[4];
            tmp6 = cResult[5];
            tmp7 = cResult[6];
          }
          if (cResult[9] === tmp5) {
            if (cResult[10] === str) {
              if (cResult[11] === tmp6) {
                let tmp13;
                if (cResult[12] === tmp7) {
                  tmp13 = cResult[13];
                }
                return tmp13;
              }
            }
          }
          let obj2 = { location: str, style: tmp6, children: tmp7 };
          const tmp15 = closure_6(tmp5, obj2);
          cResult[9] = tmp5;
          cResult[10] = str;
          cResult[11] = tmp6;
          cResult[12] = tmp7;
          cResult[13] = tmp15;
          tmp13 = tmp15;
        }
      }
      if (cResult[7] !== entry) {
        class C {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
        cResult[7] = entry;
        cResult[8] = C;
      } else {
        class C {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
      }
      const found = items.filter(C);
      const BadgesContainer = BadgesAll.BadgesContainer;
      const badges = tmp4.badges;
      const tmpResult = tmp(8027);
      if (tmpResult.isTopGameEntry(entry)) {
        class C {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
        const obj3 = { style: tmp4.badgeCell, children: closure_6(BadgesAll.TopGameBadge, obj4) };
        obj4 = { entry };
        tmp11 = closure_6(View, obj3);
      } else {
        class C {
          constructor(arg0) {
            return entry.predicate(entry);
          }
        }
      }
      cResult[0] = entry;
      cResult[1] = tmp4.badgeCell;
      cResult[2] = tmp4.badges;
      cResult[3] = BadgesContainer;
      cResult[4] = "user-profile";
      cResult[5] = badges;
      cResult[6] = tmp11;
      tmp7 = tmp11;
      tmp6 = badges;
      str = "user-profile";
      tmp5 = BadgesContainer;
    }
  : (entry) => {
      let mapped;
      let obj4;
      entry = entry.entry;
      const tmp = closure_9();
      const badgeCell = tmp;
      const found = items.filter((predicate) => predicate.predicate(entry));
      let obj = { location: "user-profile", style: tmp.badges, children: mapped };
      const BadgesContainer = BadgesAll.BadgesContainer;
      let obj2 = entry(8027);
      if (obj2.isTopGameEntry(entry)) {
        const obj3 = { style: tmp.badgeCell, children: closure_6(BadgesAll.TopGameBadge, obj4) };
        obj4 = { entry };
        mapped = closure_6(View, obj3);
      } else {
        mapped = found.map((Badge, index) => {
          let obj2;
          const obj = { style: badgeCell.badgeCell, children: metroRequire(Badge.Badge, obj2) };
          obj2 = { entry };
          return metroRequire(View, obj, index);
        });
      }
      return closure_6(BadgesContainer, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (poster) => {
        let items1;
        let largeImage;
        let obj7;
        let smallImage;
        let tmp20;
        let tmpResult4;
        const obj = react2;
        const cResult = obj.c(26);
        ({ largeImage, smallImage } = poster);
        poster = poster.poster;
        const tmp4 = closure_9();
        let src;
        const obj2 = native;
        const theme = obj2.useThemeContext().theme;
        if (largeImage != null) {
          src = largeImage.src;
        }
        if (null == src) {
          if (cResult[0] === tmp4.imageAspectRatio) {
            let tmp25;
            if (cResult[1] === tmp4.imageContainer) {
              tmp25 = cResult[2];
            }
            const tmpResult = shared;
            const isThemeDarkResult = tmpResult.isThemeDark(theme);
            const colors = nativeDefault.colors;
            const tmp28 = isThemeDarkResult ? colors.WHITE : colors.BLACK;
            if (cResult[3] === tmp4.largeImage) {
              let tmp29;
              if (cResult[4] === tmp28) {
                tmp29 = cResult[5];
              }
              if (cResult[6] === tmp25) {
                let tmp32;
                if (cResult[7] === tmp29) {
                  tmp32 = cResult[8];
                }
                return tmp32;
              }
              const obj3 = { style: tmp25, children: tmp29 };
              const tmp35 = metroRequire(View, obj3);
              cResult[6] = tmp25;
              cResult[7] = tmp29;
              cResult[8] = tmp35;
              tmp32 = tmp35;
            }
            const obj4 = { size: "custom", style: tmp4.largeImage, color: tmp28 };
            const tmp31 = metroRequire(UnknownGameIcon2.UnknownGameIcon, obj4);
            cResult[3] = tmp4.largeImage;
            cResult[4] = tmp28;
            cResult[5] = tmp31;
            tmp29 = tmp31;
          }
          items = [,];
          ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp4);
          cResult[0] = tmp4.imageAspectRatio;
          cResult[1] = tmp4.imageContainer;
          cResult[2] = items;
          tmp25 = items;
        } else {
          const tmp6 = poster ? tmp4.posterImageAspectRatio : tmp4.imageAspectRatio;
          if (cResult[9] === tmp4.imageContainer) {
            let tmp7;
            let tmp8;
            if (cResult[10] === tmp6) {
              tmp7 = cResult[11];
            }
            if (cResult[12] !== largeImage.src) {
              const tmpResult3 = AvatarUtils;
              const source = tmpResult3.makeSource(largeImage.src);
              cResult[12] = largeImage.src;
              cResult[13] = source;
              tmp8 = source;
            } else {
              tmp8 = cResult[13];
            }
            if (cResult[14] === largeImage.alt) {
              if (cResult[15] === tmp4.largeImage) {
                let tmp10;
                if (cResult[16] === tmp8) {
                  tmp10 = cResult[17];
                }
                if (cResult[18] === smallImage) {
                  if (cResult[19] === tmp4.smallImage) {
                    let tmp14;
                    if (cResult[20] === tmp4.smallImageBackground) {
                      tmp14 = cResult[21];
                    }
                    if (cResult[22] === tmp7) {
                      if (cResult[23] === tmp10) {
                        let tmp21;
                        if (cResult[24] === tmp14) {
                          tmp21 = cResult[25];
                        }
                        return tmp21;
                      }
                    }
                    const obj5 = { style: tmp7, children: items1 };
                    items1 = [tmp10, tmp14];
                    const tmp24 = metroImportDefault(View, obj5);
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
                  const obj6 = { style: tmp4.smallImageBackground, children: metroRequire(tmp20, obj7) };
                  obj7 = {
                    source: tmpResult4.makeSource(smallImage.src),
                    accessibilityLabel: smallImage.alt,
                    style: tmp4.smallImage,
                  };
                  tmp20 = FastImageDefault;
                  tmpResult4 = AvatarUtils;
                  tmp16 = metroRequire(View, obj6);
                }
                cResult[18] = smallImage;
                cResult[19] = tmp4.smallImage;
                cResult[20] = tmp4.smallImageBackground;
                cResult[21] = tmp16;
                tmp14 = tmp16;
              }
            }
            const obj8 = { source: tmp8, accessibilityLabel: largeImage.alt, style: tmp4.largeImage };
            const tmp13 = metroRequire(FastImageDefault, obj8);
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
      }
    : (poster) => {
        let UnknownGameIcon;
        let colors;
        let isThemeDarkResult;
        let items2;
        let largeImage;
        let obj3;
        let obj7;
        let smallImage;
        let tmp16Result;
        let tmp2Result3;
        let tmp2Result4;
        let tmp6Result;
        ({ largeImage, smallImage } = poster);
        poster = poster.poster;
        const tmp = closure_9();
        let src;
        const obj = native;
        const theme = obj.useThemeContext().theme;
        if (largeImage != null) {
          src = largeImage.src;
        }
        if (null == src) {
          const obj2 = { style: items, children: metroRequire(UnknownGameIcon, obj3) };
          items = [,];
          ({ imageContainer: arr2[0], imageAspectRatio: arr2[1] } = tmp);
          obj3 = { size: "custom", style: tmp.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
          UnknownGameIcon = UnknownGameIcon2.UnknownGameIcon;
          const tmp2Result = shared;
          isThemeDarkResult = tmp2Result.isThemeDark(theme);
          colors = nativeDefault.colors;
          tmp16Result = metroRequire(View, obj2);
        } else {
          const items1 = [tmp.imageContainer];
          const obj4 = { style: items1, children: items2 };
          items1[1] = poster ? tmp.posterImageAspectRatio : tmp.imageAspectRatio;
          const obj5 = {
            source: tmp2Result3.makeSource(largeImage.src),
            accessibilityLabel: largeImage.alt,
            style: tmp.largeImage,
          };
          const tmp7 = FastImageDefault;
          tmp2Result3 = AvatarUtils;
          items2 = [metroRequire(tmp7, obj5)];
          let src1;
          if (smallImage != null) {
            src1 = smallImage.src;
          }
          let tmp5Result = null != src1;
          if (tmp5Result) {
            const obj6 = { style: tmp.smallImageBackground, children: metroRequire(tmp6Result, obj7) };
            obj7 = {
              source: tmp2Result4.makeSource(smallImage.src),
              accessibilityLabel: smallImage.alt,
              style: tmp.smallImage,
            };
            tmp6Result = FastImageDefault;
            tmp2Result4 = AvatarUtils;
            tmp5Result = metroRequire(View, obj6);
          }
          items2[1] = tmp5Result;
          tmp16Result = metroImportDefault(View, obj4);
        }
        return tmp16Result;
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let entry;
        let items1;
        let largeImage;
        let smallImage;
        let style;
        let subtitle;
        let title;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(24);
        ({ entry, largeImage, smallImage, title, subtitle, style } = arg0);
        const tmp4 = closure_9();
        const body = tmp4.body;
        if (cResult[0] !== entry) {
          const tmpResult = ContentInventoryTypes;
          const isWatchedMediaEntryResult = tmpResult.isWatchedMediaEntry(entry);
          cResult[0] = entry;
          cResult[1] = isWatchedMediaEntryResult;
          tmp5 = isWatchedMediaEntryResult;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === largeImage) {
          if (cResult[3] === smallImage) {
            let tmp7;
            let tmp9;
            let tmp13;
            let tmp17;
            if (cResult[4] === tmp5) {
              tmp7 = cResult[5];
            }
            if (cResult[6] !== title) {
              const tmpResult4 = StringUtils;
              let tmp11 = !tmpResult4.isNullOrEmpty(title);
              tmpResult4.isNullOrEmpty(title);
              if (tmp11) {
                const obj2 = {
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  children: title,
                };
                tmp11 = metroRequire(Text_Text.Text, obj2);
              }
              cResult[6] = title;
              cResult[7] = tmp11;
              tmp9 = tmp11;
            } else {
              tmp9 = cResult[7];
            }
            if (cResult[8] !== subtitle) {
              const tmpResult5 = StringUtils;
              let tmp15 = !tmpResult5.isNullOrEmpty(subtitle);
              tmpResult5.isNullOrEmpty(subtitle);
              if (tmp15) {
                const obj3 = { variant: "text-xs/medium", lineClamp: 1, children: subtitle };
                tmp15 = metroRequire(Text_Text.Text, obj3);
              }
              cResult[8] = subtitle;
              cResult[9] = tmp15;
              tmp13 = tmp15;
            } else {
              tmp13 = cResult[9];
            }
            if (cResult[10] !== entry) {
              const tmpResult6 = ContentInventoryTypes;
              let isGamingLikeEntryResult = tmpResult6.isGamingLikeEntry(entry);
              if (isGamingLikeEntryResult) {
                const obj4 = { entry };
                isGamingLikeEntryResult = metroRequire(closure_10, obj4);
              }
              cResult[10] = entry;
              cResult[11] = isGamingLikeEntryResult;
              tmp17 = isGamingLikeEntryResult;
            } else {
              tmp17 = cResult[11];
            }
            if (cResult[12] === tmp4.content) {
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp13) {
                  let tmp21;
                  if (cResult[15] === tmp17) {
                    tmp21 = cResult[16];
                  }
                  if (cResult[17] === tmp4.body) {
                    if (cResult[18] === tmp7) {
                      let tmp25;
                      if (cResult[19] === tmp21) {
                        tmp25 = cResult[20];
                      }
                      if (cResult[21] === style) {
                        let tmp29;
                        if (cResult[22] === tmp25) {
                          tmp29 = cResult[23];
                        }
                        return tmp29;
                      }
                      const obj5 = { style, children: tmp25 };
                      const tmp32 = metroRequire(View, obj5);
                      cResult[21] = style;
                      cResult[22] = tmp25;
                      cResult[23] = tmp32;
                      tmp29 = tmp32;
                    }
                  }
                  const obj6 = { style: body, children: items };
                  items = [tmp7, tmp21];
                  const tmp28 = metroImportDefault(View, obj6);
                  cResult[17] = tmp4.body;
                  cResult[18] = tmp7;
                  cResult[19] = tmp21;
                  cResult[20] = tmp28;
                  tmp25 = tmp28;
                }
              }
            }
            const obj7 = { style: tmp4.content, children: items1 };
            items1 = [tmp9, tmp13, tmp17];
            const tmp24 = metroImportDefault(View, obj7);
            cResult[12] = tmp4.content;
            cResult[13] = tmp9;
            cResult[14] = tmp13;
            cResult[15] = tmp17;
            cResult[16] = tmp24;
            tmp21 = tmp24;
          }
        }
        const tmp8 = metroRequire(closure_11, { largeImage, smallImage, poster: tmp5 });
        cResult[2] = largeImage;
        cResult[3] = smallImage;
        cResult[4] = tmp5;
        cResult[5] = tmp8;
        tmp7 = tmp8;
      }
    : (arg0) => {
        let entry;
        let items1;
        let largeImage;
        let obj2;
        let obj4;
        let smallImage;
        let style;
        let subtitle;
        let title;
        ({ entry, title, subtitle } = arg0);
        ({ largeImage, smallImage, style } = arg0);
        const tmp = closure_9();
        const obj = { style, children: metroImportDefault(View, obj2) };
        obj2 = { style: tmp.body, children: items };
        const obj3 = { largeImage, smallImage, poster: obj4.isWatchedMediaEntry(entry) };
        obj4 = ContentInventoryTypes;
        items = [metroRequire(closure_11, obj3)];
        const obj5 = { style: tmp.content, children: items1 };
        const obj6 = StringUtils;
        let tmp2Result = !obj6.isNullOrEmpty(title);
        obj6.isNullOrEmpty(title);
        if (tmp2Result) {
          const obj7 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            children: title,
          };
          tmp2Result = metroRequire(Text_Text.Text, obj7);
        }
        items1 = [tmp2Result, ,];
        const tmp5Result = StringUtils;
        let tmp2Result2 = !tmp5Result.isNullOrEmpty(subtitle);
        tmp5Result.isNullOrEmpty(subtitle);
        if (tmp2Result2) {
          const obj8 = { variant: "text-xs/medium", lineClamp: 1, children: subtitle };
          tmp2Result2 = metroRequire(Text_Text.Text, obj8);
        }
        items1[1] = tmp2Result2;
        const tmp5Result2 = ContentInventoryTypes;
        let isGamingLikeEntryResult = tmp5Result2.isGamingLikeEntry(entry);
        if (isGamingLikeEntryResult) {
          const obj9 = { entry };
          isGamingLikeEntryResult = metroRequire(closure_10, obj9);
        }
        items1[2] = isGamingLikeEntryResult;
        items[1] = metroImportDefault(View, obj5);
        return metroRequire(View, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let entry;
      let largeImage;
      let smallImage;
      let style;
      let tmp4;
      let user;
      const obj = react2;
      const cResult = obj.c(33);
      ({ user, entry, style } = arg0);
      if (cResult[0] !== entry) {
        const obj2 = { entry, showCoverImage: false, trackingSource: "user_profile_recent_activity_native" };
        cResult[0] = entry;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = ContentInventoryActivityImageUtils;
      const imageForContentEntry = tmpResult.useImageForContentEntry(tmp4);
      ({ largeImage, smallImage } = imageForContentEntry);
      const tmp7 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp7(AnalyticsLocationDefault.USER_PROFILE_RECENT_ACTIVITY_CARD).analyticsLocations;
      if (cResult[2] === analyticsLocations) {
        if (cResult[3] === entry) {
          let tmp8;
          if (cResult[4] === user) {
            tmp8 = cResult[5];
          }
          const tmp9 = useTrackUserProfileActivityActionDefault(tmp8);
          _require = tmp9;
          if (cResult[6] === tmp9) {
            let tmp10;
            if (cResult[7] === user.id) {
              tmp10 = cResult[8];
            }
            useTrackUserProfileActivityViewDefault(tmp10);
            let application_id;
            if ("application_id" in entry.extra) {
              application_id = entry.extra.application_id;
            }
            if (cResult[9] === application_id) {
              let tmp14;
              if (cResult[10] === user.id) {
                tmp14 = cResult[11];
              }
              const tmp15 = useOpenGameProfileModalDefault(tmp14);
              importDefault = tmp15;
              if (cResult[12] === tmp9) {
                let tmp16;
                let tmp17;
                let tmp18;
                if (cResult[13] === tmp15) {
                  tmp16 = cResult[14];
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
                  tmp17 = trimmed1;
                  tmp18 = trimmed;
                } else {
                  tmp17 = cResult[16];
                  tmp18 = cResult[17];
                }
                if (cResult[18] === entry) {
                  if (cResult[19] === largeImage) {
                    if (cResult[20] === smallImage) {
                      if (cResult[21] === style) {
                        if (cResult[22] === tmp17) {
                          let tmp24;
                          if (cResult[23] === tmp18) {
                            tmp24 = cResult[24];
                          }
                          if (cResult[25] === tmp24) {
                            if (cResult[26] === tmp16) {
                              if (cResult[27] === tmp15) {
                                let tmp27;
                                if (cResult[28] === tmp18) {
                                  tmp27 = cResult[29];
                                }
                                if (cResult[30] === analyticsLocations) {
                                  let tmp30;
                                  if (cResult[31] === tmp27) {
                                    tmp30 = cResult[32];
                                  }
                                  return tmp30;
                                }
                                const obj3 = { value: null, children: tmp27 };
                                class T {
                                  constructor() {
                                    tmp = closure_0({ action: "PRESS_TEXT" });
                                    if (closure_1 != null) {
                                      tmp2 = closure_1();
                                    }
                                    return;
                                  }
                                }
                                const tmp32 = metroRequire(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
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
                const tmp26 = metroRequire(closure_12, obj4);
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
  : (style) => {
      let entry;
      let formatToPlainString;
      let largeImage;
      let obj6;
      let smallImage;
      let subtitle;
      let title;
      let tmp14Result;
      let user;
      let v9sZWVp;
      ({ user, entry } = style);
      let closure_1;
      style = style.style;
      const obj = ContentInventoryActivityImageUtils;
      const imageForContentEntry = obj.useImageForContentEntry({
        entry,
        showCoverImage: false,
        trackingSource: "user_profile_recent_activity_native",
      });
      ({ largeImage, smallImage } = imageForContentEntry);
      const tmp5 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp5(AnalyticsLocationDefault.USER_PROFILE_RECENT_ACTIVITY_CARD).analyticsLocations;
      const tmp6 = useTrackUserProfileActivityActionDefault({ display: "recent", user, entry, analyticsLocations });
      let closure_0 = tmp6;
      const obj2 = { userId: user.id, onAction: tmp6 };
      useTrackUserProfileActivityViewDefault(obj2);
      let application_id;
      if ("application_id" in entry.extra) {
        application_id = entry.extra.application_id;
      }
      const obj3 = {
        location: "UserProfileRecentActivityCard",
        applicationId: application_id,
        source: GameProfileAnalyticUtils.GameProfileSources.UserProfile,
        trackEntryPointImpression: true,
        sourceUserId: user.id,
      };
      const tmp4Result = useOpenGameProfileModalDefault;
      const tmp4ResultResult = tmp4Result(obj3);
      closure_1 = tmp4ResultResult;
      items = [tmp6, tmp4ResultResult];
      const callback = react.useCallback(() => {
        closure_0({ action: "PRESS_TEXT" });
        if (closure_1 != null) {
          closure_1();
        }
      }, items);
      ({ title, subtitle } = getEntryText(entry));
      let str;
      getEntryText(entry);
      if (title != null) {
        str = title.trim();
      }
      let trimmed;
      if (subtitle != null) {
        trimmed = subtitle.trim();
      }
      const tmp15 = metroRequire(closure_12, { entry, largeImage, smallImage, title: str, subtitle: trimmed, style });
      const obj4 = { value: analyticsLocations, children: tmp14Result };
      tmp14Result = tmp15;
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      if (null != tmp4ResultResult) {
        const obj5 = {
          onPress: callback,
          accessibilityRole: "button",
          accessibilityLabel: formatToPlainString(v9sZWVp, obj6),
          children: tmp15,
        };
        const PressableOpacity = Pressables.PressableOpacity;
        const intl = intl2.intl;
        formatToPlainString = intl.formatToPlainString;
        v9sZWVp = intl2.t["9sZWVp"];
        if (str == null) {
          str = "";
        }
        obj6 = { gameName: str };
        tmp14Result = metroRequire(PressableOpacity, obj5);
      }
      return metroRequire(AnalyticsLocationProvider, obj4);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRecentActivityCard.tsx");

export default tmp5;
