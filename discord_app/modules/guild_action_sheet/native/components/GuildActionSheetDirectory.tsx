// === Module 14177: GuildActionSheetDirectory ===

// Module 14177 (GuildActionSheetDirectory)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import BottomSheetModal from "BottomSheetModal" /* 6306 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import GuildActionSheetActions from "GuildActionSheetActions" /* 14115 */;
import GuildActionSheetHeaderDefault from "GuildActionSheetHeader" /* 14178 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, actions: { paddingHorizontal: 16, gap: 24 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetDirectory.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildActionSheetDirectory(arg0) {
  const cResult = c.c(19);
  ({ guild, expanded } = arg0);
  const tmp5 = closure_6();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[0] = bottom;
    cResult[1] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const obj3 = { guild };
    const tmp10 = React4(GuildActionSheetHeaderDefault, obj3);
    cResult[2] = guild;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guild) {
    const obj4 = { guild };
    const tmp14 = React4(GuildActionSheetActions.GuildActionSheetDirectoryActions, obj4);
    const obj5 = { guild };
    const tmp15 = React4(GuildActionSheetActions.GuildDeveloperOptionAction, obj5);
    cResult[4] = guild;
    cResult[5] = tmp14;
    cResult[6] = tmp15;
    let tmp12 = tmp15;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp5.actions) {
    if (cResult[8] === tmp11) {
      if (cResult[9] === tmp12) {
        let tmp16 = cResult[10];
      }
      if (cResult[11] === tmp5.container) {
        if (cResult[12] === tmp7) {
          if (cResult[13] === tmp8) {
            if (cResult[14] === tmp16) {
              let tmp18 = cResult[15];
            }
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp18) {
                let tmp21 = cResult[18];
              }
              return tmp21;
            }
            const obj6 = { scrollable: true, startExpanded: tmp4, children: tmp18 };
            const tmp23 = React4(Sheet_BottomSheet.BottomSheet, obj6);
            cResult[16] = tmp4;
            cResult[17] = tmp18;
            cResult[18] = tmp23;
            tmp21 = tmp23;
          }
        }
      }
      const obj7 = { scrollsToTop: false, style: tmp5.container, contentContainerStyle: tmp7, children: null };
      const items = [tmp8, tmp16];
      obj7.children = items;
      const tmp20 = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj7);
      cResult[11] = tmp5.container;
      cResult[12] = tmp7;
      cResult[13] = tmp8;
      cResult[14] = tmp16;
      cResult[15] = tmp20;
      tmp18 = tmp20;
    }
  }
  const obj8 = { style: tmp5.actions, children: null };
  const items1 = [tmp11, tmp12];
  obj8.children = items1;
  const tmp17 = hasOwnProperty(View, obj8);
  cResult[7] = tmp5.actions;
  cResult[8] = tmp11;
  cResult[9] = tmp12;
  cResult[10] = tmp17;
  tmp16 = tmp17;
}) : (function GuildActionSheetDirectory(arg0) {
  ({ guild, expanded } = arg0);
  if (expanded === undefined) {
    expanded = false;
  }
  const tmp = closure_6();
  const obj = { scrollable: true, startExpanded: expanded, children: null };
  const obj2 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [React4(GuildActionSheetHeaderDefault, { guild }), ];
  const obj3 = { style: tmp.actions, children: null };
  const items1 = [React4(GuildActionSheetActions.GuildActionSheetDirectoryActions, { guild }), React4(GuildActionSheetActions.GuildDeveloperOptionAction, { guild })];
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  obj2.children = items;
  obj.children = hasOwnProperty(BottomSheetModal.BottomSheetScrollView, obj2);
  return React4(Sheet_BottomSheet.BottomSheet, obj);
});