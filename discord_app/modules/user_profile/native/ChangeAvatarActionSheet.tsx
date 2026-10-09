// === Module 14786: ChangeAvatarActionSheet ===

// Module 14786 (ChangeAvatarActionSheet)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import TableRow from "TableRow" /* 6186 */;
import TableRowGroup from "TableRowGroup" /* 6269 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6835 */;
import ActionSheet from "ActionSheet" /* 6892 */;
import Form from "Form" /* 8563 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import UserProfileUpsellButtonDefault from "UserProfileUpsellButton" /* 14766 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1085).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { nitroWheel: { marginLeft: nativeDefault.space.PX_8 }, sublabel: null, label: null, remove: null, upsellButton: null, upsellTitleContainer: null, titleWrapper: null, titleContainer: null };
let obj3 = { marginLeft: nativeDefault.space.PX_8 };
obj2.sublabel = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj2.label = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
let obj5 = { marginBottom: 4, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, alignItems: "center", flexDirection: "row" };
obj2.remove = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj6 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.upsellButton = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
obj2.upsellTitleContainer = { flexDirection: "row", alignItems: "flex-end" };
obj2.titleWrapper = { flex: 0 };
obj2.titleContainer = { justifyContent: "flex-start" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/ChangeAvatarActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeAvatarActionSheet(arg0) {
  const cResult = c.c(41);
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
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== stateFromStores) {
    const isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    let tmp11 = isPremiumResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.lqaIxI);
    cResult[4] = stringResult;
    let tmp15 = stringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    let tmp18 = tmp11;
    if (tmp11) {
      tmp18 = timestampProducer(NitroWheelIcon.NitroWheelIcon, {});
    }
    cResult[5] = tmp11;
    cResult[6] = tmp18;
    let tmp17 = tmp18;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp6.titleContainer) {
    if (cResult[8] === tmp6.titleWrapper) {
      if (cResult[9] === tmp17) {
        let tmp20 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["MsUY/S"]);
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.r5hKOy);
        cResult[11] = stringResult2;
        cResult[12] = stringResult1;
        let tmp23 = stringResult1;
        let tmp22 = stringResult2;
      } else {
        tmp22 = cResult[11];
        tmp23 = cResult[12];
      }
      if (cResult[13] !== handleUploadAvatarSelect) {
        const obj2 = { label: tmp23, subLabel: tmp22, onPress: handleUploadAvatarSelect };
        const tmp28 = timestampProducer(TableRow.TableRow, obj2);
        cResult[13] = handleUploadAvatarSelect;
        cResult[14] = tmp28;
        let tmp26 = tmp28;
      } else {
        tmp26 = cResult[14];
      }
      if (cResult[15] === tmp14) {
        if (cResult[16] === handleUploadGIFAvatarSelect) {
          let tmp29 = cResult[17];
        }
        if (cResult[18] === tmp4) {
          if (cResult[19] === tmp6.nitroWheel) {
            if (cResult[20] === tmp6.sublabel) {
              if (cResult[21] === tmp6.upsellButton) {
                if (cResult[22] === tmp6.upsellTitleContainer) {
                  let tmp32 = cResult[23];
                }
                if (cResult[24] === handleEditAvatarDecorationSelect) {
                  if (cResult[25] === tmp6.upsellTitleContainer) {
                    let tmp41 = cResult[26];
                  }
                  if (cResult[27] === handleRemoveAvatarSelect) {
                    if (cResult[28] === tmp5) {
                      if (cResult[29] === tmp6.label) {
                        if (cResult[30] === tmp6.remove) {
                          let tmp45 = cResult[31];
                        }
                        if (cResult[32] === tmp26) {
                          if (cResult[33] === tmp29) {
                            if (cResult[34] === tmp32) {
                              if (cResult[35] === tmp41) {
                                if (cResult[36] === tmp45) {
                                  let tmp48 = cResult[37];
                                }
                                if (cResult[38] === tmp48) {
                                  if (cResult[39] === tmp20) {
                                    let tmp51 = cResult[40];
                                  }
                                  return tmp51;
                                }
                                const obj4 = { children: null };
                                const items1 = [tmp20, tmp48];
                                obj4.children = items1;
                                const tmp53 = React5(ActionSheet.ActionSheet, obj4);
                                cResult[38] = tmp48;
                                cResult[39] = tmp20;
                                cResult[40] = tmp53;
                                tmp51 = tmp53;
                              }
                            }
                          }
                        }
                        const obj5 = { hasIcons: false, children: null };
                        const items2 = [tmp26, tmp29, tmp32, tmp41, tmp45];
                        obj5.children = items2;
                        const tmp50 = React5(TableRowGroup.TableRowGroup, obj5);
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
                  if (tmp5) {
                    const obj6 = { label: null, onPress: null };
                    const obj7 = { style: null, text: null };
                    const items3 = [, ];
                    ({ label: arr4[0], remove: arr4[1] } = tmp6);
                    obj7.style = items3;
                    const intl9 = util.intl;
                    obj7.text = intl9.string(util.t.twB3fz);
                    obj6.label = timestampProducer(Form.FormLabel, obj7);
                    obj6.onPress = handleRemoveAvatarSelect;
                    tmp46 = timestampProducer(TableRow.TableRow, obj6);
                  }
                  cResult[27] = handleRemoveAvatarSelect;
                  cResult[28] = tmp5;
                  cResult[29] = tmp6.label;
                  cResult[30] = tmp6.remove;
                  cResult[31] = tmp46;
                  tmp45 = tmp46;
                }
                let tmp42 = null != handleEditAvatarDecorationSelect;
                if (tmp42) {
                  const obj8 = { label: null, onPress: null };
                  const obj9 = { style: tmp6.upsellTitleContainer, children: null };
                  const obj10 = { text: null };
                  const intl8 = util.intl;
                  obj10.text = intl8.string(util.t.BVcYCx);
                  obj9.children = timestampProducer(Form.FormLabel, obj10);
                  obj8.label = timestampProducer(View, obj9);
                  obj8.onPress = handleEditAvatarDecorationSelect;
                  tmp42 = timestampProducer(TableRow.TableRow, obj8);
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
        if (tmp4) {
          const obj11 = { label: null, subLabel: null };
          const obj12 = { style: tmp6.upsellTitleContainer, children: null };
          const obj13 = { text: null };
          const intl5 = util.intl;
          obj13.text = intl5.string(util.t.xZ0Wot);
          const items4 = [timestampProducer(Form.FormLabel, obj13), ];
          const obj14 = { style: tmp6.nitroWheel, size: "sm" };
          items4[1] = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj14);
          obj12.children = items4;
          obj11.label = React5(View, obj12);
          const obj15 = { children: null };
          const obj16 = { style: tmp6.sublabel, numberOfLines: 3, text: null };
          const intl6 = util.intl;
          obj16.text = intl6.string(util.t.L3UPqR);
          const items5 = [timestampProducer(Form.FormSubLabel, obj16), ];
          const obj17 = { style: tmp6.upsellButton, children: null };
          const obj18 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: null };
          const intl7 = util.intl;
          obj18.label = intl7.string(util.t.mr4K7D);
          obj17.children = timestampProducer(UserProfileUpsellButtonDefault, obj18);
          items5[1] = timestampProducer(View, obj17);
          obj15.children = items5;
          obj11.subLabel = React5(closure_1_8, obj15);
          tmp33 = timestampProducer(TableRow.TableRow, obj11);
        }
        cResult[18] = tmp4;
        cResult[19] = tmp6.nitroWheel;
        cResult[20] = tmp6.sublabel;
        cResult[21] = tmp6.upsellButton;
        cResult[22] = tmp6.upsellTitleContainer;
        cResult[23] = tmp33;
        tmp32 = tmp33;
      }
      let tmp30 = tmp14;
      if (tmp14) {
        const obj19 = { label: null, onPress: null };
        const intl4 = util.intl;
        obj19.label = intl4.string(util.t["xsC+/y"]);
        obj19.onPress = handleUploadGIFAvatarSelect;
        tmp30 = timestampProducer(TableRow.TableRow, obj19);
      }
      cResult[15] = tmp14;
      cResult[16] = handleUploadGIFAvatarSelect;
      cResult[17] = tmp30;
      tmp29 = tmp30;
    }
  }
  const tmp21 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: tmp15, trailing: tmp17, titleWrapperStyle: tmp6.titleWrapper, titleContainerStyle: tmp6.titleContainer });
  cResult[7] = tmp6.titleContainer;
  cResult[8] = tmp6.titleWrapper;
  cResult[9] = tmp17;
  cResult[10] = tmp21;
  tmp20 = tmp21;
  const obj20 = { title: tmp15, trailing: tmp17, titleWrapperStyle: tmp6.titleWrapper, titleContainerStyle: tmp6.titleContainer };
  const tmpResult = initialize;
}) : (function ChangeAvatarActionSheet(showRemoveAvatar) {
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
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isPremiumResult = PremiumUtilsDefault.isPremium(stateFromStores);
  const obj4 = { title: null, trailing: null, titleWrapperStyle: null, titleContainerStyle: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.lqaIxI);
  if (isPremiumResult) {
    isPremiumResult = timestampProducer(NitroWheelIcon.NitroWheelIcon, {});
  }
  obj4.trailing = isPremiumResult;
  ({ titleWrapper: obj3.titleWrapperStyle, titleContainer: obj3.titleContainerStyle } = tmp);
  const items1 = [timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4), ];
  const obj5 = { label: null, subLabel: null, onPress: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t["MsUY/S"]);
  const intl3 = util.intl;
  obj5.subLabel = intl3.string(util.t.r5hKOy);
  obj5.onPress = handleUploadAvatarSelect;
  const items2 = [timestampProducer(TableRow.TableRow, obj5), , , , ];
  let tmp8Result = null != handleUploadGIFAvatarSelect && !showAnimatedAvatarUpsell;
  if (tmp8Result) {
    const obj6 = { label: null, onPress: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["xsC+/y"]);
    obj6.onPress = handleUploadGIFAvatarSelect;
    tmp8Result = timestampProducer(TableRow.TableRow, obj6);
  }
  items2[1] = tmp8Result;
  if (showAnimatedAvatarUpsell) {
    const obj7 = { label: null, subLabel: null };
    const obj8 = { style: tmp.upsellTitleContainer, children: null };
    const obj9 = { text: null };
    const intl5 = util.intl;
    obj9.text = intl5.string(util.t.xZ0Wot);
    const items3 = [timestampProducer(Form.FormLabel, obj9), ];
    const obj10 = { style: tmp.nitroWheel, size: "sm" };
    items3[1] = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj10);
    obj8.children = items3;
    obj7.label = React5(View, obj8);
    const obj11 = { children: null };
    const obj12 = { style: tmp.sublabel, numberOfLines: 3, text: null };
    const intl6 = util.intl;
    obj12.text = intl6.string(util.t.L3UPqR);
    const items4 = [timestampProducer(Form.FormSubLabel, obj12), ];
    const obj13 = { style: tmp.upsellButton, children: null };
    const obj14 = { analyticsObject: AnalyticsObjects.ANIMATED_AVATAR, label: null };
    const intl7 = util.intl;
    obj14.label = intl7.string(util.t.mr4K7D);
    obj13.children = timestampProducer(UserProfileUpsellButtonDefault, obj14);
    items4[1] = timestampProducer(View, obj13);
    obj11.children = items4;
    obj7.subLabel = React5(closure_1_8, obj11);
    showAnimatedAvatarUpsell = timestampProducer(TableRow.TableRow, obj7);
    const tmp5Result = UserProfileUpsellButtonDefault;
  }
  items2[2] = showAnimatedAvatarUpsell;
  let tmp8Result2 = null != handleEditAvatarDecorationSelect;
  if (tmp8Result2) {
    const obj15 = { label: null, onPress: null };
    const obj16 = { style: tmp.upsellTitleContainer, children: null };
    const obj17 = { text: null };
    const intl8 = util.intl;
    obj17.text = intl8.string(util.t.BVcYCx);
    obj16.children = timestampProducer(Form.FormLabel, obj17);
    obj15.label = timestampProducer(View, obj16);
    obj15.onPress = handleEditAvatarDecorationSelect;
    tmp8Result2 = timestampProducer(TableRow.TableRow, obj15);
  }
  items2[3] = tmp8Result2;
  if (flag) {
    const obj18 = { label: null, onPress: null };
    const obj19 = { style: null, text: null };
    const items5 = [, ];
    ({ label: arr6[0], remove: arr6[1] } = tmp);
    obj19.style = items5;
    const intl9 = util.intl;
    obj19.text = intl9.string(util.t.twB3fz);
    obj18.label = timestampProducer(Form.FormLabel, obj19);
    obj18.onPress = handleRemoveAvatarSelect;
    flag = timestampProducer(TableRow.TableRow, obj18);
  }
  const obj36 = { children: null };
  items2[4] = flag;
  items1[1] = React5(TableRowGroup.TableRowGroup, { hasIcons: false, children: items2 });
  obj36.children = items1;
  return React5(ActionSheet.ActionSheet, obj36);
});