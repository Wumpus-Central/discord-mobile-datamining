// discord_app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
import debounceDefault from "../../../../../../_runtime/00551_debounce.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "../../renderer/stores/SettingBlocklistStore.tsx";

const require = fn;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = function useSettingSearchResults() {
  const memo = memo1.useMemo(() => {
    let tmp = closure_1(14699);
    tmp = new tmp(memo(14693).getSettingSearchableTitles());
    return tmp;
  }, []);
  const settings = _slicedToArray(memo1.useState(closure_7), 2);
  closure_1 = settings[1];
  const isLoading = _slicedToArray(memo1.useState(false), 2);
  dependencyMap = isLoading[1];
  const placeholderCount = _slicedToArray(memo1.useState(10), 2);
  _slicedToArray = placeholderCount[1];
  const items = [memo];
  memo1 = memo1.useMemo(
    () =>
      debounceDefault((arg0) => {
        const field2 = field.getField("blocklist");
        scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
        const found = scoredSearchResults.filter((setting) => {
          setting = setting.setting;
          const isBlockedResult = closure_2_1(14694).isBlocked(setting, closure_0);
          let tmp3 = !isBlockedResult;
          if (!isBlockedResult) {
            tmp3 = !scoredSearchResults(14584).SETTING_RENDERER_CONFIG[setting].unsearchable;
          }
          return tmp3;
        });
        closure_1_1(found);
        closure_1_3(Math.max(Math.min(found.length, 10), 5));
        dependencyMap(false);
      }, 350),
    items,
  );
  const items1 = [memo1];
  const effect = memo1.useEffect(() => {
    closure_0 = UserSettingSearchStore.subscribe(
      (query) => query.query.trim(),
      (arg0) => {
        if ("" === arg0) {
          const cancel = memo1.cancel;
          if (cancel != null) {
            cancel();
          }
          closure_1_1(closure_2_7);
          dependencyMap(false);
        } else {
          dependencyMap(true);
          memo1(arg0);
        }
      },
      {
        equalityFn(arg0, arg1) {
          return arg0 === arg1;
        },
      },
    );
    return () => {
      closure_0();
      const cancel = memo1.cancel;
      if (cancel != null) {
        cancel();
      }
    };
  }, items1);
  return { settings: settings[0], isLoading: isLoading[0], placeholderCount: placeholderCount[0] };
};
