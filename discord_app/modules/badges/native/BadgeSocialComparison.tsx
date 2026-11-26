// === Module 13857: BadgeSocialComparison ===

// Module 13857 (BadgeSocialComparison)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef1654 from "module_1654" /* 1654 */;
import StringUtils from "StringUtils" /* 2153 */;
import Text_Text from "Text/Text" /* 5634 */;
import FastImageDefault from "FastImage" /* 5730 */;
import BadgeId from "BadgeId" /* 6138 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 9856 */;
import BadgeUtils from "BadgeUtils" /* 9870 */;
import BadgeUnit from "BadgeUnit" /* 13858 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 6383 */;

require = fn;
function getActivityStatCount(badge) {
  const badge_id = badge.badge_id;
  if (tmp3) {
    if (badge.badge_id === BadgeId.BadgeId.GAME_VARIETY) {
      let HOURS = BadgeUnit.BadgeUnit.GAMES;
    } else {
      HOURS = BadgeUnit.BadgeUnit.HOURS;
    }
    const stats = badge.stats;
    value = undefined;
    if (stats != null) {
      const iter = stats.find((unit) => unit.unit === HOURS);
      if (iter != null) {
        value = iter.value;
      }
    }
    let tmp6;
    if (null != value) {
      const _Number = Number;
      if (Number.isFinite(value)) {
        if (value >= 0) {
          tmp6 = value;
        }
      }
    }
    return tmp6;
  }
  tmp3 = badge_id === BadgeId.BadgeId.GAME_VARIETY || badge_id === BadgeId.BadgeId.STREAMING || badge_id === BadgeId.BadgeId.GAME_TIME;
}
function EligibleBadgeSocialComparison(arg0) {
  ({ badge, viewerBadge, displayedUserId } = arg0);
  _require = displayedUserId;
  ({ targetUsername, isContentShown } = arg0);
  ({ contentOpacity, viewerTier, displayedTier } = arg0);
  const tmp = closure_8();
  const badgeSocialComparisonMobileEnabled = require("BadgeSocialComparisonMobileExperiment").useBadgeSocialComparisonMobileEnabled({ location: "BadgeSocialComparisonMobile" });
  const obj = require("BadgeSocialComparisonMobileExperiment");
  items = [closure_11, contentOpacity];
  _require = undefined;
  [tmp5, tmp6] = items;
  class BadgeSocialComparisonTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp6];
  BadgeSocialComparisonTsx1.__closure = items1;
  BadgeSocialComparisonTsx1.__workletHash = 17178513634755;
  BadgeSocialComparisonTsx1.__initData = tmp5;
  const animatedStyle = require("module_1654").useAnimatedStyle(BadgeSocialComparisonTsx1);
  const obj2 = require("module_1654");
  const items2 = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result = require("initialize");
  const items3 = [UserStore];
  const items4 = [displayedUserId];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => UserStore.getUser(c0), items4);
  require("initialize");
  const items5 = [BadgeDirectoryStore, UserStore];
  [][0] = displayedUserId;
  let tmp13Result = null;
  if (badgeSocialComparisonMobileEnabled) {
    tmp13Result = null;
    if (tmp9) {
      const badge_id = badge.badge_id;
      if (!tmp11) {
        const obj3 = { style: null, pointerEvents: null, "aria-hidden": null, children: null };
        const items6 = [tmp.wrapper, animatedStyle];
        obj3.style = items6;
        let str = "none";
        if (isContentShown) {
          str = "auto";
        }
        obj3.pointerEvents = str;
        obj3["aria-hidden"] = !isContentShown;
        const obj4 = { style: tmp.comparison, children: null };
        const obj5 = { badge: viewerBadge, tier: viewerTier, avatarUrl: null, username: null };
        let avatarURL;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(undefined, 32, false);
        }
        obj5.avatarUrl = avatarURL;
        const string = tmp2(1112).intl.string;
        class BadgeSocialComparisonTsx1 {
          constructor() {
            obj = { opacity: closure_0.get() };
            return obj;
          }
        }
        const items7 = [closure_6(closure_10, obj5), ];
        const obj6 = { badge, tier: displayedTier, avatarUrl: null, username: null };
        let avatarURL1;
        if (stateFromStores1 != null) {
          avatarURL1 = stateFromStores1.getAvatarURL(undefined, 32, false);
        }
        obj6.avatarUrl = avatarURL1;
        if (targetUsername == null) {
          let username;
          if (stateFromStores1 != null) {
            username = stateFromStores1.username;
          }
          targetUsername = username;
        }
        if (targetUsername == null) {
          const intl = tmp2(1112).intl;
          targetUsername = intl.string(tmp2(1112).t.KD6OJJ);
        }
        obj6.username = targetUsername;
        items7[1] = closure_6(closure_10, obj6);
        obj4.children = items7;
        obj3.children = closure_7(View, obj4);
        tmp13Result = closure_6(_modDef1654.View, obj3);
      } else {
        tmp13Result = null;
        if (null != getActivityStatCount(viewerBadge)) {
          tmp13Result = null;
        }
      }
      tmp11 = badge_id === tmp2(6138).BadgeId.GAME_VARIETY || badge_id === tmp2(6138).BadgeId.STREAMING || badge_id === tmp2(6138).BadgeId.GAME_TIME;
    }
  }
  return tmp13Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
