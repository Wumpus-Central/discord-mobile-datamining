// discord_app/modules/links/native/normalizeURLScheme.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/links/native/normalizeURLScheme.tsx");

export default function normalizeURLScheme(str) {
  let sum = str;
  if (!obj.test(str)) {
    let str2 = "https://";
    if ("//".startsWith("//")) {
      str2 = "https:";
    }
    sum = str2 + str;
  }
  return sum;
}
