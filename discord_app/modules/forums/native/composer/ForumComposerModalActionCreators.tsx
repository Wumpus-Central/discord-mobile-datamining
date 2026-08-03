// === Module 9725: openCreateForumPostModal ===

// Module 9725 (openCreateForumPostModal)
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7134) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7134).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7134);
  }
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(9726, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7134) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7134) /* trackForumChannelSeenBatch */;
  }
  importDefault(4461).popWithKey(c3);
};