// === Module 10624: HorizontalAutocomplete ===

// Module 10624 (HorizontalAutocomplete)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import FastImageDefault from "FastImage" /* 5587 */;
import RoleIconDefault from "RoleIcon" /* 7188 */;
import _modDef8124 from "module_8124" /* 8124 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function HorizontalAutocompleteOption(arg0) {
  let sharedValue;
  ({ children, onPress } = arg0);
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(0);
  useMountEffectDefault(() => {
    const result = sharedValue.set(timing.withTiming(1));
  });
  const tmp = closure_13();
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = __initData;
  obj = { onPress, children: null };
  const animatedStyle = sharedValue(4296).useAnimatedStyle(fn);
  obj = { style: null, children };
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj.style = items;
  obj.children = closure_11(ReanimatedRexportDefault.View, obj);
  return closure_11(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ ChannelTypes: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: null, status: null, horizontalAutocompleteOption: null, roleIcon: null, channelName: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
createStyles.nickname = createStyles;
createStyles.status = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.horizontalAutocompleteOption = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.roleIcon = { marginRight: 4 };
createStyles.channelName = { marginLeft: 8 };
let closure_13 = createStyles.createStyles(createStyles);
const __initData = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default {
  User(arg0) {
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    let obj = { onPress, children: null };
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj = { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const items1 = [closure_1_11(native.Avatar, obj), ];
    const obj1 = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" }, children: null };
    const obj2 = { style: null, variant: "text-sm/semibold", children: null };
    const items2 = [tmp.nickname];
    obj2.style = items2;
    if (nick == null) {
      nick = UserUtilsDefault.getName(user);
    }
    obj2.children = nick;
    const items3 = [closure_1_11(Text_Text.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items4 = ["@", UserUtilsDefault.getUserTag(user, { decoration: "never" })];
    obj3.children = items4;
    items3[1] = closure_1_12(Text_Text.Text, obj3);
    obj1.children = items3;
    items1[1] = closure_1_12(React4, obj1);
    obj.children = items1;
    return closure_1_12(HorizontalAutocompleteOption, obj);
  },
  Role(onPress) {
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = closure_13();
    let obj = initialize;
    const items = [GuildRoleStore];
    const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getRole(require, importDefault));
    let roleIconData = null;
    if (null != stateFromStores) {
      roleIconData = tmp2(7187).getRoleIconData(stateFromStores, 30);
      const tmp2Result = tmp2(7187);
    }
    obj = { onPress: onPress.onPress, children: null };
    let tmp9Result = null;
    if (null != roleIconData) {
      obj = { style: tmp.roleIcon, children: null };
      const obj1 = { name, source: null, unicodeEmoji: null, size: 24 };
      let tmp13;
      if (null != roleIconData.customIconSrc) {
        const obj2 = { uri: roleIconData.customIconSrc };
        tmp13 = obj2;
      }
      obj1.source = tmp13;
      obj1.unicodeEmoji = roleIconData.unicodeEmoji;
      obj.children = closure_11(RoleIconDefault, obj1);
      tmp9Result = tmp9(closure_4, obj);
    }
    const items1 = [tmp9Result, ];
    const items2 = [tmp.nickname, ];
    let tmp15;
    if (null != colorString) {
      const obj3 = { color: colorString };
      tmp15 = obj3;
    }
    items2[1] = tmp15;
    items1[1] = closure_11(native.LegacyText, { style: items2, children: "@" + name });
    obj.children = items1;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Channel(channel) {
    channel = channel.channel;
    channel(504);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = _modDef8124;
    } else {
      let tmp2Result = tmp2(5028);
      channelIconWithGuild = tmp2Result.getChannelIconWithGuild(channel, tmp5);
    }
    const tmp = closure_13();
    tmp2Result = tmp2(4713);
    let obj = { onPress: channel.onPress, children: null };
    const items = [closure_11(channel(1178).Icon, { source: channelIconWithGuild }), ];
    const channelName = tmp2Result.computeChannelName(channel, UserStore, RelationshipStore);
    obj = { style: tmp.channelName, variant: "text-sm/semibold", children: channelName };
    items[1] = closure_11(channel(4556).Text, obj);
    obj.children = items;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      let obj = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj.style = items;
      obj = { uri: url };
      obj.source = obj;
      let tmp5 = closure_1_11(FastImageDefault, obj);
      let tmp6 = closure_1_11;
    } else {
      obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = closure_1_11(native.LegacyText, obj);
      tmp6 = closure_1_11;
    }
    const obj1 = { onPress, children: null };
    const items2 = [tmp6(React4, { children: tmp5 }), tmp6(Text_Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" })];
    obj1.children = items2;
    return closure_1_12(HorizontalAutocompleteOption, obj1);
  }
};