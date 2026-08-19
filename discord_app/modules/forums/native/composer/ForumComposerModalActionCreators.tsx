// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";
import trackForumChannelSeenBatch from "../../tracking/Tracking.tsx";

let c3 = "create-forum-post";
let result = obj132.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = trackForumChannelSeenBatch.trackForumCreateNewPostStarted(obj);
    const tmpResult = trackForumChannelSeenBatch;
  }
  _modDef5260.pushLazy(asyncRequireImpl(10166, dependencyMap.paths), guildId, c3);
  tmp4 = null != guildId.isEdit && guildId.isEdit;
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = trackForumChannelSeenBatch.trackMobileForumComposerDismissed();
  }
  _modDef5260.popWithKey(c3);
};