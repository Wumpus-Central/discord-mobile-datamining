// === Module 11938: NewBadge ===

// Module 11938 (NewBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7519 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let num = 0;
  if (obj.isIOS()) {
    num = 1;
  }
  const obj2 = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  obj = PlatformUtils;
  if (tmpResult.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = nativeDefault.colors.BACKGROUND_BRAND;
    }
    obj3.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj2.base = obj3;
    return obj2;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
  tmpResult = shared;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  const tmp5 = useThemeDefault();
  const tmp6 = closure_5(useIsUsingClientThemeDefault(), tmp5);
  ({ base, text } = tmp6);
  const tmp4 = useIsUsingClientThemeDefault();
  if (obj2.isThemeLight(tmp5)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.y2b7CA);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp6.text) {
    if (cResult[2] === str) {
      let tmp9 = cResult[3];
    }
    if (cResult[4] === tmp6.base) {
      if (cResult[5] === tmp9) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj3 = { style: base, children: tmp9 };
    const tmp14 = <View style={base}>{tmp9}</View>;
    cResult[4] = tmp6.base;
    cResult[5] = tmp9;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = jsx(Text_Text.Text, { variant: "text-xxs/bold", style: text, color: str, children: first });
  cResult[1] = tmp6.text;
  cResult[2] = str;
  cResult[3] = tmp10;
  tmp9 = tmp10;
  obj2 = shared;
}) : (() => {
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(useIsUsingClientThemeDefault(), tmp3);
  const obj = { style: tmp4.base, children: null };
  const obj2 = { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null };
  const tmp2 = useIsUsingClientThemeDefault();
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj2.color = str;
  const intl = util.intl;
  obj2.children = intl.string(util.t.y2b7CA);
  obj.children = jsx(Text_Text.Text, { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null });
  return <View style={tmp4.base}>{null}</View>;
});