// discord_app/modules/polls/PollUploadAttachmentActionCreators.native.tsx
import FileManagerUtils from "../../utils/FileManagerUtils.android.tsx";
import UploadAttachmentActionCreatorsDefault from "../../actions/UploadAttachmentActionCreators.tsx";
import PollAttachmentUtils from "PollAttachmentUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_6 = async function _handlePollGifAttachmentAdd(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let fileNameFromGifUrl;
          closure_131_3 = undefined;
          let filePathForGif;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          fileNameFromGifUrl = PollAttachmentUtils.getFileNameFromGifUrl(closure_1, closure_2);
          c6 = 1;
          c7 = 2;
          c8 = 1;
          const obj1 = { value: PollAttachmentUtils.downloadPollGif(closure_2), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_131_3 = value;
          if (null == closure_131_3) {
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            let obj7 = closure_132_0(closure_132_2[3]);
            filePathForGif = obj7.getFilePathForGif(fileNameFromGifUrl);
            let obj8 = closure_132_0(closure_132_2[4]);
            c7 = 3;
            c8 = 1;
            const obj3 = { value: obj8.writeFile("cache", filePathForGif, closure_131_3, "base64"), done: false };
            return obj3;
          }
        }
      } else if (3 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_131_5 = value;
          if (null == closure_131_5) {
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            obj4 = closure_132_0(closure_132_2[5]);
            c7 = 4;
            c8 = 1;
            const obj5 = { value: obj4.getImageDimensionsIfMissing(closure_131_5), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_131_6 = value;
        const size = {
          id: closure_131_1,
          origin: closure_132_0(closure_132_2[6]).UploadOrigin.IMAGE_PICKER,
          uri: closure_131_5,
          originalUri: closure_131_5,
          filename: fileNameFromGifUrl,
          mimeType: "image/gif",
          width: null,
          height: null,
          platform: null,
        };
        let width;
        if (closure_131_6 != null) {
          width = closure_131_6.width;
        }
        size.width = width;
        let height;
        if (closure_131_6 != null) {
          height = closure_131_6.height;
        }
        size.height = height;
        size.platform = closure_132_0(closure_132_2[6]).UploadPlatform.REACT_NATIVE;
        closure_131_7 = size;
        obj = closure_132_1(closure_132_2[7]);
        obj7 = { file: closure_131_7, channelId: closure_131_0, draftType: closure_132_4.Poll };
        obj.addFile(obj7);
        c6 = 0;
        c8 = 3;
        obj8 = { value: closure_131_5, done: true };
        return obj8;
      }
    } catch (tmp40) {
      closure_5 = tmp40;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp40;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_7 = async function _removePollUploadAttachment(arg0, arg1) {
  UploadAttachmentActionCreatorsDefault.remove(closure_0, closure_1, Poll.Poll);
  await FileManagerUtils.removeFile("cache", PollAttachmentUtils.getFilePathForGif(closure_2));
  if (1 === tmp6) {
    c6 = 0;
    c3 = 3;
  } else if (arg0 === 1) {
    c3 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    c6 = 0;
  }
  return arg1;
};
let closure_8 = async function _removeAllPollUploadAttachments(arg0, arg1) {
  UploadAttachmentActionCreatorsDefault.clearAll(closure_0, Poll.Poll);
  await FileManagerUtils.clearFolder("cache", POLL_ATTACHMENT_FOLDER);
  if (1 === tmp6) {
    c4 = 0;
    c1 = 3;
  } else if (arg0 === 1) {
    c1 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return arg1;
};
const DraftType = fn(4901).DraftType;
const POLL_ATTACHMENT_FOLDER = fn(7829).POLL_ATTACHMENT_FOLDER;
let size = fn(2);
const result = size.fileFinishedImporting("modules/polls/PollUploadAttachmentActionCreators.native.tsx");

export const handlePollGifAttachmentAdd = function handlePollGifAttachmentAdd() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export function handlePollMediaAttachmentAdd() {}
export const removePollUploadAttachment = function removePollUploadAttachment() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeAllPollUploadAttachments = function removeAllPollUploadAttachments() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
