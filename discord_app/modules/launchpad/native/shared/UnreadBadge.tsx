// discord_app/modules/launchpad/native/shared/UnreadBadge.tsx
import useFontScale from "../../../screen/native/useFontScale.tsx";
import Badge from "../../../main_tabs_v2/native/shared_components/Badge.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const BadgeDefault = Badge;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(10246).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(4818).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default noop.memo(function UnreadBadge(arg0) {
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp4 = getLayoutStylesDefault();
  useFontScale;
  let tmp9Result = null;
  if (unread) {
    const obj = { style: null, children: null };
    const items = [tmp.unreadBadge, tmp4.unreadBadge.position];
    const size = { width: tmp4.unreadBadge.size, height: tmp4.unreadBadge.size };
    items[2] = size;
    obj.style = items;
    const obj2 = { classic: true, size: null, badgeStyle: null };
    const _Math = Math;
    obj2.size = Badge.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj3 = { opacity: num2 };
    const items1 = [obj3];
    obj2.badgeStyle = items1;
    obj.children = jsx(BadgeDefault, { classic: true, size: null, badgeStyle: null });
    tmp9Result = <View style={null}>{null}</View>;
    const tmp2Result = BadgeDefault;
  }
  return tmp9Result;
});
