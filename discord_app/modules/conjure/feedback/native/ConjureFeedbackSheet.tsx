// discord_app/modules/conjure/feedback/native/ConjureFeedbackSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import conjureFeedback from "../conjureFeedback.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let projectId;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let obj = projectId(576);
      const cResult = obj.c(9);
      projectId = projectId.projectId;
      const promptCount = projectId.promptCount;
      if (cResult[0] === projectId) {
        let tmp4;
        let tmp6;
        let tmp9;
        let tmp8;
        let tmp7;
        let tmp14;
        if (cResult[1] === promptCount) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let tmpResult = tmp(16617);
          const items = [tmpResult.conjureFeedbackSection()];
          cResult[3] = items;
          tmp6 = items;
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
          tmp9 = stringResult2;
          tmp8 = stringResult1;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[4];
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp4) {
          promptCount(16639);
          const tmp18 = (
            <tmp17
              headerLabel={tmp7}
              ratingBody={tmp8}
              categoriesHeader={tmp9}
              optionsTree={tmp6}
              trackOpen={projectId(16617).trackConjureFeedbackOpened}
              trackReport={tmp4}
            />
          );
          cResult[7] = tmp4;
          cResult[8] = tmp18;
          tmp14 = tmp18;
        } else {
          tmp14 = cResult[8];
        }
        return tmp14;
      }
      const fn = function c(rating) {
        const obj = conjureFeedback;
        const result = obj.submitConjureFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
        if (null != rating.rating) {
          const tmpResult = ToastUtils;
          tmpResult.presentFeedbackSent();
        }
      };
      cResult[0] = projectId;
      cResult[1] = promptCount;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const promptCount = projectId.promptCount;
      let items = [projectId, promptCount];
      const callback = react.useCallback((rating) => {
        const obj = conjureFeedback;
        const result = obj.submitConjureFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
        if (null != rating.rating) {
          const tmpResult = ToastUtils;
          tmpResult.presentFeedbackSent();
        }
      }, items);
      const memo = react.useMemo(() => {
        const items = [];
        const obj = projectId(dependencyMap[4]);
        items[0] = obj.conjureFeedbackSection();
        return items;
      }, []);
      promptCount(16639);
      const intl = projectId(1126).intl;
      const intl2 = projectId(1126).intl;
      const intl3 = projectId(1126).intl;
      return (
        <tmp3
          headerLabel={intl.string(promptCount(3723).QnwyW8)}
          ratingBody={intl2.string(promptCount(3723)["+BS1Qc"])}
          categoriesHeader={intl3.string(promptCount(3723).QhB3in)}
          optionsTree={memo}
          trackOpen={projectId(16617).trackConjureFeedbackOpened}
          trackReport={callback}
        />
      );
    };
let result = size.fileFinishedImporting("modules/conjure/feedback/native/ConjureFeedbackSheet.tsx");

export default tmp2;
