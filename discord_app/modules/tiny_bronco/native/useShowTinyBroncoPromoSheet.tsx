// discord_app/modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import TinyBroncoNoticeVisibility from "../TinyBroncoNoticeVisibility.tsx";
import openTinyBroncoPromoSheetDefault from "openTinyBroncoPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = () => TinyBroncoNoticeVisibility.useShouldShowAgeNoticePromo();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/tiny_bronco/native/useShowTinyBroncoPromoSheet.tsx");

export const useIsTinyBroncoEligible = fn;
export const useShowTinyBroncoPromoSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? (visibleContent) => {
      const cResult = visibleContent(576).c(4);
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      dependencyMap = noop.useRef(false);
      if (cResult[0] === markAsDismissed) {
        if (cResult[1] === visibleContent) {
          let tmp2 = cResult[2];
          let tmp3 = cResult[3];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
      const fn = function o() {
        let current = ref.current;
        if (!current) {
          current = visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
        }
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
      let obj = visibleContent(576);
    }
  : (visibleContent) => {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      noop.useRef(false);
      const items = [markAsDismissed, visibleContent];
      const effect = noop.useEffect(() => {
        let current = ref.current;
        if (!current) {
          current = visibleContent !== dismissible_content.DismissibleContent.TINY_BRONCO;
        }
        if (!current) {
          ref.current = true;
          const obj = { markAsDismissed };
          openTinyBroncoPromoSheetDefault(obj);
        }
      }, items);
    };
