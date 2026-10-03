// discord_app/modules/icymi/native/ICYMIMessageRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import showLongPressMessageActionSheet from "../../messages/native/long_press/showLongPressMessageActionSheet.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ITEM_PADDING = fn(16430).ITEM_PADDING;
const Constants = fn(1085);
({ DEFAULT_ROLE_COLOR_HEX: closure_12, MessageEmbedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_8 = nativeDefault.space.PX_8;
const createICYMIStyles = fn(16390);
let closure_18 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  const obj = {
    pressable: { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 },
    messagePreview: null,
    replyPreview: null,
    replyInner: null,
    afterMessage: null,
    media: null,
    footer: null,
  };
  const obj2 = { flex: 1, paddingLeft: paddingLeft.inset, gap: nativeDefault.space.PX_8 };
  let num = 0;
  if (obj3.isAndroid()) {
    num = -2;
  }
  obj3 = PlatformUtils;
  obj.messagePreview = { marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 };
  const obj4 = { marginTop: num, borderRadius: nativeDefault.radii.md, gap: 0 };
  obj.replyPreview = {
    gap: nativeDefault.space.PX_8,
    marginHorizontal: paddingLeft.margin,
    padding: PX_12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.lg,
    maxHeight: 132,
  };
  obj.replyInner = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj.afterMessage = { paddingLeft: paddingLeft.inset, paddingBottom: paddingLeft.margin };
  obj.media = { marginRight: paddingLeft.margin };
  const obj5 = {
    gap: nativeDefault.space.PX_8,
    marginHorizontal: paddingLeft.margin,
    padding: PX_12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.lg,
    maxHeight: 132,
  };
  const obj6 = { flexDirection: "row", gap: PX_8, overflow: "hidden" };
  obj.footer = {
    marginTop: nativeDefault.space.PX_8,
    marginBottom: paddingLeft.margin,
    gap: nativeDefault.space.PX_8,
    paddingHorizontal: paddingLeft.margin,
    marginLeft: paddingLeft.inset,
  };
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = channel(576).c(37);
      ({ message, channel } = arg0);
      ({ lineClamp, nested, visible } = arg0);
      let num = 3;
      if (undefined !== lineClamp) {
        num = lineClamp;
      }
      const tmp5 = closure_18();
      const context = noop.useContext(channel(16391).ICYMIContext);
      if (cResult[0] === channel.guild_id) {
        if (cResult[1] === message) {
          let arr = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserGuildSettingsStore];
          cResult[3] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== channel) {
          const fn = function w() {
            return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
          };
          cResult[4] = channel;
          cResult[5] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[5];
        }
        const stateFromStores = channel(504).useStateFromStores(tmp9, tmp11);
        let tmp13 = 1 !== message.embeds.length;
        if (!tmp13) {
          tmp13 = message.attachments.length > 0;
        }
        let tmp14 = !tmp13;
        if (!tmp13) {
          tmp14 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
          const tmp16 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
        }
        if (cResult[6] !== message.attachments) {
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor(arg0) {
                content_type = arg0.content_type;
                startsWithResult = undefined;
                if (content_type != null) {
                  str = "audio/";
                  startsWithResult = content_type.startsWith("audio/");
                }
                return startsWithResult;
              }
            }
            cResult[8] = L;
          } else {
            class L {
              constructor(arg0) {
                content_type = arg0.content_type;
                startsWithResult = undefined;
                if (content_type != null) {
                  str = "audio/";
                  startsWithResult = content_type.startsWith("audio/");
                }
                return startsWithResult;
              }
            }
          }
          const attachments = message.attachments;
          const everyResult = attachments.every(L);
          cResult[6] = message.attachments;
          cResult[7] = everyResult;
        } else {
          class L {
            constructor(arg0) {
              content_type = arg0.content_type;
              startsWithResult = undefined;
              if (content_type != null) {
                str = "audio/";
                startsWithResult = content_type.startsWith("audio/");
              }
              return startsWithResult;
            }
          }
          if (cResult[9] === context) {
            class L {
              constructor(arg0) {
                content_type = arg0.content_type;
                startsWithResult = undefined;
                if (content_type != null) {
                  str = "audio/";
                  startsWithResult = content_type.startsWith("audio/");
                }
                return startsWithResult;
              }
            }
            if (cResult[12] === tmp5.messagePreview) {
              class L {
                constructor(arg0) {
                  content_type = arg0.content_type;
                  startsWithResult = undefined;
                  if (content_type != null) {
                    str = "audio/";
                    startsWithResult = content_type.startsWith("audio/");
                  }
                  return startsWithResult;
                }
              }
              if (cResult[15] === tmp17) {
                class L {
                  constructor(arg0) {
                    content_type = arg0.content_type;
                    startsWithResult = undefined;
                    if (content_type != null) {
                      str = "audio/";
                      startsWithResult = content_type.startsWith("audio/");
                    }
                    return startsWithResult;
                  }
                }
              }
              let tmp27Result = !tmp14;
              if (!tmp14) {
                class L {
                  constructor(arg0) {
                    content_type = arg0.content_type;
                    startsWithResult = undefined;
                    if (content_type != null) {
                      str = "audio/";
                      startsWithResult = content_type.startsWith("audio/");
                    }
                    return startsWithResult;
                  }
                }
                const obj2 = {
                  message,
                  muted: stateFromStores,
                  lineClamp: num,
                  messageOptions: null,
                  pointerEvents: null,
                };
                if (0 === arr.length) {
                  class L {
                    constructor(arg0) {
                      content_type = arg0.content_type;
                      startsWithResult = undefined;
                      if (content_type != null) {
                        str = "audio/";
                        startsWithResult = content_type.startsWith("audio/");
                      }
                      return startsWithResult;
                    }
                  }
                  if (message.attachments.length > 0) {
                    class L {
                      constructor(arg0) {
                        content_type = arg0.content_type;
                        startsWithResult = undefined;
                        if (content_type != null) {
                          str = "audio/";
                          startsWithResult = content_type.startsWith("audio/");
                        }
                        return startsWithResult;
                      }
                    }
                    if (0 === message.embeds.length) {
                      class L {
                        constructor(arg0) {
                          content_type = arg0.content_type;
                          startsWithResult = undefined;
                          if (content_type != null) {
                            str = "audio/";
                            startsWithResult = content_type.startsWith("audio/");
                          }
                          return startsWithResult;
                        }
                      }
                    }
                  }
                }
                obj2.messageOptions = undefined;
                if (tmp17) {
                  class L {
                    constructor(arg0) {
                      content_type = arg0.content_type;
                      startsWithResult = undefined;
                      if (content_type != null) {
                        str = "audio/";
                        startsWithResult = content_type.startsWith("audio/");
                      }
                      return startsWithResult;
                    }
                  }
                }
                obj2.pointerEvents = "none";
                tmp27Result = tmp27(channel(16434).MessageRowPreview, obj2);
              }
              cResult[15] = tmp17;
              cResult[16] = tmp14;
              cResult[17] = num;
              cResult[18] = message;
              cResult[19] = stateFromStores;
              cResult[20] = arr.length;
              cResult[21] = tmp27Result;
            }
            const items1 = [tmp5.messagePreview, tmp21];
            cResult[12] = tmp5.messagePreview;
            cResult[13] = tmp21;
            cResult[14] = items1;
          }
          let tmp22 = null;
          if (!tmp4) {
            class L {
              constructor(arg0) {
                content_type = arg0.content_type;
                startsWithResult = undefined;
                if (content_type != null) {
                  str = "audio/";
                  startsWithResult = content_type.startsWith("audio/");
                }
                return startsWithResult;
              }
            }
            tmp23[0] = context.margin;
            tmp22 = tmp23;
          }
          cResult[9] = context;
          cResult[10] = tmp4;
          cResult[11] = tmp22;
        }
        const tmpResult = channel(504);
      }
      const obj = channel(576);
      const result = channel(7939).extractMediaSourcesFromMessage(
        message,
        message,
        channel.guild_id,
        channel(8024).GRAVITY_VALID_EMBED_TYPES,
      );
      cResult[0] = channel.guild_id;
      cResult[1] = message;
      cResult[2] = result;
      arr = result;
      const tmpResult2 = channel(7939);
    }
  : (message) => {
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
      const context = noop.useContext(message(16391).ICYMIContext);
      const result = message(7939).extractMediaSourcesFromMessage(
        message,
        message,
        channel.guild_id,
        message(8024).GRAVITY_VALID_EMBED_TYPES,
      );
      const obj = message(7939);
      const items = [UserGuildSettingsStore];
      const stateFromStores = message(504).useStateFromStores(items, () =>
        UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
      );
      const items1 = [message.attachments.length, ,];
      ({ content: arr3[1], embeds: arr3[2] } = message);
      const memo = noop.useMemo(() => {
        let tmp2 = 1 !== message.embeds.length;
        if (!tmp2) {
          tmp2 = message.attachments.length > 0;
        }
        let tmp3 = !tmp2;
        if (!tmp2) {
          tmp3 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
          const tmp5 = message.embeds[0].type === constants.GIFV && message.embeds[0].url === message.content;
        }
        return tmp3;
      }, items1);
      const attachments = message.attachments;
      const items2 = [tmp.messagePreview];
      let tmp10 = null;
      const obj2 = message(504);
      if (!flag) {
        const obj3 = { paddingLeft: context.margin };
        tmp10 = obj3;
      }
      const obj4 = { style: items2, children: null };
      items2[1] = tmp10;
      let tmp12Result = !memo;
      if (!memo) {
        const obj5 = { message, muted: stateFromStores, lineClamp: num, messageOptions: null, pointerEvents: null };
        let obj6;
        if (0 === result.length) {
          if (message.attachments.length > 0) {
            if (0 === message.embeds.length) {
              obj6 = { renderAttachments: true };
            }
          }
        }
        obj5.messageOptions = obj6;
        let str = "none";
        if (everyResult) {
          str = "auto";
        }
        obj5.pointerEvents = str;
        tmp12Result = closure_14(tmp2(16434).MessageRowPreview, obj5);
      }
      const items3 = [tmp12Result, ,];
      let tmp13 = result.length > 0;
      if (tmp13) {
        const obj7 = { style: tmp.media, children: null };
        const obj8 = { message, visible: flag2, itemType: "message" };
        obj7.children = closure_14(channel(16435), obj8);
        tmp13 = closure_14(View, obj7);
      }
      items3[1] = tmp13;
      let tmp16 = 0 === result.length && message.embeds.length > 0;
      if (tmp16) {
        const obj9 = { style: tmp.media, children: null };
        const obj10 = { message, muted: stateFromStores, lineClamp: 3 };
        obj9.children = closure_14(tmp2(16434).NonMediaEmbedsRowPreview, obj10);
        tmp16 = closure_14(View, obj9);
      }
      items3[2] = tmp16;
      obj4.children = items3;
      return closure_15(View, obj4);
    };
