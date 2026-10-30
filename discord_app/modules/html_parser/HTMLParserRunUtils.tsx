// discord_app/modules/html_parser/HTMLParserRunUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/html_parser/HTMLParserRunUtils.tsx");

export function mergeRun(items1, text, bold) {
  if (null != items1[items1.length - 1]) {
    if (tmp.bold === bold.bold) {
      if (tmp.italic === bold.italic) {
        if (tmp.underline === bold.underline) {
          if (tmp.heading === bold.heading) {
            if (tmp.link === bold.link) {
              tmp.text = tmp.text + text;
            }
          }
        }
      }
    }
  }
  const obj = {};
  const merged = Object.assign(bold);
  obj.text = text;
  items1.push(obj);
}
