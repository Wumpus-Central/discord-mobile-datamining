// === Module 11688: _handlePollGifAttachmentAdd ===

// Module 11688 (_handlePollGifAttachmentAdd)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { DraftType } from "handleChanged" /* 4807 */;
import { POLL_ATTACHMENT_FOLDER } from "POLL_ATTACHMENT_FOLDER" /* 7506 */;

const require = arg1;
function _handlePollGifAttachmentAdd() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
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
              closure_3 = tmp5;
              dependencyMap = undefined;
              closure_3 = undefined;
              Poll = undefined;
              closure_5 = undefined;
              let styles;
              obj7 = undefined;
              dependencyMap = callback(11689).getFileNameFromGifUrl(callback2, dependencyMap);
              styles = 1;
              const obj16 = callback(11689);
              obj7 = 2;
              c8 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(11689).downloadPollGif(dependencyMap);
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
              closure_3 = arg1;
              if (null == closure_3) {
                styles = 0;
                c8 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                obj7 = callback(11689);
                Poll = obj7.getFilePathForGif(dependencyMap);
                let obj8 = callback(8469);
                obj7 = 3;
                c8 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj8.writeFile("cache", Poll, closure_3, "base64");
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
                obj4 = callback(5034);
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
            obj7[1] = callback(5025).UploadOrigin.IMAGE_PICKER;
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
            obj7[8] = callback(5025).UploadPlatform.REACT_NATIVE;
            obj = callback2(8095);
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
  closure_6 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      c6 = 1;
      callback2(8095).remove(callback, callback2, Poll.Poll);
      const obj5 = callback2(8095);
      const obj6 = callback(8469);
      yield obj6.removeFile("cache", callback(11689).getFilePathForGif(dependencyMap));
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
      return arg1;
    })();
  });
  closure_7 = tmp;
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
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    c4 = 0;
    return (function*(arg0) {
      let Poll = 1;
      obj1 = v0(8095);
      obj1.clearAll(callback, Poll.Poll);
      yield callback(8469).clearFolder("cache", closure_1_5);
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
      return arg1;
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/polls/PollUploadAttachmentActionCreators.native.tsx");

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