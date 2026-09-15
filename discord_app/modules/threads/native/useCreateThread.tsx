// discord_app/modules/threads/native/useCreateThread.tsx
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import MessageParserDefault from "../../messages/MessageParser.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import handleUploadAttachmentErrors from "../../media_uploads/handleUploadAttachmentErrors.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const DraftType = fn(4980).DraftType;
const MessageSendLocation = fn(4632).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default function useCreateThread(arg0) {
  ({
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
  } = arg0);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  return analyticsLocations(9437).useCreateThreadCommon({
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
      let obj = MessageActionCreatorsDefault;
      obj.sendMessage(id.id, MessageParserDefault.parse(id, arg2), undefined, {
        location: constants.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          const obj = handleUploadAttachmentErrors;
          if (obj.handleUploadMessageAttachmentsErrors(obj2)) {
            const obj4 = { channelId: guildId.id, uploads, draftType: DraftType.FirstThreadMessage, resetState: true };
            UploadAttachmentActionCreatorsDefault.setUploads(obj4);
          }
          obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations, code, reason };
        },
      });
    },
  });
}
export const useCreateForumPost = function useCreateForumPost(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(7269)().analyticsLocations;
  _require = asyncGeneratorStep(async (arg0) => {
    const guildId = arg0;
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      analyticsLocations = tmp4;
      closure_129_0 = guildId;
      const obj7 = new analyticsLocations(7944)();
      closure_129_1 = obj7;
      const kestrelConfig = guildId(5264).getKestrelConfig({ location: "native.useCreateForumPost" });
      const maxFileSizeResult = guildId(5218).maxFileSize(guildId.getGuildId());
      closure_129_2 = maxFileSizeResult;
      const effectiveKestrelLimit = guildId(5264).getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_1_3) {
          analyticsLocations.cancel();
          const obj2 = {
            channelId: uploads.id,
            uploads,
            draftType: FirstThreadMessage.FirstThreadMessage,
            resetState: true,
          };
          analyticsLocations(9439).setUploads(obj2);
          const obj3 = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: null, analyticsLocations: null };
          const obj = analyticsLocations(9439);
          obj3.guildId = uploads.getGuildId();
          obj3.analyticsLocations = analyticsLocations;
          analyticsLocations(9442)(obj3);
          const tmp10 = analyticsLocations(9442);
        }
      });
      await obj7.uploadFiles(guildId);
      closure_129_4 = value;
      return { uploaderFile: closure_129_1._file, files: closure_129_4 };
    })();
  });
  const items = [analyticsLocations, parentChannel];
  const callback = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let obj2 = {
    parentChannel,
    name: null,
    appliedTags: null,
    analyticsLocations: null,
    onThreadCreated: null,
    upload: null,
  };
  let str;
  if (threadSettings != null) {
    str = threadSettings.name;
  }
  if (str == null) {
    str = "";
  }
  obj2.name = str;
  obj2.appliedTags = appliedTags;
  obj2.analyticsLocations = analyticsLocations;
  obj2.onThreadCreated = onThreadCreated;
  obj2.upload = callback;
  return require("ThreadCreationHooks").useCreateForumPostCommon(obj2);
};
