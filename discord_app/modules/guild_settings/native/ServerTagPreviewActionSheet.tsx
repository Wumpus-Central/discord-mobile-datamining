// === Module 13725: ServerTagPreviewActionSheet ===

// Module 13725 (ServerTagPreviewActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import GuildProfileStore from "GuildProfileStore" /* 9227 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9229 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 13726 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
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
  const obj2 = guildId(9228);
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
    const obj3 = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: false, variant: "plain", onAdopted: tmp27 };
    ({ tag: obj6.tag, badge: obj6.badge, badgeColorPrimary: obj6.primaryColor, badgeColorSecondary: obj6.secondaryColor } = guildProfile);
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
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(guildId(1126).t.tmGHjc) };
      const Text = tmp(4886).Text;
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
            }
      };
      const tmp21 = closure_6(guildId(5594).Button, obj5);
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
      const tmp12 = closure_6(guildId(6535).SceneLoadingIndicator, {});
      cResult[17] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[17];
    }
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { title: intl3.string(guildId(1126).t["2QmKZ2"]) };
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
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
    const tmp37 = closure_7(guildId(6701).ActionSheet, obj14);
    cResult[19] = tmp10;
    cResult[20] = tmp37;
    tmp35 = tmp37;
  } else {
    tmp35 = cResult[20];
  }
  return tmp35;
}) : ((guildId) => {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let tmp7;
  let tmp8;
  guildId = guildId.guildId;
  const tmp = closure_8();
  let obj = guildId(9228);
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
        }
    };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj2);
    tmp8 = closure_6;
  } else if (fetchStatus === GuildProfileFetchStatus.FETCHED) {
    const obj3 = { style: tmp.error, children: items1 };
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(guildId(1126).t.tmGHjc) };
    const Text = tmp2(4886).Text;
    intl = tmp2(1126).intl;
    items1 = [closure_6(Text, obj4), ];
    const obj6 = {
      variant: "secondary",
      text: intl2.string(guildId(1126).t["5911Lb"]),
      onPress() {
          const obj = GuildProfileActionCreators;
          return obj.getGuildProfile(guildId, true);
        }
    };
    const Button = tmp2(5594).Button;
    intl2 = tmp2(1126).intl;
    items1[1] = closure_6(Button, obj6);
    tmp7 = closure_7(View, obj3);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(6535).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj7 = { children: items2 };
  const ActionSheet = tmp2(6701).ActionSheet;
  const obj13 = { title: intl3.string(guildId(1126).t["2QmKZ2"]) };
  const BottomSheetTitleHeader = tmp2(6644).BottomSheetTitleHeader;
  intl3 = tmp2(1126).intl;
  items2 = [tmp8(BottomSheetTitleHeader, obj13), tmp7];
  return closure_7(ActionSheet, obj7);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default tmp3;