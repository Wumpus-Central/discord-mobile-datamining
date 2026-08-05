// discord_app/modules/saved_messages/native/useForLaterCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function CoachmarkImg() {
  const obj = { source: null, style: null };
  obj[0] = require("../../../../_runtime/12476_registerAsset.js");
  obj[1] = callback2().imageContainer;
  return <Image source={null} style={null} />;
}
let closure_8 = require("DismissibleContent").DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = createCacheKey.createStyles({ imageContainer: { width: 100, height: 80 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(5931);
  const tmp4 = callback(tmpResult.useSelectedDismissibleContent(items1, undefined, true), 2);
  const first = tmp4[0];
  const importDefault = tmp6;
  const items2 = [tmp4[1], first];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = first(outer1_2[10]).intl;
    obj[0] = intl.string(first(outer1_2[10]).t.qPbFK2);
    const intl2 = first(outer1_2[10]).intl;
    obj[1] = intl2.string(first(outer1_2[10]).t.URrJq1);
    obj[3] = first === outer1_8;
    obj[4] = function onDismiss() {
      callback(outer1_6.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items2);
  tmpResult = tmp(8575);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp4[1];
};