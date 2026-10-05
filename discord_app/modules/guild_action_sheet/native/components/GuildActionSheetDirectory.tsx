// === Module 13782: GuildActionSheetDirectory ===

// Module 13782 (GuildActionSheetDirectory)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 13723 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 13783 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let expanded;
  let guild;
  let items;
  let items1;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(19);
  ({ guild, expanded } = arg0);
  const tmp5 = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[0] = bottom;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj3 = { guild };
    const tmp10 = React3(GuildActionSheetHeaderDefault, obj3);
    cResult[2] = guild;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guild) {
    const obj4 = { guild };
    const tmp14 = React3(GuildActionSheetActions.GuildActionSheetDirectoryActions, obj4);
    const obj5 = { guild };
    const tmp15 = React3(GuildActionSheetActions.GuildDeveloperOptionAction, obj5);
    cResult[4] = guild;
    cResult[5] = tmp14;
    cResult[6] = tmp15;
    tmp12 = tmp15;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp5.actions) {
    if (cResult[8] === tmp11) {
      let tmp16;
      if (cResult[9] === tmp12) {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp5.container) {
        if (cResult[12] === tmp7) {
          if (cResult[13] === tmp8) {
            let tmp18;
            if (cResult[14] === tmp16) {
              tmp18 = cResult[15];
            }
            if (cResult[16] === (undefined !== expanded && expanded)) {
              let tmp21;
              if (cResult[17] === tmp18) {
                tmp21 = cResult[18];
              }
              return tmp21;
            }
            const obj6 = { scrollable: true, startExpanded: undefined !== expanded && expanded, children: tmp18 };
            const tmp23 = React3(Sheet_BottomSheet.BottomSheet, obj6);
            cResult[16] = undefined !== expanded && expanded;
            cResult[17] = tmp18;
            cResult[18] = tmp23;
            tmp21 = tmp23;
          }
        }
      }
      const obj7 = { scrollsToTop: false, style: tmp5.container, contentContainerStyle: tmp7, children: items };
      items = [tmp8, tmp16];
      const tmp20 = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj7);
      cResult[11] = tmp5.container;
      cResult[12] = tmp7;
      cResult[13] = tmp8;
      cResult[14] = tmp16;
      cResult[15] = tmp20;
      tmp18 = tmp20;
    }
  }
  const obj8 = { style: tmp5.actions, children: items1 };
  items1 = [tmp11, tmp12];
  const tmp17 = hasOwnProperty(View, obj8);
  cResult[7] = tmp5.actions;
  cResult[8] = tmp11;
  cResult[9] = tmp12;
  cResult[10] = tmp17;
  tmp16 = tmp17;
}) : ((arg0) => {
  let BottomSheetScrollView;
  let expanded;
  let guild;
  let items;
  let items1;
  let obj2;
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { scrollable: true, startExpanded: expanded, children: hasOwnProperty(BottomSheetScrollView, obj2) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  items = [React3(GuildActionSheetHeaderDefault, { guild }), ];
  const obj3 = { style: tmp.actions, children: items1 };
  items1 = [React3(GuildActionSheetActions.GuildActionSheetDirectoryActions, { guild }), React3(GuildActionSheetActions.GuildDeveloperOptionAction, { guild })];
  items[1] = hasOwnProperty(View, obj3);
  return React3(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default tmp4;