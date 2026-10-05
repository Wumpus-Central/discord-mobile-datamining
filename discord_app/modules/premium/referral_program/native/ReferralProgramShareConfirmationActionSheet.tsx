// === Module 13250: ReferralProgramShareConfirmationActionSheet ===

// Module 13250 (ReferralProgramShareConfirmationActionSheet)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, headerAsset: { alignSelf: "center" }, header: null, subheader: null, recipientContainer: null, recipientRow: null, recipientDisplayName: null, erroredAvatar: null, avatarContainer: null };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = { marginTop: nativeDefault.space.PX_16, alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_8, textAlign: "center" };
let obj3 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_8, textAlign: "center" };
obj.subheader = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj.recipientContainer = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
let obj5 = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
obj.recipientRow = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj.recipientDisplayName = { flex: 1 };
obj.erroredAvatar = { opacity: 0.5 };
obj.avatarContainer = { alignSelf: "center", justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(576).c(23);
  user = user.user;
  const tmp4 = closure_8();
  if (cResult[0] !== user) {
    const name = UserUtilsDefault.getName(user);
    cResult[0] = user;
    cResult[1] = name;
    let recipientDisplayName = name;
  } else {
    recipientDisplayName = cResult[1];
  }
  if (cResult[2] !== user.id) {
    const fn = function v() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
    };
    cResult[2] = user.id;
    cResult[3] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[3];
  }
  const tmp8 = user.trialCreationResult === user(6962).CreateReferralStatus.FAIL;
  let erroredAvatar = tmp8;
  if (tmp8) {
    erroredAvatar = tmp4.erroredAvatar;
  }
  if (cResult[4] === tmp4.avatarContainer) {
    if (cResult[5] === erroredAvatar) {
      let tmp9 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      if (cResult[8] === user) {
        let tmp10 = cResult[9];
      }
      if (cResult[10] === recipientDisplayName) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp4.recipientDisplayName) {
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t["g33r/P"]);
              const obj3 = { size: "xs", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
              const tmp26 = closure_5(tmp(5855).ChatIcon, obj3);
              cResult[14] = stringResult;
              cResult[15] = tmp26;
              let tmp22 = tmp26;
              let tmp21 = stringResult;
            } else {
              tmp21 = cResult[14];
              tmp22 = cResult[15];
            }
            if (cResult[16] !== tmp7) {
              const obj4 = { variant: "secondary", size: "sm", text: tmp21, icon: tmp22, onPress: tmp7 };
              const tmp29 = closure_5(tmp(5594).Button, obj4);
              cResult[16] = tmp7;
              cResult[17] = tmp29;
              let tmp27 = tmp29;
            } else {
              tmp27 = cResult[17];
            }
            if (cResult[18] === tmp4.recipientRow) {
              if (cResult[19] === tmp27) {
                if (cResult[20] === tmp10) {
                  if (cResult[21] === tmp13) {
                    let tmp30 = cResult[22];
                  }
                  return tmp30;
                }
              }
            }
            const obj5 = { style: tmp4.recipientRow, children: null };
            const items = [tmp10, cResult[13], tmp27];
            obj5.children = items;
            const tmp33 = closure_7(View, obj5);
            cResult[18] = tmp4.recipientRow;
            cResult[19] = tmp27;
            cResult[20] = tmp10;
            cResult[21] = cResult[13];
            cResult[22] = tmp33;
            tmp30 = tmp33;
          }
        }
      }
      if (tmp8) {
        const obj6 = { children: null };
        const obj7 = { variant: "text-md/medium", color: "text-muted", style: tmp4.recipientDisplayName, children: recipientDisplayName };
        const items1 = [closure_5(tmp(4886).Text, obj7), ];
        const obj8 = { variant: "text-md/medium", color: "text-muted", children: null };
        const intl = tmp(1126).intl;
        const obj9 = { userName: recipientDisplayName };
        obj8.children = intl.format(tmp(1126).t.RO3T4B, obj9);
        items1[1] = closure_5(tmp(4886).Text, obj8);
        obj6.children = items1;
        let tmp15 = closure_7(closure_6, obj6);
      } else {
        const obj10 = { variant: "text-md/medium", color: "text-strong", style: tmp4.recipientDisplayName, children: recipientDisplayName };
        tmp15 = closure_5(tmp(4886).Text, obj10);
      }
      cResult[10] = recipientDisplayName;
      cResult[11] = tmp8;
      recipientDisplayName = tmp4.recipientDisplayName;
      cResult[12] = recipientDisplayName;
      cResult[13] = tmp15;
    }
    const obj11 = { style: tmp9, size: tmp(1188).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" };
    const tmp12 = closure_5(tmp(1188).Avatar, obj11);
    cResult[7] = tmp9;
    cResult[8] = user;
    cResult[9] = tmp12;
    tmp10 = tmp12;
  }
  const items2 = [tmp4.avatarContainer, erroredAvatar];
  cResult[4] = tmp4.avatarContainer;
  cResult[5] = erroredAvatar;
  cResult[6] = items2;
  tmp9 = items2;
  let obj = user(576);
}) : ((user) => {
  user = user.user;
  const tmp = closure_8();
  const name = UserUtilsDefault.getName(user);
  const tmp6 = user.trialCreationResult === user(6962).CreateReferralStatus.FAIL;
  const obj2 = { style: tmp.recipientRow, children: null };
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp6;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  items[1] = erroredAvatar;
  const items1 = [closure_5(user(1188).Avatar, { style: items, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" }), , ];
  if (tmp6) {
    const obj4 = { children: null };
    const obj5 = { variant: "text-md/medium", color: "text-muted", style: tmp.recipientDisplayName, children: name };
    const items2 = [closure_5(tmp5(4886).Text, obj5), ];
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp5(1126).intl;
    const obj7 = { userName: name };
    obj6.children = intl.format(tmp5(1126).t.RO3T4B, obj7);
    items2[1] = closure_5(tmp5(4886).Text, obj6);
    obj4.children = items2;
    let tmp9Result = closure_7(closure_6, obj4);
  } else {
    const obj8 = { variant: "text-md/medium", color: "text-strong", style: tmp.recipientDisplayName, children: name };
    tmp9Result = closure_5(tmp5(4886).Text, obj8);
  }
  items1[1] = tmp9Result;
  const obj9 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
  const intl2 = tmp5(1126).intl;
  obj9.text = intl2.string(user(1126).t["g33r/P"]);
  const obj3 = { style: items, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" };
  obj9.icon = closure_5(user(5855).ChatIcon, { size: "xs", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT });
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
  };
  items1[2] = closure_5(user(5594).Button, obj9);
  obj2.children = items1;
  return closure_7(View, obj2);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj6 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(26);
  ({ selectedUsers, trialCreationResult } = arg0);
  require = trialCreationResult;
  const tmp4 = closure_8();
  if (0 === arr.filter((item) => item === trialCreationResult(dependencyMap[8]).CreateReferralStatus.SUCCESS).length) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t["7VBEue"]);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult1 = intl.string(tmp(1126).t.tKCltd);
      cResult[1] = stringResult1;
      let tmp5 = stringResult1;
    } else {
      tmp5 = cResult[1];
    }
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
      const formatResult = intl3.format(tmp(1126).t.AwGSWl, obj2);
      cResult[2] = formatResult;
      let tmp10 = formatResult;
    } else {
      tmp10 = cResult[2];
    }
    const _Symbol4 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp16 = closure_5(tmp(6644).BottomSheetTitleHeader, { title: null });
      cResult[3] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[3];
    }
    const _Symbol5 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_5(tmp(13251).FistBumpSpotIllustration, {});
      cResult[4] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[4];
    }
    if (cResult[5] !== tmp4.headerAsset) {
      const obj4 = { style: tmp4.headerAsset, children: tmp17 };
      const tmp23 = closure_5(View, obj4);
      cResult[5] = tmp4.headerAsset;
      cResult[6] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp4.header) {
        let tmp24 = cResult[9];
      }
      if (cResult[10] !== tmp4.subheader) {
        const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp4.subheader, children: tmp10 };
        const tmp29 = closure_5(tmp(4886).Text, obj5);
        cResult[10] = tmp4.subheader;
        cResult[11] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[11];
      }
      if (cResult[12] === selectedUsers) {
        if (cResult[13] === trialCreationResult) {
          let tmp31 = cResult[14];
        }
        if (cResult[15] === tmp4.recipientContainer) {
          if (cResult[16] === tmp31) {
            let tmp33 = cResult[17];
          }
          if (cResult[18] === tmp33) {
            if (cResult[19] === tmp20) {
              if (cResult[20] === tmp24) {
                if (cResult[21] === tmp27) {
                  let tmp37 = cResult[22];
                }
                if (cResult[23] === tmp4.content) {
                  if (cResult[24] === tmp37) {
                    let tmp40 = cResult[25];
                  }
                  return tmp40;
                }
                const obj6 = { startExpanded: true, contentStyles: tmp4.content, header: tmp14, children: tmp37 };
                const tmp42 = closure_5(tmp(6645).BottomSheet, obj6);
                cResult[23] = tmp4.content;
                cResult[24] = tmp37;
                cResult[25] = tmp42;
                tmp40 = tmp42;
              }
            }
          }
          const obj7 = { children: null };
          const items = [tmp20, tmp24, tmp27, tmp33];
          obj7.children = items;
          const tmp39 = closure_7(tmp(5593).Stack, obj7);
          cResult[18] = tmp33;
          cResult[19] = tmp20;
          cResult[20] = tmp24;
          cResult[21] = tmp27;
          cResult[22] = tmp39;
          tmp37 = tmp39;
        }
        const obj8 = { style: tmp30, children: tmp31 };
        const tmp36 = closure_5(View, obj8);
        cResult[15] = tmp4.recipientContainer;
        cResult[16] = tmp31;
        cResult[17] = tmp36;
        tmp33 = tmp36;
      }
      const _Array = Array;
      const mapped = Array.from(selectedUsers).map((user) => hasOwnProperty(closure_9, { user, trialCreationResult: trialCreationResult.get(user.id) }, user.id));
      cResult[12] = selectedUsers;
      cResult[13] = trialCreationResult;
      cResult[14] = mapped;
      tmp31 = mapped;
      const arr2 = Array.from(selectedUsers);
    }
    const obj9 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.header, children: tmp5 };
    const tmp26 = closure_5(tmp(4886).Text, obj9);
    cResult[7] = tmp5;
    cResult[8] = tmp4.header;
    cResult[9] = tmp26;
    tmp24 = tmp26;
  }
  arr = Array.from(trialCreationResult.values());
}) : ((trialCreationResult) => {
  require = trialCreationResult;
  const tmp = closure_8();
  if (0 === arr.filter((item) => item === trialCreationResult(dependencyMap[8]).CreateReferralStatus.SUCCESS).length) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["7VBEue"]);
    let tmp5 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.tKCltd);
    tmp5 = require;
  }
  const intl3 = tmp5(1126).intl;
  const obj = { helpdeskArticle: null };
  arr = Array.from(trialCreationResult.trialCreationResult.values());
  obj.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  const obj3 = { startExpanded: true, contentStyles: tmp.content, header: closure_5(tmp5(6644).BottomSheetTitleHeader, { title: null }), children: null };
  const obj4 = { children: null };
  const formatResult = intl3.format(tmp5(1126).t.AwGSWl, obj);
  const items = [closure_5(View, { style: tmp.headerAsset, children: closure_5(tmp5(13251).FistBumpSpotIllustration, {}) }), closure_5(tmp5(4886).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult }), closure_5(tmp5(4886).Text, { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: formatResult }), ];
  const obj8 = { style: tmp.recipientContainer, children: null };
  const obj5 = { style: tmp.headerAsset, children: closure_5(tmp5(13251).FistBumpSpotIllustration, {}) };
  const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult };
  const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: formatResult };
  obj8.children = Array.from(trialCreationResult.trialCreationResult.trialCreationResult.selectedUsers).map((user) => hasOwnProperty(closure_9, { user, trialCreationResult: trialCreationResult.get(user.id) }, user.id));
  items[3] = closure_5(View, obj8);
  obj4.children = items;
  obj3.children = closure_7(tmp5(5593).Stack, obj4);
  return closure_5(tmp5(6645).BottomSheet, obj3);
});