// discord_app/modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
import ObscuredMediaUtils from "../ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../ExplicitMediaRedactionModels.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRedactableMediaAttachmentsForMessage(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      closure_2 = arg2;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_2];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
        }
        const stateFromStores = tmp(573).useStateFromStores(first, tmp6);
        const tmpResult = tmp(573);
        const enabledHarmTypesBitmaskForMessage = tmp(11420).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
        if (null == stateFromStores) {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [];
            cResult[4] = items1;
            let tmp16 = items1;
          } else {
            tmp16 = cResult[4];
          }
          return tmp16;
        } else {
          if (cResult[5] === enabledHarmTypesBitmaskForMessage) {
            if (cResult[6] === arg2) {
              if (cResult[8] === cResult[7]) {
                let attachments;
                if (stateFromStores != null) {
                  attachments = stateFromStores.attachments;
                }
                if (cResult[9] === attachments) {
                  let tmp14 = cResult[10];
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
              cResult[8] = cResult[7];
              let attachments2;
              if (stateFromStores != null) {
                attachments2 = stateFromStores.attachments;
              }
              cResult[9] = attachments2;
              cResult[10] = found;
              tmp14 = found;
            }
          }
          const tmp11 =
            undefined !== arg2
              ? (url) => url.url === closure_2 || url.id === tmp
              : (media) => {
                  const obj = ObscuredMediaUtils;
                  return obj.isMediaObscuredForHarmTypes(
                    { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media },
                    enabledHarmTypesBitmaskForMessage,
                  );
                };
          cResult[5] = enabledHarmTypesBitmaskForMessage;
          cResult[6] = arg2;
          cResult[7] = tmp11;
        }
        const tmpResult2 = tmp(11420);
      }
      const fn = function u() {
        return MessageStore.getMessage(closure_0, closure_1);
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : function useRedactableMediaAttachmentsForMessage(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      closure_2 = arg2;
      const items = [closure_2];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        MessageStore.getMessage(closure_0, closure_1),
      );
      let obj = require("useStateFromStores");
      closure_3 = require("useContentHarmTypes").useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
      const obj2 = require("useContentHarmTypes");
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx",
);

export const useRedactableMediaAttachmentsForMessage = tmp2;
export const useRedactableMediaEmbedsForMessage = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRedactableMediaEmbedsForMessage(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      closure_2 = arg2;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_2];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
        }
        const stateFromStores = tmp(573).useStateFromStores(first, tmp6);
        const tmpResult = tmp(573);
        const enabledHarmTypesBitmaskForMessage = tmp(11420).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
        if (null == stateFromStores) {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [];
            cResult[4] = items1;
            let tmp16 = items1;
          } else {
            tmp16 = cResult[4];
          }
          return tmp16;
        } else {
          if (cResult[5] === arg2) {
            if (cResult[6] === enabledHarmTypesBitmaskForMessage) {
              if (cResult[8] === cResult[7]) {
                let embeds;
                if (stateFromStores != null) {
                  embeds = stateFromStores.embeds;
                }
                if (cResult[9] === embeds) {
                  let tmp14 = cResult[10];
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
              cResult[8] = cResult[7];
              let embeds2;
              if (stateFromStores != null) {
                embeds2 = stateFromStores.embeds;
              }
              cResult[9] = embeds2;
              cResult[10] = found;
              tmp14 = found;
            }
          }
          const tmp11 =
            undefined !== arg2
              ? (id) => id.id === closure_2
              : (media) => {
                  const obj = ObscuredMediaUtils;
                  return obj.isMediaObscuredForHarmTypes(
                    { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media },
                    enabledHarmTypesBitmaskForMessage,
                  );
                };
          cResult[5] = arg2;
          cResult[6] = enabledHarmTypesBitmaskForMessage;
          cResult[7] = tmp11;
        }
        const tmpResult2 = tmp(11420);
      }
      const fn = function u() {
        return MessageStore.getMessage(closure_0, closure_1);
      };
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : function useRedactableMediaEmbedsForMessage(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      closure_2 = arg2;
      const items = [closure_2];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        MessageStore.getMessage(closure_0, closure_1),
      );
      let obj = require("useStateFromStores");
      closure_3 = require("useContentHarmTypes").useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
      const obj2 = require("useContentHarmTypes");
    };
