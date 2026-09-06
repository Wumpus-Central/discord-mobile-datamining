// === Module 13563: GiftCodeRow ===

// Module 13563 (GiftCodeRow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4799 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11430 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, TouchableWithoutFeedback: closure_4, StyleSheet } = get_ActivityIndicator);
const AnalyticsSections = fn(1074).AnalyticsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { giftCodeRow: { paddingHorizontal: 16 }, giftCodeRowLegacy: null, giftCodeShare: null, giftCodeInput: null, giftCodeInputContent: null, giftCodeShareButton: null, codeText: null, subTextRow: null, expiryText: null, revokeHint: null, firstRow: null, buttonContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.giftCodeRowLegacy = createStyles;
createStyles.giftCodeShare = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: nativeDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: nativeDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
createStyles.giftCodeInput = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
createStyles.giftCodeInputContent = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
createStyles.giftCodeShareButton = { marginLeft: 12 };
createStyles.codeText = { flexShrink: 1 };
createStyles.subTextRow = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
createStyles.expiryText = { fontSize: 12, lineHeight: 16 };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
createStyles.revokeHint = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
createStyles.firstRow = { borderWidth: 0 };
createStyles.buttonContainer = { flexShrink: 0, flexGrow: 1 };
let closure_8 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class GiftCodeRow extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleShare = function handleShare() {
      ({ giftCode, sku } = applyArgumentsResult.props);
      if (tmp) {
        let obj = GiftCodeUtils;
        obj.trackGiftCodeCopy(giftCode, sku);
        obj = { url: null };
        const obj2 = showShareActionSheet;
        obj.url = GiftCodeUtils.getGiftCodeURL(giftCode.code);
        obj2.showShareActionSheet(obj, AnalyticsSections.GIFT_CODE_ROW);
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
  obj = { style: tmp.giftCodeInput, children: null };
  obj = { children: null };
  const obj1 = { style: tmp.giftCodeInputContent, children: null };
  const obj2 = { variant: "text-sm/normal", style: tmp.codeText, lineClamp: 1, children: null };
  let obj5 = giftCode(self[8]);
  obj2.children = obj5.getGiftCodeURL(giftCode.code);
  const items1 = [closure_6(giftCode(self[11]).Text, obj2), ];
  const obj3 = { style: null, children: null };
  const items2 = [, ];
  ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
  obj3.style = items2;
  const obj4 = { size: "sm", text: null, onPress: null };
  const intl = giftCode(self[13]).intl;
  obj4.text = intl.string(giftCode(self[13]).t.h5EvZM);
  obj4.onPress = this.handleShare;
  obj3.children = closure_6(giftCode(self[12]).Button, obj4);
  items1[1] = closure_6(closure_3, obj3);
  obj1.children = items1;
  obj.children = closure_7(closure_3, obj1);
  obj.children = closure_6(giftCode(self[10]).InputFieldContainer, obj);
  const items3 = [closure_6(closure_3, obj), ];
  obj5 = { style: tmp.subTextRow, children: null };
  let tmp5Result = null;
  if (null != giftCode.expiresAt) {
    const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl2 = tmp6(tmp7[13]).intl;
    const obj7 = { hours: null, revokeHook: null };
    const expiresAt = giftCode.expiresAt;
    obj7.hours = expiresAt.diff(require("module_4153")(), "h");
    obj7.revokeHook = function revokeHook(children, arg1) {
      let obj = {
        accessibilityRole: "button",
        onPress() {
          return self.handleRevoke(code.code);
        },
        children: null
      };
      obj = { style: null, children };
      const items = [, ];
      ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
      obj.style = items;
      obj.children = timestampProducer(native.LegacyText, obj);
      return timestampProducer(React4, obj, arg1);
    };
    obj6.children = intl2.format(tmp6(tmp7[13]).t.b1BfWD, obj7);
    tmp5Result = closure_6(tmp6(tmp7[11]).Text, obj6);
  }
  obj5.children = tmp5Result;
  items3[1] = closure_6(closure_3, obj5);
  obj.children = items3;
  return closure_7(closure_3, obj);
};
GiftCodeRow.contextType = fn(4271).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default GiftCodeRow;