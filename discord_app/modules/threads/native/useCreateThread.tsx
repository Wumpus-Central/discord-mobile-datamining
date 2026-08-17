// discord_app/modules/threads/native/useCreateThread.tsx
import contextDefault from "context" /* 7139 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { DraftType } from "handleChanged" /* 4825 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4663 */;
import { getIsPrivate } from "../ThreadCreationHooks.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  let analyticsLocations;
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  analyticsLocations = contextDefault().analyticsLocations;
  let obj = analyticsLocations(8463);
  obj = {
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler(id, attachmentsToUpload) {
      closure_0 = id;
      closure_1 = attachmentsToUpload;
      let obj = closure_1_1(closure_1_2[6]);
      obj = {
        location: closure_1_6.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          let obj = analyticsLocations(closure_2_2[8]);
          obj = { file, guildId: guildId.getGuildId(), analyticsLocations: guildId, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj)) {
            obj = { channelId: null, uploads: null, draftType: null, resetState: true };
            obj[0] = guildId.id;
            obj[1] = closure_1;
            obj[2] = closure_2_5.FirstThreadMessage;
            closure_2_1(closure_2_2[9]).setUploads(obj);
            const obj3 = closure_2_1(closure_2_2[9]);
          }
        }
      };
      obj.sendMessage(id.id, closure_1_1(closure_1_2[7]).parse(id, arg2), undefined, obj);
    }
  };
  return obj.useCreateThreadCommon(obj);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let _require = parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      let obj7 = tmp4;
      obj7 = new analyticsLocations(closure_2_2[10])();
      const kestrelConfig = guildId(closure_2_2[11]).getKestrelConfig({ location: "native.useCreateForumPost" });
      const obj8 = guildId(closure_2_2[11]);
      const maxFileSizeResult = guildId(closure_2_2[12]).maxFileSize(guildId.getGuildId());
      const obj9 = guildId(closure_2_2[12]);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > c3) {
          obj7.cancel();
          let obj = closure_2_1(8466);
          obj = { channelId: null, uploads: null, draftType: null, resetState: true };
          obj[0] = guildId.id;
          obj[1] = guildId;
          obj[2] = closure_2_5.FirstThreadMessage;
          obj.setUploads(obj);
          obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null };
          obj[0] = currentSize;
          obj[1] = tmp;
          obj[2] = dependencyMap;
          obj[3] = guildId.getGuildId();
          obj[4] = obj7;
          closure_2_1(8468)(obj);
          const tmp10 = closure_2_1(8468);
        }
      });
      closure_4 = yield obj7.uploadFiles(guildId);
      let obj = { uploaderFile: null, files: null };
      obj[0] = obj7._file;
      obj[1] = closure_4;
      return obj;
    })();
  });
  const items = [analyticsLocations, parentChannel];
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let obj = _getIsPrivate;
  obj = { parentChannel, name: null, appliedTags: null, analyticsLocations: null, onThreadCreated: null, upload: null };
  let str;
  if (threadSettings != null) {
    str = threadSettings.name;
  }
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  obj[2] = appliedTags;
  obj[3] = analyticsLocations;
  obj[4] = onThreadCreated;
  obj[5] = callback;
  return obj.useCreateForumPostCommon(obj);
};