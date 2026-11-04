// === Module 20236: GuildRoleSubscriptionBenefitEditorModalStateStore ===

// Module 20236 (GuildRoleSubscriptionBenefitEditorModalStateStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import _mod5056 from "module_5056" /* 5056 */;
import identity from "module_1254" /* 1254 */;
import size from "module_2" /* 2 */;

let closure_2 = Object.freeze({ name: "", emojiId: "id", emojiName: "radii", description: "test", refId: "order" });
let closure_3 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_2);
  obj.setEmojiId = function setEmojiId(emoji_id) {
    const emojiId = emoji_id;
    emojiId(1259).batchUpdates(() => emojiId({ emojiId }));
  };
  obj.setEmojiName = function setEmojiName(emoji_name) {
    const emojiName = emoji_name;
    emojiName(1259).batchUpdates(() => emojiName({ emojiName }));
  };
  obj.setName = function setName(name) {
    name(1259).batchUpdates(() => name({ name }));
  };
  obj.setDescription = function setDescription(description) {
    description(1259).batchUpdates(() => description({ description }));
  };
  obj.setRefId = function setRefId(ref_id) {
    const refId = ref_id;
    refId(1259).batchUpdates(() => refId({ refId }));
  };
  obj.reset = function reset() {
    ReactBatchUpdates.batchUpdates(() => closure_1_0(closure_2_2));
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx");

export function resetImperatively() {
  state = closure_3.getState();
  state.reset();
}
export function initializeImperatively(benefit) {
  state = closure_3.getState();
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
}
export function useDescriptionState() {
  return closure_3((arg0) => {
    items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, _mod5056.shallow);
}
export function useEmojiIdState() {
  return closure_3((arg0) => {
    items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, _mod5056.shallow);
}
export function useEmojiNameState() {
  return closure_3((arg0) => {
    items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, _mod5056.shallow);
}
export function useNameState() {
  return closure_3((arg0) => {
    items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, _mod5056.shallow);
}
export function useRefIdState() {
  return closure_3((arg0) => {
    items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, _mod5056.shallow);
}