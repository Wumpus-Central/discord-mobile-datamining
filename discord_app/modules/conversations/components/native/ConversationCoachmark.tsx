// discord_app/modules/conversations/components/native/ConversationCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function NewBadge() {
  let obj = { style: createCacheKey().badge, children: null };
  obj = { variant: "text-sm/bold", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.c2GSIl);
  obj[1] = jsx(require(4189) /* Text */.Text, { variant: "text-sm/bold", color: "text-default", children: null });
  return <View variant="text-sm/bold" color="text-default">{null}</View>;
}
const TOPICAL_NAVIGATION_HEADER_COACHMARK = require("DismissibleContent").DismissibleContent.TOPICAL_NAVIGATION_HEADER_COACHMARK;
let items = [TOPICAL_NAVIGATION_HEADER_COACHMARK];
createCacheKey = { badge: null, coachmarkWrapper: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, paddingVertical: 2, paddingHorizontal: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginRight: require("Themes").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/conversations/components/native/ConversationCoachmark.tsx");

export const ConversationCoachmark = function ConversationCoachmark(arg0) {
  let children;
  let isLast;
  let first;
  let dependencyMap;
  ({ children, isLast } = arg0);
  const ref = React.useRef(null);
  let obj = first(8451);
  const tmp3 = callback(obj.useSelectedDismissibleContent(items), 2);
  first = tmp3[0];
  dependencyMap = tmp5;
  items = [tmp3[1], first];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = first(_undefined[9]).intl;
    obj[0] = intl.string(first(_undefined[9]).t.UcQjDe);
    const intl2 = first(_undefined[9]).intl;
    obj[1] = intl2.string(first(_undefined[9]).t.QeJIbA);
    obj[3] = first === outer1_7;
    obj[4] = function onDismiss() {
      callback(outer1_5.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items);
  const tmp = createCacheKey();
  const coachmark = first(8440).useCoachmark(ref, memo);
  const items1 = [tmp3[1]];
  let coachmarkWrapper;
  callback = React.useCallback(() => {
    _undefined(outer1_5.USER_DISMISS);
  }, items1);
  if (!isLast) {
    coachmarkWrapper = tmp.coachmarkWrapper;
  }
  obj = { style: coachmarkWrapper, children: null };
  obj = { ref, children: children(callback) };
  obj[1] = <View ref={ref}>{children(callback)}</View>;
  return <View ref={ref}>{children(callback)}</View>;
};