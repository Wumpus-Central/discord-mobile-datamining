// discord_app/modules/forums/native/posts/ForumPostUsername.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import native from "../../../../design/void/native.tsx";
import ForumLayout from "../../../../../discord_common/js/shared/shared-constants/ForumLayout.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import ForumHooks from "../../ForumHooks.tsx";
import useChatWidthDefault from "../../../chat/native/useChatWidth.tsx";
import ForumPostGridBody from "grid/ForumPostGridBody.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const useForumChannelStore = fn(11675).useForumChannelStore;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({
  authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 },
  roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 },
  authorName: { overflow: "hidden", flexWrap: "nowrap" },
});
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostAuthor(arg0) {
      const cResult = c.c(11);
      ({ thread, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = arg0);
      const forumPostAuthor = ForumHooks.useForumPostAuthor(thread);
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
        const colorString = author.colorString;
      }
      if (author != null) {
        const colorStrings = author.colorStrings;
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
                          if (cResult[9] === thread) {
                            let tmp6 = cResult[10];
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
        const obj3 = {
          thread,
          authorId: id,
          authorName: nick,
          authorColor: colorString,
          authorColors: colorStrings,
          suffix,
          containerStyle,
          roleDotStyle,
          textStyle,
          hasUnreads,
        };
        const tmp9 = timestampProducer(closure_10, obj3);
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
    }
  : function ForumPostAuthor(thread) {
      thread = thread.thread;
      ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
      const forumPostAuthor = ForumHooks.useForumPostAuthor(thread);
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
        const colorString = author.colorString;
      }
      if (author != null) {
        const colorStrings = author.colorStrings;
      }
      let tmp5Result = null;
      if (null != user) {
        const obj2 = {
          thread,
          authorId: null,
          authorName: null,
          authorColor: null,
          authorColors: null,
          suffix: null,
          containerStyle: null,
          roleDotStyle: null,
          textStyle: null,
          hasUnreads: null,
        };
        let id;
        if (user != null) {
          id = user.id;
        }
        obj2.authorId = id;
        obj2.authorName = nick;
        obj2.authorColor = colorString;
        obj2.authorColors = colorStrings;
        obj2.suffix = suffix;
        obj2.containerStyle = containerStyle;
        obj2.roleDotStyle = roleDotStyle;
        obj2.textStyle = textStyle;
        obj2.hasUnreads = hasUnreads;
        tmp5Result = timestampProducer(closure_10, obj2);
      }
      return tmp5Result;
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUsernameMaxWidth(thread) {
      let num = 158;
      if (useForumChannelStore(thread.thread.parent_id).layoutType === ForumLayout.ForumLayout.GRID) {
        num = 72;
      }
      return useChatWidthDefault() - ForumPostGridBody.GRID_HORIZONTAL_PADDING - num;
    }
  : function useUsernameMaxWidth(thread) {
      let num = 158;
      if (useForumChannelStore(thread.thread.parent_id).layoutType === ForumLayout.ForumLayout.GRID) {
        num = 72;
      }
      return useChatWidthDefault() - ForumPostGridBody.GRID_HORIZONTAL_PADDING - num;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostUsername(arg0) {
      const cResult = c.c(35);
      ({
        thread,
        authorId,
        authorName,
        authorColor,
        authorColors,
        containerStyle,
        roleDotStyle,
        textStyle,
        suffix,
        hasUnreads,
      } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== thread) {
        const obj2 = { thread };
        cResult[0] = thread;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmp6 = closure_9(tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        class N {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        cResult[2] = items;
        cResult[3] = N;
        let tmp8 = N;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === authorColor) {
        if (cResult[5] === stateFromStores) {
          if (cResult[7] !== hasUnreads) {
            const tmp15 = hasUnreads ? {} : { opacity: 0.8 };
            cResult[7] = hasUnreads;
            class N {
              constructor() {
                return closure_1_4.roleStyle;
              }
            }
            cResult[8] = tmp15;
          } else {
            const processColorStringsArray =
              enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(authorColors);
            class N {
              constructor() {
                return closure_1_4.roleStyle;
              }
            }
            const useIsRoleStyleAndRoleColorsEligibleForERC = tmp18.useIsRoleStyleAndRoleColorsEligibleForERC;
            const guild_id = thread.guild_id;
            if (null == authorName) {
              return null;
            } else {
              if (cResult[9] === tmp4.authorContainer) {
                if (cResult[10] === tmp6) {
                  let tmp25 = cResult[11];
                }
                if (cResult[12] === tmp14) {
                  if (cResult[13] === containerStyle) {
                    if (cResult[16] === authorColor) {
                      if (cResult[17] === authorColors) {
                        if (cResult[18] === roleDotStyle) {
                          if (cResult[19] === stateFromStores) {
                            class N {
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
                    class N {
                      constructor() {
                        return closure_1_4.roleStyle;
                      }
                    }
                    if (tmp29) {
                      const obj3 = { style: null, children: null };
                      class N {
                        constructor() {
                          return closure_1_4.roleStyle;
                        }
                      }
                      tmp32[0] = tmp4.roleDotContainer;
                      tmp32[1] = roleDotStyle;
                      obj3.style = tmp32;
                      const obj4 = { size: "small", color: authorColor, colors: authorColors };
                      obj3.children = timestampProducer(native.RoleDot, obj4);
                      tmp29 = timestampProducer(View, obj3);
                    }
                    cResult[16] = authorColor;
                    cResult[17] = authorColors;
                    cResult[18] = roleDotStyle;
                    cResult[19] = stateFromStores;
                    cResult[20] = tmp4.roleDotContainer;
                    cResult[21] = tmp29;
                  }
                }
                const items2 = [, ,];
                class N {
                  constructor() {
                    return closure_1_4.roleStyle;
                  }
                }
                items2[1] = tmp14;
                items2[2] = containerStyle;
                cResult[12] = tmp14;
                cResult[13] = containerStyle;
                cResult[14] = tmp25;
                cResult[15] = items2;
              }
              const obj5 = { maxWidth: tmp6 };
              class N {
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
            const tmpResult2 = enhanced_role_colors_EnhancedRoleColorUtils;
          }
        }
      }
      if ("username" !== stateFromStores) {
        let obj6 = {};
        cResult[4] = authorColor;
        class N {
          constructor() {
            return closure_1_4.roleStyle;
          }
        }
        cResult[5] = stateFromStores;
        cResult[6] = obj6;
      }
      obj6 = { color: authorColor };
      const tmpResult = initialize;
    }
  : function ForumPostUsername(arg0) {
      ({ thread, authorId, authorName, authorColor, authorColors } = arg0);
      ({ containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
      const tmp = closure_8();
      const tmp2 = closure_9({ thread });
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
      if ("username" === stateFromStores) {
        if (null != authorColor) {
          const obj2 = { color: authorColor };
        }
        const processColorStringsArray =
          enhanced_role_colors_EnhancedRoleColorUtils.useProcessColorStringsArray(authorColors);
        const tmp3Result2 = enhanced_role_colors_EnhancedRoleColorUtils;
        const useIsRoleStyleAndRoleColorsEligibleForERC = tmp3Result2.useIsRoleStyleAndRoleColorsEligibleForERC;
        const guild_id = thread.guild_id;
        let tmp18Result = null;
        if (null != authorName) {
          const obj3 = { style: null, accessibilityRole: "button", children: null };
          const obj4 = { maxWidth: tmp2 };
          const merged = Object.assign(tmp.authorContainer);
          const items1 = [obj4, tmp8, containerStyle];
          obj3.style = items1;
          let tmp22 = "dot" === stateFromStores && null != authorColor;
          if (tmp22) {
            const obj5 = { style: null, children: null };
            const items2 = [tmp.roleDotContainer, roleDotStyle];
            obj5.style = items2;
            const obj6 = { size: "small", color: authorColor, colors: authorColors };
            obj5.children = timestampProducer(native.RoleDot, obj6);
            tmp22 = timestampProducer(View, obj5);
          }
          const items3 = [tmp22];
          let tmp24;
          if (tmp16) {
            tmp24 = processColorStringsArray;
          }
          const obj7 = {
            variant: "text-sm/semibold",
            color: "mobile-text-heading-primary",
            gradientColors: tmp24,
            lineClamp: 1,
            style: null,
            children: null,
          };
          const items4 = [{}, textStyle, tmp.authorName];
          obj7.style = items4;
          const items5 = [authorName, suffix];
          obj7.children = items5;
          items3[1] = React5(Text_Text.Text, obj7);
          obj3.children = items3;
          tmp18Result = React5(View, obj3);
        }
        return tmp18Result;
      }
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = tmp4;
export const ForumPostMessageAuthor = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostMessageAuthor(arg0) {
      const cResult = c.c(11);
      ({ thread, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle, message } = arg0);
      const forumPostMessageAuthor = ForumHooks.useForumPostMessageAuthor(message, thread);
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
                        if (cResult[9] === thread) {
                          let tmp4 = cResult[10];
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
      const tmp5 = timestampProducer(closure_10, {
        thread,
        authorId: id,
        authorName,
        authorColor,
        authorColors,
        suffix,
        containerStyle,
        roleDotStyle,
        textStyle,
        hasUnreads,
      });
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
    }
  : function ForumPostMessageAuthor(thread) {
      thread = thread.thread;
      ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
      const forumPostMessageAuthor = ForumHooks.useForumPostMessageAuthor(message, thread);
      const user = forumPostMessageAuthor.user;
      const obj2 = {
        thread,
        authorId: null,
        authorName: null,
        authorColor: null,
        authorColors: null,
        suffix: null,
        containerStyle: null,
        roleDotStyle: null,
        textStyle: null,
        hasUnreads: null,
      };
      let id;
      ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
      if (user != null) {
        id = user.id;
      }
      obj2.authorId = id;
      obj2.authorName = authorName;
      obj2.authorColor = authorColor;
      obj2.authorColors = authorColors;
      obj2.suffix = suffix;
      obj2.containerStyle = containerStyle;
      obj2.roleDotStyle = roleDotStyle;
      obj2.textStyle = textStyle;
      obj2.hasUnreads = hasUnreads;
      return timestampProducer(closure_10, obj2);
    };
