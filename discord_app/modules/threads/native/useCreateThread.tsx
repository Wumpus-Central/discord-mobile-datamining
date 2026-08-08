// discord_app/modules/threads/native/useCreateThread.tsx
import getIsPrivate from "getIsPrivate";
import noop from "noop";
import { DraftType } from "handleChanged";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import { context } from "../../app_analytics/useAnalyticsLocations.tsx";
import { getIsPrivate } from "../ThreadCreationHooks.tsx";

const require = arg1;
const result = require("handleChanged").fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  let _location;
  let onThreadCreated;
  let parentChannel;
  let parentMessageId;
  let privateThreadMode;
  let threadSettings;
  let useDefaultThreadName;
  let analyticsLocations;
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  analyticsLocations = context().analyticsLocations;
  let obj = analyticsLocations(8354);
  obj = {
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler(id, attachmentsToUpload) {
      let closure_0 = id;
      let closure_1 = attachmentsToUpload;
      let obj = outer1_1(outer1_2[6]);
      obj = {
        location: outer1_6.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          let obj = analyticsLocations(outer2_2[8]);
          obj = { file, guildId: guildId.getGuildId(), analyticsLocations: guildId, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj)) {
            obj = { channelId: null, uploads: null, draftType: null, resetState: true };
            obj[0] = guildId.id;
            obj[1] = closure_1;
            obj[2] = outer2_5.FirstThreadMessage;
            outer2_1(outer2_2[9]).setUploads(obj);
            const obj3 = outer2_1(outer2_2[9]);
          }
        }
      };
      obj.sendMessage(id.id, outer1_1(outer1_2[7]).parse(id, arg2), undefined, obj);
    }
  };
  return obj.useCreateThreadCommon(obj);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  let appliedTags;
  let onThreadCreated;
  parentChannel = parentChannel.parentChannel;
  let _require = parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(5728)().analyticsLocations;
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let obj7 = tmp4;
      obj7 = new analyticsLocations(outer2_2[10])();
      const kestrelConfig = guildId(outer2_2[11]).getKestrelConfig({ location: "native.useCreateForumPost" });
      const obj8 = guildId(outer2_2[11]);
      const maxFileSizeResult = guildId(outer2_2[12]).maxFileSize(guildId.getGuildId());
      const obj9 = guildId(outer2_2[12]);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > c3) {
          obj7.cancel();
          let obj = outer2_1(8357);
          obj = { channelId: null, uploads: null, draftType: null, resetState: true };
          obj[0] = guildId.id;
          obj[1] = guildId;
          obj[2] = outer2_5.FirstThreadMessage;
          obj.setUploads(obj);
          obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null };
          obj[0] = currentSize;
          obj[1] = tmp;
          obj[2] = dependencyMap;
          obj[3] = guildId.getGuildId();
          obj[4] = obj7;
          outer2_1(8359)(obj);
          const tmp10 = outer2_1(8359);
        }
      });
      let noop = yield obj7.uploadFiles(guildId);
      let obj = { uploaderFile: null, files: null };
      obj[0] = obj7._file;
      obj[1] = noop;
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