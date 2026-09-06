// === Module 12202: useCreatePollFormData ===

// Module 12202 (useCreatePollFormData)
import util from "util" /* 1114 */;
import PollsUtils from "PollsUtils" /* 7761 */;
import PollsActionCreatorsDefault from "PollsActionCreators" /* 11714 */;
import useRequestDefault from "useRequest" /* 12203 */;
import PollUploadAttachmentActionCreatorsAll from "PollUploadAttachmentActionCreators" /* 12204 */;
import PollAttachmentUtils from "PollAttachmentUtils" /* 12205 */;
import PollTypes from "PollTypes" /* 12206 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function createPollCreationImageForMedia(mediaURL, status) {
  let obj = { mediaAttachmentState: null, emoji: "Array", stickerId: "isArray" };
  obj = { status, mediaURL };
  obj.mediaAttachmentState = obj;
  return obj;
}
const PollsConstants = fn(7829);
({ MAX_NUMBER_OF_ANSWERS_PER_POLL: closure_7, MIN_NUMBER_OF_ANSWERS_PER_POLL: closure_8, PollDurations: closure_9 } = PollsConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default function useCreatePollCommonData(id, arg1, arg2, initialQuestion) {
  closure_0 = id;
  importDefault = arg1;
  closure_2 = arg2;
  dependencyMap = initialQuestion;
  id = id.id;
  let obj = noop;
  const tmp2 = answers(noop.useState(() => {
    let mapped;
    if (initialQuestion != null) {
      const initialAnswers = initialQuestion.initialAnswers;
      if (initialAnswers != null) {
        mapped = initialAnswers.map((item) => {
          const merged = Object.assign(closure_1_0(initialQuestion[4]).generateEmptyPollAnswer());
          const merged1 = Object.assign(item);
          return {};
        });
      }
    }
    if (mapped == null) {
      const items = [PollsUtils.generateEmptyPollAnswer(), ];
      items[1] = PollsUtils.generateEmptyPollAnswer();
      mapped = items;
    }
    return mapped;
  }), 2);
  answers = tmp2[0];
  noop = tmp2[1];
  let str;
  if (initialQuestion != null) {
    str = initialQuestion.initialQuestion;
  }
  if (str == null) {
    str = "";
  }
  let tmpResult = tmp(noop.useState(str), 2);
  const first1 = tmpResult[0];
  closure_8 = tmp4;
  tmpResult = tmp(obj.useState(false), 2);
  const first2 = tmpResult[0];
  let initialDuration;
  if (initialQuestion != null) {
    initialDuration = initialQuestion.initialDuration;
  }
  if (initialDuration == null) {
    initialDuration = first2.ONE_DAY;
  }
  const tmpResult1 = answers(obj.useState(initialDuration), 2);
  const first3 = tmpResult1[0];
  const tmpResult2 = answers(obj.useState(), 2);
  const first4 = tmpResult2[0];
  [tmp14, closure_12] = answers(obj.useState({}), 2);
  const tmpResult4 = answers(obj.useState(false), 2);
  closure_13 = tmp16;
  const found = answers.filter((item) => closure_0(initialQuestion[4]).isAnswerFilled(item));
  let tmp17 = first1.length > 0;
  const found1 = answers.filter((item) => closure_0(initialQuestion[4]).isIncompleteAnswer(item));
  if (tmp17) {
    tmp17 = found.length >= closure_8;
  }
  if (tmp17) {
    tmp17 = 0 === found1.length;
  }
  const tmpResult3 = answers(obj.useState({}), 2);
  const tmpResult5 = answers(useRequestDefault(PollsActionCreatorsDefault.createPoll), 2);
  const first5 = tmpResult5[0];
  const loading = tmp22.loading;
  closure_17 = tmp23;
  closure_18 = tmp24;
  const callback = obj.useCallback((arg0) => {
    closure_1_12((arg0) => {
      const merged = Object.assign(arg0);
      delete tmp[tmp2];
      return {};
    });
    closure_8(arg0);
  }, []);
  const callback1 = obj.useCallback((arg0) => {
    ({ text: closure_0, index: closure_1, localCreationAnswerId: closure_2 } = arg0);
    closure_1_12((arg0) => {
      const merged = Object.assign(arg0);
      const combined = "answer-" + closure_1_2;
      delete tmp[tmp2];
      return {};
    });
    closure_6((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1_1]);
      obj.text = text;
      items[closure_1_1] = obj;
      return items;
    });
  }, []);
  const callback2 = obj.useCallback((image, arg1) => {
    closure_1 = arg1;
    closure_6((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_1]);
      obj.image = image;
      items[closure_1] = obj;
      return items;
    });
  }, []);
  let items = [answers];
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
      const obj = PollUploadAttachmentActionCreatorsAll;
      const result = obj.removePollUploadAttachment(arg0, tmp.localCreationAnswerId, PollAttachmentUtils.getFileNameFromGifUrl(tmp.localCreationAnswerId, mediaAttachmentState.mediaURL));
    }
  }, items);
  closure_0 = id(function*(arg0, arg1, arg2) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c6 = 2;
        if (0 === answers) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp2;
            closure_131_0 = closure_1;
            closure_131_1 = closure_2;
            callback3(closure_0, closure_1);
            callback2(first3(closure_2, closure_0(tmp3[9]).PollMediaUploadAttachmentStatus.PREPARING), closure_1);
            answers = 1;
            c6 = 1;
            const obj1 = { value: closure_2(tmp3[7]).handlePollGifAttachmentAdd(closure_0, answers[closure_1].localCreationAnswerId, closure_2), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (null != value) {
            callback2(first3(closure_131_1, closure_0(tmp3[9]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), closure_131_0);
          } else {
            callback2(first3(closure_131_1, closure_0(tmp3[9]).PollMediaUploadAttachmentStatus.ERROR), closure_131_0);
          }
          c6 = 3;
        }
      } catch (tmp25) {
        c6 = tmp;
        throw tmp25;
      }
    }
  });
  const items1 = [answers, callback2, callback3];
  const items2 = [answers, callback2, callback3];
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
    obj = { status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL };
    obj.mediaAttachmentState = obj;
    callback2(obj, arg1);
    const result = PollUploadAttachmentActionCreatorsAll.handlePollMediaAttachmentAdd(arg0, first[arg1].localCreationAnswerId, arg2);
    obj = { mediaAttachmentState: null, emoji: "Array", stickerId: "isArray" };
    obj.mediaAttachmentState = { status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL };
    callback2(obj, arg1);
  }, items2);
  const callback6 = obj.useCallback((emoji, arg1) => {
    callback3(id, arg1);
    callback2({ emoji, stickerId: "Array", mediaAttachmentState: "isArray" }, arg1);
  }, items3);
  const items4 = [answers.length < first1];
  const callback7 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    closure_6((arg0) => {
      const items = [...arg0];
      const obj = {};
      const merged = Object.assign(items[closure_0]);
      obj.image = undefined;
      items[closure_0] = obj;
      return items;
    });
  }, []);
  const items5 = [answers.length, answers.length > closure_8, id, arg2, callback3];
  const callback8 = obj.useCallback(() => {
    if (closure_17) {
      closure_6((arg0) => {
        const items = [...arg0];
        items[tmp] = closure_1_0(initialQuestion[4]).generateEmptyPollAnswer();
        return items;
      });
    }
  }, items4);
  const items6 = [id];
  const callback9 = obj.useCallback((indexToRemove) => {
    closure_0 = indexToRemove;
    if (closure_18) {
      callback3(id, indexToRemove);
      closure_6((arg0) => {
        const items = [...arg0];
        items.splice(closure_0, 1);
        return items;
      });
      if (closure_2 != null) {
        const obj = { indexToRemove, numberOfAnswers: first.length };
        tmp7(obj);
      }
    }
  }, items5);
  const effect = obj.useEffect(() => () => {
    const result = closure_2(closure_3[7]).removeAllPollUploadAttachments(id);
  }, items6);
  const items7 = [answers, first1];
  const callback10 = obj.useCallback(() => {
    c0 = true;
    let obj = {};
    if (0 === first1.trim().length) {
      c0 = false;
      let intl = util.intl;
      obj.question = intl.string(util.t.gPX3oI);
    }
    if (first.filter((item) => c0(7761).isAnswerFilled(item)).length < React6) {
      c0 = false;
      let _HermesInternal = HermesInternal;
      let combined = "answer-" + first[0].localCreationAnswerId;
      const intl2 = util.intl;
      obj[combined] = intl2.string(util.t.fYvzEX);
    }
    const item = first.forEach((localCreationAnswerId) => {
      obj = closure_0(7761);
      if (obj.isIncompleteAnswer(localCreationAnswerId)) {
        c0 = false;
        const _HermesInternal = HermesInternal;
        const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
        const intl = closure_0(1114).intl;
        obj[combined] = intl.string(closure_0(1114).t["8Qqkc+"]);
      }
    });
    closure_1_12(obj);
    closure_13(!c0);
    return c0;
  }, items7);
  const items8 = [first1, found, first2, first3, first4, first5, id, arg1];
  const callback11 = obj.useCallback(id(function*() {
    if (channel === 2) {
      channel = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        channel = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            channel = 3;
            throw value;
          } else if (arg0 === 2) {
            channel = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj1 = { channel, question: first1, answers: found, allowMultiSelect: first2, duration: first3, layout: channel(initialQuestion[11]).PollLayoutTypes.DEFAULT, onClose, scheduledTimestamp: first4 };
            c1 = 1;
            channel = 1;
            const obj2 = { value: first5(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          channel = 3;
          throw value;
        } else if (arg0 === 2) {
          channel = 3;
          obj = { value, done: true };
          return obj;
        } else {
          channel = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        channel = tmp;
        throw tmp5;
      }
    }
  }), items8);
  const items9 = [callback11, loading, callback10];
  obj = {
    answers,
    question: first1,
    setQuestion: tmp4,
    allowMultiSelect: first2,
    setAllowMultiSelect: tmpResult[1],
    duration: first3,
    setDuration: tmpResult1[1],
    scheduledTimestamp: first4,
    setScheduledTimestamp: tmpResult2[1],
    canPost: tmp17,
    canAddMoreAnswers: tmp23,
    canRemoveMoreAnswers: tmp24,
    handleQuestionChange: callback,
    handleAnswerTextChange: callback1,
    handleGifSelect: callback4,
    handleEmojiSelect: callback6,
    handleCustomUpload: callback5,
    handleAddAnswer: callback8,
    handleRemoveAnswer: callback9,
    handleRemoveAnswerImage: callback7,
    fieldErrors: tmp14,
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
    createPollError: tmp22.error,
    shouldFocusOnInvalidField: tmpResult4[0],
    setShouldFocusOnInvalidField: tmp16
  };
  return obj;
};