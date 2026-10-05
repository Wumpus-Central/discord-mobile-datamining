// discord_app/modules/settings/native/search/hooks/useSettingSearchResults.tsx
import debounceDefault from "../../../../../../_runtime/00551_debounce.js";
import UserSettingSearchManagerDefault from "../../../../user_settings/UserSettingSearchManager.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import SettingBlocklistStore from "../../renderer/stores/SettingBlocklistStore.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let setting;

let react = react_mod;
let closure_7 = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      let closure_4;
      let first;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp15;
      let tmp18;
      let tmp19;
      let obj = first(576);
      const cResult = obj.c(8);
      const tmp = first;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const self = this;
        const self2 = this;
        const tmp6 = UserSettingSearchManagerDefault;
        const tmpResult = tmp(14503);
        const tmp62 = new tmp6(tmpResult.getSettingSearchableTitles());
        cResult[0] = tmp62;
        first = tmp62;
      } else {
        first = cResult[0];
      }
      [tmp10, importDefault] = _slicedToArray(react.useState(closure_7), 2);
      const tmp9 = _slicedToArray(react.useState(closure_7), 2);
      [tmp12, dependencyMap] = _slicedToArray(react.useState(false), 2);
      const tmp11 = _slicedToArray(react.useState(false), 2);
      const tmp13 = _slicedToArray(react.useState(10), 2);
      [tmp14, _slicedToArray] = tmp13;
      const obj3 = react;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = debounceDefault((arg0) => {
          const field = SettingBlocklistStore.getField("blocklist");
          const scoredSearchResults = first.getScoredSearchResults(arg0);
          const found = scoredSearchResults.filter((setting) => {
            setting = setting.setting;
            const obj = closure_2_1(closure_2_2[4]);
            let tmp3 = !obj.isBlocked(setting, closure_0);
            obj.isBlocked(setting, closure_0);
            if (tmp3) {
              tmp3 = !first(closure_2_2[5]).SETTING_RENDERER_CONFIG[setting].unsearchable;
            }
            return tmp3;
          });
          importDefault(found);
          _slicedToArray(Math.max(Math.min(found.length, 10), 5));
          let tmp3 = dependencyMap(false);
        }, 350);
        cResult[1] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[1];
      }
      react = tmp15;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function q() {
          const obj = {
            equalityFn(arg0, arg1) {
              return arg0 === arg1;
            },
          };
          let closure_0 = UserSettingSearchStore.subscribe(
            (query) => {
              const str = query.query;
              return str.trim();
            },
            (arg0) => {
              if ("" === arg0) {
                const cancel = closure_1_4.cancel;
                if (cancel != null) {
                  cancel();
                }
                closure_1_1(closure_2_7);
                closure_1_2(false);
              } else {
                closure_1_2(true);
                closure_1_4(arg0);
              }
            },
            obj,
          );
          return () => {
            closure_0();
            const cancel = closure_4.cancel;
            if (cancel != null) {
              cancel();
            }
          };
        };
        const items = [tmp15];
        cResult[2] = fn;
        cResult[3] = items;
        tmp19 = items;
        tmp18 = fn;
      } else {
        tmp18 = cResult[2];
        tmp19 = cResult[3];
      }
      const effect = obj3.useEffect(tmp18, tmp19);
      if (cResult[4] === tmp12) {
        if (cResult[5] === tmp14) {
          let tmp21;
          if (cResult[6] === tmp10) {
            tmp21 = cResult[7];
          }
          return tmp21;
        }
      }
      const obj2 = { settings: tmp10, isLoading: tmp12, placeholderCount: tmp14 };
      cResult[4] = tmp12;
      cResult[5] = tmp14;
      cResult[6] = tmp10;
      cResult[7] = obj2;
      tmp21 = obj2;
    }
  : () => {
      let closure_1;
      let closure_2;
      let closure_3;
      let field;
      let isLoading;
      let memo1;
      let placeholderCount;
      let settings;
      const memo = memo1.useMemo(() => {
        const tmp = closure_1(closure_2[8]);
        const obj = memo(closure_2[9]);
        const tmp2 = new tmp(obj.getSettingSearchableTitles());
        return tmp2;
      }, []);
      [settings, closure_1] = memo1.useState(closure_7);
      [isLoading, closure_2] = memo1.useState(false);
      [placeholderCount, _slicedToArray] = memo1.useState(10);
      const items = [memo];
      memo1 = memo1.useMemo(
        () =>
          debounceDefault((arg0) => {
            const field2 = field.getField("blocklist");
            scoredSearchResults = scoredSearchResults.getScoredSearchResults(arg0);
            const found = scoredSearchResults.filter((setting) => {
              setting = setting.setting;
              const obj = closure_2_1(closure_2_2[4]);
              let tmp3 = !obj.isBlocked(setting, closure_0);
              obj.isBlocked(setting, closure_0);
              if (tmp3) {
                tmp3 = !scoredSearchResults(closure_2_2[5]).SETTING_RENDERER_CONFIG[setting].unsearchable;
              }
              return tmp3;
            });
            closure_1_1(found);
            closure_1_3(Math.max(Math.min(found.length, 10), 5));
            let tmp3 = closure_1_2(false);
          }, 350),
        items,
      );
      const items1 = [memo1];
      const effect = memo1.useEffect(() => {
        const obj = {
          equalityFn(arg0, arg1) {
            return arg0 === arg1;
          },
        };
        let closure_0 = UserSettingSearchStore.subscribe(
          (query) => {
            const str = query.query;
            return str.trim();
          },
          (arg0) => {
            if ("" === arg0) {
              const cancel = memo1.cancel;
              if (cancel != null) {
                cancel();
              }
              closure_1_1(closure_2_7);
              closure_1_2(false);
            } else {
              closure_1_2(true);
              memo1(arg0);
            }
          },
          obj,
        );
        return () => {
          closure_0();
          const cancel = memo1.cancel;
          if (cancel != null) {
            cancel();
          }
        };
      }, items1);
      return { settings, isLoading, placeholderCount };
    };
const result = size.fileFinishedImporting("modules/settings/native/search/hooks/useSettingSearchResults.tsx");

export const useSettingSearchResults = tmp2;
