// === Module 16477: ICYMIMessageRow ===

// Module 16477 (ICYMIMessageRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11293 */;
import DesignConstants from "DesignConstants" /* 16474 */;
import ICYMIShared from "ICYMIShared" /* 16475 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16434 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let closure_15;
let map1;
const View = react_native.View;
const ITEM_PADDING = DesignConstants.ITEM_PADDING;
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_8 = nativeDefault.space.PX_8;
let closure_18 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  let num;
  let obj6;
  const obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 }, messagePreview: { marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 }, replyPreview: { gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 }, replyInner: obj6, afterMessage: { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin }, media: { marginRight: paddingLeft.margin }, footer: { marginTop: nativeDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset } };
  ({ flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 });
  num = 0;
  const obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    num = -2;
  }
  ({ marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 });
  obj6 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  ({ gap: nativeDefault.space.PX_8, marginHorizontal: paddingLeft.margin, padding: PX_12, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, maxHeight: 132 });
  ({ marginTop: nativeDefault.space.PX_8, marginBottom: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: paddingLeft.margin, marginLeft: paddingLeft.inset });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let lineClamp;
  let message;
  let nested;
  let visible;
  const obj = channel(576);
  const cResult = obj.c(37);
  ({ message, channel } = arg0);
  ({ lineClamp, nested, visible } = arg0);
  let num = 3;
  if (undefined !== lineClamp) {
    num = lineClamp;
  }
  const tmp5 = closure_18();
  const context = react.useContext(channel(16435).ICYMIContext);
  if (cResult[0] === channel.guild_id) {
    let arr;
    let tmp9;
    let tmp11;
    if (cResult[1] === message) {
      arr = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [UserGuildSettingsStore];
      cResult[3] = items;
      tmp9 = items;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== channel) {
      const fn = function w() {
        return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
      };
      cResult[4] = channel;
      cResult[5] = fn;
      tmp11 = fn;
    } else {
      tmp11 = cResult[5];
    }
    const tmpResult = channel(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11);
    let tmp14 = !(1 !== message.embeds.length || message.attachments.length > 0);
    const tmp13 = 1 !== message.embeds.length || message.attachments.length > 0;
    if (tmp14) {
      tmp14 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
    }
    if (cResult[6] !== message.attachments) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(content_type) {
            content_type = content_type.content_type;
            let startsWithResult;
            if (content_type != null) {
              startsWithResult = content_type.startsWith("audio/");
            }
            return startsWithResult;
          }
        }
        cResult[8] = L;
      } else {
        class L {
          constructor(content_type) {
            content_type = content_type.content_type;
            let startsWithResult;
            if (content_type != null) {
              startsWithResult = content_type.startsWith("audio/");
            }
            return startsWithResult;
          }
        }
      }
      const attachments = message.attachments;
      cResult[6] = message.attachments;
      cResult[7] = attachments.every(L);
      const everyResult = attachments.every(L);
    } else {
      class L {
        constructor(content_type) {
          content_type = content_type.content_type;
          let startsWithResult;
          if (content_type != null) {
            startsWithResult = content_type.startsWith("audio/");
          }
          return startsWithResult;
        }
      }
    }
    if (cResult[9] === context) {
      class L {
        constructor(content_type) {
          content_type = content_type.content_type;
          let startsWithResult;
          if (content_type != null) {
            startsWithResult = content_type.startsWith("audio/");
          }
          return startsWithResult;
        }
      }
      if (cResult[12] === tmp5.messagePreview) {
        class L {
          constructor(content_type) {
            content_type = content_type.content_type;
            let startsWithResult;
            if (content_type != null) {
              startsWithResult = content_type.startsWith("audio/");
            }
            return startsWithResult;
          }
        }
        if (cResult[15] === tmp17) {
          class L {
            constructor(content_type) {
              content_type = content_type.content_type;
              let startsWithResult;
              if (content_type != null) {
                startsWithResult = content_type.startsWith("audio/");
              }
              return startsWithResult;
            }
          }
        }
        let tmp26Result = !tmp14;
        if (tmp26Result) {
          class L {
            constructor(content_type) {
              content_type = content_type.content_type;
              let startsWithResult;
              if (content_type != null) {
                startsWithResult = content_type.startsWith("audio/");
              }
              return startsWithResult;
            }
          }
          const obj2 = { message, muted: stateFromStores, lineClamp: num, messageOptions: undefined, pointerEvents: "none" };
          const MessageRowPreview = channel(16478).MessageRowPreview;
          if (0 === arr.length) {
            class L {
              constructor(content_type) {
                content_type = content_type.content_type;
                let startsWithResult;
                if (content_type != null) {
                  startsWithResult = content_type.startsWith("audio/");
                }
                return startsWithResult;
              }
            }
            if (message.attachments.length > 0) {
              class L {
                constructor(content_type) {
                  content_type = content_type.content_type;
                  let startsWithResult;
                  if (content_type != null) {
                    startsWithResult = content_type.startsWith("audio/");
                  }
                  return startsWithResult;
                }
              }
              if (0 === message.embeds.length) {
                class L {
                  constructor(content_type) {
                    content_type = content_type.content_type;
                    let startsWithResult;
                    if (content_type != null) {
                      startsWithResult = content_type.startsWith("audio/");
                    }
                    return startsWithResult;
                  }
                }
              }
            }
          }
          if (tmp17) {
            class L {
              constructor(content_type) {
                content_type = content_type.content_type;
                let startsWithResult;
                if (content_type != null) {
                  startsWithResult = content_type.startsWith("audio/");
                }
                return startsWithResult;
              }
            }
          }
          tmp26Result = tmp26(MessageRowPreview, obj2);
        }
        cResult[15] = tmp17;
        cResult[16] = tmp14;
        cResult[17] = num;
        cResult[18] = message;
        cResult[19] = stateFromStores;
        cResult[20] = arr.length;
        cResult[21] = tmp26Result;
      }
      const items1 = [tmp5.messagePreview, tmp20];
      cResult[12] = tmp5.messagePreview;
      cResult[13] = tmp20;
      cResult[14] = items1;
    }
    let tmp21 = null;
    if (!(undefined !== nested && nested)) {
      class L {
        constructor(content_type) {
          content_type = content_type.content_type;
          let startsWithResult;
          if (content_type != null) {
            startsWithResult = content_type.startsWith("audio/");
          }
          return startsWithResult;
        }
      }
      tmp22[0] = context.margin;
      tmp21 = tmp22;
    }
    cResult[9] = context;
    cResult[10] = undefined !== nested && nested;
    cResult[11] = tmp21;
  }
  const tmpResult2 = channel(7950);
  const result = tmpResult2.extractMediaSourcesFromMessage(message, message, channel.guild_id, channel(8034).GRAVITY_VALID_EMBED_TYPES);
  cResult[0] = channel.guild_id;
  cResult[1] = message;
  cResult[2] = result;
  arr = result;
}) : ((message) => {
  let items3;
  let obj10;
  let obj6;
  let obj8;
  let str;
  message = message.message;
  const channel = message.channel;
  let num = message.lineClamp;
  if (num === undefined) {
    num = 3;
  }
  let flag = message.nested;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = message.visible;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_18();
  let tmp2 = message;
  const context = react.useContext(message(16435).ICYMIContext);
  const obj = message(7950);
  const result = obj.extractMediaSourcesFromMessage(message, message, channel.guild_id, message(8034).GRAVITY_VALID_EMBED_TYPES);
  const items = [UserGuildSettingsStore];
  const obj2 = message(504);
  const stateFromStores = obj2.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  const items1 = [message.attachments.length, , ];
  ({ content: arr3[1], embeds: arr3[2] } = message);
  const memo = react.useMemo(() => {
    let tmp3 = !(1 !== message.embeds.length || message.attachments.length > 0);
    const tmp2 = 1 !== message.embeds.length || message.attachments.length > 0;
    if (tmp3) {
      tmp3 = message.embeds[0].type === map1.GIFV && message.embeds[0].url === message.content;
    }
    return tmp3;
  }, items1);
  const attachments = message.attachments;
  const items2 = [tmp.messagePreview, ];
  let tmp10 = null;
  const everyResult = attachments.every((content_type) => {
    content_type = content_type.content_type;
    let startsWithResult;
    if (content_type != null) {
      startsWithResult = content_type.startsWith("audio/");
    }
    return startsWithResult;
  });
  if (!flag) {
    tmp10 = { paddingLeft: context.margin };
    const obj3 = { paddingLeft: context.margin };
  }
  const obj4 = { style: items2, children: items3 };
  items2[1] = tmp10;
  let tmp12Result = !memo;
  if (tmp12Result) {
    const obj5 = { message, muted: stateFromStores, lineClamp: num, messageOptions: obj6, pointerEvents: str };
    obj6 = undefined;
    const MessageRowPreview = tmp2(16478).MessageRowPreview;
    if (0 === result.length) {
      if (message.attachments.length > 0) {
        if (0 === message.embeds.length) {
          obj6 = { renderAttachments: true };
        }
      }
    }
    str = "none";
    if (everyResult) {
      str = "auto";
    }
    tmp12Result = closure_14(MessageRowPreview, obj5);
  }
  items3 = [tmp12Result, , ];
  let tmp13 = result.length > 0;
  if (tmp13) {
    const obj7 = { style: tmp.media, children: closure_14(channel(16479), obj8) };
    obj8 = { message, visible: flag2, itemType: "message" };
    tmp13 = closure_14(View, obj7);
  }
  items3[1] = tmp13;
  let tmp16 = 0 === result.length && message.embeds.length > 0;
  if (tmp16) {
    const obj9 = { style: tmp.media, children: closure_14(tmp2(16478).NonMediaEmbedsRowPreview, obj10) };
    obj10 = { message, muted: stateFromStores, lineClamp: 3 };
    tmp16 = closure_14(View, obj9);
  }
  items3[2] = tmp16;
  return closure_15(View, obj4);
});
let closure_19 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let channel;
  let first;
  let guild;
  let intl;
  let items2;
  let items3;
  let items4;
  let tmp10;
  let tmp8;
  const obj = message(576);
  const cResult = obj.c(44);
  message = message.message;
  ({ channel, guild } = message);
  const tmp4 = closure_18();
  const context = react.useContext(message(16435).ICYMIContext);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message.author.id) {
    const fn = function c() {
      return UserStore.getUser(message.author.id);
    };
    cResult[1] = message.author.id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = message(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === guild.id) {
    let tmp12;
    if (cResult[5] === message.author.id) {
      tmp12 = cResult[6];
    }
    const tmpResult3 = message(504);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp12);
    let colorString;
    if (stateFromStores1 != null) {
      colorString = stateFromStores1.colorString;
    }
    if (colorString == null) {
      colorString = closure_12;
    }
    const width = react.useContext(tmp(16435).ICYMIContext).width;
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp16;
      const _Symbol = Symbol;
      const replyPreview = tmp4.replyPreview;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/semibold", color: "text-muted", style: { fontStyle: "italic" }, children: intl.string(message(1126).t.mPPcez) };
        const Text = tmp(4892).Text;
        intl = tmp(1126).intl;
        const tmp18 = closure_14(Text, obj3);
        cResult[7] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === stateFromStores) {
        let tmp20;
        let tmp27;
        let tmp28;
        if (cResult[9] === guild.id) {
          tmp20 = cResult[10];
        }
        const diff = width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2;
        if (cResult[11] !== diff) {
          const obj4 = { gap: 4, width: diff };
          cResult[11] = diff;
          cResult[12] = obj4;
          tmp27 = obj4;
        } else {
          tmp27 = cResult[12];
        }
        if (cResult[13] !== colorString) {
          const obj5 = { color: colorString };
          cResult[13] = colorString;
          cResult[14] = obj5;
          tmp28 = obj5;
        } else {
          tmp28 = cResult[14];
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === channel.id) {
            let tmp29;
            if (cResult[17] === guild.id) {
              tmp29 = cResult[18];
            }
            if (cResult[19] === tmp28) {
              let tmp31;
              if (cResult[20] === tmp29) {
                tmp31 = cResult[21];
              }
              const diff1 = width - 2 * PX_12 - 30 - PX_8 - 2;
              if (cResult[22] === context.inset) {
                if (cResult[23] === context.margin) {
                  let tmp35;
                  if (cResult[24] === diff1) {
                    tmp35 = cResult[25];
                  }
                  if (cResult[26] === channel) {
                    if (cResult[27] === guild) {
                      let tmp36;
                      if (cResult[28] === message) {
                        tmp36 = cResult[29];
                      }
                      if (cResult[30] === tmp35) {
                        let tmp40;
                        if (cResult[31] === tmp36) {
                          tmp40 = cResult[32];
                        }
                        if (cResult[33] === tmp27) {
                          if (cResult[34] === tmp31) {
                            let tmp43;
                            if (cResult[35] === tmp40) {
                              tmp43 = cResult[36];
                            }
                            if (cResult[37] === tmp4.replyInner) {
                              if (cResult[38] === tmp43) {
                                let tmp47;
                                if (cResult[39] === tmp20) {
                                  tmp47 = cResult[40];
                                }
                                if (cResult[41] === tmp4.replyPreview) {
                                  let tmp51;
                                  if (cResult[42] === tmp47) {
                                    tmp51 = cResult[43];
                                  }
                                  return tmp51;
                                }
                                const obj6 = { style: replyPreview, children: items2 };
                                items2 = [tmp16, tmp47];
                                const tmp54 = closure_15(View, obj6);
                                cResult[41] = tmp4.replyPreview;
                                cResult[42] = tmp47;
                                cResult[43] = tmp54;
                                tmp51 = tmp54;
                              }
                            }
                            const obj7 = { style: tmp19, children: items3 };
                            items3 = [tmp20, tmp43];
                            const tmp50 = closure_15(View, obj7);
                            cResult[37] = tmp4.replyInner;
                            cResult[38] = tmp43;
                            cResult[39] = tmp20;
                            cResult[40] = tmp50;
                            tmp47 = tmp50;
                          }
                        }
                        const obj8 = { style: tmp27, children: items4 };
                        items4 = [tmp31, tmp40];
                        const tmp46 = closure_15(View, obj8);
                        cResult[33] = tmp27;
                        cResult[34] = tmp31;
                        cResult[35] = tmp40;
                        cResult[36] = tmp46;
                        tmp43 = tmp46;
                      }
                      const obj9 = { value: tmp35, children: tmp36 };
                      const tmp42 = closure_14(message(16435).ICYMIContext.Provider, obj9);
                      cResult[30] = tmp35;
                      cResult[31] = tmp36;
                      cResult[32] = tmp42;
                      tmp40 = tmp42;
                    }
                  }
                  const obj10 = { message, channel, guild, nested: true };
                  const tmp39 = closure_14(closure_19, obj10);
                  cResult[26] = channel;
                  cResult[27] = guild;
                  cResult[28] = message;
                  cResult[29] = tmp39;
                  tmp36 = tmp39;
                }
              }
              const obj12 = { width: diff1, margin: null, inset: null };
              ({ margin: obj11.margin, inset: obj11.inset } = context);
              cResult[22] = context.inset;
              cResult[23] = context.margin;
              cResult[24] = diff1;
              cResult[25] = obj12;
              tmp35 = obj12;
            }
            const obj13 = { variant: "text-md/semibold", style: tmp28, lineClamp: 1, children: tmp29 };
            const tmp33 = closure_14(message(4892).Text, obj13);
            cResult[19] = tmp28;
            cResult[20] = tmp29;
            cResult[21] = tmp33;
            tmp31 = tmp33;
          }
        }
        const tmpResult4 = message(5048);
        const name = tmpResult4.getName(guild.id, channel.id, stateFromStores);
        cResult[15] = stateFromStores;
        cResult[16] = channel.id;
        cResult[17] = guild.id;
        cResult[18] = name;
        tmp29 = name;
      }
      const obj14 = { animate: false, guildId: guild.id, user: stateFromStores, size: message(1188).AvatarSizes.SMALL };
      const Avatar = tmp(1188).Avatar;
      const tmp22 = closure_14(Avatar, obj14);
      cResult[8] = stateFromStores;
      cResult[9] = guild.id;
      cResult[10] = tmp22;
      tmp20 = tmp22;
    }
  }
  class E {
    constructor() {
      return GuildMemberStore.getMember(guild.id, message.author.id);
    }
  }
  cResult[4] = guild.id;
  cResult[5] = message.author.id;
  cResult[6] = E;
  tmp12 = E;
}) : ((message) => {
  let channel;
  let guild;
  let intl;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj13;
  let obj15;
  let obj9;
  let tmp2Result;
  message = message.message;
  ({ channel, guild } = message);
  const tmp = closure_18();
  const context = react.useContext(message(16435).ICYMIContext);
  const items = [UserStore];
  const obj2 = message(504);
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(message.author.id));
  const items1 = [GuildMemberStore];
  const obj3 = message(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildMemberStore.getMember(guild.id, message.author.id));
  let colorString;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = closure_12;
  }
  const width = react.useContext(tmp2(16435).ICYMIContext).width;
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj4 = { style: tmp.replyPreview, children: items2 };
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", style: { fontStyle: "italic" }, children: intl.string(message(1126).t.mPPcez) };
    const Text = tmp2(4892).Text;
    intl = tmp2(1126).intl;
    items2 = [closure_14(Text, obj5), ];
    const obj6 = { style: tmp.replyInner, children: items3 };
    const obj7 = { animate: false, guildId: guild.id, user: stateFromStores, size: message(1188).AvatarSizes.SMALL };
    const Avatar = tmp2(1188).Avatar;
    items3 = [closure_14(Avatar, obj7), ];
    const obj8 = { style: obj9, children: items4 };
    obj9 = { gap: 4, width: width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2 };
    const obj10 = { variant: "text-md/semibold", style: obj11, lineClamp: 1, children: tmp2Result.getName(guild.id, channel.id, stateFromStores) };
    obj11 = { color: colorString };
    const Text2 = tmp2(4892).Text;
    tmp2Result = message(5048);
    items4 = [closure_14(Text2, obj10), ];
    const obj12 = { value: obj13, children: closure_14(closure_19, obj15) };
    obj13 = { width: width - 2 * PX_12 - 30 - PX_8 - 2, margin: null, inset: null };
    ({ margin: obj14.margin, inset: obj14.inset } = context);
    obj15 = { message, channel, guild, nested: true };
    const Provider = tmp2(16435).ICYMIContext.Provider;
    items4[1] = closure_14(Provider, obj12);
    items3[1] = closure_15(View, obj8);
    items2[1] = closure_15(View, obj6);
    tmp8 = closure_15(View, obj4);
  }
  return tmp8;
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let first;
  let guild;
  let items1;
  let items2;
  let messageContext;
  let tmp6;
  let visible;
  let obj = message(guild[15]);
  const cResult = obj.c(65);
  message = message.message;
  const channel = message.channel;
  guild = message.guild;
  ({ visible, messageContext } = message);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = message(guild[19]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === guild.id) {
    let tmp8;
    if (cResult[4] === message.author.id) {
      tmp8 = cResult[5];
    }
    let id1;
    if (guild != null) {
      id1 = guild.id;
    }
    if (cResult[6] === message.author.id) {
      let tmp11;
      if (cResult[7] === id1) {
        tmp11 = cResult[8];
      }
      const effect = react.useEffect(tmp8, tmp11);
      let reply_message_id;
      const useICYMIMessage = message(guild[27]).useICYMIMessage;
      let id = channel.id;
      message(guild[27]);
      if (messageContext != null) {
        reply_message_id = messageContext.reply_message_id;
      }
      const iCYMIMessage = useICYMIMessage(id, reply_message_id);
      let before_message_id;
      const useICYMIMessage2 = message(guild[27]).useICYMIMessage;
      const id2 = channel.id;
      message(guild[27]);
      if (messageContext != null) {
        before_message_id = messageContext.before_message_id;
      }
      const iCYMIMessage2 = useICYMIMessage2(id2, before_message_id);
      const tmp21 = closure_18();
      if (cResult[9] === channel.id) {
        let tmp22;
        if (cResult[10] === message.id) {
          tmp22 = cResult[11];
        }
        if (cResult[12] === channel) {
          let tmp23;
          if (cResult[13] === message) {
            tmp23 = cResult[14];
          }
          if (cResult[15] === channel.id) {
            if (cResult[16] === guild.id) {
              let tmp24;
              let tmp26;
              let tmp28;
              let tmp32;
              if (cResult[17] === message.id) {
                tmp24 = cResult[18];
              }
              const _Symbol = Symbol;
              class G {
                constructor() {
                  const obj = ICYMIActionCreatorsDefault;
                  obj.itemInteracted(message.id, "message", "press_message");
                  const obj2 = ICYMIActionCreatorsDefault;
                  const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                  obj2.feedItemActioned(obj3);
                  const obj4 = ICYMIShared;
                  obj4.navigateToPost(channel.id, guild.id, message.id);
                }
              }
              if (tmp25 === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(tmp2[23]).intl.string;
                class G {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "message", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = ICYMIShared;
                    obj4.navigateToPost(channel.id, guild.id, message.id);
                  }
                }
                cResult[19] = tmp27;
                tmp26 = tmp27;
              } else {
                tmp26 = cResult[19];
              }
              const id3 = message.id;
              const id4 = channel.id;
              if (cResult[20] !== message.id) {
                channel(guild[32]);
                class G {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "message", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = ICYMIShared;
                    obj4.navigateToPost(channel.id, guild.id, message.id);
                  }
                }
                cResult[20] = message.id;
                cResult[21] = tmp31;
                tmp28 = tmp31;
              } else {
                tmp28 = cResult[21];
              }
              if (cResult[22] !== channel) {
                let obj2 = { channel: null };
                class G {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "message", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = ICYMIShared;
                    obj4.navigateToPost(channel.id, guild.id, message.id);
                  }
                }
                const tmp34 = channel(guild[33])(obj2);
                cResult[22] = channel;
                cResult[23] = tmp34;
                tmp32 = tmp34;
              } else {
                tmp32 = cResult[23];
              }
              if (cResult[24] === channel) {
                let tmp35;
                let tmp38;
                if (cResult[25] === stateFromStores) {
                  tmp35 = cResult[26];
                }
                if (cResult[27] === iCYMIMessage2) {
                  if (cResult[28] === channel) {
                    if (cResult[29] === guild) {
                      let tmp37;
                      if (cResult[30] === visible) {
                        tmp37 = cResult[31];
                      }
                      if (cResult[32] === channel) {
                        if (cResult[33] === guild) {
                          if (cResult[34] === message) {
                            let tmp42;
                            let tmp46;
                            if (cResult[35] === visible) {
                              tmp42 = cResult[36];
                            }
                            if (cResult[37] === channel) {
                              if (cResult[38] === guild) {
                                let tmp45;
                                if (cResult[39] === iCYMIMessage) {
                                  tmp45 = cResult[40];
                                }
                                if (cResult[41] === tmp23) {
                                  if (cResult[42] === tmp24) {
                                    if (cResult[43] === tmp21.pressable) {
                                      if (cResult[44] === tmp32) {
                                        if (cResult[45] === tmp35) {
                                          if (cResult[46] === tmp37) {
                                            if (cResult[47] === tmp42) {
                                              let tmp50;
                                              if (cResult[48] === tmp45) {
                                                tmp50 = cResult[49];
                                              }
                                              if (cResult[50] === channel) {
                                                if (cResult[51] === guild) {
                                                  if (cResult[54] === tmp21.footer) {
                                                    let tmp55;
                                                    if (cResult[55] === tmp52) {
                                                      tmp55 = cResult[56];
                                                    }
                                                    if (cResult[57] === channel.id) {
                                                      if (cResult[58] === tmp22) {
                                                        if (cResult[59] === tmp24) {
                                                          if (cResult[60] === message) {
                                                            if (cResult[61] === tmp28) {
                                                              if (cResult[62] === tmp50) {
                                                                let tmp58;
                                                                if (cResult[63] === tmp55) {
                                                                  tmp58 = cResult[64];
                                                                }
                                                                return tmp58;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class G {
                                                      constructor() {
                                                        const obj = ICYMIActionCreatorsDefault;
                                                        obj.itemInteracted(message.id, "message", "press_message");
                                                        const obj2 = ICYMIActionCreatorsDefault;
                                                        const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                                        obj2.feedItemActioned(obj3);
                                                        const obj4 = ICYMIShared;
                                                        obj4.navigateToPost(channel.id, guild.id, message.id);
                                                      }
                                                    }
                                                    let obj3 = { actionLabel: tmp26, id: id3, interactionType: "message", channelId: id4, timestamp: tmp28, onHeaderPress: tmp24, onHeaderLongPress: tmp22, message, shouldFeatureUser: true, children: items1 };
                                                    items1 = [tmp50, tmp55];
                                                    const tmp60 = closure_15(channel(guild[36]), obj3);
                                                    class E {
                                                      constructor() {
                                                        const obj = ICYMIActionCreatorsDefault;
                                                        obj.itemInteracted(message.id, "message", "long_press_channel");
                                                        const obj2 = ICYMIActionCreatorsDefault;
                                                        const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
                                                        obj2.feedItemActioned(obj3);
                                                        const obj4 = openChannelLongPressActionSheet;
                                                        const result = obj4.openChannelLongPressActionSheet(channel.id);
                                                      }
                                                    }
                                                    cResult[58] = tmp22;
                                                    cResult[59] = tmp24;
                                                    class S {
                                                      constructor() {
                                                        let id;
                                                        if (guild != null) {
                                                          id = guild.id;
                                                        }
                                                        if (null != id) {
                                                          let id1;
                                                          const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
                                                          GuildActionCreatorsDefault;
                                                          if (guild != null) {
                                                            id1 = guild.id;
                                                          }
                                                          const membersById = requestMembersById(id1, message.author.id);
                                                        }
                                                      }
                                                    }
                                                    cResult[61] = tmp28;
                                                    cResult[62] = tmp50;
                                                    cResult[63] = tmp55;
                                                    cResult[64] = tmp60;
                                                    tmp58 = tmp60;
                                                  }
                                                  class G {
                                                    constructor() {
                                                      const obj = ICYMIActionCreatorsDefault;
                                                      obj.itemInteracted(message.id, "message", "press_message");
                                                      const obj2 = ICYMIActionCreatorsDefault;
                                                      const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                                      obj2.feedItemActioned(obj3);
                                                      const obj4 = ICYMIShared;
                                                      obj4.navigateToPost(channel.id, guild.id, message.id);
                                                    }
                                                  }
                                                  let obj4 = { style: tmp21.footer, children: tmp52 };
                                                  const tmp57 = closure_14(View, obj4);
                                                  cResult[54] = tmp21.footer;
                                                  cResult[55] = tmp52;
                                                  cResult[56] = tmp57;
                                                  tmp55 = tmp57;
                                                }
                                              }
                                              class G {
                                                constructor() {
                                                  const obj = ICYMIActionCreatorsDefault;
                                                  obj.itemInteracted(message.id, "message", "press_message");
                                                  const obj2 = ICYMIActionCreatorsDefault;
                                                  const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                                  obj2.feedItemActioned(obj3);
                                                  const obj4 = ICYMIShared;
                                                  obj4.navigateToPost(channel.id, guild.id, message.id);
                                                }
                                              }
                                              let obj5 = { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "message" };
                                              cResult[50] = channel;
                                              cResult[51] = guild;
                                              cResult[52] = message;
                                              cResult[53] = closure_14(channel(guild[35]), obj5);
                                              closure_14(channel(guild[35]), obj5);
                                              class E {
                                                constructor() {
                                                  const obj = ICYMIActionCreatorsDefault;
                                                  obj.itemInteracted(message.id, "message", "long_press_channel");
                                                  const obj2 = ICYMIActionCreatorsDefault;
                                                  const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
                                                  obj2.feedItemActioned(obj3);
                                                  const obj4 = openChannelLongPressActionSheet;
                                                  const result = obj4.openChannelLongPressActionSheet(channel.id);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                class G {
                                  constructor() {
                                    const obj = ICYMIActionCreatorsDefault;
                                    obj.itemInteracted(message.id, "message", "press_message");
                                    const obj2 = ICYMIActionCreatorsDefault;
                                    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                    obj2.feedItemActioned(obj3);
                                    const obj4 = ICYMIShared;
                                    obj4.navigateToPost(channel.id, guild.id, message.id);
                                  }
                                }
                                const obj6 = { onPress: tmp24, onLongPress: tmp23, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: tmp32, accessibilityHint: tmp35, style: tmp21.pressable, children: items2 };
                                items2 = [tmp37, tmp42, tmp45];
                                const tmp51 = closure_15(message(guild[34]).PressableHighlight, obj6);
                                cResult[41] = tmp23;
                                class E {
                                  constructor() {
                                    const obj = ICYMIActionCreatorsDefault;
                                    obj.itemInteracted(message.id, "message", "long_press_channel");
                                    const obj2 = ICYMIActionCreatorsDefault;
                                    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
                                    obj2.feedItemActioned(obj3);
                                    const obj4 = openChannelLongPressActionSheet;
                                    const result = obj4.openChannelLongPressActionSheet(channel.id);
                                  }
                                }
                                cResult[43] = tmp21.pressable;
                                cResult[44] = tmp32;
                                class S {
                                  constructor() {
                                    let id;
                                    if (guild != null) {
                                      id = guild.id;
                                    }
                                    if (null != id) {
                                      let id1;
                                      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
                                      GuildActionCreatorsDefault;
                                      if (guild != null) {
                                        id1 = guild.id;
                                      }
                                      const membersById = requestMembersById(id1, message.author.id);
                                    }
                                  }
                                }
                                cResult[46] = tmp37;
                                cResult[47] = tmp42;
                                cResult[48] = tmp45;
                                cResult[49] = tmp51;
                                tmp50 = tmp51;
                              }
                            }
                            class G {
                              constructor() {
                                const obj = ICYMIActionCreatorsDefault;
                                obj.itemInteracted(message.id, "message", "press_message");
                                const obj2 = ICYMIActionCreatorsDefault;
                                const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                obj2.feedItemActioned(obj3);
                                const obj4 = ICYMIShared;
                                obj4.navigateToPost(channel.id, guild.id, message.id);
                              }
                            }
                            if (null != iCYMIMessage) {
                              class G {
                                constructor() {
                                  const obj = ICYMIActionCreatorsDefault;
                                  obj.itemInteracted(message.id, "message", "press_message");
                                  const obj2 = ICYMIActionCreatorsDefault;
                                  const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                                  obj2.feedItemActioned(obj3);
                                  const obj4 = ICYMIShared;
                                  obj4.navigateToPost(channel.id, guild.id, message.id);
                                }
                              }
                              tmp49[0] = iCYMIMessage;
                              tmp49[1] = channel;
                              tmp49[2] = guild;
                              tmp46 = closure_14(closure_20, tmp49);
                            }
                            cResult[37] = channel;
                            cResult[38] = guild;
                            cResult[39] = iCYMIMessage;
                            cResult[40] = tmp46;
                            tmp45 = tmp46;
                          }
                        }
                      }
                      class G {
                        constructor() {
                          const obj = ICYMIActionCreatorsDefault;
                          obj.itemInteracted(message.id, "message", "press_message");
                          const obj2 = ICYMIActionCreatorsDefault;
                          const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                          obj2.feedItemActioned(obj3);
                          const obj4 = ICYMIShared;
                          obj4.navigateToPost(channel.id, guild.id, message.id);
                        }
                      }
                      const obj7 = { message, channel, guild, visible };
                      const tmp44 = closure_14(closure_19, obj7);
                      cResult[32] = channel;
                      cResult[33] = guild;
                      cResult[34] = message;
                      cResult[35] = visible;
                      class E {
                        constructor() {
                          const obj = ICYMIActionCreatorsDefault;
                          obj.itemInteracted(message.id, "message", "long_press_channel");
                          const obj2 = ICYMIActionCreatorsDefault;
                          const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
                          obj2.feedItemActioned(obj3);
                          const obj4 = openChannelLongPressActionSheet;
                          const result = obj4.openChannelLongPressActionSheet(channel.id);
                        }
                      }
                      cResult[36] = tmp44;
                      tmp42 = tmp44;
                    }
                  }
                }
                class G {
                  constructor() {
                    const obj = ICYMIActionCreatorsDefault;
                    obj.itemInteracted(message.id, "message", "press_message");
                    const obj2 = ICYMIActionCreatorsDefault;
                    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                    obj2.feedItemActioned(obj3);
                    const obj4 = ICYMIShared;
                    obj4.navigateToPost(channel.id, guild.id, message.id);
                  }
                }
                if (null != iCYMIMessage2) {
                  class G {
                    constructor() {
                      const obj = ICYMIActionCreatorsDefault;
                      obj.itemInteracted(message.id, "message", "press_message");
                      const obj2 = ICYMIActionCreatorsDefault;
                      const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
                      obj2.feedItemActioned(obj3);
                      const obj4 = ICYMIShared;
                      obj4.navigateToPost(channel.id, guild.id, message.id);
                    }
                  }
                  tmp41[0] = iCYMIMessage2;
                  tmp41[1] = channel;
                  tmp41[2] = guild;
                  tmp41[3] = visible;
                  tmp38 = closure_14(closure_19, tmp41);
                }
                cResult[27] = iCYMIMessage2;
                cResult[28] = channel;
                cResult[29] = guild;
                cResult[30] = visible;
                cResult[31] = tmp38;
                tmp37 = tmp38;
              }
              const obj8 = { channel, muted: stateFromStores };
              const tmpResult6 = message(guild[33]);
              const channelA11yHint = tmpResult6.getChannelA11yHint(obj8);
              cResult[24] = channel;
              cResult[25] = stateFromStores;
              class E {
                constructor() {
                  const obj = ICYMIActionCreatorsDefault;
                  obj.itemInteracted(message.id, "message", "long_press_channel");
                  const obj2 = ICYMIActionCreatorsDefault;
                  const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
                  obj2.feedItemActioned(obj3);
                  const obj4 = openChannelLongPressActionSheet;
                  const result = obj4.openChannelLongPressActionSheet(channel.id);
                }
              }
              cResult[26] = channelA11yHint;
              tmp35 = channelA11yHint;
            }
          }
          class G {
            constructor() {
              const obj = ICYMIActionCreatorsDefault;
              obj.itemInteracted(message.id, "message", "press_message");
              const obj2 = ICYMIActionCreatorsDefault;
              const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
              obj2.feedItemActioned(obj3);
              const obj4 = ICYMIShared;
              obj4.navigateToPost(channel.id, guild.id, message.id);
            }
          }
          cResult[15] = channel.id;
          cResult[16] = guild.id;
          cResult[17] = message.id;
          cResult[18] = G;
          tmp24 = G;
        }
        class R {
          constructor() {
            const obj = ICYMIActionCreatorsDefault;
            obj.itemInteracted(message.id, "message", "long_press_message");
            const obj2 = ICYMIActionCreatorsDefault;
            const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
            obj2.feedItemActioned(obj3);
            const obj4 = showLongPressMessageActionSheet;
            const obj5 = { channel, message, user: UserStore.getUser(message.author.id) };
            const result = obj4.showLongPressMessageActionSheet(obj5);
          }
        }
        cResult[12] = channel;
        cResult[13] = message;
        cResult[14] = R;
        tmp23 = R;
      }
      class E {
        constructor() {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted(message.id, "message", "long_press_channel");
          const obj2 = ICYMIActionCreatorsDefault;
          const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
          obj2.feedItemActioned(obj3);
          const obj4 = openChannelLongPressActionSheet;
          const result = obj4.openChannelLongPressActionSheet(channel.id);
        }
      }
      cResult[9] = channel.id;
      cResult[10] = message.id;
      class S {
        constructor() {
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            let id1;
            const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
            GuildActionCreatorsDefault;
            if (guild != null) {
              id1 = guild.id;
            }
            const membersById = requestMembersById(id1, message.author.id);
          }
        }
      }
      tmp22 = E;
    }
    const items3 = [id1, message.author.id];
    cResult[6] = message.author.id;
    cResult[7] = id1;
    cResult[8] = items3;
    tmp11 = items3;
  }
  class S {
    constructor() {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      if (null != id) {
        let id1;
        const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
        GuildActionCreatorsDefault;
        if (guild != null) {
          id1 = guild.id;
        }
        const membersById = requestMembersById(id1, message.author.id);
      }
    }
  }
  cResult[3] = guild.id;
  cResult[4] = message.author.id;
  cResult[5] = S;
  tmp8 = S;
}) : ((message) => {
  let intl;
  let items5;
  let items6;
  let messageContext;
  let obj4;
  let obj9;
  let tmpResult4;
  let visible;
  message = message.message;
  const channel = message.channel;
  const guild = message.guild;
  ({ visible, messageContext } = message);
  let obj = message(guild[19]);
  const items = [UserGuildSettingsStore];
  let id1;
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  const useEffect = react.useEffect;
  if (guild != null) {
    id1 = guild.id;
  }
  const items1 = [id1, message.author.id];
  const effect = useEffect(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      let id1;
      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
      GuildActionCreatorsDefault;
      if (guild != null) {
        id1 = guild.id;
      }
      const membersById = requestMembersById(id1, message.author.id);
    }
  }, items1);
  let reply_message_id;
  const useICYMIMessage = message(guild[27]).useICYMIMessage;
  let id = channel.id;
  message(guild[27]);
  if (messageContext != null) {
    reply_message_id = messageContext.reply_message_id;
  }
  const iCYMIMessage = useICYMIMessage(id, reply_message_id);
  let before_message_id;
  const useICYMIMessage2 = message(guild[27]).useICYMIMessage;
  const id2 = channel.id;
  message(guild[27]);
  if (messageContext != null) {
    before_message_id = messageContext.before_message_id;
  }
  const iCYMIMessage2 = useICYMIMessage2(id2, before_message_id);
  const tmp12 = closure_18();
  const items2 = [channel.id, message];
  const items3 = [channel, message];
  const callback = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "long_press_channel");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: null } };
    obj2.feedItemActioned(obj3);
    const obj4 = openChannelLongPressActionSheet;
    const result = obj4.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [channel.id, guild.id, message.id];
  const callback1 = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "long_press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_body", actionIntentType: "open", actionDestinationType: null } };
    obj2.feedItemActioned(obj3);
    const obj4 = showLongPressMessageActionSheet;
    const obj5 = { channel, message, user: UserStore.getUser(message.author.id) };
    const result = obj4.showLongPressMessageActionSheet(obj5);
  }, items3);
  const callback2 = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "message", "press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "message", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const obj4 = ICYMIShared;
    obj4.navigateToPost(channel.id, guild.id, message.id);
  }, items4);
  let obj3 = { actionLabel: intl.string(message(guild[23]).t.hMFMY9), id: message.id, interactionType: "message", channelId: channel.id, timestamp: obj4.extractTimestamp(message.id), onHeaderPress: callback2, onHeaderLongPress: callback, message, shouldFeatureUser: true, children: items6 };
  const tmp18 = channel(guild[36]);
  intl = tmp(tmp2[23]).intl;
  obj4 = channel(tmp2[32]);
  let obj5 = { onPress: callback2, onLongPress: callback1, unstable_pressDelay: 130, accessibilityRole: "button", accessibilityLabel: channel(guild[33])({ channel }), accessibilityHint: tmpResult4.getChannelA11yHint({ channel, muted: stateFromStores }), style: tmp12.pressable, children: items5 };
  const PressableHighlight = tmp(tmp2[34]).PressableHighlight;
  let tmp19 = null;
  const tmp17 = channel;
  tmpResult4 = message(guild[33]);
  if (null != iCYMIMessage2) {
    const obj6 = { message: iCYMIMessage2, channel, guild, visible };
    tmp19 = closure_14(closure_19, obj6);
  }
  items5 = [tmp19, closure_14(closure_19, { message, channel, guild, visible }), ];
  let tmp22Result = null;
  if (null != iCYMIMessage) {
    const obj7 = { message: iCYMIMessage, channel, guild };
    tmp22Result = closure_14(closure_20, obj7);
  }
  items5[2] = tmp22Result;
  items6 = [closure_15(PressableHighlight, obj5), ];
  const obj8 = { style: tmp12.footer, children: closure_14(tmp17(guild[35]), obj9) };
  obj9 = { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "message" };
  items6[1] = closure_14(View, obj8);
  return closure_15(tmp18, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let gravityMessage;
  let message;
  let messageContext;
  let tmp13;
  let tmp7;
  let tmp9;
  let visible;
  const obj = gravityMessage(576);
  const cResult = obj.c(15);
  ({ messageContext, visible, message } = arg0);
  const obj2 = gravityMessage(16437);
  gravityMessage = obj2.useGravityMessage(message);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== gravityMessage) {
    const fn = function l() {
      return ChannelStore.getChannel(gravityMessage.getChannelId());
    };
    cResult[1] = gravityMessage;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = gravityMessage(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  let guild_id;
  const tmp11 = cResult[4];
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (tmp11 !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const fn2 = function _() {
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return getGuild(guild_id);
    };
    cResult[4] = guild_id1;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult3 = gravityMessage(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RelationshipStore];
    cResult[6] = items2;
  }
  if (cResult[7] !== gravityMessage.author.id) {
    class T {
      constructor() {
        return RelationshipStore.isBlockedOrIgnored(gravityMessage.author.id);
      }
    }
    cResult[7] = gravityMessage.author.id;
    cResult[8] = T;
  } else {
    class T {
      constructor() {
        return RelationshipStore.isBlockedOrIgnored(gravityMessage.author.id);
      }
    }
  }
  gravityMessage(504);
  if (null != stateFromStores) {
    class T {
      constructor() {
        return RelationshipStore.isBlockedOrIgnored(gravityMessage.author.id);
      }
    }
    if (null != stateFromStores1) {
      class T {
        constructor() {
          return RelationshipStore.isBlockedOrIgnored(gravityMessage.author.id);
        }
      }
      if (!tmp20) {
        class T {
          constructor() {
            return RelationshipStore.isBlockedOrIgnored(gravityMessage.author.id);
          }
        }
        const obj3 = { message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, messageContext, visible };
        cResult[9] = stateFromStores;
        cResult[10] = stateFromStores1;
        cResult[11] = gravityMessage;
        cResult[12] = messageContext;
        cResult[13] = visible;
        cResult[14] = closure_14(closure_21, obj3);
        const tmp24 = closure_14(closure_21, obj3);
      }
    }
  }
  return null;
}) : ((arg0) => {
  let message;
  let messageContext;
  let visible;
  let gravityMessage;
  ({ message, messageContext, visible } = arg0);
  const obj = gravityMessage(16437);
  gravityMessage = obj.useGravityMessage(message);
  const items = [ChannelStore];
  const obj2 = gravityMessage(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(gravityMessage.getChannelId()));
  const items1 = [GuildStore];
  const obj3 = gravityMessage(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  gravityMessage(504);
  [][0] = RelationshipStore;
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (null != stateFromStores1) {
      tmp6 = null;
      if (!tmp5) {
        const obj4 = { message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, messageContext, visible };
        tmp6 = closure_14(closure_21, obj4);
      }
    }
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default tmp6;
export const MessageRowContent = tmp5;