// discord_app/modules/conjure/publish_schedule/useConjurePublishScheduleProposal.tsx
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const canPublishProject = fn(6758).canPublishProject;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/useConjurePublishScheduleProposal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePublishScheduleProposal(arg0, trigger, arg2) {
      _require = arg0;
      importDefault = trigger;
      const cResult = require("c").c(19);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function _() {
          const project = ConjureProjectStore.getProject(closure_0);
          let tmp2 = null != project;
          if (tmp2) {
            tmp2 = canPublishProject(project);
          }
          return tmp2;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      const tmpResult = require("initialize");
      [tmp11, dependencyMap] = noop.useState("idle");
      const tmp10 = _slicedToArray(noop.useState("idle"), 2);
      [tmp13, asyncGeneratorStep] = noop.useState(null);
      if (cResult[4] === arg0) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return Date.now();
            }
          }
          cResult[7] = F;
        } else {
          class F {
            constructor() {
              return Date.now();
            }
          }
        }
        const first1 = _slicedToArray(noop.useState(F), 1)[0];
        if (cResult[8] === trigger.next_run_at) {
          class F {
            constructor() {
              return Date.now();
            }
          }
          if (cResult[11] !== trigger.trigger) {
            class F {
              constructor() {
                return Date.now();
              }
            }
            const result = obj7.publishScheduleSummary(trigger.trigger);
            cResult[11] = trigger.trigger;
            cResult[12] = result;
          } else {
            class F {
              constructor() {
                return Date.now();
              }
            }
          }
          if (stateFromStores) {
            class F {
              constructor() {
                return Date.now();
              }
            }
            if (arg2) {
              class F {
                constructor() {
                  return Date.now();
                }
              }
              if ("on" !== tmp11) {
                class F {
                  constructor() {
                    return Date.now();
                  }
                }
              }
            }
          }
          if (cResult[13] === tmp13) {
            class F {
              constructor() {
                return Date.now();
              }
            }
          }
          const obj2 = { summary: tmp20, firstPublish: tmp17, status: tmp11, error: tmp13, onTurnOn: undefined };
          cResult[13] = tmp13;
          cResult[14] = tmp17;
          cResult[15] = tmp11;
          cResult[16] = tmp20;
          cResult[17] = undefined;
          cResult[18] = obj2;
        }
        let formatToPlainStringResult = null;
        if (trigger.next_run_at > first1) {
          class F {
            constructor() {
              return Date.now();
            }
          }
          let obj5 = { time: tmp(11799).formatPublishScheduleTime(trigger.next_run_at) };
          formatToPlainStringResult = obj4.formatToPlainString(_modDef3830.orZDqY, obj5);
          const tmpResult2 = tmp(11799);
        }
        cResult[8] = trigger.next_run_at;
        cResult[9] = first1;
        cResult[10] = formatToPlainStringResult;
      }
      _require = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                tmp38("sending");
                v0(null);
                v0 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(10782).setPublishSchedule(closure_0, tmp3.trigger), done: false };
                return obj5;
              }
            } else if (1 === tmp7) {
              v0 = 0;
              closure_128_0 = tmp38;
              if (closure_128_0 instanceof tmp3(10783)) {
                let message = closure_128_0.message;
              } else {
                const intl = closure_0(1128).intl;
                message = intl.string(tmp3(3830).EXceox);
              }
              v0(message);
              tmp38("error");
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else {
              if (arg0 !== 2) {
                tmp38("on");
                v0 = 0;
                c5 = 3;
              }
              v0 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
          } catch (tmp38) {
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp38;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      function t3() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[4] = arg0;
      cResult[5] = trigger.trigger;
      cResult[6] = t3;
      const tmp12 = _slicedToArray(noop.useState(null), 2);
    }
  : function useConjurePublishScheduleProposal(arg0, trigger, arg2) {
      _require = arg0;
      importDefault = trigger;
      const items = [ConjureProjectStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          const project = ConjureProjectStore.getProject(closure_0);
          let tmp2 = null != project;
          if (tmp2) {
            tmp2 = canPublishProject(project);
          }
          return tmp2;
        },
        items1,
      );
      let obj = require("initialize");
      [tmp5, dependencyMap] = noop.useState("idle");
      [obj3.error, asyncGeneratorStep] = noop.useState(null);
      const items2 = [arg0, trigger.trigger];
      const callback = noop.useCallback(
        asyncGeneratorStep(async () => {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_0 = tmp7;
                  dependencyMap("sending");
                  v0(null);
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: closure_0(tmp38[7]).setPublishSchedule(closure_0, tmp3.trigger), done: false };
                  return obj5;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                closure_128_0 = tmp38;
                if (closure_128_0 instanceof tmp3(tmp38[8])) {
                  let message = closure_128_0.message;
                } else {
                  const intl = closure_0(tmp38[9]).intl;
                  message = intl.string(tmp3(tmp38[10]).EXceox);
                }
                closure_129_3(message);
                closure_129_2("error");
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else {
                if (arg0 !== 2) {
                  closure_129_2("on");
                  c3 = 0;
                  c5 = 3;
                }
                c3 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              }
            } catch (tmp38) {
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp38;
              } else {
                c4 = tmp;
              }
            }
          }
        }),
        items2,
      );
      let formatToPlainStringResult = null;
      if (
        trigger.next_run_at >
        _slicedToArray(
          noop.useState(() => Date.now()),
          1,
        )[0]
      ) {
        let intl = tmp(1128).intl;
        const obj2 = { time: tmp(11799).formatPublishScheduleTime(trigger.next_run_at) };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3830.orZDqY, obj2);
        const tmpResult = tmp(11799);
      }
      let obj3 = { summary: null, firstPublish: null, status: null, error: null, onTurnOn: null };
      const tmp4 = _slicedToArray(noop.useState("idle"), 2);
      obj3.summary = require("conjurePublishSchedule").publishScheduleSummary(trigger.trigger);
      obj3.firstPublish = formatToPlainStringResult;
      obj3.status = tmp5;
      let tmp10;
      if (stateFromStores) {
        if (arg2) {
          if ("on" !== tmp5) {
            tmp10 = callback;
          }
        }
      }
      obj3.onTurnOn = tmp10;
      return obj3;
    };
