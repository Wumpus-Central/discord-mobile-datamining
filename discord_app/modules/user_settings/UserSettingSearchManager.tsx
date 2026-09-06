// === Module 14699: UserSettingSearchManager ===

// Module 14699 (UserSettingSearchManager)
import fuzzysearchDefault from "fuzzysearch" /* 5517 */;
import StringMatchUtils from "StringMatchUtils" /* 14700 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchManager.tsx");
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
    item = global.forEach((item) => {
      [tmp, arr] = item;
      const items = [];
      const items1 = [];
      const set = new Set();
      item = arr.forEach((toLocaleLowerCase) => {
        items.push(toLocaleLowerCase.toLocaleLowerCase());
        if (toLocaleLowerCase.includes(" ")) {
          const parts = toLocaleLowerCase.split(/\s+/);
          const item = parts.forEach((toLocaleLowerCase) => {
            const toLocaleLowerCaseResult = toLocaleLowerCase.toLocaleLowerCase();
            if (!set.has(toLocaleLowerCaseResult)) {
              items1.push(toLocaleLowerCaseResult);
              set.add(toLocaleLowerCaseResult);
            }
          });
        }
      });
      const preprocessed = obj.preprocessed;
      const items2 = [tmp, { normalizedSearchTerms: items, normalizedTokens: items1 }];
    });
    return obj;
  }
}
const prototype = SettingSearchManager.prototype;
prototype["search"] = function search(arg0) {
  const self = this;
  closure_0 = arg0;
  return new Promise((fn) => {
    fn(self.getMatchingSettings(closure_0));
  });
};
prototype["getMatchingSettings"] = function getMatchingSettings(arg0) {
  const self = this;
  closure_0 = arg0;
  const cache = this.cache;
  value = cache.get(arg0);
  if (null != value) {
    return value;
  } else {
    const items = [];
    const terms = self.terms;
    const item = terms.forEach((item) => {
      [tmp, tmp2] = item;
      for (const item10015 of tmp2) {
        let tmp5 = fuzzysearchDefault;
        let formatted = closure_0.toLowerCase();
        if (tmp5(formatted, item10015.toLowerCase())) {
          let arr = items.push(tmp);
          obj.return();
          break;
        }
      }
    });
    const cache2 = self.cache;
    const result = cache2.set(arg0, items);
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
    value = cacheScored.get(toLocaleLowerCaseResult);
    if (null != value) {
      return value;
    } else {
      const items = [];
      const preprocessed = self.preprocessed;
      let item = preprocessed.forEach((item) => {
        [tmp, ] = item;
        score = 0;
        if (arr.some((item) => item === closure_0)) {
          score = 1;
        } else if (obj.some((item) => item.startsWith(closure_0))) {
          score = 0.95;
        } else {
          item = arr.forEach((item) => {
            const result = StringMatchUtils.calculateJaroWinklerSimilarity(toLocaleLowerCaseResult, item);
            let num = 0;
            if (result >= 0.8) {
              num = result;
            }
            closure_0 = Math.max(closure_0, num);
          });
        }
        if (score > 0) {
          obj = { setting: tmp, score };
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