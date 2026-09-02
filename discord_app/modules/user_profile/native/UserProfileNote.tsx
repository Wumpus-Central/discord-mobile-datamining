// === Module 12706: UserProfileNote ===

// Module 12706 (UserProfileNote)
import noopAll from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ title: { justifyContent: "space-between" } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

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
      let obj = onBack(trackUserProfileAction[9]);
      obj.hideActionSheet();
      obj = {
        userId,
        onBack,
        onSave() {
          return callback({ action: "SET_NOTE" });
        }
      };
      onBack(trackUserProfileAction[10])(obj);
    },
    activeOpacity: 0.8,
    children: null
  };
  obj = { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null };
  const tmp = callback();
  const tmp4 = onBack;
  const tmp8 = note;
  const intl2 = tmp2(tmp3[8]).intl;
  obj[1] = intl2.string(userId(trackUserProfileAction[8]).t["mQKv+v"]);
  const items = [tmp.title, ];
  obj1 = !tmp6Result;
  if (!tmp6Result) {
    obj1 = { marginBottom: 0 };
  }
  items[1] = obj1;
  obj[2] = items;
  obj[3] = <PaperPlusIcon size="xs" color="interactive-text-default" />;
  if (tmp6Result) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    obj2[2] = note;
    tmp6Result = tmp6(tmp2(tmp3[12]).Text, obj2);
  }
  obj[4] = tmp6Result;
  obj[5] = jsx(onBack(trackUserProfileAction[11]), { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null });
  return jsx(userId(trackUserProfileAction[7]).PressableOpacity, { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null });
};