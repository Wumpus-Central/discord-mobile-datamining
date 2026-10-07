// === Module 11647: ForumPostTypingUsers ===

// Module 11647 (ForumPostTypingUsers)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, lastTypingUser: { marginEnd: 0 }, typingUser: { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round }, dots: null, typingText: null, borderColor: null, borderColorPressed: null };
let obj3 = { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round };
obj2.dots = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
obj2.typingText = { flexShrink: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
obj2.borderColor = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
let obj5 = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.borderColorPressed = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createStyles.createStyles(obj2);
const __initData = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const __initData2 = { code: "function ForumPostTypingUsersTsx2(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const ReactCompilerGating = fn(558);
let obj6 = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((hasUnreads) => {
  const cResult = require("c").c(32);
  ({ thread, typingUserIds } = hasUnreads);
  const tmp4 = guildId1();
  _require = tmp4;
  let obj = require("c");
  const facepileUsers = require("ForumHooks").useFacepileUsers(thread, typingUserIds);
  if (cResult[0] !== thread) {
    const guildId = thread.getGuildId();
    cResult[0] = thread;
    cResult[1] = guildId;
    let tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === thread.id) {
      if (cResult[4] === typingUserIds) {
        let tmp7 = cResult[5];
      }
      const tmp9 = facepileUsers(tmp2[8])(tmp7);
      color = tmp4.borderColor.color;
      const color2 = tmp4.borderColorPressed.color;
      const forumPostContainerPressedIn = tmp(tmp2[9]).useForumPostContainerPressedIn();
      const tmp8 = facepileUsers;
      const tmpResult = tmp(tmp2[9]);
      class I {
        constructor() {
          obj = { borderColor: closure_4.value ? color : color };
          return obj;
        }
      }
      const obj3 = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
      I.__closure = obj3;
      I.__workletHash = 6320844933544;
      I.__initData = __initData;
      const animatedStyle = tmp(tmp2[10]).useAnimatedStyle(I);
      let str = "text-muted";
      if (hasUnreads.hasUnreads) {
        str = "text-default";
      }
      if (cResult[6] === animatedStyle) {
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp4.lastTypingUser) {
            if (cResult[9] === tmp4.typingUser) {
              if (cResult[10] === thread) {
                if (cResult[11] === facepileUsers) {
                  let tmp13 = cResult[12];
                  let tmp14 = cResult[13];
                  let tmp15 = cResult[14];
                  let tmp16 = cResult[15];
                }
                const _Symbol2 = Symbol;
                if (tmp16 !== Symbol.for("react.early_return_sentinel")) {
                  return tmp16;
                } else {
                  if (cResult[16] === animatedStyle) {
                    if (cResult[17] === tmp4.dots) {
                      let tmp26 = cResult[18];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp29 = forumPostContainerPressedIn(tmp(tmp2[11]).Ellipsis, {});
                      cResult[19] = tmp29;
                      let tmp27 = tmp29;
                    } else {
                      tmp27 = cResult[19];
                    }
                    if (cResult[20] !== tmp26) {
                      const obj4 = { style: tmp26, children: tmp27 };
                      const tmp32 = forumPostContainerPressedIn(tmp8(tmp2[10]).View, obj4);
                      cResult[20] = tmp26;
                      cResult[21] = tmp32;
                      let tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[21];
                    }
                    if (cResult[22] === str) {
                      if (cResult[23] === tmp4.typingText) {
                        if (cResult[24] === tmp9) {
                          let tmp33 = cResult[25];
                        }
                        if (cResult[26] === tmp13) {
                          if (cResult[27] === tmp33) {
                            if (cResult[28] === tmp14) {
                              if (cResult[29] === tmp15) {
                              }
                            }
                          }
                        }
                        const obj5 = { style: tmp14, children: null };
                        let items = [tmp15, tmp30, tmp33];
                        obj5.children = items;
                        const tmp38 = animatedStyle(tmp13, obj5);
                        class I {
                          constructor() {
                            obj = { borderColor: closure_4.value ? color : color };
                            return obj;
                          }
                        }
                        cResult[26] = tmp13;
                        cResult[27] = tmp33;
                        cResult[28] = tmp14;
                        cResult[29] = tmp15;
                        cResult[30] = tmp30;
                        cResult[31] = tmp38;
                      }
                    }
                    const obj6 = { variant: "text-sm/semibold", color: str, style: tmp4.typingText, lineClamp: 1, children: null };
                    class I {
                      constructor() {
                        obj = { borderColor: closure_4.value ? color : color };
                        return obj;
                      }
                    }
                    const tmp35 = forumPostContainerPressedIn(tmp(tmp2[12]).Text, obj6);
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
              }
            }
          }
        }
      }
      const _Symbol = Symbol;
      const tmpResult2 = tmp(tmp2[10]);
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
            const items = [closure_0.typingUser, animatedStyle, ];
            let lastTypingUser = index === facepileUsers.length - 1;
            if (lastTypingUser) {
              lastTypingUser = closure_0.lastTypingUser;
            }
            const obj = { style: items, children: React4(native.Avatar, { source: getAvatarSource.getAvatarSource(guildId1), size: native.AvatarSizes.SIZE_16 }) };
            items[2] = lastTypingUser;
            return React4(ReanimatedRexportDefault.View, obj, getAvatarSource.id);
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
      forResult = Symbol.for("react.early_return_sentinel");
    }
  }
  const obj7 = { channelId: thread.id, guildId: tmp5, typingUserIds };
  cResult[2] = tmp5;
  cResult[3] = thread.id;
  cResult[4] = typingUserIds;
  cResult[5] = obj7;
  tmp7 = obj7;
  const obj2 = require("ForumHooks");
}) : ((hasUnreads) => {
  ({ thread, typingUserIds } = hasUnreads);
  let color;
  let guildId;
  const tmp = guildId();
  _require = tmp;
  const facepileUsers = require("ForumHooks").useFacepileUsers(thread, typingUserIds);
  const obj2 = { channelId: thread.id, guildId: null, typingUserIds: null };
  let obj = require("ForumHooks");
  const tmp4 = facepileUsers;
  obj2.guildId = thread.getGuildId();
  obj2.typingUserIds = typingUserIds;
  color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp5 = facepileUsers(color[8]);
  const tmp5Result = facepileUsers(color[8])(obj2);
  const forumPostContainerPressedIn = require("ForumPostContainer").useForumPostContainerPressedIn();
  const obj3 = require("ForumPostContainer");
  const fn = function p() {
    return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
  };
  fn.__closure = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
  fn.__workletHash = 15927747041131;
  fn.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp10 = null;
  if (null != guildId) {
    tmp10 = null;
    if (0 !== facepileUsers.length) {
      const obj5 = { style: tmp.container, children: null };
      let items = [
        facepileUsers.map((getAvatarSource, index) => {
              const items = [closure_0.typingUser, animatedStyle, ];
              let lastTypingUser = index === facepileUsers.length - 1;
              if (lastTypingUser) {
                lastTypingUser = closure_0.lastTypingUser;
              }
              const obj = { style: items, children: React4(native.Avatar, { source: getAvatarSource.getAvatarSource(guildId), size: native.AvatarSizes.SIZE_16 }) };
              items[2] = lastTypingUser;
              return React4(ReanimatedRexportDefault.View, obj, getAvatarSource.id);
            }),
  ,

      ];
      const obj6 = { style: null, children: null };
      const items1 = [tmp.dots, animatedStyle];
      obj6.style = items1;
      obj6.children = forumPostContainerPressedIn(tmp2(tmp3[11]).Ellipsis, {});
      items[1] = forumPostContainerPressedIn(tmp4(tmp3[10]).View, obj6);
      const obj7 = { variant: "text-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp5Result };
      items[2] = forumPostContainerPressedIn(tmp2(tmp3[12]).Text, obj7);
      obj5.children = items;
      tmp10 = animatedStyle(color2, obj5);
    }
  }
  return tmp10;
});