// === Module 13390: GiftCodeRow ===

// Module 13390 (GiftCodeRow)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 4595 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5317 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8048 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11102 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let importDefault;

let StyleSheet;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: c3, TouchableWithoutFeedback: closure_4, StyleSheet } = react_native);
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { giftCodeRow: { paddingHorizontal: 16 }, giftCodeRowLegacy: obj2, giftCodeShare: obj3, giftCodeInput: obj4, giftCodeInputContent: obj5, giftCodeShareButton: { marginLeft: 12 }, codeText: { flexShrink: 1 }, subTextRow: { marginBottom: 8, flexDirection: "row", alignItems: "center" }, expiryText: { fontSize: 12, lineHeight: 16 }, revokeHint: obj6, firstRow: { borderWidth: 0 }, buttonContainer: { flexShrink: 0, flexGrow: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 8, padding: 8, borderRadius: nativeDefault.radii.xs, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_8 };
obj6 = { color: nativeDefault.unsafe_rawColors.BLUE_345 };
const metroImportAll = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GiftCodeRow extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleShare = function handleShare() {
      let giftCode;
      let obj3;
      let sku;
      ({ giftCode, sku } = require.props);
      const tmp = null != giftCode && null != sku;
      if (tmp) {
        const obj = GiftCodeUtils;
        obj.trackGiftCodeCopy(giftCode, sku);
        const obj2 = { url: obj3.getGiftCodeURL(giftCode.code) };
        const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
        showShareActionSheet2;
        obj3 = GiftCodeUtils;
        showShareActionSheet(obj2, AnalyticsSections.GIFT_CODE_ROW);
      }
    };
    return applyArgumentsResult;
  }
  handleRevoke(code) {
    const obj = GiftCodeActionCreatorsDefault;
    obj.revokeGiftCode(code);
  }
  render() {
    let Button;
    let InputFieldContainer;
    let b1BfWD;
    let closure_1;
    let expiresAt;
    let format;
    let intl;
    let items1;
    let items2;
    let items3;
    let obj11;
    let obj3;
    let obj4;
    let obj6;
    let obj8;
    let tmp5Result;
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
    let obj = { style: items, children: items3 };
    items[1] = firstRow;
    let obj2 = { style: tmp.giftCodeInput, children: closure_6(InputFieldContainer, obj3) };
    obj3 = { children: closure_7(closure_3, obj4) };
    obj4 = { style: tmp.giftCodeInputContent, children: items1 };
    InputFieldContainer = giftCode(self[10]).InputFieldContainer;
    const obj5 = { variant: "text-sm/normal", style: tmp.codeText, lineClamp: 1, children: obj6.getGiftCodeURL(giftCode.code) };
    const Text = giftCode(self[11]).Text;
    obj6 = giftCode(self[8]);
    items1 = [closure_6(Text, obj5), ];
    const obj7 = { style: items2, children: closure_6(Button, obj8) };
    items2 = [, ];
    ({ buttonContainer: arr3[0], giftCodeShareButton: arr3[1] } = tmp);
    obj8 = { size: "sm", text: intl.string(giftCode(self[13]).t.h5EvZM), onPress: this.handleShare };
    Button = giftCode(self[12]).Button;
    intl = giftCode(self[13]).intl;
    items1[1] = closure_6(closure_3, obj7);
    items3 = [closure_6(closure_3, obj2), ];
    const obj9 = { style: tmp.subTextRow, children: tmp5Result };
    tmp5Result = null;
    if (null != giftCode.expiresAt) {
      const obj10 = { variant: "text-xs/normal", color: "text-subtle", children: format(b1BfWD, obj11) };
      const Text2 = tmp6(tmp7[11]).Text;
      const intl2 = tmp6(tmp7[13]).intl;
      format = intl2.format;
      obj11 = {
        hours: expiresAt.diff(require("module_4467")(), "h"),
        revokeHook(children, id) {
            let code;
            let items;
            let obj2;
            const obj = {
              accessibilityRole: "button",
              onPress() {
                return self.handleRevoke(code.code);
              },
              children: metroRequire(native.LegacyText, obj2)
            };
            obj2 = { style: items, children };
            items = [, ];
            ({ expiryText: arr[0], revokeHint: arr[1] } = closure_1);
            return metroRequire(React3, obj, id);
          }
      };
      expiresAt = giftCode.expiresAt;
      b1BfWD = tmp6(tmp7[13]).t.b1BfWD;
      tmp5Result = closure_6(Text2, obj10);
    }
    items3[1] = closure_6(closure_3, obj9);
    return closure_7(closure_3, obj);
  }
}
const prototype = GiftCodeRow.prototype;
GiftCodeRow.contextType = native2.ThemeContext;
const result = size.fileFinishedImporting("components_native/premium/GiftCodeRow.tsx");

export default GiftCodeRow;