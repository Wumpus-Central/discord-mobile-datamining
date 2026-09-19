// === Module 18200: GuildRoleSubscriptionBenefitEditorModalStateStore ===

// Module 18200 (GuildRoleSubscriptionBenefitEditorModalStateStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import _mod4379 from "module_4379" /* 4379 */;
import identity from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

let closure_2 = Object.freeze({ name: "", emojiId: "WireType", emojiName: "scales", description: "done", refId: "toCharArray$esjava$1" });
let closure_3 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_2);
  obj.setEmojiId = function setEmojiId(emoji_id) {
    const emojiId = emoji_id;
    emojiId(1248).batchUpdates(() => emojiId({ emojiId }));
  };
  obj.setEmojiName = function setEmojiName(emoji_name) {
    const emojiName = emoji_name;
    emojiName(1248).batchUpdates(() => emojiName({ emojiName }));
  };
  obj.setName = function setName(name) {
    name(1248).batchUpdates(() => name({ name }));
  };
  obj.setDescription = function setDescription(description) {
    description(1248).batchUpdates(() => description({ description }));
  };
  obj.setRefId = function setRefId(ref_id) {
    const refId = ref_id;
    refId(1248).batchUpdates(() => refId({ refId }));
  };
  obj.reset = function reset() {
    ReactBatchUpdates.batchUpdates(() => closure_1_0(closure_2_2));
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx");

export const resetImperatively = function resetImperatively() {
  const state = closure_3.getState();
  state.reset();
};
export const initializeImperatively = function initializeImperatively(benefit) {
  const state = closure_3.getState();
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
  return closure_3((arg0) => {
    const items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, _mod4379.shallow);
};
export const useEmojiIdState = function useEmojiIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, _mod4379.shallow);
};
export const useEmojiNameState = function useEmojiNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, _mod4379.shallow);
};
export const useNameState = function useNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, _mod4379.shallow);
};
export const useRefIdState = function useRefIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, _mod4379.shallow);
};