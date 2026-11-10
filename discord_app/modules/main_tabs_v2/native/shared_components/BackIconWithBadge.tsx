// discord_app/modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import XLargeIcon from "../../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";

require = fn;
function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = includeNotificationsCount.hideBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let memo;
  const tmp = closure_8();
  items = [GuildReadStateStore];
  const items1 = [flag2];
  const stateFromStores = flag2(memo[6]).useStateFromStores(
    items,
    () => {
      num = 0;
      if (!flag2) {
        num = GuildReadStateStore.getTotalMentionCount();
      }
      return num;
    },
    items1,
  );
  let num = 0;
  if (!flag2) {
    let num2 = 0;
    if (null != stateFromStores) {
      num2 = stateFromStores;
    }
    let num3 = 0;
    if (flag) {
      num3 = tmp6;
    }
    num = num2 + num3;
  }
  const items2 = [num];
  memo = noop.useMemo(() => {
    if (num < 10) {
      let BADGE_SIZE = native.BADGE_SIZE;
    } else {
      BADGE_SIZE = native.BADGE_SIZE + 8;
    }
    return BADGE_SIZE;
  }, items2);
  const items3 = [num, memo];
  const memo1 = noop.useMemo(() => {
    if (0 !== num) {
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
  }, items3);
  const obj = flag2(memo[6]);
  const tmp5 = num;
  let size;
  if (tmp2Result.isAndroid()) {
    size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  const obj2 = { style: size, children: null };
  const obj3 = { style: tmp.backIcon, children: null };
  tmp2Result = flag2(memo[10]);
  if (null != memo1) {
    const items4 = [memo1];
    let items5 = items4;
  } else {
    items5 = [];
  }
  const obj4 = {
    cutouts: items5,
    children: closure_6(includeNotificationsCount.Icon, {
      size: "md",
      style: tmp.backIcon,
      color: "interactive-text-default",
    }),
  };
  const items6 = [closure_6(tmp5(memo[9]), obj4)];
  let tmp10Result = null;
  if (num > 0) {
    const obj6 = { style: tmp.badgeWrapper, children: null };
    const obj7 = { value: num, maxValue: 99 };
    obj6.children = closure_6(tmp2(tmp3[8]).Badge, obj7);
    tmp10Result = closure_6(View, obj6);
  }
  items6[1] = tmp10Result;
  obj3.children = items6;
  obj2.children = closure_7(View, obj3);
  return closure_6(View, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  badgeWrapper: { position: "absolute", top: 16, left: 12 },
  backIcon: { height: 24, width: 24 },
  iconWithBadge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    padding: 7,
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  },
};
let closure_8 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = navigation.hideBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  items = [navigation];
  const obj = { includeNotificationsCount: flag, hideBadge: flag2, Icon: null };
  if (noop.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = ArrowLargeLeftIcon.ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj.Icon = XSmallIcon.XSmallIcon;
    tmp5 = obj;
  }
  return timestampProducer(IconWithBadge, tmp5);
}
export function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  return timestampProducer(IconWithBadge, {
    includeNotificationsCount: flag,
    Icon: ArrowLargeLeftIcon.ArrowLargeLeftIcon,
  });
}
export function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  const obj = { style: closure_8().iconWithBadge, children: null };
  items = [timestampProducer(XLargeIcon.XLargeIcon, { size: "sm", color: "white" })];
  let tmp3Result = null;
  if (count > 0) {
    const obj2 = { value: count };
    tmp3Result = timestampProducer(native.Badge, obj2);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return metroImportDefault(View, obj);
}
