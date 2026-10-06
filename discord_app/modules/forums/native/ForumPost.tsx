// === Module 11628: ForumPost ===

// Module 11628 (ForumPost)
import react2 from "react" /* 576 */;
import ForumChannelStore from "ForumChannelStore" /* 11629 */;
import ForumPostGridHeaderDefault from "ForumPostGridHeader" /* 11630 */;
import ForumPostGridBodyDefault from "ForumPostGridBody" /* 11634 */;
import ForumPostGridFooterDefault from "ForumPostGridFooter" /* 11645 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let firstMessage;
  let hasUnreads;
  let isNew;
  let items;
  let media;
  let parentChannel;
  let thread;
  const obj = react2;
  const cResult = obj.c(17);
  ({ firstMessage, hasUnreads, isNew, media, parentChannel, thread } = arg0);
  if (cResult[0] === hasUnreads) {
    if (cResult[1] === isNew) {
      let tmp3;
      if (cResult[2] === thread) {
        tmp3 = cResult[3];
      }
      if (cResult[4] === hasUnreads) {
        if (cResult[5] === media) {
          let tmp5;
          if (cResult[6] === thread) {
            tmp5 = cResult[7];
          }
          if (cResult[8] === firstMessage) {
            if (cResult[9] === hasUnreads) {
              if (cResult[10] === parentChannel) {
                let tmp9;
                if (cResult[11] === thread) {
                  tmp9 = cResult[12];
                }
                if (cResult[13] === tmp3) {
                  if (cResult[14] === tmp5) {
                    let tmp13;
                    if (cResult[15] === tmp9) {
                      tmp13 = cResult[16];
                    }
                    return tmp13;
                  }
                }
                const obj2 = { children: items };
                items = [tmp3, tmp5, tmp9];
                const tmp16 = metroImportAll(metroImportDefault, obj2);
                cResult[13] = tmp3;
                cResult[14] = tmp5;
                cResult[15] = tmp9;
                cResult[16] = tmp16;
                tmp13 = tmp16;
              }
            }
          }
          const obj3 = { thread, firstMessage, hasUnreads, parentChannel };
          const tmp12 = metroRequire(ForumPostGridFooterDefault, obj3);
          cResult[8] = firstMessage;
          cResult[9] = hasUnreads;
          cResult[10] = parentChannel;
          cResult[11] = thread;
          cResult[12] = tmp12;
          tmp9 = tmp12;
        }
      }
      const obj4 = { thread, hasUnreads, media };
      const tmp8 = metroRequire(ForumPostGridBodyDefault, obj4);
      cResult[4] = hasUnreads;
      cResult[5] = media;
      cResult[6] = thread;
      cResult[7] = tmp8;
      tmp5 = tmp8;
    }
  }
  const tmp4 = metroRequire(ForumPostGridHeaderDefault, { thread, hasUnreads, isNew });
  cResult[0] = hasUnreads;
  cResult[1] = isNew;
  cResult[2] = thread;
  cResult[3] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  let firstMessage;
  let hasUnreads;
  let isNew;
  let items;
  let media;
  let parentChannel;
  let thread;
  ({ hasUnreads, thread } = arg0);
  const obj = { children: items };
  ({ firstMessage, isNew, media, parentChannel } = arg0);
  items = [metroRequire(ForumPostGridHeaderDefault, { thread, hasUnreads, isNew }), metroRequire(ForumPostGridBodyDefault, { thread, hasUnreads, media }), metroRequire(ForumPostGridFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  return metroImportAll(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let firstMessage;
  let loaded;
  let localDeviceMedia;
  let style;
  let threadId;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp6;
  const obj = threadId(576);
  const cResult = obj.c(18);
  ({ style, localDeviceMedia, threadId } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = threadId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  stateFromStores(38)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const tmp8 = stateFromStores;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores.parent_id) {
    const fn2 = function f() {
      return ChannelStore.getChannel(stateFromStores.parent_id);
    };
    cResult[4] = stateFromStores.parent_id;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult4 = threadId(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12);
  const tmpResult5 = threadId(6817);
  const firstForumPostMessage = tmpResult5.useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  if (cResult[6] !== firstMessage) {
    const obj2 = { firstMessage, hasUnreads: false };
    cResult[6] = firstMessage;
    cResult[7] = obj2;
    tmp15 = obj2;
  } else {
    tmp15 = cResult[7];
  }
  const tmpResult6 = threadId(7539);
  const content = tmpResult6.useForumPostFirstMessageMarkup(tmp15).content;
  let tmp16 = null;
  if (loaded) {
    if (cResult[8] === content) {
      if (cResult[9] === firstMessage) {
        if (cResult[10] === loaded) {
          if (cResult[11] === localDeviceMedia) {
            if (cResult[12] === stateFromStores1) {
              let tmp17;
              if (cResult[13] === stateFromStores) {
                tmp17 = cResult[14];
              }
              if (cResult[15] === style) {
                let tmp20;
                if (cResult[16] === tmp17) {
                  tmp20 = cResult[17];
                }
                tmp16 = tmp20;
              }
              const obj3 = { style, children: tmp17 };
              const tmp22 = closure_6(threadId(11648).ForumPostDisabledContainer, obj3);
              cResult[15] = style;
              cResult[16] = tmp17;
              cResult[17] = tmp22;
              tmp20 = tmp22;
            }
          }
        }
      }
    }
    const obj4 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: content, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    const tmp19 = closure_6(tmp8(11649), obj4);
    cResult[8] = content;
    cResult[9] = firstMessage;
    cResult[10] = loaded;
    cResult[11] = localDeviceMedia;
    cResult[12] = stateFromStores1;
    cResult[13] = stateFromStores;
    cResult[14] = tmp19;
    tmp17 = tmp19;
  }
  return tmp16;
}) : ((threadId) => {
  let firstMessage;
  let loaded;
  let localDeviceMedia;
  let obj5;
  let style;
  threadId = threadId.threadId;
  ({ style, localDeviceMedia } = threadId);
  const items = [ChannelStore];
  const obj = threadId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp5 = null;
  stateFromStores(38)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const items1 = [ChannelStore];
  const obj2 = threadId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores.parent_id));
  const obj3 = threadId(6817);
  const firstForumPostMessage = obj3.useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  threadId(7539);
  const tmp = threadId;
  const tmp4 = stateFromStores;
  if (loaded) {
    const obj4 = { style, children: closure_6(tmp4(11649), obj5) };
    const ForumPostDisabledContainer = tmp(11648).ForumPostDisabledContainer;
    obj5 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: tmp10, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    tmp5 = closure_6(ForumPostDisabledContainer, obj4);
  }
  return tmp5;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  let first;
  let tmp6;
  _require = threadId;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId.threadId) {
    const fn = function o() {
      return ChannelStore.getChannel(threadId.threadId);
    };
    cResult[1] = threadId.threadId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let tmp7 = null;
  const tmpResult = tmp(504);
  if (null != tmpResult.useStateFromStores(first, tmp6)) {
    let tmp8;
    if (cResult[3] !== threadId) {
      const obj2 = {};
      const merged = Object.assign(threadId);
      const tmp14 = closure_6(closure_10, obj2);
      cResult[3] = threadId;
      cResult[4] = tmp14;
      tmp8 = tmp14;
    } else {
      tmp8 = cResult[4];
    }
    tmp7 = tmp8;
  }
  return tmp7;
}) : ((arg0) => {
  let threadId;
  _require = arg0;
  const items = [ChannelStore];
  let tmp = null;
  const obj = require("get initialized");
  if (null != obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId.threadId))) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = closure_6(closure_10, obj2);
  }
  return tmp;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((threadId) => {
  let content;
  let first;
  let firstMessage;
  let hasSpoilerEmbeds;
  let hasUnreads;
  let isNew;
  let parent_id;
  let tmp10;
  let tmp12;
  let tmp6;
  let obj = threadId(firstMessage[6]);
  const cResult = obj.c(49);
  threadId = threadId.threadId;
  const style = threadId.style;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== threadId) {
    const fn = function h() {
      return ChannelStore.getChannel(threadId);
    };
    cResult[1] = threadId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = threadId(firstMessage[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  parent_id(firstMessage[11])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  const layoutType = useForumChannelStore(parent_id).layoutType;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== parent_id) {
    const fn2 = function p() {
      return ChannelStore.getChannel(parent_id);
    };
    cResult[4] = parent_id;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult8 = threadId(firstMessage[10]);
  const stateFromStores1 = tmpResult8.useStateFromStores(tmp10, tmp12);
  const tmpResult9 = threadId(firstMessage[12]);
  const firstForumPostMessage = tmpResult9.useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  const tmpResult10 = threadId(firstMessage[13]);
  const forumPostReadStates = tmpResult10.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  if (cResult[6] === firstMessage) {
    let tmp16;
    let tmp19;
    let tmp21;
    if (cResult[7] === hasUnreads) {
      tmp16 = cResult[8];
    }
    const tmpResult11 = threadId(firstMessage[13]);
    const forumPostFirstMessageMarkup = tmpResult11.useForumPostFirstMessageMarkup(tmp16);
    ({ content, hasSpoilerEmbeds } = forumPostFirstMessageMarkup);
    const tmpResult12 = threadId(firstMessage[16]);
    const forumPostMediaThumbnail = tmpResult12.useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
    const tmpResult13 = threadId(firstMessage[16]);
    const firstMediaIsEmbed = tmpResult13.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [RelationshipStore];
      cResult[9] = items2;
      tmp19 = items2;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] !== firstMessage) {
      const fn3 = function k() {
        let isIgnoredForMessageResult;
        const obj = { isBlocked: null != firstMessage && RelationshipStore.isBlockedForMessage(firstMessage), isIgnored: isIgnoredForMessageResult };
        isIgnoredForMessageResult = null != firstMessage && RelationshipStore.isIgnoredForMessage(firstMessage);
        return obj;
      };
      cResult[10] = firstMessage;
      cResult[11] = fn3;
      tmp21 = fn3;
    } else {
      tmp21 = cResult[11];
    }
    const tmpResult14 = threadId(firstMessage[10]);
    const stateFromStoresObject = tmpResult14.useStateFromStoresObject(tmp19, tmp21);
    const isBlocked = stateFromStoresObject.isBlocked;
    if (loaded) {
      if (!isBlocked) {
        if (!stateFromStoresObject.isIgnored) {
          let tmp29;
          if (layoutType === threadId(firstMessage[18]).ForumLayout.GRID) {
            if (forumPostMediaThumbnail.length > 0) {
              if (cResult[24] === firstMessage) {
                if (cResult[25] === hasUnreads) {
                  if (cResult[26] === isNew) {
                    if (cResult[27] === forumPostMediaThumbnail) {
                      if (cResult[28] === stateFromStores1) {
                        let tmp32;
                        if (cResult[29] === stateFromStores) {
                          tmp32 = cResult[30];
                        }
                        if (cResult[31] === style) {
                          if (cResult[32] === tmp32) {
                            let tmp36;
                            if (cResult[33] === stateFromStores.id) {
                              tmp36 = cResult[34];
                            }
                            tmp29 = tmp36;
                          }
                        }
                        const obj2 = { style, threadId: stateFromStores.id, children: tmp32 };
                        const tmp38 = closure_6(threadId(firstMessage[15]).ForumPostPressableContainer, obj2);
                        cResult[31] = style;
                        cResult[32] = tmp32;
                        cResult[33] = stateFromStores.id;
                        cResult[34] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                  }
                }
              }
              const obj3 = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
              const tmp35 = closure_6(closure_9, obj3);
              cResult[24] = firstMessage;
              cResult[25] = hasUnreads;
              cResult[26] = isNew;
              cResult[27] = forumPostMediaThumbnail;
              cResult[28] = stateFromStores1;
              cResult[29] = stateFromStores;
              cResult[30] = tmp35;
              tmp32 = tmp35;
            }
            return tmp29;
          }
          if (cResult[35] === content) {
            if (cResult[36] === firstMessage) {
              if (cResult[37] === loaded) {
                if (cResult[38] === hasUnreads) {
                  if (cResult[39] === firstMediaIsEmbed) {
                    if (cResult[40] === isNew) {
                      if (cResult[41] === forumPostMediaThumbnail[0]) {
                        if (cResult[42] === stateFromStores1) {
                          let tmp26;
                          if (cResult[43] === stateFromStores) {
                            tmp26 = cResult[44];
                          }
                          if (cResult[45] === style) {
                            if (cResult[46] === tmp26) {
                              if (cResult[47] === stateFromStores.id) {
                                tmp29 = cResult[48];
                              }
                            }
                          }
                          const obj4 = { style, threadId: stateFromStores.id, children: tmp26 };
                          const tmp31 = closure_6(threadId(firstMessage[15]).ForumPostPressableContainer, obj4);
                          cResult[45] = style;
                          cResult[46] = tmp26;
                          cResult[47] = stateFromStores.id;
                          cResult[48] = tmp31;
                          tmp29 = tmp31;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
          const tmp28 = closure_6(parent_id(firstMessage[14]), obj5);
          cResult[35] = content;
          cResult[36] = firstMessage;
          cResult[37] = loaded;
          cResult[38] = hasUnreads;
          cResult[39] = firstMediaIsEmbed;
          cResult[40] = isNew;
          cResult[41] = forumPostMediaThumbnail[0];
          cResult[42] = stateFromStores1;
          cResult[43] = stateFromStores;
          cResult[44] = tmp28;
          tmp26 = tmp28;
        }
      }
      let str = "ignored";
      if (isBlocked) {
        str = "blocked";
      }
      if (cResult[13] === firstMessage) {
        if (cResult[14] === hasUnreads) {
          if (cResult[15] === isNew) {
            if (cResult[16] === stateFromStores1) {
              if (cResult[17] === str) {
                let tmp39;
                if (cResult[18] === stateFromStores) {
                  tmp39 = cResult[19];
                }
                if (cResult[20] === style) {
                  if (cResult[21] === tmp39) {
                    let tmp42;
                    if (cResult[22] === stateFromStores.id) {
                      tmp42 = cResult[23];
                    }
                    return tmp42;
                  }
                }
                const obj6 = { style, threadId: stateFromStores.id, children: tmp39 };
                const tmp44 = closure_6(threadId(firstMessage[15]).ForumPostPressableContainer, obj6);
                cResult[20] = style;
                cResult[21] = tmp39;
                cResult[22] = stateFromStores.id;
                cResult[23] = tmp44;
                tmp42 = tmp44;
              }
            }
          }
        }
      }
      const obj7 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false, senderModifier: str };
      const tmp41 = closure_6(parent_id(firstMessage[14]), obj7);
      cResult[13] = firstMessage;
      cResult[14] = hasUnreads;
      cResult[15] = isNew;
      cResult[16] = stateFromStores1;
      cResult[17] = str;
      cResult[18] = stateFromStores;
      cResult[19] = tmp41;
      tmp39 = tmp41;
    } else {
      let tmp23;
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp25 = closure_6(parent_id(firstMessage[17]), {});
        cResult[12] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[12];
      }
      return tmp23;
    }
  }
  const obj8 = { firstMessage, hasUnreads };
  cResult[6] = firstMessage;
  cResult[7] = hasUnreads;
  cResult[8] = obj8;
  tmp16 = obj8;
}) : ((arg0) => {
  let content;
  let hasSpoilerEmbeds;
  let hasUnreads;
  let isNew;
  let obj10;
  let obj12;
  let obj14;
  let require;
  let str;
  let style;
  let tmp13;
  let tmp4Result;
  ({ threadId: require, style } = arg0);
  let parent_id;
  let firstMessage;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  parent_id(firstMessage[11])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  const layoutType = useForumChannelStore(parent_id).layoutType;
  const items1 = [ChannelStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(parent_id));
  const obj3 = require("ForumPostDataLoader");
  const firstForumPostMessage = obj3.useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  const obj4 = require("ForumHooks");
  const forumPostReadStates = obj4.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  const obj5 = require("ForumHooks");
  const forumPostFirstMessageMarkup = obj5.useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  ({ hasSpoilerEmbeds, content } = forumPostFirstMessageMarkup);
  const obj6 = require("ForumPostMediaUtils");
  const forumPostMediaThumbnail = obj6.useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
  const obj7 = require("ForumPostMediaUtils");
  const firstMediaIsEmbed = obj7.useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  const items2 = [RelationshipStore];
  const obj8 = require("get initialized");
  const stateFromStoresObject = obj8.useStateFromStoresObject(items2, () => {
    let isIgnoredForMessageResult;
    const obj = { isBlocked: null != firstMessage && RelationshipStore.isBlockedForMessage(firstMessage), isIgnored: isIgnoredForMessageResult };
    isIgnoredForMessageResult = null != firstMessage && RelationshipStore.isIgnoredForMessage(firstMessage);
    return obj;
  });
  const isBlocked = stateFromStoresObject.isBlocked;
  if (loaded) {
    if (!isBlocked) {
      let tmp18Result;
      if (!stateFromStoresObject.isIgnored) {
        if (layoutType === require("ForumLayout").ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            const obj9 = { style, threadId: stateFromStores.id, children: closure_6(closure_9, obj10) };
            obj10 = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
            const ForumPostPressableContainer2 = require("ForumPostContainer").ForumPostPressableContainer;
            tmp18Result = closure_6(ForumPostPressableContainer2, obj9);
          }
        }
        const obj11 = { style, threadId: stateFromStores.id, children: closure_6(parent_id(firstMessage[14]), obj12) };
        const ForumPostPressableContainer = require("ForumPostContainer").ForumPostPressableContainer;
        obj12 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
        tmp18Result = closure_6(ForumPostPressableContainer, obj11);
      }
      tmp13 = tmp18Result;
    }
    const obj13 = { style, threadId: stateFromStores.id, children: closure_6(tmp4Result, obj14) };
    const ForumPostPressableContainer3 = require("ForumPostContainer").ForumPostPressableContainer;
    obj14 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false, senderModifier: str };
    str = "ignored";
    tmp4Result = parent_id(firstMessage[14]);
    if (isBlocked) {
      str = "blocked";
    }
    tmp18Result = closure_6(ForumPostPressableContainer3, obj13);
  } else {
    tmp13 = closure_6(tmp4(tmp2[17]), {});
  }
  return tmp13;
});
const result = size.fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default memoResult;
export const ForumPostListDisabled = tmp4;