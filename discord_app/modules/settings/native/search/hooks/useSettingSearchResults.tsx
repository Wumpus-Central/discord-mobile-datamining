// discord_app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import zustandStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import zustandStore2 from "../../renderer/stores/SettingBlocklistStore.tsx";

const require = fn;
let closure_7 = [];
const result = require("obj132").fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = function useSettingSearchResults() {
  const memo = memo1.useMemo(() => {
    let tmp = callback(15064);
    tmp = new tmp(memo(13996).getSettingSearchableTitles());
    return tmp;
  }, []);
  const settings = callback(memo1.useState(closure_7), 2);
  closure_1 = settings[1];
  const isLoading = callback(memo1.useState(false), 2);
  closure_2 = isLoading[1];
  const placeholderCount = callback(memo1.useState(10), 2);
  callback = placeholderCount[1];
  const items = [memo];
  memo1 = memo1.useMemo(() => callback(636)((arg0) => {
    let scoredSearchResults = closure_1_6.getField("blocklist");
    scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
    const found = scoredSearchResults.filter((item, index) => {
      const setting = item.setting;
      const isBlockedResult = closure_1_1(closure_1_2[4]).isBlocked(setting, callback);
      let tmp3 = !isBlockedResult;
      if (!isBlockedResult) {
        tmp3 = !callback(closure_1_2[5]).SETTING_RENDERER_CONFIG[setting].unsearchable;
      }
      return tmp3;
    });
    callback(found);
    callback3(Math.max(Math.min(found.length, 10), 5));
    callback2(false);
  }, 350), items);
  const items1 = [memo1];
  const effect = memo1.useEffect(() => {
    closure_0 = closure_1_5.subscribe((query) => query.query.trim(), (arg0) => {
      if ("" === arg0) {
        const cancel = lib.cancel;
        if (cancel != null) {
          cancel();
        }
        callback2(closure_1_7);
        callback3(false);
      } else {
        callback3(true);
        lib(arg0);
      }
    }, {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      }
    });
    return () => {
      callback();
      const cancel = memo1.cancel;
      if (cancel != null) {
        cancel();
      }
    };
  }, items1);
  return { settings: settings[0], isLoading: isLoading[0], placeholderCount: placeholderCount[0] };
};