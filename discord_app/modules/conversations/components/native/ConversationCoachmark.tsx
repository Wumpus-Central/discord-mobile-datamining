// === Module 12889: NewBadge ===

// Module 12889 (NewBadge)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4444 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function NewBadge() {
  let obj = { style: callback2().badge, children: null };
  obj = { variant: "text-sm/bold", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.c2GSIl);
  obj[1] = jsx(Text.Text, { variant: "text-sm/bold", color: "text-default", children: null });
  return <View variant="text-sm/bold" color="text-default">{null}</View>;
}
const TOPICAL_NAVIGATION_HEADER_COACHMARK = require("DismissibleContent").DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
createCacheKey = { badge: null, coachmarkWrapper: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: ThemesDefault.space.PX_12 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginRight: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let first;
  dependencyMap = undefined;
  ({ children, isLast } = arg0);
  const ref = React.useRef(null);
  let obj = first(6219);
  const tmp3 = callback(obj.useSelectedDismissibleContent(items), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  items = [tmp3[1], first];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = first(1236).intl;
    obj[0] = intl.string(first(1236).t.UcQjDe);
    const intl2 = first(1236).intl;
    obj[1] = intl2.string(first(1236).t.QeJIbA);
    obj[3] = first === closure_1_7;
    obj[4] = function onDismiss() {
      callback(closure_1_5.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items);
  const tmp = callback2();
  const coachmark = first(8936).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  let coachmarkWrapper;
  callback = React.useCallback(() => {
    dependencyMap(closure_1_5.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  obj = { style: coachmarkWrapper, children: null };
  obj = { ref, children: children(callback) };
  obj[1] = <View ref={ref}>{children(callback)}</View>;
  return <View ref={ref}>{children(callback)}</View>;
};