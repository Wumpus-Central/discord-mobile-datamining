// discord_app/modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import RoleIconUtils from "../../../../guild_boosting/RoleIconUtils.tsx";
import RoleIconDefault from "../../../../roles/native/RoleIcon.tsx";
import _modDef8483 from "../../../../../../_runtime/metro/08483__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
function HorizontalAutocompleteOption(arg0) {
  let sharedValue;
  ({ children, onPress } = arg0);
  const tmp = closure_13();
  sharedValue = sharedValue(4561).useSharedValue(0);
  useMountEffectDefault(() => {
    const result = sharedValue.set(timing.withTiming(1));
  });
  const obj = sharedValue(4561);
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = __initData;
  const obj3 = { onPress, children: null };
  const animatedStyle = sharedValue(4561).useAnimatedStyle(fn);
  const obj4 = { style: null, children };
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj4.style = items;
  obj3.children = closure_11(ReanimatedRexportDefault.View, obj4);
  return closure_11(closure_3, obj3);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ ChannelTypes: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  emoji: { width: 32, height: 32 },
  emojiImage: { resizeMode: "contain" },
  emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" },
  emojiName: { marginLeft: 8 },
  nickname: null,
  status: null,
  horizontalAutocompleteOption: null,
  roleIcon: null,
  channelName: null,
};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.nickname = {};
obj2.status = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.horizontalAutocompleteOption = {
  paddingHorizontal: 8,
  flex: 1,
  flexDirection: "row",
  height: 56,
  alignItems: "center",
  borderRightWidth: StyleSheet.hairlineWidth,
  borderRightColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.roleIcon = { marginRight: 4 };
obj2.channelName = { marginLeft: 8 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = {
  code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx",
);

export default {
  User(arg0) {
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    const obj2 = { onPress, children: null };
    const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const items1 = [
      closure_1_11(native.Avatar, {
        status,
        statusStyle: tmp.status,
        user,
        size: native.AvatarSizes.SMALL,
        guildId,
        animate: !stateFromStores,
      }),
    ];
    const obj4 = {
      style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" },
      children: null,
    };
    const obj5 = { style: null, variant: "text-sm/semibold", children: null };
    const items2 = [tmp.nickname];
    obj5.style = items2;
    if (nick == null) {
      nick = UserUtilsDefault.getName(user);
    }
    obj5.children = nick;
    const items3 = [closure_1_11(Text_Text.Text, obj5)];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj3 = {
      status,
      statusStyle: tmp.status,
      user,
      size: native.AvatarSizes.SMALL,
      guildId,
      animate: !stateFromStores,
    };
    const items4 = ["@", UserUtilsDefault.getUserTag(user, { decoration: "never" })];
    obj7.children = items4;
    items3[1] = closure_1_12(Text_Text.Text, obj7);
    obj4.children = items3;
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
    const items1 = [tmp8];
    const items2 = [tmp.nickname];
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
      let channelIconWithGuild = _modDef8483;
    } else {
      channelIconWithGuild = tmp2(5327).getChannelIconWithGuild(channel, tmp5);
      const tmp2Result = tmp2(5327);
    }
    const tmp = closure_13();
    const tmp8 = closure_11(channel(1177).Icon, { source: channelIconWithGuild });
    const obj = { onPress: channel.onPress, children: null };
    const items = [tmp8];
    const channelName = channel(4982).computeChannelName(channel, UserStore, RelationshipStore);
    items[1] = closure_11(channel(4825).Text, {
      style: tmp.channelName,
      variant: "text-sm/semibold",
      children: channelName,
    });
    obj.children = items;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      const obj2 = { style: null, source: null };
      const items = [,];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj2.style = items;
      const obj3 = { uri: url };
      obj2.source = obj3;
      let tmp5 = closure_1_11(FastImageDefault, obj2);
      let tmp6 = closure_1_11;
    } else {
      const obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [,];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = closure_1_11(native.LegacyText, obj);
      tmp6 = closure_1_11;
    }
    const obj4 = { onPress, children: null };
    const items2 = [
      tmp6(React4, { children: tmp5 }),
      tmp6(Text_Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" }),
    ];
    obj4.children = items2;
    return closure_1_12(HorizontalAutocompleteOption, obj4);
  },
};
