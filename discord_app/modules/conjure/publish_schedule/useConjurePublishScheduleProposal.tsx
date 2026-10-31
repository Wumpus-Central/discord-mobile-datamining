// discord_app/modules/conjure/publish_schedule/useConjurePublishScheduleProposal.tsx
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const canPublishProject = fn(6844).canPublishProject;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_schedule/useConjurePublishScheduleProposal.tsx");

export default function useConjurePublishScheduleProposal(arg0, trigger, arg2) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj5 = { value: closure_0(tmp38[5]).setPublishSchedule(closure_0, tmp3.trigger), done: false };
              return obj5;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp38;
            if (closure_128_0 instanceof tmp3(tmp38[6])) {
              let message = closure_128_0.message;
            } else {
              const intl = closure_0(tmp38[7]).intl;
              message = intl.string(tmp3(tmp38[8]).EXceox);
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
    let intl = tmp(1113).intl;
    const obj2 = { time: tmp(12502).formatPublishScheduleTime(trigger.next_run_at) };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3868.orZDqY, obj2);
    const tmpResult = tmp(12502);
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
}
