// discord_app/modules/reactions/native/useBurstToggleCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { SuperReactionIcon } from "../../../design/components/Icon/native/redesign/generated/SuperReactionIcon.tsx";

const require = arg1;
function EducationCoachmarkImg() {
  let obj = { style: createCacheKey().upsellImageContainer, children: null };
  obj = { color: null, size: "md" };
  obj[0] = Themes.colors.WHITE;
  obj[1] = jsx(SuperReactionIcon.SuperReactionIcon, { color: null, size: "md" });
  return <View color={null} size="md" />;
}
let closure_9 = require("DismissibleContent").DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE;
createCacheKey = { upsellImageContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/reactions/native/useBurstToggleCoachmark.tsx");

export default function useBurstToggleCoachmark(targetRef) {
  const items = [mergeGuildAvatar];
  const stateFromStores = first(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = first(589);
  if (obj2.isPremium(stateFromStores)) {
    const items1 = [closure_9];
    let items2 = items1;
  } else {
    items2 = [];
  }
  let tmpResult = tmp(5962);
  const tmp5 = callback(tmpResult.useSelectedDismissibleContent(items2), 2);
  first = tmp5[0];
  const importDefault = tmp7;
  const items3 = [first, tmp5[1]];
  const memo = React.useMemo(() => {
    const obj = { description: null, onDismiss: null, position: "bottom", renderImgComponent: null, title: null, visible: null };
    const intl = first(outer1_2[13]).intl;
    obj[0] = intl.string(first(outer1_2[13]).t.nyYohm);
    obj[1] = function onDismiss() {
      callback(outer1_7.UNKNOWN);
    };
    obj[3] = function renderImgComponent() {
      return callback2(closure_11, {});
    };
    const intl2 = first(outer1_2[13]).intl;
    obj[4] = intl2.string(first(outer1_2[13]).t.ORK94p);
    obj[5] = first === outer1_9;
    return obj;
  }, items3);
  tmpResult = tmp(8593);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp5[1];
};