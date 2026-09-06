// === Module 11884: AutomatedUnderageAppealActionSheet ===

// Module 11884 (AutomatedUnderageAppealActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import TableRow from "TableRow" /* 5605 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import SafetyHubActionCreators from "SafetyHubActionCreators" /* 11881 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11883 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(8419);
({ AGE_APPEAL_ACTION_SHEET_NAME: metroRequire, SafetyHubLinks: closure_7 } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, content: null, moreInfo: null, learnMore: null, footer: null, number: null };
createStyles = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.header = { alignItems: "center" };
createStyles.content = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj1 = { flex: 1, gap: nativeDefault.space.PX_16 };
createStyles.moreInfo = { gap: nativeDefault.space.PX_4 };
let obj2 = { gap: nativeDefault.space.PX_4 };
createStyles.learnMore = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
let obj3 = { marginTop: nativeDefault.space.PX_12, textAlign: "center", paddingBottom: nativeDefault.space.PX_32 };
createStyles.footer = { marginTop: nativeDefault.space.PX_8 };
let size = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.number = size;
let closure_10 = createStyles.createStyles(createStyles);
let obj5 = { title: null, description: null };
let intl = fn(1114).intl;
obj5.title = intl.string(fn(1114).t["1+E7LP"]);
let intl2 = fn(1114).intl;
obj5.description = intl2.string(fn(1114).t["BXiat/"]);
let items = [obj5, , ];
let obj6 = { title: null, description: null };
let intl3 = fn(1114).intl;
obj6.title = intl3.string(fn(1114).t.iMQXtK);
let intl4 = fn(1114).intl;
obj6.description = intl4.string(fn(1114).t.oQ0vwu);
items[1] = obj6;
const obj7 = { title: null, description: null };
let intl5 = fn(1114).intl;
obj7.title = intl5.string(fn(1114).t["oY/z1Q"]);
let intl6 = fn(1114).intl;
obj7.description = intl6.string(fn(1114).t.wtj02W);
items[2] = obj7;
size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default function AutomatedUnderageAppealActionSheet(onClose) {
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let callback1;
  const tmp = closure_10();
  dependencyMap = tmp;
  let obj = onClose(504);
  items = [callback1];
  const stateFromStores = obj.useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj1 = onClose(504);
  const items1 = [callback1];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1611)().bottom;
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
      const obj = { webviewUrl: tmp, onComplete: callback1, entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      obj.showAgeVerification(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet(timestampProducer);
    }
  }, items4);
  obj = { scrollable: true, startHeight: null, children: null };
  const sum = 425 + bottom;
  const sum1 = sum + classificationId(576).space.PX_16;
  obj.startHeight = sum1 + classificationId(576).space.PX_32;
  obj = { style: tmp.container, children: null };
  obj1 = { style: null, children: null };
  const obj2 = {};
  const merged = Object.assign(tmp.content);
  obj2.paddingBottom = bottom;
  obj1.style = obj2;
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = onClose(1114).intl;
  obj4.children = intl.string(onClose(1114).t["9SDLnj"]);
  const items5 = [closure_8(onClose(4556).Text, obj4), ];
  const obj5 = { variant: "heading-md/medium", color: "text-default", children: null };
  const intl2 = onClose(1114).intl;
  obj5.children = intl2.string(onClose(1114).t["yvx//1"]);
  items5[1] = closure_8(onClose(4556).Text, obj5);
  obj3.children = items5;
  const items6 = [closure_9(callback, obj3), , , ];
  const obj6 = {
    children: closure_8(onClose(5687).TableRowGroup, {
      hasIcons: true,
      children: items.map((item, index) => {
        ({ title, description } = item);
        let obj = { label: title, subLabel: description, icon: null };
        obj = { style: number.number, children: null };
        obj = { variant: "heading-md/semibold", color: "text-brand", children: index + 1 };
        obj.children = React6(Text_Text.Text, obj);
        obj.icon = React6(View, obj);
        return React6(TableRow.TableRow, obj, index);
      })
    })
  };
  items6[1] = closure_8(callback, obj6);
  const obj8 = { style: tmp.moreInfo, children: null };
  const obj9 = { title: null, hasIcons: false, children: null };
  const intl3 = onClose(1114).intl;
  obj9.title = intl3.string(onClose(1114).t.WPwp1b);
  const obj10 = { label: null, subLabel: null, onPress: null, arrow: true, start: true, end: true };
  const intl4 = onClose(1114).intl;
  obj10.label = intl4.string(onClose(1114).t.N9WJMM);
  const intl5 = onClose(1114).intl;
  obj10.subLabel = intl5.string(onClose(1114).t.NHq382);
  obj10.onPress = function onPress() {
    return classificationId(number[19]).openURL(constants.AGE_VERIFICATION_LINK);
  };
  obj9.children = closure_8(onClose(5605).TableRow, obj10);
  obj8.children = closure_8(onClose(5687).TableRowGroup, obj9);
  items6[2] = closure_8(callback, obj8);
  const obj11 = { style: tmp.footer, children: null };
  const obj12 = {
    onPress() {
      return SafetyHubActionCreators.requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1,
    text: null
  };
  const intl6 = onClose(1114).intl;
  obj12.text = intl6.string(onClose(1114).t["54b8V0"]);
  const items7 = [closure_8(onClose(4975).Button, obj12), ];
  const obj13 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore, children: null };
  const intl7 = onClose(1114).intl;
  obj13.children = intl7.format(onClose(1114).t.ZbWsOF, { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK });
  items7[1] = closure_8(onClose(4556).Text, obj13);
  obj11.children = items7;
  items6[3] = closure_9(callback, obj11);
  obj1.children = items6;
  obj.children = closure_9(callback, obj1);
  obj.children = closure_8(onClose(6627).BottomSheetScrollView, obj);
  return closure_8(onClose(7150).BottomSheet, obj);
};