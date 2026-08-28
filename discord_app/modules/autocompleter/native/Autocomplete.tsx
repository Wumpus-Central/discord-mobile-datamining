// discord_app/modules/autocompleter/native/Autocomplete.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import isNullOrEmpty from "../../../utils/StringUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getGameMediaRefURLDefault from "../../games/getGameMediaRefURL.tsx";
import computeChannelName from "../../channel/useChannelName.tsx";
import getChannelIcon from "../../../utils/native/ChannelUtils.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import TableRowInner from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowTrailingText from "../../../design/components/TableRow/native/TableRowTrailingText.native.tsx";
import registerAssetDefault from "../../../../_runtime/07979_registerAsset.js";
import Form from "../../../design/void/Form/native/index.tsx";
import StickerDefault from "../../stickers/native/Sticker.tsx";
import useStickerPackCategories from "../../stickers/StickersHooks.tsx";
import ChannelAutocompleteEmojiUpsellDefault from "../../channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/GuildStore.tsx";
import closure_6 from "../../../stores/RelationshipStore.tsx";
import closure_7 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function AutocompleteLabel(text) {
  const tmp = callback3();
  return callback(Form.FormRow.Label, { style: callback3().leading, text: text.text });
}
({ ChannelTypes: closure_8, Fonts } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { row: null, leading: null, trailing: null, username: null, emoji: null, emojiImage: null, emojiText: null, stickerContainer: null, commandChoiceLoadingContainer: null, commandChoiceLoadingItem: null, autocompleteIcon: null, gameIcon: null, labelRow: null };
createCacheKey = { height: require("AUTOCOMPLETE_ROW_HEIGHT").AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontSize: 16, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj1 = { fontSize: 16, color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
createCacheKey[2] = { fontSize: 14, color: ThemesDefault.colors.TEXT_MUTED };
const obj2 = { fontSize: 14, color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[3] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = { width: 32, height: 32 };
createCacheKey[5] = { resizeMode: "contain" };
let obj3 = { color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[6] = { lineHeight: 32, fontSize: 27, textAlign: "center", color: ThemesDefault.colors.TEXT_DEFAULT };
const obj4 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[7] = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm };
createCacheKey[8] = { flex: 1, justifyContent: "center" };
const obj5 = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.sm };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey[10] = { opacity: 0.6 };
const obj6 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey[11] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
const obj7 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
createCacheKey[12] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj8 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
const obj9 = {
  User(user) {
    user = user.user;
    ({ nick, guildId } = user);
    ({ status, onPress } = user);
    const tmp = callback3();
    let obj = user(589);
    const items = [closure_6];
    const stateFromStores = obj.useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = closure_1_6.getNickname(user.id);
      }
      return nickname;
    });
    obj = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem", label: null, leading: null, trailing: null };
    if (nick == null) {
      nick = stateFromStores;
    }
    if (nick == null) {
      nick = guildId(4290).getName(user);
      const obj3 = guildId(4290);
    }
    obj[3] = closure_9(AutocompleteLabel, { text: nick });
    obj = { status, user, size: tmp2(1297).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    obj[4] = closure_9(user(1297).Avatar, obj);
    const items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj[5] = closure_9(guildId(9710), { user, usernameStyle: items1, discriminatorStyle: tmp.trailing });
    return closure_9(user(8309).FormRow, obj);
  },
  Global(arg0) {
    ({ text, badge } = arg0);
    ({ description, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    if (null != badge) {
      obj = { style: null, children: null };
      obj[0] = tmp.labelRow;
      obj = { text: null };
      obj[0] = text;
      const items = [tmp2(AutocompleteLabel, obj), badge];
      obj[1] = items;
      let tmp2Result = callback2(View, obj);
    } else {
      obj1 = { text: null };
      obj1[0] = text;
      tmp2Result = tmp2(AutocompleteLabel, obj1);
    }
    obj[2] = tmp2Result;
    obj[3] = closure_9(TableRowTrailingText.TableRowTrailingText, { text: description });
    return closure_9(TableRowInner.TableRow, obj);
  },
  Role(colorString) {
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    let obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    const items = [callback3().leading, ];
    let tmp5;
    if (null != colorString) {
      obj = { color: null };
      obj[0] = colorString;
      tmp5 = obj;
    }
    obj = { style: items, text: "@" + name };
    items[1] = tmp5;
    obj[2] = closure_9(Form.FormRow.Label, obj);
    let str = "";
    if (showDescription) {
      const intl = tmp3(1236).intl;
      str = intl.string(tmp3(1236).t.HrUmDH);
    }
    obj[3] = closure_9(TableRowTrailingText.TableRowTrailingText, { text: str });
    return closure_9(TableRowInner.TableRow, obj);
  },
  Channel(onPress) {
    ({ channel, category } = onPress);
    const tmp = callback3();
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = registerAssetDefault;
    } else {
      let obj = getChannelIcon;
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    obj = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp9 = callback(Button.Icon, obj);
    const channelName = computeChannelName.computeChannelName(channel, closure_7, closure_6);
    obj = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp9, label: callback(AutocompleteLabel, { text: channelName }), trailing: null };
    obj1 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: null };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj1[3] = name;
    obj[4] = callback(Text.Text, obj1);
    return callback(Form.FormRow, obj);
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
      let tmp2 = callback;
    } else {
      tmp2 = callback;
      obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj[0] = items1;
      obj[2] = surrogates;
      tmp5 = callback(Button.LegacyText, obj);
    }
    obj1 = { onPress, accessibilityRole: "menuitem", leading: tmp5, label: tmp2(AutocompleteLabel, { text: ":" + name + ":" }) };
    return tmp2(Form.FormRow, obj1);
  },
  EmojiPremiumUpsell(arg0) {
    ({ results, onPress } = arg0);
    return callback(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: callback(ChannelAutocompleteEmojiUpsellDefault, { results }) });
  },
  Choice(arg0) {
    ({ choice, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem", label: null };
    obj = { text: choice.displayName };
    obj[2] = callback(AutocompleteLabel, obj);
    return callback(Form.FormRow, obj);
  },
  ChoiceLoading() {
    const tmp = callback3();
    const memo = React.useMemo(() => callback(table[27]).random(100, 300), []);
    let obj = { DEPRECATED_style: tmp.row, leading: null };
    obj = { style: tmp.commandChoiceLoadingContainer, children: callback(View, { style: items }) };
    items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj[1] = callback(View, obj);
    return callback(Form.FormRow, obj);
  },
  Sticker(arg0) {
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    let obj = useStickerPackCategories;
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    obj = { accessibilityRole: "menuitem", style: callback3().stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: callback(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker }) };
    return callback(PressableBase.PressableOpacity, obj);
  },
  Label(text) {
    return callback(Form.FormRow, { label: callback(AutocompleteLabel, { text: text.label }) });
  },
  Game(game) {
    game = game.game;
    const tmp = callback3();
    const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    let obj = isNullOrEmpty;
    if (obj.isNullOrEmpty(tmp4)) {
      obj = { size: "sm", style: null };
      obj[1] = tmp.gameIcon;
      let tmp6Result = tmp6(tmp5(8662).UnknownGameIcon, obj);
      let tmp8 = tmp6;
    } else {
      obj = { style: null, source: null };
      obj[0] = tmp.gameIcon;
      obj1 = { uri: null };
      obj1[0] = tmp4;
      obj[1] = obj1;
      tmp6Result = tmp6(preloadDefault, obj);
      tmp8 = tmp6;
    }
    return tmp8(Form.FormRow, { onPress: game.onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: tmp8(AutocompleteLabel, obj3) });
  }
};
const result = require("set").fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj9;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;