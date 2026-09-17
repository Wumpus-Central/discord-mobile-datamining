// === Module 12036: AutomatedUnderageAppealActionSheet ===

// Module 12036 (AutomatedUnderageAppealActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Text_Text from "Text/Text" /* 4636 */;
import TableRow from "TableRow" /* 5693 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8560 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8562 */;
import SafetyHubActionCreators from "SafetyHubActionCreators" /* 12033 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 12035 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8580 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8569);
({ AGE_APPEAL_ACTION_SHEET_NAME: metroRequire, SafetyHubLinks: closure_7 } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, header: { alignItems: "center" }, content: null, moreInfo: null, learnMore: null, footer: null, number: null };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj2.moreInfo = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.learnMore = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
let obj6 = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
obj2.footer = { marginTop: nativeDefault.space.PX_8 };
let size = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.number = size;
let closure_10 = createStyles.createStyles(obj2);
let obj8 = { title: null, description: null };
let intl = fn(1115).intl;
obj8.title = intl.string(fn(1115).t["1+E7LP"]);
let intl2 = fn(1115).intl;
obj8.description = intl2.string(fn(1115).t["BXiat/"]);
let items = [obj8, , ];
let obj9 = { title: null, description: null };
let intl3 = fn(1115).intl;
obj9.title = intl3.string(fn(1115).t.iMQXtK);
let intl4 = fn(1115).intl;
obj9.description = intl4.string(fn(1115).t.oQ0vwu);
items[1] = obj9;
let obj10 = { title: null, description: null };
let intl5 = fn(1115).intl;
obj10.title = intl5.string(fn(1115).t["oY/z1Q"]);
let intl6 = fn(1115).intl;
obj10.description = intl6.string(fn(1115).t.wtj02W);
items[2] = obj10;
size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default function AutomatedUnderageAppealActionSheet(onClose) {
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let callback1;
  const tmp = closure_10();
  dependencyMap = tmp;
  items = [callback1];
  const stateFromStores = onClose(504).useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj = onClose(504);
  const items1 = [callback1];
  const stateFromStores1 = onClose(504).useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1612)().bottom;
  const items2 = [onClose];
  const callback = stateFromStores.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    AutomatedUnderageAppealModalActionCreatorsDefault.close();
  }, items2);
  const items3 = [callback];
  callback1 = stateFromStores.useCallback(() => {
    AutomatedUnderageAppealModalActionCreatorsDefault.success();
    callback();
    const result = AutomatedUnderageAppealModalActionCreatorsDefault.start_verification_check();
  }, items3);
  const items4 = [stateFromStores, callback1];
  const effect = stateFromStores.useEffect(() => {
    if ("" !== stateFromStores) {
      const obj2 = { webviewUrl: tmp, onComplete: callback1, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      AgeVerificationActionCreatorsDefault.showAgeVerification(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
    }
  }, items4);
  let obj3 = { scrollable: true, startHeight: null, children: null };
  const sum = 425 + bottom;
  const sum1 = sum + classificationId(576).space.PX_16;
  obj3.startHeight = sum1 + classificationId(576).space.PX_32;
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: null, children: null };
  const obj6 = {};
  const merged = Object.assign(tmp.content);
  obj6.paddingBottom = bottom;
  obj5.style = obj6;
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = onClose(1115).intl;
  obj8.children = intl.string(onClose(1115).t["9SDLnj"]);
  const items5 = [closure_8(onClose(4636).Text, obj8), ];
  const obj9 = { variant: "heading-md/medium", color: "text-default", children: null };
  const intl2 = onClose(1115).intl;
  obj9.children = intl2.string(onClose(1115).t["yvx//1"]);
  items5[1] = closure_8(onClose(4636).Text, obj9);
  obj7.children = items5;
  const items6 = [closure_9(callback, obj7), , , ];
  const obj10 = { children: null };
  let obj2 = onClose(504);
  obj10.children = closure_8(onClose(5775).TableRowGroup, {
    hasIcons: true,
    children: items.map((item, index) => {
      ({ title, description } = item);
      const obj = { label: title, subLabel: description, icon: null };
      const obj2 = { style: number.number, children: React6(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index + 1 }) };
      obj.icon = React6(View, obj2);
      return React6(TableRow.TableRow, obj, index);
    })
  });
  items6[1] = closure_8(callback, obj10);
  const obj12 = { style: tmp.moreInfo, children: null };
  const obj13 = { title: null, hasIcons: false, children: null };
  const intl3 = onClose(1115).intl;
  obj13.title = intl3.string(onClose(1115).t.WPwp1b);
  const obj14 = { label: null, subLabel: null, onPress: null, arrow: true, start: true, end: true };
  const intl4 = onClose(1115).intl;
  obj14.label = intl4.string(onClose(1115).t.N9WJMM);
  const intl5 = onClose(1115).intl;
  obj14.subLabel = intl5.string(onClose(1115).t.NHq382);
  obj14.onPress = function onPress() {
    return classificationId(number[19]).openURL(constants.AGE_VERIFICATION_LINK);
  };
  obj13.children = closure_8(onClose(5693).TableRow, obj14);
  obj12.children = closure_8(onClose(5775).TableRowGroup, obj13);
  items6[2] = closure_8(callback, obj12);
  const obj15 = { style: tmp.footer, children: null };
  const obj16 = {
    onPress() {
      return SafetyHubActionCreators.requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1,
    text: null
  };
  const intl6 = onClose(1115).intl;
  obj16.text = intl6.string(onClose(1115).t["54b8V0"]);
  const items7 = [closure_8(onClose(5062).Button, obj16), ];
  const obj17 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore, children: null };
  const intl7 = onClose(1115).intl;
  obj17.children = intl7.format(onClose(1115).t.ZbWsOF, { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK });
  items7[1] = closure_8(onClose(4636).Text, obj17);
  obj15.children = items7;
  items6[3] = closure_9(callback, obj15);
  obj5.children = items6;
  obj4.children = closure_9(callback, obj5);
  obj3.children = closure_8(onClose(6738).BottomSheetScrollView, obj4);
  return closure_8(onClose(7264).BottomSheet, obj3);
};