// discord_app/modules/user_profile/native/UserProfileAvatar.tsx
import c from "../../../../_runtime/00576_c.js";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import HeaderAvatarDefault from "../../profile_customization/native/HeaderAvatar.tsx";
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["backgroundColor", "size", "ref"];
let closure_4 = ["animate", "user", "guildId"];
const View = fn(17).View;
const TrackUserProfileActions = fn(8283).TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = fn(6891).AVATAR_SIZE_VARIANT;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileAvatar(arg0) {
      const cResult = c.c(22);
      if (cResult[0] !== arg0) {
        ({ backgroundColor, size, ref } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = backgroundColor;
        cResult[2] = tmp9;
        cResult[3] = ref;
        cResult[4] = size;
        let tmp6 = size;
        let tmp5 = ref;
        let tmp4 = tmp9;
        let tmp3 = backgroundColor;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      if (undefined === tmp6) {
        tmp6 = AVATAR_SIZE_VARIANT;
      }
      const tmp11 = UserProfileSharedStylesDefault();
      if (cResult[5] !== tmp3) {
        const obj2 = { backgroundColor: tmp3 };
        cResult[5] = tmp3;
        cResult[6] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp11.avatarBackground) {
        if (cResult[8] === tmp11.avatarPosition) {
          if (cResult[9] === tmp12) {
            let tmp13 = cResult[10];
          }
          if (cResult[11] === tmp11.avatar) {
            if (cResult[12] === tmp11.avatarPosition) {
              let tmp15 = cResult[13];
            }
            if (cResult[14] === tmp4) {
              if (cResult[15] === tmp5) {
                if (cResult[16] === tmp6) {
                  if (cResult[17] === tmp15) {
                    let tmp16 = cResult[18];
                  }
                  if (cResult[19] === tmp13) {
                    if (cResult[20] === tmp16) {
                      let tmp23 = cResult[21];
                    }
                    return tmp23;
                  }
                  const obj3 = { children: null };
                  const items = [tmp13, tmp16];
                  obj3.children = items;
                  const tmp26 = __initData(closure_1_11, obj3);
                  cResult[19] = tmp13;
                  cResult[20] = tmp16;
                  cResult[21] = tmp26;
                  tmp23 = tmp26;
                }
              }
            }
            const obj4 = { ref: tmp5, style: tmp15, size: tmp6 };
            const merged = Object.assign(tmp4);
            const tmp22 = collapsed(HeaderAvatarDefault, obj4);
            cResult[14] = tmp4;
            cResult[15] = tmp5;
            cResult[16] = tmp6;
            cResult[17] = tmp15;
            cResult[18] = tmp22;
            tmp16 = tmp22;
            const tmp10Result = HeaderAvatarDefault;
          }
          const items1 = [,];
          ({ avatar: arr2[0], avatarPosition: arr2[1] } = tmp11);
          cResult[11] = tmp11.avatar;
          cResult[12] = tmp11.avatarPosition;
          cResult[13] = items1;
          tmp15 = items1;
        }
      }
      const obj5 = { style: null };
      const items2 = [, ,];
      ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp11);
      items2[2] = tmp12;
      obj5.style = items2;
      const tmp14 = collapsed(View, obj5);
      cResult[7] = tmp11.avatarBackground;
      cResult[8] = tmp11.avatarPosition;
      cResult[9] = tmp12;
      cResult[10] = tmp14;
      tmp13 = tmp14;
    }
  : function UserProfileAvatar(backgroundColor) {
      let size = backgroundColor.size;
      if (size === undefined) {
        size = AVATAR_SIZE_VARIANT;
      }
      const merged = Object.assign(backgroundColor, Object.assign({ backgroundColor: 0, size: 0, ref: 0 }));
      const tmp2 = UserProfileSharedStylesDefault();
      const obj = { children: null };
      const obj2 = { style: null };
      const items = [, ,];
      ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
      items[2] = { backgroundColor: backgroundColor.backgroundColor };
      obj2.style = items;
      const items1 = [collapsed(View, obj2)];
      const obj3 = { ref: backgroundColor.ref, style: null, size };
      const items2 = [,];
      ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
      obj3.style = items2;
      const merged1 = Object.assign(merged);
      items1[1] = collapsed(HeaderAvatarDefault, obj3);
      obj.children = items1;
      return __initData(closure_1_11, obj);
    };
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default tmp3;
export const OpenableUserProfileAvatar = ReactCompilerGating.isReactCompilerEnabled()
  ? function OpenableUserProfileAvatar(guildId) {
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
      trackUserProfileAction =
        require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
      if (cResult[5] === tmp4) {
        if (cResult[6] === user) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === tmp10) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === trackUserProfileAction) {
              class C {
                constructor() {
                  obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                  tmp = trackUserProfileAction(obj);
                  obj1 = {
                    user: closure_1,
                    guildId: closure_0,
                    animate: closure_2,
                    originViewOrOriginLayout: closure_3.current,
                  };
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
                  class C {
                    constructor() {
                      obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                      tmp = trackUserProfileAction(obj);
                      obj1 = {
                        user: closure_1,
                        guildId: closure_0,
                        animate: closure_2,
                        originViewOrOriginLayout: closure_3.current,
                      };
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
                class C {
                  constructor() {
                    obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                    tmp = trackUserProfileAction(obj);
                    obj1 = {
                      user: closure_1,
                      guildId: closure_0,
                      animate: closure_2,
                      originViewOrOriginLayout: closure_3.current,
                    };
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
        class C {
          constructor() {
            obj = { action: TrackUserProfileActions.VIEW_AVATAR };
            tmp = trackUserProfileAction(obj);
            obj1 = {
              user: closure_1,
              guildId: closure_0,
              animate: closure_2,
              originViewOrOriginLayout: closure_3.current,
            };
            tmp2 = closure_1(closure_2[11])(obj1);
            return;
          }
        }
        cResult[8] = tmp10;
        cResult[9] = tmp4;
        cResult[10] = trackUserProfileAction;
        cResult[11] = user;
        cResult[12] = C;
      }
      const tmp13 = null != user.avatar || user.hasAvatarForGuild(tmp4);
      cResult[5] = tmp4;
      cResult[6] = user;
      cResult[7] = tmp13;
      tmp12 = tmp13;
      const tmpResult = require("UserProfileAnalyticsContext");
    }
  : function OpenableUserProfileAvatar(animate) {
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
        openUserProfileAvatarMediaViewerDefault({
          user,
          guildId,
          animate: flag,
          originViewOrOriginLayout: ref.current,
        });
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
    };
