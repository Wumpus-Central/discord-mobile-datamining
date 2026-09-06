// === Module 10251: ForumComposerModalActionCreators ===

// Module 10251 (ForumComposerModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import tracking_Tracking from "tracking/Tracking" /* 7767 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = tmp(7767).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7767);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10252, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = tracking_Tracking.trackMobileForumComposerDismissed();
  }
  ModalActionCreatorsDefault.popWithKey(c3);
};