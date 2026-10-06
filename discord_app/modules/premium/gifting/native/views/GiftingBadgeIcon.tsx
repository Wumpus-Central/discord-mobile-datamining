// === Module 10494: GiftingBadgeIcon ===

// Module 10494 (GiftingBadgeIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let icon;
  let style;
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(10);
  ({ icon, size, style } = arg0);
  if (cResult[0] !== icon) {
    const obj2 = { uri: icon };
    cResult[0] = icon;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== size) {
    const size1 = { width: size, height: size };
    cResult[2] = size;
    cResult[3] = size1;
    tmp3 = size1;
  } else {
    tmp3 = cResult[3];
  }
  if (cResult[4] === style) {
    let tmp4;
    if (cResult[5] === tmp3) {
      tmp4 = cResult[6];
    }
    if (cResult[7] === tmp2) {
      let tmp5;
      if (cResult[8] === tmp4) {
        tmp5 = cResult[9];
      }
      return tmp5;
    }
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
  size = uri.size;
  const items = [{ width: size, height: size }, uri.style];
  return <Image source={{ uri: uri.icon }} resizeMode="contain" style={items} />;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default tmp3;