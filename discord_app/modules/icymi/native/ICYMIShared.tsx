// === Module 16435: ICYMIShared ===

// Module 16435 (ICYMIShared)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import flow_Client from "flow/Client" /* 4787 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4877 */;
import timing from "timing" /* 4891 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6750 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import ICYMIUtils from "ICYMIUtils" /* 8028 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import ClipView from "ClipView" /* 8469 */;
import openDetailsActionSheet2 from "openDetailsActionSheet" /* 16436 */;
import react from "react" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6809 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16394 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;
let _require, dependencyMap, importDefault, parentMessage, set;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
let unpackModuleId;
const View = react_native.View;
({ AnalyticsObjects: c10, AnalyticsObjectTypes: unpackModuleId, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: map1, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let c21 = 225;
let closure_22 = createICYMIStyles.createICYMIStyles((paddingBottom) => {
  let num2;
  let rect;
  let size1;
  let num = 0;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    num = -2;
  }
  const obj2 = { simplePostContent: { flex: 1, marginTop: num, overflow: "hidden" }, content: { flex: 1, marginTop: num2, overflow: "hidden", paddingTop: paddingBottom.margin }, insetIconWrapper: rect, authorIcon: { position: "absolute", right: -4, bottom: -2 }, moreDetailsIcon: { tintColor: nativeDefault.colors.TEXT_MUTED }, channelNameAndAccessory: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin }, channelNameAndAccessoryLarge: { flexDirection: "column", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin }, header: { flexDirection: "row", flexGrow: 1 }, headerInfo: { flexGrow: 1, flexShrink: 1, marginLeft: paddingBottom.margin }, title: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }, titleLeft: { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 }, subTitleContainer: { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm }, subtitle: { flexShrink: 1, flexGrow: 0, width: "100%" }, genContentSubtitle: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, genContentSubtitleChannel: { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 }, subtitleTrailing: { paddingVertical: 1 }, separator: size, eventsSubtitle: { flexDirection: "row", alignItems: "center" }, comments: { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, recentCommentText: { flexGrow: 1, flexShrink: 1, marginRight: 12 }, commentCount: { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" }, commentsIcon: size1, chevron: { tintColor: nativeDefault.colors.TEXT_MUTED } };
  num2 = 0;
  const tmpResult = PlatformUtils;
  if (tmpResult.isAndroid()) {
    num2 = -2;
  }
  rect = { position: "absolute", right: -4, bottom: -2, padding: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  ({ tintColor: nativeDefault.colors.TEXT_MUTED });
  ({ flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 });
  size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  ({ tintColor: nativeDefault.colors.TEXT_MUTED });
  return obj2;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_22();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = authStore4(View, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { style: closure_22().separator };
  return authStore4(View, obj);
});
let closure_23 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let author;
  let guild;
  const obj = react2;
  const cResult = obj.c(7);
  ({ guild, author } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] === author) {
    if (cResult[1] === guild.id) {
      let tmp5;
      if (cResult[2] === tmp4.authorIcon) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === guild) {
        let tmp7;
        if (cResult[5] === tmp5) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
      const obj2 = { guild, icon: tmp5 };
      const tmp10 = authStore4(closure_25, obj2);
      cResult[4] = guild;
      cResult[5] = tmp5;
      cResult[6] = tmp10;
      tmp7 = tmp10;
    }
  }
  const obj3 = { animate: true, style: tmp4.authorIcon, guildId: guild.id, user: author, size: native.AvatarSizes.XSMALL };
  const Avatar = native.Avatar;
  const tmp6 = authStore4(Avatar, obj3);
  cResult[0] = author;
  cResult[1] = guild.id;
  cResult[2] = tmp4.authorIcon;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((guild) => {
  let Avatar;
  let obj2;
  guild = guild.guild;
  const author = guild.author;
  const obj = { guild, icon: authStore4(Avatar, obj2) };
  obj2 = { animate: true, style: closure_22().authorIcon, guildId: guild.id, user: author, size: native.AvatarSizes.XSMALL };
  Avatar = native.Avatar;
  return authStore4(closure_25, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let guild;
  let icon;
  let items1;
  let obj3;
  let tmp10;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  ({ guild, icon } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: 40, height: 40 };
    cResult[0] = size;
    first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const point = { shape: ClipView.CutoutShape.Circle, x: 16, y: 14, size: 32 };
    const items = [point];
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj2 = { cutouts: tmp5, children: authStore4(tmp10, obj3) };
    obj3 = { guild, size: GuildIcon.GuildIconSizes.NORMAL };
    const tmp9 = ClipViewDefault;
    tmp10 = GuildIconDefault;
    const tmp11 = authStore4(tmp9, obj2);
    cResult[2] = guild;
    cResult[3] = tmp11;
    tmp6 = tmp11;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === icon) {
    let tmp12;
    if (cResult[5] === tmp6) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj4 = { style: first, children: items1 };
  items1 = [tmp6, icon];
  const tmp13 = closure_19(View, obj4);
  cResult[4] = icon;
  cResult[5] = tmp6;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
  let guild;
  let icon;
  let items;
  let items1;
  let obj3;
  let tmp2;
  const obj = { style: { width: 40, height: 40 }, children: items1 };
  ({ guild, icon } = arg0);
  const obj2 = { cutouts: items, children: authStore4(tmp2, obj3) };
  const point = { shape: ClipView.CutoutShape.Circle, x: 16, y: 14, size: 32 };
  items = [point];
  const tmp = ClipViewDefault;
  obj3 = { guild, size: GuildIcon.GuildIconSizes.NORMAL };
  tmp2 = GuildIconDefault;
  items1 = [authStore4(tmp, obj2), icon];
  return closure_19(View, obj);
});
let closure_25 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let MoreHorizontalIcon;
  let avatar;
  let children;
  let disableInteractions;
  let hideTimestamp;
  let id;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj12;
  let onHeaderLongPress;
  let onHeaderPress;
  let subtitle;
  let timestamp;
  let title;
  let tmpResult;
  const tmp = guild;
  let obj = guild(id[23]);
  const cResult = obj.c(43);
  guild = guild.guild;
  const channel = guild.channel;
  ({ timestamp, hideTimestamp, children, avatar, title, subtitle, id } = guild);
  const type = guild.type;
  ({ onHeaderPress, onHeaderLongPress, disableInteractions } = guild);
  const tmp4 = closure_22();
  const obj2 = guild(id[27]);
  const tmp5 = obj2.useFontScale() > 1.8 ? tmp4.channelNameAndAccessoryLarge : tmp4.channelNameAndAccessory;
  if (cResult[0] === hideTimestamp) {
    let tmp6;
    if (cResult[1] === timestamp) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.titleLeft) {
      if (cResult[4] === tmp6) {
        let tmp9;
        if (cResult[5] === title) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === channel) {
          if (cResult[8] === disableInteractions) {
            if (cResult[9] === guild) {
              if (cResult[10] === id) {
                if (cResult[11] === tmp4.subtitleTrailing) {
                  let tmp13;
                  if (cResult[12] === type) {
                    tmp13 = cResult[13];
                  }
                  if (cResult[14] === tmp4.title) {
                    if (cResult[15] === tmp9) {
                      let tmp18;
                      if (cResult[16] === tmp13) {
                        tmp18 = cResult[17];
                      }
                      if (cResult[18] === tmp4.subtitle) {
                        let tmp22;
                        if (cResult[19] === subtitle) {
                          tmp22 = cResult[20];
                        }
                        if (cResult[21] === tmp4.subTitleContainer) {
                          let tmp26;
                          if (cResult[22] === tmp22) {
                            tmp26 = cResult[23];
                          }
                          if (cResult[24] === tmp4.headerInfo) {
                            if (cResult[25] === tmp18) {
                              let tmp30;
                              if (cResult[26] === tmp26) {
                                tmp30 = cResult[27];
                              }
                              if (cResult[28] === avatar) {
                                if (cResult[29] === tmp4.header) {
                                  let tmp34;
                                  if (cResult[30] === tmp30) {
                                    tmp34 = cResult[31];
                                  }
                                  if (cResult[32] === tmp5) {
                                    let tmp38;
                                    if (cResult[33] === tmp34) {
                                      tmp38 = cResult[34];
                                    }
                                    if (cResult[35] === onHeaderLongPress) {
                                      if (cResult[36] === onHeaderPress) {
                                        if (cResult[37] === tmp4.content) {
                                          let tmp42;
                                          if (cResult[38] === tmp38) {
                                            tmp42 = cResult[39];
                                          }
                                          if (cResult[40] === children) {
                                            let tmp45;
                                            if (cResult[41] === tmp42) {
                                              tmp45 = cResult[42];
                                            }
                                            return tmp45;
                                          }
                                          const obj3 = { children: items };
                                          items = [tmp42, children];
                                          const tmp48 = closure_19(closure_20, obj3);
                                          cResult[40] = children;
                                          cResult[41] = tmp42;
                                          cResult[42] = tmp48;
                                          tmp45 = tmp48;
                                        }
                                      }
                                    }
                                    const obj4 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp4.content, children: tmp38 };
                                    const tmp44 = closure_18(tmp(id[30]).PressableHighlight, obj4);
                                    cResult[35] = onHeaderLongPress;
                                    cResult[36] = onHeaderPress;
                                    cResult[37] = tmp4.content;
                                    cResult[38] = tmp38;
                                    cResult[39] = tmp44;
                                    tmp42 = tmp44;
                                  }
                                  const obj5 = { style: tmp5, children: tmp34 };
                                  const tmp41 = closure_18(View, obj5);
                                  cResult[32] = tmp5;
                                  cResult[33] = tmp34;
                                  cResult[34] = tmp41;
                                  tmp38 = tmp41;
                                }
                              }
                              const obj6 = { style: tmp4.header, children: items1 };
                              items1 = [avatar, tmp30];
                              const tmp37 = closure_19(View, obj6);
                              cResult[28] = avatar;
                              cResult[29] = tmp4.header;
                              cResult[30] = tmp30;
                              cResult[31] = tmp37;
                              tmp34 = tmp37;
                            }
                          }
                          const obj7 = { style: tmp4.headerInfo, children: items2 };
                          items2 = [tmp18, tmp26];
                          const tmp33 = closure_19(View, obj7);
                          cResult[24] = tmp4.headerInfo;
                          cResult[25] = tmp18;
                          cResult[26] = tmp26;
                          cResult[27] = tmp33;
                          tmp30 = tmp33;
                        }
                        const obj8 = { style: tmp4.subTitleContainer, children: tmp22 };
                        const tmp29 = closure_18(View, obj8);
                        cResult[21] = tmp4.subTitleContainer;
                        cResult[22] = tmp22;
                        cResult[23] = tmp29;
                        tmp26 = tmp29;
                      }
                      const obj9 = { style: tmp4.subtitle, children: subtitle };
                      const tmp25 = closure_18(View, obj9);
                      cResult[18] = tmp4.subtitle;
                      cResult[19] = subtitle;
                      cResult[20] = tmp25;
                      tmp22 = tmp25;
                    }
                  }
                  const obj10 = { style: tmp4.title, children: items3 };
                  items3 = [tmp9, tmp13];
                  const tmp21 = closure_19(View, obj10);
                  cResult[14] = tmp4.title;
                  cResult[15] = tmp9;
                  cResult[16] = tmp13;
                  cResult[17] = tmp21;
                  tmp18 = tmp21;
                }
              }
            }
          }
        }
        let tmp15 = null;
        if (!disableInteractions) {
          tmp15 = null;
          if (null != guild) {
            const obj11 = {
              onPress() {
                          const obj = { guildId: guild.id, channelId: id, id, type };
                          id = undefined;
                          const openDetailsActionSheet = openDetailsActionSheet2.openDetailsActionSheet;
                          openDetailsActionSheet2;
                          if (null != channel) {
                            id = channel.id;
                          }
                          return openDetailsActionSheet(obj);
                        },
              style: tmp4.subtitleTrailing,
              hitSlop: 8,
              children: closure_18(MoreHorizontalIcon, obj12)
            };
            const PressableOpacity = tmp(id[30]).PressableOpacity;
            obj12 = { color: channel(id[21]).colors.ICON_MUTED, size: "sm" };
            MoreHorizontalIcon = tmp(id[32]).MoreHorizontalIcon;
            tmp15 = closure_18(PressableOpacity, obj11);
          }
        }
        cResult[7] = channel;
        cResult[8] = disableInteractions;
        cResult[9] = guild;
        cResult[10] = id;
        cResult[11] = tmp4.subtitleTrailing;
        cResult[12] = type;
        cResult[13] = tmp15;
        tmp13 = tmp15;
      }
    }
    const obj13 = { style: tmp4.titleLeft, children: items4 };
    items4 = [title, tmp6];
    const tmp12 = closure_19(View, obj13);
    cResult[3] = tmp4.titleLeft;
    cResult[4] = tmp6;
    cResult[5] = title;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  let tmp7 = !hideTimestamp;
  if (tmp7) {
    const obj14 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmpResult.getRelativeTimestamp(timestamp) };
    const Text = tmp(id[28]).Text;
    tmpResult = tmp(id[29]);
    tmp7 = closure_18(Text, obj14);
  }
  cResult[0] = hideTimestamp;
  cResult[1] = timestamp;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((guild) => {
  let MoreHorizontalIcon;
  let avatar;
  let children;
  let disableInteractions;
  let hideTimestamp;
  let id;
  let id2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj13;
  let obj3;
  let obj4;
  let onHeaderLongPress;
  let onHeaderPress;
  let subtitle;
  let timestamp;
  let title;
  let tmp2Result;
  let type;
  guild = guild.guild;
  ({ channel: importDefault, hideTimestamp, id: dependencyMap, type: react } = guild);
  ({ timestamp, children, avatar, title, subtitle, onHeaderPress, onHeaderLongPress, disableInteractions } = guild);
  const tmp = closure_22();
  let obj = guild(5602);
  const fontScale = obj.useFontScale();
  const obj2 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: closure_18(View, obj3) };
  obj3 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory, children: closure_19(View, obj4) };
  obj4 = { style: tmp.header, children: items };
  items = [avatar, ];
  const obj7 = { style: tmp.titleLeft, children: items1 };
  items1 = [title, ];
  let tmp7Result = !hideTimestamp;
  const obj5 = { style: tmp.headerInfo, children: items3 };
  const obj6 = { style: tmp.title, children: items2 };
  const PressableHighlight = guild(5909).PressableHighlight;
  if (!hideTimestamp) {
    const obj8 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmp2Result.getRelativeTimestamp(timestamp) };
    const Text = tmp2(4886).Text;
    tmp2Result = guild(7126);
    tmp7Result = closure_18(Text, obj8);
  }
  items1[1] = tmp7Result;
  items2 = [closure_19(View, obj7), ];
  let tmp7Result2 = null;
  if (!disableInteractions) {
    tmp7Result2 = null;
    if (null != guild) {
      const obj9 = {
        onPress() {
              const obj = { guildId: guild.id, channelId: importDefault, id: dependencyMap, type: react };
              importDefault = undefined;
              const openDetailsActionSheet = openDetailsActionSheet2.openDetailsActionSheet;
              openDetailsActionSheet2;
              if (null != importDefault) {
                importDefault = importDefault.id;
              }
              return openDetailsActionSheet(obj);
            },
        style: tmp.subtitleTrailing,
        hitSlop: 8,
        children: closure_18(MoreHorizontalIcon, obj10)
      };
      const PressableOpacity = tmp2(5909).PressableOpacity;
      obj10 = { color: nativeDefault.colors.ICON_MUTED, size: "sm" };
      MoreHorizontalIcon = tmp2(7577).MoreHorizontalIcon;
      tmp7Result2 = closure_18(PressableOpacity, obj9);
    }
  }
  const obj11 = { children: items4 };
  items2[1] = tmp7Result2;
  items3 = [closure_19(View, obj6), ];
  const obj12 = { style: tmp.subTitleContainer, children: closure_18(View, obj13) };
  obj13 = { style: tmp.subtitle, children: subtitle };
  items3[1] = closure_18(View, obj12);
  items[1] = closure_19(View, obj5);
  items4 = [closure_18(PressableHighlight, obj2), children];
  return closure_19(closure_20, obj11);
});
let closure_26 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let author;
  let children;
  let first;
  let id;
  let items1;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  let obj = guild(author[23]);
  const cResult = obj.c(37);
  guild = guild.guild;
  const channel = guild.channel;
  author = guild.author;
  ({ timestamp, children, id } = guild);
  ({ onHeaderPress, onHeaderLongPress } = guild);
  const mentioned = guild.mentioned;
  const tmp4 = closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === author.id) {
    let tmp7;
    if (cResult[2] === guild.id) {
      tmp7 = cResult[3];
    }
    const tmpResult = guild(author[33]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    let colorString;
    if (stateFromStores != null) {
      colorString = stateFromStores.colorString;
    }
    if (colorString == null) {
      colorString = closure_13;
    }
    const tmpResult3 = guild(author[34]);
    const name = tmpResult3.useName(guild.id, channel.id, author);
    if (cResult[4] === author.id) {
      if (cResult[5] === channel.id) {
        let tmp11;
        if (cResult[6] === id) {
          tmp11 = cResult[7];
        }
        if (cResult[8] === author) {
          let tmp12;
          let tmp16;
          if (cResult[9] === guild) {
            tmp12 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { maxWidth };
            cResult[11] = obj2;
            tmp16 = obj2;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === channel.id) {
            let tmp18;
            let tmp21;
            if (cResult[13] === guild.name) {
              tmp18 = cResult[14];
            }
            if (cResult[15] !== colorString) {
              let obj3 = { color: colorString };
              cResult[15] = colorString;
              cResult[16] = obj3;
              tmp21 = obj3;
            } else {
              tmp21 = cResult[16];
            }
            let combined = name;
            if (name.length > 20) {
              const _HermesInternal = HermesInternal;
              combined = "" + name.slice(0, 17) + "...";
            }
            const text = `${tmp22} `;
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp21) {
                let tmp24;
                let tmp27;
                if (cResult[19] === `${tmp22} `) {
                  tmp24 = cResult[20];
                }
                const _Symbol2 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj4 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
                  const AnnouncementsIcon = tmp(tmp2[37]).AnnouncementsIcon;
                  const tmp30 = closure_18(AnnouncementsIcon, obj4);
                  cResult[21] = tmp30;
                  tmp27 = tmp30;
                } else {
                  tmp27 = cResult[21];
                }
                const contentTypeToText = guild(author[38]).contentTypeToText;
                guild(author[38]);
                const text1 = ` ${contentTypeToText(tmp(tmp2[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
                if (cResult[22] === tmp4.subtitle) {
                  if (cResult[23] === ` ${contentTypeToText(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`) {
                    let tmp33;
                    if (cResult[24] === tmp24) {
                      tmp33 = cResult[25];
                    }
                    if (cResult[26] === channel) {
                      if (cResult[27] === children) {
                        if (cResult[28] === guild) {
                          if (cResult[29] === id) {
                            if (cResult[30] === onHeaderLongPress) {
                              if (cResult[31] === onHeaderPress) {
                                if (cResult[32] === tmp33) {
                                  if (cResult[33] === tmp12) {
                                    if (cResult[34] === tmp18) {
                                      let tmp36;
                                      if (cResult[35] === timestamp) {
                                        tmp36 = cResult[36];
                                      }
                                      return tmp36;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const element = { guild, channel, timestamp, avatar: tmp12, title: tmp18, subtitle: tmp33, onHeaderPress, onHeaderLongPress, id, type: "announcement", children };
                    const tmp39 = closure_18(closure_26, element);
                    cResult[26] = channel;
                    cResult[27] = children;
                    cResult[28] = guild;
                    cResult[29] = id;
                    cResult[30] = onHeaderLongPress;
                    cResult[31] = onHeaderPress;
                    cResult[32] = tmp33;
                    cResult[33] = tmp12;
                    cResult[34] = tmp18;
                    cResult[35] = timestamp;
                    cResult[36] = tmp39;
                    tmp36 = tmp39;
                  }
                }
                const obj5 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: items1 };
                items1 = [tmp24, tmp27, text1];
                const tmp35 = closure_19(guild(author[28]).Text, obj5);
                cResult[22] = tmp4.subtitle;
                cResult[23] = text1;
                cResult[24] = tmp24;
                cResult[25] = tmp35;
                tmp33 = tmp35;
              }
            }
            const obj6 = { variant: "text-md/semibold", onPress: tmp11, style: tmp21, children: text };
            const tmp26 = closure_18(guild(author[28]).Text, obj6);
            cResult[17] = tmp11;
            cResult[18] = tmp21;
            cResult[19] = text;
            cResult[20] = tmp26;
            tmp24 = tmp26;
          }
          const obj7 = { style: tmp16, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
          const tmp20 = closure_18(guild(author[28]).Text, obj7, channel.id);
          cResult[12] = channel.id;
          cResult[13] = guild.name;
          cResult[14] = tmp20;
          tmp18 = tmp20;
        }
        const obj8 = { guild, author };
        const tmp15 = closure_18(closure_24, obj8);
        cResult[8] = author;
        cResult[9] = guild;
        cResult[10] = tmp15;
        tmp12 = tmp15;
      }
    }
    const fn2 = function _() {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(id, "announcement", "open_profile");
      const obj2 = ICYMIActionCreatorsDefault;
      const obj3 = { itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
      obj2.feedItemActioned(obj3);
      const obj4 = { userId: author.id, channelId: channel.id };
      showUserProfileActionSheetDefault(obj4);
    };
    cResult[4] = author.id;
    cResult[5] = channel.id;
    cResult[6] = id;
    cResult[7] = fn2;
    tmp11 = fn2;
  }
  const fn = function o() {
    return GuildMemberStore.getMember(guild.id, author.id);
  };
  cResult[1] = author.id;
  cResult[2] = guild.id;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((guild) => {
  let Text;
  let children;
  let items2;
  let mentioned;
  let obj2;
  let obj3;
  let obj4;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const id = guild.id;
  ({ timestamp, children, mentioned, onHeaderPress, onHeaderLongPress } = guild);
  const tmp = closure_22();
  let obj = guild(author[33]);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const tmp2Result = guild(author[34]);
  const name = tmp2Result.useName(guild.id, channel.id, author);
  const items1 = [author.id, channel.id, id];
  const element = { guild, channel, timestamp, avatar: closure_18(closure_24, { guild, author }), title: closure_18(guild(tmp3[28]).Text, obj2, channel.id), subtitle: closure_19(Text, obj4), onHeaderPress, onHeaderLongPress, id, type: "announcement", children };
  const callback = id.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, "announcement", "open_profile");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    obj2.feedItemActioned(obj3);
    const obj4 = { userId: author.id, channelId: channel.id };
    showUserProfileActionSheetDefault(obj4);
  }, items1);
  obj2 = { style: obj3, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj3 = { maxWidth };
  obj4 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: items2 };
  Text = tmp2(tmp3[28]).Text;
  let combined = name;
  const obj5 = { variant: "text-md/semibold", onPress: callback, style: { color: colorString }, children: `${tmp10} ` };
  const Text2 = tmp2(tmp3[28]).Text;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  items2 = [closure_18(Text2, obj5), , ];
  const obj6 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
  const AnnouncementsIcon = tmp2(tmp3[37]).AnnouncementsIcon;
  items2[1] = closure_18(AnnouncementsIcon, obj6);
  const contentTypeToText = guild(tmp3[38]).contentTypeToText;
  guild(author[38]);
  items2[2] = ` ${contentTypeToText(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  return closure_18(closure_26, element);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let children;
  let event;
  let items5;
  let obj5;
  let tmp11;
  let tmp5;
  let tmp7;
  let tmp9;
  const tmp = guild;
  let obj = guild(event[23]);
  const cResult = obj.c(40);
  guild = guild.guild;
  const channel = guild.channel;
  ({ children, event } = guild);
  const type = guild.type;
  const onHeaderPress = guild.onHeaderPress;
  const tmp4 = closure_22();
  let creator_id = event.host_id;
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  if (cResult[0] !== creator_id) {
    let items1;
    if (null != creator_id) {
      const items = [creator_id];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = creator_id;
    cResult[1] = items1;
    tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(event[39]);
  const ensureHydratedGuildUsers = tmpResult.useEnsureHydratedGuildUsers(event.guild_id, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    cResult[2] = items2;
    tmp7 = items2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== creator_id) {
    const fn = function l() {
      return UserStore.getUser(creator_id);
    };
    cResult[3] = creator_id;
    cResult[4] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult3 = tmp(event[33]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp7, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildMemberStore];
    cResult[5] = items3;
    tmp11 = items3;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === guild.id) {
    let tmp13;
    if (cResult[7] === creator_id) {
      tmp13 = cResult[8];
    }
    const tmpResult4 = tmp(event[33]);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp13);
    if (cResult[9] === stateFromStores) {
      let id;
      const tmp15 = cResult[10];
      if (channel != null) {
        id = channel.id;
      }
      if (tmp15 === id) {
        if (cResult[11] === event.id) {
          let highestRoleId;
          const tmp17 = cResult[12];
          if (stateFromStores1 != null) {
            highestRoleId = stateFromStores1.highestRoleId;
          }
          if (tmp17 === highestRoleId) {
            let tmp19;
            let tmp28;
            if (cResult[13] === type) {
              tmp19 = cResult[14];
            }
            let colorString;
            if (stateFromStores1 != null) {
              colorString = stateFromStores1.colorString;
            }
            if (colorString == null) {
              colorString = closure_13;
            }
            if (cResult[15] === stateFromStores) {
              let tmp24;
              let tmp31;
              if (cResult[16] === guild) {
                tmp24 = cResult[17];
              }
              const _Symbol = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { maxWidth };
                cResult[18] = obj2;
                tmp31 = obj2;
              } else {
                tmp31 = cResult[18];
              }
              if (cResult[19] === event.id) {
                let tmp33;
                let obj7;
                if (cResult[20] === guild.name) {
                  tmp33 = cResult[21];
                }
                if (cResult[22] === stateFromStores) {
                  if (cResult[23] === colorString) {
                    if (cResult[24] === tmp19) {
                      let tmp36;
                      if (cResult[25] === null != event.host_id) {
                        tmp36 = cResult[26];
                      }
                      if (cResult[27] === tmp4.subtitle) {
                        let tmp45;
                        if (cResult[28] === tmp36) {
                          tmp45 = cResult[29];
                        }
                        if (cResult[30] === channel) {
                          if (cResult[31] === children) {
                            if (cResult[32] === event.id) {
                              if (cResult[33] === guild) {
                                if (cResult[34] === onHeaderPress) {
                                  if (cResult[35] === tmp45) {
                                    if (cResult[36] === tmp24) {
                                      if (cResult[37] === tmp33) {
                                        let tmp48;
                                        if (cResult[38] === type) {
                                          tmp48 = cResult[39];
                                        }
                                        return tmp48;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const element = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: tmp24, title: tmp33, subtitle: tmp45, id: event.id, type, onHeaderPress, children };
                        const tmp51 = closure_18(closure_26, element);
                        class D {
                          constructor() {
                            let highestRoleId;
                            let id;
                            if (null != stateFromStores) {
                              const obj = ICYMIActionCreatorsDefault;
                              obj.itemInteracted(event.id, type, "open_profile");
                              const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
                              const obj2 = ICYMIActionCreatorsDefault;
                              obj2.feedItemActioned(obj3);
                              const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
                              highestRoleId = undefined;
                              const tmp11 = showUserProfileActionSheetDefault;
                              if (stateFromStores1 != null) {
                                highestRoleId = stateFromStores1.highestRoleId;
                              }
                              id = undefined;
                              if (channel != null) {
                                id = channel.id;
                              }
                              tmp11(obj4);
                            }
                          }
                        }
                        cResult[30] = channel;
                        cResult[31] = children;
                        cResult[32] = event.id;
                        cResult[33] = guild;
                        cResult[34] = onHeaderPress;
                        cResult[35] = tmp45;
                        cResult[36] = tmp24;
                        cResult[37] = tmp33;
                        cResult[38] = type;
                        cResult[39] = tmp51;
                        tmp48 = tmp51;
                      }
                      let obj3 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: tmp36 };
                      const tmp47 = closure_18(tmp(event[28]).Text, obj3);
                      cResult[27] = tmp4.subtitle;
                      cResult[28] = tmp36;
                      cResult[29] = tmp47;
                      tmp45 = tmp47;
                    }
                  }
                }
                if (null != stateFromStores) {
                  let text;
                  let obj4 = { variant: "text-md/semibold", onPress: tmp19, style: obj5, children: `${tmp40} ` };
                  const username = stateFromStores.username;
                  let combined = username;
                  obj5 = { color: colorString };
                  const Text = tmp(event[28]).Text;
                  if (username.length > 20) {
                    const _HermesInternal = HermesInternal;
                    combined = "" + username.slice(0, 17) + "...";
                  }
                  const items4 = [closure_18(Text, obj4), , ];
                  class D {
                    constructor() {
                      let highestRoleId;
                      let id;
                      if (null != stateFromStores) {
                        const obj = ICYMIActionCreatorsDefault;
                        obj.itemInteracted(event.id, type, "open_profile");
                        const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
                        const obj2 = ICYMIActionCreatorsDefault;
                        obj2.feedItemActioned(obj3);
                        const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
                        highestRoleId = undefined;
                        const tmp11 = showUserProfileActionSheetDefault;
                        if (stateFromStores1 != null) {
                          highestRoleId = stateFromStores1.highestRoleId;
                        }
                        id = undefined;
                        if (channel != null) {
                          id = channel.id;
                        }
                        tmp11(obj4);
                      }
                    }
                  }
                  const CalendarIcon = tmp(event[40]).CalendarIcon;
                  tmp41[1] = channel(event[21]).colors.TEXT_SUBTLE;
                  items4[1] = closure_18(CalendarIcon, tmp41);
                  const intl = tmp(event[41]).intl;
                  const string = intl.string;
                  const t = tmp(event[41]).t;
                  if (null != event.host_id) {
                    text = ` ${string(t["42OrO4"])}`;
                  } else {
                    text = ` ${string(t.Vu15se)}`;
                  }
                  const obj6 = { children: items4 };
                  items4[2] = text;
                  obj7 = obj6;
                } else {
                  obj7 = { children: items5 };
                  const obj8 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
                  const CalendarIcon2 = tmp(event[40]).CalendarIcon;
                  items5 = [closure_18(CalendarIcon2, obj8), ];
                  const intl2 = tmp(event[41]).intl;
                  const string2 = intl2.string;
                  items5[1] = ` ${string2(tmp(tmp2[41]).t.T7MIsc)}`;
                }
                cResult[22] = stateFromStores;
                cResult[23] = colorString;
                cResult[24] = tmp19;
                cResult[25] = null != event.host_id;
                const tmp37Result = closure_19(closure_20, obj7);
                class D {
                  constructor() {
                    let highestRoleId;
                    let id;
                    if (null != stateFromStores) {
                      const obj = ICYMIActionCreatorsDefault;
                      obj.itemInteracted(event.id, type, "open_profile");
                      const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
                      const obj2 = ICYMIActionCreatorsDefault;
                      obj2.feedItemActioned(obj3);
                      const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
                      highestRoleId = undefined;
                      const tmp11 = showUserProfileActionSheetDefault;
                      if (stateFromStores1 != null) {
                        highestRoleId = stateFromStores1.highestRoleId;
                      }
                      id = undefined;
                      if (channel != null) {
                        id = channel.id;
                      }
                      tmp11(obj4);
                    }
                  }
                }
                tmp36 = tmp37Result;
              }
              const obj9 = { style: tmp31, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
              cResult[19] = event.id;
              cResult[20] = guild.name;
              const tmp35 = closure_18(tmp(event[28]).Text, obj9, event.id);
              class D {
                constructor() {
                  let highestRoleId;
                  let id;
                  if (null != stateFromStores) {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(event.id, type, "open_profile");
                    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
                    const obj2 = ICYMIActionCreatorsDefault;
                    obj2.feedItemActioned(obj3);
                    const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
                    highestRoleId = undefined;
                    const tmp11 = showUserProfileActionSheetDefault;
                    if (stateFromStores1 != null) {
                      highestRoleId = stateFromStores1.highestRoleId;
                    }
                    id = undefined;
                    if (channel != null) {
                      id = channel.id;
                    }
                    tmp11(obj4);
                  }
                }
              }
              tmp33 = tmp35;
            }
            if (null != stateFromStores) {
              const obj10 = { guild, author: stateFromStores };
              tmp28 = closure_18(closure_24, obj10);
            } else {
              const obj11 = { guild, size: tmp(event[26]).GuildIconSizes.NORMAL };
              const tmp27 = channel(event[26]);
              tmp28 = closure_18(tmp27, obj11);
            }
            cResult[15] = stateFromStores;
            cResult[16] = guild;
            cResult[17] = tmp28;
            tmp24 = tmp28;
          }
        }
      }
    }
    cResult[9] = stateFromStores;
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    cResult[10] = id1;
    cResult[11] = event.id;
    let highestRoleId1;
    if (stateFromStores1 != null) {
      highestRoleId1 = stateFromStores1.highestRoleId;
    }
    class D {
      constructor() {
        let highestRoleId;
        let id;
        if (null != stateFromStores) {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(event.id, type, "open_profile");
          const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
          const obj2 = ICYMIActionCreatorsDefault;
          obj2.feedItemActioned(obj3);
          const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
          highestRoleId = undefined;
          const tmp11 = showUserProfileActionSheetDefault;
          if (stateFromStores1 != null) {
            highestRoleId = stateFromStores1.highestRoleId;
          }
          id = undefined;
          if (channel != null) {
            id = channel.id;
          }
          tmp11(obj4);
        }
      }
    }
    cResult[12] = highestRoleId1;
    cResult[13] = type;
    cResult[14] = D;
    tmp19 = D;
  }
  class M {
    constructor() {
      let member = null;
      if (null != creator_id) {
        member = GuildMemberStore.getMember(guild.id, tmp);
      }
      return member;
    }
  }
  cResult[6] = guild.id;
  cResult[7] = creator_id;
  cResult[8] = M;
  tmp13 = M;
}) : ((guild) => {
  let Text;
  let children;
  let items1;
  let items6;
  let obj10;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let onHeaderPress;
  let tmp14Result;
  guild = guild.guild;
  const channel = guild.channel;
  const event = guild.event;
  const type = guild.type;
  let stateFromStores;
  let stateFromStores1;
  ({ children, onHeaderPress } = guild);
  let creator_id = event.host_id;
  const tmp = closure_22();
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  const useEnsureHydratedGuildUsers = guild(event[39]).useEnsureHydratedGuildUsers;
  const guild_id = event.guild_id;
  guild(event[39]);
  if (null != creator_id) {
    const items = [creator_id];
    items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedGuildUsers = useEnsureHydratedGuildUsers(guild_id, items1);
  const items2 = [UserStore];
  const tmp2Result = guild(event[33]);
  stateFromStores = tmp2Result.useStateFromStores(items2, () => UserStore.getUser(creator_id));
  const items3 = [GuildMemberStore];
  const tmp2Result2 = guild(event[33]);
  stateFromStores1 = tmp2Result2.useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = GuildMemberStore.getMember(guild.id, tmp);
    }
    return member;
  });
  const items4 = [stateFromStores, , , , ];
  let id;
  const useCallback = type.useCallback;
  if (channel != null) {
    id = channel.id;
  }
  items4[1] = id;
  items4[2] = event.id;
  let highestRoleId;
  if (stateFromStores1 != null) {
    highestRoleId = stateFromStores1.highestRoleId;
  }
  items4[3] = highestRoleId;
  items4[4] = type;
  let colorString;
  const callback = useCallback(() => {
    let highestRoleId;
    let id;
    if (null != stateFromStores) {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(event.id, type, "open_profile");
      const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedItemActioned(obj3);
      const obj4 = { userId: tmp.id, roleId: highestRoleId, channelId: id };
      highestRoleId = undefined;
      const tmp11 = showUserProfileActionSheetDefault;
      if (stateFromStores1 != null) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      id = undefined;
      if (channel != null) {
        id = channel.id;
      }
      tmp11(obj4);
    }
  }, items4);
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const element = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: tmp14Result, title: closure_18(guild(event[28]).Text, obj3, event.id), subtitle: closure_18(Text, obj5), id: event.id, type, onHeaderPress, children };
  const tmp13 = null != event.host_id;
  if (null != stateFromStores) {
    let obj = { guild, author: stateFromStores };
    tmp14Result = closure_18(closure_24, obj);
  } else {
    let obj2 = { guild, size: guild(event[26]).GuildIconSizes.NORMAL };
    const tmp17 = channel(event[26]);
    tmp14Result = closure_18(tmp17, obj2);
  }
  obj3 = { style: obj4, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  obj4 = { maxWidth };
  obj5 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: closure_19(closure_20, obj10) };
  Text = tmp2(tmp3[28]).Text;
  if (null != stateFromStores) {
    let text;
    const obj6 = { variant: "text-md/semibold", onPress: callback, style: obj7, children: `${tmp22} ` };
    const username = stateFromStores.username;
    let combined = username;
    obj7 = { color: colorString };
    const Text2 = tmp2(tmp3[28]).Text;
    if (username.length > 20) {
      const _HermesInternal = HermesInternal;
      combined = "" + username.slice(0, 17) + "...";
    }
    const items5 = [closure_18(Text2, obj6), , ];
    const obj8 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
    const CalendarIcon = tmp2(tmp3[40]).CalendarIcon;
    items5[1] = closure_18(CalendarIcon, obj8);
    const intl = tmp2(tmp3[41]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[41]).t;
    if (tmp13) {
      text = ` ${string(t["42OrO4"])}`;
    } else {
      text = ` ${string(t.Vu15se)}`;
    }
    const obj9 = { children: items5 };
    items5[2] = text;
    obj10 = obj9;
  } else {
    obj10 = { children: items6 };
    const obj11 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
    const CalendarIcon2 = tmp2(tmp3[40]).CalendarIcon;
    items6 = [closure_18(CalendarIcon2, obj11), ];
    const intl2 = tmp2(tmp3[41]).intl;
    const string2 = intl2.string;
    items6[1] = ` ${string2(guild(event[41]).t.T7MIsc)}`;
  }
  return closure_18(closure_26, element);
});
ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
const __initData2 = { code: "function ICYMISharedTsx2(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let author;
  let children;
  let id;
  let items1;
  let message;
  let obj4;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  let obj = guild(author[23]);
  const cResult = obj.c(48);
  guild = guild.guild;
  const channel = guild.channel;
  ({ timestamp, author } = guild);
  ({ message, children, id } = guild);
  const type = guild.type;
  ({ onHeaderPress, onHeaderLongPress } = guild);
  if (cResult[0] === channel) {
    let tmp4;
    let tmp7;
    if (cResult[1] === message) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildMemberStore];
      cResult[3] = items;
      tmp7 = items;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === author.id) {
      let tmp9;
      let tmp13;
      if (cResult[5] === guild.id) {
        tmp9 = cResult[6];
      }
      const tmpResult = guild(author[33]);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9);
      let colorString;
      if (stateFromStores != null) {
        colorString = stateFromStores.colorString;
      }
      if (colorString == null) {
        colorString = closure_13;
      }
      class E {
        constructor() {
          return GuildMemberStore.getMember(guild.id, author.id);
        }
      }
      const name = obj4.useName(guild.id, channel.id, author);
      if (cResult[7] !== tmp4) {
        let LightbulbIcon;
        if (guild(author[9]).ContentType.POPULAR_MESSAGE === tmp4) {
          LightbulbIcon = tmp(author[10]).FireIcon;
        } else if (guild(author[9]).ContentType.IMAGE === tmp4) {
          LightbulbIcon = tmp(author[11]).ImageIcon;
        } else if (guild(author[9]).ContentType.VIDEO === tmp4) {
          LightbulbIcon = tmp(author[12]).CirclePlayIcon;
        } else {
          LightbulbIcon = tmp(author[13]).LightbulbIcon;
        }
        cResult[7] = tmp4;
        cResult[8] = LightbulbIcon;
        tmp13 = LightbulbIcon;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === author.id) {
        if (cResult[10] === channel.id) {
          if (cResult[11] === id) {
            let tmp14;
            if (cResult[12] === type) {
              tmp14 = cResult[13];
            }
            const margin = id.useContext(tmp(author[42]).ICYMIContext).margin;
            if (cResult[14] === author) {
              let tmp16;
              if (cResult[15] === guild) {
                tmp16 = cResult[16];
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { maxWidth };
                cResult[17] = obj2;
              }
              if (cResult[18] === channel.id) {
                let tmp23;
                let tmp26;
                let tmp27;
                if (cResult[19] === guild.name) {
                  tmp23 = cResult[20];
                }
                if (cResult[21] !== margin) {
                  let obj3 = { marginRight: margin };
                  cResult[21] = margin;
                  cResult[22] = obj3;
                  tmp26 = obj3;
                } else {
                  tmp26 = cResult[22];
                }
                if (cResult[23] !== colorString) {
                  const obj5 = { color: colorString };
                  cResult[23] = colorString;
                  cResult[24] = obj5;
                  tmp27 = obj5;
                } else {
                  tmp27 = cResult[24];
                }
                let combined = name;
                if (name.length > 20) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + name.slice(0, 17) + "...";
                }
                class E {
                  constructor() {
                    return GuildMemberStore.getMember(guild.id, author.id);
                  }
                }
                if (cResult[25] === tmp14) {
                  if (cResult[26] === tmp27) {
                    let tmp30;
                    let tmp33;
                    if (cResult[27] === `${tmp28} `) {
                      tmp30 = cResult[28];
                    }
                    if (cResult[29] !== tmp13) {
                      const obj6 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
                      const tmp36 = closure_18(tmp13, obj6);
                      cResult[29] = tmp13;
                      class E {
                        constructor() {
                          return GuildMemberStore.getMember(guild.id, author.id);
                        }
                      }
                      cResult[30] = tmp36;
                      tmp33 = tmp36;
                    } else {
                      tmp33 = cResult[30];
                    }
                    guild(author[38]);
                    const text = ` ${obj11.contentTypeToText(tmp4)}`;
                    if (cResult[31] === tmp30) {
                      if (cResult[32] === tmp33) {
                        if (cResult[33] === ` ${obj11.contentTypeToText(tmp4)}`) {
                          let tmp38;
                          if (cResult[34] === tmp26) {
                            tmp38 = cResult[35];
                          }
                          if (cResult[36] === channel) {
                            if (cResult[37] === children) {
                              if (cResult[38] === guild) {
                                if (cResult[39] === id) {
                                  if (cResult[40] === onHeaderLongPress) {
                                    if (cResult[41] === onHeaderPress) {
                                      if (cResult[42] === tmp38) {
                                        if (cResult[43] === tmp16) {
                                          if (cResult[44] === tmp23) {
                                            if (cResult[45] === timestamp) {
                                              let tmp41;
                                              if (cResult[46] === type) {
                                                tmp41 = cResult[47];
                                              }
                                              return tmp41;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const element = { guild, channel, timestamp: null, avatar: tmp16, title: tmp23, subtitle: tmp38, onHeaderPress, onHeaderLongPress, id, type, children };
                          class E {
                            constructor() {
                              return GuildMemberStore.getMember(guild.id, author.id);
                            }
                          }
                          const tmp44 = closure_18(closure_26, element);
                          cResult[36] = channel;
                          cResult[37] = children;
                          cResult[38] = guild;
                          cResult[39] = id;
                          cResult[40] = onHeaderLongPress;
                          cResult[41] = onHeaderPress;
                          cResult[42] = tmp38;
                          cResult[43] = tmp16;
                          cResult[44] = tmp23;
                          cResult[45] = timestamp;
                          cResult[46] = type;
                          cResult[47] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                    }
                    const obj7 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: null, children: items1 };
                    class E {
                      constructor() {
                        return GuildMemberStore.getMember(guild.id, author.id);
                      }
                    }
                    items1 = [tmp30, tmp33, text];
                    const tmp40 = closure_19(guild(author[28]).Text, obj7);
                    cResult[31] = tmp30;
                    cResult[32] = tmp33;
                    cResult[33] = text;
                    cResult[34] = tmp26;
                    cResult[35] = tmp40;
                    tmp38 = tmp40;
                  }
                }
                const obj8 = { style: tmp27, onPress: tmp14, variant: "text-md/semibold", children: tmp29 };
                const tmp32 = closure_18(guild(author[28]).Text, obj8);
                cResult[25] = tmp14;
                cResult[26] = tmp27;
                cResult[27] = tmp29;
                cResult[28] = tmp32;
                tmp30 = tmp32;
              }
              const obj9 = { style: null, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
              class E {
                constructor() {
                  return GuildMemberStore.getMember(guild.id, author.id);
                }
              }
              const tmp25 = closure_18(guild(author[28]).Text, obj9, channel.id);
              cResult[18] = channel.id;
              cResult[19] = guild.name;
              cResult[20] = tmp25;
              tmp23 = tmp25;
            }
            class E {
              constructor() {
                return GuildMemberStore.getMember(guild.id, author.id);
              }
            }
            tmp19[0] = guild;
            tmp19[1] = author;
            const tmp20 = closure_18(closure_24, tmp19);
            cResult[14] = author;
            cResult[15] = guild;
            cResult[16] = tmp20;
            tmp16 = tmp20;
          }
        }
      }
      const fn = function w() {
        const obj = ICYMIActionCreatorsDefault;
        obj.itemInteracted(id, type, "open_profile");
        const obj2 = ICYMIActionCreatorsDefault;
        const obj3 = { itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
        obj2.feedItemActioned(obj3);
        const obj4 = { userId: author.id, channelId: channel.id };
        showUserProfileActionSheetDefault(obj4);
      };
      cResult[9] = author.id;
      cResult[10] = channel.id;
      cResult[11] = id;
      cResult[12] = type;
      cResult[13] = fn;
      tmp14 = fn;
    }
    class E {
      constructor() {
        return GuildMemberStore.getMember(guild.id, author.id);
      }
    }
    cResult[4] = author.id;
    cResult[5] = guild.id;
    cResult[6] = E;
    tmp9 = E;
  }
  const tmpResult4 = guild(author[38]);
  const determineContentTypeResult = tmpResult4.determineContentType(channel, message);
  cResult[0] = channel;
  cResult[1] = message;
  cResult[2] = determineContentTypeResult;
  tmp4 = determineContentTypeResult;
}) : ((guild) => {
  let LightbulbIcon;
  let Text;
  let children;
  let items3;
  let obj3;
  let obj4;
  let obj5;
  let onHeaderLongPress;
  let onHeaderPress;
  let timestamp;
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const message = guild.message;
  const id = guild.id;
  const type = guild.type;
  let obj = message;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = message.useMemo(() => {
    const obj = ICYMIUtils;
    return obj.determineContentType(channel, message);
  }, items);
  let obj2 = guild(author[33]);
  const items1 = [GuildMemberStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const tmp2Result = guild(author[34]);
  const name = tmp2Result.useName(guild.id, channel.id, author);
  if (guild(author[9]).ContentType.POPULAR_MESSAGE === memo) {
    LightbulbIcon = tmp2(tmp3[10]).FireIcon;
  } else if (guild(author[9]).ContentType.IMAGE === memo) {
    LightbulbIcon = tmp2(tmp3[11]).ImageIcon;
  } else if (guild(author[9]).ContentType.VIDEO === memo) {
    LightbulbIcon = tmp2(tmp3[12]).CirclePlayIcon;
  } else {
    LightbulbIcon = tmp2(tmp3[13]).LightbulbIcon;
  }
  const items2 = [author.id, channel.id, id, type];
  const callback = obj.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, type, "open_profile");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
    obj2.feedItemActioned(obj3);
    const obj4 = { userId: author.id, channelId: channel.id };
    showUserProfileActionSheetDefault(obj4);
  }, items2);
  const element = { guild, channel, timestamp, avatar: closure_18(closure_24, { guild, author }), title: closure_18(guild(tmp3[28]).Text, obj3, channel.id), subtitle: closure_19(Text, obj5), onHeaderPress, onHeaderLongPress, id, type, children };
  const margin = obj.useContext(tmp2(tmp3[42]).ICYMIContext).margin;
  obj3 = { style: obj4, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
  obj4 = { maxWidth };
  obj5 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: { marginRight: margin }, children: items3 };
  Text = tmp2(tmp3[28]).Text;
  let combined = name;
  const obj6 = { style: { color: colorString }, onPress: callback, variant: "text-md/semibold", children: `${tmp10} ` };
  const Text2 = tmp2(tmp3[28]).Text;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  items3 = [closure_18(Text2, obj6), , ];
  const obj7 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
  items3[1] = closure_18(LightbulbIcon, obj7);
  guild(author[38]);
  items3[2] = ` ${obj10.contentTypeToText(tmp)}`;
  return closure_18(closure_26, element);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bgColorHighlighted;
  let children;
  let closure_0;
  let hideDivider;
  let highlight;
  let items;
  let items2;
  let token;
  let obj = require("react");
  const cResult = obj.c(24);
  ({ children, hideDivider, highlight } = arg0);
  _require = tmp4;
  const tmp5 = closure_22();
  const tmp7 = token(tmp2[43])();
  const tmpResult = require("useToken");
  token = tmpResult.useToken(token(tmp2[21]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, tmp7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult4 = require("ColorUtils");
    const hexWithOpacityResult = tmpResult4.hexWithOpacity(token(bgColorHighlighted[21]).unsafe_rawColors.BRAND_360, 0.25);
    cResult[0] = hexWithOpacityResult;
    bgColorHighlighted = hexWithOpacityResult;
  } else {
    bgColorHighlighted = cResult[0];
  }
  const tmpResult5 = require("ReanimatedRexport");
  const sharedValue = tmpResult5.useSharedValue(0);
  const tmpResult6 = require("ReanimatedRexport");
  class I {
    constructor() {
      let items;
      let obj2;
      const obj = { backgroundColor: obj2.interpolateColor(sharedValue.get(), [0, 1], items) };
      items = [token, first];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  let obj2 = { interpolateColor: tmp(tmp2[46]).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted };
  I.__closure = obj2;
  I.__workletHash = 11116019021445;
  I.__initData = __initData;
  const animatedStyle = tmpResult6.useAnimatedStyle(I);
  if (cResult[1] === (undefined !== highlight && highlight)) {
    let tmp13;
    let tmp14;
    let tmp25;
    if (cResult[2] === sharedValue) {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    const effect = sharedValue.useEffect(tmp13, tmp14);
    if (undefined !== highlight && highlight) {
      if (cResult[5] === animatedStyle) {
        let tmp29;
        if (cResult[6] === tmp5.simplePostContent) {
          tmp29 = cResult[7];
        }
        if (cResult[8] === children) {
          let tmp30;
          let tmp33;
          if (cResult[9] === tmp29) {
            tmp30 = cResult[10];
          }
          if (cResult[11] !== hideDivider) {
            let tmp34 = null;
            if (!hideDivider) {
              tmp34 = closure_18(closure_23, {});
            }
            cResult[11] = hideDivider;
            cResult[12] = tmp34;
            tmp33 = tmp34;
          } else {
            tmp33 = cResult[12];
          }
          if (cResult[13] === tmp30) {
            let tmp37;
            if (cResult[14] === tmp33) {
              tmp37 = cResult[15];
            }
            tmp25 = tmp37;
          }
          const obj3 = { children: items };
          items = [tmp30, tmp33];
          const tmp40 = closure_19(closure_20, obj3);
          cResult[13] = tmp30;
          cResult[14] = tmp33;
          cResult[15] = tmp40;
          tmp37 = tmp40;
        }
        const obj4 = { style: tmp29, children };
        const tmp32 = closure_18(token(bgColorHighlighted[46]).View, obj4);
        cResult[8] = children;
        cResult[9] = tmp29;
        cResult[10] = tmp32;
        tmp30 = tmp32;
      }
      const items1 = [tmp5.simplePostContent, animatedStyle];
      cResult[5] = animatedStyle;
      cResult[6] = tmp5.simplePostContent;
      cResult[7] = items1;
      tmp29 = items1;
    } else {
      if (cResult[16] === children) {
        let tmp17;
        let tmp21;
        if (cResult[17] === tmp5.simplePostContent) {
          tmp17 = cResult[18];
        }
        if (cResult[19] !== hideDivider) {
          let tmp22 = null;
          if (!hideDivider) {
            tmp22 = closure_18(closure_23, {});
          }
          cResult[19] = hideDivider;
          cResult[20] = tmp22;
          tmp21 = tmp22;
        } else {
          tmp21 = cResult[20];
        }
        if (cResult[21] === tmp17) {
          if (cResult[22] === tmp21) {
            tmp25 = cResult[23];
          }
        }
        const obj5 = { children: items2 };
        items2 = [tmp17, tmp21];
        const tmp28 = closure_19(closure_20, obj5);
        cResult[21] = tmp17;
        cResult[22] = tmp21;
        cResult[23] = tmp28;
        tmp25 = tmp28;
      }
      const obj6 = { style: tmp5.simplePostContent, children };
      const tmp20 = closure_18(View, obj6);
      cResult[16] = children;
      cResult[17] = tmp5.simplePostContent;
      cResult[18] = tmp20;
      tmp17 = tmp20;
    }
    return tmp25;
  }
  const fn = function x() {
    if (closure_0) {
      set = sharedValue.set;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = timing;
      const withTimingResult = obj.withTiming(1, { duration: 500 });
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      const result = set(withSequence(withTimingResult, withDelay(500, obj2.withTiming(0, { duration: 350 }))));
    }
  };
  const items3 = [undefined !== highlight && highlight, sharedValue];
  cResult[1] = undefined !== highlight && highlight;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp14 = items3;
  tmp13 = fn;
}) : ((arg0) => {
  let c2;
  let children;
  let hideDivider;
  let highlight;
  let items1;
  let tmp16;
  ({ children, hideDivider, highlight } = arg0);
  if (highlight === undefined) {
    highlight = false;
  }
  let token;
  const tmp = closure_22();
  const tmp4 = token(4791)();
  let obj = highlight(4580);
  const tmp2 = token;
  token = obj.useToken(token(587).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, tmp4);
  let obj2 = highlight(4727);
  const hexWithOpacityResult = obj2.hexWithOpacity(token(587).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  const obj3 = highlight(4612);
  const sharedValue = obj3.useSharedValue(0);
  const fn = function c() {
    let items;
    let obj2;
    const obj = { backgroundColor: obj2.interpolateColor(sharedValue.get(), [0, 1], items) };
    items = [token, c2];
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj4 = highlight(4612);
  fn.__closure = { interpolateColor: highlight(4612).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__workletHash = 11803325452646;
  fn.__initData = __initData2;
  let items = [highlight, sharedValue];
  ({ interpolateColor: highlight(4612).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (highlight) {
      set = sharedValue.set;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj = timing;
      const withTimingResult = obj.withTiming(1, { duration: 500 });
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      const result = set(withSequence(withTimingResult, withDelay(500, obj2.withTiming(0, { duration: 350 }))));
    }
  }, items);
  const obj6 = { children: null };
  if (highlight) {
    const obj7 = { style: items1, children };
    items1 = [tmp.simplePostContent, animatedStyle];
    const items2 = [closure_18(tmp2(4612).View, obj7), ];
    let tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = closure_18(closure_23, {});
    }
    items2[1] = tmp12Result;
    obj6.children = items2;
    tmp16 = obj6;
  } else {
    const obj8 = { style: tmp.simplePostContent, children };
    const items3 = [closure_18(View, obj8), ];
    let tmp12Result2 = null;
    if (!hideDivider) {
      tmp12Result2 = closure_18(closure_23, {});
    }
    items3[1] = tmp12Result2;
    obj6.children = items3;
    tmp16 = obj6;
  }
  return closure_19(closure_20, tmp16);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, id2, arg2) => {
  let closure_2;
  let first;
  let messageCount;
  let mostRecentMessage;
  let thread;
  let tmp7;
  _require = id;
  importDefault = id2;
  dependencyMap = arg2;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, ThreadMessageStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id2.id) {
    const fn = function h() {
      let num;
      const obj = { thread: ChannelStore.getChannel(id2.id), messageCount: num, mostRecentMessage: ThreadMessageStore.getMostRecentMessage(id2.id) };
      num = ThreadMessageStore.getCount(id2.id);
      if (num == null) {
        num = 0;
      }
      return obj;
    };
    cResult[1] = id2.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (cResult[3] === id.id) {
    if (cResult[4] === arg2) {
      let tmp9;
      let tmp10;
      if (cResult[5] === id2) {
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      const effect = react.useEffect(tmp9, tmp10);
      if (cResult[8] === messageCount) {
        if (cResult[9] === mostRecentMessage) {
          let tmp13;
          if (cResult[10] === thread) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      let obj2 = { thread, messageCount, mostRecentMessage };
      cResult[8] = messageCount;
      cResult[9] = mostRecentMessage;
      cResult[10] = thread;
      cResult[11] = obj2;
      tmp13 = obj2;
    }
  }
  class T {
    constructor() {
      const tmp2 = (id2.hasFlag(constants.HAS_THREAD) || closure_2) && null == ThreadMessageStore.getMostRecentMessage(id2.id);
      if (tmp2) {
        const obj = ChannelActionCreatorsDefault;
        obj.preload(id.id, id2.id);
        const obj3 = { channelId: id2.id, isPreload: true, limit: 25 };
        const obj2 = MessageActionCreatorsDefault;
        const messages = obj2.fetchMessages(obj3);
      }
    }
  }
  const items1 = [id.id, arg2, id2];
  cResult[3] = id.id;
  cResult[4] = arg2;
  cResult[5] = id2;
  cResult[6] = T;
  cResult[7] = items1;
  tmp10 = items1;
  tmp9 = T;
}) : ((id, arg1, arg2) => {
  let closure_2;
  let messageCount;
  let mostRecentMessage;
  let thread;
  _require = id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let num;
    const obj = { thread: ChannelStore.getChannel(closure_1.id), messageCount: num, mostRecentMessage: ThreadMessageStore.getMostRecentMessage(closure_1.id) };
    num = ThreadMessageStore.getCount(closure_1.id);
    if (num == null) {
      num = 0;
    }
    return obj;
  });
  const items1 = [id.id, arg2, arg1];
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    const tmp2 = (closure_1.hasFlag(constants.HAS_THREAD) || closure_2) && null == ThreadMessageStore.getMostRecentMessage(closure_1.id);
    if (tmp2) {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(id.id, closure_1.id);
      const obj3 = { channelId: closure_1.id, isPreload: true, limit: 25 };
      const obj2 = MessageActionCreatorsDefault;
      const messages = obj2.fetchMessages(obj3);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentMessage) => {
  let first;
  let inForum;
  let items1;
  let items2;
  let items4;
  let items5;
  let messageCount;
  let mostRecentMessage;
  let onPress;
  let style;
  let thread;
  let tmp9;
  let obj = parentMessage(576);
  const cResult = obj.c(50);
  parentMessage = parentMessage.parentMessage;
  ({ onPress, style, inForum } = parentMessage);
  const guild = parentMessage.guild;
  const tmp4 = closure_22();
  if (inForum == null) {
    inForum = false;
  }
  ({ thread, messageCount, mostRecentMessage } = closure_29(guild, parentMessage, inForum));
  closure_29(guild, parentMessage, inForum);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentMessage.id) {
    const fn = function l() {
      const obj = { channelId: parentMessage.id };
      return PermissionStore.canWithPartialContext(constants.VIEW_CHANNEL, obj);
    };
    cResult[1] = parentMessage.id;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = parentMessage(504);
  if (tmpResult.useStateFromStores(first, tmp9)) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        if (cResult[22] === style) {
          let tmp10;
          if (cResult[23] === tmp4.comments) {
            tmp10 = cResult[24];
          }
          let author;
          if (mostRecentMessage != null) {
            author = mostRecentMessage.author;
          }
          if (cResult[25] === author) {
            let tmp12;
            let tmp15;
            if (cResult[26] === thread.guild_id) {
              tmp12 = cResult[27];
            }
            if (cResult[28] !== mostRecentMessage.content) {
              let parseInlineReplyResult;
              if (mostRecentMessage.content.length > 0) {
                const obj4 = MarkupUtilsDefault;
                parseInlineReplyResult = obj4.parseInlineReply(mostRecentMessage.content, true);
              } else {
                const intl = tmp(1126).intl;
                parseInlineReplyResult = intl.string(tmp(1126).t["6kp9H2"]);
              }
              cResult[28] = mostRecentMessage.content;
              cResult[29] = parseInlineReplyResult;
              tmp15 = parseInlineReplyResult;
            } else {
              tmp15 = cResult[29];
            }
            if (cResult[30] === tmp4.recentCommentText) {
              let tmp18;
              let tmp21;
              let tmp24;
              let tmp27;
              if (cResult[31] === tmp15) {
                tmp18 = cResult[32];
              }
              if (cResult[33] !== tmp4.commentsIcon) {
                const obj2 = { style: tmp4.commentsIcon };
                const tmp23 = closure_18(parentMessage(5855).ChatIcon, obj2);
                cResult[33] = tmp4.commentsIcon;
                cResult[34] = tmp23;
                tmp21 = tmp23;
              } else {
                tmp21 = cResult[34];
              }
              if (cResult[35] !== str) {
                const obj3 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
                const tmp26 = closure_18(parentMessage(4886).Text, obj3);
                cResult[35] = str;
                cResult[36] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[36];
              }
              if (cResult[37] !== tmp4.chevron) {
                const obj5 = { style: tmp4.chevron, size: "xxs" };
                const tmp29 = closure_18(parentMessage(6708).ChevronSmallRightIcon, obj5);
                cResult[37] = tmp4.chevron;
                cResult[38] = tmp29;
                tmp27 = tmp29;
              } else {
                tmp27 = cResult[38];
              }
              if (cResult[39] === tmp4.commentCount) {
                if (cResult[40] === tmp27) {
                  if (cResult[41] === tmp21) {
                    let tmp30;
                    if (cResult[42] === tmp24) {
                      tmp30 = cResult[43];
                    }
                    if (cResult[44] === onPress) {
                      if (cResult[45] === tmp30) {
                        if (cResult[46] === tmp10) {
                          if (cResult[47] === tmp12) {
                            let tmp34;
                            if (cResult[48] === tmp18) {
                              tmp34 = cResult[49];
                            }
                            return tmp34;
                          }
                        }
                      }
                    }
                    const obj6 = { style: tmp10, onPress, children: items1 };
                    items1 = [tmp12, tmp18, tmp30];
                    const tmp36 = closure_19(parentMessage(5909).PressableHighlight, obj6);
                    cResult[44] = onPress;
                    cResult[45] = tmp30;
                    cResult[46] = tmp10;
                    cResult[47] = tmp12;
                    cResult[48] = tmp18;
                    cResult[49] = tmp36;
                    tmp34 = tmp36;
                  }
                }
              }
              const obj7 = { style: tmp4.commentCount, children: items2 };
              items2 = [tmp21, tmp24, tmp27];
              const tmp33 = closure_19(View, obj7);
              cResult[39] = tmp4.commentCount;
              cResult[40] = tmp27;
              cResult[41] = tmp21;
              cResult[42] = tmp24;
              cResult[43] = tmp33;
              tmp30 = tmp33;
            }
            const obj8 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp4.recentCommentText, children: tmp15 };
            const tmp20 = closure_18(parentMessage(4886).Text, obj8);
            cResult[30] = tmp4.recentCommentText;
            cResult[31] = tmp15;
            cResult[32] = tmp20;
            tmp18 = tmp20;
          }
          const obj9 = { user: author, guildId: thread.guild_id, size: parentMessage(1188).AvatarSizes.XSMALL };
          const Avatar = tmp(1188).Avatar;
          const tmp14 = closure_18(Avatar, obj9);
          cResult[25] = author;
          cResult[26] = thread.guild_id;
          cResult[27] = tmp14;
          tmp12 = tmp14;
        }
        const items3 = [tmp4.comments, style];
        cResult[22] = style;
        cResult[23] = tmp4.comments;
        cResult[24] = items3;
        tmp10 = items3;
      }
    }
    if (cResult[3] === style) {
      let tmp37;
      let tmp38;
      let tmp40;
      let tmp43;
      let tmp46;
      if (cResult[4] === tmp4.comments) {
        tmp37 = cResult[5];
      }
      const _Symbol = Symbol;
      const recentCommentText = tmp4.recentCommentText;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(parentMessage(1126).t.VMWjXW);
        cResult[6] = stringResult;
        tmp38 = stringResult;
      } else {
        tmp38 = cResult[6];
      }
      if (cResult[7] !== tmp4.recentCommentText) {
        const obj10 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: recentCommentText, children: tmp38 };
        const tmp42 = closure_18(parentMessage(4886).Text, obj10);
        cResult[7] = tmp4.recentCommentText;
        cResult[8] = tmp42;
        tmp40 = tmp42;
      } else {
        tmp40 = cResult[8];
      }
      if (cResult[9] !== tmp4.commentsIcon) {
        const obj11 = { style: tmp4.commentsIcon };
        const tmp45 = closure_18(parentMessage(5855).ChatIcon, obj11);
        cResult[9] = tmp4.commentsIcon;
        cResult[10] = tmp45;
        tmp43 = tmp45;
      } else {
        tmp43 = cResult[10];
      }
      if (cResult[11] !== tmp4.chevron) {
        const obj12 = { style: tmp4.chevron, size: "xxs" };
        const tmp48 = closure_18(parentMessage(6708).ChevronSmallRightIcon, obj12);
        cResult[11] = tmp4.chevron;
        cResult[12] = tmp48;
        tmp46 = tmp48;
      } else {
        tmp46 = cResult[12];
      }
      if (cResult[13] === tmp4.commentCount) {
        if (cResult[14] === tmp43) {
          let tmp49;
          if (cResult[15] === tmp46) {
            tmp49 = cResult[16];
          }
          if (cResult[17] === onPress) {
            if (cResult[18] === tmp37) {
              if (cResult[19] === tmp40) {
                let tmp53;
                if (cResult[20] === tmp49) {
                  tmp53 = cResult[21];
                }
                return tmp53;
              }
            }
          }
          const obj13 = { style: tmp37, onPress, children: items4 };
          items4 = [tmp40, tmp49];
          const tmp55 = closure_19(parentMessage(5909).PressableHighlight, obj13);
          cResult[17] = onPress;
          cResult[18] = tmp37;
          cResult[19] = tmp40;
          cResult[20] = tmp49;
          cResult[21] = tmp55;
          tmp53 = tmp55;
        }
      }
      const obj14 = { style: tmp4.commentCount, children: items5 };
      items5 = [tmp43, tmp46];
      const tmp52 = closure_19(View, obj14);
      cResult[13] = tmp4.commentCount;
      cResult[14] = tmp43;
      cResult[15] = tmp46;
      cResult[16] = tmp52;
      tmp49 = tmp52;
    }
    const items6 = [tmp4.comments, style];
    cResult[3] = style;
    cResult[4] = tmp4.comments;
    cResult[5] = items6;
    tmp37 = items6;
  } else {
    return null;
  }
}) : ((parentMessage) => {
  let inForum;
  let intl2;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let messageCount;
  let mostRecentMessage;
  let onPress;
  let parseInlineReplyResult;
  let style;
  let thread;
  parentMessage = parentMessage.parentMessage;
  ({ onPress, style, inForum } = parentMessage);
  const guild = parentMessage.guild;
  const tmp = closure_22();
  if (inForum == null) {
    inForum = false;
  }
  ({ thread, messageCount, mostRecentMessage } = closure_29(guild, parentMessage, inForum));
  closure_29(guild, parentMessage, inForum);
  let obj = parentMessage(504);
  const items = [PermissionStore];
  if (obj.useStateFromStores(items, () => {
    const obj = { channelId: parentMessage.id };
    return PermissionStore.canWithPartialContext(constants.VIEW_CHANNEL, obj);
  })) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        const obj2 = { style: items1, onPress, children: items2 };
        items1 = [tmp.comments, style];
        const PressableHighlight = tmp4(5909).PressableHighlight;
        let author;
        const Avatar = tmp4(1188).Avatar;
        if (mostRecentMessage != null) {
          author = mostRecentMessage.author;
        }
        const obj3 = { user: author, guildId: thread.guild_id, size: parentMessage(1188).AvatarSizes.XSMALL };
        items2 = [closure_18(Avatar, obj3), , ];
        const obj4 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp.recentCommentText, children: parseInlineReplyResult };
        const Text = tmp4(4886).Text;
        if (mostRecentMessage.content.length > 0) {
          const obj5 = MarkupUtilsDefault;
          parseInlineReplyResult = obj5.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = tmp4(1126).intl;
          parseInlineReplyResult = intl.string(tmp4(1126).t["6kp9H2"]);
        }
        items2[1] = closure_18(Text, obj4);
        const obj6 = { style: tmp.commentCount, children: items3 };
        const obj7 = { style: tmp.commentsIcon };
        items3 = [closure_18(parentMessage(5855).ChatIcon, obj7), , ];
        const obj8 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
        items3[1] = closure_18(parentMessage(4886).Text, obj8);
        const obj9 = { style: tmp.chevron, size: "xxs" };
        items3[2] = closure_18(parentMessage(6708).ChevronSmallRightIcon, obj9);
        items2[2] = closure_19(View, obj6);
        return closure_19(PressableHighlight, obj2);
      }
    }
    const obj10 = { style: items4, onPress, children: items5 };
    items4 = [tmp.comments, style];
    const PressableHighlight2 = tmp4(5909).PressableHighlight;
    const obj11 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.recentCommentText, children: intl2.string(parentMessage(1126).t.VMWjXW) };
    const Text2 = tmp4(4886).Text;
    intl2 = tmp4(1126).intl;
    items5 = [closure_18(Text2, obj11), ];
    const obj12 = { style: tmp.commentCount, children: items6 };
    const obj13 = { style: tmp.commentsIcon };
    items6 = [closure_18(parentMessage(5855).ChatIcon, obj13), ];
    const obj14 = { style: tmp.chevron, size: "xxs" };
    items6[1] = closure_18(parentMessage(6708).ChevronSmallRightIcon, obj14);
    items5[1] = closure_19(View, obj12);
    return closure_19(PressableHighlight2, obj10);
  } else {
    return null;
  }
});
function truncateUsername(arr) {
  let combined = arr;
  if (arr.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + arr.slice(0, 17) + "...";
  }
  return combined;
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  let channelId;
  let messageId;
  _require = id;
  importDefault = id3;
  const timerId = setTimeout(() => {
    const obj = ReadStateActionCreators;
    const obj2 = { page: constants2.ICYMI, object: constants.ACK_MESSAGE_VIEWED, objectType: unpackModuleId.ACK_SEMI_AUTOMATIC };
    obj.ack(channelId, obj2, true, true, messageId);
  }, 1500);
  const tmp3 = safeTransitionToDefault;
  tmp3(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    let obj = require("RunAfterInteractionsUtils");
    obj.runAfterInteractions(() => {
      const obj2 = { channelId, limit, jump: { messageId, flash: true, jumpType: flow_Client.JumpType.ANIMATED } };
      const obj = MessageActionCreatorsDefault;
      ({ messageId, flash: true, jumpType: flow_Client.JumpType.ANIMATED });
      const messages = obj.fetchMessages(obj2);
    }, 150);
  }
};
export const Separator = tmp4;
export { truncateUsername };
export const CutoutGuildIcon = tmp5;
export const GuildContentPost = tmp6;
export const AnnouncementContentPost = tmp7;
export const GuildEventPost = tmp8;
export const MessageContentPost = tmp9;
export const SimplePost = tmp10;
export const ThreadAsComments = tmp11;