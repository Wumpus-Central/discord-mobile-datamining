// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../../actions/ModalActionCreators.tsx";
import trackForumChannelSeenBatch from "../../tracking/Tracking.tsx";

let c3 = "create-forum-post";
let result = set.fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = trackForumChannelSeenBatch;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7552).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7552);
  }
  _modDef5265.pushLazy(asyncRequireImpl(10205, dependencyMap.paths), guildId, c3);
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
  _modDef5265.popWithKey(c3);
};