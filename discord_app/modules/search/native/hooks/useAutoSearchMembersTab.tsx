// discord_app/modules/search/native/hooks/useAutoSearchMembersTab.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import SearchPlatformUtilsDefault from "../SearchPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_5 = fn(11977).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const SearchTypes = fn(1085).SearchTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(7);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp2 = cResult[2];
          let tmp3 = cResult[3];
        }
        const effect = noop.useEffect(tmp2, tmp3);
        if (cResult[4] !== arg0) {
          const fn2 = function h() {
            return () => {
              const result = closure_1(11985).cleanupGuildMemberTab(closure_1_0);
            };
          };
          const items = [arg0];
          cResult[4] = arg0;
          cResult[5] = fn2;
          cResult[6] = items;
          let tmp6 = items;
          let tmp5 = fn2;
        } else {
          tmp5 = cResult[5];
          tmp6 = cResult[6];
        }
        const effect1 = noop.useEffect(tmp5, tmp6);
      }
      const fn = function o() {
        if (!closure_1) {
          const debounceResult = _mod12.debounce((searchQueryString) => {
            if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
              const guildIdFromSearchContext = searchContext(11968).getGuildIdFromSearchContext(searchContext);
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
                const obj4 = {
                  searchContext,
                  searchQueryString,
                  guildId: guildIdFromSearchContext,
                  channelId: tmp8,
                  threadId: null,
                };
                let tmp12 = null;
                if (searchContext.type === constants.THREAD) {
                  tmp12 = tmp8;
                }
                obj4.threadId = tmp12;
                closure_1(11985).searchGuildMemberTab(obj4);
                const obj3 = closure_1(11985);
              }
              const obj2 = searchContext(11968);
            }
          }, closure_5);
          return SearchPlatformUtilsDefault.subscribeTextInputValue(searchContext, debounceResult);
        }
      };
      const items1 = [arg1, arg0];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp3 = items1;
      tmp2 = fn;
      let obj = require("c");
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      const items = [arg1, arg0];
      const effect = noop.useEffect(() => {
        if (!closure_1) {
          const debounceResult = _mod12.debounce((searchQueryString) => {
            if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
              const guildIdFromSearchContext = searchContext(11968).getGuildIdFromSearchContext(searchContext);
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
                const obj4 = {
                  searchContext,
                  searchQueryString,
                  guildId: guildIdFromSearchContext,
                  channelId: tmp8,
                  threadId: null,
                };
                let tmp12 = null;
                if (searchContext.type === constants.THREAD) {
                  tmp12 = tmp8;
                }
                obj4.threadId = tmp12;
                closure_1(11985).searchGuildMemberTab(obj4);
                const obj3 = closure_1(11985);
              }
              const obj2 = searchContext(11968);
            }
          }, closure_5);
          return SearchPlatformUtilsDefault.subscribeTextInputValue(searchContext, debounceResult);
        }
      }, items);
      const items1 = [arg0];
      const effect1 = noop.useEffect(
        () => () => {
          const result = closure_1(11985).cleanupGuildMemberTab(closure_1_0);
        },
        items1,
      );
    };
