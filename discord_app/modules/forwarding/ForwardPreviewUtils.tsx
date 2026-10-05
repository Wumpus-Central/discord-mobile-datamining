// discord_app/modules/forwarding/ForwardPreviewUtils.tsx
import EmbedUtils from "../../utils/EmbedUtils.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let message, set;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let channel;
      let tmp12;
      const tmp = message;
      let obj = message(channel[2]);
      const cResult = obj.c(20);
      message = message.message;
      const tmp2 = channel;
      channel = message.channel;
      const forwardOptions = message.forwardOptions;
      let onlyAttachmentIds;
      if (forwardOptions != null) {
        onlyAttachmentIds = forwardOptions.onlyAttachmentIds;
      }
      let onlyEmbedIndices;
      if (forwardOptions != null) {
        onlyEmbedIndices = forwardOptions.onlyEmbedIndices;
      }
      const first = message.messageSnapshots[0];
      let message1;
      if (first != null) {
        message1 = first.message;
      }
      if (message1 == null) {
        message1 = message;
      }
      let attachments = message1.attachments;
      if (null != onlyAttachmentIds) {
        let tmp10;
        if (cResult[0] === message1.attachments) {
          let tmp9;
          if (cResult[1] === onlyAttachmentIds) {
            tmp9 = cResult[2];
          }
          attachments = tmp9;
        }
        if (cResult[3] !== onlyAttachmentIds) {
          const fn = function b(id) {
            return onlyAttachmentIds.includes(id.id);
          };
          cResult[3] = onlyAttachmentIds;
          cResult[4] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[4];
        }
        const attachments1 = message1.attachments;
        const found = attachments1.filter(tmp10);
        cResult[0] = message1.attachments;
        cResult[1] = onlyAttachmentIds;
        cResult[2] = found;
        tmp9 = found;
      } else if (null != onlyEmbedIndices) {
        let tmp8;
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[5] = items;
          tmp8 = items;
        } else {
          tmp8 = cResult[5];
        }
        attachments = tmp8;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [onlyAttachmentIds];
        cResult[6] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === channel) {
        let tmp14;
        if (cResult[8] === message) {
          tmp14 = cResult[9];
        }
        let items2 = [];
        const tmpResult = tmp(tmp2[4]);
        if (!tmpResult.useStateFromStores(tmp12, tmp14)) {
          let embeds = message1.embeds;
          if (null != onlyEmbedIndices) {
            let tmp15;
            if (cResult[10] !== onlyEmbedIndices) {
              const fn3 = function w(arg0, arg1) {
                return onlyEmbedIndices.includes(arg1);
              };
              cResult[10] = onlyEmbedIndices;
              cResult[11] = fn3;
              tmp15 = fn3;
            } else {
              tmp15 = cResult[11];
            }
            const embeds1 = message1.embeds;
            embeds = embeds1.filter(tmp15);
          } else if (null != onlyAttachmentIds) {
            embeds = [];
          }
          items2 = embeds;
        }
        let tmp16 = null != onlyEmbedIndices;
        if (!tmp16) {
          tmp16 = "" === message1.content && items2.length > 0;
          const tmp17 = "" === message1.content && items2.length > 0;
        }
        let result = message1;
        if (tmp16) {
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor(url) {
                return url.url;
              }
            }
            cResult[12] = S;
          } else {
            class S {
              constructor(url) {
                return url.url;
              }
            }
          }
          set = message1.set;
          const mapped = items2.map(S);
          result = set("content", mapped.join("\n"));
        }
        let tmp20 = "" === result.content;
        if (tmp20) {
          class S {
            constructor(url) {
              return url.url;
            }
          }
          if (tmp21 != null) {
            class S {
              constructor(url) {
                return url.url;
              }
            }
          }
          tmp20 = null != tmp22;
        }
        let tmp23 = result;
        if (tmp20) {
          class S {
            constructor(url) {
              return url.url;
            }
          }
          tmp23 = tmp24;
        }
        if (cResult[15] === attachments) {
          class S {
            constructor(url) {
              return url.url;
            }
          }
        }
        let obj2 = {
          attachments,
          embeds: items2,
          hasContent: "" !== tmp23.content && null == onlyAttachmentIds,
          contentMessage: tmp23,
        };
        cResult[15] = attachments;
        cResult[16] = tmp23;
        cResult[17] = items2;
        cResult[18] = "" !== tmp23.content && null == onlyAttachmentIds;
        cResult[19] = obj2;
      }
      const fn2 = function v() {
        let shouldStripEmbedsResult = null != channel;
        if (shouldStripEmbedsResult) {
          const obj = EmbedUtils;
          shouldStripEmbedsResult = !obj.canEmbedLinks(tmp, PermissionStore);
        }
        if (shouldStripEmbedsResult) {
          const obj2 = EmbedUtils;
          shouldStripEmbedsResult = obj2.shouldStripEmbeds(message);
        }
        return shouldStripEmbedsResult;
      };
      cResult[7] = channel;
      cResult[8] = message;
      cResult[9] = fn2;
      tmp14 = fn2;
    }
  : (message) => {
      let forwardOptions;
      message = message.message;
      ({ channel: dependencyMap, forwardOptions } = message);
      let onlyEmbedIndices;
      let onlyAttachmentIds;
      if (forwardOptions != null) {
        onlyAttachmentIds = forwardOptions.onlyAttachmentIds;
      }
      onlyEmbedIndices = undefined;
      if (forwardOptions != null) {
        onlyEmbedIndices = forwardOptions.onlyEmbedIndices;
      }
      const first = message.messageSnapshots[0];
      let message1;
      if (first != null) {
        message1 = first.message;
      }
      if (message1 == null) {
        message1 = message;
      }
      let attachments = message1.attachments;
      if (null != onlyAttachmentIds) {
        const attachments1 = message1.attachments;
        attachments = attachments1.filter((id) => onlyAttachmentIds.includes(id.id));
      } else if (null != onlyEmbedIndices) {
        attachments = [];
      }
      let items = [];
      let obj = message(504);
      const items1 = [onlyAttachmentIds];
      if (
        !obj.useStateFromStores(items1, () => {
          let shouldStripEmbedsResult = null != dependencyMap;
          if (shouldStripEmbedsResult) {
            const obj = EmbedUtils;
            shouldStripEmbedsResult = !obj.canEmbedLinks(tmp, PermissionStore);
          }
          if (shouldStripEmbedsResult) {
            const obj2 = EmbedUtils;
            shouldStripEmbedsResult = obj2.shouldStripEmbeds(message);
          }
          return shouldStripEmbedsResult;
        })
      ) {
        let embeds = message1.embeds;
        if (null != onlyEmbedIndices) {
          const embeds1 = message1.embeds;
          embeds = embeds1.filter((item, index) => onlyEmbedIndices.includes(index));
        } else if (null != onlyAttachmentIds) {
          embeds = [];
        }
        items = embeds;
      }
      let tmp5 = null != onlyEmbedIndices;
      if (!tmp5) {
        tmp5 = "" === message1.content && items.length > 0;
        const tmp6 = "" === message1.content && items.length > 0;
      }
      let result = message1;
      if (tmp5) {
        set = message1.set;
        const mapped = items.map((url) => url.url);
        result = set("content", mapped.join("\n"));
      }
      let tmp7 = "" === result.content;
      if (tmp7) {
        const first1 = result.embeds[0];
        let rawDescription;
        if (first1 != null) {
          rawDescription = first1.rawDescription;
        }
        tmp7 = null != rawDescription;
      }
      let result1 = result;
      if (tmp7) {
        result1 = result.set("content", result.embeds[0].rawDescription);
      }
      let obj2 = {
        attachments,
        embeds: items,
        hasContent: "" !== result1.content && null == onlyAttachmentIds,
        contentMessage: result1,
      };
      return obj2;
    };
let result = size.fileFinishedImporting("modules/forwarding/ForwardPreviewUtils.tsx");

export const useForwardPreviewContent = tmp2;
