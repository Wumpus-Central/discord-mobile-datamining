// discord_app/modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import _modDef4115 from "module_4115" /* 4115 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import Text from "Text" /* 4734 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4761 */;
import preloadDefault from "preload" /* 5449 */;
import RoleIconDefault from "RoleIcon" /* 7165 */;
import registerAssetDefault from "registerAsset" /* 8338 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_6 from "createGuildRoleRecordFromRust" /* 1983 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "markAllUserIdListsStale" /* 4030 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importDefaultResult from "createTextStyle" /* 6782 */;

require = arg1;
function HorizontalAutocompleteOption(arg0) {
  let sharedValue;
  ({ children, onPress } = arg0);
  let obj = sharedValue(4115);
  sharedValue = obj.useSharedValue(0);
  useMountLayoutEffectDefault(() => {
    const result = sharedValue.set(sharedValue(closure_1_2[14]).withTiming(1));
  });
  const tmp = callback3();
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = closure_14;
  obj = { onPress, children: null };
  const animatedStyle = sharedValue(4115).useAnimatedStyle(fn);
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj[1] = callback(_modDef4115.View, { style: items, children });
  return callback(closure_3, obj);
}
noopAll;
({ TouchableOpacity: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ ChannelTypes: c10, Fonts } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: null, status: null, horizontalAutocompleteOption: null, roleIcon: null, channelName: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.TEXT_DEFAULT, 14));
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[6] = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[7] = { marginRight: 4 };
createCacheKey[8] = { marginLeft: 8 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let closure_14 = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj2 = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj3 = {
  User(arg0) {
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = callback3();
    let obj = initialize;
    const items = [closure_5];
    obj = { onPress, children: null };
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj = { status, statusStyle: tmp.status, user, size: Button.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const items1 = [callback(Button.Avatar, obj), ];
    obj1 = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" }, children: null };
    const obj2 = { style: items2, variant: "text-sm/semibold", children: null };
    items2 = [tmp.nickname];
    if (nick == null) {
      nick = nameFromUserDefault.getName(user);
      const obj6 = nameFromUserDefault;
    }
    obj2[2] = nick;
    const items3 = [callback(Text.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items4 = ["@", nameFromUserDefault.getUserTag(user, { decoration: "never" })];
    obj3[2] = items4;
    items3[1] = closure_12(Text.Text, obj3);
    obj1[1] = items3;
    items1[1] = closure_12(closure_4, obj1);
    obj[1] = items1;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Role(onPress) {
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = callback3();
    let obj = initialize;
    const items = [closure_6];
    const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getRole(closure_0, closure_1));
    let roleIconData = null;
    if (null != stateFromStores) {
      roleIconData = tmp2(7164).getRoleIconData(stateFromStores, 30);
      const tmp2Result = tmp2(7164);
    }
    obj = { onPress: onPress.onPress, children: null };
    let tmp9Result = null;
    if (null != roleIconData) {
      obj = { style: null, children: null };
      obj[0] = tmp.roleIcon;
      obj1 = { name: null, source: null, unicodeEmoji: null, size: 24 };
      obj1[0] = name;
      let tmp13;
      if (null != roleIconData.customIconSrc) {
        const obj2 = { uri: null };
        obj2[0] = roleIconData.customIconSrc;
        tmp13 = obj2;
      }
      obj1[1] = tmp13;
      obj1[2] = roleIconData.unicodeEmoji;
      obj[1] = closure_11(RoleIconDefault, obj1);
      tmp9Result = tmp9(closure_4, obj);
      const tmp10 = closure_4;
      const tmp12 = RoleIconDefault;
    }
    const items1 = [tmp9Result, ];
    const items2 = [tmp.nickname, ];
    let tmp15;
    if (null != colorString) {
      const obj3 = { color: null };
      obj3[0] = colorString;
      tmp15 = obj3;
    }
    items2[1] = tmp15;
    items1[1] = closure_11(Button.LegacyText, { style: items2, children: "@" + name });
    obj[1] = items1;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Channel(channel) {
    channel = channel.channel;
    channel(589);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = registerAssetDefault;
    } else {
      let tmp2Result = tmp2(6832);
      channelIconWithGuild = tmp2Result.getChannelIconWithGuild(channel, tmp5);
    }
    const tmp = callback3();
    tmp2Result = tmp2(4984);
    let obj = { onPress: channel.onPress, children: null };
    const items = [callback(channel(1297).Icon, { source: channelIconWithGuild }), ];
    const channelName = tmp2Result.computeChannelName(channel, closure_9, closure_8);
    obj = { style: tmp.channelName, variant: "text-sm/semibold", children: channelName };
    items[1] = callback(channel(4734).Text, obj);
    obj[1] = items;
    return callback2(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = callback3();
    if ("" !== url) {
      let obj = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj[0] = items;
      obj = { uri: null };
      obj[0] = url;
      obj[1] = obj;
      let tmp5 = callback(preloadDefault, obj);
      let tmp6 = callback;
    } else {
      obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj[0] = items1;
      obj[2] = surrogates;
      tmp5 = callback(Button.LegacyText, obj);
      tmp6 = callback;
    }
    obj1 = { onPress, children: null };
    const items2 = [tmp6(closure_4, { children: tmp5 }), tmp6(Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" })];
    obj1[1] = items2;
    return callback2(HorizontalAutocompleteOption, obj1);
  }
};
let result = require("set").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default obj3;