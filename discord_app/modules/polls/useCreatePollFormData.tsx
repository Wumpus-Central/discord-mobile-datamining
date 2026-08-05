// discord_app/modules/polls/useCreatePollFormData.tsx
import useRequest from "useRequest";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";

let c9;
let error;
let metroImportAll;
const require = arg1;
function createPollCreationImageForMedia(mediaURL, status) {
  const mediaAttachmentState = { status, mediaURL };
  return { mediaAttachmentState, emoji: "Array", stickerId: "isArray" };
}
({ MAX_NUMBER_OF_ANSWERS_PER_POLL: error, MIN_NUMBER_OF_ANSWERS_PER_POLL: metroImportAll, PollDurations: c9 } = POLL_ATTACHMENT_FOLDER);
let result = require("noop").fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default function useCreatePollCommonData(id, arg1, arg2, initialQuestion) {
  let closure_11;
  let tmp12;
  let closure_0 = id;
  const importDefault = arg1;
  let closure_2 = arg2;
  let dependencyMap = initialQuestion;
  id = id.id;
  let obj = React;
  const tmp2 = first(React.useState(() => {
    let mapped;
    if (initialQuestion != null) {
      const initialAnswers = initialQuestion.initialAnswers;
      if (initialAnswers != null) {
        mapped = initialAnswers.map((arg0) => {
          const merged = Object.assign(callback(table[4]).generateEmptyPollAnswer());
          const merged1 = Object.assign(arg0);
          return {};
        });
      }
    }
    if (mapped == null) {
      const items = [callback(initialQuestion[4]).generateEmptyPollAnswer(), ];
      const obj = callback(initialQuestion[4]);
      items[1] = callback(initialQuestion[4]).generateEmptyPollAnswer();
      mapped = items;
      const obj2 = callback(initialQuestion[4]);
    }
    return mapped;
  }), 2);
  first = tmp2[0];
  React = tmp2[1];
  let str;
  if (initialQuestion != null) {
    str = initialQuestion.initialQuestion;
  }
  if (str == null) {
    str = "";
  }
  let tmpResult = tmp(React.useState(str), 2);
  const first1 = tmpResult[0];
  let closure_8 = tmp4;
  tmpResult = tmp(obj.useState(false), 2);
  const first2 = tmpResult[0];
  let initialDuration;
  if (initialQuestion != null) {
    initialDuration = initialQuestion.initialDuration;
  }
  if (initialDuration == null) {
    initialDuration = first2.ONE_DAY;
  }
  const tmpResult1 = first(obj.useState(initialDuration), 2);
  const first3 = tmpResult1[0];
  [tmp12, closure_11] = first(obj.useState({}), 2);
  const tmpResult3 = first(obj.useState(false), 2);
  let closure_12 = tmp14;
  const found = first.filter((text) => callback(initialQuestion[4]).isAnswerFilled(text));
  let tmp15 = first1.length > 0;
  const found1 = first.filter((text) => callback(initialQuestion[4]).isIncompleteAnswer(text));
  if (tmp15) {
    tmp15 = found.length >= closure_8;
  }
  if (tmp15) {
    tmp15 = 0 === found1.length;
  }
  const tmpResult2 = first(obj.useState({}), 2);
  const tmpResult4 = first(require("../../hooks/useRequest.tsx")(require("PollsActionCreators.tsx").createPoll), 2);
  const first4 = tmpResult4[0];
  const loading = tmp20.loading;
  let closure_16 = tmp21;
  let closure_17 = tmp22;
  let callback = obj.useCallback((arg0) => {
    callback4((arg0) => {
      const merged = Object.assign(arg0);
      delete tmp[tmp2];
      return {};
    });
    tmp4(arg0);
  }, []);
  const callback1 = obj.useCallback((arg0) => {
    let closure_0;
    let closure_1;
    let closure_2;
    ({ text: closure_0, index: closure_1, localCreationAnswerId: closure_2 } = arg0);
    callback4((arg0) => {
      const merged = Object.assign(arg0);
      const combined = "answer-" + closure_2;
      delete tmp[tmp2];
      return {};
    });
    callback3((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj.text = closure_0;
      items[closure_1] = obj;
      return items;
    });
  }, []);
  const callback2 = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback3((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj.image = closure_0;
      items[closure_1] = obj;
      return items;
    });
  }, []);
  let items = [first];
  const callback3 = obj.useCallback((arg0, arg1, arg2) => {
    const image = tmp.image;
    let mediaAttachmentState;
    if (image != null) {
      mediaAttachmentState = image.mediaAttachmentState;
    }
    let tmp3 = null != mediaAttachmentState;
    if (tmp3) {
      tmp3 = mediaAttachmentState.mediaURL !== arg2;
    }
    if (tmp3) {
      const obj = callback2(initialQuestion[7]);
      const result = obj.removePollUploadAttachment(arg0, tmp.localCreationAnswerId, callback(initialQuestion[8]).getFileNameFromGifUrl(tmp.localCreationAnswerId, mediaAttachmentState.mediaURL));
      const obj2 = callback(initialQuestion[8]);
    }
  }, items);
  closure_0 = undefined;
  closure_0 = id((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let useRequest = tmp2;
              const dependencyMap = tmp3;
              const callback = closure_1;
              closure_1 = callback2;
              outer1_19(callback, closure_1);
              outer1_18(first3(callback2, callback(11503).PollMediaUploadAttachmentStatus.PREPARING), closure_1);
              table = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback2(11501).handlePollGifAttachmentAdd(callback, table[closure_1].localCreationAnswerId, callback2);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (null != arg1) {
              outer1_18(first3(closure_1, callback(11503).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), callback);
            } else {
              outer1_18(first3(closure_1, callback(11503).PollMediaUploadAttachmentStatus.ERROR), callback);
            }
            c6 = 3;
          }
        } catch (tmp25) {
          c6 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  const items1 = [first, callback2, callback3];
  const items2 = [first, callback2, callback3];
  const callback4 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items3 = [id, callback2, callback3];
  const callback5 = obj.useCallback((arg0, arg1, arg2) => {
    const objectURL = URL.createObjectURL(arg2);
    callback3(arg0, arg1);
    let obj = { mediaAttachmentState: null, emoji: "Array", stickerId: "isArray" };
    obj = { status: callback(initialQuestion[9]).PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL };
    obj[0] = obj;
    callback2(obj, arg1);
    const result = callback2(initialQuestion[7]).handlePollMediaAttachmentAdd(arg0, first[arg1].localCreationAnswerId, arg2);
    obj = { mediaAttachmentState: null, emoji: "Array", stickerId: "isArray" };
    const obj3 = callback2(initialQuestion[7]);
    obj[0] = { status: callback(initialQuestion[9]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL };
    callback2(obj, arg1);
  }, items2);
  const callback6 = obj.useCallback((emoji) => {
    callback3(id, arg1);
    callback2({ emoji, stickerId: "Array", mediaAttachmentState: "isArray" }, arg1);
  }, items3);
  const items4 = [first.length < first1];
  const callback7 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    callback3((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_0]);
      obj.image = undefined;
      items[closure_0] = obj;
      return items;
    });
  }, []);
  const items5 = [first.length, first.length > closure_8, id, arg2, callback3];
  const callback8 = obj.useCallback(() => {
    if (closure_16) {
      callback3((arg0) => {
        const items = [...arg0];
        items[tmp] = callback(table[4]).generateEmptyPollAnswer();
        return items;
      });
    }
  }, items4);
  const items6 = [id];
  const callback9 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    if (closure_17) {
      callback3(id, arg0);
      callback3((arg0) => {
        const items = [...arg0];
        items.splice(closure_0, 1);
        return items;
      });
      if (closure_2 != null) {
        const obj = { indexToRemove: null, numberOfAnswers: null };
        obj[0] = arg0;
        obj[1] = first.length;
        tmp7(obj);
      }
    }
  }, items5);
  const effect = obj.useEffect(() => () => {
    const result = outer1_2(outer1_3[7]).removeAllPollUploadAttachments(useRequest);
  }, items6);
  const items7 = [first, first1];
  const callback10 = obj.useCallback(() => {
    let c0 = true;
    let obj = {};
    if (0 === first1.trim().length) {
      c0 = false;
      let intl = callback(initialQuestion[10]).intl;
      obj.question = intl.string(callback(initialQuestion[10]).t.gPX3oI);
    }
    if (first.filter((text) => callback(table[4]).isAnswerFilled(text)).length < closure_8) {
      c0 = false;
      let _HermesInternal = HermesInternal;
      let combined = "answer-" + arr[0].localCreationAnswerId;
      const intl2 = callback(initialQuestion[10]).intl;
      obj[combined] = intl2.string(callback(initialQuestion[10]).t.fYvzEX);
    }
    const item = arr.forEach((localCreationAnswerId) => {
      const obj = callback(outer1_3[4]);
      if (obj.isIncompleteAnswer(localCreationAnswerId)) {
        callback = false;
        const _HermesInternal = HermesInternal;
        const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
        const intl = tmp(tmp2[10]).intl;
        obj[combined] = intl.string(tmp(tmp2[10]).t["8Qqkc+"]);
      }
    });
    callback4(obj);
    tmp14(!c0);
    return c0;
  }, items7);
  const items8 = [first1, found, first2, first3, first4, id, arg1];
  const callback11 = obj.useCallback(id(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj1 = { channel: null, question: null, answers: null, allowMultiSelect: null, duration: null, layout: null, onClose: null };
            obj1[0] = v0;
            obj1[1] = outer1_7;
            obj1[2] = outer1_13;
            obj1[3] = outer1_9;
            obj1[4] = outer1_10;
            obj1[5] = v0(outer1_3[11]).PollLayoutTypes.DEFAULT;
            obj1[6] = c1;
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = outer1_14(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        v0 = tmp;
        throw tmp5;
      }
    }
  }), items8);
  const items9 = [callback11, loading, callback10];
  obj = {
    answers: first,
    question: first1,
    setQuestion: tmp4,
    allowMultiSelect: first2,
    setAllowMultiSelect: tmpResult[1],
    duration: first3,
    setDuration: tmpResult1[1],
    canPost: tmp15,
    canAddMoreAnswers: tmp21,
    canRemoveMoreAnswers: tmp22,
    handleQuestionChange: callback,
    handleAnswerTextChange: callback1,
    handleGifSelect: callback4,
    handleEmojiSelect: callback6,
    handleCustomUpload: callback5,
    handleAddAnswer: callback8,
    handleRemoveAnswer: callback9,
    handleRemoveAnswerImage: callback7,
    fieldErrors: tmp12,
    createPoll: callback11,
    handleSubmitPoll: obj.useCallback(() => {
      let tmp = !loading;
      if (!loading) {
        tmp = callback10();
      }
      if (tmp) {
        callback11();
      }
    }, items9),
    submitting: loading,
    createPollError: tmp20.error,
    shouldFocusOnInvalidField: tmpResult3[0],
    setShouldFocusOnInvalidField: tmp14
  };
  return obj;
};