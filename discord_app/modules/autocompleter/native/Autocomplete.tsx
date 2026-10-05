// === Module 12024: Autocomplete ===

// Module 12024 (Autocomplete)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2017 */;
import StringUtils from "StringUtils" /* 2018 */;
import Text_Text from "Text/Text" /* 4886 */;
import useChannelName from "useChannelName" /* 5043 */;
import TimestampUtils from "TimestampUtils" /* 5807 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRowTrailingText2 from "TableRowTrailingText" /* 6002 */;
import AssetRegistryDefault from "AssetRegistry" /* 7807 */;
import UnknownGameIcon from "UnknownGameIcon" /* 8248 */;
import Form from "Form" /* 8895 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10072 */;
import StickersHooks from "StickersHooks" /* 10111 */;
import StickerDefault from "Sticker" /* 10127 */;
import ChannelAutocompleteEmojiUpsellDefault from "ChannelAutocompleteEmojiUpsell" /* 12025 */;
import GameSearchRowExperimentDefault from "GameSearchRowExperiment" /* 12026 */;
import GamePlatformBadgeRowDefault from "GamePlatformBadgeRow" /* 12027 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let label, user;

let Fonts;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let tmp15;
const View = react_native.View;
({ ChannelTypes: metroImportAll, Fonts } = Constants);
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, leading: obj3, trailing: obj4, username: obj5, emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: obj6, stickerContainer: size, commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: obj7, autocompleteIcon: { opacity: 0.6 }, gameIcon: size1, labelRow: obj8 };
obj2 = { height: AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj4 = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj6 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
size = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_11();
  if (cResult[0] === text.text) {
    let tmp5;
    if (cResult[1] === tmp4.leading) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { style: tmp4.leading, text: text.text };
  const tmp6 = React4(Form.FormRow.Label, obj2);
  cResult[0] = text.text;
  cResult[1] = tmp4.leading;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((text) => {
  const obj = { style: closure_11().leading, text: text.text };
  return React4(Form.FormRow.Label, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let guildId;
  let nick;
  let status;
  const obj = user(576);
  const cResult = obj.c(27);
  user = user.user;
  ({ nick, status, guildId } = user);
  const onPress = user.onPress;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp7;
    if (cResult[2] === user) {
      tmp7 = cResult[3];
    }
    const tmpResult = user(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === nick) {
        let tmp9;
        let tmp13;
        if (cResult[6] === user) {
          tmp9 = cResult[7];
        }
        if (cResult[8] !== tmp9) {
          const obj2 = { text: tmp9 };
          const tmp16 = closure_9(closure_12, obj2);
          cResult[8] = tmp9;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] === guildId) {
          if (cResult[11] === status) {
            let tmp17;
            if (cResult[12] === user) {
              tmp17 = cResult[13];
            }
            if (cResult[14] === tmp4.trailing) {
              let tmp20;
              if (cResult[15] === tmp4.username) {
                tmp20 = cResult[16];
              }
              if (cResult[17] === tmp4.trailing) {
                if (cResult[18] === tmp20) {
                  let tmp21;
                  if (cResult[19] === user) {
                    tmp21 = cResult[20];
                  }
                  if (cResult[21] === onPress) {
                    if (cResult[22] === tmp4.row) {
                      if (cResult[23] === tmp13) {
                        if (cResult[24] === tmp17) {
                          let tmp25;
                          if (cResult[25] === tmp21) {
                            tmp25 = cResult[26];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                  const obj4 = { DEPRECATED_style: tmp4.row, onPress, accessibilityRole: "menuitem", label: tmp13, leading: tmp17, trailing: tmp21 };
                  const tmp27 = closure_9(user(8895).FormRow, obj4);
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
              const tmp24 = closure_9(guildId(9296), obj5);
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
        const obj6 = { status, user, size: user(1188).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
        const Avatar = tmp(1188).Avatar;
        const tmp19 = closure_9(Avatar, obj6);
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
      const obj3 = guildId(4722);
      name = obj3.getName(user);
    }
    cResult[4] = stateFromStores;
    cResult[5] = nick;
    cResult[6] = user;
    cResult[7] = name;
    tmp9 = name;
  }
  const fn = function o() {
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
}) : ((user) => {
  let Avatar;
  let guildId;
  let items1;
  let nick;
  let obj4;
  let obj5;
  let onPress;
  let status;
  user = user.user;
  ({ nick, guildId } = user);
  ({ status, onPress } = user);
  const tmp = closure_11();
  const items = [RelationshipStore];
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let nickname = null;
    if (null == guildId) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    return nickname;
  });
  const obj2 = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem", label: closure_9(closure_12, { text: nick }), leading: closure_9(Avatar, obj4), trailing: closure_9(guildId(9296), obj5) };
  const FormRow = user(8895).FormRow;
  if (nick == null) {
    nick = stateFromStores;
  }
  if (nick == null) {
    const obj3 = guildId(4722);
    nick = obj3.getName(user);
  }
  obj4 = { status, user, size: user(1188).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
  Avatar = tmp2(1188).Avatar;
  obj5 = { user, usernameStyle: items1, discriminatorStyle: tmp.trailing };
  items1 = [, ];
  ({ trailing: arr2[0], username: arr2[1] } = tmp);
  return closure_9(FormRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badge;
  let description;
  let items;
  let onPress;
  let text;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  ({ text, description, badge, onPress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === badge) {
    if (cResult[1] === tmp4) {
      let tmp5;
      let tmp13;
      if (cResult[2] === text) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== description) {
        const obj2 = { text: description };
        const tmp15 = React4(TableRowTrailingText2.TableRowTrailingText, obj2);
        cResult[4] = description;
        cResult[5] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === onPress) {
        if (cResult[7] === tmp5) {
          let tmp16;
          if (cResult[8] === tmp13) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
      }
      const obj3 = { onPress, accessibilityRole: "menuitem", label: tmp5, trailing: tmp13 };
      const tmp18 = React4(TableRow2.TableRow, obj3);
      cResult[6] = onPress;
      cResult[7] = tmp5;
      cResult[8] = tmp13;
      cResult[9] = tmp18;
      tmp16 = tmp18;
    }
  }
  if (null != badge) {
    const obj4 = { style: tmp4.labelRow, children: items };
    const obj5 = { text };
    items = [React4(closure_12, obj5), badge];
    tmp8 = authStore(View, obj4);
  } else {
    const obj6 = { text };
    tmp8 = React4(closure_12, obj6);
  }
  cResult[0] = badge;
  cResult[1] = tmp4;
  cResult[2] = text;
  cResult[3] = tmp8;
  tmp5 = tmp8;
}) : ((arg0) => {
  let badge;
  let description;
  let items;
  let onPress;
  let text;
  let tmp2Result;
  ({ text, badge } = arg0);
  ({ description, onPress } = arg0);
  const obj = { onPress, accessibilityRole: "menuitem", label: tmp2Result, trailing: React4(TableRowTrailingText2.TableRowTrailingText, { text: description }) };
  const tmp = closure_11();
  const TableRow = TableRow2.TableRow;
  if (null != badge) {
    const obj2 = { style: tmp.labelRow, children: items };
    const obj3 = { text };
    items = [React4(closure_12, obj3), badge];
    tmp2Result = authStore(View, obj2);
  } else {
    const obj4 = { text };
    tmp2Result = React4(closure_12, obj4);
  }
  return React4(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  let colorString;
  let onPress;
  let showDescription;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(16);
  ({ onPress, showDescription, colorString } = name);
  name = name.name;
  const tmp4 = closure_11();
  if (cResult[0] !== colorString) {
    let tmp7;
    if (null != colorString) {
      tmp7 = { color: colorString };
      const obj2 = { color: colorString };
    }
    cResult[0] = colorString;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.leading) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    const _HermesInternal = HermesInternal;
    const combined = "@" + name;
    if (cResult[5] === tmp8) {
      let tmp11;
      let tmp14;
      let tmp15;
      if (cResult[6] === combined) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== showDescription) {
        let str2 = "";
        if (showDescription) {
          const intl = intl2.intl;
          str2 = intl.string(intl2.t.HrUmDH);
        }
        cResult[8] = showDescription;
        cResult[9] = str2;
        tmp14 = str2;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp14) {
        const obj3 = { text: tmp14 };
        const tmp17 = React4(TableRowTrailingText2.TableRowTrailingText, obj3);
        cResult[10] = tmp14;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === onPress) {
        if (cResult[13] === tmp11) {
          let tmp18;
          if (cResult[14] === tmp15) {
            tmp18 = cResult[15];
          }
          return tmp18;
        }
      }
      const obj4 = { onPress, accessibilityRole: "menuitem", label: tmp11, trailing: tmp15 };
      const tmp20 = React4(TableRow2.TableRow, obj4);
      cResult[12] = onPress;
      cResult[13] = tmp11;
      cResult[14] = tmp15;
      cResult[15] = tmp20;
      tmp18 = tmp20;
    }
    const obj5 = { style: tmp8, text: combined };
    const tmp13 = React4(Form.FormRow.Label, obj5);
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
}) : ((colorString) => {
  let Label;
  let TableRowTrailingText;
  let name;
  let obj3;
  let onPress;
  let showDescription;
  let str;
  colorString = colorString.colorString;
  ({ onPress, showDescription, name } = colorString);
  const obj = { onPress, accessibilityRole: "menuitem", label: React4(Label, obj3), trailing: React4(TableRowTrailingText, { text: str }) };
  const tmp = closure_11();
  const TableRow = TableRow2.TableRow;
  const items = [tmp.leading, ];
  let tmp5;
  Label = Form.FormRow.Label;
  if (null != colorString) {
    tmp5 = { color: colorString };
    const obj2 = { color: colorString };
  }
  items[1] = tmp5;
  str = "";
  obj3 = { style: items, text: "@" + name };
  TableRowTrailingText = TableRowTrailingText2.TableRowTrailingText;
  if (showDescription) {
    const intl = intl2.intl;
    str = intl.string(intl2.t.HrUmDH);
  }
  return React4(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let category;
  let channel;
  let onPress;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(17);
  ({ channel, category, onPress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== channel) {
    let channelIconWithGuild;
    const getGuild = GuildStore.getGuild;
    if (channel.type === metroImportAll.GUILD_CATEGORY) {
      channelIconWithGuild = AssetRegistryDefault;
    } else {
      const tmpResult = utils_ChannelUtils;
      channelIconWithGuild = tmpResult.getChannelIconWithGuild(channel, tmp7);
    }
    cResult[0] = channel;
    cResult[1] = channelIconWithGuild;
    tmp5 = channelIconWithGuild;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp11;
    let tmp13;
    let tmp17;
    if (cResult[3] === tmp4.autocompleteIcon) {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== channel) {
      const tmpResult2 = useChannelName;
      const channelName = tmpResult2.computeChannelName(channel, UserStore, RelationshipStore);
      cResult[5] = channel;
      cResult[6] = channelName;
      tmp13 = channelName;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp13) {
      const obj2 = { text: tmp13 };
      const tmp20 = React4(closure_12, obj2);
      cResult[7] = tmp13;
      cResult[8] = tmp20;
      tmp17 = tmp20;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === tmp4.trailing) {
      let tmp23;
      if (cResult[10] === (null != category && category.name)) {
        tmp23 = cResult[11];
      }
      if (cResult[12] === tmp11) {
        if (cResult[13] === onPress) {
          if (cResult[14] === tmp17) {
            let tmp26;
            if (cResult[15] === tmp23) {
              tmp26 = cResult[16];
            }
            return tmp26;
          }
        }
      }
      const obj3 = { onPress, accessibilityRole: "menuitem", leading: tmp11, label: tmp17, trailing: tmp23 };
      const tmp28 = React4(Form.FormRow, obj3);
      cResult[12] = tmp11;
      cResult[13] = onPress;
      cResult[14] = tmp17;
      cResult[15] = tmp23;
      cResult[16] = tmp28;
      tmp26 = tmp28;
    }
    const obj4 = { style: tmp4.trailing, variant: "text-sm/medium", color: "text-muted", children: null != category && category.name };
    const tmp25 = React4(Text_Text.Text, obj4);
    cResult[9] = tmp4.trailing;
    cResult[10] = null != category && category.name;
    cResult[11] = tmp25;
    tmp23 = tmp25;
  }
  const obj5 = { source: tmp5, style: tmp4.autocompleteIcon };
  const tmp12 = React4(native.Icon, obj5);
  cResult[2] = tmp5;
  cResult[3] = tmp4.autocompleteIcon;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((onPress) => {
  let Text;
  let category;
  let channel;
  let channelIconWithGuild;
  let name;
  let obj5;
  ({ channel, category } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_11();
  if (channel.type === metroImportAll.GUILD_CATEGORY) {
    channelIconWithGuild = AssetRegistryDefault;
  } else {
    const obj = utils_ChannelUtils;
    channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
  }
  const obj2 = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
  const tmp9 = React4(native.Icon, obj2);
  const obj3 = useChannelName;
  const channelName = obj3.computeChannelName(channel, UserStore, RelationshipStore);
  const obj4 = { onPress, accessibilityRole: "menuitem", leading: tmp9, label: React4(closure_12, { text: channelName }), trailing: React4(Text, obj5) };
  const FormRow = Form.FormRow;
  obj5 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: name };
  name = null != category;
  Text = Text_Text.Text;
  if (name) {
    name = category.name;
  }
  return React4(FormRow, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  let onPress;
  let surrogates;
  let tmp16;
  let tmp6;
  let url;
  const obj = react2;
  const cResult = obj.c(20);
  ({ url, surrogates, onPress } = name);
  name = name.name;
  const tmp4 = closure_11();
  if ("" !== url) {
    if (cResult[0] === tmp4.emoji) {
      let tmp9;
      let tmp10;
      if (cResult[1] === tmp4.emojiImage) {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== url) {
        const obj2 = { uri: url };
        cResult[3] = url;
        cResult[4] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp9) {
        let tmp11;
        if (cResult[6] === tmp10) {
          tmp11 = cResult[7];
        }
        tmp6 = tmp11;
      }
      const obj3 = { style: tmp9, source: tmp10 };
      const tmp14 = React4(FastImageDefault, obj3);
      cResult[5] = tmp9;
      cResult[6] = tmp10;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    }
    const items = [, ];
    ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp4);
    cResult[0] = tmp4.emoji;
    cResult[1] = tmp4.emojiImage;
    cResult[2] = items;
    tmp9 = items;
  } else {
    if (cResult[8] === tmp4.emoji) {
      let tmp5;
      if (cResult[9] === tmp4.emojiText) {
        tmp5 = cResult[10];
      }
      if (cResult[11] === surrogates) {
        if (cResult[12] === tmp5) {
          tmp6 = cResult[13];
        }
      }
      const obj4 = { style: tmp5, allowFontScaling: false, children: surrogates };
      const tmp8 = React4(native.LegacyText, obj4);
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
  const combined = ":" + name + ":";
  if (cResult[14] !== combined) {
    const obj5 = { text: combined };
    const tmp19 = React4(closure_12, obj5);
    cResult[14] = combined;
    cResult[15] = tmp19;
    tmp16 = tmp19;
  } else {
    tmp16 = cResult[15];
  }
  if (cResult[16] === tmp6) {
    if (cResult[17] === onPress) {
      let tmp20;
      if (cResult[18] === tmp16) {
        tmp20 = cResult[19];
      }
      return tmp20;
    }
  }
  const tmp21 = React4(Form.FormRow, { onPress, accessibilityRole: "menuitem", leading: tmp6, label: tmp16 });
  cResult[16] = tmp6;
  cResult[17] = onPress;
  cResult[18] = tmp16;
  cResult[19] = tmp21;
  tmp20 = tmp21;
}) : ((url) => {
  let items;
  let items1;
  let name;
  let obj3;
  let obj5;
  let onPress;
  let surrogates;
  let tmp2;
  let tmp5;
  url = url.url;
  ({ name, surrogates, onPress } = url);
  const tmp = closure_11();
  if ("" !== url) {
    const obj2 = { style: items, source: obj3 };
    items = [, ];
    ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
    obj3 = { uri: url };
    tmp5 = React4(FastImageDefault, obj2);
    tmp2 = React4;
  } else {
    tmp2 = React4;
    const obj = { style: items1, allowFontScaling: false, children: surrogates };
    items1 = [, ];
    ({ emoji: arr[0], emojiText: arr[1] } = tmp);
    tmp5 = React4(native.LegacyText, obj);
  }
  const obj4 = { onPress, accessibilityRole: "menuitem", leading: tmp5, label: tmp2(closure_12, obj5) };
  obj5 = { text: ":" + name + ":" };
  const FormRow = Form.FormRow;
  return tmp2(FormRow, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onPress;
  let results;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  ({ results, onPress } = arg0);
  if (cResult[0] !== results) {
    const obj2 = { results };
    const tmp7 = React4(ChannelAutocompleteEmojiUpsellDefault, obj2);
    cResult[0] = results;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === onPress) {
    let tmp8;
    if (cResult[3] === tmp4) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = React4(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: tmp4 });
  cResult[2] = onPress;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let onPress;
  let results;
  ({ results, onPress } = arg0);
  const obj = { onPress, accessibilityRole: "menuitem", label: React4(ChannelAutocompleteEmojiUpsellDefault, { results }) };
  const FormRow = Form.FormRow;
  return React4(FormRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let choice;
  let onPress;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  ({ choice, onPress } = arg0);
  if (cResult[0] !== choice.displayName) {
    const obj2 = { text: choice.displayName };
    const tmp7 = React4(closure_12, obj2);
    cResult[0] = choice.displayName;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === onPress) {
    let tmp8;
    if (cResult[3] === tmp4) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = React4(Form.FormRow, { onPress, accessibilityRole: "menuitem", label: tmp4 });
  cResult[2] = onPress;
  cResult[3] = tmp4;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let choice;
  let obj2;
  let onPress;
  ({ choice, onPress } = arg0);
  const obj = { onPress, accessibilityRole: "menuitem", label: React4(closure_12, obj2) };
  obj2 = { text: choice.displayName };
  const FormRow = Form.FormRow;
  return React4(FormRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((isInteracting) => {
  let onLongPress;
  let onPress;
  let sticker;
  const obj = react2;
  const cResult = obj.c(8);
  ({ sticker, onPress, onLongPress } = isInteracting);
  isInteracting = isInteracting.isInteracting;
  const tmp4 = closure_11();
  const obj2 = StickersHooks;
  const shouldAnimateSticker = obj2.useShouldAnimateSticker(isInteracting);
  if (cResult[0] === shouldAnimateSticker) {
    let tmp6;
    if (cResult[1] === sticker) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === onLongPress) {
      if (cResult[4] === onPress) {
        if (cResult[5] === tmp4.stickerContainer) {
          let tmp8;
          if (cResult[6] === tmp6) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
    }
    const obj3 = { accessibilityRole: "menuitem", style: tmp4.stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: tmp6 };
    const tmp10 = React4(Pressables.PressableOpacity, obj3);
    cResult[3] = onLongPress;
    cResult[4] = onPress;
    cResult[5] = tmp4.stickerContainer;
    cResult[6] = tmp6;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  const tmp7 = React4(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker });
  cResult[0] = shouldAnimateSticker;
  cResult[1] = sticker;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  let isInteracting;
  let onLongPress;
  let onPress;
  let sticker;
  ({ sticker, onPress, onLongPress, isInteracting } = arg0);
  const tmp = closure_11();
  const obj = StickersHooks;
  const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
  const obj2 = { accessibilityRole: "menuitem", style: tmp.stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: React4(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker }) };
  const PressableOpacity = Pressables.PressableOpacity;
  return React4(PressableOpacity, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = _modDef12;
    const randomResult = obj2.random(100, 300);
    cResult[0] = randomResult;
    first = randomResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { width: first };
    cResult[1] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.commandChoiceLoadingItem) {
    const obj4 = { style: items };
    items = [tmp4.commandChoiceLoadingItem, tmp8];
    const tmp12 = React4(View, obj4);
    cResult[2] = tmp4.commandChoiceLoadingItem;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.commandChoiceLoadingContainer) {
    let tmp13;
    if (cResult[5] === tmp9) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.row) {
      let tmp15;
      if (cResult[8] === tmp13) {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
    const obj5 = { DEPRECATED_style: tmp4.row, leading: tmp13 };
    const tmp17 = React4(Form.FormRow, obj5);
    cResult[7] = tmp4.row;
    cResult[8] = tmp13;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  }
  const obj6 = { style: tmp4.commandChoiceLoadingContainer, children: tmp9 };
  const tmp14 = React4(View, obj6);
  cResult[4] = tmp4.commandChoiceLoadingContainer;
  cResult[5] = tmp9;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  let items;
  let obj2;
  let obj3;
  const tmp = closure_11();
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.random(100, 300);
  }, []);
  let obj = { DEPRECATED_style: tmp.row, leading: React4(View, obj2) };
  obj2 = { style: tmp.commandChoiceLoadingContainer, children: React4(View, obj3) };
  obj3 = { style: items };
  items = [tmp.commandChoiceLoadingItem, { width: memo }];
  const FormRow = Form.FormRow;
  return React4(FormRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  label = label.label;
  if (cResult[0] !== label) {
    const obj2 = { label: React4(closure_12, obj3) };
    obj3 = { text: label };
    const FormRow = Form.FormRow;
    const tmp7 = React4(FormRow, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((label) => {
  label = label.label;
  const obj = { label: React4(closure_12, { text: label }) };
  const FormRow = Form.FormRow;
  return React4(FormRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let obj9 = {
  User: tmp5,
  Global: tmp6,
  Role: tmp7,
  Channel: tmp8,
  Emoji: tmp9,
  EmojiPremiumUpsell: tmp10,
  Choice: tmp11,
  ChoiceLoading: tmp13,
  Sticker: tmp12,
  Label: tmp14,
  Game: ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    let first;
    let game;
    let obj9;
    let onPress;
    let tmp9Result;
    const obj = react2;
    const cResult = obj.c(15);
    ({ game, onPress } = arg0);
    const tmp4 = closure_11();
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { location: "game_mention_autocomplete_native" };
      cResult[0] = obj2;
      first = obj2;
    } else {
      first = cResult[0];
    }
    const obj3 = GameSearchRowExperimentDefault;
    const extraChromeEnabled = obj3.useConfig(first).extraChromeEnabled;
    if (cResult[1] === game.icon) {
      if (cResult[2] === game.id) {
        let tmp7;
        let tmp11;
        if (cResult[3] === tmp4.gameIcon) {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== game.name) {
          const obj4 = { text: game.name };
          const tmp14 = React4(closure_12, obj4);
          cResult[5] = game.name;
          cResult[6] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] === extraChromeEnabled) {
          let tmp15;
          if (cResult[8] === game.platformAvailability) {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp7) {
            if (cResult[11] === onPress) {
              if (cResult[12] === tmp11) {
                let tmp18;
                if (cResult[13] === tmp15) {
                  tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
          }
          const obj5 = { onPress, accessibilityRole: "menuitem", leading: tmp7, label: tmp11, trailing: tmp15 };
          const tmp20 = React4(Form.FormRow, obj5);
          cResult[10] = tmp7;
          cResult[11] = onPress;
          cResult[12] = tmp11;
          cResult[13] = tmp15;
          cResult[14] = tmp20;
          tmp18 = tmp20;
        }
        let tmp16;
        if (extraChromeEnabled) {
          const obj6 = { platforms: game.platformAvailability };
          tmp16 = React4(GamePlatformBadgeRowDefault, obj6);
        }
        cResult[7] = extraChromeEnabled;
        cResult[8] = game.platformAvailability;
        cResult[9] = tmp16;
        tmp15 = tmp16;
      }
    }
    const tmp8 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    const tmpResult = StringUtils;
    if (tmpResult.isNullOrEmpty(tmp8)) {
      const obj7 = { size: "sm", style: tmp4.gameIcon };
      tmp9Result = React4(UnknownGameIcon.UnknownGameIcon, obj7);
    } else {
      const obj8 = { style: tmp4.gameIcon, source: obj9 };
      obj9 = { uri: tmp8 };
      tmp9Result = React4(FastImageDefault, obj8);
    }
    cResult[1] = game.icon;
    cResult[2] = game.id;
    cResult[3] = tmp4.gameIcon;
    cResult[4] = tmp9Result;
    tmp7 = tmp9Result;
  }) : ((game) => {
    let obj5;
    let obj7;
    let tmp6Result;
    let tmp8;
    let tmp8Result;
    game = game.game;
    const onPress = game.onPress;
    const tmp = closure_11();
    const obj = GameSearchRowExperimentDefault;
    const extraChromeEnabled = obj.useConfig({ location: "game_mention_autocomplete_native" }).extraChromeEnabled;
    const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    const obj2 = StringUtils;
    if (obj2.isNullOrEmpty(tmp4)) {
      const obj3 = { size: "sm", style: tmp.gameIcon };
      tmp6Result = React4(UnknownGameIcon.UnknownGameIcon, obj3);
      tmp8 = React4;
    } else {
      const obj4 = { style: tmp.gameIcon, source: obj5 };
      obj5 = { uri: tmp4 };
      tmp6Result = React4(FastImageDefault, obj4);
      tmp8 = React4;
    }
    const obj6 = { onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: tmp8(closure_12, obj7), trailing: tmp8Result };
    obj7 = { text: game.name };
    const FormRow = Form.FormRow;
    tmp8Result = undefined;
    if (extraChromeEnabled) {
      const obj8 = { platforms: game.platformAvailability };
      tmp8Result = tmp8(GamePlatformBadgeRowDefault, obj8);
    }
    return tmp8(FormRow, obj6);
  }),
  Timestamp: tmp15
};
tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let description;
  let mention;
  let onPress;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ mention, description, onPress } = arg0);
  if (cResult[0] !== mention) {
    const tmpResult = TimestampUtils;
    const result = tmpResult.formatTimestampMention(mention);
    cResult[0] = mention;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  if (null == tmp4) {
    return null;
  } else {
    let tmp6;
    let tmp10;
    if (cResult[2] !== tmp4.formatted) {
      const obj2 = { text: tmp4.formatted };
      const tmp9 = React4(closure_12, obj2);
      cResult[2] = tmp4.formatted;
      cResult[3] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[3];
    }
    if (description == null) {
      description = "";
    }
    if (cResult[4] !== description) {
      const obj3 = { text: description };
      const tmp12 = React4(TableRowTrailingText2.TableRowTrailingText, obj3);
      cResult[4] = description;
      cResult[5] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === onPress) {
      if (cResult[7] === tmp6) {
        let tmp13;
        if (cResult[8] === tmp10) {
          tmp13 = cResult[9];
        }
        return tmp13;
      }
    }
    const obj4 = { onPress, accessibilityRole: "menuitem", label: tmp6, trailing: tmp10 };
    const tmp15 = React4(TableRow2.TableRow, obj4);
    cResult[6] = onPress;
    cResult[7] = tmp6;
    cResult[8] = tmp10;
    cResult[9] = tmp15;
    tmp13 = tmp15;
  }
}) : ((description) => {
  let TableRowTrailingText;
  let mention;
  let obj3;
  let obj4;
  let onPress;
  let str = description.description;
  ({ mention, onPress } = description);
  const obj = TimestampUtils;
  const result = obj.formatTimestampMention(mention);
  let tmp5Result = null;
  if (null != result) {
    const obj2 = { onPress, accessibilityRole: "menuitem", label: React4(closure_12, obj3), trailing: React4(TableRowTrailingText, obj4) };
    obj3 = { text: result.formatted };
    const TableRow = TableRow2.TableRow;
    TableRowTrailingText = TableRowTrailingText2.TableRowTrailingText;
    if (str == null) {
      str = "";
    }
    obj4 = { text: str };
    tmp5Result = React4(TableRow, obj2);
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
size = size_mod;
let result = size.fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj9;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;