let closure_19 = tmp4;
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = message(576).c(44);
      message = message.message;
      ({ channel, guild } = message);
      const tmp4 = closure_18();
      const context = noop.useContext(message(16391).ICYMIContext);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== message.author.id) {
        const fn = function c() {
          return UserStore.getUser(message.author.id);
        };
        cResult[1] = message.author.id;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = message(576);
      const stateFromStores = message(504).useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === guild.id) {
        if (cResult[5] === message.author.id) {
          let tmp12 = cResult[6];
        }
        const stateFromStores1 = tmp(504).useStateFromStores(tmp10, tmp12);
        let colorString;
        if (stateFromStores1 != null) {
          colorString = stateFromStores1.colorString;
        }
        if (colorString == null) {
          colorString = closure_12;
        }
        const width = noop.useContext(tmp(16391).ICYMIContext).width;
        if (null == stateFromStores) {
          return null;
        } else {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = {
              variant: "text-sm/semibold",
              color: "text-muted",
              style: { fontStyle: "italic" },
              children: null,
            };
            const intl = tmp(1126).intl;
            obj3.children = intl.string(tmp(1126).t.mPPcez);
            const tmp18 = closure_14(tmp(4886).Text, obj3);
            cResult[7] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === guild.id) {
              let tmp20 = cResult[10];
            }
            const diff = width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2;
            if (cResult[11] !== diff) {
              const obj4 = { gap: 4, width: diff };
              cResult[11] = diff;
              cResult[12] = obj4;
              let tmp27 = obj4;
            } else {
              tmp27 = cResult[12];
            }
            if (cResult[13] !== colorString) {
              const obj5 = { color: colorString };
              cResult[13] = colorString;
              cResult[14] = obj5;
              let tmp28 = obj5;
            } else {
              tmp28 = cResult[14];
            }
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === channel.id) {
                if (cResult[17] === guild.id) {
                  let tmp29 = cResult[18];
                }
                if (cResult[19] === tmp28) {
                  if (cResult[20] === tmp29) {
                    let tmp31 = cResult[21];
                  }
                  const diff1 = width - 2 * PX_12 - 30 - PX_8 - 2;
                  if (cResult[22] === context.inset) {
                    if (cResult[23] === context.margin) {
                      if (cResult[24] === diff1) {
                        let tmp35 = cResult[25];
                      }
                      if (cResult[26] === channel) {
                        if (cResult[27] === guild) {
                          if (cResult[28] === message) {
                            let tmp36 = cResult[29];
                          }
                          if (cResult[30] === tmp35) {
                            if (cResult[31] === tmp36) {
                              let tmp40 = cResult[32];
                            }
                            if (cResult[33] === tmp27) {
                              if (cResult[34] === tmp31) {
                                if (cResult[35] === tmp40) {
                                  let tmp43 = cResult[36];
                                }
                                if (cResult[37] === tmp4.replyInner) {
                                  if (cResult[38] === tmp43) {
                                    if (cResult[39] === tmp20) {
                                      let tmp47 = cResult[40];
                                    }
                                    if (cResult[41] === tmp4.replyPreview) {
                                      if (cResult[42] === tmp47) {
                                        let tmp51 = cResult[43];
                                      }
                                      return tmp51;
                                    }
                                    const obj6 = { style: tmp4.replyPreview, children: null };
                                    const items2 = [tmp16, tmp47];
                                    obj6.children = items2;
                                    const tmp54 = closure_15(View, obj6);
                                    cResult[41] = tmp4.replyPreview;
                                    cResult[42] = tmp47;
                                    cResult[43] = tmp54;
                                    tmp51 = tmp54;
                                  }
                                }
                                const obj7 = { style: tmp19, children: null };
                                const items3 = [tmp20, tmp43];
                                obj7.children = items3;
                                const tmp50 = closure_15(View, obj7);
                                cResult[37] = tmp4.replyInner;
                                cResult[38] = tmp43;
                                cResult[39] = tmp20;
                                cResult[40] = tmp50;
                                tmp47 = tmp50;
                              }
                            }
                            const obj8 = { style: tmp27, children: null };
                            const items4 = [tmp31, tmp40];
                            obj8.children = items4;
                            const tmp46 = closure_15(View, obj8);
                            cResult[33] = tmp27;
                            cResult[34] = tmp31;
                            cResult[35] = tmp40;
                            cResult[36] = tmp46;
                            tmp43 = tmp46;
                          }
                          const obj9 = { value: tmp35, children: tmp36 };
                          const tmp42 = closure_14(tmp(16391).ICYMIContext.Provider, obj9);
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
                const tmp33 = closure_14(tmp(4886).Text, obj13);
                cResult[19] = tmp28;
                cResult[20] = tmp29;
                cResult[21] = tmp33;
                tmp31 = tmp33;
              }
            }
            const name = tmp(5042).getName(guild.id, channel.id, stateFromStores);
            cResult[15] = stateFromStores;
            cResult[16] = channel.id;
            cResult[17] = guild.id;
            cResult[18] = name;
            tmp29 = name;
            const tmpResult4 = tmp(5042);
          }
          const obj14 = { animate: false, guildId: guild.id, user: stateFromStores, size: tmp(1188).AvatarSizes.SMALL };
          const tmp22 = closure_14(tmp(1188).Avatar, obj14);
          cResult[8] = stateFromStores;
          cResult[9] = guild.id;
          cResult[10] = tmp22;
          tmp20 = tmp22;
        }
        const tmpResult3 = tmp(504);
      }
      class E {
        constructor() {
          return closure_6.getMember(guild.id, message.author.id);
        }
      }
      cResult[4] = guild.id;
      cResult[5] = message.author.id;
      cResult[6] = E;
      tmp12 = E;
      const tmpResult = message(504);
    }
  : (message) => {
      message = message.message;
      ({ channel, guild } = message);
      const tmp = closure_18();
      const context = noop.useContext(message(16391).ICYMIContext);
      const items = [UserStore];
      const stateFromStores = message(504).useStateFromStores(items, () => UserStore.getUser(message.author.id));
      const obj2 = message(504);
      const items1 = [GuildMemberStore];
      const stateFromStores1 = message(504).useStateFromStores(items1, () =>
        GuildMemberStore.getMember(guild.id, message.author.id),
      );
      let colorString;
      if (stateFromStores1 != null) {
        colorString = stateFromStores1.colorString;
      }
      if (colorString == null) {
        colorString = closure_12;
      }
      const width = noop.useContext(tmp2(16391).ICYMIContext).width;
      let tmp8 = null;
      if (null != stateFromStores) {
        const obj4 = { style: tmp.replyPreview, children: null };
        const obj5 = {
          variant: "text-sm/semibold",
          color: "text-muted",
          style: { fontStyle: "italic" },
          children: null,
        };
        const intl = tmp2(1126).intl;
        obj5.children = intl.string(tmp2(1126).t.mPPcez);
        const items2 = [closure_14(tmp2(4886).Text, obj5)];
        const obj6 = { style: tmp.replyInner, children: null };
        const obj7 = { animate: false, guildId: guild.id, user: stateFromStores, size: tmp2(1188).AvatarSizes.SMALL };
        const items3 = [closure_14(tmp2(1188).Avatar, obj7)];
        const obj8 = { style: null, children: null };
        const obj9 = { gap: 4, width: width - context.inset - 2 * ITEM_PADDING - 2 * PX_12 - 30 - PX_8 - 2 };
        obj8.style = obj9;
        const obj10 = { variant: "text-md/semibold", style: null, lineClamp: 1, children: null };
        const obj11 = { color: colorString };
        obj10.style = obj11;
        obj10.children = tmp2(5042).getName(guild.id, channel.id, stateFromStores);
        const items4 = [closure_14(tmp2(4886).Text, obj10)];
        const obj12 = { value: null, children: null };
        const obj13 = { width: width - 2 * PX_12 - 30 - PX_8 - 2, margin: null, inset: null };
        ({ margin: obj14.margin, inset: obj14.inset } = context);
        obj12.value = obj13;
        const obj15 = { message, channel, guild, nested: true };
        obj12.children = closure_14(closure_19, obj15);
        items4[1] = closure_14(tmp2(16391).ICYMIContext.Provider, obj12);
        obj8.children = items4;
        items3[1] = closure_15(View, obj8);
        obj6.children = items3;
        items2[1] = closure_15(View, obj6);
        obj4.children = items2;
        tmp8 = closure_15(View, obj4);
        const tmp2Result = tmp2(5042);
      }
      return tmp8;
    };
