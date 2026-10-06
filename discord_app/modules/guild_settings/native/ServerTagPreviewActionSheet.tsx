// discord_app/modules/guild_settings/native/ServerTagPreviewActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildProfileStore from "../../guild_profile/GuildProfileStore.tsx";
import GuildProfileActionCreators from "../../guild_profile/GuildProfileActionCreators.tsx";
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let guildId;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const GuildProfileFetchStatus = GuildProfileStore.GuildProfileFetchStatus;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { error: obj2 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let fetchStatus;
      let guildProfile;
      let intl;
      let intl3;
      let items1;
      let items2;
      let tmp10;
      let tmp32;
      let tmp35;
      let tmp6;
      let tmp7;
      let obj = guildId(576);
      const cResult = obj.c(21);
      guildId = guildId.guildId;
      const tmp4 = closure_8();
      const obj2 = guildId(9263);
      const guildProfile1 = obj2.useGuildProfile(guildId);
      ({ guildProfile, fetchStatus } = guildProfile1);
      if (cResult[0] !== guildId) {
        const fn = function f() {
          const obj = GuildProfileActionCreators;
          const guildProfile = obj.getGuildProfile(guildId, false, { respectBackoff: true });
        };
        const items = [guildId];
        cResult[0] = guildId;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (null != guildProfile) {
        let tmp27;
        const _Symbol4 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function b() {
            const obj = ActionSheetActionCreatorsDefault;
            return obj.hideActionSheet();
          };
          cResult[3] = fn2;
          tmp27 = fn2;
        } else {
          tmp27 = cResult[3];
        }
        if (cResult[4] === guildId) {
          if (cResult[5] === guildProfile.badge) {
            if (cResult[6] === guildProfile.badgeColorPrimary) {
              if (cResult[7] === guildProfile.badgeColorSecondary) {
                let tmp28;
                if (cResult[8] === guildProfile.tag) {
                  tmp28 = cResult[9];
                }
                tmp10 = tmp28;
              }
            }
          }
        }
        const obj3 = {
          guildId,
          tag: null,
          badge: null,
          primaryColor: null,
          secondaryColor: null,
          isDirty: false,
          variant: "plain",
          onAdopted: tmp27,
        };
        ({
          tag: obj6.tag,
          badge: obj6.badge,
          badgeColorPrimary: obj6.primaryColor,
          badgeColorSecondary: obj6.secondaryColor,
        } = guildProfile);
        const tmp31 = closure_6(GuildSettingsServerTagPreviewDefault, obj3);
        cResult[4] = guildId;
        cResult[5] = guildProfile.badge;
        cResult[6] = guildProfile.badgeColorPrimary;
        cResult[7] = guildProfile.badgeColorSecondary;
        cResult[8] = guildProfile.tag;
        cResult[9] = tmp31;
        tmp28 = tmp31;
      } else if (fetchStatus === GuildProfileFetchStatus.FETCHED) {
        let tmp14;
        let tmp17;
        let tmp19;
        const _Symbol2 = Symbol;
        const error = tmp4.error;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = {
            variant: "text-md/medium",
            color: "text-muted",
            children: intl.string(guildId(1126).t.tmGHjc),
          };
          const Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          const tmp16 = closure_6(Text, obj4);
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(guildId(1126).t["5911Lb"]);
          cResult[11] = stringResult;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] !== guildId) {
          const obj5 = {
            variant: "secondary",
            text: tmp17,
            onPress() {
              const obj = GuildProfileActionCreators;
              return obj.getGuildProfile(guildId, true);
            },
          };
          const tmp21 = closure_6(guildId(5601).Button, obj5);
          cResult[12] = guildId;
          cResult[13] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp4.error) {
          let tmp22;
          if (cResult[15] === tmp19) {
            tmp22 = cResult[16];
          }
          tmp10 = tmp22;
        }
        const obj7 = { style: error, children: items1 };
        items1 = [tmp14, tmp19];
        const tmp25 = closure_7(View, obj7);
        cResult[14] = tmp4.error;
        cResult[15] = tmp19;
        cResult[16] = tmp25;
        tmp22 = tmp25;
      } else {
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp12 = closure_6(guildId(6542).SceneLoadingIndicator, {});
          cResult[17] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[17];
        }
      }
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { title: intl3.string(guildId(1126).t["2QmKZ2"]) };
        const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
        intl3 = tmp(1126).intl;
        const tmp34 = closure_6(BottomSheetTitleHeader, obj8);
        cResult[18] = tmp34;
        tmp32 = tmp34;
      } else {
        tmp32 = cResult[18];
      }
      if (cResult[19] !== tmp10) {
        const obj14 = { children: items2 };
        items2 = [tmp32, tmp10];
        const tmp37 = closure_7(guildId(6708).ActionSheet, obj14);
        cResult[19] = tmp10;
        cResult[20] = tmp37;
        tmp35 = tmp37;
      } else {
        tmp35 = cResult[20];
      }
      return tmp35;
    }
  : (guildId) => {
      let intl;
      let intl2;
      let intl3;
      let items1;
      let items2;
      let tmp7;
      let tmp8;
      guildId = guildId.guildId;
      const tmp = closure_8();
      let obj = guildId(9263);
      const guildProfile1 = obj.useGuildProfile(guildId);
      let guildProfile = guildProfile1.guildProfile;
      const items = [guildId];
      const fetchStatus = guildProfile1.fetchStatus;
      const effect = react.useEffect(() => {
        const obj = GuildProfileActionCreators;
        const guildProfile = obj.getGuildProfile(guildId, false, { respectBackoff: true });
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
          onAdopted() {
            const obj = ActionSheetActionCreatorsDefault;
            return obj.hideActionSheet();
          },
        };
        ({
          tag: obj5.tag,
          badge: obj5.badge,
          badgeColorPrimary: obj5.primaryColor,
          badgeColorSecondary: obj5.secondaryColor,
        } = guildProfile);
        tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj2);
        tmp8 = closure_6;
      } else if (fetchStatus === GuildProfileFetchStatus.FETCHED) {
        const obj3 = { style: tmp.error, children: items1 };
        const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(guildId(1126).t.tmGHjc) };
        const Text = tmp2(4892).Text;
        intl = tmp2(1126).intl;
        items1 = [closure_6(Text, obj4)];
        const obj6 = {
          variant: "secondary",
          text: intl2.string(guildId(1126).t["5911Lb"]),
          onPress() {
            const obj = GuildProfileActionCreators;
            return obj.getGuildProfile(guildId, true);
          },
        };
        const Button = tmp2(5601).Button;
        intl2 = tmp2(1126).intl;
        items1[1] = closure_6(Button, obj6);
        tmp7 = closure_7(View, obj3);
        tmp8 = closure_6;
      } else {
        tmp7 = closure_6(tmp2(6542).SceneLoadingIndicator, {});
        tmp8 = closure_6;
      }
      const obj7 = { children: items2 };
      const ActionSheet = tmp2(6708).ActionSheet;
      const obj13 = { title: intl3.string(guildId(1126).t["2QmKZ2"]) };
      const BottomSheetTitleHeader = tmp2(6651).BottomSheetTitleHeader;
      intl3 = tmp2(1126).intl;
      items2 = [tmp8(BottomSheetTitleHeader, obj13), tmp7];
      return closure_7(ActionSheet, obj7);
    };
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default tmp3;
