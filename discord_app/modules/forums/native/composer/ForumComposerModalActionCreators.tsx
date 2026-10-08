// === Module 9643: ForumComposerModalActionCreators ===

// Module 9643 (ForumComposerModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import Tracking from "Tracking" /* 7876 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const result = Tracking.trackMobileForumComposerOpened({ guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject });
  if (!tmp4) {
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = Tracking.trackForumCreateNewPostStarted({ guildId: null, channelId: null });
    const obj3 = { guildId: null, channelId: null };
    const tmpResult = Tracking;
  }
  const obj2 = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  tmp4 = null != guildId.isEdit && guildId.isEdit;
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9644, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = Tracking.trackMobileForumComposerDismissed();
  }
  ModalActionCreatorsDefault.popWithKey(c3);
};