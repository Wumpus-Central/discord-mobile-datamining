// === Module 16652: ConjureFeedbackSheet ===

// Module 16652 (ConjureFeedbackSheet)
import ToastUtils from "ToastUtils" /* 4567 */;
import conjureFeedback from "conjureFeedback" /* 16617 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/feedback/native/ConjureFeedbackSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(576).c(9);
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  if (cResult[0] === projectId) {
    if (cResult[1] === promptCount) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [tmp(16617).conjureFeedbackSection()];
      cResult[3] = items;
      let tmp6 = items;
      let tmpResult = tmp(16617);
    } else {
      tmp6 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(promptCount(3723).QnwyW8);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(promptCount(3723)["+BS1Qc"]);
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(promptCount(3723).QhB3in);
      cResult[4] = stringResult;
      cResult[5] = stringResult1;
      cResult[6] = stringResult2;
      let tmp9 = stringResult2;
      let tmp8 = stringResult1;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[4];
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp4) {
      const obj2 = { headerLabel: tmp7, ratingBody: tmp8, categoriesHeader: tmp9, optionsTree: tmp6, trackOpen: tmp(16617).trackConjureFeedbackOpened, trackReport: tmp4 };
      const tmp18 = jsx(promptCount(16639), { headerLabel: tmp7, ratingBody: tmp8, categoriesHeader: tmp9, optionsTree: tmp6, trackOpen: tmp(16617).trackConjureFeedbackOpened, trackReport: tmp4 });
      cResult[7] = tmp4;
      cResult[8] = tmp18;
      let tmp14 = tmp18;
      const tmp17 = promptCount(16639);
    } else {
      tmp14 = cResult[8];
    }
    return tmp14;
  }
  const fn = function c(rating) {
    const result = conjureFeedback.submitConjureFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      ToastUtils.presentFeedbackSent();
      const tmpResult = ToastUtils;
    }
  };
  cResult[0] = projectId;
  cResult[1] = promptCount;
  cResult[2] = fn;
  tmp4 = fn;
  let obj = projectId(576);
}) : ((projectId) => {
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  let items = [projectId, promptCount];
  const callback = noop.useCallback((rating) => {
    const result = conjureFeedback.submitConjureFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      ToastUtils.presentFeedbackSent();
      const tmpResult = ToastUtils;
    }
  }, items);
  const memo = noop.useMemo(() => {
    const items = [projectId(dependencyMap[4]).conjureFeedbackSection()];
    return items;
  }, []);
  let obj = { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null };
  const intl = projectId(1126).intl;
  obj.headerLabel = intl.string(promptCount(3723).QnwyW8);
  const intl2 = projectId(1126).intl;
  obj.ratingBody = intl2.string(promptCount(3723)["+BS1Qc"]);
  const intl3 = projectId(1126).intl;
  obj.categoriesHeader = intl3.string(promptCount(3723).QhB3in);
  obj.optionsTree = memo;
  obj.trackOpen = projectId(16617).trackConjureFeedbackOpened;
  obj.trackReport = callback;
  return jsx(promptCount(16639), { headerLabel: null, ratingBody: null, categoriesHeader: null, optionsTree: null, trackOpen: null, trackReport: null });
});