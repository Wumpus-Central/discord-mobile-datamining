// discord_app/modules/saved_messages/native/useForLaterCoachmark.tsx
import registerAssetDefault from "../../../../_runtime/12953_registerAsset.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { Image } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function CoachmarkImg() {
  const obj = { source: registerAssetDefault, style: callback2().imageContainer };
  return <Image source={registerAssetDefault} style={callback2().imageContainer} />;
}
let closure_8 = require("DismissibleContent").DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
let closure_9 = createCacheKey.createStyles({ imageContainer: { width: 100, height: 80 } });
const result = require("set").fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(6251);
  const tmp4 = callback(tmpResult.useSelectedDismissibleContent(items1, undefined, true), 2);
  const first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [tmp4[1], first];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = first(closure_1_2[10]).intl;
    obj[0] = intl.string(first(closure_1_2[10]).t.qPbFK2);
    const intl2 = first(closure_1_2[10]).intl;
    obj[1] = intl2.string(first(closure_1_2[10]).t.URrJq1);
    obj[3] = first === closure_1_8;
    obj[4] = function onDismiss() {
      callback(closure_1_6.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_10, {});
    };
    return obj;
  }, items2);
  tmpResult = tmp(8973);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp4[1];
};