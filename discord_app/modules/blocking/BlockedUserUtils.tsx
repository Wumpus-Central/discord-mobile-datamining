import { apply } from "../../../_runtime/00012_apply.js";
// discord_app/modules/blocking/BlockedUserUtils.tsx
import upsertRelationship from "upsertRelationship";

const require = arg1;
const result = require("apply").fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export const filterOutBlockedOrIgnoredUsers = function filterOutBlockedOrIgnoredUsers(mapped, closure_5) {
  let closure_0 = closure_5;
  const found = mapped.filter((channel) => callback(table[1]).isNotNullish(channel));
  return found.filter((id) => {
    if (null != closure_0) {
      let hasItem = closure_0.includes(id.id);
    } else {
      hasItem = outer1_3.isBlockedOrIgnored(id.id);
    }
    return !hasItem;
  });
};
export const filterOutBlockedOrIgnoredUserIds = function filterOutBlockedOrIgnoredUserIds(arr) {
  let closure_0 = arg1;
  return arr.filter((id) => {
    if (null != closure_0) {
      let hasItem = closure_0.includes(id);
    } else {
      hasItem = outer1_3.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
};
export const filterOutStreamsByBlockedOwner = function filterOutStreamsByBlockedOwner(allApplicationStreams) {
  return allApplicationStreams.filter((ownerId) => !blockedOrIgnored.isBlockedOrIgnored(ownerId.ownerId));
};
export const hasBlockedOrIgnoredUserIds = function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs) {
  let closure_0 = blockedOrIgnoredIDs;
  return items.some((id) => {
    if (null != closure_0) {
      let hasItem = closure_0.includes(id);
    } else {
      hasItem = outer1_3.isBlockedOrIgnored(id);
    }
    return hasItem;
  });
};
export const voiceStateHasBlockedUsers = function voiceStateHasBlockedUsers(userId) {
  return blockedOrIgnored.isBlockedOrIgnored(userId.userId);
};
export const filterBlockedUsersFromVoiceStates = function filterBlockedUsersFromVoiceStates(voiceStates) {
  const found = apply(voiceStates).filter((userId) => !blockedOrIgnored.isBlockedOrIgnored(userId.userId));
  const arr = apply(voiceStates);
  return found.keyBy("userId").value();
};