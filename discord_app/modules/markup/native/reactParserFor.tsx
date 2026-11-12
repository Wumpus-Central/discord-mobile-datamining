// === Module 16159: reactParserFor ===

// Module 16159 (reactParserFor)
import Spoiler from "Spoiler" /* 5996 */;
import markup_MarkupParserDefault from "markup/MarkupParser" /* 9150 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/reactParserFor.tsx");

export default function reactParserFor() {
  items = [...arguments];
  const items1 = [...items];
  closure_0 = markup_MarkupParserDefault.reactParserFor.apply(items1);
  return function parseWithSpoilers() {
    items = [...arguments];
    const tmp = closure_0(...items);
    let tmp2 = tmp;
    if (null != tmp) {
      const obj = { children: tmp };
      tmp2 = jsx(Spoiler.SpoilerRevealProvider, { children: tmp }, items[0]);
    }
    return tmp2;
  };
};