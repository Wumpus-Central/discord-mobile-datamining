// === Module 13986: ScheduledMessageDraftCoachmark ===

// Module 13986 (ScheduledMessageDraftCoachmark)
import util from "util" /* 1113 */;
import useCoachmark from "useCoachmark" /* 9954 */;
import noop from "module_19" /* 19 */;

require = fn;
function AttachedCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
}
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default function ScheduledMessageDraftCoachmark(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  const items = [onDismiss];
  ({ buttonRef, isVisible } = onDismiss);
  const memo = noop.useMemo(() => {
    const obj = { title: null, description: null, position: "top", offsetY: 4, visible: true, onDismiss: null, renderImgComponent: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.ZT58S4);
    const intl2 = util.intl;
    obj.description = intl2.format(util.t.Juk17F, {});
    obj.onDismiss = function onDismiss() {
      return onDismiss(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_4(onDismiss(closure_1_1[4]).ScheduleMessageSpotIllustration, { width: 120, height: 80, accessible: false });
    };
    return obj;
  }, items);
  let tmp2 = null;
  if (isVisible) {
    let obj = { buttonRef };
    const merged = Object.assign(memo);
    tmp2 = <AttachedCoachmark buttonRef={buttonRef} />;
  }
  return tmp2;
};