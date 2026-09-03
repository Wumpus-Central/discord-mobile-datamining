// === Module 15942: renderCategoryItem ===

// Module 15942 (renderCategoryItem)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "set" /* 7286 */;
import closure_6 from "incrementVersion" /* 5494 */;
import closure_7 from "updateUserGuildSettingsInternal" /* 4702 */;
import hairlineWidth from "hairlineWidth" /* 10227 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
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
  let obj = { paddingLeft: 16, marginTop: num, marginBottom: closure_8 };
  items[1] = obj;
  let tmp34Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    if (flag) {
      str = "text-muted";
    }
    obj = { experimental_useNativeText: true, variant: "text-sm/semibold", color: null, lineClamp: 1, style: null, children: null };
    obj[2] = str;
    obj[4] = styles.categoryText;
    obj[5] = name;
    tmp34Result = callback(trailingAction(4474).Text, obj);
    const tmp34 = callback;
  }
  let tmp3 = null;
  if (null != icon) {
    obj = { style: null, children: null };
    obj[0] = styles.iconWrapperStyles;
    obj[1] = icon;
    tmp3 = callback(View, obj);
  }
  let Icon;
  if (trailingAction != null) {
    Icon = trailingAction.Icon;
  }
  if (Icon == null) {
    Icon = trailingAction(12527).PlusMediumIcon;
  }
  if (null == trailingAction) {
    const items1 = [tmp34Result, , , ];
    if (null == note) {
      obj1 = { children: null };
      items1[1] = null;
      items1[2] = tmp3;
      items1[3] = null;
      obj1[0] = items1;
      const tmp18Result = tmp18(tmp19, obj1);
      const items2 = [];
      if (null != trailingAction) {
        let obj2 = { name: null, label: null };
        obj2[0] = c17;
        obj2[1] = trailingAction.label;
        items2.push(obj2);
      }
      if (null != longPressAction) {
        const obj3 = { name: null, label: null };
        obj3[0] = c18;
        obj3[1] = longPressAction.label;
        items2.push(obj3);
      }
      if (tmp) {
        const obj4 = { accessibilityRole: "header", accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, onLongPress: null, style: null, children: null };
        obj4[1] = accessibilityState;
        let tmp33;
        if (items2.length > 0) {
          tmp33 = items2;
        }
        obj4[2] = tmp33;
        let handleAccessibilityAction;
        if (items2.length > 0) {
          handleAccessibilityAction = function handleAccessibilityAction(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if (closure_1_17 === actionName) {
              if (trailingAction != null) {
                obj2.perform();
              }
              obj2 = trailingAction;
            } else if (closure_1_18 === actionName) {
              if (longPressAction != null) {
                obj.perform();
              }
              obj = longPressAction;
            }
          };
        }
        obj4[3] = handleAccessibilityAction;
        obj4[4] = onPress;
        obj4[5] = onLongPress;
        obj4[6] = items;
        obj4[7] = tmp18Result;
        let tmp28Result = tmp28(trailingAction(5077).PressableHighlight, obj4);
      } else {
        const obj5 = { accessibilityRole: "header", style: null, children: null };
        obj5[1] = items;
        obj5[2] = tmp18Result;
        tmp28Result = tmp28(View, obj5);
      }
      return tmp28Result;
    } else {
      styles = { style: null, children: null };
      styles[0] = "end" === noteAlignment ? styles.endAlignedWrapper : styles.noteWrapper;
      styles[1] = note;
      callback(View, styles);
      const tmp21 = "end" === noteAlignment ? styles.endAlignedWrapper : styles.noteWrapper;
    }
  } else {
    const obj6 = { style: null, children: null };
    obj6[0] = styles.endAlignedWrapper;
    let obj7 = { accessible: null, accessibilityRole: null, accessibilityLabel: null, onPress: null, hitSlop: null, androidRippleConfig: null, children: null };
    obj7[0] = !tmp;
    obj7[1] = "button";
    let label;
    if (!tmp) {
      label = trailingAction.label;
    }
    obj7[2] = label;
    obj7[3] = trailingAction.perform;
    obj7[4] = closure_15;
    obj7[5] = closure_16;
    let colors = longPressAction(709).colors;
    const obj8 = { size: "xxs", color: null };
    obj8[1] = flag ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
    colors = tmp9(Icon, obj8);
    obj7[6] = colors;
    obj7 = tmp9(trailingAction(5077).PressableOpacity, obj7);
    obj6[1] = obj7;
    callback(View, obj6);
    const tmp10 = View;
  }
}
({ CATEGORY_MARGIN_BOTTOM: closure_8, CATEGORY_MARGIN_TOP: c9, CATEGORY_VERTICAL_PADDING: c10 } = hairlineWidth);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
const styles = createCacheKey.createStyles(() => {
  obj = { categoryWrapper: obj, categoryText: null, noteWrapper: null, iconWrapperStyles: null, endAlignedWrapper: null };
  obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: closure_10, paddingRight: 16 };
  let num = 0;
  if (obj3.isAndroid()) {
    num = -1;
  }
  obj[1] = { flexShrink: 1, marginTop: num };
  obj[2] = { marginLeft: 4 };
  obj[3] = { marginLeft: 4 };
  obj = { paddingLeft: ThemesDefault.space.PX_8, marginLeft: "auto" };
  obj[4] = obj;
  return obj;
});
let closure_15 = { top: 16, bottom: 16, left: 16, right: 16 };
let closure_16 = { borderless: true, radius: 16 };
let c17 = "add-to-category";
let c18 = "category-actions";
createCacheKey = { flexShrink: 0, flexGrow: 0 };
createCacheKey = {};
createCacheKey = Object.assign(createCacheKey);
let items = [{ rotate: "-90deg" }];
createCacheKey.transform = items;
let obj1 = {};
createCacheKey = Object.assign(createCacheKey);
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/RedesignCategory.tsx");

export const useCategoryStyles = styles;
export { renderCategoryItem };
export const useCategoryPressEvents = function useCategoryPressEvents(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const items1 = [arg0];
  return {
    onPress: React.useCallback(() => {
      const obj = id(closure_1_2[14]);
      if (collapsed) {
        obj.categoryExpand(id);
      } else {
        obj.categoryCollapse(id);
      }
    }, items),
    onLongPress: React.useCallback(() => id(closure_1_2[15]).openChannelLongPressActionSheet(id), items1)
  };
};
export const CategoryChannel = function CategoryChannel(channel) {
  channel = channel.channel;
  let id = channel;
  let obj = id(586);
  const items = [closure_6, closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ collapsed: closure_1_6.isCollapsed(id.id), muted: closure_1_7.isChannelMuted(id.getGuildId(), id.id) }));
  const collapsed = stateFromStoresObject.collapsed;
  id = channel.id;
  const items1 = [id, collapsed];
  const items2 = [id];
  const callback = React.useCallback(() => {
    const obj = id(closure_1_2[14]);
    if (collapsed) {
      obj.categoryExpand(id);
    } else {
      obj.categoryCollapse(id);
    }
  }, items1);
  const callback1 = React.useCallback(() => id(closure_1_2[15]).openChannelLongPressActionSheet(id), items2);
  const tmp8 = collapsed(4674)(channel);
  const tmp = styles();
  const tmp7 = collapsed;
  const tmp10 = collapsed(15943)(channel, tmp8);
  const tmp11 = collapsed(15944)(channel);
  obj = { name: tmp8, muted: stateFromStoresObject.muted, collapsed, onPress: callback, onLongPress: null, withMarginTop: null, styles: null, note: null, trailingAction: null, longPressAction: null };
  let perform;
  if (tmp11 != null) {
    perform = tmp11.perform;
  }
  if (perform == null) {
    perform = callback1;
  }
  obj[4] = perform;
  obj[5] = channel.withMarginTop;
  obj[6] = tmp;
  let tmp13 = null;
  if (null != tmp10) {
    obj = { variant: "text-xs/medium", color: "text-muted", accessibilityLabel: null, children: null };
    ({ tooltip: obj3[2], label: obj3[3] } = tmp10);
    tmp13 = callback(tmp2(4474).Text, obj);
  }
  obj[7] = tmp13;
  obj[8] = collapsed(10937)(channel);
  obj[9] = tmp11;
  const collapsed2 = obj.collapsed;
  const merged = Object.assign(obj, Object.create(null));
  const colors = tmp7(709).colors;
  obj1 = {};
  const merged1 = Object.assign(merged);
  obj1.icon = callback(id(8953).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed2 ? createCacheKey : obj1 });
  obj1.accessibilityState = { expanded: !collapsed2 };
  return renderCategoryItem(obj1);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let obj = guildId(586);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null };
  const callback = React.useCallback(() => guildId(closure_1_2[21]).setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
  const intl = guildId(1233).intl;
  obj[0] = intl.string(guildId(1233).t.uZyspD);
  obj[1] = stateFromStores;
  obj[2] = callback;
  obj[3] = guildId.withMarginTop;
  obj[4] = styles();
  const collapsed = obj.collapsed;
  const merged = Object.assign(obj, Object.create(null));
  const colors = stateFromStores(709).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = callback(guildId(8953).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? createCacheKey : obj1 });
  obj.accessibilityState = { expanded: !collapsed };
  return renderCategoryItem(obj);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  let items = [guildId, channelIds];
  let obj = { name: null, onPress: null, withMarginTop: null, styles: null };
  const callback = React.useCallback(() => {
    let obj = guildId(closure_1_2[23]);
    obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj = { label: null, onPress: null, IconComponent: null };
    const intl = guildId(closure_1_2[22]).intl;
    obj[0] = intl.string(guildId(closure_1_2[22]).t.VkKicb);
    obj[1] = function onPress() {
      closure_1_0(closure_1_2[24]).clearRecentChannels(closure_0, closure_1);
    };
    obj[2] = guildId(closure_1_2[25]).CircleXIcon;
    const items = [obj];
    obj[1] = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items);
  let intl = guildId(1233).intl;
  obj[0] = intl.string(guildId(1233).t.HbJ7eD);
  obj[1] = callback;
  obj[2] = guildId.withMarginTop;
  obj[3] = styles();
  return renderCategoryItem(obj);
};