// === Module 17087: VibegrationsFeedbackSheet ===

// Module 17087 (VibegrationsFeedbackSheet)
import ToastUtils from "ToastUtils" /* 4520 */;
import vibegrationsFeedback from "vibegrationsFeedback" /* 17068 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFeedbackSheet.tsx");

export default function VibegrationsFeedbackSheet(projectId) {
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  let items = [projectId, promptCount];
  const callback = noop.useCallback((rating) => {
    const result = vibegrationsFeedback.submitVibegrationsFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      ToastUtils.presentFeedbackSent();
      const tmpResult = ToastUtils;
    }
  }, items);
  const memo = noop.useMemo(() => {
    const items = [projectId(dependencyMap[2]).vibegrationsFeedbackSection()];
    return items;
  }, []);
  let obj = { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const intl = projectId(1115).intl;
  obj.headerLabel = intl.string(promptCount(3712).W7Sdp4);
  const intl2 = projectId(1115).intl;
  obj.ratingBody = intl2.string(promptCount(3712).dXJed8);
  const intl3 = projectId(1115).intl;
  obj.categoriesHeader = intl3.string(promptCount(3712).kLHFxL);
  obj.optionsTree = memo;
  obj.trackOpen = projectId(17068).trackVibegrationsFeedbackOpened;
  obj.trackReport = callback;
  return jsx(promptCount(17074), { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
};