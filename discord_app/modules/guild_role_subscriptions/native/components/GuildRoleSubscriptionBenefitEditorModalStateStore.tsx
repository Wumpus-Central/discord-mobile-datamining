// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod4492 from "../../../../../_runtime/metro/04492__.js";
import identity from "../../../../../_runtime/metro/01254__.js";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = Object.freeze({
  name: "",
  emojiId: "backgroundColor",
  emojiName: "prototype",
  description: "guildId",
  refId: "Array",
});
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
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ description: arr[0], setDescription: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4492.shallow);
    }
  : () =>
      closure_3((arg0) => {
        const items = [,];
        ({ description: arr[0], setDescription: arr[1] } = arg0);
        return items;
      }, _mod4492.shallow);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4492.shallow);
    }
  : () =>
      closure_3((arg0) => {
        const items = [,];
        ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
        return items;
      }, _mod4492.shallow);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4492.shallow);
    }
  : () =>
      closure_3((arg0) => {
        const items = [,];
        ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
        return items;
      }, _mod4492.shallow);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ name: arr[0], setName: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4492.shallow);
    }
  : () =>
      closure_3((arg0) => {
        const items = [,];
        ({ name: arr[0], setName: arr[1] } = arg0);
        return items;
      }, _mod4492.shallow);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx",
);

export const resetImperatively = function resetImperatively() {
  state = closure_3.getState();
  state.reset();
};
export const initializeImperatively = function initializeImperatively(benefit) {
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
};
export const useDescriptionState = tmp2;
export const useEmojiIdState = tmp3;
export const useEmojiNameState = tmp4;
export const useNameState = tmp5;
export const useRefIdState = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ refId: arr[0], setRefId: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4492.shallow);
    }
  : () =>
      closure_3((arg0) => {
        const items = [,];
        ({ refId: arr[0], setRefId: arr[1] } = arg0);
        return items;
      }, _mod4492.shallow);
