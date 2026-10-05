// === Module 14509: UserSettingSearchManager ===

// Module 14509 (UserSettingSearchManager)
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import StringMatchUtils from "StringMatchUtils" /* 14510 */;
import size from "module_2" /* 2 */;

let score, set;

let result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchManager.tsx");
class SettingSearchManager {
  constructor(terms) {
    const obj = Object.create(new.target.prototype);
    obj.terms = terms;
    obj.cache = new Map();
    new Map();
    obj.cacheScored = new Map();
    obj.preprocessed = [];
    new Map();
    let item = terms.forEach((item) => {
      let arr;
      let tmp;
      [tmp, arr] = item;
      const items = [];
      const items1 = [];
      set = new Set();
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
      preprocessed.push(items2);
    });
    return obj;
  }
  search(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((fn) => {
      fn(self.getMatchingSettings(closure_0));
    });
    return promise;
  }
  getMatchingSettings(arg0) {
    const self = this;
    let closure_0 = arg0;
    const cache = this.cache;
    const value = cache.get(arg0);
    if (null != value) {
      return value;
    } else {
      const items = [];
      const terms = self.terms;
      const item = terms.forEach((item) => {
        let tmp;
        let tmp2;
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
  }
  getScoredSearchResults(str) {
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
        let item = preprocessed.forEach((item) => {
          let obj;
          let tmp;
          [tmp, ] = item;
          score = 0;
          if (arr.some((item) => item === closure_0)) {
            score = 1;
          } else if (obj.some((item) => item.startsWith(closure_0))) {
            let num = 0.95;
            score = 0.95;
          } else {
            item = arr.forEach((item) => {
              const obj = StringMatchUtils;
              const result = obj.calculateJaroWinklerSimilarity(require, item);
              let num = 0;
              if (result >= 0.8) {
                num = result;
              }
              closure_0 = Math.max(closure_0, num);
            });
          }
          if (score > 0) {
            const obj2 = { setting: tmp, score };
            items.push(obj2);
          }
        });
        const cacheScored2 = self.cacheScored;
        let result = cacheScored2.set(toLocaleLowerCaseResult, items);
        return items;
      }
    }
  }
}
const prototype = SettingSearchManager.prototype;

export default SettingSearchManager;