// discord_app/modules/user_profile/native/UserProfileAvatar.tsx
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import HeaderAvatarDefault from "../../profile_customization/native/HeaderAvatar.tsx";
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
class UserProfileAvatar {
  constructor(arg0) {
    size = global.size;
    if (size === undefined) {
      size = AVATAR_SIZE_VARIANT;
    }
    merged = Object.assign(global, Object.assign({ backgroundColor: 0, size: 0, ref: 0 }));
    tmp2 = closure_1(closure_2[5])();
    obj = { children: null };
    obj1 = { style: null };
    items = [, ,];
    ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
    items[2] = { backgroundColor: global.backgroundColor };
    obj1.style = items;
    items1 = [,];
    items1[0] = jsx(View, obj1);
    obj4 = { ref: global.ref, style: null, size };
    items2 = [,];
    ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
    obj4.style = items2;
    tmp3 = closure_1(closure_2[6]);
    merged1 = Object.assign(merged);
    items1[1] = jsx(tmp3, obj4);
    obj.children = items1;
    return jsxs(Fragment, obj);
  }
}
const View = fn(17).View;
const TrackUserProfileActions = fn(8754).TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = fn(7377).AVATAR_SIZE_VARIANT;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default UserProfileAvatar;
export function OpenableUserProfileAvatar(animate) {
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
  const obj3 = { ref };
  const callback = ref.useCallback(() => {
    trackUserProfileAction({ action: TrackUserProfileActions.VIEW_AVATAR });
    openUserProfileAvatarMediaViewerDefault({ user, guildId, animate: flag, originViewOrOriginLayout: ref.current });
  }, items);
  const merged1 = Object.assign(merged);
  obj3.animate = flag;
  obj3.user = user;
  obj3.guildId = guildId;
  let tmp10;
  if (tmp5) {
    tmp10 = callback;
  }
  obj3.onPress = tmp10;
  if (tmp5) {
    const intl = tmp3(tmp4[9]).intl;
    let accessibilityLabel = intl.string(tmp3(tmp4[9]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  obj3.accessibilityLabel = accessibilityLabel;
  return closure_7(UserProfileAvatar, obj3);
}
