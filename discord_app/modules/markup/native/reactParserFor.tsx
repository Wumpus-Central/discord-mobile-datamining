// === Module 5517: reactParserFor ===

// Module 5517 (reactParserFor)
import MarkupParserDefault from "MarkupParser" /* 5518 */;
import Spoiler from "Spoiler" /* 5520 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/reactParserFor.tsx");

export default function reactParserFor() {
  items = [...arguments];
  const items1 = [...items];
  closure_0 = MarkupParserDefault.reactParserFor.apply(items1);
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