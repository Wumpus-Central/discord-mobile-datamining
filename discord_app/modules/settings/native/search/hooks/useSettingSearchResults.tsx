// discord_app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
import debounceDefault from "../../../../../../_runtime/00551_debounce.js";
import SettingTreeManagerDefault from "../../renderer/SettingTreeManager.tsx";
import UserSettingSearchManagerDefault from "../../../../user_settings/UserSettingSearchManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "../../renderer/stores/SettingBlocklistStore.tsx";

const require = fn;
let closure_7 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = first(576).c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = UserSettingSearchManagerDefault;
        const tmp62 = new tmp6(tmp(14499).getSettingSearchableTitles());
        cResult[0] = tmp62;
        first = tmp62;
        const tmpResult = tmp(14499);
      } else {
        first = cResult[0];
      }
      const obj = first(576);
      const obj3 = noop;
      tmp = first;
      [tmp12, importDefault] = noop.useState(closure_7);
      const tmp11 = _slicedToArray(noop.useState(closure_7), 2);
      [tmp14, dependencyMap] = noop.useState(false);
      const tmp13 = _slicedToArray(noop.useState(false), 2);
      [tmp16, _slicedToArray] = noop.useState(10);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = debounceDefault((arg0) => {
          const field = SettingBlocklistStore.getField("blocklist");
          const found = first.getScoredSearchResults(arg0).filter((setting) => {
            setting = setting.setting;
            const isBlockedResult = SettingTreeManagerDefault.isBlocked(setting, closure_0);
            let tmp3 = !isBlockedResult;
            if (!isBlockedResult) {
              tmp3 = !first(14405).SETTING_RENDERER_CONFIG[setting].unsearchable;
            }
            return tmp3;
          });
          importDefault(found);
          _slicedToArray(Math.max(Math.min(found.length, 10), 5));
          dependencyMap(false);
        }, 350);
        cResult[1] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[1];
      }
      noop = tmp17;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function q() {
          closure_0 = UserSettingSearchStore.subscribe(
            (query) => query.query.trim(),
            (arg0) => {
              if ("" === arg0) {
                const cancel = closure_1_4.cancel;
                if (cancel != null) {
                  cancel();
                }
                closure_1_1(closure_2_7);
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
        const items = [tmp17];
        cResult[2] = fn;
        cResult[3] = items;
        let tmp21 = items;
        let tmp20 = fn;
      } else {
        tmp20 = cResult[2];
        tmp21 = cResult[3];
      }
      const effect = obj3.useEffect(tmp20, tmp21);
      if (cResult[4] === tmp14) {
        if (cResult[5] === tmp16) {
          if (cResult[6] === tmp12) {
            let tmp23 = cResult[7];
          }
          return tmp23;
        }
      }
      const obj2 = { settings: tmp12, isLoading: tmp14, placeholderCount: tmp16 };
      cResult[4] = tmp14;
      cResult[5] = tmp16;
      cResult[6] = tmp12;
      cResult[7] = obj2;
      tmp23 = obj2;
      const tmp15 = _slicedToArray(noop.useState(10), 2);
    }
  : () => {
      const memo = memo1.useMemo(() => {
        const tmp = closure_1(14505);
        const obj = memo(14499);
        return new tmp(memo(14499).getSettingSearchableTitles());
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
              const isBlockedResult = closure_2_1(14500).isBlocked(setting, closure_0);
              let tmp3 = !isBlockedResult;
              if (!isBlockedResult) {
                tmp3 = !scoredSearchResults(14405).SETTING_RENDERER_CONFIG[setting].unsearchable;
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
