// discord_app/modules/settings/native/renderer/SettingHookHarness.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import zustandStore from "stores/SettingBlocklistStore.tsx";
import { NodeType } from "SettingRendererConstants.tsx";

const require = fn;
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
      let tmp2 = callback(entries[num], 2);
      [tmp3, obj2] = tmp2;
      let usePredicate = obj2.usePredicate;
      let predicate;
      if (usePredicate != null) {
        predicate = usePredicate();
      }
      let tmp6 = false === predicate;
      if (tmp6) {
        if (!field.has(tmp3)) {
          let arr = items.push(tmp3);
        }
        if (obj2.type !== NodeType.GUILD_SELECTOR) {
          let result = map.set(tmp3, obj2.useTitle());
          let useSearchTerms = obj2.useSearchTerms;
          let searchTerms;
          if (useSearchTerms != null) {
            searchTerms = useSearchTerms();
          }
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
      const item = arr.forEach((item, index) => set.add(item));
      const item1 = items1.forEach((item, index) => set.delete(item));
      const obj = { blocklist: null };
      obj[0] = set;
      closure_1_4.setState(obj);
    }
    arr = set;
  });
  return null;
});
let result = require("obj132").fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

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