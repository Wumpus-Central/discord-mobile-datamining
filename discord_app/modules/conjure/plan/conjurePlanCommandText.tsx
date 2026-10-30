// === Module 12693: conjurePlanCommandText ===

// Module 12693 (conjurePlanCommandText)
import escapeRegExpDefault from "escapeRegExp" /* 5060 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanCommandText.tsx");

export function conjurePlanSlashCommandNames(arr) {
  const found = arr.filter((item) => "/" === commands(closure_1_2[1]).conjurePlanCommandPrefix(item));
  return found.map((name) => name.name);
}
export function useConjurePlanSlashCommandNames(commands) {
  const items = [commands];
  return noop.useMemo(() => {
    const found = commands.filter((item) => "/" === commands(closure_1_2[1]).conjurePlanCommandPrefix(item));
    return found.map((name) => name.name);
  }, items);
}
export function conjurePlanCommandPattern(arg0) {
  if (0 === arg0.length) {
    return null;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(arg0, 0);
    const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
    const mapped = sorted.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("(^|[\\s(\"'\u201C\u2018])/(" + mapped.join("|") + ")(?![\\w-])", "gu");
    return regExp;
  }
}
export function conjurePlanTextMentionsCommand(item, arr) {
  if (0 === arr.length) {
    return false;
  } else {
    const mapped = arr.map(escapeRegExpDefault);
    const _RegExp = RegExp;
    const _HermesInternal = HermesInternal;
    const regExp = new RegExp("(?<![\\p{L}\\p{N}/.:])/(?:" + mapped.join("|") + ")(?![\\p{L}\\p{N}_-])", "iu");
    return regExp.test(item);
  }
}
export function useConjurePlanCommandPattern(commandNames) {
  let items = [commandNames];
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
}
export function splitConjurePlanCommandText(mapped, conjurePlanCommandPattern) {
  if (null == conjurePlanCommandPattern) {
    return null;
  } else {
    const items = [];
    let num2 = 0;
    const matchAllResult = mapped.matchAll(conjurePlanCommandPattern);
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
        obj.text = mapped.slice(num2, tmp7);
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
      if (num2 < mapped.length) {
        const obj3 = { kind: "text", text: mapped.slice(num2), start: num2 };
        items.push(obj3);
        tmp15 = items;
      }
    }
    return tmp15;
  }
}