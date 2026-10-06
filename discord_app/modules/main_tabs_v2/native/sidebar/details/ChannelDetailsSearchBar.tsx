// === Module 16811: ChannelDetailsSearchBar ===

// Module 16811 (ChannelDetailsSearchBar)
import Fragment from "Fragment" /* 21 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7522 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10666 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12005 */;
import SearchButton from "SearchButton" /* 12022 */;
import react from "react" /* 19 */;
import SearchQueryStore_mod from "SearchQueryStore" /* 11994 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let obj2;
let SearchQueryStore = SearchQueryStore_mod;
let closure_5 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
const CHANNEL_DETAILS_MARGIN = ChannelDetailsConstants.CHANNEL_DETAILS_MARGIN;
const jsx = Fragment.jsx;
let obj = { back: obj2 };
obj2 = { justifyContent: "center", height: SearchButton.SEARCH_BAR_HEIGHT, paddingStart: CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
let closure_7 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const memoResult = react.memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId, arg1) => {
  let channelDetailsSearchContext;
  let closure_4;
  let tmp12;
  let tmp7;
  let obj = channelId(channelDetailsSearchContext[8]);
  const cResult = obj.c(22);
  const tmp = channelId;
  channelId = channelId.channelId;
  const onBackPress = channelId.onBackPress;
  const showBackButton = channelId.showBackButton;
  let tmp4 = undefined === showBackButton;
  const guildId = channelId.guildId;
  const tmp2 = channelDetailsSearchContext;
  if (!tmp4) {
    tmp4 = showBackButton;
  }
  closure_7();
  const tmpResult = tmp(tmp2[9]);
  channelDetailsSearchContext = tmpResult.useChannelDetailsSearchContext(channelId, guildId);
  if (cResult[0] !== channelDetailsSearchContext) {
    const fn = function h() {
      let searchContext;
      return () => {
        const obj = onBackPress(channelDetailsSearchContext[10]);
        const obj2 = { searchContext };
        obj.trackSearchClosed(obj2);
      };
    };
    cResult[0] = channelDetailsSearchContext;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === channelId) {
    let tmp8;
    if (cResult[3] === channelDetailsSearchContext) {
      tmp8 = cResult[4];
    }
    const effect = C.useEffect(tmp7, tmp8);
    if (cResult[5] !== channelDetailsSearchContext) {
      class C {
        constructor() {
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            const obj = SearchPlatformActionCreatorsDefault;
            obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
          }
        }
      }
      cResult[5] = channelDetailsSearchContext;
      cResult[6] = C;
    } else {
      class C {
        constructor() {
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            const obj = SearchPlatformActionCreatorsDefault;
            obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
          }
        }
      }
    }
    C = tmp11;
    if (cResult[7] === channelId) {
      class C {
        constructor() {
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            const obj = SearchPlatformActionCreatorsDefault;
            obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
          }
        }
      }
      SearchQueryStore = tmp12;
      if (cResult[10] === onBackPress) {
        class C {
          constructor() {
            if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
              const obj = SearchPlatformActionCreatorsDefault;
              obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
            }
          }
        }
      }
      class E {
        constructor() {
          C();
          if (undefined !== onBackPress) {
            onBackPress();
          } else {
            tmp12();
          }
        }
      }
      cResult[10] = onBackPress;
      cResult[11] = tmp12;
      cResult[12] = tmp11;
      cResult[13] = E;
    }
    const fn2 = function _() {
      C();
      closure_5(channelId, false, "action");
    };
    cResult[7] = channelId;
    cResult[8] = tmp11;
    cResult[9] = fn2;
    tmp12 = fn2;
  }
  const items = [channelId, channelDetailsSearchContext];
  cResult[2] = channelId;
  cResult[3] = channelDetailsSearchContext;
  cResult[4] = items;
  tmp8 = items;
}) : ((channelId, ref) => {
  channelId = channelId.channelId;
  const onBackPress = channelId.onBackPress;
  let flag = channelId.showBackButton;
  const guildId = channelId.guildId;
  if (flag === undefined) {
    flag = true;
  }
  let channelDetailsSearchContext;
  let callback;
  const tmp = closure_7();
  let obj = channelId(channelDetailsSearchContext[9]);
  channelDetailsSearchContext = obj.useChannelDetailsSearchContext(channelId, guildId);
  const items = [channelId, channelDetailsSearchContext];
  const effect = callback.useEffect(() => {
    let searchContext;
    return () => {
      const obj = onBackPress(channelDetailsSearchContext[10]);
      const obj2 = { searchContext };
      obj.trackSearchClosed(obj2);
    };
  }, items);
  const items1 = [channelDetailsSearchContext];
  callback = callback.useCallback(() => {
    if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
      const obj = SearchPlatformActionCreatorsDefault;
      obj.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
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
  let tmp9Result = null;
  onBackPress(channelDetailsSearchContext[15]);
  if (flag) {
    const PressableOpacity = tmp2(tmp3[12]).PressableOpacity;
    const intl = tmp2(tmp3[13]).intl;
    tmp9Result = <PressableOpacity accessibilityRole="button" onPress={callback2} style={tmp.back} accessibilityLabel={intl.string(tmp2(tmp3[13]).t["13/7kX"])}>{null}</PressableOpacity>;
  }
  return <tmp10 ref={ref} searchContext={channelDetailsSearchContext} backButton={tmp9Result} />;
})));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default memoResult;