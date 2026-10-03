// discord_app/modules/polls/useCreatePollFormData.tsx
import util from "../../intl/index.native.tsx";
import PollsUtils from "PollsUtils.tsx";
import PollsActionCreatorsDefault from "PollsActionCreators.tsx";
import useRequestDefault from "../../hooks/useRequest.tsx";
import PollUploadAttachmentActionCreatorsAll from "PollUploadAttachmentActionCreators.native.tsx";
import PollAttachmentUtils from "PollAttachmentUtils.tsx";
import PollTypes from "PollTypes.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function createPollCreationImageForMedia(mediaURL, status) {
  const obj = { mediaAttachmentState: { status, mediaURL }, emoji: "Array", stickerId: "cursor" };
  return obj;
}
const PollsConstants = fn(7457);
({ MAX_NUMBER_OF_ANSWERS_PER_POLL: closure_7, MIN_NUMBER_OF_ANSWERS_PER_POLL: closure_8, PollDurations: closure_9 } = PollsConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2, initialAnswers) => {
  _require = id;
  closure_1 = arg1;
  closure_2 = arg2;
  dependencyMap = initialAnswers;
  const cResult = require("c").c(71);
  id = id.id;
  initialAnswers = undefined;
  if (initialAnswers != null) {
    initialAnswers = initialAnswers.initialAnswers;
  }
  if (cResult[0] !== initialAnswers) {
    let initialAnswers1;
    if (initialAnswers != null) {
      initialAnswers1 = initialAnswers.initialAnswers;
    }
    class P {
      constructor() {
        mapped = undefined;
        if (closure_3 != null) {
          initialAnswers = closure_3.initialAnswers;
          if (initialAnswers != null) {
            mapped = initialAnswers.map(() => { ... });
          }
        }
        if (mapped == null) {
          tmp2 = closure_0;
          tmp3 = closure_3;
          obj = closure_0(closure_3[6]);
          items = [, ];
          items[0] = obj.generateEmptyPollAnswer();
          obj2 = closure_0(closure_3[6]);
          items[1] = obj2.generateEmptyPollAnswer();
          mapped = items;
        }
        return mapped;
      }
    }
    cResult[0] = initialAnswers1;
    cResult[1] = P;
    let tmp3 = P;
  } else {
    tmp3 = cResult[1];
  }
  const tmp6 = first(noop.useState(tmp3), 2);
  first = tmp6[0];
  noop = tmp6[1];
  let str;
  if (initialAnswers != null) {
    str = initialAnswers.initialQuestion;
  }
  if (str == null) {
    str = "";
  }
  const tmp5Result = first(noop.useState(str), 2);
  closure_7 = tmp5Result[0];
  closure_8 = tmp5Result[1];
  let obj = require("c");
  constants = first(noop.useState(false), 2)[0];
  let initialDuration;
  if (initialAnswers != null) {
    initialDuration = initialAnswers.initialDuration;
  }
  if (initialDuration == null) {
    initialDuration = constants.ONE_DAY;
  }
  const tmp5Result6 = first(noop.useState(false), 2);
  closure_10 = first(noop.useState(initialDuration), 2)[0];
  const tmp5Result7 = first(noop.useState(initialDuration), 2);
  closure_11 = first(noop.useState(), 2)[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[2] = {};
    class P {
      constructor() {
        mapped = undefined;
        if (closure_3 != null) {
          initialAnswers = closure_3.initialAnswers;
          if (initialAnswers != null) {
            mapped = initialAnswers.map(() => { ... });
          }
        }
        if (mapped == null) {
          tmp2 = closure_0;
          tmp3 = closure_3;
          obj = closure_0(closure_3[6]);
          items = [, ];
          items[0] = obj.generateEmptyPollAnswer();
          obj2 = closure_0(closure_3[6]);
          items[1] = obj2.generateEmptyPollAnswer();
          mapped = items;
        }
        return mapped;
      }
    }
  } else {
    const tmp13 = cResult[2];
  }
  const tmp5Result8 = first(noop.useState(), 2);
  [r10068, closure_12] = first(noop.useState(tmp13), 2);
  const tmp5Result9 = first(noop.useState(tmp13), 2);
  [r10073, tmp16] = first(noop.useState(false), 2);
  if (cResult[3] !== first) {
    const _Symbol = Symbol;
    class P {
      constructor() {
        mapped = undefined;
        if (closure_3 != null) {
          initialAnswers = closure_3.initialAnswers;
          if (initialAnswers != null) {
            mapped = initialAnswers.map(() => { ... });
          }
        }
        if (mapped == null) {
          tmp2 = closure_0;
          tmp3 = closure_3;
          obj = closure_0(closure_3[6]);
          items = [, ];
          items[0] = obj.generateEmptyPollAnswer();
          obj2 = closure_0(closure_3[6]);
          items[1] = obj2.generateEmptyPollAnswer();
          mapped = items;
        }
        return mapped;
      }
    }
    const found = first.filter(tmp18);
    cResult[3] = first;
    cResult[4] = found;
  } else {
    closure_14 = cResult[4];
    class P {
      constructor() {
        mapped = undefined;
        if (closure_3 != null) {
          initialAnswers = closure_3.initialAnswers;
          if (initialAnswers != null) {
            mapped = initialAnswers.map(() => { ... });
          }
        }
        if (mapped == null) {
          tmp2 = closure_0;
          tmp3 = closure_3;
          obj = closure_0(closure_3[6]);
          items = [, ];
          items[0] = obj.generateEmptyPollAnswer();
          obj2 = closure_0(closure_3[6]);
          items[1] = obj2.generateEmptyPollAnswer();
          mapped = items;
        }
        return mapped;
      }
    }
  }
}) : ((id, arg1, arg2, initialQuestion) => {
  closure_0 = id;
  importDefault = arg1;
  closure_2 = arg2;
  dependencyMap = initialQuestion;
  id = id.id;
  const tmp2 = answers(noop.useState(() => {
    let mapped;
    if (initialQuestion != null) {
      const initialAnswers = initialQuestion.initialAnswers;
      if (initialAnswers != null) {
        mapped = initialAnswers.map((item) => {
          const merged = Object.assign(closure_1_0(initialQuestion[6]).generateEmptyPollAnswer());
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
  const tmpResult = answers(noop.useState(str), 2);
  const first1 = tmpResult[0];
  closure_8 = tmp4;
  const tmpResult7 = answers(noop.useState(false), 2);
  const first2 = tmpResult7[0];
  let initialDuration;
  if (initialQuestion != null) {
    initialDuration = initialQuestion.initialDuration;
  }
  if (initialDuration == null) {
    initialDuration = first2.ONE_DAY;
  }
  const tmpResult8 = answers(noop.useState(initialDuration), 2);
  const first3 = tmpResult8[0];
  const tmpResult9 = answers(noop.useState(), 2);
  const first4 = tmpResult9[0];
  [tmp14, closure_12] = answers(noop.useState({}), 2);
  const tmpResult11 = answers(noop.useState(false), 2);
  closure_13 = tmp16;
  const found = answers.filter((item) => closure_0(initialQuestion[6]).isAnswerFilled(item));
  let tmp17 = first1.length > 0;
  const found1 = answers.filter((item) => closure_0(initialQuestion[6]).isIncompleteAnswer(item));
  if (tmp17) {
    tmp17 = found.length >= closure_8;
  }
  if (tmp17) {
    tmp17 = 0 === found1.length;
  }
  const tmpResult10 = answers(noop.useState({}), 2);
  const tmpResult12 = answers(useRequestDefault(PollsActionCreatorsDefault.createPoll), 2);
  const first5 = tmpResult12[0];
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp2;
            closure_131_0 = closure_1;
            closure_131_1 = closure_2;
            callback3(closure_0, closure_1);
            callback2(first3(closure_2, closure_0(tmp3[11]).PollMediaUploadAttachmentStatus.PREPARING), closure_1);
            answers = 1;
            c6 = 1;
            const obj4 = { value: closure_2(tmp3[9]).handlePollGifAttachmentAdd(closure_0, answers[closure_1].localCreationAnswerId, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (null != value) {
            callback2(first3(closure_131_1, closure_0(tmp3[11]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), closure_131_0);
          } else {
            callback2(first3(closure_131_1, closure_0(tmp3[11]).PollMediaUploadAttachmentStatus.ERROR), closure_131_0);
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
    const obj = { mediaAttachmentState: { status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL }, emoji: "Array", stickerId: "cursor" };
    callback2(obj, arg1);
    const obj2 = { status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL };
    const result = PollUploadAttachmentActionCreatorsAll.handlePollMediaAttachmentAdd(arg0, first[arg1].localCreationAnswerId, arg2);
    const obj4 = { mediaAttachmentState: null, emoji: "Array", stickerId: "cursor" };
    obj4.mediaAttachmentState = { status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL };
    callback2(obj4, arg1);
  }, items2);
  const callback6 = obj.useCallback((emoji, arg1) => {
    callback3(id, arg1);
    callback2({ emoji, stickerId: "Array", mediaAttachmentState: "cursor" }, arg1);
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
        items[tmp] = closure_1_0(initialQuestion[6]).generateEmptyPollAnswer();
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
    const result = closure_2(closure_3[9]).removeAllPollUploadAttachments(id);
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
    if (first.filter((item) => c0(7257).isAnswerFilled(item)).length < closure_2_8) {
      c0 = false;
      let _HermesInternal = HermesInternal;
      let combined = "answer-" + first[0].localCreationAnswerId;
      const intl2 = util.intl;
      obj[combined] = intl2.string(util.t.fYvzEX);
    }
    const item = first.forEach((localCreationAnswerId) => {
      obj = closure_0(7257);
      if (obj.isIncompleteAnswer(localCreationAnswerId)) {
        c0 = false;
        const _HermesInternal = HermesInternal;
        const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
        const intl = closure_0(1126).intl;
        obj[combined] = intl.string(closure_0(1126).t["8Qqkc+"]);
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { channel, question: first1, answers: found, allowMultiSelect: first2, duration: first3, layout: channel(initialQuestion[13]).PollLayoutTypes.DEFAULT, onClose, scheduledTimestamp: first4 };
            c1 = 1;
            channel = 1;
            const obj5 = { value: first5(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          channel = 3;
          throw value;
        } else if (arg0 === 2) {
          channel = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          channel = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp5) {
        channel = tmp;
        throw tmp5;
      }
    }
  }), items8);
  const items9 = [callback11, loading, callback10];
  return {
    answers,
    question: first1,
    setQuestion: tmpResult[1],
    allowMultiSelect: first2,
    setAllowMultiSelect: tmpResult7[1],
    duration: first3,
    setDuration: tmpResult8[1],
    scheduledTimestamp: first4,
    setScheduledTimestamp: tmpResult9[1],
    canPost: tmp17,
    canAddMoreAnswers: answers.length < first1,
    canRemoveMoreAnswers: answers.length > closure_8,
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
    handleSubmitPoll: noop.useCallback(() => {
      let tmp = !loading;
      if (!loading) {
        tmp = callback10();
      }
      if (tmp) {
        callback11();
      }
    }, items9),
    submitting: loading,
    createPollError: tmpResult12[1].error,
    shouldFocusOnInvalidField: tmpResult11[0],
    setShouldFocusOnInvalidField: tmpResult11[1]
  };
});