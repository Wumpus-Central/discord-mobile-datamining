// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import tracking_Tracking from "../../tracking/Tracking.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = tracking_Tracking.trackForumCreateNewPostStarted(obj);
    const tmpResult = tracking_Tracking;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10252, dependencyMap.paths), guildId, c3);
  tmp4 = null != guildId.isEdit && guildId.isEdit;
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
