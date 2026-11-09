// discord_app/modules/user_profile/native/NitroBadgeUnhiddenCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/NitroBadgeUnhiddenCoachmark.tsx");

export default function NitroBadgeUnhiddenCoachmark(markAsDismissed) {
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = markAsDismissed(19242)(targetRef, visible);
  dependencyMap = tmp;
  items = [visible, tmp, markAsDismissed];
  const memo = noop.useMemo(() => {
    let obj = {
      title: null,
      description: null,
      visible: null,
      position: null,
      onDismiss: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.ZRLAIy);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.sEGQaJ);
    obj.visible = visible;
    obj.position = position;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants2.USER_DISMISS);
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t.hvVgAZ);
    obj.onButtonPress = function onButtonPress() {
      closure_1_1(constants2.TAKE_ACTION);
      const obj = markAsDismissed(5834);
      obj.openURL(markAsDismissed(2185).getArticleURL(constants.PROFILE_BADGES_MANAGEMENT));
    };
    return obj;
  }, items);
  const coachmark = visible(10076).useCoachmark(targetRef, memo);
  return null;
}
