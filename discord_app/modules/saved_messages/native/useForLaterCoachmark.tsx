// === Module 16043: useForLaterCoachmark ===

// Module 16043 (useForLaterCoachmark)
import util from "util" /* 1115 */;
import _modDef12871 from "module_12871" /* 12871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function CoachmarkImg() {
  const obj = { source: _modDef12871, style: closure_9().imageContainer };
  return <Image source={_modDef12871} style={closure_9().imageContainer} />;
}
const Image = fn(17).Image;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_8 = fn(2029).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const createStyles = fn(4836);
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
  obj = first(7275);
  const tmp4 = _slicedToArray(first(6806).useSelectedDismissibleContent(items1, undefined, true), 2);
  first = tmp4[0];
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
  const tmpResult = first(6806);
  const coachmark = first(10589).useCoachmark(targetRef, memo);
  return tmp4[1];
};