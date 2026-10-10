// discord_app/modules/forums/native/ForumPost.tsx
import c from "../../../../_runtime/00576_c.js";
import ForumPostGridHeaderDefault from "posts/grid/ForumPostGridHeader.tsx";
import ForumPostGridBodyDefault from "posts/grid/ForumPostGridBody.tsx";
import ForumPostGridFooterDefault from "posts/grid/ForumPostGridFooter.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

const require = globalThis.__r;

require = fn;
const useForumChannelStore = fn(11675).useForumChannelStore;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostGrid(arg0) {
      const cResult = c.c(17);
      ({ firstMessage, hasUnreads, isNew, media, parentChannel, thread } = arg0);
      if (cResult[0] === hasUnreads) {
        if (cResult[1] === isNew) {
          if (cResult[2] === thread) {
            let tmp3 = cResult[3];
          }
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === media) {
              if (cResult[6] === thread) {
                let tmp5 = cResult[7];
              }
              if (cResult[8] === firstMessage) {
                if (cResult[9] === hasUnreads) {
                  if (cResult[10] === parentChannel) {
                    if (cResult[11] === thread) {
                      let tmp9 = cResult[12];
                    }
                    if (cResult[13] === tmp3) {
                      if (cResult[14] === tmp5) {
                        if (cResult[15] === tmp9) {
                          let tmp13 = cResult[16];
                        }
                        return tmp13;
                      }
                    }
                    const obj2 = { children: null };
                    const items = [tmp3, tmp5, tmp9];
                    obj2.children = items;
                    const tmp16 = closure_1_8(React5, obj2);
                    cResult[13] = tmp3;
                    cResult[14] = tmp5;
                    cResult[15] = tmp9;
                    cResult[16] = tmp16;
                    tmp13 = tmp16;
                  }
                }
              }
              const obj3 = { thread, firstMessage, hasUnreads, parentChannel };
              const tmp12 = timestampProducer(ForumPostGridFooterDefault, obj3);
              cResult[8] = firstMessage;
              cResult[9] = hasUnreads;
              cResult[10] = parentChannel;
              cResult[11] = thread;
              cResult[12] = tmp12;
              tmp9 = tmp12;
            }
          }
          const obj4 = { thread, hasUnreads, media };
          const tmp8 = timestampProducer(ForumPostGridBodyDefault, obj4);
          cResult[4] = hasUnreads;
          cResult[5] = media;
          cResult[6] = thread;
          cResult[7] = tmp8;
          tmp5 = tmp8;
        }
      }
      const tmp4 = timestampProducer(ForumPostGridHeaderDefault, { thread, hasUnreads, isNew });
      cResult[0] = hasUnreads;
      cResult[1] = isNew;
      cResult[2] = thread;
      cResult[3] = tmp4;
      tmp3 = tmp4;
    }
  : function ForumPostGrid(arg0) {
      ({ hasUnreads, thread } = arg0);
      const obj = { children: null };
      ({ firstMessage, isNew, media, parentChannel } = arg0);
      const items = [
        timestampProducer(ForumPostGridHeaderDefault, { thread, hasUnreads, isNew }),
        timestampProducer(ForumPostGridBodyDefault, { thread, hasUnreads, media }),
        timestampProducer(ForumPostGridFooterDefault, { thread, firstMessage, hasUnreads, parentChannel }),
      ];
      obj.children = items;
      return closure_1_8(React5, obj);
    };
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostListDisabled(arg0) {
      let ForumPostDisabledContainer = threadId;
      let tmp = dependencyMap;
      const cResult = threadId(576).c(18);
      ({ style, localDeviceMedia, threadId } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== threadId) {
        const fn = function o() {
          return ChannelStore.getChannel(threadId);
        };
        cResult[1] = threadId;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const result = ForumPostDisabledContainer(504);
      const stateFromStores = result.useStateFromStores(first, tmp5);
      stateFromStores(38)(
        null != stateFromStores,
        "[Forum Post] The thread should not be null here. A store must have missed an update.",
      );
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores.parent_id) {
        const fn2 = function f() {
          return ChannelStore.getChannel(stateFromStores.parent_id);
        };
        cResult[4] = stateFromStores.parent_id;
        cResult[5] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const result1 = ForumPostDisabledContainer(504);
      const stateFromStores1 = result1.useStateFromStores(tmp9, tmp11);
      const result2 = ForumPostDisabledContainer(7003);
      const firstForumPostMessage = result2.useFirstForumPostMessage(stateFromStores);
      ({ firstMessage, loaded } = firstForumPostMessage);
      if (cResult[6] !== firstMessage) {
        const obj2 = { firstMessage, hasUnreads: false };
        cResult[6] = firstMessage;
        cResult[7] = obj2;
        let tmp14 = obj2;
      } else {
        tmp14 = cResult[7];
      }
      const result3 = ForumPostDisabledContainer(9326);
      const content = result3.useForumPostFirstMessageMarkup(tmp14).content;
      if (!loaded) {
        return null;
      } else {
        if (cResult[8] === content) {
          if (cResult[9] === firstMessage) {
            if (cResult[10] === loaded) {
              if (cResult[11] === localDeviceMedia) {
                if (cResult[12] === stateFromStores1) {
                  if (cResult[13] === stateFromStores) {
                    let tmp15 = cResult[14];
                  }
                  if (cResult[15] === style) {
                  }
                  ForumPostDisabledContainer = ForumPostDisabledContainer(11695).ForumPostDisabledContainer;
                  const obj3 = { style, children: tmp15 };
                  tmp = closure_6(ForumPostDisabledContainer, obj3);
                  cResult[15] = style;
                  cResult[16] = tmp15;
                  cResult[17] = tmp;
                }
              }
            }
          }
        }
        const obj4 = {
          thread: stateFromStores,
          parentChannel: stateFromStores1,
          firstMessage,
          messageContent: content,
          media: localDeviceMedia,
          hasUnreads: true,
          isNew: false,
          firstMessageLoaded: loaded,
          isLocalDeviceMedia: true,
        };
        const tmp17 = closure_6(tmp7(11696), obj4);
        cResult[8] = content;
        cResult[9] = firstMessage;
        cResult[10] = loaded;
        cResult[11] = localDeviceMedia;
        cResult[12] = stateFromStores1;
        cResult[13] = stateFromStores;
        cResult[14] = tmp17;
        tmp15 = tmp17;
      }
      const obj = threadId(576);
      tmp7 = stateFromStores;
    }
  : function ForumPostListDisabled(threadId) {
      threadId = threadId.threadId;
      ({ style, localDeviceMedia } = threadId);
      const items = [ChannelStore];
      const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
      let tmp5 = null;
      stateFromStores(38)(
        null != stateFromStores,
        "[Forum Post] The thread should not be null here. A store must have missed an update.",
      );
      const obj = threadId(504);
      const tmp = threadId;
      const tmp4 = stateFromStores;
      const items1 = [ChannelStore];
      const stateFromStores1 = threadId(504).useStateFromStores(items1, () =>
        ChannelStore.getChannel(stateFromStores.parent_id),
      );
      const obj2 = threadId(504);
      const firstForumPostMessage = threadId(7003).useFirstForumPostMessage(stateFromStores);
      ({ firstMessage, loaded } = firstForumPostMessage);
      threadId(9326);
      if (loaded) {
        const obj4 = { style, children: null };
        const obj5 = {
          thread: stateFromStores,
          parentChannel: stateFromStores1,
          firstMessage,
          messageContent: tmp10,
          media: localDeviceMedia,
          hasUnreads: true,
          isNew: false,
          firstMessageLoaded: loaded,
          isLocalDeviceMedia: true,
        };
        obj4.children = closure_6(tmp4(11696), obj5);
        tmp5 = closure_6(tmp(11695).ForumPostDisabledContainer, obj4);
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedForumPost(threadId) {
      const cResult = threadId(firstMessage[6]).c(49);
      threadId = threadId.threadId;
      const style = threadId.style;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== threadId) {
        const fn = function h() {
          return ChannelStore.getChannel(threadId);
        };
        cResult[1] = threadId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = threadId(firstMessage[6]);
      const stateFromStores = threadId(firstMessage[10]).useStateFromStores(first, tmp6);
      parent_id(firstMessage[11])(
        null != stateFromStores,
        "[Forum Post] The thread should not be null here. A store must have missed an update.",
      );
      parent_id = stateFromStores.parent_id;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== parent_id) {
        const fn2 = function p() {
          return ChannelStore.getChannel(parent_id);
        };
        cResult[4] = parent_id;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult = threadId(firstMessage[10]);
      const stateFromStores1 = threadId(firstMessage[10]).useStateFromStores(tmp10, tmp12);
      const tmpResult8 = threadId(firstMessage[10]);
      const firstForumPostMessage = threadId(firstMessage[12]).useFirstForumPostMessage(stateFromStores);
      firstMessage = firstForumPostMessage.firstMessage;
      const loaded = firstForumPostMessage.loaded;
      const tmpResult9 = threadId(firstMessage[12]);
      const forumPostReadStates = threadId(firstMessage[13]).useForumPostReadStates(stateFromStores);
      ({ isNew, hasUnreads } = forumPostReadStates);
      if (cResult[6] === firstMessage) {
        if (cResult[7] === hasUnreads) {
          let tmp16 = cResult[8];
        }
        const forumPostFirstMessageMarkup = tmp(tmp2[13]).useForumPostFirstMessageMarkup(tmp16);
        ({ content, hasSpoilerEmbeds } = forumPostFirstMessageMarkup);
        const tmpResult11 = tmp(tmp2[13]);
        const forumPostMediaThumbnail = tmp(tmp2[16]).useForumPostMediaThumbnail(
          firstMessage,
          stateFromStores1,
          hasSpoilerEmbeds,
        );
        const tmpResult12 = tmp(tmp2[16]);
        const firstMediaIsEmbed = tmp(tmp2[16]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [RelationshipStore];
          cResult[9] = items2;
          let tmp19 = items2;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] !== firstMessage) {
          const fn3 = function k() {
            let isBlockedForMessageResult = null != firstMessage;
            if (isBlockedForMessageResult) {
              isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(firstMessage);
            }
            const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
            let isIgnoredForMessageResult = null != firstMessage;
            if (isIgnoredForMessageResult) {
              isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(firstMessage);
            }
            obj.isIgnored = isIgnoredForMessageResult;
            return obj;
          };
          cResult[10] = firstMessage;
          cResult[11] = fn3;
          let tmp21 = fn3;
        } else {
          tmp21 = cResult[11];
        }
        const tmpResult13 = tmp(tmp2[16]);
        const stateFromStoresObject = tmp(tmp2[10]).useStateFromStoresObject(tmp19, tmp21);
        const isBlocked = stateFromStoresObject.isBlocked;
        if (loaded) {
          if (!isBlocked) {
            if (!stateFromStoresObject.isIgnored) {
              if (useForumChannelStore(parent_id).layoutType === tmp(tmp2[18]).ForumLayout.GRID) {
                if (forumPostMediaThumbnail.length > 0) {
                  if (cResult[24] === firstMessage) {
                    if (cResult[25] === hasUnreads) {
                      if (cResult[26] === isNew) {
                        if (cResult[27] === forumPostMediaThumbnail) {
                          if (cResult[28] === stateFromStores1) {
                            if (cResult[29] === stateFromStores) {
                              let id = cResult[30];
                            }
                            if (cResult[31] === style) {
                              if (cResult[32] === id) {
                              }
                            }
                            const obj2 = { style, threadId: stateFromStores.id, children: id };
                            const tmp37 = closure_6(tmp(tmp2[15]).ForumPostPressableContainer, obj2);
                            cResult[31] = style;
                            cResult[32] = id;
                            id = stateFromStores.id;
                            cResult[33] = id;
                            cResult[34] = tmp37;
                          }
                        }
                      }
                    }
                  }
                  const obj3 = {
                    thread: stateFromStores,
                    media: forumPostMediaThumbnail,
                    parentChannel: stateFromStores1,
                    firstMessage,
                    hasUnreads,
                    isNew,
                  };
                  const tmp34 = closure_6(closure_9, obj3);
                  cResult[24] = firstMessage;
                  cResult[25] = hasUnreads;
                  cResult[26] = isNew;
                  cResult[27] = forumPostMediaThumbnail;
                  cResult[28] = stateFromStores1;
                  cResult[29] = stateFromStores;
                  cResult[30] = tmp34;
                  id = tmp34;
                }
              }
              if (cResult[35] === content) {
                if (cResult[36] === firstMessage) {
                  if (cResult[37] === loaded) {
                    if (cResult[38] === hasUnreads) {
                      if (cResult[39] === firstMediaIsEmbed) {
                        if (cResult[40] === isNew) {
                          if (cResult[41] === forumPostMediaThumbnail[0]) {
                            if (cResult[42] === stateFromStores1) {
                              if (cResult[43] === stateFromStores) {
                                let tmp26 = cResult[44];
                              }
                              if (cResult[45] === style) {
                                if (cResult[46] === tmp26) {
                                  if (cResult[47] === stateFromStores.id) {
                                    let tmp29 = cResult[48];
                                  }
                                  return tmp29;
                                }
                              }
                              const obj4 = { style, threadId: stateFromStores.id, children: tmp26 };
                              const tmp31 = closure_6(tmp(tmp2[15]).ForumPostPressableContainer, obj4);
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
              const obj5 = {
                thread: stateFromStores,
                parentChannel: stateFromStores1,
                firstMessage,
                messageContent: content,
                media: forumPostMediaThumbnail[0],
                isEmbed: firstMediaIsEmbed,
                hasUnreads,
                isNew,
                firstMessageLoaded: loaded,
                isLocalDeviceMedia: false,
              };
              const tmp28 = closure_6(tmp8(tmp2[14]), obj5);
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
                    if (cResult[18] === stateFromStores) {
                      let tmp39 = cResult[19];
                    }
                    if (cResult[20] === style) {
                      if (cResult[21] === tmp39) {
                        if (cResult[22] === stateFromStores.id) {
                          let tmp42 = cResult[23];
                        }
                        return tmp42;
                      }
                    }
                    const obj6 = { style, threadId: stateFromStores.id, children: tmp39 };
                    const tmp44 = closure_6(tmp(tmp2[15]).ForumPostPressableContainer, obj6);
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
          const obj7 = {
            thread: stateFromStores,
            parentChannel: stateFromStores1,
            firstMessage,
            messageContent: null,
            media: null,
            hasUnreads,
            isNew,
            firstMessageLoaded: true,
            isLocalDeviceMedia: false,
            senderModifier: str,
          };
          const tmp41 = closure_6(tmp8(tmp2[14]), obj7);
          cResult[13] = firstMessage;
          cResult[14] = hasUnreads;
          cResult[15] = isNew;
          cResult[16] = stateFromStores1;
          cResult[17] = str;
          cResult[18] = stateFromStores;
          cResult[19] = tmp41;
          tmp39 = tmp41;
        } else {
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp25 = closure_6(tmp8(tmp2[17]), {});
            cResult[12] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[12];
          }
          return tmp23;
        }
        const tmpResult14 = tmp(tmp2[10]);
      }
      const obj8 = { firstMessage, hasUnreads };
      cResult[6] = firstMessage;
      cResult[7] = hasUnreads;
      cResult[8] = obj8;
      tmp16 = obj8;
      const tmpResult10 = threadId(firstMessage[13]);
    }
  : function ConnectedForumPost(arg0) {
      ({ threadId: require, style } = arg0);
      let parent_id;
      let firstMessage;
      let ForumPostPressableContainer = require;
      let tmp = firstMessage;
      const items = [ChannelStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(_require));
      let tmp3 = parent_id;
      parent_id(firstMessage[11])(
        null != stateFromStores,
        "[Forum Post] The thread should not be null here. A store must have missed an update.",
      );
      parent_id = stateFromStores.parent_id;
      let obj = require("initialize");
      const items1 = [ChannelStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        ChannelStore.getChannel(parent_id),
      );
      const obj2 = require("initialize");
      const firstForumPostMessage = require("ForumPostDataLoader").useFirstForumPostMessage(stateFromStores);
      firstMessage = firstForumPostMessage.firstMessage;
      const loaded = firstForumPostMessage.loaded;
      const obj3 = require("ForumPostDataLoader");
      const forumPostReadStates = require("ForumHooks").useForumPostReadStates(stateFromStores);
      ({ isNew, hasUnreads } = forumPostReadStates);
      const obj4 = require("ForumHooks");
      const forumPostFirstMessageMarkup = require("ForumHooks").useForumPostFirstMessageMarkup({
        firstMessage,
        hasUnreads,
      });
      ({ hasSpoilerEmbeds, content } = forumPostFirstMessageMarkup);
      const obj5 = require("ForumHooks");
      const forumPostMediaThumbnail = require("ForumPostMediaUtils").useForumPostMediaThumbnail(
        firstMessage,
        stateFromStores1,
        hasSpoilerEmbeds,
      );
      const obj6 = require("ForumPostMediaUtils");
      const firstMediaIsEmbed = require("ForumPostMediaUtils").useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
      const obj7 = require("ForumPostMediaUtils");
      const items2 = [RelationshipStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
        let isBlockedForMessageResult = null != firstMessage;
        if (isBlockedForMessageResult) {
          isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(firstMessage);
        }
        const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
        let isIgnoredForMessageResult = null != firstMessage;
        if (isIgnoredForMessageResult) {
          isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(firstMessage);
        }
        obj.isIgnored = isIgnoredForMessageResult;
        return obj;
      });
      const isBlocked = stateFromStoresObject.isBlocked;
      if (loaded) {
        if (!isBlocked) {
          if (!stateFromStoresObject.isIgnored) {
            if (useForumChannelStore(parent_id).layoutType === ForumPostPressableContainer(tmp[18]).ForumLayout.GRID) {
              if (forumPostMediaThumbnail.length > 0) {
                const obj9 = { style, threadId: stateFromStores.id, children: null };
                const obj10 = {
                  thread: stateFromStores,
                  media: forumPostMediaThumbnail,
                  parentChannel: stateFromStores1,
                  firstMessage,
                  hasUnreads,
                  isNew,
                };
                obj9.children = closure_6(closure_9, obj10);
                let tmp16Result = closure_6(ForumPostPressableContainer(tmp[15]).ForumPostPressableContainer, obj9);
              }
            }
            const obj11 = { style, threadId: stateFromStores.id, children: null };
            const obj12 = {
              thread: stateFromStores,
              parentChannel: stateFromStores1,
              firstMessage,
              messageContent: content,
              media: forumPostMediaThumbnail[0],
              isEmbed: firstMediaIsEmbed,
              hasUnreads,
              isNew,
              firstMessageLoaded: loaded,
              isLocalDeviceMedia: false,
            };
            obj11.children = closure_6(tmp3(tmp[14]), obj12);
            tmp16Result = closure_6(ForumPostPressableContainer(tmp[15]).ForumPostPressableContainer, obj11);
          }
        }
        ForumPostPressableContainer = ForumPostPressableContainer(tmp[15]).ForumPostPressableContainer;
        const obj13 = { style, threadId: null, children: null };
        style = stateFromStores.id;
        obj13.threadId = style;
        tmp3 = tmp3(tmp[14]);
        const obj14 = {
          thread: stateFromStores,
          parentChannel: stateFromStores1,
          firstMessage,
          messageContent: null,
          media: null,
          hasUnreads,
          isNew,
          firstMessageLoaded: true,
          isLocalDeviceMedia: false,
          senderModifier: null,
        };
        isNew = "ignored";
        if (isBlocked) {
          isNew = "blocked";
        }
        obj14.senderModifier = isNew;
        tmp = closure_6(tmp3, obj14);
        obj13.children = tmp;
        tmp16Result = closure_6(ForumPostPressableContainer, obj13);
      } else {
        return closure_6(tmp3(tmp[17]), {});
      }
      const obj8 = require("initialize");
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ForumPostMissingWrapper(threadId) {
        _require = threadId;
        const cResult = require("c").c(5);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== threadId.threadId) {
          const fn = function o() {
            return ChannelStore.getChannel(threadId.threadId);
          };
          cResult[1] = threadId.threadId;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const obj = require("c");
        if (null == tmpResult.useStateFromStores(first, tmp6)) {
          return null;
        } else if (cResult[3] !== threadId) {
          const obj2 = {};
          const merged = Object.assign(threadId);
          const tmp13 = closure_6(closure_10, obj2);
          cResult[3] = threadId;
          cResult[4] = tmp13;
        }
        tmpResult = require("initialize");
      }
    : function ForumPostMissingWrapper(arg0) {
        _require = arg0;
        const items = [ChannelStore];
        let tmp = null;
        if (null != obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId.threadId))) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          tmp = closure_6(closure_10, obj2);
        }
        return tmp;
      },
);
export const ForumPostListDisabled = tmp3;