let obj = { wrapper: { marginBottom: -nativeDefault.space.PX_12 }, comparison: null, card: null, label: null, metric: null, user: null, username: null, avatar: null };
let obj3 = { marginBottom: -nativeDefault.space.PX_12 };
obj.comparison = { flexDirection: "row", gap: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_8 };
obj.card = { flex: 1, minWidth: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.label = { width: "100%", alignItems: "center" };
obj.metric = { textAlign: "center" };
let obj5 = { flex: 1, minWidth: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.user = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%", minWidth: 0 };
obj.username = { flexShrink: 1, minWidth: 0 };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.round };
obj.avatar = size;
let closure_8 = createStyles.createStyles(obj);
let closure_10 = noop.memo(function ComparisonCard(arg0) {
  ({ badge, tier, avatarUrl, username } = arg0);
  const tmp = closure_8();
  let complex_icon_static_url = tier.simple_icon_url;
  if (complex_icon_static_url == null) {
    complex_icon_static_url = tier.simple_icon_raster_url;
  }
  if (complex_icon_static_url == null) {
    complex_icon_static_url = tier.complex_icon_static_url;
  }
  if (complex_icon_static_url == null) {
    complex_icon_static_url = badge.simple_icon_url;
  }
  if (complex_icon_static_url == null) {
    complex_icon_static_url = badge.complex_icon_static_url;
  }
  if (badge.badge_id === BadgeId.BadgeId.PREMIUM_TENURE) {
    if (null != badge.obtained_at) {
      const _Date = Date;
      const date = new Date(badge.obtained_at);
      const _Number = Number;
      if (!Number.isNaN(date.getTime())) {
        const _Date2 = Date;
        const date1 = new Date();
        const uTCFullYear = date1.getUTCFullYear();
        const result = 12 * (uTCFullYear - date.getUTCFullYear());
        const sum = result + date1.getUTCMonth();
        const diff = sum - date.getUTCMonth();
        const _Date3 = Date;
        const date2 = new Date(tmp8);
        date2.setUTCDate(1);
        date2.setUTCMonth(date.getUTCMonth() + diff);
        const _Date4 = Date;
        const _Date5 = Date;
        const uTCFullYear1 = date2.getUTCFullYear();
        const date3 = new Date(Date.UTC(uTCFullYear1, date2.getUTCMonth() + 1, 0));
        const _Math = Math;
        const uTCDate = date3.getUTCDate();
        date2.setUTCDate(Math.min(date.getUTCDate(), uTCDate));
        let diff1 = diff;
        if (date1 < date2) {
          diff1 = diff - 1;
        }
        if (diff1 >= 0) {
          const _Math2 = Math;
          const rounded = Math.floor(diff1 / 12);
          const result1 = diff1 % 12;
          if (rounded <= 0) {
            if (rounded > 0) {
              const intl3 = util.intl;
              const obj = { years: rounded };
              let formatToPlainStringResult = intl3.formatToPlainString(util.t.PClsrw, obj);
            } else if (0 < result1) {
              const intl2 = util.intl;
              const obj2 = { months: result1 };
              formatToPlainStringResult = intl2.formatToPlainString(util.t.kridzK, obj2);
            } else {
              const intl = util.intl;
              formatToPlainStringResult = intl.string(util.t["0GsO43"]);
            }
          }
          const intl4 = util.intl;
          const obj3 = { years: rounded, months: result1 };
          formatToPlainStringResult = intl4.formatToPlainString(util.t.X3Qd8c, obj3);
        }
      }
      tmp8 = date;
    }
  }
  if (null == formatToPlainStringResult1) {
    const tmp42 = getActivityStatCount(badge);
    if (null == tmp42) {
      if (tmp2Result.isNullOrEmpty(badge.info_label)) {
        let name = tier.milestone_text;
        if (name == null) {
          name = tier.name;
        }
        if (name == null) {
          name = badge.name;
        }
        let info_label = name;
      } else {
        info_label = badge.info_label;
      }
      formatToPlainStringResult1 = info_label;
      tmp2Result = StringUtils;
    } else {
      const badge_id = badge.badge_id;
      if (BadgeId.BadgeId.GAME_VARIETY === badge_id) {
        const intl6 = util.intl;
        const obj4 = { count: tmp42 };
        formatToPlainStringResult1 = intl6.formatToPlainString(util.t["r/EUap"], obj4);
      } else {
        const intl5 = util.intl;
        const obj5 = { hours: tmp42 };
        formatToPlainStringResult1 = intl5.formatToPlainString(util.t.xCjYxK, obj5);
      }
    }
  }
  const obj6 = { style: tmp.card, accessible: true, accessibilityLabel: "" + username + ", " + formatToPlainStringResult1, children: null };
  let tmp33 = null != complex_icon_static_url;
  if (tmp33) {
    const obj7 = { url: complex_icon_static_url, height: 40 };
    tmp33 = timestampProducer(BadgeArtImageDefault, obj7);
  }
  items = [tmp33, ];
  const obj8 = { style: tmp.label, children: null };
  const items1 = [timestampProducer(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", lineClamp: 2, style: tmp.metric, children: formatToPlainStringResult1 }), ];
  const obj10 = { style: tmp.user, children: null };
  let tmp36Result = null != avatarUrl;
  if (tmp36Result) {
    const obj11 = { source: null, style: null, accessible: false, enableAnimation: false };
    const obj12 = { uri: avatarUrl };
    obj11.source = obj12;
    obj11.style = tmp.avatar;
    tmp36Result = timestampProducer(FastImageDefault, obj11);
  }
  const items2 = [tmp36Result, timestampProducer(Text_Text.Text, { variant: "body-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.username, children: username })];
  obj10.children = items2;
  items1[1] = metroImportDefault(View, obj10);
  obj8.children = items1;
  items[1] = metroImportDefault(View, obj8);
  obj6.children = items;
  return metroImportDefault(View, obj6);
});
let closure_11 = { code: "(function BadgeSocialComparisonTsx1(){let[contentOpacity]=this.__closure;return{opacity:contentOpacity.get()};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeSocialComparison.tsx");

export default function BadgeSocialComparison(arg0) {
  ({ badge, viewerBadge } = arg0);
  const findTierResult = BadgeUtils.findTier(viewerBadge, viewerBadge.current_tier);
  const findTierResult1 = BadgeUtils.findTier(badge, badge.current_tier);
  let tmp3 = null;
  if (viewerBadge.owned) {
    tmp3 = null;
    if (badge.owned) {
      tmp3 = null;
      if (null != findTierResult) {
        tmp3 = null;
        if (null != findTierResult1) {
          const obj3 = {};
          const merged = Object.assign(arg0);
          obj3.viewerTier = findTierResult;
          obj3.displayedTier = findTierResult1;
          tmp3 = timestampProducer(EligibleBadgeSocialComparison, obj3);
        }
      }
    }
  }
  return tmp3;
};