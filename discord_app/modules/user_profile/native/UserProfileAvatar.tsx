// === Module 8256: UserProfileAvatar ===

// Module 8256 (UserProfileAvatar)
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8241 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 8257 */;
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer" /* 8260 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const TrackUserProfileActions = fn(8183).TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = fn(7208).AVATAR_SIZE_VARIANT;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const forwardRefResult = noop.forwardRef((backgroundColor, ref) => {
  let size = backgroundColor.size;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  const merged = Object.assign(backgroundColor, Object.assign({ backgroundColor: 0, size: 0 }));
  const tmp2 = UserProfileSharedStylesDefault();
  let obj = { children: null };
  obj = { style: null };
  const items = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
  items[2] = { backgroundColor: backgroundColor.backgroundColor };
  obj.style = items;
  const items1 = [React5(View, obj), ];
  obj = { ref, style: null, size };
  const items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
  obj.style = items2;
  const merged1 = Object.assign(merged);
  items1[1] = React5(HeaderAvatarDefault, obj);
  obj.children = items1;
  return React7(React6, obj);
});
let c10 = forwardRefResult;
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = function OpenableUserProfileAvatar(animate) {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  const guildId = animate.guildId;
  const merged = Object.assign(animate, Object.assign({ animate: 0, user: 0, guildId: 0 }));
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
    openUserProfileAvatarMediaViewerDefault(obj);
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
  return closure_7(closure_10, obj);
};