// === Module 14582: SettingHookHarness ===

// Module 14582 (SettingHookHarness)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SettingBlocklistStore from "SettingBlocklistStore" /* 14583 */;

const require = fn;
const NodeType = fn(11469).NodeType;
let closure_6 = [];
const map = new Map();
const map1 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

export default noop.memo(function SettingHookHarness() {
  const field = SettingBlocklistStore.getField("blocklist");
  const items = [];
  const items1 = [];
  const entries = Object.entries(items(items1[4]).SETTING_RENDERER_CONFIG);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp2 = _slicedToArray(entries[num], 2);
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
  const effect = noop.useEffect(() => {
    if (items.length > 0) {
      const _Set = Set;
      const set = new Set(SettingBlocklistStore.getField("blocklist"));
      const item = items.forEach((item) => set.add(item));
      const item1 = items1.forEach((item) => set.delete(item));
      const obj = { blocklist: set };
      SettingBlocklistStore.setState(obj);
    }
  });
  return null;
});
export const getCachedSettingTitle = function getCachedSettingTitle(setting) {
  return map.get(setting);
};
export const getCachedSettingSearchTerms = function getCachedSettingSearchTerms(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = closure_6;
  }
  return value;
};