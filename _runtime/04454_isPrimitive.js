
export default function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    let tmp2 = typeof arg0 === "disabledUntil";
    if (typeof arg0 !== "fileFinishedImporting") {
      tmp2 = typeof arg0 === "window";
    }
    tmp = tmp2;
  }
  return tmp;
};