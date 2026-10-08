// discord_app/modules/forwarding/ForwardPreviewUtils.tsx
import EmbedUtils from "../../utils/EmbedUtils.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/ForwardPreviewUtils.tsx");

export const useForwardPreviewContent = ReactCompilerGating.isReactCompilerEnabled()
  ? function useForwardPreviewContent(message) {
      const cResult = message(channel[2]).c(20);
      message = message.message;
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
        if (cResult[3] !== onlyAttachmentIds) {
          const fn = function b(id) {
            return onlyAttachmentIds.includes(id.id);
          };
          cResult[3] = onlyAttachmentIds;
          cResult[4] = fn;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[4];
        }
        const attachments1 = message1.attachments;
        const found = attachments1.filter(tmp9);
        cResult[0] = message1.attachments;
        cResult[1] = onlyAttachmentIds;
        cResult[2] = found;
      } else {
        if (null != onlyEmbedIndices) {
          const _Symbol3 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [];
            cResult[5] = items;
            let tmp8 = items;
          } else {
            tmp8 = cResult[5];
          }
          attachments = tmp8;
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [onlyAttachmentIds];
          cResult[6] = items1;
          let tmp14 = items1;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === channel) {
          if (cResult[8] === message) {
            let tmp16 = cResult[9];
          }
          const items2 = [];
          if (tmpResult.useStateFromStores(tmp14, tmp16)) {
            let tmp22 = null != onlyEmbedIndices;
            if (!tmp22) {
              let tmp23 = "" === message1.content;
              if (tmp23) {
                tmp23 = items2.length > 0;
              }
              tmp22 = tmp23;
            }
            if (!tmp22) {
              let tmp27 = "" === message1.content;
              if (tmp27) {
                const first1 = message1.embeds[0];
                let rawDescription;
                if (first1 != null) {
                  rawDescription = first1.rawDescription;
                }
                tmp27 = null != rawDescription;
              }
              if (!tmp27) {
                if (cResult[15] === attachments) {
                  if (cResult[16] === tmp24) {
                    if (cResult[17] === items2) {
                      if (cResult[18] === tmp34) {
                        let tmp35 = cResult[19];
                      }
                      return tmp35;
                    }
                  }
                }
                let obj2 = {
                  attachments,
                  embeds: items2,
                  hasContent: "" !== tmp24.content && null == onlyAttachmentIds,
                  contentMessage: tmp24,
                };
                cResult[15] = attachments;
                cResult[16] = tmp24;
                cResult[17] = items2;
                cResult[18] = "" !== tmp24.content && null == onlyAttachmentIds;
                cResult[19] = obj2;
                tmp35 = obj2;
              } else if (cResult[13] !== message1) {
                const result = message1.set("content", message1.embeds[0].rawDescription);
                cResult[13] = message1;
                cResult[14] = result;
              }
            } else {
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                class S {
                  constructor(arg0) {
                    return message.url;
                  }
                }
                cResult[12] = S;
              } else {
                class S {
                  constructor(arg0) {
                    return message.url;
                  }
                }
              }
              const mapped = items2.map(S);
              const result1 = message1.set("content", mapped.join("\n"));
            }
          } else {
            class S {
              constructor(arg0) {
                return message.url;
              }
            }
            if (null == onlyEmbedIndices) {
              class S {
                constructor(arg0) {
                  return message.url;
                }
              }
            }
            if (cResult[10] !== onlyEmbedIndices) {
              class S {
                constructor(arg0) {
                  return message.url;
                }
              }
              cResult[10] = onlyEmbedIndices;
              cResult[11] = tmp19;
            } else {
              class S {
                constructor(arg0) {
                  return message.url;
                }
              }
            }
            const embeds = message1.embeds;
            const found1 = embeds.filter(tmp19);
          }
          tmpResult = tmp(tmp2[4]);
        }
        const fn2 = function w() {
          let shouldStripEmbedsResult = null != channel;
          if (shouldStripEmbedsResult) {
            shouldStripEmbedsResult = !EmbedUtils.canEmbedLinks(tmp, PermissionStore);
          }
          if (shouldStripEmbedsResult) {
            shouldStripEmbedsResult = EmbedUtils.shouldStripEmbeds(message);
          }
          return shouldStripEmbedsResult;
        };
        cResult[7] = channel;
        cResult[8] = message;
        cResult[9] = fn2;
        tmp16 = fn2;
      }
      let obj = message(channel[2]);
      tmp = message;
      tmp2 = channel;
    }
  : function useForwardPreviewContent(message) {
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
      const items = [];
      const items1 = [onlyAttachmentIds];
      if (
        obj.useStateFromStores(items1, () => {
          let shouldStripEmbedsResult = null != dependencyMap;
          if (shouldStripEmbedsResult) {
            shouldStripEmbedsResult = !EmbedUtils.canEmbedLinks(tmp, PermissionStore);
          }
          if (shouldStripEmbedsResult) {
            shouldStripEmbedsResult = EmbedUtils.shouldStripEmbeds(message);
          }
          return shouldStripEmbedsResult;
        })
      ) {
        let tmp6 = null != onlyEmbedIndices;
        if (!tmp6) {
          let tmp7 = "" === message1.content;
          if (tmp7) {
            tmp7 = items.length > 0;
          }
          tmp6 = tmp7;
        }
        let result = message1;
        if (tmp6) {
          const mapped = items.map((url) => url.url);
          result = message1.set("content", mapped.join("\n"));
        }
        let tmp8 = "" === result.content;
        if (tmp8) {
          const first1 = result.embeds[0];
          let rawDescription;
          if (first1 != null) {
            rawDescription = first1.rawDescription;
          }
          tmp8 = null != rawDescription;
        }
        let result1 = result;
        if (tmp8) {
          result1 = result.set("content", result.embeds[0].rawDescription);
        }
        let obj2 = {
          attachments,
          embeds: items,
          hasContent: "" !== result1.content && null == onlyAttachmentIds,
          contentMessage: result1,
        };
        return obj2;
      } else {
        let embeds = message1.embeds;
        if (null != onlyEmbedIndices) {
          const embeds1 = message1.embeds;
          embeds = embeds1.filter((item, index) => onlyEmbedIndices.includes(index));
        } else if (null != onlyAttachmentIds) {
          embeds = [];
        }
      }
    };
