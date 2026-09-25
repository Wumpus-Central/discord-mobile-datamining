// discord_app/modules/calls/useCanRing.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import CallStore from "../../stores/CallStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";

const require = globalThis.__r;

const require = fn;
const ChannelTypesSets = fn(1074).ChannelTypesSets;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = function useCanRing(user, selectedVoiceChannelId) {
  _require = user;
  dependencyMap = selectedVoiceChannelId;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const obj = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => AuthenticationStore.getId() === user.id,
  );
  const obj2 = require("initialize");
  const items2 = [RelationshipStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items2, () => RelationshipStore.isFriend(user.id));
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let hasItem = null != type;
  if (hasItem) {
    const CALLABLE = ChannelTypesSets.CALLABLE;
    hasItem = CALLABLE.has(type);
  }
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores1;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.bot;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.system;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.isProvisional;
  }
  if (stateFromStores2) {
    stateFromStores2 = hasItem;
  }
  return stateFromStores2;
};
export const canRingUsersInChannel = function canRingUsersInChannel(channel) {
  const CALLABLE = ChannelTypesSets.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    const call = CallStore.getCall(channel.id);
    return null != call && null != call.messageId && !CallStore.isCallUnavailable(channel.id);
  } else {
    return false;
  }
};
