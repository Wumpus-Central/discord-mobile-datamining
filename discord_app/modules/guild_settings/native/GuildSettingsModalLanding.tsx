// discord_app/modules/guild_settings/native/GuildSettingsModalLanding.tsx
import intl8 from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import AppAnalyticsUtilsDefault from "../../app_analytics/AppAnalyticsUtils.tsx";
import ClipboardListIcon from "../../../design/components/Icon/native/redesign/generated/ClipboardListIcon.tsx";
import TableRow7 from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import HammerIcon from "../../../design/components/Icon/native/redesign/generated/HammerIcon.tsx";
import RobotIcon from "../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import ShieldUserIcon from "../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/13058_AssetRegistry.js";
import ModerationIcon from "../../../design/components/Icon/native/redesign/generated/ModerationIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import GuildSettingsModalChannelsStore from "../GuildSettingsModalChannelsStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildId, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let unpackModuleId;
({
  GuildFeatures: unpackModuleId,
  GuildSettingsSections: closure_12,
  ChannelTypes: map1,
  AnalyticEvents: closure_14,
} = Constants);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, containerContent: { paddingTop: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let arr;
      let canManageChannels;
      let canManageGuild;
      let canManageWebhooks;
      let canUnlinkChannelLobbies;
      let categories;
      let first;
      let isGuildAdmin;
      let pushScreen;
      let tmp23;
      let tmp25;
      let tmp28;
      let tmp6;
      let tmp9;
      const obj = guild(576);
      const cResult = obj.c(38);
      guild = guild.guild;
      ({
        isGuildAdmin,
        canManageGuild,
        canManageChannels,
        canManageWebhooks,
        canUnlinkChannelLobbies,
        categories,
        pushScreen,
      } = guild);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(guild(1126).t["/dp6yY"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { IconComponent: guild(4812).CircleInformationIcon };
        const Icon = tmp(5993).TableRow.Icon;
        const tmp8 = closure_15(Icon, obj2);
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== pushScreen) {
        const obj3 = {
          label: first,
          arrow: true,
          icon: tmp6,
          onPress() {
            return pushScreen(constants.OVERVIEW);
          },
        };
        const tmp11 = closure_15(guild(5993).TableRow, obj3, "overview");
        cResult[2] = pushScreen;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === canManageChannels) {
        if (cResult[5] === canManageGuild) {
          if (cResult[6] === canManageWebhooks) {
            if (cResult[7] === canUnlinkChannelLobbies) {
              if (cResult[8] === categories) {
                if (cResult[9] === guild) {
                  if (cResult[10] === isGuildAdmin) {
                    if (cResult[11] === pushScreen) {
                      if (cResult[12] === tmp9) {
                        arr = cResult[13];
                      }
                      let tmp60 = null;
                      if (0 !== arr.length) {
                        let tmp61;
                        let tmp63;
                        const _Symbol9 = Symbol;
                        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl7 = tmp(1126).intl;
                          const stringResult1 = intl7.string(guild(1126).t["3D5yo/"]);
                          cResult[35] = stringResult1;
                          tmp61 = stringResult1;
                        } else {
                          tmp61 = cResult[35];
                        }
                        if (cResult[36] !== arr) {
                          const obj4 = { title: tmp61, hasIcons: true, children: arr };
                          const tmp65 = closure_15(guild(6074).TableRowGroup, obj4);
                          cResult[36] = arr;
                          cResult[37] = tmp65;
                          tmp63 = tmp65;
                        } else {
                          tmp63 = cResult[37];
                        }
                        tmp60 = tmp63;
                      }
                      return tmp60;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const items = [tmp9];
      const currentUser = UserStore.getCurrentUser();
      if (canManageChannels) {
        let tmp14;
        let tmp16;
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult2 = intl2.string(guild(1126).t.OGiMXJ);
          cResult[14] = stringResult2;
          tmp14 = stringResult2;
        } else {
          tmp14 = cResult[14];
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { IconComponent: guild(17657).ChannelListIcon };
          const Icon2 = tmp(5993).TableRow.Icon;
          const tmp18 = closure_15(Icon2, obj5);
          cResult[15] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[15];
        }
        if (cResult[16] === guild.id) {
          let tmp19;
          if (cResult[17] === pushScreen) {
            tmp19 = cResult[18];
          }
          items.push(tmp19);
        }
        const obj6 = {
          label: tmp14,
          arrow: true,
          icon: tmp16,
          onPress() {
            guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
            pushScreen(constants.CHANNELS);
          },
        };
        const tmp21 = closure_15(guild(5993).TableRow, obj6, "channels");
        cResult[16] = guild.id;
        cResult[17] = pushScreen;
        cResult[18] = tmp21;
        tmp19 = tmp21;
      } else if (null != currentUser) {
        PermissionUtilsAll;
      }
      if (!canManageGuild) {
        const tmpResult = guild(9250);
        if (tmpResult.canUseMobileServerTagSettings(guild.id)) {
          let tmp32;
          let tmp34;
          let tmp37;
          const _Symbol3 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(guild(1126).t["2QmKZ2"]);
            cResult[23] = stringResult3;
            tmp32 = stringResult3;
          } else {
            tmp32 = cResult[23];
          }
          const _Symbol4 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { IconComponent: guild(8524).TagIcon };
            const Icon4 = tmp(5993).TableRow.Icon;
            const tmp36 = closure_15(Icon4, obj7);
            cResult[24] = tmp36;
            tmp34 = tmp36;
          } else {
            tmp34 = cResult[24];
          }
          if (cResult[25] !== pushScreen) {
            const obj8 = {
              label: tmp32,
              arrow: true,
              icon: tmp34,
              onPress() {
                return pushScreen(constants.TAG);
              },
            };
            const tmp39 = closure_15(guild(5993).TableRow, obj8, "server-tag");
            cResult[25] = pushScreen;
            cResult[26] = tmp39;
            tmp37 = tmp39;
          } else {
            tmp37 = cResult[26];
          }
          items.push(tmp37);
        }
        if (isGuildAdmin) {
          const tmpResult2 = guild(17659);
          if (tmpResult2.canSeeVanityUrlSettings(guild)) {
            let tmp41;
            let tmp43;
            let tmp46;
            const _Symbol5 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(1126).intl;
              const stringResult4 = intl5.string(guild(1126).t["5XZKy/"]);
              cResult[27] = stringResult4;
              tmp41 = stringResult4;
            } else {
              tmp41 = cResult[27];
            }
            const _Symbol6 = Symbol;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              const obj9 = { IconComponent: guild(4839).LinkIcon };
              const Icon5 = tmp(5993).TableRow.Icon;
              const tmp45 = closure_15(Icon5, obj9);
              cResult[28] = tmp45;
              tmp43 = tmp45;
            } else {
              tmp43 = cResult[28];
            }
            if (cResult[29] !== pushScreen) {
              const obj10 = {
                label: tmp41,
                arrow: true,
                icon: tmp43,
                onPress() {
                  return pushScreen(constants.VANITY_URL);
                },
              };
              const tmp48 = closure_15(guild(5993).TableRow, obj10, "vanity");
              cResult[29] = pushScreen;
              cResult[30] = tmp48;
              tmp46 = tmp48;
            } else {
              tmp46 = cResult[30];
            }
            items.push(tmp46);
          }
        }
        if (canManageGuild) {
          let tmp50;
          let tmp52;
          let tmp56;
          const _Symbol7 = Symbol;
          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = tmp(1126).intl;
            const stringResult5 = intl6.string(guild(1126).t.KUw7Ss);
            cResult[31] = stringResult5;
            tmp50 = stringResult5;
          } else {
            tmp50 = cResult[31];
          }
          const _Symbol8 = Symbol;
          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
            const obj11 = { source: pushScreen(13058) };
            const Icon6 = tmp(5993).TableRow.Icon;
            const tmp55 = closure_15(Icon6, obj11);
            cResult[32] = tmp55;
            tmp52 = tmp55;
          } else {
            tmp52 = cResult[32];
          }
          if (cResult[33] !== pushScreen) {
            const obj12 = {
              label: tmp50,
              arrow: true,
              icon: tmp52,
              onPress() {
                return pushScreen(constants.GUILD_TEMPLATES);
              },
            };
            const tmp58 = closure_15(guild(5993).TableRow, obj12, "guild-template");
            cResult[33] = pushScreen;
            cResult[34] = tmp58;
            tmp56 = tmp58;
          } else {
            tmp56 = cResult[34];
          }
          items.push(tmp56);
        }
        cResult[4] = canManageChannels;
        cResult[5] = canManageGuild;
        cResult[6] = canManageWebhooks;
        cResult[7] = canUnlinkChannelLobbies;
        cResult[8] = categories;
        cResult[9] = guild;
        cResult[10] = isGuildAdmin;
        cResult[11] = pushScreen;
        cResult[12] = tmp9;
        cResult[13] = items;
        arr = items;
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult6 = intl3.string(guild(1126).t.CIsNZw);
        cResult[19] = stringResult6;
        tmp23 = stringResult6;
      } else {
        tmp23 = cResult[19];
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = { IconComponent: guild(14762).PuzzlePieceIcon };
        const Icon3 = tmp(5993).TableRow.Icon;
        const tmp27 = closure_15(Icon3, obj13);
        cResult[20] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[20];
      }
      if (cResult[21] !== pushScreen) {
        const obj14 = {
          label: tmp23,
          arrow: true,
          icon: tmp25,
          onPress() {
            return pushScreen(constants.INTEGRATIONS);
          },
        };
        const tmp30 = closure_15(guild(5993).TableRow, obj14, "integrations");
        cResult[21] = pushScreen;
        cResult[22] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[22];
      }
      items.push(tmp28);
    }
  : (guild) => {
      let Icon;
      let Icon2;
      let Icon3;
      let Icon4;
      let Icon5;
      let Icon6;
      let canManageChannels;
      let canManageGuild;
      let canManageWebhooks;
      let canUnlinkChannelLobbies;
      let categories;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let isGuildAdmin;
      let obj11;
      let obj13;
      let obj2;
      let obj5;
      let obj7;
      let obj9;
      guild = guild.guild;
      ({ isGuildAdmin, canManageGuild, canManageChannels, pushScreen: importDefault } = guild);
      ({ canManageWebhooks, canUnlinkChannelLobbies, categories } = guild);
      const obj = {
        label: intl.string(guild(1126).t["/dp6yY"]),
        arrow: true,
        icon: closure_15(Icon, obj2),
        onPress() {
          return importDefault(constants.OVERVIEW);
        },
      };
      const TableRow = guild(5993).TableRow;
      intl = guild(1126).intl;
      obj2 = { IconComponent: guild(4812).CircleInformationIcon };
      Icon = guild(5993).TableRow.Icon;
      const items = [closure_15(TableRow, obj, "overview")];
      const currentUser = UserStore.getCurrentUser();
      if (!canManageChannels) {
        let canManageACategoryResult = null != currentUser;
        if (canManageACategoryResult) {
          const obj3 = PermissionUtilsAll;
          canManageACategoryResult = obj3.canManageACategory(currentUser, guild, categories);
        }
        canManageChannels = canManageACategoryResult;
      }
      if (canManageChannels) {
        const obj4 = {
          label: intl2.string(guild(1126).t.OGiMXJ),
          arrow: true,
          icon: closure_15(Icon2, obj5),
          onPress() {
            guild = GuildSettingsModalChannelsStore.initGuild(guild.id);
            importDefault(constants.CHANNELS);
          },
        };
        const TableRow2 = tmp2(5993).TableRow;
        intl2 = tmp2(1126).intl;
        obj5 = { IconComponent: guild(17657).ChannelListIcon };
        Icon2 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow2, obj4, "channels"));
      }
      const tmp9 = canManageGuild || canManageWebhooks || canUnlinkChannelLobbies;
      if (tmp9) {
        const obj6 = {
          label: intl3.string(guild(1126).t.CIsNZw),
          arrow: true,
          icon: closure_15(Icon3, obj7),
          onPress() {
            return importDefault(constants.INTEGRATIONS);
          },
        };
        const TableRow3 = tmp2(5993).TableRow;
        intl3 = tmp2(1126).intl;
        obj7 = { IconComponent: guild(14762).PuzzlePieceIcon };
        Icon3 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow3, obj6, "integrations"));
      }
      const tmp2Result = guild(9250);
      if (tmp2Result.canUseMobileServerTagSettings(guild.id)) {
        const obj8 = {
          label: intl4.string(guild(1126).t["2QmKZ2"]),
          arrow: true,
          icon: closure_15(Icon4, obj9),
          onPress() {
            return importDefault(constants.TAG);
          },
        };
        const TableRow4 = tmp2(5993).TableRow;
        intl4 = tmp2(1126).intl;
        obj9 = { IconComponent: guild(8524).TagIcon };
        Icon4 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow4, obj8, "server-tag"));
      }
      if (isGuildAdmin) {
        const tmp2Result2 = guild(17659);
        isGuildAdmin = tmp2Result2.canSeeVanityUrlSettings(guild);
      }
      if (isGuildAdmin) {
        const obj10 = {
          label: intl5.string(guild(1126).t["5XZKy/"]),
          arrow: true,
          icon: closure_15(Icon5, obj11),
          onPress() {
            return importDefault(constants.VANITY_URL);
          },
        };
        const TableRow5 = tmp2(5993).TableRow;
        intl5 = tmp2(1126).intl;
        obj11 = { IconComponent: guild(4839).LinkIcon };
        Icon5 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow5, obj10, "vanity"));
      }
      if (canManageGuild) {
        const obj12 = {
          label: intl6.string(guild(1126).t.KUw7Ss),
          arrow: true,
          icon: closure_15(Icon6, obj13),
          onPress() {
            return importDefault(constants.GUILD_TEMPLATES);
          },
        };
        const TableRow6 = tmp2(5993).TableRow;
        intl6 = tmp2(1126).intl;
        obj13 = { source: AssetRegistryDefault };
        Icon6 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow6, obj12, "guild-template"));
      }
      let tmpResult = null;
      if (0 !== items.length) {
        const obj14 = { title: intl7.string(guild(1126).t["3D5yo/"]), hasIcons: true, children: items };
        const TableRowGroup = tmp2(6074).TableRowGroup;
        intl7 = tmp2(1126).intl;
        tmpResult = closure_15(TableRowGroup, obj14);
      }
      return tmpResult;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let canConfigureOfficialMessages;
      let canManageGuildExpressions;
      let pushScreen;
      const obj = pushScreen(576);
      const cResult = obj.c(19);
      ({ canManageGuildExpressions, canConfigureOfficialMessages, pushScreen } = arg0);
      if (cResult[0] === canConfigureOfficialMessages) {
        if (cResult[1] === canManageGuildExpressions) {
          let arr;
          if (cResult[2] === pushScreen) {
            arr = cResult[3];
          }
          let tmp33 = null;
          if (0 !== arr.length) {
            let tmp34;
            let tmp36;
            const _Symbol7 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = pushScreen(1126).intl;
              const stringResult = intl4.string(pushScreen(1126).t.m6lkGy);
              cResult[16] = stringResult;
              tmp34 = stringResult;
            } else {
              tmp34 = cResult[16];
            }
            if (cResult[17] !== arr) {
              const obj2 = { title: tmp34, hasIcons: true, children: arr };
              const tmp38 = closure_15(pushScreen(6074).TableRowGroup, obj2);
              cResult[17] = arr;
              cResult[18] = tmp38;
              tmp36 = tmp38;
            } else {
              tmp36 = cResult[18];
            }
            tmp33 = tmp36;
          }
          return tmp33;
        }
      }
      const items = [];
      if (canManageGuildExpressions) {
        let tmp5;
        let tmp7;
        let tmp10;
        let tmp14;
        let tmp16;
        let tmp19;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = pushScreen(1126).intl;
          const stringResult1 = intl.string(pushScreen(1126).t.sMOuuS);
          cResult[4] = stringResult1;
          tmp5 = stringResult1;
        } else {
          tmp5 = cResult[4];
        }
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { IconComponent: pushScreen(8411).ReactionIcon };
          const Icon = pushScreen(5993).TableRow.Icon;
          const tmp9 = closure_15(Icon, obj3);
          cResult[5] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[5];
        }
        if (cResult[6] !== pushScreen) {
          const obj4 = {
            label: tmp5,
            arrow: true,
            icon: tmp7,
            onPress() {
              return pushScreen(constants.EMOJI);
            },
          };
          const tmp12 = closure_15(pushScreen(5993).TableRow, obj4, "emoji");
          cResult[6] = pushScreen;
          cResult[7] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        items.push(tmp10);
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = pushScreen(1126).intl;
          const stringResult2 = intl2.string(pushScreen(1126).t.R5nQkS);
          cResult[8] = stringResult2;
          tmp14 = stringResult2;
        } else {
          tmp14 = cResult[8];
        }
        const _Symbol4 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { IconComponent: pushScreen(12190).StickerIcon };
          const Icon2 = pushScreen(5993).TableRow.Icon;
          const tmp18 = closure_15(Icon2, obj5);
          cResult[9] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[9];
        }
        if (cResult[10] !== pushScreen) {
          const obj6 = {
            label: tmp14,
            arrow: true,
            icon: tmp16,
            onPress() {
              return pushScreen(constants.STICKERS);
            },
          };
          const tmp21 = closure_15(pushScreen(5993).TableRow, obj6, "stickers");
          cResult[10] = pushScreen;
          cResult[11] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        items.push(tmp19);
      }
      if (canConfigureOfficialMessages) {
        let tmp24;
        let tmp26;
        let tmp29;
        const _Symbol5 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = pushScreen(1126).intl;
          const stringResult3 = intl3.string(pushScreen(1126).t.xHEzFh);
          cResult[12] = stringResult3;
          tmp24 = stringResult3;
        } else {
          tmp24 = cResult[12];
        }
        const _Symbol6 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { IconComponent: pushScreen(11372).StampIcon };
          const Icon3 = pushScreen(5993).TableRow.Icon;
          const tmp28 = closure_15(Icon3, obj7);
          cResult[13] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[13];
        }
        if (cResult[14] !== pushScreen) {
          const obj8 = {
            label: tmp24,
            arrow: true,
            icon: tmp26,
            onPress() {
              return pushScreen(constants.OFFICIAL_MESSAGES);
            },
          };
          const tmp31 = closure_15(pushScreen(5993).TableRow, obj8, "official-messages");
          cResult[14] = pushScreen;
          cResult[15] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[15];
        }
        items.push(tmp29);
      }
      cResult[0] = canConfigureOfficialMessages;
      cResult[1] = canManageGuildExpressions;
      cResult[2] = pushScreen;
      cResult[3] = items;
      arr = items;
    }
  : (pushScreen) => {
      let Icon;
      let Icon2;
      let Icon3;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      let obj4;
      let obj6;
      pushScreen = pushScreen.pushScreen;
      const items = [];
      const canConfigureOfficialMessages = pushScreen.canConfigureOfficialMessages;
      if (pushScreen.canManageGuildExpressions) {
        const obj = {
          label: intl.string(pushScreen(1126).t.sMOuuS),
          arrow: true,
          icon: closure_15(Icon, obj2),
          onPress() {
            return pushScreen(constants.EMOJI);
          },
        };
        const TableRow = pushScreen(5993).TableRow;
        intl = pushScreen(1126).intl;
        obj2 = { IconComponent: pushScreen(8411).ReactionIcon };
        Icon = pushScreen(5993).TableRow.Icon;
        items.push(closure_15(TableRow, obj, "emoji"));
        const obj3 = {
          label: intl2.string(pushScreen(1126).t.R5nQkS),
          arrow: true,
          icon: closure_15(Icon2, obj4),
          onPress() {
            return pushScreen(constants.STICKERS);
          },
        };
        const TableRow2 = pushScreen(5993).TableRow;
        intl2 = pushScreen(1126).intl;
        obj4 = { IconComponent: pushScreen(12190).StickerIcon };
        Icon2 = pushScreen(5993).TableRow.Icon;
        items.push(closure_15(TableRow2, obj3, "stickers"));
      }
      if (canConfigureOfficialMessages) {
        const obj5 = {
          label: intl3.string(pushScreen(1126).t.xHEzFh),
          arrow: true,
          icon: closure_15(Icon3, obj6),
          onPress() {
            return pushScreen(constants.OFFICIAL_MESSAGES);
          },
        };
        const TableRow3 = pushScreen(5993).TableRow;
        intl3 = pushScreen(1126).intl;
        obj6 = { IconComponent: pushScreen(11372).StampIcon };
        Icon3 = pushScreen(5993).TableRow.Icon;
        items.push(closure_15(TableRow3, obj5, "official-messages"));
      }
      let tmp10 = null;
      if (0 !== items.length) {
        const obj7 = { title: intl4.string(pushScreen(1126).t.m6lkGy), hasIcons: true, children: items };
        const TableRowGroup = pushScreen(6074).TableRowGroup;
        intl4 = pushScreen(1126).intl;
        tmp10 = closure_15(TableRowGroup, obj7);
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let canManageGuild;
      let canManageRoles;
      let first;
      let pushScreen;
      let tmp6;
      let tmp9;
      const obj = pushScreen(576);
      const cResult = obj.c(20);
      ({ canManageGuild, canManageRoles, pushScreen } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = pushScreen(1126).intl;
        const stringResult = intl.string(pushScreen(1126).t["9Oq93m"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { IconComponent: pushScreen(5873).GroupIcon };
        const Icon = pushScreen(5993).TableRow.Icon;
        const tmp8 = closure_15(Icon, obj2);
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== pushScreen) {
        const obj3 = {
          label: first,
          arrow: true,
          icon: tmp6,
          onPress() {
            return pushScreen(constants.MEMBERS);
          },
        };
        const tmp11 = closure_15(pushScreen(5993).TableRow, obj3, "members");
        cResult[2] = pushScreen;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === canManageGuild) {
        if (cResult[5] === canManageRoles) {
          if (cResult[6] === pushScreen) {
            let tmp12;
            let tmp31;
            let tmp33;
            if (cResult[7] === tmp9) {
              tmp12 = cResult[8];
            }
            const _Symbol5 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = pushScreen(1126).intl;
              const stringResult1 = intl4.string(pushScreen(1126).t.bMAKMK);
              cResult[17] = stringResult1;
              tmp31 = stringResult1;
            } else {
              tmp31 = cResult[17];
            }
            if (cResult[18] !== tmp12) {
              const obj4 = { title: tmp31, hasIcons: true, children: tmp12 };
              const tmp35 = closure_15(pushScreen(6074).TableRowGroup, obj4);
              cResult[18] = tmp12;
              cResult[19] = tmp35;
              tmp33 = tmp35;
            } else {
              tmp33 = cResult[19];
            }
            return tmp33;
          }
        }
      }
      const items = [tmp9];
      if (canManageRoles) {
        let tmp13;
        let tmp15;
        let tmp18;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = pushScreen(1126).intl;
          const stringResult2 = intl2.string(pushScreen(1126).t["LPJmL/"]);
          cResult[9] = stringResult2;
          tmp13 = stringResult2;
        } else {
          tmp13 = cResult[9];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { IconComponent: pushScreen(9232).ShieldUserIcon };
          const Icon2 = pushScreen(5993).TableRow.Icon;
          const tmp17 = closure_15(Icon2, obj5);
          cResult[10] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] !== pushScreen) {
          const obj6 = {
            label: tmp13,
            arrow: true,
            icon: tmp15,
            onPress() {
              return pushScreen(constants.ROLES);
            },
          };
          const tmp20 = closure_15(pushScreen(5993).TableRow, obj6, "roles");
          cResult[11] = pushScreen;
          cResult[12] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[12];
        }
        items.push(tmp18);
      }
      if (canManageGuild) {
        let tmp22;
        let tmp24;
        let tmp27;
        const _Symbol3 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = pushScreen(1126).intl;
          const stringResult3 = intl3.string(pushScreen(1126).t.ngRFjZ);
          cResult[13] = stringResult3;
          tmp22 = stringResult3;
        } else {
          tmp22 = cResult[13];
        }
        const _Symbol4 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { IconComponent: pushScreen(4839).LinkIcon };
          const Icon3 = pushScreen(5993).TableRow.Icon;
          const tmp26 = closure_15(Icon3, obj7);
          cResult[14] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== pushScreen) {
          const obj8 = {
            label: tmp22,
            arrow: true,
            icon: tmp24,
            onPress() {
              return pushScreen(constants.INSTANT_INVITES);
            },
          };
          const tmp29 = closure_15(pushScreen(5993).TableRow, obj8, "invites");
          cResult[15] = pushScreen;
          cResult[16] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[16];
        }
        items.push(tmp27);
      }
      cResult[4] = canManageGuild;
      cResult[5] = canManageRoles;
      cResult[6] = pushScreen;
      cResult[7] = tmp9;
      cResult[8] = items;
      tmp12 = items;
    }
  : (pushScreen) => {
      let Icon;
      let Icon2;
      let Icon3;
      let canManageGuild;
      let canManageRoles;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      let obj4;
      let obj6;
      pushScreen = pushScreen.pushScreen;
      ({ canManageGuild, canManageRoles } = pushScreen);
      const obj = {
        label: intl.string(pushScreen(1126).t["9Oq93m"]),
        arrow: true,
        icon: closure_15(Icon, obj2),
        onPress() {
          return pushScreen(constants.MEMBERS);
        },
      };
      const TableRow = pushScreen(5993).TableRow;
      intl = pushScreen(1126).intl;
      obj2 = { IconComponent: pushScreen(5873).GroupIcon };
      Icon = pushScreen(5993).TableRow.Icon;
      const items = [closure_15(TableRow, obj, "members")];
      if (canManageRoles) {
        const obj3 = {
          label: intl2.string(pushScreen(1126).t["LPJmL/"]),
          arrow: true,
          icon: closure_15(Icon2, obj4),
          onPress() {
            return pushScreen(constants.ROLES);
          },
        };
        const TableRow2 = tmp2(5993).TableRow;
        intl2 = tmp2(1126).intl;
        obj4 = { IconComponent: pushScreen(9232).ShieldUserIcon };
        Icon2 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow2, obj3, "roles"));
      }
      if (canManageGuild) {
        const obj5 = {
          label: intl3.string(pushScreen(1126).t.ngRFjZ),
          arrow: true,
          icon: closure_15(Icon3, obj6),
          onPress() {
            return pushScreen(constants.INSTANT_INVITES);
          },
        };
        const TableRow3 = tmp2(5993).TableRow;
        intl3 = tmp2(1126).intl;
        obj6 = { IconComponent: pushScreen(4839).LinkIcon };
        Icon3 = tmp2(5993).TableRow.Icon;
        items.push(closure_15(TableRow3, obj5, "invites"));
      }
      const obj7 = { title: intl4.string(pushScreen(1126).t.bMAKMK), hasIcons: true, children: items };
      const TableRowGroup = tmp2(6074).TableRowGroup;
      intl4 = tmp2(1126).intl;
      return closure_15(TableRowGroup, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let canManageBans;
      let canManageGuild;
      let canViewAuditLog;
      let pushScreen;
      const obj = pushScreen(576);
      const cResult = obj.c(28);
      ({ canManageGuild, canViewAuditLog, canManageBans, pushScreen } = arg0);
      if (cResult[0] === canManageBans) {
        if (cResult[1] === canManageGuild) {
          if (cResult[2] === canViewAuditLog) {
            let arr;
            if (cResult[3] === pushScreen) {
              arr = cResult[4];
            }
            let tmp53 = null;
            if (0 !== arr.length) {
              let tmp54;
              let tmp56;
              const _Symbol11 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const intl6 = pushScreen(1126).intl;
                const stringResult = intl6.string(pushScreen(1126).t["5tbTdV"]);
                cResult[25] = stringResult;
                tmp54 = stringResult;
              } else {
                tmp54 = cResult[25];
              }
              if (cResult[26] !== arr) {
                const obj2 = { title: tmp54, hasIcons: true, children: arr };
                const tmp58 = closure_15(pushScreen(6074).TableRowGroup, obj2);
                cResult[26] = arr;
                cResult[27] = tmp58;
                tmp56 = tmp58;
              } else {
                tmp56 = cResult[27];
              }
              tmp53 = tmp56;
            }
            return tmp53;
          }
        }
      }
      const items = [];
      if (canManageGuild) {
        let tmp5;
        let tmp7;
        let tmp10;
        let tmp14;
        let tmp16;
        let tmp19;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = pushScreen(1126).intl;
          const stringResult1 = intl.string(pushScreen(1126).t["5tbTdV"]);
          cResult[5] = stringResult1;
          tmp5 = stringResult1;
        } else {
          tmp5 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { IconComponent: pushScreen(17660).ModerationIcon };
          const Icon = pushScreen(5993).TableRow.Icon;
          const tmp9 = closure_15(Icon, obj3);
          cResult[6] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] !== pushScreen) {
          const obj4 = {
            label: tmp5,
            arrow: true,
            icon: tmp7,
            onPress() {
              return pushScreen(constants.MODERATION);
            },
          };
          const tmp12 = closure_15(pushScreen(5993).TableRow, obj4, "moderation");
          cResult[7] = pushScreen;
          cResult[8] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[8];
        }
        items.push(tmp10);
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = pushScreen(1126).intl;
          const stringResult2 = intl2.string(pushScreen(1126).t.uRelgx);
          cResult[9] = stringResult2;
          tmp14 = stringResult2;
        } else {
          tmp14 = cResult[9];
        }
        const _Symbol4 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { IconComponent: pushScreen(8958).RobotIcon };
          const Icon2 = pushScreen(5993).TableRow.Icon;
          const tmp18 = closure_15(Icon2, obj5);
          cResult[10] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] !== pushScreen) {
          const obj6 = {
            label: tmp14,
            arrow: true,
            icon: tmp16,
            onPress() {
              return pushScreen(constants.GUILD_AUTOMOD);
            },
          };
          const tmp21 = closure_15(pushScreen(5993).TableRow, obj6, "automod");
          cResult[11] = pushScreen;
          cResult[12] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[12];
        }
        items.push(tmp19);
      }
      if (canViewAuditLog) {
        let tmp24;
        let tmp26;
        let tmp29;
        const _Symbol5 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = pushScreen(1126).intl;
          const stringResult3 = intl3.string(pushScreen(1126).t.SPWLyT);
          cResult[13] = stringResult3;
          tmp24 = stringResult3;
        } else {
          tmp24 = cResult[13];
        }
        const _Symbol6 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { IconComponent: pushScreen(5928).ClipboardListIcon };
          const Icon3 = pushScreen(5993).TableRow.Icon;
          const tmp28 = closure_15(Icon3, obj7);
          cResult[14] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[14];
        }
        if (cResult[15] !== pushScreen) {
          const obj8 = {
            label: tmp24,
            arrow: true,
            icon: tmp26,
            onPress() {
              return pushScreen(constants.AUDIT_LOG);
            },
          };
          const tmp31 = closure_15(pushScreen(5993).TableRow, obj8, "auditlogs");
          cResult[15] = pushScreen;
          cResult[16] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[16];
        }
        items.push(tmp29);
      }
      if (canManageBans) {
        let tmp34;
        let tmp36;
        let tmp39;
        const _Symbol7 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = pushScreen(1126).intl;
          const stringResult4 = intl4.string(pushScreen(1126).t.ZbeITS);
          cResult[17] = stringResult4;
          tmp34 = stringResult4;
        } else {
          tmp34 = cResult[17];
        }
        const _Symbol8 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = { IconComponent: pushScreen(8956).HammerIcon };
          const Icon4 = pushScreen(5993).TableRow.Icon;
          const tmp38 = closure_15(Icon4, obj9);
          cResult[18] = tmp38;
          tmp36 = tmp38;
        } else {
          tmp36 = cResult[18];
        }
        if (cResult[19] !== pushScreen) {
          const obj10 = {
            label: tmp34,
            arrow: true,
            icon: tmp36,
            onPress() {
              return pushScreen(constants.BANS);
            },
          };
          const tmp41 = closure_15(pushScreen(5993).TableRow, obj10, "bans");
          cResult[19] = pushScreen;
          cResult[20] = tmp41;
          tmp39 = tmp41;
        } else {
          tmp39 = cResult[20];
        }
        items.push(tmp39);
      }
      if (canManageGuild) {
        let tmp44;
        let tmp46;
        let tmp49;
        const _Symbol9 = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = pushScreen(1126).intl;
          const stringResult5 = intl5.string(pushScreen(1126).t.Am9YHi);
          cResult[21] = stringResult5;
          tmp44 = stringResult5;
        } else {
          tmp44 = cResult[21];
        }
        const _Symbol10 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          const obj11 = { IconComponent: pushScreen(9232).ShieldUserIcon };
          const Icon5 = pushScreen(5993).TableRow.Icon;
          const tmp48 = closure_15(Icon5, obj11);
          cResult[22] = tmp48;
          tmp46 = tmp48;
        } else {
          tmp46 = cResult[22];
        }
        if (cResult[23] !== pushScreen) {
          const obj12 = {
            label: tmp44,
            arrow: true,
            icon: tmp46,
            onPress() {
              return pushScreen(constants.SECURITY);
            },
          };
          const tmp51 = closure_15(pushScreen(5993).TableRow, obj12, "security");
          cResult[23] = pushScreen;
          cResult[24] = tmp51;
          tmp49 = tmp51;
        } else {
          tmp49 = cResult[24];
        }
        items.push(tmp49);
      }
      cResult[0] = canManageBans;
      cResult[1] = canManageGuild;
      cResult[2] = canViewAuditLog;
      cResult[3] = pushScreen;
      cResult[4] = items;
      arr = items;
    }
  : (arg0) => {
      let Icon;
      let Icon2;
      let Icon3;
      let Icon4;
      let Icon5;
      let canManageBans;
      let canManageGuild;
      let canViewAuditLog;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let obj10;
      let obj2;
      let obj4;
      let obj6;
      let obj8;
      ({ canManageGuild, canViewAuditLog, canManageBans, pushScreen: require } = arg0);
      const items = [];
      if (canManageGuild) {
        const obj = {
          label: intl.string(intl8.t["5tbTdV"]),
          arrow: true,
          icon: closure_15(Icon, obj2),
          onPress() {
            return require(constants.MODERATION);
          },
        };
        const TableRow = TableRow7.TableRow;
        intl = intl8.intl;
        obj2 = { IconComponent: ModerationIcon.ModerationIcon };
        Icon = TableRow7.TableRow.Icon;
        items.push(closure_15(TableRow, obj, "moderation"));
        const obj3 = {
          label: intl2.string(intl8.t.uRelgx),
          arrow: true,
          icon: closure_15(Icon2, obj4),
          onPress() {
            return require(constants.GUILD_AUTOMOD);
          },
        };
        const TableRow2 = TableRow7.TableRow;
        intl2 = intl8.intl;
        obj4 = { IconComponent: RobotIcon.RobotIcon };
        Icon2 = TableRow7.TableRow.Icon;
        items.push(closure_15(TableRow2, obj3, "automod"));
      }
      if (canViewAuditLog) {
        const obj5 = {
          label: intl3.string(intl8.t.SPWLyT),
          arrow: true,
          icon: closure_15(Icon3, obj6),
          onPress() {
            return require(constants.AUDIT_LOG);
          },
        };
        const TableRow3 = TableRow7.TableRow;
        intl3 = intl8.intl;
        obj6 = { IconComponent: ClipboardListIcon.ClipboardListIcon };
        Icon3 = TableRow7.TableRow.Icon;
        items.push(closure_15(TableRow3, obj5, "auditlogs"));
      }
      if (!canManageBans) {
        canManageBans = canViewAuditLog;
      }
      if (canManageBans) {
        const obj7 = {
          label: intl4.string(intl8.t.ZbeITS),
          arrow: true,
          icon: closure_15(Icon4, obj8),
          onPress() {
            return require(constants.BANS);
          },
        };
        const TableRow4 = TableRow7.TableRow;
        intl4 = intl8.intl;
        obj8 = { IconComponent: HammerIcon.HammerIcon };
        Icon4 = TableRow7.TableRow.Icon;
        items.push(closure_15(TableRow4, obj7, "bans"));
      }
      if (canManageGuild) {
        const obj9 = {
          label: intl5.string(intl8.t.Am9YHi),
          arrow: true,
          icon: closure_15(Icon5, obj10),
          onPress() {
            return require(constants.SECURITY);
          },
        };
        const TableRow5 = TableRow7.TableRow;
        intl5 = intl8.intl;
        obj10 = { IconComponent: ShieldUserIcon.ShieldUserIcon };
        Icon5 = TableRow7.TableRow.Icon;
        items.push(closure_15(TableRow5, obj9, "security"));
      }
      let tmp18 = null;
      if (0 !== items.length) {
        const obj11 = { title: intl6.string(intl8.t["5tbTdV"]), hasIcons: true, children: items };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        intl6 = intl8.intl;
        tmp18 = closure_15(TableRowGroup, obj11);
      }
      return tmp18;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let canManageGuild;
      let canViewGuildAnalytics;
      let guild;
      let pushScreen;
      let tmp4;
      const obj = pushScreen(576);
      const cResult = obj.c(17);
      ({ guild, canManageGuild, canViewGuildAnalytics, pushScreen } = arg0);
      if (cResult[0] !== guild.features) {
        const features = guild.features;
        const hasItem = features.has(constants.COMMUNITY);
        cResult[0] = guild.features;
        cResult[1] = hasItem;
        tmp4 = hasItem;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === canManageGuild) {
        if (cResult[3] === canViewGuildAnalytics) {
          if (cResult[4] === tmp4) {
            let arr;
            if (cResult[5] === pushScreen) {
              arr = cResult[6];
            }
            let tmp21 = null;
            if (0 !== arr.length) {
              let tmp22;
              let tmp24;
              const _Symbol3 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = pushScreen(1126).intl;
                const stringResult = intl3.string(pushScreen(1126).t["1g9A/f"]);
                cResult[14] = stringResult;
                tmp22 = stringResult;
              } else {
                tmp22 = cResult[14];
              }
              if (cResult[15] !== arr) {
                const obj2 = { title: tmp22, hasIcons: true, children: arr };
                const tmp26 = closure_15(pushScreen(6074).TableRowGroup, obj2);
                cResult[15] = arr;
                cResult[16] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[16];
              }
              tmp21 = tmp24;
            }
            return tmp21;
          }
        }
      }
      const items = [];
      if (canManageGuild) {
        let tmp8Result;
        if (cResult[7] === tmp4) {
          let tmp7;
          if (cResult[8] === pushScreen) {
            tmp7 = cResult[9];
          }
          items.push(tmp7);
        }
        const TableRow = pushScreen(5993).TableRow;
        const obj3 = { label: null, arrow: true, icon: null, onPress: null };
        const intl = pushScreen(1126).intl;
        const string = intl.string;
        const t = pushScreen(1126).t;
        if (tmp4) {
          obj3.label = string(t.nRtNqn);
          const obj4 = { IconComponent: pushScreen(15421).TreehouseIcon };
          const Icon2 = pushScreen(5993).TableRow.Icon;
          obj3.icon = closure_15(Icon2, obj4);
          obj3.onPress = function onPress() {
            return pushScreen(constants.COMMUNITY, {});
          };
          tmp8Result = closure_15(TableRow, obj3, "community-overview");
        } else {
          obj3.label = string(t.ElKTeb);
          const obj5 = { IconComponent: pushScreen(15421).TreehouseIcon };
          const Icon = pushScreen(5993).TableRow.Icon;
          obj3.icon = closure_15(Icon, obj5);
          obj3.onPress = function onPress() {
            return pushScreen(constants.COMMUNITY_INTRO, {});
          };
          tmp8Result = closure_15(TableRow, obj3, "community-intro");
        }
        cResult[7] = tmp4;
        cResult[8] = pushScreen;
        cResult[9] = tmp8Result;
        tmp7 = tmp8Result;
      }
      if (tmp4) {
        if (canViewGuildAnalytics) {
          let tmp12;
          let tmp14;
          let tmp17;
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = pushScreen(1126).intl;
            const stringResult1 = intl2.string(pushScreen(1126).t["0wWfUG"]);
            cResult[10] = stringResult1;
            tmp12 = stringResult1;
          } else {
            tmp12 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { IconComponent: pushScreen(10108).AnalyticsIcon };
            const Icon3 = pushScreen(5993).TableRow.Icon;
            const tmp16 = closure_15(Icon3, obj6);
            cResult[11] = tmp16;
            tmp14 = tmp16;
          } else {
            tmp14 = cResult[11];
          }
          if (cResult[12] !== pushScreen) {
            const obj7 = {
              label: tmp12,
              arrow: true,
              icon: tmp14,
              onPress() {
                return pushScreen(constants.ANALYTICS);
              },
            };
            const tmp19 = closure_15(pushScreen(5993).TableRow, obj7, "analytics");
            cResult[12] = pushScreen;
            cResult[13] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[13];
          }
          items.push(tmp17);
        }
      }
      cResult[2] = canManageGuild;
      cResult[3] = canViewGuildAnalytics;
      cResult[4] = tmp4;
      cResult[5] = pushScreen;
      cResult[6] = items;
      arr = items;
    }
  : (pushScreen) => {
      let Icon3;
      let canManageGuild;
      let canViewGuildAnalytics;
      let intl2;
      let intl3;
      let obj5;
      pushScreen = pushScreen.pushScreen;
      const features = pushScreen.guild.features;
      ({ canManageGuild, canViewGuildAnalytics } = pushScreen);
      let hasItem = features.has(constants.COMMUNITY);
      const items = [];
      if (canManageGuild) {
        let tmp2Result;
        const TableRow = pushScreen(5993).TableRow;
        const obj = { label: null, arrow: true, icon: null, onPress: null };
        const intl = pushScreen(1126).intl;
        const string = intl.string;
        const t = pushScreen(1126).t;
        if (hasItem) {
          obj.label = string(t.nRtNqn);
          const obj2 = { IconComponent: pushScreen(15421).TreehouseIcon };
          const Icon2 = tmp3(5993).TableRow.Icon;
          obj.icon = closure_15(Icon2, obj2);
          obj.onPress = function onPress() {
            return pushScreen(constants.COMMUNITY, {});
          };
          tmp2Result = closure_15(TableRow, obj, "community-overview");
        } else {
          obj.label = string(t.ElKTeb);
          const obj3 = { IconComponent: pushScreen(15421).TreehouseIcon };
          const Icon = tmp3(5993).TableRow.Icon;
          obj.icon = closure_15(Icon, obj3);
          obj.onPress = function onPress() {
            return pushScreen(constants.COMMUNITY_INTRO, {});
          };
          tmp2Result = closure_15(TableRow, obj, "community-intro");
        }
        items.push(tmp2Result);
      }
      if (hasItem) {
        hasItem = canViewGuildAnalytics;
      }
      if (hasItem) {
        const obj4 = {
          label: intl2.string(pushScreen(1126).t["0wWfUG"]),
          arrow: true,
          icon: closure_15(Icon3, obj5),
          onPress() {
            return pushScreen(constants.ANALYTICS);
          },
        };
        const TableRow2 = pushScreen(5993).TableRow;
        intl2 = pushScreen(1126).intl;
        obj5 = { IconComponent: pushScreen(10108).AnalyticsIcon };
        Icon3 = pushScreen(5993).TableRow.Icon;
        items.push(closure_15(TableRow2, obj4, "analytics"));
      }
      let tmp11 = null;
      if (0 !== items.length) {
        const obj6 = { title: intl3.string(pushScreen(1126).t["1g9A/f"]), hasIcons: true, children: items };
        const TableRowGroup = pushScreen(6074).TableRowGroup;
        intl3 = pushScreen(1126).intl;
        tmp11 = closure_15(TableRowGroup, obj6);
      }
      return tmp11;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let canManageBans;
      let canManageChannels;
      let canManageGuild;
      let canManageGuildExpressions;
      let canManageRoles;
      let canManageWebhooks;
      let canViewAuditLog;
      let canViewGuildAnalytics;
      let contentContainerStyle;
      let first;
      let isGuildAdmin;
      let tmp11;
      let tmp13;
      let tmp16;
      let tmp9;
      let updateErrors;
      const tmp = guild;
      let obj = guild(576);
      const cResult = obj.c(81);
      guild = guild.guild;
      ({ contentContainerStyle, updateErrors } = guild);
      let obj2 = guild(4580);
      const token = obj2.useToken(updateErrors(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp5 = closure_18();
      let obj3 = guild(1490);
      navigation = obj3.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function s() {
          let id;
          const getChannels = GuildChannelStore.getChannels;
          if (guild != null) {
            id = guild.id;
          }
          const channels = getChannels(id);
          let tmp4;
          if (channels != null) {
            tmp4 = channels[map1.GUILD_CATEGORY];
          }
          return tmp4;
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [PermissionStore];
        cResult[3] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== guild) {
        const fn2 = function v() {
          return PermissionStore.getGuildPermissionProps(guild);
        };
        cResult[4] = guild;
        cResult[5] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[5];
      }
      const tmpResult4 = tmp(504);
      const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp11, tmp13);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            const LANDING = constants.LANDING;
            const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
            const obj = updateErrors(dependencyMap[9]);
            obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
          }
        }
        const items2 = [];
        cResult[6] = O;
        cResult[7] = items2;
        tmp16 = items2;
      } else {
        class O {
          constructor() {
            const LANDING = constants.LANDING;
            const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
            const obj = updateErrors(dependencyMap[9]);
            obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
          }
        }
        tmp16 = cResult[7];
      }
      const effect = react.useEffect(O, tmp16);
      if (cResult[8] !== navigation) {
        class O {
          constructor() {
            const LANDING = constants.LANDING;
            const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
            const obj = updateErrors(dependencyMap[9]);
            obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
          }
        }
        cResult[8] = navigation;
        cResult[9] = tmp19;
      } else {
        class O {
          constructor() {
            const LANDING = constants.LANDING;
            const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
            const obj = updateErrors(dependencyMap[9]);
            obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
          }
        }
      }
      ({
        isGuildAdmin,
        canManageGuild,
        canManageRoles,
        canManageBans,
        canManageGuildExpressions,
        canManageChannels,
        canViewAuditLog,
        canManageWebhooks,
        canViewGuildAnalytics,
      } = stateFromStoresObject);
      const tmpResult5 = tmp(17662);
      tmpResult5.useChannelsAllowedToUnlink(guild.id).length > 0;
      const tmpResult6 = tmp(6763);
      const canManageGuildRoleSubscriptions = tmpResult6.useCanManageGuildRoleSubscriptions(guild);
      if (cResult[10] === canManageGuild) {
        let tmp26;
        class O {
          constructor() {
            const LANDING = constants.LANDING;
            const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
            const obj = updateErrors(dependencyMap[9]);
            obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
          }
        }
        if (cResult[13] !== guild.id) {
          class O {
            constructor() {
              const LANDING = constants.LANDING;
              const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
              const obj = updateErrors(dependencyMap[9]);
              obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
            }
          }
          cResult[13] = guild.id;
          cResult[14] = tmp24;
        } else {
          class O {
            constructor() {
              const LANDING = constants.LANDING;
              const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
              const obj = updateErrors(dependencyMap[9]);
              obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
            }
          }
        }
        if (cResult[15] !== updateErrors.message) {
          class O {
            constructor() {
              const LANDING = constants.LANDING;
              const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
              const obj = updateErrors(dependencyMap[9]);
              obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
            }
          }
          const items3 = [updateErrors.message];
          cResult[15] = updateErrors.message;
          cResult[16] = tmp27;
          cResult[17] = items3;
          tmp26 = items3;
        } else {
          class O {
            constructor() {
              const LANDING = constants.LANDING;
              const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
              const obj = updateErrors(dependencyMap[9]);
              obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
            }
          }
          tmp26 = cResult[17];
        }
        const layoutEffect = react.useLayoutEffect(tmp27, tmp26);
        if (cResult[18] === contentContainerStyle) {
          class O {
            constructor() {
              const LANDING = constants.LANDING;
              const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
              const obj = updateErrors(dependencyMap[9]);
              obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
            }
          }
          if (cResult[21] !== token) {
            class O {
              constructor() {
                const LANDING = constants.LANDING;
                const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
                const obj = updateErrors(dependencyMap[9]);
                obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
              }
            }
            tmp31[0] = token;
            cResult[21] = token;
            cResult[22] = tmp31;
          } else {
            class O {
              constructor() {
                const LANDING = constants.LANDING;
                const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
                const obj = updateErrors(dependencyMap[9]);
                obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
              }
            }
          }
          if (cResult[23] !== guild.id) {
            class O {
              constructor() {
                const LANDING = constants.LANDING;
                const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
                const obj = updateErrors(dependencyMap[9]);
                obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
              }
            }
            cResult[23] = guild.id;
            cResult[24] = tmp33;
          } else {
            class O {
              constructor() {
                const LANDING = constants.LANDING;
                const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
                const obj = updateErrors(dependencyMap[9]);
                obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
              }
            }
          }
          if (cResult[25] === guild.icon) {
            class O {
              constructor() {
                const LANDING = constants.LANDING;
                const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
                const obj = updateErrors(dependencyMap[9]);
                obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
              }
            }
          }
          const obj4 = {
            onUpload: tmp24,
            type: "guild",
            icon: null,
            name: null,
            makeURL: tmp33,
            disabled: !stateFromStoresObject.canManageGuild,
          };
          ({ icon: obj10.icon, name: obj10.name } = guild);
          cResult[25] = guild.icon;
          cResult[26] = guild.name;
          cResult[27] = tmp24;
          cResult[28] = tmp33;
          cResult[29] = !stateFromStoresObject.canManageGuild;
          cResult[30] = obj4;
        }
        const items4 = [tmp5.containerContent, contentContainerStyle];
        cResult[18] = contentContainerStyle;
        cResult[19] = tmp5.containerContent;
        cResult[20] = items4;
      }
      let result = canManageGuild;
      if (result) {
        class O {
          constructor() {
            const LANDING = constants.LANDING;
            const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
            const obj = updateErrors(dependencyMap[9]);
            obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
          }
        }
        result = obj9.isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
      }
      cResult[10] = canManageGuild;
      cResult[11] = guild;
      cResult[12] = result;
    }
  : (guild) => {
      let Stack;
      let canManageBans;
      let canManageChannels;
      let canManageGuild;
      let canManageGuildExpressions;
      let canManageRoles;
      let canManageWebhooks;
      let canViewAuditLog;
      let canViewGuildAnalytics;
      let isGuildAdmin;
      let items4;
      let items5;
      let items6;
      let obj9;
      guild = guild.guild;
      const updateErrors = guild.updateErrors;
      const tmp = guild;
      const contentContainerStyle = guild.contentContainerStyle;
      let obj = guild(4580);
      const token = obj.useToken(updateErrors(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp5 = closure_18();
      let obj2 = guild(1490);
      navigation = obj2.useNavigation();
      let obj3 = guild(504);
      let items = [GuildChannelStore];
      const stateFromStores = obj3.useStateFromStores(items, () => {
        let id;
        const getChannels = GuildChannelStore.getChannels;
        if (guild != null) {
          id = guild.id;
        }
        const channels = getChannels(id);
        let tmp4;
        if (channels != null) {
          tmp4 = channels[map1.GUILD_CATEGORY];
        }
        return tmp4;
      });
      let items1 = [PermissionStore];
      const obj4 = guild(504);
      const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () =>
        PermissionStore.getGuildPermissionProps(guild),
      );
      const effect = react.useEffect(() => {
        const LANDING = constants.LANDING;
        const obj2 = { settings_type: "guild", origin_pane: "Array", destination_pane: LANDING };
        const obj = updateErrors(dependencyMap[9]);
        obj.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj2);
      }, []);
      const items2 = [navigation];
      const callback = react.useCallback(() => {
        const items = [...arguments];
        const first = items[0];
        const state = navigation.getState();
        let name;
        if (state.routes[state.index] != null) {
          name = tmp5.name;
        }
        if (name !== first) {
          const obj = GuildSettingsActionCreatorsDefault;
          obj.setSection(first);
          const navigate = navigation.navigate;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, items, 0);
          HermesBuiltin.apply(navigate, items1, navigation);
          const LANDING = constants.LANDING;
          const obj3 = { settings_type: "guild", origin_pane: LANDING, destination_pane: first };
          const obj2 = AppAnalyticsUtilsDefault;
          obj2.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, obj3);
        }
      }, items2);
      ({
        canManageGuild,
        isGuildAdmin,
        canManageRoles,
        canManageBans,
        canManageGuildExpressions,
        canManageChannels,
        canViewAuditLog,
        canManageWebhooks,
        canViewGuildAnalytics,
      } = stateFromStoresObject);
      const obj6 = guild(17662);
      const tmp11 = obj6.useChannelsAllowedToUnlink(guild.id).length > 0;
      const obj7 = guild(6763);
      const canManageGuildRoleSubscriptions = obj7.useCanManageGuildRoleSubscriptions(guild);
      let result = canManageGuild;
      if (result) {
        const tmpResult = tmp(6770);
        result = tmpResult.isGuildOfficialMessagesEnabled(guild, "GuildSettingsModalLanding");
      }
      const items3 = [updateErrors.message];
      const layoutEffect = react.useLayoutEffect(() => {
        if (null != updateErrors.message) {
          const obj = ToastUtils;
          obj.presentError(tmp.message);
        }
      }, items3);
      const obj8 = { style: tmp5.container, contentContainerStyle: items4, children: closure_16(Stack, obj9) };
      items4 = [tmp5.containerContent, contentContainerStyle];
      const Form = tmp(8895).Form;
      obj9 = { style: { paddingHorizontal: token }, spacing: updateErrors(587).space.PX_24, children: items5 };
      Stack = tmp(5593).Stack;
      items5 = [, , , , , ,];
      const obj10 = {
        iconProps: {
          onUpload(base64) {
            const obj = GuildSettingsActionCreatorsDefault;
            obj.updateIcon(guild.id, base64);
          },
          type: "guild",
          icon: guild.icon,
          name: guild.name,
          makeURL(icon) {
            let guildIconURL = icon;
            if (guildIconURL) {
              const obj2 = { id: guild.id, icon, canAnimate: true, size: 64 };
              const obj = AvatarUtilsDefault;
              guildIconURL = obj.getGuildIconURL(obj2);
            }
            return guildIconURL;
          },
          disabled: !stateFromStoresObject.canManageGuild,
        },
        text: guild.name,
        textAccessibilityRole: "header",
      };
      items5[0] = closure_15(updateErrors(17030), obj10);
      items5[1] = closure_15(closure_19, {
        guild,
        categories: stateFromStores,
        isGuildAdmin,
        canManageGuild,
        canManageChannels,
        canUnlinkChannelLobbies: tmp11,
        canManageWebhooks,
        pushScreen: callback,
      });
      items5[2] = closure_15(closure_20, {
        canManageGuildExpressions,
        canConfigureOfficialMessages: result,
        pushScreen: callback,
      });
      items5[3] = closure_15(closure_21, { canManageGuild, canManageRoles, pushScreen: callback });
      items5[4] = closure_15(closure_22, { canManageGuild, canViewAuditLog, canManageBans, pushScreen: callback });
      items5[5] = closure_15(closure_23, { guild, canManageGuild, canViewGuildAnalytics, pushScreen: callback });
      let tmp17Result = canManageGuildRoleSubscriptions;
      if (tmp17Result) {
        const obj11 = { guild, pushScreen: callback };
        tmp17Result = closure_15(tmp3(17663), obj11);
      }
      const obj12 = { children: items6 };
      items5[6] = tmp17Result;
      items6 = [closure_15(Form, obj8), closure_15(tmp(6536).NavScrim, {})];
      return closure_16(closure_17, obj12);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let tmp10;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = guildId(576);
      const cResult = obj.c(10);
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function l() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildSettingsStore];
        class I {
          constructor() {
            const obj = { errors: errors.getErrors() };
            return obj;
          }
        }
        const items2 = [];
        cResult[3] = items1;
        cResult[4] = I;
        cResult[5] = items2;
        tmp10 = items2;
        tmp9 = I;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const tmpResult2 = guildId(504);
      const errors = tmpResult2.useStateFromStoresObject(tmp8, tmp9, tmp10).errors;
      if (cResult[6] === contentContainerStyle) {
        if (cResult[7] === errors) {
          let tmp12;
          if (cResult[8] === stateFromStores) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      let tmp13 = null;
      if (null != stateFromStores) {
        const obj2 = { guild: null, contentContainerStyle, updateErrors: errors };
        class I {
          constructor() {
            const obj = { errors: errors.getErrors() };
            return obj;
          }
        }
        tmp13 = closure_15(closure_24, obj2);
      }
      cResult[6] = contentContainerStyle;
      cResult[7] = errors;
      cResult[8] = stateFromStores;
      cResult[9] = tmp13;
      tmp12 = tmp13;
    }
  : (guildId) => {
      let errors;
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      let obj = guildId(504);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      guildId(504);
      [][0] = GuildSettingsStore;
      let tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = { guild: stateFromStores, contentContainerStyle, updateErrors: tmp3 };
        tmp4 = closure_15(closure_24, obj2);
      }
      return tmp4;
    };
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalLanding.tsx");

export default tmp4;
