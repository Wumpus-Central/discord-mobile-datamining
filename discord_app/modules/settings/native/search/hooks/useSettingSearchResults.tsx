// === Module 14793: useSettingSearchResults ===

// Module 14793 (useSettingSearchResults)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import zustandStore from "zustandStore";
import closure_6 from "zustandStore";

const require = arg1;
let closure_7 = [];
const result = require("zustandStore").fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = function useSettingSearchResults() {
  const memo = memo1.useMemo(() => {
    let tmp = callback(14794);
    tmp = new tmp(memo(13765).getSettingSearchableTitles());
    return tmp;
  }, []);
  const settings = callback(memo1.useState(closure_7), 2);
  let closure_1 = settings[1];
  const isLoading = callback(memo1.useState(false), 2);
  let closure_2 = isLoading[1];
  const placeholderCount = callback(memo1.useState(10), 2);
  callback = placeholderCount[1];
  const items = [memo];
  memo1 = memo1.useMemo(() => callback(636)((arg0) => {
    let scoredSearchResults = outer1_6.getField("blocklist");
    scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
    const found = scoredSearchResults.filter((setting) => {
      setting = setting.setting;
      const isBlockedResult = outer1_1(outer1_2[4]).isBlocked(setting, callback);
      let tmp3 = !isBlockedResult;
      if (!isBlockedResult) {
        tmp3 = !callback(outer1_2[5]).SETTING_RENDERER_CONFIG[setting].unsearchable;
      }
      return tmp3;
    });
    callback(found);
    callback3(Math.max(Math.min(found.length, 10), 5));
    callback2(false);
  }, 350), items);
  const items1 = [memo1];
  const effect = memo1.useEffect(() => {
    let closure_0 = outer1_5.subscribe((query) => query.query.trim(), (arg0) => {
      if ("" === arg0) {
        const cancel = lib.cancel;
        if (cancel != null) {
          cancel();
        }
        callback2(outer1_7);
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
      const cancel = outer1_4.cancel;
      if (cancel != null) {
        cancel();
      }
    };
  }, items1);
  return { settings: settings[0], isLoading: isLoading[0], placeholderCount: placeholderCount[0] };
};