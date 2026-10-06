// discord_app/modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserSettingsUtils from "../../../utils/UserSettingsUtils.tsx";
import openGuildActionSheetDefault from "../../guild_action_sheet/native/openGuildActionSheet.tsx";
import DmSettingsUpsellManager from "../DmSettingsUpsellManager.tsx";
import DmSettingsUpsellUtils from "../DmSettingsUpsellUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let addResult, guildId, hideActionSheetResult, nextPromise, trackEventResult;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerImage: { alignSelf: "center", width: 73, height: 86 },
  title: { textAlign: "center", alignSelf: "center", width: 250 },
  body: { textAlign: "center" },
  guildContainer: obj3,
  guildInfo: obj4,
  footer: obj5,
};
obj2 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
obj4 = {
  marginTop: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let intl;
      let items2;
      let tmp10;
      let tmp7;
      let tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(55);
      guildId = guildId.guildId;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function p() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] !== guildId) {
        class D {
          constructor() {
            const obj = DmSettingsUpsellManager;
            const result = obj.acknowledgeDmSettingsUpsell(guildId);
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
          }
        }
        const items1 = [guildId];
        cResult[3] = guildId;
        cResult[4] = D;
        cResult[5] = items1;
        tmp10 = items1;
      } else {
        class D {
          constructor() {
            const obj = DmSettingsUpsellManager;
            const result = obj.acknowledgeDmSettingsUpsell(guildId);
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
          }
        }
        tmp10 = cResult[5];
      }
      const effect = react.useEffect(D, tmp10);
      if (null == stateFromStores) {
        class D {
          constructor() {
            const obj = DmSettingsUpsellManager;
            const result = obj.acknowledgeDmSettingsUpsell(guildId);
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
          }
        }
      } else {
        class D {
          constructor() {
            const obj = DmSettingsUpsellManager;
            const result = obj.acknowledgeDmSettingsUpsell(guildId);
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
          }
        }
        if (cResult[8] === stateFromStores) {
          class D {
            constructor() {
              const obj = DmSettingsUpsellManager;
              const result = obj.acknowledgeDmSettingsUpsell(guildId);
              const obj2 = DmSettingsUpsellUtils;
              obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
            }
          }
          if (cResult[11] !== guildId) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
            class I {
              constructor() {
                if (null != stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  openGuildActionSheetDefault(tmp);
                  const obj2 = DmSettingsUpsellUtils;
                  obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                }
              }
            }
            cResult[12] = E;
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
          }
          class I {
            constructor() {
              if (null != stateFromStores) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet();
                openGuildActionSheetDefault(tmp);
                const obj2 = DmSettingsUpsellUtils;
                obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
              }
            }
          }
          if (cResult[13] !== tmp4.headerImage) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
            class I {
              constructor() {
                if (null != stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  openGuildActionSheetDefault(tmp);
                  const obj2 = DmSettingsUpsellUtils;
                  obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                }
              }
            }
            tmp16[0] = stateFromStores(9817);
            tmp16[1] = tmp4.headerImage;
            cResult[13] = tmp4.headerImage;
            cResult[14] = closure_7(closure_5, tmp16);
            const tmp18 = closure_7(closure_5, tmp16);
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
          }
          const _Symbol = Symbol;
          const title = tmp4.title;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
            const string = tmp20.string;
            class I {
              constructor() {
                if (null != stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  openGuildActionSheetDefault(tmp);
                  const obj2 = DmSettingsUpsellUtils;
                  obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                }
              }
            }
            cResult[15] = tmp21;
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
          }
          if (cResult[16] !== tmp4.title) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
            let obj2 = {
              variant: "heading-lg/bold",
              color: "mobile-text-heading-primary",
              style: null,
              children: tmp21,
            };
            class I {
              constructor() {
                if (null != stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  openGuildActionSheetDefault(tmp);
                  const obj2 = DmSettingsUpsellUtils;
                  obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                }
              }
            }
            cResult[16] = tmp4.title;
            cResult[17] = closure_7(tmp(4892).Text, obj2);
            const tmp23 = closure_7(tmp(4892).Text, obj2);
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
          }
          const body = tmp4.body;
          if (cResult[18] !== stateFromStores.name) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
            const format = tmp25.format;
            class I {
              constructor() {
                if (null != stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  openGuildActionSheetDefault(tmp);
                  const obj2 = DmSettingsUpsellUtils;
                  obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                }
              }
            }
            tmp26[0] = stateFromStores.name;
            cResult[18] = stateFromStores.name;
            cResult[19] = format(tmp(1126).t.Depjkv, tmp26);
            const formatResult = format(tmp(1126).t.Depjkv, tmp26);
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
          }
          if (cResult[20] === tmp4.body) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  let intl;
                  const tmp = stateFromStores(closure_1_2[15]);
                  const open = tmp.open;
                  const obj = {
                    key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                    icon: stateFromStores(closure_1_2[16]),
                    content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                  };
                  intl = guildId(closure_1_2[17]).intl;
                  open(obj);
                });
                obj3 = closure_1(closure_2[11]);
                hideActionSheetResult = obj3.hideActionSheet();
                obj4 = closure_0(closure_2[10]);
                trackEventResult = obj4.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                  guildId,
                );
                return;
              }
            }
            const _Symbol2 = Symbol;
            class I {
              constructor() {
                if (null != stateFromStores) {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  openGuildActionSheetDefault(tmp);
                  const obj2 = DmSettingsUpsellUtils;
                  obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                }
              }
            }
            if (tmp31 === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
              let obj3 = { variant: "eyebrow", color: "text-default", children: intl.string(tmp(1126).t.KPB2iw) };
              class I {
                constructor() {
                  if (null != stateFromStores) {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    openGuildActionSheetDefault(tmp);
                    const obj2 = DmSettingsUpsellUtils;
                    obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                  }
                }
              }
              intl = tmp(1126).intl;
              cResult[23] = closure_7(tmp33, obj3);
              const tmp34 = closure_7(tmp33, obj3);
            } else {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
            }
            if (cResult[24] !== stateFromStores) {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
              class I {
                constructor() {
                  if (null != stateFromStores) {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    openGuildActionSheetDefault(tmp);
                    const obj2 = DmSettingsUpsellUtils;
                    obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                  }
                }
              }
              tmp38[0] = stateFromStores;
              const tmp37 = stateFromStores(5978);
              tmp38[1] = tmp(5978).GuildIconSizes.SMALL_32;
              cResult[24] = stateFromStores;
              cResult[25] = closure_7(tmp37, tmp38);
              const tmp39 = closure_7(tmp37, tmp38);
            } else {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
            }
            if (cResult[26] !== stateFromStores.name) {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
              let obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
              class I {
                constructor() {
                  if (null != stateFromStores) {
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                    openGuildActionSheetDefault(tmp);
                    const obj2 = DmSettingsUpsellUtils;
                    obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
                  }
                }
              }
              cResult[26] = stateFromStores.name;
              cResult[27] = closure_7(tmp(4892).Text, obj4);
              const tmp41 = closure_7(tmp(4892).Text, obj4);
            } else {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
            }
            if (cResult[28] === tmp4.guildInfo) {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    let intl;
                    const tmp = stateFromStores(closure_1_2[15]);
                    const open = tmp.open;
                    const obj = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(closure_1_2[16]),
                      content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
                    };
                    intl = guildId(closure_1_2[17]).intl;
                    open(obj);
                  });
                  obj3 = closure_1(closure_2[11]);
                  hideActionSheetResult = obj3.hideActionSheet();
                  obj4 = closure_0(closure_2[10]);
                  trackEventResult = obj4.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_DISABLED_DMS,
                    guildId,
                  );
                  return;
                }
              }
            }
            const obj5 = { style: tmp4.guildInfo, children: items2 };
            items2 = [tmp35, tmp40];
            cResult[28] = tmp4.guildInfo;
            cResult[29] = tmp35;
            cResult[30] = tmp40;
            cResult[31] = closure_8(closure_4, obj5);
            const tmp45 = closure_8(closure_4, obj5);
          }
          const obj6 = { variant: "text-md/normal", color: "text-default", style: body, children: tmp24 };
          cResult[20] = tmp4.body;
          cResult[21] = tmp24;
          cResult[22] = closure_7(tmp(4892).Text, obj6);
          const tmp30 = closure_7(tmp(4892).Text, obj6);
        }
        class I {
          constructor() {
            if (null != stateFromStores) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              openGuildActionSheetDefault(tmp);
              const obj2 = DmSettingsUpsellUtils;
              obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
            }
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = guildId;
        cResult[10] = I;
      }
    }
  : (guildId) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items2;
      let items3;
      let items4;
      let obj16;
      let obj3;
      let obj7;
      guildId = guildId.guildId;
      let tmp = closure_9();
      let obj = guildId(504);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      const items1 = [guildId];
      const effect = react.useEffect(() => {
        const obj = DmSettingsUpsellManager;
        const result = obj.acknowledgeDmSettingsUpsell(guildId);
        const obj2 = DmSettingsUpsellUtils;
        obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_VIEWED, guildId);
      }, items1);
      let tmp6 = null;
      if (null != stateFromStores) {
        let obj2 = { startExpanded: true, children: closure_8(closure_4, obj3) };
        obj3 = { style: tmp.container, children: items2 };
        let obj4 = { source: stateFromStores(9817), style: tmp.headerImage };
        const ActionSheet = tmp2(6708).ActionSheet;
        items2 = [closure_7(closure_5, obj4), , , , , ,];
        const obj5 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: intl.string(guildId(1126).t.w2BvnL),
        };
        const Text = tmp2(4892).Text;
        intl = tmp2(1126).intl;
        items2[1] = closure_7(Text, obj5);
        const obj6 = {
          variant: "text-md/normal",
          color: "text-default",
          style: tmp.body,
          children: intl2.format(guildId(1126).t.Depjkv, obj7),
        };
        const Text2 = tmp2(4892).Text;
        intl2 = tmp2(1126).intl;
        obj7 = { guild_name: stateFromStores.name };
        items2[2] = closure_7(Text2, obj6);
        const obj8 = { style: tmp.guildContainer, children: items3 };
        const obj9 = { variant: "eyebrow", color: "text-default", children: intl3.string(guildId(1126).t.KPB2iw) };
        const Text3 = tmp2(4892).Text;
        intl3 = tmp2(1126).intl;
        items3 = [closure_7(Text3, obj9)];
        const obj10 = { style: tmp.guildInfo, children: items4 };
        const obj11 = { guild: stateFromStores, size: guildId(5978).GuildIconSizes.SMALL_32 };
        const tmp12 = stateFromStores(5978);
        items4 = [closure_7(tmp12, obj11)];
        const obj12 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: stateFromStores.name,
        };
        items4[1] = closure_7(guildId(4892).Text, obj12);
        items3[1] = closure_8(closure_4, obj10);
        items2[3] = closure_8(closure_4, obj8);
        const obj13 = {
          size: "lg",
          onPress() {
            let obj = UserSettingsUtils;
            const sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
            sanitizedRestrictedGuilds.add(guildId);
            const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
            const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
            updateSettingResult.then(() => {
              let intl;
              const tmp = stateFromStores(closure_1_2[15]);
              const open = tmp.open;
              const obj = {
                key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                icon: stateFromStores(closure_1_2[16]),
                content: intl.string(guildId(closure_1_2[17]).t.rlYD1W),
              };
              intl = guildId(closure_1_2[17]).intl;
              open(obj);
            });
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.hideActionSheet();
            const obj4 = DmSettingsUpsellUtils;
            obj4.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
          },
          text: intl4.string(guildId(1126).t.TD7iUx),
        };
        const Button = tmp2(5601).Button;
        intl4 = tmp2(1126).intl;
        items2[4] = closure_7(Button, obj13);
        const obj14 = {
          size: "lg",
          variant: "secondary",
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = DmSettingsUpsellUtils;
            obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
          },
          text: intl5.string(guildId(1126).t.PsWbcp),
        };
        const Button2 = tmp2(5601).Button;
        intl5 = tmp2(1126).intl;
        items2[5] = closure_7(Button2, obj14);
        const obj15 = {
          variant: "text-xs/normal",
          style: tmp.footer,
          children: intl6.format(guildId(1126).t.IzZxXW, obj16),
        };
        const Text4 = tmp2(4892).Text;
        intl6 = tmp2(1126).intl;
        obj16 = {
          onClick() {
            if (null != stateFromStores) {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              openGuildActionSheetDefault(tmp);
              const obj2 = DmSettingsUpsellUtils;
              obj2.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED, guildId);
            }
          },
        };
        items2[6] = closure_7(Text4, obj15);
        tmp6 = closure_7(ActionSheet, obj2);
      }
      return tmp6;
    };
let result = size.fileFinishedImporting("modules/dm_settings_upsell/native/DmSettingsUpsellActionSheet.tsx");

export default tmp5;
