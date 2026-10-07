// === Module 12891: UserProfileNote ===

// Module 12891 (UserProfileNote)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import openEditNoteModalDefault from "openEditNoteModal" /* 12894 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(trackUserProfileAction[3]).c(15);
  userId = userId.userId;
  const onBack = userId.onBack;
  const obj = userId(trackUserProfileAction[3]);
  trackUserProfileAction = userId(trackUserProfileAction[4]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = onBack(trackUserProfileAction[5])(userId).note;
  let tmp4 = null != note;
  if (tmp4) {
    tmp4 = "" !== note;
  }
  if (cResult[0] === onBack) {
    if (cResult[1] === trackUserProfileAction) {
      if (cResult[2] === userId) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
        const intl = tmp(tmp2[9]).intl;
        obj3.children = intl.string(tmp(tmp2[9]).t["mQKv+v"]);
        const tmp9 = jsx(tmp(tmp2[8]).Text, { variant: "text-sm/semibold", color: "text-default", children: null });
        cResult[4] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== tmp4) {
        const intl2 = tmp(tmp2[9]).intl;
        const string = intl2.string;
        let t = tmp(tmp2[9]).t;
        if (tmp4) {
          t = t["gs+qcM"];
          let stringResult = string(t);
        } else {
          stringResult = string(t["1ZZtts"]);
        }
        cResult[5] = tmp4;
        cResult[6] = stringResult;
      } else {
        if (cResult[7] !== tmp4) {
          let tmp16;
          if (!tmp4) {
            const obj4 = { IconComponent: tmp(tmp2[11]).PaperPlusIcon };
            tmp16 = jsx(tmp(tmp2[10]).TableRow.Icon, { IconComponent: tmp(tmp2[11]).PaperPlusIcon });
          }
          cResult[7] = tmp4;
          cResult[8] = tmp16;
          let tmp15 = tmp16;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp4) {
            if (cResult[11] === tmp10) {
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp15) {
                  let tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
          }
        }
        const obj5 = { label: tmp7, subLabel: tmp10, accessibilityHint: cResult[6], onPress: tmp5, trailing: tmp15, arrow: tmp4, start: true, end: true };
        const tmp20 = jsx(tmp(tmp2[10]).TableRow, { label: tmp7, subLabel: tmp10, accessibilityHint: cResult[6], onPress: tmp5, trailing: tmp15, arrow: tmp4, start: true, end: true });
        cResult[9] = tmp5;
        cResult[10] = tmp4;
        cResult[11] = tmp10;
        cResult[12] = cResult[6];
        cResult[13] = tmp15;
        cResult[14] = tmp20;
        tmp18 = tmp20;
      }
    }
  }
  const fn = function o() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openEditNoteModalDefault({
      userId,
      onBack,
      onSave() {
        return trackUserProfileAction({ action: "SET_NOTE" });
      }
    });
  };
  cResult[0] = onBack;
  cResult[1] = trackUserProfileAction;
  cResult[2] = userId;
  cResult[3] = fn;
  tmp5 = fn;
  const obj2 = userId(trackUserProfileAction[4]);
}) : ((userId) => {
  userId = userId.userId;
  const onBack = userId.onBack;
  let trackUserProfileAction;
  trackUserProfileAction = userId(trackUserProfileAction[4]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = onBack(trackUserProfileAction[5])(userId).note;
  let tmp3 = null != note;
  if (tmp3) {
    tmp3 = "" !== note;
  }
  const obj2 = { label: null, subLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: null, start: true, end: true };
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp(tmp2[9]).intl;
  obj3.children = intl.string(userId(trackUserProfileAction[9]).t["mQKv+v"]);
  obj2.label = jsx(userId(trackUserProfileAction[8]).Text, { variant: "text-sm/semibold", color: "text-default", children: null });
  let tmp5;
  if (tmp3) {
    tmp5 = note;
  }
  obj2.subLabel = tmp5;
  const intl2 = tmp(tmp2[9]).intl;
  const string = intl2.string;
  const t = tmp(tmp2[9]).t;
  if (tmp3) {
    let stringResult = string(t["gs+qcM"]);
  } else {
    stringResult = string(t["1ZZtts"]);
  }
  obj2.accessibilityHint = stringResult;
  obj2.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openEditNoteModalDefault({
      userId,
      onBack,
      onSave() {
        return trackUserProfileAction({ action: "SET_NOTE" });
      }
    });
  };
  let tmp4Result;
  if (!tmp3) {
    const obj4 = { IconComponent: tmp(tmp2[11]).PaperPlusIcon };
    tmp4Result = jsx(tmp(tmp2[10]).TableRow.Icon, { IconComponent: tmp(tmp2[11]).PaperPlusIcon });
  }
  obj2.trailing = tmp4Result;
  obj2.arrow = tmp3;
  return jsx(userId(trackUserProfileAction[10]).TableRow, { label: null, subLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: null, start: true, end: true });
});