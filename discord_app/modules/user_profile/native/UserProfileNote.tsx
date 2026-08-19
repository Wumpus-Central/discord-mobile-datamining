// === Module 12158: UserProfileNote ===

// Module 12158 (UserProfileNote)
import noopAll from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ title: { justifyContent: "space-between" } });
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

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
  obj = { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null };
  const tmp = callback();
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
    tmp6Result = jsx(tmp2(tmp3[12]).Text, { variant: "text-md/normal", color: "text-default", children: null });
  }
  obj[4] = tmp6Result;
  obj[5] = jsx(onBack(trackUserProfileAction[11]), { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null });
  return jsx(userId(trackUserProfileAction[7]).PressableOpacity, { style: style.style, title: null, titleStyle: null, titleIcon: null, children: null });
};