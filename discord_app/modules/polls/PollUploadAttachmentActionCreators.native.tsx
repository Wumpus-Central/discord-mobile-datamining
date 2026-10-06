// === Module 11847: PollUploadAttachmentActionCreators ===

// Module 11847 (PollUploadAttachmentActionCreators)
import DraftStore from "DraftStore" /* 7044 */;
import PollsConstants from "PollsConstants" /* 7468 */;
import FileManagerUtils from "FileManagerUtils" /* 7887 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8842 */;
import PollAttachmentUtils from "PollAttachmentUtils" /* 11848 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, file, styles, writeFileResult;

let obj = function _handlePollGifAttachmentAdd() {
  obj = _asyncToGenerator(async (channelId, id, filename) => {
    let closure_4;
    let closure_5;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let height;
      let obj17;
      let width;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp36;
        let c6;
        try {
          let closure_3;
          let filePathForGif;
          c8 = 2;
          if (0 === file) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              filename = undefined;
              closure_3 = undefined;
              filePathForGif = undefined;
              tmp36 = undefined;
              styles = undefined;
              const obj16 = PollAttachmentUtils;
              filename = obj16.getFileNameFromGifUrl(id, filename);
              c6 = 1;
              file = 2;
              c8 = 1;
              const obj4 = { value: obj17.downloadPollGif(filename), done: false };
              obj17 = PollAttachmentUtils;
              return obj4;
            }
          } else if (1 === file) {
            c6 = 0;
            c8 = 3;
            return { value: "IconComponent", done: null };
          } else if (2 === file) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              if (null == closure_3) {
                c6 = 0;
                c8 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const obj9 = closure_132_0(closure_132_2[3]);
                filePathForGif = obj9.getFilePathForGif(filename);
                const obj10 = closure_132_0(closure_132_2[4]);
                writeFileResult = obj10.writeFile("cache", filePathForGif, closure_3, "base64");
                file = 3;
                c8 = 1;
                return { value: writeFileResult, done: false };
              }
            }
          } else if (3 === file) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              tmp36 = value;
              if (null == tmp36) {
                c6 = 0;
                c8 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const obj6 = closure_132_0(closure_132_2[5]);
                writeFileResult = obj6.getImageDimensionsIfMissing(tmp36);
                file = 4;
                c8 = 1;
                return { value: writeFileResult, done: false };
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            styles = value;
            writeFileResult = { id, origin: closure_132_0(closure_132_2[6]).UploadOrigin.IMAGE_PICKER, uri: tmp36, originalUri: tmp36, filename, mimeType: "image/gif", width, height, platform: closure_132_0(closure_132_2[7]).UploadPlatform.REACT_NATIVE };
            width = undefined;
            if (styles != null) {
              width = styles.width;
            }
            height = undefined;
            if (styles != null) {
              height = styles.height;
            }
            file = writeFileResult;
            const obj13 = { file, channelId, draftType: closure_132_4.Poll };
            obj = closure_132_1(closure_132_2[8]);
            obj.addFile(obj13);
            writeFileResult = tmp36;
            c6 = 0;
            c8 = 3;
            return { value: writeFileResult, done: true };
          }
        } catch (tmp36) {
          if (0 === c6) {
            c8 = 3;
            throw tmp36;
          } else {
            file = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _removePollUploadAttachment() {
  let Poll;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c6 = 1;
            const obj5 = UploadAttachmentActionCreatorsDefault;
            obj5.remove(closure_0, closure_1, Poll.Poll);
            const removeFile = FileManagerUtils.removeFile;
            c4 = 2;
            c3 = 1;
            const obj4 = { value: removeFile("cache", obj6.getFilePathForGif(closure_2)), done: false };
            obj6 = PollAttachmentUtils;
            return obj4;
          }
        } else {
          if (1 === tmp3) {
            c6 = 0;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp5) {
        let closure_5 = tmp5;
        if (0 === c6) {
          c3 = 3;
          throw tmp5;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _removeAllPollUploadAttachments() {
  let Poll;
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c4 = 1;
            const obj2 = UploadAttachmentActionCreatorsDefault;
            obj2.clearAll(closure_0, Poll.Poll);
            c2 = 2;
            c1 = 1;
            const obj6 = { value: obj3.clearFolder("cache", POLL_ATTACHMENT_FOLDER), done: false };
            obj3 = FileManagerUtils;
            return obj6;
          }
        } else {
          if (1 === tmp3) {
            c4 = 0;
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        let closure_3 = tmp12;
        if (0 === c4) {
          c1 = 3;
          throw tmp12;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const DraftType = DraftStore.DraftType;
const POLL_ATTACHMENT_FOLDER = PollsConstants.POLL_ATTACHMENT_FOLDER;
const result = size.fileFinishedImporting("modules/polls/PollUploadAttachmentActionCreators.native.tsx");

export const handlePollGifAttachmentAdd = function handlePollGifAttachmentAdd() {
  return obj(...arguments);
};
export function handlePollMediaAttachmentAdd() {

}
export const removePollUploadAttachment = function removePollUploadAttachment() {
  return obj(...arguments);
};
export const removeAllPollUploadAttachments = function removeAllPollUploadAttachments() {
  return obj(...arguments);
};