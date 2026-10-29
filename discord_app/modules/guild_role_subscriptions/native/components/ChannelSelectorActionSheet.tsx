// discord_app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useChannelName from "../../../channel/useChannelName.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useCreateChannelSubmit from "../../../channel/useCreateChannelSubmit.tsx";
import CreateChannelModalActionCreatorsDefault from "../../../../actions/native/CreateChannelModalActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../../../stores/GuildCategoryStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Permissions = fn(1084).Permissions;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  header: { gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 },
  createChannelRow: null,
  emptyState: null,
};
let obj3 = { gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.createChannelRow = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.emptyState = { marginTop: nativeDefault.space.PX_16, textAlign: "center" };
let closure_15 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelRow(channel) {
      const cResult = channel(576).c(16);
      channel = channel.channel;
      const onChannelSelected = channel.onChannelSelected;
      ({ selected, guild, start, end } = channel);
      const tmp4 = onChannelSelected(5641)(channel);
      if (cResult[0] === channel) {
        if (cResult[1] === guild) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === channel) {
          if (cResult[4] === onChannelSelected) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] !== tmp5) {
            class S {
              constructor() {
                obj = closure_1(closure_2[17]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp2 = onChannelSelected(channel);
                return;
              }
            }
            const tmp10 = closure_13(tmp(6963).TableRow.Icon, { IconComponent: null });
            cResult[6] = tmp5;
            cResult[7] = tmp10;
            let tmp8 = tmp10;
            const obj2 = { IconComponent: null };
          } else {
            tmp8 = cResult[7];
          }
          class S {
            constructor() {
              obj = closure_1(closure_2[17]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = onChannelSelected(channel);
              return;
            }
          }
          let str = tmp4;
          if (tmp4 == null) {
            str = "";
          }
          if (cResult[8] === channel.id) {
            if (cResult[9] === end) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === selected) {
                  if (cResult[12] === start) {
                    if (cResult[13] === tmp8) {
                      if (cResult[14] === str) {
                        let tmp11 = cResult[15];
                      }
                      return tmp11;
                    }
                  }
                }
              }
            }
          }
          const obj3 = {
            value: channel.id,
            start,
            end,
            icon: tmp8,
            label: str,
            labelLineClamp: 1,
            legacyCompat_selected: selected,
            legacyCompat_onPress: tmp7,
          };
          const tmp13 = closure_13(tmp(7044).TableRadioRow, obj3);
          cResult[8] = channel.id;
          cResult[9] = end;
          cResult[10] = tmp7;
          cResult[11] = selected;
          cResult[12] = start;
          cResult[13] = tmp8;
          cResult[14] = str;
          cResult[15] = tmp13;
          tmp11 = tmp13;
        }
        class S {
          constructor() {
            obj = closure_1(closure_2[17]);
            hideActionSheetResult = obj.hideActionSheet();
            tmp2 = onChannelSelected(channel);
            return;
          }
        }
        cResult[3] = channel;
        cResult[4] = onChannelSelected;
        cResult[5] = S;
        tmp7 = S;
      }
      const obj = channel(576);
      const channelIconComponentOrDefault = channel(17109).getChannelIconComponentOrDefault(channel, guild);
      cResult[0] = channel;
      cResult[1] = guild;
      cResult[2] = channelIconComponentOrDefault;
      tmp5 = channelIconComponentOrDefault;
      const tmpResult = channel(17109);
    }
  : function ChannelRow(channel) {
      channel = channel.channel;
      const onChannelSelected = channel.onChannelSelected;
      ({ selected, guild, start, end } = channel);
      let str = onChannelSelected(5641)(channel);
      const items = [onChannelSelected, channel];
      const channelIconComponentOrDefault = channel(17109).getChannelIconComponentOrDefault(channel, guild);
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onChannelSelected(channel);
      }, items);
      const obj2 = {
        value: channel.id,
        start,
        end,
        icon: closure_13(channel(6963).TableRow.Icon, { IconComponent: channelIconComponentOrDefault }),
        label: null,
        labelLineClamp: 1,
        legacyCompat_selected: null,
        legacyCompat_onPress: null,
      };
      if (str == null) {
        str = "";
      }
      obj2.label = str;
      obj2.legacyCompat_selected = selected;
      obj2.legacyCompat_onPress = callback;
      return closure_13(channel(7044).TableRadioRow, obj2);
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
  noop = undefined;
  const tmp = closure_15();
  let tmp4 = first(noop.useState(""), 2);
  first = tmp4[0];
  let items = [GuildStore];
  const items1 = [guildId];
  noop = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj = guildId(504);
  const items2 = [GuildCategoryStore, PermissionStore, UserStore, RelationshipStore];
  const items3 = [guildId, first];
  const stateFromStoresArray = guildId(504).useStateFromStoresArray(
    items2,
    () => {
      const items = [];
      const categories = GuildCategoryStore.getCategories(guildId);
      const formatted = first.trim().toLowerCase();
      const iter = categories._categories[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp4 = categories[iter.next().channel.id];
        for (const item10026 of tmp4) {
          let canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, item10026.channel);
          if (canResult) {
            let hasItem = tmp3;
            if (!tmp3) {
              let obj = useChannelName;
              let str2 = obj.computeChannelName(item10026.channel, UserStore, RelationshipStore);
              let formatted1 = str2.toLowerCase();
              hasItem = formatted1.includes(formatted);
            }
            canResult = hasItem;
          }
          if (canResult) {
            let arr = items.push(item10026.channel);
          }
          continue;
        }
        continue;
      }
      return items;
    },
    items3,
  );
  if (title == null) {
    const intl = tmp6(1125).intl;
    title = intl.string(tmp6(1125).t.PDn2fR);
  }
  const intl2 = tmp6(1125).intl;
  const stringResult = intl2.string(guildId(1125).t.UTYBjS);
  let obj3 = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj4 = { style: tmp.header, children: null };
  const items4 = [
    closure_13(guildId(7308).BottomSheetTitleHeader, { title }),
    closure_13(guildId(7205).SearchBar, {
      size: "md",
      placeholder: stringResult,
      accessibilityLabel: stringResult,
      onChange: tmp4[1],
    }),
  ];
  obj4.children = items4;
  obj3.header = closure_14(stateFromStoresArray, obj4);
  const obj5 = {
    maintainVisibleContentPosition: { disabled: true },
    keyboardShouldPersistTaps: "handled",
    accessibilityRole: "radiogroup",
    accessibilityLabel: title,
    contentContainerStyle: null,
    data: null,
    keyExtractor: null,
    renderItem: null,
    ListHeaderComponent: null,
    ListEmptyComponent: null,
  };
  let obj2 = guildId(504);
  const tmp10 = stateFromStoresArray;
  obj5.contentContainerStyle = {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: useSafeAreaInsetsDefault().bottom,
  };
  obj5.data = stateFromStoresArray;
  obj5.keyExtractor = function keyExtractor(id) {
    return id.id;
  };
  obj5.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    return map1(closure_16, {
      channel: item,
      onChannelSelected,
      selected: item.id === dependencyMap,
      guild,
      start: 0 === index,
      end: index === stateFromStoresArray.length - 1,
    });
  };
  let tmp9Result = null;
  if (!hideCreateChannel) {
    const obj7 = { style: tmp.createChannelRow, children: null };
    const obj8 = { start: true, end: true, icon: null, label: null, onPress: null };
    const obj9 = { IconComponent: tmp6(11244).PlusMediumIcon };
    obj8.icon = closure_13(tmp6(6963).TableRow.Icon, obj9);
    const intl3 = tmp6(1125).intl;
    obj8.label = intl3.string(tmp6(1125).t.d7AN7W);
    obj8.onPress = function handleCreateChannel() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj3 = { guildId, createMode: null, onChannelCreated: null };
      const obj2 = ModalActionCreatorsDefault;
      obj3.createMode = useCreateChannelSubmit.CreateChannelMode.PREMIUM_CHANNEL;
      obj3.onChannelCreated = function onChannelCreated(arg0) {
        onChannelSelected(dependencyMap[32]).close();
        channel = channel.getChannel(arg0);
        if (null != channel) {
          closure_1_1(channel);
        }
        const obj = onChannelSelected(dependencyMap[32]);
      };
      obj2.pushLazy(
        asyncRequireImpl(8987, dependencyMap.paths),
        obj3,
        CreateChannelModalActionCreatorsDefault.CREATE_CHANNEL_MODAL_KEY,
      );
    };
    obj7.children = closure_13(tmp6(6963).TableRow, obj8);
    tmp9Result = closure_13(tmp10, obj7);
  }
  obj5.ListHeaderComponent = tmp9Result;
  const obj10 = { style: tmp.emptyState, variant: "text-md/normal", color: "text-muted", children: null };
  const intl4 = tmp6(1125).intl;
  obj10.children = intl4.string(guildId(1125).t.V6nAfF);
  obj5.ListEmptyComponent = closure_13(guildId(5271).Text, obj10);
  obj3.children = closure_13(guildId(7280).BottomSheetFlashList, obj5);
  return closure_13(guildId(5302).BottomSheet, obj3);
}
