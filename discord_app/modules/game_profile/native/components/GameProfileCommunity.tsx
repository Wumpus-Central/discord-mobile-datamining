// discord_app/modules/game_profile/native/components/GameProfileCommunity.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import GameProfileSection from "GameProfileSection.tsx";
import DisplayedInviteActionCreators from "../../../../actions/native/DisplayedInviteActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;
let closeModal, guild, id, showInviteResult, tmp5, tmp6Result, tmp6Result1, transitionToGuildResult;

let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = {
  card: obj2,
  guildContent: obj3,
  guildHeaderRow: obj4,
  guildIcon: size,
  guildIconImage: size1,
  guildIconLoading: obj5,
  guildInfo: obj6,
  guildNameDescriptionContainer: obj7,
  guildNameRow: obj8,
  memberCountsContainer: obj9,
  memberCountContainer: obj10,
  onlineEllipse: size2,
  membersEllipse: size3,
  skeletonGuildIcon: size4,
  skeletonGuildInfo: { flex: 1, justifyContent: "space-between", marginBottom: 2 },
  skeletonGuildInfoSmall: obj11,
  skeletonGuildInfoLarge: obj12,
  skeletonGuildName: size5,
  skeletonGuildDescription: size6,
  skeletonMemberCounts: size7,
};
obj2 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
size = {
  width: sum,
  height: sum,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: nativeDefault.space.PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginLeft: -nativeDefault.space.PX_4,
};
size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size2 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
};
size3 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_DEFAULT,
};
size4 = {
  width: sum,
  height: sum,
  borderRadius: nativeDefault.radii.md,
  borderWidth: nativeDefault.space.PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj11 = { height: nativeDefault.space.PX_96 + 2 };
obj12 = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
size5 = { width: "60%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
size6 = { width: "90%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let items;
        let items1;
        let items2;
        let obj7;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(27);
        const tmp4 = closure_7();
        const tmp6 = useIsWindowLargeDefault();
        const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
        if (cResult[0] !== tmp4.skeletonGuildIcon) {
          const obj2 = { style: tmp4.skeletonGuildIcon };
          const tmp10 = hasOwnProperty(GameProfileSkeletonDefault, obj2);
          cResult[0] = tmp4.skeletonGuildIcon;
          cResult[1] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[1];
        }
        const tmp11 = tmp6 ? tmp4.skeletonGuildInfoLarge : tmp4.skeletonGuildInfoSmall;
        if (cResult[2] === tmp4.skeletonGuildInfo) {
          let tmp12;
          let tmp13;
          let tmp16;
          let tmp19;
          if (cResult[3] === tmp11) {
            tmp12 = cResult[4];
          }
          if (cResult[5] !== tmp4.skeletonGuildName) {
            const obj3 = { style: tmp4.skeletonGuildName };
            const tmp15 = hasOwnProperty(GameProfileSkeletonDefault, obj3);
            cResult[5] = tmp4.skeletonGuildName;
            cResult[6] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[6];
          }
          if (cResult[7] !== tmp4.skeletonGuildDescription) {
            const obj4 = { style: tmp4.skeletonGuildDescription };
            const tmp18 = hasOwnProperty(GameProfileSkeletonDefault, obj4);
            cResult[7] = tmp4.skeletonGuildDescription;
            cResult[8] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] !== tmp4.skeletonMemberCounts) {
            const obj5 = { style: tmp4.skeletonMemberCounts };
            const tmp21 = hasOwnProperty(GameProfileSkeletonDefault, obj5);
            cResult[9] = tmp4.skeletonMemberCounts;
            cResult[10] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp13) {
              if (cResult[13] === tmp16) {
                let tmp22;
                if (cResult[14] === tmp19) {
                  tmp22 = cResult[15];
                }
                if (cResult[16] === tmp4.guildHeaderRow) {
                  if (cResult[17] === tmp8) {
                    let tmp26;
                    let tmp31;
                    if (cResult[18] === tmp22) {
                      tmp26 = cResult[19];
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp33 = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonButton, {});
                      cResult[20] = tmp33;
                      tmp31 = tmp33;
                    } else {
                      tmp31 = cResult[20];
                    }
                    if (cResult[21] === tmp4.guildContent) {
                      let tmp34;
                      if (cResult[22] === tmp26) {
                        tmp34 = cResult[23];
                      }
                      if (cResult[24] === tmp4.card) {
                        let tmp37;
                        if (cResult[25] === tmp34) {
                          tmp37 = cResult[26];
                        }
                        return tmp37;
                      }
                      const obj6 = {
                        animationDelayMs: result,
                        showViewAllSkeleton: false,
                        skeletonTitleWidth: 80,
                        children: hasOwnProperty(View, obj7),
                      };
                      obj7 = { style: tmp4.card, children: tmp34 };
                      const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
                      const tmp40 = hasOwnProperty(GameProfileSectionSkeleton, obj6);
                      cResult[24] = tmp4.card;
                      cResult[25] = tmp34;
                      cResult[26] = tmp40;
                      tmp37 = tmp40;
                    }
                    const obj8 = { animationDelayMs: result, style: tmp4.guildContent, children: items };
                    items = [tmp26, tmp31];
                    const tmp36 = metroRequire(GameProfileSkeleton.GameProfileSkeletonContainer, obj8);
                    cResult[21] = tmp4.guildContent;
                    cResult[22] = tmp26;
                    cResult[23] = tmp36;
                    tmp34 = tmp36;
                  }
                }
                const obj9 = { style: tmp4.guildHeaderRow, children: items1 };
                items1 = [tmp8, tmp22];
                const tmp29 = metroRequire(View, obj9);
                cResult[16] = tmp4.guildHeaderRow;
                cResult[17] = tmp8;
                cResult[18] = tmp22;
                cResult[19] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
          const obj10 = { style: tmp12, children: items2 };
          items2 = [tmp13, tmp16, tmp19];
          const tmp25 = metroRequire(View, obj10);
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
      }
    : () => {
        let GameProfileSkeletonContainer;
        let items;
        let items2;
        let items3;
        let obj2;
        let obj3;
        const tmp = closure_7();
        const tmp4 = useIsWindowLargeDefault();
        const result = 2 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS;
        const obj = {
          animationDelayMs: result,
          showViewAllSkeleton: false,
          skeletonTitleWidth: 80,
          children: hasOwnProperty(View, obj2),
        };
        obj2 = { style: tmp.card, children: metroRequire(GameProfileSkeletonContainer, obj3) };
        const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
        obj3 = { animationDelayMs: result, style: tmp.guildContent, children: items3 };
        const obj4 = { style: tmp.guildHeaderRow, children: items };
        GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
        items = [,];
        const obj5 = { style: tmp.skeletonGuildIcon };
        items[0] = hasOwnProperty(GameProfileSkeletonDefault, obj5);
        const items1 = [tmp.skeletonGuildInfo];
        const obj6 = { style: items1, children: items2 };
        items1[1] = tmp4 ? tmp.skeletonGuildInfoLarge : tmp.skeletonGuildInfoSmall;
        items2 = [, ,];
        const obj7 = { style: tmp.skeletonGuildName };
        items2[0] = hasOwnProperty(GameProfileSkeletonDefault, obj7);
        const obj8 = { style: tmp.skeletonGuildDescription };
        items2[1] = hasOwnProperty(GameProfileSkeletonDefault, obj8);
        const obj9 = { style: tmp.skeletonMemberCounts };
        items2[2] = hasOwnProperty(GameProfileSkeletonDefault, obj9);
        items[1] = metroRequire(View, obj6);
        items3 = [metroRequire(View, obj4), hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonButton, {})];
        return hasOwnProperty(GameProfileSectionSkeleton, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (closeModal) => {
      let game;
      let intl2;
      let intl3;
      let invite;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj16;
      let obj20;
      let obj7;
      let tmp7;
      let trackAction;
      const obj = trackAction(invite[6]);
      const cResult = obj.c(66);
      ({ game, trackAction } = closeModal);
      closeModal = closeModal.closeModal;
      const onInviteResolved = closeModal.onInviteResolved;
      const tmp4 = closure_7();
      const tmp6 = closeModal(invite[10])(game, onInviteResolved);
      invite = tmp6.invite;
      const isMember = tmp6.isMember;
      const isResolving = tmp6.isResolving;
      if (cResult[0] !== game) {
        const tmpResult = trackAction(invite[10]);
        const result = tmpResult.hasGameProfileDiscordWebsite(game);
        cResult[0] = game;
        cResult[1] = result;
        tmp7 = result;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === closeModal) {
        if (cResult[3] === invite) {
          if (cResult[4] === isMember) {
            let tmp9;
            if (cResult[5] === trackAction) {
              tmp9 = cResult[6];
            }
            if (null != invite) {
              if (null != invite.guild) {
                let tmp11;
                let tmp14;
                if (cResult[10] !== invite.guild) {
                  const tmpResult2 = trackAction(invite[14]);
                  const fromInviteGuildResult = tmpResult2.fromInviteGuild(invite.guild);
                  cResult[10] = invite.guild;
                  cResult[11] = fromInviteGuildResult;
                  tmp11 = fromInviteGuildResult;
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
                  const stringResult = intl.string(trackAction(invite[15]).t["U2N+ci"]);
                  cResult[12] = stringResult;
                  tmp14 = stringResult;
                } else {
                  tmp14 = cResult[12];
                }
                if (cResult[13] === tmp11) {
                  if (cResult[14] === tmp4.guildIconImage) {
                    let tmp16;
                    if (cResult[15] === tmp4.guildIconLoading) {
                      tmp16 = cResult[16];
                    }
                    if (cResult[17] === tmp4.guildIcon) {
                      let tmp20;
                      let tmp24;
                      let tmp27;
                      if (cResult[18] === tmp16) {
                        tmp20 = cResult[19];
                      }
                      if (cResult[20] !== tmp11.name) {
                        const obj2 = {
                          variant: "text-md/semibold",
                          color: "mobile-text-heading-primary",
                          lineClamp: 1,
                          children: tmp11.name,
                        };
                        const tmp26 = closure_5(trackAction(invite[17]).Text, obj2);
                        cResult[20] = tmp11.name;
                        cResult[21] = tmp26;
                        tmp24 = tmp26;
                      } else {
                        tmp24 = cResult[21];
                      }
                      if (cResult[22] !== tmp11) {
                        const obj3 = { guild: tmp11, size: trackAction(invite[19]).Icon.Sizes.REFRESH_SMALL_16 };
                        const tmp5Result = closeModal(invite[18]);
                        const tmp30 = closure_5(tmp5Result, obj3);
                        cResult[22] = tmp11;
                        cResult[23] = tmp30;
                        tmp27 = tmp30;
                      } else {
                        tmp27 = cResult[23];
                      }
                      if (cResult[24] === tmp4.guildNameRow) {
                        if (cResult[25] === tmp24) {
                          let tmp31;
                          let tmp35;
                          if (cResult[26] === tmp27) {
                            tmp31 = cResult[27];
                          }
                          if (cResult[28] !== tmp11.description) {
                            const obj5 = {
                              variant: "text-sm/medium",
                              color: "text-default",
                              lineClamp: 2,
                              children: tmp11.description,
                            };
                            const tmp37 = closure_5(trackAction(invite[17]).Text, obj5);
                            cResult[28] = tmp11.description;
                            cResult[29] = tmp37;
                            tmp35 = tmp37;
                          } else {
                            tmp35 = cResult[29];
                          }
                          if (cResult[30] === tmp4.guildNameDescriptionContainer) {
                            if (cResult[31] === tmp35) {
                              let tmp38;
                              if (cResult[32] === tmp31) {
                                tmp38 = cResult[33];
                              }
                              if (cResult[34] === approximate_presence_count) {
                                if (cResult[35] === tmp4.memberCountContainer) {
                                  let tmp42;
                                  if (cResult[36] === tmp4.onlineEllipse) {
                                    tmp42 = cResult[37];
                                  }
                                  if (cResult[38] === approximate_member_count) {
                                    if (cResult[39] === tmp4.memberCountContainer) {
                                      let tmp47;
                                      if (cResult[40] === tmp4.membersEllipse) {
                                        tmp47 = cResult[41];
                                      }
                                      if (cResult[42] === tmp4.memberCountsContainer) {
                                        if (cResult[43] === tmp42) {
                                          let tmp52;
                                          if (cResult[44] === tmp47) {
                                            tmp52 = cResult[45];
                                          }
                                          if (cResult[46] === tmp4.guildInfo) {
                                            if (cResult[47] === tmp38) {
                                              let tmp56;
                                              if (cResult[48] === tmp52) {
                                                tmp56 = cResult[49];
                                              }
                                              if (cResult[50] === tmp4.guildHeaderRow) {
                                                if (cResult[51] === tmp56) {
                                                  let tmp60;
                                                  let tmp64;
                                                  if (cResult[52] === tmp20) {
                                                    tmp60 = cResult[53];
                                                  }
                                                  if (cResult[54] !== isMember) {
                                                    let stringResult1;
                                                    const intl4 = trackAction(tmp2[15]).intl;
                                                    const string = intl4.string;
                                                    const t = trackAction(tmp2[15]).t;
                                                    if (isMember) {
                                                      stringResult1 = string(t.cEnaWx);
                                                    } else {
                                                      stringResult1 = string(t.XpeFYr);
                                                    }
                                                    cResult[54] = isMember;
                                                    cResult[55] = stringResult1;
                                                    tmp64 = stringResult1;
                                                  } else {
                                                    tmp64 = cResult[55];
                                                  }
                                                  if (cResult[56] === tmp9) {
                                                    let tmp66;
                                                    if (cResult[57] === tmp64) {
                                                      tmp66 = cResult[58];
                                                    }
                                                    if (cResult[59] === tmp4.guildContent) {
                                                      if (cResult[60] === tmp60) {
                                                        let tmp69;
                                                        if (cResult[61] === tmp66) {
                                                          tmp69 = cResult[62];
                                                        }
                                                        if (cResult[63] === tmp4.card) {
                                                          let tmp73;
                                                          if (cResult[64] === tmp69) {
                                                            tmp73 = cResult[65];
                                                          }
                                                          return tmp73;
                                                        }
                                                        const obj6 = { title: tmp14, children: closure_5(View, obj7) };
                                                        obj7 = { style: tmp4.card, children: tmp69 };
                                                        const tmp5Result3 = closeModal(invite[9]);
                                                        const tmp77 = closure_5(tmp5Result3, obj6);
                                                        cResult[63] = tmp4.card;
                                                        cResult[64] = tmp69;
                                                        cResult[65] = tmp77;
                                                        tmp73 = tmp77;
                                                      }
                                                    }
                                                    const obj8 = { style: tmp4.guildContent, children: items };
                                                    items = [tmp60, tmp66];
                                                    const tmp72 = closure_6(View, obj8);
                                                    cResult[59] = tmp4.guildContent;
                                                    cResult[60] = tmp60;
                                                    cResult[61] = tmp66;
                                                    cResult[62] = tmp72;
                                                    tmp69 = tmp72;
                                                  }
                                                  const obj9 = {
                                                    variant: "secondary",
                                                    size: "md",
                                                    text: tmp64,
                                                    onPress: tmp9,
                                                  };
                                                  const tmp68 = closure_5(trackAction(invite[20]).Button, obj9);
                                                  cResult[56] = tmp9;
                                                  cResult[57] = tmp64;
                                                  cResult[58] = tmp68;
                                                  tmp66 = tmp68;
                                                }
                                              }
                                              const obj10 = { style: tmp4.guildHeaderRow, children: items1 };
                                              items1 = [tmp20, tmp56];
                                              const tmp63 = closure_6(View, obj10);
                                              cResult[50] = tmp4.guildHeaderRow;
                                              cResult[51] = tmp56;
                                              cResult[52] = tmp20;
                                              cResult[53] = tmp63;
                                              tmp60 = tmp63;
                                            }
                                          }
                                          const obj11 = { style: tmp4.guildInfo, children: items2 };
                                          items2 = [tmp38, tmp52];
                                          const tmp59 = closure_6(View, obj11);
                                          cResult[46] = tmp4.guildInfo;
                                          cResult[47] = tmp38;
                                          cResult[48] = tmp52;
                                          cResult[49] = tmp59;
                                          tmp56 = tmp59;
                                        }
                                      }
                                      const obj12 = { style: tmp4.memberCountsContainer, children: items3 };
                                      items3 = [tmp42, tmp47];
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
                                    const obj13 = { style: tmp4.memberCountContainer, children: items4 };
                                    const obj14 = { style: tmp4.membersEllipse };
                                    items4 = [closure_5(View, obj14)];
                                    const obj15 = {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: intl3.formatToPlainString(trackAction(invite[15]).t.zRl6XR, obj16),
                                    };
                                    const Text2 = trackAction(tmp2[17]).Text;
                                    intl3 = trackAction(tmp2[15]).intl;
                                    obj16 = { count: approximate_member_count };
                                    items4[1] = closure_5(Text2, obj15);
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
                                const obj17 = { style: tmp4.memberCountContainer, children: items5 };
                                const obj18 = { style: tmp4.onlineEllipse };
                                items5 = [closure_5(View, obj18)];
                                const obj19 = {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: intl2.formatToPlainString(trackAction(invite[15]).t["LC+S+m"], obj20),
                                };
                                const Text = trackAction(tmp2[17]).Text;
                                intl2 = trackAction(tmp2[15]).intl;
                                obj20 = { membersOnline: approximate_presence_count };
                                items5[1] = closure_5(Text, obj19);
                                tmp43 = closure_6(View, obj17);
                              }
                              cResult[34] = approximate_presence_count;
                              cResult[35] = tmp4.memberCountContainer;
                              cResult[36] = tmp4.onlineEllipse;
                              cResult[37] = tmp43;
                              tmp42 = tmp43;
                            }
                          }
                          const obj21 = { style: tmp4.guildNameDescriptionContainer, children: items6 };
                          items6 = [tmp31, tmp35];
                          const tmp41 = closure_6(View, obj21);
                          cResult[30] = tmp4.guildNameDescriptionContainer;
                          cResult[31] = tmp35;
                          cResult[32] = tmp31;
                          cResult[33] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                      const obj22 = { style: tmp4.guildNameRow, children: items7 };
                      items7 = [tmp24, tmp27];
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
                const obj24 = {
                  guild: tmp11,
                  size: trackAction(invite[16]).GuildIconSizes.LARGE,
                  style: null,
                  loadingStyle: null,
                };
                ({ guildIconImage: obj4.style, guildIconLoading: obj4.loadingStyle } = tmp4);
                const tmp5Result4 = closeModal(invite[16]);
                const tmp19 = closure_5(tmp5Result4, obj24);
                cResult[13] = tmp11;
                cResult[14] = tmp4.guildIconImage;
                class G {
                  constructor() {
                    tmp = invite;
                    if (null != invite) {
                      tmp5 = trackAction;
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      tmp8 = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.JoinServer);
                      tmp9 = closeModal;
                      tmp10 = closeModal();
                      tmp11 = isMember;
                      if (tmp11) {
                        guild = tmp.guild;
                        id = undefined;
                        if (guild != null) {
                          id = guild.id;
                        }
                        if (null != id) {
                          tmp6Result = tmp6(tmp7[12]);
                          transitionToGuildResult = tmp6Result.transitionToGuild(tmp.guild.id);
                        }
                      }
                      tmp6Result1 = tmp6(tmp7[13]);
                      showInviteResult = tmp6Result1.showInvite(tmp.code);
                    }
                    return;
                  }
                }
                cResult[16] = tmp19;
                tmp16 = tmp19;
              }
            }
            if (cResult[7] === tmp7) {
              let tmp78;
              if (cResult[8] === isResolving) {
                tmp78 = cResult[9];
              }
              return tmp78;
            }
            let tmp79 = null;
            if (tmp7) {
              tmp79 = null;
              if (isResolving) {
                tmp79 = closure_5(closure_8, {});
              }
            }
            cResult[7] = tmp7;
            cResult[8] = isResolving;
            cResult[9] = tmp79;
            tmp78 = tmp79;
          }
        }
      }
      class G {
        constructor() {
          tmp = invite;
          if (null != invite) {
            tmp5 = trackAction;
            tmp6 = closure_0;
            tmp7 = closure_2;
            tmp8 = trackAction(closure_0(closure_2[11]).GameProfileTrackActionActions.JoinServer);
            tmp9 = closeModal;
            tmp10 = closeModal();
            tmp11 = isMember;
            if (tmp11) {
              guild = tmp.guild;
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              if (null != id) {
                tmp6Result = tmp6(tmp7[12]);
                transitionToGuildResult = tmp6Result.transitionToGuild(tmp.guild.id);
              }
            }
            tmp6Result1 = tmp6(tmp7[13]);
            showInviteResult = tmp6Result1.showInvite(tmp.code);
          }
          return;
        }
      }
      cResult[2] = closeModal;
      cResult[3] = invite;
      cResult[4] = isMember;
      cResult[5] = trackAction;
      cResult[6] = G;
      tmp9 = G;
    }
  : (closeModal) => {
      let game;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj19;
      let obj23;
      let obj3;
      let obj4;
      let obj8;
      let tmp2Result3;
      let trackAction;
      ({ game, trackAction } = closeModal);
      closeModal = closeModal.closeModal;
      let invite;
      const onInviteResolved = closeModal.onInviteResolved;
      const tmp = closure_7();
      const tmp4 = closeModal(invite[10])(game, onInviteResolved);
      invite = tmp4.invite;
      const isMember = tmp4.isMember;
      const isResolving = tmp4.isResolving;
      const items = [invite, isMember, trackAction, closeModal];
      const obj = trackAction(invite[10]);
      const result = obj.hasGameProfileDiscordWebsite(game);
      if (null != invite) {
        if (null != invite.guild) {
          let stringResult;
          const tmp5Result = trackAction(invite[14]);
          const fromInviteGuildResult = tmp5Result.fromInviteGuild(invite.guild);
          let approximate_member_count = invite.approximate_member_count;
          if (approximate_member_count == null) {
            approximate_member_count = invite.guild.approximate_member_count;
          }
          let approximate_presence_count = invite.approximate_presence_count;
          if (approximate_presence_count == null) {
            approximate_presence_count = invite.guild.approximate_presence_count;
          }
          const obj2 = { title: intl.string(trackAction(invite[15]).t["U2N+ci"]), children: closure_5(View, obj3) };
          const tmp2Result = closeModal(invite[9]);
          intl = trackAction(tmp3[15]).intl;
          obj3 = { style: tmp.card, children: closure_6(View, obj4) };
          obj4 = { style: tmp.guildContent, children: items8 };
          const obj5 = { style: tmp.guildHeaderRow, children: items1 };
          const obj6 = { style: tmp.guildIcon, children: closure_5(tmp2Result3, obj8) };
          obj8 = {
            guild: fromInviteGuildResult,
            size: trackAction(invite[16]).GuildIconSizes.LARGE,
            style: null,
            loadingStyle: null,
          };
          ({ guildIconImage: obj7.style, guildIconLoading: obj7.loadingStyle } = tmp);
          tmp2Result3 = closeModal(invite[16]);
          items1 = [closure_5(View, obj6)];
          const obj10 = { style: tmp.guildNameDescriptionContainer, children: items3 };
          const obj11 = { style: tmp.guildNameRow, children: items2 };
          const obj12 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            children: fromInviteGuildResult.name,
          };
          const obj9 = { style: tmp.guildInfo, children: items4 };
          items2 = [closure_5(trackAction(invite[17]).Text, obj12)];
          const obj13 = { guild: fromInviteGuildResult, size: trackAction(invite[19]).Icon.Sizes.REFRESH_SMALL_16 };
          const tmp2Result4 = closeModal(invite[18]);
          items2[1] = closure_5(tmp2Result4, obj13);
          items3 = [closure_6(View, obj11)];
          const obj14 = {
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: 2,
            children: fromInviteGuildResult.description,
          };
          items3[1] = closure_5(trackAction(invite[17]).Text, obj14);
          items4 = [closure_6(View, obj10)];
          let tmp11Result = null;
          const obj15 = { style: tmp.memberCountsContainer, children: items6 };
          if (null != approximate_presence_count) {
            const obj16 = { style: tmp.memberCountContainer, children: items5 };
            const obj17 = { style: tmp.onlineEllipse };
            items5 = [closure_5(View, obj17)];
            const obj18 = {
              variant: "text-xs/normal",
              color: "text-default",
              children: intl2.formatToPlainString(trackAction(invite[15]).t["LC+S+m"], obj19),
            };
            const Text = trackAction(tmp3[17]).Text;
            intl2 = trackAction(tmp3[15]).intl;
            obj19 = { membersOnline: approximate_presence_count };
            items5[1] = closure_5(Text, obj18);
            tmp11Result = closure_6(View, obj16);
          }
          items6 = [tmp11Result];
          let tmp11Result2 = null;
          if (null != approximate_member_count) {
            const obj20 = { style: tmp.memberCountContainer, children: items7 };
            const obj21 = { style: tmp.membersEllipse };
            items7 = [closure_5(View, obj21)];
            const obj22 = {
              variant: "text-xs/normal",
              color: "text-default",
              children: intl3.formatToPlainString(trackAction(invite[15]).t.zRl6XR, obj23),
            };
            const Text2 = trackAction(tmp3[17]).Text;
            intl3 = trackAction(tmp3[15]).intl;
            obj23 = { count: approximate_member_count };
            items7[1] = closure_5(Text2, obj22);
            tmp11Result2 = closure_6(View, obj20);
          }
          items6[1] = tmp11Result2;
          items4[1] = closure_6(View, obj15);
          items1[1] = closure_6(View, obj9);
          items8 = [closure_6(View, obj5)];
          const Button = trackAction(tmp3[20]).Button;
          const intl4 = trackAction(tmp3[15]).intl;
          const string = intl4.string;
          const t = trackAction(tmp3[15]).t;
          if (isMember) {
            stringResult = string(t.cEnaWx);
          } else {
            stringResult = string(t.XpeFYr);
          }
          const obj24 = { variant: "secondary", size: "md", text: stringResult, onPress: tmp7 };
          items8[1] = closure_5(Button, obj24);
          return closure_5(tmp2Result, obj2);
        }
      }
      let tmp17 = null;
      if (result) {
        tmp17 = null;
        if (isResolving) {
          tmp17 = closure_5(closure_8, {});
        }
      }
      return tmp17;
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default tmp6;
