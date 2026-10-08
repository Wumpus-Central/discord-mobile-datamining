// discord_app/modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import SearchPlatformUtilsDefault from "../SearchPlatformUtils.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import SearchPlatformActionCreatorsDefault from "../SearchPlatformActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_4 = fn(12069).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAutoSearchGuildChannelTab(searchContext, arg1) {
      _require = searchContext;
      closure_1 = arg1;
      const cResult = require("c").c(14);
      if (cResult[0] !== searchContext) {
        const fn = function c(searchQueryString) {
          const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const obj3 = { searchContext, searchQueryString, guildId: guildIdFromSearchContext };
            const result = SearchPlatformActionCreatorsDefault.searchGuildChannelTab(obj3);
          }
        };
        cResult[0] = searchContext;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      dependencyMap = tmp2;
      if (cResult[2] === arg1) {
        if (cResult[3] === tmp2) {
          let tmp3 = cResult[4];
          let tmp4 = cResult[5];
        }
        const effect = noop.useEffect(tmp3, tmp4);
        if (cResult[6] === arg1) {
          if (cResult[7] === tmp2) {
            if (cResult[8] === searchContext) {
              let tmp6 = cResult[9];
              let tmp7 = cResult[10];
            }
            const effect1 = noop.useEffect(tmp6, tmp7);
            if (cResult[11] !== searchContext) {
              class C {
                constructor() {
                  return () => {
                    const result = closure_1(closure_2[5]).cleanupGuildChannelTab(searchContext);
                  };
                }
              }
              const items = [searchContext];
              cResult[11] = searchContext;
              cResult[12] = C;
              cResult[13] = items;
              let tmp10 = items;
            } else {
              class C {
                constructor() {
                  return () => {
                    const result = closure_1(closure_2[5]).cleanupGuildChannelTab(searchContext);
                  };
                }
              }
              tmp10 = cResult[13];
            }
            const effect2 = noop.useEffect(C, tmp10);
          }
        }
        const fn3 = function f() {
          if (!closure_1) {
            const debounceResult = _mod12.debounce(closure_2, closure_4);
            return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult, true);
          }
        };
        const items1 = [searchContext, arg1, tmp2];
        cResult[6] = arg1;
        cResult[7] = tmp2;
        cResult[8] = searchContext;
        cResult[9] = fn3;
        cResult[10] = items1;
        tmp7 = items1;
        tmp6 = fn3;
      }
      const fn2 = function h() {
        if (!closure_1) {
          closure_2("");
        }
      };
      const items2 = [arg1, tmp2];
      cResult[2] = arg1;
      cResult[3] = tmp2;
      cResult[4] = fn2;
      cResult[5] = items2;
      tmp4 = items2;
      tmp3 = fn2;
      let obj = require("c");
    }
  : function useAutoSearchGuildChannelTab(searchContext, arg1) {
      closure_1 = arg1;
      const items = [searchContext];
      const callback = noop.useCallback((searchQueryString) => {
        const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
        if (null != guildIdFromSearchContext) {
          const obj3 = { searchContext, searchQueryString, guildId: guildIdFromSearchContext };
          const result = SearchPlatformActionCreatorsDefault.searchGuildChannelTab(obj3);
        }
      }, items);
      const items1 = [arg1, callback];
      const effect = noop.useEffect(() => {
        if (!closure_1) {
          callback("");
        }
      }, items1);
      const items2 = [searchContext, arg1, callback];
      const effect1 = noop.useEffect(() => {
        if (!closure_1) {
          const debounceResult = _mod12.debounce(callback, closure_4);
          return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult, true);
        }
      }, items2);
      const items3 = [searchContext];
      const effect2 = noop.useEffect(
        () => () => {
          const result = closure_1(callback[5]).cleanupGuildChannelTab(searchContext);
        },
        items3,
      );
    };
