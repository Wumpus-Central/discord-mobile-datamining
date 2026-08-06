// discord_app/modules/search/native/components/list/rows/SearchHistoryRow.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import importAllResult from "GroupDMRow";
import { View } from "MagnifyingGlassIcon";
import ensureGuildLoaded from "ensureGuildLoaded";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import closure_8 from "mergeGuildAvatar";
import { SearchHistoryItemTypes } from "MessageEmbedTypes";
import jsxProd from "module_4295";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
function SearchHistoryRemoveIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = importAllResult.useCallback(() => {
    const result = searchHistoryItem(outer1_2[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  const obj = { onPress: callback, accessibilityRole: "button", unstable_pressDelay: 130, style: { marginLeft: 16 }, hitSlop: { bottom: 16, left: 16, right: 16, top: 16 }, children: null };
  obj[5] = callback2(searchContext(5309).XSmallIcon, { size: "sm", color: "interactive-text-default" });
  return callback2(searchContext(4827).PressableHighlight, obj);
}
function SearchHistoryTextRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let dependencyMap;
  let onPressSearchHistoryText;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = searchContext(15618);
  onPressSearchHistoryText = obj.useOnPressSearchHistoryText({ searchContext });
  const items = [onPressSearchHistoryText, searchContext, , , ];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = importAllResult.useCallback(() => {
    let obj = searchHistoryItem(_undefined[14]);
    obj = { searchContext, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  obj = { style: tmp.textContainer, children: null };
  const tags = searchHistoryItem.tags;
  let mapped;
  if (tags != null) {
    mapped = tags.map((children) => {
      obj = { accessibilityRole: "button", style: _undefined.tag, children: outer1_10(searchContext(_undefined[16]).Text, obj) };
      obj = { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: children.text };
      return outer1_10(outer1_5, obj, children.text);
    });
  }
  obj = { label: null, onPress: null, trailing: null, iconContainerStyle: null, icon: null };
  const items1 = [mapped, closure_10(searchContext(4281).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text })];
  obj[1] = items1;
  obj[0] = closure_11(View, obj);
  obj[1] = callback;
  obj[2] = closure_10(SearchHistoryRemoveIcon, { searchContext, searchHistoryItem });
  obj[3] = tmp.textIconContainer;
  obj[4] = closure_10(View, { style: tmp.iconContainer, children: closure_10(searchContext(5927).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }) });
  return closure_10(searchContext(15628).SearchListRow, obj);
}
function SearchHistoryGroupDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let onPressGroupDMItem;
  let obj = searchContext(stateFromStores[18]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  onPressGroupDMItem = searchContext(stateFromStores[13]).useOnPressGroupDMItem({ searchContext });
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((channelId) => {
    let obj = searchHistoryItem(stateFromStores[14]);
    obj = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressGroupDMItem(channelId);
  }, items2);
  const items3 = [searchContext, searchHistoryItem];
  const memo = importAllResult.useMemo(() => {
    const obj = { name: "remove", label: null };
    const intl = searchContext(stateFromStores[25]).intl;
    obj[1] = intl.string(searchContext(stateFromStores[25]).t.Ov3VO7);
    const items = [obj];
    return items;
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items3);
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = { channel: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null, trailing: null };
    obj[0] = stateFromStores;
    obj[1] = callback;
    obj[2] = memo;
    obj[3] = callback1;
    obj[4] = tmp9;
    tmp8Result = closure_10(searchHistoryItem(stateFromStores[19]), obj);
  }
  return tmp8Result;
}
function SearchHistoryDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let onPressDMItem;
  let obj = searchContext(onPressDMItem[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = importAllResult.useEffect(() => {
    const user = searchContext(onPressDMItem[20]).getUser(searchHistoryItem.userId);
  }, items1);
  onPressDMItem = searchContext(onPressDMItem[13]).useOnPressDMItem({ searchContext });
  searchContext = undefined;
  searchContext = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              let closure_1 = tmp2;
              closure_1 = undefined;
              let obj1 = searchHistoryItem(onPressDMItem[21]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getOrEnsurePrivateChannel(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            const obj2 = { searchContext: null, channelId: null, searchHistoryItemType: null };
            obj2[0] = closure_0;
            obj2[1] = closure_1;
            obj2[2] = outer1_1.type;
            const result = searchHistoryItem(onPressDMItem[14]).trackSearchHistoryClicked(obj2);
            outer1_2(closure_0, closure_1);
            c4 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  callback = importAllResult.useCallback(function() {
    const self = this;
    const apply = searchContext.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [searchContext, searchHistoryItem];
  const memo = importAllResult.useMemo(() => {
    const obj = { name: "remove", label: null };
    const intl = searchContext(stateFromStores[25]).intl;
    obj[1] = intl.string(searchContext(stateFromStores[25]).t.Ov3VO7);
    const items = [obj];
    return items;
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items3);
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = { user: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null, trailing: null };
    obj[0] = stateFromStores;
    obj[1] = callback;
    obj[2] = memo;
    obj[3] = callback1;
    obj[4] = tmp9;
    tmp8Result = closure_10(searchHistoryItem(onPressDMItem[22]), obj);
  }
  return tmp8Result;
}
function SearchHistoryGuildVoiceChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let onPressGuildVoiceChannel;
  let obj = searchContext(stateFromStores[18]);
  const items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  onPressGuildVoiceChannel = searchContext(stateFromStores[13]).useOnPressGuildVoiceChannel({ searchContext });
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { channel: null, voiceStates: null, speakerVoiceStates: null, trailing: null, onPress: null };
    obj[0] = stateFromStores;
    obj[1] = closure_17;
    obj[2] = closure_17;
    obj = { searchContext: null, searchHistoryItem: null };
    obj[0] = searchContext;
    obj[1] = searchHistoryItem;
    obj[3] = callback2(SearchHistoryRemoveIcon, obj);
    obj[4] = tmp5;
    tmp6 = callback2(searchHistoryItem(stateFromStores[23]), obj);
    const tmp9 = searchHistoryItem(stateFromStores[23]);
  }
  return tmp6;
}
function SearchHistoryGuildTextChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let onPressGuildTextChannel;
  let obj = searchContext(stateFromStores[18]);
  let items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const items2 = [generateOldThreadCutoff];
  const stateFromStores1 = searchContext(stateFromStores[18]).useStateFromStores(items2, () => {
    let lastMessageIdResult = outer1_7.lastMessageId(searchHistoryItem.channelId);
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
  const obj2 = searchContext(stateFromStores[18]);
  const tmp = stateFromStores;
  onPressGuildTextChannel = searchContext(stateFromStores[13]).useOnPressGuildTextChannel({ searchContext });
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((channelId) => {
    let obj = searchHistoryItem(stateFromStores[14]);
    obj = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressGuildTextChannel(channelId);
  }, items3);
  const items4 = [searchContext, searchHistoryItem];
  const memo = importAllResult.useMemo(() => {
    const obj = { name: "remove", label: null };
    const intl = searchContext(stateFromStores[25]).intl;
    obj[1] = intl.string(searchContext(stateFromStores[25]).t.Ov3VO7);
    const items = [obj];
    return items;
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items4);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { channel: null, lastMessageId: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null, trailing: null };
    obj[0] = stateFromStores;
    obj[1] = stateFromStores1;
    obj[2] = callback;
    obj[3] = memo;
    obj[4] = callback1;
    obj[5] = tmp10;
    tmp9Result = closure_10(searchHistoryItem(tmp[24]), obj);
  }
  return tmp9Result;
}
let c4 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { iconContainer: null, text: null, textContainer: null, textIconContainer: null, tag: null };
obj = { height: 48, width: 48, borderRadius: require("Themes").radii.xl, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj[0] = obj;
obj[1] = { flexShrink: 1 };
obj[2] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 };
obj[3] = { alignSelf: "flex-start" };
createCacheKey = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: require("Themes").radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj[4] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj);
let closure_17 = [];
const memoResult = importAllResult.memo((searchHistoryItem) => {
  searchHistoryItem = searchHistoryItem.searchHistoryItem;
  const merged = Object.assign(searchHistoryItem, Object.create(null));
  const type = searchHistoryItem.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    let obj = {};
    const merged1 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryGroupDMRow, obj);
  } else if (tmp2.DM === type) {
    obj = {};
    const merged2 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryDMRow, obj);
  } else if (tmp2.TEXT === type) {
    const obj1 = {};
    const merged3 = Object.assign(merged);
    obj1.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryTextRow, obj1);
  } else if (tmp2.GUILD_TEXT_CHANNEL === type) {
    const obj2 = {};
    const merged4 = Object.assign(merged);
    obj2.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryGuildTextChannelRow, obj2);
  } else if (tmp2.GUILD_VOICE_CHANNEL === type) {
    obj = {};
    const merged5 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryGuildVoiceChannelRow, obj);
  } else {
    return null;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default memoResult;