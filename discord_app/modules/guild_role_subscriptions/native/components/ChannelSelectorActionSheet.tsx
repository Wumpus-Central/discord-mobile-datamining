// discord_app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../_runtime/13038_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/ChannelStore.tsx";
import closure_7 from "../../../../stores/GuildCategoryStore.tsx";
import closure_8 from "../../../../stores/PermissionStore.tsx";
import ME from "../../../../Constants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

const require = arg1;
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = callback();
  const tmp4 = onChannelSelected(4984)(channel);
  const items = [onChannelSelected, channel];
  callback = React.useCallback(() => {
    onChannelSelected(closure_1_2[13]).hideActionSheet();
    onChannelSelected(channel);
  }, items);
  let obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: tmp4, channel, selected, disableHighlightOnPress: true, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
  const children = [closure_11(onChannelSelected(15378), obj), ];
  if (selected) {
    obj = { style: null, source: null };
    obj[0] = tmp.selectedIcon;
    obj[1] = tmp2(16913);
    selected = tmp8(tmp2(5449), obj);
    const tmp2Result = tmp2(5449);
  }
  children[1] = selected;
  return closure_13(closure_12, { children });
}
({ Permissions: c9, Fonts } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { titleContainer: null, searchContainer: null, createChannelButton: null, createChannelLabel: null, bodyContainer: null, channelRow: null, selectedIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
createCacheKey[2] = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
let obj3 = {};
let obj2 = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_LINK, 16));
obj3.marginStart = 8;
createCacheKey[3] = obj3;
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { paddingHorizontal: 8, paddingVertical: 4 };
createCacheKey[6] = { end: 16, top: 10, position: "absolute" };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

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
      let tmp3 = tmp2;
      let tmp4 = tmp2;
      for (const item10020 of tmp2) {
        let tmp5 = item10020;
        let tmp6 = closure_1_8;
        let tmp7 = closure_1_9;
        let canResult = closure_1_8.can(closure_1_9.VIEW_CHANNEL, item10020.channel);
        if (canResult) {
          let hasItem = "" === first;
          if (!hasItem) {
            let tmp11 = item10020;
            let name = tmp5.channel.name;
            hasItem = name.includes(tmp9);
          }
          canResult = hasItem;
        }
        if (canResult) {
          let tmp12 = item10020;
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
    const intl = tmp5(1236).intl;
    title = intl.string(tmp5(1236).t.PDn2fR);
  }
  obj[1] = closure_11(guildId(4734).Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title });
  const items2 = [closure_11(View, obj), , ];
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
  obj1[1] = closure_11(guildId(7337).SearchField, obj2);
  items2[1] = closure_11(View, obj1);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj3 = { style: null, accessibilityRole: "button", onPress: null, children: null };
    obj3[0] = tmp.createChannelButton;
    obj3[2] = function onPress() {
      let obj = closure_1_1(closure_1_2[13]);
      obj.hideActionSheet();
      obj = { guildId, createMode: null, onChannelCreated: null };
      const obj2 = closure_1_1(closure_1_2[23]);
      obj[1] = guildId(closure_1_2[26]).CreateChannelMode.PREMIUM_CHANNEL;
      obj[2] = function onChannelCreated(arg0) {
        closure_1_1(closure_1_2[27]).close();
        const channel = closure_1_6.getChannel(arg0);
        if (null != channel) {
          callback(channel);
        }
      };
      obj2.pushLazy(guildId(closure_1_2[25])(closure_1_2[24], closure_1_2.paths), obj, closure_1_1(closure_1_2[27]).CREATE_CHANNEL_MODAL_KEY);
    };
    let str = tmp.createChannelLabel.color;
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    const obj4 = { color: null, source: null };
    obj4[0] = str;
    obj4[1] = registerAssetDefault;
    const items3 = [tmp8(tmp5(1297).Icon, obj4), ];
    const obj5 = { style: null, variant: "text-md/medium", color: "text-link", children: null };
    obj5[0] = tmp.createChannelLabel;
    const intl3 = tmp5(1236).intl;
    obj5[3] = intl3.string(tmp5(1236).t.d7AN7W);
    items3[1] = tmp8(tmp5(4734).Text, obj5);
    obj3[3] = items3;
    tmp9Result = tmp9(tmp5(5433).PressableOpacity, obj3);
  }
  items2[2] = tmp9Result;
  obj[2] = closure_13(closure_12, { children: items2 });
  obj[3] = closure_11(guildId(6952).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_1_11(closure_1_15, { channel: item, onChannelSelected: closure_1, selected: item.id === closure_2 });
    }
  });
  return closure_11(guildId(7175).ActionSheet, obj);
};