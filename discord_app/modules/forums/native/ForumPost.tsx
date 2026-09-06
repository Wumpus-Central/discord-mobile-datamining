// === Module 12000: ForumPost ===

// Module 12000 (ForumPost)
import ForumPostGridHeaderDefault from "ForumPostGridHeader" /* 12002 */;
import ForumPostGridBodyDefault from "ForumPostGridBody" /* 12006 */;
import ForumPostGridFooterDefault from "ForumPostGridFooter" /* 12017 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
function ForumPostGrid(arg0) {
  ({ hasUnreads, thread } = arg0);
  const obj = { children: null };
  ({ firstMessage, isNew, media, parentChannel } = arg0);
  const items = [timestampProducer(ForumPostGridHeaderDefault, { thread, hasUnreads, isNew }), timestampProducer(ForumPostGridBodyDefault, { thread, hasUnreads, media }), timestampProducer(ForumPostGridFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  obj.children = items;
  return React6(React5, obj);
}
function ConnectedForumPost(arg0) {
  ({ threadId: require, style } = arg0);
  let parent_id;
  let firstMessage;
  let ForumPostPressableContainer = require;
  let tmp = firstMessage;
  let obj = require("initialize");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(_require));
  let tmp3 = parent_id;
  parent_id(firstMessage[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  let obj1 = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(parent_id));
  let obj2 = require("ForumPostDataLoader");
  const firstForumPostMessage = obj2.useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  let obj3 = require("ForumHooks");
  const forumPostReadStates = obj3.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  let obj4 = require("ForumHooks");
  const forumPostFirstMessageMarkup = obj4.useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  ({ hasSpoilerEmbeds, content } = forumPostFirstMessageMarkup);
  const forumPostMediaThumbnail = require("ForumPostMediaUtils").useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
  const obj6 = require("ForumPostMediaUtils");
  const firstMediaIsEmbed = require("ForumPostMediaUtils").useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  const obj7 = require("ForumPostMediaUtils");
  const items2 = [RelationshipStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => {
    let isBlockedForMessageResult = null != firstMessage;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(tmp);
    }
    const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
    let isIgnoredForMessageResult = null != tmp;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(tmp);
    }
    obj.isIgnored = isIgnoredForMessageResult;
    return obj;
  });
  const isBlocked = stateFromStoresObject.isBlocked;
  if (loaded) {
    if (!isBlocked) {
      if (!stateFromStoresObject.isIgnored) {
        if (useForumChannelStore(parent_id).layoutType === ForumPostPressableContainer(tmp[16]).ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            obj = { style, threadId: stateFromStores.id, children: null };
            obj = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
            obj.children = closure_6(ForumPostGrid, obj);
            let tmp16Result = closure_6(ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer, obj);
          }
        }
        obj1 = { style, threadId: stateFromStores.id, children: null };
        obj2 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
        obj1.children = closure_6(tmp3(tmp[13]), obj2);
        tmp16Result = closure_6(ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer, obj1);
      }
    }
    ForumPostPressableContainer = ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer;
    obj3 = { style, threadId: null, children: null };
    style = stateFromStores.id;
    obj3.threadId = style;
    tmp3 = tmp3(tmp[13]);
    obj4 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false, senderModifier: null };
    isNew = "ignored";
    if (isBlocked) {
      isNew = "blocked";
    }
    obj4.senderModifier = isNew;
    tmp = tmp16(tmp3, obj4);
    obj3.children = tmp;
    tmp16Result = tmp16(ForumPostPressableContainer, obj3);
  } else {
    return closure_6(tmp3(tmp[15]), {});
  }
}
const useForumChannelStore = fn(12001).useForumChannelStore;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default noop.memo((arg0) => {
  _require = arg0;
  let obj = require("initialize");
  const items = [ChannelStore];
  let tmp = null;
  if (null != obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId.threadId))) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = closure_6(ConnectedForumPost, obj);
  }
  return tmp;
});
export const ForumPostListDisabled = function ForumPostListDisabled(threadId) {
  threadId = threadId.threadId;
  ({ style, localDeviceMedia } = threadId);
  let obj = threadId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp5 = null;
  stateFromStores(38)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const items1 = [ChannelStore];
  const stateFromStores1 = threadId(504).useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores.parent_id));
  const obj2 = threadId(504);
  const tmp = threadId;
  const tmp4 = stateFromStores;
  const firstForumPostMessage = threadId(7304).useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  threadId(7885);
  if (loaded) {
    obj = { style, children: null };
    obj = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: tmp10, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    obj.children = closure_6(tmp4(12021), obj);
    tmp5 = closure_6(tmp(12020).ForumPostDisabledContainer, obj);
  }
  return tmp5;
};