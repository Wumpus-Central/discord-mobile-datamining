// === Module 12384: conjurePlanCommandText ===

// Module 12384 (conjurePlanCommandText)
import c from "c" /* 576 */;
import escapeRegExpDefault from "escapeRegExp" /* 5015 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanSlashCommandNames(arr) {
  const cResult = c.c(2);
  if (cResult[0] !== arr) {
    const found = arr.filter((item) => "/" === closure_1_0(closure_1_2[1]).conjurePlanCommandPrefix(item));
    const mapped = found.map((name) => name.name);
    cResult[0] = arr;
    cResult[1] = mapped;
    let tmp2 = mapped;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function useConjurePlanSlashCommandNames(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    const found = closure_0.filter((item) => "/" === closure_1_0(closure_1_2[1]).conjurePlanCommandPrefix(item));
    return found.map((name) => name.name);
  }, items);
});
function conjurePlanSlashCommandNames(arr) {
  const found = arr.filter((item) => "/" === closure_1_0(closure_1_2[1]).conjurePlanCommandPrefix(item));
  return found.map((name) => name.name);
}
function conjurePlanCommandPattern(size) {
  if (0 === size.length) {
    return null;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(size, 0);
    const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
    const mapped = sorted.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    return regExp;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanCommandText.tsx");

export { conjurePlanSlashCommandNames };
export const useConjurePlanSlashCommandNames = tmp2;
export { conjurePlanCommandPattern };
export const conjurePlanTextMentionsCommand = function conjurePlanTextMentionsCommand(item, arr) {
  if (0 === arr.length) {
    return false;
  } else {
    const mapped = arr.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("(?<![\\p{L}\\p{N}/.:])/(?:" + mapped.join("|") + ")(?![\\p{L}\\p{N}_-])", "iu");
    return regExp.test(item);
  }
};
export const useConjurePlanCommandPattern = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanCommandPattern(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    let regExp = null;
    if (0 !== arg0.length) {
      const items = [];
      HermesBuiltin.arraySpread(arg0, 0);
      const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
      const mapped = sorted.map(escapeRegExpDefault);
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    }
    cResult[0] = arg0;
    cResult[1] = regExp;
    let tmp3 = regExp;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useConjurePlanCommandPattern(arg0) {
  let items = [arg0];
  return noop.useMemo(() => {
    let regExp = null;
    if (0 !== length.length) {
      const items = [];
      HermesBuiltin.arraySpread(length, 0);
      const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
      const mapped = sorted.map(escapeRegExpDefault);
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    }
    return regExp;
  }, items);
});
export const splitConjurePlanCommandText = function splitConjurePlanCommandText(text, conjurePlanCommandPattern) {
  if (null == conjurePlanCommandPattern) {
    return null;
  } else {
    const items = [];
    let num2 = 0;
    const matchAllResult = text.matchAll(conjurePlanCommandPattern);
    const iter = matchAllResult[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let num = nextResult.index;
      if (num == null) {
        num = 0;
      }
      let sum = num + tmp4[1].length;
      let tmp7 = sum;
      if (sum > num2) {
        let obj = { kind: "text", text: null, start: null };
        obj.text = text.slice(num2, tmp7);
        obj.start = num2;
        let arr = items.push(obj);
      }
      let obj2 = { kind: "command", name: null, start: null };
      obj2.name = tmp4[2];
      obj2.start = tmp7;
      let arr4 = items.push(obj2);
      num2 = tmp7 + 1 + tmp4[2].length;
      continue;
    }
    let tmp15 = null;
    if (0 !== items.length) {
      tmp15 = items;
      if (num2 < text.length) {
        const obj3 = { kind: "text", text: text.slice(num2), start: num2 };
        items.push(obj3);
        tmp15 = items;
      }
    }
    return tmp15;
  }
};