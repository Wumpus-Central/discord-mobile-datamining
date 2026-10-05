// === Module 14437: ChangeAvatarActionSheet ===

// Module 14437 (ChangeAvatarActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import TableRow6 from "TableRow" /* 5993 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8313 */;
import Form from "Form" /* 8895 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 14420 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const AnalyticsObjects = Constants.AnalyticsObjects;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { nitroWheel: obj2, sublabel: obj3, label: obj4, remove: obj5, upsellButton: obj6, upsellTitleContainer: { flexDirection: "row", alignItems: "flex-end" }, titleWrapper: { flex: 0 }, titleContainer: { justifyContent: "flex-start" } };
obj2 = { marginLeft: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let FormLabel2;
  let FormLabel3;
  let currentUser;
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj12;
  let obj15;
  let obj18;
  let obj7;
  let obj9;
  let showAnimatedAvatarUpsell;
  let showRemoveAvatar;
  let tmp11;
  let tmp15;
  let tmp17;
  let tmp39;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(41);
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect, handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell, showRemoveAvatar } = arg0);
  const tmp6 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function p() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== stateFromStores) {
    const obj3 = PremiumUtilsDefault;
    const isPremiumResult = obj3.isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    tmp11 = isPremiumResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl10.intl;
    const stringResult = intl.string(intl10.t.lqaIxI);
    cResult[4] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    const tmp18 = tmp11 && metroRequire(NitroWheelIcon.NitroWheelIcon, {});
    cResult[5] = tmp11;
    cResult[6] = tmp18;
    tmp17 = tmp18;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp6.titleContainer) {
    if (cResult[8] === tmp6.titleWrapper) {
      let tmp20;
      let tmp23;
      let tmp22;
      let tmp26;
      if (cResult[9] === tmp17) {
        tmp20 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl10.intl;
        const stringResult1 = intl2.string(intl10.t["MsUY/S"]);
        const intl3 = intl10.intl;
        const stringResult2 = intl3.string(intl10.t.r5hKOy);
        cResult[11] = stringResult2;
        cResult[12] = stringResult1;
        tmp23 = stringResult1;
        tmp22 = stringResult2;
      } else {
        tmp22 = cResult[11];
        tmp23 = cResult[12];
      }
      if (cResult[13] !== handleUploadAvatarSelect) {
        const obj2 = { label: tmp23, subLabel: tmp22, onPress: handleUploadAvatarSelect };
        const tmp28 = metroRequire(TableRow6.TableRow, obj2);
        cResult[13] = handleUploadAvatarSelect;
        cResult[14] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[14];
      }
      if (cResult[15] === (null != handleUploadGIFAvatarSelect && !(undefined !== showAnimatedAvatarUpsell && showAnimatedAvatarUpsell))) {
        let tmp29;
        if (cResult[16] === handleUploadGIFAvatarSelect) {
          tmp29 = cResult[17];
        }
        if (cResult[18] === (undefined !== showAnimatedAvatarUpsell && showAnimatedAvatarUpsell)) {
          if (cResult[19] === tmp6.nitroWheel) {
            if (cResult[20] === tmp6.sublabel) {
              if (cResult[21] === tmp6.upsellButton) {
                let tmp32;
                if (cResult[22] === tmp6.upsellTitleContainer) {
                  tmp32 = cResult[23];
                }
                if (cResult[24] === handleEditAvatarDecorationSelect) {
                  let tmp41;
                  if (cResult[25] === tmp6.upsellTitleContainer) {
                    tmp41 = cResult[26];
                  }
                  if (cResult[27] === handleRemoveAvatarSelect) {
                    if (cResult[28] === (undefined !== showRemoveAvatar && showRemoveAvatar)) {
                      if (cResult[29] === tmp6.label) {
                        let tmp45;
                        if (cResult[30] === tmp6.remove) {
                          tmp45 = cResult[31];
                        }
                        if (cResult[32] === tmp26) {
                          if (cResult[33] === tmp29) {
                            if (cResult[34] === tmp32) {
                              if (cResult[35] === tmp41) {
                                let tmp48;
                                if (cResult[36] === tmp45) {
                                  tmp48 = cResult[37];
                                }
                                if (cResult[38] === tmp48) {
                                  let tmp51;
                                  if (cResult[39] === tmp20) {
                                    tmp51 = cResult[40];
                                  }
                                  return tmp51;
                                }
                                const obj4 = { children: items1 };
                                items1 = [tmp20, tmp48];
                                const tmp53 = metroImportDefault(ActionSheet2.ActionSheet, obj4);
                                cResult[38] = tmp48;
                                cResult[39] = tmp20;
                                cResult[40] = tmp53;
                                tmp51 = tmp53;
                              }
                            }
                          }
                        }
                        const obj5 = { hasIcons: false, children: items2 };
                        items2 = [tmp26, tmp29, tmp32, tmp41, tmp45];
                        const tmp50 = metroImportDefault(TableRowGroup2.TableRowGroup, obj5);
                        cResult[32] = tmp26;
                        cResult[33] = tmp29;
                        cResult[34] = tmp32;
                        cResult[35] = tmp41;
                        cResult[36] = tmp45;
                        cResult[37] = tmp50;
                        tmp48 = tmp50;
                      }
                    }
                  }
                  let tmp46 = tmp5;
                  if (tmp46) {
                    const obj6 = { label: metroRequire(FormLabel3, obj7), onPress: handleRemoveAvatarSelect };
                    const TableRow4 = TableRow6.TableRow;
                    obj7 = { style: items3, text: intl9.string(intl10.t.twB3fz) };
                    items3 = [, ];
                    ({ label: arr4[0], remove: arr4[1] } = tmp6);
                    FormLabel3 = Form.FormLabel;
                    intl9 = intl10.intl;
                    tmp46 = metroRequire(TableRow4, obj6);
                  }
                  cResult[27] = handleRemoveAvatarSelect;
                  cResult[28] = undefined !== showRemoveAvatar && showRemoveAvatar;
                  cResult[29] = tmp6.label;
                  cResult[30] = tmp6.remove;
                  cResult[31] = tmp46;
                  tmp45 = tmp46;
                }
                let tmp42 = null != handleEditAvatarDecorationSelect;
                if (tmp42) {
                  const obj8 = { label: metroRequire(View, obj9), onPress: handleEditAvatarDecorationSelect };
                  obj9 = { style: tmp6.upsellTitleContainer, children: metroRequire(FormLabel2, obj10) };
                  const TableRow3 = TableRow6.TableRow;
                  obj10 = { text: intl8.string(intl10.t.BVcYCx) };
                  FormLabel2 = Form.FormLabel;
                  intl8 = intl10.intl;
                  tmp42 = metroRequire(TableRow3, obj8);
                }
                cResult[24] = handleEditAvatarDecorationSelect;
                cResult[25] = tmp6.upsellTitleContainer;
                cResult[26] = tmp42;
                tmp41 = tmp42;
              }
            }
          }
        }
        let tmp33 = tmp4;
        if (tmp33) {
          const obj11 = { label: metroImportDefault(View, obj12), subLabel: metroImportDefault(metroImportAll, obj15) };
          obj12 = { style: tmp6.upsellTitleContainer, children: items4 };
          const TableRow2 = TableRow6.TableRow;
          const obj13 = { text: intl5.string(intl10.t.xZ0Wot) };
          const FormLabel = Form.FormLabel;
          intl5 = intl10.intl;
          items4 = [metroRequire(FormLabel, obj13), ];
          const obj14 = { style: tmp6.nitroWheel, size: "sm" };
          items4[1] = metroRequire(NitroWheelIcon.NitroWheelIcon, obj14);
          obj15 = { children: items5 };
          const obj16 = { style: tmp6.sublabel, numberOfLines: 3, text: intl6.string(intl10.t.L3UPqR) };
          const FormSubLabel = Form.FormSubLabel;
          intl6 = intl10.intl;
          items5 = [metroRequire(FormSubLabel, obj16), ];
          const obj17 = { style: tmp6.upsellButton, children: metroRequire(tmp39, obj18) };
          obj18 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: intl7.string(intl10.t.mr4K7D) };
          tmp39 = UserProfileUpsellButtonDefault;
          intl7 = intl10.intl;
          items5[1] = metroRequire(View, obj17);
          tmp33 = metroRequire(TableRow2, obj11);
        }
        cResult[18] = undefined !== showAnimatedAvatarUpsell && showAnimatedAvatarUpsell;
        cResult[19] = tmp6.nitroWheel;
        cResult[20] = tmp6.sublabel;
        cResult[21] = tmp6.upsellButton;
        cResult[22] = tmp6.upsellTitleContainer;
        cResult[23] = tmp33;
        tmp32 = tmp33;
      }
      let tmp30 = tmp14;
      if (tmp30) {
        const obj19 = { label: intl4.string(intl10.t["xsC+/y"]), onPress: handleUploadGIFAvatarSelect };
        const TableRow = TableRow6.TableRow;
        intl4 = intl10.intl;
        tmp30 = metroRequire(TableRow, obj19);
      }
      cResult[15] = null != handleUploadGIFAvatarSelect && !(undefined !== showAnimatedAvatarUpsell && showAnimatedAvatarUpsell);
      cResult[16] = handleUploadGIFAvatarSelect;
      cResult[17] = tmp30;
      tmp29 = tmp30;
    }
  }
  const obj20 = { title: tmp15, trailing: tmp17, titleWrapperStyle: tmp6.titleWrapper, titleContainerStyle: tmp6.titleContainer };
  const tmp21 = metroRequire(BottomSheetTitleHeader2.BottomSheetTitleHeader, obj20);
  cResult[7] = tmp6.titleContainer;
  cResult[8] = tmp6.titleWrapper;
  cResult[9] = tmp17;
  cResult[10] = tmp21;
  tmp20 = tmp21;
}) : ((showRemoveAvatar) => {
  let FormLabel2;
  let FormLabel3;
  let currentUser;
  let handleEditAvatarDecorationSelect;
  let handleRemoveAvatarSelect;
  let handleUploadAvatarSelect;
  let handleUploadGIFAvatarSelect;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items3;
  let items4;
  let items5;
  let obj11;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj8;
  let showAnimatedAvatarUpsell;
  let tmp5Result;
  ({ handleUploadGIFAvatarSelect, handleEditAvatarDecorationSelect, showAnimatedAvatarUpsell } = showRemoveAvatar);
  ({ handleUploadAvatarSelect, handleRemoveAvatarSelect } = showRemoveAvatar);
  if (showAnimatedAvatarUpsell === undefined) {
    showAnimatedAvatarUpsell = false;
  }
  let flag = showRemoveAvatar.showRemoveAvatar;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = PremiumUtilsDefault;
  let isPremiumResult = obj2.isPremium(stateFromStores);
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj4 = { title: intl.string(intl10.t.lqaIxI), trailing: isPremiumResult, titleWrapperStyle: null, titleContainerStyle: null };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl10.intl;
  if (isPremiumResult) {
    isPremiumResult = metroRequire(NitroWheelIcon.NitroWheelIcon, {});
  }
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items1 = [metroRequire(BottomSheetTitleHeader, obj4), ];
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  const obj5 = { label: intl2.string(intl10.t["MsUY/S"]), subLabel: intl3.string(intl10.t.r5hKOy), onPress: handleUploadAvatarSelect };
  const TableRow = TableRow6.TableRow;
  intl2 = intl10.intl;
  intl3 = intl10.intl;
  const items2 = [metroRequire(TableRow, obj5), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    const obj6 = { label: intl4.string(intl10.t["xsC+/y"]), onPress: handleUploadGIFAvatarSelect };
    const TableRow2 = TableRow6.TableRow;
    intl4 = intl10.intl;
    tmp8Result = metroRequire(TableRow2, obj6);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj7 = { label: metroImportDefault(View, obj8), subLabel: metroImportDefault(metroImportAll, obj11) };
    obj8 = { style: tmp.upsellTitleContainer, children: items3 };
    const TableRow3 = TableRow6.TableRow;
    const obj9 = { text: intl5.string(intl10.t.xZ0Wot) };
    const FormLabel = Form.FormLabel;
    intl5 = intl10.intl;
    items3 = [metroRequire(FormLabel, obj9), ];
    const obj10 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = metroRequire(NitroWheelIcon.NitroWheelIcon, obj10);
    obj11 = { children: items4 };
    const obj12 = { style: tmp.sublabel, numberOfLines: 3, text: intl6.string(intl10.t.L3UPqR) };
    const FormSubLabel = Form.FormSubLabel;
    intl6 = intl10.intl;
    items4 = [metroRequire(FormSubLabel, obj12), ];
    const obj13 = { style: tmp.upsellButton, children: metroRequire(tmp5Result, obj14) };
    obj14 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: intl7.string(intl10.t.mr4K7D) };
    tmp5Result = UserProfileUpsellButtonDefault;
    intl7 = intl10.intl;
    items4[1] = metroRequire(View, obj13);
    showAnimatedAvatarUpsell = metroRequire(TableRow3, obj7);
  }
  items2[2] = showAnimatedAvatarUpsell;
  let tmp8Result2 = null != handleEditAvatarDecorationSelect;
  if (tmp8Result2) {
    const obj15 = { label: metroRequire(View, obj16), onPress: handleEditAvatarDecorationSelect };
    obj16 = { style: tmp.upsellTitleContainer, children: metroRequire(FormLabel2, obj17) };
    const TableRow4 = TableRow6.TableRow;
    obj17 = { text: intl8.string(intl10.t.BVcYCx) };
    FormLabel2 = Form.FormLabel;
    intl8 = intl10.intl;
    tmp8Result2 = metroRequire(TableRow4, obj15);
  }
  items2[3] = tmp8Result2;
  if (flag) {
    const obj18 = { label: metroRequire(FormLabel3, obj19), onPress: handleRemoveAvatarSelect };
    const TableRow5 = TableRow6.TableRow;
    obj19 = { style: items5, text: intl9.string(intl10.t.twB3fz) };
    items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    FormLabel3 = Form.FormLabel;
    intl9 = intl10.intl;
    flag = metroRequire(TableRow5, obj18);
  }
  const obj36 = { children: items1 };
  items2[4] = flag;
  items1[1] = metroImportDefault(TableRowGroup, { hasIcons: false, children: items2 });
  return metroImportDefault(ActionSheet, obj36);
});
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default tmp5;