// discord_app/modules/channel_list_v2/native/items/RedesignCategory.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import CircleXIcon from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import OptInChannelsActionCreators from "../../../opt_in_channels/OptInChannelsActionCreators.tsx";
import Sheet_showSimpleActionSheet from "../../../../design/components/Sheet/native/showSimpleActionSheet.native.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import useFavoritesGuildCategoryAddActionDefault from "../../../favorites/hooks/useFavoritesGuildCategoryAddAction.tsx";
import CategoryCollapseActionCreators from "../../../../actions/CategoryCollapseActionCreators.tsx";
import useFavoritesGuildCategoryFullNoticeDefault from "../../../favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx";
import useFavoritesGuildCategoryLongPressDefault from "../../../favorites/native/action/useFavoritesGuildCategoryLongPress.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RecentlyActiveCollapseStore from "../../../opt_in_channels/RecentlyActiveCollapseStore.tsx";
import CategoryCollapseStore from "../../../../stores/CategoryCollapseStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

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
  const items = [styles.categoryWrapper];
  let num = 0;
  if (withMarginTop) {
    num = closure_9;
  }
  let obj = { paddingLeft: 16, marginTop: num, marginBottom };
  items[1] = obj;
  let tmp34Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    if (flag) {
      str = "text-muted";
    }
    obj = {
      experimental_useNativeText: true,
      variant: "text-sm/semibold",
      color: str,
      lineClamp: 1,
      style: styles.categoryText,
      children: name,
    };
    tmp34Result = closure_11(trailingAction(4556).Text, obj);
  }
  let tmp3 = null;
  if (null != icon) {
    obj = { style: styles.iconWrapperStyles, children: icon };
    tmp3 = closure_11(View, obj);
  }
  let Icon;
  if (trailingAction != null) {
    Icon = trailingAction.Icon;
  }
  if (Icon == null) {
    Icon = trailingAction(12753).PlusMediumIcon;
  }
  if (null == trailingAction) {
    const items1 = [tmp34Result, , ,];
    if (null == note) {
      obj1 = { children: null };
      items1[1] = null;
      items1[2] = tmp3;
      items1[3] = null;
      obj1.children = items1;
      const tmp18Result = tmp18(tmp19, obj1);
      const items2 = [];
      if (null != trailingAction) {
        let obj2 = { name, label: trailingAction.label };
        items2.push(obj2);
      }
      if (null != longPressAction) {
        const obj3 = { name: name2, label: longPressAction.label };
        items2.push(obj3);
      }
      if (tmp) {
        const obj4 = {
          accessibilityRole: "header",
          accessibilityState,
          accessibilityActions: null,
          onAccessibilityAction: null,
          onPress: null,
          onLongPress: null,
          style: null,
          children: null,
        };
        let tmp33;
        if (items2.length > 0) {
          tmp33 = items2;
        }
        obj4.accessibilityActions = tmp33;
        let handleAccessibilityAction;
        if (items2.length > 0) {
          handleAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if (c17 === actionName) {
              if (trailingAction != null) {
                obj2.perform();
              }
              obj2 = trailingAction;
            } else if (c18 === actionName) {
              if (longPressAction != null) {
                obj.perform();
              }
              obj = longPressAction;
            }
          };
        }
        obj4.onAccessibilityAction = handleAccessibilityAction;
        obj4.onPress = onPress;
        obj4.onLongPress = onLongPress;
        obj4.style = items;
        obj4.children = tmp18Result;
        let tmp28Result = tmp28(trailingAction(5123).PressableHighlight, obj4);
      } else {
        const obj5 = { accessibilityRole: "header", style: items, children: tmp18Result };
        tmp28Result = tmp28(View, obj5);
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
    const obj6 = { style: styles.endAlignedWrapper, children: null };
    let obj7 = {
      accessible: !tmp,
      accessibilityRole: "button",
      accessibilityLabel: null,
      onPress: null,
      hitSlop: null,
      androidRippleConfig: null,
      children: null,
    };
    let label;
    if (!tmp) {
      label = trailingAction.label;
    }
    obj7.accessibilityLabel = label;
    obj7.onPress = trailingAction.perform;
    obj7.hitSlop = hitSlop;
    obj7.androidRippleConfig = androidRippleConfig;
    let colors = longPressAction(576).colors;
    const obj8 = { size: "xxs", color: flag ? colors.ICON_MUTED : colors.TEXT_SUBTLE };
    colors = tmp9(Icon, obj8);
    obj7.children = colors;
    obj7 = tmp9(trailingAction(5123).PressableOpacity, obj7);
    obj6.children = obj7;
    closure_11(View, obj6);
  }
}
const View = fn(17).View;
const RedesignChannelListConstants = fn(10118);
({
  CATEGORY_MARGIN_BOTTOM: closure_8,
  CATEGORY_MARGIN_TOP: closure_9,
  CATEGORY_VERTICAL_PADDING: c10,
} = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4560);
const styles = createStyles.createStyles(() => {
  let obj = {
    categoryWrapper: null,
    categoryText: null,
    noteWrapper: null,
    iconWrapperStyles: null,
    endAlignedWrapper: null,
  };
  obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical, paddingRight: 16 };
  obj.categoryWrapper = obj;
  let num = 0;
  if (obj3.isAndroid()) {
    num = -1;
  }
  obj.categoryText = { flexShrink: 1, marginTop: num };
  obj.noteWrapper = { marginLeft: 4 };
  obj.iconWrapperStyles = { marginLeft: 4 };
  obj = { paddingLeft: nativeDefault.space.PX_8, marginLeft: "auto" };
  obj.endAlignedWrapper = obj;
  return obj;
});
const hitSlop = { top: 16, bottom: 16, left: 16, right: 16 };
const androidRippleConfig = { borderless: true, radius: 16 };
let c17 = "add-to-category";
let c18 = "category-actions";
createStyles = { flexShrink: 0, flexGrow: 0 };
createStyles = {};
createStyles = Object.assign(createStyles);
let items = [{ rotate: "-90deg" }];
createStyles.transform = items;
let obj1 = {};
createStyles = Object.assign(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export const useCategoryPressEvents = function useCategoryPressEvents(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const obj = { onPress: null, onLongPress: null };
  const items = [arg0, arg1];
  obj.onPress = noop.useCallback(() => {
    const obj = CategoryCollapseActionCreators;
    if (importDefault) {
      obj.categoryExpand(channel);
    } else {
      obj.categoryCollapse(channel);
    }
  }, items);
  const items1 = [arg0];
  obj.onLongPress = noop.useCallback(
    () => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel),
    items1,
  );
  return obj;
};
export const CategoryChannel = function CategoryChannel(channel) {
  channel = channel.channel;
  let obj = channel(504);
  const items = [CategoryCollapseStore, UserGuildSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    collapsed: CategoryCollapseStore.isCollapsed(channel.id),
    muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
  }));
  const collapsed = stateFromStoresObject.collapsed;
  const id = channel.id;
  closure_129_0 = id;
  closure_129_1 = collapsed;
  const items1 = [id, collapsed];
  const items2 = [id];
  const callback = noop.useCallback(() => {
    const obj = CategoryCollapseActionCreators;
    if (importDefault) {
      obj.categoryExpand(channel);
    } else {
      obj.categoryCollapse(channel);
    }
  }, items1);
  const callback1 = noop.useCallback(
    () => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel),
    items2,
  );
  const tmp8 = useChannelNameDefault(channel);
  const tmp = styles();
  const tmp10 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp8);
  const tmp11 = useFavoritesGuildCategoryLongPressDefault(channel);
  obj = {
    name: tmp8,
    muted: stateFromStoresObject.muted,
    collapsed,
    onPress: callback,
    onLongPress: null,
    withMarginTop: null,
    styles: null,
    note: null,
    trailingAction: null,
    longPressAction: null,
  };
  let perform;
  if (tmp11 != null) {
    perform = tmp11.perform;
  }
  if (perform == null) {
    perform = callback1;
  }
  obj.onLongPress = perform;
  obj.withMarginTop = channel.withMarginTop;
  obj.styles = tmp;
  let tmp13 = null;
  if (null != tmp10) {
    obj = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
    ({ tooltip: obj3.accessibilityLabel, label: obj3.children } = tmp10);
    tmp13 = closure_11(tmp2(4556).Text, obj);
  }
  obj.note = tmp13;
  obj.trailingAction = useFavoritesGuildCategoryAddActionDefault(channel);
  obj.longPressAction = tmp11;
  const collapsed2 = obj.collapsed;
  const merged = Object.assign(obj, Object.assign({ collapsed: 0 }));
  const colors = nativeDefault.colors;
  obj1 = {};
  const merged1 = Object.assign(merged);
  obj1.icon = closure_11(channel(11153).ChevronSmallDownIcon, {
    size: "xxs",
    color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE,
    style: collapsed2 ? createStyles : obj1,
  });
  obj1.accessibilityState = { expanded: !collapsed2 };
  return renderCategoryItem(obj1);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [RecentlyActiveCollapseStore];
  const stateFromStores = obj.useStateFromStores(items, () => RecentlyActiveCollapseStore.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null };
  const callback = noop.useCallback(
    () => OptInChannelsActionCreators.setRecentlyActiveCollapsed(guildId, !stateFromStores),
    items1,
  );
  const intl = guildId(1114).intl;
  obj.name = intl.string(guildId(1114).t.uZyspD);
  obj.collapsed = stateFromStores;
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles();
  const collapsed = obj.collapsed;
  const merged = Object.assign(obj, Object.assign({ collapsed: 0 }));
  const colors = stateFromStores(576).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = closure_11(guildId(11153).ChevronSmallDownIcon, {
    size: "xxs",
    color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE,
    style: collapsed ? createStyles : obj1,
  });
  obj.accessibilityState = { expanded: !collapsed };
  return renderCategoryItem(obj);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  let items = [guildId, channelIds];
  let obj = { name: null, onPress: null, withMarginTop: null, styles: null };
  const callback = noop.useCallback(() => {
    let obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj = { label: null, onPress: null, IconComponent: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.VkKicb);
    obj.onPress = function onPress() {
      guildId(dependencyMap[24]).clearRecentChannels(closure_1_0, channelIds);
    };
    obj.IconComponent = CircleXIcon.CircleXIcon;
    const items = [obj];
    obj.options = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items);
  let intl = guildId(1114).intl;
  obj.name = intl.string(guildId(1114).t.HbJ7eD);
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles();
  return renderCategoryItem(obj);
};
