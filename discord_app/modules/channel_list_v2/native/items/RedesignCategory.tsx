// === Module 16032: RedesignCategory ===

// Module 16032 (RedesignCategory)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import CircleXIcon from "CircleXIcon" /* 4797 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6608 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6694 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import useFavoritesGuildCategoryAddActionDefault from "useFavoritesGuildCategoryAddAction" /* 10705 */;
import CategoryCollapseActionCreators from "CategoryCollapseActionCreators" /* 11175 */;
import useFavoritesGuildCategoryFullNoticeDefault from "useFavoritesGuildCategoryFullNotice" /* 16033 */;
import useFavoritesGuildCategoryLongPressDefault from "useFavoritesGuildCategoryLongPress" /* 16034 */;
import react from "react" /* 19 */;
import RecentlyActiveCollapseStore from "RecentlyActiveCollapseStore" /* 7042 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6612 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, guildId;

let c10;
let c9;
let closure_12;
let items;
let map1;
let metroImportAll;
let unpackModuleId;
function renderCategoryItem(muted) {
  let PressableOpacity;
  let accessibilityState;
  let handleAccessibilityAction;
  let icon;
  let label;
  let note;
  let noteAlignment;
  let obj5;
  let obj6;
  let onLongPress;
  let onPress;
  let tmp26Result;
  let tmp31;
  let trailingAction;
  let withMarginTop;
  ({ name, icon, note, noteAlignment } = muted);
  if (noteAlignment === undefined) {
    noteAlignment = "inline";
  }
  let flag = muted.muted;
  if (flag === undefined) {
    flag = false;
  }
  ({ onPress, onLongPress, styles, trailingAction } = muted);
  const longPressAction = muted.longPressAction;
  let tmp = null != onPress;
  ({ withMarginTop, accessibilityState } = muted);
  if (!tmp) {
    tmp = null != onLongPress;
  }
  const items = [styles.categoryWrapper, ];
  let num = 0;
  if (withMarginTop) {
    num = closure_9;
  }
  const obj = { paddingLeft: 16, marginTop: num, marginBottom };
  items[1] = obj;
  let tmp32Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    const Text = trailingAction(4886).Text;
    if (flag) {
      str = "text-muted";
    }
    obj2 = { experimental_useNativeText: true, variant: "text-sm/semibold", color: str, lineClamp: 1, style: styles.categoryText, children: name };
    tmp32Result = closure_11(Text, obj2);
  }
  let tmp3 = null;
  if (null != icon) {
    obj3 = { style: styles.iconWrapperStyles, children: icon };
    tmp3 = closure_11(View, obj3);
  }
  let Icon;
  if (trailingAction != null) {
    Icon = trailingAction.Icon;
  }
  if (Icon == null) {
    Icon = trailingAction(10978).PlusMediumIcon;
  }
  let tmp10Result = null;
  if (null != trailingAction) {
    const obj4 = { style: styles.endAlignedWrapper, children: closure_11(PressableOpacity, obj5) };
    obj5 = { accessible: !tmp, accessibilityRole: "button", accessibilityLabel: label, onPress: trailingAction.perform, hitSlop, androidRippleConfig, children: closure_11(Icon, obj6) };
    PressableOpacity = trailingAction(5909).PressableOpacity;
    label = undefined;
    if (!tmp) {
      label = trailingAction.label;
    }
    const colors = longPressAction(587).colors;
    obj6 = { size: "xxs", color: flag ? colors.ICON_MUTED : colors.TEXT_SUBTLE };
    tmp10Result = closure_11(View, obj4);
  }
  const items1 = [tmp32Result, , , ];
  let tmp20 = null;
  if (null != note) {
    const obj7 = { style: "end" === noteAlignment ? styles.endAlignedWrapper : styles.noteWrapper, children: note };
    tmp20 = closure_11(View, obj7);
  }
  items1[1] = tmp20;
  items1[2] = tmp3;
  items1[3] = tmp10Result;
  const tmp18Result = closure_13(closure_12, { children: items1 });
  const items2 = [];
  if (null != trailingAction) {
    const obj8 = { name, label: trailingAction.label };
    items2.push(obj8);
  }
  if (null != longPressAction) {
    const obj9 = { name: name2, label: longPressAction.label };
    items2.push(obj9);
  }
  if (tmp) {
    const obj10 = { accessibilityRole: "header", accessibilityState, accessibilityActions: tmp31, onAccessibilityAction: handleAccessibilityAction, onPress, onLongPress, style: items, children: tmp18Result };
    tmp31 = undefined;
    const PressableHighlight = trailingAction(5909).PressableHighlight;
    if (items2.length > 0) {
      tmp31 = items2;
    }
    handleAccessibilityAction = undefined;
    if (items2.length > 0) {
      handleAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if (c17 === actionName) {
          if (trailingAction != null) {
            trailingAction.perform();
          }
        } else if (c18 === actionName) {
          if (longPressAction != null) {
            longPressAction.perform();
          }
        }
      };
    }
    tmp26Result = closure_11(PressableHighlight, obj10);
  } else {
    const obj11 = { accessibilityRole: "header", style: items, children: tmp18Result };
    tmp26Result = closure_11(View, obj11);
  }
  return tmp26Result;
}
const View = react_native.View;
({ CATEGORY_MARGIN_BOTTOM: metroImportAll, CATEGORY_MARGIN_TOP: c9, CATEGORY_VERTICAL_PADDING: c10 } = RedesignChannelListConstants);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
const styles = createStyles.createStyles(() => {
  let num;
  const obj = { categoryWrapper: obj2, categoryText: { flexShrink: 1, marginTop: num }, noteWrapper: { marginLeft: 4 }, iconWrapperStyles: { marginLeft: 4 }, endAlignedWrapper: { paddingLeft: nativeDefault.space.PX_8, marginLeft: "auto" } };
  num = 0;
  obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical, paddingRight: 16 };
  obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    num = -1;
  }
  ({ paddingLeft: nativeDefault.space.PX_8, marginLeft: "auto" });
  return obj;
});
const hitSlop = { top: 16, bottom: 16, left: 16, right: 16 };
const androidRippleConfig = { borderless: true, radius: 16 };
let c17 = "add-to-category";
let c18 = "category-actions";
let obj = { flexShrink: 0, flexGrow: 0 };
let obj2 = { transform: items };
let merged = Object.assign(obj);
items = [{ rotate: "-90deg" }];
let obj3 = {};
let merged1 = Object.assign(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === arg0) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    if (cResult[3] !== arg0) {
      const fn2 = function s() {
        const obj = openChannelLongPressActionSheet;
        return obj.openChannelLongPressActionSheet(closure_0);
      };
      cResult[3] = arg0;
      cResult[4] = fn2;
      tmp3 = fn2;
    } else {
      tmp3 = cResult[4];
    }
    if (cResult[5] === tmp3) {
      let tmp4;
      if (cResult[6] === tmp2) {
        tmp4 = cResult[7];
      }
      return tmp4;
    }
    obj2 = { onPress: tmp2, onLongPress: tmp3 };
    cResult[5] = tmp3;
    cResult[6] = tmp2;
    cResult[7] = obj2;
    tmp4 = obj2;
  }
  const fn = function l() {
    const obj = CategoryCollapseActionCreators;
    if (closure_1) {
      obj.categoryExpand(closure_0);
    } else {
      obj.categoryCollapse(closure_0);
    }
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let items;
  let items1;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    onPress: react.useCallback(() => {
      const obj = CategoryCollapseActionCreators;
      if (closure_1) {
        obj.categoryExpand(closure_0);
      } else {
        obj.categoryCollapse(closure_0);
      }
    }, items),
    onLongPress: react.useCallback(() => {
      const obj = openChannelLongPressActionSheet;
      return obj.openChannelLongPressActionSheet(closure_0);
    }, items1)
  };
  items = [arg0, arg1];
  items1 = [arg0];
  return obj;
});
let closure_22 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let collapsed;
  let first;
  let muted;
  let onLongPress;
  let onPress;
  let tmp17;
  let tmp22;
  let tmp23;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(16);
  channel = channel.channel;
  const withMarginTop = channel.withMarginTop;
  const tmp4 = styles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CategoryCollapseStore, UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function l() {
      const obj = { collapsed: CategoryCollapseStore.isCollapsed(channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id) };
      return obj;
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  ({ collapsed, muted } = stateFromStoresObject);
  ({ onPress, onLongPress } = closure_22(channel.id, collapsed));
  closure_22(channel.id, collapsed);
  const tmp12 = useChannelNameDefault(channel);
  const tmp13 = useFavoritesGuildCategoryAddActionDefault(channel);
  const tmp14 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp12);
  const tmp15 = useFavoritesGuildCategoryLongPressDefault(channel);
  let perform;
  if (tmp15 != null) {
    perform = tmp15.perform;
  }
  if (perform == null) {
    perform = onLongPress;
  }
  if (cResult[3] !== tmp14) {
    let tmp18 = null;
    if (null != tmp14) {
      obj2 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      ({ tooltip: obj3.accessibilityLabel, label: obj3.children } = tmp14);
      tmp18 = closure_11(tmp(4886).Text, obj2);
    }
    cResult[3] = tmp14;
    cResult[4] = tmp18;
    tmp17 = tmp18;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === tmp12) {
    if (cResult[6] === collapsed) {
      if (cResult[7] === tmp13) {
        if (cResult[8] === tmp15) {
          if (cResult[9] === muted) {
            if (cResult[10] === onPress) {
              if (cResult[11] === tmp4) {
                if (cResult[12] === perform) {
                  if (cResult[13] === tmp17) {
                    let tmp20;
                    if (cResult[14] === withMarginTop) {
                      tmp20 = cResult[15];
                    }
                    return tmp20;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj4 = { name: tmp12, muted, collapsed, onPress, onLongPress: perform, withMarginTop, styles: tmp4, note: tmp17, trailingAction: tmp13, longPressAction: tmp15 };
  const collapsed2 = obj4.collapsed;
  const merged = Object.assign(obj4, Object.assign({ collapsed: 0 }));
  const muted2 = merged.muted;
  const colors = nativeDefault.colors;
  const obj5 = { icon: closure_11(channel(10844).ChevronSmallDownIcon, { size: "xxs", color: tmp22, style: tmp23 }), accessibilityState: { expanded: !collapsed2 } };
  tmp22 = muted2 ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
  tmp23 = collapsed2 ? obj2 : obj3;
  const merged1 = Object.assign(merged);
  const tmp25 = renderCategoryItem(obj5);
  cResult[5] = tmp12;
  cResult[6] = collapsed;
  cResult[7] = tmp13;
  cResult[8] = tmp15;
  cResult[9] = muted;
  cResult[10] = onPress;
  cResult[11] = tmp4;
  cResult[12] = perform;
  cResult[13] = tmp17;
  cResult[14] = withMarginTop;
  cResult[15] = tmp25;
  tmp20 = tmp25;
}) : ((channel) => {
  let onLongPress;
  let onPress;
  let perform;
  let tmp12;
  let tmp15;
  let tmp16;
  channel = channel.channel;
  const withMarginTop = channel.withMarginTop;
  const tmp = styles();
  let obj = channel(504);
  const items = [CategoryCollapseStore, UserGuildSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { collapsed: CategoryCollapseStore.isCollapsed(channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id) };
    return obj;
  });
  const collapsed = stateFromStoresObject.collapsed;
  const muted = stateFromStoresObject.muted;
  ({ onPress, onLongPress } = closure_22(channel.id, collapsed));
  closure_22(channel.id, collapsed);
  const tmp7 = useChannelNameDefault(channel);
  const tmp8 = useFavoritesGuildCategoryAddActionDefault(channel);
  const tmp9 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp7);
  const tmp10 = useFavoritesGuildCategoryLongPressDefault(channel);
  obj2 = { name: tmp7, muted, collapsed, onPress, onLongPress: perform, withMarginTop, styles: tmp, note: tmp12, trailingAction: tmp8, longPressAction: tmp10 };
  perform = undefined;
  if (tmp10 != null) {
    perform = tmp10.perform;
  }
  if (perform == null) {
    perform = onLongPress;
  }
  tmp12 = null;
  if (null != tmp9) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
    ({ tooltip: obj3.accessibilityLabel, label: obj3.children } = tmp9);
    tmp12 = closure_11(tmp2(4886).Text, obj4);
  }
  const collapsed2 = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const muted2 = merged.muted;
  const colors = nativeDefault.colors;
  const obj7 = { icon: closure_11(channel(10844).ChevronSmallDownIcon, { size: "xxs", color: tmp15, style: tmp16 }), accessibilityState: { expanded: !collapsed2 } };
  tmp15 = muted2 ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
  tmp16 = collapsed2 ? obj2 : obj3;
  const merged1 = Object.assign(merged);
  return renderCategoryItem(obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let intl;
  let obj5;
  let obj6;
  let tmp7;
  let obj = guildId(576);
  const cResult = obj.c(11);
  guildId = guildId.guildId;
  const withMarginTop = guildId.withMarginTop;
  const tmp4 = styles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RecentlyActiveCollapseStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return RecentlyActiveCollapseStore.isCollapsed(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === stateFromStores) {
    let tmp9;
    if (cResult[4] === guildId) {
      tmp9 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === tmp9) {
        if (cResult[8] === tmp4) {
          let tmp10;
          if (cResult[9] === withMarginTop) {
            tmp10 = cResult[10];
          }
          return tmp10;
        }
      }
    }
    obj2 = { name: intl.string(guildId(1126).t.uZyspD), collapsed: stateFromStores, onPress: tmp9, withMarginTop, styles: tmp4 };
    intl = tmp(1126).intl;
    const collapsed = obj2.collapsed;
    obj3 = {};
    const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
    const muted = merged.muted;
    const colors = stateFromStores(587).colors;
    const obj4 = { icon: closure_11(guildId(10844).ChevronSmallDownIcon, obj5), accessibilityState: obj6 };
    const tmp15 = muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
    const tmp16 = collapsed ? obj2 : obj3;
    const merged1 = Object.assign(merged);
    obj5 = { size: "xxs", color: tmp15, style: tmp16 };
    obj6 = { expanded: !collapsed };
    const tmp22 = renderCategoryItem(obj4);
    cResult[6] = stateFromStores;
    cResult[7] = tmp9;
    cResult[8] = tmp4;
    cResult[9] = withMarginTop;
    cResult[10] = tmp22;
    tmp10 = tmp22;
  }
  const fn2 = function y() {
    const obj = OptInChannelsActionCreators;
    return obj.setRecentlyActiveCollapsed(guildId, !stateFromStores);
  };
  cResult[3] = stateFromStores;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp9 = fn2;
}) : ((guildId) => {
  let callback;
  let intl;
  let tmp7;
  let tmp8;
  guildId = guildId.guildId;
  const withMarginTop = guildId.withMarginTop;
  const tmp = styles();
  let obj = guildId(504);
  const items = [RecentlyActiveCollapseStore];
  const stateFromStores = obj.useStateFromStores(items, () => RecentlyActiveCollapseStore.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj2 = { name: intl.string(guildId(1126).t.uZyspD), collapsed: stateFromStores, onPress: callback, withMarginTop, styles: tmp };
  callback = react.useCallback(() => {
    const obj = OptInChannelsActionCreators;
    return obj.setRecentlyActiveCollapsed(guildId, !stateFromStores);
  }, items1);
  intl = guildId(1126).intl;
  const collapsed = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const muted = merged.muted;
  const colors = stateFromStores(587).colors;
  obj3 = { icon: closure_11(guildId(10844).ChevronSmallDownIcon, { size: "xxs", color: tmp7, style: tmp8 }), accessibilityState: { expanded: !collapsed } };
  tmp7 = muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
  tmp8 = collapsed ? obj2 : obj3;
  const merged1 = Object.assign(merged);
  return renderCategoryItem(obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let intl;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(7);
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const withMarginTop = guildId.withMarginTop;
  const tmp4 = styles();
  if (cResult[0] === channelIds) {
    let tmp5;
    if (cResult[1] === guildId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp4) {
        let tmp6;
        if (cResult[5] === withMarginTop) {
          tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
    obj2 = { name: intl.string(tmp(1126).t.HbJ7eD), onPress: tmp5, withMarginTop, styles: tmp4 };
    intl = tmp(1126).intl;
    const tmp8 = renderCategoryItem(obj2);
    cResult[3] = tmp5;
    cResult[4] = tmp4;
    cResult[5] = withMarginTop;
    cResult[6] = tmp8;
    tmp6 = tmp8;
  }
  const fn = function n() {
    let intl;
    let items;
    let obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: items, hasIcons: true };
    obj2 = {
      label: intl.string(intl2.t.VkKicb),
      onPress() {
        const obj = guildId(dependencyMap[26]);
        obj.clearRecentChannels(closure_1_0, channelIds);
      },
      IconComponent: CircleXIcon.CircleXIcon
    };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    Sheet_showSimpleActionSheet;
    intl = intl2.intl;
    items = [obj2];
    const result = showSimpleActionSheet(obj);
  };
  cResult[0] = channelIds;
  cResult[1] = guildId;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((guildId) => {
  let callback;
  let intl;
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const withMarginTop = guildId.withMarginTop;
  let items = [guildId, channelIds];
  const tmp = styles();
  let obj = { name: intl.string(guildId(1126).t.HbJ7eD), onPress: callback, withMarginTop, styles: tmp };
  callback = react.useCallback(() => {
    let intl;
    let items;
    let obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: items, hasIcons: true };
    obj2 = {
      label: intl.string(intl2.t.VkKicb),
      onPress() {
        const obj = guildId(dependencyMap[26]);
        obj.clearRecentChannels(closure_1_0, channelIds);
      },
      IconComponent: CircleXIcon.CircleXIcon
    };
    const showSimpleActionSheet = Sheet_showSimpleActionSheet.showSimpleActionSheet;
    Sheet_showSimpleActionSheet;
    intl = intl2.intl;
    items = [obj2];
    const result = showSimpleActionSheet(obj);
  }, items);
  intl = guildId(1126).intl;
  return renderCategoryItem(obj);
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export const useCategoryPressEvents = tmp7;
export const CategoryChannel = tmp8;
export const RecentlyActiveCategory = tmp9;
export const SuggestedCategory = tmp10;