ReactCompilerGating = fn(558);
let closure_21 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        const cResult = message(guild[15]).c(65);
        message = message.message;
        const channel = message.channel;
        guild = message.guild;
        ({ visible, messageContext } = message);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserGuildSettingsStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function o() {
            return UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id);
          };
          cResult[1] = channel;
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        let obj = message(guild[15]);
        const stateFromStores = message(guild[19]).useStateFromStores(first, tmp6);
        if (cResult[3] === guild.id) {
          if (cResult[4] === message.author.id) {
            let tmp8 = cResult[5];
          }
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (cResult[6] === message.author.id) {
            if (cResult[7] === id) {
              let tmp11 = cResult[8];
            }
            const effect = noop.useEffect(tmp8, tmp11);
            let reply_message_id;
            if (messageContext != null) {
              reply_message_id = messageContext.reply_message_id;
            }
            const iCYMIMessage = tmp(tmp2[27]).useICYMIMessage(channel.id, reply_message_id);
            const tmpResult4 = tmp(tmp2[27]);
            let before_message_id;
            if (messageContext != null) {
              before_message_id = messageContext.before_message_id;
            }
            const iCYMIMessage1 = tmp(tmp2[27]).useICYMIMessage(channel.id, before_message_id);
            const tmp19 = closure_18();
            if (cResult[9] === channel.id) {
              if (cResult[10] === message.id) {
                let tmp20 = cResult[11];
              }
              if (cResult[12] === channel) {
                if (cResult[13] === message) {
                  let tmp21 = cResult[14];
                }
                if (cResult[15] === channel.id) {
                  if (cResult[16] === guild.id) {
                    if (cResult[17] === message.id) {
                      let tmp22 = cResult[18];
                    }
                    const _Symbol = Symbol;
                    class G {
                      constructor() {
                        obj = closure_1(closure_2[28]);
                        itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                        obj2 = closure_1(closure_2[28]);
                        obj1 = {
                          itemId: message.id,
                          itemType: "message",
                          actionParameters: {
                            actionGestureType: "press",
                            actionTargetElement: "item_container",
                            actionIntentType: "navigate",
                            actionDestinationType: "channel",
                          },
                        };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[31]);
                        navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                        return;
                      }
                    }
                    if (tmp23 === Symbol.for("react.memo_cache_sentinel")) {
                      const string = tmp(tmp2[23]).intl.string;
                      class G {
                        constructor() {
                          obj = closure_1(closure_2[28]);
                          itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                          obj2 = closure_1(closure_2[28]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "message",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[31]);
                          navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                          return;
                        }
                      }
                      cResult[19] = tmp25;
                      let tmp24 = tmp25;
                    } else {
                      tmp24 = cResult[19];
                    }
                    if (cResult[20] !== message.id) {
                      channel(tmp2[32]);
                      class G {
                        constructor() {
                          obj = closure_1(closure_2[28]);
                          itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                          obj2 = closure_1(closure_2[28]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "message",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[31]);
                          navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                          return;
                        }
                      }
                      cResult[20] = message.id;
                      cResult[21] = tmp29;
                      let tmp26 = tmp29;
                    } else {
                      tmp26 = cResult[21];
                    }
                    if (cResult[22] !== channel) {
                      class G {
                        constructor() {
                          obj = closure_1(closure_2[28]);
                          itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                          obj2 = closure_1(closure_2[28]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "message",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[31]);
                          navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                          return;
                        }
                      }
                      const tmp32 = channel(tmp2[33])({ channel: null });
                      cResult[22] = channel;
                      cResult[23] = tmp32;
                      let tmp30 = tmp32;
                      let obj2 = { channel: null };
                    } else {
                      tmp30 = cResult[23];
                    }
                    if (cResult[24] === channel) {
                      if (cResult[25] === stateFromStores) {
                        let tmp33 = cResult[26];
                      }
                      if (cResult[27] === iCYMIMessage1) {
                        if (cResult[28] === channel) {
                          if (cResult[29] === guild) {
                            if (cResult[30] === visible) {
                              let tmp35 = cResult[31];
                            }
                            if (cResult[32] === channel) {
                              if (cResult[33] === guild) {
                                if (cResult[34] === message) {
                                  if (cResult[35] === visible) {
                                    let tmp40 = cResult[36];
                                  }
                                  if (cResult[37] === channel) {
                                    if (cResult[38] === guild) {
                                      if (cResult[39] === iCYMIMessage) {
                                        let tmp43 = cResult[40];
                                      }
                                      if (cResult[41] === tmp21) {
                                        if (cResult[42] === tmp22) {
                                          if (cResult[43] === tmp19.pressable) {
                                            if (cResult[44] === tmp30) {
                                              if (cResult[45] === tmp33) {
                                                if (cResult[46] === tmp35) {
                                                  if (cResult[47] === tmp40) {
                                                    if (cResult[48] === tmp43) {
                                                      let tmp48 = cResult[49];
                                                    }
                                                    if (cResult[50] === channel) {
                                                      if (cResult[51] === guild) {
                                                        if (cResult[54] === tmp19.footer) {
                                                          if (cResult[55] === tmp50) {
                                                            let tmp53 = cResult[56];
                                                          }
                                                          if (cResult[57] === channel.id) {
                                                            if (cResult[58] === tmp20) {
                                                              if (cResult[59] === tmp22) {
                                                                if (cResult[60] === message) {
                                                                  if (cResult[61] === tmp26) {
                                                                    if (cResult[62] === tmp48) {
                                                                      if (cResult[63] === tmp53) {
                                                                        let tmp56 = cResult[64];
                                                                      }
                                                                      return tmp56;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          class G {
                                                            constructor() {
                                                              obj = closure_1(closure_2[28]);
                                                              itemInteractedResult = obj.itemInteracted(
                                                                message.id,
                                                                "message",
                                                                "press_message",
                                                              );
                                                              obj2 = closure_1(closure_2[28]);
                                                              obj1 = {
                                                                itemId: message.id,
                                                                itemType: "message",
                                                                actionParameters: {
                                                                  actionGestureType: "press",
                                                                  actionTargetElement: "item_container",
                                                                  actionIntentType: "navigate",
                                                                  actionDestinationType: "channel",
                                                                },
                                                              };
                                                              feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                              obj4 = closure_0(closure_2[31]);
                                                              navigateToPostResult = obj4.navigateToPost(
                                                                channel.id,
                                                                guild.id,
                                                                message.id,
                                                              );
                                                              return;
                                                            }
                                                          }
                                                          let obj3 = {
                                                            actionLabel: tmp24,
                                                            id: message.id,
                                                            interactionType: "message",
                                                            channelId: channel.id,
                                                            timestamp: tmp26,
                                                            onHeaderPress: tmp22,
                                                            onHeaderLongPress: tmp20,
                                                            message,
                                                            shouldFeatureUser: true,
                                                            children: null,
                                                          };
                                                          const items1 = [tmp48, tmp53];
                                                          obj3.children = items1;
                                                          const tmp58 = closure_15(channel(tmp2[36]), obj3);
                                                          class E {
                                                            constructor() {
                                                              obj = closure_1(closure_2[28]);
                                                              itemInteractedResult = obj.itemInteracted(
                                                                message.id,
                                                                "message",
                                                                "long_press_channel",
                                                              );
                                                              obj2 = closure_1(closure_2[28]);
                                                              obj1 = {
                                                                itemId: message.id,
                                                                itemType: "message",
                                                                actionParameters: {
                                                                  actionGestureType: "long_press",
                                                                  actionTargetElement: "item_header",
                                                                  actionIntentType: "open",
                                                                  actionDestinationType: null,
                                                                },
                                                              };
                                                              feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                              obj4 = closure_0(closure_2[29]);
                                                              result = obj4.openChannelLongPressActionSheet(channel.id);
                                                              return;
                                                            }
                                                          }
                                                          cResult[58] = tmp20;
                                                          cResult[59] = tmp22;
                                                          class S {
                                                            constructor() {
                                                              tmp = guild;
                                                              id = undefined;
                                                              if (guild != null) {
                                                                id = tmp.id;
                                                              }
                                                              if (null != id) {
                                                                tmp3 = closure_1;
                                                                tmp4 = closure_2;
                                                                obj = closure_1(closure_2[26]);
                                                                id1 = undefined;
                                                                if (tmp != null) {
                                                                  id1 = tmp.id;
                                                                }
                                                                tmp6 = message;
                                                                membersById = obj.requestMembersById(
                                                                  id1,
                                                                  message.author.id,
                                                                );
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          cResult[61] = tmp26;
                                                          cResult[62] = tmp48;
                                                          cResult[63] = tmp53;
                                                          cResult[64] = tmp58;
                                                          tmp56 = tmp58;
                                                        }
                                                        class G {
                                                          constructor() {
                                                            obj = closure_1(closure_2[28]);
                                                            itemInteractedResult = obj.itemInteracted(
                                                              message.id,
                                                              "message",
                                                              "press_message",
                                                            );
                                                            obj2 = closure_1(closure_2[28]);
                                                            obj1 = {
                                                              itemId: message.id,
                                                              itemType: "message",
                                                              actionParameters: {
                                                                actionGestureType: "press",
                                                                actionTargetElement: "item_container",
                                                                actionIntentType: "navigate",
                                                                actionDestinationType: "channel",
                                                              },
                                                            };
                                                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                            obj4 = closure_0(closure_2[31]);
                                                            navigateToPostResult = obj4.navigateToPost(
                                                              channel.id,
                                                              guild.id,
                                                              message.id,
                                                            );
                                                            return;
                                                          }
                                                        }
                                                        let obj4 = { style: tmp19.footer, children: tmp50 };
                                                        const tmp55 = closure_14(View, obj4);
                                                        cResult[54] = tmp19.footer;
                                                        cResult[55] = tmp50;
                                                        cResult[56] = tmp55;
                                                        tmp53 = tmp55;
                                                      }
                                                    }
                                                    class G {
                                                      constructor() {
                                                        obj = closure_1(closure_2[28]);
                                                        itemInteractedResult = obj.itemInteracted(
                                                          message.id,
                                                          "message",
                                                          "press_message",
                                                        );
                                                        obj2 = closure_1(closure_2[28]);
                                                        obj1 = {
                                                          itemId: message.id,
                                                          itemType: "message",
                                                          actionParameters: {
                                                            actionGestureType: "press",
                                                            actionTargetElement: "item_container",
                                                            actionIntentType: "navigate",
                                                            actionDestinationType: "channel",
                                                          },
                                                        };
                                                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                        obj4 = closure_0(closure_2[31]);
                                                        navigateToPostResult = obj4.navigateToPost(
                                                          channel.id,
                                                          guild.id,
                                                          message.id,
                                                        );
                                                        return;
                                                      }
                                                    }
                                                    const obj5 = {
                                                      message,
                                                      channel,
                                                      guild,
                                                      backgroundVariant: "base",
                                                      id: message.id,
                                                      itemType: "message",
                                                    };
                                                    cResult[50] = channel;
                                                    cResult[51] = guild;
                                                    cResult[52] = message;
                                                    cResult[53] = closure_14(channel(tmp2[35]), obj5);
                                                    class E {
                                                      constructor() {
                                                        obj = closure_1(closure_2[28]);
                                                        itemInteractedResult = obj.itemInteracted(
                                                          message.id,
                                                          "message",
                                                          "long_press_channel",
                                                        );
                                                        obj2 = closure_1(closure_2[28]);
                                                        obj1 = {
                                                          itemId: message.id,
                                                          itemType: "message",
                                                          actionParameters: {
                                                            actionGestureType: "long_press",
                                                            actionTargetElement: "item_header",
                                                            actionIntentType: "open",
                                                            actionDestinationType: null,
                                                          },
                                                        };
                                                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                                                        obj4 = closure_0(closure_2[29]);
                                                        result = obj4.openChannelLongPressActionSheet(channel.id);
                                                        return;
                                                      }
                                                    }
                                                    const tmp52 = closure_14(channel(tmp2[35]), obj5);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      class G {
                                        constructor() {
                                          obj = closure_1(closure_2[28]);
                                          itemInteractedResult = obj.itemInteracted(
                                            message.id,
                                            "message",
                                            "press_message",
                                          );
                                          obj2 = closure_1(closure_2[28]);
                                          obj1 = {
                                            itemId: message.id,
                                            itemType: "message",
                                            actionParameters: {
                                              actionGestureType: "press",
                                              actionTargetElement: "item_container",
                                              actionIntentType: "navigate",
                                              actionDestinationType: "channel",
                                            },
                                          };
                                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                                          obj4 = closure_0(closure_2[31]);
                                          navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                                          return;
                                        }
                                      }
                                      const obj6 = {
                                        onPress: tmp22,
                                        onLongPress: tmp21,
                                        unstable_pressDelay: 130,
                                        accessibilityRole: "button",
                                        accessibilityLabel: tmp30,
                                        accessibilityHint: tmp33,
                                        style: tmp19.pressable,
                                        children: null,
                                      };
                                      const items2 = [tmp35, tmp40, tmp43];
                                      obj6.children = items2;
                                      const tmp49 = closure_15(tmp(tmp2[34]).PressableHighlight, obj6);
                                      cResult[41] = tmp21;
                                      class E {
                                        constructor() {
                                          obj = closure_1(closure_2[28]);
                                          itemInteractedResult = obj.itemInteracted(
                                            message.id,
                                            "message",
                                            "long_press_channel",
                                          );
                                          obj2 = closure_1(closure_2[28]);
                                          obj1 = {
                                            itemId: message.id,
                                            itemType: "message",
                                            actionParameters: {
                                              actionGestureType: "long_press",
                                              actionTargetElement: "item_header",
                                              actionIntentType: "open",
                                              actionDestinationType: null,
                                            },
                                          };
                                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                                          obj4 = closure_0(closure_2[29]);
                                          result = obj4.openChannelLongPressActionSheet(channel.id);
                                          return;
                                        }
                                      }
                                      cResult[43] = tmp19.pressable;
                                      cResult[44] = tmp30;
                                      class S {
                                        constructor() {
                                          tmp = guild;
                                          id = undefined;
                                          if (guild != null) {
                                            id = tmp.id;
                                          }
                                          if (null != id) {
                                            tmp3 = closure_1;
                                            tmp4 = closure_2;
                                            obj = closure_1(closure_2[26]);
                                            id1 = undefined;
                                            if (tmp != null) {
                                              id1 = tmp.id;
                                            }
                                            tmp6 = message;
                                            membersById = obj.requestMembersById(id1, message.author.id);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[46] = tmp35;
                                      cResult[47] = tmp40;
                                      cResult[48] = tmp43;
                                      cResult[49] = tmp49;
                                      tmp48 = tmp49;
                                    }
                                  }
                                  class G {
                                    constructor() {
                                      obj = closure_1(closure_2[28]);
                                      itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                                      obj2 = closure_1(closure_2[28]);
                                      obj1 = {
                                        itemId: message.id,
                                        itemType: "message",
                                        actionParameters: {
                                          actionGestureType: "press",
                                          actionTargetElement: "item_container",
                                          actionIntentType: "navigate",
                                          actionDestinationType: "channel",
                                        },
                                      };
                                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                                      obj4 = closure_0(closure_2[31]);
                                      navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                                      return;
                                    }
                                  }
                                  if (null != iCYMIMessage) {
                                    class G {
                                      constructor() {
                                        obj = closure_1(closure_2[28]);
                                        itemInteractedResult = obj.itemInteracted(
                                          message.id,
                                          "message",
                                          "press_message",
                                        );
                                        obj2 = closure_1(closure_2[28]);
                                        obj1 = {
                                          itemId: message.id,
                                          itemType: "message",
                                          actionParameters: {
                                            actionGestureType: "press",
                                            actionTargetElement: "item_container",
                                            actionIntentType: "navigate",
                                            actionDestinationType: "channel",
                                          },
                                        };
                                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                                        obj4 = closure_0(closure_2[31]);
                                        navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                                        return;
                                      }
                                    }
                                    tmp47[0] = iCYMIMessage;
                                    tmp47[1] = channel;
                                    tmp47[2] = guild;
                                    const tmp44 = closure_14(closure_20, tmp47);
                                  }
                                  cResult[37] = channel;
                                  cResult[38] = guild;
                                  cResult[39] = iCYMIMessage;
                                  cResult[40] = tmp44;
                                  tmp43 = tmp44;
                                }
                              }
                            }
                            class G {
                              constructor() {
                                obj = closure_1(closure_2[28]);
                                itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                                obj2 = closure_1(closure_2[28]);
                                obj1 = {
                                  itemId: message.id,
                                  itemType: "message",
                                  actionParameters: {
                                    actionGestureType: "press",
                                    actionTargetElement: "item_container",
                                    actionIntentType: "navigate",
                                    actionDestinationType: "channel",
                                  },
                                };
                                feedItemActionedResult = obj2.feedItemActioned(obj1);
                                obj4 = closure_0(closure_2[31]);
                                navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                                return;
                              }
                            }
                            const obj7 = { message, channel, guild, visible };
                            const tmp42 = closure_14(closure_19, obj7);
                            cResult[32] = channel;
                            cResult[33] = guild;
                            cResult[34] = message;
                            cResult[35] = visible;
                            class E {
                              constructor() {
                                obj = closure_1(closure_2[28]);
                                itemInteractedResult = obj.itemInteracted(message.id, "message", "long_press_channel");
                                obj2 = closure_1(closure_2[28]);
                                obj1 = {
                                  itemId: message.id,
                                  itemType: "message",
                                  actionParameters: {
                                    actionGestureType: "long_press",
                                    actionTargetElement: "item_header",
                                    actionIntentType: "open",
                                    actionDestinationType: null,
                                  },
                                };
                                feedItemActionedResult = obj2.feedItemActioned(obj1);
                                obj4 = closure_0(closure_2[29]);
                                result = obj4.openChannelLongPressActionSheet(channel.id);
                                return;
                              }
                            }
                            cResult[36] = tmp42;
                            tmp40 = tmp42;
                          }
                        }
                      }
                      class G {
                        constructor() {
                          obj = closure_1(closure_2[28]);
                          itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                          obj2 = closure_1(closure_2[28]);
                          obj1 = {
                            itemId: message.id,
                            itemType: "message",
                            actionParameters: {
                              actionGestureType: "press",
                              actionTargetElement: "item_container",
                              actionIntentType: "navigate",
                              actionDestinationType: "channel",
                            },
                          };
                          feedItemActionedResult = obj2.feedItemActioned(obj1);
                          obj4 = closure_0(closure_2[31]);
                          navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                          return;
                        }
                      }
                      if (null != iCYMIMessage1) {
                        class G {
                          constructor() {
                            obj = closure_1(closure_2[28]);
                            itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                            obj2 = closure_1(closure_2[28]);
                            obj1 = {
                              itemId: message.id,
                              itemType: "message",
                              actionParameters: {
                                actionGestureType: "press",
                                actionTargetElement: "item_container",
                                actionIntentType: "navigate",
                                actionDestinationType: "channel",
                              },
                            };
                            feedItemActionedResult = obj2.feedItemActioned(obj1);
                            obj4 = closure_0(closure_2[31]);
                            navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                            return;
                          }
                        }
                        tmp39[0] = iCYMIMessage1;
                        tmp39[1] = channel;
                        tmp39[2] = guild;
                        tmp39[3] = visible;
                        const tmp36 = closure_14(closure_19, tmp39);
                      }
                      cResult[27] = iCYMIMessage1;
                      cResult[28] = channel;
                      cResult[29] = guild;
                      cResult[30] = visible;
                      cResult[31] = tmp36;
                      tmp35 = tmp36;
                    }
                    const obj8 = { channel, muted: stateFromStores };
                    const channelA11yHint = tmp(tmp2[33]).getChannelA11yHint(obj8);
                    cResult[24] = channel;
                    cResult[25] = stateFromStores;
                    class E {
                      constructor() {
                        obj = closure_1(closure_2[28]);
                        itemInteractedResult = obj.itemInteracted(message.id, "message", "long_press_channel");
                        obj2 = closure_1(closure_2[28]);
                        obj1 = {
                          itemId: message.id,
                          itemType: "message",
                          actionParameters: {
                            actionGestureType: "long_press",
                            actionTargetElement: "item_header",
                            actionIntentType: "open",
                            actionDestinationType: null,
                          },
                        };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[29]);
                        result = obj4.openChannelLongPressActionSheet(channel.id);
                        return;
                      }
                    }
                    cResult[26] = channelA11yHint;
                    tmp33 = channelA11yHint;
                    const tmpResult6 = tmp(tmp2[33]);
                  }
                }
                class G {
                  constructor() {
                    obj = closure_1(closure_2[28]);
                    itemInteractedResult = obj.itemInteracted(message.id, "message", "press_message");
                    obj2 = closure_1(closure_2[28]);
                    obj1 = {
                      itemId: message.id,
                      itemType: "message",
                      actionParameters: {
                        actionGestureType: "press",
                        actionTargetElement: "item_container",
                        actionIntentType: "navigate",
                        actionDestinationType: "channel",
                      },
                    };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[31]);
                    navigateToPostResult = obj4.navigateToPost(channel.id, guild.id, message.id);
                    return;
                  }
                }
                cResult[15] = channel.id;
                cResult[16] = guild.id;
                cResult[17] = message.id;
                cResult[18] = G;
                tmp22 = G;
              }
              class R {
                constructor() {
                  obj = closure_1(closure_2[28]);
                  itemInteractedResult = obj.itemInteracted(message.id, "message", "long_press_message");
                  obj2 = closure_1(closure_2[28]);
                  obj1 = {
                    itemId: message.id,
                    itemType: "message",
                    actionParameters: {
                      actionGestureType: "long_press",
                      actionTargetElement: "item_body",
                      actionIntentType: "open",
                      actionDestinationType: null,
                    },
                  };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[30]);
                  obj6 = { channel, message, user: closure_10.getUser(message.author.id) };
                  result = obj4.showLongPressMessageActionSheet(obj6);
                  return;
                }
              }
              cResult[12] = channel;
              cResult[13] = message;
              cResult[14] = R;
              tmp21 = R;
            }
            class E {
              constructor() {
                obj = closure_1(closure_2[28]);
                itemInteractedResult = obj.itemInteracted(message.id, "message", "long_press_channel");
                obj2 = closure_1(closure_2[28]);
                obj1 = {
                  itemId: message.id,
                  itemType: "message",
                  actionParameters: {
                    actionGestureType: "long_press",
                    actionTargetElement: "item_header",
                    actionIntentType: "open",
                    actionDestinationType: null,
                  },
                };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[29]);
                result = obj4.openChannelLongPressActionSheet(channel.id);
                return;
              }
            }
            cResult[9] = channel.id;
            cResult[10] = message.id;
            class S {
              constructor() {
                tmp = guild;
                id = undefined;
                if (guild != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[26]);
                  id1 = undefined;
                  if (tmp != null) {
                    id1 = tmp.id;
                  }
                  tmp6 = message;
                  membersById = obj.requestMembersById(id1, message.author.id);
                }
                return;
              }
            }
            tmp20 = E;
            const tmpResult5 = tmp(tmp2[27]);
          }
          const items3 = [id, message.author.id];
          cResult[6] = message.author.id;
          cResult[7] = id;
          cResult[8] = items3;
          tmp11 = items3;
        }
        class S {
          constructor() {
            tmp = guild;
            id = undefined;
            if (guild != null) {
              id = tmp.id;
            }
            if (null != id) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[26]);
              id1 = undefined;
              if (tmp != null) {
                id1 = tmp.id;
              }
              tmp6 = message;
              membersById = obj.requestMembersById(id1, message.author.id);
            }
            return;
          }
        }
        cResult[3] = guild.id;
        cResult[4] = message.author.id;
        cResult[5] = S;
        tmp8 = S;
        const tmpResult = message(guild[19]);
      }
    : (message) => {
        message = message.message;
        const channel = message.channel;
        guild = message.guild;
        ({ visible, messageContext } = message);
        const items = [UserGuildSettingsStore];
        let id;
        const stateFromStores = message(guild[19]).useStateFromStores(items, () =>
          UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
        );
        if (guild != null) {
          id = guild.id;
        }
        const items1 = [id, message.author.id];
        const effect = noop.useEffect(() => {
          let id;
          if (guild != null) {
            id = guild.id;
          }
          if (null != id) {
            let id1;
            if (guild != null) {
              id1 = guild.id;
            }
            const membersById = GuildActionCreatorsDefault.requestMembersById(id1, message.author.id);
          }
        }, items1);
        let obj = message(guild[19]);
        let reply_message_id;
        if (messageContext != null) {
          reply_message_id = messageContext.reply_message_id;
        }
        const iCYMIMessage = message(guild[27]).useICYMIMessage(channel.id, reply_message_id);
        const tmpResult = message(guild[27]);
        let before_message_id;
        if (messageContext != null) {
          before_message_id = messageContext.before_message_id;
        }
        const iCYMIMessage1 = message(guild[27]).useICYMIMessage(channel.id, before_message_id);
        const tmp10 = closure_18();
        const items2 = [channel.id, message];
        const items3 = [channel, message];
        const callback = noop.useCallback(() => {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "message", "long_press_channel");
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: message.id,
            itemType: "message",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_header",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          });
          const obj3 = {
            itemId: message.id,
            itemType: "message",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_header",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          };
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
        }, items2);
        const items4 = [channel.id, guild.id, message.id];
        const callback1 = noop.useCallback(() => {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "message", "long_press_message");
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: message.id,
            itemType: "message",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_body",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          });
          const obj3 = {
            itemId: message.id,
            itemType: "message",
            actionParameters: {
              actionGestureType: "long_press",
              actionTargetElement: "item_body",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          };
          const obj4 = showLongPressMessageActionSheet;
          const result = obj4.showLongPressMessageActionSheet({
            channel,
            message,
            user: UserStore.getUser(message.author.id),
          });
        }, items3);
        const callback2 = noop.useCallback(() => {
          ICYMIActionCreatorsDefault.itemInteracted(message.id, "message", "press_message");
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: message.id,
            itemType: "message",
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "navigate",
              actionDestinationType: "channel",
            },
          });
          const obj3 = {
            itemId: message.id,
            itemType: "message",
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "item_container",
              actionIntentType: "navigate",
              actionDestinationType: "channel",
            },
          };
          ICYMIShared.navigateToPost(channel.id, guild.id, message.id);
        }, items4);
        let obj3 = {
          actionLabel: null,
          id: null,
          interactionType: "message",
          channelId: null,
          timestamp: null,
          onHeaderPress: null,
          onHeaderLongPress: null,
          message: null,
          shouldFeatureUser: true,
          children: null,
        };
        const tmp15 = channel;
        const tmpResult3 = message(guild[27]);
        const intl = tmp(tmp2[23]).intl;
        obj3.actionLabel = intl.string(message(guild[23]).t.hMFMY9);
        obj3.id = message.id;
        obj3.channelId = channel.id;
        const tmp16 = channel(guild[36]);
        obj3.timestamp = channel(guild[32]).extractTimestamp(message.id);
        obj3.onHeaderPress = callback2;
        obj3.onHeaderLongPress = callback;
        obj3.message = message;
        let obj4 = {
          onPress: callback2,
          onLongPress: callback1,
          unstable_pressDelay: 130,
          accessibilityRole: "button",
          accessibilityLabel: channel(guild[33])({ channel }),
          accessibilityHint: null,
          style: null,
          children: null,
        };
        const obj6 = channel(guild[32]);
        obj4.accessibilityHint = message(guild[33]).getChannelA11yHint({ channel, muted: stateFromStores });
        obj4.style = tmp10.pressable;
        let tmp17 = null;
        if (null != iCYMIMessage1) {
          const obj5 = { message: iCYMIMessage1, channel, guild, visible };
          tmp17 = closure_14(closure_19, obj5);
        }
        const items5 = [tmp17, closure_14(closure_19, { message, channel, guild, visible })];
        let tmp20Result = null;
        if (null != iCYMIMessage) {
          const obj7 = { message: iCYMIMessage, channel, guild };
          tmp20Result = closure_14(closure_20, obj7);
        }
        items5[2] = tmp20Result;
        obj4.children = items5;
        const items6 = [closure_15(message(guild[34]).PressableHighlight, obj4)];
        const obj8 = {
          style: tmp10.footer,
          children: closure_14(tmp15(guild[35]), {
            message,
            channel,
            guild,
            backgroundVariant: "base",
            id: message.id,
            itemType: "message",
          }),
        };
        items6[1] = closure_14(View, obj8);
        obj3.children = items6;
        return closure_15(tmp16, obj3);
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = gravityMessage(576).c(15);
      ({ messageContext, visible, message } = arg0);
      const obj = gravityMessage(576);
      gravityMessage = gravityMessage(16393).useGravityMessage(message);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== gravityMessage) {
        const fn = function l() {
          return ChannelStore.getChannel(gravityMessage.getChannelId());
        };
        cResult[1] = gravityMessage;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj2 = gravityMessage(16393);
      const stateFromStores = gravityMessage(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (cResult[4] !== guild_id) {
        let guild_id1;
        if (stateFromStores != null) {
          guild_id1 = stateFromStores.guild_id;
        }
        const fn2 = function _() {
          let guild_id;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          return GuildStore.getGuild(guild_id);
        };
        cResult[4] = guild_id1;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult = gravityMessage(504);
      const stateFromStores1 = gravityMessage(504).useStateFromStores(tmp9, tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [RelationshipStore];
        cResult[6] = items2;
      }
      if (cResult[7] !== gravityMessage.author.id) {
        class T {
          constructor() {
            return closure_8.isBlockedOrIgnored(closure_0.author.id);
          }
        }
        cResult[7] = gravityMessage.author.id;
        cResult[8] = T;
      } else {
        class T {
          constructor() {
            return closure_8.isBlockedOrIgnored(closure_0.author.id);
          }
        }
      }
      gravityMessage(504);
      if (null != stateFromStores) {
        class T {
          constructor() {
            return closure_8.isBlockedOrIgnored(closure_0.author.id);
          }
        }
        if (null != stateFromStores1) {
          class T {
            constructor() {
              return closure_8.isBlockedOrIgnored(closure_0.author.id);
            }
          }
          if (!tmp19) {
            class T {
              constructor() {
                return closure_8.isBlockedOrIgnored(closure_0.author.id);
              }
            }
            const obj3 = {
              message: gravityMessage,
              channel: stateFromStores,
              guild: stateFromStores1,
              messageContext,
              visible,
            };
            const tmp23 = closure_14(closure_21, obj3);
            cResult[9] = stateFromStores;
            cResult[10] = stateFromStores1;
            cResult[11] = gravityMessage;
            cResult[12] = messageContext;
            cResult[13] = visible;
            cResult[14] = tmp23;
          }
        }
      }
      return null;
    }
  : (arg0) => {
      let gravityMessage;
      ({ message, messageContext, visible } = arg0);
      gravityMessage = gravityMessage(16393).useGravityMessage(message);
      const obj = gravityMessage(16393);
      const items = [ChannelStore];
      const stateFromStores = gravityMessage(504).useStateFromStores(items, () =>
        ChannelStore.getChannel(gravityMessage.getChannelId()),
      );
      const obj2 = gravityMessage(504);
      const items1 = [GuildStore];
      const stateFromStores1 = gravityMessage(504).useStateFromStores(items1, () => {
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return GuildStore.getGuild(guild_id);
      });
      gravityMessage(504);
      [][0] = RelationshipStore;
      let tmp6 = null;
      if (null != stateFromStores) {
        tmp6 = null;
        if (null != stateFromStores1) {
          tmp6 = null;
          if (!tmp5) {
            const obj4 = {
              message: gravityMessage,
              channel: stateFromStores,
              guild: stateFromStores1,
              messageContext,
              visible,
            };
            tmp6 = closure_14(closure_21, obj4);
          }
        }
      }
      return tmp6;
    };
export const MessageRowContent = tmp4;
