// === Module 16844: SearchHistoryRow ===

// Module 16844 (SearchHistoryRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import UserActionCreators from "UserActionCreators" /* 7863 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12005 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, searchContext;

let closure_12;
let map1;
let obj2;
let size;
let closure_3 = ["searchHistoryItem"];
const View = react_native.View;
const SearchHistoryItemTypes = SearchConstants.SearchHistoryItemTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: size, text: { flexShrink: 1 }, textContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 }, textIconContainer: { alignSelf: "flex-start" }, tag: obj2 };
size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let obj = searchContext(576);
  const cResult = obj.c(8);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === searchContext) {
    let tmp4;
    let tmp8;
    let tmp7;
    let tmp6;
    let tmp11;
    if (cResult[1] === searchHistoryItem) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { marginLeft: 16 };
      const rect = { bottom: 16, left: 16, right: 16, top: 16 };
      const tmp10 = closure_12(searchContext(6024).XSmallIcon, { size: "sm", color: "interactive-text-default" });
      cResult[3] = obj2;
      cResult[4] = rect;
      cResult[5] = tmp10;
      tmp8 = tmp10;
      tmp7 = rect;
      tmp6 = obj2;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4) {
      const obj3 = { onPress: tmp4, accessibilityRole: "button", unstable_pressDelay: 130, style: tmp6, hitSlop: tmp7, children: tmp8 };
      const tmp13 = closure_12(searchContext(5916).PressableHighlight, obj3);
      cResult[6] = tmp4;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  const fn = function s() {
    const obj = SearchPlatformActionCreatorsDefault;
    const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
  };
  cResult[0] = searchContext;
  cResult[1] = searchHistoryItem;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = react.useCallback(() => {
    const obj = SearchPlatformActionCreatorsDefault;
    const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  let obj = { onPress: callback, accessibilityRole: "button", unstable_pressDelay: 130, style: { marginLeft: 16 }, hitSlop: { bottom: 16, left: 16, right: 16, top: 16 }, children: closure_12(searchContext(6024).XSmallIcon, { size: "sm", color: "interactive-text-default" }) };
  const PressableHighlight = searchContext(5916).PressableHighlight;
  return closure_12(PressableHighlight, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let items;
  let tag;
  let tmp5;
  let obj = searchContext(576);
  const cResult = obj.c(30);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp4 = closure_14();
  dependencyMap = tmp4;
  if (cResult[0] !== searchContext) {
    let obj2 = { searchContext };
    cResult[0] = searchContext;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = searchContext(16833);
  const onPressSearchHistoryText = tmpResult.useOnPressSearchHistoryText(tmp5);
  if (cResult[2] === onPressSearchHistoryText) {
    if (cResult[3] === searchContext) {
      if (cResult[4] === searchHistoryItem.tags) {
        if (cResult[5] === searchHistoryItem.text) {
          let tmp7;
          if (cResult[6] === searchHistoryItem.type) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === searchHistoryItem.tags) {
            let tmp8;
            if (cResult[9] === tmp4.tag) {
              tmp8 = cResult[10];
            }
            if (cResult[11] === searchHistoryItem.text) {
              let tmp11;
              if (cResult[12] === tmp4.text) {
                tmp11 = cResult[13];
              }
              if (cResult[14] === tmp4.textContainer) {
                if (cResult[15] === tmp8) {
                  let tmp14;
                  if (cResult[16] === tmp11) {
                    tmp14 = cResult[17];
                  }
                  if (cResult[18] === searchContext) {
                    let tmp18;
                    let tmp23;
                    let tmp26;
                    if (cResult[19] === searchHistoryItem) {
                      tmp18 = cResult[20];
                    }
                    const _Symbol = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp25 = closure_12(searchContext(6555).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" });
                      cResult[21] = tmp25;
                      tmp23 = tmp25;
                    } else {
                      tmp23 = cResult[21];
                    }
                    if (cResult[22] !== tmp4.iconContainer) {
                      const obj3 = { style: tmp4.iconContainer, children: tmp23 };
                      const tmp29 = closure_12(View, obj3);
                      cResult[22] = tmp4.iconContainer;
                      cResult[23] = tmp29;
                      tmp26 = tmp29;
                    } else {
                      tmp26 = cResult[23];
                    }
                    if (cResult[24] === tmp7) {
                      if (cResult[25] === tmp4.textIconContainer) {
                        if (cResult[26] === tmp14) {
                          if (cResult[27] === tmp18) {
                            let tmp30;
                            if (cResult[28] === tmp26) {
                              tmp30 = cResult[29];
                            }
                            return tmp30;
                          }
                        }
                      }
                    }
                    const obj4 = { label: tmp14, onPress: tmp7, trailing: tmp18, iconContainerStyle: tmp4.textIconContainer, icon: tmp26 };
                    const tmp32 = closure_12(searchContext(16828).SearchListRow, obj4);
                    cResult[24] = tmp7;
                    cResult[25] = tmp4.textIconContainer;
                    cResult[26] = tmp14;
                    cResult[27] = tmp18;
                    cResult[28] = tmp26;
                    cResult[29] = tmp32;
                    tmp30 = tmp32;
                  }
                  const obj5 = { searchContext, searchHistoryItem };
                  const tmp21 = closure_12(closure_15, obj5);
                  cResult[18] = searchContext;
                  cResult[19] = searchHistoryItem;
                  cResult[20] = tmp21;
                  tmp18 = tmp21;
                }
              }
              const obj6 = { style: tmp4.textContainer, children: items };
              items = [tmp8, tmp11];
              const tmp17 = closure_13(View, obj6);
              cResult[14] = tmp4.textContainer;
              cResult[15] = tmp8;
              cResult[16] = tmp11;
              cResult[17] = tmp17;
              tmp14 = tmp17;
            }
            const obj7 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.text, children: searchHistoryItem.text };
            const tmp13 = closure_12(searchContext(4892).Text, obj7);
            cResult[11] = searchHistoryItem.text;
            cResult[12] = tmp4.text;
            cResult[13] = tmp13;
            tmp11 = tmp13;
          }
          const tags = searchHistoryItem.tags;
          let mapped;
          if (tags != null) {
            mapped = tags.map((children) => {
              let obj2;
              const obj = { accessibilityRole: "button", style: tag.tag, children: closure_12(Text_Text.Text, obj2) };
              obj2 = { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: children.text };
              return closure_12(View, obj, children.text);
            });
          }
          cResult[8] = searchHistoryItem.tags;
          cResult[9] = tmp4.tag;
          cResult[10] = mapped;
          tmp8 = mapped;
        }
      }
    }
  }
  const fn = function y() {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  };
  cResult[2] = onPressSearchHistoryText;
  cResult[3] = searchContext;
  cResult[4] = searchHistoryItem.tags;
  cResult[5] = searchHistoryItem.text;
  cResult[6] = searchHistoryItem.type;
  cResult[7] = fn;
  tmp7 = fn;
}) : ((searchContext) => {
  let items1;
  let obj5;
  let tag;
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp = closure_14();
  dependencyMap = tmp;
  let obj = searchContext(16833);
  const onPressSearchHistoryText = obj.useOnPressSearchHistoryText({ searchContext });
  const items = [onPressSearchHistoryText, searchContext, , , ];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = react.useCallback(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  let obj2 = { style: tmp.textContainer, children: items1 };
  const tags = searchHistoryItem.tags;
  let mapped;
  const SearchListRow = searchContext(16828).SearchListRow;
  if (tags != null) {
    mapped = tags.map((children) => {
      let obj2;
      const obj = { accessibilityRole: "button", style: tag.tag, children: closure_12(Text_Text.Text, obj2) };
      obj2 = { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: children.text };
      return closure_12(View, obj, children.text);
    });
  }
  items1 = [mapped, ];
  const obj3 = { label: closure_13(View, obj2), onPress: callback, trailing: closure_12(closure_15, { searchContext, searchHistoryItem }), iconContainerStyle: tmp.textIconContainer, icon: closure_12(View, obj5) };
  const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text };
  items1[1] = closure_12(searchContext(4892).Text, obj4);
  obj5 = { style: tmp.iconContainer, children: closure_12(searchContext(6555).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }) };
  return closure_12(SearchListRow, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let accessibilityActions;
  let first;
  let onAccessibilityAction;
  let stateFromStores;
  let tmp6;
  let trailing;
  let obj = searchContext(stateFromStores[12]);
  const cResult = obj.c(20);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.channelId) {
    const fn = function n() {
      return ChannelStore.getChannel(searchHistoryItem.channelId);
    };
    cResult[1] = searchHistoryItem.channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = searchContext(stateFromStores[21]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === searchContext) {
      let tmp8;
      let tmp9;
      let tmp12;
      if (cResult[5] === searchHistoryItem) {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[8] !== searchContext) {
        let obj2 = { searchContext };
        cResult[8] = searchContext;
        cResult[9] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[9];
      }
      const tmpResult2 = searchContext(stateFromStores[16]);
      const onPressGroupDMItem = tmpResult2.useOnPressGroupDMItem(tmp12);
      if (cResult[10] === onPressGroupDMItem) {
        if (cResult[11] === searchContext) {
          let tmp14;
          if (cResult[12] === searchHistoryItem.type) {
            tmp14 = cResult[13];
          }
          ({ trailing, accessibilityActions, onAccessibilityAction } = closure_22(searchContext, searchHistoryItem));
          closure_22(searchContext, searchHistoryItem);
          if (null == stateFromStores) {
            return null;
          } else {
            if (cResult[14] === accessibilityActions) {
              if (cResult[15] === tmp14) {
                if (cResult[16] === onAccessibilityAction) {
                  if (cResult[17] === stateFromStores) {
                    let tmp18;
                    if (cResult[18] === trailing) {
                      tmp18 = cResult[19];
                    }
                    return tmp18;
                  }
                }
              }
            }
            const obj3 = { channel: stateFromStores, onPress: tmp14, accessibilityActions, onAccessibilityAction, trailing };
            const tmp21 = closure_12(searchHistoryItem(stateFromStores[22]), obj3);
            cResult[14] = accessibilityActions;
            cResult[15] = tmp14;
            cResult[16] = onAccessibilityAction;
            cResult[17] = stateFromStores;
            cResult[18] = trailing;
            cResult[19] = tmp21;
            tmp18 = tmp21;
          }
        }
      }
      const fn3 = function b(channelId) {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
        const result = obj.trackSearchHistoryClicked(obj2);
        onPressGroupDMItem(channelId);
      };
      cResult[10] = onPressGroupDMItem;
      cResult[11] = searchContext;
      cResult[12] = searchHistoryItem.type;
      cResult[13] = fn3;
      tmp14 = fn3;
    }
  }
  const fn2 = function u() {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  };
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  cResult[3] = stateFromStores;
  cResult[4] = searchContext;
  cResult[5] = searchHistoryItem;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp9 = items1;
  tmp8 = fn2;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[21]);
  const items = [ChannelStore];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj2 = searchContext(stateFromStores[16]);
  const onPressGroupDMItem = obj2.useOnPressGroupDMItem({ searchContext });
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  const callback = react.useCallback((channelId) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressGroupDMItem(channelId);
  }, items2);
  closure_22(searchContext, searchHistoryItem);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores, onPress: callback, accessibilityActions: tmp8, onAccessibilityAction: tmp9, trailing: tmp7 };
    tmp10 = closure_12(searchHistoryItem(tmp[22]), obj3);
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let first;
  let onPressDMItem;
  let tmp6;
  let tmp9;
  const tmp = searchContext;
  let obj = searchContext(onPressDMItem[12]);
  const cResult = obj.c(18);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.userId) {
    const fn = function o() {
      return UserStore.getUser(searchHistoryItem.userId);
    };
    cResult[1] = searchHistoryItem.userId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(onPressDMItem[21]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== searchHistoryItem.userId) {
    class I {
      constructor() {
        const obj = UserActionCreators;
        const user = obj.getUser(searchHistoryItem.userId);
      }
    }
    const items1 = [searchHistoryItem.userId];
    cResult[3] = searchHistoryItem.userId;
    cResult[4] = I;
    cResult[5] = items1;
    tmp9 = items1;
  } else {
    class I {
      constructor() {
        const obj = UserActionCreators;
        const user = obj.getUser(searchHistoryItem.userId);
      }
    }
    tmp9 = cResult[5];
  }
  const effect = react.useEffect(I, tmp9);
  if (cResult[6] !== searchContext) {
    class I {
      constructor() {
        const obj = UserActionCreators;
        const user = obj.getUser(searchHistoryItem.userId);
      }
    }
    tmp12[0] = searchContext;
    cResult[6] = searchContext;
    cResult[7] = tmp12;
  } else {
    class I {
      constructor() {
        const obj = UserActionCreators;
        const user = obj.getUser(searchHistoryItem.userId);
      }
    }
  }
  const tmpResult2 = tmp(onPressDMItem[16]);
  onPressDMItem = tmpResult2.useOnPressDMItem(tmp12);
  if (cResult[8] === onPressDMItem) {
    class I {
      constructor() {
        const obj = UserActionCreators;
        const user = obj.getUser(searchHistoryItem.userId);
      }
    }
  }
  _require = _asyncToGenerator(async (searchContext) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              channelId = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj2.getOrEnsurePrivateChannel(searchContext), done: false };
              obj2 = searchHistoryItem(onPressDMItem[24]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext, channelId, searchHistoryItemType: channelId.type };
            const obj6 = searchHistoryItem(onPressDMItem[17]);
            const result = obj6.trackSearchHistoryClicked(obj7);
            tmp4(searchContext, channelId);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c4 = 3;
          throw tmp8;
        }
      }
    })();
  });
  const fn2 = function() {
    return closure_0(...arguments);
  };
  cResult[8] = onPressDMItem;
  cResult[9] = searchContext;
  cResult[10] = searchHistoryItem.type;
  cResult[11] = fn2;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let onPressDMItem;
  const tmp = onPressDMItem;
  let obj = searchContext(onPressDMItem[21]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = react.useEffect(() => {
    const obj = UserActionCreators;
    const user = obj.getUser(searchHistoryItem.userId);
  }, items1);
  let obj2 = searchContext(onPressDMItem[16]);
  onPressDMItem = obj2.useOnPressDMItem({ searchContext });
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (searchContext) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              channelId = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj2.getOrEnsurePrivateChannel(searchContext), done: false };
              obj2 = searchHistoryItem(onPressDMItem[24]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext, channelId, searchHistoryItemType: channelId.type };
            const obj6 = searchHistoryItem(onPressDMItem[17]);
            const result = obj6.trackSearchHistoryClicked(obj7);
            tmp4(searchContext, channelId);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c4 = 3;
          throw tmp8;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  closure_22(searchContext, searchHistoryItem);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj3 = { user: stateFromStores, onPress: callback, accessibilityActions: tmp8, onAccessibilityAction: tmp9, trailing: tmp7 };
    tmp10 = closure_12(searchHistoryItem(tmp[25]), obj3);
  }
  return tmp10;
});
let closure_19 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let first;
  let stateFromStores;
  let tmp6;
  let obj = searchContext(stateFromStores[12]);
  const cResult = obj.c(21);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.channelId) {
    const fn = function n() {
      return ChannelStore.getChannel(searchHistoryItem.channelId);
    };
    cResult[1] = searchHistoryItem.channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = searchContext(stateFromStores[21]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === searchContext) {
      let tmp8;
      let tmp9;
      let tmp12;
      if (cResult[5] === searchHistoryItem) {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[8] !== searchContext) {
        let obj2 = { searchContext };
        cResult[8] = searchContext;
        cResult[9] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[9];
      }
      const tmpResult2 = searchContext(stateFromStores[16]);
      const onPressGuildVoiceChannel = tmpResult2.useOnPressGuildVoiceChannel(tmp12);
      if (cResult[10] === onPressGuildVoiceChannel) {
        if (cResult[11] === searchContext) {
          let tmp14;
          if (cResult[12] === searchHistoryItem.type) {
            tmp14 = cResult[13];
          }
          let tmp15 = null;
          if (null != stateFromStores) {
            if (cResult[14] === searchContext) {
              let tmp16;
              if (cResult[15] === searchHistoryItem) {
                tmp16 = cResult[16];
              }
              if (cResult[17] === stateFromStores) {
                if (cResult[18] === tmp14) {
                  let tmp20;
                  if (cResult[19] === tmp16) {
                    tmp20 = cResult[20];
                  }
                  tmp15 = tmp20;
                }
              }
              const obj3 = { channel: stateFromStores, voiceStates: speakerVoiceStates, speakerVoiceStates, trailing: tmp16, onPress: tmp14 };
              const tmp24 = closure_12(searchHistoryItem(stateFromStores[26]), obj3);
              cResult[17] = stateFromStores;
              cResult[18] = tmp14;
              cResult[19] = tmp16;
              cResult[20] = tmp24;
              tmp20 = tmp24;
            }
            const obj4 = { searchContext, searchHistoryItem };
            const tmp19 = closure_12(closure_15, obj4);
            cResult[14] = searchContext;
            cResult[15] = searchHistoryItem;
            cResult[16] = tmp19;
            tmp16 = tmp19;
          }
          return tmp15;
        }
      }
      const fn3 = function p(channelId) {
        const obj = search_tracking_TrackingDefault;
        const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
        const result = obj.trackSearchHistoryClicked(obj2);
        onPressGuildVoiceChannel(channelId);
      };
      cResult[10] = onPressGuildVoiceChannel;
      cResult[11] = searchContext;
      cResult[12] = searchHistoryItem.type;
      cResult[13] = fn3;
      tmp14 = fn3;
    }
  }
  const fn2 = function u() {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  };
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  cResult[3] = stateFromStores;
  cResult[4] = searchContext;
  cResult[5] = searchHistoryItem;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp9 = items1;
  tmp8 = fn2;
}) : ((searchContext) => {
  let obj4;
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[21]);
  const items = [ChannelStore];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj2 = searchContext(stateFromStores[16]);
  const onPressGuildVoiceChannel = obj2.useOnPressGuildVoiceChannel({ searchContext });
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores, voiceStates: speakerVoiceStates, speakerVoiceStates, trailing: closure_12(closure_15, obj4), onPress: tmp5 };
    obj4 = { searchContext, searchHistoryItem };
    const tmp9 = searchHistoryItem(tmp[26]);
    tmp6 = closure_12(tmp9, obj3);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let accessibilityActions;
  let first;
  let onAccessibilityAction;
  let stateFromStores;
  let tmp6;
  let trailing;
  let obj = searchContext(stateFromStores[12]);
  const cResult = obj.c(25);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.channelId) {
    const fn = function n() {
      return ChannelStore.getChannel(searchHistoryItem.channelId);
    };
    cResult[1] = searchHistoryItem.channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = searchContext(stateFromStores[21]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === searchContext) {
      let tmp8;
      let tmp9;
      let tmp12;
      if (cResult[5] === searchHistoryItem) {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const effect = react.useEffect(tmp8, tmp9);
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ReadStateStore];
        cResult[8] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[8];
      }
      let lastMessageId;
      const tmp14 = cResult[9];
      if (stateFromStores != null) {
        lastMessageId = stateFromStores.lastMessageId;
      }
      if (tmp14 === lastMessageId) {
        let tmp17;
        let tmp20;
        if (cResult[10] === searchHistoryItem.channelId) {
          tmp17 = cResult[11];
        }
        const tmpResult3 = searchContext(stateFromStores[21]);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp17);
        if (cResult[12] !== searchContext) {
          let obj2 = { searchContext };
          cResult[12] = searchContext;
          cResult[13] = obj2;
          tmp20 = obj2;
        } else {
          tmp20 = cResult[13];
        }
        const tmpResult4 = searchContext(stateFromStores[16]);
        const onPressGuildTextChannel = tmpResult4.useOnPressGuildTextChannel(tmp20);
        if (cResult[14] === onPressGuildTextChannel) {
          if (cResult[15] === searchContext) {
            let tmp22;
            if (cResult[16] === searchHistoryItem.type) {
              tmp22 = cResult[17];
            }
            ({ trailing, accessibilityActions, onAccessibilityAction } = closure_22(searchContext, searchHistoryItem));
            closure_22(searchContext, searchHistoryItem);
            if (null != stateFromStores) {
              const obj3 = { channel: stateFromStores, lastMessageId: stateFromStores1, onPress: tmp22, accessibilityActions, onAccessibilityAction: null, trailing };
              class S {
                constructor(channelId) {
                  const obj = search_tracking_TrackingDefault;
                  const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
                  const result = obj.trackSearchHistoryClicked(obj2);
                  onPressGuildTextChannel(channelId);
                }
              }
              const tmp29 = closure_12(searchHistoryItem(stateFromStores[27]), obj3);
              cResult[18] = accessibilityActions;
              cResult[19] = stateFromStores;
              cResult[20] = tmp22;
              cResult[21] = stateFromStores1;
              cResult[22] = onAccessibilityAction;
              class I {
                constructor() {
                  if (null == stateFromStores) {
                    const obj = SearchPlatformActionCreatorsDefault;
                    const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
                  }
                }
              }
              cResult[23] = trailing;
              cResult[24] = tmp29;
            }
            class S {
              constructor(channelId) {
                const obj = search_tracking_TrackingDefault;
                const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
                const result = obj.trackSearchHistoryClicked(obj2);
                onPressGuildTextChannel(channelId);
              }
            }
          }
        }
        class S {
          constructor(channelId) {
            const obj = search_tracking_TrackingDefault;
            const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
            const result = obj.trackSearchHistoryClicked(obj2);
            onPressGuildTextChannel(channelId);
          }
        }
        cResult[14] = onPressGuildTextChannel;
        cResult[15] = searchContext;
        cResult[16] = searchHistoryItem.type;
        cResult[17] = S;
        tmp22 = S;
      }
      let lastMessageId1;
      if (stateFromStores != null) {
        lastMessageId1 = stateFromStores.lastMessageId;
      }
      const fn2 = function b() {
        let lastMessageIdResult = ReadStateStore.lastMessageId(searchHistoryItem.channelId);
        if (lastMessageIdResult == null) {
          let lastMessageId;
          if (stateFromStores != null) {
            lastMessageId = stateFromStores.lastMessageId;
          }
          lastMessageIdResult = lastMessageId;
        }
        if (lastMessageIdResult == null) {
          lastMessageIdResult = null;
        }
        return lastMessageIdResult;
      };
      cResult[9] = lastMessageId1;
      cResult[10] = searchHistoryItem.channelId;
      cResult[11] = fn2;
      tmp17 = fn2;
    }
  }
  class I {
    constructor() {
      if (null == stateFromStores) {
        const obj = SearchPlatformActionCreatorsDefault;
        const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
      }
    }
  }
  const items2 = [stateFromStores, searchContext, searchHistoryItem];
  cResult[3] = stateFromStores;
  cResult[4] = searchContext;
  cResult[5] = searchHistoryItem;
  cResult[6] = I;
  cResult[7] = items2;
  tmp9 = items2;
  tmp8 = I;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[21]);
  const items = [ChannelStore];
  const tmp = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj2 = searchContext(stateFromStores[21]);
  const items2 = [ReadStateStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let lastMessageIdResult = ReadStateStore.lastMessageId(searchHistoryItem.channelId);
    if (lastMessageIdResult == null) {
      let lastMessageId;
      if (stateFromStores != null) {
        lastMessageId = stateFromStores.lastMessageId;
      }
      lastMessageIdResult = lastMessageId;
    }
    if (lastMessageIdResult == null) {
      lastMessageIdResult = null;
    }
    return lastMessageIdResult;
  });
  const obj3 = searchContext(stateFromStores[16]);
  const onPressGuildTextChannel = obj3.useOnPressGuildTextChannel({ searchContext });
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  const callback = react.useCallback((channelId) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj2);
    onPressGuildTextChannel(channelId);
  }, items3);
  closure_22(searchContext, searchHistoryItem);
  let tmp11 = null;
  if (null != stateFromStores) {
    const obj4 = { channel: stateFromStores, lastMessageId: stateFromStores1, onPress: callback, accessibilityActions: tmp9, onAccessibilityAction: tmp10, trailing: tmp8 };
    tmp11 = closure_12(searchHistoryItem(tmp[27]), obj4);
  }
  return tmp11;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext, searchHistoryItem) => {
  let first;
  let intl;
  _require = searchContext;
  let closure_1 = searchHistoryItem;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { name: "remove", label: intl.string(require("intl").t.Ov3VO7) };
    intl = tmp(1126).intl;
    const items = [obj2];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === searchContext) {
    let tmp5;
    if (cResult[2] === searchHistoryItem) {
      tmp5 = cResult[3];
    }
    if (cResult[4] === searchContext) {
      let tmp6;
      if (cResult[5] === searchHistoryItem) {
        tmp6 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        let tmp10;
        if (cResult[8] === tmp6) {
          tmp10 = cResult[9];
        }
        return tmp10;
      }
      const obj3 = { accessibilityActions: first, onAccessibilityAction: tmp5, trailing: tmp6 };
      cResult[7] = tmp5;
      cResult[8] = tmp6;
      cResult[9] = obj3;
      tmp10 = obj3;
    }
    const obj4 = { searchContext, searchHistoryItem };
    const tmp9 = closure_12(closure_15, obj4);
    cResult[4] = searchContext;
    cResult[5] = searchHistoryItem;
    cResult[6] = tmp9;
    tmp6 = tmp9;
  }
  const fn = function o(nativeEvent) {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const obj = SearchPlatformActionCreatorsDefault;
      const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  };
  cResult[1] = searchContext;
  cResult[2] = searchHistoryItem;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((searchContext, searchHistoryItem) => {
  let items;
  let closure_1 = searchHistoryItem;
  let obj = {
    accessibilityActions: react.useMemo(() => {
      let intl;
      const obj = { name: "remove", label: intl.string(searchContext(dependencyMap[28]).t.Ov3VO7) };
      intl = searchContext(dependencyMap[28]).intl;
      const items = [obj];
      return items;
    }, []),
    onAccessibilityAction: react.useCallback((nativeEvent) => {
      if ("remove" === nativeEvent.nativeEvent.actionName) {
        const obj = SearchPlatformActionCreatorsDefault;
        const result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
      }
    }, items),
    trailing: closure_12(closure_15, obj2)
  };
  items = [searchContext, searchHistoryItem];
  return obj;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchHistoryItem) => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(18);
  if (cResult[0] !== searchHistoryItem) {
    searchHistoryItem = searchHistoryItem.searchHistoryItem;
    const tmp6 = _objectWithoutProperties(searchHistoryItem, closure_3);
    cResult[0] = searchHistoryItem;
    cResult[1] = tmp6;
    cResult[2] = searchHistoryItem;
    tmp3 = searchHistoryItem;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const type = tmp3.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    if (cResult[3] === tmp2) {
      let tmp37;
      if (cResult[4] === tmp3) {
        tmp37 = cResult[5];
      }
      return tmp37;
    }
    const obj2 = { searchHistoryItem: tmp3 };
    const merged = Object.assign(tmp2);
    const tmp43 = closure_12(closure_17, obj2);
    cResult[3] = tmp2;
    cResult[4] = tmp3;
    cResult[5] = tmp43;
    tmp37 = tmp43;
  } else if (SearchHistoryItemTypes.DM === type) {
    if (cResult[6] === tmp2) {
      let tmp30;
      if (cResult[7] === tmp3) {
        tmp30 = cResult[8];
      }
      return tmp30;
    }
    const obj3 = { searchHistoryItem: tmp3 };
    const merged1 = Object.assign(tmp2);
    const tmp36 = closure_12(closure_18, obj3);
    cResult[6] = tmp2;
    cResult[7] = tmp3;
    cResult[8] = tmp36;
    tmp30 = tmp36;
  } else if (SearchHistoryItemTypes.TEXT === type) {
    if (cResult[9] === tmp2) {
      let tmp23;
      if (cResult[10] === tmp3) {
        tmp23 = cResult[11];
      }
      return tmp23;
    }
    const obj4 = { searchHistoryItem: tmp3 };
    const merged2 = Object.assign(tmp2);
    const tmp29 = closure_12(closure_16, obj4);
    cResult[9] = tmp2;
    cResult[10] = tmp3;
    cResult[11] = tmp29;
    tmp23 = tmp29;
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    if (cResult[12] === tmp2) {
      let tmp16;
      if (cResult[13] === tmp3) {
        tmp16 = cResult[14];
      }
      return tmp16;
    }
    const obj5 = { searchHistoryItem: tmp3 };
    const merged3 = Object.assign(tmp2);
    const tmp22 = closure_12(closure_21, obj5);
    cResult[12] = tmp2;
    cResult[13] = tmp3;
    cResult[14] = tmp22;
    tmp16 = tmp22;
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    if (cResult[15] === tmp2) {
      let tmp9;
      if (cResult[16] === tmp3) {
        tmp9 = cResult[17];
      }
      return tmp9;
    }
    const obj6 = { searchHistoryItem: tmp3 };
    const merged4 = Object.assign(tmp2);
    const tmp15 = closure_12(closure_20, obj6);
    cResult[15] = tmp2;
    cResult[16] = tmp3;
    cResult[17] = tmp15;
    tmp9 = tmp15;
  } else {
    return null;
  }
}) : ((searchHistoryItem) => {
  searchHistoryItem = searchHistoryItem.searchHistoryItem;
  const merged = Object.assign(searchHistoryItem, Object.assign({ searchHistoryItem: 0 }));
  const type = searchHistoryItem.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    const obj2 = { searchHistoryItem };
    const merged1 = Object.assign(merged);
    return closure_12(closure_17, obj2);
  } else if (SearchHistoryItemTypes.DM === type) {
    const obj3 = { searchHistoryItem };
    const merged2 = Object.assign(merged);
    return closure_12(closure_18, obj3);
  } else if (SearchHistoryItemTypes.TEXT === type) {
    const obj4 = { searchHistoryItem };
    const merged3 = Object.assign(merged);
    return closure_12(closure_16, obj4);
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    const obj5 = { searchHistoryItem };
    const merged4 = Object.assign(merged);
    return closure_12(closure_21, obj5);
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    const obj = { searchHistoryItem };
    const merged5 = Object.assign(merged);
    return closure_12(closure_20, obj);
  } else {
    return null;
  }
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default memoResult;