// === Module 17357: renderChannelContent ===

// Module 17357 (renderChannelContent)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5088 */;
import isRoleRequiredDefault from "isRoleRequired" /* 6795 */;
import WarningIcon from "WarningIcon" /* 7571 */;
import LockIcon from "LockIcon" /* 8222 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16544 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 17354 */;
import ChannelTitleDefault from "ChannelTitle" /* 17358 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SUBTITLE_OPACITY_NORMAL = fn(11758).SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = fn(5967).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let PlatformUtils = fn(1382);
let num = -1;
if (PlatformUtils.isIOS()) {
  num = 2;
}
let obj3 = { channelContent: { flex: 1, marginTop: num }, channelContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftBox: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, rightBox: { flexDirection: "column", alignItems: "flex-end" }, rightContentAbsolute: { position: "absolute", right: 0, top: 0 }, channelTraits: { display: "flex", flexDirection: "row", alignItems: "center" }, channelTraitIcon: null };
let obj4 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4, marginTop: null };
PlatformUtils = fn(1382);
let num2 = 0;
if (PlatformUtils.isAndroid()) {
  num2 = 2;
}
obj4.marginTop = num2;
obj3.channelTraitIcon = obj4;
let closure_9 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelContent(arg0) {
  const cResult = c.c(70);
  ({ name, subtitle, unread, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, connected, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess } = arg0);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = getLayoutStylesDefault();
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === locked) {
      let tmp8 = cResult[3];
    }
    if (cResult[4] !== channel) {
      let isNSFWResult;
      if (channel != null) {
        isNSFWResult = channel.isNSFW();
      }
      cResult[4] = channel;
      cResult[5] = isNSFWResult;
      let tmp12 = isNSFWResult;
    } else {
      tmp12 = cResult[5];
    }
    let tmp15 = tmp8;
    if (!tmp8) {
      tmp15 = tmp12;
    }
    if (cResult[6] !== subtitle) {
      const isValidElementResult = noop.isValidElement(subtitle);
      cResult[6] = subtitle;
      cResult[7] = isValidElementResult;
      let tmp16 = isValidElementResult;
    } else {
      tmp16 = cResult[7];
    }
    let tmp21 = tmp20;
    if (null != lastMessageTimestampString) {
      tmp21 = null == mentionBadge;
    }
    let str = "center";
    if (tmp16) {
      str = "space-between";
    }
    if (cResult[8] !== str) {
      const obj2 = { justifyContent: str };
      cResult[8] = str;
      cResult[9] = obj2;
      let tmp22 = obj2;
    } else {
      tmp22 = cResult[9];
    }
    if (cResult[10] === tmp4.leftBox) {
      if (cResult[11] === tmp22) {
        let tmp23 = cResult[12];
      }
      let num12 = 0;
      if (tmp21) {
        num12 = 30;
      }
      if (cResult[13] !== num12) {
        const obj3 = { flexDirection: "row", paddingRight: num12, alignItems: "center" };
        cResult[13] = num12;
        cResult[14] = obj3;
        let tmp24 = obj3;
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
              if (cResult[19] === unread) {
                let tmp26 = cResult[20];
              }
              if (cResult[21] !== channelCategoryName) {
                let tmp31 = null;
                if (null != channelCategoryName) {
                  const obj4 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
                  tmp31 = React5(Text_Text.Text, obj4);
                }
                cResult[21] = channelCategoryName;
                cResult[22] = tmp31;
                let tmp30 = tmp31;
              } else {
                tmp30 = cResult[22];
              }
              if (cResult[23] === tmp15) {
                if (cResult[24] === isSubscriptionGated) {
                  if (cResult[25] === needSubscriptionToAccess) {
                    if (cResult[26] === tmp8) {
                      if (cResult[27] === tmp12) {
                        if (cResult[28] === tmp4.channelTraitIcon) {
                          if (cResult[29] === tmp4.channelTraits) {
                            let tmp33 = cResult[30];
                          }
                          if (cResult[31] === tmp26) {
                            if (cResult[32] === tmp30) {
                              if (cResult[33] === tmp33) {
                                if (cResult[34] === tmp24) {
                                  let tmp44 = cResult[35];
                                }
                                if (cResult[36] === mentionCount) {
                                  if (cResult[37] === tmp16) {
                                    if (cResult[38] === subtitle) {
                                      let tmp48 = cResult[39];
                                    }
                                    if (cResult[40] === tmp44) {
                                      if (cResult[41] === tmp48) {
                                        if (cResult[42] === tmp23) {
                                          let tmp52 = cResult[43];
                                        }
                                        const tmp56 = tmp21 ? tmp4.rightContentAbsolute : tmp4.rightBox;
                                        if (cResult[44] === lastMessageTimestampString) {
                                          if (cResult[45] === muted) {
                                            if (cResult[46] === tmp20) {
                                              let tmp57 = cResult[47];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                                              const obj5 = { alignItems: "center", paddingLeft: 4 };
                                              cResult[48] = obj5;
                                              let tmp60 = obj5;
                                            } else {
                                              tmp60 = cResult[48];
                                            }
                                            if (cResult[49] !== tmp20) {
                                              let obj6 = tmp20;
                                              if (tmp20) {
                                                obj6 = { marginTop: 5 };
                                              }
                                              cResult[49] = tmp20;
                                              cResult[50] = obj6;
                                              let tmp61 = obj6;
                                            } else {
                                              tmp61 = cResult[50];
                                            }
                                            if (cResult[51] !== tmp61) {
                                              const items = [tmp60, tmp61];
                                              cResult[51] = tmp61;
                                              cResult[52] = items;
                                              let tmp62 = items;
                                            } else {
                                              tmp62 = cResult[52];
                                            }
                                            if (cResult[53] === mentionBadge) {
                                              if (cResult[54] === tmp62) {
                                                let tmp63 = cResult[55];
                                              }
                                              if (cResult[56] !== tmp21) {
                                                let tmp68 = tmp21;
                                                if (tmp21) {
                                                  const obj7 = { style: { flex: 1 } };
                                                  tmp68 = React5(View, obj7);
                                                }
                                                cResult[56] = tmp21;
                                                cResult[57] = tmp68;
                                                let tmp67 = tmp68;
                                              } else {
                                                tmp67 = cResult[57];
                                              }
                                              if (cResult[58] === tmp56) {
                                                if (cResult[59] === tmp57) {
                                                  if (cResult[60] === tmp63) {
                                                    if (cResult[61] === tmp67) {
                                                      let tmp71 = cResult[62];
                                                    }
                                                    if (cResult[63] === tmp4.channelContainer) {
                                                      if (cResult[64] === tmp52) {
                                                        if (cResult[65] === tmp71) {
                                                          let tmp75 = cResult[66];
                                                        }
                                                        if (cResult[67] === tmp4.channelContent) {
                                                          if (cResult[68] === tmp75) {
                                                            let tmp79 = cResult[69];
                                                          }
                                                          return tmp79;
                                                        }
                                                        const obj8 = { style: tmp4.channelContent, children: tmp75 };
                                                        const tmp82 = React5(View, obj8);
                                                        cResult[67] = tmp4.channelContent;
                                                        cResult[68] = tmp75;
                                                        cResult[69] = tmp82;
                                                        tmp79 = tmp82;
                                                      }
                                                    }
                                                    const obj9 = { style: tmp4.channelContainer, children: null };
                                                    const items1 = [tmp52, tmp71];
                                                    obj9.children = items1;
                                                    const tmp78 = closure_1_8(View, obj9);
                                                    cResult[63] = tmp4.channelContainer;
                                                    cResult[64] = tmp52;
                                                    cResult[65] = tmp71;
                                                    cResult[66] = tmp78;
                                                    tmp75 = tmp78;
                                                  }
                                                }
                                              }
                                              const obj10 = { style: tmp56, children: null };
                                              const items2 = [tmp57, tmp63, tmp67];
                                              obj10.children = items2;
                                              const tmp74 = closure_1_8(View, obj10);
                                              cResult[58] = tmp56;
                                              cResult[59] = tmp57;
                                              cResult[60] = tmp63;
                                              cResult[61] = tmp67;
                                              cResult[62] = tmp74;
                                              tmp71 = tmp74;
                                            }
                                            const obj11 = { style: tmp62, children: mentionBadge };
                                            const tmp66 = React5(View, obj11);
                                            cResult[53] = mentionBadge;
                                            cResult[54] = tmp62;
                                            cResult[55] = tmp66;
                                            tmp63 = tmp66;
                                          }
                                        }
                                        let tmp59Result = tmp20;
                                        if (tmp20) {
                                          let num49 = 1;
                                          if (!muted) {
                                            num49 = SUBTITLE_OPACITY_NORMAL;
                                          }
                                          const obj12 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
                                          const obj13 = { marginLeft: "auto", opacity: num49 };
                                          obj12.style = obj13;
                                          obj12.children = lastMessageTimestampString;
                                          tmp59Result = React5(Text_Text.Text, obj12);
                                        }
                                        cResult[44] = lastMessageTimestampString;
                                        cResult[45] = muted;
                                        cResult[46] = tmp20;
                                        cResult[47] = tmp59Result;
                                        tmp57 = tmp59Result;
                                      }
                                    }
                                    const obj14 = { style: tmp23, children: null };
                                    const items3 = [tmp44, tmp48];
                                    obj14.children = items3;
                                    const tmp55 = closure_1_8(View, obj14);
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
                                  const obj15 = { style: null, children: null };
                                  const obj16 = { paddingRight: num40 };
                                  const items4 = [obj16, ];
                                  const obj17 = { marginTop: first.messagePreview.margin.marginTop };
                                  items4[1] = obj17;
                                  obj15.style = items4;
                                  obj15.children = subtitle;
                                  tmp50Result = React5(View, obj15);
                                }
                                cResult[36] = mentionCount;
                                cResult[37] = tmp16;
                                cResult[38] = subtitle;
                                cResult[39] = tmp50Result;
                                tmp48 = tmp50Result;
                              }
                            }
                          }
                          const obj18 = { style: tmp24, children: null };
                          const items5 = [tmp26, tmp30, tmp33];
                          obj18.children = items5;
                          const tmp47 = closure_1_8(View, obj18);
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
              if (tmp15) {
                const items6 = [tmp4.channelTraits, ];
                let num24 = 1;
                if (tmp8) {
                  num24 = 1;
                  if (tmp12) {
                    num24 = 2;
                  }
                }
                const obj19 = { style: null, children: null };
                const obj20 = { maxWidth: 14 * num24 };
                items6[1] = obj20;
                obj19.style = items6;
                let tmp37 = tmp8;
                if (tmp8) {
                  const obj21 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                  tmp37 = React5(LockIcon.LockIcon, obj21);
                }
                const items7 = [tmp37, , ];
                let tmp39 = tmp12;
                if (tmp12) {
                  const obj22 = { size: "xxs", color: "icon-muted", style: tmp4.channelTraitIcon };
                  tmp39 = React5(WarningIcon.WarningIcon, obj22);
                }
                items7[1] = tmp39;
                let tmp41 = isSubscriptionGated;
                if (isSubscriptionGated) {
                  const obj23 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
                  tmp41 = React5(GuildRoleSubscriptionGatedChannelIconDefault, obj23);
                }
                items7[2] = tmp41;
                obj19.children = items7;
                tmp35Result = closure_1_8(View, obj19);
              }
              cResult[23] = tmp15;
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
      const obj24 = { title: name, muted, unread, resolvedUnreadSetting, connected };
      const tmp29 = React5(ChannelTitleDefault, obj24);
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
    let tmp10 = locked;
    if (!locked) {
      tmp10 = isRoleRequiredDefault(channel);
    }
    tmp9 = tmp10;
  }
  cResult[1] = channel;
  cResult[2] = locked;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : (function ChannelContent(arg0) {
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = closure_9();
  let tmp9Result5 = null != channel;
  if (tmp9Result5) {
    if (!locked) {
      locked = isRoleRequiredDefault(channel);
    }
    tmp9Result5 = locked;
  }
  if (channel != null) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = noop.isValidElement(subtitle);
  let obj = null != lastMessageTimestampString;
  let tmp9Result8 = obj;
  if (obj) {
    tmp9Result8 = null == mentionBadge;
  }
  const obj2 = { style: tmp.channelContent, children: null };
  const obj3 = { style: tmp.channelContainer, children: null };
  const items = [tmp.leftBox, ];
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  const obj4 = { style: items, children: null };
  items[1] = { justifyContent: str };
  let num = 0;
  if (tmp9Result8) {
    num = 30;
  }
  const obj5 = { style: { flexDirection: "row", paddingRight: num, alignItems: "center" }, children: null };
  const obj6 = { title: name, muted, unread, resolvedUnreadSetting: null, connected: null };
  const tmp4 = getLayoutStylesDefault();
  if (resolvedUnreadSetting == null) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.connected = connected;
  const items1 = [React5(ChannelTitleDefault, obj6), , ];
  let tmp9Result = null;
  if (null != channelCategoryName) {
    const obj7 = { variant: "text-xs/bold", color: "text-muted", style: { marginRight: 4 }, children: channelCategoryName };
    tmp9Result = React5(Text_Text.Text, obj7);
  }
  items1[1] = tmp9Result;
  let tmp11Result = tmp9Result5;
  if (!tmp9Result5) {
    tmp11Result = isNSFWResult;
  }
  if (tmp11Result) {
    const items2 = [tmp.channelTraits, ];
    let num3 = 1;
    if (tmp9Result5) {
      num3 = 1;
      if (isNSFWResult) {
        num3 = 2;
      }
    }
    const obj8 = { style: null, children: null };
    const obj9 = { maxWidth: 14 * num3 };
    items2[1] = obj9;
    obj8.style = items2;
    if (tmp9Result5) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp9Result5 = React5(LockIcon.LockIcon, obj10);
    }
    const items3 = [tmp9Result5, , ];
    if (isNSFWResult) {
      const obj11 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = React5(WarningIcon.WarningIcon, obj11);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj12 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = React5(GuildRoleSubscriptionGatedChannelIconDefault, obj12);
    }
    items3[2] = isSubscriptionGated;
    obj8.children = items3;
    tmp11Result = closure_1_8(View, obj8);
  }
  items1[2] = tmp11Result;
  obj5.children = items1;
  const items4 = [closure_1_8(View, obj5), ];
  let tmp9Result6 = null;
  if (isValidElementResult) {
    if (mentionCount == null) {
      mentionCount = 0;
    }
    let num5 = 0;
    if (mentionCount > 0) {
      num5 = 20;
    }
    const obj13 = { style: null, children: null };
    const obj14 = { paddingRight: num5 };
    const items5 = [obj14, ];
    const obj15 = { marginTop: tmp4.messagePreview.margin.marginTop };
    items5[1] = obj15;
    obj13.style = items5;
    obj13.children = subtitle;
    tmp9Result6 = React5(View, obj13);
  }
  items4[1] = tmp9Result6;
  obj4.children = items4;
  const items6 = [closure_1_8(View, obj4), ];
  const obj16 = { style: tmp9Result8 ? tmp.rightContentAbsolute : tmp.rightBox, children: null };
  let tmp9Result7 = obj;
  if (obj) {
    let num6 = 1;
    if (!muted) {
      num6 = SUBTITLE_OPACITY_NORMAL;
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75, children: null };
    const obj18 = { marginLeft: "auto", opacity: num6 };
    obj17.style = obj18;
    obj17.children = lastMessageTimestampString;
    tmp9Result7 = React5(Text_Text.Text, obj17);
  }
  const items7 = [tmp9Result7, , ];
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (obj) {
    obj = { marginTop: 5 };
  }
  items8[1] = obj;
  items7[1] = React5(View, { style: items8, children: mentionBadge });
  if (tmp9Result8) {
    const obj19 = { style: { flex: 1 } };
    tmp9Result8 = React5(View, obj19);
  }
  items7[2] = tmp9Result8;
  obj16.children = items7;
  items6[1] = closure_1_8(View, obj16);
  obj3.children = items6;
  obj2.children = closure_1_8(View, obj3);
  return React5(View, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return React5(closure_10, {});
};