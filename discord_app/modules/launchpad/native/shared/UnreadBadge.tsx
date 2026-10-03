// === Module 17374: UnreadBadge ===

// Module 17374 (UnreadBadge)
import c from "c" /* 576 */;
import useFontScale from "useFontScale" /* 5602 */;
import Badge from "Badge" /* 7503 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16813 */;
import noop from "module_19" /* 19 */;

const BadgeDefault = Badge;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(11697).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(5072).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = getLayoutStylesDefault();
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  const fontScale = useFontScale.useFontScale();
  if (cResult[1] === fontScale) {
    if (cResult[2] === muted) {
      if (cResult[3] === resolvedUnreadSetting) {
        if (cResult[4] === tmp4) {
          if (cResult[5] === unread) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
    }
  }
  let tmp11Result = null;
  if (unread) {
    const obj2 = { style: null, children: null };
    const items = [tmp4.unreadBadge, first.unreadBadge.position, ];
    const size = { width: first.unreadBadge.size, height: first.unreadBadge.size };
    items[2] = size;
    obj2.style = items;
    const obj3 = { classic: true, size: null, badgeStyle: null };
    const _Math = Math;
    obj3.size = Badge.CHANNEL_BADGE_SIZE * Math.max(fontScale, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num3 = MUTED_OPACITY_CONTENT;
    } else {
      num3 = 1;
    }
    const obj4 = { opacity: num3 };
    const items1 = [obj4];
    obj3.badgeStyle = items1;
    obj2.children = jsx(BadgeDefault, { classic: true, size: null, badgeStyle: null });
    tmp11Result = <View style={null}>{null}</View>;
  }
  cResult[1] = fontScale;
  cResult[2] = muted;
  cResult[3] = resolvedUnreadSetting;
  cResult[4] = tmp4;
  cResult[5] = unread;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
  const tmpResult = useFontScale;
}) : ((arg0) => {
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
}));