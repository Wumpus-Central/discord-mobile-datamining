// discord_app/modules/settings/native/renderer/SettingHookHarness.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import SettingBlocklistStore from "stores/SettingBlocklistStore.tsx";

const require = fn;
const NodeType = fn(10664).NodeType;
let closure_7 = [];
const map = new Map();
const map1 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

export default noop.memo(function SettingHookHarness() {
  const items = [LocaleStore];
  const stateFromStores = items1(items2[5]).useStateFromStores(items, () => locale.locale);
  const field = SettingBlocklistStore.getField("blocklist");
  items1 = [];
  items2 = [];
  const entries = Object.entries(items1(items2[6]).SETTING_RENDERER_CONFIG);
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp3 = _slicedToArray(entries[num], 2);
      [tmp4, obj3] = tmp3;
      let usePredicate = obj3.usePredicate;
      let predicate;
      if (usePredicate != null) {
        predicate = usePredicate();
      }
      let tmp7 = false === predicate;
      if (tmp7) {
        if (!field.has(tmp4)) {
          let arr = items1.push(tmp4);
        }
        if (obj3.type !== NodeType.GUILD_SELECTOR) {
          let result = map.set(tmp4, obj3.useTitle());
          let useSearchTerms = obj3.useSearchTerms;
          let searchTerms;
          if (useSearchTerms != null) {
            searchTerms = useSearchTerms();
          }
          if (searchTerms == null) {
            searchTerms = closure_7;
          }
          let result1 = map1.set(tmp4, searchTerms);
        }
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
      let hasItem = !tmp7;
      if (!tmp7) {
        hasItem = field.has(tmp4);
      }
      if (hasItem) {
        let arr2 = items2.push(tmp4);
      }
    }
  }
  const effect = noop.useEffect(() => {
    if (items1.length > 0) {
      const _Set = Set;
      const set = new Set(SettingBlocklistStore.getField("blocklist"));
      const item = items1.forEach((item) => set.add(item));
      const item1 = items2.forEach((item) => set.delete(item));
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
    value = closure_7;
  }
  return value;
};
