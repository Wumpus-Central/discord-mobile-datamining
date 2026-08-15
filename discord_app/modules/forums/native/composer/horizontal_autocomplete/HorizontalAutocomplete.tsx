// discord_app/modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx
import "getRoleIconData";
import get_ActivityIndicator from "Text";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import { registerAsset } from "../../../../../../_runtime/08338_registerAsset.js";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { preload } from "../../../../../components_native/common/FastImage.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { useMountLayoutEffect } from "../../../../../hooks/useMountEffect.tsx";
import { nameFromUser } from "../../../../../utils/UserUtils.tsx";
import { ReanimatedRexport } from "../../../../reanimated/ReanimatedRexport.tsx";
import { RoleIcon } from "../../../../roles/native/RoleIcon.tsx";

let Fonts;
let StyleSheet;
let c10;
let c3;
let c4;
let closure_12;
let unpackModuleId;
const require = arg1;
function HorizontalAutocompleteOption(arg0) {
  let children;
  let onPress;
  let sharedValue;
  ({ children, onPress } = arg0);
  let obj = sharedValue(4115);
  sharedValue = obj.useSharedValue(0);
  useMountLayoutEffect(() => {
    const result = sharedValue.set(sharedValue(outer1_2[14]).withTiming(1));
  });
  const tmp = createCacheKey();
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = closure_14;
  obj = { onPress, children: null };
  const animatedStyle = sharedValue(4115).useAnimatedStyle(fn);
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj[1] = callback(ReanimatedRexport.View, { style: items, children });
  return callback(closure_3, obj);
}
({ TouchableOpacity: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ ChannelTypes: c10, Fonts } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: null, status: null, horizontalAutocompleteOption: null, roleIcon: null, channelName: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("Themes").colors.TEXT_DEFAULT, 14));
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[6] = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[7] = { marginRight: 4 };
createCacheKey[8] = { marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_14 = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj2 = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: require("Themes").colors.BORDER_SUBTLE };
let obj3 = {
  User(arg0) {
    let guildId;
    let nick;
    let onPress;
    let status;
    let user;
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = createCacheKey();
    let obj = initialize;
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    obj = { onPress, children: null };
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj = { status, statusStyle: tmp.status, user, size: null, guildId: null, animate: null };
    obj[3] = Button.AvatarSizes.SMALL;
    obj[4] = guildId;
    obj[5] = !stateFromStores;
    const items1 = [callback(Button.Avatar, obj), ];
    const obj1 = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" }, children: null };
    const obj2 = { style: items2, variant: "text-sm/semibold", children: null };
    items2 = [tmp.nickname];
    if (nick == null) {
      nick = nameFromUser.getName(user);
      const obj6 = nameFromUser;
    }
    obj2[2] = nick;
    const items3 = [callback(Text.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items4 = ["@", nameFromUser.getUserTag(user, { decoration: "never" })];
    obj3[2] = items4;
    items3[1] = closure_12(Text.Text, obj3);
    obj1[1] = items3;
    items1[1] = closure_12(closure_4, obj1);
    obj[1] = items1;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Role(onPress) {
    let colorString;
    let importDefault;
    let name;
    let require;
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = createCacheKey();
    let obj = initialize;
    const items = [createGuildRoleRecordFromRust];
    const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getRole(closure_0, closure_1));
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
      const obj1 = { name: null, source: null, unicodeEmoji: null, size: 24 };
      obj1[0] = name;
      let tmp13;
      if (null != roleIconData.customIconSrc) {
        const obj2 = { uri: null };
        obj2[0] = roleIconData.customIconSrc;
        tmp13 = obj2;
      }
      obj1[1] = tmp13;
      obj1[2] = roleIconData.unicodeEmoji;
      obj[1] = closure_11(RoleIcon, obj1);
      tmp9Result = tmp9(closure_4, obj);
      const tmp10 = closure_4;
      const tmp12 = RoleIcon;
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
      let channelIconWithGuild = registerAsset;
    } else {
      let tmp2Result = tmp2(6832);
      channelIconWithGuild = tmp2Result.getChannelIconWithGuild(channel, tmp5);
    }
    const tmp = createCacheKey();
    tmp2Result = tmp2(4984);
    let obj = { onPress: channel.onPress, children: null };
    const items = [callback(channel(1297).Icon, { source: channelIconWithGuild }), ];
    const channelName = tmp2Result.computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
    obj = { style: tmp.channelName, variant: "text-sm/semibold", children: channelName };
    items[1] = callback(channel(4734).Text, obj);
    obj[1] = items;
    return callback2(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    let name;
    let onPress;
    let surrogates;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = createCacheKey();
    if ("" !== url) {
      let obj = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj[0] = items;
      obj = { uri: null };
      obj[0] = url;
      obj[1] = obj;
      let tmp5 = callback(preload, obj);
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
    const obj1 = { onPress, children: null };
    const items2 = [tmp6(closure_4, { children: tmp5 }), ];
    const obj2 = { style: tmp.emojiName, variant: "text-sm/semibold", children: null };
    obj2[2] = ":" + name + ":";
    items2[1] = tmp6(Text.Text, obj2);
    obj1[1] = items2;
    return callback2(HorizontalAutocompleteOption, obj1);
  }
};
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default obj3;