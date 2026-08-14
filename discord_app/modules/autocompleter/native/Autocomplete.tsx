// discord_app/modules/autocompleter/native/Autocomplete.tsx
import getChannelIcon from "getChannelIcon";
import { View } from "getSystemLocale";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/08297_registerAsset.js";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { TableRowInner } from "../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowTrailingText } from "../../../design/components/TableRow/native/TableRowTrailingText.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Form } from "../../../design/void/Form/native/index.tsx";
import { Button } from "../../../design/void/native.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getChannelIcon } from "../../../utils/native/ChannelUtils.tsx";
import { isNullOrEmpty } from "../../../utils/StringUtils.tsx";
import { ChannelAutocompleteEmojiUpsell } from "../../channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";
import { getGameMediaRefURL } from "../../games/getGameMediaRefURL.tsx";
import { Sticker } from "../../stickers/native/Sticker.tsx";
import { useStickerPackCategories } from "../../stickers/StickersHooks.tsx";

let Fonts;
let c10;
let c9;
let metroImportAll;
const require = arg1;
function AutocompleteLabel(text) {
  const tmp = createCacheKey();
  return callback(Form.FormRow.Label, { style: createCacheKey().leading, text: text.text });
}
({ ChannelTypes: metroImportAll, Fonts } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { row: null, leading: null, trailing: null, username: null, emoji: null, emojiImage: null, emojiText: null, stickerContainer: null, commandChoiceLoadingContainer: null, commandChoiceLoadingItem: null, autocompleteIcon: null, gameIcon: null, labelRow: null };
createCacheKey = { height: require("AUTOCOMPLETE_ROW_HEIGHT").AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { fontSize: 16, color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj1 = { fontSize: 16, color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
createCacheKey[2] = { fontSize: 14, color: require("Themes").colors.TEXT_MUTED };
let obj2 = { fontSize: 14, color: require("Themes").colors.TEXT_MUTED };
createCacheKey[3] = { color: require("Themes").unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = { width: 32, height: 32 };
createCacheKey[5] = { resizeMode: "contain" };
let obj3 = { color: require("Themes").unsafe_rawColors.PRIMARY_400 };
createCacheKey[6] = { lineHeight: 32, fontSize: 27, textAlign: "center", color: require("Themes").colors.TEXT_DEFAULT };
const obj4 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[7] = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm };
createCacheKey[8] = { flex: 1, justifyContent: "center" };
const obj5 = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm };
createCacheKey[9] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
createCacheKey[10] = { opacity: 0.6 };
const obj6 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
createCacheKey[11] = { width: 32, height: 32, borderRadius: require("Themes").radii.sm };
const obj7 = { width: 32, height: 32, borderRadius: require("Themes").radii.sm };
createCacheKey[12] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj8 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
const obj9 = {
  User(user) {
    let guildId;
    let nick;
    let onPress;
    let status;
    user = user.user;
    ({ nick, guildId } = user);
    ({ status, onPress } = user);
    const tmp = createCacheKey();
    let obj = user(589);
    const items = [markAllUserIdListsStale];
    const stateFromStores = obj.useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = outer1_6.getNickname(user.id);
      }
      return nickname;
    });
    obj = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem", label: null, leading: null, trailing: null };
    if (nick == null) {
      nick = stateFromStores;
    }
    if (nick == null) {
      nick = guildId(4187).getName(user);
      const obj3 = guildId(4187);
    }
    obj[3] = closure_9(AutocompleteLabel, { text: nick });
    obj = { status, user, size: null, guildId: null, autoStatusCutout: true };
    obj[2] = user(1297).AvatarSizes.SMALL;
    obj[3] = guildId;
    obj[4] = closure_9(user(1297).Avatar, obj);
    const items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj[5] = closure_9(guildId(9194), { user, usernameStyle: items1, discriminatorStyle: tmp.trailing });
    return closure_9(user(8033).FormRow, obj);
  },
  Global(arg0) {
    let badge;
    let description;
    let onPress;
    let text;
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
      const obj1 = { text: null };
      obj1[0] = text;
      tmp2Result = tmp2(AutocompleteLabel, obj1);
    }
    obj[2] = tmp2Result;
    obj[3] = closure_9(TableRowTrailingText.TableRowTrailingText, { text: description });
    return closure_9(TableRowInner.TableRow, obj);
  },
  Role(colorString) {
    let name;
    let onPress;
    let showDescription;
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    let obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    const items = [createCacheKey().leading, ];
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
    let category;
    let channel;
    ({ channel, category } = onPress);
    const tmp = createCacheKey();
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = registerAsset;
    } else {
      let obj = getChannelIcon;
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    obj = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp9 = callback(Button.Icon, obj);
    const channelName = computeChannelName.computeChannelName(channel, mergeGuildAvatar, markAllUserIdListsStale);
    obj = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp9, label: null, trailing: null };
    obj[3] = callback(AutocompleteLabel, { text: channelName });
    const obj1 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: null };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj1[3] = name;
    obj[4] = callback(Text.Text, obj1);
    return callback(Form.FormRow, obj);
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
    const obj1 = { onPress, accessibilityRole: "menuitem", leading: tmp5, label: null };
    const obj2 = { text: null };
    obj2[0] = ":" + name + ":";
    obj1[3] = tmp2(AutocompleteLabel, obj2);
    return tmp2(Form.FormRow, obj1);
  },
  EmojiPremiumUpsell(arg0) {
    let onPress;
    let results;
    ({ results, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: null };
    obj[2] = callback(ChannelAutocompleteEmojiUpsell, { results });
    return callback(Form.FormRow, obj);
  },
  Choice(arg0) {
    let choice;
    let onPress;
    ({ choice, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem", label: null };
    obj = { text: choice.displayName };
    obj[2] = callback(AutocompleteLabel, obj);
    return callback(Form.FormRow, obj);
  },
  ChoiceLoading() {
    const tmp = createCacheKey();
    const memo = React.useMemo(() => callback(table[27]).random(100, 300), []);
    let obj = { DEPRECATED_style: tmp.row, leading: null };
    obj = { style: tmp.commandChoiceLoadingContainer, children: null };
    const items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj[1] = callback(View, { style: items });
    obj[1] = callback(View, obj);
    return callback(Form.FormRow, obj);
  },
  Sticker(arg0) {
    let isInteracting;
    let onLongPress;
    let onPress;
    let sticker;
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    let obj = useStickerPackCategories;
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    obj = { accessibilityRole: "menuitem", style: createCacheKey().stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: null };
    obj[5] = callback(Sticker, { sticker, size: 40, animated: shouldAnimateSticker });
    return callback(PressableBase.PressableOpacity, obj);
  },
  Label(text) {
    const obj = { label: null };
    obj[0] = callback(AutocompleteLabel, { text: text.label });
    return callback(Form.FormRow, obj);
  },
  Game(game) {
    game = game.game;
    const tmp = createCacheKey();
    const tmp4 = getGameMediaRefURL(game.id, game.icon, { size: 32 });
    let obj = isNullOrEmpty;
    if (obj.isNullOrEmpty(tmp4)) {
      obj = { size: "sm", style: null };
      obj[1] = tmp.gameIcon;
      let tmp6Result = tmp6(tmp5(8013).UnknownGameIcon, obj);
      let tmp8 = tmp6;
    } else {
      obj = { style: null, source: null };
      obj[0] = tmp.gameIcon;
      const obj1 = { uri: null };
      obj1[0] = tmp4;
      obj[1] = obj1;
      tmp6Result = tmp6(preload, obj);
      tmp8 = tmp6;
    }
    const obj2 = { onPress: game.onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: null };
    obj2[3] = tmp8(AutocompleteLabel, { text: game.name });
    return tmp8(Form.FormRow, obj2);
  }
};
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj9;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;