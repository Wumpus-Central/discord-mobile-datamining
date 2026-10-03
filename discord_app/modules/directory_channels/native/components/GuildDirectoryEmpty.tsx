// discord_app/modules/directory_channels/native/components/GuildDirectoryEmpty.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const Constants = fn(1085);
({ InstantInviteSources: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  header: { marginBottom: 16, alignSelf: "center" },
  title: null,
  description: null,
  ctaContainer: null,
};
let obj3 = {
  flex: 1,
  justifyContent: "flex-end",
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.title = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontSize: 24,
  textAlign: "center",
  marginBottom: 8,
  alignSelf: "center",
};
obj2.description = { textAlign: "center", alignSelf: "center", marginBottom: 24 };
obj2.ctaContainer = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  fontFamily: Fonts.PRIMARY_BOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontSize: 24,
  textAlign: "center",
  marginBottom: 8,
  alignSelf: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = guild(stateFromStores[8]).c(39);
      guild = guild.guild;
      const channel = guild.channel;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function s() {
          return GuildChannelStore.getChannels(guild.id);
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj = guild(stateFromStores[8]);
      stateFromStores = guild(stateFromStores[10]).useStateFromStores(first, tmp8);
      const tmpResult = guild(stateFromStores[10]);
      const canCreateOrAddGuildInDirectory = guild(stateFromStores[11]).useCanCreateOrAddGuildInDirectory(channel);
      const sum = channel(stateFromStores[9])().bottom + 16;
      if (cResult[3] !== sum) {
        const obj2 = { paddingBottom: sum };
        cResult[3] = sum;
        cResult[4] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp4.container) {
        if (cResult[6] === tmp12) {
          let tmp13 = cResult[7];
        }
        if (cResult[8] !== tmp4.header) {
          const obj3 = { source: tmp5(tmp2[12]), style: tmp4.header };
          const tmp17 = closure_7(closure_3, obj3);
          cResult[8] = tmp4.header;
          cResult[9] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[9];
        }
        if (cResult[10] !== guild.name) {
          const intl = tmp(tmp2[13]).intl;
          const obj4 = { guildName: guild.name };
          const formatResult = intl.format(tmp(tmp2[13]).t.vyvrpC, obj4);
          cResult[10] = guild.name;
          cResult[11] = formatResult;
          let tmp18 = formatResult;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] === tmp4.title) {
          if (cResult[13] === tmp18) {
            let tmp20 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[13]).intl;
            const stringResult = intl2.string(tmp(tmp2[13]).t.WypE0i);
            cResult[15] = stringResult;
            let tmp23 = stringResult;
          } else {
            tmp23 = cResult[15];
          }
          if (cResult[16] !== tmp4.description) {
            const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp23 };
            const tmp27 = closure_7(tmp(tmp2[15]).Text, obj5);
            cResult[16] = tmp4.description;
            cResult[17] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[17];
          }
          if (cResult[18] === canCreateOrAddGuildInDirectory) {
            if (cResult[19] === channel.id) {
              if (cResult[20] === guild.id) {
                if (cResult[21] === guild.name) {
                  if (cResult[22] === tmp4.ctaContainer) {
                    let tmp28 = cResult[23];
                  }
                  if (cResult[24] === channel.id) {
                    if (cResult[25] === stateFromStores) {
                      if (cResult[26] === guild) {
                        let tmp32 = cResult[27];
                      }
                      const _Symbol2 = Symbol;
                      class D {
                        constructor() {
                          obj = closure_0(closure_2[19]);
                          return obj.handleOpenInviteActionsheet(
                            guild,
                            channel.id,
                            closure_2,
                            InstantInviteSources.HUB_EMPTY_STATE,
                          );
                        }
                      }
                      if (tmp33 === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp(tmp2[13]).intl.string;
                        class D {
                          constructor() {
                            obj = closure_0(closure_2[19]);
                            return obj.handleOpenInviteActionsheet(
                              guild,
                              channel.id,
                              closure_2,
                              InstantInviteSources.HUB_EMPTY_STATE,
                            );
                          }
                        }
                        cResult[28] = tmp35;
                        let tmp34 = tmp35;
                      } else {
                        tmp34 = cResult[28];
                      }
                      if (cResult[29] === tmp4.ctaContainer) {
                        if (cResult[30] === tmp32) {
                          let tmp36 = cResult[31];
                        }
                        if (cResult[32] === tmp25) {
                          if (cResult[33] === tmp28) {
                            if (cResult[34] === tmp36) {
                              if (cResult[35] === tmp13) {
                                if (cResult[36] === tmp14) {
                                  if (cResult[37] === tmp20) {
                                    let tmp39 = cResult[38];
                                  }
                                  return tmp39;
                                }
                              }
                            }
                          }
                        }
                        class D {
                          constructor() {
                            obj = closure_0(closure_2[19]);
                            return obj.handleOpenInviteActionsheet(
                              guild,
                              channel.id,
                              closure_2,
                              InstantInviteSources.HUB_EMPTY_STATE,
                            );
                          }
                        }
                        const obj6 = { contentContainerStyle: tmp13, children: null };
                        const items1 = [tmp14, tmp20, tmp25, tmp28, tmp36];
                        obj6.children = items1;
                        const tmp41 = closure_8(closure_4, obj6);
                        cResult[32] = tmp25;
                        cResult[33] = tmp28;
                        cResult[34] = tmp36;
                        cResult[35] = tmp13;
                        cResult[36] = tmp14;
                        cResult[37] = tmp20;
                        cResult[38] = tmp41;
                        tmp39 = tmp41;
                      }
                      const obj7 = { style: tmp31, onPress: tmp32, iconSource: tmp5(tmp2[20]), title: tmp34 };
                      const tmp38 = closure_7(tmp(tmp2[16]).FormCTA, obj7);
                      cResult[29] = tmp4.ctaContainer;
                      cResult[30] = tmp32;
                      cResult[31] = tmp38;
                      tmp36 = tmp38;
                    }
                  }
                  class D {
                    constructor() {
                      obj = closure_0(closure_2[19]);
                      return obj.handleOpenInviteActionsheet(
                        guild,
                        channel.id,
                        closure_2,
                        InstantInviteSources.HUB_EMPTY_STATE,
                      );
                    }
                  }
                  cResult[24] = channel.id;
                  cResult[25] = stateFromStores;
                  cResult[26] = guild;
                  cResult[27] = D;
                  tmp32 = D;
                }
              }
            }
          }
          let tmp29 = null;
          if (canCreateOrAddGuildInDirectory) {
            const obj8 = { style: null, onPress: null, iconSource: null, title: null };
            class D {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.handleOpenInviteActionsheet(
                  guild,
                  channel.id,
                  closure_2,
                  InstantInviteSources.HUB_EMPTY_STATE,
                );
              }
            }
            obj8.onPress = function onPress() {
              return GuildDirectoryAddModalActionCreatorsDefault.open({
                directoryGuildName: guild.name,
                directoryGuildId: guild.id,
                directoryChannelId: channel.id,
              });
            };
            obj8.iconSource = tmp5(tmp2[18]);
            const intl3 = tmp(tmp2[13]).intl;
            obj8.title = intl3.string(tmp(tmp2[13]).t.hyK15i);
            tmp29 = closure_7(tmp(tmp2[16]).FormCTA, obj8);
          }
          cResult[18] = canCreateOrAddGuildInDirectory;
          cResult[19] = channel.id;
          cResult[20] = guild.id;
          cResult[21] = guild.name;
          cResult[22] = tmp4.ctaContainer;
          cResult[23] = tmp29;
          tmp28 = tmp29;
        }
        const obj9 = { style: tmp4.title, accessibilityRole: "header", children: tmp18 };
        const tmp22 = closure_7(tmp(tmp2[14]).LegacyText, obj9);
        cResult[12] = tmp4.title;
        cResult[13] = tmp18;
        cResult[14] = tmp22;
        tmp20 = tmp22;
      }
      const items2 = [tmp4.container, tmp12];
      cResult[5] = tmp4.container;
      cResult[6] = tmp12;
      cResult[7] = items2;
      tmp13 = items2;
      const tmpResult2 = guild(stateFromStores[11]);
    }
  : (guild) => {
      guild = guild.guild;
      const channel = guild.channel;
      const tmp = closure_9();
      const items = [GuildChannelStore];
      dependencyMap = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
      const obj = guild(504);
      const obj3 = { contentContainerStyle: null, children: null };
      const items1 = [tmp.container];
      const obj2 = guild(11935);
      items1[1] = { paddingBottom: channel(1618)().bottom + 16 };
      obj3.contentContainerStyle = items1;
      const obj5 = { source: null, style: null };
      const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
      obj5.source = channel(12427);
      obj5.style = tmp.header;
      const items2 = [closure_7(closure_3, obj5), , , ,];
      const obj6 = { style: tmp.title, accessibilityRole: "header", children: null };
      const intl = guild(1126).intl;
      obj6.children = intl.format(guild(1126).t.vyvrpC, { guildName: guild.name });
      items2[1] = closure_7(guild(1188).LegacyText, obj6);
      const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = guild(1126).intl;
      obj8.children = intl2.string(guild(1126).t.WypE0i);
      items2[2] = closure_7(guild(4886).Text, obj8);
      let tmp8Result = null;
      if (canCreateOrAddGuildInDirectory) {
        const obj9 = {
          style: tmp.ctaContainer,
          onPress() {
            return GuildDirectoryAddModalActionCreatorsDefault.open({
              directoryGuildName: guild.name,
              directoryGuildId: guild.id,
              directoryChannelId: channel.id,
            });
          },
          iconSource: tmp2(12428),
          title: null,
        };
        const intl3 = tmp4(1126).intl;
        obj9.title = intl3.string(tmp4(1126).t.hyK15i);
        tmp8Result = closure_7(tmp4(8895).FormCTA, obj9);
      }
      items2[3] = tmp8Result;
      const obj10 = {
        style: tmp.ctaContainer,
        onPress() {
          return instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(
            guild,
            channel.id,
            closure_2,
            constants.HUB_EMPTY_STATE,
          );
        },
        iconSource: channel(12429),
        title: null,
      };
      const intl4 = tmp4(1126).intl;
      obj10.title = intl4.string(guild(1126).t.L4bwJ9);
      items2[4] = closure_7(guild(8895).FormCTA, obj10);
      obj3.children = items2;
      return closure_8(closure_4, obj3);
    };
