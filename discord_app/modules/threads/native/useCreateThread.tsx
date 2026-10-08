// === Module 9650: useCreateThread ===

// Module 9650 (useCreateThread)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import MessageParserDefault from "MessageParser" /* 7358 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9201 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 9203 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const DraftType = fn(7232).DraftType;
const MessageSendLocation = fn(5083).MessageSendLocation;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateThread(arg0) {
  const cResult = analyticsLocations(576).c(11);
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    function handleUploads(id, attachmentsToUpload, arg2) {
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
        }
      });
    }
    cResult[0] = analyticsLocations;
    cResult[1] = handleUploads;
    let tmp4 = handleUploads;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === _location) {
      if (cResult[4] === onThreadCreated) {
        if (cResult[5] === parentChannel) {
          if (cResult[6] === parentMessageId) {
            if (cResult[7] === privateThreadMode) {
              if (cResult[8] === threadSettings) {
                if (cResult[9] === useDefaultThreadName) {
                  let tmp5 = cResult[10];
                }
                return tmp(9199).useCreateThreadCommon(tmp5);
              }
            }
          }
        }
      }
    }
  }
  let obj2 = { parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName, uploadHandler: tmp4 };
  cResult[2] = tmp4;
  cResult[3] = _location;
  cResult[4] = onThreadCreated;
  cResult[5] = parentChannel;
  cResult[6] = parentMessageId;
  cResult[7] = privateThreadMode;
  cResult[8] = threadSettings;
  cResult[9] = useDefaultThreadName;
  cResult[10] = obj2;
  tmp5 = obj2;
  let obj = analyticsLocations(576);
  tmp = analyticsLocations;
}) : (function useCreateThread(arg0) {
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  return analyticsLocations(9199).useCreateThreadCommon({
    parentChannel,
    parentMessageId,
    threadSettings,
    privateThreadMode,
    location: _location,
    onThreadCreated,
    useDefaultThreadName,
    uploadHandler: function handleUploads(id, attachmentsToUpload, arg2) {
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
        }
      });
    }
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default tmp2;
export const useCreateForumPost = ReactCompilerGating.isReactCompilerEnabled() ? (function useCreateForumPost(parentChannel) {
  const cResult = require("c").c(10);
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  ({ threadSettings, appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(6841)().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === parentChannel) {
      let tmp4 = cResult[2];
    }
    let str;
    if (threadSettings != null) {
      str = threadSettings.name;
    }
    if (str == null) {
      str = "";
    }
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === appliedTags) {
        if (cResult[5] === onThreadCreated) {
          if (cResult[6] === parentChannel) {
            if (cResult[7] === str) {
              if (cResult[8] === tmp4) {
                let tmp6 = cResult[9];
              }
              return tmp(9199).useCreateForumPostCommon(tmp6);
            }
          }
        }
      }
    }
    let obj2 = { parentChannel, name: str, appliedTags, analyticsLocations, onThreadCreated, upload: tmp4 };
    cResult[3] = analyticsLocations;
    cResult[4] = appliedTags;
    cResult[5] = onThreadCreated;
    cResult[6] = parentChannel;
    cResult[7] = str;
    cResult[8] = tmp4;
    cResult[9] = obj2;
    tmp6 = obj2;
  }
  _require = asyncGeneratorStep(async (arg0) => {
    const guildId = arg0;
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      analyticsLocations = tmp4;
      closure_129_0 = guildId;
      const obj7 = new analyticsLocations(9651)();
      closure_129_1 = obj7;
      const maxFileSizeResult = guildId(7737).maxFileSize(guildId.getGuildId());
      closure_129_2 = maxFileSizeResult;
      const effectiveUploadLimit = guildId(7752).getEffectiveUploadLimit(maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_1_3) {
          analyticsLocations.cancel();
          const obj2 = { channelId: uploads.id, uploads, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
          analyticsLocations(9201).setUploads(obj2);
          const obj3 = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: null, analyticsLocations: null };
          const obj = analyticsLocations(9201);
          obj3.guildId = uploads.getGuildId();
          obj3.analyticsLocations = analyticsLocations;
          analyticsLocations(9204)(obj3);
          const tmp10 = analyticsLocations(9204);
        }
      });
      await obj7.uploadFiles(guildId);
      closure_129_4 = value;
      return { uploaderFile: closure_129_1._file, files: closure_129_4 };
    })();
  });
  function t1() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = analyticsLocations;
  cResult[1] = parentChannel;
  cResult[2] = t1;
  tmp4 = t1;
  let obj = require("c");
  tmp = _require;
}) : (function useCreateForumPost(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(6841)().analyticsLocations;
  _require = asyncGeneratorStep(async (arg0) => {
    const guildId = arg0;
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      analyticsLocations = tmp4;
      closure_129_0 = guildId;
      const obj7 = new analyticsLocations(9651)();
      closure_129_1 = obj7;
      const maxFileSizeResult = guildId(7737).maxFileSize(guildId.getGuildId());
      closure_129_2 = maxFileSizeResult;
      const effectiveUploadLimit = guildId(7752).getEffectiveUploadLimit(maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_1_3) {
          analyticsLocations.cancel();
          const obj2 = { channelId: uploads.id, uploads, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
          analyticsLocations(9201).setUploads(obj2);
          const obj3 = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: null, analyticsLocations: null };
          const obj = analyticsLocations(9201);
          obj3.guildId = uploads.getGuildId();
          obj3.analyticsLocations = analyticsLocations;
          analyticsLocations(9204)(obj3);
          const tmp10 = analyticsLocations(9204);
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
  let obj2 = { parentChannel, name: null, appliedTags: null, analyticsLocations: null, onThreadCreated: null, upload: null };
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
});