// === Module 10040: ForumPostReactions ===

// Module 10040 (ForumPostReactions)
import c from "c" /* 576 */;
import useReactionPermissionsDefault from "useReactionPermissions" /* 10041 */;
import noop from "module_19" /* 19 */;

const ForumHooks = ForumPostReactionButton(7539);
const ForumPostReactionButton2 = ForumPostReactionButton(10043);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ reactionButtonContainer: { marginEnd: 8 }, actionBarReaction: { marginEnd: 4 }, container: { flexDirection: "row" }, mostCommonContainer: { marginLeft: "auto" } });
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  const cResult = thread(reactionButtonContainer[5]).c(29);
  thread = thread.thread;
  ({ parentChannel, firstMessage, containerStyle, reactionContainerStyle } = thread);
  reactionButtonContainer = closure_6();
  const disableReactionCreates = reactionContainerStyle(reactionButtonContainer[6])(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  const diff = thread.containerWidth - num;
  if (cResult[0] === firstMessage) {
    if (cResult[1] === parentChannel) {
      if (cResult[2] === diff) {
        let tmp5 = cResult[3];
      }
      const maxPossibleForumPostReactions = tmp(tmp2[7]).useMaxPossibleForumPostReactions(tmp5);
      ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
      if (0 === reactions.length) {
        if (disableReactionCreates) {
          return null;
        }
      }
      if (cResult[4] === containerStyle) {
        if (cResult[5] === reactionButtonContainer.container) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] === reactionContainerStyle) {
          if (cResult[8] === reactions) {
            if (cResult[9] === reactionButtonContainer.reactionButtonContainer) {
              if (cResult[10] === thread) {
                if (cResult[16] === additionalReactionCount) {
                  if (cResult[17] === reactionContainerStyle) {
                    if (cResult[18] === thread) {
                      let tmp12 = cResult[19];
                    }
                    if (cResult[20] === disableReactionCreates) {
                      if (cResult[21] === reactionContainerStyle) {
                        if (cResult[22] === thread) {
                          let tmp14 = cResult[23];
                        }
                        if (cResult[24] === tmp7) {
                          if (cResult[25] === tmp8) {
                            if (cResult[26] === tmp12) {
                              if (cResult[27] === tmp14) {
                                let tmp16 = cResult[28];
                              }
                              return tmp16;
                            }
                          }
                        }
                        class F {
                          constructor(arg0) {
                            tmp = jsx;
                            obj = { containerStyle: null, thread, reaction: thread, animateCount: false };
                            items = [, ];
                            items[0] = closure_2.reactionButtonContainer;
                            items[1] = reactionContainerStyle;
                            obj.containerStyle = items;
                            name = thread.emoji.id;
                            if (name == null) {
                              name = thread.emoji.name;
                            }
                            return tmp(closure_0(closure_2[8]).ForumPostReactionButton, obj, name);
                          }
                        }
                        const obj2 = { style: tmp7, children: null };
                        let items = [tmp8, tmp12, tmp14];
                        obj2.children = items;
                        const tmp18 = closure_5(View, obj2);
                        cResult[24] = tmp7;
                        cResult[25] = tmp8;
                        cResult[26] = tmp12;
                        cResult[27] = tmp14;
                        cResult[28] = tmp18;
                        tmp16 = tmp18;
                      }
                    }
                    class F {
                      constructor(arg0) {
                        tmp = jsx;
                        obj = { containerStyle: null, thread, reaction: thread, animateCount: false };
                        items = [, ];
                        items[0] = closure_2.reactionButtonContainer;
                        items[1] = reactionContainerStyle;
                        obj.containerStyle = items;
                        name = thread.emoji.id;
                        if (name == null) {
                          name = thread.emoji.name;
                        }
                        return tmp(closure_0(closure_2[8]).ForumPostReactionButton, obj, name);
                      }
                    }
                    cResult[20] = disableReactionCreates;
                    cResult[21] = reactionContainerStyle;
                    cResult[22] = thread;
                    cResult[23] = !disableReactionCreates;
                    tmp14 = tmp15;
                  }
                }
                class F {
                  constructor(arg0) {
                    tmp = jsx;
                    obj = { containerStyle: null, thread, reaction: thread, animateCount: false };
                    items = [, ];
                    items[0] = closure_2.reactionButtonContainer;
                    items[1] = reactionContainerStyle;
                    obj.containerStyle = items;
                    name = thread.emoji.id;
                    if (name == null) {
                      name = thread.emoji.name;
                    }
                    return tmp(closure_0(closure_2[8]).ForumPostReactionButton, obj, name);
                  }
                }
                cResult[16] = additionalReactionCount;
                cResult[17] = reactionContainerStyle;
                cResult[18] = thread;
                cResult[19] = additionalReactionCount > 0;
                tmp12 = tmp13;
              }
            }
          }
        }
        if (cResult[12] === reactionContainerStyle) {
          if (cResult[13] === reactionButtonContainer.reactionButtonContainer) {
            if (cResult[14] === thread) {
              let tmp9 = cResult[15];
            }
            const mapped = reactions.map(tmp9);
            class F {
              constructor(arg0) {
                tmp = jsx;
                obj = { containerStyle: null, thread, reaction: thread, animateCount: false };
                items = [, ];
                items[0] = closure_2.reactionButtonContainer;
                items[1] = reactionContainerStyle;
                obj.containerStyle = items;
                name = thread.emoji.id;
                if (name == null) {
                  name = thread.emoji.name;
                }
                return tmp(closure_0(closure_2[8]).ForumPostReactionButton, obj, name);
              }
            }
            cResult[8] = reactions;
            reactionButtonContainer = reactionButtonContainer.reactionButtonContainer;
            cResult[9] = reactionButtonContainer;
            cResult[10] = thread;
            cResult[11] = mapped;
          }
        }
        class F {
          constructor(arg0) {
            tmp = jsx;
            obj = { containerStyle: null, thread, reaction: thread, animateCount: false };
            items = [, ];
            items[0] = closure_2.reactionButtonContainer;
            items[1] = reactionContainerStyle;
            obj.containerStyle = items;
            name = thread.emoji.id;
            if (name == null) {
              name = thread.emoji.name;
            }
            return tmp(closure_0(closure_2[8]).ForumPostReactionButton, obj, name);
          }
        }
        cResult[12] = reactionContainerStyle;
        cResult[13] = reactionButtonContainer.reactionButtonContainer;
        cResult[14] = thread;
        cResult[15] = F;
        tmp9 = F;
      }
      const items1 = [reactionButtonContainer.container, containerStyle];
      cResult[4] = containerStyle;
      cResult[5] = reactionButtonContainer.container;
      cResult[6] = items1;
      tmp7 = items1;
      const tmpResult = tmp(tmp2[7]);
    }
  }
  const obj3 = { containerWidth: diff, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel };
  cResult[0] = firstMessage;
  cResult[1] = parentChannel;
  cResult[2] = diff;
  cResult[3] = obj3;
  tmp5 = obj3;
  let obj = thread(reactionButtonContainer[5]);
  tmp = thread;
  tmp2 = reactionButtonContainer;
}) : ((thread) => {
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerWidth, containerStyle } = thread);
  const tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10041)(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  const maxPossibleForumPostReactions = thread(7539).useMaxPossibleForumPostReactions({ containerWidth: containerWidth - num, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel });
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    const obj3 = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj3.style = items;
    const items1 = [
      reactions.map((reaction) => {
          const obj = { containerStyle: null, thread, reaction, animateCount: false };
          const items = [closure_2.reactionButtonContainer, reactionContainerStyle];
          obj.containerStyle = items;
          let name = reaction.emoji.id;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return React4(ForumPostReactionButton2.ForumPostReactionButton, obj, name);
        }),
  ,

    ];
    let tmp8 = additionalReactionCount > 0;
    if (tmp8) {
      const obj4 = { count: additionalReactionCount, containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp8 = closure_4(tmp3(10043).AdditionalReactionCount, obj4);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj5 = { containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp10 = closure_4(tmp3(10043).AddReactionButton, obj5);
    }
    items1[2] = tmp10;
    obj3.children = items1;
    let tmp6Result = closure_5(View, obj3);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  const cResult = thread(576).c(31);
  thread = thread.thread;
  ({ parentChannel, firstMessage, containerStyle, reactionContainerStyle } = thread);
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const disableReactionCreates = reactionContainerStyle(10041)(thread).disableReactionCreates;
  let num = 2;
  if (disableReactionCreates) {
    num = 3;
  }
  if (cResult[0] === firstMessage) {
    if (cResult[1] === parentChannel) {
      if (cResult[2] === num) {
        let tmp5 = cResult[3];
      }
      const someForumPostReactions = tmp(7539).useSomeForumPostReactions(tmp5);
      ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
      if (0 === reactions.length) {
        if (disableReactionCreates) {
          return null;
        }
      }
      if (cResult[4] === containerStyle) {
        if (cResult[5] === tmp4.container) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] === reactionContainerStyle) {
          if (cResult[8] === reactions) {
            if (cResult[9] === tmp4.actionBarReaction) {
              if (cResult[10] === thread) {
                if (cResult[16] === additionalNonUniqueReactionCount) {
                  if (cResult[17] === reactionContainerStyle) {
                    if (cResult[18] === tmp4.actionBarReaction) {
                      if (cResult[19] === thread) {
                        let tmp12 = cResult[20];
                      }
                      if (cResult[21] === disableReactionCreates) {
                        if (cResult[22] === reactionContainerStyle) {
                          if (cResult[23] === tmp4.actionBarReaction) {
                            if (cResult[24] === thread) {
                              let tmp15 = cResult[25];
                            }
                            if (cResult[26] === tmp7) {
                              if (cResult[27] === tmp8) {
                                if (cResult[28] === tmp12) {
                                  if (cResult[29] === tmp15) {
                                    let tmp18 = cResult[30];
                                  }
                                  return tmp18;
                                }
                              }
                            }
                            const obj2 = { style: tmp7, children: null };
                            let items = [tmp8, tmp12, tmp15];
                            obj2.children = items;
                            const tmp21 = closure_5(View, obj2);
                            cResult[26] = tmp7;
                            cResult[27] = tmp8;
                            cResult[28] = tmp12;
                            cResult[29] = tmp15;
                            cResult[30] = tmp21;
                            tmp18 = tmp21;
                          }
                        }
                      }
                      let tmp16 = !disableReactionCreates;
                      if (!disableReactionCreates) {
                        const obj3 = { containerStyle: null, threadId: null };
                        const items1 = [tmp4.actionBarReaction, reactionContainerStyle];
                        obj3.containerStyle = items1;
                        obj3.threadId = thread.id;
                        tmp16 = closure_4(tmp(10043).AddReactionButton, obj3);
                      }
                      cResult[21] = disableReactionCreates;
                      cResult[22] = reactionContainerStyle;
                      cResult[23] = tmp4.actionBarReaction;
                      cResult[24] = thread;
                      cResult[25] = tmp16;
                      tmp15 = tmp16;
                    }
                  }
                }
                let tmp13 = additionalNonUniqueReactionCount > 0;
                if (tmp13) {
                  const obj4 = { count: additionalNonUniqueReactionCount, containerStyle: null, threadId: null };
                  const items2 = [tmp4.actionBarReaction, reactionContainerStyle];
                  obj4.containerStyle = items2;
                  obj4.threadId = thread.id;
                  tmp13 = closure_4(tmp(10043).AdditionalReactionCount, obj4);
                }
                cResult[16] = additionalNonUniqueReactionCount;
                cResult[17] = reactionContainerStyle;
                cResult[18] = tmp4.actionBarReaction;
                cResult[19] = thread;
                cResult[20] = tmp13;
                tmp12 = tmp13;
              }
            }
          }
        }
        if (cResult[12] === reactionContainerStyle) {
          if (cResult[13] === tmp4.actionBarReaction) {
            if (cResult[14] === thread) {
              let tmp9 = cResult[15];
            }
            const mapped = reactions.map(tmp9);
            cResult[7] = reactionContainerStyle;
            cResult[8] = reactions;
            reactions = tmp4.actionBarReaction;
            cResult[9] = reactions;
            cResult[10] = thread;
            cResult[11] = mapped;
          }
        }
        const fn = function j(reaction) {
          const obj = { containerStyle: null, thread, reaction, animateCount: false };
          const items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
          obj.containerStyle = items;
          let name = reaction.emoji.id;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return React4(ForumPostReactionButton2.ForumPostReactionButton, obj, name);
        };
        cResult[12] = reactionContainerStyle;
        cResult[13] = tmp4.actionBarReaction;
        cResult[14] = thread;
        cResult[15] = fn;
        tmp9 = fn;
      }
      const items3 = [tmp4.container, containerStyle];
      cResult[4] = containerStyle;
      cResult[5] = tmp4.container;
      cResult[6] = items3;
      tmp7 = items3;
      const tmpResult = tmp(7539);
    }
  }
  const obj5 = { message: firstMessage, parentChannel, sorted: false, count: num };
  cResult[0] = firstMessage;
  cResult[1] = parentChannel;
  cResult[2] = num;
  cResult[3] = obj5;
  tmp5 = obj5;
  let obj = thread(576);
}) : ((thread) => {
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  const tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10041)(thread).disableReactionCreates;
  const obj2 = { message: firstMessage, parentChannel, sorted: false, count: null };
  let num = 2;
  if (disableReactionCreates) {
    num = 3;
  }
  obj2.count = num;
  const someForumPostReactions = thread(7539).useSomeForumPostReactions(obj2);
  ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
  if (0 !== reactions.length) {
    const obj3 = { style: null, children: null };
    let items = [tmp.container, containerStyle];
    obj3.style = items;
    const items1 = [
      reactions.map((reaction) => {
          const obj = { containerStyle: null, thread, reaction, animateCount: false };
          const items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
          obj.containerStyle = items;
          let name = reaction.emoji.id;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return React4(ForumPostReactionButton2.ForumPostReactionButton, obj, name);
        }),
  ,

    ];
    let tmp8 = additionalNonUniqueReactionCount > 0;
    if (tmp8) {
      const obj4 = { count: additionalNonUniqueReactionCount, containerStyle: null, threadId: null };
      const items2 = [tmp.actionBarReaction, reactionContainerStyle];
      obj4.containerStyle = items2;
      obj4.threadId = thread.id;
      tmp8 = closure_4(tmp3(10043).AdditionalReactionCount, obj4);
    }
    items1[1] = tmp8;
    let tmp10 = !disableReactionCreates;
    if (!disableReactionCreates) {
      const obj5 = { containerStyle: null, threadId: null };
      const items3 = [tmp.actionBarReaction, reactionContainerStyle];
      obj5.containerStyle = items3;
      obj5.threadId = thread.id;
      tmp10 = closure_4(tmp3(10043).AddReactionButton, obj5);
    }
    items1[2] = tmp10;
    obj3.children = items1;
    let tmp6Result = closure_5(View, obj3);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = tmp4;
export const ForumPostActionBarReactions = tmp5;
export const MostCommonForumPostReaction = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ForumPostReactionButton = require;
  let tmp = dependencyMap;
  const cResult = c.c(8);
  ({ thread, parentChannel, firstMessage, locationAnalyticsObject } = arg0);
  let mostCommonContainer = closure_6();
  useReactionPermissionsDefault(thread);
  if (cResult[0] === firstMessage) {
    if (cResult[1] === parentChannel) {
      let tmp6 = cResult[2];
    }
    const result = ForumHooks;
    const first = result.useSomeForumPostReactions(tmp6).reactions[0];
    if (null != first) {
      if (!tmp5) {
        if (tmp4) {
          if (!tmp9) {
            return null;
          }
        }
        if (cResult[3] === locationAnalyticsObject) {
          if (cResult[4] === first) {
            if (cResult[5] === mostCommonContainer.mostCommonContainer) {
            }
          }
        }
        ForumPostReactionButton = ForumPostReactionButton2.ForumPostReactionButton;
        const obj2 = { containerStyle: mostCommonContainer.mostCommonContainer, thread, reaction: first, locationAnalyticsObject, animateCount: false };
        tmp = React4(ForumPostReactionButton, obj2);
        cResult[3] = locationAnalyticsObject;
        cResult[4] = first;
        mostCommonContainer = mostCommonContainer.mostCommonContainer;
        cResult[5] = mostCommonContainer;
        cResult[6] = thread;
        cResult[7] = tmp;
        tmp9 = first.me || first.me_burst;
      }
    }
    return null;
  }
  const obj3 = { parentChannel, message: firstMessage };
  cResult[0] = firstMessage;
  cResult[1] = parentChannel;
  cResult[2] = obj3;
  tmp6 = obj3;
}) : ((thread) => {
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = closure_6();
  ({ disableReactionCreates, disableReactionUpdates } = useReactionPermissionsDefault(thread));
  const tmp3 = useReactionPermissionsDefault(thread);
  const first = ForumHooks.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      if (!disableReactionCreates) {
        const obj2 = { containerStyle: tmp.mostCommonContainer, thread, reaction: first, locationAnalyticsObject, animateCount: false };
        let tmp7 = React4(ForumPostReactionButton2.ForumPostReactionButton, obj2);
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
});