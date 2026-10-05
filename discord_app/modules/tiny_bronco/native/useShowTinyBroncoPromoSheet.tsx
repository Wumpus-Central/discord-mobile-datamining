// discord_app/modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TinyBroncoNoticeVisibility from "../TinyBroncoNoticeVisibility.tsx";
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, visibleContent;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visibleContent) => {
      let ref;
      let obj = visibleContent(576);
      const cResult = obj.c(4);
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      dependencyMap = react.useRef(false);
      if (cResult[0] === markAsDismissed) {
        let tmp2;
        let tmp3;
        if (cResult[1] === visibleContent) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
      const fn = function o() {
        const current = ref.current || visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
        if (!current) {
          ref.current = true;
          const obj = { markAsDismissed };
          openTinyBroncoPromoSheetDefault(obj);
        }
      };
      const items = [markAsDismissed, visibleContent];
      cResult[0] = markAsDismissed;
      cResult[1] = visibleContent;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : (visibleContent) => {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const ref = react.useRef(false);
      const items = [markAsDismissed, visibleContent];
      const effect = react.useEffect(() => {
        const current = ref.current || visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
        if (!current) {
          ref.current = true;
          const obj = { markAsDismissed };
          openTinyBroncoPromoSheetDefault(obj);
        }
      }, items);
    };
let fn = () => {
  const obj = TinyBroncoNoticeVisibility;
  return obj.useShouldShowAgeNoticePromo();
};
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export const useIsTinyBroncoEligible = fn;
export const useShowTinyBroncoPromoSheet = tmp3;
