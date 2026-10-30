// discord_app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
import debounceDefault from "../../../../../../_runtime/00551_debounce.js";
import SettingRendererUtils from "../../renderer/SettingRendererUtils.tsx";
import UserSettingSearchManagerDefault from "../../../../user_settings/UserSettingSearchManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "../../renderer/stores/SettingBlocklistStore.tsx";

require = fn;
let closure_8 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export function useSettingSearchResults() {
  const items = [memo1];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => memo1.locale);
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    const tmp = UserSettingSearchManagerDefault;
    return new tmp(SettingRendererUtils.getSettingSearchableTitles(), stateFromStores);
  }, items1);
  const settings = _slicedToArray(noop.useState(closure_8), 2);
  dependencyMap = settings[1];
  const isLoading = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = isLoading[1];
  const placeholderCount = _slicedToArray(noop.useState(10), 2);
  noop = placeholderCount[1];
  const items2 = [memo];
  memo1 = noop.useMemo(
    () =>
      debounceDefault((arg0) => {
        const field2 = field.getField("blocklist");
        scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
        const found = scoredSearchResults.filter((setting) => {
          setting = setting.setting;
          const isBlockedResult = scoredSearchResults(16538).isBlocked(setting, closure_0);
          let tmp3 = !isBlockedResult;
          if (!isBlockedResult) {
            tmp3 = !stateFromStores(16384).SETTING_RENDERER_CONFIG[setting].unsearchable;
          }
          return tmp3;
        });
        dependencyMap(found);
        closure_1_4(Math.max(Math.min(found.length, 10), 5));
        closure_1_3(false);
      }, 350),
    items2,
  );
  const items3 = [memo1];
  const effect = noop.useEffect(() => {
    closure_0 = UserSettingSearchStore.subscribe(
      (query) => query.query.trim(),
      (arg0) => {
        if ("" === arg0) {
          const cancel = memo1.cancel;
          if (cancel != null) {
            cancel();
          }
          closure_1_2(closure_2_8);
          closure_1_3(false);
        } else {
          closure_1_3(true);
          memo1(arg0);
        }
      },
      {
        equalityFn(arg0, arg1) {
          return arg0 === arg1;
        },
        fireImmediately: true,
      },
    );
    return () => {
      closure_0();
      const cancel = memo1.cancel;
      if (cancel != null) {
        cancel();
      }
    };
  }, items3);
  return { settings: settings[0], isLoading: isLoading[0], placeholderCount: placeholderCount[0] };
}
