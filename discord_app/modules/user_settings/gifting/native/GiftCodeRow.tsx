// === Module 14041: GiftCodeRow ===

// Module 14041 (GiftCodeRow)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5790 */;
import showShareActionSheet from "showShareActionSheet" /* 8691 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11936 */;
import copyGiftCodeDefault from "copyGiftCode" /* 14042 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, TouchableWithoutFeedback: closure_4, StyleSheet } = get_ActivityIndicator);
const AnalyticsSections = fn(1071).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
let obj2 = { giftCodeRow: { paddingHorizontal: 16 }, giftCodeRowLegacy: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, giftCodeShare: null, giftCodeInput: null, giftCodeInputContent: null, giftCodeShareButton: null, codeText: null, subTextRow: null, expiryText: null, revokeHint: null, firstRow: null, buttonContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.giftCodeShare = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: nativeDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: nativeDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
obj2.giftCodeInput = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj5 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.giftCodeInputContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
obj2.giftCodeShareButton = { marginLeft: 12 };
obj2.codeText = { flexShrink: 1 };
obj2.subTextRow = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
obj2.expiryText = { fontSize: 12, lineHeight: 16 };
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
obj2.revokeHint = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj2.firstRow = { borderWidth: 0 };
let obj7 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj2.buttonContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 0 };
let closure_8 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class GiftCodeRow extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleShare = function handleShare() {
      ({ giftCode, sku } = applyArgumentsResult.props);
      if (tmp) {
        GiftCodeUtils.trackGiftCodeCopy(giftCode, sku);
        const obj3 = { url: null };
        const obj2 = showShareActionSheet;
        obj3.url = GiftCodeUtils.getGiftCodeURL(giftCode.code);
        obj2.showShareActionSheet(obj3, AnalyticsSections.GIFT_CODE_ROW);
      }
      tmp = null != giftCode && null != sku;
    };
    return applyArgumentsResult;
  }
}
const prototype = GiftCodeRow.prototype;
prototype["handleRevoke"] = function handleRevoke(code) {
  GiftCodeActionCreatorsDefault.revokeGiftCode(code);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_8(this.context);
  importDefault = tmp;
  const props = this.props;
  let diff = props.giftCode;
  require = diff;
  const showCopy = props.showCopy;
  let tmp2 = undefined !== showCopy;
  ({ isFirst, canRevoke } = props);
  if (tmp2) {
    tmp2 = showCopy;
  }
  items = [tmp.giftCodeRow, ];
  let firstRow = null;
  if (isFirst) {
    firstRow = tmp.firstRow;
  }
  let obj = { style: items, children: null };
  items[1] = firstRow;
  let obj2 = { style: tmp.giftCodeInput, children: null };
  let diffResult = self;
  const obj3 = { style: tmp.giftCodeInputContent, children: null };
  const obj4 = { variant: "body-sm/normal", style: tmp.codeText, lineClamp: 1, children: require("GiftCodeUtils").getGiftCodeURL(diff.code) };
  const items1 = [closure_6(require("Text/Text").Text, obj4), ];
  const obj6 = { style: null, children: null };
  const items2 = [, ];
  ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
  obj6.style = items2;
  let tmp6Result = null;
  if (tmp2) {
    const obj7 = { size: "sm", text: null, onPress: null };
    const intl = tmp7(diffResult[13]).intl;
    obj7.text = intl.string(tmp7(diffResult[13]).t.OpuAlK);
    obj7.onPress = function onPress() {
      return copyGiftCodeDefault(diff, self.props.sku);
    };
    tmp6Result = closure_6(tmp7(diffResult[12]).Button, obj7);
  }
  const obj8 = { children: null };
  const items3 = [tmp6Result, ];
  const obj9 = { size: "sm", text: null, onPress: null };
  const intl2 = tmp7(diffResult[13]).intl;
  obj9.text = intl2.string(require("util").t.h5EvZM);
  obj9.onPress = this.handleShare;
  items3[1] = closure_6(require("components/Button/Button").Button, obj9);
  obj6.children = items3;
  items1[1] = closure_7(closure_3, obj6);
  obj3.children = items1;
  obj8.children = closure_7(closure_3, obj3);
  obj2.children = closure_6(require("InputFieldContainer").InputFieldContainer, obj8);
  const items4 = [closure_6(closure_3, obj2), ];
  const obj10 = { style: tmp.subTextRow, children: null };
  if (null == diff.expiresAt) {
    obj10.children = null;
    items4[1] = closure_6(closure_3, obj10);
    obj.children = items4;
    return closure_7(closure_3, obj);
  } else {
    const intl3 = tmp7(diffResult[13]).intl;
    const format = intl3.format;
    let t = tmp7(diffResult[13]).t;
    if (canRevoke) {
      const obj11 = { hours: null, revokeHook: null };
      const expiresAt2 = diff.expiresAt;
      diff = expiresAt2.diff;
      diffResult = diff(require("module_2169")(), "h");
      obj11.hours = diffResult;
      obj11.revokeHook = function revokeHook(children, arg1) {
        const obj = {
          accessibilityRole: "button",
          onPress() {
            return self.handleRevoke(code.code);
          },
          children: null
        };
        const obj2 = { style: null, children };
        items = [, ];
        ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
        obj2.style = items;
        obj.children = timestampProducer(native.LegacyText, obj2);
        return timestampProducer(React4, obj, arg1);
      };
      let formatResult = format(t.b1BfWD, obj11);
    } else {
      const obj12 = { hours: null };
      const expiresAt = diff.expiresAt;
      obj12.hours = expiresAt.diff(require("module_2169")(), "h");
      formatResult = format(t.ltVZcJ, obj12);
    }
    t = { variant: "body-xs/normal", color: "text-subtle", children: formatResult };
    closure_6(tmp7(diffResult[11]).Text, t);
  }
  const obj5 = require("GiftCodeUtils");
};
GiftCodeRow.contextType = fn(5104).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/gifting/native/GiftCodeRow.tsx");

export default GiftCodeRow;