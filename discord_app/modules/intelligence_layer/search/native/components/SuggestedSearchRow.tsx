// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SearchPlatformUtilsDefault from "../../../../search/native/SearchPlatformUtils.tsx";
import SearchPlatformActionCreatorsDefault from "../../../../search/native/SearchPlatformActionCreators.tsx";
import SuggestedSearchActionCreators from "../../SuggestedSearchActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SmartSearchConstants = fn(11988);
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { iconCircle: null, text: null, compactLabel: null };
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
};
obj.iconCircle = size;
obj.text = { flexShrink: 1 };
obj.compactLabel = { height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center", overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (suggestedSearch) => {
        const cResult = suggestedSearch(576).c(20);
        suggestedSearch = suggestedSearch.suggestedSearch;
        const smartSearchQuery = suggestedSearch.smartSearchQuery;
        const variant = suggestedSearch.variant;
        let str = "default";
        if (undefined !== variant) {
          str = variant;
        }
        const tmp4 = closure_7();
        if (cResult[0] === smartSearchQuery.channelIds) {
          if (cResult[1] === smartSearchQuery.guildId) {
            if (cResult[2] === smartSearchQuery.searchContext) {
              if (cResult[3] === suggestedSearch.suggestedSearchText) {
                let tmp5 = cResult[4];
              }
              let str2 = "redesign/channel-title/semibold";
              if ("default" === str) {
                str2 = "text-md/normal";
              }
              if (cResult[5] === tmp4.text) {
                if (cResult[6] === suggestedSearch.suggestedSearchText) {
                  if (cResult[7] === str2) {
                    let tmp7 = cResult[8];
                  }
                  let compactLabel;
                  if ("compact" === str) {
                    compactLabel = tmp4.compactLabel;
                  }
                  if (cResult[9] === tmp7) {
                    if (cResult[10] === compactLabel) {
                      let tmp11 = cResult[11];
                    }
                    let iconCircle;
                    if (tmp6) {
                      iconCircle = tmp4.iconCircle;
                    }
                    const _Symbol = Symbol;
                    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp19 = jsx(tmp(6548).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" });
                      cResult[12] = tmp19;
                      let tmp17 = tmp19;
                    } else {
                      tmp17 = cResult[12];
                    }
                    if (cResult[13] !== iconCircle) {
                      let obj2 = { style: iconCircle, children: tmp17 };
                      const tmp23 = <View style={iconCircle}>{tmp17}</View>;
                      cResult[13] = iconCircle;
                      cResult[14] = tmp23;
                      let tmp20 = tmp23;
                    } else {
                      tmp20 = cResult[14];
                    }
                    if (cResult[15] === tmp5) {
                      if (cResult[16] === suggestedSearch.suggestedSearchText) {
                        if (cResult[17] === tmp11) {
                          if (cResult[18] === tmp20) {
                            let tmp24 = cResult[19];
                          }
                          return tmp24;
                        }
                      }
                    }
                    const obj3 = {
                      onPress: tmp5,
                      accessibilityLabel: suggestedSearch.suggestedSearchText,
                      label: tmp11,
                      icon: tmp20,
                    };
                    const tmp26 = jsx(tmp(16807).SearchListRow, {
                      onPress: tmp5,
                      accessibilityLabel: suggestedSearch.suggestedSearchText,
                      label: tmp11,
                      icon: tmp20,
                    });
                    cResult[15] = tmp5;
                    cResult[16] = suggestedSearch.suggestedSearchText;
                    cResult[17] = tmp11;
                    cResult[18] = tmp20;
                    cResult[19] = tmp26;
                    tmp24 = tmp26;
                  }
                  const obj4 = { style: compactLabel, children: tmp7 };
                  const tmp14 = <View style={compactLabel}>{tmp7}</View>;
                  cResult[9] = tmp7;
                  cResult[10] = compactLabel;
                  cResult[11] = tmp14;
                  tmp11 = tmp14;
                }
              }
              const obj5 = {
                lineClamp: 2,
                variant: str2,
                color: "redesign-channel-name-muted-text",
                style: tmp4.text,
                children: suggestedSearch.suggestedSearchText,
              };
              const tmp9 = jsx(tmp(4886).Text, {
                lineClamp: 2,
                variant: str2,
                color: "redesign-channel-name-muted-text",
                style: tmp4.text,
                children: suggestedSearch.suggestedSearchText,
              });
              cResult[5] = tmp4.text;
              cResult[6] = suggestedSearch.suggestedSearchText;
              cResult[7] = str2;
              cResult[8] = tmp9;
              tmp7 = tmp9;
            }
          }
        }
        const fn = function c() {
          SearchPlatformActionCreatorsDefault.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
            setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
          });
          const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(smartSearchQuery.searchContext);
          const result = SuggestedSearchActionCreators.advanceSuggestedSearches(
            smartSearchQuery.guildId,
            smartSearchQuery.channelIds,
            hasOwnProperty,
          );
        };
        cResult[0] = smartSearchQuery.channelIds;
        cResult[1] = smartSearchQuery.guildId;
        cResult[2] = smartSearchQuery.searchContext;
        cResult[3] = suggestedSearch.suggestedSearchText;
        cResult[4] = fn;
        tmp5 = fn;
        let obj = suggestedSearch(576);
      }
    : (suggestedSearch) => {
        suggestedSearch = suggestedSearch.suggestedSearch;
        const smartSearchQuery = suggestedSearch.smartSearchQuery;
        let str = suggestedSearch.variant;
        if (str === undefined) {
          str = "default";
        }
        const tmp = closure_7();
        const items = [smartSearchQuery, suggestedSearch.suggestedSearchText];
        const callback = noop.useCallback(() => {
          SearchPlatformActionCreatorsDefault.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
            setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
          });
          const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(smartSearchQuery.searchContext);
          const result = SuggestedSearchActionCreators.advanceSuggestedSearches(
            smartSearchQuery.guildId,
            smartSearchQuery.channelIds,
            hasOwnProperty,
          );
        }, items);
        let str2 = "redesign/channel-title/semibold";
        if ("default" === str) {
          str2 = "text-md/normal";
        }
        let obj2 = {
          onPress: callback,
          accessibilityLabel: suggestedSearch.suggestedSearchText,
          label: null,
          icon: null,
        };
        let compactLabel;
        if ("compact" === str) {
          compactLabel = tmp.compactLabel;
        }
        obj2.label = (
          <View style={compactLabel}>
            {jsx(suggestedSearch(4886).Text, {
              lineClamp: 2,
              variant: str2,
              color: "redesign-channel-name-muted-text",
              style: tmp.text,
              children: suggestedSearch.suggestedSearchText,
            })}
          </View>
        );
        let iconCircle;
        if ("default" === str) {
          iconCircle = tmp.iconCircle;
        }
        let obj = {
          lineClamp: 2,
          variant: str2,
          color: "redesign-channel-name-muted-text",
          style: tmp.text,
          children: suggestedSearch.suggestedSearchText,
        };
        const tmp3Result = jsx(suggestedSearch(4886).Text, {
          lineClamp: 2,
          variant: str2,
          color: "redesign-channel-name-muted-text",
          style: tmp.text,
          children: suggestedSearch.suggestedSearchText,
        });
        obj2.icon = (
          <View style={iconCircle}>
            {jsx(suggestedSearch(6548).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" })}
          </View>
        );
        return jsx(suggestedSearch(16807).SearchListRow, {
          onPress: callback,
          accessibilityLabel: suggestedSearch.suggestedSearchText,
          label: null,
          icon: null,
        });
      },
);
