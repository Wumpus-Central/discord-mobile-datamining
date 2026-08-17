// discord_app/modules/channel_list_v2/native/items/RedesignCategory.tsx
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "set" /* 5275 */;
import closure_6 from "incrementVersion" /* 5270 */;
import closure_7 from "updateUserGuildSettingsInternal" /* 5043 */;
import hairlineWidth from "hairlineWidth" /* 10055 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function renderCategoryItem(longPressAction) {
  ({ name, icon, note, muted } = longPressAction);
  if (muted === undefined) {
    muted = false;
  }
  ({ onPress, onLongPress, styles, isRefreshEnabled, trailingAction } = longPressAction);
  longPressAction = longPressAction.longPressAction;
  let tmp = null != onPress;
  ({ withMarginTop, accessibilityState } = longPressAction);
  if (!tmp) {
    tmp = null != onLongPress;
  }
  const items = [styles.categoryWrapper, ];
  let num = 16;
  let num2 = 16;
  if (!isRefreshEnabled) {
    if (null != icon) {
      num = 3;
    }
    num2 = num;
  }
  let obj = { paddingLeft: num2, marginTop: null, marginBottom: null };
  let num3 = 0;
  if (withMarginTop) {
    num3 = closure_9;
  }
  obj[1] = num3;
  obj[2] = closure_8;
  items[1] = obj;
  let tmp35Result = name;
  if (typeof name === "string") {
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj = { experimental_useNativeText: true, variant: "text-sm/semibold", color: null, lineClamp: 1, style: null, children: null };
    obj[2] = str;
    obj[4] = styles.categoryText;
    obj[5] = name;
    tmp35Result = callback(trailingAction(4734).Text, obj);
    const tmp35 = callback;
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
    Icon = trailingAction(11932).PlusMediumIcon;
  }
  if (null == trailingAction) {
    obj1 = { children: null };
    const items1 = [, , , ];
    if (isRefreshEnabled) {
      items1[0] = tmp35Result;
      let tmp21 = null;
      if (null != note) {
        let obj2 = { style: null, children: null };
        obj2[0] = styles.noteWrapper;
        obj2[1] = note;
        tmp21 = callback(View, obj2);
      }
      items1[1] = tmp21;
      items1[2] = tmp3;
      items1[3] = null;
      obj1[0] = items1;
      let tmp20 = obj1;
    } else {
      items1[0] = tmp3;
      items1[1] = tmp35Result;
      items1[2] = note;
      items1[3] = null;
      obj1[0] = items1;
      tmp20 = obj1;
    }
    const tmp18Result = closure_13(closure_12, tmp20);
    const items2 = [];
    if (null != trailingAction) {
      const obj3 = { name: null, label: null };
      obj3[0] = c17;
      obj3[1] = trailingAction.label;
      items2.push(obj3);
    }
    if (null != longPressAction) {
      const obj4 = { name: null, label: null };
      obj4[0] = c18;
      obj4[1] = longPressAction.label;
      items2.push(obj4);
    }
    if (tmp) {
      const obj5 = { accessibilityRole: "header", accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, onLongPress: null, style: null, children: null };
      obj5[1] = accessibilityState;
      let tmp34;
      if (items2.length > 0) {
        tmp34 = items2;
      }
      obj5[2] = tmp34;
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
      obj5[3] = handleAccessibilityAction;
      obj5[4] = onPress;
      obj5[5] = onLongPress;
      obj5[6] = items;
      obj5[7] = tmp18Result;
      let tmp29Result = tmp29(trailingAction(5433).PressableHighlight, obj5);
    } else {
      const obj6 = { accessibilityRole: "header", style: null, children: null };
      obj6[1] = items;
      obj6[2] = tmp18Result;
      tmp29Result = tmp29(View, obj6);
    }
    return tmp29Result;
  } else {
    const obj7 = { style: null, children: null };
    obj7[0] = styles.trailingActionWrapper;
    let obj8 = { accessible: null, accessibilityRole: null, accessibilityLabel: null, onPress: null, hitSlop: null, androidRippleConfig: null, children: null };
    obj8[0] = !tmp;
    obj8[1] = "button";
    let label;
    if (!tmp) {
      label = trailingAction.label;
    }
    obj8[2] = label;
    obj8[3] = trailingAction.perform;
    obj8[4] = closure_15;
    obj8[5] = closure_16;
    let colors = longPressAction(712).colors;
    const obj9 = { size: "xxs", color: null };
    obj9[1] = muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
    colors = tmp9(Icon, obj9);
    obj8[6] = colors;
    obj8 = tmp9(trailingAction(5433).PressableOpacity, obj8);
    obj7[1] = obj8;
    callback(View, obj7);
    const tmp10 = View;
  }
}
({ CATEGORY_MARGIN_BOTTOM: closure_8, CATEGORY_MARGIN_TOP: c9, CATEGORY_VERTICAL_PADDING: c10 } = hairlineWidth);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
const styles = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  obj = { categoryWrapper: obj, categoryText: null, noteWrapper: null, iconWrapperStyles: null, trailingActionWrapper: null };
  obj = { display: "flex", flexDirection: "row", alignItems: "center", paddingVertical: closure_10, paddingRight: 16 };
  obj = {};
  const merged = Object.assign(flag ? { flexShrink: 1 } : { flex: 1 });
  let num = 0;
  if (obj4.isAndroid()) {
    num = -1;
  }
  obj.marginTop = num;
  obj[1] = obj;
  obj[2] = { marginLeft: 4 };
  const merged1 = Object.assign(flag ? { marginLeft: 4 } : { marginRight: 3 });
  obj[3] = {};
  obj1 = {};
  obj4 = set;
  const tmp = flag ? { flexShrink: 1 } : { flex: 1 };
  const tmp4 = flag ? { marginLeft: 4 } : { marginRight: 3 };
  obj[4] = { paddingLeft: ThemesDefault.space.PX_8, marginLeft: "auto" };
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
  const tmp3 = collapsed(1367)("CategoryChannel");
  let obj = id(589);
  const items = [closure_6, closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ collapsed: closure_1_6.isCollapsed(id.id), muted: closure_1_7.isChannelMuted(id.getGuildId(), id.id) }));
  collapsed = stateFromStoresObject.collapsed;
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
  const tmp = collapsed;
  const tmp4 = styles(tmp3);
  const tmp5 = id;
  const tmp9 = collapsed(4984)(channel);
  const tmp11 = collapsed(15370)(channel);
  obj = { name: tmp9, muted: stateFromStoresObject.muted, collapsed, onPress: callback, onLongPress: null, withMarginTop: null, styles: null, isRefreshEnabled: null, trailingAction: null, longPressAction: null };
  let perform;
  if (tmp11 != null) {
    perform = tmp11.perform;
  }
  if (perform == null) {
    perform = callback1;
  }
  obj[4] = perform;
  obj[5] = channel.withMarginTop;
  obj[6] = tmp4;
  obj[7] = tmp3;
  obj[8] = collapsed(11958)(channel);
  obj[9] = tmp11;
  ({ collapsed: collapsed2, isRefreshEnabled } = obj);
  const merged = Object.assign(obj, Object.create(null));
  const colors = tmp(712).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = callback(tmp5(9464).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed2 ? createCacheKey : obj1 });
  obj.accessibilityState = { expanded: !collapsed2 };
  obj.isRefreshEnabled = isRefreshEnabled;
  return renderCategoryItem(obj);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const tmp2 = stateFromStores(1367)("RecentlyActiveCategory");
  let obj = guildId(589);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null, isRefreshEnabled: null };
  const callback = React.useCallback(() => guildId(closure_1_2[21]).setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
  const intl = guildId(1236).intl;
  obj[0] = intl.string(guildId(1236).t.uZyspD);
  obj[1] = stateFromStores;
  obj[2] = callback;
  obj[3] = guildId.withMarginTop;
  obj[4] = styles(tmp2);
  obj[5] = tmp2;
  const collapsed = obj.collapsed;
  const merged = Object.assign(obj, Object.create(null));
  const colors = stateFromStores(712).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = callback(guildId(9464).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? createCacheKey : obj1 });
  obj.accessibilityState = { expanded: !collapsed };
  obj.isRefreshEnabled = obj.isRefreshEnabled;
  return renderCategoryItem(obj);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const tmp = channelIds(1367)("SuggestedCategory");
  let items = [guildId, channelIds];
  let obj = { name: null, onPress: null, withMarginTop: null, styles: null, isRefreshEnabled: null };
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
  let intl = guildId(1236).intl;
  obj[0] = intl.string(guildId(1236).t.HbJ7eD);
  obj[1] = callback;
  obj[2] = guildId.withMarginTop;
  obj[3] = styles(tmp);
  obj[4] = tmp;
  return renderCategoryItem(obj);
};