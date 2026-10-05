// discord_app/modules/polls/useCreatePollFormData.tsx
import intl3 from "../../intl/index.native.tsx";
import PollsUtils from "PollsUtils.tsx";
import PollsActionCreatorsDefault from "PollsActionCreators.tsx";
import useRequestDefault from "../../hooks/useRequest.tsx";
import PollUploadAttachmentActionCreatorsAll from "PollUploadAttachmentActionCreators.native.tsx";
import PollAttachmentUtils from "PollAttachmentUtils.tsx";
import PollTypes from "PollTypes.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import PollsConstants from "PollsConstants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c5, c6, closure_1, constants, dependencyMap, id, importAll, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
function createPollCreationImageForMedia(mediaURL, status) {
  const obj = { mediaAttachmentState: obj2, emoji: "Array", stickerId: "toCharArray$esjava$1" };
  return obj;
}
let react = react_mod;
({
  MAX_NUMBER_OF_ANSWERS_PER_POLL: metroImportDefault,
  MIN_NUMBER_OF_ANSWERS_PER_POLL: metroImportAll,
  PollDurations: c9,
} = PollsConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, arg2, initialAnswers) => {
      let arr3;
      let arr4;
      let closure_13;
      let closure_20;
      let closure_6;
      let closure_9;
      let error;
      let first1;
      let loading;
      let tmp18;
      let tmp33;
      let tmp35;
      let tmp5;
      _require = id;
      importDefault = arg1;
      importAll = arg2;
      dependencyMap = initialAnswers;
      let tmp = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(71);
      id = id.id;
      initialAnswers = undefined;
      const first = cResult[0];
      if (initialAnswers != null) {
        initialAnswers = initialAnswers.initialAnswers;
      }
      if (first !== initialAnswers) {
        let initialAnswers1;
        if (initialAnswers != null) {
          initialAnswers1 = initialAnswers.initialAnswers;
        }
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
        cResult[0] = initialAnswers1;
        cResult[1] = P;
        tmp5 = P;
      } else {
        tmp5 = cResult[1];
      }
      let obj2 = react;
      const tmp8 = first1(react.useState(tmp5), 2);
      first1 = tmp8[0];
      react = tmp8[1];
      let str;
      const useState = react.useState;
      if (initialAnswers != null) {
        str = initialAnswers.initialQuestion;
      }
      if (str == null) {
        str = "";
      }
      const tmp7Result = first1(useState(str), 2);
      const first2 = tmp7Result[0];
      let closure_8 = tmp7Result[1];
      constants = tmp7(obj2.useState(false), 2)[0];
      let initialDuration;
      const useState2 = obj2.useState;
      first1(obj2.useState(false), 2);
      if (initialAnswers != null) {
        initialDuration = initialAnswers.initialDuration;
      }
      if (initialDuration == null) {
        initialDuration = constants.ONE_DAY;
      }
      let closure_10 = tmp7(useState2(initialDuration), 2)[0];
      first1(useState2(initialDuration), 2);
      let closure_11 = tmp7(obj2.useState(), 2)[0];
      first1(obj2.useState(), 2);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[2] = {};
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
      }
      [r10068, closure_12] = first1(obj2.useState(tmp15), 2);
      first1(obj2.useState(tmp15), 2);
      [r10073, tmp18] = first1(obj2.useState(false), 2);
      first1(obj2.useState(false), 2);
      if (cResult[3] !== first1) {
        const _Symbol = Symbol;
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
        const found = first1.filter(tmp20);
        cResult[3] = first1;
        cResult[4] = found;
        arr3 = found;
      } else {
        arr3 = cResult[4];
      }
      if (cResult[6] !== first1) {
        const _Symbol2 = Symbol;
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
        const found1 = first1.filter(tmp23);
        cResult[6] = first1;
        cResult[7] = found1;
        arr4 = found1;
      } else {
        arr4 = cResult[7];
      }
      let tmp25 = first2.length > 0;
      if (tmp25) {
        tmp25 = arr3.length >= closure_8;
      }
      if (tmp25) {
        tmp25 = 0 === arr4.length;
      }
      const tmp27 = useRequestDefault;
      const tmp7Result12 = first1(tmp27(PollsActionCreatorsDefault.createPoll), 2);
      let closure_15 = tmp7Result12[0];
      ({ error, loading } = tmp7Result12[1]);
      let closure_17 = tmp29;
      let closure_18 = tmp30;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        function ee(arg0) {
          closure_12((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            delete obj["question"];
            return obj;
          });
          closure_8(arg0);
        }
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        function ue(arg0) {
          let closure_129_0;
          let closure_129_1;
          let closure_129_2;
          ({ text: closure_129_0, index: closure_129_1, localCreationAnswerId: closure_129_2 } = arg0);
          closure_12((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            delete obj["answer-" + closure_1_2];
            return obj;
          });
          closure_6((arg0) => {
            const items = [...arg0];
            const obj = { text };
            const merged = Object.assign(items[closure_1_1]);
            items[closure_1_1] = obj;
            return items;
          });
        }
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            closure_1 = arg1;
            closure_6((arg0) => {
              const items = [...arg0];
              const obj = { image };
              const merged = Object.assign(items[closure_1]);
              items[closure_1] = obj;
              return items;
            });
          }
        }
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
        tmp33 = Ae;
      } else {
        class Ae {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            closure_1 = arg1;
            closure_6((arg0) => {
              const items = [...arg0];
              const obj = { image };
              const merged = Object.assign(items[closure_1]);
              items[closure_1] = obj;
              return items;
            });
          }
        }
      }
      Ae = tmp33;
      if (cResult[12] !== first1) {
        class Ae {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            closure_1 = arg1;
            closure_6((arg0) => {
              const items = [...arg0];
              const obj = { image };
              const merged = Object.assign(items[closure_1]);
              items[closure_1] = obj;
              return items;
            });
          }
        }
        class P {
          constructor() {
            let mapped;
            if (initialAnswers != null) {
              initialAnswers = initialAnswers.initialAnswers;
              if (initialAnswers != null) {
                mapped = initialAnswers.map((item) => {
                  const obj = {};
                  const obj2 = id(initialAnswers[6]);
                  const merged = Object.assign(obj2.generateEmptyPollAnswer());
                  const merged1 = Object.assign(item);
                  return obj;
                });
              }
            }
            if (mapped == null) {
              let obj = PollsUtils;
              const items = [obj.generateEmptyPollAnswer()];
              let obj2 = PollsUtils;
              items[1] = obj2.generateEmptyPollAnswer();
              mapped = items;
            }
            return mapped;
          }
        }
        cResult[13] = tmp35;
      } else {
        class Ae {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            closure_1 = arg1;
            closure_6((arg0) => {
              const items = [...arg0];
              const obj = { image };
              const merged = Object.assign(items[closure_1]);
              items[closure_1] = obj;
              return items;
            });
          }
        }
      }
      tmp35 = tmp34;
      if (cResult[14] === first1) {
        class Ae {
          constructor(arg0, arg1) {
            let closure_0 = arg0;
            closure_1 = arg1;
            closure_6((arg0) => {
              const items = [...arg0];
              const obj = { image };
              const merged = Object.assign(items[closure_1]);
              items[closure_1] = obj;
              return items;
            });
          }
        }
        if (cResult[17] === first1) {
          class Ae {
            constructor(arg0, arg1) {
              let closure_0 = arg0;
              closure_1 = arg1;
              closure_6((arg0) => {
                const items = [...arg0];
                const obj = { image };
                const merged = Object.assign(items[closure_1]);
                items[closure_1] = obj;
                return items;
              });
            }
          }
          if (cResult[20] === id) {
            class Ae {
              constructor(arg0, arg1) {
                let closure_0 = arg0;
                closure_1 = arg1;
                closure_6((arg0) => {
                  const items = [...arg0];
                  const obj = { image };
                  const merged = Object.assign(items[closure_1]);
                  items[closure_1] = obj;
                  return items;
                });
              }
            }
            const _Symbol3 = Symbol;
            class Se {
              constructor(arg0, arg1, arg2) {
                const localCreationAnswerId = first1[arg1].localCreationAnswerId;
                const objectURL = URL.createObjectURL(arg2);
                tmp35(arg0, arg1);
                const obj = {
                  mediaAttachmentState: {
                    status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING,
                    mediaURL: objectURL,
                  },
                  emoji: "Array",
                  stickerId: "toCharArray$esjava$1",
                };
                ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
                Ae(obj, arg1);
                const obj3 = PollUploadAttachmentActionCreatorsAll;
                const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
                const obj4 = {
                  mediaAttachmentState: {
                    status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
                    mediaURL: objectURL,
                  },
                  emoji: "Array",
                  stickerId: "toCharArray$esjava$1",
                };
                ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
                Ae(obj4, arg1);
              }
            }
            if (tmp39 === Symbol.for("react.memo_cache_sentinel")) {
              class Ie {
                constructor(arg0) {
                  let closure_0 = arg0;
                  closure_6((arg0) => {
                    const items = [...arg0];
                    const obj = { image: undefined };
                    const merged = Object.assign(items[closure_0]);
                    items[closure_0] = obj;
                    return items;
                  });
                }
              }
              class Se {
                constructor(arg0, arg1, arg2) {
                  const localCreationAnswerId = first1[arg1].localCreationAnswerId;
                  const objectURL = URL.createObjectURL(arg2);
                  tmp35(arg0, arg1);
                  const obj = {
                    mediaAttachmentState: {
                      status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING,
                      mediaURL: objectURL,
                    },
                    emoji: "Array",
                    stickerId: "toCharArray$esjava$1",
                  };
                  ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
                  Ae(obj, arg1);
                  const obj3 = PollUploadAttachmentActionCreatorsAll;
                  const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
                  const obj4 = {
                    mediaAttachmentState: {
                      status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
                      mediaURL: objectURL,
                    },
                    emoji: "Array",
                    stickerId: "toCharArray$esjava$1",
                  };
                  ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
                  Ae(obj4, arg1);
                }
              }
            } else {
              class Ie {
                constructor(arg0) {
                  let closure_0 = arg0;
                  closure_6((arg0) => {
                    const items = [...arg0];
                    const obj = { image: undefined };
                    const merged = Object.assign(items[closure_0]);
                    items[closure_0] = obj;
                    return items;
                  });
                }
              }
            }
            if (cResult[24] !== first1.length < first2) {
              class Ee {
                constructor() {
                  if (closure_17) {
                    closure_6((arg0) => {
                      const items = [...arg0];
                      const obj = id(initialAnswers[6]);
                      items[tmp] = obj.generateEmptyPollAnswer();
                      return items;
                    });
                  }
                }
              }
              class Se {
                constructor(arg0, arg1, arg2) {
                  const localCreationAnswerId = first1[arg1].localCreationAnswerId;
                  const objectURL = URL.createObjectURL(arg2);
                  tmp35(arg0, arg1);
                  const obj = {
                    mediaAttachmentState: {
                      status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING,
                      mediaURL: objectURL,
                    },
                    emoji: "Array",
                    stickerId: "toCharArray$esjava$1",
                  };
                  ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
                  Ae(obj, arg1);
                  const obj3 = PollUploadAttachmentActionCreatorsAll;
                  const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
                  const obj4 = {
                    mediaAttachmentState: {
                      status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
                      mediaURL: objectURL,
                    },
                    emoji: "Array",
                    stickerId: "toCharArray$esjava$1",
                  };
                  ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
                  Ae(obj4, arg1);
                }
              }
              cResult[25] = Ee;
            } else {
              class Ee {
                constructor() {
                  if (closure_17) {
                    closure_6((arg0) => {
                      const items = [...arg0];
                      const obj = id(initialAnswers[6]);
                      items[tmp] = obj.generateEmptyPollAnswer();
                      return items;
                    });
                  }
                }
              }
            }
            if (cResult[26] === first1.length) {
              class Ee {
                constructor() {
                  if (closure_17) {
                    closure_6((arg0) => {
                      const items = [...arg0];
                      const obj = id(initialAnswers[6]);
                      items[tmp] = obj.generateEmptyPollAnswer();
                      return items;
                    });
                  }
                }
              }
            }
            function _e(indexToRemove) {
              let closure_0 = indexToRemove;
              if (closure_18) {
                const length = first1.length;
                tmp35(id, indexToRemove);
                closure_6((arg0) => {
                  const items = [...arg0];
                  items.splice(closure_0, 1);
                  return items;
                });
                if (closure_2 != null) {
                  const obj = { indexToRemove, numberOfAnswers: length };
                  tmp8(obj);
                }
              }
            }
            cResult[26] = first1.length;
            cResult[27] = first1.length > closure_8;
            cResult[28] = id;
            cResult[29] = arg2;
            cResult[30] = tmp34;
            cResult[31] = _e;
          }
          class Se {
            constructor(arg0, arg1, arg2) {
              const localCreationAnswerId = first1[arg1].localCreationAnswerId;
              const objectURL = URL.createObjectURL(arg2);
              tmp35(arg0, arg1);
              const obj = {
                mediaAttachmentState: {
                  status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING,
                  mediaURL: objectURL,
                },
                emoji: "Array",
                stickerId: "toCharArray$esjava$1",
              };
              ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
              Ae(obj, arg1);
              const obj3 = PollUploadAttachmentActionCreatorsAll;
              const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
              const obj4 = {
                mediaAttachmentState: {
                  status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
                  mediaURL: objectURL,
                },
                emoji: "Array",
                stickerId: "toCharArray$esjava$1",
              };
              ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
              Ae(obj4, arg1);
            }
          }
          cResult[20] = id;
          cResult[21] = tmp34;
          cResult[22] = tmp38;
        }
        class Se {
          constructor(arg0, arg1, arg2) {
            const localCreationAnswerId = first1[arg1].localCreationAnswerId;
            const objectURL = URL.createObjectURL(arg2);
            tmp35(arg0, arg1);
            const obj = {
              mediaAttachmentState: {
                status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING,
                mediaURL: objectURL,
              },
              emoji: "Array",
              stickerId: "toCharArray$esjava$1",
            };
            ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
            Ae(obj, arg1);
            const obj3 = PollUploadAttachmentActionCreatorsAll;
            const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
            const obj4 = {
              mediaAttachmentState: {
                status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
                mediaURL: objectURL,
              },
              emoji: "Array",
              stickerId: "toCharArray$esjava$1",
            };
            ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
            Ae(obj4, arg1);
          }
        }
        cResult[17] = first1;
        cResult[18] = tmp34;
        cResult[19] = Se;
      }
      _require = id(function* (arg0, arg1, arg2) {
        let obj5;
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_4 = tmp;
                let closure_3 = tmp2;
                closure_0 = closure_1;
                closure_1 = closure_2;
                const localCreationAnswerId = c5[closure_1].localCreationAnswerId;
                closure_1_20(closure_0, closure_1);
                Ae(
                  closure_2_10(closure_2, closure_0(initialAnswers[11]).PollMediaUploadAttachmentStatus.PREPARING),
                  closure_1,
                );
                c5 = 1;
                c6 = 1;
                const obj4 = {
                  value: obj5.handlePollGifAttachmentAdd(closure_0, localCreationAnswerId, closure_2),
                  done: false,
                };
                obj5 = closure_2_2(initialAnswers[9]);
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
                Ae(
                  closure_2_10(
                    closure_1,
                    closure_0(initialAnswers[11]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
                  ),
                  closure_0,
                );
              } else {
                Ae(
                  closure_2_10(closure_1, closure_0(initialAnswers[11]).PollMediaUploadAttachmentStatus.ERROR),
                  closure_0,
                );
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp24) {
            c6 = 3;
            throw tmp24;
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[14] = first1;
      cResult[15] = tmp34;
      cResult[16] = fn;
    }
  : (id, arg1, arg2, initialQuestion) => {
      let answers;
      let closure_6;
      let tmp17;
      importDefault = arg1;
      let closure_2 = arg2;
      dependencyMap = initialQuestion;
      id = id.id;
      let obj = react;
      let tmp = answers;
      const tmp2 = answers(
        react.useState(() => {
          let mapped;
          if (initialQuestion != null) {
            const initialAnswers = initialQuestion.initialAnswers;
            if (initialAnswers != null) {
              mapped = initialAnswers.map((item) => {
                const obj = {};
                const obj2 = id(initialQuestion[6]);
                const merged = Object.assign(obj2.generateEmptyPollAnswer());
                const merged1 = Object.assign(item);
                return obj;
              });
            }
          }
          if (mapped == null) {
            let obj = PollsUtils;
            const items = [obj.generateEmptyPollAnswer()];
            let obj2 = PollsUtils;
            items[1] = obj2.generateEmptyPollAnswer();
            mapped = items;
          }
          return mapped;
        }),
        2,
      );
      answers = tmp2[0];
      react = tmp2[1];
      let str;
      const useState = react.useState;
      if (initialQuestion != null) {
        str = initialQuestion.initialQuestion;
      }
      if (str == null) {
        str = "";
      }
      const tmpResult = tmp(useState(str), 2);
      const first1 = tmpResult[0];
      const tmp4 = tmpResult[1];
      let closure_8 = tmp4;
      const tmpResult7 = tmp(obj.useState(false), 2);
      const first2 = tmpResult7[0];
      let initialDuration;
      const useState2 = obj.useState;
      const tmp7 = tmpResult7[1];
      if (initialQuestion != null) {
        initialDuration = initialQuestion.initialDuration;
      }
      if (initialDuration == null) {
        initialDuration = first2.ONE_DAY;
      }
      const tmpResult8 = tmp(useState2(initialDuration), 2);
      const first3 = tmpResult8[0];
      const tmp12 = tmpResult8[1];
      const tmpResult9 = tmp(obj.useState(), 2);
      const first4 = tmpResult9[0];
      const tmp15 = tmpResult9[1];
      [tmp17, closure_12] = tmp(obj.useState({}), 2);
      tmp(obj.useState({}), 2);
      const tmpResult11 = tmp(obj.useState(false), 2);
      let closure_13 = tmp20;
      const first5 = tmpResult11[0];
      const found = answers.filter((item) => {
        const obj = id(initialQuestion[6]);
        return obj.isAnswerFilled(item);
      });
      let tmp21 = first1.length > 0;
      const found1 = answers.filter((item) => {
        const obj = id(initialQuestion[6]);
        return obj.isIncompleteAnswer(item);
      });
      if (tmp21) {
        tmp21 = found.length >= closure_8;
      }
      if (tmp21) {
        tmp21 = 0 === found1.length;
      }
      const tmp23 = useRequestDefault;
      const tmpResult12 = tmp(tmp23(PollsActionCreatorsDefault.createPoll), 2);
      const first6 = tmpResult12[0];
      const loading = tmp26.loading;
      let closure_17 = tmp27;
      let closure_18 = tmp28;
      const error = tmp26.error;
      const callback = obj.useCallback((arg0) => {
        closure_12((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          delete obj["question"];
          return obj;
        });
        closure_8(arg0);
      }, []);
      const callback1 = obj.useCallback((arg0) => {
        let closure_129_0;
        let closure_129_1;
        let closure_129_2;
        ({ text: closure_129_0, index: closure_129_1, localCreationAnswerId: closure_129_2 } = arg0);
        closure_12((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          delete obj["answer-" + closure_1_2];
          return obj;
        });
        closure_6((arg0) => {
          const items = [...arg0];
          const obj = { text };
          const merged = Object.assign(items[closure_1_1]);
          items[closure_1_1] = obj;
          return items;
        });
      }, []);
      const callback2 = obj.useCallback((arg0, arg1) => {
        let closure_0 = arg0;
        closure_1 = arg1;
        closure_6((arg0) => {
          const items = [...arg0];
          const obj = { image };
          const merged = Object.assign(items[closure_1]);
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
        const tmp3 = null != mediaAttachmentState && mediaAttachmentState.mediaURL !== arg2;
        if (tmp3) {
          const removePollUploadAttachment = PollUploadAttachmentActionCreatorsAll.removePollUploadAttachment;
          const localCreationAnswerId = tmp.localCreationAnswerId;
          PollUploadAttachmentActionCreatorsAll;
          const obj = PollAttachmentUtils;
          const result = removePollUploadAttachment(
            arg0,
            localCreationAnswerId,
            obj.getFileNameFromGifUrl(tmp.localCreationAnswerId, mediaAttachmentState.mediaURL),
          );
        }
      }, items);
      id = undefined;
      const useCallback = obj.useCallback;
      id = id(function* (arg0, arg1, arg2) {
        let obj5;
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_4 = tmp;
                let closure_3 = tmp2;
                closure_0 = closure_1;
                closure_1 = closure_2;
                const localCreationAnswerId = c5[closure_1].localCreationAnswerId;
                callback3(closure_0, closure_1);
                callback2(
                  first3(closure_2, closure_0(initialQuestion[11]).PollMediaUploadAttachmentStatus.PREPARING),
                  closure_1,
                );
                c5 = 1;
                c6 = 1;
                const obj4 = {
                  value: obj5.handlePollGifAttachmentAdd(closure_0, localCreationAnswerId, closure_2),
                  done: false,
                };
                obj5 = closure_2_2(initialQuestion[9]);
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
                callback2(
                  first3(closure_1, closure_0(initialQuestion[11]).PollMediaUploadAttachmentStatus.READY_TO_UPLOAD),
                  closure_0,
                );
              } else {
                callback2(
                  first3(closure_1, closure_0(initialQuestion[11]).PollMediaUploadAttachmentStatus.ERROR),
                  closure_0,
                );
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp24) {
            c6 = 3;
            throw tmp24;
          }
        }
      });
      const items1 = [answers, callback2, callback3];
      const items2 = [answers, callback2, callback3];
      const callback4 = useCallback(function () {
        return closure_0(...arguments);
      }, items1);
      const items3 = [id, callback2, callback3];
      const callback5 = obj.useCallback((arg0, arg1, arg2) => {
        const localCreationAnswerId = first[arg1].localCreationAnswerId;
        const objectURL = URL.createObjectURL(arg2);
        callback3(arg0, arg1);
        const obj = {
          mediaAttachmentState: { status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL },
          emoji: "Array",
          stickerId: "toCharArray$esjava$1",
        };
        ({ status: PollTypes.PollMediaUploadAttachmentStatus.PREPARING, mediaURL: objectURL });
        callback2(obj, arg1);
        const obj3 = PollUploadAttachmentActionCreatorsAll;
        const result = obj3.handlePollMediaAttachmentAdd(arg0, localCreationAnswerId, arg2);
        const obj4 = {
          mediaAttachmentState: {
            status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD,
            mediaURL: objectURL,
          },
          emoji: "Array",
          stickerId: "toCharArray$esjava$1",
        };
        ({ status: PollTypes.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD, mediaURL: objectURL });
        callback2(obj4, arg1);
      }, items2);
      const callback6 = obj.useCallback((emoji, arg1) => {
        callback3(id, arg1);
        const obj = { emoji, stickerId: "Array", mediaAttachmentState: "toCharArray$esjava$1" };
        callback2(obj, arg1);
      }, items3);
      const items4 = [answers.length < first1];
      const callback7 = obj.useCallback((arg0) => {
        let closure_0 = arg0;
        closure_6((arg0) => {
          const items = [...arg0];
          const obj = { image: undefined };
          const merged = Object.assign(items[closure_0]);
          items[closure_0] = obj;
          return items;
        });
      }, []);
      const items5 = [answers.length, tmp28, id, arg2, callback3];
      const callback8 = obj.useCallback(() => {
        if (closure_17) {
          closure_6((arg0) => {
            const items = [...arg0];
            const obj = id(initialQuestion[6]);
            items[tmp] = obj.generateEmptyPollAnswer();
            return items;
          });
        }
      }, items4);
      const items6 = [id];
      const callback9 = obj.useCallback((indexToRemove) => {
        let closure_0 = indexToRemove;
        if (closure_18) {
          const length = first.length;
          callback3(id, indexToRemove);
          closure_6((arg0) => {
            const items = [...arg0];
            items.splice(closure_0, 1);
            return items;
          });
          if (closure_2 != null) {
            const obj = { indexToRemove, numberOfAnswers: length };
            tmp8(obj);
          }
        }
      }, items5);
      const effect = obj.useEffect(
        () => () => {
          const obj = closure_2(initialQuestion[9]);
          const result = obj.removeAllPollUploadAttachments(id);
        },
        items6,
      );
      const items7 = [answers, first1];
      const callback10 = obj.useCallback(() => {
        let c0 = true;
        let obj = {};
        if (0 === first1.trim().length) {
          c0 = false;
          let intl = intl3.intl;
          obj.question = intl.string(intl3.t.gPX3oI);
        }
        if (
          first.filter((item) => {
            const obj = id(initialQuestion[6]);
            return obj.isAnswerFilled(item);
          }).length < metroImportAll
        ) {
          c0 = false;
          let _HermesInternal = HermesInternal;
          let combined = "answer-" + first[0].localCreationAnswerId;
          const intl2 = intl3.intl;
          obj[combined] = intl2.string(intl3.t.fYvzEX);
        }
        const item = first.forEach((localCreationAnswerId) => {
          obj = id(initialQuestion[6]);
          if (obj.isIncompleteAnswer(localCreationAnswerId)) {
            c0 = false;
            const _HermesInternal = HermesInternal;
            const combined = "answer-" + localCreationAnswerId.localCreationAnswerId;
            const intl = id(initialQuestion[12]).intl;
            obj[combined] = intl.string(id(initialQuestion[12]).t["8Qqkc+"]);
          }
        });
        closure_12(obj);
        closure_13(!c0);
        return c0;
      }, items7);
      const items8 = [first1, found, first2, first3, first4, first6, id, arg1];
      const callback11 = obj.useCallback(
        id(function* () {
          let channel;
          if (channel === 2) {
            channel = 3;
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
                  const obj4 = {
                    channel,
                    question: first1,
                    answers: found,
                    allowMultiSelect: first2,
                    duration: first3,
                    layout: channel(initialQuestion[13]).PollLayoutTypes.DEFAULT,
                    onClose,
                    scheduledTimestamp: first4,
                  };
                  c1 = 1;
                  channel = 1;
                  const obj5 = { value: first6(obj4), done: false };
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
                return { value: "IconComponent", done: null };
              }
            } catch (tmp4) {
              channel = 3;
              throw tmp4;
            }
          }
        }),
        items8,
      );
      const items9 = [callback11, loading, callback10];
      let obj2 = {
        answers,
        question: first1,
        setQuestion: tmp4,
        allowMultiSelect: first2,
        setAllowMultiSelect: tmp7,
        duration: first3,
        setDuration: tmp12,
        scheduledTimestamp: first4,
        setScheduledTimestamp: tmp15,
        canPost: tmp21,
        canAddMoreAnswers: tmp27,
        canRemoveMoreAnswers: tmp28,
        handleQuestionChange: callback,
        handleAnswerTextChange: callback1,
        handleGifSelect: callback4,
        handleEmojiSelect: callback6,
        handleCustomUpload: callback5,
        handleAddAnswer: callback8,
        handleRemoveAnswer: callback9,
        handleRemoveAnswerImage: callback7,
        fieldErrors: tmp17,
        createPoll: callback11,
        handleSubmitPoll: obj.useCallback(() => {
          const tmp = !loading && callback10();
          if (tmp) {
            callback11();
          }
        }, items9),
        submitting: loading,
        createPollError: error,
        shouldFocusOnInvalidField: first5,
        setShouldFocusOnInvalidField: tmp20,
      };
      return obj2;
    };
let result = size.fileFinishedImporting("modules/polls/useCreatePollFormData.tsx");

export default tmp3;
