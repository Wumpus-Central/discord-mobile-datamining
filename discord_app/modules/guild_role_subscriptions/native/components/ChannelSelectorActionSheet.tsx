import _slicedToArray from "_slicedToArray";
import Text from "Text";
import { View } from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import setIndex from "setIndex";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "SearchField";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let Fonts;
let c9;
let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = createCacheKey();
  const tmp4 = onChannelSelected(4446)(channel);
  const items = [onChannelSelected, channel];
  const callback = React.useCallback(() => {
    onChannelSelected(outer1_2[13]).hideActionSheet();
    onChannelSelected(channel);
  }, items);
  let obj = { style: tmp.channelRow, onPress: callback, accessible: true, accessibilityLabel: null, channel: null, selected: null, disableHighlightOnPress: true, resolvedUnreadSetting: null };
  obj[3] = tmp4;
  obj[4] = channel;
  obj[5] = selected;
  obj[7] = UnreadSetting.ONLY_MENTIONS;
  const children = [closure_11(onChannelSelected(15104), obj), ];
  if (selected) {
    obj = { style: null, source: null };
    obj[0] = tmp.selectedIcon;
    obj[1] = tmp2(16621);
    selected = tmp8(tmp2(5207), obj);
    const tmp2Result = tmp2(5207);
  }
  children[1] = selected;
  return closure_13(closure_12, { children });
}
({ Permissions: c9, Fonts } = ME);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { titleContainer: null, searchContainer: null, createChannelButton: null, createChannelLabel: null, bodyContainer: null, channelRow: null, selectedIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
createCacheKey[2] = { alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
let obj3 = {};
let obj2 = { alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_LINK, 16));
obj3.marginStart = 8;
createCacheKey[3] = obj3;
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { paddingHorizontal: 8, paddingVertical: 4 };
createCacheKey[6] = { end: 16, top: 10, position: "absolute" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  let dependencyMap;
  let hideCreateChannel;
  let importDefault;
  let title;
  guildId = guildId.guildId;
  ({ onChannelSelected: importDefault, selectedChannelId: dependencyMap, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let first;
  let ref;
  const tmp = createCacheKey();
  let tmp2 = first(ref.useState(""), 2);
  first = tmp2[0];
  ref = ref.useRef(null);
  let obj = guildId(589);
  let items = [setIndex, getUncachedChannelPermissions];
  const items1 = [guildId, first];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const categories = outer1_7.getCategories(guildId);
    const iter = categories._categories[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp2 = categories[iter.next().channel.id];
      let tmp3 = tmp2;
      let tmp4 = tmp2;
      for (const item10020 of tmp2) {
        let tmp5 = item10020;
        let tmp6 = outer1_8;
        let tmp7 = outer1_9;
        let canResult = outer1_8.can(outer1_9.VIEW_CHANNEL, item10020.channel);
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
  obj[1] = closure_11(guildId(4251).Text, { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary", children: title });
  const items2 = [closure_11(View, obj), , ];
  const obj1 = { style: tmp.searchContainer, children: null };
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
  obj1[1] = closure_11(guildId(5891).SearchField, obj2);
  items2[1] = closure_11(View, obj1);
  let tmp9Result = !hideCreateChannel;
  if (!hideCreateChannel) {
    const obj3 = { style: null, accessibilityRole: "button", onPress: null, children: null };
    obj3[0] = tmp.createChannelButton;
    obj3[2] = function onPress() {
      let obj = outer1_1(outer1_2[13]);
      obj.hideActionSheet();
      obj = { guildId, createMode: null, onChannelCreated: null };
      const obj2 = outer1_1(outer1_2[23]);
      obj[1] = guildId(outer1_2[26]).CreateChannelMode.PREMIUM_CHANNEL;
      obj[2] = function onChannelCreated(arg0) {
        outer1_1(outer1_2[27]).close();
        const channel = outer1_6.getChannel(arg0);
        if (null != channel) {
          callback(channel);
        }
      };
      obj2.pushLazy(guildId(outer1_2[25])(outer1_2[24], outer1_2.paths), obj, outer1_1(outer1_2[27]).CREATE_CHANNEL_MODAL_KEY);
    };
    let str = tmp.createChannelLabel.color;
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    const obj4 = { color: null, source: null };
    obj4[0] = str;
    obj4[1] = importDefault(12750);
    const items3 = [tmp8(tmp5(1297).Icon, obj4), ];
    const obj5 = { style: null, variant: "text-md/medium", color: "text-link", children: null };
    obj5[0] = tmp.createChannelLabel;
    const intl3 = tmp5(1236).intl;
    obj5[3] = intl3.string(tmp5(1236).t.d7AN7W);
    items3[1] = tmp8(tmp5(4251).Text, obj5);
    obj3[3] = items3;
    tmp9Result = tmp9(tmp5(4783).PressableOpacity, obj3);
  }
  items2[2] = tmp9Result;
  obj[2] = closure_13(closure_12, { children: items2 });
  obj[3] = closure_11(guildId(5311).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_11(outer1_15, { channel: item, onChannelSelected: closure_1, selected: item.id === closure_2 });
    }
  });
  return closure_11(guildId(5617).ActionSheet, obj);
};