// discord_app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useCreateChannelSubmit from "../../../channel/useCreateChannelSubmit.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../actions/native/CreateChannelModalActionCreators.tsx";
import _modDef13131 from "../../../../../_runtime/metro/13131__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../../../stores/GuildCategoryStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = closure_14();
  const items = [onChannelSelected, channel];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onChannelSelected(channel);
  }, items);
  const obj = {
    style: tmp.channelRow,
    onPress: callback,
    accessible: true,
    accessibilityLabel: null,
    channel: null,
    selected: null,
    disableHighlightOnPress: true,
    resolvedUnreadSetting: null,
  };
  const tmp4 = onChannelSelected(4982)(channel);
  obj.accessibilityLabel = tmp4;
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  const children = [closure_11(onChannelSelected(15722), obj)];
  if (selected) {
    const obj2 = { style: tmp.selectedIcon, source: tmp2(17486) };
    selected = closure_11(tmp2(5894), obj2);
    const tmp2Result = tmp2(5894);
  }
  children[1] = selected;
  return closure_13(closure_12, { children });
}
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: closure_9, Fonts } = Constants);
const UnreadSetting = fn(5011).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  titleContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" },
  searchContainer: null,
  createChannelButton: null,
  createChannelLabel: null,
  bodyContainer: null,
  channelRow: null,
  selectedIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
obj2.searchContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
obj2.createChannelButton = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  flexDirection: "row",
  padding: 16,
};
let obj6 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_LINK, 16));
obj6.marginStart = 8;
obj2.createChannelLabel = obj6;
let obj5 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  flexDirection: "row",
  padding: 16,
};
obj2.bodyContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.channelRow = { paddingHorizontal: 8, paddingVertical: 4 };
obj2.selectedIcon = { end: 16, top: 10, position: "absolute" };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx",
);

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
  let items = [GuildCategoryStore, PermissionStore];
  const items1 = [guildId, first];
  const stateFromStoresArray = guildId(504).useStateFromStoresArray(
    items,
    () => {
      const items = [];
      const categories = GuildCategoryStore.getCategories(guildId);
      const iter = categories._categories[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp2 = categories[iter.next().channel.id];
        for (const item10020 of tmp2) {
          let canResult = PermissionStore.can(constants.VIEW_CHANNEL, item10020.channel);
          if (canResult) {
            let hasItem = "" === first;
            if (!hasItem) {
              let name = item10020.channel.name;
              hasItem = name.includes(tmp9);
            }
            canResult = hasItem;
          }
          if (canResult) {
            let arr = items.push(item10020.channel);
          }
          continue;
        }
        continue;
      }
      return items;
    },
    items1,
  );
  let obj2 = { scrollable: true, ref, header: null, children: null };
  let obj3 = { style: tmp.titleContainer, children: null };
  if (title == null) {
    const intl = tmp5(1115).intl;
    title = intl.string(tmp5(1115).t.PDn2fR);
  }
  obj3.children = closure_11(guildId(4825).Text, {
    accessibilityRole: "header",
    variant: "text-md/bold",
    color: "mobile-text-heading-primary",
    children: title,
  });
  const items2 = [closure_11(View, obj3), ,];
  const obj4 = { style: tmp.searchContainer, children: null };
  const obj5 = { size: "md", placeholder: null, onChange: null, onFocus: null };
  const intl2 = tmp5(1115).intl;
  obj5.placeholder = intl2.string(guildId(1115).t.UTYBjS);
  obj5.onChange = tmp2[1];
  obj5.onFocus = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (current != null) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj4.children = closure_11(guildId(6466).SearchField, obj5);
  items2[1] = closure_11(View, obj4);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj6 = {
      style: tmp.createChannelButton,
      accessibilityRole: "button",
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { guildId, createMode: null, onChannelCreated: null };
        const obj2 = ModalActionCreatorsDefault;
        obj3.createMode = useCreateChannelSubmit.CreateChannelMode.PREMIUM_CHANNEL;
        obj3.onChannelCreated = function onChannelCreated(arg0) {
          onChannelSelected(dependencyMap[27]).close();
          channel = channel.getChannel(arg0);
          if (null != channel) {
            closure_1_1(channel);
          }
          const obj = onChannelSelected(dependencyMap[27]);
        };
        obj2.pushLazy(
          asyncRequireImpl(8999, dependencyMap.paths),
          obj3,
          CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY,
        );
      },
      children: null,
    };
    let str1;
    if (tmp.createChannelLabel.color != null) {
      str1 = str.toString();
    }
    const obj7 = { color: str1, source: _modDef13131 };
    const items3 = [closure_11(tmp5(1177).Icon, obj7)];
    const obj8 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link", children: null };
    const intl3 = tmp5(1115).intl;
    obj8.children = intl3.string(tmp5(1115).t.d7AN7W);
    items3[1] = closure_11(tmp5(4825).Text, obj8);
    obj6.children = items3;
    tmp9Result = closure_13(tmp5(5428).PressableOpacity, obj6);
  }
  items2[2] = tmp9Result;
  obj2.header = closure_13(closure_12, { children: items2 });
  obj2.children = closure_11(guildId(6040).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_2_11(ChannelRow, { channel: item, onChannelSelected, selected: item.id === dependencyMap });
    },
  });
  return closure_11(guildId(6613).ActionSheet, obj2);
}
