// === Module 14075: NewBadge ===

// Module 14075 (NewBadge)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import shared from "shared" /* 5150 */;
import useThemeDefault from "useTheme" /* 5379 */;
import Text_Text from "Text/Text" /* 5763 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9977 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let num = 0;
  if (obj.isIOS()) {
    num = 1;
  }
  const obj2 = { text: { textAlign: "center", marginTop: num }, base: null };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(useIsUsingClientThemeDefault(), tmp3);
  const obj = { style: tmp4.base, children: null };
  const obj2 = { variant: "footnote/semibold", style: tmp4.text, color: null, children: null };
  const tmp2 = useIsUsingClientThemeDefault();
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj2.color = str;
  const intl = util.intl;
  obj3 = shared;
  obj2.children = intl.string(util.t.y2b7CA).toLocaleUpperCase(util.intl.currentLocale);
  obj.children = jsx(Text_Text.Text, { variant: "footnote/semibold", style: tmp4.text, color: null, children: null });
  return <View style={tmp4.base}>{null}</View>;
};