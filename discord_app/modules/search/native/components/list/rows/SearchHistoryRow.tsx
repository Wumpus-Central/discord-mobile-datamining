// discord_app/modules/search/native/components/list/rows/SearchHistoryRow.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../../../stores/ChannelStore.tsx";
import generateOldThreadCutoff from "../../../../../../stores/ReadStateStore.tsx";
import mergeGuildAvatar from "../../../../../../stores/UserStore.tsx";
import { SearchHistoryItemTypes } from "../../../../SearchConstants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function SearchHistoryRemoveIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = importAllResult.useCallback(() => {
    const result = searchHistoryItem(dependencyMap[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  return callback2(searchContext(5433).PressableHighlight, { onPress: callback, accessibilityRole: "button", unstable_pressDelay: 130, style: { marginLeft: 16 }, hitSlop: { bottom: 16, left: 16, right: 16, top: 16 }, children: callback2(searchContext(6368).XSmallIcon, { size: "sm", color: "interactive-text-default" }) });
}
function SearchHistoryTextRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = searchContext(15866);
  const onPressSearchHistoryText = obj.useOnPressSearchHistoryText({ searchContext });
  const items = [onPressSearchHistoryText, searchContext, , , ];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = importAllResult.useCallback(() => {
    searchHistoryItem(tag[14]);
    const obj = { searchContext, searchHistoryItemType: searchHistoryItem.type };
    const result = obj.trackSearchHistoryClicked(obj);
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  obj = { style: tmp.textContainer, children: null };
  const tags = searchHistoryItem.tags;
  let mapped;
  if (tags != null) {
    mapped = tags.map((item, index) => {
      { accessibilityRole: "button", style: tag.tag, children: closure_1_10(searchContext(tag[16]).Text, obj) };
      obj = { lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: item.text };
      return closure_1_10(View, obj, item.text);
    });
  }
  obj = { label: null, onPress: null, trailing: null, iconContainerStyle: null, icon: null };
  const items1 = [mapped, callback(searchContext(4734).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: searchHistoryItem.text })];
  obj[1] = items1;
  obj[0] = callback2(View, obj);
  obj[1] = callback;
  obj[2] = callback(SearchHistoryRemoveIcon, { searchContext, searchHistoryItem });
  obj[3] = tmp.textIconContainer;
  obj[4] = callback(View, { style: tmp.iconContainer, children: callback(searchContext(7351).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }) });
  return callback(searchContext(15876).SearchListRow, obj);
}
function SearchHistoryGroupDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[18]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const onPressGroupDMItem = searchContext(stateFromStores[13]).useOnPressGroupDMItem({ searchContext });
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((channelId) => {
    searchHistoryItem(stateFromStores[14]);
    const obj = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
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
    tmp8Result = callback(searchHistoryItem(stateFromStores[19]), obj);
  }
  return tmp8Result;
}
function SearchHistoryDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let onPressDMItem;
  let obj = searchContext(onPressDMItem[18]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getUser(searchHistoryItem.userId));
  const items1 = [searchHistoryItem.userId];
  const effect = importAllResult.useEffect(() => {
    const user = searchContext(onPressDMItem[20]).getUser(searchHistoryItem.userId);
  }, items1);
  onPressDMItem = searchContext(onPressDMItem[13]).useOnPressDMItem({ searchContext });
  searchContext = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_1 = undefined;
              obj1 = searchHistoryItem(onPressDMItem[21]);
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
            obj2[2] = closure_1_1.type;
            const result = searchHistoryItem(onPressDMItem[14]).trackSearchHistoryClicked(obj2);
            closure_1_2(closure_0, closure_1);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
    tmp8Result = callback(searchHistoryItem(onPressDMItem[22]), obj);
  }
  return tmp8Result;
}
function SearchHistoryGuildVoiceChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let obj = searchContext(stateFromStores[18]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const onPressGuildVoiceChannel = searchContext(stateFromStores[13]).useOnPressGuildVoiceChannel({ searchContext });
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
  let obj = searchContext(stateFromStores[18]);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(searchHistoryItem.channelId));
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const result = searchHistoryItem(stateFromStores[10]).removeSearchHistoryItem(searchContext, searchHistoryItem);
      const obj = searchHistoryItem(stateFromStores[10]);
    }
  }, items1);
  const items2 = [closure_7];
  const stateFromStores1 = searchContext(stateFromStores[18]).useStateFromStores(items2, () => {
    let lastMessageIdResult = closure_1_7.lastMessageId(searchHistoryItem.channelId);
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
  const onPressGuildTextChannel = searchContext(stateFromStores[13]).useOnPressGuildTextChannel({ searchContext });
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  const callback = importAllResult.useCallback((channelId) => {
    searchHistoryItem(stateFromStores[14]);
    const obj = { searchContext, channelId, searchHistoryItemType: searchHistoryItem.type };
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
    tmp9Result = callback(searchHistoryItem(tmp[24]), obj);
  }
  return tmp9Result;
}
let c4 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xl, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj[0] = obj;
obj[1] = { flexShrink: 1 };
obj[2] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 };
obj[3] = { alignSelf: "flex-start" };
const createCacheKey = { paddingHorizontal: 8, paddingVertical: 4, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", margin: 2, flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
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
  } else if (SearchHistoryItemTypes.DM === type) {
    obj = {};
    const merged2 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryDMRow, obj);
  } else if (SearchHistoryItemTypes.TEXT === type) {
    obj1 = {};
    const merged3 = Object.assign(merged);
    obj1.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryTextRow, obj1);
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    const obj2 = {};
    const merged4 = Object.assign(merged);
    obj2.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryGuildTextChannelRow, obj2);
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    obj = {};
    const merged5 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return callback2(SearchHistoryGuildVoiceChannelRow, obj);
  } else {
    return null;
  }
});
let result = require("obj132").fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default memoResult;