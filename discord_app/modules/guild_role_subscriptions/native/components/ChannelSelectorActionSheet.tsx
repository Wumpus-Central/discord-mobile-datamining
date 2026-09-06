// === Module 17755: ChannelSelectorActionSheet ===

// Module 17755 (ChannelSelectorActionSheet)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useCreateChannelSubmit from "useCreateChannelSubmit" /* 9735 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9737 */;
import _modDef13605 from "module_13605" /* 13605 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7111 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = closure_14();
  const tmp4 = onChannelSelected(4713)(channel);
  const items = [onChannelSelected, channel];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  let obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: tmp4, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const children = [closure_11(onChannelSelected(16116), obj), ];
  if (selected) {
    obj = { style: tmp.selectedIcon, source: tmp2(17692) };
    selected = tmp8(tmp2(5587), obj);
    const tmp2Result = tmp2(5587);
  }
  children[1] = selected;
  return closure_13(closure_12, { children });
}
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: closure_9, Fonts } = Constants);
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { titleContainer: null, searchContainer: null, createChannelButton: null, createChannelLabel: null, bodyContainer: null, channelRow: null, selectedIcon: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
createStyles.titleContainer = createStyles;
createStyles.searchContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
createStyles.createChannelButton = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_LINK, 16));
obj3.marginStart = 8;
createStyles.createChannelLabel = obj3;
let obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
createStyles.bodyContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.channelRow = { paddingHorizontal: 8, paddingVertical: 4 };
createStyles.selectedIcon = { end: 16, top: 10, position: "absolute" };
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ onChannelSelected: importDefault, selectedChannelId: dependencyMap, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let first;
  let ref;
  const tmp = closure_14();
  let tmp2 = first(ref.useState(""), 2);
  first = tmp2[0];
  ref = ref.useRef(null);
  let obj = guildId(504);
  let items = [GuildCategoryStore, PermissionStore];
  const items1 = [guildId, first];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const categories = GuildCategoryStore.getCategories(guildId);
    const iter = categories._categories[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp2 = categories[iter.next().channel.id];
      for (const item10020 of tmp2) {
        let tmp5 = item10020;
        let canResult = PermissionStore.can(constants.VIEW_CHANNEL, item10020.channel);
        if (canResult) {
          let hasItem = "" === first;
          if (!hasItem) {
            let name = tmp5.channel.name;
            hasItem = name.includes(tmp9);
          }
          canResult = hasItem;
        }
        if (canResult) {
          let arr = items.push(tmp5.channel);
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
  obj = { scrollable: true, ref, header: null, children: null };
  obj = { style: tmp.titleContainer, children: null };
  if (title == null) {
    const intl = tmp5(1114).intl;
    title = intl.string(tmp5(1114).t.PDn2fR);
  }
  obj.children = closure_11(guildId(4556).Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title });
  const items2 = [closure_11(View, obj), , ];
  const obj1 = { style: tmp.searchContainer, children: null };
  let obj2 = { size: "md", placeholder: null, onChange: null, onFocus: null };
  const intl2 = tmp5(1114).intl;
  obj2.placeholder = intl2.string(guildId(1114).t.UTYBjS);
  obj2.onChange = tmp2[1];
  obj2.onFocus = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (current != null) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj1.children = closure_11(guildId(7050).SearchField, obj2);
  items2[1] = closure_11(View, obj1);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj3 = {
      style: tmp.createChannelButton,
      accessibilityRole: "button",
      onPress() {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          obj = { guildId, createMode: null, onChannelCreated: null };
          const obj2 = ModalActionCreatorsDefault;
          obj.createMode = useCreateChannelSubmit.CreateChannelMode.PREMIUM_CHANNEL;
          obj.onChannelCreated = function onChannelCreated(arg0) {
            onChannelSelected(dependencyMap[27]).close();
            channel = channel.getChannel(arg0);
            if (null != channel) {
              closure_1_1(channel);
            }
          };
          obj2.pushLazy(asyncRequireImpl(9732, dependencyMap.paths), obj, CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY);
        },
      children: null
    };
    let str;
    if (str != null) {
      str = str.toString();
    }
    const obj4 = { color: str, source: _modDef13605 };
    const items3 = [tmp8(tmp5(1178).Icon, obj4), ];
    const obj5 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link", children: null };
    const intl3 = tmp5(1114).intl;
    obj5.children = intl3.string(tmp5(1114).t.d7AN7W);
    items3[1] = tmp8(tmp5(4556).Text, obj5);
    obj3.children = items3;
    tmp9Result = tmp9(tmp5(5123).PressableOpacity, obj3);
  }
  items2[2] = tmp9Result;
  obj.header = closure_13(closure_12, { children: items2 });
  obj.children = closure_11(guildId(6627).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_2_11(ChannelRow, { channel: item, onChannelSelected, selected: item.id === dependencyMap });
    }
  });
  return closure_11(guildId(7198).ActionSheet, obj);
};