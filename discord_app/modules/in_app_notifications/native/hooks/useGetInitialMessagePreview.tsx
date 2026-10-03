// discord_app/modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import isForwardMessageDefault from "../../../forwarding/isForwardMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";

require = fn;
const MessageSnapshotRecord = fn(4520).MessageSnapshotRecord;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = c.c(4);
      message = message.message;
      if (cResult[0] !== message) {
        const tmp8 = new MessageRecord(message);
        tmp8.attachments = [];
        tmp8.stickerItems = [];
        if (tmp8.embeds.length <= 0) {
          if (!isForwardMessageDefault(message)) {
            cResult[0] = message;
            cResult[1] = tmp8;
            let tmp3 = tmp8;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function f(message) {
                const obj = { message: null };
                message = message.message;
                obj.message = message.merge({ attachments: [], embeds: [], stickerItems: [] });
                return new MessageSnapshotRecord(obj);
              };
              cResult[3] = fn2;
              let tmp14 = fn2;
            } else {
              tmp14 = cResult[3];
            }
            const messageSnapshots = tmp8.messageSnapshots;
            tmp8.messageSnapshots = messageSnapshots.map(tmp14);
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function u(image) {
              return null == image.image && null == image.thumbnail;
            };
            cResult[2] = fn;
            let tmp11 = fn;
          } else {
            tmp11 = cResult[2];
          }
          const embeds = tmp8.embeds;
          tmp8.embeds = embeds.filter(tmp11);
        }
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (message) => {
      message = message.message;
      const items = [message];
      return noop.useMemo(() => {
        const tmp2 = new MessageRecord(message);
        tmp2.attachments = [];
        tmp2.stickerItems = [];
        if (tmp2.embeds.length > 0) {
          const embeds = tmp2.embeds;
          tmp2.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
        }
        if (isForwardMessageDefault(message)) {
          const messageSnapshots = tmp2.messageSnapshots;
          tmp2.messageSnapshots = messageSnapshots.map((message) => {
            const obj = { message: null };
            message = message.message;
            obj.message = message.merge({ attachments: [], embeds: [], stickerItems: [] });
            return new closure_1_5(obj);
          });
        }
        return tmp2;
      }, items);
    };
