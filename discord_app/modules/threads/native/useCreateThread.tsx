// discord_app/modules/threads/native/useCreateThread.tsx
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import trackInviteDefault from "../../../actions/MessageActionCreators.tsx";
import rebuildDefault from "../../messages/MessageParser.tsx";
import dispatcherDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/00019_noop.js";
import { DraftType } from "../../../stores/DraftStore.tsx";
import { MessageSendLocation } from "../../messages/MessageConstants.tsx";
import { getIsPrivate } from "../ThreadCreationHooks.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const analyticsLocations = contextDefault().analyticsLocations;
  analyticsLocations(8463);
  let obj = {
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
      let obj = {
        location: MessageSendLocation.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          analyticsLocations(dependencyMap[8]);
          let obj = { file, guildId: guildId.getGuildId(), analyticsLocations: guildId, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj)) {
            obj = { channelId: null, uploads: null, draftType: null, resetState: true };
            obj[0] = guildId.id;
            obj[1] = closure_1;
            obj[2] = DraftType.FirstThreadMessage;
            dispatcherDefault.setUploads(obj);
          }
        }
      };
      obj.sendMessage(id.id, rebuildDefault.parse(id, arg2), undefined, obj);
    }
  };
  return obj.useCreateThreadCommon(obj);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  const _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      const obj7 = new analyticsLocations(dependencyMap[10])();
      const kestrelConfig = guildId(dependencyMap[11]).getKestrelConfig({ location: "native.useCreateForumPost" });
      const obj8 = guildId(dependencyMap[11]);
      const maxFileSizeResult = guildId(dependencyMap[12]).maxFileSize(guildId.getGuildId());
      const obj9 = guildId(dependencyMap[12]);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > c3) {
          obj7.cancel();
          analyticsLocations(8466);
          let obj = { channelId: null, uploads: null, draftType: null, resetState: true };
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
          analyticsLocations(8468)(obj);
          const tmp10 = analyticsLocations(8468);
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
  getIsPrivate;
  let obj = { parentChannel, name: null, appliedTags: null, analyticsLocations: null, onThreadCreated: null, upload: null };
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