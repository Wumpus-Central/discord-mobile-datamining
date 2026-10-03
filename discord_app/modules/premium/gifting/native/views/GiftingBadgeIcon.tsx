// === Module 10481: GiftingBadgeIcon ===

// Module 10481 (GiftingBadgeIcon)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ icon, size, style } = arg0);
  if (cResult[0] !== icon) {
    const obj2 = { uri: icon };
    cResult[0] = icon;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== size) {
    const size1 = { width: size, height: size };
    cResult[2] = size;
    cResult[3] = size1;
    let tmp3 = size1;
  } else {
    tmp3 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp3) {
      let tmp4 = cResult[6];
    }
    if (cResult[7] === tmp2) {
      if (cResult[8] === tmp4) {
        let tmp5 = cResult[9];
      }
      return tmp5;
    }
    const obj3 = { source: tmp2, resizeMode: "contain", style: tmp4 };
    const tmp8 = <Image source={tmp2} resizeMode="contain" style={tmp4} />;
    cResult[7] = tmp2;
    cResult[8] = tmp4;
    cResult[9] = tmp8;
    tmp5 = tmp8;
  }
  const items = [tmp3, style];
  cResult[4] = style;
  cResult[5] = tmp3;
  cResult[6] = items;
  tmp4 = items;
}) : ((uri) => {
  const size = uri.size;
  const obj = { source: { uri: uri.icon }, resizeMode: "contain", style: null };
  const items = [{ width: size, height: size }, uri.style];
  obj.style = items;
  return <Image source={{ uri: uri.icon }} resizeMode="contain" style={null} />;
});