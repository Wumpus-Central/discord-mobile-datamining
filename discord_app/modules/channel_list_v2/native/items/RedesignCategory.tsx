// === Module 16520: RedesignCategory ===

// Module 16520 (RedesignCategory)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import CircleXIcon from "CircleXIcon" /* 6295 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6802 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6891 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10282 */;
import CategoryCollapseActionCreators from "CategoryCollapseActionCreators" /* 10707 */;
import useFavoritesGuildCategoryAddActionDefault from "useFavoritesGuildCategoryAddAction" /* 12689 */;
import useFavoritesGuildCategoryFullNoticeDefault from "useFavoritesGuildCategoryFullNotice" /* 16521 */;
import useFavoritesGuildCategoryLongPressDefault from "useFavoritesGuildCategoryLongPress" /* 16522 */;
import noop from "module_19" /* 19 */;
import RecentlyActiveCollapseStore from "RecentlyActiveCollapseStore" /* 7253 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6806 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;

require = fn;
function renderCategoryItem(muted) {
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
  items[1] = { paddingLeft: 16, marginTop: num, marginBottom };
  let tmp34Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    if (flag) {
      str = "text-muted";
    }
    const obj2 = { experimental_useNativeText: true, variant: "text-sm/semibold", color: str, lineClamp: 1, style: styles.categoryText, children: name };
    tmp34Result = closure_11(trailingAction(5088).Text, obj2);
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
    Icon = trailingAction(10604).PlusMediumIcon;
  }
  if (null == trailingAction) {
    const items1 = [tmp34Result, , , ];
    if (null == note) {
      obj4 = { children: null };
      items1[1] = null;
      items1[2] = tmp3;
      items1[3] = null;
      obj4.children = items1;
      const tmp18Result = tmp18(tmp19, obj4);
      const items2 = [];
      if (null != trailingAction) {
        const obj5 = { name, label: trailingAction.label };
        items2.push(obj5);
      }
      if (null != longPressAction) {
        const obj6 = { name: name2, label: longPressAction.label };
        items2.push(obj6);
      }
      if (tmp) {
        const obj7 = { accessibilityRole: "header", accessibilityState, accessibilityActions: null, onAccessibilityAction: null, onPress: null, onLongPress: null, style: null, children: null };
        let tmp33;
        if (items2.length > 0) {
          tmp33 = items2;
        }
        obj7.accessibilityActions = tmp33;
        let handleAccessibilityAction;
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
        obj7.onAccessibilityAction = handleAccessibilityAction;
        obj7.onPress = onPress;
        obj7.onLongPress = onLongPress;
        obj7.style = items;
        obj7.children = tmp18Result;
        let tmp28Result = closure_11(trailingAction(6184).PressableHighlight, obj7);
      } else {
        const obj8 = { accessibilityRole: "header", style: items, children: tmp18Result };
        tmp28Result = closure_11(View, obj8);
      }
      return tmp28Result;
    } else {
      styles = { style: null, children: null };
      styles.style = "end" === noteAlignment ? styles.endAlignedWrapper : styles.noteWrapper;
      styles.children = note;
      closure_11(View, styles);
      const tmp21 = "end" === noteAlignment ? styles.endAlignedWrapper : styles.noteWrapper;
    }
  } else {
    const obj9 = { style: styles.endAlignedWrapper, children: null };
    let obj10 = { accessible: !tmp, accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, androidRippleConfig: null, children: null };
    let label;
    if (!tmp) {
      label = trailingAction.label;
    }
    obj10.accessibilityLabel = label;
    obj10.onPress = trailingAction.perform;
    obj10.hitSlop = hitSlop;
    obj10.androidRippleConfig = androidRippleConfig;
    let colors = longPressAction(587).colors;
    const obj11 = { size: "xxs", color: flag ? colors.ICON_MUTED : colors.TEXT_SUBTLE };
    colors = closure_11(Icon, obj11);
    obj10.children = colors;
    obj10 = closure_11(trailingAction(6184).PressableOpacity, obj10);
    obj9.children = obj10;
    closure_11(View, obj9);
  }
  const obj = { paddingLeft: 16, marginTop: num, marginBottom };
}
const View = fn(17).View;
const RedesignChannelListConstants = fn(11758);
({ CATEGORY_MARGIN_BOTTOM: closure_8, CATEGORY_MARGIN_TOP: closure_9, CATEGORY_VERTICAL_PADDING: c10 } = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5092);
const styles = createStyles.createStyles(() => {
  const obj = { categoryWrapper: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical, paddingRight: 16 }, categoryText: null, noteWrapper: null, iconWrapperStyles: null, endAlignedWrapper: null };
  let num = 0;
  if (obj3.isAndroid()) {
    num = -1;
  }
  obj.categoryText = { flexShrink: 1, marginTop: num };
  obj.noteWrapper = { marginLeft: 4 };
  obj.iconWrapperStyles = { marginLeft: 4 };
  const obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical, paddingRight: 16 };
  obj3 = PlatformUtils;
  obj.endAlignedWrapper = { paddingLeft: nativeDefault.space.PX_8, marginLeft: "auto" };
  return obj;
});
const hitSlop = { top: 16, bottom: 16, left: 16, right: 16 };
const androidRippleConfig = { borderless: true, radius: 16 };
let c17 = "add-to-category";
let c18 = "category-actions";
let obj2 = { flexShrink: 0, flexGrow: 0 };
let obj3 = {};
let merged = Object.assign(obj2);
let items = [{ rotate: "-90deg" }];
obj3.transform = items;
let obj4 = {};
let merged1 = Object.assign(obj2);
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCategoryPressEvents(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(8);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] !== arg0) {
      const fn2 = function s() {
        return openChannelLongPressActionSheet.openChannelLongPressActionSheet(closure_0);
      };
      cResult[3] = arg0;
      cResult[4] = fn2;
      let tmp3 = fn2;
    } else {
      tmp3 = cResult[4];
    }
    if (cResult[5] === tmp3) {
      if (cResult[6] === tmp2) {
        let tmp4 = cResult[7];
      }
      return tmp4;
    }
    const obj2 = { onPress: tmp2, onLongPress: tmp3 };
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
}) : (function useCategoryPressEvents(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let obj = { onPress: null, onLongPress: null };
  const items = [arg0, arg1];
  obj.onPress = noop.useCallback(() => {
    const obj = CategoryCollapseActionCreators;
    if (closure_1) {
      obj.categoryExpand(closure_0);
    } else {
      obj.categoryCollapse(closure_0);
    }
  }, items);
  const items1 = [arg0];
  obj.onLongPress = noop.useCallback(() => openChannelLongPressActionSheet.openChannelLongPressActionSheet(closure_0), items1);
  return obj;
});
let closure_22 = tmp7;
fn(558);
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CategoryChannel(channel) {
  let ChevronSmallDownIcon = channel;
  let obj = dependencyMap;
  const cResult = channel(576).c(16);
  channel = channel.channel;
  const withMarginTop = channel.withMarginTop;
  const tmp2 = styles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CategoryCollapseStore, UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function l() {
      return { collapsed: CategoryCollapseStore.isCollapsed(channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id) };
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj2 = channel(576);
  const stateFromStoresObject = ChevronSmallDownIcon(504).useStateFromStoresObject(first, tmp6);
  ({ collapsed, muted } = stateFromStoresObject);
  const ChevronSmallDownIconResult = ChevronSmallDownIcon(504);
  ({ onPress, onLongPress } = closure_22(channel.id, collapsed));
  const tmp10 = useChannelNameDefault(channel);
  const tmp11 = useFavoritesGuildCategoryAddActionDefault(channel);
  const tmp12 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp10);
  const tmp13 = useFavoritesGuildCategoryLongPressDefault(channel);
  let perform;
  if (tmp13 != null) {
    perform = tmp13.perform;
  }
  if (perform == null) {
    perform = onLongPress;
  }
  if (cResult[3] !== tmp12) {
    let tmp16 = null;
    if (null != tmp12) {
      obj3 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
      ({ tooltip: obj4.accessibilityLabel, label: obj4.children } = tmp12);
      tmp16 = closure_11(ChevronSmallDownIcon(5088).Text, obj3);
    }
    cResult[3] = tmp12;
    cResult[4] = tmp16;
    let tmp15 = tmp16;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === tmp10) {
    if (cResult[6] === collapsed) {
      if (cResult[7] === tmp11) {
        if (cResult[8] === tmp13) {
          if (cResult[9] === muted) {
            if (cResult[10] === onPress) {
              if (cResult[11] === tmp2) {
                if (cResult[12] === perform) {
                  if (cResult[13] === tmp15) {
                    if (cResult[14] === withMarginTop) {
                      return cResult[15];
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const obj5 = { name: tmp10, muted, collapsed, onPress, onLongPress: perform, withMarginTop, styles: tmp2, note: tmp15, trailingAction: tmp11, longPressAction: tmp13 };
  const collapsed2 = obj5.collapsed;
  let merged = Object.assign(obj5, Object.assign({ collapsed: 0 }));
  const colors = nativeDefault.colors;
  const obj6 = {};
  merged = Object.assign(merged);
  ChevronSmallDownIcon = ChevronSmallDownIcon(10532).ChevronSmallDownIcon;
  obj6.icon = closure_11(ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed2 ? obj3 : obj4 });
  obj = { expanded: !collapsed2 };
  obj6.accessibilityState = obj;
  const tmp19 = merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
  const tmp20 = collapsed2 ? obj3 : obj4;
  const tmp8 = closure_22(channel.id, collapsed);
  cResult[5] = tmp10;
  cResult[6] = collapsed;
  cResult[7] = tmp11;
  cResult[8] = tmp13;
  cResult[9] = muted;
  cResult[10] = onPress;
  cResult[11] = tmp2;
  cResult[12] = perform;
  cResult[13] = tmp15;
  cResult[14] = withMarginTop;
  cResult[15] = renderCategoryItem(obj6);
  const tmp21 = renderCategoryItem(obj6);
}) : (function CategoryChannel(channel) {
  channel = channel.channel;
  const tmp = styles();
  const items = [CategoryCollapseStore, UserGuildSettingsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ collapsed: CategoryCollapseStore.isCollapsed(channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id) }));
  collapsed = stateFromStoresObject.collapsed;
  const obj = channel(504);
  ({ onPress, onLongPress } = closure_22(channel.id, collapsed));
  const tmp7 = useChannelNameDefault(channel);
  const tmp5 = closure_22(channel.id, collapsed);
  const tmp9 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp7);
  const tmp10 = useFavoritesGuildCategoryLongPressDefault(channel);
  const obj2 = { name: tmp7, muted: stateFromStoresObject.muted, collapsed, onPress, onLongPress: null, withMarginTop: null, styles: null, note: null, trailingAction: null, longPressAction: null };
  let perform;
  if (tmp10 != null) {
    perform = tmp10.perform;
  }
  if (perform == null) {
    perform = onLongPress;
  }
  obj2.onLongPress = perform;
  obj2.withMarginTop = channel.withMarginTop;
  obj2.styles = tmp;
  let tmp12 = null;
  if (null != tmp9) {
    obj4 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
    ({ tooltip: obj3.accessibilityLabel, label: obj3.children } = tmp9);
    tmp12 = closure_11(tmp2(5088).Text, obj4);
  }
  obj2.note = tmp12;
  obj2.trailingAction = useFavoritesGuildCategoryAddActionDefault(channel);
  obj2.longPressAction = tmp10;
  const collapsed2 = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const colors = nativeDefault.colors;
  const obj7 = {};
  const merged1 = Object.assign(merged);
  obj7.icon = closure_11(channel(10532).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed2 ? obj3 : obj4 });
  obj7.accessibilityState = { expanded: !collapsed2 };
  return renderCategoryItem(obj7);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function RecentlyActiveCategory(guildId) {
  let ChevronSmallDownIcon = guildId;
  let obj = dependencyMap;
  const cResult = guildId(576).c(11);
  guildId = guildId.guildId;
  const withMarginTop = guildId.withMarginTop;
  const tmp2 = styles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RecentlyActiveCollapseStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return RecentlyActiveCollapseStore.isCollapsed(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  const obj2 = guildId(576);
  const stateFromStores = ChevronSmallDownIcon(504).useStateFromStores(first, tmp5);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === guildId) {
      let tmp7 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp2) {
          if (cResult[9] === withMarginTop) {
            return cResult[10];
          }
        }
      }
    }
    obj3 = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null };
    const intl = ChevronSmallDownIcon(1126).intl;
    obj3.name = intl.string(ChevronSmallDownIcon(1126).t.uZyspD);
    obj3.collapsed = stateFromStores;
    obj3.onPress = tmp7;
    obj3.withMarginTop = withMarginTop;
    obj3.styles = tmp2;
    collapsed = obj3.collapsed;
    let merged = Object.assign(obj3, Object.assign({ collapsed: 0 }));
    const colors = stateFromStores(587).colors;
    const obj5 = {};
    merged = Object.assign(merged);
    ChevronSmallDownIcon = ChevronSmallDownIcon(10532).ChevronSmallDownIcon;
    const obj6 = { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? obj3 : {} };
    obj5.icon = closure_11(ChevronSmallDownIcon, obj6);
    obj = { expanded: !collapsed };
    obj5.accessibilityState = obj;
    const tmp18 = renderCategoryItem(obj5);
    cResult[6] = stateFromStores;
    cResult[7] = tmp7;
    cResult[8] = tmp2;
    cResult[9] = withMarginTop;
    cResult[10] = tmp18;
    obj4 = {};
    const tmp12 = merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
    const tmp13 = collapsed ? obj3 : {};
  }
  const fn2 = function y() {
    return OptInChannelsActionCreators.setRecentlyActiveCollapsed(guildId, !stateFromStores);
  };
  cResult[3] = stateFromStores;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp7 = fn2;
  const ChevronSmallDownIconResult = ChevronSmallDownIcon(504);
}) : (function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  const tmp = styles();
  const tmp2 = guildId;
  const items = [RecentlyActiveCollapseStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => RecentlyActiveCollapseStore.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  const obj2 = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null };
  const callback = noop.useCallback(() => OptInChannelsActionCreators.setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
  const intl = guildId(1126).intl;
  obj2.name = intl.string(guildId(1126).t.uZyspD);
  obj2.collapsed = stateFromStores;
  obj2.onPress = callback;
  obj2.withMarginTop = guildId.withMarginTop;
  obj2.styles = tmp;
  collapsed = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const colors = stateFromStores(587).colors;
  obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.icon = closure_11(tmp2(10532).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? obj3 : obj4 });
  obj3.accessibilityState = { expanded: !collapsed };
  return renderCategoryItem(obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export const useCategoryPressEvents = tmp7;
export const CategoryChannel = tmp8;
export const RecentlyActiveCategory = tmp9;
export const SuggestedCategory = ReactCompilerGating.isReactCompilerEnabled() ? (function SuggestedCategory(guildId) {
  const cResult = guildId(576).c(7);
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const withMarginTop = guildId.withMarginTop;
  const tmp4 = styles();
  if (cResult[0] === channelIds) {
    if (cResult[1] === guildId) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === withMarginTop) {
          let tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
    let obj2 = { name: null, onPress: null, withMarginTop: null, styles: null };
    let intl = tmp(1126).intl;
    obj2.name = intl.string(tmp(1126).t.HbJ7eD);
    obj2.onPress = tmp5;
    obj2.withMarginTop = withMarginTop;
    obj2.styles = tmp4;
    const tmp8 = renderCategoryItem(obj2);
    cResult[3] = tmp5;
    cResult[4] = tmp4;
    cResult[5] = withMarginTop;
    cResult[6] = tmp8;
    tmp6 = tmp8;
  }
  const fn = function n() {
    const obj2 = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj3 = { label: null, onPress: null, IconComponent: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.VkKicb);
    obj3.onPress = function onPress() {
      guildId(dependencyMap[26]).clearRecentChannels(closure_1_0, channelIds);
    };
    obj3.IconComponent = CircleXIcon.CircleXIcon;
    const items = [obj3];
    obj2.options = items;
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  };
  cResult[0] = channelIds;
  cResult[1] = guildId;
  cResult[2] = fn;
  tmp5 = fn;
  const obj = guildId(576);
}) : (function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  let items = [guildId, channelIds];
  const obj = { name: null, onPress: null, withMarginTop: null, styles: null };
  const callback = noop.useCallback(() => {
    const obj2 = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj3 = { label: null, onPress: null, IconComponent: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.VkKicb);
    obj3.onPress = function onPress() {
      guildId(dependencyMap[26]).clearRecentChannels(closure_1_0, channelIds);
    };
    obj3.IconComponent = CircleXIcon.CircleXIcon;
    const items = [obj3];
    obj2.options = items;
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items);
  let intl = guildId(1126).intl;
  obj.name = intl.string(guildId(1126).t.HbJ7eD);
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles();
  return renderCategoryItem(obj);
});