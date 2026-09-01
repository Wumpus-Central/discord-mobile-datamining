// === Module 11996: AttachedCoachmark ===

// Module 11996 (AttachedCoachmark)
import useCoachmark from "useCoachmark" /* 8973 */;
import closure_3 from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function AttachedCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.create(null));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
}
let closure_7 = createCacheKey.createStyles({ image: { width: 100, height: 80 } });
const result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default function ScheduledMessageDraftCoachmark(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  closure_1 = undefined;
  ({ buttonRef, isVisible } = onDismiss);
  const tmp = callback();
  closure_1 = tmp;
  const items = [onDismiss, tmp.image];
  const memo = React.useMemo(() => {
    const obj = { title: null, description: null, position: "top", offsetY: 4, visible: true, onDismiss: null, renderImgComponent: null };
    const intl = onDismiss(closure_1_2[5]).intl;
    obj[0] = intl.string(onDismiss(closure_1_2[5]).t.Pu7sCU);
    const intl2 = onDismiss(closure_1_2[5]).intl;
    obj[1] = intl2.format(onDismiss(closure_1_2[5]).t.Juk17F, {});
    obj[5] = function onDismiss() {
      return callback(closure_1_5.USER_DISMISS);
    };
    obj[6] = function renderImgComponent() {
      return closure_1_6(closure_1_4, { source: closure_1_1(closure_1_2[6]), style: image.image });
    };
    return obj;
  }, items);
  let tmp3 = null;
  if (isVisible) {
    let obj = { buttonRef: null };
    obj[0] = buttonRef;
    const merged = Object.assign(memo);
    tmp3 = <AttachedCoachmark buttonRef={null} />;
  }
  return tmp3;
};