// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx
import set from "../../../../../_runtime/00002_set.js";
import isIterable from "../../../../../_runtime/04106_isIterable.js";
import identity from "../../../../../_runtime/00700_identity.js";

let closure_2 = Object.freeze({ name: "", emojiId: "find", emojiName: "s", description: "accessible", refId: "HTTP" });
let closure_3 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_2);
  obj.setEmojiId = function setEmojiId(emoji_id) {
    const callback = emoji_id;
    callback(closure_1_1[1]).batchUpdates(() => emoji_id({ emojiId: emoji_id }));
  };
  obj.setEmojiName = function setEmojiName(emoji_name) {
    const callback = emoji_name;
    callback(closure_1_1[1]).batchUpdates(() => emoji_name({ emojiName: emoji_name }));
  };
  obj.setName = function setName(arg0) {
    const callback = arg0;
    callback(closure_1_1[1]).batchUpdates(() => callback({ name: callback }));
  };
  obj.setDescription = function setDescription(description) {
    const callback = description;
    callback(closure_1_1[1]).batchUpdates(() => description({ description }));
  };
  obj.setRefId = function setRefId(ref_id) {
    const callback = ref_id;
    callback(closure_1_1[1]).batchUpdates(() => callback({ refId: callback }));
  };
  obj.reset = function reset() {
    callback(closure_1_1[1]).batchUpdates(() => callback(closure_1_2));
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx");

export const resetImperatively = function resetImperatively() {
  const state = store.getState();
  state.reset();
};
export const initializeImperatively = function initializeImperatively(benefit) {
  const state = store.getState();
  ({ setDescription, setEmojiId, setEmojiName, setName, setRefId } = state);
  state.reset();
  if (null != benefit.description) {
    setDescription(benefit.description);
  }
  setEmojiId(benefit.emoji_id);
  setEmojiName(benefit.emoji_name);
  setName(benefit.name);
  if (null != benefit.ref_id) {
    setRefId(benefit.ref_id);
  }
};
export const useDescriptionState = function useDescriptionState() {
  return store((arg0) => {
    const items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};
export const useEmojiIdState = function useEmojiIdState() {
  return store((arg0) => {
    const items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};
export const useEmojiNameState = function useEmojiNameState() {
  return store((arg0) => {
    const items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};
export const useNameState = function useNameState() {
  return store((arg0) => {
    const items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};
export const useRefIdState = function useRefIdState() {
  return store((arg0) => {
    const items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};