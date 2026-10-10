// discord_app/modules/guild_settings/native/ServerTagPreviewActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildProfileActionCreators from "../../guild_profile/GuildProfileActionCreators.tsx";
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(8616).GuildProfileFetchStatus;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  error: { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ServerTagPreviewActionSheet(guildId) {
      const cResult = badgeColorSecondary(576).c(21);
      badgeColorSecondary = guildId.guildId;
      const tmp4 = closure_8();
      const obj = badgeColorSecondary(576);
      const guildProfile1 = badgeColorSecondary(8617).useGuildProfile(badgeColorSecondary);
      ({ guildProfile, fetchStatus } = guildProfile1);
      if (cResult[0] !== badgeColorSecondary) {
        const fn = function f() {
          const guildProfile = GuildProfileActionCreators.getGuildProfile(badgeColorSecondary, false, {
            respectBackoff: true,
          });
        };
        const items = [badgeColorSecondary];
        cResult[0] = badgeColorSecondary;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (null != guildProfile) {
        const _Symbol4 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function y() {
            return ActionSheetActionCreatorsDefault.hideActionSheet();
          };
          cResult[3] = fn2;
          let tmp27 = fn2;
        } else {
          tmp27 = cResult[3];
        }
        if (cResult[4] === badgeColorSecondary) {
          if (cResult[5] === guildProfile.badge) {
            if (cResult[6] === guildProfile.badgeColorPrimary) {
              if (cResult[7] === guildProfile.badgeColorSecondary) {
              }
            }
          }
        }
        const obj3 = {
          guildId: badgeColorSecondary,
          tag: null,
          badge: null,
          primaryColor: null,
          secondaryColor: null,
          isDirty: false,
          variant: "plain",
          onAdopted: null,
        };
        ({
          tag: obj6.tag,
          badge: obj6.badge,
          badgeColorPrimary: obj6.primaryColor,
          badgeColorSecondary: obj6.secondaryColor,
        } = guildProfile);
        obj3.onAdopted = tmp27;
        const tmp31 = closure_6(GuildSettingsServerTagPreviewDefault, obj3);
        cResult[4] = badgeColorSecondary;
        cResult[5] = guildProfile.badge;
        ({ badgeColorPrimary: tmp3[6], badgeColorSecondary } = guildProfile);
        cResult[7] = badgeColorSecondary;
        guildProfile = guildProfile.tag;
        cResult[8] = guildProfile;
        cResult[9] = tmp31;
      } else {
        if (fetchStatus === GuildProfileFetchStatus.FETCHED) {
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
            const intl = tmp(1126).intl;
            obj4.children = intl.string(tmp(1126).t.tmGHjc);
            const tmp16 = closure_6(tmp(5088).Text, obj4);
            cResult[10] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[10];
          }
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(tmp(1126).t["5911Lb"]);
            cResult[11] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] !== badgeColorSecondary) {
            const obj5 = {
              variant: "secondary",
              text: tmp17,
              onPress() {
                return GuildProfileActionCreators.getGuildProfile(badgeColorSecondary, true);
              },
            };
            const tmp21 = closure_6(tmp(5379).Button, obj5);
            cResult[12] = badgeColorSecondary;
            cResult[13] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp4.error) {
            if (cResult[15] === tmp19) {
              let tmp22 = cResult[16];
            }
            let tmp10 = tmp22;
          }
          const obj7 = { style: tmp4.error, children: null };
          const items1 = [tmp14, tmp19];
          obj7.children = items1;
          const tmp25 = closure_7(View, obj7);
          cResult[14] = tmp4.error;
          cResult[15] = tmp19;
          cResult[16] = tmp25;
          tmp22 = tmp25;
        } else {
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp12 = closure_6(tmp(6726).SceneLoadingIndicator, {});
            cResult[17] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[17];
          }
        }
        const _Symbol5 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { title: null };
          const intl3 = tmp(1126).intl;
          obj8.title = intl3.string(tmp(1126).t["2QmKZ2"]);
          const tmp36 = closure_6(tmp(6838).BottomSheetTitleHeader, obj8);
          cResult[18] = tmp36;
          let tmp34 = tmp36;
        } else {
          tmp34 = cResult[18];
        }
        if (cResult[19] !== tmp10) {
          const obj14 = { children: null };
          const items2 = [tmp34, tmp10];
          obj14.children = items2;
          const tmp39 = closure_7(tmp(6898).ActionSheet, obj14);
          cResult[19] = tmp10;
          cResult[20] = tmp39;
          let tmp37 = tmp39;
        } else {
          tmp37 = cResult[20];
        }
        return tmp37;
      }
      const obj2 = badgeColorSecondary(8617);
    }
  : function ServerTagPreviewActionSheet(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_8();
      const guildProfile1 = guildId(8617).useGuildProfile(guildId);
      let guildProfile = guildProfile1.guildProfile;
      const items = [guildId];
      const effect = noop.useEffect(() => {
        const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, false, { respectBackoff: true });
      }, items);
      if (null != guildProfile) {
        const obj2 = {
          guildId,
          tag: null,
          badge: null,
          primaryColor: null,
          secondaryColor: null,
          isDirty: false,
          variant: "plain",
          onAdopted: null,
        };
        ({
          tag: obj5.tag,
          badge: obj5.badge,
          badgeColorPrimary: obj5.primaryColor,
          badgeColorSecondary: obj5.secondaryColor,
        } = guildProfile);
        obj2.onAdopted = function onAdopted() {
          return ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        let tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj2);
        let tmp8 = closure_6;
      } else if (guildProfile1.fetchStatus === GuildProfileFetchStatus.FETCHED) {
        const obj3 = { style: tmp.error, children: null };
        const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
        const intl = tmp2(1126).intl;
        obj4.children = intl.string(tmp2(1126).t.tmGHjc);
        const items1 = [closure_6(tmp2(5088).Text, obj4)];
        const obj6 = { variant: "secondary", text: null, onPress: null };
        const intl2 = tmp2(1126).intl;
        obj6.text = intl2.string(tmp2(1126).t["5911Lb"]);
        obj6.onPress = function onPress() {
          return GuildProfileActionCreators.getGuildProfile(guildId, true);
        };
        items1[1] = closure_6(tmp2(5379).Button, obj6);
        obj3.children = items1;
        tmp7 = closure_7(View, obj3);
        tmp8 = closure_6;
      } else {
        tmp7 = closure_6(tmp2(6726).SceneLoadingIndicator, {});
        tmp8 = closure_6;
      }
      const obj7 = { children: null };
      const obj13 = { title: null };
      const intl3 = tmp2(1126).intl;
      obj13.title = intl3.string(guildId(1126).t["2QmKZ2"]);
      const items2 = [tmp8(guildId(6838).BottomSheetTitleHeader, obj13), tmp7];
      obj7.children = items2;
      return closure_7(guildId(6898).ActionSheet, obj7);
    };
