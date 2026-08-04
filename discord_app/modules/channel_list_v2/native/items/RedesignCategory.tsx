import useFavoritesGuildCategoryAddAction from "useFavoritesGuildCategoryAddAction";
import { View } from "initialize";
import set from "set";
import incrementVersion from "incrementVersion";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import hairlineWidth from "hairlineWidth";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function renderCategoryItem(arg0) {
  let accessibilityState;
  let icon;
  let isRefreshEnabled;
  let muted;
  let name;
  let note;
  let onLongPress;
  let onPress;
  let styles;
  let trailingAction;
  let withMarginTop;
  ({ name, icon, note, muted } = arg0);
  if (muted === undefined) {
    muted = false;
  }
  ({ onPress, onLongPress, styles, isRefreshEnabled, trailingAction } = arg0);
  const items = [styles.categoryWrapper, ];
  let num = 16;
  let num2 = 16;
  ({ withMarginTop, accessibilityState } = arg0);
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
  let tmp2 = name;
  if (typeof name !== "_iter") {
    let str = "text-subtle";
    if (muted) {
      str = "text-muted";
    }
    obj = { experimental_useNativeText: true, variant: "text-sm/semibold", color: null, lineClamp: 1, style: null, children: null };
    obj[2] = str;
    obj[4] = styles.categoryText;
    obj[5] = name;
    tmp2 = callback(trailingAction(4281).Text, obj);
    const tmp28 = callback;
  }
  let tmp3 = null;
  if (null != icon) {
    obj = { style: null, children: null };
    obj[0] = styles.iconWrapperStyles;
    obj[1] = icon;
    tmp3 = callback(View, obj);
  }
  if (null == trailingAction) {
    const obj1 = { children: null };
    const items1 = [, , , ];
    if (isRefreshEnabled) {
      items1[0] = tmp2;
      let tmp17 = null;
      if (null != note) {
        const obj2 = { style: null, children: null };
        obj2[0] = styles.noteWrapper;
        obj2[1] = note;
        tmp17 = callback(View, obj2);
      }
      items1[1] = tmp17;
      items1[2] = tmp3;
      items1[3] = null;
      obj1[0] = items1;
      let tmp16 = obj1;
    } else {
      items1[0] = tmp3;
      items1[1] = tmp2;
      items1[2] = note;
      items1[3] = null;
      obj1[0] = items1;
      tmp16 = obj1;
    }
    const tmp14Result = closure_13(closure_12, tmp16);
    if (null == onPress) {
      if (null == onLongPress) {
        const obj3 = { accessibilityRole: "header", style: null, children: null };
        obj3[1] = items;
        obj3[2] = tmp14Result;
        let tmp24Result = callback(View, obj3);
      }
      return tmp24Result;
    }
    const obj4 = { accessibilityRole: "header", accessibilityState: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, onLongPress: null, style: null, children: null };
    obj4[1] = accessibilityState;
    let tmp27;
    if (null != trailingAction) {
      const obj5 = { name: "add-to-category", label: null };
      obj5[1] = trailingAction.label;
      const items2 = [obj5];
      tmp27 = items2;
    }
    obj4[2] = tmp27;
    let fn;
    if (null != trailingAction) {
      fn = (nativeEvent) => {
        if ("add-to-category" === nativeEvent.nativeEvent.actionName) {
          trailingAction.perform();
        }
      };
    }
    obj4[3] = fn;
    obj4[4] = onPress;
    obj4[5] = onLongPress;
    obj4[6] = items;
    obj4[7] = tmp14Result;
    tmp24Result = callback(trailingAction(4812).PressableHighlight, obj4);
    const tmp14 = closure_13;
    const tmp15 = closure_12;
    const tmp24 = callback;
  } else {
    const obj6 = { style: null, children: null };
    obj6[0] = styles.trailingActionWrapper;
    let obj7 = { accessible: false, onPress: null, hitSlop: null, androidRippleConfig: null, children: null };
    obj7[1] = trailingAction.perform;
    obj7[2] = closure_15;
    obj7[3] = closure_16;
    let colors = importDefault(712).colors;
    const obj8 = { size: "xxs", color: null };
    obj8[1] = muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE;
    colors = tmp6(trailingAction(12021).PlusMediumIcon, obj8);
    obj7[4] = colors;
    obj7 = tmp6(trailingAction(4812).PressableOpacity, obj7);
    obj6[1] = obj7;
    callback(View, obj6);
    const tmp7 = View;
  }
}
({ CATEGORY_MARGIN_BOTTOM: metroImportAll, CATEGORY_MARGIN_TOP: c9, CATEGORY_VERTICAL_PADDING: c10 } = hairlineWidth);
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
  const obj1 = {};
  obj4 = require(500) /* set */;
  const tmp = flag ? { flexShrink: 1 } : { flex: 1 };
  const tmp4 = flag ? { marginLeft: 4 } : { marginRight: 3 };
  obj[4] = { paddingLeft: importDefault(712).space.PX_8, marginLeft: "auto" };
  return obj;
});
let closure_15 = { top: 16, bottom: 16, left: 16, right: 16 };
let closure_16 = { borderless: true, radius: 16 };
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
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const items1 = [arg0];
  return {
    onPress: React.useCallback(() => {
      const obj = id(outer1_2[14]);
      if (collapsed) {
        obj.categoryExpand(id);
      } else {
        obj.categoryCollapse(id);
      }
    }, items),
    onLongPress: React.useCallback(() => id(outer1_2[15]).openChannelLongPressActionSheet(id), items1)
  };
};
export const CategoryChannel = function CategoryChannel(channel) {
  channel = channel.channel;
  let id = channel;
  const tmp2 = collapsed(1348)("CategoryChannel");
  let obj = id(589);
  const items = [incrementVersion, updateUserGuildSettingsInternal];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ collapsed: outer1_6.isCollapsed(id.id), muted: outer1_7.isChannelMuted(id.getGuildId(), id.id) }));
  collapsed = stateFromStoresObject.collapsed;
  id = channel.id;
  const items1 = [id, collapsed];
  const items2 = [id];
  const callback = React.useCallback(() => {
    const obj = id(outer1_2[14]);
    if (collapsed) {
      obj.categoryExpand(id);
    } else {
      obj.categoryCollapse(id);
    }
  }, items1);
  obj = { name: null, muted: null, collapsed: null, onPress: null, onLongPress: null, withMarginTop: null, styles: null, isRefreshEnabled: null, trailingAction: null };
  const callback1 = React.useCallback(() => id(outer1_2[15]).openChannelLongPressActionSheet(id), items2);
  obj[0] = collapsed(4475)(channel);
  obj[1] = stateFromStoresObject.muted;
  obj[2] = collapsed;
  obj[3] = callback;
  obj[4] = callback1;
  obj[5] = channel.withMarginTop;
  obj[6] = styles(tmp2);
  obj[7] = tmp2;
  obj[8] = collapsed(12047)(channel);
  const collapsed2 = obj.collapsed;
  const merged = Object.assign(obj, Object.create(null));
  const colors = collapsed(712).colors;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.icon = callback(id(9396).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed2 ? createCacheKey : obj1 });
  obj.accessibilityState = { expanded: !collapsed2 };
  obj.isRefreshEnabled = obj.isRefreshEnabled;
  return renderCategoryItem(obj);
};
export const RecentlyActiveCategory = function RecentlyActiveCategory(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const tmp2 = stateFromStores(1348)("RecentlyActiveCategory");
  let obj = guildId(589);
  const items = [set];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.isCollapsed(guildId));
  const items1 = [guildId, stateFromStores];
  obj = { name: null, collapsed: null, onPress: null, withMarginTop: null, styles: null, isRefreshEnabled: null };
  const callback = React.useCallback(() => guildId(outer1_2[20]).setRecentlyActiveCollapsed(guildId, !stateFromStores), items1);
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
  obj.icon = callback(guildId(9396).ChevronSmallDownIcon, { size: "xxs", color: merged.muted ? colors.ICON_MUTED : colors.TEXT_SUBTLE, style: collapsed ? createCacheKey : obj1 });
  obj.accessibilityState = { expanded: !collapsed };
  obj.isRefreshEnabled = obj.isRefreshEnabled;
  return renderCategoryItem(obj);
};
export const SuggestedCategory = function SuggestedCategory(guildId) {
  guildId = guildId.guildId;
  const channelIds = guildId.channelIds;
  const tmp = channelIds(1348)("SuggestedCategory");
  let items = [guildId, channelIds];
  let obj = { name: null, onPress: null, withMarginTop: null, styles: null, isRefreshEnabled: null };
  const callback = React.useCallback(() => {
    let obj = guildId(outer1_2[22]);
    obj = { key: "REDESIGN_SUGGESTED_CHANNELS_CLEAR", options: null, hasIcons: true };
    obj = { label: null, onPress: null, IconComponent: null };
    const intl = guildId(outer1_2[21]).intl;
    obj[0] = intl.string(guildId(outer1_2[21]).t.VkKicb);
    obj[1] = function onPress() {
      outer1_0(outer1_2[23]).clearRecentChannels(closure_0, closure_1);
    };
    obj[2] = guildId(outer1_2[24]).CircleXIcon;
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