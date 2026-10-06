// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import tracking_Tracking from "../../tracking/Tracking.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3 = "create-forum-post";
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  const obj = tracking_Tracking;
  const obj2 = {
    guildId: guildId.guildId,
    channelId: guildId.parentChannelId,
    location: guildId.analyticsLocationObject,
  };
  const result = obj.trackMobileForumComposerOpened(obj2);
  const tmp4 = null != guildId.isEdit && guildId.isEdit;
  if (!tmp4) {
    const obj3 = { guildId: null, channelId: null };
    ({ guildId: obj4.guildId, parentChannelId: obj4.channelId } = guildId);
    const tmpResult = tracking_Tracking;
    const result1 = tmpResult.trackForumCreateNewPostStarted(obj3);
  }
  const obj5 = ModalActionCreatorsDefault;
  obj5.pushLazy(asyncRequire(10073, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const obj = tracking_Tracking;
    const result = obj.trackMobileForumComposerDismissed();
  }
  const obj2 = ModalActionCreatorsDefault;
  obj2.popWithKey(c3);
};
