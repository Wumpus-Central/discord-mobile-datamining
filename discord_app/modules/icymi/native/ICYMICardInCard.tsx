// discord_app/modules/icymi/native/ICYMICardInCard.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TextIcon2 from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import openDetailsActionSheet from "util/openDetailsActionSheet.tsx";
import getIconForChannel from "util/getIconForChannel.tsx";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

let c10;
let c9;
let unpackModuleId;
const View = react_native.View;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
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
    channelNameAndAccessoryLarge: {
      flexDirection: "column",
      paddingBottom: nativeDefault.space.PX_4,
      marginHorizontal: marginHorizontal.margin,
    },
    header: { flexDirection: "row", flexGrow: 1 },
    headerInfo: { flexGrow: 1, flexShrink: 1, marginLeft: nativeDefault.space.PX_12 },
    title: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 },
    titleLeft: { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 },
    subTitleContainer: { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm },
    subtitle: { flexShrink: 1, flexGrow: 0, width: "100%" },
    genContentSubtitle: { flexDirection: "row", alignItems: "center", gap: 2 },
    genContentSubtitleChannel: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 },
    subtitleTrailing: { paddingVertical: 1 },
    separator: size,
    normalContent: { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_STRONG, flexShrink: 0 },
    authorAvatar: { position: "absolute", right: 0, bottom: 0 },
  };
  ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: nativeDefault.space.PX_4,
    marginHorizontal: marginHorizontal.margin,
  });
  ({ flexDirection: "column", paddingBottom: nativeDefault.space.PX_4, marginHorizontal: marginHorizontal.margin });
  ({ flexGrow: 1, flexShrink: 1, marginLeft: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm });
  size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_STRONG, flexShrink: 0 });
  return obj;
});
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let author;
      let first;
      let guild;
      let items1;
      let obj3;
      let tmp11;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(11);
      ({ guild, author } = arg0);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        size = { width: 40, height: 40 };
        cResult[0] = size;
        first = size;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { shape: ClipView.CutoutShape.Circle, x: 18, y: 18, size: 24 };
        const items = [point];
        cResult[1] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== guild) {
        const obj2 = { cutouts: tmp6, children: React4(tmp11, obj3) };
        obj3 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
        const tmp10 = ClipViewDefault;
        tmp11 = GuildIconDefault;
        const tmp12 = React4(tmp10, obj2);
        cResult[2] = guild;
        cResult[3] = tmp12;
        tmp7 = tmp12;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === author) {
        if (cResult[5] === guild.id) {
          let tmp13;
          if (cResult[6] === tmp4.authorAvatar) {
            tmp13 = cResult[7];
          }
          if (cResult[8] === tmp7) {
            let tmp15;
            if (cResult[9] === tmp13) {
              tmp15 = cResult[10];
            }
            return tmp15;
          }
          const obj4 = { style: first, children: items1 };
          items1 = [tmp7, tmp13];
          const tmp18 = authStore(View, obj4);
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          cResult[10] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj5 = {
        animate: true,
        style: tmp4.authorAvatar,
        guildId: guild.id,
        user: author,
        size: native.AvatarSizes.XSMALL_20,
      };
      const Avatar = native.Avatar;
      const tmp14 = React4(Avatar, obj5);
      cResult[4] = author;
      cResult[5] = guild.id;
      cResult[6] = tmp4.authorAvatar;
      cResult[7] = tmp14;
      tmp13 = tmp14;
    }
  : (guild) => {
      let items;
      let items1;
      let obj3;
      let tmp3;
      guild = guild.guild;
      const author = guild.author;
      const obj = { style: { width: 40, height: 40 }, children: items1 };
      const obj2 = { cutouts: items, children: React4(tmp3, obj3) };
      const point = { shape: ClipView.CutoutShape.Circle, x: 18, y: 18, size: 24 };
      const tmp = closure_12();
      items = [point];
      const tmp2 = ClipViewDefault;
      obj3 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
      tmp3 = GuildIconDefault;
      items1 = [React4(tmp2, obj2)];
      const obj4 = {
        animate: true,
        style: tmp.authorAvatar,
        guildId: guild.id,
        user: author,
        size: native.AvatarSizes.XSMALL_20,
      };
      const Avatar = native.Avatar;
      items1[1] = React4(Avatar, obj4);
      return authStore(View, obj);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMICardInCard.tsx");

export default function ICYMICardInCard(message) {
  let MoreHorizontalIcon;
  let _undefined;
  let children;
  let guildId;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let obj13;
  let obj15;
  let obj5;
  let obj7;
  let onHeaderLongPress;
  let timestamp;
  let tmp2Result8;
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
  let c14;
  children = undefined;
  const tmp = stateFromStores2();
  let closure_7 = tmp;
  let tmp2 = message;
  let obj = message(id[14]);
  const fontScale = obj.useFontScale();
  let obj2 = message(id[15]);
  let items = [channelId];
  let items1 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let items2 = [closure_7];
  let items3 = [guild_id];
  const tmp2Result = tmp2(id[15]);
  stateFromStores1 = tmp2Result.useStateFromStores(
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
  let items4 = [flag2];
  let items5 = [flag2, guild_id, message];
  const tmp2Result5 = tmp2(id[15]);
  stateFromStores2 = tmp2Result5.useStateFromStores(
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
  let tmp9 = actionLabel;
  let id1;
  const tmp10 = actionLabel(id[16]);
  if (message != null) {
    let author = message.author;
    if (author != null) {
      id1 = author.id;
    }
  }
  const tmp10Result = tmp10({ userId: id1 });
  const tmp2Result6 = tmp2(id[17]);
  displayNameStylesFont = tmp2Result6.useDisplayNameStylesFont({ displayNameStyles: tmp10Result });
  tmp2(id[18]);
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
  let obj6 = interactionType;
  const items6 = [stateFromStores1, flag2];
  let author3;
  const useMemo = interactionType.useMemo;
  if (message != null) {
    author3 = message.author;
  }
  items6[2] = author3;
  const items7 = [stateFromStores1];
  const memo = useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      if (flag2) {
        let tmp11;
        let author;
        if (message != null) {
          author = message.author;
        }
        if (null != author) {
          const obj2 = { guild: stateFromStores1, author: message.author };
          tmp11 = React4(closure_13, obj2);
        }
        tmp2 = tmp11;
      }
      const obj = { guild: stateFromStores1, size: GuildIcon.GuildIconSizes.NORMAL };
      const tmp9 = GuildIconDefault;
      tmp11 = React4(tmp9, obj);
    }
    return tmp2;
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
      tmp2 = React4(Text_Text.Text, obj, stateFromStores1.id);
    }
    return tmp2;
  }, items7);
  const tmp21 = tmp9(id[20])(stateFromStores);
  children = tmp21;
  const items8 = [flag2, , , , , , , , , , ,];
  let author4;
  const useMemo2 = obj6.useMemo;
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
  const memo2 = useMemo2(() => {
    let TextIcon;
    let combined;
    let intl;
    let intl2;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
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
              const obj2 = { style: closure_7.genContentSubtitle, children: items1 };
              const obj8 = getIconForChannel;
              const iconForChannel = obj8.getIconForChannel(tmp5);
              const items = [{ color: colorString }];
              let tmp43;
              const obj3 = { color: colorString };
              const Text2 = Text_Text.Text;
              if (null != displayNameStylesFont) {
                tmp43 = { fontFamily: tmp42 };
                const obj4 = { fontFamily: tmp42 };
              }
              const obj5 = { variant: "text-sm/semibold", style: items, children: combined };
              items[1] = tmp43;
              combined = _undefined;
              if (_undefined.length > 20) {
                const _HermesInternal = HermesInternal;
                combined = "" + _undefined.slice(0, 17) + "...";
              }
              items1 = [React4(Text2, obj5), ,];
              const obj6 = { variant: "text-sm/medium", color: "text-default", children: intl2.string(intl3.t.CHUAYk) };
              const Text3 = Text_Text.Text;
              intl2 = intl3.intl;
              items1[1] = React4(Text3, obj6);
              const obj7 = { style: closure_7.genContentSubtitleChannel, children: items2 };
              items2 = [React4(iconForChannel, { size: "xs", color: "text-default" })];
              const obj9 = {
                variant: "text-sm/medium",
                color: "text-default",
                onPress: onHeaderPress,
                style: { flex: 1 },
                lineClamp: 1,
                ellipsizeMode: "tail",
                children,
              };
              items2[1] = React4(Text_Text.Text, obj9);
              items1[2] = authStore(View, obj7);
              return authStore(View, obj2);
            }
          }
        }
      }
    }
    if (null != stateFromStores) {
      const obj = getIconForChannel;
      TextIcon = obj.getIconForChannel(stateFromStores);
    } else {
      TextIcon = TextIcon2.TextIcon;
    }
    const obj10 = { style: closure_7.genContentSubtitle, children: items3 };
    items3 = [,];
    const obj11 = { variant: "text-sm/medium", color: "text-default", children: actionLabel };
    items3[0] = React4(Text_Text.Text, obj11);
    let tmp14 = null;
    if (null != stateFromStores) {
      const obj12 = { children: items4 };
      const obj13 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t.CHUAYk) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items4 = [React4(Text, obj13)];
      const obj14 = { style: closure_7.genContentSubtitleChannel, children: items5 };
      items5 = [React4(TextIcon, { size: "xs", color: "text-default" })];
      const obj15 = {
        variant: "text-sm/medium",
        color: "text-default",
        onPress: onHeaderPress,
        style: { flex: 1 },
        lineClamp: 1,
        ellipsizeMode: "tail",
        children,
      };
      items5[1] = React4(Text_Text.Text, obj15);
      items4[1] = authStore(View, obj14);
      tmp14 = authStore(unpackModuleId, obj12);
    }
    items3[1] = tmp14;
    return authStore(View, obj10);
  }, items8);
  const items10 = [fontScale, ,];
  ({ channelNameAndAccessoryLarge: arr11[1], channelNameAndAccessory: arr11[2] } = tmp);
  const callback = obj6.useCallback(() => {
    const tmp2 = null != stateFromStores1 && null != stateFromStores;
    if (tmp2) {
      const obj2 = { guildId: stateFromStores1.id, channelId: stateFromStores.id, id, type: interactionType };
      const obj = openDetailsActionSheet;
      const result = obj.openDetailsActionSheet(obj2);
    }
  }, items9);
  let obj3 = { style: tmp.container, children: items15 };
  const memo3 = obj6.useMemo(() => {
    let channelNameAndAccessory;
    if (fontScale > 1.8) {
      channelNameAndAccessory = closure_7.channelNameAndAccessoryLarge;
    } else {
      channelNameAndAccessory = closure_7.channelNameAndAccessory;
    }
    return channelNameAndAccessory;
  }, items10);
  let obj4 = {
    onPress: onHeaderPress,
    onLongPress: onHeaderLongPress,
    style: tmp.content,
    children: stateFromStores(onHeaderPress, obj5),
  };
  obj5 = { style: memo3, children: guild_id(onHeaderPress, obj7) };
  obj7 = { style: tmp.header, children: items11 };
  items11 = [memo];
  let obj8 = { style: tmp.headerInfo, children: items14 };
  let obj9 = { style: tmp.title, children: items13 };
  let obj10 = { style: tmp.titleLeft, children: items12 };
  items12 = [memo1];
  let tmp28Result = !flag;
  const PressableHighlight = tmp2(tmp3[25]).PressableHighlight;
  if (!flag) {
    let obj11 = {
      lineClamp: 1,
      variant: "text-xs/normal",
      color: "text-muted",
      children: tmp2Result8.getRelativeTimestamp(timestamp),
    };
    let Text = tmp2(tmp3[19]).Text;
    tmp2Result8 = tmp2(id[26]);
    tmp28Result = tmp28(Text, obj11);
  }
  items12[1] = tmp28Result;
  items13 = [guild_id(onHeaderPress, obj10)];
  let obj12 = {
    onPress: callback,
    style: tmp.subtitleTrailing,
    hitSlop: 8,
    children: stateFromStores(MoreHorizontalIcon, obj13),
  };
  const PressableOpacity = tmp2(tmp3[25]).PressableOpacity;
  obj13 = { color: tmp9(id[8]).colors.ICON_MUTED, size: "sm" };
  MoreHorizontalIcon = tmp2(tmp3[27]).MoreHorizontalIcon;
  items13[1] = stateFromStores(PressableOpacity, obj12);
  items14 = [guild_id(onHeaderPress, obj9)];
  let obj14 = { style: tmp.subTitleContainer, children: stateFromStores(onHeaderPress, obj15) };
  obj15 = { style: tmp.subtitle, children: memo2 };
  items14[1] = stateFromStores(onHeaderPress, obj14);
  items11[1] = guild_id(onHeaderPress, obj8);
  items15 = [stateFromStores(PressableHighlight, obj4)];
  const obj16 = { style: tmp.normalContent, children };
  items15[1] = stateFromStores(onHeaderPress, obj16);
  return guild_id(onHeaderPress, obj3);
}
