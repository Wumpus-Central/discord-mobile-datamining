// === Module 13836: GiftCodeRow ===

// Module 13836 (GiftCodeRow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4995 */;
import showShareActionSheet from "showShareActionSheet" /* 8636 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11697 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, TouchableWithoutFeedback: closure_4, StyleSheet } = get_ActivityIndicator);
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
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
const obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
obj2.revokeHint = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj2.firstRow = { borderWidth: 0 };
obj2.buttonContainer = { flexShrink: 0, flexGrow: 1 };
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
  const giftCode = props.giftCode;
  let items = [tmp.giftCodeRow, ];
  let firstRow = null;
  if (props.isFirst) {
    firstRow = tmp.firstRow;
  }
  let obj = { style: items, children: null };
  items[1] = firstRow;
  let obj2 = { style: tmp.giftCodeInput, children: null };
  const obj3 = { children: null };
  const obj4 = { style: tmp.giftCodeInputContent, children: null };
  const obj5 = { variant: "text-sm/normal", style: tmp.codeText, lineClamp: 1, children: giftCode(self[8]).getGiftCodeURL(giftCode.code) };
  const items1 = [closure_6(giftCode(self[11]).Text, obj5), ];
  const obj7 = { style: null, children: null };
  const items2 = [, ];
  ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
  obj7.style = items2;
  const obj8 = { size: "sm", text: null, onPress: null };
  const intl = giftCode(self[13]).intl;
  obj8.text = intl.string(giftCode(self[13]).t.h5EvZM);
  obj8.onPress = this.handleShare;
  obj7.children = closure_6(giftCode(self[12]).Button, obj8);
  items1[1] = closure_6(closure_3, obj7);
  obj4.children = items1;
  obj3.children = closure_7(closure_3, obj4);
  obj2.children = closure_6(giftCode(self[10]).InputFieldContainer, obj3);
  const items3 = [closure_6(closure_3, obj2), ];
  const obj9 = { style: tmp.subTextRow, children: null };
  let tmp5Result = null;
  if (null != giftCode.expiresAt) {
    const obj10 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl2 = tmp6(tmp7[13]).intl;
    const obj11 = { hours: null, revokeHook: null };
    const expiresAt = giftCode.expiresAt;
    obj11.hours = expiresAt.diff(require("module_4348")(), "h");
    obj11.revokeHook = function revokeHook(children, arg1) {
      const obj = {
        accessibilityRole: "button",
        onPress() {
          return self.handleRevoke(code.code);
        },
        children: null
      };
      const obj2 = { style: null, children };
      const items = [, ];
      ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
      obj2.style = items;
      obj.children = timestampProducer(native.LegacyText, obj2);
      return timestampProducer(React4, obj, arg1);
    };
    obj10.children = intl2.format(tmp6(tmp7[13]).t.b1BfWD, obj11);
    tmp5Result = closure_6(tmp6(tmp7[11]).Text, obj10);
  }
  obj9.children = tmp5Result;
  items3[1] = closure_6(closure_3, obj9);
  obj.children = items3;
  return closure_7(closure_3, obj);
};
GiftCodeRow.contextType = fn(4467).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default GiftCodeRow;