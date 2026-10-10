// === Module 12093: Autocomplete ===

// Module 12093 (Autocomplete)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2030 */;
import StringUtils from "StringUtils" /* 2031 */;
import Text_Text from "Text/Text" /* 5088 */;
import useChannelName from "useChannelName" /* 5421 */;
import FastImageDefault from "FastImage" /* 6156 */;
import TableRow from "TableRow" /* 6179 */;
import Pressables from "Pressables" /* 6184 */;
import TableRowTrailingText from "TableRowTrailingText" /* 6190 */;
import UnknownGameIcon from "UnknownGameIcon" /* 7688 */;
import TimestampUtils from "TimestampUtils" /* 8155 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8158 */;
import _modDef8261 from "module_8261" /* 8261 */;
import Form from "Form" /* 8579 */;
import StickersHooks from "StickersHooks" /* 9757 */;
import StickerDefault from "Sticker" /* 9773 */;
import ChannelAutocompleteEmojiUpsellDefault from "ChannelAutocompleteEmojiUpsell" /* 12094 */;
import GameSearchRowExperimentDefault from "GameSearchRowExperiment" /* 12095 */;
import GamePlatformBadgeRowDefault from "GamePlatformBadgeRow" /* 12096 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ ChannelTypes: closure_8, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { row: { height: fn(9716).AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, leading: null, trailing: null, username: null, emoji: null, emojiImage: null, emojiText: null, stickerContainer: null, commandChoiceLoadingContainer: null, commandChoiceLoadingItem: null, autocompleteIcon: null, gameIcon: null, labelRow: null };
let obj3 = { height: fn(9716).AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
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
let obj7 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
obj2.commandChoiceLoadingItem = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.autocompleteIcon = { opacity: 0.6 };
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.gameIcon = size1;
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
obj2.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function AutocompleteLabel(text) {
  const cResult = c.c(3);
  const tmp4 = closure_11();
  if (cResult[0] === text.text) {
    if (cResult[1] === tmp4.leading) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = options(Form.FormRow.Label, { style: tmp4.leading, text: text.text });
  cResult[0] = text.text;
  cResult[1] = tmp4.leading;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { style: tmp4.leading, text: text.text };
}) : (function AutocompleteLabel(text) {
  const tmp = closure_11();
  return options(Form.FormRow.Label, { style: closure_11().leading, text: text.text });
});
fn(558);
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function User(user) {
  const cResult = user(576).c(27);
  user = user.user;
  ({ nick, status, guildId } = user);
  const onPress = user.onPress;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === user) {
      let tmp7 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7);
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === nick) {
        if (cResult[6] === user) {
          let tmp9 = cResult[7];
        }
        if (cResult[8] !== tmp9) {
          const obj2 = { text: tmp9 };
          const tmp16 = closure_9(closure_12, obj2);
          cResult[8] = tmp9;
          cResult[9] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] === guildId) {
          if (cResult[11] === status) {
            if (cResult[12] === user) {
              let tmp17 = cResult[13];
            }
            if (cResult[14] === tmp4.trailing) {
              if (cResult[15] === tmp4.username) {
                let tmp20 = cResult[16];
              }
              if (cResult[17] === tmp4.trailing) {
                if (cResult[18] === tmp20) {
                  if (cResult[19] === user) {
                    let tmp21 = cResult[20];
                  }
                  if (cResult[21] === onPress) {
                    if (cResult[22] === tmp4.row) {
                      if (cResult[23] === tmp13) {
                        if (cResult[24] === tmp17) {
                          if (cResult[25] === tmp21) {
                            let tmp25 = cResult[26];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                  const obj4 = { DEPRECATED_style: tmp4.row, onPress, accessibilityRole: "menuitem", label: tmp13, leading: tmp17, trailing: tmp21 };
                  const tmp27 = closure_9(tmp(8579).FormRow, obj4);
                  cResult[21] = onPress;
                  cResult[22] = tmp4.row;
                  cResult[23] = tmp13;
                  cResult[24] = tmp17;
                  cResult[25] = tmp21;
                  cResult[26] = tmp27;
                  tmp25 = tmp27;
                }
              }
              const obj5 = { user, usernameStyle: tmp20, discriminatorStyle: tmp4.trailing };
              const tmp24 = closure_9(guildId(8765), obj5);
              cResult[17] = tmp4.trailing;
              cResult[18] = tmp20;
              cResult[19] = user;
              cResult[20] = tmp24;
              tmp21 = tmp24;
            }
            const items1 = [, ];
            ({ trailing: arr2[0], username: arr2[1] } = tmp4);
            cResult[14] = tmp4.trailing;
            cResult[15] = tmp4.username;
            cResult[16] = items1;
            tmp20 = items1;
          }
        }
        const obj6 = { status, user, size: tmp(1200).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
        const tmp19 = closure_9(tmp(1200).Avatar, obj6);
        cResult[10] = guildId;
        cResult[11] = status;
        cResult[12] = user;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
    }
    let name = nick;
    if (nick == null) {
      name = stateFromStores;
    }
    if (name == null) {
      name = guildId(4962).getName(user);
      const obj3 = guildId(4962);
    }
    cResult[4] = stateFromStores;
    cResult[5] = nick;
    cResult[6] = user;
    cResult[7] = name;
    tmp9 = name;
    const tmpResult = tmp(504);
  }
  const fn = function n() {
    let nickname = null;
    if (null == guildId) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    return nickname;
  };
  cResult[1] = guildId;
  cResult[2] = user;
  cResult[3] = fn;
  tmp7 = fn;
  const obj = user(576);
}) : (function User(user) {
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
    nick = guildId(4962).getName(user);
    const obj3 = guildId(4962);
  }
  obj2.label = closure_9(closure_12, { text: nick });
  const obj = user(504);
  obj2.leading = closure_9(user(1200).Avatar, { status, user, size: user(1200).AvatarSizes.SMALL, guildId, autoStatusCutout: true });
  const obj5 = { user, usernameStyle: null, discriminatorStyle: tmp.trailing };
  const items1 = [, ];
  ({ trailing: arr2[0], username: arr2[1] } = tmp);
  obj5.usernameStyle = items1;
  obj2.trailing = closure_9(guildId(8765), obj5);
  return closure_9(user(8579).FormRow, obj2);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function Global(arg0) {
  const cResult = c.c(10);
  ({ text, description, badge, onPress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === badge) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === text) {
        if (cResult[4] !== description) {
          const obj2 = { text: description };
          const tmp15 = options(TableRowTrailingText.TableRowTrailingText, obj2);
          cResult[4] = description;
          cResult[5] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] === onPress) {
          if (cResult[7] === tmp5) {
            if (cResult[8] === tmp13) {
              let tmp16 = cResult[9];
            }
            return tmp16;
          }
        }
        const obj3 = { onPress, accessibilityRole: "menuitem", label: cResult[3], trailing: tmp13 };
        const tmp18 = options(TableRow.TableRow, obj3);
        cResult[6] = onPress;
        cResult[7] = cResult[3];
        cResult[8] = tmp13;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
    }
  }
  if (null != badge) {
    const obj4 = { style: tmp4.labelRow, children: null };
    const obj5 = { text };
    const items = [options(closure_12, obj5), badge];
    obj4.children = items;
    let tmp8 = collapsed(View, obj4);
  } else {
    const obj6 = { text };
    tmp8 = options(closure_12, obj6);
  }
  cResult[0] = badge;
  cResult[1] = tmp4;
  cResult[2] = text;
  cResult[3] = tmp8;
}) : (function Global(arg0) {
  ({ text, badge } = arg0);
  ({ description, onPress } = arg0);
  const obj = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
  if (null != badge) {
    const obj2 = { style: tmp.labelRow, children: null };
    const obj3 = { text };
    const items = [options(closure_12, obj3), badge];
    obj2.children = items;
    let tmp2Result = collapsed(View, obj2);
  } else {
    const obj4 = { text };
    tmp2Result = options(closure_12, obj4);
  }
  obj.label = tmp2Result;
  obj.trailing = options(TableRowTrailingText.TableRowTrailingText, { text: description });
  return options(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function Role(name) {
  const cResult = c.c(16);
  ({ onPress, showDescription, colorString } = name);
  const tmp4 = closure_11();
  if (cResult[0] !== colorString) {
    let tmp7;
    if (null != colorString) {
      const obj2 = { color: colorString };
      tmp7 = obj2;
    }
    cResult[0] = colorString;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.leading) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    const _HermesInternal = HermesInternal;
    const combined = "@" + name.name;
    if (cResult[5] === tmp8) {
      if (cResult[6] === combined) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] !== showDescription) {
        let str2 = "";
        if (showDescription) {
          const intl = util.intl;
          str2 = intl.string(util.t.HrUmDH);
        }
        cResult[8] = showDescription;
        cResult[9] = str2;
        let tmp14 = str2;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp14) {
        const obj3 = { text: tmp14 };
        const tmp17 = options(TableRowTrailingText.TableRowTrailingText, obj3);
        cResult[10] = tmp14;
        cResult[11] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === onPress) {
        if (cResult[13] === tmp11) {
          if (cResult[14] === tmp15) {
            let tmp18 = cResult[15];
          }
          return tmp18;
        }
      }
      const obj4 = { onPress, accessibilityRole: "menuitem", label: tmp11, trailing: tmp15 };
      const tmp20 = options(TableRow.TableRow, obj4);
      cResult[12] = onPress;
      cResult[13] = tmp11;
      cResult[14] = tmp15;
      cResult[15] = tmp20;
      tmp18 = tmp20;
    }
    const obj5 = { style: tmp8, text: combined };
    const tmp13 = options(Form.FormRow.Label, obj5);
    cResult[5] = tmp8;
    cResult[6] = combined;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const items = [tmp4.leading, tmp5];
  cResult[2] = tmp4.leading;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp8 = items;
}) : (function Role(colorString) {
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
  obj.label = options(Form.FormRow.Label, { style: items, text: "@" + name });
  let str = "";
  if (showDescription) {
    const intl = util.intl;
    str = intl.string(util.t.HrUmDH);
  }
  obj.trailing = options(TableRowTrailingText.TableRowTrailingText, { text: str });
  return options(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function Channel(arg0) {
  const cResult = c.c(17);
  ({ channel, category, onPress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== channel) {
    const getGuild = GuildStore.getGuild;
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = _modDef8261;
    } else {
      channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, tmp7);
      const tmpResult = utils_ChannelUtils;
    }
    cResult[0] = channel;
    cResult[1] = channelIconWithGuild;
  } else {
    if (cResult[2] === cResult[1]) {
      if (cResult[3] === tmp4.autocompleteIcon) {
        let tmp12 = cResult[4];
      }
      if (cResult[5] !== channel) {
        const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        cResult[5] = channel;
        cResult[6] = channelName;
        let tmp15 = channelName;
        const tmpResult2 = useChannelName;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] !== tmp15) {
        const obj2 = { text: tmp15 };
        const tmp22 = options(closure_12, obj2);
        cResult[7] = tmp15;
        cResult[8] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === tmp4.trailing) {
        if (cResult[10] === tmp24) {
          let tmp25 = cResult[11];
        }
        if (cResult[12] === tmp12) {
          if (cResult[13] === onPress) {
            if (cResult[14] === tmp19) {
              if (cResult[15] === tmp25) {
                let tmp28 = cResult[16];
              }
              return tmp28;
            }
          }
        }
        const obj3 = { onPress, accessibilityRole: "menuitem", leading: tmp12, label: tmp19, trailing: tmp25 };
        const tmp30 = options(Form.FormRow, obj3);
        cResult[12] = tmp12;
        cResult[13] = onPress;
        cResult[14] = tmp19;
        cResult[15] = tmp25;
        cResult[16] = tmp30;
        tmp28 = tmp30;
      }
      const obj4 = { style: tmp4.trailing, variant: "text-sm/medium", color: "text-muted", children: null != category && category.name };
      const tmp27 = options(Text_Text.Text, obj4);
      cResult[9] = tmp4.trailing;
      cResult[10] = null != category && category.name;
      cResult[11] = tmp27;
      tmp25 = tmp27;
    }
    const obj5 = { source: cResult[1], style: tmp4.autocompleteIcon };
    const tmp14 = options(native.Icon, obj5);
    cResult[2] = cResult[1];
    cResult[3] = tmp4.autocompleteIcon;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  }
}) : (function Channel(onPress) {
  ({ channel, category } = onPress);
  const tmp = closure_11();
  if (channel.type === constants.GUILD_CATEGORY) {
    let channelIconWithGuild = _modDef8261;
  } else {
    channelIconWithGuild = utils_ChannelUtils.getChannelIconWithGuild(channel, tmp2);
  }
  const obj2 = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
  const tmp9 = options(native.Icon, { source: channelIconWithGuild, style: tmp.autocompleteIcon });
  const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  const obj4 = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp9, label: options(closure_12, { text: channelName }), trailing: null };
  const obj5 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: null };
  let name = null != category;
  if (name) {
    name = category.name;
  }
  obj5.children = name;
  obj4.trailing = options(Text_Text.Text, obj5);
  return options(Form.FormRow, obj4);
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function Emoji(name) {
  const cResult = c.c(20);
  ({ url, surrogates, onPress } = name);
  const tmp4 = closure_11();
  if ("" !== url) {
    if (cResult[0] === tmp4.emoji) {
      if (cResult[1] === tmp4.emojiImage) {
        let tmp9 = cResult[2];
      }
      if (cResult[3] !== url) {
        const obj2 = { uri: url };
        cResult[3] = url;
        cResult[4] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp9) {
      }
      const obj3 = { style: tmp9, source: tmp10 };
      const tmp14 = options(FastImageDefault, obj3);
      cResult[5] = tmp9;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
    }
    const items = [, ];
    ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp4);
    cResult[0] = tmp4.emoji;
    cResult[1] = tmp4.emojiImage;
    cResult[2] = items;
    tmp9 = items;
  } else {
    if (cResult[8] === tmp4.emoji) {
      if (cResult[9] === tmp4.emojiText) {
        let tmp5 = cResult[10];
      }
      if (cResult[11] === surrogates) {
        if (cResult[12] === tmp5) {
          let tmp6 = cResult[13];
        }
        const _HermesInternal = HermesInternal;
        const combined = ":" + name.name + ":";
        if (cResult[14] !== combined) {
          const obj4 = { text: combined };
          const tmp21 = options(closure_12, obj4);
          cResult[14] = combined;
          cResult[15] = tmp21;
          let tmp18 = tmp21;
        } else {
          tmp18 = cResult[15];
        }
        if (cResult[16] === tmp6) {
          if (cResult[17] === onPress) {
            if (cResult[18] === tmp18) {
              let tmp22 = cResult[19];
            }
            return tmp22;
          }
        }
        const obj5 = { onPress, accessibilityRole: "menuitem", leading: tmp6, label: tmp18 };
        const tmp24 = options(Form.FormRow, obj5);
        cResult[16] = tmp6;
        cResult[17] = onPress;
        cResult[18] = tmp18;
        cResult[19] = tmp24;
        tmp22 = tmp24;
      }
      const obj6 = { style: tmp5, allowFontScaling: false, children: surrogates };
      const tmp8 = options(native.LegacyText, obj6);
      cResult[11] = surrogates;
      cResult[12] = tmp5;
      cResult[13] = tmp8;
      tmp6 = tmp8;
    }
    const items1 = [, ];
    ({ emoji: arr[0], emojiText: arr[1] } = tmp4);
    cResult[8] = tmp4.emoji;
    cResult[9] = tmp4.emojiText;
    cResult[10] = items1;
    tmp5 = items1;
  }
}) : (function Emoji(url) {
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
    let tmp5 = options(FastImageDefault, obj2);
    let tmp2 = options;
  } else {
    tmp2 = options;
    const obj = { style: null, allowFontScaling: false, children: null };
    const items1 = [, ];
    ({ emoji: arr[0], emojiText: arr[1] } = tmp);
    obj.style = items1;
    obj.children = surrogates;
    tmp5 = options(native.LegacyText, obj);
  }
  const obj4 = { onPress, accessibilityRole: "menuitem", leading: tmp5, label: tmp2(closure_12, { text: ":" + name + ":" }) };
  return tmp2(Form.FormRow, obj4);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPremiumUpsell(arg0) {
  const cResult = c.c(5);
  ({ results, onPress } = arg0);
  if (cResult[0] !== results) {
    const obj2 = { results };
    const tmp7 = options(ChannelAutocompleteEmojiUpsellDefault, obj2);
    cResult[0] = results;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === onPress) {
    if (cResult[3] === tmp4) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = options(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: tmp4 });
  cResult[2] = onPress;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function EmojiPremiumUpsell(arg0) {
  ({ results, onPress } = arg0);
  return options(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: options(ChannelAutocompleteEmojiUpsellDefault, { results }) });
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function Choice(arg0) {
  const cResult = c.c(5);
  ({ choice, onPress } = arg0);
  if (cResult[0] !== choice.displayName) {
    const obj2 = { text: choice.displayName };
    const tmp7 = options(closure_12, obj2);
    cResult[0] = choice.displayName;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === onPress) {
    if (cResult[3] === tmp4) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = options(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: tmp4 });
  cResult[2] = onPress;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function Choice(arg0) {
  ({ choice, onPress } = arg0);
  const obj = { onPress, accessibilityRole: "menuitem", label: options(closure_12, { text: choice.displayName }) };
  return options(Form.FormRow, obj);
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Sticker(isInteracting) {
  const cResult = c.c(8);
  ({ sticker, onPress, onLongPress } = isInteracting);
  const tmp4 = closure_11();
  const shouldAnimateSticker = StickersHooks.useShouldAnimateSticker(isInteracting.isInteracting);
  if (cResult[0] === shouldAnimateSticker) {
    if (cResult[1] === sticker) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === onLongPress) {
      if (cResult[4] === onPress) {
        if (cResult[5] === tmp4.stickerContainer) {
          if (cResult[6] === tmp6) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
    }
    const obj3 = { accessibilityRole: "menuitem", style: tmp4.stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: tmp6 };
    const tmp10 = options(Pressables.PressableOpacity, obj3);
    cResult[3] = onLongPress;
    cResult[4] = onPress;
    cResult[5] = tmp4.stickerContainer;
    cResult[6] = tmp6;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  const tmp7 = options(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker });
  cResult[0] = shouldAnimateSticker;
  cResult[1] = sticker;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function Sticker(arg0) {
  ({ sticker, onPress, onLongPress, isInteracting } = arg0);
  const tmp = closure_11();
  const shouldAnimateSticker = StickersHooks.useShouldAnimateSticker(isInteracting);
  return options(Pressables.PressableOpacity, { accessibilityRole: "menuitem", style: tmp.stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: options(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker }) });
});
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChoiceLoading() {
  const cResult = c.c(10);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const randomResult = _modDef12.random(100, 300);
    cResult[0] = randomResult;
    let first = randomResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { width: first };
    cResult[1] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.commandChoiceLoadingItem) {
    const obj4 = { style: null };
    const items = [tmp4.commandChoiceLoadingItem, tmp8];
    obj4.style = items;
    const tmp12 = options(View, obj4);
    cResult[2] = tmp4.commandChoiceLoadingItem;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.commandChoiceLoadingContainer) {
    if (cResult[5] === tmp9) {
      let tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.row) {
      if (cResult[8] === tmp13) {
        let tmp15 = cResult[9];
      }
      return tmp15;
    }
    const obj5 = { DEPRECATED_style: tmp4.row, leading: tmp13 };
    const tmp17 = options(Form.FormRow, obj5);
    cResult[7] = tmp4.row;
    cResult[8] = tmp13;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  }
  const tmp14 = options(View, { style: tmp4.commandChoiceLoadingContainer, children: tmp9 });
  cResult[4] = tmp4.commandChoiceLoadingContainer;
  cResult[5] = tmp9;
  cResult[6] = tmp14;
  tmp13 = tmp14;
  const obj6 = { style: tmp4.commandChoiceLoadingContainer, children: tmp9 };
}) : (function ChoiceLoading() {
  const tmp = closure_11();
  const memo = noop.useMemo(() => _modDef12.random(100, 300), []);
  const obj = { DEPRECATED_style: tmp.row, leading: null };
  const obj2 = { style: tmp.commandChoiceLoadingContainer, children: null };
  const obj3 = { style: null };
  const items = [tmp.commandChoiceLoadingItem, { width: memo }];
  obj3.style = items;
  obj2.children = options(View, obj3);
  obj.leading = options(View, obj2);
  return options(Form.FormRow, obj);
});
ReactCompilerGating = fn(558);
const obj10 = {
  User: tmp4,
  Global: tmp5,
  Role: tmp6,
  Channel: tmp7,
  Emoji: tmp8,
  EmojiPremiumUpsell: tmp9,
  Choice: tmp10,
  ChoiceLoading: tmp12,
  Sticker: tmp11,
  Label: ReactCompilerGating.isReactCompilerEnabled() ? (function Label(label) {
    const cResult = c.c(2);
    label = label.label;
    if (cResult[0] !== label) {
      const obj2 = { label: null };
      const obj3 = { text: label };
      obj2.label = options(closure_12, obj3);
      const tmp7 = options(Form.FormRow, obj2);
      cResult[0] = label;
      cResult[1] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (function Label(text) {
    return options(Form.FormRow, { label: options(closure_12, { text: text.label }) });
  }),
  Game: null,
  Timestamp: null
};
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? (function Label(label) {
  const cResult = c.c(2);
  label = label.label;
  if (cResult[0] !== label) {
    const obj2 = { label: null };
    const obj3 = { text: label };
    obj2.label = options(closure_12, obj3);
    const tmp7 = options(Form.FormRow, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function Label(text) {
  return options(Form.FormRow, { label: options(closure_12, { text: text.label }) });
});
ReactCompilerGating = fn(558);
obj10.Game = ReactCompilerGating.isReactCompilerEnabled() ? (function Game(arg0) {
  const cResult = c.c(15);
  ({ game, onPress } = arg0);
  let gameIcon = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "game_mention_autocomplete_native" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const extraChromeEnabled = GameSearchRowExperimentDefault.useConfig(first).extraChromeEnabled;
  if (cResult[1] === game.icon) {
    if (cResult[2] === game.id) {
      if (cResult[3] === gameIcon.gameIcon) {
        if (cResult[5] !== game.name) {
          const obj4 = { text: game.name };
          const tmp13 = options(closure_12, obj4);
          cResult[5] = game.name;
          cResult[6] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] === extraChromeEnabled) {
          if (cResult[8] === game.platformAvailability) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp10) {
                if (cResult[13] === tmp14) {
                  let tmp17 = cResult[14];
                }
                return tmp17;
              }
            }
          }
          const obj5 = { onPress, accessibilityRole: "menuitem", leading: tmp6, label: tmp10, trailing: tmp14 };
          const tmp19 = options(Form.FormRow, obj5);
          cResult[10] = tmp6;
          cResult[11] = onPress;
          cResult[12] = tmp10;
          cResult[13] = tmp14;
          cResult[14] = tmp19;
          tmp17 = tmp19;
        }
        let tmp15;
        if (extraChromeEnabled) {
          const obj6 = { platforms: game.platformAvailability };
          tmp15 = options(GamePlatformBadgeRowDefault, obj6);
        }
        cResult[7] = extraChromeEnabled;
        cResult[8] = game.platformAvailability;
        cResult[9] = tmp15;
        tmp14 = tmp15;
      }
    }
  }
  const tmp7 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
  if (tmpResult.isNullOrEmpty(tmp7)) {
    const obj7 = { size: "sm", style: gameIcon.gameIcon };
    let tmp8Result = options(UnknownGameIcon.UnknownGameIcon, obj7);
  } else {
    const obj8 = { style: gameIcon.gameIcon, source: null };
    const obj9 = { uri: tmp7 };
    obj8.source = obj9;
    tmp8Result = options(FastImageDefault, obj8);
  }
  cResult[1] = game.icon;
  cResult[2] = game.id;
  gameIcon = gameIcon.gameIcon;
  cResult[3] = gameIcon;
  cResult[4] = tmp8Result;
  tmpResult = StringUtils;
}) : (function Game(game) {
  game = game.game;
  const tmp = closure_11();
  const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
  const obj = GameSearchRowExperimentDefault;
  if (obj2.isNullOrEmpty(tmp4)) {
    const obj3 = { size: "sm", style: tmp.gameIcon };
    let tmp6Result = options(UnknownGameIcon.UnknownGameIcon, obj3);
    let tmp8 = options;
  } else {
    const obj4 = { style: tmp.gameIcon, source: null };
    const obj5 = { uri: tmp4 };
    obj4.source = obj5;
    tmp6Result = options(FastImageDefault, obj4);
    tmp8 = options;
  }
  const obj6 = { onPress: game.onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: tmp8(closure_12, { text: game.name }), trailing: null };
  let tmp8Result;
  if (obj.useConfig({ location: "game_mention_autocomplete_native" }).extraChromeEnabled) {
    const obj8 = { platforms: game.platformAvailability };
    tmp8Result = tmp8(GamePlatformBadgeRowDefault, obj8);
  }
  obj6.trailing = tmp8Result;
  return tmp8(Form.FormRow, obj6);
});
obj10.Timestamp = ReactCompilerGating.isReactCompilerEnabled() ? (function Timestamp(arg0) {
  const cResult = c.c(10);
  ({ mention, description, onPress } = arg0);
  if (cResult[0] !== mention) {
    const result = TimestampUtils.formatTimestampMention(mention);
    cResult[0] = mention;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = TimestampUtils;
  } else {
    tmp4 = cResult[1];
  }
  if (null == tmp4) {
    return null;
  } else {
    if (cResult[2] !== tmp4.formatted) {
      const obj2 = { text: tmp4.formatted };
      const tmp9 = options(closure_12, obj2);
      cResult[2] = tmp4.formatted;
      cResult[3] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[3];
    }
    if (description == null) {
      description = "";
    }
    if (cResult[4] !== description) {
      const obj3 = { text: description };
      const tmp12 = options(TableRowTrailingText.TableRowTrailingText, obj3);
      cResult[4] = description;
      cResult[5] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === onPress) {
      if (cResult[7] === tmp6) {
        if (cResult[8] === tmp10) {
          let tmp13 = cResult[9];
        }
        return tmp13;
      }
    }
    const obj4 = { onPress, accessibilityRole: "menuitem", label: tmp6, trailing: tmp10 };
    const tmp15 = options(TableRow.TableRow, obj4);
    cResult[6] = onPress;
    cResult[7] = tmp6;
    cResult[8] = tmp10;
    cResult[9] = tmp15;
    tmp13 = tmp15;
  }
}) : (function Timestamp(description) {
  let str = description.description;
  ({ mention, onPress } = description);
  const result = TimestampUtils.formatTimestampMention(mention);
  let tmp5Result = null;
  if (null != result) {
    const obj2 = { onPress, accessibilityRole: "menuitem", label: null, trailing: null };
    const obj3 = { text: result.formatted };
    obj2.label = options(closure_12, obj3);
    if (str == null) {
      str = "";
    }
    const obj4 = { text: str };
    obj2.trailing = options(TableRowTrailingText.TableRowTrailingText, obj4);
    tmp5Result = options(TableRow.TableRow, obj2);
  }
  return tmp5Result;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj10;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;