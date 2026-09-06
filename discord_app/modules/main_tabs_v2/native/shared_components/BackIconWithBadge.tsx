// === Module 16403: IconWithBadge ===

// Module 16403 (IconWithBadge)
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import XLargeIcon from "XLargeIcon" /* 4513 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5628 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateGuildUnreadSentinel" /* 7636 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  let memo;
  const tmp = callback2();
  let obj = _require(504);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = memo(16394)().value;
  }
  const sum = num + num2;
  _require = sum;
  const items1 = [sum];
  memo = React.useMemo(() => {
    if (_undefined < 10) {
      let BADGE_SIZE = _undefined(closure_1_2[8]).BADGE_SIZE;
    } else {
      BADGE_SIZE = _undefined(closure_1_2[8]).BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  const items2 = [sum, memo];
  const memo1 = React.useMemo(() => {
    if (0 !== _undefined) {
      const BADGE_PADDING = _undefined(closure_1_2[8]).BADGE_PADDING;
      const obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
      obj[0] = _undefined(closure_1_2[9]).CutoutShape.RoundedRect;
      obj[1] = 12 - BADGE_PADDING;
      obj[2] = 16 - BADGE_PADDING;
      obj[3] = memo + 2 * BADGE_PADDING;
      obj[4] = _undefined(closure_1_2[8]).BADGE_SIZE + 2 * BADGE_PADDING;
      obj[5] = (_undefined(closure_1_2[8]).BADGE_SIZE + 2 * BADGE_PADDING) / 2;
      return obj;
    }
  }, items2);
  obj = undefined;
  if (tmp2Result.isAndroid()) {
    obj = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  obj = { style: obj, children: null };
  obj1 = { style: tmp.backIcon, children: null };
  const tmp11 = closure_7;
  tmp2Result = _require(1116);
  const tmp5 = memo;
  if (null != memo1) {
    const items3 = [memo1];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp5Result = memo(8813);
  const items5 = [closure_6(tmp5Result, { cutouts: items4, children: closure_6(includeNotificationsCount.Icon, obj3) }), ];
  let tmp9Result = null;
  if (sum > 0) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.badgeWrapper;
    const obj5 = { value: null, maxValue: 99 };
    obj5[0] = sum;
    obj4[1] = tmp9(tmp2(1178).Badge, obj5);
    tmp9Result = tmp9(tmp10, obj4);
  }
  items5[1] = tmp9Result;
  obj1[1] = items5;
  obj[1] = tmp11(View, obj1);
  return closure_6(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { badgeWrapper: { position: "absolute", top: 16, left: 12 }, backIcon: { height: 24, width: 24 }, iconWithBadge: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, padding: 7, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[2] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag, Icon: null };
  if (React.useMemo(() => navigation.getState().index > 0, items)) {
    obj[1] = tmp3(5628).ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(5680).XSmallIcon;
    tmp5 = obj;
  }
  return closure_6(IconWithBadge, tmp5);
};
export const LeftBackIconWithBadge = function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  return callback(IconWithBadge, { includeNotificationsCount: flag, Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon });
};
export const CloseIconWithBadgeOnSide = function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  let obj = { style: callback2().iconWithBadge, children: null };
  const items = [callback(XLargeIcon.XLargeIcon, { size: "sm", color: "white" }), ];
  let tmp3Result = null;
  if (count > 0) {
    obj = { value: null };
    obj[0] = count;
    tmp3Result = callback(Button.Badge, obj);
  }
  items[1] = tmp3Result;
  obj[1] = items;
  return closure_7(View, obj);
};