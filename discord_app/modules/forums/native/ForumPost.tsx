// discord_app/modules/forums/native/ForumPost.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import { useForumChannelStore } from "set";
import jsxProd from "jsxProd";
import importAllResult from "noop";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { GIFIcon } from "posts/grid/ForumPostGridBody.tsx";
import { ForumPostGridFooter } from "posts/grid/ForumPostGridFooter.tsx";
import { ForumPostGridHeader } from "posts/grid/ForumPostGridHeader.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ForumPostGrid(arg0) {
  let firstMessage;
  let hasUnreads;
  let isNew;
  let media;
  let parentChannel;
  let thread;
  ({ hasUnreads, thread } = arg0);
  const obj = { children: null };
  ({ firstMessage, isNew, media, parentChannel } = arg0);
  const items = [callback(ForumPostGridHeader, { thread, hasUnreads, isNew }), callback(GIFIcon, { thread, hasUnreads, media }), callback(ForumPostGridFooter, { thread, firstMessage, hasUnreads, parentChannel })];
  obj[0] = items;
  return callback2(closure_7, obj);
}
function ConnectedForumPost(arg0) {
  let content;
  let hasSpoilerEmbeds;
  let hasUnreads;
  let isNew;
  let require;
  let style;
  ({ threadId: require, style } = arg0);
  let parent_id;
  let firstMessage;
  let ForumPostPressableContainer = require;
  let tmp = firstMessage;
  let obj = require(firstMessage[8]);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  let tmp3 = parent_id;
  parent_id(firstMessage[9])(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  parent_id = stateFromStores.parent_id;
  let obj1 = require(firstMessage[8]);
  const items1 = [ensureGuildLoaded];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_3.getChannel(parent_id));
  let obj2 = require(firstMessage[10]);
  const firstForumPostMessage = obj2.useFirstForumPostMessage(stateFromStores);
  firstMessage = firstForumPostMessage.firstMessage;
  const loaded = firstForumPostMessage.loaded;
  let obj3 = require(firstMessage[11]);
  const forumPostReadStates = obj3.useForumPostReadStates(stateFromStores);
  ({ isNew, hasUnreads } = forumPostReadStates);
  let obj4 = require(firstMessage[11]);
  const forumPostFirstMessageMarkup = obj4.useForumPostFirstMessageMarkup({ firstMessage, hasUnreads });
  ({ hasSpoilerEmbeds, content } = forumPostFirstMessageMarkup);
  const forumPostMediaThumbnail = require(firstMessage[14]).useForumPostMediaThumbnail(firstMessage, stateFromStores1, hasSpoilerEmbeds);
  const obj6 = require(firstMessage[14]);
  const firstMediaIsEmbed = require(firstMessage[14]).useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds);
  const obj7 = require(firstMessage[14]);
  const items2 = [upsertRelationship];
  const stateFromStoresObject = require(firstMessage[8]).useStateFromStoresObject(items2, () => {
    let isBlockedForMessageResult = null != firstMessage;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = outer1_4.isBlockedForMessage(tmp);
    }
    const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
    let isIgnoredForMessageResult = null != tmp;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = outer1_4.isIgnoredForMessage(tmp);
    }
    obj[1] = isIgnoredForMessageResult;
    return obj;
  });
  const isBlocked = stateFromStoresObject.isBlocked;
  if (loaded) {
    if (!isBlocked) {
      if (!stateFromStoresObject.isIgnored) {
        if (useForumChannelStore(parent_id).layoutType === ForumPostPressableContainer(tmp[16]).ForumLayout.GRID) {
          if (forumPostMediaThumbnail.length > 0) {
            obj = { style: null, threadId: null, children: null };
            obj[0] = style;
            obj[1] = stateFromStores.id;
            obj = { thread: null, media: null, parentChannel: null, firstMessage: null, hasUnreads: null, isNew: null };
            obj[0] = stateFromStores;
            obj[1] = forumPostMediaThumbnail;
            obj[2] = stateFromStores1;
            obj[3] = firstMessage;
            obj[4] = hasUnreads;
            obj[5] = isNew;
            obj[2] = callback(ForumPostGrid, obj);
            let tmp16Result = callback(ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer, obj);
          }
        }
        obj1 = { style: null, threadId: null, children: null };
        obj1[0] = style;
        obj1[1] = stateFromStores.id;
        obj2 = { thread: null, parentChannel: null, firstMessage: null, messageContent: null, media: null, isEmbed: null, hasUnreads: null, isNew: null, firstMessageLoaded: null, isLocalDeviceMedia: false };
        obj2[0] = stateFromStores;
        obj2[1] = stateFromStores1;
        obj2[2] = firstMessage;
        obj2[3] = content;
        obj2[4] = forumPostMediaThumbnail[0];
        obj2[5] = firstMediaIsEmbed;
        obj2[6] = hasUnreads;
        obj2[7] = isNew;
        obj2[8] = loaded;
        obj1[2] = callback(tmp3(tmp[13]), obj2);
        tmp16Result = callback(ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer, obj1);
      }
    }
    ForumPostPressableContainer = ForumPostPressableContainer(tmp[12]).ForumPostPressableContainer;
    obj3 = { style: null, threadId: null, children: null };
    obj3[0] = style;
    style = stateFromStores.id;
    obj3[1] = style;
    tmp3 = tmp3(tmp[13]);
    obj4 = { thread: null, parentChannel: null, firstMessage: null, messageContent: null, media: null, hasUnreads: null, isNew: null, firstMessageLoaded: true, isLocalDeviceMedia: false, senderModifier: null };
    obj4[0] = stateFromStores;
    obj4[1] = stateFromStores1;
    obj4[2] = firstMessage;
    obj4[5] = hasUnreads;
    obj4[6] = isNew;
    isNew = "ignored";
    if (isBlocked) {
      isNew = "blocked";
    }
    obj4[9] = isNew;
    tmp = tmp16(tmp3, obj4);
    obj3[2] = tmp;
    tmp16Result = tmp16(ForumPostPressableContainer, obj3);
  } else {
    return callback(tmp3(tmp[15]), {});
  }
}
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
const memoResult = require("noop").memo((arg0) => {
  const _require = arg0;
  let obj = _initialize;
  const items = [ensureGuildLoaded];
  let tmp = null;
  if (null != obj.useStateFromStores(items, () => outer1_3.getChannel(threadId.threadId))) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(ConnectedForumPost, obj);
  }
  return tmp;
});
const result = require("upsertRelationship").fileFinishedImporting("modules/forums/native/ForumPost.tsx");

