// discord_app/modules/user_profile/native/UserProfileNote.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openEditNoteModalDefault from "../utils/native/openEditNoteModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_4 = createStyles.createStyles({ title: { justifyContent: "space-between" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default function UserProfileNote(style) {
  const userId = style.userId;
  const onBack = style.onBack;
  let trackUserProfileAction;
  const tmp = closure_4();
  trackUserProfileAction = userId(trackUserProfileAction[3]).useUserProfileAnalyticsContext().trackUserProfileAction;
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
  const obj2 = {
    accessibilityRole: "button",
    accessibilityHint: stringResult,
    accessibilityLabel: note,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      openEditNoteModalDefault({
        userId,
        onBack,
        onSave() {
          return trackUserProfileAction({ action: "SET_NOTE" });
        },
      });
    },
    activeOpacity: 0.8,
    children: null,
  };
  const obj3 = { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null };
  const obj = userId(trackUserProfileAction[3]);
  const intl2 = tmp2(tmp3[8]).intl;
  obj3.title = intl2.string(userId(trackUserProfileAction[8]).t["mQKv+v"]);
  const items = [tmp.title];
  let obj4 = !tmp6Result;
  if (!tmp6Result) {
    obj4 = { marginBottom: 0 };
  }
  items[1] = obj4;
  obj3.titleStyle = items;
  obj3.titleIcon = <PaperPlusIcon size="xs" color="interactive-text-default" />;
  if (tmp6Result) {
    const obj5 = { variant: "text-md/normal", color: "text-default", children: note };
    tmp6Result = jsx(tmp2(tmp3[12]).Text, { variant: "text-md/normal", color: "text-default", children: note });
  }
  obj3.children = tmp6Result;
  obj2.children = jsx(onBack(trackUserProfileAction[11]), {
    style: style.style,
    title: null,
    titleStyle: null,
    titleIcon: null,
    children: null,
  });
  return jsx(userId(trackUserProfileAction[7]).PressableOpacity, {
    accessibilityRole: "button",
    accessibilityHint: stringResult,
    accessibilityLabel: note,
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      openEditNoteModalDefault({
        userId,
        onBack,
        onSave() {
          return trackUserProfileAction({ action: "SET_NOTE" });
        },
      });
    },
    activeOpacity: 0.8,
    children: null,
  });
}
