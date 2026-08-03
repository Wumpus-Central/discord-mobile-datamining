import openImagePickerUnhandled from "openImagePickerUnhandled";
import { DraftType } from "handleChanged";
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER";

const require = arg1;
function _handlePollGifAttachmentAdd() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === obj7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let Poll = tmp3;
              let openImagePickerUnhandled = tmp5;
              let dependencyMap;
              openImagePickerUnhandled = undefined;
              Poll = undefined;
              let closure_5;
              let styles;
              obj7 = undefined;
              dependencyMap = callback(11503).getFileNameFromGifUrl(callback2, dependencyMap);
              styles = 1;
              const obj16 = callback(11503);
              obj7 = 2;
              c8 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(11503).downloadPollGif(dependencyMap);
              return obj1;
            }
          } else if (1 === tmp8) {
            styles = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              styles = 0;
              c8 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              openImagePickerUnhandled = arg1;
              if (null == openImagePickerUnhandled) {
                styles = 0;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                obj7 = callback(11503);
                Poll = obj7.getFilePathForGif(dependencyMap);
                let obj8 = callback(8421);
                obj7 = 3;
                c8 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj8.writeFile("cache", Poll, openImagePickerUnhandled, "base64");
                return obj3;
              }
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              styles = 0;
              c8 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_5 = arg1;
              if (null == closure_5) {
                styles = 0;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                obj4 = callback(4797);
                obj7 = 4;
                c8 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj4.getImageDimensionsIfMissing(closure_5);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            styles = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            styles = arg1;
            obj7 = { id: null, origin: null, uri: null, originalUri: null, filename: null, mimeType: "image/gif", width: null, height: null, platform: null };
            obj7[0] = callback2;
            obj7[1] = callback(4788).UploadOrigin.IMAGE_PICKER;
            obj7[2] = closure_5;
            obj7[3] = closure_5;
            obj7[4] = dependencyMap;
            let width;
            if (styles != null) {
              width = styles.width;
            }
            obj7[6] = width;
            let height;
            if (styles != null) {
              height = styles.height;
            }
            obj7[7] = height;
            obj7[8] = callback(4788).UploadPlatform.REACT_NATIVE;
            obj = callback2(8156);
            obj8 = { file: null, channelId: null, draftType: null };
            obj8[0] = obj7;
            obj8[1] = callback;
            obj8[2] = Poll.Poll;
            obj.addFile(obj8);
            styles = 0;
            c8 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = closure_5;
            return obj9;
          }
        } catch (tmp40) {
          closure_5 = tmp40;
          if (tmp4 === styles) {
            c8 = tmp2;
            throw tmp40;
          } else {
            obj7 = tmp;
          }
        }
      }
    })();
  });
  const _handlePollGifAttachmentAdd = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removePollUploadAttachment() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === Poll) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c6 = 1;
              callback2(8156).remove(callback, callback2, Poll.Poll);
              const obj5 = callback2(8156);
              const obj6 = callback(8421);
              Poll = 2;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj6.removeFile("cache", callback(11503).getFilePathForGif(dependencyMap));
              return obj1;
            }
          } else {
            if (1 === tmp6) {
              c6 = 0;
              c3 = 3;
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 0;
            }
            c6 = 0;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp8) {
          let closure_5 = tmp8;
          if (tmp3 === c6) {
            c3 = tmp2;
            throw tmp8;
          } else {
            Poll = tmp;
          }
        }
      }
    })();
  });
  const _removePollUploadAttachment = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeAllPollUploadAttachments() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let Poll = 1;
              let obj1 = v0(8156);
              obj1.clearAll(callback, Poll.Poll);
              dependencyMap = 2;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(8421).clearFolder("cache", outer1_5);
              return obj1;
            }
          } else {
            if (1 === tmp6) {
              Poll = 0;
              v0 = 3;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              Poll = 0;
            }
            Poll = 0;
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp15) {
          let openImagePickerUnhandled = tmp15;
          if (tmp3 === Poll) {
            v0 = tmp2;
            throw tmp15;
          } else {
            dependencyMap = tmp;
          }
        }
      }
    })();
  });
  const _removeAllPollUploadAttachments = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("POLL_ATTACHMENT_FOLDER").fileFinishedImporting("modules/polls/PollUploadAttachmentActionCreators.native.tsx");

export const handlePollGifAttachmentAdd = function handlePollGifAttachmentAdd(closure_0, localCreationAnswerId, closure_2) {
  const self = this;
  const apply = _handlePollGifAttachmentAdd.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export function handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2) {

}
export const removePollUploadAttachment = function removePollUploadAttachment(arg0, localCreationAnswerId, fileNameFromGifUrl) {
  const self = this;
  const apply = _removePollUploadAttachment.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeAllPollUploadAttachments = function removeAllPollUploadAttachments(closure_4) {
  const self = this;
  const apply = _removeAllPollUploadAttachments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};