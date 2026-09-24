// discord_app/modules/vibegrations/native/VibegrationsFeedbackSheet.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import vibegrationsFeedback from "../lib/vibegrationsFeedback.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFeedbackSheet.tsx");

export default function VibegrationsFeedbackSheet(projectId) {
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  let items = [projectId, promptCount];
  const callback = noop.useCallback((rating) => {
    const result = vibegrationsFeedback.submitVibegrationsFeedback(
      projectId,
      promptCount,
      rating,
      "VibegrationsFeedbackSheet",
    );
    if (null != rating.rating) {
      ToastUtils.presentFeedbackSent();
      const tmpResult = ToastUtils;
    }
  }, items);
  const memo = noop.useMemo(() => {
    const items = [projectId(dependencyMap[2]).vibegrationsFeedbackSection()];
    return items;
  }, []);
  let obj = {
    headerLabel: null,
    ratingBody: null,
    categoriesHeader: null,
    optionsTree: null,
    trackOpen: null,
    trackReport: null,
  };
  const intl = projectId(1115).intl;
  obj.headerLabel = intl.string(promptCount(3714).W7Sdp4);
  const intl2 = projectId(1115).intl;
  obj.ratingBody = intl2.string(promptCount(3714).dXJed8);
  const intl3 = projectId(1115).intl;
  obj.categoriesHeader = intl3.string(promptCount(3714).kLHFxL);
  obj.optionsTree = memo;
  obj.trackOpen = projectId(17095).trackVibegrationsFeedbackOpened;
  obj.trackReport = callback;
  return jsx(promptCount(17101), {
    headerLabel: null,
    ratingBody: null,
    categoriesHeader: null,
    optionsTree: null,
    trackOpen: null,
    trackReport: null,
  });
}
