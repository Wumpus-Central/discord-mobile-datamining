// discord_app/modules/game_profile/native/components/GameProfileGuildCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GuildBadgeV2Default from "../../../guild/native/GuildBadgeV2.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;
const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_8;
const createStyles = fn(5096);
let obj2 = {
  card: {
    borderRadius: nativeDefault.radii.lg,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  guildContent: null,
  guildHeaderRow: null,
  guildIcon: null,
  guildIconImage: null,
  guildIconLoading: null,
  guildInfo: null,
  guildNameDescriptionContainer: null,
  guildNameRow: null,
  guildName: null,
  memberCountsContainer: null,
  memberCountContainer: null,
  onlineEllipse: null,
  membersEllipse: null,
  skeletonGuildIcon: null,
  skeletonGuildInfo: null,
  skeletonGuildInfoSmall: null,
  skeletonGuildInfoLarge: null,
  skeletonGuildName: null,
  skeletonGuildDescription: null,
  skeletonMemberCounts: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.guildContent = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.guildHeaderRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let size = {
  width: sum,
  height: sum,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: nativeDefault.space.PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginLeft: -nativeDefault.space.PX_4,
};
obj2.guildIcon = size;
const size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj2.guildIconImage = size1;
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.guildIconLoading = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.guildInfo = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj7 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj2.guildNameDescriptionContainer = { gap: nativeDefault.space.PX_4 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj2.guildNameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.guildName = { flexShrink: 1 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.memberCountsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.memberCountContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.STATUS_POSITIVE,
};
obj2.onlineEllipse = size2;
const size3 = {
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_DEFAULT,
};
obj2.membersEllipse = size3;
const size4 = {
  width: sum,
  height: sum,
  borderRadius: nativeDefault.radii.md,
  borderWidth: nativeDefault.space.PX_4,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.skeletonGuildIcon = size4;
obj2.skeletonGuildInfo = { flex: 1, justifyContent: "space-between", marginBottom: 2 };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.skeletonGuildInfoSmall = { height: nativeDefault.space.PX_96 + 2 };
let obj12 = { height: nativeDefault.space.PX_96 + 2 };
obj2.skeletonGuildInfoLarge = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
const size5 = { width: "60%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
obj2.skeletonGuildName = size5;
const size6 = { width: "90%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj2.skeletonGuildDescription = size6;
const size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj2.skeletonMemberCounts = size7;
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj13 = { height: nativeDefault.space.PX_80 + nativeDefault.space.PX_8 };
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileGuildCardSkeleton(animationDelayMs) {
      const cResult = c.c(28);
      animationDelayMs = animationDelayMs.animationDelayMs;
      const tmp4 = closure_6();
      if (cResult[0] !== tmp4.skeletonGuildIcon) {
        const obj2 = { style: tmp4.skeletonGuildIcon };
        const tmp9 = React4(GameProfileSkeletonDefault, obj2);
        cResult[0] = tmp4.skeletonGuildIcon;
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      const tmp10 = useIsWindowLargeDefault() ? tmp4.skeletonGuildInfoLarge : tmp4.skeletonGuildInfoSmall;
      if (cResult[2] === tmp4.skeletonGuildInfo) {
        if (cResult[3] === tmp10) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp4.skeletonGuildName) {
          const obj3 = { style: tmp4.skeletonGuildName };
          const tmp14 = React4(GameProfileSkeletonDefault, obj3);
          cResult[5] = tmp4.skeletonGuildName;
          cResult[6] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] !== tmp4.skeletonGuildDescription) {
          const obj4 = { style: tmp4.skeletonGuildDescription };
          const tmp17 = React4(GameProfileSkeletonDefault, obj4);
          cResult[7] = tmp4.skeletonGuildDescription;
          cResult[8] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== tmp4.skeletonMemberCounts) {
          const obj5 = { style: tmp4.skeletonMemberCounts };
          const tmp20 = React4(GameProfileSkeletonDefault, obj5);
          cResult[9] = tmp4.skeletonMemberCounts;
          cResult[10] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp12) {
            if (cResult[13] === tmp15) {
              if (cResult[14] === tmp18) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === tmp4.guildHeaderRow) {
                if (cResult[17] === tmp7) {
                  if (cResult[18] === tmp21) {
                    let tmp25 = cResult[19];
                  }
                  const _Symbol = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp32 = React4(GameProfileSkeleton.GameProfileSkeletonButton, {});
                    cResult[20] = tmp32;
                    let tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[20];
                  }
                  if (cResult[21] === animationDelayMs) {
                    if (cResult[22] === tmp4.guildContent) {
                      if (cResult[23] === tmp25) {
                        let tmp33 = cResult[24];
                      }
                      if (cResult[25] === tmp4.card) {
                        if (cResult[26] === tmp33) {
                          let tmp36 = cResult[27];
                        }
                        return tmp36;
                      }
                      const obj6 = { style: tmp4.card, children: tmp33 };
                      const tmp39 = React4(View, obj6);
                      cResult[25] = tmp4.card;
                      cResult[26] = tmp33;
                      cResult[27] = tmp39;
                      tmp36 = tmp39;
                    }
                  }
                  const obj7 = { animationDelayMs, style: tmp4.guildContent, children: null };
                  const items = [tmp25, tmp30];
                  obj7.children = items;
                  const tmp35 = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj7);
                  cResult[21] = animationDelayMs;
                  cResult[22] = tmp4.guildContent;
                  cResult[23] = tmp25;
                  cResult[24] = tmp35;
                  tmp33 = tmp35;
                }
              }
              const obj8 = { style: tmp4.guildHeaderRow, children: null };
              const items1 = [tmp7, tmp21];
              obj8.children = items1;
              const tmp28 = hasOwnProperty(View, obj8);
              cResult[16] = tmp4.guildHeaderRow;
              cResult[17] = tmp7;
              cResult[18] = tmp21;
              cResult[19] = tmp28;
              tmp25 = tmp28;
            }
          }
        }
        const obj9 = { style: tmp11, children: null };
        const items2 = [tmp12, tmp15, tmp18];
        obj9.children = items2;
        const tmp24 = hasOwnProperty(View, obj9);
        cResult[11] = tmp11;
        cResult[12] = tmp12;
        cResult[13] = tmp15;
        cResult[14] = tmp18;
        cResult[15] = tmp24;
        tmp21 = tmp24;
      }
      const items3 = [tmp4.skeletonGuildInfo, tmp10];
      cResult[2] = tmp4.skeletonGuildInfo;
      cResult[3] = tmp10;
      cResult[4] = items3;
      tmp11 = items3;
      const tmp6 = useIsWindowLargeDefault();
    }
  : function GameProfileGuildCardSkeleton(animationDelayMs) {
      const tmp = closure_6();
      const obj = { style: tmp.card, children: null };
      const obj2 = { animationDelayMs: animationDelayMs.animationDelayMs, style: tmp.guildContent, children: null };
      const obj3 = { style: tmp.guildHeaderRow, children: null };
      const items = [React4(GameProfileSkeletonDefault, { style: tmp.skeletonGuildIcon })];
      const items1 = [tmp.skeletonGuildInfo];
      const obj5 = { style: items1, children: null };
      items1[1] = useIsWindowLargeDefault() ? tmp.skeletonGuildInfoLarge : tmp.skeletonGuildInfoSmall;
      const items2 = [
        React4(GameProfileSkeletonDefault, { style: tmp.skeletonGuildName }),
        React4(GameProfileSkeletonDefault, { style: tmp.skeletonGuildDescription }),
        React4(GameProfileSkeletonDefault, { style: tmp.skeletonMemberCounts }),
      ];
      obj5.children = items2;
      items[1] = hasOwnProperty(View, obj5);
      obj3.children = items;
      const items3 = [hasOwnProperty(View, obj3), React4(GameProfileSkeleton.GameProfileSkeletonButton, {})];
      obj2.children = items3;
      obj.children = hasOwnProperty(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
      return React4(View, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGuildCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileGuildCard(arg0) {
      const cResult = c.c(52);
      ({ guild, presenceCount, memberCount, buttonText, onJoin } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === guild) {
        if (cResult[1] === tmp4.guildIconImage) {
          if (cResult[2] === tmp4.guildIconLoading) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === tmp4.guildIcon) {
            if (cResult[5] === tmp5) {
              let tmp8 = cResult[6];
            }
            if (cResult[7] === guild.name) {
              if (cResult[8] === tmp4.guildName) {
                let tmp12 = cResult[9];
              }
              if (cResult[10] !== guild) {
                const obj3 = { guild, size: native.Icon.Sizes.REFRESH_SMALL_16 };
                const tmp19 = React4(GuildBadgeV2Default, obj3);
                cResult[10] = guild;
                cResult[11] = tmp19;
                let tmp15 = tmp19;
              } else {
                tmp15 = cResult[11];
              }
              if (cResult[12] === tmp4.guildNameRow) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === tmp15) {
                    let tmp20 = cResult[15];
                  }
                  if (cResult[16] !== guild.description) {
                    const obj4 = {
                      variant: "text-sm/medium",
                      color: "text-default",
                      lineClamp: 2,
                      children: guild.description,
                    };
                    const tmp26 = React4(Text_Text.Text, obj4);
                    cResult[16] = guild.description;
                    cResult[17] = tmp26;
                    let tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[17];
                  }
                  if (cResult[18] === tmp4.guildNameDescriptionContainer) {
                    if (cResult[19] === tmp20) {
                      if (cResult[20] === tmp24) {
                        let tmp27 = cResult[21];
                      }
                      if (cResult[22] === presenceCount) {
                        if (cResult[23] === tmp4.memberCountContainer) {
                          if (cResult[24] === tmp4.onlineEllipse) {
                            let tmp31 = cResult[25];
                          }
                          if (cResult[26] === memberCount) {
                            if (cResult[27] === tmp4.memberCountContainer) {
                              if (cResult[28] === tmp4.membersEllipse) {
                                let tmp36 = cResult[29];
                              }
                              if (cResult[30] === tmp4.memberCountsContainer) {
                                if (cResult[31] === tmp31) {
                                  if (cResult[32] === tmp36) {
                                    let tmp41 = cResult[33];
                                  }
                                  if (cResult[34] === tmp4.guildInfo) {
                                    if (cResult[35] === tmp41) {
                                      if (cResult[36] === tmp27) {
                                        let tmp45 = cResult[37];
                                      }
                                      if (cResult[38] === tmp4.guildHeaderRow) {
                                        if (cResult[39] === tmp45) {
                                          if (cResult[40] === tmp8) {
                                            let tmp49 = cResult[41];
                                          }
                                          if (cResult[42] === buttonText) {
                                            if (cResult[43] === onJoin) {
                                              let tmp53 = cResult[44];
                                            }
                                            if (cResult[45] === tmp4.guildContent) {
                                              if (cResult[46] === tmp49) {
                                                if (cResult[47] === tmp53) {
                                                  let tmp56 = cResult[48];
                                                }
                                                if (cResult[49] === tmp4.card) {
                                                  if (cResult[50] === tmp56) {
                                                    let tmp60 = cResult[51];
                                                  }
                                                  return tmp60;
                                                }
                                                const obj5 = { style: tmp4.card, children: tmp56 };
                                                const tmp63 = React4(View, obj5);
                                                cResult[49] = tmp4.card;
                                                cResult[50] = tmp56;
                                                cResult[51] = tmp63;
                                                tmp60 = tmp63;
                                              }
                                            }
                                            const obj6 = { style: tmp4.guildContent, children: null };
                                            const items = [tmp49, tmp53];
                                            obj6.children = items;
                                            const tmp59 = hasOwnProperty(View, obj6);
                                            cResult[45] = tmp4.guildContent;
                                            cResult[46] = tmp49;
                                            cResult[47] = tmp53;
                                            cResult[48] = tmp59;
                                            tmp56 = tmp59;
                                          }
                                          const obj7 = {
                                            variant: "secondary",
                                            size: "md",
                                            text: buttonText,
                                            onPress: onJoin,
                                          };
                                          const tmp55 = React4(components_Button_Button.Button, obj7);
                                          cResult[42] = buttonText;
                                          cResult[43] = onJoin;
                                          cResult[44] = tmp55;
                                          tmp53 = tmp55;
                                        }
                                      }
                                      const obj8 = { style: tmp4.guildHeaderRow, children: null };
                                      const items1 = [tmp8, tmp45];
                                      obj8.children = items1;
                                      const tmp52 = hasOwnProperty(View, obj8);
                                      cResult[38] = tmp4.guildHeaderRow;
                                      cResult[39] = tmp45;
                                      cResult[40] = tmp8;
                                      cResult[41] = tmp52;
                                      tmp49 = tmp52;
                                    }
                                  }
                                  const obj9 = { style: tmp4.guildInfo, children: null };
                                  const items2 = [tmp27, tmp41];
                                  obj9.children = items2;
                                  const tmp48 = hasOwnProperty(View, obj9);
                                  cResult[34] = tmp4.guildInfo;
                                  cResult[35] = tmp41;
                                  cResult[36] = tmp27;
                                  cResult[37] = tmp48;
                                  tmp45 = tmp48;
                                }
                              }
                              const obj10 = { style: tmp4.memberCountsContainer, children: null };
                              const items3 = [tmp31, tmp36];
                              obj10.children = items3;
                              const tmp44 = hasOwnProperty(View, obj10);
                              cResult[30] = tmp4.memberCountsContainer;
                              cResult[31] = tmp31;
                              cResult[32] = tmp36;
                              cResult[33] = tmp44;
                              tmp41 = tmp44;
                            }
                          }
                          let tmp37 = null;
                          if (null != memberCount) {
                            const obj11 = { style: tmp4.memberCountContainer, children: null };
                            const obj12 = { style: tmp4.membersEllipse };
                            const items4 = [React4(View, obj12)];
                            const obj13 = { variant: "text-xs/normal", color: "text-default", children: null };
                            const intl2 = util.intl;
                            const obj14 = { count: memberCount };
                            obj13.children = intl2.formatToPlainString(util.t.zRl6XR, obj14);
                            items4[1] = React4(Text_Text.Text, obj13);
                            obj11.children = items4;
                            tmp37 = hasOwnProperty(View, obj11);
                          }
                          cResult[26] = memberCount;
                          cResult[27] = tmp4.memberCountContainer;
                          cResult[28] = tmp4.membersEllipse;
                          cResult[29] = tmp37;
                          tmp36 = tmp37;
                        }
                      }
                      let tmp32 = null;
                      if (null != presenceCount) {
                        const obj15 = { style: tmp4.memberCountContainer, children: null };
                        const obj16 = { style: tmp4.onlineEllipse };
                        const items5 = [React4(View, obj16)];
                        const obj17 = { variant: "text-xs/normal", color: "text-default", children: null };
                        const intl = util.intl;
                        const obj18 = { membersOnline: presenceCount };
                        obj17.children = intl.formatToPlainString(util.t["LC+S+m"], obj18);
                        items5[1] = React4(Text_Text.Text, obj17);
                        obj15.children = items5;
                        tmp32 = hasOwnProperty(View, obj15);
                      }
                      cResult[22] = presenceCount;
                      cResult[23] = tmp4.memberCountContainer;
                      cResult[24] = tmp4.onlineEllipse;
                      cResult[25] = tmp32;
                      tmp31 = tmp32;
                    }
                  }
                  const obj19 = { style: tmp4.guildNameDescriptionContainer, children: null };
                  const items6 = [tmp20, tmp24];
                  obj19.children = items6;
                  const tmp30 = hasOwnProperty(View, obj19);
                  cResult[18] = tmp4.guildNameDescriptionContainer;
                  cResult[19] = tmp20;
                  cResult[20] = tmp24;
                  cResult[21] = tmp30;
                  tmp27 = tmp30;
                }
              }
              const obj20 = { style: tmp4.guildNameRow, children: null };
              const items7 = [tmp12, tmp15];
              obj20.children = items7;
              const tmp23 = hasOwnProperty(View, obj20);
              cResult[12] = tmp4.guildNameRow;
              cResult[13] = tmp12;
              cResult[14] = tmp15;
              cResult[15] = tmp23;
              tmp20 = tmp23;
            }
            const obj21 = {
              style: tmp4.guildName,
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 1,
              children: guild.name,
            };
            const tmp14 = React4(Text_Text.Text, obj21);
            cResult[7] = guild.name;
            cResult[8] = tmp4.guildName;
            cResult[9] = tmp14;
            tmp12 = tmp14;
          }
          const obj22 = { style: tmp4.guildIcon, children: tmp5 };
          const tmp11 = React4(View, obj22);
          cResult[4] = tmp4.guildIcon;
          cResult[5] = tmp5;
          cResult[6] = tmp11;
          tmp8 = tmp11;
        }
      }
      const obj43 = { guild, size: null, style: null, loadingStyle: null };
      obj43.size = GuildIcon.GuildIconSizes.LARGE;
      ({ guildIconImage: obj2.style, guildIconLoading: obj2.loadingStyle } = tmp4);
      const tmp7 = React4(GuildIconDefault, obj43);
      cResult[0] = guild;
      cResult[1] = tmp4.guildIconImage;
      cResult[2] = tmp4.guildIconLoading;
      cResult[3] = tmp7;
      tmp5 = tmp7;
    }
  : function GameProfileGuildCard(arg0) {
      ({ guild, presenceCount, memberCount } = arg0);
      ({ buttonText, onJoin } = arg0);
      const tmp = closure_6();
      const obj = { style: tmp.card, children: null };
      const obj2 = { style: tmp.guildContent, children: null };
      const obj3 = { style: tmp.guildHeaderRow, children: null };
      const obj4 = { style: tmp.guildIcon, children: null };
      const obj6 = { guild, size: GuildIcon.GuildIconSizes.LARGE, style: null, loadingStyle: null };
      ({ guildIconImage: obj5.style, guildIconLoading: obj5.loadingStyle } = tmp);
      obj4.children = React4(GuildIconDefault, obj6);
      const items = [React4(View, obj4)];
      const obj7 = { style: tmp.guildInfo, children: null };
      const obj8 = { style: tmp.guildNameDescriptionContainer, children: null };
      const obj9 = { style: tmp.guildNameRow, children: null };
      const items1 = [
        React4(Text_Text.Text, {
          style: tmp.guildName,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: guild.name,
        }),
      ];
      const obj11 = { guild, size: null };
      const obj10 = {
        style: tmp.guildName,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        children: guild.name,
      };
      obj11.size = native.Icon.Sizes.REFRESH_SMALL_16;
      items1[1] = React4(GuildBadgeV2Default, obj11);
      obj9.children = items1;
      const items2 = [
        hasOwnProperty(View, obj9),
        React4(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 2,
          children: guild.description,
        }),
      ];
      obj8.children = items2;
      const items3 = [hasOwnProperty(View, obj8)];
      const obj13 = { style: tmp.memberCountsContainer, children: null };
      let tmp4Result = null;
      if (null != presenceCount) {
        const obj14 = { style: tmp.memberCountContainer, children: null };
        const obj15 = { style: tmp.onlineEllipse };
        const items4 = [React4(View, obj15)];
        const obj16 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl = util.intl;
        const obj17 = { membersOnline: presenceCount };
        obj16.children = intl.formatToPlainString(util.t["LC+S+m"], obj17);
        items4[1] = React4(Text_Text.Text, obj16);
        obj14.children = items4;
        tmp4Result = hasOwnProperty(View, obj14);
      }
      const items5 = [tmp4Result];
      let tmp4Result2 = null;
      if (null != memberCount) {
        const obj18 = { style: tmp.memberCountContainer, children: null };
        const obj19 = { style: tmp.membersEllipse };
        const items6 = [React4(View, obj19)];
        const obj20 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = util.intl;
        const obj39 = { count: memberCount };
        obj20.children = intl2.formatToPlainString(util.t.zRl6XR, obj39);
        items6[1] = React4(Text_Text.Text, obj20);
        obj18.children = items6;
        tmp4Result2 = hasOwnProperty(View, obj18);
      }
      items5[1] = tmp4Result2;
      obj13.children = items5;
      items3[1] = hasOwnProperty(View, obj13);
      obj7.children = items3;
      items[1] = hasOwnProperty(View, obj7);
      obj3.children = items;
      const items7 = [
        hasOwnProperty(View, obj3),
        React4(components_Button_Button.Button, {
          variant: "secondary",
          size: "md",
          text: buttonText,
          onPress: onJoin,
        }),
      ];
      obj2.children = items7;
      obj.children = hasOwnProperty(View, obj2);
      return React4(View, obj);
    };
export const GameProfileGuildCardSkeleton = tmp5;
