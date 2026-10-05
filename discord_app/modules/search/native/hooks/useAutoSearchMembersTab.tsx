// discord_app/modules/search/native/hooks/useAutoSearchMembersTab.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import Constants from "../../../../Constants.tsx";
import SearchPlatformUtilsDefault from "../SearchPlatformUtils.tsx";
import SearchPlatformConstants from "../SearchPlatformConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_5 = SearchPlatformConstants.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const SearchTypes = Constants.SearchTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let autocompleteVisible;
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === arg1) {
        let tmp2;
        let tmp3;
        let tmp6;
        let tmp5;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = react.useEffect(tmp2, tmp3);
        if (cResult[4] !== arg0) {
          const fn2 = function h() {
            return () => {
              const obj = closure_1(dependencyMap[8]);
              const result = obj.cleanupGuildMemberTab(closure_1_0);
            };
          };
          const items = [arg0];
          cResult[4] = arg0;
          cResult[5] = fn2;
          cResult[6] = items;
          tmp6 = items;
          tmp5 = fn2;
        } else {
          tmp5 = cResult[5];
          tmp6 = cResult[6];
        }
        const effect1 = react.useEffect(tmp5, tmp6);
      }
      const fn = function o() {
        if (!closure_1) {
          const obj = _mod12;
          const debounceResult = obj.debounce((searchQueryString) => {
            let tmp13;
            if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
              const obj2 = searchContext(dependencyMap[7]);
              const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(searchContext);
              if (null != guildIdFromSearchContext) {
                const channelIds = autocompleteVisible.getChannelIds(searchContext);
                let tmp8 = null;
                if (0 !== channelIds.size) {
                  let first = null;
                  if (1 === channelIds.size) {
                    const _Array = Array;
                    first = Array.from(channelIds)[0];
                  }
                  tmp8 = first;
                }
                const obj3 = {
                  searchContext,
                  searchQueryString,
                  guildId: guildIdFromSearchContext,
                  channelId: tmp8,
                  threadId: tmp13,
                };
                tmp13 = null;
                const searchGuildMemberTab = closure_1(dependencyMap[8]).searchGuildMemberTab;
                closure_1(dependencyMap[8]);
                if (searchContext.type === constants.THREAD) {
                  tmp13 = tmp8;
                }
                searchGuildMemberTab(obj3);
              }
            }
          }, closure_5);
          let obj2 = SearchPlatformUtilsDefault;
          return obj2.subscribeTextInputValue(searchContext, debounceResult);
        }
      };
      const items1 = [arg1, arg0];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp3 = items1;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let autocompleteVisible;
      let closure_0 = arg0;
      let closure_1 = arg1;
      const items = [arg1, arg0];
      const effect = react.useEffect(() => {
        if (!closure_1) {
          const obj = _mod12;
          const debounceResult = obj.debounce((searchQueryString) => {
            let tmp13;
            if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
              const obj2 = searchContext(dependencyMap[7]);
              const guildIdFromSearchContext = obj2.getGuildIdFromSearchContext(searchContext);
              if (null != guildIdFromSearchContext) {
                const channelIds = autocompleteVisible.getChannelIds(searchContext);
                let tmp8 = null;
                if (0 !== channelIds.size) {
                  let first = null;
                  if (1 === channelIds.size) {
                    const _Array = Array;
                    first = Array.from(channelIds)[0];
                  }
                  tmp8 = first;
                }
                const obj3 = {
                  searchContext,
                  searchQueryString,
                  guildId: guildIdFromSearchContext,
                  channelId: tmp8,
                  threadId: tmp13,
                };
                tmp13 = null;
                const searchGuildMemberTab = closure_1(dependencyMap[8]).searchGuildMemberTab;
                closure_1(dependencyMap[8]);
                if (searchContext.type === constants.THREAD) {
                  tmp13 = tmp8;
                }
                searchGuildMemberTab(obj3);
              }
            }
          }, closure_5);
          let obj2 = SearchPlatformUtilsDefault;
          return obj2.subscribeTextInputValue(searchContext, debounceResult);
        }
      }, items);
      const items1 = [arg0];
      const effect1 = react.useEffect(
        () => () => {
          const obj = closure_1(dependencyMap[8]);
          const result = obj.cleanupGuildMemberTab(closure_1_0);
        },
        items1,
      );
    };
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = tmp2;
