// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import trackForumChannelSeenBatch from "trackForumChannelSeenBatch" /* 7514 */;

let c3 = "create-forum-post";
let result = set.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = trackForumChannelSeenBatch;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7514).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7514);
  }
  _modDef5260.pushLazy(asyncRequireImpl(10166, dependencyMap.paths), guildId, c3);
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
  _modDef5260.popWithKey(c3);
};