// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = require(7146) /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7146).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7146);
  }
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(9821, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = require(7146) /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = require(7146) /* trackForumChannelSeenBatch */;
  }
  importDefault(4490).popWithKey(c3);
};