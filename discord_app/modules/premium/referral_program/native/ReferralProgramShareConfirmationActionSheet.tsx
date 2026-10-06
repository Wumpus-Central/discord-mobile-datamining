// === Module 13269: ReferralProgramShareConfirmationActionSheet ===

// Module 13269 (ReferralProgramShareConfirmationActionSheet)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6651 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 6975 */;
import FistBumpSpotIllustration from "FistBumpSpotIllustration" /* 13270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, user;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerAsset: { alignSelf: "center" }, header: obj3, subheader: obj4, recipientContainer: obj5, recipientRow: obj6, recipientDisplayName: { flex: 1 }, erroredAvatar: { opacity: 0.5 }, avatarContainer: { alignSelf: "center", justifyContent: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_8, textAlign: "center" };
obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
obj6 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let intl;
  let items;
  let items1;
  let obj9;
  let tmp5;
  let tmp8;
  let obj = user(576);
  const cResult = obj.c(23);
  user = user.user;
  const tmp4 = closure_8();
  if (cResult[0] !== user) {
    let obj2 = UserUtilsDefault;
    const name = obj2.getName(user);
    cResult[0] = user;
    cResult[1] = name;
    tmp5 = name;
  } else {
    tmp5 = cResult[1];
  }
  const FAIL = tmp(6975).CreateReferralStatus.FAIL;
  if (cResult[2] !== user.id) {
    const fn = function v() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = ChannelActionCreatorsDefault;
      const obj3 = { recipientIds: user.id };
      obj2.openPrivateChannel(obj3);
    };
    cResult[2] = user.id;
    cResult[3] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  let erroredAvatar = tmp9;
  const recipientRow = tmp4.recipientRow;
  if (user.trialCreationResult === FAIL) {
    erroredAvatar = tmp4.erroredAvatar;
  }
  if (cResult[4] === tmp4.avatarContainer) {
    let tmp10;
    if (cResult[5] === erroredAvatar) {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp10) {
      let tmp11;
      let tmp16;
      if (cResult[8] === user) {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === user.trialCreationResult === FAIL) {
          let tmp14;
          let tmp22;
          let tmp21;
          let tmp27;
          if (cResult[12] === tmp4.recipientDisplayName) {
            tmp14 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(user(1126).t["g33r/P"]);
            let obj3 = { size: "xs", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
            const ChatIcon = tmp(5862).ChatIcon;
            const tmp26 = closure_5(ChatIcon, obj3);
            cResult[14] = stringResult;
            cResult[15] = tmp26;
            tmp22 = tmp26;
            tmp21 = stringResult;
          } else {
            tmp21 = cResult[14];
            tmp22 = cResult[15];
          }
          if (cResult[16] !== tmp8) {
            const obj4 = { variant: "secondary", size: "sm", text: tmp21, icon: tmp22, onPress: tmp8 };
            const tmp29 = closure_5(user(5601).Button, obj4);
            cResult[16] = tmp8;
            cResult[17] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[17];
          }
          if (cResult[18] === tmp4.recipientRow) {
            if (cResult[19] === tmp27) {
              if (cResult[20] === tmp11) {
                let tmp30;
                if (cResult[21] === tmp14) {
                  tmp30 = cResult[22];
                }
                return tmp30;
              }
            }
          }
          const obj5 = { style: recipientRow, children: items };
          items = [tmp11, tmp14, tmp27];
          const tmp33 = closure_7(View, obj5);
          cResult[18] = tmp4.recipientRow;
          cResult[19] = tmp27;
          cResult[20] = tmp11;
          cResult[21] = tmp14;
          cResult[22] = tmp33;
          tmp30 = tmp33;
        }
      }
      if (user.trialCreationResult === FAIL) {
        const obj6 = { children: items1 };
        const obj7 = { variant: "text-md/medium", color: "text-muted", style: tmp4.recipientDisplayName, children: tmp5 };
        items1 = [closure_5(user(4892).Text, obj7), ];
        const obj8 = { variant: "text-md/medium", color: "text-muted", children: intl.format(user(1126).t.RO3T4B, obj9) };
        const Text = tmp(4892).Text;
        intl = tmp(1126).intl;
        obj9 = { userName: tmp5 };
        items1[1] = closure_5(Text, obj8);
        tmp16 = closure_7(closure_6, obj6);
      } else {
        const obj10 = { variant: "text-md/medium", color: "text-strong", style: tmp4.recipientDisplayName, children: tmp5 };
        tmp16 = closure_5(tmp(4892).Text, obj10);
      }
      cResult[10] = tmp5;
      cResult[11] = user.trialCreationResult === FAIL;
      cResult[12] = tmp4.recipientDisplayName;
      cResult[13] = tmp16;
      tmp14 = tmp16;
    }
    const obj11 = { style: tmp10, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "Array" };
    const Avatar = tmp(1188).Avatar;
    const tmp13 = closure_5(Avatar, obj11);
    cResult[7] = tmp10;
    cResult[8] = user;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const items2 = [tmp4.avatarContainer, erroredAvatar];
  cResult[4] = tmp4.avatarContainer;
  cResult[5] = erroredAvatar;
  cResult[6] = items2;
  tmp10 = items2;
}) : ((user) => {
  let ChatIcon;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj10;
  let obj7;
  let tmp9Result;
  user = user.user;
  const trialCreationResult = user.trialCreationResult;
  const tmp = closure_8();
  let obj = UserUtilsDefault;
  const name = obj.getName(user);
  const tmp6 = trialCreationResult === user(6975).CreateReferralStatus.FAIL;
  let obj2 = { style: tmp.recipientRow, children: items1 };
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp6;
  const Avatar = user(1188).Avatar;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  let obj3 = { style: items, size: tmp5(1188).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "Array" };
  items[1] = erroredAvatar;
  items1 = [closure_5(Avatar, obj3), , ];
  if (tmp6) {
    const obj4 = { children: items2 };
    const obj5 = { variant: "text-md/medium", color: "text-muted", style: tmp.recipientDisplayName, children: name };
    items2 = [closure_5(user(4892).Text, obj5), ];
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: intl.format(user(1126).t.RO3T4B, obj7) };
    const Text = tmp5(4892).Text;
    intl = tmp5(1126).intl;
    obj7 = { userName: name };
    items2[1] = closure_5(Text, obj6);
    tmp9Result = closure_7(closure_6, obj4);
  } else {
    const obj8 = { variant: "text-md/medium", color: "text-strong", style: tmp.recipientDisplayName, children: name };
    tmp9Result = closure_5(tmp5(4892).Text, obj8);
  }
  items1[1] = tmp9Result;
  const obj9 = {
    variant: "secondary",
    size: "sm",
    text: intl2.string(user(1126).t["g33r/P"]),
    icon: closure_5(ChatIcon, obj10),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = ChannelActionCreatorsDefault;
      const obj3 = { recipientIds: user.id };
      obj2.openPrivateChannel(obj3);
    }
  };
  const Button = tmp5(5601).Button;
  intl2 = tmp5(1126).intl;
  obj10 = { size: "xs", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
  ChatIcon = tmp5(5862).ChatIcon;
  items1[2] = closure_5(Button, obj9);
  return closure_7(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let obj3;
  let selectedUsers;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp5;
  let tmp9;
  let trialCreationResult;
  let obj = react;
  const cResult = obj.c(26);
  ({ selectedUsers, trialCreationResult } = arg0);
  require = trialCreationResult;
  const tmp4 = closure_8();
  const arr = Array.from(trialCreationResult.values());
  if (0 === arr.filter((item) => item === ReferralTrialActionCreators.CreateReferralStatus.SUCCESS).length) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(intl4.t["7VBEue"]);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    tmp5 = first;
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult1 = intl.string(intl4.t.tKCltd);
      cResult[1] = stringResult1;
      tmp5 = stringResult1;
    } else {
      tmp5 = cResult[1];
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const format = intl3.format;
    const obj2 = { helpdeskArticle: obj3.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
    const AwGSWl = tmp(1126).t.AwGSWl;
    obj3 = HelpdeskUtilsDefault;
    const formatResult = format(AwGSWl, obj2);
    cResult[2] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[2];
  }
  const content = tmp4.content;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
    cResult[3] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = closure_5(FistBumpSpotIllustration.FistBumpSpotIllustration, {});
    cResult[4] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] !== tmp4.headerAsset) {
    const obj4 = { style: tmp4.headerAsset, children: tmp16 };
    const tmp22 = closure_5(View, obj4);
    cResult[5] = tmp4.headerAsset;
    cResult[6] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] === tmp5) {
    let tmp23;
    let tmp25;
    if (cResult[8] === tmp4.header) {
      tmp23 = cResult[9];
    }
    if (cResult[10] !== tmp4.subheader) {
      const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp4.subheader, children: tmp9 };
      const tmp27 = closure_5(Text_Text.Text, obj5);
      cResult[10] = tmp4.subheader;
      cResult[11] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[11];
    }
    if (cResult[12] === selectedUsers) {
      let tmp29;
      if (cResult[13] === trialCreationResult) {
        tmp29 = cResult[14];
      }
      if (cResult[15] === tmp4.recipientContainer) {
        let tmp31;
        if (cResult[16] === tmp29) {
          tmp31 = cResult[17];
        }
        if (cResult[18] === tmp31) {
          if (cResult[19] === tmp19) {
            if (cResult[20] === tmp23) {
              let tmp35;
              if (cResult[21] === tmp25) {
                tmp35 = cResult[22];
              }
              if (cResult[23] === tmp4.content) {
                let tmp38;
                if (cResult[24] === tmp35) {
                  tmp38 = cResult[25];
                }
                return tmp38;
              }
              const obj6 = { startExpanded: true, contentStyles: content, header: tmp13, children: tmp35 };
              const tmp40 = closure_5(Sheet_BottomSheet.BottomSheet, obj6);
              cResult[23] = tmp4.content;
              cResult[24] = tmp35;
              cResult[25] = tmp40;
              tmp38 = tmp40;
            }
          }
        }
        const obj7 = { children: items };
        items = [tmp19, tmp23, tmp25, tmp31];
        const tmp37 = closure_7(Stack_Stack.Stack, obj7);
        cResult[18] = tmp31;
        cResult[19] = tmp19;
        cResult[20] = tmp23;
        cResult[21] = tmp25;
        cResult[22] = tmp37;
        tmp35 = tmp37;
      }
      const obj8 = { style: tmp28, children: tmp29 };
      const tmp34 = closure_5(View, obj8);
      cResult[15] = tmp4.recipientContainer;
      cResult[16] = tmp29;
      cResult[17] = tmp34;
      tmp31 = tmp34;
    }
    const _Array = Array;
    const arr2 = Array.from(selectedUsers);
    const mapped = arr2.map((user) => {
      const obj = { user, trialCreationResult: require.get(user.id) };
      return hasOwnProperty(closure_9, obj, user.id);
    });
    cResult[12] = selectedUsers;
    cResult[13] = trialCreationResult;
    cResult[14] = mapped;
    tmp29 = mapped;
  }
  const obj9 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.header, children: tmp5 };
  const tmp24 = closure_5(Text_Text.Text, obj9);
  cResult[7] = tmp5;
  cResult[8] = tmp4.header;
  cResult[9] = tmp24;
  tmp23 = tmp24;
}) : ((trialCreationResult) => {
  let Stack;
  let arr2;
  let items;
  let obj2;
  let obj4;
  let stringResult;
  let tmp5;
  require = trialCreationResult;
  const selectedUsers = trialCreationResult.selectedUsers;
  const tmp = closure_8();
  const arr = Array.from(trialCreationResult.trialCreationResult.values());
  if (0 === arr.filter((item) => item === ReferralTrialActionCreators.CreateReferralStatus.SUCCESS).length) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t["7VBEue"]);
    tmp5 = require;
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.tKCltd);
    tmp5 = require;
  }
  const intl3 = tmp5(1126).intl;
  const format = intl3.format;
  let obj = { helpdeskArticle: obj2.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM) };
  const AwGSWl = tmp5(1126).t.AwGSWl;
  obj2 = HelpdeskUtilsDefault;
  const obj3 = { startExpanded: true, contentStyles: tmp.content, header: closure_5(tmp5(6651).BottomSheetTitleHeader, { title: null }), children: closure_7(Stack, obj4) };
  const formatResult = format(AwGSWl, obj);
  BottomSheet = tmp5(6652).BottomSheet;
  obj4 = { children: items };
  const obj5 = { style: tmp.headerAsset, children: closure_5(tmp5(13270).FistBumpSpotIllustration, {}) };
  Stack = tmp5(5600).Stack;
  items = [closure_5(View, obj5), , , ];
  const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult };
  items[1] = closure_5(tmp5(4892).Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: formatResult };
  items[2] = closure_5(tmp5(4892).Text, obj7);
  const obj8 = {
    style: tmp.recipientContainer,
    children: arr2.map((user) => {
      const obj = { user, trialCreationResult: require.get(user.id) };
      return hasOwnProperty(closure_9, obj, user.id);
    })
  };
  arr2 = Array.from(selectedUsers);
  items[3] = closure_5(View, obj8);
  return closure_5(BottomSheet, obj3);
});
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default tmp4;