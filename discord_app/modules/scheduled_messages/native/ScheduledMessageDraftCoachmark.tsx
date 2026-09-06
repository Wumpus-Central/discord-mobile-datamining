// discord_app/modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function AttachedCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
}
const Image = fn(17).Image;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ image: { width: 100, height: 80 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default function ScheduledMessageDraftCoachmark(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  ({ buttonRef, isVisible } = onDismiss);
  const tmp = closure_7();
  closure_1 = tmp;
  const items = [onDismiss, tmp.image];
  const memo = noop.useMemo(() => {
    const obj = {
      title: null,
      description: null,
      position: "top",
      offsetY: 4,
      visible: true,
      onDismiss: null,
      renderImgComponent: null,
    };
    const intl = util.intl;
    obj.title = intl.string(util.t.Pu7sCU);
    const intl2 = util.intl;
    obj.description = intl2.format(util.t.Juk17F, {});
    obj.onDismiss = function onDismiss() {
      return onDismiss(constants.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return <Image source={closure_1(dependencyMap[6])} style={closure_1_1.image} />;
    };
    return obj;
  }, items);
  let tmp3 = null;
  if (isVisible) {
    let obj = { buttonRef };
    const merged = Object.assign(memo);
    tmp3 = <AttachedCoachmark buttonRef={buttonRef} />;
  }
  return tmp3;
}
