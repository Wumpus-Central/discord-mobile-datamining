// === Module 19075: UnreadBadge ===

// Module 19075 (UnreadBadge)
import useFontScale from "useFontScale" /* 5642 */;
import shared_components_Badge from "shared_components/Badge" /* 9818 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 18720 */;
import noop from "module_19" /* 19 */;

const shared_components_BadgeDefault = shared_components_Badge;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(11046).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(6776).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
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
    const items = [tmp.unreadBadge, tmp4.unreadBadge.position, ];
    const size = { width: tmp4.unreadBadge.size, height: tmp4.unreadBadge.size };
    items[2] = size;
    obj.style = items;
    const obj2 = { classic: true, size: null, badgeStyle: null };
    const _Math = Math;
    obj2.size = shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj3 = { opacity: num2 };
    obj2.badgeStyle = obj3;
    obj.children = jsx(shared_components_BadgeDefault, { classic: true, size: null, badgeStyle: null });
    tmp9Result = <View style={null}>{null}</View>;
    const tmp2Result = shared_components_BadgeDefault;
  }
  return tmp9Result;
});