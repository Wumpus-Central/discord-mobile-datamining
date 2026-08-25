// === Module 8799: EducationCoachmarkImg ===

// Module 8799 (EducationCoachmarkImg)
import ThemesDefault from "Themes" /* 712 */;
import SuperReactionIcon from "SuperReactionIcon" /* 7846 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function EducationCoachmarkImg() {
  let obj = { style: callback2().upsellImageContainer, children: null };
  obj = { color: ThemesDefault.colors.WHITE, size: "md" };
  obj[1] = jsx(SuperReactionIcon.SuperReactionIcon, { color: ThemesDefault.colors.WHITE, size: "md" });
  return <View color={ThemesDefault.colors.WHITE} size="md" />;
}
let closure_9 = require("DismissibleContent").DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
createCacheKey = { upsellImageContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [closure_6];
  const stateFromStores = first(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(589);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  let tmpResult = tmp(6131);
  const tmp5 = callback(tmpResult.useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  closure_1 = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = React.useMemo(() => {
    const obj = { description: null, onDismiss: null, position: "bottom", renderImgComponent: null, title: null, visible: null };
    const intl = first(closure_1_2[13]).intl;
    obj[0] = intl.string(first(closure_1_2[13]).t.nyYohm);
    obj[1] = function onDismiss() {
      callback(closure_1_7.UNKNOWN);
    };
    obj[3] = function renderImgComponent() {
      return callback2(closure_11, {});
    };
    const intl2 = first(closure_1_2[13]).intl;
    obj[4] = intl2.string(first(closure_1_2[13]).t.ORK94p);
    obj[5] = first === closure_1_9;
    return obj;
  }, items3);
  tmpResult = tmp(8800);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp5[1];
};