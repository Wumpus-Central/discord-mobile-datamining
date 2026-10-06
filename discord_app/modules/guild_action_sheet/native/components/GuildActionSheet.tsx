// === Module 13806: GuildActionSheet ===

// Module 13806 (GuildActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 6656 */;
import useBottomSheetRef from "useBottomSheetRef" /* 7852 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13741 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 13801 */;
import GuildActionSheetTabItemsDefault from "GuildActionSheetTabItems" /* 13807 */;
import GuildActionSheetProgressDefault from "GuildActionSheetProgress" /* 13808 */;
import GuildActionSheetEmojiSectionDefault from "GuildActionSheetEmojiSection" /* 13811 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, actions: { paddingHorizontal: 16, gap: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  let items;
  let items1;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp28;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(36);
  ({ guild, expanded } = arg0);
  const tmp5 = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmpResult = useBottomSheetRef;
  const bottomSheetRef1 = tmpResult.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  let num = 0;
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isAndroid()) {
    num = 16;
  }
  const sum = bottom + num;
  if (cResult[0] !== sum) {
    const obj2 = { paddingBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj3 = { guild };
    const tmp13 = React3(GuildActionSheetHeaderDefault, obj3);
    const obj4 = { guild };
    const tmp14 = React3(GuildActionSheetTabItemsDefault, obj4);
    cResult[2] = guild;
    cResult[3] = tmp13;
    cResult[4] = tmp14;
    tmp11 = tmp14;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  if (cResult[5] !== guild) {
    const obj5 = { guild };
    const tmp22 = React3(GuildActionSheetActions.GuildUnreadAction, obj5);
    const obj6 = { guild };
    const tmp23 = React3(GuildActionSheetProgressDefault, obj6);
    const obj7 = { guild };
    const tmp24 = React3(GuildActionSheetActions.GuildActionSheetPrimaryActions, obj7);
    const obj8 = { guild };
    const tmp25 = React3(GuildActionSheetActions.GuildActionSheetGameOrganizationActions, obj8);
    const obj9 = { guild };
    const tmp26 = React3(GuildActionSheetActions.GuildActionSheetSecondaryActions, obj9);
    const obj10 = { guild };
    const tmp27 = React3(GuildActionSheetActions.GuildDeveloperOptionAction, obj10);
    cResult[5] = guild;
    cResult[6] = tmp26;
    cResult[7] = tmp27;
    cResult[8] = tmp22;
    cResult[9] = tmp23;
    cResult[10] = tmp24;
    cResult[11] = tmp25;
    tmp20 = tmp25;
    tmp19 = tmp24;
    tmp18 = tmp23;
    tmp17 = tmp22;
    tmp16 = tmp27;
    tmp15 = tmp26;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
    tmp17 = cResult[8];
    tmp18 = cResult[9];
    tmp19 = cResult[10];
    tmp20 = cResult[11];
  }
  if (cResult[12] !== guild.id) {
    const obj11 = { guildId: guild.id };
    const tmp30 = React3(GuildActionSheetEmojiSectionDefault, obj11);
    cResult[12] = guild.id;
    cResult[13] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[13];
  }
  if (cResult[14] === tmp5.actions) {
    if (cResult[15] === tmp15) {
      if (cResult[16] === tmp16) {
        if (cResult[17] === tmp28) {
          if (cResult[18] === tmp17) {
            if (cResult[19] === tmp18) {
              if (cResult[20] === tmp19) {
                let tmp31;
                let tmp33;
                if (cResult[21] === tmp20) {
                  tmp31 = cResult[22];
                }
                if (cResult[23] !== bottomSheetClose) {
                  const obj12 = { variant: "floating", onPress: bottomSheetClose };
                  const tmp35 = React3(ActionSheetHeaderBar.ActionSheetHeaderBar, obj12);
                  cResult[23] = bottomSheetClose;
                  cResult[24] = tmp35;
                  tmp33 = tmp35;
                } else {
                  tmp33 = cResult[24];
                }
                if (cResult[25] === tmp5.container) {
                  if (cResult[26] === tmp31) {
                    if (cResult[27] === tmp33) {
                      if (cResult[28] === tmp9) {
                        if (cResult[29] === tmp10) {
                          let tmp36;
                          if (cResult[30] === tmp11) {
                            tmp36 = cResult[31];
                          }
                          if (cResult[32] === bottomSheetRef) {
                            if (cResult[33] === (undefined !== expanded && expanded)) {
                              let tmp39;
                              if (cResult[34] === tmp36) {
                                tmp39 = cResult[35];
                              }
                              return tmp39;
                            }
                          }
                          const obj13 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: undefined !== expanded && expanded, children: tmp36 };
                          const tmp41 = React3(Sheet_BottomSheet.BottomSheet, obj13);
                          cResult[32] = bottomSheetRef;
                          cResult[33] = undefined !== expanded && expanded;
                          cResult[34] = tmp36;
                          cResult[35] = tmp41;
                          tmp39 = tmp41;
                        }
                      }
                    }
                  }
                }
                const obj14 = { scrollsToTop: false, style: tmp5.container, contentContainerStyle: tmp9, children: items };
                items = [tmp10, tmp11, tmp31, tmp33];
                const tmp38 = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj14);
                cResult[25] = tmp5.container;
                cResult[26] = tmp31;
                cResult[27] = tmp33;
                cResult[28] = tmp9;
                cResult[29] = tmp10;
                cResult[30] = tmp11;
                cResult[31] = tmp38;
                tmp36 = tmp38;
              }
            }
          }
        }
      }
    }
  }
  const obj15 = { style: tmp5.actions, children: items1 };
  items1 = [tmp17, tmp18, tmp19, tmp20, tmp15, tmp16, tmp28];
  const tmp32 = hasOwnProperty(View, obj15);
  cResult[14] = tmp5.actions;
  cResult[15] = tmp15;
  cResult[16] = tmp16;
  cResult[17] = tmp28;
  cResult[18] = tmp17;
  cResult[19] = tmp18;
  cResult[20] = tmp19;
  cResult[21] = tmp20;
  cResult[22] = tmp32;
  tmp31 = tmp32;
}) : ((arg0) => {
  let BottomSheetScrollView;
  let bottomSheetClose;
  let bottomSheetRef;
  let expanded;
  let guild;
  let items;
  let items1;
  let num;
  let obj3;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useBottomSheetRef;
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = { ref: bottomSheetRef, handleDisabled: true, showGradient: true, scrollable: true, startExpanded: expanded, children: hasOwnProperty(BottomSheetScrollView, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: bottom + num }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num = 16;
  }
  items = [React3(GuildActionSheetHeaderDefault, { guild }), React3(GuildActionSheetTabItemsDefault, { guild }), , ];
  const obj5 = { style: tmp.actions, children: items1 };
  items1 = [React3(GuildActionSheetActions.GuildUnreadAction, { guild }), React3(GuildActionSheetProgressDefault, { guild }), React3(GuildActionSheetActions.GuildActionSheetPrimaryActions, { guild }), React3(GuildActionSheetActions.GuildActionSheetGameOrganizationActions, { guild }), React3(GuildActionSheetActions.GuildActionSheetSecondaryActions, { guild }), React3(GuildActionSheetActions.GuildDeveloperOptionAction, { guild }), ];
  const obj6 = { guildId: guild.id };
  items1[6] = React3(GuildActionSheetEmojiSectionDefault, obj6);
  items[2] = hasOwnProperty(View, obj5);
  items[3] = React3(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose });
  return React3(BottomSheet, obj2);
}));
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheet.tsx");

export default memoResult;