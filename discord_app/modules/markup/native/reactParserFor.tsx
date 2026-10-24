// === Module 15083: reactParserFor ===

// Module 15083 (reactParserFor)
import markup_MarkupParserDefault from "markup/MarkupParser" /* 8345 */;
import Spoiler from "Spoiler" /* 12066 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/reactParserFor.tsx");

export default function reactParserFor() {
  let items = [...arguments];
  const items1 = [...items];
  closure_0 = markup_MarkupParserDefault.reactParserFor.apply(items1);
  return function parseWithSpoilers() {
    const items = [...arguments];
    const tmp = closure_0(...items);
    let tmp2 = tmp;
    if (null != tmp) {
      const obj = { children: tmp };
      tmp2 = jsx(Spoiler.SpoilerRevealProvider, { children: tmp }, items[0]);
    }
    return tmp2;
  };
};