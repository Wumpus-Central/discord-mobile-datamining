// discord_app/modules/settings/native/renderer/SettingHookHarness.tsx
import SettingRendererConstants from "SettingRendererConstants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import SettingBlocklistStore from "stores/SettingBlocklistStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let set;

const NodeType = SettingRendererConstants.NodeType;
let closure_6 = [];
const map = new Map();
const map1 = new Map();
const memoResult = react.memo(function SettingHookHarness() {
  let obj2;
  let tmp3;
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
          set = map1.set;
          if (searchTerms == null) {
            searchTerms = closure_6;
          }
          let result1 = set(tmp3, searchTerms);
        }
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
      let tmp8 = !tmp6 && field.has(tmp3);
      if (tmp8) {
        let arr2 = items1.push(tmp3);
      }
    }
  }
  const effect = react.useEffect(function () {
    if (items.length > 0) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(SettingBlocklistStore.getField("blocklist"));
      const item = items.forEach((item) => set.add(item));
      const item1 = items1.forEach((item) => set.delete(item));
      const obj = { blocklist: set };
      SettingBlocklistStore.setState(obj);
    }
  });
  return null;
});
let result = size.fileFinishedImporting("modules/settings/native/renderer/SettingHookHarness.tsx");

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
