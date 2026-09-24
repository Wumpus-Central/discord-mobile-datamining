// discord_app/modules/search/native/components/list/rows/SearchHistoryRow.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import UserActionCreators from "../../../../../../actions/UserActionCreators.tsx";
import search_tracking_TrackingDefault from "../../../tracking/Tracking.tsx";
import SearchPlatformActionCreatorsDefault from "../../../SearchPlatformActionCreators.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import ReadStateStore from "../../../../../../stores/ReadStateStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";

require = fn;
function SearchHistoryRemoveIcon(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const items = [searchContext, searchHistoryItem];
  const callback = noop.useCallback(() => {
    const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
  }, items);
  return closure_10(searchContext(5427).PressableHighlight, {
    onPress: callback,
    accessibilityRole: "button",
    unstable_pressDelay: 130,
    style: { marginLeft: 16 },
    hitSlop: { bottom: 16, left: 16, right: 16, top: 16 },
    children: closure_10(searchContext(5985).XSmallIcon, { size: "sm", color: "interactive-text-default" }),
  });
}
function SearchHistoryTextRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  const tmp = closure_12();
  dependencyMap = tmp;
  const onPressSearchHistoryText = searchContext(17210).useOnPressSearchHistoryText({ searchContext });
  const items = [onPressSearchHistoryText, searchContext, , ,];
  ({ tags: arr[2], text: arr[3], type: arr[4] } = searchHistoryItem);
  const callback = noop.useCallback(() => {
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({
      searchContext,
      searchHistoryItemType: searchHistoryItem.type,
    });
    onPressSearchHistoryText(searchHistoryItem.text, searchHistoryItem.tags);
  }, items);
  const obj2 = { style: tmp.textContainer, children: null };
  const tags = searchHistoryItem.tags;
  let mapped;
  if (tags != null) {
    mapped = tags.map((children) => {
      const obj = {
        accessibilityRole: "button",
        style: tag.tag,
        children: closure_2_10(Text_Text.Text, {
          lineClamp: 1,
          variant: "text-sm/semibold",
          color: "mobile-text-heading-primary",
          children: children.text,
        }),
      };
      return closure_2_10(View, obj, children.text);
    });
  }
  const obj3 = { label: null, onPress: null, trailing: null, iconContainerStyle: null, icon: null };
  const items1 = [
    mapped,
    closure_10(searchContext(4825).Text, {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.text,
      children: searchHistoryItem.text,
    }),
  ];
  obj2.children = items1;
  obj3.label = closure_11(View, obj2);
  obj3.onPress = callback;
  obj3.trailing = closure_10(SearchHistoryRemoveIcon, { searchContext, searchHistoryItem });
  obj3.iconContainerStyle = tmp.textIconContainer;
  let obj = searchContext(17210);
  const obj4 = {
    lineClamp: 1,
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.text,
    children: searchHistoryItem.text,
  };
  obj3.icon = closure_10(View, {
    style: tmp.iconContainer,
    children: closure_10(searchContext(7384).MagnifyingGlassIcon, { size: "sm", color: "interactive-text-default" }),
  });
  return closure_10(searchContext(17220).SearchListRow, obj3);
}
function SearchHistoryGroupDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = searchContext(stateFromStores[18]).useStateFromStores(items, () =>
    ChannelStore.getChannel(searchHistoryItem.channelId),
  );
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj = searchContext(stateFromStores[18]);
  const tmp = stateFromStores;
  const onPressGroupDMItem = searchContext(stateFromStores[13]).useOnPressGroupDMItem({ searchContext });
  const items2 = [onPressGroupDMItem, searchContext, searchHistoryItem.type];
  closure_129_0 = searchContext;
  closure_129_1 = searchHistoryItem;
  const callback = noop.useCallback((channelId) => {
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({
      searchContext,
      channelId,
      searchHistoryItemType: searchHistoryItem.type,
    });
    onPressGroupDMItem(channelId);
  }, items2);
  const items3 = [searchContext, searchHistoryItem];
  const memo = noop.useMemo(() => {
    const obj = { name: "remove", label: null };
    const intl = searchContext(stateFromStores[25]).intl;
    obj.label = intl.string(searchContext(stateFromStores[25]).t.Ov3VO7);
    const items = [obj];
    return items;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items3);
  let tmp8Result = null;
  if (null != stateFromStores) {
    const obj3 = {
      channel: stateFromStores,
      onPress: callback,
      accessibilityActions: memo,
      onAccessibilityAction: callback1,
      trailing: tmp9,
    };
    tmp8Result = closure_10(searchHistoryItem(tmp[19]), obj3);
  }
  return tmp8Result;
}
function SearchHistoryDMRow(searchContext) {
  searchContext = searchContext.searchContext;
  _require = searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let onPressDMItem;
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    UserStore.getUser(searchHistoryItem.userId),
  );
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
          return { value: "HermesInternal", done: null };
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
              const obj5 = {
                value: searchHistoryItem(onPressDMItem[21]).getOrEnsurePrivateChannel(searchContext),
                done: false,
              };
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
            const result = searchHistoryItem(onPressDMItem[14]).trackSearchHistoryClicked(obj7);
            tmp5(closure_129_0, closure_129_1);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext, searchHistoryItem.type];
  closure_129_0 = searchContext;
  closure_129_1 = searchHistoryItem;
  const callback = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [searchContext, searchHistoryItem];
  const memo = noop.useMemo(() => {
    const obj = { name: "remove", label: null };
    const intl = searchContext(stateFromStores[25]).intl;
    obj.label = intl.string(searchContext(stateFromStores[25]).t.Ov3VO7);
    const items = [obj];
    return items;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items3);
  let tmp8Result = null;
  if (null != stateFromStores) {
    let obj3 = {
      user: stateFromStores,
      onPress: callback,
      accessibilityActions: memo,
      onAccessibilityAction: callback1,
      trailing: tmp9,
    };
    tmp8Result = closure_10(searchHistoryItem(tmp[22]), obj3);
  }
  return tmp8Result;
}
function SearchHistoryGuildVoiceChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = searchContext(stateFromStores[18]).useStateFromStores(items, () =>
    ChannelStore.getChannel(searchHistoryItem.channelId),
  );
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj = searchContext(stateFromStores[18]);
  const tmp = stateFromStores;
  const onPressGuildVoiceChannel = searchContext(stateFromStores[13]).useOnPressGuildVoiceChannel({ searchContext });
  const items2 = [onPressGuildVoiceChannel, searchContext, searchHistoryItem.type];
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj3 = {
      channel: stateFromStores,
      voiceStates: speakerVoiceStates,
      speakerVoiceStates,
      trailing: null,
      onPress: null,
    };
    const obj4 = { searchContext, searchHistoryItem };
    obj3.trailing = closure_10(SearchHistoryRemoveIcon, obj4);
    obj3.onPress = tmp5;
    tmp6 = closure_10(searchHistoryItem(tmp[23]), obj3);
    const tmp9 = searchHistoryItem(tmp[23]);
  }
  return tmp6;
}
function SearchHistoryGuildTextChannelRow(searchContext) {
  searchContext = searchContext.searchContext;
  const searchHistoryItem = searchContext.searchHistoryItem;
  let stateFromStores;
  let items = [ChannelStore];
  stateFromStores = searchContext(stateFromStores[18]).useStateFromStores(items, () =>
    ChannelStore.getChannel(searchHistoryItem.channelId),
  );
  const items1 = [stateFromStores, searchContext, searchHistoryItem];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items1);
  let obj = searchContext(stateFromStores[18]);
  const tmp = stateFromStores;
  const items2 = [ReadStateStore];
  const stateFromStores1 = searchContext(stateFromStores[18]).useStateFromStores(items2, () => {
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
  const obj2 = searchContext(stateFromStores[18]);
  const onPressGuildTextChannel = searchContext(stateFromStores[13]).useOnPressGuildTextChannel({ searchContext });
  const items3 = [onPressGuildTextChannel, searchContext, searchHistoryItem.type];
  closure_129_0 = searchContext;
  closure_129_1 = searchHistoryItem;
  const callback = noop.useCallback((channelId) => {
    const result = search_tracking_TrackingDefault.trackSearchHistoryClicked({
      searchContext,
      channelId,
      searchHistoryItemType: searchHistoryItem.type,
    });
    onPressGuildTextChannel(channelId);
  }, items3);
  const items4 = [searchContext, searchHistoryItem];
  const memo = noop.useMemo(() => {
    const obj = { name: "remove", label: null };
    const intl = searchContext(stateFromStores[25]).intl;
    obj.label = intl.string(searchContext(stateFromStores[25]).t.Ov3VO7);
    const items = [obj];
    return items;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    if ("remove" === nativeEvent.nativeEvent.actionName) {
      const result = SearchPlatformActionCreatorsDefault.removeSearchHistoryItem(searchContext, searchHistoryItem);
    }
  }, items4);
  let tmp9Result = null;
  if (null != stateFromStores) {
    const obj4 = {
      channel: stateFromStores,
      lastMessageId: stateFromStores1,
      onPress: callback,
      accessibilityActions: memo,
      onAccessibilityAction: callback1,
      trailing: tmp10,
    };
    tmp9Result = closure_10(searchHistoryItem(tmp[24]), obj4);
  }
  return tmp9Result;
}
const View = fn(17).View;
const SearchHistoryItemTypes = fn(8209).SearchHistoryItemTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj = { iconContainer: null, text: null, textContainer: null, textIconContainer: null, tag: null };
let size = {
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.xl,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  alignItems: "center",
  justifyContent: "center",
};
obj.iconContainer = size;
obj.text = { flexShrink: 1 };
obj.textContainer = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 2 };
obj.textIconContainer = { alignSelf: "flex-start" };
obj.tag = {
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  margin: 2,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let closure_12 = createStyles.createStyles(obj);
let closure_17 = [];
let obj3 = {
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  margin: 2,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/SearchHistoryRow.tsx");

export default noop.memo((searchHistoryItem) => {
  searchHistoryItem = searchHistoryItem.searchHistoryItem;
  const merged = Object.assign(searchHistoryItem, Object.assign({ searchHistoryItem: 0 }));
  const type = searchHistoryItem.type;
  if (SearchHistoryItemTypes.GROUP_DM === type) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.searchHistoryItem = searchHistoryItem;
    return closure_1_10(SearchHistoryGroupDMRow, obj2);
  } else if (SearchHistoryItemTypes.DM === type) {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.searchHistoryItem = searchHistoryItem;
    return closure_1_10(SearchHistoryDMRow, obj3);
  } else if (SearchHistoryItemTypes.TEXT === type) {
    const obj4 = {};
    const merged3 = Object.assign(merged);
    obj4.searchHistoryItem = searchHistoryItem;
    return closure_1_10(SearchHistoryTextRow, obj4);
  } else if (SearchHistoryItemTypes.GUILD_TEXT_CHANNEL === type) {
    const obj5 = {};
    const merged4 = Object.assign(merged);
    obj5.searchHistoryItem = searchHistoryItem;
    return closure_1_10(SearchHistoryGuildTextChannelRow, obj5);
  } else if (SearchHistoryItemTypes.GUILD_VOICE_CHANNEL === type) {
    const obj = {};
    const merged5 = Object.assign(merged);
    obj.searchHistoryItem = searchHistoryItem;
    return closure_1_10(SearchHistoryGuildVoiceChannelRow, obj);
  } else {
    return null;
  }
});
