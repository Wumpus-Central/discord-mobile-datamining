// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import Tracking from "../../tracking/Tracking.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const result = Tracking.trackMobileForumComposerOpened({
    guildId: guildId.guildId,
    channelId: guildId.parentChannelId,
    location: guildId.analyticsLocationObject,
  });
  if (!tmp4) {
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const result1 = Tracking.trackForumCreateNewPostStarted({ guildId: null, channelId: null });
    const obj3 = { guildId: null, channelId: null };
    const tmpResult = Tracking;
  }
  const obj2 = {
    guildId: guildId.guildId,
    channelId: guildId.parentChannelId,
    location: guildId.analyticsLocationObject,
  };
  tmp4 = null != guildId.isEdit && guildId.isEdit;
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9692, dependencyMap.paths), guildId, c3);
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