export default memoResult;
export const ForumPostListDisabled = function ForumPostListDisabled(threadId) {
  let firstMessage;
  let loaded;
  let localDeviceMedia;
  let style;
  threadId = threadId.threadId;
  let stateFromStores;
  ({ style, localDeviceMedia } = threadId);
  let obj = threadId(589);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(threadId));
  let tmp5 = null;
  stateFromStores(38)(null != stateFromStores, "[Forum Post] The thread should not be null here. A store must have missed an update.");
  const items1 = [ensureGuildLoaded];
  const stateFromStores1 = threadId(589).useStateFromStores(items1, () => outer1_3.getChannel(stateFromStores.parent_id));
  const obj2 = threadId(589);
  const tmp = threadId;
  const tmp4 = stateFromStores;
  const firstForumPostMessage = threadId(5860).useFirstForumPostMessage(stateFromStores);
  ({ firstMessage, loaded } = firstForumPostMessage);
  threadId(8343);
  if (loaded) {
    obj = { style: null, children: null };
    obj[0] = style;
    obj = { thread: null, parentChannel: null, firstMessage: null, messageContent: null, media: null, hasUnreads: true, isNew: false, firstMessageLoaded: null, isLocalDeviceMedia: true };
    obj[0] = stateFromStores;
    obj[1] = stateFromStores1;
    obj[2] = firstMessage;
    obj[3] = tmp10;
    obj[4] = localDeviceMedia;
    obj[7] = loaded;
    obj[1] = callback(tmp4(11346), obj);
    tmp5 = callback(tmp(11345).ForumPostDisabledContainer, obj);
  }
  return tmp5;
};