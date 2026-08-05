// discord_app/components_native/premium/GiftCodeRow.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticsSections } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { resolveGiftCode } from "../../actions/GiftCodeActionCreators.tsx";

let StyleSheet;
let c3;
let c4;
let closure_6;
let error;
let require = arg1;
({ View: c3, TouchableWithoutFeedback: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { giftCodeRow: { paddingHorizontal: 16 }, giftCodeRowLegacy: null, giftCodeShare: null, giftCodeInput: null, giftCodeInputContent: null, giftCodeShareButton: null, codeText: null, subTextRow: null, expiryText: null, revokeHint: null, firstRow: null, buttonContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: require("Themes").radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: require("Themes").radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT };
createCacheKey[3] = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
let obj2 = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_4 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("Themes").space.PX_8 };
createCacheKey[5] = { marginLeft: 12 };
createCacheKey[6] = { flexShrink: 1 };
createCacheKey[7] = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
createCacheKey[8] = { fontSize: 12, lineHeight: 16 };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("Themes").space.PX_8 };
createCacheKey[9] = { color: require("Themes").unsafe_rawColors.BLUE_345 };
createCacheKey[10] = { borderWidth: 0 };
createCacheKey[11] = { flexShrink: 0, flexGrow: 1 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class GiftCodeRow extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleShare = function handleShare() {
      let giftCode;
      let sku;
      ({ giftCode, sku } = applyArgumentsResult.props);
      if (tmp) {
        let obj = applyArgumentsResult(outer1_2[8]);
        obj.trackGiftCodeCopy(giftCode, sku);
        obj = { url: null };
        const obj2 = applyArgumentsResult(outer1_2[9]);
        obj[0] = applyArgumentsResult(outer1_2[8]).getGiftCodeURL(giftCode.code);
        obj2.showShareActionSheet(obj, outer1_5.GIFT_CODE_ROW);
        const obj4 = applyArgumentsResult(outer1_2[8]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GiftCodeRow.prototype;
prototype["handleRevoke"] = function handleRevoke(code) {
  resolveGiftCode.revokeGiftCode(code);
};
prototype["render"] = function render() {
  let self = this;
  self = this;
  const tmp = createCacheKey(this.context);
  const importDefault = tmp;
  const props = this.props;
  const giftCode = props.giftCode;
  const isRefreshEnabled = props.isRefreshEnabled;
  let items = [tmp.giftCodeRow, , ];
  let giftCodeRowLegacy = null;
  if (!isRefreshEnabled) {
    giftCodeRowLegacy = tmp.giftCodeRowLegacy;
  }
  items[1] = giftCodeRowLegacy;
  let firstRow = null;
  if (props.isFirst) {
    firstRow = tmp.firstRow;
  }
  let obj = { style: items, children: null };
  items[2] = firstRow;
  obj = { style: null, children: null };
  if (isRefreshEnabled) {
    obj[0] = tmp.giftCodeInput;
    obj = { children: null };
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.giftCodeInputContent;
    const obj2 = { variant: "text-sm/normal", style: null, lineClamp: 1, children: null };
    obj2[1] = tmp.codeText;
    let obj9 = giftCode(self[8]);
    obj2[3] = obj9.getGiftCodeURL(giftCode.code);
    const items1 = [callback(giftCode(self[11]).Text, obj2), ];
    let obj3 = { style: null, children: null };
    const items2 = [, ];
    ({ buttonContainer: arr5[0], giftCodeShareButton: arr5[1] } = tmp);
    obj3[0] = items2;
    const obj4 = { size: "sm", text: null, onPress: null };
    const intl2 = giftCode(self[13]).intl;
    obj4[1] = intl2.string(giftCode(self[13]).t.h5EvZM);
    obj4[2] = self.handleShare;
    obj3[1] = callback(giftCode(self[12]).Button, obj4);
    items1[1] = callback(tmp3, obj3);
    obj1[1] = items1;
    obj[0] = tmp2(tmp3, obj1);
    obj[1] = callback(giftCode(self[10]).InputFieldContainer, obj);
    let tmp2Result = callback(tmp3, obj);
    let tmp8 = self;
    let tmp10 = giftCode;
    let tmp6 = callback;
  } else {
    obj[0] = tmp.giftCodeShare;
    tmp6 = callback;
    tmp8 = self;
    const obj5 = { variant: "text-sm/normal", style: null, lineClamp: 1, children: null };
    obj5[1] = tmp.codeText;
    obj3 = giftCode(self[8]);
    obj5[3] = obj3.getGiftCodeURL(giftCode.code);
    const items3 = [callback(giftCode(self[11]).Text, obj5), ];
    const obj6 = { style: null, children: null };
    const items4 = [, ];
    ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
    obj6[0] = items4;
    const obj7 = { size: "sm", text: null, onPress: null };
    const intl = giftCode(self[13]).intl;
    obj7[1] = intl.string(giftCode(self[13]).t.h5EvZM);
    obj7[2] = self.handleShare;
    obj6[1] = callback(giftCode(self[12]).Button, obj7);
    items3[1] = callback(tmp3, obj6);
    obj[1] = items3;
    tmp2Result = tmp2(tmp3, obj);
    tmp10 = giftCode;
  }
  const items5 = [tmp2Result, ];
  const obj8 = { style: tmp.subTextRow, children: null };
  let tmp6Result = null;
  if (null != giftCode.expiresAt) {
    obj9 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl3 = tmp10(tmp8[13]).intl;
    const obj10 = { hours: null, revokeHook: null };
    const expiresAt = giftCode.expiresAt;
    obj10[0] = expiresAt.diff(importDefault(tmp8[14])(), "h");
    obj10[1] = function revokeHook(children) {
      obj = {
        accessibilityRole: "button",
        onPress() {
          return closure_2.handleRevoke(code.code);
        },
        children: outer1_6(giftCode(self[15]).LegacyText, obj)
      };
      obj = { style: items, children };
      items = [, ];
      ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
      return outer1_6(outer1_4, obj, arg1);
    };
    obj9[2] = intl3.format(tmp10(tmp8[13]).t.b1BfWD, obj10);
    tmp6Result = tmp6(tmp10(tmp8[11]).Text, obj9);
  }
  obj8[1] = tmp6Result;
  items5[1] = tmp6(closure_3, obj8);
  obj[1] = items5;
  return closure_7(closure_3, obj);
};
GiftCodeRow.contextType = require("ManaContext").ThemeContext;
let obj4 = { color: require("Themes").unsafe_rawColors.BLUE_345 };
const result = require("ME").fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default GiftCodeRow;