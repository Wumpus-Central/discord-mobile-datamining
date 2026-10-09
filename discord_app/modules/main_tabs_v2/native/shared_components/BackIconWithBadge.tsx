// === Module 16770: BackIconWithBadge ===

// Module 16770 (BackIconWithBadge)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import XLargeIcon from "XLargeIcon" /* 4996 */;
import ArrowLargeLeftIcon2 from "ArrowLargeLeftIcon" /* 6209 */;
import XSmallIcon from "XSmallIcon" /* 6212 */;
import ClipView from "ClipView" /* 8997 */;
import useNotificationsTabBadgeDefault from "useNotificationsTabBadge" /* 16761 */;
import noop from "module_19" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6084 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { badgeWrapper: { position: "absolute", top: 16, left: 12 }, backIcon: { height: 24, width: 24 }, iconWithBadge: { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 7, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function IconWithBadge(arg0) {
  const cResult = c.c(20);
  ({ includeNotificationsCount, Icon } = arg0);
  closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore];
    class I {
      constructor() {
        return closure_1_5.getTotalMentionCount();
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmp4 = undefined !== includeNotificationsCount && includeNotificationsCount;
  const stateFromStores = initialize.useStateFromStores(tmp6, I);
  let num3 = 0;
  if (null != stateFromStores) {
    num3 = stateFromStores;
  }
  let num4 = 0;
  if (tmp4) {
    num4 = useNotificationsTabBadgeDefault().value;
  }
  const sum = num3 + num4;
  if (sum < 10) {
    let BADGE_SIZE = native.BADGE_SIZE;
  } else {
    BADGE_SIZE = native.BADGE_SIZE + 8;
  }
  if (0 === sum) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      let size;
      if (tmpResult2.isAndroid()) {
        size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
      }
      class I {
        constructor() {
          return closure_1_5.getTotalMentionCount();
        }
      }
      cResult[4] = size;
      tmpResult2 = utils_PlatformUtils;
    }
    class I {
      constructor() {
        return closure_1_5.getTotalMentionCount();
      }
    }
  } else {
    let num8 = 2;
    const sum1 = BADGE_SIZE + 2 * native.BADGE_PADDING;
    if (cResult[2] !== sum1) {
      const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: null, y: null, width: null, height: null, cornerRadius: null };
      class I {
        constructor() {
          return closure_1_5.getTotalMentionCount();
        }
      }
      size1.y = 16 - native.BADGE_PADDING;
      size1.width = sum1;
      size1.height = native.BADGE_SIZE + num8 * native.BADGE_PADDING;
      size1.cornerRadius = (native.BADGE_SIZE + num8 * native.BADGE_PADDING) / num8;
      cResult[num8] = sum1;
      num8 = 3;
      cResult[3] = size1;
    }
    class I {
      constructor() {
        return closure_1_5.getTotalMentionCount();
      }
    }
  }
  const tmpResult = initialize;
}) : (function IconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  let memo;
  const tmp = closure_8();
  const items = [GuildReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  let num = 0;
  if (null != stateFromStores) {
    num = stateFromStores;
  }
  let num2 = 0;
  if (flag) {
    num2 = memo(16761)().value;
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
      const size = { shape: ClipView.CutoutShape.RoundedRect, x: 12 - BADGE_PADDING, y: 16 - BADGE_PADDING, width: memo + 2 * BADGE_PADDING, height: native.BADGE_SIZE + 2 * BADGE_PADDING, cornerRadius: (native.BADGE_SIZE + 2 * BADGE_PADDING) / 2 };
      return size;
    }
  }, items2);
  const obj = require("initialize");
  const tmp5 = memo;
  let size;
  if (tmp2Result.isAndroid()) {
    size = { height: 40, width: 40, paddingTop: 8, marginRight: -8 };
  }
  const obj2 = { style: size, children: null };
  const obj3 = { style: tmp.backIcon, children: null };
  tmp2Result = require("utils/PlatformUtils");
  if (null != memo1) {
    const items3 = [memo1];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const obj4 = { cutouts: items4, children: closure_6(includeNotificationsCount.Icon, { size: "md", style: tmp.backIcon, color: "interactive-text-default" }) };
  const items5 = [closure_6(tmp5(8997), obj4), ];
  let tmp9Result = null;
  if (sum > 0) {
    const obj6 = { style: tmp.badgeWrapper, children: null };
    const obj7 = { value: sum, maxValue: 99 };
    obj6.children = closure_6(tmp2(1200).Badge, obj7);
    tmp9Result = closure_6(View, obj6);
  }
  items5[1] = tmp9Result;
  obj3.children = items5;
  obj2.children = closure_7(View, obj3);
  return closure_6(View, obj2);
});
fn(558);
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 7, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsLeftIconWithBadge(arg0) {
  let ArrowLargeLeftIcon = dependencyMap;
  const cResult = c.c(5);
  ({ navigation, includeNotificationsCount } = arg0);
  if (cResult[0] !== navigation) {
    state = navigation.getState();
    cResult[0] = navigation;
    cResult[1] = state;
    let tmp4 = state;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === (undefined !== includeNotificationsCount && includeNotificationsCount)) {
    if (cResult[3] === tmp6) {
      return cResult[4];
    }
  }
  const obj2 = { includeNotificationsCount: undefined !== includeNotificationsCount && includeNotificationsCount, Icon: null };
  if (tmp4.index > 0) {
    ArrowLargeLeftIcon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
    obj2.Icon = ArrowLargeLeftIcon;
    let tmp9 = obj2;
  } else {
    obj2.Icon = XSmallIcon.XSmallIcon;
    tmp9 = obj2;
  }
  cResult[2] = undefined !== includeNotificationsCount && includeNotificationsCount;
  cResult[3] = tmp4.index > 0;
  cResult[4] = timestampProducer(closure_9, tmp9);
  const tmp7Result = timestampProducer(closure_9, tmp9);
}) : (function SettingsLeftIconWithBadge(navigation) {
  navigation = navigation.navigation;
  let flag = navigation.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  const items = [navigation];
  const obj = { includeNotificationsCount: flag, Icon: null };
  if (noop.useMemo(() => navigation.getState().index > 0, items)) {
    obj.Icon = ArrowLargeLeftIcon2.ArrowLargeLeftIcon;
    let tmp5 = obj;
  } else {
    obj.Icon = XSmallIcon.XSmallIcon;
    tmp5 = obj;
  }
  return timestampProducer(closure_9, tmp5);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function LeftBackIconWithBadge(includeNotificationsCount) {
  const cResult = c.c(2);
  includeNotificationsCount = includeNotificationsCount.includeNotificationsCount;
  if (cResult[0] !== (undefined !== includeNotificationsCount && includeNotificationsCount)) {
    const obj2 = { includeNotificationsCount: tmp4, Icon: ArrowLargeLeftIcon2.ArrowLargeLeftIcon };
    const tmp8 = timestampProducer(closure_9, obj2);
    cResult[0] = tmp4;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function LeftBackIconWithBadge(includeNotificationsCount) {
  let flag = includeNotificationsCount.includeNotificationsCount;
  if (flag === undefined) {
    flag = false;
  }
  return timestampProducer(closure_9, { includeNotificationsCount: flag, Icon: ArrowLargeLeftIcon2.ArrowLargeLeftIcon });
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/BackIconWithBadge.tsx");

export const BACK_ICON_WITH_BADGE_HIT_SLOP = { top: 8, bottom: 8, left: 8, right: 8 };
export const SettingsLeftIconWithBadge = tmp3;
export const LeftBackIconWithBadge = tmp4;
export const CloseIconWithBadgeOnSide = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseIconWithBadgeOnSide(count) {
  const cResult = c.c(6);
  count = count.count;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = timestampProducer(XLargeIcon.XLargeIcon, { size: "sm", color: "white" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== count) {
    let tmp9 = null;
    if (count > 0) {
      const obj2 = { value: count };
      tmp9 = timestampProducer(native.Badge, obj2);
    }
    cResult[1] = count;
    cResult[2] = tmp9;
    let tmp8 = tmp9;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.iconWithBadge) {
    if (cResult[4] === tmp8) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { style: tmp4.iconWithBadge, children: null };
  const items = [first, tmp8];
  obj3.children = items;
  const tmp12 = React5(View, obj3);
  cResult[3] = tmp4.iconWithBadge;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function CloseIconWithBadgeOnSide(count) {
  count = count.count;
  const obj = { style: closure_8().iconWithBadge, children: null };
  const items = [timestampProducer(XLargeIcon.XLargeIcon, { size: "sm", color: "white" }), ];
  let tmp3Result = null;
  if (count > 0) {
    const obj2 = { value: count };
    tmp3Result = timestampProducer(native.Badge, obj2);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return React5(View, obj);
});