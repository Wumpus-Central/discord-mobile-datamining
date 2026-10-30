// discord_app/modules/game_profile/hooks/useGameProfileCommunitiesLocaleFilter.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(9597).useGameProfileCommunitiesLocaleFilterExclusions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleFilter.tsx");

export default function useGameProfileCommunitiesLocaleFilter(arg0, arg1) {
  closure_0 = arg1;
  let tmp = closure_4(arg0);
  closure_1 = tmp;
  let items = [arg1];
  const memo = noop.useMemo(() => {
    let items = closure_0;
    if (closure_0 == null) {
      items = [];
    }
    const mapped = items.map((preferredLocale) => preferredLocale.preferredLocale);
    return _modDef12.uniq(mapped.filter(GlobalUtils.isNotNullish));
  }, items);
  const obj = { locales: memo, filteredGuilds: null, showLocaleFilter: memo.length >= 2 };
  const items1 = [arg1, tmp];
  obj.filteredGuilds = noop.useMemo(() => {
    let items = closure_0;
    if (closure_0 == null) {
      items = [];
    }
    return items.filter((preferredLocale) => {
      let tmp = null == preferredLocale.preferredLocale;
      if (!tmp) {
        tmp = !set.has(preferredLocale.preferredLocale);
      }
      return tmp;
    });
  }, items1);
  return obj;
}
