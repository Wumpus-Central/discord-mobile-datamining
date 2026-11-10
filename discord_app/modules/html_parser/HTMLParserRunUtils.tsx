// === Module 9517: HTMLParserRunUtils ===

// Module 9517 (HTMLParserRunUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/html_parser/HTMLParserRunUtils.tsx");

export function mergeRun(items1, substr, bold) {
  if (null != items1[items1.length - 1]) {
    if (tmp.bold === bold.bold) {
      if (tmp.italic === bold.italic) {
        if (tmp.underline === bold.underline) {
          if (tmp.heading === bold.heading) {
            if (tmp.link === bold.link) {
              tmp.text = tmp.text + substr;
            }
          }
        }
      }
    }
  }
  const obj = {};
  const merged = Object.assign(bold);
  obj.text = substr;
  items1.push(obj);
}