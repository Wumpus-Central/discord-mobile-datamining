// === Module 12130: ForumPost ===

// Module 12130 (ForumPost)
import ForumPostGridHeaderDefault from "ForumPostGridHeader" /* 12132 */;
import ForumPostGridBodyDefault from "ForumPostGridBody" /* 12136 */;
import ForumPostGridFooterDefault from "ForumPostGridFooter" /* 12147 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;

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
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(_require));
  let tmp3 = parent_id;
  parent_id(firstMessage[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  let obj = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(parent_id));
  const obj2 = require("initialize");
  const firstForumPostMessage = require("ForumPostDataLoader").useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  const obj3 = require("ForumPostDataLoader");
  const forumPostReadStates = require("ForumHooks").useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  const obj4 = require("ForumHooks");
  const forumPostFirstMessageMarkup = require("ForumHooks").useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  ({ hasSpoilerEmbeds, content } = forumPostFirstMessageMarkup);
  const obj5 = require("ForumHooks");
  const forumPostMediaThumbnail = require("ForumPostMediaUtils").useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
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
        if (useForumChannelStore(parent_id).layoutType === ForumPostPressableContainer(tmp[16]).ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            const obj9 = { style, threadId: stateFromStores.id, children: null };
            const obj10 = { thread: stateFromStores, media: forumPostMediaThumbnail, parentChannel: stateFromStores1, firstMessage, hasUnreads, isNew };
            obj9.children = closure_6(ForumPostGrid, obj10);
            let tmp16Result = closure_6(ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer, obj9);
          }
        }
        const obj11 = { style, threadId: stateFromStores.id, children: null };
        const obj12 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: content, media: forumPostMediaThumbnail[0], isEmbed: firstMediaIsEmbed, hasUnreads, isNew, firstMessageLoaded: loaded, isLocalDeviceMedia: false };
        obj11.children = closure_6(tmp3(tmp[13]), obj12);
        tmp16Result = closure_6(ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer, obj11);
      }
    }
    ForumPostPressableContainer = ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer;
    const obj13 = { style, threadId: null, children: null };
    style = stateFromStores.id;
    obj13.threadId = style;
    tmp3 = tmp3(tmp[13]);
    const obj14 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: null, media: null, hasUnreads, isNew, firstMessageLoaded: true, isLocalDeviceMedia: false, senderModifier: null };
    isNew = "ignored";
    if (isBlocked) {
      isNew = "blocked";
    }
    obj14.senderModifier = isNew;
    tmp = closure_6(tmp3, obj14);
    obj13.children = tmp;
    tmp16Result = closure_6(ForumPostPressableContainer, obj13);
  } else {
    return closure_6(tmp3(tmp[15]), {});
  }
  const obj8 = require("initialize");
}
const useForumChannelStore = fn(12131).useForumChannelStore;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default noop.memo((arg0) => {
  _require = arg0;
  const items = [ChannelStore];
  let tmp = null;
  if (null != obj.useStateFromStores(items, () => ChannelStore.getChannel(threadId.threadId))) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = closure_6(ConnectedForumPost, obj2);
  }
  return tmp;
});
export const ForumPostListDisabled = function ForumPostListDisabled(threadId) {
  threadId = threadId.threadId;
  ({ style, localDeviceMedia } = threadId);
  const items = [ChannelStore];
  const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
  let tmp5 = null;
  stateFromStores(38)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const obj = threadId(504);
  const tmp = threadId;
  const tmp4 = stateFromStores;
  const items1 = [ChannelStore];
  const stateFromStores1 = threadId(504).useStateFromStores(items1, () => ChannelStore.getChannel(stateFromStores.parent_id));
  const obj2 = threadId(504);
  const firstForumPostMessage = threadId(7407).useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  threadId(7989);
  if (loaded) {
    const obj4 = { style, children: null };
    const obj5 = { thread: stateFromStores, parentChannel: stateFromStores1, firstMessage, messageContent: tmp10, media: localDeviceMedia, hasUnreads: true, isNew: false, firstMessageLoaded: loaded, isLocalDeviceMedia: true };
    obj4.children = closure_6(tmp4(12151), obj5);
    tmp5 = closure_6(tmp(12150).ForumPostDisabledContainer, obj4);
  }
  return tmp5;
};