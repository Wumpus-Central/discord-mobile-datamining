// === Module 16856: renderChannelContent ===

// Module 16856 (renderChannelContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import WarningIcon from "WarningIcon" /* 4809 */;
import Text_Text from "Text/Text" /* 4892 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5853 */;
import LockIcon from "LockIcon" /* 5886 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16095 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16853 */;
import ChannelTitleDefault from "ChannelTitle" /* 16857 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let num2;
let obj2;
const View = react_native.View;
const SUBTITLE_OPACITY_NORMAL = RedesignChannelListConstants.SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: obj2 };
obj2 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: num2 };
PlatformUtils = PlatformUtils_mod;
num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
let closure_9 = createStyles(obj);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let channelCategoryName;
  let connected;
  let first;
  let isSubscriptionGated;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items7;
  let lastMessageTimestampString;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let obj12;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  const obj = react2;
  const cResult = obj.c(70);
  ({ name, subtitle, unread, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, connected, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = getLayoutStylesDefault();
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    let tmp8;
    let tmp12;
    let tmp16;
    let tmp22;
    if (cResult[2] === locked) {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== channel) {
      let isNSFWResult;
      if (channel != null) {
        isNSFWResult = channel.isNSFW();
      }
      cResult[4] = channel;
      cResult[5] = isNSFWResult;
      tmp12 = isNSFWResult;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== subtitle) {
      const isValidElementResult = react.isValidElement(subtitle);
      cResult[6] = subtitle;
      cResult[7] = isValidElementResult;
      tmp16 = isValidElementResult;
    } else {
      tmp16 = cResult[7];
    }
    let str = "center";
    if (tmp16) {
      str = "space-between";
    }
    if (cResult[8] !== str) {
      const obj2 = { justifyContent: str };
      cResult[8] = str;
      cResult[9] = obj2;
      tmp22 = obj2;
    } else {
      tmp22 = cResult[9];
    }
    if (cResult[10] === tmp4.leftBox) {
      let tmp23;
      let tmp24;
      if (cResult[11] === tmp22) {
        tmp23 = cResult[12];
      }
      let num12 = 0;
      if (null != lastMessageTimestampString && null == mentionBadge) {
        num12 = 30;
      }
      if (cResult[13] !== num12) {
        const obj3 = { flexDirection: "row", paddingRight: num12, alignItems: "center" };
        cResult[13] = num12;
        cResult[14] = obj3;
        tmp24 = obj3;
      } else {
        tmp24 = cResult[14];
      }
      if (resolvedUnreadSetting == null) {
        resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
      }
      if (cResult[15] === connected) {
        if (cResult[16] === muted) {
          if (cResult[17] === name) {
            if (cResult[18] === resolvedUnreadSetting) {
              let tmp26;
              let tmp30;
              if (cResult[19] === unread) {
                tmp26 = cResult[20];
              }
              if (cResult[21] !== channelCategoryName) {
                let tmp31 = null;
                if (null != channelCategoryName) {
                  const obj4 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
                  tmp31 = metroImportDefault(Text_Text.Text, obj4);
                }
                cResult[21] = channelCategoryName;
                cResult[22] = tmp31;
                tmp30 = tmp31;
              } else {
                tmp30 = cResult[22];
              }
              if (cResult[23] === (tmp8 || tmp12)) {
                if (cResult[24] === isSubscriptionGated) {
                  if (cResult[25] === needSubscriptionToAccess) {
                    if (cResult[26] === tmp8) {
                      if (cResult[27] === tmp12) {
                        if (cResult[28] === tmp4.channelTraitIcon) {
                          let tmp33;
                          if (cResult[29] === tmp4.channelTraits) {
                            tmp33 = cResult[30];
                          }
                          if (cResult[31] === tmp26) {
                            if (cResult[32] === tmp30) {
                              if (cResult[33] === tmp33) {
                                let tmp44;
                                if (cResult[34] === tmp24) {
                                  tmp44 = cResult[35];
                                }
                                if (cResult[36] === mentionCount) {
                                  if (cResult[37] === tmp16) {
                                    let tmp48;
                                    if (cResult[38] === subtitle) {
                                      tmp48 = cResult[39];
                                    }
                                    if (cResult[40] === tmp44) {
                                      if (cResult[41] === tmp48) {
                                        let tmp52;
                                        if (cResult[42] === tmp23) {
                                          tmp52 = cResult[43];
                                        }
                                        const tmp56 = null != lastMessageTimestampString && null == mentionBadge ? tmp4.rightContentAbsolute : tmp4.rightBox;
                                        if (cResult[44] === lastMessageTimestampString) {
                                          if (cResult[45] === muted) {
                                            let tmp57;
                                            let tmp60;
                                            let tmp61;
                                            let tmp63;
                                            if (cResult[46] === null != lastMessageTimestampString) {
                                              tmp57 = cResult[47];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                                              const obj5 = { alignItems: "center", paddingLeft: 4 };
                                              cResult[48] = obj5;
                                              tmp60 = obj5;
                                            } else {
                                              tmp60 = cResult[48];
                                            }
                                            if (cResult[49] !== (null != lastMessageTimestampString)) {
                                              const tmp62 = null != lastMessageTimestampString && { marginTop: 5 };
                                              cResult[49] = null != lastMessageTimestampString;
                                              cResult[50] = tmp62;
                                              tmp61 = tmp62;
                                            } else {
                                              tmp61 = cResult[50];
                                            }
                                            if (cResult[51] !== tmp61) {
                                              const items = [tmp60, tmp61];
                                              cResult[51] = tmp61;
                                              cResult[52] = items;
                                              tmp63 = items;
                                            } else {
                                              tmp63 = cResult[52];
                                            }
                                            if (cResult[53] === mentionBadge) {
                                              let tmp64;
                                              let tmp68;
                                              if (cResult[54] === tmp63) {
                                                tmp64 = cResult[55];
                                              }
                                              if (cResult[56] !== (null != lastMessageTimestampString && null == mentionBadge)) {
                                                let tmp69 = tmp21;
                                                if (tmp69) {
                                                  const obj6 = { style: { flex: 1 } };
                                                  tmp69 = metroImportDefault(View, obj6);
                                                }
                                                cResult[56] = null != lastMessageTimestampString && null == mentionBadge;
                                                cResult[57] = tmp69;
                                                tmp68 = tmp69;
                                              } else {
                                                tmp68 = cResult[57];
                                              }
                                              if (cResult[58] === tmp56) {
                                                if (cResult[59] === tmp57) {
                                                  if (cResult[60] === tmp64) {
                                                    let tmp72;
                                                    if (cResult[61] === tmp68) {
                                                      tmp72 = cResult[62];
                                                    }
                                                    if (cResult[63] === tmp4.channelContainer) {
                                                      if (cResult[64] === tmp52) {
                                                        let tmp76;
                                                        if (cResult[65] === tmp72) {
                                                          tmp76 = cResult[66];
                                                        }
                                                        if (cResult[67] === tmp4.channelContent) {
                                                          let tmp80;
                                                          if (cResult[68] === tmp76) {
                                                            tmp80 = cResult[69];
                                                          }
                                                          return tmp80;
                                                        }
                                                        const obj7 = { style: tmp4.channelContent, children: tmp76 };
                                                        const tmp83 = metroImportDefault(View, obj7);
                                                        cResult[67] = tmp4.channelContent;
                                                        cResult[68] = tmp76;
                                                        cResult[69] = tmp83;
                                                        tmp80 = tmp83;
                                                      }
                                                    }
                                                    const obj8 = { style: tmp4.channelContainer, children: items1 };
                                                    items1 = [tmp52, tmp72];
                                                    const tmp79 = metroImportAll(View, obj8);
                                                    cResult[63] = tmp4.channelContainer;
                                                    cResult[64] = tmp52;
                                                    cResult[65] = tmp72;
                                                    cResult[66] = tmp79;
                                                    tmp76 = tmp79;
                                                  }
                                                }
                                              }
                                              const obj9 = { style: tmp56, children: items2 };
                                              items2 = [tmp57, tmp64, tmp68];
                                              const tmp75 = metroImportAll(View, obj9);
                                              cResult[58] = tmp56;
                                              cResult[59] = tmp57;
                                              cResult[60] = tmp64;
                                              cResult[61] = tmp68;
                                              cResult[62] = tmp75;
                                              tmp72 = tmp75;
                                            }
                                            const obj10 = { style: tmp63, children: mentionBadge };
                                            const tmp67 = metroImportDefault(View, obj10);
                                            cResult[53] = mentionBadge;
                                            cResult[54] = tmp63;
                                            cResult[55] = tmp67;
                                            tmp64 = tmp67;
                                          }
                                        }
                                        let tmp59Result = tmp20;
                                        if (tmp59Result) {
                                          let num49 = 1;
                                          const Text = Text_Text.Text;
                                          if (!muted) {
                                            num49 = SUBTITLE_OPACITY_NORMAL;
                                          }
                                          const obj11 = { variant: "text-xs/medium", color: "text-muted", style: obj12, maxFontSizeMultiplier: 1.75, children: lastMessageTimestampString };
                                          obj12 = { marginLeft: "auto", opacity: num49 };
                                          tmp59Result = metroImportDefault(Text, obj11);
                                        }
                                        cResult[44] = lastMessageTimestampString;
                                        cResult[45] = muted;
                                        cResult[46] = null != lastMessageTimestampString;
                                        cResult[47] = tmp59Result;
                                        tmp57 = tmp59Result;
                                      }
                                    }
                                    const obj13 = { style: tmp23, children: items3 };
                                    items3 = [tmp44, tmp48];
                                    const tmp55 = metroImportAll(View, obj13);
                                    cResult[40] = tmp44;
                                    cResult[41] = tmp48;
                                    cResult[42] = tmp23;
                                    cResult[43] = tmp55;
                                    tmp52 = tmp55;
                                  }
                                }
                                let tmp50Result = null;
                                if (tmp16) {
                                  let num39 = mentionCount;
                                  if (mentionCount == null) {
                                    num39 = 0;
                                  }
                                  let num40 = 0;
                                  if (num39 > 0) {
                                    num40 = 20;
                                  }
                                  const obj14 = { style: items4, children: subtitle };
                                  items4 = [{ paddingRight: num40 }, ];
                                  const obj15 = { paddingRight: num40 };
                                  const obj16 = { marginTop: first.messagePreview.margin.marginTop };
                                  items4[1] = obj16;
                                  tmp50Result = metroImportDefault(View, obj14);
                                }
                                cResult[36] = mentionCount;
                                cResult[37] = tmp16;
                                cResult[38] = subtitle;
                                cResult[39] = tmp50Result;
                                tmp48 = tmp50Result;
                              }
                            }
                          }
                          const obj17 = { style: tmp24, children: items5 };
                          items5 = [tmp26, tmp30, tmp33];
                          const tmp47 = metroImportAll(View, obj17);
                          cResult[31] = tmp26;
                          cResult[32] = tmp30;
                          cResult[33] = tmp33;
                          cResult[34] = tmp24;
                          cResult[35] = tmp47;
                          tmp44 = tmp47;
                        }
                      }
                    }
                  }
                }
              }
              let tmp35Result = tmp15;
              if (tmp35Result) {
                const items6 = [tmp4.channelTraits, ];
                let num24 = 1;
                if (tmp8) {
                  num24 = 1;
                  if (tmp12) {
                    num24 = 2;
                  }
                }
                const obj18 = { style: items6, children: items7 };
                const obj19 = { maxWidth: 14 * num24 };
                items6[1] = obj19;
                let tmp37 = tmp8;
                if (tmp37) {
                  const obj20 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                  tmp37 = metroImportDefault(LockIcon.LockIcon, obj20);
                }
                items7 = [tmp37, , ];
                let tmp39 = tmp12;
                if (tmp39) {
                  const obj21 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                  tmp39 = metroImportDefault(WarningIcon.WarningIcon, obj21);
                }
                items7[1] = tmp39;
                let tmp41 = isSubscriptionGated;
                if (tmp41) {
                  const obj22 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
                  tmp41 = metroImportDefault(GuildRoleSubscriptionGatedChannelIconDefault, obj22);
                }
                items7[2] = tmp41;
                tmp35Result = metroImportAll(View, obj18);
              }
              cResult[23] = tmp8 || tmp12;
              cResult[24] = isSubscriptionGated;
              cResult[25] = needSubscriptionToAccess;
              cResult[26] = tmp8;
              cResult[27] = tmp12;
              cResult[28] = tmp4.channelTraitIcon;
              cResult[29] = tmp4.channelTraits;
              cResult[30] = tmp35Result;
              tmp33 = tmp35Result;
            }
          }
        }
      }
      const obj23 = { title: name, muted, unread, resolvedUnreadSetting, connected };
      const tmp29 = metroImportDefault(ChannelTitleDefault, obj23);
      cResult[15] = connected;
      cResult[16] = muted;
      cResult[17] = name;
      cResult[18] = resolvedUnreadSetting;
      cResult[19] = unread;
      cResult[20] = tmp29;
      tmp26 = tmp29;
    }
    const items8 = [tmp4.leftBox, tmp22];
    cResult[10] = tmp4.leftBox;
    cResult[11] = tmp22;
    cResult[12] = items8;
    tmp23 = items8;
  }
  let tmp9 = null != channel;
  if (tmp9) {
    tmp9 = locked || isRoleRequiredDefault(channel);
    const tmp10 = locked || isRoleRequiredDefault(channel);
  }
  cResult[1] = channel;
  cResult[2] = locked;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let channel;
  let channelCategoryName;
  let connected;
  let isSubscriptionGated;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let lastMessageTimestampString;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let obj18;
  let obj3;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_9();
  let tmp9Result5 = null != channel;
  const tmp4 = getLayoutStylesDefault();
  if (tmp9Result5) {
    if (!locked) {
      locked = isRoleRequiredDefault(channel);
    }
    tmp9Result5 = locked;
  }
  let isNSFWResult;
  if (channel != null) {
    isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = react.isValidElement(subtitle);
  let obj = null != lastMessageTimestampString;
  let tmp9Result8 = obj && null == mentionBadge;
  const obj2 = { style: tmp.channelContent, children: metroImportAll(View, obj3) };
  const items = [tmp.leftBox, ];
  let str = "center";
  obj3 = { style: tmp.channelContainer, children: items6 };
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj4 = { style: items, children: items4 };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp9Result8) {
    num = 30;
  }
  const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: items1 };
  const obj6 = { title: name, muted, unread, resolvedUnreadSetting, connected };
  const tmp2Result = ChannelTitleDefault;
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  items1 = [metroImportDefault(tmp2Result, obj6), , ];
  let tmp9Result = null;
  if (null != channelCategoryName) {
    const obj7 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
    tmp9Result = metroImportDefault(Text_Text.Text, obj7);
  }
  items1[1] = tmp9Result;
  let tmp11Result = tmp9Result5 || isNSFWResult;
  if (tmp11Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp9Result5) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj8 = { style: items2, children: items3 };
    const obj9 = { maxWidth: 14 * num3 };
    items2[1] = obj9;
    if (tmp9Result5) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp9Result5 = metroImportDefault(LockIcon.LockIcon, obj10);
    }
    items3 = [tmp9Result5, , ];
    if (isNSFWResult) {
      const obj11 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = metroImportDefault(WarningIcon.WarningIcon, obj11);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj12 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = metroImportDefault(GuildRoleSubscriptionGatedChannelIconDefault, obj12);
    }
    items3[2] = isSubscriptionGated;
    tmp11Result = metroImportAll(View, obj8);
  }
  items1[2] = tmp11Result;
  items4 = [metroImportAll(View, obj5), ];
  let tmp9Result6 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj13 = { style: items5, children: subtitle };
    items5 = [{ paddingRight: num5 }, ];
    const obj14 = { paddingRight: num5 };
    const obj15 = { marginTop: tmp4.messagePreview.margin.marginTop };
    items5[1] = obj15;
    tmp9Result6 = metroImportDefault(View, obj13);
  }
  items4[1] = tmp9Result6;
  items6 = [metroImportAll(View, obj4), ];
  let tmp9Result7 = obj;
  const obj16 = { style: tmp9Result8 ? tmp.rightContentAbsolute : tmp.rightBox, children: items7 };
  if (tmp9Result7) {
    let num6 = 1;
    const Text = Text_Text.Text;
    if (!muted) {
      num6 = SUBTITLE_OPACITY_NORMAL;
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", style: obj18, maxFontSizeMultiplier: 1.75, children: lastMessageTimestampString };
    obj18 = { marginLeft: "auto", opacity: num6 };
    tmp9Result7 = metroImportDefault(Text, obj17);
  }
  items7 = [tmp9Result7, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj) {
    obj = { marginTop: 5 };
  }
  items8[1] = obj;
  items7[1] = metroImportDefault(View, { style: items8, children: mentionBadge });
  if (tmp9Result8) {
    const obj19 = { style: { flex: 1 } };
    tmp9Result8 = metroImportDefault(View, obj19);
  }
  items7[2] = tmp9Result8;
  items6[1] = metroImportAll(View, obj16);
  return metroImportDefault(View, obj2);
});
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroImportDefault(closure_10, obj);
};