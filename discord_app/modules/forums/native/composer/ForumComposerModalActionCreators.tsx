// === Module 10182: ForumComposerModalActionCreators ===

// Module 10182 (ForumComposerModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import Tracking from "Tracking" /* 8196 */;
import size from "module_2" /* 2 */;

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export function openCreateForumPostModal(guildId) {
  const result = Tracking.trackMobileForumComposerOpened({ guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject });
  if (!tmp4) {
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = Tracking.trackForumCreateNewPostStarted({ guildId: null, channelId: null });
    const obj3 = { guildId: null, channelId: null };
    const tmpResult = Tracking;
  }
  const obj2 = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  tmp4 = null != guildId.isEdit && guildId.isEdit;
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10183, dependencyMap.paths), guildId, c3);
}
export function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = Tracking.trackMobileForumComposerDismissed();
  }
  ModalActionCreatorsDefault.popWithKey(c3);
}