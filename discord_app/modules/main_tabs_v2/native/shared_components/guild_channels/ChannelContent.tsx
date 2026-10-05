// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import WarningIcon from "../../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ReadStateConstants from "../../../../read_states/ReadStateConstants.tsx";
import isRoleRequiredDefault from "../../../../channel/isRoleRequired.tsx";
import LockIcon from "../../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import RedesignChannelListConstants from "../../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import GuildRoleSubscriptionGatedChannelIconDefault from "../../../../guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import guild_channels_ChannelTitleDefault from "ChannelTitle.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let num2;
let obj2;
const View = react_native.View;
const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj = {
  channelContent: { flex: 1, marginTop: num },
  channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 },
  rightBox: { flexDirection: "column", alignItems: "flex-end" },
  rightContentAbsolute: { position: "absolute", right: 0, top: 0 },
  channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" },
  channelTraitIcon: obj2,
};
obj2 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: num2 };
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
let closure_8 = createStyles(obj);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let connected;
      let isSubscriptionGated;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items7;
      let lastMessageTimestampString;
      let layout;
      let locked;
      let mentionBadge;
      let mentionCount;
      let muted;
      let name;
      let needSubscriptionToAccess;
      let resolvedUnreadSetting;
      let subtitle;
      let tmp5;
      let unread;
      const obj = react2;
      const cResult = obj.c(69);
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
        const tmpResult = ChannelListLayout;
        const layoutStyles = tmpResult.getLayoutStyles(layout);
        cResult[0] = layout;
        cResult[1] = layoutStyles;
        tmp5 = layoutStyles;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === channel) {
        let tmp7;
        let tmp11;
        let tmp15;
        let tmp21;
        if (cResult[3] === locked) {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== channel) {
          let isNSFWResult;
          if (channel != null) {
            isNSFWResult = channel.isNSFW();
          }
          cResult[5] = channel;
          cResult[6] = isNSFWResult;
          tmp11 = isNSFWResult;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] !== subtitle) {
          const isValidElementResult = react.isValidElement(subtitle);
          cResult[7] = subtitle;
          cResult[8] = isValidElementResult;
          tmp15 = isValidElementResult;
        } else {
          tmp15 = cResult[8];
        }
        let str = "center";
        if (tmp15) {
          str = "space-between";
        }
        if (cResult[9] !== str) {
          const obj2 = { justifyContent: str };
          cResult[9] = str;
          cResult[10] = obj2;
          tmp21 = obj2;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] === tmp4.leftBox) {
          let tmp22;
          let tmp23;
          if (cResult[12] === tmp21) {
            tmp22 = cResult[13];
          }
          let num13 = 0;
          if (null != lastMessageTimestampString && null == mentionBadge) {
            num13 = 30;
          }
          if (cResult[14] !== num13) {
            const obj3 = { flexDirection: "row", paddingRight: num13, alignItems: "center" };
            cResult[14] = num13;
            cResult[15] = obj3;
            tmp23 = obj3;
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
                    let tmp25;
                    if (cResult[21] === unread) {
                      tmp25 = cResult[22];
                    }
                    if (cResult[23] === (tmp7 || tmp11)) {
                      if (cResult[24] === isSubscriptionGated) {
                        if (cResult[25] === needSubscriptionToAccess) {
                          if (cResult[26] === tmp7) {
                            if (cResult[27] === tmp11) {
                              if (cResult[28] === tmp4.channelTraitIcon) {
                                let tmp29;
                                if (cResult[29] === tmp4.channelTraits) {
                                  tmp29 = cResult[30];
                                }
                                if (cResult[31] === tmp25) {
                                  if (cResult[32] === tmp29) {
                                    let tmp40;
                                    if (cResult[33] === tmp23) {
                                      tmp40 = cResult[34];
                                    }
                                    if (cResult[35] === tmp5) {
                                      if (cResult[36] === mentionCount) {
                                        if (cResult[37] === tmp15) {
                                          let tmp44;
                                          if (cResult[38] === subtitle) {
                                            tmp44 = cResult[39];
                                          }
                                          if (cResult[40] === tmp40) {
                                            if (cResult[41] === tmp44) {
                                              let tmp48;
                                              if (cResult[42] === tmp22) {
                                                tmp48 = cResult[43];
                                              }
                                              const tmp52 =
                                                null != lastMessageTimestampString && null == mentionBadge
                                                  ? tmp4.rightContentAbsolute
                                                  : tmp4.rightBox;
                                              if (cResult[44] === lastMessageTimestampString) {
                                                let tmp53;
                                                let tmp57;
                                                let tmp58;
                                                let tmp60;
                                                if ((cResult[45] === null) != lastMessageTimestampString) {
                                                  tmp53 = cResult[46];
                                                }
                                                const _Symbol = Symbol;
                                                if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const obj4 = { alignItems: "center", paddingLeft: 4 };
                                                  cResult[47] = obj4;
                                                  tmp57 = obj4;
                                                } else {
                                                  tmp57 = cResult[47];
                                                }
                                                if (cResult[48] !== (null != lastMessageTimestampString)) {
                                                  const tmp59 = null != lastMessageTimestampString && { marginTop: 5 };
                                                  cResult[48] = null != lastMessageTimestampString;
                                                  cResult[49] = tmp59;
                                                  tmp58 = tmp59;
                                                } else {
                                                  tmp58 = cResult[49];
                                                }
                                                if (cResult[50] !== tmp58) {
                                                  const items = [tmp57, tmp58];
                                                  cResult[50] = tmp58;
                                                  cResult[51] = items;
                                                  tmp60 = items;
                                                } else {
                                                  tmp60 = cResult[51];
                                                }
                                                if (cResult[52] === mentionBadge) {
                                                  let tmp61;
                                                  let tmp65;
                                                  if (cResult[53] === tmp60) {
                                                    tmp61 = cResult[54];
                                                  }
                                                  if (
                                                    cResult[55] !==
                                                    (null != lastMessageTimestampString && null == mentionBadge)
                                                  ) {
                                                    let tmp66 = tmp20;
                                                    if (tmp66) {
                                                      const obj5 = { style: { flex: 1 } };
                                                      tmp66 = metroRequire(View, obj5);
                                                    }
                                                    cResult[55] =
                                                      null != lastMessageTimestampString && null == mentionBadge;
                                                    cResult[56] = tmp66;
                                                    tmp65 = tmp66;
                                                  } else {
                                                    tmp65 = cResult[56];
                                                  }
                                                  if (cResult[57] === tmp52) {
                                                    if (cResult[58] === tmp53) {
                                                      if (cResult[59] === tmp61) {
                                                        let tmp69;
                                                        if (cResult[60] === tmp65) {
                                                          tmp69 = cResult[61];
                                                        }
                                                        if (cResult[62] === tmp4.channelContainer) {
                                                          if (cResult[63] === tmp48) {
                                                            let tmp73;
                                                            if (cResult[64] === tmp69) {
                                                              tmp73 = cResult[65];
                                                            }
                                                            if (cResult[66] === tmp4.channelContent) {
                                                              let tmp77;
                                                              if (cResult[67] === tmp73) {
                                                                tmp77 = cResult[68];
                                                              }
                                                              return tmp77;
                                                            }
                                                            const obj6 = {
                                                              style: tmp4.channelContent,
                                                              children: tmp73,
                                                            };
                                                            const tmp80 = metroRequire(View, obj6);
                                                            cResult[66] = tmp4.channelContent;
                                                            cResult[67] = tmp73;
                                                            cResult[68] = tmp80;
                                                            tmp77 = tmp80;
                                                          }
                                                        }
                                                        const obj7 = { style: tmp4.channelContainer, children: items1 };
                                                        items1 = [tmp48, tmp69];
                                                        const tmp76 = metroImportDefault(View, obj7);
                                                        cResult[62] = tmp4.channelContainer;
                                                        cResult[63] = tmp48;
                                                        cResult[64] = tmp69;
                                                        cResult[65] = tmp76;
                                                        tmp73 = tmp76;
                                                      }
                                                    }
                                                  }
                                                  const obj8 = { style: tmp52, children: items2 };
                                                  items2 = [tmp53, tmp61, tmp65];
                                                  const tmp72 = metroImportDefault(View, obj8);
                                                  cResult[57] = tmp52;
                                                  cResult[58] = tmp53;
                                                  cResult[59] = tmp61;
                                                  cResult[60] = tmp65;
                                                  cResult[61] = tmp72;
                                                  tmp69 = tmp72;
                                                }
                                                const obj9 = { style: tmp60, children: mentionBadge };
                                                const tmp64 = metroRequire(View, obj9);
                                                cResult[52] = mentionBadge;
                                                cResult[53] = tmp60;
                                                cResult[54] = tmp64;
                                                tmp61 = tmp64;
                                              }
                                              let tmp54 = tmp19;
                                              if (tmp54) {
                                                const obj10 = {
                                                  variant: "text-xs/medium",
                                                  color: "text-muted",
                                                  style: { marginLeft: "auto" },
                                                  maxFontSizeMultiplier: 1.75,
                                                  children: lastMessageTimestampString,
                                                };
                                                tmp54 = metroRequire(Text_Text.Text, obj10);
                                              }
                                              cResult[44] = lastMessageTimestampString;
                                              cResult[45] = null != lastMessageTimestampString;
                                              cResult[46] = tmp54;
                                              tmp53 = tmp54;
                                            }
                                          }
                                          const obj11 = { style: tmp22, children: items3 };
                                          items3 = [tmp40, tmp44];
                                          const tmp51 = metroImportDefault(View, obj11);
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
                                      const obj12 = { style: items4, children: subtitle };
                                      items4 = [{ paddingRight: num39 }];
                                      const obj13 = { paddingRight: num39 };
                                      const obj14 = { marginTop: tmp5.messagePreview.margin.marginTop };
                                      items4[1] = obj14;
                                      tmp46Result = metroRequire(View, obj12);
                                    }
                                    cResult[35] = tmp5;
                                    cResult[36] = mentionCount;
                                    cResult[37] = tmp15;
                                    cResult[38] = subtitle;
                                    cResult[39] = tmp46Result;
                                    tmp44 = tmp46Result;
                                  }
                                }
                                const obj15 = { style: tmp23, children: items5 };
                                items5 = [tmp25, tmp29];
                                const tmp43 = metroImportDefault(View, obj15);
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
                    if (tmp31Result) {
                      const items6 = [tmp4.channelTraits];
                      let num24 = 1;
                      if (tmp7) {
                        num24 = 1;
                        if (tmp11) {
                          num24 = 2;
                        }
                      }
                      const obj16 = { style: items6, children: items7 };
                      const obj17 = { maxWidth: 14 * num24 };
                      items6[1] = obj17;
                      let tmp33 = tmp7;
                      if (tmp33) {
                        const obj18 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                        tmp33 = metroRequire(LockIcon.LockIcon, obj18);
                      }
                      items7 = [tmp33, ,];
                      let tmp35 = tmp11;
                      if (tmp35) {
                        const obj19 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                        tmp35 = metroRequire(WarningIcon.WarningIcon, obj19);
                      }
                      items7[1] = tmp35;
                      let tmp37 = isSubscriptionGated;
                      if (tmp37) {
                        const obj20 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
                        tmp37 = metroRequire(GuildRoleSubscriptionGatedChannelIconDefault, obj20);
                      }
                      items7[2] = tmp37;
                      tmp31Result = metroImportDefault(View, obj16);
                    }
                    cResult[23] = tmp7 || tmp11;
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
          const obj21 = { title: name, muted, unread, resolvedUnreadSetting, connected, layout };
          const tmp28 = metroRequire(guild_channels_ChannelTitleDefault, obj21);
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
        tmp8 = locked || isRoleRequiredDefault(channel);
        const tmp9 = locked || isRoleRequiredDefault(channel);
      }
      cResult[2] = channel;
      cResult[3] = locked;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let channel;
      let connected;
      let isSubscriptionGated;
      let items1;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let lastMessageTimestampString;
      let layout;
      let locked;
      let mentionBadge;
      let mentionCount;
      let muted;
      let name;
      let needSubscriptionToAccess;
      let obj3;
      let resolvedUnreadSetting;
      let subtitle;
      let unread;
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
      const obj = ChannelListLayout;
      const layoutStyles = obj.getLayoutStyles(layout);
      if (tmp10Result) {
        if (!locked) {
          locked = isRoleRequiredDefault(channel);
        }
        tmp10Result = locked;
      }
      let isNSFWResult;
      if (channel != null) {
        isNSFWResult = channel.isNSFW();
      }
      const isValidElementResult = react.isValidElement(subtitle);
      let obj17 = null != lastMessageTimestampString;
      let tmp10Result6 = obj17 && null == mentionBadge;
      const obj2 = { style: tmp.channelContent, children: metroImportDefault(View, obj3) };
      const items = [tmp.leftBox];
      let str = "center";
      obj3 = { style: tmp.channelContainer, children: items6 };
      if (isValidElementResult) {
        str = "space-between";
      }
      const obj4 = { style: items, children: items4 };
      items[1] = { justifyContent: str };
      let num = 0;
      if (tmp10Result6) {
        num = 30;
      }
      const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: items1 };
      const obj6 = { title: name, muted, unread, resolvedUnreadSetting, connected, layout };
      const tmp14 = guild_channels_ChannelTitleDefault;
      if (resolvedUnreadSetting == null) {
        resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
      }
      items1 = [metroRequire(tmp14, obj6)];
      let tmp12Result = tmp10Result || isNSFWResult;
      if (tmp12Result) {
        const items2 = [tmp.channelTraits];
        let num3 = 1;
        if (tmp10Result) {
          num3 = 1;
          if (isNSFWResult) {
            num3 = 2;
          }
        }
        const obj7 = { style: items2, children: items3 };
        const obj8 = { maxWidth: 14 * num3 };
        items2[1] = obj8;
        if (tmp10Result) {
          const obj9 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
          tmp10Result = metroRequire(LockIcon.LockIcon, obj9);
        }
        items3 = [tmp10Result, ,];
        if (isNSFWResult) {
          const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
          isNSFWResult = metroRequire(WarningIcon.WarningIcon, obj10);
        }
        items3[1] = isNSFWResult;
        if (isSubscriptionGated) {
          const obj11 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
          isSubscriptionGated = metroRequire(GuildRoleSubscriptionGatedChannelIconDefault, obj11);
        }
        items3[2] = isSubscriptionGated;
        tmp12Result = metroImportDefault(View, obj7);
      }
      items1[1] = tmp12Result;
      items4 = [metroImportDefault(View, obj5)];
      let tmp10Result4 = null;
      if (isValidElementResult) {
        if (mentionCount == null) {
          mentionCount = 0;
        }
        let num5 = 0;
        if (mentionCount > 0) {
          num5 = 20;
        }
        const obj12 = { style: items5, children: subtitle };
        items5 = [{ paddingRight: num5 }];
        const obj13 = { paddingRight: num5 };
        const obj14 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
        items5[1] = obj14;
        tmp10Result4 = metroRequire(View, obj12);
      }
      items4[1] = tmp10Result4;
      items6 = [metroImportDefault(View, obj4)];
      let tmp10Result5 = obj17;
      const obj15 = { style: tmp10Result6 ? tmp.rightContentAbsolute : tmp.rightBox, children: items7 };
      if (tmp10Result5) {
        const obj16 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: { marginLeft: "auto" },
          maxFontSizeMultiplier: 1.75,
          children: lastMessageTimestampString,
        };
        tmp10Result5 = metroRequire(Text_Text.Text, obj16);
      }
      items7 = [tmp10Result5, ,];
      const items8 = [{ alignItems: "center", paddingLeft: 4 }];
      if (obj17) {
        obj17 = { marginTop: 5 };
      }
      items8[1] = obj17;
      items7[1] = metroRequire(View, { style: items8, children: mentionBadge });
      if (tmp10Result6) {
        const obj18 = { style: { flex: 1 } };
        tmp10Result6 = metroRequire(View, obj18);
      }
      items7[2] = tmp10Result6;
      items6[1] = metroImportDefault(View, obj15);
      return metroRequire(View, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx",
);

export const renderChannelContent = function renderChannelContent(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroRequire(closure_9, obj);
};
