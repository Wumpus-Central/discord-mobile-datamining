// === Module 18453: useConjurePreviewAddBotPrompt ===

// Module 18453 (useConjurePreviewAddBotPrompt)
import conjurePreviewAddBotPromptConnection from "conjurePreviewAddBotPromptConnection" /* 14748 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjurePreviewAddBotPromptStore from "ConjurePreviewAddBotPromptStore" /* 7705 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview_add_bot_prompt/useConjurePreviewAddBotPrompt.tsx");

export function useConjurePreviewAddBotPrompt(projectId, guildId) {
  _require = projectId;
  dependencyMap = guildId;
  items = [id];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let _prompt = null;
    if (null != closure_0) {
      _prompt = ConjurePreviewAddBotPromptStore.getPrompt(tmp);
    }
    return _prompt;
  }, items1);
  let tmp2 = adding(noop.useState(false), 2);
  adding = tmp2[0];
  noop = tmp2[1];
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = null;
  }
  const items2 = [id, guildId, projectId];
  const onAddBot = obj2.useCallback(stateFromStores(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (null != tmp3) {
              if (null != id) {
                v3(true);
                c3 = 1;
                dependencyMap = 2;
                c4 = 1;
                const obj6 = { value: tmp3(11459).requestConjureInstallConsent(tmp3, closure_1), done: false };
                return obj6;
              }
            }
            c4 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_4(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_128_4(false);
          if (obj.conjurePreviewBotAdded(closure_128_0)) {
            const result = tmp3(14748).answerConjurePreviewAddBotPrompt(closure_128_0, closure_128_5, "added");
            const obj2 = tmp3(14748);
          }
          obj = tmp3(14748);
        }
        c3 = 0;
        closure_128_4(false);
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp37) {
        closure_2 = tmp37;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp37;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  }), items2);
  const items3 = [id, projectId];
  const callback1 = obj2.useCallback(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != id;
    }
    if (tmp2) {
      const result = conjurePreviewAddBotPromptConnection.answerConjurePreviewAddBotPrompt(closure_0, id, "skipped");
    }
  }, items3);
  const items4 = [stateFromStores, adding, onAddBot, callback1];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { prompt: tmp, adding, onAddBot, onSkip: callback1 };
      tmp2 = obj;
    }
    return tmp2;
  }, items4);
}