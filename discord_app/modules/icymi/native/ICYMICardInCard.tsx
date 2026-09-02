// === Module 16312: CutoutGuildIconWithUserCustom ===

// Module 16312 (CutoutGuildIconWithUserCustom)
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import GuildIconSizes from "GuildIconSizes" /* 6012 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 6012 */;
import SolidCutout from "SolidCutout" /* 8106 */;
import SolidCutoutDefault from "SolidCutout" /* 8106 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import closure_7 from "createGuildRecordFromRust" /* 1908 */;
import { DEFAULT_ROLE_COLOR_HEX } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16271 */;

require = arg1;
function CutoutGuildIconWithUserCustom(guild) {
  guild = guild.guild;
  let obj = { style: { width: 40, height: 40 }, children: null };
  obj = { cutouts: null, children: null };
  obj = { shape: null, x: 18, y: 18, size: 24 };
  const tmp = callback3();
  obj[0] = SolidCutout.CutoutShape.Circle;
  const items = [obj];
  obj[0] = items;
  obj1 = { guild, size: null };
  const tmp2 = SolidCutoutDefault;
  obj1[1] = GuildIconSizes.GuildIconSizes.SMALL_32;
  obj[1] = callback(GuildIconSizesDefault, obj1);
  const items1 = [callback(tmp2, obj), ];
  const tmp3 = GuildIconSizesDefault;
  items1[1] = callback(Button.Avatar, { animate: true, style: tmp.authorAvatar, guildId: guild.id, user: guild.author, size: Button.AvatarSizes.XSMALL_20 });
  obj[1] = items1;
  return callback2(View, obj);
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  obj = { container: obj, content: { flex: 1, overflow: "hidden" }, channelNameAndAccessory: null, channelNameAndAccessoryLarge: null, header: null, headerInfo: null, title: null, titleLeft: null, subTitleContainer: null, subtitle: null, genContentSubtitle: null, genContentSubtitleChannel: null, subtitleTrailing: null, separator: null, normalContent: null, authorAvatar: null };
  obj = { marginTop: marginHorizontal.margin };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: ThemesDefault.space.PX_4, marginHorizontal: marginHorizontal.margin };
  obj[2] = obj;
  obj[3] = { flexDirection: "column", paddingBottom: ThemesDefault.space.PX_4, marginHorizontal: marginHorizontal.margin };
  obj[4] = { flexDirection: "row", flexGrow: 1 };
  obj1 = { flexDirection: "column", paddingBottom: ThemesDefault.space.PX_4, marginHorizontal: marginHorizontal.margin };
  obj[5] = { flexGrow: 1, flexShrink: 1, marginLeft: ThemesDefault.space.PX_12 };
  obj[6] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj[7] = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  const obj2 = { flexGrow: 1, flexShrink: 1, marginLeft: ThemesDefault.space.PX_12 };
  obj[8] = { flexDirection: "row", justifyContent: "space-between", borderRadius: ThemesDefault.radii.sm };
  obj[9] = { flexShrink: 1, flexGrow: 0, width: "100%" };
  obj[10] = { flexDirection: "row", alignItems: "center", gap: 2 };
  obj[11] = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj[12] = { paddingVertical: 1 };
  const obj3 = { flexDirection: "row", justifyContent: "space-between", borderRadius: ThemesDefault.radii.sm };
  obj[13] = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  const obj4 = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[14] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_STRONG, flexShrink: 0 };
  obj[15] = { position: "absolute", right: 0, bottom: 0 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMICardInCard.tsx");

export default function ICYMICardInCard(message) {
  message = message.message;
  const actionLabel = message.actionLabel;
  let id = message.id;
  const interactionType = message.interactionType;
  const onHeaderPress = message.onHeaderPress;
  const channelId = message.channelId;
  let flag = message.hideTimestamp;
  ({ children, timestamp, onHeaderLongPress, guildId } = message);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = message.shouldFeatureUser;
  if (flag2 === undefined) {
    flag2 = false;
  }
  closure_7 = undefined;
  let fontScale;
  let stateFromStores;
  let guild_id;
  let stateFromStores1;
  let stateFromStores2;
  let displayNameStylesFont;
  c14 = undefined;
  closure_15 = undefined;
  const tmp = stateFromStores2();
  closure_7 = tmp;
  let obj = message(id[12]);
  fontScale = obj.useFontScale();
  obj1 = message(id[13]);
  let items = [channelId];
  let items1 = [channelId];
  stateFromStores = obj1.useStateFromStores(items, () => channelId.getChannel(channelId), items1);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let tmp2Result = tmp2(tmp3[13]);
  let items2 = [closure_7];
  let items3 = [guild_id];
  stateFromStores1 = tmp2Result.useStateFromStores(items2, () => {
    let guild = null;
    if (null != guild_id) {
      guild = guild.getGuild(tmp);
    }
    return guild;
  }, items3);
  tmp2Result = tmp2(tmp3[13]);
  let items4 = [flag2];
  let items5 = [flag2, guild_id, message];
  stateFromStores2 = tmp2Result.useStateFromStores(items4, () => {
    let member = null;
    if (flag2) {
      member = null;
      if (null != guild_id) {
        id = undefined;
        if (message != null) {
          id = tmp3.author.id;
        }
        member = null;
        if (null != id) {
          member = flag2.getMember(tmp2, tmp3.author.id);
        }
      }
    }
    return member;
  }, items5);
  id = undefined;
  if (message != null) {
    let author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  let tmp10 = actionLabel(id[14]);
  const tmp10Result = actionLabel(id[14])({ userId: id });
  displayNameStylesFont = message(id[15]).useDisplayNameStylesFont({ displayNameStyles: tmp10Result });
  message(id[16]);
  if (stateFromStores != null) {
    const id2 = stateFromStores.id;
  }
  if (message != null) {
    let author2 = message.author;
  }
  let tmp16 = null;
  if (flag2) {
    author = undefined;
    if (message != null) {
      author = message.author;
    }
    tmp16 = null;
    if (null != author) {
      tmp16 = null;
      if (null != guild_id) {
        tmp16 = null;
        if (null != stateFromStores) {
          tmp16 = tmp15;
        }
      }
    }
  }
  c14 = tmp16;
  let obj5 = interactionType;
  const items6 = [stateFromStores1, flag2, ];
  let author1;
  if (message != null) {
    author1 = message.author;
  }
  items6[2] = author1;
  const items7 = [stateFromStores1];
  const memo = interactionType.useMemo(() => {
    if (tmp2) {
      return null;
    } else {
      if (!flag2) {
        let obj = { guild: null, size: null };
        obj[0] = tmp;
        obj[1] = message(id[10]).GuildIconSizes.NORMAL;
        let tmp10 = stateFromStores(actionLabel(id[10]), obj);
        const tmp8 = actionLabel(id[10]);
      } else {
        let author = message;
        author = undefined;
        if (message != null) {
          author = author.author;
        }
      }
      obj = { guild: null, author: null };
      obj[0] = tmp;
      author = author.author;
      obj[1] = author;
      tmp10 = stateFromStores(displayNameStylesFont, obj);
    }
  }, items6);
  const memo1 = obj5.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      const obj = { style: null, lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      obj[0] = { maxWidth: 225 };
      obj[4] = tmp.name;
      tmp2 = stateFromStores(message(id[17]).Text, obj, tmp.id);
    }
    return tmp2;
  }, items7);
  const tmp21 = actionLabel(id[18])(stateFromStores);
  closure_15 = tmp21;
  const items8 = [flag2, , , , , , , , , , , ];
  author2 = undefined;
  if (message != null) {
    author2 = message.author;
  }
  items8[1] = author2;
  items8[2] = guild_id;
  items8[3] = stateFromStores;
  items8[4] = tmp21;
  items8[5] = tmp16;
  items8[6] = stateFromStores2;
  items8[7] = displayNameStylesFont;
  ({ genContentSubtitle: arr9[8], genContentSubtitleChannel: arr9[9] } = tmp);
  items8[10] = onHeaderPress;
  items8[11] = actionLabel;
  const items9 = [stateFromStores1, stateFromStores, id, interactionType];
  const memo2 = obj5.useMemo(() => {
    if (flag2) {
      let author;
      if (message != null) {
        author = message.author;
      }
      if (null != author) {
        if (null != guild_id) {
          if (null != stateFromStores) {
            if (null != c14) {
              let colorString;
              if (stateFromStores2 != null) {
                colorString = stateFromStores2.colorString;
              }
              if (colorString == null) {
                colorString = fontScale;
              }
              let obj7 = message(id[19]);
              let obj = { style: null, children: null };
              obj[0] = guild.genContentSubtitle;
              const iconForChannel = obj7.getIconForChannel(tmp4);
              obj = { color: null };
              obj[0] = colorString;
              const items = [obj, ];
              let tmp42;
              if (null != displayNameStylesFont) {
                obj1 = { fontFamily: null };
                obj1[0] = tmp41;
                tmp42 = obj1;
              }
              const obj2 = { variant: "text-sm/semibold", style: null, children: null };
              items[1] = tmp42;
              obj2[1] = items;
              let combined = arr;
              if (arr.length > 20) {
                const _HermesInternal = HermesInternal;
                combined = "" + arr.slice(0, 17) + "...";
              }
              obj2[2] = combined;
              const items1 = [stateFromStores(message(id[17]).Text, obj2), , ];
              const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl2 = message(id[20]).intl;
              obj3[2] = intl2.string(message(id[20]).t.CHUAYk);
              items1[1] = stateFromStores(message(id[17]).Text, obj3);
              const obj4 = { style: null, children: null };
              obj4[0] = guild.genContentSubtitleChannel;
              const items2 = [stateFromStores(iconForChannel, { size: "xs", color: "text-default" }), ];
              const obj5 = { variant: "text-sm/medium", color: "text-default", onPress: null, style: null, lineClamp: 1, ellipsizeMode: "tail", children: null };
              obj5[2] = onHeaderPress;
              obj5[3] = { flex: 1 };
              obj5[6] = closure_15;
              items2[1] = stateFromStores(message(id[17]).Text, obj5);
              obj4[1] = items2;
              items1[2] = guild_id(onHeaderPress, obj4);
              obj[1] = items1;
              return guild_id(onHeaderPress, obj);
            }
          }
        }
      }
    }
    if (null != stateFromStores) {
      obj = message(id[19]);
      let TextIcon = obj.getIconForChannel(tmp5);
    } else {
      TextIcon = message(id[21]).TextIcon;
    }
    const obj6 = { style: guild.genContentSubtitle, children: null };
    obj7 = { variant: "text-sm/medium", color: "text-default", children: actionLabel };
    const items3 = [stateFromStores(message(id[17]).Text, obj7), ];
    let tmp13 = null;
    if (null != stateFromStores) {
      const obj8 = { children: null };
      const obj9 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl = message(id[20]).intl;
      obj9[2] = intl.string(message(id[20]).t.CHUAYk);
      const items4 = [stateFromStores(message(id[17]).Text, obj9), ];
      const obj10 = { style: null, children: null };
      obj10[0] = guild.genContentSubtitleChannel;
      const items5 = [stateFromStores(TextIcon, { size: "xs", color: "text-default" }), ];
      const obj11 = { variant: "text-sm/medium", color: "text-default", onPress: null, style: null, lineClamp: 1, ellipsizeMode: "tail", children: null };
      obj11[2] = onHeaderPress;
      obj11[3] = { flex: 1 };
      obj11[6] = closure_15;
      items5[1] = stateFromStores(message(id[17]).Text, obj11);
      obj10[1] = items5;
      items4[1] = guild_id(onHeaderPress, obj10);
      obj8[0] = items4;
      tmp13 = guild_id(stateFromStores1, obj8);
    }
    items3[1] = tmp13;
    obj6[1] = items3;
    return guild_id(onHeaderPress, obj6);
  }, items8);
  const items10 = [fontScale, , ];
  ({ channelNameAndAccessoryLarge: arr11[1], channelNameAndAccessory: arr11[2] } = tmp);
  const callback = obj5.useCallback(() => {
    let tmp2 = null != stateFromStores1;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      let obj = message(id[22]);
      obj = { guildId: null, channelId: null, id: null, type: null };
      obj[0] = stateFromStores1.id;
      obj[1] = stateFromStores.id;
      obj[2] = id;
      obj[3] = interactionType;
      const result = obj.openDetailsActionSheet(obj);
    }
  }, items9);
  obj = { style: tmp.container, children: null };
  const memo3 = obj5.useMemo(() => {
    if (fontScale > 1.8) {
      let channelNameAndAccessory = guild.channelNameAndAccessoryLarge;
    } else {
      channelNameAndAccessory = guild.channelNameAndAccessory;
    }
    return channelNameAndAccessory;
  }, items10);
  obj = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: null };
  obj1 = { style: memo3, children: null };
  let obj2 = { style: tmp.header, children: null };
  const items11 = [memo, ];
  let obj3 = { style: tmp.headerInfo, children: null };
  let obj4 = { style: tmp.title, children: null };
  obj5 = { style: tmp.titleLeft, children: null };
  const items12 = [memo1, ];
  let tmp28Result = !flag;
  if (!flag) {
    let obj6 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
    obj6[3] = tmp2(tmp3[24]).getRelativeTimestamp(timestamp);
    tmp28Result = tmp28(tmp2(tmp3[17]).Text, obj6);
    const tmp2Result3 = tmp2(tmp3[24]);
  }
  items12[1] = tmp28Result;
  obj5[1] = items12;
  const items13 = [guild_id(onHeaderPress, obj5), ];
  let obj7 = { onPress: callback, style: tmp.subtitleTrailing, hitSlop: 8, children: null };
  const tmp2Result1 = message(id[15]);
  obj7[3] = stateFromStores(message(id[25]).MoreHorizontalIcon, { color: actionLabel(id[8]).colors.ICON_MUTED, size: "sm" });
  items13[1] = stateFromStores(message(id[23]).PressableOpacity, obj7);
  obj4[1] = items13;
  const items14 = [guild_id(onHeaderPress, obj4), ];
  let obj8 = { color: actionLabel(id[8]).colors.ICON_MUTED, size: "sm" };
  items14[1] = stateFromStores(onHeaderPress, { style: tmp.subTitleContainer, children: stateFromStores(onHeaderPress, obj10) });
  obj3[1] = items14;
  items11[1] = guild_id(onHeaderPress, obj3);
  obj2[1] = items11;
  obj1[1] = guild_id(onHeaderPress, obj2);
  obj[3] = stateFromStores(onHeaderPress, obj1);
  const items15 = [stateFromStores(message(id[23]).PressableHighlight, obj), stateFromStores(onHeaderPress, { style: tmp.normalContent, children })];
  obj[1] = items15;
  return guild_id(onHeaderPress, obj);
};