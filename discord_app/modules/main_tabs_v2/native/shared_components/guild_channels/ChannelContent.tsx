// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
import c from "../../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import isRoleRequiredDefault from "../../../../channel/isRoleRequired.tsx";
import WarningIcon from "../../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import LockIcon from "../../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import GuildRoleSubscriptionGatedChannelIconDefault from "../../../../guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import guild_channels_ChannelTitleDefault from "ChannelTitle.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UnreadSetting = fn(5967).UnreadSetting;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let PlatformUtils = fn(1382);
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj3 = {
  channelContent: { flex: 1, marginTop: num },
  channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 },
  rightBox: { flexDirection: "column", alignItems: "flex-end" },
  rightContentAbsolute: { position: "absolute", right: 0, top: 0 },
  channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" },
  channelTraitIcon: null,
};
let obj4 = { opacity: fn(11758).SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
PlatformUtils = fn(1382);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj4.marginTop = num2;
obj3.channelTraitIcon = obj4;
let closure_8 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelContentComponent(arg0) {
      const cResult = c.c(69);
      ({
        name,
        subtitle,
        unread,
        resolvedUnreadSetting,
        locked,
        muted,
        lastMessageTimestampString,
        channel,
        connected,
        layout,
        mentionCount,
        mentionBadge,
        isSubscriptionGated,
        needSubscriptionToAccess,
      } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== layout) {
        const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
        cResult[0] = layout;
        cResult[1] = layoutStyles;
        let tmp5 = layoutStyles;
        const tmpResult = ChannelListLayout;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === channel) {
        if (cResult[3] === locked) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] !== channel) {
          let isNSFWResult;
          if (channel != null) {
            isNSFWResult = channel.isNSFW();
          }
          cResult[5] = channel;
          cResult[6] = isNSFWResult;
          let tmp11 = isNSFWResult;
        } else {
          tmp11 = cResult[6];
        }
        let tmp14 = tmp7;
        if (!tmp7) {
          tmp14 = tmp11;
        }
        if (cResult[7] !== subtitle) {
          const isValidElementResult = noop.isValidElement(subtitle);
          cResult[7] = subtitle;
          cResult[8] = isValidElementResult;
          let tmp15 = isValidElementResult;
        } else {
          tmp15 = cResult[8];
        }
        let tmp20 = tmp19;
        if (null != lastMessageTimestampString) {
          tmp20 = null == mentionBadge;
        }
        let str = "center";
        if (tmp15) {
          str = "space-between";
        }
        if (cResult[9] !== str) {
          const obj2 = { justifyContent: str };
          cResult[9] = str;
          cResult[10] = obj2;
          let tmp21 = obj2;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] === tmp4.leftBox) {
          if (cResult[12] === tmp21) {
            let tmp22 = cResult[13];
          }
          let num13 = 0;
          if (tmp20) {
            num13 = 30;
          }
          if (cResult[14] !== num13) {
            const obj3 = { flexDirection: "row", paddingRight: num13, alignItems: "center" };
            cResult[14] = num13;
            cResult[15] = obj3;
            let tmp23 = obj3;
          } else {
            tmp23 = cResult[15];
          }
          if (resolvedUnreadSetting == null) {
            resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
          }
          if (cResult[16] === connected) {
            if (cResult[17] === layout) {
              if (cResult[18] === muted) {
                if (cResult[19] === name) {
                  if (cResult[20] === resolvedUnreadSetting) {
                    if (cResult[21] === unread) {
                      let tmp25 = cResult[22];
                    }
                    if (cResult[23] === tmp14) {
                      if (cResult[24] === isSubscriptionGated) {
                        if (cResult[25] === needSubscriptionToAccess) {
                          if (cResult[26] === tmp7) {
                            if (cResult[27] === tmp11) {
                              if (cResult[28] === tmp4.channelTraitIcon) {
                                if (cResult[29] === tmp4.channelTraits) {
                                  let tmp29 = cResult[30];
                                }
                                if (cResult[31] === tmp25) {
                                  if (cResult[32] === tmp29) {
                                    if (cResult[33] === tmp23) {
                                      let tmp40 = cResult[34];
                                    }
                                    if (cResult[35] === tmp5) {
                                      if (cResult[36] === mentionCount) {
                                        if (cResult[37] === tmp15) {
                                          if (cResult[38] === subtitle) {
                                            let tmp44 = cResult[39];
                                          }
                                          if (cResult[40] === tmp40) {
                                            if (cResult[41] === tmp44) {
                                              if (cResult[42] === tmp22) {
                                                let tmp48 = cResult[43];
                                              }
                                              const tmp52 = tmp20 ? tmp4.rightContentAbsolute : tmp4.rightBox;
                                              if (cResult[44] === lastMessageTimestampString) {
                                                if (cResult[45] === tmp19) {
                                                  let tmp53 = cResult[46];
                                                }
                                                const _Symbol = Symbol;
                                                if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const obj4 = { alignItems: "center", paddingLeft: 4 };
                                                  cResult[47] = obj4;
                                                  let tmp57 = obj4;
                                                } else {
                                                  tmp57 = cResult[47];
                                                }
                                                if (cResult[48] !== tmp19) {
                                                  let obj5 = tmp19;
                                                  if (tmp19) {
                                                    obj5 = { marginTop: 5 };
                                                  }
                                                  cResult[48] = tmp19;
                                                  cResult[49] = obj5;
                                                  let tmp58 = obj5;
                                                } else {
                                                  tmp58 = cResult[49];
                                                }
                                                if (cResult[50] !== tmp58) {
                                                  const items = [tmp57, tmp58];
                                                  cResult[50] = tmp58;
                                                  cResult[51] = items;
                                                  let tmp59 = items;
                                                } else {
                                                  tmp59 = cResult[51];
                                                }
                                                if (cResult[52] === mentionBadge) {
                                                  if (cResult[53] === tmp59) {
                                                    let tmp60 = cResult[54];
                                                  }
                                                  if (cResult[55] !== tmp20) {
                                                    let tmp65 = tmp20;
                                                    if (tmp20) {
                                                      const obj6 = { style: { flex: 1 } };
                                                      tmp65 = timestampProducer(View, obj6);
                                                    }
                                                    cResult[55] = tmp20;
                                                    cResult[56] = tmp65;
                                                    let tmp64 = tmp65;
                                                  } else {
                                                    tmp64 = cResult[56];
                                                  }
                                                  if (cResult[57] === tmp52) {
                                                    if (cResult[58] === tmp53) {
                                                      if (cResult[59] === tmp60) {
                                                        if (cResult[60] === tmp64) {
                                                          let tmp68 = cResult[61];
                                                        }
                                                        if (cResult[62] === tmp4.channelContainer) {
                                                          if (cResult[63] === tmp48) {
                                                            if (cResult[64] === tmp68) {
                                                              let tmp72 = cResult[65];
                                                            }
                                                            if (cResult[66] === tmp4.channelContent) {
                                                              if (cResult[67] === tmp72) {
                                                                let tmp76 = cResult[68];
                                                              }
                                                              return tmp76;
                                                            }
                                                            const obj7 = {
                                                              style: tmp4.channelContent,
                                                              children: tmp72,
                                                            };
                                                            const tmp79 = timestampProducer(View, obj7);
                                                            cResult[66] = tmp4.channelContent;
                                                            cResult[67] = tmp72;
                                                            cResult[68] = tmp79;
                                                            tmp76 = tmp79;
                                                          }
                                                        }
                                                        const obj8 = { style: tmp4.channelContainer, children: null };
                                                        const items1 = [tmp48, tmp68];
                                                        obj8.children = items1;
                                                        const tmp75 = React5(View, obj8);
                                                        cResult[62] = tmp4.channelContainer;
                                                        cResult[63] = tmp48;
                                                        cResult[64] = tmp68;
                                                        cResult[65] = tmp75;
                                                        tmp72 = tmp75;
                                                      }
                                                    }
                                                  }
                                                  const obj9 = { style: tmp52, children: null };
                                                  const items2 = [tmp53, tmp60, tmp64];
                                                  obj9.children = items2;
                                                  const tmp71 = React5(View, obj9);
                                                  cResult[57] = tmp52;
                                                  cResult[58] = tmp53;
                                                  cResult[59] = tmp60;
                                                  cResult[60] = tmp64;
                                                  cResult[61] = tmp71;
                                                  tmp68 = tmp71;
                                                }
                                                const obj10 = { style: tmp59, children: mentionBadge };
                                                const tmp63 = timestampProducer(View, obj10);
                                                cResult[52] = mentionBadge;
                                                cResult[53] = tmp59;
                                                cResult[54] = tmp63;
                                                tmp60 = tmp63;
                                              }
                                              let tmp54 = tmp19;
                                              if (tmp19) {
                                                const obj11 = {
                                                  variant: "text-xs/medium",
                                                  color: "text-muted",
                                                  style: { marginLeft: "auto" },
                                                  maxFontSizeMultiplier: 1.75,
                                                  children: lastMessageTimestampString,
                                                };
                                                tmp54 = timestampProducer(Text_Text.Text, obj11);
                                              }
                                              cResult[44] = lastMessageTimestampString;
                                              cResult[45] = tmp19;
                                              cResult[46] = tmp54;
                                              tmp53 = tmp54;
                                            }
                                          }
                                          const obj12 = { style: tmp22, children: null };
                                          const items3 = [tmp40, tmp44];
                                          obj12.children = items3;
                                          const tmp51 = React5(View, obj12);
                                          cResult[40] = tmp40;
                                          cResult[41] = tmp44;
                                          cResult[42] = tmp22;
                                          cResult[43] = tmp51;
                                          tmp48 = tmp51;
                                        }
                                      }
                                    }
                                    let tmp46Result = null;
                                    if (tmp15) {
                                      let num38 = mentionCount;
                                      if (mentionCount == null) {
                                        num38 = 0;
                                      }
                                      let num39 = 0;
                                      if (num38 > 0) {
                                        num39 = 20;
                                      }
                                      const obj13 = { style: null, children: null };
                                      const obj14 = { paddingRight: num39 };
                                      const items4 = [obj14];
                                      const obj15 = { marginTop: tmp5.messagePreview.margin.marginTop };
                                      items4[1] = obj15;
                                      obj13.style = items4;
                                      obj13.children = subtitle;
                                      tmp46Result = timestampProducer(View, obj13);
                                    }
                                    cResult[35] = tmp5;
                                    cResult[36] = mentionCount;
                                    cResult[37] = tmp15;
                                    cResult[38] = subtitle;
                                    cResult[39] = tmp46Result;
                                    tmp44 = tmp46Result;
                                  }
                                }
                                const obj16 = { style: tmp23, children: null };
                                const items5 = [tmp25, tmp29];
                                obj16.children = items5;
                                const tmp43 = React5(View, obj16);
                                cResult[31] = tmp25;
                                cResult[32] = tmp29;
                                cResult[33] = tmp23;
                                cResult[34] = tmp43;
                                tmp40 = tmp43;
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp31Result = tmp14;
                    if (tmp14) {
                      const items6 = [tmp4.channelTraits];
                      let num24 = 1;
                      if (tmp7) {
                        num24 = 1;
                        if (tmp11) {
                          num24 = 2;
                        }
                      }
                      const obj17 = { style: null, children: null };
                      const obj18 = { maxWidth: 14 * num24 };
                      items6[1] = obj18;
                      obj17.style = items6;
                      let tmp33 = tmp7;
                      if (tmp7) {
                        const obj19 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                        tmp33 = timestampProducer(LockIcon.LockIcon, obj19);
                      }
                      const items7 = [tmp33, ,];
                      let tmp35 = tmp11;
                      if (tmp11) {
                        const obj20 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                        tmp35 = timestampProducer(WarningIcon.WarningIcon, obj20);
                      }
                      items7[1] = tmp35;
                      let tmp37 = isSubscriptionGated;
                      if (isSubscriptionGated) {
                        const obj21 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
                        tmp37 = timestampProducer(GuildRoleSubscriptionGatedChannelIconDefault, obj21);
                      }
                      items7[2] = tmp37;
                      obj17.children = items7;
                      tmp31Result = React5(View, obj17);
                    }
                    cResult[23] = tmp14;
                    cResult[24] = isSubscriptionGated;
                    cResult[25] = needSubscriptionToAccess;
                    cResult[26] = tmp7;
                    cResult[27] = tmp11;
                    cResult[28] = tmp4.channelTraitIcon;
                    cResult[29] = tmp4.channelTraits;
                    cResult[30] = tmp31Result;
                    tmp29 = tmp31Result;
                  }
                }
              }
            }
          }
          const obj22 = { title: name, muted, unread, resolvedUnreadSetting, connected, layout };
          const tmp28 = timestampProducer(guild_channels_ChannelTitleDefault, obj22);
          cResult[16] = connected;
          cResult[17] = layout;
          cResult[18] = muted;
          cResult[19] = name;
          cResult[20] = resolvedUnreadSetting;
          cResult[21] = unread;
          cResult[22] = tmp28;
          tmp25 = tmp28;
        }
        const items8 = [tmp4.leftBox, tmp21];
        cResult[11] = tmp4.leftBox;
        cResult[12] = tmp21;
        cResult[13] = items8;
        tmp22 = items8;
      }
      let tmp8 = null != channel;
      if (tmp8) {
        let tmp9 = locked;
        if (!locked) {
          tmp9 = isRoleRequiredDefault(channel);
        }
        tmp8 = tmp9;
      }
      cResult[2] = channel;
      cResult[3] = locked;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : function ChannelContentComponent(arg0) {
      ({
        subtitle,
        resolvedUnreadSetting,
        locked,
        lastMessageTimestampString,
        channel,
        layout,
        mentionCount,
        mentionBadge,
        isSubscriptionGated,
      } = arg0);
      ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
      const tmp = closure_8();
      let tmp10Result = null != channel;
      const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
      if (tmp10Result) {
        if (!locked) {
          locked = isRoleRequiredDefault(channel);
        }
        tmp10Result = locked;
      }
      if (channel != null) {
        let isNSFWResult = channel.isNSFW();
      }
      const isValidElementResult = noop.isValidElement(subtitle);
      let obj17 = null != lastMessageTimestampString;
      let tmp10Result6 = obj17;
      if (obj17) {
        tmp10Result6 = null == mentionBadge;
      }
      const obj2 = { style: tmp.channelContent, children: null };
      const obj3 = { style: tmp.channelContainer, children: null };
      const items = [tmp.leftBox];
      let str = "center";
      if (isValidElementResult) {
        str = "space-between";
      }
      const obj4 = { style: items, children: null };
      items[1] = { justifyContent: str };
      let num = 0;
      if (tmp10Result6) {
        num = 30;
      }
      const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
      const obj6 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null, layout: null };
      if (resolvedUnreadSetting == null) {
        resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
      }
      obj6.resolvedUnreadSetting = resolvedUnreadSetting;
      obj6.connected = connected;
      obj6.layout = layout;
      const items1 = [timestampProducer(guild_channels_ChannelTitleDefault, obj6)];
      let tmp12Result = tmp10Result;
      if (!tmp10Result) {
        tmp12Result = isNSFWResult;
      }
      if (tmp12Result) {
        const items2 = [tmp.channelTraits];
        let num3 = 1;
        if (tmp10Result) {
          num3 = 1;
          if (isNSFWResult) {
            num3 = 2;
          }
        }
        const obj7 = { style: null, children: null };
        const obj8 = { maxWidth: 14 * num3 };
        items2[1] = obj8;
        obj7.style = items2;
        if (tmp10Result) {
          const obj9 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
          tmp10Result = timestampProducer(LockIcon.LockIcon, obj9);
        }
        const items3 = [tmp10Result, ,];
        if (isNSFWResult) {
          const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
          isNSFWResult = timestampProducer(WarningIcon.WarningIcon, obj10);
        }
        items3[1] = isNSFWResult;
        if (isSubscriptionGated) {
          const obj11 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
          isSubscriptionGated = timestampProducer(GuildRoleSubscriptionGatedChannelIconDefault, obj11);
        }
        items3[2] = isSubscriptionGated;
        obj7.children = items3;
        tmp12Result = React5(View, obj7);
      }
      items1[1] = tmp12Result;
      obj5.children = items1;
      const items4 = [React5(View, obj5)];
      let tmp10Result4 = null;
      if (isValidElementResult) {
        if (mentionCount == null) {
          mentionCount = 0;
        }
        let num5 = 0;
        if (mentionCount > 0) {
          num5 = 20;
        }
        const obj12 = { style: null, children: null };
        const obj13 = { paddingRight: num5 };
        const items5 = [obj13];
        const obj14 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
        items5[1] = obj14;
        obj12.style = items5;
        obj12.children = subtitle;
        tmp10Result4 = timestampProducer(View, obj12);
      }
      items4[1] = tmp10Result4;
      obj4.children = items4;
      const items6 = [React5(View, obj4)];
      const obj15 = { style: tmp10Result6 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
      let tmp10Result5 = obj17;
      if (obj17) {
        const obj16 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: { marginLeft: "auto" },
          maxFontSizeMultiplier: 1.75,
          children: lastMessageTimestampString,
        };
        tmp10Result5 = timestampProducer(Text_Text.Text, obj16);
      }
      const items7 = [tmp10Result5, ,];
      const items8 = [{ alignItems: "center", paddingLeft: 4 }];
      if (obj17) {
        obj17 = { marginTop: 5 };
      }
      items8[1] = obj17;
      items7[1] = timestampProducer(View, { style: items8, children: mentionBadge });
      if (tmp10Result6) {
        const obj18 = { style: { flex: 1 } };
        tmp10Result6 = timestampProducer(View, obj18);
      }
      items7[2] = tmp10Result6;
      obj15.children = items7;
      items6[1] = React5(View, obj15);
      obj3.children = items6;
      obj2.children = React5(View, obj3);
      return timestampProducer(View, obj2);
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx",
);

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(closure_9, {});
};
