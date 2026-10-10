// === Module 10105: GiftingBadgeIcon ===

// Module 10105 (GiftingBadgeIcon)
import c from "c" /* 576 */;
import FastImageDefault from "FastImage" /* 6156 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeIcon(arg0) {
  const cResult = c.c(10);
  ({ icon, size, style } = arg0);
  if (cResult[0] !== icon) {
    const obj2 = { uri: icon };
    cResult[0] = icon;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== size) {
    const size1 = { width: size, height: size };
    cResult[2] = size;
    cResult[3] = size1;
    let tmp4 = size1;
  } else {
    tmp4 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp4) {
      let tmp5 = cResult[6];
    }
    if (cResult[7] === tmp3) {
      if (cResult[8] === tmp5) {
        let tmp6 = cResult[9];
      }
      return tmp6;
    }
    const obj3 = { source: tmp3, resizeMode: "contain", style: tmp5 };
    const tmp9 = jsx(FastImageDefault, { source: tmp3, resizeMode: "contain", style: tmp5 });
    cResult[7] = tmp3;
    cResult[8] = tmp5;
    cResult[9] = tmp9;
    tmp6 = tmp9;
  }
  const items = [tmp4, style];
  cResult[4] = style;
  cResult[5] = tmp4;
  cResult[6] = items;
  tmp5 = items;
}) : (function GiftingBadgeIcon(size) {
  size = size.size;
  ({ icon, style } = size);
  const obj = { source: { uri: icon }, resizeMode: "contain", style: null };
  const items = [{ width: size, height: size }, style];
  obj.style = items;
  return jsx(FastImageDefault, { source: { uri: icon }, resizeMode: "contain", style: null });
});