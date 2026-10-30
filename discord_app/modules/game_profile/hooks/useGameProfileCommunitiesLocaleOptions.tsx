// discord_app/modules/game_profile/hooks/useGameProfileCommunitiesLocaleOptions.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameProfileCommunitiesLocaleFilterStore from "../GameProfileCommunitiesLocaleFilterStore.tsx";

require = fn;
let closure_4 = fn(9597).useGameProfileCommunitiesLocaleFilterExclusions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleOptions.tsx");

export default function useGameProfileCommunitiesLocaleOptions(dependencyMap, arg1) {
  closure_0 = dependencyMap;
  closure_1 = arg1;
  const tmp = memo(dependencyMap);
  noop = tmp;
  let tmp2 = GameProfileCommunitiesLocaleFilterStore((toggleLocale) => toggleLocale.toggleLocale);
  GameProfileCommunitiesLocaleFilterStore = tmp2;
  const items = [arg1];
  memo = noop.useMemo(() => {
    const availableLocales = util.getAvailableLocales();
    const mapped = dependencyMap.map((locale) => {
      closure_0 = locale;
      if ("en-US" === locale) {
        const obj2 = { locale, label: null };
        const intl2 = closure_0(1114).intl;
        obj2.label = intl2.string(closure_0(1114).t.LQLMGP);
        return obj2;
      } else {
        const found = closure_0.find((value) => value.value === closure_0);
        const obj = { locale, label: null };
        let stringResult = locale;
        if (null != found) {
          const intl = closure_0(1114).intl;
          stringResult = intl.string(found.localizedName);
        }
        obj.label = stringResult;
        return obj;
      }
    });
    return mapped.sort((label, label2) => {
      label = label.label;
      return label.localeCompare(label2.label);
    });
  }, items);
  let obj = { options: null, toggleLocale: null };
  const items1 = [memo, arg1, tmp];
  obj.options = noop.useMemo(() => {
    closure_1.filter((item) => !set.has(item)).length;
    return memo.map((label) => {
      locale = label.locale;
      const hasItem = set.has(locale);
      let tmp2 = !hasItem;
      const obj = { locale, label: label.label, checked: tmp2, disabled: null };
      if (!hasItem) {
        tmp2 = 1 === length;
      }
      obj.disabled = tmp2;
      return obj;
    });
  }, items1);
  const items2 = [tmp2, dependencyMap];
  obj.toggleLocale = noop.useCallback((arg0) => closure_3(closure_0, arg0), items2);
  return obj;
}
