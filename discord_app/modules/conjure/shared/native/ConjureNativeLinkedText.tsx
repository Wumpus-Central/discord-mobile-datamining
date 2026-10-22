// discord_app/modules/conjure/shared/native/ConjureNativeLinkedText.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import conjureMarkup from "../../chat/native/conjureMarkup.tsx";
import conjureLinkifyBareDomains from "../conjureLinkifyBareDomains.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeLinkedText(arg0) {
      const cResult = c.c(6);
      ({ text, variant, color } = arg0);
      if (cResult[0] !== text) {
        const tmpResult = conjureMarkup;
        const parseConjureMarkupResult = tmpResult.parseConjureMarkup(
          conjureLinkifyBareDomains.linkifyBareDomains(text),
          true,
          { allowLinks: true },
        );
        cResult[0] = text;
        cResult[1] = parseConjureMarkupResult;
        let tmp4 = parseConjureMarkupResult;
        const tmpResult2 = conjureLinkifyBareDomains;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === color) {
        if (cResult[3] === tmp4) {
          if (cResult[4] === variant) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
      const tmp7 = jsx(Text_Text.Text, { variant, color, children: tmp4 });
      cResult[2] = color;
      cResult[3] = tmp4;
      cResult[4] = variant;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : function ConjureNativeLinkedText(arg0) {
      ({ text, variant, color } = arg0);
      const obj = { variant, color, children: null };
      const obj2 = conjureMarkup;
      obj.children = obj2.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(text), true, {
        allowLinks: true,
      });
      return jsx(Text_Text.Text, { variant, color, children: null });
    };
