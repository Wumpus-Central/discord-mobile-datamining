// === Module 10040: ForumPostReactions ===

// Module 10040 (ForumPostReactions)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import ForumHooks from "ForumHooks" /* 7539 */;
import useReactionPermissionsDefault from "useReactionPermissions" /* 10041 */;
import ForumPostReactionButton2 from "ForumPostReactionButton" /* 10043 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ reactionButtonContainer: { marginEnd: 8 }, actionBarReaction: { marginEnd: 4 }, container: { flexDirection: "row" }, mostCommonContainer: { marginLeft: "auto" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  let additionalReactionCount;
  let closure_2;
  let containerStyle;
  let firstMessage;
  let items;
  let parentChannel;
  let reactionContainerStyle;
  let reactions;
  let obj = thread(576);
  const cResult = obj.c(29);
  const tmp = thread;
  thread = thread.thread;
  ({ parentChannel, firstMessage, containerStyle, reactionContainerStyle } = thread);
  const containerWidth = thread.containerWidth;
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const disableReactionCreates = reactionContainerStyle(10041)(thread).disableReactionCreates;
  let num = 28;
  if (disableReactionCreates) {
    num = 0;
  }
  const diff = containerWidth - num;
  if (cResult[0] === firstMessage) {
    if (cResult[1] === parentChannel) {
      let tmp6;
      if (cResult[2] === diff) {
        tmp6 = cResult[3];
      }
      const tmpResult = tmp(7539);
      const maxPossibleForumPostReactions = tmpResult.useMaxPossibleForumPostReactions(tmp6);
      ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
      if (0 === reactions.length) {
        if (disableReactionCreates) {
          return null;
        }
      }
      if (cResult[4] === containerStyle) {
        let tmp8;
        let tmp9;
        if (cResult[5] === tmp4.container) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === reactionContainerStyle) {
          if (cResult[8] === reactions) {
            if (cResult[9] === tmp4.reactionButtonContainer) {
              if (cResult[10] === thread) {
                tmp9 = cResult[11];
              }
              if (cResult[16] === additionalReactionCount) {
                if (cResult[17] === reactionContainerStyle) {
                  let tmp12;
                  if (cResult[18] === thread) {
                    tmp12 = cResult[19];
                  }
                  if (cResult[20] === disableReactionCreates) {
                    if (cResult[21] === reactionContainerStyle) {
                      let tmp14;
                      if (cResult[22] === thread) {
                        tmp14 = cResult[23];
                      }
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp9) {
                          if (cResult[26] === tmp12) {
                            let tmp16;
                            if (cResult[27] === tmp14) {
                              tmp16 = cResult[28];
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
                          ForumPostReactionButton = closure_0(closure_2[8]).ForumPostReactionButton;
                          if (name == null) {
                            name = thread.emoji.name;
                          }
                          return tmp(ForumPostReactionButton, obj, name);
                        }
                      }
                      const obj2 = { style: tmp8, children: items };
                      items = [tmp9, tmp12, tmp14];
                      const tmp18 = closure_5(View, obj2);
                      cResult[24] = tmp8;
                      cResult[25] = tmp9;
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
                      ForumPostReactionButton = closure_0(closure_2[8]).ForumPostReactionButton;
                      if (name == null) {
                        name = thread.emoji.name;
                      }
                      return tmp(ForumPostReactionButton, obj, name);
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
                  ForumPostReactionButton = closure_0(closure_2[8]).ForumPostReactionButton;
                  if (name == null) {
                    name = thread.emoji.name;
                  }
                  return tmp(ForumPostReactionButton, obj, name);
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
        if (cResult[12] === reactionContainerStyle) {
          if (cResult[13] === tmp4.reactionButtonContainer) {
            let tmp10;
            if (cResult[14] === thread) {
              tmp10 = cResult[15];
            }
            const mapped = reactions.map(tmp10);
            class F {
              constructor(arg0) {
                tmp = jsx;
                obj = { containerStyle: null, thread, reaction: thread, animateCount: false };
                items = [, ];
                items[0] = closure_2.reactionButtonContainer;
                items[1] = reactionContainerStyle;
                obj.containerStyle = items;
                name = thread.emoji.id;
                ForumPostReactionButton = closure_0(closure_2[8]).ForumPostReactionButton;
                if (name == null) {
                  name = thread.emoji.name;
                }
                return tmp(ForumPostReactionButton, obj, name);
              }
            }
            cResult[8] = reactions;
            cResult[9] = tmp4.reactionButtonContainer;
            cResult[10] = thread;
            cResult[11] = mapped;
            tmp9 = mapped;
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
            ForumPostReactionButton = closure_0(closure_2[8]).ForumPostReactionButton;
            if (name == null) {
              name = thread.emoji.name;
            }
            return tmp(ForumPostReactionButton, obj, name);
          }
        }
        cResult[12] = reactionContainerStyle;
        cResult[13] = tmp4.reactionButtonContainer;
        cResult[14] = thread;
        cResult[15] = F;
        tmp10 = F;
      }
      const items1 = [tmp4.container, containerStyle];
      cResult[4] = containerStyle;
      cResult[5] = tmp4.container;
      cResult[6] = items1;
      tmp8 = items1;
    }
  }
  const obj3 = { containerWidth: diff, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel };
  cResult[0] = firstMessage;
  cResult[1] = parentChannel;
  cResult[2] = diff;
  cResult[3] = obj3;
  tmp6 = obj3;
}) : ((thread) => {
  let additionalReactionCount;
  let closure_2;
  let containerStyle;
  let containerWidth;
  let firstMessage;
  let items;
  let items1;
  let parentChannel;
  let reactions;
  let tmp6Result;
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
  let obj = thread(7539);
  const obj2 = { containerWidth: containerWidth - num, reactionEmojiWidth: 46, digitWidth: 7.5, message: firstMessage, parentChannel };
  const maxPossibleForumPostReactions = obj.useMaxPossibleForumPostReactions(obj2);
  ({ reactions, additionalReactionCount } = maxPossibleForumPostReactions);
  if (0 !== reactions.length) {
    const obj3 = { style: items, children: items1 };
    items = [tmp.container, containerStyle];
    items1 = [
      reactions.map((reaction) => {
          let items;
          const obj = { containerStyle: items, thread, reaction, animateCount: false };
          items = [closure_2.reactionButtonContainer, reactionContainerStyle];
          let name = reaction.emoji.id;
          const ForumPostReactionButton = ForumPostReactionButton2.ForumPostReactionButton;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return React3(ForumPostReactionButton, obj, name);
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
    if (tmp10) {
      const obj5 = { containerStyle: reactionContainerStyle, threadId: thread.id };
      tmp10 = closure_4(tmp3(10043).AddReactionButton, obj5);
    }
    items1[2] = tmp10;
    tmp6Result = closure_5(View, obj3);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((thread) => {
  let actionBarReaction;
  let additionalNonUniqueReactionCount;
  let containerStyle;
  let firstMessage;
  let items;
  let items1;
  let items2;
  let parentChannel;
  let reactionContainerStyle;
  let reactions;
  let obj = thread(576);
  const cResult = obj.c(31);
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
      let tmp5;
      if (cResult[2] === num) {
        tmp5 = cResult[3];
      }
      const tmpResult = thread(7539);
      const someForumPostReactions = tmpResult.useSomeForumPostReactions(tmp5);
      ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
      if (0 === reactions.length) {
        if (disableReactionCreates) {
          return null;
        }
      }
      if (cResult[4] === containerStyle) {
        let tmp7;
        let tmp8;
        if (cResult[5] === tmp4.container) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === reactionContainerStyle) {
          if (cResult[8] === reactions) {
            if (cResult[9] === tmp4.actionBarReaction) {
              if (cResult[10] === thread) {
                tmp8 = cResult[11];
              }
              if (cResult[16] === additionalNonUniqueReactionCount) {
                if (cResult[17] === reactionContainerStyle) {
                  if (cResult[18] === tmp4.actionBarReaction) {
                    let tmp11;
                    if (cResult[19] === thread) {
                      tmp11 = cResult[20];
                    }
                    if (cResult[21] === disableReactionCreates) {
                      if (cResult[22] === reactionContainerStyle) {
                        if (cResult[23] === tmp4.actionBarReaction) {
                          let tmp14;
                          if (cResult[24] === thread) {
                            tmp14 = cResult[25];
                          }
                          if (cResult[26] === tmp7) {
                            if (cResult[27] === tmp8) {
                              if (cResult[28] === tmp11) {
                                let tmp17;
                                if (cResult[29] === tmp14) {
                                  tmp17 = cResult[30];
                                }
                                return tmp17;
                              }
                            }
                          }
                          const obj2 = { style: tmp7, children: items };
                          items = [tmp8, tmp11, tmp14];
                          const tmp20 = closure_5(View, obj2);
                          cResult[26] = tmp7;
                          cResult[27] = tmp8;
                          cResult[28] = tmp11;
                          cResult[29] = tmp14;
                          cResult[30] = tmp20;
                          tmp17 = tmp20;
                        }
                      }
                    }
                    let tmp15 = !disableReactionCreates;
                    if (tmp15) {
                      const obj3 = { containerStyle: items1, threadId: thread.id };
                      items1 = [tmp4.actionBarReaction, reactionContainerStyle];
                      tmp15 = closure_4(tmp(10043).AddReactionButton, obj3);
                    }
                    cResult[21] = disableReactionCreates;
                    cResult[22] = reactionContainerStyle;
                    cResult[23] = tmp4.actionBarReaction;
                    cResult[24] = thread;
                    cResult[25] = tmp15;
                    tmp14 = tmp15;
                  }
                }
              }
              let tmp12 = additionalNonUniqueReactionCount > 0;
              if (tmp12) {
                const obj4 = { count: additionalNonUniqueReactionCount, containerStyle: items2, threadId: thread.id };
                items2 = [tmp4.actionBarReaction, reactionContainerStyle];
                tmp12 = closure_4(tmp(10043).AdditionalReactionCount, obj4);
              }
              cResult[16] = additionalNonUniqueReactionCount;
              cResult[17] = reactionContainerStyle;
              cResult[18] = tmp4.actionBarReaction;
              cResult[19] = thread;
              cResult[20] = tmp12;
              tmp11 = tmp12;
            }
          }
        }
        if (cResult[12] === reactionContainerStyle) {
          if (cResult[13] === tmp4.actionBarReaction) {
            let tmp9;
            if (cResult[14] === thread) {
              tmp9 = cResult[15];
            }
            const mapped = reactions.map(tmp9);
            cResult[7] = reactionContainerStyle;
            cResult[8] = reactions;
            cResult[9] = tmp4.actionBarReaction;
            cResult[10] = thread;
            cResult[11] = mapped;
            tmp8 = mapped;
          }
        }
        const fn = function j(reaction) {
          let items;
          const obj = { containerStyle: items, thread, reaction, animateCount: false };
          items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
          let name = reaction.emoji.id;
          const ForumPostReactionButton = ForumPostReactionButton2.ForumPostReactionButton;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return React3(ForumPostReactionButton, obj, name);
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
    }
  }
  const obj5 = { message: firstMessage, parentChannel, sorted: false, count: num };
  cResult[0] = firstMessage;
  cResult[1] = parentChannel;
  cResult[2] = num;
  cResult[3] = obj5;
  tmp5 = obj5;
}) : ((thread) => {
  let actionBarReaction;
  let additionalNonUniqueReactionCount;
  let containerStyle;
  let firstMessage;
  let items;
  let items1;
  let items2;
  let items3;
  let num;
  let parentChannel;
  let reactions;
  let tmp7Result;
  thread = thread.thread;
  const reactionContainerStyle = thread.reactionContainerStyle;
  ({ parentChannel, firstMessage, containerStyle } = thread);
  const tmp = closure_6();
  dependencyMap = tmp;
  const disableReactionCreates = reactionContainerStyle(10041)(thread).disableReactionCreates;
  let obj = { message: firstMessage, parentChannel, sorted: false, count: num };
  num = 2;
  const useSomeForumPostReactions = thread(7539).useSomeForumPostReactions;
  thread(7539);
  if (disableReactionCreates) {
    num = 3;
  }
  const someForumPostReactions = useSomeForumPostReactions(obj);
  ({ reactions, additionalNonUniqueReactionCount } = someForumPostReactions);
  if (0 !== reactions.length) {
    const obj2 = { style: items, children: items1 };
    items = [tmp.container, containerStyle];
    items1 = [
      reactions.map((reaction) => {
          let items;
          const obj = { containerStyle: items, thread, reaction, animateCount: false };
          items = [actionBarReaction.actionBarReaction, reactionContainerStyle];
          let name = reaction.emoji.id;
          const ForumPostReactionButton = ForumPostReactionButton2.ForumPostReactionButton;
          if (name == null) {
            name = reaction.emoji.name;
          }
          return React3(ForumPostReactionButton, obj, name);
        }),
  ,

    ];
    let tmp9 = additionalNonUniqueReactionCount > 0;
    if (tmp9) {
      const obj3 = { count: additionalNonUniqueReactionCount, containerStyle: items2, threadId: thread.id };
      items2 = [tmp.actionBarReaction, reactionContainerStyle];
      tmp9 = closure_4(tmp3(10043).AdditionalReactionCount, obj3);
    }
    items1[1] = tmp9;
    let tmp11 = !disableReactionCreates;
    if (tmp11) {
      const obj4 = { containerStyle: items3, threadId: thread.id };
      items3 = [tmp.actionBarReaction, reactionContainerStyle];
      tmp11 = closure_4(tmp3(10043).AddReactionButton, obj4);
    }
    items1[2] = tmp11;
    tmp7Result = closure_5(View, obj2);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let firstMessage;
  let locationAnalyticsObject;
  let parentChannel;
  let thread;
  const obj = react2;
  const cResult = obj.c(8);
  ({ thread, parentChannel, firstMessage, locationAnalyticsObject } = arg0);
  const tmp4 = closure_6();
  useReactionPermissionsDefault(thread);
  if (cResult[0] === firstMessage) {
    let tmp8;
    if (cResult[1] === parentChannel) {
      tmp8 = cResult[2];
    }
    const tmpResult = ForumHooks;
    const first = tmpResult.useSomeForumPostReactions(tmp8).reactions[0];
    if (null != first) {
      if (!tmp7) {
        let tmp12;
        if (!tmp6) {
          if (cResult[3] === locationAnalyticsObject) {
            if (cResult[4] === first) {
              if (cResult[5] === tmp4.mostCommonContainer) {
                let tmp13;
                if (cResult[6] === thread) {
                  tmp13 = cResult[7];
                }
                tmp12 = tmp13;
              }
            }
          }
          const obj2 = { containerStyle: tmp4.mostCommonContainer, thread, reaction: first, locationAnalyticsObject, animateCount: false };
          const tmp15 = React3(ForumPostReactionButton2.ForumPostReactionButton, obj2);
          cResult[3] = locationAnalyticsObject;
          cResult[4] = first;
          cResult[5] = tmp4.mostCommonContainer;
          cResult[6] = thread;
          cResult[7] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp12 = null;
        }
        return tmp12;
      }
    }
    return null;
  }
  const obj3 = { parentChannel, message: firstMessage };
  cResult[0] = firstMessage;
  cResult[1] = parentChannel;
  cResult[2] = obj3;
  tmp8 = obj3;
}) : ((thread) => {
  let disableReactionCreates;
  let disableReactionUpdates;
  let firstMessage;
  let locationAnalyticsObject;
  let parentChannel;
  thread = thread.thread;
  ({ parentChannel, firstMessage, locationAnalyticsObject } = thread);
  const tmp = closure_6();
  ({ disableReactionCreates, disableReactionUpdates } = useReactionPermissionsDefault(thread));
  useReactionPermissionsDefault(thread);
  const obj = ForumHooks;
  const first = obj.useSomeForumPostReactions({ parentChannel, message: firstMessage }).reactions[0];
  if (null != first) {
    if (!disableReactionUpdates) {
      let tmp7;
      if (!disableReactionCreates) {
        const obj2 = { containerStyle: tmp.mostCommonContainer, thread, reaction: first, locationAnalyticsObject, animateCount: false };
        tmp7 = React3(ForumPostReactionButton2.ForumPostReactionButton, obj2);
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactions.tsx");

export const MaxForumPostReactions = tmp4;
export const ForumPostActionBarReactions = tmp5;
export const MostCommonForumPostReaction = tmp6;