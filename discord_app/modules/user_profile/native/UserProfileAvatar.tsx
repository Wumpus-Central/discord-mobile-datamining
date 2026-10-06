// === Module 7939: UserProfileAvatar ===

// Module 7939 (UserProfileAvatar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 6714 */;
import Constants2 from "Constants" /* 7865 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7924 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 7940 */;
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer" /* 7943 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, guildId, importDefault, obj1, tmp;

let c10;
let closure_12;
let unpackModuleId;
let closure_3 = ["backgroundColor", "size"];
let closure_4 = ["animate", "user", "guildId"];
const View = react_native.View;
const TrackUserProfileActions = Constants2.TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = Constants.AVATAR_SIZE_VARIANT;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
const forwardRef = react.forwardRef;
let ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let backgroundColor;
  let items;
  let items2;
  let tmp11;
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== arg0) {
    ({ backgroundColor, size } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = backgroundColor;
    cResult[2] = tmp8;
    cResult[3] = size;
    tmp5 = size;
    tmp4 = tmp8;
    tmp3 = backgroundColor;
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
    tmp11 = obj2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp10.avatarBackground) {
    if (cResult[7] === tmp10.avatarPosition) {
      let tmp12;
      if (cResult[8] === tmp11) {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp10.avatar) {
        let tmp14;
        if (cResult[11] === tmp10.avatarPosition) {
          tmp14 = cResult[12];
        }
        if (cResult[13] === tmp4) {
          if (cResult[14] === ref) {
            if (cResult[15] === tmp5) {
              let tmp16;
              if (cResult[16] === tmp14) {
                tmp16 = cResult[17];
              }
              if (cResult[18] === tmp12) {
                let tmp23;
                if (cResult[19] === tmp16) {
                  tmp23 = cResult[20];
                }
                return tmp23;
              }
              const obj3 = { children: items };
              items = [tmp12, tmp16];
              const tmp26 = closure_12(unpackModuleId, obj3);
              cResult[18] = tmp12;
              cResult[19] = tmp16;
              cResult[20] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        const obj4 = { ref, style: tmp14, size: tmp5 };
        const tmp9Result = HeaderAvatarDefault;
        const merged = Object.assign(tmp4);
        const tmp22 = authStore(tmp9Result, obj4);
        cResult[13] = tmp4;
        cResult[14] = ref;
        cResult[15] = tmp5;
        cResult[16] = tmp14;
        cResult[17] = tmp22;
        tmp16 = tmp22;
      }
      const items1 = [, ];
      ({ avatar: arr2[0], avatarPosition: arr2[1] } = tmp10);
      cResult[10] = tmp10.avatar;
      cResult[11] = tmp10.avatarPosition;
      cResult[12] = items1;
      tmp14 = items1;
    }
  }
  const obj5 = { style: items2 };
  items2 = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp10);
  items2[2] = tmp11;
  const tmp13 = authStore(View, obj5);
  cResult[6] = tmp10.avatarBackground;
  cResult[7] = tmp10.avatarPosition;
  cResult[8] = tmp11;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : ((size, ref) => {
  let items;
  let items1;
  let items2;
  size = size.size;
  const backgroundColor = size.backgroundColor;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  const merged = Object.assign(size, Object.assign({ backgroundColor: 0, size: 0 }));
  const tmp2 = UserProfileSharedStylesDefault();
  const obj2 = { style: items };
  items = [, , ];
  const obj = { children: items1 };
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
  items[2] = { backgroundColor };
  items1 = [authStore(View, obj2), ];
  const obj3 = { ref, style: items2, size };
  items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
  const tmp3 = HeaderAvatarDefault;
  const merged1 = Object.assign(merged);
  items1[1] = authStore(tmp3, obj3);
  return closure_12(unpackModuleId, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let _require;
  let animate;
  let tmp5;
  let tmp6;
  let trackUserProfileAction;
  let user;
  let obj = require("react");
  const cResult = obj.c(23);
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
    tmp6 = animate;
    tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    importDefault = cResult[4];
  }
  dependencyMap = tmp10;
  const ref = react.useRef(null);
  const tmpResult = require("UserProfileAnalyticsContext");
  trackUserProfileAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[5] === tmp4) {
    let tmp12;
    if (cResult[6] === user) {
      tmp12 = cResult[7];
    }
    if (cResult[8] === (undefined === tmp6 || tmp6)) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === trackUserProfileAction) {
          let accessibilityLabel;
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
            let tmp16;
            if (cResult[14] === tmp5) {
              tmp16 = cResult[15];
            }
            if (cResult[16] === (undefined === tmp6 || tmp6)) {
              if (cResult[17] === tmp4) {
                if (cResult[18] === tmp5) {
                  if (cResult[19] === tmp15) {
                    if (cResult[20] === tmp16) {
                      let tmp17;
                      if (cResult[21] === user) {
                        tmp17 = cResult[22];
                      }
                      return tmp17;
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
            const obj3 = { ref, animate: undefined === tmp6 || tmp6, user, guildId: tmp4, onPress: tmp15, accessibilityLabel: tmp16 };
            const merged = Object.assign(tmp5);
            const tmp22 = closure_10(closure_13, obj3);
            cResult[16] = undefined === tmp6 || tmp6;
            cResult[17] = tmp4;
            cResult[18] = tmp5;
            cResult[19] = tmp15;
            cResult[20] = tmp16;
            cResult[21] = user;
            cResult[22] = tmp22;
            tmp17 = tmp22;
          }
          if (tmp12) {
            const string = tmp(1126).intl.string;
            class R {
              constructor() {
                obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                tmp = trackUserProfileAction(obj);
                obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
                tmp2 = closure_1(closure_2[11])(obj1);
                return;
              }
            }
          } else {
            accessibilityLabel = tmp5.accessibilityLabel;
          }
          cResult[13] = tmp12;
          cResult[14] = tmp5;
          cResult[15] = accessibilityLabel;
          tmp16 = accessibilityLabel;
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
    cResult[8] = undefined === tmp6 || tmp6;
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
}) : ((animate) => {
  let accessibilityLabel;
  let tmp10;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  guildId = animate.guildId;
  const merged = Object.assign(animate, Object.assign({ animate: 0, user: 0, guildId: 0 }));
  const ref = react.useRef(null);
  let obj2 = flag(guildId[10]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5 = null != user.avatar || user.hasAvatarForGuild(guildId);
  const items = [flag, guildId, trackUserProfileAction, user];
  const obj3 = { ref, animate: flag, user, guildId, onPress: tmp10, accessibilityLabel };
  const callback = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VIEW_AVATAR };
    trackUserProfileAction(obj);
    const obj2 = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current };
    openUserProfileAvatarMediaViewerDefault(obj2);
  }, items);
  const merged1 = Object.assign(merged);
  tmp10 = undefined;
  if (tmp5) {
    tmp10 = callback;
  }
  if (tmp5) {
    const intl = tmp3(tmp4[12]).intl;
    accessibilityLabel = intl.string(tmp3(tmp4[12]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  return closure_10(closure_13, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = tmp5;