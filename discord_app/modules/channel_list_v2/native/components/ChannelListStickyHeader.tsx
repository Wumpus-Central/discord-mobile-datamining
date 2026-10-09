// === Module 16479: ChannelListStickyHeader ===

// Module 16479 (ChannelListStickyHeader)
import nativeDefault from "native" /* 587 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 8850 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 14057 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 16448 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 16478 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 16480 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const JoinGuildSources = fn(1085).JoinGuildSources;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: null, divider: null, guildBadge: null, flex: null, header: null, headerRow: null, headerRowTitle: null, headerRowInset: null, headerIcon: null, subheader: null, ellipse: null, joinButton: null };
  const obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_16, paddingBottom: null, zIndex: 1 };
  let num = 0;
  if (!flag) {
    num = nativeDefault.space.PX_12;
  }
  obj2.paddingBottom = num;
  obj.container = obj2;
  obj.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 };
  obj.guildBadge = { margin: 0 };
  obj.flex = { flexShrink: 1 };
  const obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 };
  obj.header = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  const obj4 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.headerRow = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.headerRowTitle = { flexGrow: 1, flexShrink: 1 };
  const obj5 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
  obj.headerRowInset = { paddingEnd: nativeDefault.space.PX_16 };
  const obj6 = { paddingEnd: nativeDefault.space.PX_16 };
  obj.headerIcon = { marginRight: nativeDefault.space.PX_4 };
  const obj7 = { marginRight: nativeDefault.space.PX_4 };
  obj.subheader = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, borderRadius: nativeDefault.radii.round };
  obj.ellipse = size;
  const obj8 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  obj.joinButton = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListStickyHeader(guild) {
  const cResult = guild(576).c(76);
  guild = guild.guild;
  ({ showExtraButtons, canOpenGuildActionSheet, showCoachmarks } = guild);
  let tmp5 = undefined === canOpenGuildActionSheet || canOpenGuildActionSheet;
  const tmp7 = closure_9(undefined === showExtraButtons || showExtraButtons);
  const tmp9 = useIsGameCommunityServerPreviewDefault(guild.id);
  const ref = noop.useRef(null);
  if (cResult[0] !== guild.id) {
    const isFavoritesGuildIdResult = tmp(2089).isFavoritesGuildId(guild.id);
    cResult[0] = guild.id;
    cResult[1] = isFavoritesGuildIdResult;
    let tmp11 = isFavoritesGuildIdResult;
    const tmpResult = tmp(2089);
  } else {
    tmp11 = cResult[1];
  }
  importDefault = tmp11;
  if (!tmp5) {
    tmp5 = tmp11;
  }
  const t = tmp(1126).t;
  const tmp13 = tmp11 ? t.hW8QDk : t["Gpyp/e"];
  if (cResult[2] === guild) {
    const tmp15 = tmp8(16478)(guild);
    const iOSPressEffects = tmp(6193).useIOSPressEffects(4);
    ({ pressableStyles, onPressIn, onPressOut } = iOSPressEffects);
    if (cResult[5] !== guild) {
      const favoritesAwareGuildName = tmp(2089).getFavoritesAwareGuildName(guild);
      cResult[5] = guild;
      cResult[6] = favoritesAwareGuildName;
      let tmp17 = favoritesAwareGuildName;
      const tmpResult6 = tmp(2089);
    } else {
      tmp17 = cResult[6];
    }
    const tmpResult5 = tmp(6193);
    const token = tmp(4779).useToken(tmp8(587).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
    const tmpResult7 = tmp(4779);
    const token1 = tmp(4779).useToken(tmp8(587).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
    if (cResult[7] === pressableStyles) {
      if (cResult[8] === tmp7.headerRowTitle) {
        let tmp21 = cResult[9];
      }
      let str = "header";
      if (tmp5) {
        str = "button";
      }
      if (cResult[10] === tmp13) {
        if (cResult[11] === tmp5) {
          let tmp25 = cResult[12];
        }
        if (cResult[13] === tmp11) {
          if (cResult[14] === tmp7.headerIcon) {
            let tmp27 = cResult[15];
          }
          if (cResult[16] === tmp17) {
            if (cResult[17] === token) {
              let tmp30 = cResult[18];
            }
            if (cResult[19] === tmp7.flex) {
              if (cResult[20] === tmp30) {
                let tmp33 = cResult[21];
              }
              if (cResult[22] === guild) {
                if (cResult[23] === tmp7.guildBadge) {
                  let tmp37 = cResult[24];
                }
                if (cResult[25] === tmp5) {
                  if (cResult[26] === tmp7.chevron) {
                    let tmp41 = cResult[27];
                  }
                  if (cResult[28] === tmp7.header) {
                    if (cResult[29] === tmp27) {
                      if (cResult[30] === tmp33) {
                        if (cResult[31] === tmp37) {
                          if (cResult[32] === tmp41) {
                            let tmp44 = cResult[33];
                          }
                          if (cResult[34] === tmp15) {
                            if (cResult[35] === tmp7.ellipse) {
                              if (cResult[36] === tmp7.subheader) {
                                if (cResult[37] === token1) {
                                  let tmp48 = cResult[38];
                                }
                                if (cResult[39] === onPressOut) {
                                  if (cResult[40] === str) {
                                    if (cResult[41] === tmp25) {
                                      if (cResult[42] === tmp44) {
                                        if (cResult[43] === tmp48) {
                                          if (cResult[44] === tmp21) {
                                            if (cResult[45] === tmp22) {
                                              if (cResult[46] === onPressIn) {
                                                let tmp53 = cResult[47];
                                              }
                                              let headerRowInset = null;
                                              if (tmp11) {
                                                headerRowInset = tmp7.headerRowInset;
                                              }
                                              if (cResult[48] === tmp7.headerRow) {
                                                if (cResult[49] === headerRowInset) {
                                                  let tmp58 = cResult[50];
                                                }
                                                if (cResult[51] !== tmp11) {
                                                  let tmp60 = null;
                                                  if (tmp11) {
                                                    tmp60 = closure_6(tmp(16493).FavoritesGuildHeaderActionButton, {});
                                                  }
                                                  cResult[51] = tmp11;
                                                  cResult[52] = tmp60;
                                                  let tmp59 = tmp60;
                                                } else {
                                                  tmp59 = cResult[52];
                                                }
                                                if (cResult[53] === tmp53) {
                                                  if (cResult[54] === tmp58) {
                                                    if (cResult[55] === tmp59) {
                                                      let tmp62 = cResult[56];
                                                    }
                                                    if (cResult[57] === guild) {
                                                      if (cResult[58] === tmp4) {
                                                        let tmp66 = cResult[59];
                                                      }
                                                      if (cResult[60] === guild.id) {
                                                        if (cResult[61] === tmp9) {
                                                          if (cResult[62] === tmp7.joinButton) {
                                                            let tmp69 = cResult[63];
                                                          }
                                                          if (cResult[64] !== tmp7.divider) {
                                                            const obj2 = { style: tmp7.divider };
                                                            const tmp77 = closure_6(closure_4, obj2);
                                                            cResult[64] = tmp7.divider;
                                                            cResult[65] = tmp77;
                                                            let tmp74 = tmp77;
                                                          } else {
                                                            tmp74 = cResult[65];
                                                          }
                                                          if (cResult[66] === guild) {
                                                            if (cResult[67] === tmp6) {
                                                              let tmp78 = cResult[68];
                                                            }
                                                            if (cResult[69] === tmp7.container) {
                                                              if (cResult[70] === tmp62) {
                                                                if (cResult[71] === tmp66) {
                                                                  if (cResult[72] === tmp69) {
                                                                    if (cResult[73] === tmp74) {
                                                                      if (cResult[74] === tmp78) {
                                                                        let tmp81 = cResult[75];
                                                                      }
                                                                      return tmp81;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const obj3 = { style: tmp7.container, children: null };
                                                            const items = [tmp62, tmp66, tmp69, tmp74, tmp78];
                                                            obj3.children = items;
                                                            const tmp84 = closure_7(closure_4, obj3);
                                                            cResult[69] = tmp7.container;
                                                            cResult[70] = tmp62;
                                                            cResult[71] = tmp66;
                                                            cResult[72] = tmp69;
                                                            cResult[73] = tmp74;
                                                            cResult[74] = tmp78;
                                                            cResult[75] = tmp84;
                                                            tmp81 = tmp84;
                                                          }
                                                          let tmp79 = null;
                                                          if (tmp6) {
                                                            const obj4 = { targetRef: ref, guild };
                                                            tmp79 = closure_6(tmp8(16499), obj4);
                                                          }
                                                          cResult[66] = guild;
                                                          cResult[67] = tmp6;
                                                          cResult[68] = tmp79;
                                                          tmp78 = tmp79;
                                                        }
                                                      }
                                                      let tmp70 = tmp9;
                                                      if (tmp9) {
                                                        const obj5 = { style: tmp7.joinButton, children: null };
                                                        const obj6 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
                                                        obj5.children = closure_6(tmp8(16498), obj6);
                                                        tmp70 = closure_6(closure_4, obj5);
                                                      }
                                                      cResult[60] = guild.id;
                                                      cResult[61] = tmp9;
                                                      cResult[62] = tmp7.joinButton;
                                                      cResult[63] = tmp70;
                                                      tmp69 = tmp70;
                                                    }
                                                    let tmp67 = null;
                                                    if (tmp4) {
                                                      const obj7 = { guild, useButtonComponent: true, useEventsButton: true };
                                                      tmp67 = closure_6(tmp8(11949), obj7);
                                                    }
                                                    cResult[57] = guild;
                                                    cResult[58] = tmp4;
                                                    cResult[59] = tmp67;
                                                    tmp66 = tmp67;
                                                  }
                                                }
                                                const obj8 = { style: tmp58, children: null };
                                                const items1 = [tmp53, tmp59];
                                                obj8.children = items1;
                                                const tmp65 = closure_7(closure_4, obj8);
                                                cResult[53] = tmp53;
                                                cResult[54] = tmp58;
                                                cResult[55] = tmp59;
                                                cResult[56] = tmp65;
                                                tmp62 = tmp65;
                                              }
                                              const items2 = [tmp7.headerRow, headerRowInset];
                                              cResult[48] = tmp7.headerRow;
                                              cResult[49] = headerRowInset;
                                              cResult[50] = items2;
                                              tmp58 = items2;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj9 = { style: tmp21, onPress: tmp22, onPressIn, onPressOut, accessible: true, accessibilityRole: str, accessibilityHint: tmp25, children: null };
                                const items3 = [tmp44, tmp48];
                                obj9.children = items3;
                                const tmp56 = closure_7(closure_8, obj9);
                                cResult[39] = onPressOut;
                                cResult[40] = str;
                                cResult[41] = tmp25;
                                cResult[42] = tmp44;
                                cResult[43] = tmp48;
                                cResult[44] = tmp21;
                                cResult[45] = tmp22;
                                cResult[46] = onPressIn;
                                cResult[47] = tmp56;
                                tmp53 = tmp56;
                              }
                            }
                          }
                          let tmp49 = null;
                          if (null != tmp15) {
                            tmp49 = null;
                            if (tmp15 > 0) {
                              const obj10 = { style: tmp7.subheader, children: null };
                              const obj11 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
                              const intl2 = tmp(1126).intl;
                              const obj12 = { count: tmp15 };
                              obj11.children = intl2.format(tmp(1126).t.zRl6XR, obj12);
                              const items4 = [closure_6(tmp(5087).Text, obj11), , ];
                              const obj13 = { style: tmp7.ellipse };
                              items4[1] = closure_6(closure_4, obj13);
                              const obj14 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
                              const intl3 = tmp(1126).intl;
                              obj14.children = intl3.string(tmp(1126).t["1g9A/f"]);
                              items4[2] = closure_6(tmp(5087).Text, obj14);
                              obj10.children = items4;
                              tmp49 = closure_7(closure_4, obj10);
                            }
                          }
                          cResult[34] = tmp15;
                          cResult[35] = tmp7.ellipse;
                          cResult[36] = tmp7.subheader;
                          cResult[37] = token1;
                          cResult[38] = tmp49;
                          tmp48 = tmp49;
                        }
                      }
                    }
                  }
                  const obj15 = { style: tmp7.header, children: null };
                  const items5 = [tmp27, tmp33, tmp37, tmp41];
                  obj15.children = items5;
                  const tmp47 = closure_7(closure_4, obj15);
                  cResult[28] = tmp7.header;
                  cResult[29] = tmp27;
                  cResult[30] = tmp33;
                  cResult[31] = tmp37;
                  cResult[32] = tmp41;
                  cResult[33] = tmp47;
                  tmp44 = tmp47;
                }
                let tmp42 = null;
                if (tmp5) {
                  const obj16 = { size: "xxs", color: tmp8(587).colors.TEXT_SUBTLE, style: tmp7.chevron };
                  tmp42 = closure_6(tmp(6899).ChevronSmallRightIcon, obj16);
                }
                cResult[25] = tmp5;
                cResult[26] = tmp7.chevron;
                cResult[27] = tmp42;
                tmp41 = tmp42;
              }
              const obj17 = { guild, size: tmp(1200).Icon.Sizes.REFRESH_SMALL_16, style: tmp7.guildBadge };
              const tmp40 = closure_6(tmp8(8850), obj17);
              cResult[22] = guild;
              cResult[23] = tmp7.guildBadge;
              cResult[24] = tmp40;
              tmp37 = tmp40;
              const tmp8Result = tmp8(8850);
            }
            const obj18 = { ref, collapsable: false, style: tmp7.flex, children: tmp30 };
            const tmp36 = closure_6(closure_4, obj18);
            cResult[19] = tmp7.flex;
            cResult[20] = tmp30;
            cResult[21] = tmp36;
            tmp33 = tmp36;
          }
          const obj19 = { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: tmp17 };
          const tmp32 = closure_6(tmp(5087).Text, obj19);
          cResult[16] = tmp17;
          cResult[17] = token;
          cResult[18] = tmp32;
          tmp30 = tmp32;
        }
        let tmp28 = null;
        if (tmp11) {
          const obj20 = { style: tmp7.headerIcon, size: "sm", color: tmp8(587).colors.MOBILE_TEXT_HEADING_PRIMARY };
          tmp28 = closure_6(tmp(9523).StarIcon, obj20);
        }
        cResult[13] = tmp11;
        cResult[14] = tmp7.headerIcon;
        cResult[15] = tmp28;
        tmp27 = tmp28;
      }
      let stringResult;
      if (tmp5) {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp13);
      }
      cResult[10] = tmp13;
      cResult[11] = tmp5;
      cResult[12] = stringResult;
      tmp25 = stringResult;
    }
    const items6 = [pressableStyles, tmp7.headerRowTitle];
    cResult[7] = pressableStyles;
    cResult[8] = tmp7.headerRowTitle;
    cResult[9] = items6;
    tmp21 = items6;
    const tmpResult8 = tmp(4779);
  }
  const fn = function b() {
    if (closure_1) {
      openFavoritesGuildActionSheetDefault();
    } else {
      openGuildActionSheetDefault(guild);
    }
  };
  cResult[2] = guild;
  cResult[3] = tmp11;
  cResult[4] = fn;
  const obj = guild(576);
}) : (function ChannelListStickyHeader(guild) {
  guild = guild.guild;
  let flag = guild.showExtraButtons;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = guild.canOpenGuildActionSheet;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = guild.showCoachmarks;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const tmp = closure_9(flag);
  let tmp24Result7 = useIsGameCommunityServerPreviewDefault(guild.id);
  const ref = noop.useRef(null);
  const isFavoritesGuildIdResult = guild(2089).isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1126).t;
  const items = [guild, isFavoritesGuildIdResult];
  const callback = noop.useCallback(() => {
    if (c1) {
      openFavoritesGuildActionSheetDefault();
    } else {
      openGuildActionSheetDefault(guild);
    }
  }, items);
  const tmp10 = useStickyServerHeaderSubtitleDefault(guild);
  const obj2 = guild(2089);
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const iOSPressEffects = guild(6193).useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const tmp6Result = guild(6193);
  const favoritesAwareGuildName = guild(2089).getFavoritesAwareGuildName(guild);
  const tmp6Result4 = guild(2089);
  const token = guild(4779).useToken(tmp2(587).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result5 = guild(4779);
  const token1 = guild(4779).useToken(tmp2(587).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  const obj3 = { style: null, onPress: null, onPressIn: null, onPressOut: null, accessible: true, accessibilityRole: null, accessibilityHint: null, children: null };
  const items1 = [pressableStyles, tmp.headerRowTitle];
  obj3.style = items1;
  let tmp17;
  if (flag2) {
    tmp17 = callback;
  }
  obj3.onPress = tmp17;
  let tmp18;
  if (flag2) {
    tmp18 = onPressIn;
  }
  obj3.onPressIn = tmp18;
  let tmp19;
  if (flag2) {
    tmp19 = onPressOut;
  }
  obj3.onPressOut = tmp19;
  let str = "header";
  if (flag2) {
    str = "button";
  }
  obj3.accessibilityRole = str;
  let stringResult;
  if (flag2) {
    const intl = tmp6(1126).intl;
    stringResult = intl.string(tmp8);
  }
  obj3.accessibilityHint = stringResult;
  const obj4 = { style: tmp.header, children: null };
  let tmp22 = null;
  if (isFavoritesGuildIdResult) {
    const obj5 = { style: tmp.headerIcon, size: "sm", color: tmp2(587).colors.MOBILE_TEXT_HEADING_PRIMARY };
    tmp22 = closure_6(tmp6(9523).StarIcon, obj5);
  }
  const items2 = [tmp22, , , ];
  const tmp6Result6 = guild(4779);
  items2[1] = closure_6(closure_4, { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(5087).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) });
  const obj7 = { guild, size: null, style: null };
  const obj6 = { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(5087).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  obj7.size = guild(1200).Icon.Sizes.REFRESH_SMALL_16;
  obj7.style = tmp.guildBadge;
  items2[2] = closure_6(GuildBadgeV2Default, obj7);
  let tmp24Result = null;
  if (flag2) {
    const obj8 = { size: "xxs", color: tmp2(587).colors.TEXT_SUBTLE, style: tmp.chevron };
    tmp24Result = closure_6(tmp6(6899).ChevronSmallRightIcon, obj8);
  }
  items2[3] = tmp24Result;
  obj4.children = items2;
  const items3 = [closure_7(closure_4, obj4), ];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj9 = { style: tmp.subheader, children: null };
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
      const intl2 = tmp6(1126).intl;
      const obj11 = { count: tmp10 };
      obj10.children = intl2.format(tmp6(1126).t.zRl6XR, obj11);
      const items4 = [closure_6(tmp6(5087).Text, obj10), , ];
      const obj12 = { style: tmp.ellipse };
      items4[1] = closure_6(closure_4, obj12);
      const obj13 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: null };
      const intl3 = tmp6(1126).intl;
      obj13.children = intl3.string(tmp6(1126).t["1g9A/f"]);
      items4[2] = closure_6(tmp6(5087).Text, obj13);
      obj9.children = items4;
      tmp15Result = closure_7(closure_4, obj9);
    }
  }
  items3[1] = tmp15Result;
  obj3.children = items3;
  const obj14 = { style: tmp.container, children: null };
  const items5 = [tmp.headerRow, ];
  let headerRowInset = null;
  const tmp2Result = GuildBadgeV2Default;
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj15 = { style: items5, children: null };
  items5[1] = headerRowInset;
  const items6 = [closure_7(closure_8, obj3), ];
  let tmp24Result5 = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result5 = closure_6(tmp6(16493).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp24Result5;
  obj15.children = items6;
  const items7 = [closure_7(closure_4, obj15), , , , ];
  let tmp24Result6 = null;
  if (flag) {
    const obj16 = { guild, useButtonComponent: true, useEventsButton: true };
    tmp24Result6 = closure_6(tmp2(11949), obj16);
  }
  items7[1] = tmp24Result6;
  if (tmp24Result7) {
    const obj17 = { style: tmp.joinButton, children: null };
    const obj18 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    obj17.children = closure_6(tmp2(16498), obj18);
    tmp24Result7 = closure_6(closure_4, obj17);
  }
  items7[2] = tmp24Result7;
  items7[3] = closure_6(closure_4, { style: tmp.divider });
  let tmp24Result8 = null;
  if (flag3) {
    const obj20 = { targetRef: ref, guild };
    tmp24Result8 = closure_6(tmp2(16499), obj20);
  }
  items7[4] = tmp24Result8;
  obj14.children = items7;
  return closure_7(closure_4, obj14);
});