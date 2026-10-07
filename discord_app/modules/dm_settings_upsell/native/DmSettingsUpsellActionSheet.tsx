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
const createStyles = fn(4896);
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
  ? (guildId) => {
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
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.acknowledgeDmSettingsUpsell(guildId);
            obj2 = closure_0(closure_2[10]);
            trackEventResult = obj2.trackEvent(closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
            return;
          }
        }
        const items1 = [guildId];
        cResult[3] = guildId;
        cResult[4] = D;
        cResult[5] = items1;
        let tmp10 = items1;
      } else {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.acknowledgeDmSettingsUpsell(guildId);
            obj2 = closure_0(closure_2[10]);
            trackEventResult = obj2.trackEvent(closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
            return;
          }
        }
        tmp10 = cResult[5];
      }
      const effect = noop.useEffect(D, tmp10);
      if (null == stateFromStores) {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.acknowledgeDmSettingsUpsell(guildId);
            obj2 = closure_0(closure_2[10]);
            trackEventResult = obj2.trackEvent(closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
            return;
          }
        }
      } else {
        class D {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.acknowledgeDmSettingsUpsell(guildId);
            obj2 = closure_0(closure_2[10]);
            trackEventResult = obj2.trackEvent(closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
            return;
          }
        }
        if (cResult[8] === stateFromStores) {
          class D {
            constructor() {
              obj = closure_0(closure_2[9]);
              result = obj.acknowledgeDmSettingsUpsell(guildId);
              obj2 = closure_0(closure_2[10]);
              trackEventResult = obj2.trackEvent(closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_VIEWED, guildId);
              return;
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                if (null != closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = closure_1(closure_2[12])(tmp);
                  tmp6 = closure_0;
                  obj2 = closure_0(closure_2[10]);
                  tmp7 = guildId;
                  trackEventResult = obj2.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                    guildId,
                  );
                }
                return;
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
              if (null != closure_1) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[11]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp5 = closure_1(closure_2[12])(tmp);
                tmp6 = closure_0;
                obj2 = closure_0(closure_2[10]);
                tmp7 = guildId;
                trackEventResult = obj2.trackEvent(
                  closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                  guildId,
                );
              }
              return;
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                if (null != closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = closure_1(closure_2[12])(tmp);
                  tmp6 = closure_0;
                  obj2 = closure_0(closure_2[10]);
                  tmp7 = guildId;
                  trackEventResult = obj2.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                    guildId,
                  );
                }
                return;
              }
            }
            tmp16[0] = stateFromStores(9817);
            tmp16[1] = tmp4.headerImage;
            const tmp18 = closure_7(closure_5, tmp16);
            cResult[13] = tmp4.headerImage;
            cResult[14] = tmp18;
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                if (null != closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = closure_1(closure_2[12])(tmp);
                  tmp6 = closure_0;
                  obj2 = closure_0(closure_2[10]);
                  tmp7 = guildId;
                  trackEventResult = obj2.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                    guildId,
                  );
                }
                return;
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
              children: null,
            };
            class I {
              constructor() {
                if (null != closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = closure_1(closure_2[12])(tmp);
                  tmp6 = closure_0;
                  obj2 = closure_0(closure_2[10]);
                  tmp7 = guildId;
                  trackEventResult = obj2.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                    guildId,
                  );
                }
                return;
              }
            }
            obj2.children = tmp21;
            const tmp23 = closure_7(tmp(4892).Text, obj2);
            cResult[16] = tmp4.title;
            cResult[17] = tmp23;
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
          if (cResult[18] !== stateFromStores.name) {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                if (null != closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = closure_1(closure_2[12])(tmp);
                  tmp6 = closure_0;
                  obj2 = closure_0(closure_2[10]);
                  tmp7 = guildId;
                  trackEventResult = obj2.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                    guildId,
                  );
                }
                return;
              }
            }
            tmp25[0] = stateFromStores.name;
            const formatResult = obj4.format(tmp(1126).t.Depjkv, tmp25);
            cResult[18] = stateFromStores.name;
            cResult[19] = formatResult;
          } else {
            class E {
              constructor() {
                obj = closure_0(closure_2[13]);
                sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                addResult = sanitizedRestrictedGuilds.add(guildId);
                RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                nextPromise = updateSettingResult.then(() => {
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                  const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
                  const intl = guildId(1126).intl;
                  obj2.content = intl.string(guildId(1126).t.rlYD1W);
                  stateFromStores(4574).open(obj2);
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
                if (null != closure_1) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp5 = closure_1(closure_2[12])(tmp);
                  tmp6 = closure_0;
                  obj2 = closure_0(closure_2[10]);
                  tmp7 = guildId;
                  trackEventResult = obj2.trackEvent(
                    closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                    guildId,
                  );
                }
                return;
              }
            }
            if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
              let obj3 = { variant: "eyebrow", color: "text-default", children: null };
              class I {
                constructor() {
                  if (null != closure_1) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[11]);
                    hideActionSheetResult = obj.hideActionSheet();
                    tmp5 = closure_1(closure_2[12])(tmp);
                    tmp6 = closure_0;
                    obj2 = closure_0(closure_2[10]);
                    tmp7 = guildId;
                    trackEventResult = obj2.trackEvent(
                      closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                      guildId,
                    );
                  }
                  return;
                }
              }
              let intl = tmp(1126).intl;
              obj3.children = intl.string(tmp(1126).t.KPB2iw);
              const tmp33 = closure_7(tmp32, obj3);
              cResult[23] = tmp33;
            } else {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
                  if (null != closure_1) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[11]);
                    hideActionSheetResult = obj.hideActionSheet();
                    tmp5 = closure_1(closure_2[12])(tmp);
                    tmp6 = closure_0;
                    obj2 = closure_0(closure_2[10]);
                    tmp7 = guildId;
                    trackEventResult = obj2.trackEvent(
                      closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                      guildId,
                    );
                  }
                  return;
                }
              }
              tmp37[0] = stateFromStores;
              tmp37[1] = tmp(5978).GuildIconSizes.SMALL_32;
              const tmp38 = closure_7(stateFromStores(5978), tmp37);
              cResult[24] = stateFromStores;
              cResult[25] = tmp38;
              const tmp36 = stateFromStores(5978);
            } else {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
                  if (null != closure_1) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[11]);
                    hideActionSheetResult = obj.hideActionSheet();
                    tmp5 = closure_1(closure_2[12])(tmp);
                    tmp6 = closure_0;
                    obj2 = closure_0(closure_2[10]);
                    tmp7 = guildId;
                    trackEventResult = obj2.trackEvent(
                      closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                      guildId,
                    );
                  }
                  return;
                }
              }
              const tmp40 = closure_7(tmp(4892).Text, {
                variant: "text-md/semibold",
                color: "mobile-text-heading-primary",
                children: null,
              });
              cResult[26] = stateFromStores.name;
              cResult[27] = tmp40;
              const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            } else {
              class E {
                constructor() {
                  obj = closure_0(closure_2[13]);
                  sanitizedRestrictedGuilds = obj.getSanitizedRestrictedGuilds();
                  addResult = sanitizedRestrictedGuilds.add(guildId);
                  RestrictedGuildIds = closure_0(closure_2[14]).RestrictedGuildIds;
                  updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
                  nextPromise = updateSettingResult.then(() => {
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
                    const obj2 = {
                      key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST",
                      icon: stateFromStores(4811),
                      content: null,
                    };
                    const intl = guildId(1126).intl;
                    obj2.content = intl.string(guildId(1126).t.rlYD1W);
                    stateFromStores(4574).open(obj2);
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
            const obj6 = { style: tmp4.guildInfo, children: null };
            const items2 = [tmp34, tmp39];
            obj6.children = items2;
            const tmp44 = closure_8(closure_4, obj6);
            cResult[28] = tmp4.guildInfo;
            cResult[29] = tmp34;
            cResult[30] = tmp39;
            cResult[31] = tmp44;
          }
          const obj7 = { variant: "text-md/normal", color: "text-default", style: tmp4.body, children: tmp24 };
          const tmp29 = closure_7(tmp(4892).Text, obj7);
          cResult[20] = tmp4.body;
          cResult[21] = tmp24;
          cResult[22] = tmp29;
        }
        class I {
          constructor() {
            if (null != closure_1) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[11]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp5 = closure_1(closure_2[12])(tmp);
              tmp6 = closure_0;
              obj2 = closure_0(closure_2[10]);
              tmp7 = guildId;
              trackEventResult = obj2.trackEvent(
                closure_0(closure_2[10]).DmUpsellActionTypes.MODAL_GUILD_SETTINGS_CLICKED,
                guildId,
              );
            }
            return;
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = guildId;
        cResult[10] = I;
      }
      const tmpResult = guildId(504);
    }
  : (guildId) => {
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
        const obj4 = { source: stateFromStores(9817), style: tmp.headerImage };
        const items2 = [closure_7(closure_5, obj4), , , , , ,];
        const obj5 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: tmp.title,
          children: null,
        };
        let intl = tmp2(1126).intl;
        obj5.children = intl.string(tmp2(1126).t.w2BvnL);
        items2[1] = closure_7(tmp2(4892).Text, obj5);
        const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: null };
        const intl2 = tmp2(1126).intl;
        const obj7 = { guild_name: stateFromStores.name };
        obj6.children = intl2.format(tmp2(1126).t.Depjkv, obj7);
        items2[2] = closure_7(tmp2(4892).Text, obj6);
        const obj8 = { style: tmp.guildContainer, children: null };
        const obj9 = { variant: "eyebrow", color: "text-default", children: null };
        const intl3 = tmp2(1126).intl;
        obj9.children = intl3.string(tmp2(1126).t.KPB2iw);
        const items3 = [closure_7(tmp2(4892).Text, obj9)];
        const obj10 = { style: tmp.guildInfo, children: null };
        const obj11 = { guild: stateFromStores, size: tmp2(5978).GuildIconSizes.SMALL_32 };
        const items4 = [closure_7(stateFromStores(5978), obj11)];
        const obj12 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: stateFromStores.name,
        };
        items4[1] = closure_7(tmp2(4892).Text, obj12);
        obj10.children = items4;
        items3[1] = closure_8(closure_4, obj10);
        obj8.children = items3;
        items2[3] = closure_8(closure_4, obj8);
        const obj13 = {
          size: "lg",
          onPress() {
            const sanitizedRestrictedGuilds = UserSettingsUtils.getSanitizedRestrictedGuilds();
            sanitizedRestrictedGuilds.add(guildId);
            const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
            RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds)).then(() => {
              const obj2 = { key: "DM_SETTINGS_UPSELL_SUCCESS_TOAST", icon: stateFromStores(4811), content: null };
              const intl = guildId(1126).intl;
              obj2.content = intl.string(guildId(1126).t.rlYD1W);
              stateFromStores(4574).open(obj2);
            });
            const updateSettingResult = RestrictedGuildIds.updateSetting(Array.from(sanitizedRestrictedGuilds));
            ActionSheetActionCreatorsDefault.hideActionSheet();
            DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISABLED_DMS, guildId);
          },
          text: null,
        };
        const intl4 = tmp2(1126).intl;
        obj13.text = intl4.string(tmp2(1126).t.TD7iUx);
        items2[4] = closure_7(tmp2(5601).Button, obj13);
        const obj14 = {
          size: "lg",
          variant: "secondary",
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.MODAL_DISMISSED, guildId);
          },
          text: null,
        };
        const intl5 = tmp2(1126).intl;
        obj14.text = intl5.string(tmp2(1126).t.PsWbcp);
        items2[5] = closure_7(tmp2(5601).Button, obj14);
        const obj15 = { variant: "text-xs/normal", style: tmp.footer, children: null };
        const intl6 = tmp2(1126).intl;
        const obj16 = {
          onClick() {
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
        items2[6] = closure_7(tmp2(4892).Text, obj15);
        obj3.children = items2;
        obj2.children = closure_8(closure_4, obj3);
        tmp6 = closure_7(tmp2(6708).ActionSheet, obj2);
        const tmp12 = stateFromStores(5978);
      }
      return tmp6;
    };
