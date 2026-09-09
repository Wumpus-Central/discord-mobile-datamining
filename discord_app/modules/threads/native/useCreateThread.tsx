// === Module 10287: useCreateThread ===

// Module 10287 (useCreateThread)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7176 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7470 */;
import MessageParserDefault from "MessageParser" /* 7696 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9339 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 9341 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const DraftType = fn(4915).DraftType;
const MessageSendLocation = fn(4567).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  analyticsLocations(9337);
  let obj = {
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler(id, attachmentsToUpload, arg2) {
      const guildId = id;
      const uploads = attachmentsToUpload;
      let obj = {
        location: constants.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          let obj = { file, guildId: guildId.getGuildId(), analyticsLocations, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj)) {
            obj = { channelId: guildId.id, uploads, draftType: DraftType.FirstThreadMessage, resetState: true };
            UploadAttachmentActionCreatorsDefault.setUploads(obj);
          }
        }
      };
      obj.sendMessage(id.id, MessageParserDefault.parse(id, arg2), undefined, obj);
    }
  };
  return obj.useCreateThreadCommon(obj);
};
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(7176)().analyticsLocations;
  _require = asyncGeneratorStep(async (arg0) => {
    const guildId = arg0;
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      analyticsLocations = tmp4;
      closure_129_0 = guildId;
      const obj7 = new analyticsLocations(7853)();
      closure_129_1 = obj7;
      const kestrelConfig = guildId(5193).getKestrelConfig({ location: "native.useCreateForumPost" });
      const maxFileSizeResult = guildId(5148).maxFileSize(guildId.getGuildId());
      closure_129_2 = maxFileSizeResult;
      const effectiveKestrelLimit = guildId(5193).getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_1_3) {
          analyticsLocations.cancel();
          analyticsLocations(9339);
          let obj = { channelId: uploads.id, uploads, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
          obj.setUploads(obj);
          obj = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: uploads.getGuildId(), analyticsLocations };
          analyticsLocations(9342)(obj);
          const tmp10 = analyticsLocations(9342);
        }
      });
      await obj7.uploadFiles(guildId);
      closure_129_4 = value;
      return { uploaderFile: closure_129_1._file, files: closure_129_4 };
    })();
  });
  const items = [analyticsLocations, parentChannel];
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  require("ThreadCreationHooks");
  let obj = { parentChannel, name: null, appliedTags: null, analyticsLocations: null, onThreadCreated: null, upload: null };
  let str;
  if (threadSettings != null) {
    str = threadSettings.name;
  }
  if (str == null) {
    str = "";
  }
  obj.name = str;
  obj.appliedTags = appliedTags;
  obj.analyticsLocations = analyticsLocations;
  obj.onThreadCreated = onThreadCreated;
  obj.upload = callback;
  return obj.useCreateForumPostCommon(obj);
};