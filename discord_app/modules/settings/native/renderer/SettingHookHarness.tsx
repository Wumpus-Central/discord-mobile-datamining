// === Module 14236: map ===

// Module 14236 (map)
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "zustandStore" /* 14237 */;
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 11069 */;

const require = arg1;
let c3 = importAllResult;
let closure_6 = [];
const map = new Map();
const map1 = new Map();
const memoResult = importAllResult.memo(function SettingHookHarness() {
  field = field.getField("blocklist");
  const items = [];
  const items1 = [];
  const entries = Object.entries(items(items1[4]).SETTING_RENDERER_CONFIG);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      [tmp3, obj2] = tmp2;
      let usePredicate = obj2.usePredicate;
      let tmp4 = num;
      let predicate;
      if (usePredicate != null) {
        predicate = usePredicate();
      }
      let tmp6 = false === predicate;
      if (tmp6) {
        if (!field.has(tmp3)) {
          let arr = items.push(tmp3);
        }
        let tmp10 = NodeType;
        if (obj2.type !== NodeType.GUILD_SELECTOR) {
          let tmp11 = map;
          let result = map.set(tmp3, obj2.useTitle());
          let useSearchTerms = obj2.useSearchTerms;
          let searchTerms;
          if (useSearchTerms != null) {
            searchTerms = useSearchTerms();
          }
          let tmp14 = map1;
          if (searchTerms == null) {
            searchTerms = closure_6;
          }
          let result1 = map1.set(tmp3, searchTerms);
        }
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
      let hasItem = !tmp6;
      if (!tmp6) {
        hasItem = field.has(tmp3);
      }
      if (hasItem) {
        arr = items1.push(tmp3);
      }
    }
  }
  const effect = importAllResult.useEffect(() => {
    if (set.length > 0) {
      const _Set = Set;
      set = new Set(closure_1_4.getField("blocklist"));
      const item = set.forEach((arg0) => set.add(arg0));
      const item1 = items1.forEach((arg0) => set.delete(arg0));
      const obj = { blocklist: null };
      obj[0] = set;
      closure_1_4.setState(obj);
    }
  });
  return null;
});
let result = require("set").fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

export default memoResult;
export const getCachedSettingTitle = function getCachedSettingTitle(setting) {
  return map.get(setting);
};
export const getCachedSettingSearchTerms = function getCachedSettingSearchTerms(arg0) {
  let value = map1.get(arg0);
  if (value == null) {
    value = closure_6;
  }
  return value;
};