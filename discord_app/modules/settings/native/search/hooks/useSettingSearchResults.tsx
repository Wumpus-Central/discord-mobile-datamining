// discord_app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
import debounceDefault from "../../../../../../_runtime/00551_debounce.js";
import SettingRendererUtils from "../../renderer/SettingRendererUtils.tsx";
import SettingTreeManagerDefault from "../../renderer/SettingTreeManager.tsx";
import UserSettingSearchManagerDefault from "../../../../user_settings/UserSettingSearchManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "../../renderer/stores/SettingBlocklistStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_8 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSettingSearchResults() {
      const cResult = require("c").c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocaleStore];
        const fn = function o() {
          return locale.locale;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const tmp10 = UserSettingSearchManagerDefault;
        const tmp102 = new tmp10(tmp(14887).getSettingSearchableTitles(), stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = tmp102;
        let tmp8 = tmp102;
        const tmpResult2 = tmp(14887);
      } else {
        tmp8 = cResult[3];
      }
      _require = tmp8;
      const obj4 = noop;
      const tmpResult = require("initialize");
      [tmp17, importDefault] = noop.useState(closure_8);
      const tmp16 = _slicedToArray(noop.useState(closure_8), 2);
      [tmp19, dependencyMap] = noop.useState(false);
      const tmp18 = _slicedToArray(noop.useState(false), 2);
      [tmp21, _slicedToArray] = noop.useState(10);
      if (cResult[4] !== tmp8) {
        const tmp24 = debounceDefault((arg0) => {
          scoredSearchResults = SettingBlocklistStore.getField("blocklist");
          scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
          const found = scoredSearchResults.filter((setting) => {
            setting = setting.setting;
            const isBlockedResult = SettingTreeManagerDefault.isBlocked(setting, closure_0);
            let tmp3 = !isBlockedResult;
            if (!isBlockedResult) {
              tmp3 = !closure_0(14756).SETTING_RENDERER_CONFIG[setting].unsearchable;
            }
            return tmp3;
          });
          importDefault(found);
          _slicedToArray(Math.max(Math.min(found.length, 10), 5));
          dependencyMap(false);
        }, 350);
        cResult[4] = tmp8;
        cResult[5] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[5];
      }
      noop = tmp22;
      if (cResult[6] !== tmp22) {
        const fn2 = function x() {
          closure_0 = UserSettingSearchStore.subscribe(
            (query) => query.query.trim(),
            (arg0) => {
              if ("" === arg0) {
                const cancel = closure_1_4.cancel;
                if (cancel != null) {
                  cancel();
                }
                closure_1_1(closure_2_8);
                dependencyMap(false);
              } else {
                dependencyMap(true);
                closure_1_4(arg0);
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
            const cancel = closure_4.cancel;
            if (cancel != null) {
              cancel();
            }
          };
        };
        const items1 = [tmp22];
        cResult[6] = tmp22;
        cResult[7] = fn2;
        cResult[8] = items1;
        let tmp26 = items1;
        let tmp25 = fn2;
      } else {
        tmp25 = cResult[7];
        tmp26 = cResult[8];
      }
      const effect = obj4.useEffect(tmp25, tmp26);
      if (cResult[9] === tmp19) {
        if (cResult[10] === tmp21) {
          if (cResult[11] === tmp17) {
            let tmp28 = cResult[12];
          }
          return tmp28;
        }
      }
      const obj2 = { settings: tmp17, isLoading: tmp19, placeholderCount: tmp21 };
      cResult[9] = tmp19;
      cResult[10] = tmp21;
      cResult[11] = tmp17;
      cResult[12] = obj2;
      tmp28 = obj2;
      const tmp20 = _slicedToArray(noop.useState(10), 2);
    }
  : function useSettingSearchResults() {
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
              const isBlockedResult = scoredSearchResults(14888).isBlocked(setting, closure_0);
              let tmp3 = !isBlockedResult;
              if (!isBlockedResult) {
                tmp3 = !stateFromStores(14756).SETTING_RENDERER_CONFIG[setting].unsearchable;
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
    };
