// === Module 9578: openCreateForumPostModal ===

// Module 9578 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(6082) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(6082).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(6082);
  }
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(9579, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(6082) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(6082) /* trackForumChannelSeenBatch */;
  }
  importDefault(4399).popWithKey(c3);
};