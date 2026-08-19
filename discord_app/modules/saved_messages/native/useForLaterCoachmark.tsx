// === Module 15658: CoachmarkImg ===

// Module 15658 (CoachmarkImg)
import registerAssetDefault from "registerAsset" /* 12732 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function CoachmarkImg() {
  const obj = { source: registerAssetDefault, style: callback2().imageContainer };
  return <Image source={registerAssetDefault} style={callback2().imageContainer} />;
}
let closure_8 = require("DismissibleContent").DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = createCacheKey.createStyles({ imageContainer: { width: 100, height: 80 } });
const result = require("obj132").fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(7366);
  const tmp4 = callback(tmpResult.useSelectedDismissibleContent(items1, undefined, true), 2);
  const first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [tmp4[1], first];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = first(dependencyMap[10]).intl;
    obj[0] = intl.string(first(dependencyMap[10]).t.qPbFK2);
    const intl2 = first(dependencyMap[10]).intl;
    obj[1] = intl2.string(first(dependencyMap[10]).t.URrJq1);
    obj[3] = first === closure_1_8;
    obj[4] = function onDismiss() {
      callback(closure_1_6.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items2);
  tmpResult = tmp(9314);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp4[1];
};