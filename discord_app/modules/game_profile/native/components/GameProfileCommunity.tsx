// === Module 8951: GameProfileCommunity ===

// Module 8951 (GameProfileCommunity)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6626 */;
import transitionToGuild from "transitionToGuild" /* 7052 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8878 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8946 */;
import GameProfileSection from "GameProfileSection" /* 8948 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8952 */;
import noop from "module_19" /* 19 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_8;
const createStyles = fn(5092);
let obj = { card: { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, guildContent: null, guildHeaderRow: null, guildIcon: null, guildIconImage: null, guildIconLoading: null, guildInfo: null, guildNameDescriptionContainer: null, guildNameRow: null, memberCountsContainer: null, memberCountContainer: null, onlineEllipse: null, membersEllipse: null, skeletonGuildIcon: null, skeletonGuildInfo: null, skeletonGuildInfoSmall: null, skeletonGuildInfoLarge: null, skeletonGuildName: null, skeletonGuildDescription: null, skeletonMemberCounts: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.guildContent = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.guildHeaderRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let size = { width: sum, height: sum, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -nativeDefault.space.PX_4 };
obj.guildIcon = size;
const size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj.guildIconImage = size1;
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.guildIconLoading = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.guildInfo = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj7 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj.guildNameDescriptionContainer = { gap: nativeDefault.space.PX_4 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj.guildNameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.memberCountsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.memberCountContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj.onlineEllipse = size2;
const size3 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
obj.membersEllipse = size3;
const size4 = { width: sum, height: sum, borderRadius: nativeDefault.radii.md, borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.skeletonGuildIcon = size4;
obj.skeletonGuildInfo = { flex: 1, justifyContent: "space-between", marginBottom: 2 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.skeletonGuildInfoSmall = { height: nativeDefault.space.PX_96 + 2 };
let obj12 = { height: nativeDefault.space.PX_96 + 2 };
obj.skeletonGuildInfoLarge = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
const size5 = { width: "60%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
obj.skeletonGuildName = size5;
const size6 = { width: "90%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj.skeletonGuildDescription = size6;
const size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj.skeletonMemberCounts = size7;
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_8 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunitySkeleton() {
  const cResult = c.c(27);
  const tmp4 = closure_7();
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  if (cResult[0] !== tmp4.skeletonGuildIcon) {
    const obj2 = { style: tmp4.skeletonGuildIcon };
    const tmp10 = hasOwnProperty(GameProfileSkeletonDefault, obj2);
    cResult[0] = tmp4.skeletonGuildIcon;
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  const tmp11 = useIsWindowLargeDefault() ? tmp4.skeletonGuildInfoLarge : tmp4.skeletonGuildInfoSmall;
  if (cResult[2] === tmp4.skeletonGuildInfo) {
    if (cResult[3] === tmp11) {
      let tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp4.skeletonGuildName) {
      const obj3 = { style: tmp4.skeletonGuildName };
      const tmp15 = hasOwnProperty(GameProfileSkeletonDefault, obj3);
      cResult[5] = tmp4.skeletonGuildName;
      cResult[6] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp4.skeletonGuildDescription) {
      const obj4 = { style: tmp4.skeletonGuildDescription };
      const tmp18 = hasOwnProperty(GameProfileSkeletonDefault, obj4);
      cResult[7] = tmp4.skeletonGuildDescription;
      cResult[8] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] !== tmp4.skeletonMemberCounts) {
      const obj5 = { style: tmp4.skeletonMemberCounts };
      const tmp21 = hasOwnProperty(GameProfileSkeletonDefault, obj5);
      cResult[9] = tmp4.skeletonMemberCounts;
      cResult[10] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] === tmp12) {
      if (cResult[12] === tmp13) {
        if (cResult[13] === tmp16) {
          if (cResult[14] === tmp19) {
            let tmp22 = cResult[15];
          }
          if (cResult[16] === tmp4.guildHeaderRow) {
            if (cResult[17] === tmp8) {
              if (cResult[18] === tmp22) {
                let tmp26 = cResult[19];
              }
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp33 = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonButton, {});
                cResult[20] = tmp33;
                let tmp31 = tmp33;
              } else {
                tmp31 = cResult[20];
              }
              if (cResult[21] === tmp4.guildContent) {
                if (cResult[22] === tmp26) {
                  let tmp34 = cResult[23];
                }
                if (cResult[24] === tmp4.card) {
                  if (cResult[25] === tmp34) {
                    let tmp37 = cResult[26];
                  }
                  return tmp37;
                }
                const obj6 = { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: null };
                const obj7 = { style: tmp4.card, children: tmp34 };
                obj6.children = hasOwnProperty(View, obj7);
                const tmp40 = hasOwnProperty(GameProfileSection.GameProfileSectionSkeleton, obj6);
                cResult[24] = tmp4.card;
                cResult[25] = tmp34;
                cResult[26] = tmp40;
                tmp37 = tmp40;
              }
              const obj8 = { animationDelayMs: result, style: tmp4.guildContent, children: null };
              const items = [tmp26, tmp31];
              obj8.children = items;
              const tmp36 = timestampProducer(GameProfileSkeleton.GameProfileSkeletonContainer, obj8);
              cResult[21] = tmp4.guildContent;
              cResult[22] = tmp26;
              cResult[23] = tmp36;
              tmp34 = tmp36;
            }
          }
          const obj9 = { style: tmp4.guildHeaderRow, children: null };
          const items1 = [tmp8, tmp22];
          obj9.children = items1;
          const tmp29 = timestampProducer(View, obj9);
          cResult[16] = tmp4.guildHeaderRow;
          cResult[17] = tmp8;
          cResult[18] = tmp22;
          cResult[19] = tmp29;
          tmp26 = tmp29;
        }
      }
    }
    const obj10 = { style: tmp12, children: null };
    const items2 = [tmp13, tmp16, tmp19];
    obj10.children = items2;
    const tmp25 = timestampProducer(View, obj10);
    cResult[11] = tmp12;
    cResult[12] = tmp13;
    cResult[13] = tmp16;
    cResult[14] = tmp19;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const items3 = [tmp4.skeletonGuildInfo, tmp11];
  cResult[2] = tmp4.skeletonGuildInfo;
  cResult[3] = tmp11;
  cResult[4] = items3;
  tmp12 = items3;
  const tmp6 = useIsWindowLargeDefault();
}) : (function GameProfileCommunitySkeleton() {
  const tmp = closure_7();
  const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
  const obj = { animationDelayMs: result, showViewAllSkeleton: false, skeletonTitleWidth: 80, children: null };
  const obj2 = { style: tmp.card, children: null };
  const obj3 = { animationDelayMs: result, style: tmp.guildContent, children: null };
  const obj4 = { style: tmp.guildHeaderRow, children: null };
  const items = [hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonGuildIcon }), ];
  const items1 = [tmp.skeletonGuildInfo, ];
  const obj6 = { style: items1, children: null };
  items1[1] = useIsWindowLargeDefault() ? tmp.skeletonGuildInfoLarge : tmp.skeletonGuildInfoSmall;
  const items2 = [hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonGuildName }), hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonGuildDescription }), hasOwnProperty(GameProfileSkeletonDefault, { style: tmp.skeletonMemberCounts })];
  obj6.children = items2;
  items[1] = timestampProducer(View, obj6);
  obj4.children = items;
  const items3 = [timestampProducer(View, obj4), hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonButton, {})];
  obj3.children = items3;
  obj2.children = timestampProducer(GameProfileSkeleton.GameProfileSkeletonContainer, obj3);
  obj.children = hasOwnProperty(View, obj2);
  return hasOwnProperty(GameProfileSection.GameProfileSectionSkeleton, obj);
}));
ReactCompilerGating = fn(558);
let obj13 = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunityServer(closeModal) {
  const cResult = trackAction(invite[6]).c(66);
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  const tmp4 = closure_7();
  const tmp6 = closeModal(invite[10])(game, closeModal.onInviteResolved);
  invite = tmp6.invite;
  const isMember = tmp6.isMember;
  const isResolving = tmp6.isResolving;
  if (cResult[0] !== game) {
    const result = trackAction(tmp2[10]).hasGameProfileDiscordWebsite(game);
    cResult[0] = game;
    cResult[1] = result;
    let tmp7 = result;
    const tmpResult = trackAction(tmp2[10]);
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === closeModal) {
    if (cResult[3] === invite) {
      if (cResult[4] === isMember) {
        if (cResult[5] === trackAction) {
          let tmp9 = cResult[6];
        }
        if (null != invite) {
          if (null != invite.guild) {
            if (cResult[10] !== invite.guild) {
              const fromInviteGuildResult = trackAction(tmp2[14]).fromInviteGuild(invite.guild);
              cResult[10] = invite.guild;
              cResult[11] = fromInviteGuildResult;
              let tmp11 = fromInviteGuildResult;
              const tmpResult2 = trackAction(tmp2[14]);
            } else {
              tmp11 = cResult[11];
            }
            let approximate_member_count = invite.approximate_member_count;
            if (approximate_member_count == null) {
              approximate_member_count = invite.guild.approximate_member_count;
            }
            let approximate_presence_count = invite.approximate_presence_count;
            if (approximate_presence_count == null) {
              approximate_presence_count = invite.guild.approximate_presence_count;
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = trackAction(tmp2[15]).intl;
              const stringResult = intl.string(trackAction(tmp2[15]).t["U2N+ci"]);
              cResult[12] = stringResult;
              let tmp14 = stringResult;
            } else {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp4.guildIconImage) {
                if (cResult[15] === tmp4.guildIconLoading) {
                  let tmp16 = cResult[16];
                }
                if (cResult[17] === tmp4.guildIcon) {
                  if (cResult[18] === tmp16) {
                    let tmp20 = cResult[19];
                  }
                  if (cResult[20] !== tmp11.name) {
                    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp11.name };
                    const tmp26 = closure_5(trackAction(tmp2[17]).Text, obj2);
                    cResult[20] = tmp11.name;
                    cResult[21] = tmp26;
                    let tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[21];
                  }
                  if (cResult[22] !== tmp11) {
                    const obj3 = { guild: tmp11, size: trackAction(tmp2[19]).Icon.Sizes.REFRESH_SMALL_16 };
                    const tmp30 = closure_5(tmp5(tmp2[18]), obj3);
                    cResult[22] = tmp11;
                    cResult[23] = tmp30;
                    let tmp27 = tmp30;
                    const tmp5Result = tmp5(tmp2[18]);
                  } else {
                    tmp27 = cResult[23];
                  }
                  if (cResult[24] === tmp4.guildNameRow) {
                    if (cResult[25] === tmp24) {
                      if (cResult[26] === tmp27) {
                        let tmp31 = cResult[27];
                      }
                      if (cResult[28] !== tmp11.description) {
                        const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: tmp11.description };
                        const tmp37 = closure_5(trackAction(tmp2[17]).Text, obj5);
                        cResult[28] = tmp11.description;
                        cResult[29] = tmp37;
                        let tmp35 = tmp37;
                      } else {
                        tmp35 = cResult[29];
                      }
                      if (cResult[30] === tmp4.guildNameDescriptionContainer) {
                        if (cResult[31] === tmp35) {
                          if (cResult[32] === tmp31) {
                            let tmp38 = cResult[33];
                          }
                          if (cResult[34] === approximate_presence_count) {
                            if (cResult[35] === tmp4.memberCountContainer) {
                              if (cResult[36] === tmp4.onlineEllipse) {
                                let tmp42 = cResult[37];
                              }
                              if (cResult[38] === approximate_member_count) {
                                if (cResult[39] === tmp4.memberCountContainer) {
                                  if (cResult[40] === tmp4.membersEllipse) {
                                    let tmp47 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.memberCountsContainer) {
                                    if (cResult[43] === tmp42) {
                                      if (cResult[44] === tmp47) {
                                        let tmp52 = cResult[45];
                                      }
                                      if (cResult[46] === tmp4.guildInfo) {
                                        if (cResult[47] === tmp38) {
                                          if (cResult[48] === tmp52) {
                                            let tmp56 = cResult[49];
                                          }
                                          if (cResult[50] === tmp4.guildHeaderRow) {
                                            if (cResult[51] === tmp56) {
                                              if (cResult[52] === tmp20) {
                                                let tmp60 = cResult[53];
                                              }
                                              if (cResult[54] !== isMember) {
                                                const intl4 = trackAction(tmp2[15]).intl;
                                                const string = intl4.string;
                                                let cEnaWx = trackAction(tmp2[15]).t;
                                                if (isMember) {
                                                  cEnaWx = cEnaWx.cEnaWx;
                                                  let stringResult1 = string(cEnaWx);
                                                } else {
                                                  stringResult1 = string(cEnaWx.XpeFYr);
                                                }
                                                cResult[54] = isMember;
                                                cResult[55] = stringResult1;
                                              } else {
                                                if (cResult[56] === tmp9) {
                                                  if (cResult[57] === tmp64) {
                                                    let tmp67 = cResult[58];
                                                  }
                                                  if (cResult[59] === tmp4.guildContent) {
                                                    if (cResult[60] === tmp60) {
                                                      if (cResult[61] === tmp67) {
                                                        let tmp70 = cResult[62];
                                                      }
                                                      if (cResult[63] === tmp4.card) {
                                                        if (cResult[64] === tmp70) {
                                                          let tmp74 = cResult[65];
                                                        }
                                                        return tmp74;
                                                      }
                                                      const obj6 = { title: tmp14, children: null };
                                                      const obj7 = { style: tmp4.card, children: tmp70 };
                                                      obj6.children = closure_5(View, obj7);
                                                      const tmp78 = closure_5(tmp5(tmp2[9]), obj6);
                                                      cResult[63] = tmp4.card;
                                                      cResult[64] = tmp70;
                                                      cResult[65] = tmp78;
                                                      tmp74 = tmp78;
                                                      const tmp5Result3 = tmp5(tmp2[9]);
                                                    }
                                                  }
                                                  const obj8 = { style: tmp4.guildContent, children: null };
                                                  const items = [tmp60, tmp67];
                                                  obj8.children = items;
                                                  const tmp73 = closure_6(View, obj8);
                                                  cResult[59] = tmp4.guildContent;
                                                  cResult[60] = tmp60;
                                                  cResult[61] = tmp67;
                                                  cResult[62] = tmp73;
                                                  tmp70 = tmp73;
                                                }
                                                const obj9 = { variant: "secondary", size: "md", text: cResult[55], onPress: tmp9 };
                                                const tmp69 = closure_5(trackAction(tmp2[20]).Button, obj9);
                                                cResult[56] = tmp9;
                                                cResult[57] = cResult[55];
                                                cResult[58] = tmp69;
                                                tmp67 = tmp69;
                                              }
                                            }
                                          }
                                          const obj10 = { style: tmp4.guildHeaderRow, children: null };
                                          const items1 = [tmp20, tmp56];
                                          obj10.children = items1;
                                          const tmp63 = closure_6(View, obj10);
                                          cResult[50] = tmp4.guildHeaderRow;
                                          cResult[51] = tmp56;
                                          cResult[52] = tmp20;
                                          cResult[53] = tmp63;
                                          tmp60 = tmp63;
                                        }
                                      }
                                      const obj11 = { style: tmp4.guildInfo, children: null };
                                      const items2 = [tmp38, tmp52];
                                      obj11.children = items2;
                                      const tmp59 = closure_6(View, obj11);
                                      cResult[46] = tmp4.guildInfo;
                                      cResult[47] = tmp38;
                                      cResult[48] = tmp52;
                                      cResult[49] = tmp59;
                                      tmp56 = tmp59;
                                    }
                                  }
                                  const obj12 = { style: tmp4.memberCountsContainer, children: null };
                                  const items3 = [tmp42, tmp47];
                                  obj12.children = items3;
                                  const tmp55 = closure_6(View, obj12);
                                  cResult[42] = tmp4.memberCountsContainer;
                                  cResult[43] = tmp42;
                                  cResult[44] = tmp47;
                                  cResult[45] = tmp55;
                                  tmp52 = tmp55;
                                }
                              }
                              let tmp48 = null;
                              if (null != approximate_member_count) {
                                const obj13 = { style: tmp4.memberCountContainer, children: null };
                                const obj14 = { style: tmp4.membersEllipse };
                                const items4 = [closure_5(View, obj14), ];
                                const obj15 = { variant: "text-xs/normal", color: "text-default", children: null };
                                const intl3 = trackAction(tmp2[15]).intl;
                                const obj16 = { count: approximate_member_count };
                                obj15.children = intl3.formatToPlainString(trackAction(tmp2[15]).t.zRl6XR, obj16);
                                items4[1] = closure_5(trackAction(tmp2[17]).Text, obj15);
                                obj13.children = items4;
                                tmp48 = closure_6(View, obj13);
                              }
                              cResult[38] = approximate_member_count;
                              cResult[39] = tmp4.memberCountContainer;
                              cResult[40] = tmp4.membersEllipse;
                              cResult[41] = tmp48;
                              tmp47 = tmp48;
                            }
                          }
                          let tmp43 = null;
                          if (null != approximate_presence_count) {
                            const obj17 = { style: tmp4.memberCountContainer, children: null };
                            const obj18 = { style: tmp4.onlineEllipse };
                            const items5 = [closure_5(View, obj18), ];
                            const obj19 = { variant: "text-xs/normal", color: "text-default", children: null };
                            const intl2 = trackAction(tmp2[15]).intl;
                            const obj20 = { membersOnline: approximate_presence_count };
                            obj19.children = intl2.formatToPlainString(trackAction(tmp2[15]).t["LC+S+m"], obj20);
                            items5[1] = closure_5(trackAction(tmp2[17]).Text, obj19);
                            obj17.children = items5;
                            tmp43 = closure_6(View, obj17);
                          }
                          cResult[34] = approximate_presence_count;
                          cResult[35] = tmp4.memberCountContainer;
                          cResult[36] = tmp4.onlineEllipse;
                          cResult[37] = tmp43;
                          tmp42 = tmp43;
                        }
                      }
                      const obj21 = { style: tmp4.guildNameDescriptionContainer, children: null };
                      const items6 = [tmp31, tmp35];
                      obj21.children = items6;
                      const tmp41 = closure_6(View, obj21);
                      cResult[30] = tmp4.guildNameDescriptionContainer;
                      cResult[31] = tmp35;
                      cResult[32] = tmp31;
                      cResult[33] = tmp41;
                      tmp38 = tmp41;
                    }
                  }
                  const obj22 = { style: tmp4.guildNameRow, children: null };
                  const items7 = [tmp24, tmp27];
                  obj22.children = items7;
                  const tmp34 = closure_6(View, obj22);
                  cResult[24] = tmp4.guildNameRow;
                  cResult[25] = tmp24;
                  cResult[26] = tmp27;
                  cResult[27] = tmp34;
                  tmp31 = tmp34;
                }
                const obj23 = { style: tmp4.guildIcon, children: tmp16 };
                const tmp23 = closure_5(View, obj23);
                cResult[17] = tmp4.guildIcon;
                cResult[18] = tmp16;
                cResult[19] = tmp23;
                tmp20 = tmp23;
              }
            }
            const obj24 = { guild: tmp11, size: trackAction(tmp2[16]).GuildIconSizes.LARGE, style: null, loadingStyle: null };
            ({ guildIconImage: obj4.style, guildIconLoading: obj4.loadingStyle } = tmp4);
            const tmp19 = closure_5(tmp5(tmp2[16]), obj24);
            cResult[13] = tmp11;
            cResult[14] = tmp4.guildIconImage;
            cResult[15] = tmp4.guildIconLoading;
            cResult[16] = tmp19;
            tmp16 = tmp19;
            const tmp5Result4 = tmp5(tmp2[16]);
          }
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === isResolving) {
            let tmp79 = cResult[9];
          }
          return tmp79;
        }
        let tmp80 = null;
        if (tmp7) {
          tmp80 = null;
          if (isResolving) {
            tmp80 = closure_5(closure_8, {});
          }
        }
        cResult[7] = tmp7;
        cResult[8] = isResolving;
        cResult[9] = tmp80;
        tmp79 = tmp80;
      }
    }
  }
  const fn = function k() {
    if (null != invite) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.JoinServer);
      closeModal();
      if (isMember) {
        guild = invite.guild;
        let id;
        if (guild != null) {
          id = guild.id;
        }
        if (null != id) {
          transitionToGuild.transitionToGuild(invite.guild.id);
          const tmp6Result = transitionToGuild;
        }
      }
      DisplayedInviteActionCreators.showInvite(invite.code);
      const tmp6Result2 = DisplayedInviteActionCreators;
    }
  };
  cResult[2] = closeModal;
  cResult[3] = invite;
  cResult[4] = isMember;
  cResult[5] = trackAction;
  cResult[6] = fn;
  tmp9 = fn;
  const obj = trackAction(invite[6]);
}) : (function GameProfileCommunityServer(closeModal) {
  ({ game, trackAction } = closeModal);
  closeModal = closeModal.closeModal;
  let invite;
  const tmp = closure_7();
  const tmp4 = closeModal(invite[10])(game, closeModal.onInviteResolved);
  invite = tmp4.invite;
  const isMember = tmp4.isMember;
  const items = [invite, isMember, trackAction, closeModal];
  const result = trackAction(invite[10]).hasGameProfileDiscordWebsite(game);
  if (null != invite) {
    if (null != invite.guild) {
      const fromInviteGuildResult = trackAction(tmp3[14]).fromInviteGuild(invite.guild);
      let approximate_member_count = invite.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = invite.guild.approximate_member_count;
      }
      let approximate_presence_count = invite.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = invite.guild.approximate_presence_count;
      }
      const obj2 = { title: null, children: null };
      const tmp5Result = trackAction(tmp3[14]);
      const intl = trackAction(tmp3[15]).intl;
      obj2.title = intl.string(trackAction(tmp3[15]).t["U2N+ci"]);
      const obj3 = { style: tmp.card, children: null };
      const obj4 = { style: tmp.guildContent, children: null };
      const obj5 = { style: tmp.guildHeaderRow, children: null };
      const obj6 = { style: tmp.guildIcon, children: null };
      const obj8 = { guild: fromInviteGuildResult, size: null, style: null, loadingStyle: null };
      const tmp2Result = tmp2(tmp3[9]);
      obj8.size = trackAction(tmp3[16]).GuildIconSizes.LARGE;
      ({ guildIconImage: obj7.style, guildIconLoading: obj7.loadingStyle } = tmp);
      obj6.children = closure_5(tmp2(tmp3[16]), obj8);
      const items1 = [closure_5(View, obj6), ];
      const obj9 = { style: tmp.guildInfo, children: null };
      const obj10 = { style: tmp.guildNameDescriptionContainer, children: null };
      const obj11 = { style: tmp.guildNameRow, children: null };
      const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: fromInviteGuildResult.name };
      const items2 = [closure_5(trackAction(tmp3[17]).Text, obj12), ];
      const obj13 = { guild: fromInviteGuildResult, size: null };
      const tmp2Result3 = tmp2(tmp3[16]);
      obj13.size = trackAction(tmp3[19]).Icon.Sizes.REFRESH_SMALL_16;
      items2[1] = closure_5(tmp2(tmp3[18]), obj13);
      obj11.children = items2;
      const items3 = [closure_6(View, obj11), ];
      const obj14 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: fromInviteGuildResult.description };
      items3[1] = closure_5(trackAction(tmp3[17]).Text, obj14);
      obj10.children = items3;
      const items4 = [closure_6(View, obj10), ];
      const obj15 = { style: tmp.memberCountsContainer, children: null };
      let tmp11Result = null;
      if (null != approximate_presence_count) {
        const obj16 = { style: tmp.memberCountContainer, children: null };
        const obj17 = { style: tmp.onlineEllipse };
        const items5 = [closure_5(View, obj17), ];
        const obj18 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = trackAction(tmp3[15]).intl;
        const obj19 = { membersOnline: approximate_presence_count };
        obj18.children = intl2.formatToPlainString(trackAction(tmp3[15]).t["LC+S+m"], obj19);
        items5[1] = closure_5(trackAction(tmp3[17]).Text, obj18);
        obj16.children = items5;
        tmp11Result = closure_6(View, obj16);
      }
      const items6 = [tmp11Result, ];
      let tmp11Result2 = null;
      if (null != approximate_member_count) {
        const obj20 = { style: tmp.memberCountContainer, children: null };
        const obj21 = { style: tmp.membersEllipse };
        const items7 = [closure_5(View, obj21), ];
        const obj22 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl3 = trackAction(tmp3[15]).intl;
        const obj23 = { count: approximate_member_count };
        obj22.children = intl3.formatToPlainString(trackAction(tmp3[15]).t.zRl6XR, obj23);
        items7[1] = closure_5(trackAction(tmp3[17]).Text, obj22);
        obj20.children = items7;
        tmp11Result2 = closure_6(View, obj20);
      }
      items6[1] = tmp11Result2;
      obj15.children = items6;
      items4[1] = closure_6(View, obj15);
      obj9.children = items4;
      items1[1] = closure_6(View, obj9);
      obj5.children = items1;
      const items8 = [closure_6(View, obj5), ];
      const intl4 = trackAction(tmp3[15]).intl;
      const string = intl4.string;
      const t = trackAction(tmp3[15]).t;
      if (isMember) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      const obj24 = { variant: "secondary", size: "md", text: stringResult, onPress: tmp7 };
      items8[1] = closure_5(trackAction(tmp3[20]).Button, obj24);
      obj4.children = items8;
      obj3.children = closure_6(View, obj4);
      obj2.children = closure_5(View, obj3);
      return closure_5(tmp2Result, obj2);
    }
  }
  let tmp17 = null;
  if (result) {
    tmp17 = null;
    if (tmp4.isResolving) {
      tmp17 = closure_5(closure_8, {});
    }
  }
  return tmp17;
});