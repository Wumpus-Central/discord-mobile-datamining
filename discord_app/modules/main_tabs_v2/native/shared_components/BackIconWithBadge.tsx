// discord_app/modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import XLargeIcon from "../../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";

require = fn;
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  let memo;
  const tmp = closure_8();
  let obj = require("initialize");
  const items = [GuildReadStateStore];
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
  memo = noop.useMemo(() => {
    if (c0 < 10) {
      let BADGE_SIZE = native.BADGE_SIZE;
    } else {
      BADGE_SIZE = native.BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items1);
  const items2 = [sum, memo];
  const memo1 = noop.useMemo(() => {
    if (0 !== c0) {
      const BADGE_PADDING = native.BADGE_PADDING;
      const size = {
        shape: ClipView.CutoutShape.RoundedRect,
        x: 12 - BADGE_PADDING,
        y: 16 - BADGE_PADDING,
        width: memo + 2 * BADGE_PADDING,
        height: native.BADGE_SIZE + 2 * BADGE_PADDING,
        cornerRadius: (native.BADGE_SIZE + 2 * BADGE_PADDING) / 2,
      };
      return size;
    }
  }, items2);
  let size;
  if (tmp2Result.isAndroid()) {
    size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  obj = { style: size, children: null };
  obj = { style: tmp.backIcon, children: null };
  tmp2Result = require("utils/PlatformUtils");
  if (null != memo1) {
    const items3 = [memo1];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const obj1 = {
    cutouts: items4,
    children: closure_6(includeNotificationsCount.Icon, {
      size: "md",
      style: tmp.backIcon,
      color: "interactive-text-default",
    }),
  };
  const items5 = [closure_6(memo(8813), obj1)];
  let tmp9Result = null;
  if (sum > 0) {
    const obj3 = { style: tmp.badgeWrapper, children: null };
    const obj4 = { value: sum, maxValue: 99 };
    obj3.children = closure_6(tmp2(1178).Badge, obj4);
    tmp9Result = closure_6(View, obj3);
  }
  items5[1] = tmp9Result;
  obj.children = items5;
  obj.children = closure_7(View, obj);
  return closure_6(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  badgeWrapper: { position: "absolute", top: 16, left: 12 },
  backIcon: { height: 24, width: 24 },
  iconWithBadge: null,
};
createStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
  padding: 7,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
};
createStyles.iconWithBadge = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag, Icon: null };
  if (noop.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = ArrowLargeLeftIcon.ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj.Icon = XSmallIcon.XSmallIcon;
    tmp5 = obj;
  }
  return timestampProducer(IconWithBadge, tmp5);
};
export const LeftBackIconWithBadge = function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  return timestampProducer(IconWithBadge, {
    includeNotificationsCount: flag,
    Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon,
  });
};
export const CloseIconWithBadgeOnSide = function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  let obj = { style: closure_8().iconWithBadge, children: null };
  const items = [timestampProducer(XLargeIcon.XLargeIcon, { size: "sm", color: "white" })];
  let tmp3Result = null;
  if (count > 0) {
    obj = { value: count };
    tmp3Result = timestampProducer(native.Badge, obj);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return React5(View, obj);
};
