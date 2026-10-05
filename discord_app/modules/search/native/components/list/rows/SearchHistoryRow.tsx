// === Module 16823: SearchHistoryRow ===

// Module 16823 (SearchHistoryRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import UserActionCreators from "UserActionCreators" /* 7852 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
let closure_3 = ["searchHistoryItem"];
const View = fn(17).View;
const SearchHistoryItemTypes = fn(7513).SearchHistoryItemTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
let obj = { iconContainer: null, text: null, textContainer: null, textIconContainer: null, tag: null };
let size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
obj.text = { flexShrink: 1 };
obj.textContainer = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 };
obj.textIconContainer = { alignSelf: "flex-start" };
obj.tag = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(576).c(8);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === searchContext) {
    if (cResult[1] === searchHistoryItem) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { marginLeft: 16 };
      const rect = { bottom: 16, left: 16, right: 16, top: 16 };
      const tmp10 = closure_12(tmp(6017).XSmallIcon, { size: "sm", color: "interactive-text-default" });
      cResult[3] = obj2;
      cResult[4] = rect;
      cResult[5] = tmp10;
      let tmp8 = tmp10;
      let tmp7 = rect;
      let tmp6 = obj2;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4) {
      const obj3 = { onPress: tmp4, accessibilityRole: "button", unstable_pressDelay: 130, style: tmp6, hitSlop: tmp7, children: tmp8 };
      const tmp13 = closure_12(tmp(5909).PressableHighlight, obj3);
      cResult[6] = tmp4;
      cResult[7] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  const fn = function s() {
    const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
  };
  cResult[0] = searchContext;
  cResult[1] = searchHistoryItem;
  cResult[2] = fn;
  tmp4 = fn;
  const obj = searchContext(576);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = noop.useCallback(() => {
    const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  return closure_12(searchContext(5909).PressableHighlight, { onPress: callback, accessibilityRole: "button", unstable_pressDelay: 130, style: { marginLeft: 16 }, hitSlop: { bottom: 16, left: 16, right: 16, top: 16 }, children: closure_12(searchContext(6017).XSmallIcon, { size: "sm", color: "interactive-text-default" }) });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(576).c(30);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp4 = closure_14();
  dependencyMap = tmp4;
  if (cResult[0] !== searchContext) {
    const obj2 = { searchContext };
    cResult[0] = searchContext;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  let obj = searchContext(576);
  const onPressSearchHistoryText = searchContext(16812).useOnPressSearchHistoryText(tmp5);
  if (cResult[2] === onPressSearchHistoryText) {
    if (cResult[3] === searchContext) {
      if (cResult[4] === searchHistoryItem.tags) {
        if (cResult[5] === searchHistoryItem.text) {
          if (cResult[6] === searchHistoryItem.type) {
            let tmp7 = cResult[7];
          }
          if (cResult[8] === searchHistoryItem.tags) {
            if (cResult[9] === tmp4.tag) {
              let tmp8 = cResult[10];
            }
            if (cResult[11] === searchHistoryItem.text) {
              if (cResult[12] === tmp4.text) {
                let tmp11 = cResult[13];
              }
              if (cResult[14] === tmp4.textContainer) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp11) {
                    let tmp14 = cResult[17];
                  }
                  if (cResult[18] === searchContext) {
                    if (cResult[19] === searchHistoryItem) {
                      let tmp18 = cResult[20];
                    }
                    const _Symbol = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp25 = closure_12(tmp(6548).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" });
                      cResult[21] = tmp25;
                      let tmp23 = tmp25;
                    } else {
                      tmp23 = cResult[21];
                    }
                    if (cResult[22] !== tmp4.iconContainer) {
                      const obj3 = { style: tmp4.iconContainer, children: tmp23 };
                      const tmp29 = closure_12(View, obj3);
                      cResult[22] = tmp4.iconContainer;
                      cResult[23] = tmp29;
                      let tmp26 = tmp29;
                    } else {
                      tmp26 = cResult[23];
                    }
                    if (cResult[24] === tmp7) {
                      if (cResult[25] === tmp4.textIconContainer) {
                        if (cResult[26] === tmp14) {
                          if (cResult[27] === tmp18) {
                            if (cResult[28] === tmp26) {
                              let tmp30 = cResult[29];
                            }
                            return tmp30;
                          }
                        }
                      }
                    }
                    const obj4 = { label: tmp14, onPress: tmp7, trailing: tmp18, iconContainerStyle: tmp4.textIconContainer, icon: tmp26 };
                    const tmp32 = closure_12(tmp(16807).SearchListRow, obj4);
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
              const obj6 = { style: tmp4.textContainer, children: null };
              const items = [tmp8, tmp11];
              obj6.children = items;
              const tmp17 = closure_13(View, obj6);
              cResult[14] = tmp4.textContainer;
              cResult[15] = tmp8;
              cResult[16] = tmp11;
              cResult[17] = tmp17;
              tmp14 = tmp17;
            }
            const obj7 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.text, children: searchHistoryItem.text };
            const tmp13 = closure_12(tmp(4886).Text, obj7);
            cResult[11] = searchHistoryItem.text;
            cResult[12] = tmp4.text;
            cResult[13] = tmp13;
            tmp11 = tmp13;
          }
          const tags = searchHistoryItem.tags;
          let mapped;
          if (tags != null) {
            mapped = tags.map((children) => {
              const obj = { accessibilityRole: "button", style: tag.tag, children: __initData(Text_Text.Text, { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: children.text }) };
              return __initData(View, obj, children.text);
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
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({ searchContext, searchHistoryItemType: searchHistoryItem.type });
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  };
  cResult[2] = onPressSearchHistoryText;
  cResult[3] = searchContext;
  cResult[4] = searchHistoryItem.tags;
  cResult[5] = searchHistoryItem.text;
  cResult[6] = searchHistoryItem.type;
  cResult[7] = fn;
  tmp7 = fn;
  const tmpResult = searchContext(16812);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp = closure_14();
  dependencyMap = tmp;
  const onPressSearchHistoryText = searchContext(16812).useOnPressSearchHistoryText({ searchContext });
  const items = [onPressSearchHistoryText, searchContext, , , ];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = noop.useCallback(() => {
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({ searchContext, searchHistoryItemType: searchHistoryItem.type });
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  const obj2 = { style: tmp.textContainer, children: null };
  const tags = searchHistoryItem.tags;
  let mapped;
  if (tags != null) {
    mapped = tags.map((children) => {
      const obj = { accessibilityRole: "button", style: tag.tag, children: __initData(Text_Text.Text, { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: children.text }) };
      return __initData(View, obj, children.text);
    });
  }
  const obj3 = { label: null, onPress: null, trailing: null, iconContainerStyle: null, icon: null };
  const items1 = [mapped, closure_12(searchContext(4886).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text })];
  obj2.children = items1;
  obj3.label = closure_13(View, obj2);
  obj3.onPress = callback;
  obj3.trailing = closure_12(closure_15, { searchContext, searchHistoryItem });
  obj3.iconContainerStyle = tmp.textIconContainer;
  let obj = searchContext(16812);
  const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text };
  obj3.icon = closure_12(View, { style: tmp.iconContainer, children: closure_12(searchContext(6548).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }) });
  return closure_12(searchContext(16807).SearchListRow, obj3);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(stateFromStores[12]).c(20);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.channelId) {
    const fn = function n() {
      return ChannelStore.getChannel(searchHistoryItem.channelId);
    };
    cResult[1] = searchHistoryItem.channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = searchContext(stateFromStores[12]);
  stateFromStores = searchContext(stateFromStores[21]).useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === searchContext) {
      if (cResult[5] === searchHistoryItem) {
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[8] !== searchContext) {
        const obj2 = { searchContext };
        cResult[8] = searchContext;
        cResult[9] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[9];
      }
      const onPressGroupDMItem = tmp(tmp2[16]).useOnPressGroupDMItem(tmp12);
      if (cResult[10] === onPressGroupDMItem) {
        if (cResult[11] === searchContext) {
          if (cResult[12] === searchHistoryItem.type) {
            let tmp14 = cResult[13];
          }
          ({ trailing, accessibilityActions, onAccessibilityAction } = closure_22(searchContext, searchHistoryItem));
          if (null == stateFromStores) {
            return null;
          } else {
            if (cResult[14] === accessibilityActions) {
              if (cResult[15] === tmp14) {
                if (cResult[16] === onAccessibilityAction) {
                  if (cResult[17] === stateFromStores) {
                    if (cResult[18] === trailing) {
                      let tmp18 = cResult[19];
                    }
                    return tmp18;
                  }
                }
              }
            }
            const obj3 = { channel: stateFromStores, onPress: tmp14, accessibilityActions, onAccessibilityAction, trailing };
            const tmp21 = closure_12(searchHistoryItem(tmp2[22]), obj3);
            cResult[14] = accessibilityActions;
            cResult[15] = tmp14;
            cResult[16] = onAccessibilityAction;
            cResult[17] = stateFromStores;
            cResult[18] = trailing;
            cResult[19] = tmp21;
            tmp18 = tmp21;
          }
          const tmp16 = closure_22(searchContext, searchHistoryItem);
        }
      }
      const fn3 = function b(channelId) {
        const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({ searchContext, channelId, searchHistoryItemType: searchHistoryItem.type });
        onPressGroupDMItem(channelId);
      };
      cResult[10] = onPressGroupDMItem;
      cResult[11] = searchContext;
      cResult[12] = searchHistoryItem.type;
      cResult[13] = fn3;
      tmp14 = fn3;
      const tmpResult2 = tmp(tmp2[16]);
    }
  }
  const fn2 = function u() {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
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
  const tmpResult = searchContext(stateFromStores[21]);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = searchContext(stateFromStores[21]).useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj = searchContext(stateFromStores[21]);
  const tmp = stateFromStores;
  const onPressGroupDMItem = searchContext(stateFromStores[16]).useOnPressGroupDMItem({ searchContext });
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  const callback = noop.useCallback((channelId) => {
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({ searchContext, channelId, searchHistoryItemType: searchHistoryItem.type });
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
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = require("c").c(18);
  searchContext = searchContext.searchContext;
  _require = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.userId) {
    const fn = function o() {
      return UserStore.getUser(searchHistoryItem.userId);
    };
    cResult[1] = searchHistoryItem.userId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] !== searchHistoryItem.userId) {
    class I {
      constructor() {
        obj = closure_0(closure_2[23]);
        user = obj.getUser(searchHistoryItem.userId);
        return;
      }
    }
    const items1 = [searchHistoryItem.userId];
    cResult[3] = searchHistoryItem.userId;
    cResult[4] = I;
    cResult[5] = items1;
    let tmp9 = items1;
  } else {
    class I {
      constructor() {
        obj = closure_0(closure_2[23]);
        user = obj.getUser(searchHistoryItem.userId);
        return;
      }
    }
    tmp9 = cResult[5];
  }
  const effect = noop.useEffect(I, tmp9);
  if (cResult[6] !== searchContext) {
    class I {
      constructor() {
        obj = closure_0(closure_2[23]);
        user = obj.getUser(searchHistoryItem.userId);
        return;
      }
    }
    tmp12[0] = searchContext;
    cResult[6] = searchContext;
    cResult[7] = tmp12;
  } else {
    class I {
      constructor() {
        obj = closure_0(closure_2[23]);
        user = obj.getUser(searchHistoryItem.userId);
        return;
      }
    }
  }
  const tmpResult = require("useStateFromStores");
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem(tmp12);
  if (cResult[8] === onPressDMItem) {
    class I {
      constructor() {
        obj = closure_0(closure_2[23]);
        user = obj.getUser(searchHistoryItem.userId);
        return;
      }
    }
  }
  _require = asyncGeneratorStep(async (searchContext) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_0 = searchContext;
              closure_129_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: searchHistoryItem(onPressDMItem[24]).getOrEnsurePrivateChannel(searchContext), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_1 = value;
            const obj7 = { searchContext, channelId: closure_129_1, searchHistoryItemType: tmp2.type };
            const result = searchHistoryItem(onPressDMItem[17]).trackSearchHistoryClicked(obj7);
            tmp5(closure_129_0, closure_129_1);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const fn2 = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[8] = onPressDMItem;
  cResult[9] = searchContext;
  cResult[10] = searchHistoryItem.type;
  cResult[11] = fn2;
  const tmpResult2 = require("useOnPressSearchItem");
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let onPressDMItem;
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserStore.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = noop.useEffect(() => {
    const user = UserActionCreators.getUser(searchHistoryItem.userId);
  }, items1);
  let obj = require("useStateFromStores");
  const tmp = onPressDMItem;
  onPressDMItem = require("useOnPressSearchItem").useOnPressDMItem({ searchContext });
  _require = asyncGeneratorStep(async (searchContext) => {
    c3 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_0 = searchContext;
              closure_129_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: searchHistoryItem(onPressDMItem[24]).getOrEnsurePrivateChannel(searchContext), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_1 = value;
            const obj7 = { searchContext, channelId: closure_129_1, searchHistoryItemType: tmp2.type };
            const result = searchHistoryItem(onPressDMItem[17]).trackSearchHistoryClicked(obj7);
            tmp5(closure_129_0, closure_129_1);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  closure_22(searchContext, searchHistoryItem);
  let tmp10 = null;
  if (null != stateFromStores) {
    let obj3 = { user: stateFromStores, onPress: callback, accessibilityActions: tmp8, onAccessibilityAction: tmp9, trailing: tmp7 };
    tmp10 = closure_12(searchHistoryItem(tmp[25]), obj3);
  }
  return tmp10;
});
let closure_19 = [];
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let tmp2 = stateFromStores;
  const cResult = searchContext(stateFromStores[12]).c(21);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.channelId) {
    const fn = function n() {
      return ChannelStore.getChannel(searchHistoryItem.channelId);
    };
    cResult[1] = searchHistoryItem.channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = searchContext(stateFromStores[12]);
  stateFromStores = searchContext(tmp2[21]).useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === searchContext) {
      if (cResult[5] === searchHistoryItem) {
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[8] !== searchContext) {
        const obj2 = { searchContext };
        cResult[8] = searchContext;
        cResult[9] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[9];
      }
      const onPressGuildVoiceChannel = tmp(tmp2[16]).useOnPressGuildVoiceChannel(tmp12);
      if (cResult[10] === onPressGuildVoiceChannel) {
        if (cResult[11] === searchContext) {
          if (cResult[12] === searchHistoryItem.type) {
            let tmp14 = cResult[13];
          }
          if (null == stateFromStores) {
            return null;
          } else {
            if (cResult[14] === searchContext) {
              if (cResult[15] === searchHistoryItem) {
                let tmp16 = cResult[16];
              }
              if (cResult[17] === stateFromStores) {
                if (cResult[18] === tmp14) {
                }
              }
              const obj3 = { channel: stateFromStores, voiceStates: speakerVoiceStates, speakerVoiceStates, trailing: tmp16, onPress: tmp14 };
              tmp2 = closure_12(searchHistoryItem(tmp2[26]), obj3);
              cResult[17] = stateFromStores;
              cResult[18] = tmp14;
              cResult[19] = tmp16;
              cResult[20] = tmp2;
            }
            const obj4 = { searchContext, searchHistoryItem };
            const tmp19 = closure_12(closure_15, obj4);
            cResult[14] = searchContext;
            cResult[15] = searchHistoryItem;
            cResult[16] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      const fn3 = function p(channelId) {
        const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({ searchContext, channelId, searchHistoryItemType: searchHistoryItem.type });
        onPressGuildVoiceChannel(channelId);
      };
      cResult[10] = onPressGuildVoiceChannel;
      cResult[11] = searchContext;
      cResult[12] = searchHistoryItem.type;
      cResult[13] = fn3;
      tmp14 = fn3;
      const tmpResult2 = tmp(tmp2[16]);
    }
  }
  const fn2 = function u() {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
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
  const tmpResult = searchContext(tmp2[21]);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = searchContext(stateFromStores[21]).useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj = searchContext(stateFromStores[21]);
  const tmp = stateFromStores;
  const onPressGuildVoiceChannel = searchContext(stateFromStores[16]).useOnPressGuildVoiceChannel({ searchContext });
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores, voiceStates: speakerVoiceStates, speakerVoiceStates, trailing: null, onPress: null };
    const obj4 = { searchContext, searchHistoryItem };
    obj3.trailing = closure_12(closure_15, obj4);
    obj3.onPress = tmp5;
    tmp6 = closure_12(searchHistoryItem(tmp[26]), obj3);
    const tmp9 = searchHistoryItem(tmp[26]);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let tmp2 = stateFromStores;
  const cResult = searchContext(stateFromStores[12]).c(25);
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchHistoryItem.channelId) {
    const fn = function n() {
      return ChannelStore.getChannel(searchHistoryItem.channelId);
    };
    cResult[1] = searchHistoryItem.channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = searchContext(stateFromStores[12]);
  stateFromStores = searchContext(tmp2[21]).useStateFromStores(first, tmp6);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === searchContext) {
      if (cResult[5] === searchHistoryItem) {
        let tmp8 = cResult[6];
        let tmp9 = cResult[7];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ReadStateStore];
        cResult[8] = items1;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[8];
      }
      let lastMessageId;
      if (stateFromStores != null) {
        lastMessageId = stateFromStores.lastMessageId;
      }
      if (cResult[9] === lastMessageId) {
        if (cResult[10] === searchHistoryItem.channelId) {
          let tmp16 = cResult[11];
        }
        const stateFromStores1 = tmp(tmp2[21]).useStateFromStores(tmp12, tmp16);
        if (cResult[12] !== searchContext) {
          const obj2 = { searchContext };
          cResult[12] = searchContext;
          cResult[13] = obj2;
          let tmp19 = obj2;
        } else {
          tmp19 = cResult[13];
        }
        const tmpResult3 = tmp(tmp2[21]);
        const onPressGuildTextChannel = tmp(tmp2[16]).useOnPressGuildTextChannel(tmp19);
        if (cResult[14] === onPressGuildTextChannel) {
          if (cResult[15] === searchContext) {
            if (cResult[16] === searchHistoryItem.type) {
              let tmp21 = cResult[17];
            }
            ({ trailing, accessibilityActions, onAccessibilityAction } = closure_22(searchContext, searchHistoryItem));
            if (null == stateFromStores) {
              return null;
            } else {
              if (cResult[18] === accessibilityActions) {
                if (cResult[19] === stateFromStores) {
                  if (cResult[20] === tmp21) {
                    if (cResult[21] === stateFromStores1) {
                      if (cResult[22] === onAccessibilityAction) {
                      }
                    }
                  }
                }
              }
              const obj3 = { channel: stateFromStores, lastMessageId: stateFromStores1, onPress: tmp21, accessibilityActions, onAccessibilityAction: null, trailing: null };
              class S {
                constructor(arg0) {
                  obj = closure_1(closure_2[17]);
                  obj1 = { searchContext, channelId: searchContext, searchHistoryItemType: searchHistoryItem.type };
                  result = obj.trackSearchHistoryClicked(obj1);
                  tmp2 = closure_3(searchContext);
                  return;
                }
              }
              obj3.trailing = trailing;
              tmp2 = closure_12(searchHistoryItem(tmp2[27]), obj3);
              cResult[18] = accessibilityActions;
              cResult[19] = stateFromStores;
              cResult[20] = tmp21;
              cResult[21] = stateFromStores1;
              cResult[22] = onAccessibilityAction;
              class I {
                constructor() {
                  if (null == closure_2) {
                    tmp = closure_1;
                    tmp2 = closure_2;
                    obj = closure_1(closure_2[13]);
                    tmp3 = searchContext;
                    tmp4 = searchHistoryItem;
                    result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
                  }
                  return;
                }
              }
              cResult[23] = trailing;
              cResult[24] = tmp2;
            }
            const tmp23 = closure_22(searchContext, searchHistoryItem);
          }
        }
        class S {
          constructor(arg0) {
            obj = closure_1(closure_2[17]);
            obj1 = { searchContext, channelId: searchContext, searchHistoryItemType: searchHistoryItem.type };
            result = obj.trackSearchHistoryClicked(obj1);
            tmp2 = closure_3(searchContext);
            return;
          }
        }
        cResult[14] = onPressGuildTextChannel;
        cResult[15] = searchContext;
        cResult[16] = searchHistoryItem.type;
        cResult[17] = S;
        tmp21 = S;
        const tmpResult4 = tmp(tmp2[16]);
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
      tmp16 = fn2;
    }
  }
  class I {
    constructor() {
      if (null == closure_2) {
        tmp = closure_1;
        tmp2 = closure_2;
        obj = closure_1(closure_2[13]);
        tmp3 = searchContext;
        tmp4 = searchHistoryItem;
        result = obj.removeSearchHistoryItem(searchContext, searchHistoryItem);
      }
      return;
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
  const tmpResult = searchContext(tmp2[21]);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = searchContext(stateFromStores[21]).useStateFromStores(items, () => ChannelStore.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj = searchContext(stateFromStores[21]);
  const tmp = stateFromStores;
  const items2 = [ReadStateStore];
  const stateFromStores1 = searchContext(stateFromStores[21]).useStateFromStores(items2, () => {
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
  const obj2 = searchContext(stateFromStores[21]);
  const onPressGuildTextChannel = searchContext(stateFromStores[16]).useOnPressGuildTextChannel({ searchContext });
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  const callback = noop.useCallback((channelId) => {
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({ searchContext, channelId, searchHistoryItemType: searchHistoryItem.type });
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
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext, searchHistoryItem) => {
  _require = searchContext;
  closure_1 = searchHistoryItem;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { name: "remove", label: null };
    const intl = tmp(1126).intl;
    obj2.label = intl.string(tmp(1126).t.Ov3VO7);
    const items = [obj2];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === searchContext) {
    if (cResult[2] === searchHistoryItem) {
      let tmp5 = cResult[3];
    }
    if (cResult[4] === searchContext) {
      if (cResult[5] === searchHistoryItem) {
        let tmp6 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp6) {
          let tmp10 = cResult[9];
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
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(closure_0, closure_1);
    }
  };
  cResult[1] = searchContext;
  cResult[2] = searchHistoryItem;
  cResult[3] = fn;
  tmp5 = fn;
  let obj = require("c");
}) : ((searchContext, searchHistoryItem) => {
  closure_1 = searchHistoryItem;
  let obj = {
    accessibilityActions: noop.useMemo(() => {
      const obj = { name: "remove", label: null };
      const intl = searchContext(1126).intl;
      obj.label = intl.string(searchContext(1126).t.Ov3VO7);
      const items = [obj];
      return items;
    }, []),
    onAccessibilityAction: null,
    trailing: closure_12(closure_15, { searchContext, searchHistoryItem })
  };
  let items = [searchContext, searchHistoryItem];
  obj.onAccessibilityAction = noop.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(closure_0, closure_1);
    }
  }, items);
  return obj;
});
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchHistoryItem) => {
  const cResult = c.c(18);
  if (cResult[0] !== searchHistoryItem) {
    searchHistoryItem = searchHistoryItem.searchHistoryItem;
    const tmp6 = _objectWithoutProperties(searchHistoryItem, closure_3);
    cResult[0] = searchHistoryItem;
    cResult[1] = tmp6;
    cResult[2] = searchHistoryItem;
    let tmp3 = searchHistoryItem;
    let tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const type = tmp3.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    if (cResult[3] === tmp2) {
      if (cResult[4] === tmp3) {
        let tmp37 = cResult[5];
      }
      return tmp37;
    }
    const obj2 = {};
    const merged = Object.assign(tmp2);
    obj2.searchHistoryItem = tmp3;
    const tmp43 = __initData(closure_17, obj2);
    cResult[3] = tmp2;
    cResult[4] = tmp3;
    cResult[5] = tmp43;
    tmp37 = tmp43;
  } else if (SearchHistoryItemTypes.DM === type) {
    if (cResult[6] === tmp2) {
      if (cResult[7] === tmp3) {
        let tmp30 = cResult[8];
      }
      return tmp30;
    }
    const obj3 = {};
    const merged1 = Object.assign(tmp2);
    obj3.searchHistoryItem = tmp3;
    const tmp36 = __initData(closure_18, obj3);
    cResult[6] = tmp2;
    cResult[7] = tmp3;
    cResult[8] = tmp36;
    tmp30 = tmp36;
  } else if (SearchHistoryItemTypes.TEXT === type) {
    if (cResult[9] === tmp2) {
      if (cResult[10] === tmp3) {
        let tmp23 = cResult[11];
      }
      return tmp23;
    }
    const obj4 = {};
    const merged2 = Object.assign(tmp2);
    obj4.searchHistoryItem = tmp3;
    const tmp29 = __initData(closure_16, obj4);
    cResult[9] = tmp2;
    cResult[10] = tmp3;
    cResult[11] = tmp29;
    tmp23 = tmp29;
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    if (cResult[12] === tmp2) {
      if (cResult[13] === tmp3) {
        let tmp16 = cResult[14];
      }
      return tmp16;
    }
    const obj5 = {};
    const merged3 = Object.assign(tmp2);
    obj5.searchHistoryItem = tmp3;
    const tmp22 = __initData(closure_21, obj5);
    cResult[12] = tmp2;
    cResult[13] = tmp3;
    cResult[14] = tmp22;
    tmp16 = tmp22;
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    if (cResult[15] === tmp2) {
      if (cResult[16] === tmp3) {
        let tmp9 = cResult[17];
      }
      return tmp9;
    }
    const obj6 = {};
    const merged4 = Object.assign(tmp2);
    obj6.searchHistoryItem = tmp3;
    const tmp15 = __initData(closure_20, obj6);
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
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.searchHistoryItem = searchHistoryItem;
    return __initData(closure_17, obj2);
  } else if (SearchHistoryItemTypes.DM === type) {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.searchHistoryItem = searchHistoryItem;
    return __initData(closure_18, obj3);
  } else if (SearchHistoryItemTypes.TEXT === type) {
    const obj4 = {};
    const merged3 = Object.assign(merged);
    obj4.searchHistoryItem = searchHistoryItem;
    return __initData(closure_16, obj4);
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    const obj5 = {};
    const merged4 = Object.assign(merged);
    obj5.searchHistoryItem = searchHistoryItem;
    return __initData(closure_21, obj5);
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    const obj = {};
    const merged5 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return __initData(closure_20, obj);
  } else {
    return null;
  }
}));