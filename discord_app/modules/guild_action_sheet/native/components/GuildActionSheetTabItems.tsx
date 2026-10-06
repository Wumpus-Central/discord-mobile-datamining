// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import BoostingActionCreatorsAll from "../../../../actions/native/BoostingActionCreators.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import utils_InstantInviteUtils from "../../../../utils/native/InstantInviteUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guild, importAll;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
({
  AnalyticEvents: metroImportAll,
  AnalyticsObjects: c9,
  AnalyticsSections: c10,
  InstantInviteSources: unpackModuleId,
} = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let closure_2;
      let first;
      let intl3;
      let intl4;
      let items1;
      let stateFromStores;
      let tmp7;
      let obj = guild(576);
      const cResult = obj.c(32);
      guild = guild.guild;
      let obj2 = guild(13792);
      const canAccessSettings = obj2.useGuildActionSheetPermissions(guild).canAccessSettings;
      const total = stateFromStores(7682)(guild.id).total;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function _() {
          return GuildChannelStore.getChannels(guild.id);
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guild(504);
      stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === stateFromStores) {
        let tmp9;
        if (cResult[4] === guild) {
          tmp9 = cResult[5];
        }
        if (cResult[6] === stateFromStores) {
          let tmp11;
          let tmp12;
          let tmp13;
          let tmp15;
          if (cResult[7] === guild) {
            tmp11 = cResult[8];
          }
          importAll = tmp11;
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = { flexWrap: "wrap" };
            cResult[9] = obj3;
            tmp12 = obj3;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] !== total) {
            let formatToPlainStringResult;
            if (total > 0) {
              const intl2 = tmp(1126).intl;
              let obj4 = { subscriptions: total };
              formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["pob/cL"], obj4);
            } else {
              const intl = tmp(1126).intl;
              formatToPlainStringResult = intl.string(tmp(1126).t.Uj0md3);
            }
            cResult[10] = total;
            cResult[11] = formatToPlainStringResult;
            tmp13 = formatToPlainStringResult;
          } else {
            tmp13 = cResult[11];
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            let obj5 = { color: stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
            const BoostGemIcon = tmp(4832).BoostGemIcon;
            const tmp17 = closure_12(BoostGemIcon, obj5);
            cResult[12] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[12];
          }
          if (cResult[13] !== guild.id) {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
            cResult[13] = guild.id;
            cResult[14] = R;
          } else {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
          }
          if (cResult[15] === tmp13) {
            class R {
              constructor() {
                let obj3;
                const obj2 = { location: obj3 };
                obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                const obj = AppAnalyticsUtilsDefault;
                obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                const obj4 = ActionSheetActionCreatorsDefault;
                obj4.hideActionSheet();
                const obj5 = BoostingActionCreatorsAll;
                obj5.openApplyBoostModal(guild.id);
              }
            }
            if (cResult[18] === tmp9) {
              let tmp24;
              class R {
                constructor() {
                  let obj3;
                  const obj2 = { location: obj3 };
                  obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                  const obj = AppAnalyticsUtilsDefault;
                  obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                  const obj4 = ActionSheetActionCreatorsDefault;
                  obj4.hideActionSheet();
                  const obj5 = BoostingActionCreatorsAll;
                  obj5.openApplyBoostModal(guild.id);
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor() {
                    let obj3;
                    const obj2 = { location: obj3 };
                    obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                    const obj = AppAnalyticsUtilsDefault;
                    obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                    const obj5 = BoostingActionCreatorsAll;
                    obj5.openApplyBoostModal(guild.id);
                  }
                }
                const stringResult = obj10.string(guild(1126).t.HcoRu0);
                cResult[21] = stringResult;
                tmp24 = stringResult;
              } else {
                class R {
                  constructor() {
                    let obj3;
                    const obj2 = { location: obj3 };
                    obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                    const obj = AppAnalyticsUtilsDefault;
                    obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                    const obj5 = BoostingActionCreatorsAll;
                    obj5.openApplyBoostModal(guild.id);
                  }
                }
              }
              if (cResult[22] !== guild.id) {
                class R {
                  constructor() {
                    let obj3;
                    const obj2 = { location: obj3 };
                    obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                    const obj = AppAnalyticsUtilsDefault;
                    obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                    const obj5 = BoostingActionCreatorsAll;
                    obj5.openApplyBoostModal(guild.id);
                  }
                }
                const obj6 = {
                  variant: "secondary",
                  label: tmp24,
                  icon: stateFromStores(7619),
                  grow: true,
                  onPress() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    const obj2 = NotificationSettingsModalActionCreatorsDefault;
                    obj2.open(guild.id);
                  },
                };
                const IconButton2 = tmp(7586).IconButton;
                cResult[22] = guild.id;
                cResult[23] = closure_12(IconButton2, obj6);
                const tmp27 = closure_12(IconButton2, obj6);
              } else {
                class R {
                  constructor() {
                    let obj3;
                    const obj2 = { location: obj3 };
                    obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                    const obj = AppAnalyticsUtilsDefault;
                    obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                    const obj5 = BoostingActionCreatorsAll;
                    obj5.openApplyBoostModal(guild.id);
                  }
                }
              }
              if (cResult[24] === canAccessSettings) {
                class R {
                  constructor() {
                    let obj3;
                    const obj2 = { location: obj3 };
                    obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                    const obj = AppAnalyticsUtilsDefault;
                    obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                    const obj5 = BoostingActionCreatorsAll;
                    obj5.openApplyBoostModal(guild.id);
                  }
                }
                if (cResult[27] === tmp22) {
                  class R {
                    constructor() {
                      let obj3;
                      const obj2 = { location: obj3 };
                      obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                      const obj = AppAnalyticsUtilsDefault;
                      obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                      const obj4 = ActionSheetActionCreatorsDefault;
                      obj4.hideActionSheet();
                      const obj5 = BoostingActionCreatorsAll;
                      obj5.openApplyBoostModal(guild.id);
                    }
                  }
                }
                const obj7 = { direction: "horizontal", style: tmp12, children: items1 };
                items1 = [tmp19, tmp22, tmp26, tmp28];
                cResult[27] = tmp22;
                cResult[28] = tmp26;
                cResult[29] = tmp28;
                cResult[30] = tmp19;
                cResult[31] = closure_13(guild(5599).ButtonGroup, obj7);
                const tmp32 = closure_13(guild(5599).ButtonGroup, obj7);
              }
              let tmp29 = canAccessSettings;
              if (tmp29) {
                class R {
                  constructor() {
                    let obj3;
                    const obj2 = { location: obj3 };
                    obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                    const obj = AppAnalyticsUtilsDefault;
                    obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                    const obj4 = ActionSheetActionCreatorsDefault;
                    obj4.hideActionSheet();
                    const obj5 = BoostingActionCreatorsAll;
                    obj5.openApplyBoostModal(guild.id);
                  }
                }
                const obj8 = {
                  variant: "secondary",
                  label: intl4.string(guild(1126).t["3D5yo/"]),
                  icon: stateFromStores(6894),
                  grow: true,
                  onPress() {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    const obj2 = GuildSettingsActionCreatorsDefault;
                    obj2.open(guild.id);
                  },
                };
                const IconButton3 = tmp(7586).IconButton;
                intl4 = tmp(1126).intl;
                tmp29 = closure_12(IconButton3, obj8);
              }
              cResult[24] = canAccessSettings;
              cResult[25] = guild.id;
              cResult[26] = tmp29;
            }
            let tmp23 = tmp9;
            if (tmp23) {
              class R {
                constructor() {
                  let obj3;
                  const obj2 = { location: obj3 };
                  obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
                  const obj = AppAnalyticsUtilsDefault;
                  obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
                  const obj4 = ActionSheetActionCreatorsDefault;
                  obj4.hideActionSheet();
                  const obj5 = BoostingActionCreatorsAll;
                  obj5.openApplyBoostModal(guild.id);
                }
              }
              const obj9 = {
                variant: "secondary",
                label: intl3.string(guild(1126).t.VINpSK),
                icon: stateFromStores(9728),
                grow: true,
                onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  closure_2();
                },
              };
              const IconButton = tmp(7586).IconButton;
              intl3 = tmp(1126).intl;
              tmp23 = closure_12(IconButton, obj9);
            }
            cResult[18] = tmp9;
            cResult[19] = tmp11;
            cResult[20] = tmp23;
          }
          const obj11 = { variant: "secondary", label: tmp13, icon: tmp15, grow: true, onPress: R };
          cResult[15] = tmp13;
          cResult[16] = R;
          cResult[17] = closure_12(guild(7586).IconButton, obj11);
          const tmp21 = closure_12(guild(7586).IconButton, obj11);
        }
        const fn2 = function f() {
          const channelId = SelectedChannelStore.getChannelId(guild.id);
          const obj = utils_InstantInviteUtils;
          let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
          if (null == channel) {
            channel = GuildChannelStore.getDefaultChannel(guild.id);
          }
          if (null != channel) {
            const tmp3Result = instant_invite_InstantInviteUtils;
            const result = tmp3Result.handleOpenInviteActionsheet(
              guild,
              channel.id,
              stateFromStores,
              unpackModuleId.SERVER_PROFILE,
            );
          }
        };
        cResult[6] = stateFromStores;
        cResult[7] = guild;
        cResult[8] = fn2;
        tmp11 = fn2;
      }
      const tmpResult2 = guild(9497);
      const shouldRenderInviteResult = tmpResult2.shouldRenderInvite(stateFromStores, guild);
      cResult[3] = stateFromStores;
      cResult[4] = guild;
      cResult[5] = shouldRenderInviteResult;
      tmp9 = shouldRenderInviteResult;
    }
  : (guild) => {
      let BoostGemIcon;
      let formatToPlainStringResult;
      let intl3;
      let intl4;
      let intl5;
      let items2;
      let obj7;
      guild = guild.guild;
      let stateFromStores;
      let obj = guild(13792);
      let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
      const total = stateFromStores(7682)(guild.id).total;
      let obj2 = guild(504);
      const items = [GuildChannelStore];
      stateFromStores = obj2.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
      let obj3 = guild(9497);
      let shouldRenderInviteResult = obj3.shouldRenderInvite(stateFromStores, guild);
      const items1 = [stateFromStores, guild];
      let closure_2 = react.useCallback(() => {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        const obj = utils_InstantInviteUtils;
        let channel = ChannelStore.getChannel(obj.getInviteChannelId(channelId, stateFromStores));
        if (null == channel) {
          channel = GuildChannelStore.getDefaultChannel(guild.id);
        }
        if (null != channel) {
          const tmp3Result = instant_invite_InstantInviteUtils;
          const result = tmp3Result.handleOpenInviteActionsheet(
            guild,
            channel.id,
            stateFromStores,
            unpackModuleId.SERVER_PROFILE,
          );
        }
      }, items1);
      let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: items2 };
      const ButtonGroup = guild(5599).ButtonGroup;
      const IconButton = guild(7586).IconButton;
      if (total > 0) {
        const intl2 = tmp(1126).intl;
        let obj5 = { subscriptions: total };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["pob/cL"], obj5);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t.Uj0md3);
      }
      const obj6 = {
        variant: "secondary",
        label: formatToPlainStringResult,
        icon: closure_12(BoostGemIcon, obj7),
        grow: true,
        onPress() {
          let obj3;
          const obj2 = { location: obj3 };
          obj3 = { section: constants2.GUILD_POPOUT, object: constants.BOOST_GEM_ICON };
          const obj = AppAnalyticsUtilsDefault;
          obj.trackWithMetadata(metroImportAll.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
          const obj5 = BoostingActionCreatorsAll;
          obj5.openApplyBoostModal(guild.id);
        },
      };
      obj7 = { color: stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
      BoostGemIcon = tmp(4832).BoostGemIcon;
      items2 = [closure_12(IconButton, obj6), , ,];
      if (shouldRenderInviteResult) {
        const obj8 = {
          variant: "secondary",
          label: intl3.string(guild(1126).t.VINpSK),
          icon: stateFromStores(9728),
          grow: true,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            closure_2();
          },
        };
        const IconButton2 = tmp(7586).IconButton;
        intl3 = tmp(1126).intl;
        shouldRenderInviteResult = closure_12(IconButton2, obj8);
      }
      items2[1] = shouldRenderInviteResult;
      const obj9 = {
        variant: "secondary",
        label: intl4.string(guild(1126).t.HcoRu0),
        icon: stateFromStores(7619),
        grow: true,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = NotificationSettingsModalActionCreatorsDefault;
          obj2.open(guild.id);
        },
      };
      const IconButton3 = tmp(7586).IconButton;
      intl4 = tmp(1126).intl;
      items2[2] = closure_12(IconButton3, obj9);
      if (canAccessSettings) {
        const obj10 = {
          variant: "secondary",
          label: intl5.string(guild(1126).t["3D5yo/"]),
          icon: stateFromStores(6894),
          grow: true,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = GuildSettingsActionCreatorsDefault;
            obj2.open(guild.id);
          },
        };
        const IconButton4 = tmp(7586).IconButton;
        intl5 = tmp(1126).intl;
        canAccessSettings = closure_12(IconButton4, obj10);
      }
      items2[3] = canAccessSettings;
      return closure_13(ButtonGroup, obj4);
    };
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default tmp4;
