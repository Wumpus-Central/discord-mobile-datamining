// discord_app/modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
import ObscuredMediaUtils from "../ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../ExplicitMediaRedactionModels.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      let closure_2 = arg2;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_2];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp6;
        if (cResult[2] === arg1) {
          tmp6 = cResult[3];
        }
        const tmpResult = tmp(573);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        const tmpResult2 = tmp(11316);
        const enabledHarmTypesBitmaskForMessage = tmpResult2.useEnabledHarmTypesBitmaskForMessage(stateFromStores);
        if (null == stateFromStores) {
          let tmp16;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [];
            cResult[4] = items1;
            tmp16 = items1;
          } else {
            tmp16 = cResult[4];
          }
          return tmp16;
        } else {
          if (cResult[5] === enabledHarmTypesBitmaskForMessage) {
            let tmp10;
            if (cResult[6] === arg2) {
              tmp10 = cResult[7];
            }
            if (cResult[8] === tmp10) {
              let tmp14;
              let attachments;
              const tmp12 = cResult[9];
              if (stateFromStores != null) {
                attachments = stateFromStores.attachments;
              }
              if (tmp12 === attachments) {
                tmp14 = cResult[10];
              }
              return tmp14;
            }
            let found;
            if (stateFromStores != null) {
              const attachments1 = stateFromStores.attachments;
              if (attachments1 != null) {
                found = attachments1.filter(tmp10);
              }
            }
            if (found == null) {
              found = [];
            }
            cResult[8] = tmp10;
            let attachments2;
            if (stateFromStores != null) {
              attachments2 = stateFromStores.attachments;
            }
            cResult[9] = attachments2;
            cResult[10] = found;
            tmp14 = found;
          }
          const tmp11 =
            undefined !== arg2
              ? (url) => url.url === closure_2 || url.id === tmp
              : (media) => {
                  const obj = ObscuredMediaUtils;
                  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
                  return obj.isMediaObscuredForHarmTypes(obj2, enabledHarmTypesBitmaskForMessage);
                };
          cResult[5] = enabledHarmTypesBitmaskForMessage;
          cResult[6] = arg2;
          cResult[7] = tmp11;
          tmp10 = tmp11;
        }
      }
      const fn = function u() {
        return MessageStore.getMessage(closure_0, closure_1);
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      let closure_2 = arg2;
      let obj = require("useStateFromStores");
      const items = [closure_2];
      const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(closure_0, closure_1));
      let obj2 = require("useContentHarmTypes");
      let closure_3 = obj2.useEnabledHarmTypesBitmaskForMessage(stateFromStores);
      if (null == stateFromStores) {
        return [];
      } else {
        let found;
        if (stateFromStores != null) {
          const attachments = stateFromStores.attachments;
          if (attachments != null) {
            found = attachments.filter(tmp2);
          }
        }
        if (found == null) {
          found = [];
        }
        return found;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      let closure_2 = arg2;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_2];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp6;
        if (cResult[2] === arg1) {
          tmp6 = cResult[3];
        }
        const tmpResult = require("useStateFromStores");
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        const tmpResult2 = require("useContentHarmTypes");
        const enabledHarmTypesBitmaskForMessage = tmpResult2.useEnabledHarmTypesBitmaskForMessage(stateFromStores);
        if (null == stateFromStores) {
          let tmp16;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [];
            cResult[4] = items1;
            tmp16 = items1;
          } else {
            tmp16 = cResult[4];
          }
          return tmp16;
        } else {
          if (cResult[5] === arg2) {
            let tmp10;
            if (cResult[6] === enabledHarmTypesBitmaskForMessage) {
              tmp10 = cResult[7];
            }
            if (cResult[8] === tmp10) {
              let tmp14;
              let embeds;
              const tmp12 = cResult[9];
              if (stateFromStores != null) {
                embeds = stateFromStores.embeds;
              }
              if (tmp12 === embeds) {
                tmp14 = cResult[10];
              }
              return tmp14;
            }
            let found;
            if (stateFromStores != null) {
              const embeds1 = stateFromStores.embeds;
              if (embeds1 != null) {
                found = embeds1.filter(tmp10);
              }
            }
            if (found == null) {
              found = [];
            }
            cResult[8] = tmp10;
            let embeds2;
            if (stateFromStores != null) {
              embeds2 = stateFromStores.embeds;
            }
            cResult[9] = embeds2;
            cResult[10] = found;
            tmp14 = found;
          }
          const tmp11 =
            undefined !== arg2
              ? (id) => id.id === closure_2
              : (media) => {
                  const obj = ObscuredMediaUtils;
                  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
                  return obj.isMediaObscuredForHarmTypes(obj2, enabledHarmTypesBitmaskForMessage);
                };
          cResult[5] = arg2;
          cResult[6] = enabledHarmTypesBitmaskForMessage;
          cResult[7] = tmp11;
          tmp10 = tmp11;
        }
      }
      const fn = function u() {
        return MessageStore.getMessage(closure_0, closure_1);
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (arg0, arg1, arg2) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      let closure_2 = arg2;
      let obj = require("useStateFromStores");
      const items = [closure_2];
      const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(closure_0, closure_1));
      let obj2 = require("useContentHarmTypes");
      let closure_3 = obj2.useEnabledHarmTypesBitmaskForMessage(stateFromStores);
      if (null == stateFromStores) {
        return [];
      } else {
        let found;
        if (stateFromStores != null) {
          const embeds = stateFromStores.embeds;
          if (embeds != null) {
            found = embeds.filter(tmp2);
          }
        }
        if (found == null) {
          found = [];
        }
        return found;
      }
    };
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx",
);

export const useRedactableMediaAttachmentsForMessage = tmp2;
export const useRedactableMediaEmbedsForMessage = tmp3;
