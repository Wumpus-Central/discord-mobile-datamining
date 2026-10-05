// === Module 10064: useCreateThread ===

// Module 10064 (useCreateThread)
import MessageConstants from "MessageConstants" /* 4883 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import DraftStore from "DraftStore" /* 7031 */;
import MessageParserDefault from "MessageParser" /* 7166 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8812 */;
import handleUploadAttachmentErrors from "handleUploadAttachmentErrors" /* 8814 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let files;

const DraftType = DraftStore.DraftType;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let analyticsLocations;
  let onThreadCreated;
  let parentChannel;
  let parentMessageId;
  let privateThreadMode;
  let threadSettings;
  let tmp4;
  let useDefaultThreadName;
  const tmp = analyticsLocations;
  let obj = analyticsLocations(576);
  const cResult = obj.c(11);
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] !== analyticsLocations) {
    const fn = function n(id, attachmentsToUpload, arg2) {
      const guildId = id;
      const uploads = attachmentsToUpload;
      id = id.id;
      const sendMessage = MessageActionCreatorsDefault.sendMessage;
      MessageActionCreatorsDefault;
      let obj = MessageParserDefault;
      let obj2 = {
        location: constants.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          const obj = handleUploadAttachmentErrors;
          const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj2)) {
            const obj4 = { channelId: guildId.id, uploads, draftType: DraftType.FirstThreadMessage, resetState: true };
            const obj3 = UploadAttachmentActionCreatorsDefault;
            obj3.setUploads(obj4);
          }
        }
      };
      sendMessage(id, obj.parse(id, arg2), undefined, obj2);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    tmp4 = fn;
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
                let tmp5;
                if (cResult[9] === useDefaultThreadName) {
                  tmp5 = cResult[10];
                }
                const tmpResult = tmp(8810);
                return tmpResult.useCreateThreadCommon(tmp5);
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
}) : ((arg0) => {
  let _location;
  let onThreadCreated;
  let parentChannel;
  let parentMessageId;
  let privateThreadMode;
  let threadSettings;
  let useDefaultThreadName;
  ({ parentChannel, parentMessageId, threadSettings, privateThreadMode, location: _location, onThreadCreated, useDefaultThreadName } = arg0);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj = analyticsLocations(8810);
  let obj2 = {
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
      id = id.id;
      const sendMessage = MessageActionCreatorsDefault.sendMessage;
      MessageActionCreatorsDefault;
      let obj = MessageParserDefault;
      let obj2 = {
        location: constants.THREAD_CREATION,
        attachmentsToUpload,
        onAttachmentUploadError(file, code, reason) {
          const obj = handleUploadAttachmentErrors;
          const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations, code, reason };
          if (obj.handleUploadMessageAttachmentsErrors(obj2)) {
            const obj4 = { channelId: guildId.id, uploads, draftType: DraftType.FirstThreadMessage, resetState: true };
            const obj3 = UploadAttachmentActionCreatorsDefault;
            obj3.setUploads(obj4);
          }
        }
      };
      sendMessage(id, obj.parse(id, arg2), undefined, obj2);
    }
  };
  return obj.useCreateThreadCommon(obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  let analyticsLocations;
  let appliedTags;
  let onThreadCreated;
  let threadSettings;
  const tmp = parentChannel;
  let obj = parentChannel(576);
  const cResult = obj.c(10);
  parentChannel = parentChannel.parentChannel;
  ({ threadSettings, appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    let tmp4;
    if (cResult[1] === parentChannel) {
      tmp4 = cResult[2];
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
              let tmp6;
              if (cResult[8] === tmp4) {
                tmp6 = cResult[9];
              }
              const tmpResult = tmp(8810);
              return tmpResult.useCreateForumPostCommon(tmp6);
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
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let FirstThreadMessage;
    let closure_1;
    const guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async function(arg0) {
      const self = this;
      const self2 = this;
      const obj7 = new analyticsLocations(closure_2_2[12])();
      const obj8 = guildId(closure_2_2[13]);
      const maxFileSizeResult = obj8.maxFileSize(guildId.getGuildId());
      const obj9 = guildId(closure_2_2[14]);
      const effectiveUploadLimit = obj9.getEffectiveUploadLimit(maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_3) {
          obj7.cancel();
          const obj2 = { channelId: guildId.id, uploads, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
          const obj = obj7(baseMaxSize[10]);
          obj.setUploads(obj2);
          const obj3 = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: guildId.getGuildId(), analyticsLocations };
          const tmp10 = obj7(baseMaxSize[15]);
          tmp10(obj3);
        }
      });
      await obj7.uploadFiles(guildId);
      files = value;
      let obj = { uploaderFile: obj7._file, files };
      return obj;
    })();
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = analyticsLocations;
  cResult[1] = parentChannel;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((parentChannel) => {
  let appliedTags;
  let onThreadCreated;
  let str;
  parentChannel = parentChannel.parentChannel;
  const threadSettings = parentChannel.threadSettings;
  let analyticsLocations;
  ({ appliedTags, onThreadCreated } = parentChannel);
  analyticsLocations = analyticsLocations(6657)().analyticsLocations;
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let FirstThreadMessage;
    let closure_1;
    const guildId = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async function(arg0) {
      const self = this;
      const self2 = this;
      const obj7 = new analyticsLocations(closure_2_2[12])();
      const obj8 = guildId(closure_2_2[13]);
      const maxFileSizeResult = obj8.maxFileSize(guildId.getGuildId());
      const obj9 = guildId(closure_2_2[14]);
      const effectiveUploadLimit = obj9.getEffectiveUploadLimit(maxFileSizeResult);
      obj7.on("progress", (currentSize) => {
        if (currentSize.currentSize > closure_3) {
          obj7.cancel();
          const obj2 = { channelId: guildId.id, uploads, draftType: FirstThreadMessage.FirstThreadMessage, resetState: true };
          const obj = obj7(baseMaxSize[10]);
          obj.setUploads(obj2);
          const obj3 = { file: currentSize, maxSize: tmp, baseMaxSize, guildId: guildId.getGuildId(), analyticsLocations };
          const tmp10 = obj7(baseMaxSize[15]);
          tmp10(obj3);
        }
      });
      await obj7.uploadFiles(guildId);
      files = value;
      let obj = { uploaderFile: obj7._file, files };
      return obj;
    })();
  });
  const items = [analyticsLocations, parentChannel];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const tmp2 = parentChannel(8810);
  let obj = { parentChannel, name: str, appliedTags, analyticsLocations, onThreadCreated, upload: callback };
  str = undefined;
  const useCreateForumPostCommon = tmp2.useCreateForumPostCommon;
  if (threadSettings != null) {
    str = threadSettings.name;
  }
  if (str == null) {
    str = "";
  }
  return useCreateForumPostCommon(obj);
});
const result = size.fileFinishedImporting("modules/threads/native/useCreateThread.tsx");

export default tmp2;
export const useCreateForumPost = tmp3;