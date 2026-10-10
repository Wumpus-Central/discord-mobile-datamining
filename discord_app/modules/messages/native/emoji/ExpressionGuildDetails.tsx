// discord_app/modules/messages/native/emoji/ExpressionGuildDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import guild_GuildUtils from "../../../guild/GuildUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildBadgeDefault = tmp10(6162);
require = fn;
const View = fn(17).View;
let closure_4 = fn(6159).ExpressionSourceGuildRecord;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  guildDetailsContainer: { flexDirection: "column" },
  guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" },
  guildIcon: null,
  guildNameAndOnlineMembers: null,
  guildNameWrapper: null,
  guildPartnerIcon: null,
  guildDescriptionSection: null,
  dotSeparator: null,
  joinGuildButton: null,
};
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, marginRight: 12 };
obj2.guildIcon = size;
obj2.guildNameAndOnlineMembers = { flexDirection: "column" };
obj2.guildNameWrapper = { flexDirection: "row", alignItems: "center", marginRight: 32 };
obj2.guildPartnerIcon = { marginRight: 8 };
obj2.guildDescriptionSection = { flexDirection: "row", alignItems: "center", marginTop: 4 };
const size1 = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  marginRight: 8,
  marginLeft: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.dotSeparator = size1;
obj2.joinGuildButton = {
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  paddingHorizontal: 4,
  paddingBottom: 2,
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = require("c").c(49);
      guild = guild.guild;
      ({ title, hasJoinedGuild } = guild);
      const showingJoinGuildCta = guild.showingJoinGuildCta;
      const tmp4 = closure_8();
      closure_4 = tmp4;
      if (cResult[0] !== guild) {
        const fromGuildType = closure_4.createFromGuildType(guild);
        _require = fromGuildType;
        const isDiscoverableResult = fromGuildType.isDiscoverable();
        cResult[0] = guild;
        cResult[1] = fromGuildType;
        cResult[2] = isDiscoverableResult;
        let tmp6 = isDiscoverableResult;
      } else {
        _require = cResult[1];
        tmp6 = cResult[2];
      }
      closure_5 = tmp6;
      if (!tmp6) {
        if (!hasJoinedGuild) {
          if (cResult[6] === guild.icon) {
            if (cResult[7] === guild.id) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              if (cResult[10] === tmp4.guildIcon) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === tmp5.presenceCount) {
                if (cResult[13] === guild.id) {
                  if (cResult[14] === hasJoinedGuild) {
                    if (cResult[15] === showingJoinGuildCta) {
                      if (cResult[16] === tmp4.dotSeparator) {
                        if (cResult[17] === tmp4.joinGuildButton) {
                          let tmp20 = cResult[18];
                        }
                        closure_6 = tmp20;
                        if (cResult[19] === tmp5.presenceCount) {
                          if (cResult[20] === tmp6) {
                            if (cResult[21] === tmp20) {
                              if (cResult[22] === tmp4.guildDescriptionSection) {
                                let tmp21 = cResult[23];
                              }
                              if (cResult[24] !== title) {
                                let obj2 = { variant: "eyebrow", color: "text-default", children: title };
                                const tmp24 = closure_5(tmp(hasJoinedGuild[11]).Text, obj2);
                                cResult[24] = title;
                                cResult[25] = tmp24;
                                let tmp22 = tmp24;
                              } else {
                                tmp22 = cResult[25];
                              }
                              if (cResult[26] === guild) {
                                if (cResult[27] === tmp4.guildPartnerIcon) {
                                  let tmp27 = cResult[28];
                                }
                                if (cResult[29] !== guild.name) {
                                  let obj5 = {
                                    variant: "text-md/bold",
                                    color: "mobile-text-heading-primary",
                                    children: guild.name,
                                  };
                                  const tmp34 = closure_5(tmp(hasJoinedGuild[11]).Text, obj5);
                                  cResult[29] = guild.name;
                                  cResult[30] = tmp34;
                                  let tmp32 = tmp34;
                                } else {
                                  tmp32 = cResult[30];
                                }
                                if (cResult[31] === tmp4.guildNameWrapper) {
                                  if (cResult[32] === tmp32) {
                                    if (cResult[33] === tmp27) {
                                      let tmp35 = cResult[34];
                                    }
                                    if (cResult[35] !== tmp21) {
                                      const tmp21Result = tmp21();
                                      cResult[35] = tmp21;
                                      cResult[36] = tmp21Result;
                                      let tmp39 = tmp21Result;
                                    } else {
                                      tmp39 = cResult[36];
                                    }
                                    if (cResult[37] === tmp4.guildNameAndOnlineMembers) {
                                      if (cResult[38] === tmp35) {
                                        if (cResult[39] === tmp39) {
                                          let tmp41 = cResult[40];
                                        }
                                        if (cResult[41] === tmp12) {
                                          if (cResult[42] === tmp4.guildDetailsContent) {
                                            if (cResult[43] === tmp41) {
                                              let tmp45 = cResult[44];
                                            }
                                            if (cResult[45] === tmp4.guildDetailsContainer) {
                                              if (cResult[46] === tmp45) {
                                                if (cResult[47] === tmp22) {
                                                  let tmp49 = cResult[48];
                                                }
                                                return tmp49;
                                              }
                                            }
                                            let obj6 = { style: tmp4.guildDetailsContainer, children: null };
                                            let items = [tmp22, tmp45];
                                            obj6.children = items;
                                            const tmp52 = closure_7(showingJoinGuildCta, obj6);
                                            cResult[45] = tmp4.guildDetailsContainer;
                                            cResult[46] = tmp45;
                                            cResult[47] = tmp22;
                                            cResult[48] = tmp52;
                                            tmp49 = tmp52;
                                          }
                                        }
                                        let obj7 = { style: tmp25, children: null };
                                        const items1 = [tmp12, tmp41];
                                        obj7.children = items1;
                                        const tmp48 = closure_7(showingJoinGuildCta, obj7);
                                        cResult[41] = tmp12;
                                        cResult[42] = tmp4.guildDetailsContent;
                                        cResult[43] = tmp41;
                                        cResult[44] = tmp48;
                                        tmp45 = tmp48;
                                      }
                                    }
                                    const obj8 = { style: tmp26, children: null };
                                    const items2 = [tmp35, tmp39];
                                    obj8.children = items2;
                                    const tmp44 = closure_7(showingJoinGuildCta, obj8);
                                    cResult[37] = tmp4.guildNameAndOnlineMembers;
                                    cResult[38] = tmp35;
                                    cResult[39] = tmp39;
                                    cResult[40] = tmp44;
                                    tmp41 = tmp44;
                                  }
                                }
                                const obj9 = { style: tmp4.guildNameWrapper, children: null };
                                const items3 = [tmp27, tmp32];
                                obj9.children = items3;
                                const tmp38 = closure_7(showingJoinGuildCta, obj9);
                                cResult[31] = tmp4.guildNameWrapper;
                                cResult[32] = tmp32;
                                cResult[33] = tmp27;
                                cResult[34] = tmp38;
                                tmp35 = tmp38;
                              }
                              const obj10 = {
                                guild,
                                style: tmp4.guildPartnerIcon,
                                size: tmp(hasJoinedGuild[16]).Icon.Sizes.REFRESH_SMALL_16,
                                disableColor: true,
                              };
                              const tmp31 = closure_5(guild(hasJoinedGuild[15]), obj10);
                              cResult[26] = guild;
                              cResult[27] = tmp4.guildPartnerIcon;
                              cResult[28] = tmp31;
                              tmp27 = tmp31;
                              const tmp30 = guild(hasJoinedGuild[15]);
                            }
                          }
                        }
                        function renderGuildDescriptionSection() {
                          const obj = { style: closure_4.guildDescriptionSection, children: null };
                          if (closure_5) {
                            if (null != closure_0.presenceCount) {
                              let tmpResult = closure_6();
                            }
                            obj.children = tmpResult;
                            return hasOwnProperty(tmp2, obj);
                          }
                          const obj2 = { variant: "text-xs/medium", color: "text-default", children: null };
                          const intl = util.intl;
                          obj2.children = intl.string(util.t.H29mx4);
                          tmpResult = hasOwnProperty(Text_Text.Text, obj2);
                        }
                        cResult[19] = tmp5.presenceCount;
                        cResult[20] = tmp6;
                        cResult[21] = tmp20;
                        cResult[22] = tmp4.guildDescriptionSection;
                        cResult[23] = renderGuildDescriptionSection;
                        tmp21 = renderGuildDescriptionSection;
                      }
                    }
                  }
                }
              }
              const fn = function f() {
                const obj = { variant: "text-xs/medium", color: "text-default", children: null };
                const intl = util.intl;
                obj.children = intl.format(util.t["LC+S+m"], { membersOnline: closure_0.presenceCount });
                const items = [
                  hasOwnProperty(Text_Text.Text, obj),
                  hasOwnProperty(View, { style: closure_4.dotSeparator }),
                ];
                if (!hasJoinedGuild) {
                  if (!showingJoinGuildCta) {
                    const obj4 = {
                      style: closure_4.joinGuildButton,
                      onPress() {
                        return closure_0(hasJoinedGuild[14]).handleJoinGuild(id.id);
                      },
                      children: null,
                    };
                    const obj5 = { variant: "text-xs/medium", color: "text-default", children: null };
                    const intl2 = util.intl;
                    obj5.children = intl2.string(util.t.riu2R5);
                    obj4.children = hasOwnProperty(Text_Text.Text, obj5);
                    let tmp3Result = hasOwnProperty(Pressables.PressableOpacity, obj4);
                  }
                  const obj6 = { children: null };
                  items[2] = tmp3Result;
                  obj6.children = items;
                  return React5(timestampProducer, obj6);
                }
                const obj7 = { variant: "text-xs/medium", color: "text-default", children: null };
                const intl3 = util.intl;
                obj7.children = intl3.string(util.t.inyJqO);
                tmp3Result = hasOwnProperty(Text_Text.Text, obj7);
                const obj2 = { membersOnline: closure_0.presenceCount };
                const obj3 = { style: closure_4.dotSeparator };
              };
              cResult[12] = tmp5.presenceCount;
              cResult[13] = guild.id;
              cResult[14] = hasJoinedGuild;
              cResult[15] = showingJoinGuildCta;
              cResult[16] = tmp4.dotSeparator;
              cResult[17] = tmp4.joinGuildButton;
              cResult[18] = fn;
              tmp20 = fn;
            }
            const obj11 = { style: tmp4.guildIcon, source: tmp9 };
            const tmp15 = closure_5(guild(hasJoinedGuild[10]), obj11);
            cResult[9] = tmp9;
            cResult[10] = tmp4.guildIcon;
            cResult[11] = tmp15;
            tmp12 = tmp15;
          }
          ({ id: obj4.id, icon: obj4.icon } = guild);
          const guildIconSource = guild(hasJoinedGuild[9]).getGuildIconSource({
            id: null,
            icon: null,
            canAnimate: true,
            size: 32,
          });
          cResult[6] = guild.icon;
          cResult[7] = guild.id;
          cResult[8] = guildIconSource;
          tmp9 = guildIconSource;
          const obj12 = { id: null, icon: null, canAnimate: true, size: 32 };
          let obj3 = guild(hasJoinedGuild[9]);
        }
      }
      if (cResult[3] === tmp5) {
      }
      const obj13 = { style: tmp4.guildIcon, guild: tmp5, size: null, animate: true };
      let obj = require("c");
      obj13.size = require("GuildIcon").GuildIconSizes.XLARGE;
      const tmp18 = closure_5(guild(hasJoinedGuild[8]), obj13);
      cResult[3] = tmp5;
      cResult[4] = tmp4.guildIcon;
      cResult[5] = tmp18;
      const tmp17 = guild(hasJoinedGuild[8]);
    }
  : (guild) => {
      guild = guild.guild;
      const hasJoinedGuild = guild.hasJoinedGuild;
      ({ title, showingJoinGuildCta } = guild);
      const tmp = closure_8();
      const fromGuildType = closure_4.createFromGuildType(guild);
      const isDiscoverableResult = fromGuildType.isDiscoverable();
      if (!isDiscoverableResult) {
        if (!hasJoinedGuild) {
          ({ id: obj3.id, icon: obj3.icon } = guild);
          const guildIconSource = AvatarUtilsDefault.getGuildIconSource({
            id: null,
            icon: null,
            canAnimate: true,
            size: 32,
          });
          const obj4 = { style: tmp.guildIcon, source: guildIconSource };
          let tmp7 = closure_5(FastImageDefault, obj4);
          let stringResult = dependencyMap;
          let tmp9 = closure_5;
          let tmp12 = closure_5;
          const obj = { id: null, icon: null, canAnimate: true, size: 32 };
        }
        const obj5 = { style: tmp.guildDetailsContainer, children: null };
        const obj6 = { variant: "eyebrow", color: "text-default", children: title };
        const items = [tmp12(guild(5088).Text, obj6)];
        const obj7 = { style: tmp.guildDetailsContent, children: null };
        const items1 = [tmp7];
        const obj8 = { style: tmp.guildNameAndOnlineMembers, children: null };
        const obj9 = { style: tmp.guildNameWrapper, children: null };
        const obj10 = {
          guild,
          style: tmp.guildPartnerIcon,
          size: guild(1200).Icon.Sizes.REFRESH_SMALL_16,
          disableColor: true,
        };
        const items2 = [tmp12(GuildBadgeDefault, obj10)];
        const obj11 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: guild.name };
        items2[1] = tmp12(guild(5088).Text, obj11);
        obj9.children = items2;
        const items3 = [closure_7(View, obj9)];
        const obj12 = { style: tmp.guildDescriptionSection, children: null };
        if (isDiscoverableResult) {
          if (null != fromGuildType.presenceCount) {
            const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
            const intl2 = tmp16(1126).intl;
            const obj14 = { membersOnline: fromGuildType.presenceCount };
            obj13.children = intl2.format(tmp16(1126).t["LC+S+m"], obj14);
            const items4 = [tmp9(tmp16(5088).Text, obj13), ,];
            const obj15 = { style: tmp.dotSeparator };
            items4[1] = tmp9(View, obj15);
            if (!hasJoinedGuild) {
              if (!showingJoinGuildCta) {
                const obj16 = {
                  style: tmp.joinGuildButton,
                  onPress() {
                    return guild_GuildUtils.handleJoinGuild(guild.id);
                  },
                  children: null,
                };
                const obj17 = { variant: "text-xs/medium", color: "text-default", children: null };
                const intl3 = tmp16(1126).intl;
                obj17.children = intl3.string(tmp16(1126).t.riu2R5);
                obj16.children = tmp9(tmp16(5088).Text, obj17);
                let tmp9Result = tmp9(tmp16(6184).PressableOpacity, obj16);
              }
              const obj18 = { children: null };
              items4[2] = tmp9Result;
              obj18.children = items4;
              closure_7(closure_6, obj18);
            }
            const obj19 = { variant: "text-xs/medium", color: "text-default", children: null };
            const intl4 = tmp16(1126).intl;
            stringResult = intl4.string(tmp16(1126).t.inyJqO);
            obj19.children = stringResult;
            tmp9Result = tmp9(tmp16(5088).Text, obj19);
          }
        }
        const obj20 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl = tmp16(1126).intl;
        obj20.children = intl.string(guild(1126).t.H29mx4);
        obj12.children = tmp9(guild(5088).Text, obj20);
        items3[1] = tmp9(View, obj12);
        obj8.children = items3;
        items1[1] = closure_7(View, obj8);
        obj7.children = items1;
        items[1] = closure_7(View, obj7);
        obj5.children = items;
        return closure_7(View, obj5);
      }
      const obj21 = {
        style: tmp.guildIcon,
        guild: fromGuildType,
        size: guild(6158).GuildIconSizes.XLARGE,
        animate: true,
      };
      tmp7 = closure_5(GuildIconDefault, obj21);
      stringResult = dependencyMap;
      tmp9 = closure_5;
      tmp12 = closure_5;
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default tmp4;
export const ExpressionGuildDetails = tmp4;
