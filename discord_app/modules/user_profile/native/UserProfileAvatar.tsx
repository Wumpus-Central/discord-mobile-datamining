// === Module 7928: UserProfileAvatar ===

// Module 7928 (UserProfileAvatar)
import c from "c" /* 576 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7913 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 7929 */;
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer" /* 7932 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["backgroundColor", "size"];
let closure_4 = ["animate", "user", "guildId"];
const View = fn(17).View;
const TrackUserProfileActions = fn(7854).TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = fn(6707).AVATAR_SIZE_VARIANT;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(21);
  if (cResult[0] !== arg0) {
    ({ backgroundColor, size } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = backgroundColor;
    cResult[2] = tmp8;
    cResult[3] = size;
    let tmp5 = size;
    let tmp4 = tmp8;
    let tmp3 = backgroundColor;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  if (undefined === tmp5) {
    tmp5 = AVATAR_SIZE_VARIANT;
  }
  const tmp10 = UserProfileSharedStylesDefault();
  if (cResult[4] !== tmp3) {
    const obj2 = { backgroundColor: tmp3 };
    cResult[4] = tmp3;
    cResult[5] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp10.avatarBackground) {
    if (cResult[7] === tmp10.avatarPosition) {
      if (cResult[8] === tmp11) {
        let tmp12 = cResult[9];
      }
      if (cResult[10] === tmp10.avatar) {
        if (cResult[11] === tmp10.avatarPosition) {
          let tmp14 = cResult[12];
        }
        if (cResult[13] === tmp4) {
          if (cResult[14] === ref) {
            if (cResult[15] === tmp5) {
              if (cResult[16] === tmp14) {
                let tmp16 = cResult[17];
              }
              if (cResult[18] === tmp12) {
                if (cResult[19] === tmp16) {
                  let tmp23 = cResult[20];
                }
                return tmp23;
              }
              const obj3 = { children: null };
              const items = [tmp12, tmp16];
              obj3.children = items;
              const tmp26 = __initData(closure_1_11, obj3);
              cResult[18] = tmp12;
              cResult[19] = tmp16;
              cResult[20] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        const obj4 = { ref, style: tmp14, size: tmp5 };
        const merged = Object.assign(tmp4);
        const tmp22 = v65535(HeaderAvatarDefault, obj4);
        cResult[13] = tmp4;
        cResult[14] = ref;
        cResult[15] = tmp5;
        cResult[16] = tmp14;
        cResult[17] = tmp22;
        tmp16 = tmp22;
        const tmp9Result = HeaderAvatarDefault;
      }
      const items1 = [, ];
      ({ avatar: arr2[0], avatarPosition: arr2[1] } = tmp10);
      cResult[10] = tmp10.avatar;
      cResult[11] = tmp10.avatarPosition;
      cResult[12] = items1;
      tmp14 = items1;
    }
  }
  const obj5 = { style: null };
  const items2 = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp10);
  items2[2] = tmp11;
  obj5.style = items2;
  const tmp13 = v65535(View, obj5);
  cResult[6] = tmp10.avatarBackground;
  cResult[7] = tmp10.avatarPosition;
  cResult[8] = tmp11;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : ((backgroundColor, ref) => {
  let size = backgroundColor.size;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  const merged = Object.assign(backgroundColor, Object.assign({ backgroundColor: 0, size: 0 }));
  const tmp2 = UserProfileSharedStylesDefault();
  const obj = { children: null };
  const obj2 = { style: null };
  const items = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
  items[2] = { backgroundColor: backgroundColor.backgroundColor };
  obj2.style = items;
  const items1 = [v65535(View, obj2), ];
  const obj3 = { ref, style: null, size };
  const items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
  obj3.style = items2;
  const merged1 = Object.assign(merged);
  items1[1] = v65535(HeaderAvatarDefault, obj3);
  obj.children = items1;
  return __initData(closure_1_11, obj);
}));
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = require("c").c(23);
  if (cResult[0] !== guildId) {
    ({ animate, user } = guildId);
    importDefault = user;
    guildId = guildId.guildId;
    _require = guildId;
    const tmp9 = _objectWithoutProperties(guildId, trackUserProfileAction);
    cResult[0] = guildId;
    cResult[1] = guildId;
    cResult[2] = tmp9;
    cResult[3] = animate;
    cResult[4] = user;
    let tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[4];
  }
  dependencyMap = tmp10;
  const obj = require("c");
  const tmp2 = dependencyMap;
  const ref = noop.useRef(null);
  trackUserProfileAction = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[5] === tmp4) {
    if (cResult[6] === user) {
      let tmp12 = cResult[7];
    }
    if (cResult[8] === tmp10) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === trackUserProfileAction) {
          class R {
            constructor() {
              obj = { action: TrackUserProfileActions.VIEW_AVATAR };
              tmp = trackUserProfileAction(obj);
              obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
              tmp2 = closure_1(closure_2[11])(obj1);
              return;
            }
          }
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp5) {
              if (cResult[16] === tmp10) {
                if (cResult[17] === tmp4) {
                  if (cResult[18] === tmp5) {
                    if (cResult[19] === tmp15) {
                      if (cResult[20] === tmp16) {
                        if (cResult[21] === user) {
                          let tmp18 = cResult[22];
                        }
                        return tmp18;
                      }
                    }
                  }
                }
              }
              class R {
                constructor() {
                  obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                  tmp = trackUserProfileAction(obj);
                  obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
                  tmp2 = closure_1(closure_2[11])(obj1);
                  return;
                }
              }
              const obj3 = { ref };
              const merged = Object.assign(tmp5);
              obj3.animate = tmp10;
              obj3.user = user;
              obj3.guildId = tmp4;
              obj3.onPress = tmp15;
              obj3.accessibilityLabel = cResult[15];
              const tmp23 = closure_10(closure_13, obj3);
              cResult[16] = tmp10;
              cResult[17] = tmp4;
              cResult[18] = tmp5;
              cResult[19] = tmp15;
              cResult[20] = cResult[15];
              cResult[21] = user;
              cResult[22] = tmp23;
              tmp18 = tmp23;
            }
          }
          if (tmp12) {
            const intl = tmp(1126).intl;
            class R {
              constructor() {
                obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                tmp = trackUserProfileAction(obj);
                obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
                tmp2 = closure_1(closure_2[11])(obj1);
                return;
              }
            }
            let accessibilityLabel = intl.string(tmp2);
          } else {
            accessibilityLabel = tmp5.accessibilityLabel;
          }
          cResult[13] = tmp12;
          cResult[14] = tmp5;
          cResult[15] = accessibilityLabel;
        }
      }
    }
    class R {
      constructor() {
        obj = { action: TrackUserProfileActions.VIEW_AVATAR };
        tmp = trackUserProfileAction(obj);
        obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
        tmp2 = closure_1(closure_2[11])(obj1);
        return;
      }
    }
    cResult[8] = tmp10;
    cResult[9] = tmp4;
    cResult[10] = trackUserProfileAction;
    cResult[11] = user;
    cResult[12] = R;
  }
  const tmp13 = null != user.avatar || user.hasAvatarForGuild(tmp4);
  cResult[5] = tmp4;
  cResult[6] = user;
  cResult[7] = tmp13;
  tmp12 = tmp13;
  const tmpResult = require("UserProfileAnalyticsContext");
}) : ((animate) => {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  guildId = animate.guildId;
  const merged = Object.assign(animate, Object.assign({ animate: 0, user: 0, guildId: 0 }));
  const ref = noop.useRef(null);
  const trackUserProfileAction = flag(guildId[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5 = null != user.avatar || user.hasAvatarForGuild(guildId);
  const items = [flag, guildId, trackUserProfileAction, user];
  const obj3 = { ref };
  const callback = noop.useCallback(() => {
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
    const intl = tmp3(tmp4[12]).intl;
    let accessibilityLabel = intl.string(tmp3(tmp4[12]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  obj3.accessibilityLabel = accessibilityLabel;
  return closure_10(closure_13, obj3);
});