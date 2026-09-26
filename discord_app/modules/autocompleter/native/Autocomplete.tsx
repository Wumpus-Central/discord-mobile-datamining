// === Module 11875: Autocomplete ===

// Module 11875 (Autocomplete)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2010 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import TimestampUtils from "TimestampUtils" /* 5330 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import Pressables from "Pressables" /* 5435 */;
import FastImageDefault from "FastImage" /* 5899 */;
import TableRow from "TableRow" /* 5917 */;
import TableRowTrailingText from "TableRowTrailingText" /* 5926 */;
import _modDef7581 from "module_7581" /* 7581 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8021 */;
import Form from "Form" /* 8053 */;
import StickerDefault from "Sticker" /* 9636 */;
import StickersHooks from "StickersHooks" /* 9848 */;
import ChannelAutocompleteEmojiUpsellDefault from "ChannelAutocompleteEmojiUpsell" /* 11876 */;
import GameSearchRowExperimentDefault from "GameSearchRowExperiment" /* 11877 */;
import GamePlatformBadgeRowDefault from "GamePlatformBadgeRow" /* 11878 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function AutocompleteLabel(text) {
  const tmp = closure_11();
  return React7(Form.FormRow.Label, { style: closure_11().leading, text: text.text });
}
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelTypes: closure_8, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { row: { height: fn(9726).AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, leading: null, trailing: null, username: null, emoji: null, emojiImage: null, emojiText: null, stickerContainer: null, commandChoiceLoadingContainer: null, commandChoiceLoadingItem: null, autocompleteIcon: null, gameIcon: null, labelRow: null };
let obj3 = { height: fn(9726).AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.leading = { fontSize: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj4 = { fontSize: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj2.trailing = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
let obj5 = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
obj2.username = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.emoji = { width: 32, height: 32 };
obj2.emojiImage = { resizeMode: "contain" };
let obj6 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj2.emojiText = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
let size = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm };
obj2.stickerContainer = size;
obj2.commandChoiceLoadingContainer = { flex: 1, justifyContent: "center" };
const obj7 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
obj2.commandChoiceLoadingItem = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.autocompleteIcon = { opacity: 0.6 };
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.gameIcon = size1;
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default {
  User(user) {
    user = user.user;
    ({ nick, guildId } = user);
    ({ status, onPress } = user);
    const tmp = closure_11();
    const items = [RelationshipStore];
    const stateFromStores = user(504).useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = RelationshipStore.getNickname(user.id);
      }
      return nickname;
    });
    const obj2 = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem", label: null, leading: null, trailing: null };
    if (nick == null) {
      nick = stateFromStores;
    }
    if (nick == null) {
      nick = guildId(4678).getName(user);
      const obj3 = guildId(4678);
    }
    obj2.label = closure_9(AutocompleteLabel, { text: nick });
    const obj = user(504);
    obj2.leading = closure_9(user(1177).Avatar, { status, user, size: user(1177).AvatarSizes.SMALL, guildId, autoStatusCutout: true });
    const obj5 = { user, usernameStyle: null, discriminatorStyle: tmp.trailing };
    const items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj5.usernameStyle = items1;
    obj2.trailing = closure_9(guildId(9094), obj5);
    return closure_9(user(8053).FormRow, obj2);
  },
  Global(arg0) {
    ({ text, badge } = arg0);
    ({ description, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    if (null != badge) {
      const obj2 = { style: tmp.labelRow, children: null };
      const obj3 = { text };
      const items = [React7(AutocompleteLabel, obj3), badge];
      obj2.children = items;
      let tmp2Result = closure_1_10(View, obj2);
    } else {
      const obj4 = { text };
      tmp2Result = React7(AutocompleteLabel, obj4);
    }
    obj.label = tmp2Result;
    obj.trailing = React7(TableRowTrailingText.TableRowTrailingText, { text: description });
    return React7(TableRow.TableRow, obj);
  },
  Role(colorString) {
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    const obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    const items = [closure_11().leading, ];
    let tmp5;
    if (null != colorString) {
      const obj2 = { color: colorString };
      tmp5 = obj2;
    }
    const tmp = closure_11();
    items[1] = tmp5;
    obj.label = React7(Form.FormRow.Label, { style: items, text: "@" + name });
    let str = "";
    if (showDescription) {
      const intl = util.intl;
      str = intl.string(util.t.HrUmDH);
    }
    obj.trailing = React7(TableRowTrailingText.TableRowTrailingText, { text: str });
    return React7(TableRow.TableRow, obj);
  },
  Channel(onPress) {
    ({ channel, category } = onPress);
    const tmp = closure_11();
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = _modDef7581;
    } else {
      channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, tmp2);
    }
    const obj2 = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp9 = React7(native.Icon, { source: channelIconWithGuild, style: tmp.autocompleteIcon });
    const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    const obj4 = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp9, label: React7(AutocompleteLabel, { text: channelName }), trailing: null };
    const obj5 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: null };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj5.children = name;
    obj4.trailing = React7(Text_Text.Text, obj5);
    return React7(Form.FormRow, obj4);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_11();
    if ("" !== url) {
      const obj2 = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj2.style = items;
      const obj3 = { uri: url };
      obj2.source = obj3;
      let tmp5 = React7(FastImageDefault, obj2);
      let tmp2 = React7;
    } else {
      tmp2 = React7;
      const obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = React7(native.LegacyText, obj);
    }
    const obj4 = { onPress, accessibilityRole: "menuitem", leading: tmp5, label: tmp2(AutocompleteLabel, { text: ":" + name + ":" }) };
    return tmp2(Form.FormRow, obj4);
  },
  EmojiPremiumUpsell(arg0) {
    ({ results, onPress } = arg0);
    return React7(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: React7(ChannelAutocompleteEmojiUpsellDefault, { results }) });
  },
  Choice(arg0) {
    ({ choice, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: React7(AutocompleteLabel, { text: choice.displayName }) };
    return React7(Form.FormRow, obj);
  },
  ChoiceLoading() {
    const tmp = closure_11();
    const memo = noop.useMemo(() => _modDef12.random(100, 300), []);
    const obj = { DEPRECATED_style: tmp.row, leading: null };
    const obj2 = { style: tmp.commandChoiceLoadingContainer, children: null };
    const obj3 = { style: null };
    const items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj3.style = items;
    obj2.children = React7(View, obj3);
    obj.leading = React7(View, obj2);
    return React7(Form.FormRow, obj);
  },
  Sticker(arg0) {
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    const tmp = closure_11();
    const shouldAnimateSticker = StickersHooks.useShouldAnimateSticker(isInteracting);
    return React7(Pressables.PressableOpacity, { accessibilityRole: "menuitem", style: tmp.stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: React7(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker }) });
  },
  Label(text) {
    return React7(Form.FormRow, { label: React7(AutocompleteLabel, { text: text.label }) });
  },
  Game(game) {
    game = game.game;
    const tmp = closure_11();
    const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    const obj = GameSearchRowExperimentDefault;
    if (obj2.isNullOrEmpty(tmp4)) {
      const obj3 = { size: "sm", style: tmp.gameIcon };
      let tmp6Result = React7(UnknownGameIcon.UnknownGameIcon, obj3);
      let tmp8 = React7;
    } else {
      const obj4 = { style: tmp.gameIcon, source: null };
      const obj5 = { uri: tmp4 };
      obj4.source = obj5;
      tmp6Result = React7(FastImageDefault, obj4);
      tmp8 = React7;
    }
    const obj6 = { onPress: game.onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: tmp8(AutocompleteLabel, { text: game.name }), trailing: null };
    let tmp8Result;
    if (obj.useConfig({ location: "game_mention_autocomplete_native" }).extraChromeEnabled) {
      const obj8 = { platforms: game.platformAvailability };
      tmp8Result = tmp8(GamePlatformBadgeRowDefault, obj8);
    }
    obj6.trailing = tmp8Result;
    return tmp8(Form.FormRow, obj6);
  },
  Timestamp(description) {
    let str = description.description;
    ({ mention, onPress } = description);
    const result = TimestampUtils.formatTimestampMention(mention);
    let tmp5Result = null;
    if (null != result) {
      const obj2 = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
      const obj3 = { text: result.formatted };
      obj2.label = React7(AutocompleteLabel, obj3);
      if (str == null) {
        str = "";
      }
      const obj4 = { text: str };
      obj2.trailing = React7(TableRowTrailingText.TableRowTrailingText, obj4);
      tmp5Result = React7(TableRow.TableRow, obj2);
    }
    return tmp5Result;
  }
};
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;