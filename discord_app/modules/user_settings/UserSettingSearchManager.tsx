// discord_app/modules/user_settings/UserSettingSearchManager.tsx
import set2 from "../../../_runtime/00002_set.js";

let result = set2.fileFinishedImporting("modules/user_settings/UserSettingSearchManager.tsx");
class SettingSearchManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.terms = global;
    map = new Map();
    obj.cache = map;
    map1 = new Map();
    obj.cacheScored = map1;
    obj.preprocessed = [];
    item = global.forEach((arg0) => {
      [tmp, arr] = arg0;
      let set;
      const items = [];
      const items1 = [];
      set = new Set();
      let item = arr.forEach((toLocaleLowerCase) => {
        items.push(toLocaleLowerCase.toLocaleLowerCase());
        if (toLocaleLowerCase.includes(" ")) {
          const parts = toLocaleLowerCase.split(/\s+/);
          const item = parts.forEach((toLocaleLowerCase) => {
            const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
            if (!set.has(toLocaleLowerCaseResult)) {
              arr = arr.push(toLocaleLowerCaseResult);
              set.add(toLocaleLowerCaseResult);
            }
          });
        }
      });
      const preprocessed = items.preprocessed;
      const items2 = [tmp, { normalizedSearchTerms: items, normalizedTokens: items1 }];
    });
    return obj;
  }
}
const prototype = SettingSearchManager.prototype;
prototype["search"] = function search(arg0) {
  const self = this;
  closure_0 = arg0;
  return new Promise((arg0) => {
    arg0(self.getMatchingSettings(closure_0));
  });
};
prototype["getMatchingSettings"] = function getMatchingSettings(closure_0) {
  const self = this;
  const cache = this.cache;
  const value = cache.get(closure_0);
  if (null != value) {
    return value;
  } else {
    const items = [];
    const terms = self.terms;
    const item = terms.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      for (const item10015 of tmp2) {
        let tmp3 = items;
        let tmp4 = closure_1_2;
        let tmp6 = closure_0;
        let tmp5 = items(closure_1_2[0]);
        let formatted = closure_0.toLowerCase();
        if (tmp5(formatted, item10015.toLowerCase())) {
          let tmp8 = items;
          let arr = items.push(tmp);
          let tmp10 = obj;
          obj.return();
          break;
        }
      }
    });
    const cache2 = self.cache;
    const result = cache2.set(closure_0, items);
    return items;
  }
};
prototype["getScoredSearchResults"] = function getScoredSearchResults(str) {
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  require = toLocaleLowerCaseResult;
  if (0 === toLocaleLowerCaseResult.length) {
    return [];
  } else {
    const self = this;
    const cacheScored = this.cacheScored;
    const value = cacheScored.get(toLocaleLowerCaseResult);
    if (null != value) {
      return value;
    } else {
      const items = [];
      const preprocessed = self.preprocessed;
      let item = preprocessed.forEach((arg0) => {
        [tmp] = arg0;
        c0 = 0;
        if (arr.some((arg0) => arg0 === c0)) {
          c0 = 1;
        } else if (obj.some((str) => str.startsWith(c0))) {
          c0 = 0.95;
        } else {
          const item = arr.forEach((arg0) => {
            const result = toLocaleLowerCaseResult(closure_2_2[1]).calculateJaroWinklerSimilarity(c0, arg0);
            let num = 0;
            if (result >= 0.8) {
              num = result;
            }
            closure_0 = Math.max(closure_0, num);
          });
        }
        if (c0 > 0) {
          obj = { setting: null, score: null };
          obj[0] = tmp;
          obj[1] = c0;
          arr = items.push(obj);
        }
      });
      const cacheScored2 = self.cacheScored;
      let result = cacheScored2.set(toLocaleLowerCaseResult, items);
      return items;
    }
  }
};

export default SettingSearchManager;
