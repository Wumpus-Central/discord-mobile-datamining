// discord_app/modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import openGuildActionSheetDefault from "../../guild_action_sheet/native/openGuildActionSheet.tsx";
import DmSettingsUpsellManager from "../DmSettingsUpsellManager.tsx";
import DmSettingsUpsellUtils from "../DmSettingsUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 },
  headerImage: { alignSelf: "center", width: 73, height: 86 },
  title: { textAlign: "center", alignSelf: "center", width: 250 },
  body: { textAlign: "center" },
  guildContainer: null,
  guildInfo: null,
  footer: null,
};
let obj3 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.guildContainer = { paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.guildInfo = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
let obj5 = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
obj2.footer = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DmSettingsUpsellActionSheet(guildId) {
      const cResult = guildId(576).c(55);
      guildId = guildId.guildId;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function p() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
      if (cResult[3] !== guildId) {
        const fn2 = function f() {
          const result = DmSettingsUpsellManager.acknowledgeDmSettingsUpsell(guildId);
          DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
        };
        const items1 = [guildId];
        cResult[3] = guildId;
        cResult[4] = fn2;
        cResult[5] = items1;
        let tmp10 = items1;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[6] !== guildId) {
          function handleDismiss() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
          }
          cResult[6] = guildId;
          cResult[7] = handleDismiss;
          let tmp12 = handleDismiss;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === stateFromStores) {
          if (cResult[9] === guildId) {
            let tmp13 = cResult[10];
          }
          if (cResult[11] !== guildId) {
            function handleSubmit() {
              const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
              sanitizedRestrictedGuilds.add(guildId);
              const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
              RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
                const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(5005), content: null };
                const intl = guildId(1126).intl;
                obj2.content = intl.string(guildId(1126).t.rlYD1W);
                stateFromStores(4766).open(obj2);
              });
              const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
              ActionSheetActionCreatorsDefault.hideActionSheet();
              DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
            }
            cResult[11] = guildId;
            cResult[12] = handleSubmit;
            let tmp14 = handleSubmit;
          } else {
            tmp14 = cResult[12];
          }
          if (cResult[13] !== tmp4.headerImage) {
            let obj2 = { source: stateFromStores(10380), style: tmp4.headerImage };
            const tmp19 = closure_7(closure_5, obj2);
            cResult[13] = tmp4.headerImage;
            cResult[14] = tmp19;
            let tmp15 = tmp19;
          } else {
            tmp15 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.w2BvnL);
            cResult[15] = stringResult;
            let tmp20 = stringResult;
          } else {
            tmp20 = cResult[15];
          }
          if (cResult[16] !== tmp4.title) {
            let obj3 = {
              variant: "heading-lg/bold",
              color: "mobile-text-heading-primary",
              style: tmp4.title,
              children: tmp20,
            };
            const tmp24 = closure_7(tmp(5086).Text, obj3);
            cResult[16] = tmp4.title;
            cResult[17] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[17];
          }
          if (cResult[18] !== stateFromStores.name) {
            const intl2 = tmp(1126).intl;
            const obj4 = { guild_name: stateFromStores.name };
            const formatResult = intl2.format(tmp(1126).t.Depjkv, obj4);
            cResult[18] = stateFromStores.name;
            cResult[19] = formatResult;
            let tmp25 = formatResult;
          } else {
            tmp25 = cResult[19];
          }
          if (cResult[20] === tmp4.body) {
            if (cResult[21] === tmp25) {
              let tmp27 = cResult[22];
            }
            const _Symbol2 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { variant: "eyebrow", color: "text-default", children: null };
              const intl3 = tmp(1126).intl;
              obj5.children = intl3.string(tmp(1126).t.KPB2iw);
              const tmp32 = closure_7(tmp(5086).Text, obj5);
              cResult[23] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[23];
            }
            if (cResult[24] !== stateFromStores) {
              const obj6 = { guild: stateFromStores, size: tmp(6161).GuildIconSizes.SMALL_32 };
              const tmp37 = closure_7(stateFromStores(6161), obj6);
              cResult[24] = stateFromStores;
              cResult[25] = tmp37;
              let tmp33 = tmp37;
              const tmp36 = stateFromStores(6161);
            } else {
              tmp33 = cResult[25];
            }
            if (cResult[26] !== stateFromStores.name) {
              const obj7 = {
                variant: "text-md/semibold",
                color: "mobile-text-heading-primary",
                children: stateFromStores.name,
              };
              const tmp40 = closure_7(tmp(5086).Text, obj7);
              cResult[26] = stateFromStores.name;
              cResult[27] = tmp40;
              let tmp38 = tmp40;
            } else {
              tmp38 = cResult[27];
            }
            if (cResult[28] === tmp4.guildInfo) {
              if (cResult[29] === tmp33) {
                if (cResult[30] === tmp38) {
                  let tmp41 = cResult[31];
                }
                if (cResult[32] === tmp4.guildContainer) {
                  if (cResult[33] === tmp41) {
                    let tmp45 = cResult[34];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult1 = intl4.string(tmp(1126).t.TD7iUx);
                    cResult[35] = stringResult1;
                    let tmp49 = stringResult1;
                  } else {
                    tmp49 = cResult[35];
                  }
                  if (cResult[36] !== tmp14) {
                    const obj8 = { size: "lg", onPress: tmp14, text: tmp49 };
                    const tmp53 = closure_7(tmp(5375).Button, obj8);
                    cResult[36] = tmp14;
                    cResult[37] = tmp53;
                    let tmp51 = tmp53;
                  } else {
                    tmp51 = cResult[37];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = tmp(1126).intl;
                    const stringResult2 = intl5.string(tmp(1126).t.PsWbcp);
                    cResult[38] = stringResult2;
                    let tmp54 = stringResult2;
                  } else {
                    tmp54 = cResult[38];
                  }
                  if (cResult[39] !== tmp12) {
                    const obj9 = { size: "lg", variant: "secondary", onPress: tmp12, text: tmp54 };
                    const tmp58 = closure_7(tmp(5375).Button, obj9);
                    cResult[39] = tmp12;
                    cResult[40] = tmp58;
                    let tmp56 = tmp58;
                  } else {
                    tmp56 = cResult[40];
                  }
                  if (cResult[41] !== tmp13) {
                    const intl6 = tmp(1126).intl;
                    const obj10 = { onClick: tmp13 };
                    const formatResult1 = intl6.format(tmp(1126).t.IzZxXW, obj10);
                    cResult[41] = tmp13;
                    cResult[42] = formatResult1;
                    let tmp59 = formatResult1;
                  } else {
                    tmp59 = cResult[42];
                  }
                  if (cResult[43] === tmp4.footer) {
                    if (cResult[44] === tmp59) {
                      let tmp61 = cResult[45];
                    }
                    if (cResult[46] === tmp4.container) {
                      if (cResult[47] === tmp22) {
                        if (cResult[48] === tmp27) {
                          if (cResult[49] === tmp45) {
                            if (cResult[50] === tmp51) {
                              if (cResult[51] === tmp56) {
                                if (cResult[52] === tmp61) {
                                  if (cResult[53] === tmp15) {
                                    let tmp64 = cResult[54];
                                  }
                                  return tmp64;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj11 = { startExpanded: true, children: null };
                    const obj12 = { style: tmp4.container, children: null };
                    const items2 = [tmp15, tmp22, tmp27, tmp45, tmp51, tmp56, tmp61];
                    obj12.children = items2;
                    obj11.children = closure_8(closure_4, obj12);
                    const tmp68 = closure_7(tmp(6885).ActionSheet, obj11);
                    cResult[46] = tmp4.container;
                    cResult[47] = tmp22;
                    cResult[48] = tmp27;
                    cResult[49] = tmp45;
                    cResult[50] = tmp51;
                    cResult[51] = tmp56;
                    cResult[52] = tmp61;
                    cResult[53] = tmp15;
                    cResult[54] = tmp68;
                    tmp64 = tmp68;
                  }
                  const obj13 = { variant: "text-xs/normal", style: tmp4.footer, children: tmp59 };
                  const tmp63 = closure_7(tmp(5086).Text, obj13);
                  cResult[43] = tmp4.footer;
                  cResult[44] = tmp59;
                  cResult[45] = tmp63;
                  tmp61 = tmp63;
                }
                const obj14 = { style: tmp4.guildContainer, children: null };
                const items3 = [tmp30, tmp41];
                obj14.children = items3;
                const tmp48 = closure_8(closure_4, obj14);
                cResult[32] = tmp4.guildContainer;
                cResult[33] = tmp41;
                cResult[34] = tmp48;
                tmp45 = tmp48;
              }
            }
            const obj15 = { style: tmp4.guildInfo, children: null };
            const items4 = [tmp33, tmp38];
            obj15.children = items4;
            const tmp44 = closure_8(closure_4, obj15);
            cResult[28] = tmp4.guildInfo;
            cResult[29] = tmp33;
            cResult[30] = tmp38;
            cResult[31] = tmp44;
            tmp41 = tmp44;
          }
          const obj16 = { variant: "text-md/normal", color: "text-default", style: tmp4.body, children: tmp25 };
          const tmp29 = closure_7(tmp(5086).Text, obj16);
          cResult[20] = tmp4.body;
          cResult[21] = tmp25;
          cResult[22] = tmp29;
          tmp27 = tmp29;
        }
        function handleGotoServerPrivacySettings() {
          if (null != stateFromStores) {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            openGuildActionSheetDefault(tmp);
            DmSettingsUpsellUtils.trackEvent(
              DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
              guildId,
            );
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = guildId;
        cResult[10] = handleGotoServerPrivacySettings;
        tmp13 = handleGotoServerPrivacySettings;
      }
      const tmpResult = guildId(504);
    }
  : function DmSettingsUpsellActionSheet(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_9();
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      const items1 = [guildId];
      const effect = noop.useEffect(() => {
        const result = DmSettingsUpsellManager.acknowledgeDmSettingsUpsell(guildId);
        DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
      }, items1);
      let tmp6 = null;
      if (null != stateFromStores) {
        let obj2 = { startExpanded: true, children: null };
        let obj3 = { style: tmp.container, children: null };
        const obj4 = { source: stateFromStores(10380), style: tmp.headerImage };
        const items2 = [closure_7(closure_5, obj4), , , , , ,];
        const obj5 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: null,
        };
        let intl = tmp2(1126).intl;
        obj5.children = intl.string(tmp2(1126).t.w2BvnL);
        items2[1] = closure_7(tmp2(5086).Text, obj5);
        const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
        const intl2 = tmp2(1126).intl;
        const obj7 = { guild_name: stateFromStores.name };
        obj6.children = intl2.format(tmp2(1126).t.Depjkv, obj7);
        items2[2] = closure_7(tmp2(5086).Text, obj6);
        const obj8 = { style: tmp.guildContainer, children: null };
        const obj9 = { variant: "eyebrow", color: "text-default", children: null };
        const intl3 = tmp2(1126).intl;
        obj9.children = intl3.string(tmp2(1126).t.KPB2iw);
        const items3 = [closure_7(tmp2(5086).Text, obj9)];
        const obj10 = { style: tmp.guildInfo, children: null };
        const obj11 = { guild: stateFromStores, size: tmp2(6161).GuildIconSizes.SMALL_32 };
        const items4 = [closure_7(stateFromStores(6161), obj11)];
        const obj12 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: stateFromStores.name,
        };
        items4[1] = closure_7(tmp2(5086).Text, obj12);
        obj10.children = items4;
        items3[1] = closure_8(closure_4, obj10);
        obj8.children = items3;
        items2[3] = closure_8(closure_4, obj8);
        const obj13 = {
          size: "lg",
          onPress: function handleSubmit() {
            const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
            sanitizedRestrictedGuilds.add(guildId);
            const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
            RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
              const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(5005), content: null };
              const intl = guildId(1126).intl;
              obj2.content = intl.string(guildId(1126).t.rlYD1W);
              stateFromStores(4766).open(obj2);
            });
            const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
            ActionSheetActionCreatorsDefault.hideActionSheet();
            DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
          },
          text: null,
        };
        const intl4 = tmp2(1126).intl;
        obj13.text = intl4.string(tmp2(1126).t.TD7iUx);
        items2[4] = closure_7(tmp2(5375).Button, obj13);
        const obj14 = {
          size: "lg",
          variant: "secondary",
          onPress: function handleDismiss() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
          },
          text: null,
        };
        const intl5 = tmp2(1126).intl;
        obj14.text = intl5.string(tmp2(1126).t.PsWbcp);
        items2[5] = closure_7(tmp2(5375).Button, obj14);
        const obj15 = { variant: "text-xs/normal", style: tmp.footer, children: null };
        const intl6 = tmp2(1126).intl;
        const obj16 = {
          onClick: function handleGotoServerPrivacySettings() {
            if (null != stateFromStores) {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              openGuildActionSheetDefault(tmp);
              DmSettingsUpsellUtils.trackEvent(
                DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                guildId,
              );
            }
          },
        };
        obj15.children = intl6.format(tmp2(1126).t.IzZxXW, obj16);
        items2[6] = closure_7(tmp2(5086).Text, obj15);
        obj3.children = items2;
        obj2.children = closure_8(closure_4, obj3);
        tmp6 = closure_7(tmp2(6885).ActionSheet, obj2);
        const tmp12 = stateFromStores(6161);
      }
      return tmp6;
    };
