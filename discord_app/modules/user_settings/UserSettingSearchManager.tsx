// discord_app/modules/user_settings/UserSettingSearchManager.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

let result = obj132.fileFinishedImporting("modules/user_settings/UserSettingSearchManager.tsx");
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
    item = global.forEach((item, index) => {
      [tmp, arr] = item;
      const items = [];
      const items1 = [];
      const set = new Set();
      item = arr.forEach((item, index) => {
        items.push(item.toLocaleLowerCase());
        if (item.includes(" ")) {
          const parts = item.split(/\s+/);
          item = parts.forEach((item, index) => {
            const toLocaleLowerCaseResult = item.toLocaleLowerCase();
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
  return new Promise((fn) => {
    fn(self.getMatchingSettings(closure_0));
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
    const item = terms.forEach((item, index) => {
      [tmp, tmp2] = item;
      for (const item10015 of tmp2) {
        let tmp5 = items(dependencyMap[0]);
        let formatted = closure_0.toLowerCase();
        if (tmp5(formatted, item10015.toLowerCase())) {
          let arr = items.push(tmp);
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
      let item = preprocessed.forEach((item, index) => {
        [tmp, ] = item;
        c0 = 0;
        if (arr.some((item, index) => item === c0)) {
          c0 = 1;
        } else if (obj.some((item, index) => item.startsWith(c0))) {
          c0 = 0.95;
        } else {
          item = arr.forEach((item, index) => {
            const result = toLocaleLowerCaseResult(dependencyMap[1]).calculateJaroWinklerSimilarity(c0, item);
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