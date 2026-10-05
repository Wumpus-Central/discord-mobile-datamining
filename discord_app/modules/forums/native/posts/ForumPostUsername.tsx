// === Module 11619: ForumPostUsername ===

// Module 11619 (ForumPostUsername)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import ForumLayout from "ForumLayout" /* 2062 */;
import Text_Text from "Text/Text" /* 4886 */;
import ForumHooks from "ForumHooks" /* 7528 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7620 */;
import useChatWidthDefault from "useChatWidth" /* 11143 */;
import ForumChannelStore from "ForumChannelStore" /* 11615 */;
import ForumPostGridBody from "ForumPostGridBody" /* 11620 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 }, roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 }, authorName: { overflow: "hidden", flexWrap: "nowrap" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let author;
  let colorString;
  let colorStrings;
  let containerStyle;
  let hasUnreads;
  let roleDotStyle;
  let suffix;
  let textStyle;
  let thread;
  let user;
  const obj = react2;
  const cResult = obj.c(11);
  ({ thread, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = arg0);
  const obj2 = ForumHooks;
  const forumPostAuthor = obj2.useForumPostAuthor(thread);
  ({ user, author } = forumPostAuthor);
  let nick;
  if (author != null) {
    nick = author.nick;
  }
  if (nick == null) {
    let username;
    if (user != null) {
      username = user.username;
    }
    nick = username;
  }
  if (author != null) {
    colorString = author.colorString;
  }
  if (author != null) {
    colorStrings = author.colorStrings;
  }
  if (null == user) {
    return null;
  } else {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (cResult[0] === colorString) {
      if (cResult[1] === colorStrings) {
        if (cResult[2] === nick) {
          if (cResult[3] === containerStyle) {
            if (cResult[4] === hasUnreads) {
              if (cResult[5] === roleDotStyle) {
                if (cResult[6] === suffix) {
                  if (cResult[7] === id) {
                    if (cResult[8] === textStyle) {
                      let tmp6;
                      if (cResult[9] === thread) {
                        tmp6 = cResult[10];
                      }
                      return tmp6;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj3 = { thread, authorId: id, authorName: nick, authorColor: colorString, authorColors: colorStrings, suffix, containerStyle, roleDotStyle, textStyle, hasUnreads };
    const tmp9 = metroRequire(closure_10, obj3);
    cResult[0] = colorString;
    cResult[1] = colorStrings;
    cResult[2] = nick;
    cResult[3] = containerStyle;
    cResult[4] = hasUnreads;
    cResult[5] = roleDotStyle;
    cResult[6] = suffix;
    cResult[7] = id;
    cResult[8] = textStyle;
    cResult[9] = thread;
    cResult[10] = tmp9;
    tmp6 = tmp9;
  }
}) : ((thread) => {
  let author;
  let colorString;
  let colorStrings;
  let containerStyle;
  let hasUnreads;
  let id;
  let roleDotStyle;
  let suffix;
  let textStyle;
  let user;
  thread = thread.thread;
  ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  const obj = ForumHooks;
  const forumPostAuthor = obj.useForumPostAuthor(thread);
  ({ user, author } = forumPostAuthor);
  let nick;
  if (author != null) {
    nick = author.nick;
  }
  if (nick == null) {
    let username;
    if (user != null) {
      username = user.username;
    }
    nick = username;
  }
  if (author != null) {
    colorString = author.colorString;
  }
  if (author != null) {
    colorStrings = author.colorStrings;
  }
  let tmp5Result = null;
  if (null != user) {
    const obj2 = { thread, authorId: id, authorName: nick, authorColor: colorString, authorColors: colorStrings, suffix, containerStyle, roleDotStyle, textStyle, hasUnreads };
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    tmp5Result = metroRequire(closure_10, obj2);
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let authorColor;
  let authorColors;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let message;
  let roleDotStyle;
  let suffix;
  let textStyle;
  let thread;
  let user;
  const obj = react2;
  const cResult = obj.c(11);
  ({ thread, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle, message } = arg0);
  const obj2 = ForumHooks;
  const forumPostMessageAuthor = obj2.useForumPostMessageAuthor(message, thread);
  ({ authorName, authorColor, authorColors, user } = forumPostMessageAuthor);
  let id;
  if (user != null) {
    id = user.id;
  }
  if (cResult[0] === authorColor) {
    if (cResult[1] === authorColors) {
      if (cResult[2] === authorName) {
        if (cResult[3] === containerStyle) {
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === roleDotStyle) {
              if (cResult[6] === suffix) {
                if (cResult[7] === id) {
                  if (cResult[8] === textStyle) {
                    let tmp4;
                    if (cResult[9] === thread) {
                      tmp4 = cResult[10];
                    }
                    return tmp4;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const tmp5 = metroRequire(closure_10, { thread, authorId: id, authorName, authorColor, authorColors, suffix, containerStyle, roleDotStyle, textStyle, hasUnreads });
  cResult[0] = authorColor;
  cResult[1] = authorColors;
  cResult[2] = authorName;
  cResult[3] = containerStyle;
  cResult[4] = hasUnreads;
  cResult[5] = roleDotStyle;
  cResult[6] = suffix;
  cResult[7] = id;
  cResult[8] = textStyle;
  cResult[9] = thread;
  cResult[10] = tmp5;
  tmp4 = tmp5;
}) : ((thread) => {
  let authorColor;
  let authorColors;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let id;
  let message;
  let roleDotStyle;
  let suffix;
  let textStyle;
  thread = thread.thread;
  ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  const obj = ForumHooks;
  const forumPostMessageAuthor = obj.useForumPostMessageAuthor(message, thread);
  const user = forumPostMessageAuthor.user;
  const obj2 = { thread, authorId: id, authorName, authorColor, authorColors, suffix, containerStyle, roleDotStyle, textStyle, hasUnreads };
  id = undefined;
  ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
  if (user != null) {
    id = user.id;
  }
  return metroRequire(closure_10, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  let num = 158;
  if (useForumChannelStore(thread.thread.parent_id).layoutType === ForumLayout.ForumLayout.GRID) {
    num = 72;
  }
  const tmp3 = useChatWidthDefault();
  return tmp3 - ForumPostGridBody.GRID_HORIZONTAL_PADDING - num;
}) : ((thread) => {
  let num = 158;
  if (useForumChannelStore(thread.thread.parent_id).layoutType === ForumLayout.ForumLayout.GRID) {
    num = 72;
  }
  const tmp3 = useChatWidthDefault();
  return tmp3 - ForumPostGridBody.GRID_HORIZONTAL_PADDING - num;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let authorColor;
  let authorColors;
  let authorId;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let obj4;
  let roleDotStyle;
  let roleStyle;
  let suffix;
  let textStyle;
  let thread;
  let tmp11;
  let tmp29;
  let tmp5;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(35);
  ({ thread, authorId, authorName, authorColor, authorColors, containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== thread) {
    const obj2 = { thread };
    cResult[0] = thread;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = closure_9(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class A {
      constructor() {
        return closure_1_4.roleStyle;
      }
    }
    cResult[2] = items;
    cResult[3] = A;
    tmp8 = A;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[4] === authorColor) {
    let tmp13;
    if (cResult[5] === stateFromStores) {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== hasUnreads) {
      const tmp14 = hasUnreads ? {} : { opacity: 0.8 };
      cResult[7] = hasUnreads;
      class A {
        constructor() {
          return closure_1_4.roleStyle;
        }
      }
      cResult[8] = tmp14;
      tmp13 = tmp14;
    } else {
      tmp13 = cResult[8];
    }
    enhanced_role_colors_EnhancedRoleColorUtils;
    class A {
      constructor() {
        return closure_1_4.roleStyle;
      }
    }
    const guild_id = thread.guild_id;
    const useIsRoleStyleAndRoleColorsEligibleForERC = enhanced_role_colors_EnhancedRoleColorUtils.useIsRoleStyleAndRoleColorsEligibleForERC;
    const tmpResult4 = enhanced_role_colors_EnhancedRoleColorUtils;
    if (null == authorName) {
      return null;
    } else {
      if (cResult[9] === tmp4.authorContainer) {
        let tmp25;
        if (cResult[10] === tmp6) {
          tmp25 = cResult[11];
        }
        if (cResult[12] === tmp13) {
          if (cResult[13] === containerStyle) {
            if (cResult[16] === authorColor) {
              if (cResult[17] === authorColors) {
                if (cResult[18] === roleDotStyle) {
                  if (cResult[19] === stateFromStores) {
                    class A {
                      constructor() {
                        return closure_1_4.roleStyle;
                      }
                    }
                    const items1 = [tmp11, textStyle, tmp4.authorName];
                    cResult[22] = tmp11;
                    cResult[23] = tmp4.authorName;
                    cResult[24] = textStyle;
                    cResult[25] = items1;
                  }
                }
              }
            }
            class A {
              constructor() {
                return closure_1_4.roleStyle;
              }
            }
            if (tmp29) {
              const obj3 = { style: tmp32, children: metroRequire(native.RoleDot, obj4) };
              class A {
                constructor() {
                  return closure_1_4.roleStyle;
                }
              }
              tmp32[0] = tmp4.roleDotContainer;
              tmp32[1] = roleDotStyle;
              obj4 = { size: "small", color: authorColor, colors: authorColors };
              tmp29 = metroRequire(View, obj3);
            }
            cResult[16] = authorColor;
            cResult[17] = authorColors;
            cResult[18] = roleDotStyle;
            cResult[19] = stateFromStores;
            cResult[20] = tmp4.roleDotContainer;
            cResult[21] = tmp29;
          }
        }
        const items2 = [, , ];
        class A {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        items2[1] = tmp13;
        items2[2] = containerStyle;
        cResult[12] = tmp13;
        cResult[13] = containerStyle;
        cResult[14] = tmp25;
        cResult[15] = items2;
      }
      const obj5 = { maxWidth: tmp6 };
      class A {
        constructor() {
          return closure_1_4.roleStyle;
        }
      }
      const merged = Object.assign(tmp4.authorContainer);
      cResult[9] = tmp4.authorContainer;
      cResult[10] = tmp6;
      cResult[11] = obj5;
      tmp25 = obj5;
    }
  }
  if ("username" === stateFromStores) {
    let obj7;
    if (null != authorColor) {
      obj7 = { color: authorColor };
      const obj6 = { color: authorColor };
    }
    class A {
      constructor() {
        return closure_1_4.roleStyle;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = obj7;
    tmp11 = obj7;
  }
  obj7 = {};
}) : ((arg0) => {
  let authorColor;
  let authorColors;
  let authorId;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj6;
  let roleDotStyle;
  let roleStyle;
  let suffix;
  let textStyle;
  let thread;
  ({ thread, authorId, authorName, authorColor, authorColors } = arg0);
  ({ containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const tmp2 = closure_9({ thread });
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    const tmp8 = hasUnreads ? {} : { opacity: 0.8 };
    const tmp3Result = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmp3Result.useProcessColorStringsArray(authorColors);
    const guild_id = thread.guild_id;
    const useIsRoleStyleAndRoleColorsEligibleForERC = enhanced_role_colors_EnhancedRoleColorUtils.useIsRoleStyleAndRoleColorsEligibleForERC;
    let tmp19Result = null;
    const tmp3Result2 = enhanced_role_colors_EnhancedRoleColorUtils;
    if (null != authorName) {
      const obj3 = { style: items1, accessibilityRole: "button", children: items3 };
      const obj4 = { maxWidth: tmp2 };
      const merged = Object.assign(tmp.authorContainer);
      items1 = [obj4, tmp8, containerStyle];
      let tmp23 = "dot" === stateFromStores && null != authorColor;
      if (tmp23) {
        const obj5 = { style: items2, children: metroRequire(native.RoleDot, obj6) };
        items2 = [tmp.roleDotContainer, roleDotStyle];
        obj6 = { size: "small", color: authorColor, colors: authorColors };
        tmp23 = metroRequire(View, obj5);
      }
      items3 = [tmp23, ];
      let tmp25;
      const Text = Text_Text.Text;
      if (tmp17) {
        tmp25 = processColorStringsArray;
      }
      const obj7 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp25, lineClamp: 1, style: items4, children: items5 };
      items4 = [{}, textStyle, tmp.authorName];
      items5 = [authorName, suffix];
      items3[1] = metroImportDefault(Text, obj7);
      tmp19Result = metroImportDefault(View, obj3);
    }
    return tmp19Result;
  }
});
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = tmp4;
export const ForumPostMessageAuthor = tmp5;