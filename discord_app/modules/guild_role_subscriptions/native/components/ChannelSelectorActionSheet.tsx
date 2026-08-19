// discord_app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";
import _modDef8849 from "../../../../actions/native/CreateChannelModalActionCreators.tsx";
import registerAssetDefault from "../../../../../_runtime/13038_registerAsset.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import setIndex from "../../../../stores/GuildCategoryStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import ME from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

const require = fn;
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = callback();
  const items = [onChannelSelected, channel];
  callback = React.useCallback(() => {
    onChannelSelected(dependencyMap[13]).hideActionSheet();
    onChannelSelected(channel);
  }, items);
  let obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: null, channel: null, selected: null, disableHighlightOnPress: true, resolvedUnreadSetting: null };
  const tmp4 = onChannelSelected(4984)(channel);
  obj[3] = tmp4;
  obj[4] = channel;
  obj[5] = selected;
  obj[7] = UnreadSetting.ONLY_MENTIONS;
  const children = [callback(onChannelSelected(15378), obj), ];
  if (selected) {
    obj = { style: null, source: null };
    obj[0] = tmp.selectedIcon;
    obj[1] = tmp2(16913);
    selected = callback(tmp2(5449), obj);
    const tmp2Result = tmp2(5449);
  }
  children[1] = selected;
  return callback2(closure_12, { children });
}
({ Permissions: c9, Fonts } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
createCacheKey[2] = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
let obj3 = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_LINK, 16));
obj3.marginStart = 8;
createCacheKey[3] = obj3;
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { paddingHorizontal: 8, paddingVertical: 4 };
createCacheKey[6] = { end: 16, top: 10, position: "absolute" };
let closure_14 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ onChannelSelected: importDefault, selectedChannelId: dependencyMap, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let first;
  let ref;
  const tmp = callback();
  let tmp2 = first(ref.useState(""), 2);
  first = tmp2[0];
  ref = ref.useRef(null);
  let obj = guildId(589);
  let items = [closure_7, closure_8];
  const items1 = [guildId, first];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const categories = closure_1_7.getCategories(guildId);
    const iter = categories._categories[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp2 = categories[iter.next().channel.id];
      for (const item10020 of tmp2) {
        let canResult = closure_1_8.can(closure_1_9.VIEW_CHANNEL, item10020.channel);
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
  }, items1);
  obj = { style: tmp.titleContainer, children: null };
  if (title == null) {
    const intl = tmp5(1236).intl;
    title = intl.string(tmp5(1236).t.PDn2fR);
  }
  obj[1] = callback(guildId(4734).Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title });
  const items2 = [callback(View, obj), , ];
  obj1 = { style: tmp.searchContainer, children: null };
  let obj2 = { size: "md", placeholder: null, onChange: null, onFocus: null };
  const intl2 = tmp5(1236).intl;
  obj2[1] = intl2.string(guildId(1236).t.UTYBjS);
  obj2[2] = tmp2[1];
  obj2[3] = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (current != null) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj1[1] = callback(guildId(7337).SearchField, obj2);
  items2[1] = callback(View, obj1);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj3 = { style: null, accessibilityRole: "button", onPress: null, children: null };
    obj3[0] = tmp.createChannelButton;
    obj3[2] = function onPress() {
      let obj = ACTION_SHEET_HEIGHT_HALFDefault;
      obj.hideActionSheet();
      obj = { guildId, createMode: null, onChannelCreated: null };
      const obj2 = _modDef5260;
      obj[1] = guildId(dependencyMap[26]).CreateChannelMode.PREMIUM_CHANNEL;
      obj[2] = function onChannelCreated(arg0) {
        closure_1_1(closure_1_2[27]).close();
        const channel = closure_1_6.getChannel(arg0);
        if (null != channel) {
          callback(channel);
        }
        const obj = closure_1_1(closure_1_2[27]);
      };
      obj2.pushLazy(guildId(dependencyMap[25])(dependencyMap[24], dependencyMap.paths), obj, _modDef8849.CREATE_CHANNEL_MODAL_KEY);
    };
    let str;
    if (str != null) {
      str = str.toString();
    }
    const obj4 = { color: null, source: null };
    obj4[0] = str;
    obj4[1] = registerAssetDefault;
    const items3 = [callback(tmp5(1297).Icon, obj4), ];
    const obj5 = { style: null, variant: "text-md/medium", color: "text-link", children: null };
    obj5[0] = tmp.createChannelLabel;
    const intl3 = tmp5(1236).intl;
    obj5[3] = intl3.string(tmp5(1236).t.d7AN7W);
    items3[1] = callback(tmp5(4734).Text, obj5);
    obj3[3] = items3;
    tmp9Result = callback2(tmp5(5433).PressableOpacity, obj3);
  }
  items2[2] = tmp9Result;
  obj[2] = callback2(closure_12, { children: items2 });
  obj[3] = callback(guildId(6952).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_1_11(ChannelRow, { channel: item, onChannelSelected: closure_1, selected: item.id === closure_2 });
    }
  });
  return callback(guildId(7175).ActionSheet, obj);
};