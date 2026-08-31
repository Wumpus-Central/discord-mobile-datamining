// discord_app/components_native/premium/GiftCodeRow.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import resolveGiftCodeDefault from "../../actions/GiftCodeActionCreators.tsx";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticsSections } from "../../Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";

let require = arg1;
({ View: c3, TouchableWithoutFeedback: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { giftCodeRow: { paddingHorizontal: 16 }, giftCodeRowLegacy: null, giftCodeShare: null, giftCodeInput: null, giftCodeInputContent: null, giftCodeShareButton: null, codeText: null, subTextRow: null, expiryText: null, revokeHint: null, firstRow: null, buttonContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: ThemesDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: ThemesDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let obj2 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginLeft: 12 };
createCacheKey[6] = { flexShrink: 1 };
createCacheKey[7] = { marginBottom: 8, flexDirection: "row", alignItems: "center" };
createCacheKey[8] = { fontSize: 12, lineHeight: 16 };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: ThemesDefault.space.PX_8 };
createCacheKey[9] = { color: ThemesDefault.unsafe_rawColors.BLUE_345 };
createCacheKey[10] = { borderWidth: 0 };
createCacheKey[11] = { flexShrink: 0, flexGrow: 1 };
let closure_8 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class GiftCodeRow extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleShare = function handleShare() {
      ({ giftCode, sku } = applyArgumentsResult.props);
      if (tmp) {
        let obj = applyArgumentsResult(closure_1_2[8]);
        obj.trackGiftCodeCopy(giftCode, sku);
        obj = { url: null };
        const obj2 = applyArgumentsResult(closure_1_2[9]);
        obj[0] = applyArgumentsResult(closure_1_2[8]).getGiftCodeURL(giftCode.code);
        obj2.showShareActionSheet(obj, closure_1_5.GIFT_CODE_ROW);
        const obj4 = applyArgumentsResult(closure_1_2[8]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GiftCodeRow.prototype;
prototype["handleRevoke"] = function handleRevoke(code) {
  resolveGiftCodeDefault.revokeGiftCode(code);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback2(this.context);
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
  obj1 = { style: tmp.giftCodeInputContent, children: null };
  const obj2 = { variant: "text-sm/normal", style: tmp.codeText, lineClamp: 1, children: null };
  let obj5 = giftCode(self[8]);
  obj2[3] = obj5.getGiftCodeURL(giftCode.code);
  const items1 = [callback(giftCode(self[11]).Text, obj2), ];
  const obj3 = { style: items2, children: null };
  items2 = [, ];
  ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
  const obj4 = { size: "sm", text: null, onPress: null };
  const intl = giftCode(self[13]).intl;
  obj4[1] = intl.string(giftCode(self[13]).t.h5EvZM);
  obj4[2] = this.handleShare;
  obj3[1] = callback(giftCode(self[12]).Button, obj4);
  items1[1] = callback(closure_3, obj3);
  obj1[1] = items1;
  obj[0] = closure_7(closure_3, obj1);
  obj[1] = callback(giftCode(self[10]).InputFieldContainer, obj);
  const items3 = [callback(closure_3, obj), ];
  obj5 = { style: tmp.subTextRow, children: null };
  let tmp5Result = null;
  if (null != giftCode.expiresAt) {
    const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl2 = tmp6(tmp7[13]).intl;
    const obj7 = { hours: null, revokeHook: null };
    const expiresAt = giftCode.expiresAt;
    obj7[0] = expiresAt.diff(importDefault(tmp7[14])(), "h");
    obj7[1] = function revokeHook(children) {
      obj = {
        accessibilityRole: "button",
        onPress() {
          return closure_2.handleRevoke(code.code);
        },
        children: closure_1_6(giftCode(self[15]).LegacyText, obj)
      };
      obj = { style: items, children };
      items = [, ];
      ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
      return closure_1_6(closure_1_4, obj, arg1);
    };
    obj6[2] = intl2.format(tmp6(tmp7[13]).t.b1BfWD, obj7);
    tmp5Result = tmp5(tmp6(tmp7[11]).Text, obj6);
  }
  obj5[1] = tmp5Result;
  items3[1] = callback(closure_3, obj5);
  obj[1] = items3;
  return closure_7(closure_3, obj);
};
GiftCodeRow.contextType = require("ManaContext").ThemeContext;
let obj4 = { color: ThemesDefault.unsafe_rawColors.BLUE_345 };
const result = require("set").fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default GiftCodeRow;