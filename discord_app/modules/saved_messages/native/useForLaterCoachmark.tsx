// discord_app/modules/saved_messages/native/useForLaterCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsx = fn(21).jsx;
let closure_6 = fn(4842).DismissibleContent.FOR_LATER_NOTIFICATIONS_COACHMARK;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/useForLaterCoachmark.tsx");

export default function useForLaterCoachmark(targetRef) {
  const items = [closure_6];
  const tmp = _slicedToArray(first(7563).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  first = tmp[0];
  dependencyMap = tmp3;
  const items1 = [tmp[1], first];
  const memo = noop.useMemo(() => {
    const obj = {
      title: null,
      description: null,
      position: "bottom",
      visible: null,
      onDismiss: null,
      renderImgComponent: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.qPbFK2);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.b2yxYL);
    obj.visible = first === closure_6;
    obj.onDismiss = function onDismiss() {
      dependencyMap(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_5(first(11164).BookmarksSpotIllustration, { width: 120, height: 80, accessible: false });
    };
    return obj;
  }, items1);
  let obj = first(7563);
  const coachmark = first(9933).useCoachmark(targetRef, memo);
  return tmp[1];
}
