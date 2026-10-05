// discord_app/modules/forums/native/posts/ForumPostTypingUsers.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, hasUnreads;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 },
  lastTypingUser: { marginEnd: 0 },
  typingUser: obj2,
  dots: obj3,
  typingText: { flexShrink: 1 },
  borderColor: obj4,
  borderColorPressed: obj5,
};
obj2 = { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingVertical: nativeDefault.space.PX_4,
  paddingLeft: 4,
  borderRadius: nativeDefault.radii.lg,
  marginStart: -8,
  borderWidth: 4,
  marginEnd: 8,
  marginTop: -1,
  marginBottom: -1,
};
obj4 = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj5 = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createStyles(obj);
const __initData = {
  code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}",
};
const __initData2 = {
  code: "function ForumPostTypingUsersTsx2(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}",
};
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasUnreads) => {
      let closure_0;
      let color;
      let guildId1;
      let items;
      let thread;
      let tmp5;
      let typingUserIds;
      let obj = require("react");
      const cResult = obj.c(32);
      ({ thread, typingUserIds } = hasUnreads);
      hasUnreads = hasUnreads.hasUnreads;
      const tmp4 = guildId1();
      _require = tmp4;
      let obj2 = require("ForumHooks");
      const facepileUsers = obj2.useFacepileUsers(thread, typingUserIds);
      const id = thread.id;
      if (cResult[0] !== thread) {
        const guildId = thread.getGuildId();
        cResult[0] = thread;
        cResult[1] = guildId;
        tmp5 = guildId;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === thread.id) {
          let tmp7;
          if (cResult[4] === typingUserIds) {
            tmp7 = cResult[5];
          }
          const tmp9 = facepileUsers(color[8])(tmp7);
          color = tmp4.borderColor.color;
          const color2 = tmp4.borderColorPressed.color;
          const tmpResult = require("ForumPostContainer");
          const forumPostContainerPressedIn = tmpResult.useForumPostContainerPressedIn();
          const tmp8 = facepileUsers;
          const tmpResult2 = require("ReanimatedRexport");
          class I {
            constructor() {
              return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
            }
          }
          const obj3 = {
            forumPostPressedIn: forumPostContainerPressedIn,
            borderColorPressed: color2,
            borderColor: color,
          };
          I.__closure = obj3;
          I.__workletHash = 6320844933544;
          I.__initData = __initData;
          const animatedStyle = tmpResult2.useAnimatedStyle(I);
          let str = "text-muted";
          if (hasUnreads) {
            str = "text-default";
          }
          if (cResult[6] === animatedStyle) {
            if (cResult[7] === tmp4.container) {
              if (cResult[8] === tmp4.lastTypingUser) {
                if (cResult[9] === tmp4.typingUser) {
                  if (cResult[10] === thread) {
                    let tmp13;
                    let tmp14;
                    let tmp15;
                    let tmp16;
                    if (cResult[11] === facepileUsers) {
                      tmp13 = cResult[12];
                      tmp14 = cResult[13];
                      tmp15 = cResult[14];
                      tmp16 = cResult[15];
                    }
                    const _Symbol2 = Symbol;
                    if (tmp16 === Symbol.for("react.early_return_sentinel")) {
                      if (cResult[16] === animatedStyle) {
                        let tmp26;
                        let tmp27;
                        let tmp30;
                        if (cResult[17] === tmp4.dots) {
                          tmp26 = cResult[18];
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp29 = forumPostContainerPressedIn(require("native").Ellipsis, {});
                          cResult[19] = tmp29;
                          tmp27 = tmp29;
                        } else {
                          tmp27 = cResult[19];
                        }
                        if (cResult[20] !== tmp26) {
                          const obj4 = { style: tmp26, children: tmp27 };
                          const tmp32 = forumPostContainerPressedIn(tmp8(color[10]).View, obj4);
                          cResult[20] = tmp26;
                          cResult[21] = tmp32;
                          tmp30 = tmp32;
                        } else {
                          tmp30 = cResult[21];
                        }
                        if (cResult[22] === str) {
                          if (cResult[23] === tmp4.typingText) {
                            let tmp33;
                            if (cResult[24] === tmp9) {
                              tmp33 = cResult[25];
                            }
                            if (cResult[26] === tmp13) {
                              if (cResult[27] === tmp33) {
                                if (cResult[28] === tmp14) {
                                  if (cResult[29] === tmp15) {
                                    let tmp36;
                                    if (cResult[30] === tmp30) {
                                      tmp36 = cResult[31];
                                    }
                                    tmp16 = tmp36;
                                  }
                                }
                              }
                            }
                            const obj5 = { style: tmp14, children: items };
                            items = [tmp15, tmp30, tmp33];
                            const tmp38 = animatedStyle(tmp13, obj5);
                            class I {
                              constructor() {
                                return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
                              }
                            }
                            cResult[26] = tmp13;
                            cResult[27] = tmp33;
                            cResult[28] = tmp14;
                            cResult[29] = tmp15;
                            cResult[30] = tmp30;
                            cResult[31] = tmp38;
                            tmp36 = tmp38;
                          }
                        }
                        const obj6 = {
                          variant: "text-sm/semibold",
                          color: str,
                          style: tmp4.typingText,
                          lineClamp: 1,
                          children: null,
                        };
                        class I {
                          constructor() {
                            return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
                          }
                        }
                        const tmp35 = forumPostContainerPressedIn(require("Text/Text").Text, obj6);
                        cResult[22] = str;
                        cResult[23] = tmp4.typingText;
                        cResult[24] = tmp9;
                        cResult[25] = tmp35;
                        tmp33 = tmp35;
                      }
                      const items1 = [tmp4.dots, animatedStyle];
                      cResult[16] = animatedStyle;
                      cResult[17] = tmp4.dots;
                      cResult[18] = items1;
                      tmp26 = items1;
                    }
                    return tmp16;
                  }
                }
              }
            }
          }
          const _Symbol = Symbol;
          const forResult = Symbol.for("react.early_return_sentinel");
          guildId1 = thread.getGuildId();
          let tmp21 = null;
          let mapped;
          let container;
          let tmp24;
          if (null != guildId1) {
            tmp21 = null;
            if (0 !== facepileUsers.length) {
              tmp24 = color2;
              container = tmp4.container;
              mapped = facepileUsers.map((getAvatarSource, index) => {
                let Avatar;
                let obj2;
                const items = [closure_0.typingUser, animatedStyle];
                let lastTypingUser = index === facepileUsers.length - 1;
                View = ReanimatedRexportDefault.View;
                if (lastTypingUser) {
                  lastTypingUser = closure_0.lastTypingUser;
                }
                items[2] = lastTypingUser;
                const obj = { style: items, children: React3(Avatar, obj2) };
                obj2 = { source: getAvatarSource.getAvatarSource(guildId1), size: native.AvatarSizes.SIZE_16 };
                Avatar = native.Avatar;
                return React3(View, obj, getAvatarSource.id);
              });
              tmp21 = forResult;
            }
          }
          cResult[6] = animatedStyle;
          cResult[7] = tmp4.container;
          cResult[8] = tmp4.lastTypingUser;
          cResult[9] = tmp4.typingUser;
          cResult[10] = thread;
          cResult[11] = facepileUsers;
          cResult[12] = tmp24;
          cResult[13] = container;
          cResult[14] = mapped;
          cResult[15] = tmp21;
          tmp16 = tmp21;
          tmp15 = mapped;
          tmp14 = container;
          tmp13 = tmp24;
        }
      }
      const obj7 = { channelId: id, guildId: tmp5, typingUserIds };
      cResult[2] = tmp5;
      cResult[3] = thread.id;
      cResult[4] = typingUserIds;
      cResult[5] = obj7;
      tmp7 = obj7;
    }
  : (hasUnreads) => {
      let closure_0;
      let items;
      let items1;
      let thread;
      let typingUserIds;
      ({ thread, typingUserIds } = hasUnreads);
      let color;
      let guildId;
      hasUnreads = hasUnreads.hasUnreads;
      const tmp = guildId();
      _require = tmp;
      let obj = require("ForumHooks");
      const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
      let obj2 = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
      const tmp5 = facepileUsers(color[8]);
      color = tmp.borderColor.color;
      const color2 = tmp.borderColorPressed.color;
      const tmp5Result = tmp5(obj2);
      const obj3 = require("ForumPostContainer");
      const forumPostContainerPressedIn = obj3.useForumPostContainerPressedIn();
      const fn = function p() {
        return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
      };
      fn.__closure = {
        forumPostPressedIn: forumPostContainerPressedIn,
        borderColorPressed: color2,
        borderColor: color,
      };
      fn.__workletHash = 15927747041131;
      fn.__initData = __initData2;
      const obj4 = require("ReanimatedRexport");
      const animatedStyle = obj4.useAnimatedStyle(fn);
      let str = "text-muted";
      const tmp4 = facepileUsers;
      if (hasUnreads) {
        str = "text-default";
      }
      guildId = thread.getGuildId();
      let tmp10 = null;
      if (null != guildId) {
        tmp10 = null;
        if (0 !== facepileUsers.length) {
          const obj5 = { style: tmp.container, children: items };
          items = [
            facepileUsers.map((getAvatarSource, index) => {
              let Avatar;
              let obj2;
              const items = [closure_0.typingUser, animatedStyle];
              let lastTypingUser = index === facepileUsers.length - 1;
              View = ReanimatedRexportDefault.View;
              if (lastTypingUser) {
                lastTypingUser = closure_0.lastTypingUser;
              }
              items[2] = lastTypingUser;
              const obj = { style: items, children: React3(Avatar, obj2) };
              obj2 = { source: getAvatarSource.getAvatarSource(guildId), size: native.AvatarSizes.SIZE_16 };
              Avatar = native.Avatar;
              return React3(View, obj, getAvatarSource.id);
            }),
            ,
          ];
          const obj6 = { style: items1, children: forumPostContainerPressedIn(require("native").Ellipsis, {}) };
          items1 = [tmp.dots, animatedStyle];
          View = tmp4(tmp3[10]).View;
          items[1] = forumPostContainerPressedIn(View, obj6);
          const obj7 = {
            variant: "text-sm/semibold",
            color: str,
            style: tmp.typingText,
            lineClamp: 1,
            children: tmp5Result,
          };
          items[2] = forumPostContainerPressedIn(require("Text/Text").Text, obj7);
          tmp10 = animatedStyle(color2, obj5);
        }
      }
      return tmp10;
    };
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default tmp5;
