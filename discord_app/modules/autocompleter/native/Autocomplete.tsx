// discord_app/modules/autocompleter/native/Autocomplete.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import getGameMediaRefURLDefault from "../../games/getGameMediaRefURL.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import TimestampUtils from "../../markup/TimestampUtils.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowTrailingText from "../../../design/components/TableRow/native/TableRowTrailingText.native.tsx";
import _modDef8124 from "../../../../_runtime/metro/08124__.js";
import UnknownGameIcon from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import StickerDefault from "../../stickers/native/Sticker.tsx";
import StickersHooks from "../../stickers/StickersHooks.tsx";
import ChannelAutocompleteEmojiUpsellDefault from "../../channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
fn(4560);
let createStyles = {
  row: null,
  leading: null,
  trailing: null,
  username: null,
  emoji: null,
  emojiImage: null,
  emojiText: null,
  stickerContainer: null,
  commandChoiceLoadingContainer: null,
  commandChoiceLoadingItem: null,
  autocompleteIcon: null,
  gameIcon: null,
  labelRow: null,
};
createStyles = {
  height: fn(10263).AUTOCOMPLETE_ROW_HEIGHT,
  paddingVertical: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.row = createStyles;
createStyles.leading = {
  fontSize: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
};
let obj1 = { fontSize: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
createStyles.trailing = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
let obj2 = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
createStyles.username = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
createStyles.emoji = { width: 32, height: 32 };
createStyles.emojiImage = { resizeMode: "contain" };
let obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
createStyles.emojiText = {
  lineHeight: 32,
  fontSize: 27,
  textAlign: "center",
  color: nativeDefault.colors.TEXT_DEFAULT,
};
let size = {
  width: 56,
  height: 56,
  marginHorizontal: 4,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.stickerContainer = size;
createStyles.commandChoiceLoadingContainer = { flex: 1, justifyContent: "center" };
const obj4 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.commandChoiceLoadingItem = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
createStyles.autocompleteIcon = { opacity: 0.6 };
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
createStyles.gameIcon = size1;
const obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
createStyles.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default {
  User(user) {
    user = user.user;
    ({ nick, guildId } = user);
    ({ status, onPress } = user);
    const tmp = closure_11();
    let obj = user(504);
    const items = [RelationshipStore];
    const stateFromStores = obj.useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = RelationshipStore.getNickname(user.id);
      }
      return nickname;
    });
    obj = {
      DEPRECATED_style: tmp.row,
      onPress,
      accessibilityRole: "menuitem",
      label: null,
      leading: null,
      trailing: null,
    };
    if (nick == null) {
      nick = stateFromStores;
    }
    if (nick == null) {
      nick = guildId(4404).getName(user);
      const obj3 = guildId(4404);
    }
    obj.label = closure_9(AutocompleteLabel, { text: nick });
    obj = { status, user, size: tmp2(1178).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    obj.leading = closure_9(user(1178).Avatar, obj);
    const obj1 = { user, usernameStyle: null, discriminatorStyle: tmp.trailing };
    const items1 = [,];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj1.usernameStyle = items1;
    obj.trailing = closure_9(guildId(9803), obj1);
    return closure_9(user(8593).FormRow, obj);
  },
  Global(arg0) {
    ({ text, badge } = arg0);
    ({ description, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    if (null != badge) {
      obj = { style: tmp.labelRow, children: null };
      obj = { text };
      const items = [React7(AutocompleteLabel, obj), badge];
      obj.children = items;
      let tmp2Result = closure_1_10(View, obj);
    } else {
      const obj1 = { text };
      tmp2Result = React7(AutocompleteLabel, obj1);
    }
    obj.label = tmp2Result;
    obj.trailing = React7(TableRowTrailingText.TableRowTrailingText, { text: description });
    return React7(TableRow.TableRow, obj);
  },
  Role(colorString) {
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    let obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    const items = [closure_11().leading];
    let tmp5;
    if (null != colorString) {
      obj = { color: colorString };
      tmp5 = obj;
    }
    obj = { style: items, text: "@" + name };
    items[1] = tmp5;
    obj.label = React7(Form.FormRow.Label, obj);
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
      let channelIconWithGuild = _modDef8124;
    } else {
      let obj = utils_ChannelUtils;
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    obj = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp9 = React7(native.Icon, obj);
    const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    obj = {
      onPress: onPress.onPress,
      accessibilityRole: "menuitem",
      leading: tmp9,
      label: React7(AutocompleteLabel, { text: channelName }),
      trailing: null,
    };
    const obj1 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: null };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj1.children = name;
    obj.trailing = React7(Text_Text.Text, obj1);
    return React7(Form.FormRow, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_11();
    if ("" !== url) {
      let obj = { style: null, source: null };
      const items = [,];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj.style = items;
      obj = { uri: url };
      obj.source = obj;
      let tmp5 = React7(FastImageDefault, obj);
      let tmp2 = React7;
    } else {
      tmp2 = React7;
      obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [,];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = React7(native.LegacyText, obj);
    }
    const obj1 = {
      onPress,
      accessibilityRole: "menuitem",
      leading: tmp5,
      label: tmp2(AutocompleteLabel, { text: ":" + name + ":" }),
    };
    return tmp2(Form.FormRow, obj1);
  },
  EmojiPremiumUpsell(arg0) {
    ({ results, onPress } = arg0);
    return React7(Form.FormRow, {
      onPress,
      accessibilityRole: "menuitem",
      label: React7(ChannelAutocompleteEmojiUpsellDefault, { results }),
    });
  },
  Choice(arg0) {
    ({ choice, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem", label: null };
    obj = { text: choice.displayName };
    obj.label = React7(AutocompleteLabel, obj);
    return React7(Form.FormRow, obj);
  },
  ChoiceLoading() {
    const tmp = closure_11();
    const memo = noop.useMemo(() => _modDef12.random(100, 300), []);
    let obj = { DEPRECATED_style: tmp.row, leading: null };
    obj = { style: tmp.commandChoiceLoadingContainer, children: null };
    obj = { style: null };
    const items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj.style = items;
    obj.children = React7(View, obj);
    obj.leading = React7(View, obj);
    return React7(Form.FormRow, obj);
  },
  Sticker(arg0) {
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    let obj = StickersHooks;
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    obj = {
      accessibilityRole: "menuitem",
      style: closure_11().stickerContainer,
      onPress,
      onLongPress,
      pointerEvents: "box-only",
      children: React7(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker }),
    };
    return React7(Pressables.PressableOpacity, obj);
  },
  Label(text) {
    return React7(Form.FormRow, { label: React7(AutocompleteLabel, { text: text.label }) });
  },
  Game(game) {
    game = game.game;
    const tmp = closure_11();
    const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    let obj = StringUtils;
    if (obj.isNullOrEmpty(tmp4)) {
      obj = { size: "sm", style: tmp.gameIcon };
      let tmp6Result = React7(UnknownGameIcon.UnknownGameIcon, obj);
      let tmp8 = React7;
    } else {
      obj = { style: tmp.gameIcon, source: null };
      const obj1 = { uri: tmp4 };
      obj.source = obj1;
      tmp6Result = React7(FastImageDefault, obj);
      tmp8 = React7;
    }
    const obj2 = {
      onPress: game.onPress,
      accessibilityRole: "menuitem",
      leading: tmp6Result,
      label: tmp8(AutocompleteLabel, { text: game.name }),
    };
    return tmp8(Form.FormRow, obj2);
  },
  Timestamp(description) {
    let str = description.description;
    ({ mention, onPress } = description);
    let obj = TimestampUtils;
    const result = obj.formatTimestampMention(mention);
    let tmp5Result = null;
    if (null != result) {
      obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
      obj = { text: result.formatted };
      obj.label = React7(AutocompleteLabel, obj);
      if (str == null) {
        str = "";
      }
      const obj1 = { text: str };
      obj.trailing = React7(TableRowTrailingText.TableRowTrailingText, obj1);
      tmp5Result = React7(TableRow.TableRow, obj);
    }
    return tmp5Result;
  },
};
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;
