// discord_app/lib/zipWithNext.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/zipWithNext.tsx");

export default function zipWithNext(value, fn) {
  let length;
  if (value.length < 2) {
    return [];
  } else {
    const items = [];
    let first = value[0];
    let num2 = 1;
    if (1 < value.length) {
      do {
        let tmp2 = value[num2];
        let arr = items.push(fn(first, tmp2));
        num2 = num2 + 1;
        first = tmp2;
        length = value.length;
      } while (num2 < length);
    }
    return items;
  }
}
