// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx
import SearchPlatformActionCreatorsDefault from "../../../../search/native/SearchPlatformActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SearchQueryStore from "../../../../search/native/stores/SearchQueryStore.tsx";

const require = fn;
let closure_5 = fn(9310).setIsChannelDetailsSearchActive;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = {
  back: {
    justifyContent: "center",
    height: fn(12076).SEARCH_BAR_HEIGHT,
    paddingStart: fn(9629).CHANNEL_DETAILS_MARGIN,
    paddingEnd: 8,
  },
};
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  justifyContent: "center",
  height: fn(12076).SEARCH_BAR_HEIGHT,
  paddingStart: fn(9629).CHANNEL_DETAILS_MARGIN,
  paddingEnd: 8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelDetailsSearchBar(channelId) {
        const cResult = channelId(channelDetailsSearchContext[8]).c(22);
        channelId = channelId.channelId;
        const onBackPress = channelId.onBackPress;
        ({ showBackButton, ref } = channelId);
        let tmp4 = undefined === showBackButton;
        if (!tmp4) {
          tmp4 = showBackButton;
        }
        closure_7();
        let obj = channelId(channelDetailsSearchContext[8]);
        channelDetailsSearchContext = channelId(channelDetailsSearchContext[9]).useChannelDetailsSearchContext(
          channelId,
          channelId.guildId,
        );
        if (cResult[0] !== channelDetailsSearchContext) {
          const fn = function u() {
            return () => {
              onBackPress(channelDetailsSearchContext[10]).trackSearchClosed({ searchContext });
            };
          };
          cResult[0] = channelDetailsSearchContext;
          cResult[1] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === channelId) {
          if (cResult[3] === channelDetailsSearchContext) {
            let tmp8 = cResult[4];
          }
          const effect = noop.useEffect(tmp7, tmp8);
          if (cResult[5] !== channelDetailsSearchContext) {
            class C {
              constructor() {
                tmp = closure_2;
                if (!closure_4.isInitialSearchQuery(closure_2)) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
                }
                return;
              }
            }
            cResult[5] = channelDetailsSearchContext;
            cResult[6] = C;
          } else {
            class C {
              constructor() {
                tmp = closure_2;
                if (!closure_4.isInitialSearchQuery(closure_2)) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
                }
                return;
              }
            }
          }
          noop = C;
          if (cResult[7] === channelId) {
            class C {
              constructor() {
                tmp = closure_2;
                if (!closure_4.isInitialSearchQuery(closure_2)) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
                }
                return;
              }
            }
            SearchQueryStore = tmp12;
            if (cResult[10] === onBackPress) {
              class C {
                constructor() {
                  tmp = closure_2;
                  if (!closure_4.isInitialSearchQuery(closure_2)) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[11]);
                    updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
                  }
                  return;
                }
              }
            }
            class E {
              constructor() {
                tmp = closure_3();
                if (undefined !== onBackPress) {
                  tmp4 = onBackPress();
                } else {
                  tmp2 = closure_4;
                  tmp3 = closure_4();
                }
                return;
              }
            }
            cResult[10] = onBackPress;
            cResult[11] = tmp12;
            cResult[12] = C;
            cResult[13] = E;
          }
          const fn2 = function _() {
            C();
            closure_5(channelId, false, "action");
          };
          cResult[7] = channelId;
          cResult[8] = C;
          cResult[9] = fn2;
        }
        const items = [channelId, channelDetailsSearchContext];
        cResult[2] = channelId;
        cResult[3] = channelDetailsSearchContext;
        cResult[4] = items;
        tmp8 = items;
        const tmpResult = channelId(channelDetailsSearchContext[9]);
      }
    : function ChannelDetailsSearchBar(channelId) {
        channelId = channelId.channelId;
        const onBackPress = channelId.onBackPress;
        let flag = channelId.showBackButton;
        if (flag === undefined) {
          flag = true;
        }
        let channelDetailsSearchContext;
        let callback;
        const tmp = closure_7();
        channelDetailsSearchContext = channelId(channelDetailsSearchContext[9]).useChannelDetailsSearchContext(
          channelId,
          channelId.guildId,
        );
        const items = [channelId, channelDetailsSearchContext];
        const effect = callback.useEffect(
          () => () => {
            onBackPress(channelDetailsSearchContext[10]).trackSearchClosed({ searchContext });
          },
          items,
        );
        const items1 = [channelDetailsSearchContext];
        callback = callback.useCallback(() => {
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) =>
              reset.reset(),
            );
          }
        }, items1);
        const items2 = [channelId, callback];
        const callback1 = callback.useCallback(() => {
          callback();
          closure_5(channelId, false, "action");
        }, items2);
        const items3 = [onBackPress, callback1, callback];
        const callback2 = callback.useCallback(() => {
          callback();
          if (undefined !== onBackPress) {
            onBackPress();
          } else {
            callback1();
          }
        }, items3);
        const obj2 = { ref: channelId.ref, searchContext: channelDetailsSearchContext, backButton: null };
        let tmp9Result = null;
        let obj = channelId(channelDetailsSearchContext[9]);
        if (flag) {
          const obj3 = {
            accessibilityRole: "button",
            onPress: callback2,
            style: tmp.back,
            accessibilityLabel: null,
            children: null,
          };
          const intl = tmp2(tmp3[13]).intl;
          obj3.accessibilityLabel = intl.string(tmp2(tmp3[13]).t["13/7kX"]);
          obj3.children = jsx(tmp2(tmp3[14]).ChevronLargeLeftIcon, { size: "sm", color: "interactive-text-default" });
          tmp9Result = jsx(tmp2(tmp3[12]).PressableOpacity, {
            accessibilityRole: "button",
            onPress: callback2,
            style: tmp.back,
            accessibilityLabel: null,
            children: null,
          });
        }
        obj2.backButton = tmp9Result;
        return jsx(onBackPress(channelDetailsSearchContext[15]), {
          ref: channelId.ref,
          searchContext: channelDetailsSearchContext,
          backButton: null,
        });
      },
);
