// === Module 8990: OpenableUserProfileAvatar ===

// Module 8990 (OpenableUserProfileAvatar)
import _modDef8409 from "module_8409" /* 8409 */;
import useSharedStylesDefault from "useSharedStyles" /* 8982 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { TrackUserProfileActions } from "USER_PROFILE_TOOLTIP_DELAY" /* 8931 */;
import { AVATAR_SIZE_VARIANT } from "ARBITRARY_LARGE_OFFSET" /* 7186 */;
import jsxProd from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((backgroundColor, ref) => {
  let size = backgroundColor.size;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  const merged = Object.assign(backgroundColor, Object.create(null));
  const tmp2 = useSharedStylesDefault();
  const items = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
  items[2] = { backgroundColor: backgroundColor.backgroundColor };
  const items1 = [callback(View, { style: items }), ];
  const obj = { ref, style: items2, size };
  items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
  const merged1 = Object.assign(merged);
  items1[1] = callback(_modDef8409, obj);
  obj[0] = items1;
  return callback2(closure_8, obj);
});
let c10 = forwardRefResult;
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = function OpenableUserProfileAvatar(animate) {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  const guildId = animate.guildId;
  const merged = Object.assign(animate, Object.create(null));
  let ref;
  ref = ref.useRef(null);
  const trackUserProfileAction = flag(guildId[7]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5 = null != user.avatar || user.hasAvatarForGuild(guildId);
  const items = [flag, guildId, trackUserProfileAction, user];
  let obj = { ref };
  const callback = obj.useCallback(() => {
    let obj = { action: TrackUserProfileActions.VIEW_AVATAR };
    trackUserProfileAction(obj);
    obj = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current };
    user(guildId[8])(obj);
  }, items);
  const merged1 = Object.assign(merged);
  obj.animate = flag;
  obj.user = user;
  obj.guildId = guildId;
  let tmp10;
  if (tmp5) {
    tmp10 = callback;
  }
  obj.onPress = tmp10;
  if (tmp5) {
    const intl = tmp3(tmp4[9]).intl;
    let accessibilityLabel = intl.string(tmp3(tmp4[9]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  obj.accessibilityLabel = accessibilityLabel;
  return callback(closure_10, obj);
};