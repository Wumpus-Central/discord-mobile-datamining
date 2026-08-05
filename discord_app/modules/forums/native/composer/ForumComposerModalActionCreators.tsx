// discord_app/modules/forums/native/composer/ForumComposerModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { trackForumChannelSeenBatch } from "../../tracking/Tracking.tsx";
let c3 = "create-forum-post";
let result = require("ForumComposerModal").fileFinishedImporting("modules/forums/native/composer/ForumComposerModalActionCreators.tsx");

export const openCreateForumPostModal = function openCreateForumPostModal(guildId) {
  let obj = trackForumChannelSeenBatch /* trackForumChannelSeenBatch */;
  obj = { guildId: guildId.guildId, channelId: guildId.parentChannelId, location: guildId.analyticsLocationObject };
  const result = obj.trackMobileForumComposerOpened(obj);
  if (!tmp4) {
    obj = { guildId: null, channelId: null };
    ({ guildId: obj4[0], parentChannelId: obj4[1] } = guildId);
    const result1 = tmp(7146).trackForumCreateNewPostStarted(obj);
    const tmpResult = tmp(7146);
  }
  ModalActionCreators.pushLazy(asyncRequireImpl /* asyncRequireImpl */(9821, dependencyMap.paths), guildId, c3);
};
export const closeCreateForumPostModal = function closeCreateForumPostModal() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    const result = trackForumChannelSeenBatch /* trackForumChannelSeenBatch */.trackMobileForumComposerDismissed();
    const obj = trackForumChannelSeenBatch /* trackForumChannelSeenBatch */;
  }
  ModalActionCreators.popWithKey(c3);
};