// === Module 15659: IconWithBadge ===

// Module 15659 (IconWithBadge)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import XLargeIcon from "XLargeIcon" /* 4328 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6316 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  let memo;
  const tmp = callback2();
  let obj = _require(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = memo(15650)().value;
  }
  const sum = num + num2;
  _require = sum;
  const items1 = [sum];
  memo = React.useMemo(() => {
    if (_undefined < 10) {
      let BADGE_SIZE = _undefined(dependencyMap[8]).BADGE_SIZE;
    } else {
      BADGE_SIZE = _undefined(dependencyMap[8]).BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  const items2 = [sum, memo];
  const memo1 = React.useMemo(() => {
    if (0 !== _undefined) {
      const BADGE_PADDING = _undefined(dependencyMap[8]).BADGE_PADDING;
      const obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
      obj[0] = _undefined(dependencyMap[9]).CutoutShape.RoundedRect;
      obj[1] = 12 - BADGE_PADDING;
      obj[2] = 16 - BADGE_PADDING;
      obj[3] = memo + 2 * BADGE_PADDING;
      obj[4] = _undefined(dependencyMap[8]).BADGE_SIZE + 2 * BADGE_PADDING;
      obj[5] = (_undefined(dependencyMap[8]).BADGE_SIZE + 2 * BADGE_PADDING) / 2;
      return obj;
    }
  }, items2);
  obj = undefined;
  if (tmp2Result.isAndroid()) {
    obj = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  obj = { style: obj, children: null };
  obj1 = { style: tmp.backIcon, children: null };
  tmp2Result = _require(501);
  if (null != memo1) {
    const items3 = [memo1];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp5Result = memo(8402);
  const items5 = [callback(tmp5Result, { cutouts: items4, children: callback(includeNotificationsCount.Icon, obj3) }), ];
  let tmp9Result = null;
  if (sum > 0) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.badgeWrapper;
    const obj5 = { value: null, maxValue: 99 };
    obj5[0] = sum;
    obj4[1] = callback(tmp2(1297).Badge, obj5);
    tmp9Result = callback(View, obj4);
  }
  items5[1] = tmp9Result;
  obj1[1] = items5;
  obj[1] = callback2(View, obj1);
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.modules.button.BORDER_RADIUS, padding: 7, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
createCacheKey[2] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

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
    obj[1] = tmp3(6316).ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(6368).XSmallIcon;
    tmp5 = obj;
  }
  return callback(IconWithBadge, tmp5);
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
  return callback2(View, obj);
};