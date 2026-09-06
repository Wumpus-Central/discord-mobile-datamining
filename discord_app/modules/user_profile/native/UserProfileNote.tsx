// === Module 13051: UserProfileNote ===

// Module 13051 (UserProfileNote)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openEditNoteModalDefault from "openEditNoteModal" /* 13056 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ title: { justifyContent: "space-between" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default function UserProfileNote(style) {
  const userId = style.userId;
  const onBack = style.onBack;
  let trackUserProfileAction;
  let obj = userId(trackUserProfileAction[3]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = onBack(trackUserProfileAction[4])(userId).note;
  let tmp6Result = null != note;
  if (tmp6Result) {
    tmp6Result = "" !== note;
  }
  if (tmp6Result) {
    let PaperPlusIcon = tmp2(tmp3[5]).PaperIcon;
  } else {
    PaperPlusIcon = tmp2(tmp3[6]).PaperPlusIcon;
  }
  const intl = tmp2(tmp3[8]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[8]).t;
  if (tmp6Result) {
    let stringResult = string(t["gs+qcM"]);
  } else {
    stringResult = string(t["1ZZtts"]);
  }
  obj = {
    accessibilityRole: "button",
    accessibilityHint: stringResult,
    accessibilityLabel: note,
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = {
        userId,
        onBack,
        onSave() {
          return trackUserProfileAction({ action: "SET_NOTE" });
        }
      };
      openEditNoteModalDefault(obj);
    },
    activeOpacity: 0.8,
    children: null
  };
  obj = { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null };
  const tmp = closure_4();
  const intl2 = tmp2(tmp3[8]).intl;
  obj.title = intl2.string(userId(trackUserProfileAction[8]).t["mQKv+v"]);
  const items = [tmp.title, ];
  let obj1 = !tmp6Result;
  if (!tmp6Result) {
    obj1 = { marginBottom: 0 };
  }
  items[1] = obj1;
  obj.titleStyle = items;
  obj.titleIcon = <PaperPlusIcon size="xs" color="interactive-text-default" />;
  if (tmp6Result) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: note };
    tmp6Result = jsx(tmp2(tmp3[12]).Text, { variant: "text-md/normal", color: "text-default", children: note });
  }
  obj.children = tmp6Result;
  obj.children = jsx(onBack(trackUserProfileAction[11]), { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null });
  return jsx(userId(trackUserProfileAction[7]).PressableOpacity, { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null });
};