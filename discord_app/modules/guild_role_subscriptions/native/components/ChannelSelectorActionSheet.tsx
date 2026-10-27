// discord_app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useCreateChannelSubmit from "../../../channel/useCreateChannelSubmit.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../actions/native/CreateChannelModalActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../../../stores/GuildCategoryStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

require = fn;
const View = fn(17).View;
const Permissions = fn(1084).Permissions;
const UnreadSetting = fn(6706).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4972);
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
obj2.createChannelLabel = { marginStart: 8 };
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
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelRow(channel) {
      const cResult = channel(576).c(15);
      channel = channel.channel;
      const onChannelSelected = channel.onChannelSelected;
      const selected = channel.selected;
      const tmp4 = closure_14();
      const obj = channel(576);
      const tmp = channel;
      if (cResult[0] === channel) {
        if (cResult[1] === onChannelSelected) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === channel) {
          if (cResult[4] === tmp7) {
            if (cResult[5] === selected) {
              if (cResult[6] === tmp4.channelRow) {
                if (cResult[7] === tmp9) {
                  let tmp10 = cResult[8];
                }
                if (cResult[9] === selected) {
                  if (cResult[10] === tmp4.selectedIcon) {
                    let tmp14 = cResult[11];
                  }
                  if (cResult[12] === tmp10) {
                    if (cResult[13] === tmp14) {
                      let tmp18 = cResult[14];
                    }
                    return tmp18;
                  }
                  const obj2 = { children: null };
                  const items = [tmp10, tmp14];
                  obj2.children = items;
                  const tmp21 = closure_13(closure_12, obj2);
                  cResult[12] = tmp10;
                  cResult[13] = tmp14;
                  cResult[14] = tmp21;
                  tmp18 = tmp21;
                }
                let tmp15 = selected;
                if (selected) {
                  const obj3 = { style: tmp4.selectedIcon, children: null };
                  const obj4 = {
                    size: "md",
                    color: tmp5(587).colors.ICON_BRAND,
                    secondaryColor: tmp5(587).colors.WHITE,
                  };
                  obj3.children = closure_11(tmp(7269).CircleCheckIcon, obj4);
                  tmp15 = closure_11(View, obj3);
                }
                cResult[9] = selected;
                cResult[10] = tmp4.selectedIcon;
                cResult[11] = tmp15;
                tmp14 = tmp15;
              }
            }
          }
        }
        const obj5 = {
          style: tmp4.channelRow,
          onPress: tmp7,
          accessible: true,
          accessibilityLabel: tmp6,
          channel,
          selected,
          disableHighlightOnPress: true,
          resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS,
        };
        const tmp13 = closure_11(tmp5(17596), obj5);
        cResult[3] = channel;
        cResult[4] = tmp7;
        cResult[5] = selected;
        cResult[6] = tmp4.channelRow;
        cResult[7] = tmp6;
        cResult[8] = tmp13;
        tmp10 = tmp13;
      }
      const fn = function t() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onChannelSelected(channel);
      };
      cResult[0] = channel;
      cResult[1] = onChannelSelected;
      cResult[2] = fn;
      tmp7 = fn;
      tmp6 = onChannelSelected(5605)(channel);
    }
  : function ChannelRow(channel) {
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
      const tmp4 = onChannelSelected(5605)(channel);
      obj.accessibilityLabel = tmp4;
      obj.channel = channel;
      obj.selected = selected;
      obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
      const children = [closure_11(onChannelSelected(17596), obj)];
      if (selected) {
        const obj2 = { style: tmp.selectedIcon, children: null };
        const obj3 = { size: "md", color: tmp2(587).colors.ICON_BRAND, secondaryColor: tmp2(587).colors.WHITE };
        obj2.children = closure_11(channel(7269).CircleCheckIcon, obj3);
        selected = closure_11(View, obj2);
      }
      children[1] = selected;
      return closure_13(closure_12, { children });
    };
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
          let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, item10020.channel);
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
    const intl = tmp5(1125).intl;
    title = intl.string(tmp5(1125).t.PDn2fR);
  }
  obj3.children = closure_11(guildId(5235).Text, {
    accessibilityRole: "header",
    variant: "text-md/bold",
    color: "mobile-text-heading-primary",
    children: title,
  });
  const items2 = [closure_11(View, obj3), ,];
  const obj4 = { style: tmp.searchContainer, children: null };
  const obj5 = { size: "md", placeholder: null, onChange: null, onFocus: null };
  const intl2 = tmp5(1125).intl;
  obj5.placeholder = intl2.string(guildId(1125).t.UTYBjS);
  obj5.onChange = tmp2[1];
  obj5.onFocus = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (current != null) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj4.children = closure_11(guildId(7147).SearchBar, obj5);
  items2[1] = closure_11(View, obj4);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj6 = {
      style: tmp.createChannelButton,
      accessibilityRole: "button",
      onPress: function handleCreateChannel() {
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
          asyncRequireImpl(8950, dependencyMap.paths),
          obj3,
          CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY,
        );
      },
      children: null,
    };
    const obj7 = { size: "md", color: nativeDefault.colors.TEXT_LINK };
    const items3 = [closure_11(tmp5(9468).PlusSmallIcon, obj7)];
    const obj8 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link", children: null };
    const intl3 = tmp5(1125).intl;
    obj8.children = intl3.string(tmp5(1125).t.d7AN7W);
    items3[1] = closure_11(tmp5(5235).Text, obj8);
    obj6.children = items3;
    tmp9Result = closure_13(tmp5(6910).PressableOpacity, obj6);
  }
  items2[2] = tmp9Result;
  obj2.header = closure_13(closure_12, { children: items2 });
  obj2.children = closure_11(guildId(7222).BottomSheetFlashList, {
    maintainVisibleContentPosition: { disabled: true },
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_2_11(closure_15, { channel: item, onChannelSelected, selected: item.id === dependencyMap });
    },
  });
  return closure_11(guildId(7300).ActionSheet, obj2);
}
