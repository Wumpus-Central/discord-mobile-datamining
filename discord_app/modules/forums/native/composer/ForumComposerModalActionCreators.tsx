// === Module 10122: openCreateForumPostModal ===

// Module 10122 (openCreateForumPostModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;
import trackForumChannelSeenBatch from "trackForumChannelSeenBatch" /* 7436 */;

let c3 = "create-forum-post";
let result = set.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = trackForumChannelSeenBatch;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7436).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7436);
  }
  _modDef4675.pushLazy(asyncRequireImpl(10123, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = trackForumChannelSeenBatch.trackMobileForumComposerDismissed();
    const obj = trackForumChannelSeenBatch;
  }
  _modDef4675.popWithKey(c3);
};