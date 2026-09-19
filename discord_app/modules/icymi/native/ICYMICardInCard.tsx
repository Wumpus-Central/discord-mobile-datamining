// discord_app/modules/icymi/native/ICYMICardInCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TextIcon2 from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import openDetailsActionSheet from "util/openDetailsActionSheet.tsx";
import getIconForChannel from "util/getIconForChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

require = fn;
function CutoutGuildIconWithUserCustom(guild) {
  guild = guild.guild;
  const obj = { style: { width: 40, height: 40 }, children: null };
  const obj2 = { cutouts: null, children: null };
  const point = { shape: null, x: 18, y: 18, size: 24 };
  const tmp = closure_12();
  point.shape = ClipView.CutoutShape.Circle;
  const items = [point];
  obj2.cutouts = items;
  const obj3 = { guild, size: null };
  const tmp2 = ClipViewDefault;
  obj3.size = GuildIcon.GuildIconSizes.SMALL_32;
  obj2.children = React7(GuildIconDefault, obj3);
  const items1 = [React7(tmp2, obj2)];
  items1[1] = React7(native.Avatar, {
    animate: true,
    style: tmp.authorAvatar,
    guildId: guild.id,
    user: guild.author,
    size: native.AvatarSizes.XSMALL_20,
  });
  obj.children = items1;
  return closure_1_10(View, obj);
}
const View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1074).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createICYMIStyles = fn(16785);
let closure_12 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = {
    container: { marginTop: marginHorizontal.margin },
    content: { flex: 1, overflow: "hidden" },
    channelNameAndAccessory: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: nativeDefault.space.PX_4,
      marginHorizontal: marginHorizontal.margin,
    },
    channelNameAndAccessoryLarge: null,
    header: null,
    headerInfo: null,
    title: null,
    titleLeft: null,
    subTitleContainer: null,
    subtitle: null,
    genContentSubtitle: null,
    genContentSubtitleChannel: null,
    subtitleTrailing: null,
    separator: null,
    normalContent: null,
    authorAvatar: null,
  };
  const obj2 = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: nativeDefault.space.PX_4,
    marginHorizontal: marginHorizontal.margin,
  };
  obj.channelNameAndAccessoryLarge = {
    flexDirection: "column",
    paddingBottom: nativeDefault.space.PX_4,
    marginHorizontal: marginHorizontal.margin,
  };
  obj.header = { flexDirection: "row", flexGrow: 1 };
  const obj3 = {
    flexDirection: "column",
    paddingBottom: nativeDefault.space.PX_4,
    marginHorizontal: marginHorizontal.margin,
  };
  obj.headerInfo = { flexGrow: 1, flexShrink: 1, marginLeft: nativeDefault.space.PX_12 };
  obj.title = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj.titleLeft = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  const obj4 = { flexGrow: 1, flexShrink: 1, marginLeft: nativeDefault.space.PX_12 };
  obj.subTitleContainer = {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: nativeDefault.radii.sm,
  };
  obj.subtitle = { flexShrink: 1, flexGrow: 0, width: "100%" };
  obj.genContentSubtitle = { flexDirection: "row", alignItems: "center", gap: 2 };
  obj.genContentSubtitleChannel = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj.subtitleTrailing = { paddingVertical: 1 };
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.separator = size;
  const obj5 = { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm };
  obj.normalContent = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_STRONG, flexShrink: 0 };
  obj.authorAvatar = { position: "absolute", right: 0, bottom: 0 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMICardInCard.tsx");

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
  let stateFromStores1;
  let stateFromStores2;
  let displayNameStylesFont;
  c14 = undefined;
  children = undefined;
  const tmp = stateFromStores2();
  closure_7 = tmp;
  const fontScale = message(id[12]).useFontScale();
  let obj = message(id[12]);
  let items = [channelId];
  let items1 = [channelId];
  const stateFromStores = message(id[13]).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let obj2 = message(id[13]);
  let items2 = [closure_7];
  let items3 = [guild_id];
  stateFromStores1 = message(id[13]).useStateFromStores(
    items2,
    () => {
      let guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    },
    items3,
  );
  const tmp2Result = message(id[13]);
  let items4 = [flag2];
  let items5 = [flag2, guild_id, message];
  stateFromStores2 = message(id[13]).useStateFromStores(
    items4,
    () => {
      let member = null;
      if (flag2) {
        member = null;
        if (null != guild_id) {
          id = undefined;
          if (message != null) {
            id = message.author.id;
          }
          member = null;
          if (null != id) {
            member = GuildMemberStore.getMember(tmp2, message.author.id);
          }
        }
      }
      return member;
    },
    items5,
  );
  let id1;
  const tmp2Result5 = message(id[13]);
  if (message != null) {
    let author = message.author;
    if (author != null) {
      id1 = author.id;
    }
  }
  let tmp10 = actionLabel(id[14]);
  const tmp10Result = actionLabel(id[14])({ userId: id1 });
  displayNameStylesFont = message(id[15]).useDisplayNameStylesFont({ displayNameStyles: tmp10Result });
  message(id[16]);
  if (stateFromStores != null) {
    const id2 = stateFromStores.id;
  }
  if (message != null) {
    const author2 = message.author;
  }
  let tmp16 = null;
  if (flag2) {
    let author1;
    if (message != null) {
      author1 = message.author;
    }
    tmp16 = null;
    if (null != author1) {
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
  const items6 = [stateFromStores1, flag2];
  let author3;
  if (message != null) {
    author3 = message.author;
  }
  items6[2] = author3;
  const items7 = [stateFromStores1];
  const memo = interactionType.useMemo(() => {
    if (tmp2) {
      return null;
    } else {
      if (!flag2) {
        const obj = { guild: stateFromStores1, size: GuildIcon.GuildIconSizes.NORMAL };
        let tmp10 = React7(GuildIconDefault, obj);
      } else {
        let author = message;
        let author1;
        if (message != null) {
          author1 = author.author;
        }
      }
      const obj2 = { guild: stateFromStores1, author: null };
      author = author.author;
      obj2.author = author;
      tmp10 = React7(CutoutGuildIconWithUserCustom, obj2);
    }
    tmp2 = null == stateFromStores1;
  }, items6);
  const memo1 = obj6.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      const obj = {
        style: { maxWidth: 225 },
        lineClamp: 1,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: stateFromStores1.name,
      };
      tmp2 = React7(Text_Text.Text, obj, stateFromStores1.id);
    }
    return tmp2;
  }, items7);
  const tmp21 = actionLabel(id[18])(stateFromStores);
  children = tmp21;
  const items8 = [flag2, , , , , , , , , , ,];
  let author4;
  if (message != null) {
    author4 = message.author;
  }
  items8[1] = author4;
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
  const memo2 = obj6.useMemo(() => {
    if (flag2) {
      let author;
      if (message != null) {
        author = message.author;
      }
      if (null != author) {
        if (null != guild_id) {
          if (null != stateFromStores) {
            if (null != _undefined) {
              let colorString;
              if (stateFromStores2 != null) {
                colorString = stateFromStores2.colorString;
              }
              if (colorString == null) {
                colorString = DEFAULT_ROLE_COLOR_HEX;
              }
              const obj2 = { style: closure_7.genContentSubtitle, children: null };
              const iconForChannel = getIconForChannel.getIconForChannel(tmp4);
              const obj3 = { color: colorString };
              const items = [obj3];
              let tmp42;
              if (null != displayNameStylesFont) {
                const obj4 = { fontFamily: tmp41 };
                tmp42 = obj4;
              }
              const obj5 = { variant: "text-sm/semibold", style: null, children: null };
              items[1] = tmp42;
              obj5.style = items;
              let combined = _undefined;
              if (_undefined.length > 20) {
                const _HermesInternal = HermesInternal;
                combined = "" + _undefined.slice(0, 17) + "...";
              }
              obj5.children = combined;
              const items1 = [React7(Text_Text.Text, obj5), ,];
              const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl2 = util.intl;
              obj6.children = intl2.string(util.t.CHUAYk);
              items1[1] = React7(Text_Text.Text, obj6);
              const obj7 = { style: closure_7.genContentSubtitleChannel, children: null };
              const items2 = [React7(iconForChannel, { size: "xs", color: "text-default" })];
              const obj9 = {
                variant: "text-sm/medium",
                color: "text-default",
                onPress: onHeaderPress,
                style: { flex: 1 },
                lineClamp: 1,
                ellipsizeMode: "tail",
                children,
              };
              items2[1] = React7(Text_Text.Text, obj9);
              obj7.children = items2;
              items1[2] = closure_2_10(View, obj7);
              obj2.children = items1;
              return closure_2_10(View, obj2);
            }
          }
        }
      }
    }
    if (null != stateFromStores) {
      let TextIcon = getIconForChannel.getIconForChannel(stateFromStores);
    } else {
      TextIcon = TextIcon2.TextIcon;
    }
    const obj10 = { style: closure_7.genContentSubtitle, children: null };
    const items3 = [
      React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: actionLabel }),
    ];
    let tmp13 = null;
    if (null != stateFromStores) {
      const obj12 = { children: null };
      const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj13.children = intl.string(util.t.CHUAYk);
      const items4 = [React7(Text_Text.Text, obj13)];
      const obj14 = { style: closure_7.genContentSubtitleChannel, children: null };
      const items5 = [React7(TextIcon, { size: "xs", color: "text-default" })];
      const obj15 = {
        variant: "text-sm/medium",
        color: "text-default",
        onPress: onHeaderPress,
        style: { flex: 1 },
        lineClamp: 1,
        ellipsizeMode: "tail",
        children,
      };
      items5[1] = React7(Text_Text.Text, obj15);
      obj14.children = items5;
      items4[1] = closure_2_10(View, obj14);
      obj12.children = items4;
      tmp13 = closure_2_10(closure_2_11, obj12);
    }
    items3[1] = tmp13;
    obj10.children = items3;
    return closure_2_10(View, obj10);
  }, items8);
  const items10 = [fontScale, ,];
  ({ channelNameAndAccessoryLarge: arr11[1], channelNameAndAccessory: arr11[2] } = tmp);
  const callback = obj6.useCallback(() => {
    let tmp2 = null != stateFromStores1;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const obj2 = { guildId: stateFromStores1.id, channelId: stateFromStores.id, id, type: interactionType };
      const result = openDetailsActionSheet.openDetailsActionSheet(obj2);
    }
  }, items9);
  let obj3 = { style: tmp.container, children: null };
  const memo3 = obj6.useMemo(() => {
    if (fontScale > 1.8) {
      let channelNameAndAccessory = closure_7.channelNameAndAccessoryLarge;
    } else {
      channelNameAndAccessory = closure_7.channelNameAndAccessory;
    }
    return channelNameAndAccessory;
  }, items10);
  let obj4 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: null };
  let obj5 = { style: memo3, children: null };
  let obj7 = { style: tmp.header, children: null };
  const items11 = [memo];
  const obj8 = { style: tmp.headerInfo, children: null };
  let obj9 = { style: tmp.title, children: null };
  let obj10 = { style: tmp.titleLeft, children: null };
  const items12 = [memo1];
  let tmp28Result = !flag;
  if (!flag) {
    const obj11 = {
      lineClamp: 1,
      variant: "text-xs/normal",
      color: "text-muted",
      children: tmp2(tmp3[24]).getRelativeTimestamp(timestamp),
    };
    tmp28Result = tmp28(tmp2(tmp3[17]).Text, obj11);
    const tmp2Result8 = tmp2(tmp3[24]);
  }
  items12[1] = tmp28Result;
  obj10.children = items12;
  const items13 = [guild_id(onHeaderPress, obj10)];
  let obj12 = { onPress: callback, style: tmp.subtitleTrailing, hitSlop: 8, children: null };
  const tmp2Result6 = message(id[15]);
  obj12.children = stateFromStores(message(id[25]).MoreHorizontalIcon, {
    color: actionLabel(id[8]).colors.ICON_MUTED,
    size: "sm",
  });
  items13[1] = stateFromStores(message(id[23]).PressableOpacity, obj12);
  obj9.children = items13;
  const items14 = [guild_id(onHeaderPress, obj9)];
  let obj14 = {
    style: tmp.subTitleContainer,
    children: stateFromStores(onHeaderPress, { style: tmp.subtitle, children: memo2 }),
  };
  items14[1] = stateFromStores(onHeaderPress, obj14);
  obj8.children = items14;
  items11[1] = guild_id(onHeaderPress, obj8);
  obj7.children = items11;
  obj5.children = guild_id(onHeaderPress, obj7);
  obj4.children = stateFromStores(onHeaderPress, obj5);
  const items15 = [
    stateFromStores(message(id[23]).PressableHighlight, obj4),
    stateFromStores(onHeaderPress, { style: tmp.normalContent, children }),
  ];
  obj3.children = items15;
  return guild_id(onHeaderPress, obj3);
}
