// === Module 16402: useForLaterCoachmark ===

// Module 16402 (useForLaterCoachmark)
import util from "util" /* 1114 */;
import _modDef13292 from "module_13292" /* 13292 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function CoachmarkImg() {
  const obj = { source: _modDef13292, style: closure_9().imageContainer };
  return <Image source={_modDef13292} style={closure_9().imageContainer} />;
}
const Image = fn(17).Image;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_8 = fn(1943).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ imageContainer: { width: 100, height: 80 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  if (obj.useIsForLaterExperimentOn("forLaterCoachmark")) {
    const items = [closure_8];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(7388);
  const tmp4 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items1, undefined, true), 2);
  const first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [tmp4[1], first];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.qPbFK2);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.URrJq1);
    obj.visible = first === closure_8;
    obj.onDismiss = function onDismiss() {
      closure_1_1(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_7(closure_1_10, {});
    };
    return obj;
  }, items2);
  tmpResult = tmp(11127);
  const coachmark = tmpResult.useCoachmark(targetRef, memo);
  return tmp4[1];
};