// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx
import identity from "identity";
import { isIterable } from "../../../../../_runtime/03914_isIterable.js";

let closure_2 = Object.freeze({ name: "", emojiId: "call", emojiName: "r", description: "toCharArray$esjava$1", refId: "accessibilityRole" });
let closure_3 = identity.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_2);
  obj.setEmojiId = function setEmojiId(emoji_id) {
    const callback = emoji_id;
    callback(outer1_1[1]).batchUpdates(() => emoji_id({ emojiId: emoji_id }));
  };
  obj.setEmojiName = function setEmojiName(emoji_name) {
    const callback = emoji_name;
    callback(outer1_1[1]).batchUpdates(() => emoji_name({ emojiName: emoji_name }));
  };
  obj.setName = function setName(arg0) {
    const callback = arg0;
    callback(outer1_1[1]).batchUpdates(() => callback({ name: callback }));
  };
  obj.setDescription = function setDescription(description) {
    const callback = description;
    callback(outer1_1[1]).batchUpdates(() => description({ description }));
  };
  obj.setRefId = function setRefId(ref_id) {
    const callback = ref_id;
    callback(outer1_1[1]).batchUpdates(() => callback({ refId: callback }));
  };
  obj.reset = function reset() {
    callback(outer1_1[1]).batchUpdates(() => callback(outer1_2));
  };
  return obj;
});
const result = require("isIterable").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx");

export const resetImperatively = function resetImperatively() {
  const state = store.getState();
  state.reset();
};
export const initializeImperatively = function initializeImperatively(benefit) {
  let setDescription;
  let setEmojiId;
  let setEmojiName;
  let setName;
  let setRefId;
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