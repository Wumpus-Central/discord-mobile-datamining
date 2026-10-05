// === Module 16061: ChannelListStickyHeader ===

// Module 16061 (ChannelListStickyHeader)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 8394 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13720 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 16030 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 16060 */;
import openFavoritesGuildActionSheetDefault from "openFavoritesGuildActionSheet" /* 16062 */;
import LurkerServerPreviewJoinButtonDefault from "LurkerServerPreviewJoinButton" /* 16080 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guild, importDefault;

let Pressable;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: closure_4, Pressable } = react_native);
const JoinGuildSources = Constants.JoinGuildSources;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_9 = createStyles.createStyles(() => {
  let num;
  let obj2;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const obj = { chevron: { flexShrink: 0, flexGrow: 0 }, container: obj2, divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 }, guildBadge: { margin: 0 }, flex: { flexShrink: 1 }, header: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, headerRow: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 }, headerRowTitle: { flexGrow: 1, flexShrink: 1 }, headerRowInset: { paddingEnd: nativeDefault.space.PX_16 }, headerIcon: { marginRight: nativeDefault.space.PX_4 }, subheader: { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, ellipse: size, joinButton: { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 } };
  obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_16, paddingBottom: num, zIndex: 1 };
  num = 0;
  if (!flag) {
    num = nativeDefault.space.PX_12;
  }
  ({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: nativeDefault.space.PX_16 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  ({ paddingEnd: nativeDefault.space.PX_16 });
  ({ marginRight: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 });
  size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, borderRadius: nativeDefault.radii.round };
  ({ marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 });
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let canOpenGuildActionSheet;
  let closure_1;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj6;
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  let showCoachmarks;
  let showExtraButtons;
  let tmp11;
  const obj = guild(576);
  const cResult = obj.c(76);
  guild = guild.guild;
  ({ showExtraButtons, canOpenGuildActionSheet, showCoachmarks } = guild);
  let tmp5 = undefined === canOpenGuildActionSheet || canOpenGuildActionSheet;
  const tmp7 = closure_9(undefined === showExtraButtons || showExtraButtons);
  const tmp9 = useIsGameCommunityServerPreviewDefault(guild.id);
  const ref = react.useRef(null);
  if (cResult[0] !== guild.id) {
    const tmpResult = guild(2077);
    const isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(guild.id);
    cResult[0] = guild.id;
    cResult[1] = isFavoritesGuildIdResult;
    tmp11 = isFavoritesGuildIdResult;
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
    let tmp17;
    const tmp15 = useStickyServerHeaderSubtitleDefault(guild);
    const tmpResult5 = guild(5998);
    const iOSPressEffects = tmpResult5.useIOSPressEffects(4);
    ({ pressableStyles, onPressIn, onPressOut } = iOSPressEffects);
    if (cResult[5] !== guild) {
      const tmpResult6 = guild(2077);
      const favoritesAwareGuildName = tmpResult6.getFavoritesAwareGuildName(guild);
      cResult[5] = guild;
      cResult[6] = favoritesAwareGuildName;
      tmp17 = favoritesAwareGuildName;
    } else {
      tmp17 = cResult[6];
    }
    const tmpResult7 = guild(4580);
    const token = tmpResult7.useToken(tmp8(587).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
    const tmpResult8 = guild(4580);
    const token1 = tmpResult8.useToken(tmp8(587).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
    if (cResult[7] === pressableStyles) {
      let tmp21;
      if (cResult[8] === tmp7.headerRowTitle) {
        tmp21 = cResult[9];
      }
      let str = "header";
      if (tmp5) {
        str = "button";
      }
      if (cResult[10] === tmp13) {
        let tmp25;
        if (cResult[11] === tmp5) {
          tmp25 = cResult[12];
        }
        if (cResult[13] === tmp11) {
          let tmp27;
          if (cResult[14] === tmp7.headerIcon) {
            tmp27 = cResult[15];
          }
          if (cResult[16] === tmp17) {
            let tmp30;
            if (cResult[17] === token) {
              tmp30 = cResult[18];
            }
            if (cResult[19] === tmp7.flex) {
              let tmp33;
              if (cResult[20] === tmp30) {
                tmp33 = cResult[21];
              }
              if (cResult[22] === guild) {
                let tmp37;
                if (cResult[23] === tmp7.guildBadge) {
                  tmp37 = cResult[24];
                }
                if (cResult[25] === tmp5) {
                  let tmp41;
                  if (cResult[26] === tmp7.chevron) {
                    tmp41 = cResult[27];
                  }
                  if (cResult[28] === tmp7.header) {
                    if (cResult[29] === tmp27) {
                      if (cResult[30] === tmp33) {
                        if (cResult[31] === tmp37) {
                          let tmp44;
                          if (cResult[32] === tmp41) {
                            tmp44 = cResult[33];
                          }
                          if (cResult[34] === tmp15) {
                            if (cResult[35] === tmp7.ellipse) {
                              if (cResult[36] === tmp7.subheader) {
                                let tmp48;
                                if (cResult[37] === token1) {
                                  tmp48 = cResult[38];
                                }
                                if (cResult[39] === onPressOut) {
                                  if (cResult[40] === str) {
                                    if (cResult[41] === tmp25) {
                                      if (cResult[42] === tmp44) {
                                        if (cResult[43] === tmp48) {
                                          if (cResult[44] === tmp21) {
                                            if (cResult[45] === tmp22) {
                                              let tmp53;
                                              if (cResult[46] === onPressIn) {
                                                tmp53 = cResult[47];
                                              }
                                              let headerRowInset = null;
                                              if (tmp11) {
                                                headerRowInset = tmp7.headerRowInset;
                                              }
                                              if (cResult[48] === tmp7.headerRow) {
                                                let tmp58;
                                                let tmp59;
                                                if (cResult[49] === headerRowInset) {
                                                  tmp58 = cResult[50];
                                                }
                                                if (cResult[51] !== tmp11) {
                                                  let tmp60 = null;
                                                  if (tmp11) {
                                                    tmp60 = closure_6(tmp(16075).FavoritesGuildHeaderActionButton, {});
                                                  }
                                                  cResult[51] = tmp11;
                                                  cResult[52] = tmp60;
                                                  tmp59 = tmp60;
                                                } else {
                                                  tmp59 = cResult[52];
                                                }
                                                if (cResult[53] === tmp53) {
                                                  if (cResult[54] === tmp58) {
                                                    let tmp62;
                                                    if (cResult[55] === tmp59) {
                                                      tmp62 = cResult[56];
                                                    }
                                                    if (cResult[57] === guild) {
                                                      let tmp66;
                                                      if (cResult[58] === (undefined === showExtraButtons || showExtraButtons)) {
                                                        tmp66 = cResult[59];
                                                      }
                                                      if (cResult[60] === guild.id) {
                                                        if (cResult[61] === tmp9) {
                                                          let tmp69;
                                                          let tmp74;
                                                          if (cResult[62] === tmp7.joinButton) {
                                                            tmp69 = cResult[63];
                                                          }
                                                          if (cResult[64] !== tmp7.divider) {
                                                            const obj2 = { style: tmp7.divider };
                                                            const tmp77 = closure_6(closure_4, obj2);
                                                            cResult[64] = tmp7.divider;
                                                            cResult[65] = tmp77;
                                                            tmp74 = tmp77;
                                                          } else {
                                                            tmp74 = cResult[65];
                                                          }
                                                          if (cResult[66] === guild) {
                                                            let tmp78;
                                                            if (cResult[67] === (undefined !== showCoachmarks && showCoachmarks)) {
                                                              tmp78 = cResult[68];
                                                            }
                                                            if (cResult[69] === tmp7.container) {
                                                              if (cResult[70] === tmp62) {
                                                                if (cResult[71] === tmp66) {
                                                                  if (cResult[72] === tmp69) {
                                                                    if (cResult[73] === tmp74) {
                                                                      let tmp81;
                                                                      if (cResult[74] === tmp78) {
                                                                        tmp81 = cResult[75];
                                                                      }
                                                                      return tmp81;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const obj3 = { style: tmp7.container, children: items };
                                                            items = [tmp62, tmp66, tmp69, tmp74, tmp78];
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
                                                          if (undefined !== showCoachmarks && showCoachmarks) {
                                                            const obj4 = { targetRef: ref, guild };
                                                            tmp79 = closure_6(tmp8(16081), obj4);
                                                          }
                                                          cResult[66] = guild;
                                                          cResult[67] = undefined !== showCoachmarks && showCoachmarks;
                                                          cResult[68] = tmp79;
                                                          tmp78 = tmp79;
                                                        }
                                                      }
                                                      let tmp70 = tmp9;
                                                      if (tmp70) {
                                                        const obj5 = { style: tmp7.joinButton, children: closure_6(LurkerServerPreviewJoinButtonDefault, obj6) };
                                                        obj6 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
                                                        tmp70 = closure_6(closure_4, obj5);
                                                      }
                                                      cResult[60] = guild.id;
                                                      cResult[61] = tmp9;
                                                      cResult[62] = tmp7.joinButton;
                                                      cResult[63] = tmp70;
                                                      tmp69 = tmp70;
                                                    }
                                                    let tmp67 = null;
                                                    if (undefined === showExtraButtons || showExtraButtons) {
                                                      const obj7 = { guild, useButtonComponent: true, useEventsButton: true };
                                                      tmp67 = closure_6(tmp8(11925), obj7);
                                                    }
                                                    cResult[57] = guild;
                                                    cResult[58] = undefined === showExtraButtons || showExtraButtons;
                                                    cResult[59] = tmp67;
                                                    tmp66 = tmp67;
                                                  }
                                                }
                                                const obj8 = { style: tmp58, children: items1 };
                                                items1 = [tmp53, tmp59];
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
                                const obj9 = { style: tmp21, onPress: tmp22, onPressIn, onPressOut, accessible: true, accessibilityRole: str, accessibilityHint: tmp25, children: items3 };
                                items3 = [tmp44, tmp48];
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
                              const obj10 = { style: tmp7.subheader, children: items4 };
                              const obj11 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl2.format(guild(1126).t.zRl6XR, obj12) };
                              const Text = tmp(4886).Text;
                              intl2 = tmp(1126).intl;
                              obj12 = { count: tmp15 };
                              items4 = [closure_6(Text, obj11), , ];
                              const obj13 = { style: tmp7.ellipse };
                              items4[1] = closure_6(closure_4, obj13);
                              const obj14 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl3.string(guild(1126).t["1g9A/f"]) };
                              const Text2 = tmp(4886).Text;
                              intl3 = tmp(1126).intl;
                              items4[2] = closure_6(Text2, obj14);
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
                  const obj15 = { style: tmp7.header, children: items5 };
                  items5 = [tmp27, tmp33, tmp37, tmp41];
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
                  const obj16 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE, style: tmp7.chevron };
                  const ChevronSmallRightIcon = tmp(6708).ChevronSmallRightIcon;
                  tmp42 = closure_6(ChevronSmallRightIcon, obj16);
                }
                cResult[25] = tmp5;
                cResult[26] = tmp7.chevron;
                cResult[27] = tmp42;
                tmp41 = tmp42;
              }
              const obj17 = { guild, size: guild(1188).Icon.Sizes.REFRESH_SMALL_16, style: tmp7.guildBadge };
              const tmp8Result = GuildBadgeV2Default;
              const tmp40 = closure_6(tmp8Result, obj17);
              cResult[22] = guild;
              cResult[23] = tmp7.guildBadge;
              cResult[24] = tmp40;
              tmp37 = tmp40;
            }
            const obj18 = { ref, collapsable: false, style: tmp7.flex, children: tmp30 };
            const tmp36 = closure_6(closure_4, obj18);
            cResult[19] = tmp7.flex;
            cResult[20] = tmp30;
            cResult[21] = tmp36;
            tmp33 = tmp36;
          }
          const obj19 = { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: tmp17 };
          const tmp32 = closure_6(guild(4886).Text, obj19);
          cResult[16] = tmp17;
          cResult[17] = token;
          cResult[18] = tmp32;
          tmp30 = tmp32;
        }
        let tmp28 = null;
        if (tmp11) {
          const obj20 = { style: tmp7.headerIcon, size: "sm", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
          const StarIcon = tmp(9943).StarIcon;
          tmp28 = closure_6(StarIcon, obj20);
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
}) : ((guild) => {
  let c1;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let obj11;
  let obj18;
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  let str;
  let stringResult;
  let tmp17;
  let tmp18;
  let tmp19;
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
  const ref = react.useRef(null);
  const obj2 = guild(2077);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  importDefault = isFavoritesGuildIdResult;
  if (!flag2) {
    flag2 = isFavoritesGuildIdResult;
  }
  const t = tmp6(1126).t;
  const items = [guild, isFavoritesGuildIdResult];
  const tmp8 = isFavoritesGuildIdResult ? t.hW8QDk : t["Gpyp/e"];
  const callback = react.useCallback(() => {
    if (c1) {
      openFavoritesGuildActionSheetDefault();
    } else {
      openGuildActionSheetDefault(guild);
    }
  }, items);
  const tmp10 = useStickyServerHeaderSubtitleDefault(guild);
  const tmp6Result = guild(5998);
  const iOSPressEffects = tmp6Result.useIOSPressEffects(4);
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const tmp6Result4 = guild(2077);
  const favoritesAwareGuildName = tmp6Result4.getFavoritesAwareGuildName(guild);
  const tmp6Result5 = guild(4580);
  const token = tmp6Result5.useToken(tmp2(587).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  const tmp6Result6 = guild(4580);
  const token1 = tmp6Result6.useToken(tmp2(587).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  const obj3 = { style: items1, onPress: tmp17, onPressIn: tmp18, onPressOut: tmp19, accessible: true, accessibilityRole: str, accessibilityHint: stringResult, children: items3 };
  items1 = [pressableStyles, tmp.headerRowTitle];
  tmp17 = undefined;
  if (flag2) {
    tmp17 = callback;
  }
  tmp18 = undefined;
  if (flag2) {
    tmp18 = onPressIn;
  }
  tmp19 = undefined;
  if (flag2) {
    tmp19 = onPressOut;
  }
  str = "header";
  if (flag2) {
    str = "button";
  }
  stringResult = undefined;
  if (flag2) {
    const intl = tmp6(1126).intl;
    stringResult = intl.string(tmp8);
  }
  let tmp22 = null;
  const obj4 = { style: tmp.header, children: items2 };
  if (isFavoritesGuildIdResult) {
    const obj5 = { style: tmp.headerIcon, size: "sm", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    const StarIcon = tmp6(9943).StarIcon;
    tmp22 = closure_6(StarIcon, obj5);
  }
  items2 = [tmp22, , , ];
  const obj6 = { ref, collapsable: false, style: tmp.flex, children: closure_6(guild(4886).Text, { experimental_useNativeText: true, color: "mobile-text-heading-primary", variant: token, lineClamp: 1, children: favoritesAwareGuildName }) };
  items2[1] = closure_6(closure_4, obj6);
  const obj7 = { guild, size: guild(1188).Icon.Sizes.REFRESH_SMALL_16, style: tmp.guildBadge };
  const tmp2Result = GuildBadgeV2Default;
  items2[2] = closure_6(tmp2Result, obj7);
  let tmp24Result = null;
  if (flag2) {
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_SUBTLE, style: tmp.chevron };
    const ChevronSmallRightIcon = tmp6(6708).ChevronSmallRightIcon;
    tmp24Result = closure_6(ChevronSmallRightIcon, obj8);
  }
  items2[3] = tmp24Result;
  items3 = [closure_7(closure_4, obj4), ];
  let tmp15Result = null;
  if (null != tmp10) {
    tmp15Result = null;
    if (tmp10 > 0) {
      const obj9 = { style: tmp.subheader, children: items4 };
      const obj10 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl2.format(guild(1126).t.zRl6XR, obj11) };
      const Text = tmp6(4886).Text;
      intl2 = tmp6(1126).intl;
      obj11 = { count: tmp10 };
      items4 = [closure_6(Text, obj10), , ];
      const obj12 = { style: tmp.ellipse };
      items4[1] = closure_6(closure_4, obj12);
      const obj13 = { experimental_useNativeText: true, color: "text-muted", variant: token1, lineClamp: 1, children: intl3.string(guild(1126).t["1g9A/f"]) };
      const Text2 = tmp6(4886).Text;
      intl3 = tmp6(1126).intl;
      items4[2] = closure_6(Text2, obj13);
      tmp15Result = closure_7(closure_4, obj9);
    }
  }
  items3[1] = tmp15Result;
  const items5 = [tmp.headerRow, ];
  let headerRowInset = null;
  const obj14 = { style: tmp.container, children: items7 };
  const tmp15Result2 = closure_7(closure_8, obj3);
  if (isFavoritesGuildIdResult) {
    headerRowInset = tmp.headerRowInset;
  }
  const obj15 = { style: items5, children: items6 };
  items5[1] = headerRowInset;
  items6 = [tmp15Result2, ];
  let tmp24Result5 = null;
  if (isFavoritesGuildIdResult) {
    tmp24Result5 = closure_6(tmp6(16075).FavoritesGuildHeaderActionButton, {});
  }
  items6[1] = tmp24Result5;
  items7 = [closure_7(closure_4, obj15), , , , ];
  let tmp24Result6 = null;
  if (flag) {
    const obj16 = { guild, useButtonComponent: true, useEventsButton: true };
    tmp24Result6 = closure_6(tmp2(11925), obj16);
  }
  items7[1] = tmp24Result6;
  if (tmp24Result7) {
    const obj17 = { style: tmp.joinButton, children: closure_6(LurkerServerPreviewJoinButtonDefault, obj18) };
    obj18 = { guildId: guild.id, joinSource: JoinGuildSources.CHANNEL_LIST_STICKY_HEADER_LURKER };
    tmp24Result7 = closure_6(closure_4, obj17);
  }
  items7[2] = tmp24Result7;
  const obj19 = { style: tmp.divider };
  items7[3] = closure_6(closure_4, obj19);
  let tmp24Result8 = null;
  if (flag3) {
    const obj20 = { targetRef: ref, guild };
    tmp24Result8 = closure_6(tmp2(16081), obj20);
  }
  items7[4] = tmp24Result8;
  return closure_7(closure_4, obj14);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelListStickyHeader.tsx");

export default tmp4;