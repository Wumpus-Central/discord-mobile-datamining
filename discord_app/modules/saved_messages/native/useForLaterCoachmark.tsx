// === Module 18464: useForLaterCoachmark ===

// Module 18464 (useForLaterCoachmark)
import util from "util" /* 1113 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_6 = fn(4847).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  const items = [closure_6];
  const tmp = _slicedToArray(first(7569).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  first = tmp[0];
  dependencyMap = tmp3;
  const items1 = [tmp[1], first];
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "bottom", visible: null, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.qPbFK2);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.b2yxYL);
    obj.visible = first === closure_6;
    obj.onDismiss = function onDismiss() {
      dependencyMap(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_5(first(11183).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
    };
    return obj;
  }, items1);
  let obj = first(7569);
  const coachmark = first(9954).useCoachmark(targetRef, memo);
  return tmp[1];
};