// === Module 10380: ForumComposerModalActionCreators ===

// Module 10380 (ForumComposerModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import tracking_Tracking from "tracking/Tracking" /* 7869 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const result = tracking_Tracking.trackMobileForumComposerOpened({ guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject });
  if (!tmp4) {
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = tracking_Tracking.trackForumCreateNewPostStarted({ guildId: null, channelId: null });
    const obj3 = { guildId: null, channelId: null };
    const tmpResult = tracking_Tracking;
  }
  const obj2 = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  tmp4 = null != guildId.isEdit && guildId.isEdit;
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10381, dependencyMap.paths), guildId, c3);
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