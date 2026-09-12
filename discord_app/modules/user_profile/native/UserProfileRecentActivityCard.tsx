// discord_app/modules/user_profile/native/UserProfileRecentActivityCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
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
import UnknownGameIcon from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import useOpenGameProfileModalDefault from "../../game_profile/hooks/useOpenGameProfileModal.tsx";
import GameProfileAnalyticUtils from "../../game_profile/GameProfileAnalyticUtils.tsx";
import ContentInventoryActivityImageUtils from "../../content_inventory/ContentInventoryActivityImageUtils.tsx";
import BadgesAll from "../../icymi/native/content_inventory/Badges.tsx";
import TrendingType from "../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import useTrackUserProfileActivityActionDefault from "../hooks/useTrackUserProfileActivityAction.tsx";
import useTrackUserProfileActivityViewDefault from "../hooks/native/useTrackUserProfileActivityView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function GamingEntryBadges(entry) {
  entry = entry.entry;
  const tmp = closure_9();
  const badgeCell = tmp;
  const found = items.filter((predicate) => predicate.predicate(entry));
  let obj = { location: "user-profile", style: tmp.badges, children: null };
  if (obj2.isTopGameEntry(entry)) {
    obj = { style: tmp.badgeCell, children: null };
    obj = { entry };
    obj.children = closure_6(BadgesAll.TopGameBadge, obj);
    let mapped = closure_6(View, obj);
  } else {
    mapped = found.map((Badge, index) => {
      let obj = { style: badgeCell.badgeCell, children: null };
      obj = { entry };
      obj.children = timestampProducer(Badge.Badge, obj);
      return timestampProducer(View, obj, index);
    });
  }
  obj.children = mapped;
  return closure_6(BadgesAll.BadgesContainer, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  Badge: BadgesAll.GameTimestampBadge,
  predicate() {
    return true;
  },
};
let items = [obj, , , , ,];
obj = { Badge: BadgesAll.NewGameBadge, predicate: fn(8252).isEntryNew };
items[1] = obj;
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
let obj1 = {
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
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  },
};
let obj2 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  },
};
items[4] = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(entry) {
    return null != utils.getResurrectedEntryLastPlayTime(entry);
  },
};
let obj3 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(entry) {
    return null != utils.getResurrectedEntryLastPlayTime(entry);
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
fn(4636);
let obj5 = {
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
let obj4 = {
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
obj5.body = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj5.content = { flex: 1 };
obj5.imageContainer = { position: "relative" };
obj5.imageAspectRatio = { width: 60, maxHeight: 60, aspectRatio: "1 / 1" };
obj5.posterImageAspectRatio = { width: 60, maxHeight: 100, aspectRatio: "2 / 3" };
let size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
obj5.largeImage = size;
const rect = {
  borderRadius: 16,
  position: "absolute",
  right: -4,
  bottom: -4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj5.smallImageBackground = rect;
obj5.smallImage = { width: 24, height: 24, borderRadius: 12 };
const createStyles = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_8,
};
obj5.badges = createStyles;
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj5.badgeCell = { width: "50%", paddingRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj5);
let closure_11 = noop.memo((poster) => {
  ({ largeImage, smallImage } = poster);
  const tmp = closure_9();
  let obj = native;
  let src;
  if (largeImage != null) {
    src = largeImage.src;
  }
  if (null == src) {
    obj = { style: null, children: null };
    items = [,];
    ({ imageContainer: arr2[0], imageAspectRatio: arr2[1] } = tmp);
    obj.style = items;
    obj = { size: "custom", style: tmp.largeImage, color: null };
    let tmp2Result = shared;
    const colors = nativeDefault.colors;
    obj.color = tmp2Result.isThemeDark(obj.useThemeContext().theme) ? colors.WHITE : colors.BLACK;
    obj = timestampProducer(UnknownGameIcon.UnknownGameIcon, obj);
    obj.children = obj;
    timestampProducer(View, obj);
    const isThemeDarkResult = tmp2Result.isThemeDark(obj.useThemeContext().theme);
  } else {
    const items1 = [tmp.imageContainer];
    const obj1 = { style: null, children: null };
    items1[1] = poster.poster ? tmp.posterImageAspectRatio : tmp.imageAspectRatio;
    obj1.style = items1;
    const obj2 = { source: null, alt: null, style: null };
    tmp2Result = AvatarUtils;
    obj2.source = tmp2Result.makeSource(largeImage.src);
    obj2.alt = largeImage.alt;
    obj2.style = tmp.largeImage;
    const items2 = [timestampProducer(FastImageDefault, obj2)];
    let src1;
    if (smallImage != null) {
      src1 = smallImage.src;
    }
    let tmp5Result = null != src1;
    if (tmp5Result) {
      const obj3 = { style: tmp.smallImageBackground, children: null };
      const obj4 = { source: null, alt: null, style: null };
      const tmp6Result = FastImageDefault;
      obj4.source = AvatarUtils.makeSource(smallImage.src);
      obj4.alt = smallImage.alt;
      obj4.style = tmp.smallImage;
      obj3.children = timestampProducer(tmp6Result, obj4);
      tmp5Result = timestampProducer(View, obj3);
      const tmp2Result1 = AvatarUtils;
    }
    items2[1] = tmp5Result;
    obj1.children = items2;
    return React5(View, obj1);
  }
});
let closure_12 = noop.memo((arg0) => {
  ({ entry, title, subtitle } = arg0);
  ({ largeImage, smallImage, style } = arg0);
  const tmp = closure_9();
  let obj = { style, children: null };
  obj = { style: tmp.body, children: null };
  obj = { largeImage, smallImage, poster: null };
  let obj3 = ContentInventoryTypes;
  obj.poster = obj3.isWatchedMediaEntry(entry);
  items = [timestampProducer(closure_11, obj)];
  const obj1 = { style: tmp.content, children: null };
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(title);
  let tmp2Result = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: title };
    tmp2Result = timestampProducer(Text_Text.Text, obj2);
  }
  const items1 = [tmp2Result, ,];
  let tmp5Result = StringUtils;
  const isNullOrEmptyResult1 = tmp5Result.isNullOrEmpty(subtitle);
  tmp2Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    obj3 = { variant: "text-xs/medium", lineClamp: 1, children: subtitle };
    tmp2Result = timestampProducer(Text_Text.Text, obj3);
  }
  items1[1] = tmp2Result;
  tmp5Result = ContentInventoryTypes;
  let isGamingLikeEntryResult = tmp5Result.isGamingLikeEntry(entry);
  if (isGamingLikeEntryResult) {
    const obj4 = { entry };
    isGamingLikeEntryResult = timestampProducer(GamingEntryBadges, obj4);
  }
  items1[2] = isGamingLikeEntryResult;
  obj1.children = items1;
  items[1] = React5(View, obj1);
  obj.children = items;
  obj.children = React5(View, obj);
  return timestampProducer(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRecentActivityCard.tsx");

export default function UserProfileRecentActivityCard(style) {
  ({ user, entry } = style);
  closure_1 = undefined;
  let obj = ContentInventoryActivityImageUtils;
  const imageForContentEntry = obj.useImageForContentEntry({
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
  obj = { userId: user.id, onAction: tmp6 };
  useTrackUserProfileActivityViewDefault(obj);
  let application_id;
  if ("application_id" in entry.extra) {
    application_id = entry.extra.application_id;
  }
  obj = {
    location: "UserProfileRecentActivityCard",
    applicationId: application_id,
    source: null,
    trackEntryPointImpression: true,
    sourceUserId: null,
  };
  obj.source = GameProfileAnalyticUtils.GameProfileSources.UserProfile;
  obj.sourceUserId = user.id;
  const tmp4ResultResult = useOpenGameProfileModalDefault(obj);
  closure_1 = tmp4ResultResult;
  items = [tmp6, tmp4ResultResult];
  const callback = noop.useCallback(() => {
    closure_0({ action: "PRESS_TEXT" });
    if (closure_1 != null) {
      closure_1();
    }
  }, items);
  let tmpResult = ContentInventoryTypes;
  if (tmpResult.isGamingLikeEntry(entry)) {
    const obj1 = { title: entry.extra.game_name };
    let obj5 = obj1;
  } else {
    tmpResult = ContentInventoryTypes;
    if (tmpResult.isWatchedMediaEntry(entry)) {
      const obj2 = { title: entry.extra.media_title, subtitle: entry.extra.media_subtitle };
      obj5 = obj2;
    } else {
      if (tmpResult1.isListenedSessionEntry(entry)) {
        const first = entry.extra.entries[0];
        let media;
        if (first != null) {
          media = first.media;
        }
        title = undefined;
        if (media != null) {
          title = media.title;
        }
        const obj3 = { title, subtitle: null };
        let name;
        if (media != null) {
          const first1 = media.artists[0];
          if (first1 != null) {
            name = first1.name;
          }
        }
        obj3.subtitle = name;
        obj5 = obj3;
      } else {
        if (tmpResult2.isLaunchedActivityEntry(entry)) {
          const obj4 = { title: entry.extra.activity_name };
          obj5 = obj4;
        } else {
          obj5 = { title: "r" };
        }
        tmpResult2 = ContentInventoryTypes;
      }
      tmpResult1 = ContentInventoryTypes;
    }
  }
  ({ title, subtitle } = obj5);
  let str;
  if (title != null) {
    str = title.trim();
  }
  let trimmed;
  if (subtitle != null) {
    trimmed = subtitle.trim();
  }
  const tmp20 = timestampProducer(closure_12, {
    entry,
    largeImage,
    smallImage,
    title: str,
    subtitle: trimmed,
    style: style.style,
  });
  const obj6 = { value: analyticsLocations, children: null };
  let tmp19Result = tmp20;
  if (null != tmp4ResultResult) {
    const obj7 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    if (str == null) {
      str = "";
    }
    const obj8 = { gameName: str };
    obj7.accessibilityLabel = intl.formatToPlainString(util.t["9sZWVp"], obj8);
    obj7.children = tmp20;
    tmp19Result = timestampProducer(Pressables.PressableOpacity, obj7);
  }
  obj6.children = tmp19Result;
  return timestampProducer(useAnalyticsLocations.AnalyticsLocationProvider, obj6);
}
