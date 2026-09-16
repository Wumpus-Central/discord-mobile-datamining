// === Module 13217: UserProfileRecentActivityCard ===

// Module 13217 (UserProfileRecentActivityCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import StringUtils from "StringUtils" /* 1926 */;
import native from "native" /* 4348 */;
import shared from "shared" /* 4489 */;
import Text_Text from "Text/Text" /* 4634 */;
import Pressables from "Pressables" /* 5208 */;
import FastImageDefault from "FastImage" /* 5673 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7272 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7292 */;
import utils from "utils" /* 8264 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8471 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8698 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8810 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8821 */;
import ContentInventoryActivityImageUtils from "ContentInventoryActivityImageUtils" /* 13146 */;
import BadgesAll from "Badges" /* 13155 */;
import TrendingType from "TrendingType" /* 13160 */;
import useTrackUserProfileActivityActionDefault from "useTrackUserProfileActivityAction" /* 13167 */;
import useTrackUserProfileActivityViewDefault from "useTrackUserProfileActivityView" /* 13168 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function GamingEntryBadges(entry) {
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
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let items = [
  {
    Badge: BadgesAll.GameTimestampBadge,
    predicate() {
      return true;
    }
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
  }
};
items[1] = { Badge: BadgesAll.NewGameBadge, predicate: fn(8264).isEntryNew };
let obj2 = { Badge: BadgesAll.NewGameBadge, predicate: fn(8264).isEntryNew };
items[2] = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  }
};
let obj3 = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  }
};
items[3] = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  }
};
let obj4 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  }
};
items[4] = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(entry) {
    return null != utils.getResurrectedEntryLastPlayTime(entry);
  }
};
let obj5 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(entry) {
    return null != utils.getResurrectedEntryLastPlayTime(entry);
  }
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
  }
};
const createStyles = fn(4638);
let obj7 = { body: null, content: null, imageContainer: null, imageAspectRatio: null, posterImageAspectRatio: null, largeImage: null, smallImageBackground: null, smallImage: null, badges: null, badgeCell: null };
let obj6 = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    let tmp3 = true === utils.isEntryMarathon(entry);
    if (tmp3) {
      tmp3 = null != utils.getMarathonDescription(entry).text;
      const tmpResult = utils;
    }
    return tmp3;
  }
};
obj7.body = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj7.content = { flex: 1 };
obj7.imageContainer = { position: "relative" };
obj7.imageAspectRatio = { width: 60, maxHeight: 60, aspectRatio: "1 / 1" };
obj7.posterImageAspectRatio = { width: 60, maxHeight: 100, aspectRatio: "2 / 3" };
let size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
obj7.largeImage = size;
const rect = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj7.smallImageBackground = rect;
obj7.smallImage = { width: 24, height: 24, borderRadius: 12 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj7.badges = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
obj7.badgeCell = { width: "50%", paddingRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj7);
let closure_11 = noop.memo((poster) => {
  ({ largeImage, smallImage } = poster);
  const tmp = closure_9();
  let src;
  if (largeImage != null) {
    src = largeImage.src;
  }
  if (null == src) {
    const obj2 = { style: null, children: null };
    items = [, ];
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
    const items1 = [tmp.imageContainer, ];
    const obj4 = { style: null, children: null };
    items1[1] = poster.poster ? tmp.posterImageAspectRatio : tmp.imageAspectRatio;
    obj4.style = items1;
    const obj5 = { source: null, alt: null, style: null };
    const tmp7 = FastImageDefault;
    obj5.source = AvatarUtils.makeSource(largeImage.src);
    obj5.alt = largeImage.alt;
    obj5.style = tmp.largeImage;
    const items2 = [timestampProducer(tmp7, obj5), ];
    let src1;
    if (smallImage != null) {
      src1 = smallImage.src;
    }
    let tmp5Result = null != src1;
    if (tmp5Result) {
      const obj6 = { style: tmp.smallImageBackground, children: null };
      const obj7 = { source: null, alt: null, style: null };
      const tmp6Result = FastImageDefault;
      obj7.source = AvatarUtils.makeSource(smallImage.src);
      obj7.alt = smallImage.alt;
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
});
let closure_12 = noop.memo((arg0) => {
  ({ entry, title, subtitle } = arg0);
  ({ largeImage, smallImage, style } = arg0);
  const tmp = closure_9();
  const obj = { style, children: null };
  const obj2 = { style: tmp.body, children: null };
  const obj3 = { largeImage, smallImage, poster: ContentInventoryTypes.isWatchedMediaEntry(entry) };
  items = [timestampProducer(closure_11, obj3), ];
  const obj5 = { style: tmp.content, children: null };
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(title);
  let tmp2Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: title };
    tmp2Result = timestampProducer(Text_Text.Text, obj7);
  }
  const items1 = [tmp2Result, , ];
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
    isGamingLikeEntryResult = timestampProducer(GamingEntryBadges, obj9);
  }
  items1[2] = isGamingLikeEntryResult;
  obj5.children = items1;
  items[1] = React5(View, obj5);
  obj2.children = items;
  obj.children = React5(View, obj2);
  return timestampProducer(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRecentActivityCard.tsx");

export default function UserProfileRecentActivityCard(style) {
  ({ user, entry } = style);
  closure_1 = undefined;
  const imageForContentEntry = ContentInventoryActivityImageUtils.useImageForContentEntry({ entry, showCoverImage: false, trackingSource: "user_profile_recent_activity_native" });
  ({ largeImage, smallImage } = imageForContentEntry);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_PROFILE_RECENT_ACTIVITY_CARD).analyticsLocations;
  const tmp6 = useTrackUserProfileActivityActionDefault({ display: "recent", user, entry, analyticsLocations });
  closure_0 = tmp6;
  useTrackUserProfileActivityViewDefault({ userId: user.id, onAction: tmp6 });
  let application_id;
  if ("application_id" in entry.extra) {
    application_id = entry.extra.application_id;
  }
  const obj3 = { location: "UserProfileRecentActivityCard", applicationId: application_id, source: null, trackEntryPointImpression: true, sourceUserId: null };
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
  if (tmpResult.isGamingLikeEntry(entry)) {
    const obj4 = { title: entry.extra.game_name };
    let obj8 = obj4;
  } else {
    if (tmpResult4.isWatchedMediaEntry(entry)) {
      const obj5 = { title: entry.extra.media_title, subtitle: entry.extra.media_subtitle };
      obj8 = obj5;
    } else {
      if (tmpResult5.isListenedSessionEntry(entry)) {
        const first = entry.extra.entries[0];
        let media;
        if (first != null) {
          media = first.media;
        }
        let title1;
        if (media != null) {
          title1 = media.title;
        }
        const obj6 = { title: title1, subtitle: null };
        let name;
        if (media != null) {
          const first1 = media.artists[0];
          if (first1 != null) {
            name = first1.name;
          }
        }
        obj6.subtitle = name;
        obj8 = obj6;
      } else {
        if (tmpResult6.isLaunchedActivityEntry(entry)) {
          const obj7 = { title: entry.extra.activity_name };
          obj8 = obj7;
        } else {
          obj8 = { title: "Array" };
        }
        tmpResult6 = ContentInventoryTypes;
      }
      tmpResult5 = ContentInventoryTypes;
    }
    tmpResult4 = ContentInventoryTypes;
  }
  ({ title, subtitle } = obj8);
  let str;
  if (title != null) {
    str = title.trim();
  }
  let trimmed;
  if (subtitle != null) {
    trimmed = subtitle.trim();
  }
  const tmp20 = timestampProducer(closure_12, { entry, largeImage, smallImage, title: str, subtitle: trimmed, style: style.style });
  const obj9 = { value: analyticsLocations, children: null };
  let tmp19Result = tmp20;
  if (null != tmp4ResultResult) {
    const obj10 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    if (str == null) {
      str = "";
    }
    const obj11 = { gameName: str };
    obj10.accessibilityLabel = intl.formatToPlainString(util.t["9sZWVp"], obj11);
    obj10.children = tmp20;
    tmp19Result = timestampProducer(Pressables.PressableOpacity, obj10);
  }
  obj9.children = tmp19Result;
  return timestampProducer(useAnalyticsLocations.AnalyticsLocationProvider, obj9);
};