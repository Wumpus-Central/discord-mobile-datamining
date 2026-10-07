// === Module 16475: ICYMIShared ===

// Module 16475 (ICYMIShared)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Client from "Client" /* 4793 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import timing from "timing" /* 4897 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6612 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6760 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import ICYMIUtils from "ICYMIUtils" /* 8038 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import ClipView from "ClipView" /* 8502 */;
import openDetailsActionSheet from "openDetailsActionSheet" /* 16476 */;
import noop from "module_19" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6819 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsObjects: c10, AnalyticsObjectTypes: closure_11, AnalyticsPages: closure_12, DEFAULT_ROLE_COLOR_HEX: map1, MAX_MESSAGES_FOR_JUMP: closure_14, MessageFlags: closure_15, Permissions: closure_16, Routes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let c21 = 225;
const createICYMIStyles = fn(16434);
let closure_22 = createICYMIStyles.createICYMIStyles((paddingBottom) => {
  let num = 0;
  if (obj.isAndroid()) {
    num = -2;
  }
  const obj2 = { simplePostContent: { flex: 1, marginTop: num, overflow: "hidden" }, content: null, insetIconWrapper: null, authorIcon: null, moreDetailsIcon: null, channelNameAndAccessory: null, channelNameAndAccessoryLarge: null, header: null, headerInfo: null, title: null, titleLeft: null, subTitleContainer: null, subtitle: null, genContentSubtitle: null, genContentSubtitleChannel: null, subtitleTrailing: null, separator: null, eventsSubtitle: null, comments: null, recentCommentText: null, commentCount: null, commentsIcon: null, chevron: null };
  obj = PlatformUtils;
  let num2 = 0;
  if (tmpResult.isAndroid()) {
    num2 = -2;
  }
  obj2.content = { flex: 1, marginTop: num2, overflow: "hidden", paddingTop: paddingBottom.margin };
  const rect = { position: "absolute", right: -4, bottom: -2, padding: 4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
  obj2.insetIconWrapper = rect;
  obj2.authorIcon = { position: "absolute", right: -4, bottom: -2 };
  tmpResult = PlatformUtils;
  obj2.moreDetailsIcon = { tintColor: nativeDefault.colors.TEXT_MUTED };
  obj2.channelNameAndAccessory = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin };
  obj2.channelNameAndAccessoryLarge = { flexDirection: "column", paddingBottom: paddingBottom.margin, marginHorizontal: paddingBottom.margin };
  obj2.header = { flexDirection: "row", flexGrow: 1 };
  obj2.headerInfo = { flexGrow: 1, flexShrink: 1, marginLeft: paddingBottom.margin };
  obj2.title = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 2 };
  obj2.titleLeft = { flexShrink: 1, flexGrow: 0, flexDirection: "row", alignItems: "center", gap: 6 };
  const obj3 = { tintColor: nativeDefault.colors.TEXT_MUTED };
  obj2.subTitleContainer = { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm };
  obj2.subtitle = { flexShrink: 1, flexGrow: 0, width: "100%" };
  const obj4 = { flexDirection: "row", justifyContent: "space-between", borderRadius: nativeDefault.radii.sm };
  obj2.genContentSubtitle = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj2.genContentSubtitleChannel = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1 };
  obj2.subtitleTrailing = { paddingVertical: 1 };
  const size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj2.separator = size;
  obj2.eventsSubtitle = { flexDirection: "row", alignItems: "center" };
  const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj2.comments = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj2.recentCommentText = { flexGrow: 1, flexShrink: 1, marginRight: 12 };
  obj2.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 2, justifySelf: "end" };
  const size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj2.commentsIcon = size1;
  const obj6 = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.md, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj2.chevron = { tintColor: nativeDefault.colors.TEXT_MUTED };
  return obj2;
});
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_22();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = collapsedCategories(View, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => collapsedCategories(View, { style: closure_22().separator }));
let closure_23 = tmp4;
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ guild, author } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] === author) {
    if (cResult[1] === guild.id) {
      if (cResult[2] === tmp4.authorIcon) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === guild) {
        if (cResult[5] === tmp5) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
      const obj2 = { guild, icon: tmp5 };
      const tmp10 = collapsedCategories(closure_25, obj2);
      cResult[4] = guild;
      cResult[5] = tmp5;
      cResult[6] = tmp10;
      tmp7 = tmp10;
    }
  }
  const tmp6 = collapsedCategories(native.Avatar, { animate: true, style: tmp4.authorIcon, guildId: guild.id, user: author, size: native.AvatarSizes.XSMALL });
  cResult[0] = author;
  cResult[1] = guild.id;
  cResult[2] = tmp4.authorIcon;
  cResult[3] = tmp6;
  tmp5 = tmp6;
  const obj3 = { animate: true, style: tmp4.authorIcon, guildId: guild.id, user: author, size: native.AvatarSizes.XSMALL };
}) : ((guild) => {
  guild = guild.guild;
  const obj = { guild, icon: null };
  const tmp = closure_22();
  obj.icon = collapsedCategories(native.Avatar, { animate: true, style: closure_22().authorIcon, guildId: guild.id, user: guild.author, size: native.AvatarSizes.XSMALL });
  return collapsedCategories(closure_25, obj);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ guild, icon } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size = { width: 40, height: 40 };
    cResult[0] = size;
    let first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const point = { shape: ClipView.CutoutShape.Circle, x: 16, y: 14, size: 32 };
    const items = [point];
    cResult[1] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj2 = { cutouts: tmp5, children: null };
    const obj3 = { guild, size: null };
    const tmp9 = ClipViewDefault;
    obj3.size = GuildIcon.GuildIconSizes.NORMAL;
    obj2.children = collapsedCategories(GuildIconDefault, obj3);
    const tmp11 = collapsedCategories(tmp9, obj2);
    cResult[2] = guild;
    cResult[3] = tmp11;
    let tmp6 = tmp11;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === icon) {
    if (cResult[5] === tmp6) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const obj4 = { style: first, children: null };
  const items1 = [tmp6, icon];
  obj4.children = items1;
  const tmp13 = closure_1_19(View, obj4);
  cResult[4] = icon;
  cResult[5] = tmp6;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
  const obj = { style: { width: 40, height: 40 }, children: null };
  ({ guild, icon } = arg0);
  const obj2 = { cutouts: null, children: null };
  const point = { shape: ClipView.CutoutShape.Circle, x: 16, y: 14, size: 32 };
  const items = [point];
  obj2.cutouts = items;
  const obj3 = { guild, size: null };
  const tmp = ClipViewDefault;
  obj3.size = GuildIcon.GuildIconSizes.NORMAL;
  obj2.children = collapsedCategories(GuildIconDefault, obj3);
  const items1 = [collapsedCategories(tmp, obj2), icon];
  obj.children = items1;
  return closure_1_19(View, obj);
});
let closure_25 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(id[23]).c(43);
  guild = guild.guild;
  const channel = guild.channel;
  ({ timestamp, hideTimestamp, children, avatar, title, subtitle, id } = guild);
  const type = guild.type;
  ({ onHeaderPress, onHeaderLongPress, disableInteractions } = guild);
  const tmp4 = closure_22();
  const obj = guild(id[23]);
  const tmp5 = guild(id[27]).useFontScale() > 1.8 ? tmp4.channelNameAndAccessoryLarge : tmp4.channelNameAndAccessory;
  if (cResult[0] === hideTimestamp) {
    if (cResult[1] === timestamp) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.titleLeft) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === title) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === channel) {
          if (cResult[8] === disableInteractions) {
            if (cResult[9] === guild) {
              if (cResult[10] === id) {
                if (cResult[11] === tmp4.subtitleTrailing) {
                  if (cResult[12] === type) {
                    let tmp13 = cResult[13];
                  }
                  if (cResult[14] === tmp4.title) {
                    if (cResult[15] === tmp9) {
                      if (cResult[16] === tmp13) {
                        let tmp18 = cResult[17];
                      }
                      if (cResult[18] === tmp4.subtitle) {
                        if (cResult[19] === subtitle) {
                          let tmp22 = cResult[20];
                        }
                        if (cResult[21] === tmp4.subTitleContainer) {
                          if (cResult[22] === tmp22) {
                            let tmp26 = cResult[23];
                          }
                          if (cResult[24] === tmp4.headerInfo) {
                            if (cResult[25] === tmp18) {
                              if (cResult[26] === tmp26) {
                                let tmp30 = cResult[27];
                              }
                              if (cResult[28] === avatar) {
                                if (cResult[29] === tmp4.header) {
                                  if (cResult[30] === tmp30) {
                                    let tmp34 = cResult[31];
                                  }
                                  if (cResult[32] === tmp5) {
                                    if (cResult[33] === tmp34) {
                                      let tmp38 = cResult[34];
                                    }
                                    if (cResult[35] === onHeaderLongPress) {
                                      if (cResult[36] === onHeaderPress) {
                                        if (cResult[37] === tmp4.content) {
                                          if (cResult[38] === tmp38) {
                                            let tmp42 = cResult[39];
                                          }
                                          if (cResult[40] === children) {
                                            if (cResult[41] === tmp42) {
                                              let tmp45 = cResult[42];
                                            }
                                            return tmp45;
                                          }
                                          const obj3 = { children: null };
                                          const items = [tmp42, children];
                                          obj3.children = items;
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
                              const obj6 = { style: tmp4.header, children: null };
                              const items1 = [avatar, tmp30];
                              obj6.children = items1;
                              const tmp37 = closure_19(View, obj6);
                              cResult[28] = avatar;
                              cResult[29] = tmp4.header;
                              cResult[30] = tmp30;
                              cResult[31] = tmp37;
                              tmp34 = tmp37;
                            }
                          }
                          const obj7 = { style: tmp4.headerInfo, children: null };
                          const items2 = [tmp18, tmp26];
                          obj7.children = items2;
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
                  const obj10 = { style: tmp4.title, children: null };
                  const items3 = [tmp9, tmp13];
                  obj10.children = items3;
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
                          const obj2 = { guildId: guild.id, channelId: null, id: null, type: null };
                          id = undefined;
                          if (null != channel) {
                            id = channel.id;
                          }
                          obj2.channelId = id;
                          obj2.id = id;
                          obj2.type = type;
                          return openDetailsActionSheet.openDetailsActionSheet(obj2);
                        },
              style: tmp4.subtitleTrailing,
              hitSlop: 8,
              children: null
            };
            const obj12 = { color: channel(id[21]).colors.ICON_MUTED, size: "sm" };
            obj11.children = closure_18(tmp(id[32]).MoreHorizontalIcon, obj12);
            tmp15 = closure_18(tmp(id[30]).PressableOpacity, obj11);
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
    const obj13 = { style: tmp4.titleLeft, children: null };
    const items4 = [title, tmp6];
    obj13.children = items4;
    const tmp12 = closure_19(View, obj13);
    cResult[3] = tmp4.titleLeft;
    cResult[4] = tmp6;
    cResult[5] = title;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  let tmp7 = !hideTimestamp;
  if (!hideTimestamp) {
    const obj14 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmp(id[29]).getRelativeTimestamp(timestamp) };
    tmp7 = closure_18(tmp(id[28]).Text, obj14);
    const tmpResult = tmp(id[29]);
  }
  cResult[0] = hideTimestamp;
  cResult[1] = timestamp;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  let obj2 = guild(id[27]);
}) : ((guild) => {
  guild = guild.guild;
  ({ channel: importDefault, hideTimestamp, id: dependencyMap, type: noop } = guild);
  ({ timestamp, children, avatar, title, subtitle, onHeaderPress, onHeaderLongPress, disableInteractions } = guild);
  const tmp = closure_22();
  const fontScale = guild(5609).useFontScale();
  let obj2 = { onPress: onHeaderPress, onLongPress: onHeaderLongPress, style: tmp.content, children: null };
  const obj3 = { style: fontScale > 1.8 ? tmp.channelNameAndAccessoryLarge : tmp.channelNameAndAccessory, children: null };
  const obj4 = { style: tmp.header, children: null };
  const items = [avatar, ];
  const obj5 = { style: tmp.headerInfo, children: null };
  const obj6 = { style: tmp.title, children: null };
  const obj7 = { style: tmp.titleLeft, children: null };
  const items1 = [title, ];
  let tmp7Result = !hideTimestamp;
  if (!hideTimestamp) {
    const obj8 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmp2(7139).getRelativeTimestamp(timestamp) };
    tmp7Result = closure_18(tmp2(4892).Text, obj8);
    const tmp2Result = tmp2(7139);
  }
  items1[1] = tmp7Result;
  obj7.children = items1;
  const items2 = [closure_19(View, obj7), ];
  let tmp7Result2 = null;
  if (!disableInteractions) {
    tmp7Result2 = null;
    if (null != guild) {
      const obj9 = {
        onPress() {
              const obj2 = { guildId: guild.id, channelId: null, id: null, type: null };
              id = undefined;
              if (null != id) {
                id = id.id;
              }
              obj2.channelId = id;
              obj2.id = id2;
              obj2.type = type;
              return openDetailsActionSheet.openDetailsActionSheet(obj2);
            },
        style: tmp.subtitleTrailing,
        hitSlop: 8,
        children: null
      };
      const obj10 = { color: nativeDefault.colors.ICON_MUTED, size: "sm" };
      obj9.children = closure_18(tmp2(7588).MoreHorizontalIcon, obj10);
      tmp7Result2 = closure_18(tmp2(5916).PressableOpacity, obj9);
    }
  }
  const obj11 = { children: null };
  items2[1] = tmp7Result2;
  obj6.children = items2;
  const items3 = [closure_19(View, obj6), ];
  const obj12 = { style: tmp.subTitleContainer, children: closure_18(View, { style: tmp.subtitle, children: subtitle }) };
  items3[1] = closure_18(View, obj12);
  obj5.children = items3;
  items[1] = closure_19(View, obj5);
  obj4.children = items;
  obj3.children = closure_19(View, obj4);
  obj2.children = closure_18(View, obj3);
  const items4 = [closure_18(guild(5916).PressableHighlight, obj2), children];
  obj11.children = items4;
  return closure_19(closure_20, obj11);
});
let closure_26 = tmp6;
fn(558);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(author[23]).c(37);
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
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === author.id) {
    if (cResult[2] === guild.id) {
      let tmp7 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[33]).useStateFromStores(first, tmp7);
    let colorString;
    if (stateFromStores != null) {
      colorString = stateFromStores.colorString;
    }
    if (colorString == null) {
      colorString = closure_13;
    }
    const tmpResult = tmp(tmp2[33]);
    const name = tmp(tmp2[34]).useName(guild.id, channel.id, author);
    if (cResult[4] === author.id) {
      if (cResult[5] === channel.id) {
        if (cResult[6] === id) {
          let tmp11 = cResult[7];
        }
        if (cResult[8] === author) {
          if (cResult[9] === guild) {
            let tmp12 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { maxWidth };
            cResult[11] = obj2;
            let tmp16 = obj2;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === channel.id) {
            if (cResult[13] === guild.name) {
              let tmp18 = cResult[14];
            }
            if (cResult[15] !== colorString) {
              const obj3 = { color: colorString };
              cResult[15] = colorString;
              cResult[16] = obj3;
              let tmp21 = obj3;
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
                if (cResult[19] === `${tmp22} `) {
                  let tmp24 = cResult[20];
                }
                const _Symbol2 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { size: "sm", color: channel(tmp2[21]).colors.TEXT_SUBTLE };
                  const tmp30 = closure_18(tmp(tmp2[37]).AnnouncementsIcon, obj4);
                  cResult[21] = tmp30;
                  let tmp27 = tmp30;
                } else {
                  tmp27 = cResult[21];
                }
                const contentTypeToText = tmp(tmp2[38]).contentTypeToText;
                const text1 = ` ${contentTypeToText(tmp(tmp2[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
                if (cResult[22] === tmp4.subtitle) {
                  if (cResult[23] === ` ${contentTypeToText(tmp(tmp2[9]).ContentType.ANNOUNCEMENT, mentioned)}`) {
                    if (cResult[24] === tmp24) {
                      let tmp33 = cResult[25];
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
                                      if (cResult[35] === timestamp) {
                                        let tmp36 = cResult[36];
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
                const obj5 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: null };
                const items1 = [tmp24, tmp27, text1];
                obj5.children = items1;
                const tmp35 = closure_19(tmp(tmp2[28]).Text, obj5);
                cResult[22] = tmp4.subtitle;
                cResult[23] = text1;
                cResult[24] = tmp24;
                cResult[25] = tmp35;
                tmp33 = tmp35;
                const tmpResult4 = tmp(tmp2[38]);
              }
            }
            const obj6 = { variant: "text-md/semibold", onPress: tmp11, style: tmp21, children: text };
            const tmp26 = closure_18(tmp(tmp2[28]).Text, obj6);
            cResult[17] = tmp11;
            cResult[18] = tmp21;
            cResult[19] = text;
            cResult[20] = tmp26;
            tmp24 = tmp26;
          }
          const obj7 = { style: tmp16, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
          const tmp20 = closure_18(tmp(tmp2[28]).Text, obj7, channel.id);
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
      ICYMIActionCreatorsDefault.itemInteracted(id, "announcement", "open_profile");
      ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } });
      showUserProfileActionSheetDefault({ userId: author.id, channelId: channel.id });
    };
    cResult[4] = author.id;
    cResult[5] = channel.id;
    cResult[6] = id;
    cResult[7] = fn2;
    tmp11 = fn2;
    const tmpResult3 = tmp(tmp2[34]);
  }
  const fn = function o() {
    return GuildMemberStore.getMember(guild.id, author.id);
  };
  cResult[1] = author.id;
  cResult[2] = guild.id;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = guild(author[23]);
}) : ((guild) => {
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const id = guild.id;
  ({ timestamp, children, mentioned, onHeaderPress, onHeaderLongPress } = guild);
  const tmp = closure_22();
  const items = [GuildMemberStore];
  const stateFromStores = guild(author[33]).useStateFromStores(items, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  let obj = guild(author[33]);
  const name = guild(author[34]).useName(guild.id, channel.id, author);
  const items1 = [author.id, channel.id, id];
  const element = { guild, channel, timestamp, avatar: null, title: null, subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: "announcement", children: null };
  const callback = id.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(id, "announcement", "open_profile");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } });
    showUserProfileActionSheetDefault({ userId: author.id, channelId: channel.id });
  }, items1);
  element.avatar = closure_18(closure_24, { guild, author });
  const obj2 = { style: { maxWidth }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  element.title = closure_18(guild(author[28]).Text, obj2, channel.id);
  const obj4 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const obj5 = { variant: "text-md/semibold", onPress: callback, style: { color: colorString }, children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj5.children = `${tmp10} `;
  const items2 = [closure_18(guild(author[28]).Text, obj5), , ];
  const obj3 = { maxWidth };
  const tmp2Result = guild(author[34]);
  items2[1] = closure_18(guild(author[37]).AnnouncementsIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE });
  guild(author[38]);
  items2[2] = ` ${tmp13(guild(author[9]).ContentType.ANNOUNCEMENT, mentioned)}`;
  obj4.children = items2;
  element.subtitle = closure_19(guild(author[28]).Text, obj4);
  element.onHeaderPress = onHeaderPress;
  element.onHeaderLongPress = onHeaderLongPress;
  element.id = id;
  element.children = children;
  return closure_18(closure_26, element);
});
ReactCompilerGating = fn(558);
const __initData = { code: "function ICYMISharedTsx1(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
const __initData2 = { code: "function ICYMISharedTsx2(){const{interpolateColor,progress,bgColor,bgColorHighlighted}=this.__closure;return{backgroundColor:interpolateColor(progress.get(),[0,1],[bgColor,bgColorHighlighted])};}" };
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(event[23]).c(40);
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
    if (null != creator_id) {
      const items = [creator_id];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = creator_id;
    cResult[1] = items1;
  } else {
    const ensureHydratedGuildUsers = tmp(event[39]).useEnsureHydratedGuildUsers(event.guild_id, cResult[1]);
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserStore];
      cResult[2] = items2;
      let tmp8 = items2;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== creator_id) {
      const fn = function l() {
        return UserStore.getUser(creator_id);
      };
      cResult[3] = creator_id;
      cResult[4] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(event[39]);
    const stateFromStores = tmp(event[33]).useStateFromStores(tmp8, tmp10);
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [GuildMemberStore];
      cResult[5] = items3;
      let tmp12 = items3;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === guild.id) {
      if (cResult[7] === creator_id) {
        let tmp14 = cResult[8];
      }
      const stateFromStores1 = tmp(event[33]).useStateFromStores(tmp12, tmp14);
      if (cResult[9] === stateFromStores) {
        let id;
        if (channel != null) {
          id = channel.id;
        }
        if (cResult[10] === id) {
          if (cResult[11] === event.id) {
            let highestRoleId;
            if (stateFromStores1 != null) {
              highestRoleId = stateFromStores1.highestRoleId;
            }
            if (cResult[12] === highestRoleId) {
              if (cResult[13] === type) {
                let tmp18 = cResult[14];
              }
              let colorString;
              if (stateFromStores1 != null) {
                colorString = stateFromStores1.colorString;
              }
              if (colorString == null) {
                colorString = closure_13;
              }
              if (cResult[15] === stateFromStores) {
                if (cResult[16] === guild) {
                  const _Symbol3 = Symbol;
                  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj2 = { maxWidth };
                    cResult[18] = obj2;
                    let tmp31 = obj2;
                  } else {
                    tmp31 = cResult[18];
                  }
                  if (cResult[19] === event.id) {
                    if (cResult[22] === stateFromStores) {
                      if (cResult[23] === colorString) {
                        if (cResult[24] === tmp18) {
                          if (cResult[25] === tmp22) {
                            if (cResult[27] === tmp4.subtitle) {
                              if (cResult[28] === tmp36) {
                                let tmp47 = cResult[29];
                              }
                              if (cResult[30] === channel) {
                                if (cResult[31] === children) {
                                  if (cResult[32] === event.id) {
                                    if (cResult[33] === guild) {
                                      if (cResult[34] === onHeaderPress) {
                                        if (cResult[35] === tmp47) {
                                          if (cResult[36] === tmp23) {
                                            if (cResult[37] === tmp33) {
                                              if (cResult[38] === type) {
                                                let tmp50 = cResult[39];
                                              }
                                              return tmp50;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const element = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: tmp23, title: tmp33, subtitle: tmp47, id: event.id, type, onHeaderPress, children };
                              const tmp53 = closure_18(closure_26, element);
                              class D {
                                constructor() {
                                  if (null != closure_5) {
                                    tmp5 = closure_1;
                                    tmp6 = closure_2;
                                    obj = closure_1(closure_2[35]);
                                    tmp7 = event;
                                    tmp8 = type;
                                    str = "open_profile";
                                    itemInteractedResult = obj.itemInteracted(event.id, type, "open_profile");
                                    obj2 = closure_1(closure_2[35]);
                                    obj1 = { itemId: null, itemType: "guild_event", actionParameters: null };
                                    obj1.itemId = event.id;
                                    obj1.actionParameters = { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" };
                                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                                    obj5 = { userId: null, roleId: null, channelId: null };
                                    obj5.userId = tmp.id;
                                    highestRoleId = undefined;
                                    tmp11 = closure_1(closure_2[36]);
                                    if (closure_6 != null) {
                                      highestRoleId = closure_6.highestRoleId;
                                    }
                                    obj5.roleId = highestRoleId;
                                    id = undefined;
                                    if (channel != null) {
                                      id = channel.id;
                                    }
                                    obj5.channelId = id;
                                    tmp11Result = tmp11(obj5);
                                  }
                                  return;
                                }
                              }
                              class M {
                                constructor() {
                                  member = null;
                                  if (null != creator_id) {
                                    tmp3 = closure_7;
                                    tmp4 = guild;
                                    member = closure_7.getMember(guild.id, tmp);
                                  }
                                  return member;
                                }
                              }
                              cResult[31] = children;
                              cResult[32] = event.id;
                              cResult[33] = guild;
                              cResult[34] = onHeaderPress;
                              cResult[35] = tmp47;
                              cResult[36] = tmp23;
                              cResult[37] = tmp33;
                              cResult[38] = type;
                              cResult[39] = tmp53;
                              tmp50 = tmp53;
                            }
                            let obj3 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: cResult[26] };
                            const tmp49 = closure_18(tmp(event[28]).Text, obj3);
                            cResult[27] = tmp4.subtitle;
                            cResult[28] = cResult[26];
                            cResult[29] = tmp49;
                            tmp47 = tmp49;
                          }
                        }
                      }
                    }
                    if (null == stateFromStores) {
                      let obj4 = { children: null };
                      const obj5 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
                      const items4 = [closure_18(tmp(event[40]).CalendarIcon, obj5), ];
                      const intl2 = tmp(event[41]).intl;
                      items4[1] = ` ${tmp56(tmp(tmp2[41]).t.T7MIsc)}`;
                      obj4.children = items4;
                      const tmp37Result = tmp37(tmp38, obj4);
                      class D {
                        constructor() {
                          if (null != closure_5) {
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj = closure_1(closure_2[35]);
                            tmp7 = event;
                            tmp8 = type;
                            str = "open_profile";
                            itemInteractedResult = obj.itemInteracted(event.id, type, "open_profile");
                            obj2 = closure_1(closure_2[35]);
                            obj1 = { itemId: null, itemType: "guild_event", actionParameters: null };
                            obj1.itemId = event.id;
                            obj1.actionParameters = { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" };
                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                            obj5 = { userId: null, roleId: null, channelId: null };
                            obj5.userId = tmp.id;
                            highestRoleId = undefined;
                            tmp11 = closure_1(closure_2[36]);
                            if (closure_6 != null) {
                              highestRoleId = closure_6.highestRoleId;
                            }
                            obj5.roleId = highestRoleId;
                            id = undefined;
                            if (channel != null) {
                              id = channel.id;
                            }
                            obj5.channelId = id;
                            tmp11Result = tmp11(obj5);
                          }
                          return;
                        }
                      }
                      class M {
                        constructor() {
                          member = null;
                          if (null != creator_id) {
                            tmp3 = closure_7;
                            tmp4 = guild;
                            member = closure_7.getMember(guild.id, tmp);
                          }
                          return member;
                        }
                      }
                      cResult[23] = colorString;
                      cResult[24] = tmp18;
                      cResult[25] = tmp22;
                      cResult[26] = tmp37Result;
                    }
                    const obj6 = { variant: "text-md/semibold", onPress: tmp18, style: null, children: null };
                    const obj7 = { color: colorString };
                    obj6.style = obj7;
                    const username = stateFromStores.username;
                    let combined = username;
                    if (username.length > 20) {
                      const _HermesInternal = HermesInternal;
                      combined = "" + username.slice(0, 17) + "...";
                    }
                    class D {
                      constructor() {
                        if (null != closure_5) {
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          obj = closure_1(closure_2[35]);
                          tmp7 = event;
                          tmp8 = type;
                          str = "open_profile";
                          itemInteractedResult = obj.itemInteracted(event.id, type, "open_profile");
                          obj2 = closure_1(closure_2[35]);
                          obj1 = { itemId: null, itemType: "guild_event", actionParameters: null };
                          obj1.itemId = event.id;
                          obj1.actionParameters = { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj5 = { userId: null, roleId: null, channelId: null };
                          obj5.userId = tmp.id;
                          highestRoleId = undefined;
                          tmp11 = closure_1(closure_2[36]);
                          if (closure_6 != null) {
                            highestRoleId = closure_6.highestRoleId;
                          }
                          obj5.roleId = highestRoleId;
                          id = undefined;
                          if (channel != null) {
                            id = channel.id;
                          }
                          obj5.channelId = id;
                          tmp11Result = tmp11(obj5);
                        }
                        return;
                      }
                    }
                    class M {
                      constructor() {
                        member = null;
                        if (null != creator_id) {
                          tmp3 = closure_7;
                          tmp4 = guild;
                          member = closure_7.getMember(guild.id, tmp);
                        }
                        return member;
                      }
                    }
                    tmp41[0] = closure_18(tmp(event[28]).Text, obj6);
                    const obj8 = { size: "sm", color: channel(event[21]).colors.TEXT_SUBTLE };
                    tmp41[1] = closure_18(tmp(event[40]).CalendarIcon, obj8);
                    const intl = tmp(event[41]).intl;
                    const string = intl.string;
                    let t = tmp(event[41]).t;
                    if (tmp22) {
                      let text = ` ${string(obj12["42OrO4"])}`;
                    } else {
                      text = ` ${string(obj12.Vu15se)}`;
                    }
                    t = { children: null };
                    tmp41[2] = text;
                    t.children = tmp41;
                  }
                  const obj9 = { style: tmp31, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
                  closure_18(tmp(event[28]).Text, obj9, event.id);
                  cResult[19] = event.id;
                  cResult[20] = guild.name;
                  class D {
                    constructor() {
                      if (null != closure_5) {
                        tmp5 = closure_1;
                        tmp6 = closure_2;
                        obj = closure_1(closure_2[35]);
                        tmp7 = event;
                        tmp8 = type;
                        str = "open_profile";
                        itemInteractedResult = obj.itemInteracted(event.id, type, "open_profile");
                        obj2 = closure_1(closure_2[35]);
                        obj1 = { itemId: null, itemType: "guild_event", actionParameters: null };
                        obj1.itemId = event.id;
                        obj1.actionParameters = { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj5 = { userId: null, roleId: null, channelId: null };
                        obj5.userId = tmp.id;
                        highestRoleId = undefined;
                        tmp11 = closure_1(closure_2[36]);
                        if (closure_6 != null) {
                          highestRoleId = closure_6.highestRoleId;
                        }
                        obj5.roleId = highestRoleId;
                        id = undefined;
                        if (channel != null) {
                          id = channel.id;
                        }
                        obj5.channelId = id;
                        tmp11Result = tmp11(obj5);
                      }
                      return;
                    }
                  }
                  class M {
                    constructor() {
                      member = null;
                      if (null != creator_id) {
                        tmp3 = closure_7;
                        tmp4 = guild;
                        member = closure_7.getMember(guild.id, tmp);
                      }
                      return member;
                    }
                  }
                }
              }
              if (null != stateFromStores) {
                const obj10 = { guild, author: stateFromStores };
                let tmp27 = closure_18(closure_24, obj10);
              } else {
                const obj11 = { guild, size: tmp(event[26]).GuildIconSizes.NORMAL };
                tmp27 = closure_18(channel(event[26]), obj11);
                const tmp26 = channel(event[26]);
              }
              cResult[15] = stateFromStores;
              cResult[16] = guild;
              cResult[17] = tmp27;
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
          if (null != closure_5) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            obj = closure_1(closure_2[35]);
            tmp7 = event;
            tmp8 = type;
            str = "open_profile";
            itemInteractedResult = obj.itemInteracted(event.id, type, "open_profile");
            obj2 = closure_1(closure_2[35]);
            obj1 = { itemId: null, itemType: "guild_event", actionParameters: null };
            obj1.itemId = event.id;
            obj1.actionParameters = { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" };
            feedItemActionedResult = obj2.feedItemActioned(obj1);
            obj5 = { userId: null, roleId: null, channelId: null };
            obj5.userId = tmp.id;
            highestRoleId = undefined;
            tmp11 = closure_1(closure_2[36]);
            if (closure_6 != null) {
              highestRoleId = closure_6.highestRoleId;
            }
            obj5.roleId = highestRoleId;
            id = undefined;
            if (channel != null) {
              id = channel.id;
            }
            obj5.channelId = id;
            tmp11Result = tmp11(obj5);
          }
          return;
        }
      }
      class M {
        constructor() {
          member = null;
          if (null != creator_id) {
            tmp3 = closure_7;
            tmp4 = guild;
            member = closure_7.getMember(guild.id, tmp);
          }
          return member;
        }
      }
      cResult[12] = highestRoleId1;
      cResult[13] = type;
      cResult[14] = D;
      tmp18 = D;
      const tmpResult4 = tmp(event[33]);
    }
    class M {
      constructor() {
        member = null;
        if (null != creator_id) {
          tmp3 = closure_7;
          tmp4 = guild;
          member = closure_7.getMember(guild.id, tmp);
        }
        return member;
      }
    }
    cResult[6] = guild.id;
    cResult[7] = creator_id;
    cResult[8] = M;
    tmp14 = M;
    const tmpResult3 = tmp(event[33]);
  }
  let obj = guild(event[23]);
}) : ((guild) => {
  guild = guild.guild;
  const channel = guild.channel;
  const event = guild.event;
  const type = guild.type;
  let stateFromStores;
  let stateFromStores1;
  ({ children, onHeaderPress } = guild);
  let creator_id = event.host_id;
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  const tmp = closure_22();
  if (null != creator_id) {
    const items = [creator_id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const ensureHydratedGuildUsers = guild(event[39]).useEnsureHydratedGuildUsers(event.guild_id, items1);
  let obj = guild(event[39]);
  const items2 = [UserStore];
  stateFromStores = guild(event[33]).useStateFromStores(items2, () => UserStore.getUser(creator_id));
  const tmp2Result = guild(event[33]);
  const items3 = [GuildMemberStore];
  stateFromStores1 = guild(event[33]).useStateFromStores(items3, () => {
    let member = null;
    if (null != creator_id) {
      member = GuildMemberStore.getMember(guild.id, tmp);
    }
    return member;
  });
  const items4 = [stateFromStores, , , , ];
  let id;
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
  const callback = type.useCallback(() => {
    if (null != stateFromStores) {
      ICYMIActionCreatorsDefault.itemInteracted(event.id, type, "open_profile");
      const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } };
      ICYMIActionCreatorsDefault.feedItemActioned(obj3);
      const obj4 = { userId: tmp.id, roleId: null, channelId: null };
      let highestRoleId;
      if (stateFromStores1 != null) {
        highestRoleId = stateFromStores1.highestRoleId;
      }
      obj4.roleId = highestRoleId;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj4.channelId = id;
      showUserProfileActionSheetDefault(obj4);
    }
  }, items4);
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const element = { guild, channel, timestamp: 0, hideTimestamp: true, avatar: null, title: null, subtitle: null, id: null, type: null, onHeaderPress: null, children: null };
  if (null != stateFromStores) {
    let obj2 = { guild, author: stateFromStores };
    let tmp13Result = closure_18(closure_24, obj2);
  } else {
    let obj3 = { guild, size: tmp2(tmp3[26]).GuildIconSizes.NORMAL };
    tmp13Result = closure_18(channel(tmp3[26]), obj3);
    const tmp16 = channel(tmp3[26]);
  }
  element.avatar = tmp13Result;
  let obj4 = { style: { maxWidth }, lineClamp: 1, variant: "text-sm/medium", color: "text-muted", children: guild.name };
  element.title = closure_18(guild(event[28]).Text, obj4, event.id);
  const obj6 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  if (null != stateFromStores) {
    const obj7 = { variant: "text-md/semibold", onPress: callback, style: null, children: null };
    const obj8 = { color: colorString };
    obj7.style = obj8;
    const username = stateFromStores.username;
    let combined = username;
    if (username.length > 20) {
      const _HermesInternal = HermesInternal;
      combined = "" + username.slice(0, 17) + "...";
    }
    obj7.children = `${tmp22} `;
    const items5 = [closure_18(tmp2(tmp3[28]).Text, obj7), , ];
    const obj9 = { size: "sm", color: channel(tmp3[21]).colors.TEXT_SUBTLE };
    items5[1] = closure_18(tmp2(tmp3[40]).CalendarIcon, obj9);
    const intl = tmp2(tmp3[41]).intl;
    const string = intl.string;
    let t = tmp2(tmp3[41]).t;
    if (tmp12) {
      let text = ` ${string(obj13["42OrO4"])}`;
    } else {
      text = ` ${string(obj13.Vu15se)}`;
    }
    t = { children: null };
    items5[2] = text;
    t.children = items5;
  } else {
    const obj10 = { children: null };
    const obj11 = { size: "sm", color: channel(tmp3[21]).colors.TEXT_SUBTLE };
    const items6 = [closure_18(tmp2(tmp3[40]).CalendarIcon, obj11), ];
    const intl2 = tmp2(tmp3[41]).intl;
    items6[1] = ` ${tmp28(tmp2(tmp3[41]).t.T7MIsc)}`;
    obj10.children = items6;
    obj6.children = tmp20(tmp21, obj10);
    element.subtitle = closure_18(tmp19, obj6);
    element.id = event.id;
    element.type = type;
    element.onHeaderPress = onHeaderPress;
    element.children = children;
    return closure_18(closure_26, element);
  }
  const obj5 = { maxWidth };
  tmp12 = null != event.host_id;
  const tmp2Result2 = guild(event[33]);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(author[23]).c(48);
  guild = guild.guild;
  const channel = guild.channel;
  ({ timestamp, author } = guild);
  ({ message, children, id } = guild);
  const type = guild.type;
  ({ onHeaderPress, onHeaderLongPress } = guild);
  if (cResult[0] === channel) {
    if (cResult[1] === message) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildMemberStore];
      cResult[3] = items;
      let tmp7 = items;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === author.id) {
      if (cResult[5] === guild.id) {
        let tmp9 = cResult[6];
      }
      const stateFromStores = tmp(author[33]).useStateFromStores(tmp7, tmp9);
      let colorString;
      if (stateFromStores != null) {
        colorString = stateFromStores.colorString;
      }
      if (colorString == null) {
        colorString = closure_13;
      }
      class E {
        constructor() {
          return closure_7.getMember(guild.id, author.id);
        }
      }
      const name = obj4.useName(guild.id, channel.id, author);
      if (cResult[7] !== tmp4) {
        if (tmp(author[9]).ContentType.POPULAR_MESSAGE === tmp4) {
          let CirclePlayIcon = tmp(author[10]).FireIcon;
        } else {
          if (tmp(author[9]).ContentType.IMAGE === tmp4) {
            CirclePlayIcon = tmp(author[11]).ImageIcon;
          } else if (tmp(author[9]).ContentType.VIDEO !== tmp4) {
            CirclePlayIcon = tmp(author[13]).LightbulbIcon;
          }
          CirclePlayIcon = tmp(author[12]).CirclePlayIcon;
        }
        cResult[7] = tmp4;
        cResult[8] = CirclePlayIcon;
      } else {
        if (cResult[9] === author.id) {
          if (cResult[10] === channel.id) {
            if (cResult[11] === id) {
              if (cResult[12] === type) {
                let tmp15 = cResult[13];
              }
              const margin = id.useContext(tmp(author[42]).ICYMIContext).margin;
              if (cResult[14] === author) {
                if (cResult[15] === guild) {
                  let tmp17 = cResult[16];
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj2 = { maxWidth };
                  cResult[17] = obj2;
                }
                if (cResult[18] === channel.id) {
                  if (cResult[19] === guild.name) {
                    let tmp24 = cResult[20];
                  }
                  if (cResult[21] !== margin) {
                    const obj3 = { marginRight: margin };
                    cResult[21] = margin;
                    cResult[22] = obj3;
                    let tmp27 = obj3;
                  } else {
                    tmp27 = cResult[22];
                  }
                  if (cResult[23] !== colorString) {
                    const obj5 = { color: colorString };
                    cResult[23] = colorString;
                    cResult[24] = obj5;
                    let tmp28 = obj5;
                  } else {
                    tmp28 = cResult[24];
                  }
                  let combined = name;
                  if (name.length > 20) {
                    const _HermesInternal = HermesInternal;
                    combined = "" + name.slice(0, 17) + "...";
                  }
                  class E {
                    constructor() {
                      return closure_7.getMember(guild.id, author.id);
                    }
                  }
                  if (cResult[25] === tmp15) {
                    if (cResult[26] === tmp28) {
                      if (cResult[27] === `${tmp29} `) {
                        let tmp31 = cResult[28];
                      }
                      if (cResult[29] !== tmp13) {
                        const obj6 = { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE };
                        const tmp37 = closure_18(tmp13, obj6);
                        cResult[29] = tmp13;
                        class E {
                          constructor() {
                            return closure_7.getMember(guild.id, author.id);
                          }
                        }
                        cResult[30] = tmp37;
                        let tmp34 = tmp37;
                      } else {
                        tmp34 = cResult[30];
                      }
                      tmp(author[38]);
                      const text = ` ${obj11.contentTypeToText(tmp4)}`;
                      if (cResult[31] === tmp31) {
                        if (cResult[32] === tmp34) {
                          if (cResult[33] === ` ${obj11.contentTypeToText(tmp4)}`) {
                            if (cResult[34] === tmp27) {
                              let tmp39 = cResult[35];
                            }
                            if (cResult[36] === channel) {
                              if (cResult[37] === children) {
                                if (cResult[38] === guild) {
                                  if (cResult[39] === id) {
                                    if (cResult[40] === onHeaderLongPress) {
                                      if (cResult[41] === onHeaderPress) {
                                        if (cResult[42] === tmp39) {
                                          if (cResult[43] === tmp17) {
                                            if (cResult[44] === tmp24) {
                                              if (cResult[45] === timestamp) {
                                                if (cResult[46] === type) {
                                                  let tmp42 = cResult[47];
                                                }
                                                return tmp42;
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
                            const element = { guild, channel, timestamp: null, avatar: null, title: null, subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: null, children: null };
                            class E {
                              constructor() {
                                return closure_7.getMember(guild.id, author.id);
                              }
                            }
                            element.avatar = tmp17;
                            element.title = tmp24;
                            element.subtitle = tmp39;
                            element.onHeaderPress = onHeaderPress;
                            element.onHeaderLongPress = onHeaderLongPress;
                            element.id = id;
                            element.type = type;
                            element.children = children;
                            const tmp45 = closure_18(closure_26, element);
                            cResult[36] = channel;
                            cResult[37] = children;
                            cResult[38] = guild;
                            cResult[39] = id;
                            cResult[40] = onHeaderLongPress;
                            cResult[41] = onHeaderPress;
                            cResult[42] = tmp39;
                            cResult[43] = tmp17;
                            cResult[44] = tmp24;
                            cResult[45] = timestamp;
                            cResult[46] = type;
                            cResult[47] = tmp45;
                            tmp42 = tmp45;
                          }
                        }
                      }
                      const obj7 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: null, children: null };
                      class E {
                        constructor() {
                          return closure_7.getMember(guild.id, author.id);
                        }
                      }
                      const items1 = [tmp31, tmp34, text];
                      obj7.children = items1;
                      const tmp41 = closure_19(tmp(author[28]).Text, obj7);
                      cResult[31] = tmp31;
                      cResult[32] = tmp34;
                      cResult[33] = text;
                      cResult[34] = tmp27;
                      cResult[35] = tmp41;
                      tmp39 = tmp41;
                    }
                  }
                  const obj8 = { style: tmp28, onPress: tmp15, variant: "text-md/semibold", children: tmp30 };
                  const tmp33 = closure_18(tmp(author[28]).Text, obj8);
                  cResult[25] = tmp15;
                  cResult[26] = tmp28;
                  cResult[27] = tmp30;
                  cResult[28] = tmp33;
                  tmp31 = tmp33;
                }
                const obj9 = { style: null, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: null };
                class E {
                  constructor() {
                    return closure_7.getMember(guild.id, author.id);
                  }
                }
                obj9.children = guild.name;
                const tmp26 = closure_18(tmp(author[28]).Text, obj9, channel.id);
                cResult[18] = channel.id;
                cResult[19] = guild.name;
                cResult[20] = tmp26;
                tmp24 = tmp26;
              }
              class E {
                constructor() {
                  return closure_7.getMember(guild.id, author.id);
                }
              }
              tmp20[0] = guild;
              tmp20[1] = author;
              const tmp21 = closure_18(closure_24, tmp20);
              cResult[14] = author;
              cResult[15] = guild;
              cResult[16] = tmp21;
              tmp17 = tmp21;
            }
          }
        }
        const fn = function w() {
          ICYMIActionCreatorsDefault.itemInteracted(id, type, "open_profile");
          ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } });
          showUserProfileActionSheetDefault({ userId: author.id, channelId: channel.id });
        };
        cResult[9] = author.id;
        cResult[10] = channel.id;
        class E {
          constructor() {
            return closure_7.getMember(guild.id, author.id);
          }
        }
        cResult[11] = id;
        cResult[12] = type;
        cResult[13] = fn;
        tmp15 = fn;
      }
      const tmpResult = tmp(author[33]);
    }
    class E {
      constructor() {
        return closure_7.getMember(guild.id, author.id);
      }
    }
    cResult[4] = author.id;
    cResult[5] = guild.id;
    cResult[6] = E;
    tmp9 = E;
  }
  let obj = guild(author[23]);
  const determineContentTypeResult = guild(author[38]).determineContentType(channel, message);
  cResult[0] = channel;
  cResult[1] = message;
  cResult[2] = determineContentTypeResult;
  tmp4 = determineContentTypeResult;
  const tmpResult4 = guild(author[38]);
}) : ((guild) => {
  guild = guild.guild;
  const channel = guild.channel;
  const author = guild.author;
  const message = guild.message;
  const id = guild.id;
  const type = guild.type;
  const items = [channel, message];
  ({ timestamp, children, onHeaderPress, onHeaderLongPress } = guild);
  const memo = message.useMemo(() => ICYMIUtils.determineContentType(channel, message), items);
  const items1 = [GuildMemberStore];
  const stateFromStores = guild(author[33]).useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, author.id));
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = closure_13;
  }
  const obj2 = guild(author[33]);
  const name = guild(author[34]).useName(guild.id, channel.id, author);
  if (guild(author[9]).ContentType.POPULAR_MESSAGE === memo) {
    let LightbulbIcon = tmp2(tmp3[10]).FireIcon;
  } else if (tmp2(tmp3[9]).ContentType.IMAGE === memo) {
    LightbulbIcon = tmp2(tmp3[11]).ImageIcon;
  } else if (tmp2(tmp3[9]).ContentType.VIDEO === memo) {
    LightbulbIcon = tmp2(tmp3[12]).CirclePlayIcon;
  } else {
    LightbulbIcon = tmp2(tmp3[13]).LightbulbIcon;
  }
  const items2 = [author.id, channel.id, id, type];
  const callback = obj.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(id, type, "open_profile");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "user" } });
    showUserProfileActionSheetDefault({ userId: author.id, channelId: channel.id });
  }, items2);
  const element = { guild, channel, timestamp, avatar: closure_18(closure_24, { guild, author }), title: null, subtitle: null, onHeaderPress: null, onHeaderLongPress: null, id: null, type: null, children: null };
  const obj3 = { style: { maxWidth }, lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: guild.name };
  element.title = closure_18(guild(author[28]).Text, obj3, channel.id);
  const obj5 = { lineClamp: 2, variant: "text-md/normal", color: "text-default", style: { marginRight: message.useContext(guild(author[42]).ICYMIContext).margin }, children: null };
  const obj6 = { style: { color: colorString }, onPress: callback, variant: "text-md/semibold", children: null };
  let combined = name;
  if (name.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, 17) + "...";
  }
  obj6.children = `${tmp10} `;
  const items3 = [closure_18(guild(author[28]).Text, obj6), , ];
  const obj4 = { maxWidth };
  const tmp2Result = guild(author[34]);
  items3[1] = closure_18(LightbulbIcon, { size: "sm", color: channel(author[21]).colors.TEXT_SUBTLE });
  guild(author[38]);
  items3[2] = ` ${obj10.contentTypeToText(tmp)}`;
  obj5.children = items3;
  element.subtitle = closure_19(guild(author[28]).Text, obj5);
  element.onHeaderPress = onHeaderPress;
  element.onHeaderLongPress = onHeaderLongPress;
  element.id = id;
  element.type = type;
  element.children = children;
  return closure_18(closure_26, element);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, id2, arg2) => {
  _require = id;
  importDefault = id2;
  dependencyMap = arg2;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, ThreadMessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id2.id) {
    const fn = function h() {
      const obj = { thread: ChannelStore.getChannel(id2.id), messageCount: null, mostRecentMessage: null };
      let num = ThreadMessageStore.getCount(id2.id);
      if (num == null) {
        num = 0;
      }
      obj.messageCount = num;
      obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(id2.id);
      return obj;
    };
    cResult[1] = id2.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp7);
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (cResult[3] === id.id) {
    if (cResult[4] === arg2) {
      if (cResult[5] === id2) {
        let tmp9 = cResult[6];
        let tmp10 = cResult[7];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[8] === messageCount) {
        if (cResult[9] === mostRecentMessage) {
          if (cResult[10] === thread) {
            let tmp13 = cResult[11];
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
      tmp = closure_1;
      tmp2 = closure_1.hasFlag(MessageFlags.HAS_THREAD) || closure_2;
      if (tmp2) {
        tmp3 = closure_5;
        tmp4 = null;
        tmp2 = null == closure_5.getMostRecentMessage(tmp.id);
      }
      if (tmp2) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        obj = closure_1(closure_2[48]);
        tmp7 = closure_0;
        preloadResult = obj.preload(closure_0.id, tmp.id);
        obj2 = closure_1(closure_2[17]);
        obj1 = { channelId: null, isPreload: true, limit: 25 };
        obj1.channelId = tmp.id;
        messages = obj2.fetchMessages(obj1);
      }
      return;
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
  const tmpResult = require("initialize");
}) : ((id, arg1, arg2) => {
  _require = id;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const obj = { thread: ChannelStore.getChannel(closure_1.id), messageCount: null, mostRecentMessage: null };
    let num = ThreadMessageStore.getCount(closure_1.id);
    if (num == null) {
      num = 0;
    }
    obj.messageCount = num;
    obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(closure_1.id);
    return obj;
  });
  const items1 = [id.id, arg2, arg1];
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const effect = noop.useEffect(() => {
    let tmp2 = closure_1.hasFlag(constants4.HAS_THREAD) || closure_2;
    if (tmp2) {
      tmp2 = null == ThreadMessageStore.getMostRecentMessage(closure_1.id);
    }
    if (tmp2) {
      ChannelActionCreatorsDefault.preload(id.id, closure_1.id);
      const obj3 = { channelId: closure_1.id, isPreload: true, limit: 25 };
      const messages = MessageActionCreatorsDefault.fetchMessages(obj3);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(24);
  ({ children, hideDivider, highlight } = arg0);
  _require = tmp4;
  const tmp5 = closure_22();
  let obj = require("c");
  const tmp7 = token(bgColorHighlighted[43])();
  token = require("useToken").useToken(token(tmp2[21]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, tmp7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const hexWithOpacityResult = tmp(tmp2[45]).hexWithOpacity(tmp6(tmp2[21]).unsafe_rawColors.BRAND_360, 0.25);
    cResult[0] = hexWithOpacityResult;
    bgColorHighlighted = hexWithOpacityResult;
    const tmpResult4 = tmp(tmp2[45]);
  } else {
    bgColorHighlighted = cResult[0];
  }
  const tmpResult = require("useToken");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  const tmpResult5 = require("ReanimatedRexport");
  class I {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[46]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.backgroundColor = obj2.interpolateColor(closure_3.get(), [0, 1], items);
      return obj;
    }
  }
  const tmpResult6 = require("ReanimatedRexport");
  I.__closure = { interpolateColor: require("ReanimatedRexport").interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted };
  I.__workletHash = 11116019021445;
  I.__initData = __initData;
  const animatedStyle = tmpResult6.useAnimatedStyle(I);
  if (cResult[1] === (undefined !== highlight && highlight)) {
    if (cResult[2] === sharedValue) {
      let tmp13 = cResult[3];
      let tmp14 = cResult[4];
    }
    const effect = sharedValue.useEffect(tmp13, tmp14);
    if (tmp4) {
      if (cResult[5] === animatedStyle) {
        if (cResult[6] === tmp5.simplePostContent) {
          let tmp29 = cResult[7];
        }
        if (cResult[8] === children) {
          if (cResult[9] === tmp29) {
            let tmp30 = cResult[10];
          }
          if (cResult[11] !== hideDivider) {
            let tmp34 = null;
            if (!hideDivider) {
              tmp34 = closure_18(closure_23, {});
            }
            cResult[11] = hideDivider;
            cResult[12] = tmp34;
            let tmp33 = tmp34;
          } else {
            tmp33 = cResult[12];
          }
          if (cResult[13] === tmp30) {
          }
          let obj3 = { children: null };
          let items = [tmp30, tmp33];
          obj3.children = items;
          const tmp40 = closure_19(closure_20, obj3);
          cResult[13] = tmp30;
          cResult[14] = tmp33;
          cResult[15] = tmp40;
        }
        let obj4 = { style: tmp29, children };
        const tmp32 = closure_18(tmp6(tmp2[46]).View, obj4);
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
        if (cResult[17] === tmp5.simplePostContent) {
          let tmp17 = cResult[18];
        }
        if (cResult[19] !== hideDivider) {
          let tmp22 = null;
          if (!hideDivider) {
            tmp22 = closure_18(closure_23, {});
          }
          cResult[19] = hideDivider;
          cResult[20] = tmp22;
          let tmp21 = tmp22;
        } else {
          tmp21 = cResult[20];
        }
        if (cResult[21] === tmp17) {
          if (cResult[22] === tmp21) {
            let tmp25 = cResult[23];
          }
          return tmp25;
        }
        const obj5 = { children: null };
        const items2 = [tmp17, tmp21];
        obj5.children = items2;
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
  }
  const fn = function x() {
    if (closure_0) {
      const obj = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1, { duration: 500 });
      const obj3 = ReanimatedRexport;
      const result = sharedValue.set(obj.withSequence(withTimingResult, obj3.withDelay(500, timing.withTiming(0, { duration: 350 }))));
    }
  };
  const items3 = [undefined !== highlight && highlight, sharedValue];
  cResult[1] = undefined !== highlight && highlight;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp14 = items3;
  tmp13 = fn;
  let obj2 = { interpolateColor: require("ReanimatedRexport").interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted };
}) : ((arg0) => {
  ({ children, hideDivider, highlight } = arg0);
  if (highlight === undefined) {
    highlight = false;
  }
  let token;
  const tmp = closure_22();
  const tmp2 = token;
  const tmp4 = token(4797)();
  token = highlight(4586).useToken(token(587).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, tmp4);
  let obj = highlight(4586);
  const hexWithOpacityResult = highlight(4733).hexWithOpacity(token(587).unsafe_rawColors.BRAND_360, 0.25);
  dependencyMap = hexWithOpacityResult;
  let obj2 = highlight(4733);
  const sharedValue = highlight(4618).useSharedValue(0);
  let obj3 = highlight(4618);
  const fn = function c() {
    const obj = { backgroundColor: null };
    const items = [token, c2];
    obj.backgroundColor = ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items);
    return obj;
  };
  let obj4 = highlight(4618);
  fn.__closure = { interpolateColor: highlight(4618).interpolateColor, progress: sharedValue, bgColor: token, bgColorHighlighted: hexWithOpacityResult };
  fn.__workletHash = 11803325452646;
  fn.__initData = __initData2;
  let items = [highlight, sharedValue];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    if (highlight) {
      const obj = ReanimatedRexport;
      const withTimingResult = timing.withTiming(1, { duration: 500 });
      const obj3 = ReanimatedRexport;
      const result = sharedValue.set(obj.withSequence(withTimingResult, obj3.withDelay(500, timing.withTiming(0, { duration: 350 }))));
    }
  }, items);
  const obj6 = { children: null };
  if (highlight) {
    const obj7 = { style: null, children: null };
    const items1 = [tmp.simplePostContent, animatedStyle];
    obj7.style = items1;
    obj7.children = children;
    const items2 = [closure_18(tmp2(4618).View, obj7), ];
    let tmp12Result = null;
    if (!hideDivider) {
      tmp12Result = closure_18(closure_23, {});
    }
    items2[1] = tmp12Result;
    obj6.children = items2;
    let tmp16 = obj6;
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
function truncateUsername(arr) {
  let combined = arr;
  if (arr.length > 20) {
    const _HermesInternal = HermesInternal;
    combined = "" + arr.slice(0, 17) + "...";
  }
  return combined;
}
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShared.tsx");

export const navigateToPost = function navigateToPost(id, id2, id3) {
  _require = id;
  importDefault = id3;
  const timerId = setTimeout(() => {
    ReadStateActionCreators.ack(closure_0, { page: constants3.ICYMI, object: constants.ACK_MESSAGE_VIEWED, objectType: constants2.ACK_SEMI_AUTOMATIC }, true, true, closure_1);
  }, 1500);
  safeTransitionToDefault(closure_17.CHANNEL(id2, id, id3), { openChannel: true, navigationReplace: false });
  if (null != id3) {
    require("RunAfterInteractionsUtils").runAfterInteractions(() => {
      const obj2 = { channelId, limit, jump: null };
      const obj = MessageActionCreatorsDefault;
      obj2.jump = { messageId, flash: true, jumpType: Client.JumpType.ANIMATED };
      const messages = obj.fetchMessages(obj2);
    }, 150);
    let obj = require("RunAfterInteractionsUtils");
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
export const ThreadAsComments = ReactCompilerGating.isReactCompilerEnabled() ? ((parentMessage) => {
  const cResult = parentMessage(576).c(50);
  parentMessage = parentMessage.parentMessage;
  ({ onPress, style, inForum } = parentMessage);
  const tmp4 = closure_22();
  if (inForum == null) {
    inForum = false;
  }
  const obj = parentMessage(576);
  ({ thread, messageCount, mostRecentMessage } = closure_29(parentMessage.guild, parentMessage, inForum));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentMessage.id) {
    const fn = function l() {
      return PermissionStore.canWithPartialContext(constants5.VIEW_CHANNEL, { channelId: parentMessage.id });
    };
    cResult[1] = parentMessage.id;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmp5Result = closure_29(parentMessage.guild, parentMessage, inForum);
  if (tmpResult.useStateFromStores(first, tmp9)) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        if (cResult[22] === style) {
          if (cResult[23] === tmp4.comments) {
            let tmp10 = cResult[24];
          }
          let author;
          if (mostRecentMessage != null) {
            author = mostRecentMessage.author;
          }
          if (cResult[25] === author) {
            if (cResult[26] === thread.guild_id) {
              let tmp12 = cResult[27];
            }
            if (cResult[28] !== mostRecentMessage.content) {
              if (mostRecentMessage.content.length > 0) {
                let parseInlineReplyResult = MarkupUtilsDefault.parseInlineReply(mostRecentMessage.content, true);
              } else {
                const intl = tmp(1126).intl;
                parseInlineReplyResult = intl.string(tmp(1126).t["6kp9H2"]);
              }
              mostRecentMessage = mostRecentMessage.content;
              cResult[28] = mostRecentMessage;
              cResult[29] = parseInlineReplyResult;
            } else {
              if (cResult[30] === tmp4.recentCommentText) {
                if (cResult[31] === tmp15) {
                  let tmp19 = cResult[32];
                }
                if (cResult[33] !== tmp4.commentsIcon) {
                  const obj2 = { style: tmp4.commentsIcon };
                  const tmp24 = closure_18(tmp(5862).ChatIcon, obj2);
                  cResult[33] = tmp4.commentsIcon;
                  cResult[34] = tmp24;
                  let tmp22 = tmp24;
                } else {
                  tmp22 = cResult[34];
                }
                if (cResult[35] !== str) {
                  const obj3 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
                  const tmp27 = closure_18(tmp(4892).Text, obj3);
                  cResult[35] = str;
                  cResult[36] = tmp27;
                  let tmp25 = tmp27;
                } else {
                  tmp25 = cResult[36];
                }
                if (cResult[37] !== tmp4.chevron) {
                  const obj5 = { style: tmp4.chevron, size: "xxs" };
                  const tmp30 = closure_18(tmp(6715).ChevronSmallRightIcon, obj5);
                  cResult[37] = tmp4.chevron;
                  cResult[38] = tmp30;
                  let tmp28 = tmp30;
                } else {
                  tmp28 = cResult[38];
                }
                if (cResult[39] === tmp4.commentCount) {
                  if (cResult[40] === tmp28) {
                    if (cResult[41] === tmp22) {
                      if (cResult[42] === tmp25) {
                        let tmp31 = cResult[43];
                      }
                      if (cResult[44] === onPress) {
                        if (cResult[45] === tmp31) {
                          if (cResult[46] === tmp10) {
                            if (cResult[47] === tmp12) {
                              if (cResult[48] === tmp19) {
                                let tmp35 = cResult[49];
                              }
                              return tmp35;
                            }
                          }
                        }
                      }
                      const obj6 = { style: tmp10, onPress, children: null };
                      const items1 = [tmp12, tmp19, tmp31];
                      obj6.children = items1;
                      const tmp37 = closure_19(tmp(5916).PressableHighlight, obj6);
                      cResult[44] = onPress;
                      cResult[45] = tmp31;
                      cResult[46] = tmp10;
                      cResult[47] = tmp12;
                      cResult[48] = tmp19;
                      cResult[49] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                }
                const obj7 = { style: tmp4.commentCount, children: null };
                const items2 = [tmp22, tmp25, tmp28];
                obj7.children = items2;
                const tmp34 = closure_19(View, obj7);
                cResult[39] = tmp4.commentCount;
                cResult[40] = tmp28;
                cResult[41] = tmp22;
                cResult[42] = tmp25;
                cResult[43] = tmp34;
                tmp31 = tmp34;
              }
              const obj8 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp4.recentCommentText, children: cResult[29] };
              const tmp21 = closure_18(tmp(4892).Text, obj8);
              cResult[30] = tmp4.recentCommentText;
              cResult[31] = cResult[29];
              cResult[32] = tmp21;
              tmp19 = tmp21;
            }
          }
          const obj9 = { user: author, guildId: thread.guild_id, size: tmp(1188).AvatarSizes.XSMALL };
          const tmp14 = closure_18(tmp(1188).Avatar, obj9);
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
      if (cResult[4] === tmp4.comments) {
        let tmp38 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.VMWjXW);
        cResult[6] = stringResult;
        let tmp39 = stringResult;
      } else {
        tmp39 = cResult[6];
      }
      if (cResult[7] !== tmp4.recentCommentText) {
        const obj10 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp4.recentCommentText, children: tmp39 };
        const tmp43 = closure_18(tmp(4892).Text, obj10);
        cResult[7] = tmp4.recentCommentText;
        cResult[8] = tmp43;
        let tmp41 = tmp43;
      } else {
        tmp41 = cResult[8];
      }
      if (cResult[9] !== tmp4.commentsIcon) {
        const obj11 = { style: tmp4.commentsIcon };
        const tmp46 = closure_18(tmp(5862).ChatIcon, obj11);
        cResult[9] = tmp4.commentsIcon;
        cResult[10] = tmp46;
        let tmp44 = tmp46;
      } else {
        tmp44 = cResult[10];
      }
      if (cResult[11] !== tmp4.chevron) {
        const obj12 = { style: tmp4.chevron, size: "xxs" };
        const tmp49 = closure_18(tmp(6715).ChevronSmallRightIcon, obj12);
        cResult[11] = tmp4.chevron;
        cResult[12] = tmp49;
        let tmp47 = tmp49;
      } else {
        tmp47 = cResult[12];
      }
      if (cResult[13] === tmp4.commentCount) {
        if (cResult[14] === tmp44) {
          if (cResult[15] === tmp47) {
            let tmp50 = cResult[16];
          }
          if (cResult[17] === onPress) {
            if (cResult[18] === tmp38) {
              if (cResult[19] === tmp41) {
                if (cResult[20] === tmp50) {
                  let tmp54 = cResult[21];
                }
                return tmp54;
              }
            }
          }
          const obj13 = { style: tmp38, onPress, children: null };
          const items4 = [tmp41, tmp50];
          obj13.children = items4;
          const tmp56 = closure_19(tmp(5916).PressableHighlight, obj13);
          cResult[17] = onPress;
          cResult[18] = tmp38;
          cResult[19] = tmp41;
          cResult[20] = tmp50;
          cResult[21] = tmp56;
          tmp54 = tmp56;
        }
      }
      const obj14 = { style: tmp4.commentCount, children: null };
      const items5 = [tmp44, tmp47];
      obj14.children = items5;
      const tmp53 = closure_19(View, obj14);
      cResult[13] = tmp4.commentCount;
      cResult[14] = tmp44;
      cResult[15] = tmp47;
      cResult[16] = tmp53;
      tmp50 = tmp53;
    }
    const items6 = [tmp4.comments, style];
    cResult[3] = style;
    cResult[4] = tmp4.comments;
    cResult[5] = items6;
    tmp38 = items6;
  } else {
    return null;
  }
  tmpResult = parentMessage(504);
}) : ((parentMessage) => {
  parentMessage = parentMessage.parentMessage;
  ({ onPress, style, inForum } = parentMessage);
  const tmp = closure_22();
  if (inForum == null) {
    inForum = false;
  }
  ({ thread, messageCount, mostRecentMessage } = closure_29(parentMessage.guild, parentMessage, inForum));
  const tmp2Result = closure_29(parentMessage.guild, parentMessage, inForum);
  const items = [PermissionStore];
  if (obj.useStateFromStores(items, () => PermissionStore.canWithPartialContext(constants5.VIEW_CHANNEL, { channelId: parentMessage.id }))) {
    if (null != thread) {
      if (null != mostRecentMessage) {
        let str = "99+";
        if (messageCount <= 99) {
          str = messageCount;
        }
        const obj2 = { style: null, onPress: null, children: null };
        const items1 = [tmp.comments, style];
        obj2.style = items1;
        obj2.onPress = onPress;
        let author;
        if (mostRecentMessage != null) {
          author = mostRecentMessage.author;
        }
        const obj3 = { user: author, guildId: thread.guild_id, size: tmp4(1188).AvatarSizes.XSMALL };
        const items2 = [closure_18(tmp4(1188).Avatar, obj3), , ];
        const obj4 = { variant: "text-sm/semibold", lineClamp: 1, style: tmp.recentCommentText, children: null };
        if (mostRecentMessage.content.length > 0) {
          let parseInlineReplyResult = MarkupUtilsDefault.parseInlineReply(mostRecentMessage.content, true);
        } else {
          const intl = tmp4(1126).intl;
          parseInlineReplyResult = intl.string(tmp4(1126).t["6kp9H2"]);
        }
        obj4.children = parseInlineReplyResult;
        items2[1] = closure_18(tmp4(4892).Text, obj4);
        const obj6 = { style: tmp.commentCount, children: null };
        const obj7 = { style: tmp.commentsIcon };
        const items3 = [closure_18(tmp4(5862).ChatIcon, obj7), , ];
        const obj8 = { variant: "text-sm/bold", color: "interactive-text-default", children: str };
        items3[1] = closure_18(tmp4(4892).Text, obj8);
        const obj9 = { style: tmp.chevron, size: "xxs" };
        items3[2] = closure_18(tmp4(6715).ChevronSmallRightIcon, obj9);
        obj6.children = items3;
        items2[2] = closure_19(View, obj6);
        obj2.children = items2;
        return closure_19(tmp4(5916).PressableHighlight, obj2);
      }
    }
    const obj10 = { style: null, onPress: null, children: null };
    const items4 = [tmp.comments, style];
    obj10.style = items4;
    obj10.onPress = onPress;
    const obj11 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.recentCommentText, children: null };
    const intl2 = tmp4(1126).intl;
    obj11.children = intl2.string(tmp4(1126).t.VMWjXW);
    const items5 = [closure_18(tmp4(4892).Text, obj11), ];
    const obj12 = { style: tmp.commentCount, children: null };
    const obj13 = { style: tmp.commentsIcon };
    const items6 = [closure_18(tmp4(5862).ChatIcon, obj13), ];
    const obj14 = { style: tmp.chevron, size: "xxs" };
    items6[1] = closure_18(tmp4(6715).ChevronSmallRightIcon, obj14);
    obj12.children = items6;
    items5[1] = closure_19(View, obj12);
    obj10.children = items5;
    return closure_19(tmp4(5916).PressableHighlight, obj10);
  } else {
    return null;
  }
  obj = parentMessage(504);
});