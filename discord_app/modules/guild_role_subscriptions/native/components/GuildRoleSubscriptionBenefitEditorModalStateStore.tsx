// === Module 18516: GuildRoleSubscriptionBenefitEditorModalStateStore ===

// Module 18516 (GuildRoleSubscriptionBenefitEditorModalStateStore)
import c from "c" /* 576 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1272 */;
import _mod4733 from "module_4733" /* 4733 */;
import identity from "module_1267" /* 1267 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = Object.freeze({ name: "", emojiId: "code", emojiName: "Map", description: "transform", refId: "apply" });
let closure_3 = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_2);
  obj.setEmojiId = function setEmojiId(emoji_id) {
    const emojiId = emoji_id;
    emojiId(1272).batchUpdates(() => emojiId({ emojiId }));
  };
  obj.setEmojiName = function setEmojiName(emoji_name) {
    const emojiName = emoji_name;
    emojiName(1272).batchUpdates(() => emojiName({ emojiName }));
  };
  obj.setName = function setName(name) {
    name(1272).batchUpdates(() => name({ name }));
  };
  obj.setDescription = function setDescription(description) {
    description(1272).batchUpdates(() => description({ description }));
  };
  obj.setRefId = function setRefId(ref_id) {
    const refId = ref_id;
    refId(1272).batchUpdates(() => refId({ refId }));
  };
  obj.reset = function reset() {
    ReactBatchUpdates.batchUpdates(() => closure_1_0(closure_2_2));
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDescriptionState() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ description: arr[0], setDescription: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4733.shallow);
}) : (function useDescriptionState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, _mod4733.shallow);
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiIdState() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4733.shallow);
}) : (function useEmojiIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, _mod4733.shallow);
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiNameState() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4733.shallow);
}) : (function useEmojiNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, _mod4733.shallow);
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNameState() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ name: arr[0], setName: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4733.shallow);
}) : (function useNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, _mod4733.shallow);
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
export const useDescriptionState = tmp2;
export const useEmojiIdState = tmp3;
export const useEmojiNameState = tmp4;
export const useNameState = tmp5;
export const useRefIdState = ReactCompilerGating.isReactCompilerEnabled() ? (function useRefIdState() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ refId: arr[0], setRefId: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4733.shallow);
}) : (function useRefIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, _mod4733.shallow);
});