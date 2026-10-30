// === Module 10499: HorizontalAutocomplete ===

// Module 10499 (HorizontalAutocomplete)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import RoleIconUtils from "RoleIconUtils" /* 7350 */;
import RoleIconDefault from "RoleIcon" /* 7368 */;
import _modDef8700 from "module_8700" /* 8700 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import TextStyles from "TextStyles" /* 6717 */;

require = fn;
function HorizontalAutocompleteOption(arg0) {
  let sharedValue;
  ({ children, onPress } = arg0);
  const tmp = closure_13();
  sharedValue = sharedValue(5090).useSharedValue(0);
  useMountEffectDefault(() => {
    const result = sharedValue.set(timing.withTiming(1));
  });
  const obj = sharedValue(5090);
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = __initData;
  const obj3 = { onPress, children: null };
  const animatedStyle = sharedValue(5090).useAnimatedStyle(fn);
  const obj4 = { style: null, children };
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj4.style = items;
  obj3.children = closure_11(ReanimatedRexportDefault.View, obj4);
  return closure_11(closure_3, obj3);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1072);
({ ChannelTypes: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: null, status: null, horizontalAutocompleteOption: null, roleIcon: null, channelName: null };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.nickname = {};
obj2.status = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.horizontalAutocompleteOption = { paddingHorizontal: 8, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.roleIcon = { marginRight: 4 };
obj2.channelName = { marginLeft: 8 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default {
  User(arg0) {
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    const obj2 = { onPress, children: null };
    const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const items1 = [closure_1_11(native.Avatar, { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores }), ];
    const obj4 = { style: { marginLeft: 8, height: 56, flexDirection: "column", justifyContent: "center" }, children: null };
    const obj5 = { style: tmp.nickname, variant: "text-sm/semibold", children: null };
    if (nick == null) {
      nick = UserUtilsDefault.getName(user);
    }
    obj5.children = nick;
    const items2 = [closure_1_11(Text_Text.Text, obj5), ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj3 = { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const items3 = ["@", UserUtilsDefault.getUserTag(user, { decoration: "never" })];
    obj7.children = items3;
    items2[1] = closure_1_12(Text_Text.Text, obj7);
    obj4.children = items2;
    items1[1] = closure_1_12(React4, obj4);
    obj2.children = items1;
    return closure_1_12(HorizontalAutocompleteOption, obj2);
  },
  Role(onPress) {
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = closure_13();
    const items = [GuildRoleStore];
    const stateFromStores = initialize.useStateFromStores(items, () => GuildRoleStore.getRole(require, importDefault));
    let roleIconData = null;
    if (null != stateFromStores) {
      roleIconData = RoleIconUtils.getRoleIconData(stateFromStores, 30);
      const tmp2Result = RoleIconUtils;
    }
    const obj2 = { onPress: onPress.onPress, children: null };
    let tmp8 = null;
    if (null != roleIconData) {
      const obj3 = { style: tmp.roleIcon, children: null };
      const obj4 = { name, src: null, unicodeEmoji: null, size: 24 };
      ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = roleIconData);
      obj3.children = closure_11(RoleIconDefault, obj4);
      tmp8 = closure_11(closure_4, obj3);
    }
    const items1 = [tmp8, ];
    const items2 = [tmp.nickname, ];
    let tmp13;
    if (null != colorString) {
      const obj6 = { color: colorString };
      tmp13 = obj6;
    }
    items2[1] = tmp13;
    items1[1] = closure_11(native.LegacyText, { style: items2, children: "@" + name });
    obj2.children = items1;
    return closure_12(HorizontalAutocompleteOption, obj2);
  },
  Channel(channel) {
    channel = channel.channel;
    channel(504);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = _modDef8700;
    } else {
      channelIconWithGuild = tmp2(8595).getChannelIconWithGuild(channel, tmp5);
      const tmp2Result = tmp2(8595);
    }
    const tmp = closure_13();
    const tmp8 = closure_11(channel(1188).Icon, { source: channelIconWithGuild });
    const obj = { onPress: channel.onPress, children: null };
    const items = [tmp8, ];
    const channelName = channel(5647).computeChannelName(channel, UserStore, RelationshipStore);
    items[1] = closure_11(channel(5619).Text, { style: tmp.channelName, variant: "text-sm/semibold", children: channelName });
    obj.children = items;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      const obj2 = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj2.style = items;
      const obj3 = { uri: url };
      obj2.source = obj3;
      let tmp5 = closure_1_11(FastImageDefault, obj2);
      let tmp6 = closure_1_11;
    } else {
      const obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = closure_1_11(native.LegacyText, obj);
      tmp6 = closure_1_11;
    }
    const obj4 = { onPress, children: null };
    const items2 = [tmp6(React4, { children: tmp5 }), tmp6(Text_Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" })];
    obj4.children = items2;
    return closure_1_12(HorizontalAutocompleteOption, obj4);
  }
};