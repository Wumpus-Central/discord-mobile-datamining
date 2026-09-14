// discord_app/modules/channel_list_v2/native/items/RedesignCategory.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
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
  items[1] = { paddingLeft: 16, marginTop: num, marginBottom };
  let tmp34Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    if (flag) {
      str = "text-muted";
    }
    const obj2 = {
      experimental_useNativeText: true,
      variant: "text-sm/semibold",
      color: str,
      lineClamp: 1,
      style: styles.categoryText,
      children: name,
    };
    tmp34Result = closure_11(trailingAction(4632).Text, obj2);
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
    Icon = trailingAction(12883).PlusMediumIcon;
  }
  if (null == trailingAction) {
    const items1 = [tmp34Result, , ,];
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
        const obj7 = {
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
        let tmp28Result = closure_11(trailingAction(5204).PressableHighlight, obj7);
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
    let obj10 = {
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
    obj10.accessibilityLabel = label;
    obj10.onPress = trailingAction.perform;
    obj10.hitSlop = hitSlop;
    obj10.androidRippleConfig = androidRippleConfig;
    let colors = longPressAction(576).colors;
    const obj11 = { size: "xxs", color: flag ? colors.ICON_MUTED : colors.TEXT_SUBTLE };
    colors = closure_11(Icon, obj11);
    obj10.children = colors;
    obj10 = closure_11(trailingAction(5204).PressableOpacity, obj10);
    obj9.children = obj10;
    closure_11(View, obj9);
  }
  const obj = { paddingLeft: 16, marginTop: num, marginBottom };
}
const View = fn(17).View;
const RedesignChannelListConstants = fn(10246);
({
  CATEGORY_MARGIN_BOTTOM: closure_8,
  CATEGORY_MARGIN_TOP: closure_9,
  CATEGORY_VERTICAL_PADDING: c10,
} = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4636);
const styles = createStyles.createStyles(() => {
  const obj = {
    categoryWrapper: { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical, paddingRight: 16 },
    categoryText: null,
    noteWrapper: null,
    iconWrapperStyles: null,
    endAlignedWrapper: null,
  };
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
  const tmp = styles();
  const items = [CategoryCollapseStore, UserGuildSettingsStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({
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
  let obj = channel(504);
  const tmp10 = useFavoritesGuildCategoryFullNoticeDefault(channel, tmp8);
  const tmp11 = useFavoritesGuildCategoryLongPressDefault(channel);
  const obj2 = {
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
  obj2.onLongPress = perform;
  obj2.withMarginTop = channel.withMarginTop;
  obj2.styles = tmp;
  let tmp13 = null;
  if (null != tmp10) {
    obj4 = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
    ({ tooltip: obj3.accessibilityLabel, label: obj3.children } = tmp10);
    tmp13 = closure_11(tmp2(4632).Text, obj4);
  }
  obj2.note = tmp13;
  obj2.trailingAction = useFavoritesGuildCategoryAddActionDefault(channel);
  obj2.longPressAction = tmp11;
  const collapsed2 = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const colors = nativeDefault.colors;
  const obj7 = {};
  const merged1 = Object.assign(merged);
  obj7.icon = closure_11(channel(11288).ChevronSmallDownIcon, {
    size: "xxs",
    color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE,
    style: collapsed2 ? obj3 : obj4,
  });
  obj7.accessibilityState = { expanded: !collapsed2 };
  return renderCategoryItem(obj7);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  const tmp = styles();
  const tmp2 = guildId;
  const items = [RecentlyActiveCollapseStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () =>
    RecentlyActiveCollapseStore.isCollapsed(guildId),
  );
  const items1 = [guildId, stateFromStores];
  const obj2 = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null };
  const callback = noop.useCallback(
    () => OptInChannelsActionCreators.setRecentlyActiveCollapsed(guildId, !stateFromStores),
    items1,
  );
  const intl = guildId(1114).intl;
  obj2.name = intl.string(guildId(1114).t.uZyspD);
  obj2.collapsed = stateFromStores;
  obj2.onPress = callback;
  obj2.withMarginTop = guildId.withMarginTop;
  obj2.styles = tmp;
  const collapsed = obj2.collapsed;
  const merged = Object.assign(obj2, Object.assign({ collapsed: 0 }));
  const colors = stateFromStores(576).colors;
  obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.icon = closure_11(tmp2(11288).ChevronSmallDownIcon, {
    size: "xxs",
    color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE,
    style: collapsed ? obj3 : obj4,
  });
  obj3.accessibilityState = { expanded: !collapsed };
  return renderCategoryItem(obj3);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
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
      guildId(dependencyMap[24]).clearRecentChannels(closure_1_0, channelIds);
    };
    obj3.IconComponent = CircleXIcon.CircleXIcon;
    const items = [obj3];
    obj2.options = items;
    const result = Sheet_showSimpleActionSheet.showSimpleActionSheet(obj2);
  }, items);
  let intl = guildId(1114).intl;
  obj.name = intl.string(guildId(1114).t.HbJ7eD);
  obj.onPress = callback;
  obj.withMarginTop = guildId.withMarginTop;
  obj.styles = styles();
  return renderCategoryItem(obj);
};
