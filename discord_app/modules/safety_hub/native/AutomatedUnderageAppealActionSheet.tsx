// discord_app/modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx
import Linking from "../../../lib/native/Linking.tsx";
import { View } from "TableRowGroupTitle";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import SafetyHubView from "SafetyHubView";
import jsxProd from "_getSafetyHubData";
import createCacheKey from "createCacheKey";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import { intl as intl5 } from "getSystemLocale";
import { intl as intl6 } from "getSystemLocale";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_6, SafetyHubLinks: error } = SafetyHubView);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, header: null, content: null, moreInfo: null, learnMore: null, footer: null, number: null };
createCacheKey = { flex: 1, paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center" };
createCacheKey[2] = { flex: 1, gap: require("Themes").space.PX_16 };
let obj1 = { flex: 1, gap: require("Themes").space.PX_16 };
createCacheKey[3] = { gap: require("Themes").space.PX_4 };
let obj2 = { gap: require("Themes").space.PX_4 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_12, textAlign: "center", paddingBottom: require("Themes").space.PX_32 };
let obj3 = { marginTop: require("Themes").space.PX_12, textAlign: "center", paddingBottom: require("Themes").space.PX_32 };
createCacheKey[5] = { marginTop: require("Themes").space.PX_8 };
let obj4 = { marginTop: require("Themes").space.PX_8 };
createCacheKey[6] = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { title: null, description: null };
obj6[0] = intl.string(require("getSystemLocale").t["1+E7LP"]);
obj6[1] = intl2.string(require("getSystemLocale").t["BXiat/"]);
let items = [obj6, , ];
let obj7 = { title: null, description: null };
obj7[0] = intl3.string(require("getSystemLocale").t.iMQXtK);
obj7[1] = intl4.string(require("getSystemLocale").t.oQ0vwu);
items[1] = obj7;
let obj8 = { title: null, description: null };
obj8[0] = intl5.string(require("getSystemLocale").t["oY/z1Q"]);
obj8[1] = intl6.string(require("getSystemLocale").t.wtj02W);
items[2] = obj8;
let obj5 = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
let result = require("handleSafetyHubRequestAgeVerificationResetModalAction").fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default function AutomatedUnderageAppealActionSheet(onClose) {
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let dependencyMap;
  let stateFromStores;
  let callback;
  let callback1;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = onClose(589);
  const items = [callback1];
  stateFromStores = obj.useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj1 = onClose(589);
  const items1 = [callback1];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1609)().bottom;
  const items2 = [onClose];
  callback = stateFromStores.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
    classificationId(_undefined[10]).close();
  }, items2);
  const items3 = [callback];
  callback1 = stateFromStores.useCallback(() => {
    classificationId(_undefined[10]).success();
    callback();
    const obj = classificationId(_undefined[10]);
    const result = classificationId(_undefined[10]).start_verification_check();
  }, items3);
  const items4 = [stateFromStores, callback1];
  const effect = stateFromStores.useEffect(() => {
    if ("" !== stateFromStores) {
      let obj = classificationId(_undefined[11]);
      obj = { webviewUrl: null, onComplete: null, entryPoint: null };
      obj[0] = tmp;
      obj[1] = callback1;
      obj[2] = onClose(_undefined[12]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS;
      obj.showAgeVerification(obj);
      classificationId(_undefined[13]).hideActionSheet(outer1_6);
      const obj3 = classificationId(_undefined[13]);
    }
  }, items4);
  obj = { scrollable: true, startHeight: null, children: null };
  const sum = 425 + bottom;
  const sum1 = sum + classificationId(712).space.PX_16;
  obj[1] = sum1 + classificationId(712).space.PX_32;
  obj = { style: tmp.container, children: null };
  obj1 = { style: null, children: null };
  const obj2 = {};
  const merged = Object.assign(tmp.content);
  obj2.paddingBottom = bottom;
  obj1[0] = obj2;
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = onClose(1236).intl;
  obj4[2] = intl.string(onClose(1236).t["9SDLnj"]);
  const items5 = [callback(onClose(4299).Text, obj4), ];
  const obj5 = { variant: "heading-md/medium", color: "text-default", children: null };
  const intl2 = onClose(1236).intl;
  obj5[2] = intl2.string(onClose(1236).t["yvx//1"]);
  items5[1] = callback(onClose(4299).Text, obj5);
  obj3[1] = items5;
  const items6 = [callback2(callback, obj3), , , ];
  const obj6 = { children: null };
  const obj7 = { hasIcons: true, children: null };
  obj7[1] = items.map((arg0, arg1) => {
    let description;
    let title;
    ({ title, description } = arg0);
    let obj = { label: title, subLabel: description, icon: null };
    obj = { style: _undefined.number, children: null };
    obj = { variant: "heading-md/semibold", color: "text-brand", children: arg1 + 1 };
    obj[1] = outer1_8(onClose(_undefined[16]).Text, obj);
    obj[2] = outer1_8(callback, obj);
    return outer1_8(onClose(_undefined[18]).TableRow, obj, arg1);
  });
  obj6[0] = callback(onClose(5767).TableRowGroup, obj7);
  items6[1] = callback(callback, obj6);
  const obj8 = { style: tmp.moreInfo, children: null };
  const obj9 = { title: null, hasIcons: false, children: null };
  const intl3 = onClose(1236).intl;
  obj9[0] = intl3.string(onClose(1236).t.WPwp1b);
  const obj10 = { label: null, subLabel: null, onPress: null, arrow: true, start: true, end: true };
  const intl4 = onClose(1236).intl;
  obj10[0] = intl4.string(onClose(1236).t.N9WJMM);
  const intl5 = onClose(1236).intl;
  obj10[1] = intl5.string(onClose(1236).t.NHq382);
  obj10[2] = function onPress() {
    return classificationId(_undefined[19]).openURL(constants.AGE_VERIFICATION_LINK);
  };
  obj9[2] = callback(onClose(5374).TableRow, obj10);
  obj8[1] = callback(onClose(5767).TableRowGroup, obj9);
  items6[2] = callback(callback, obj8);
  const obj11 = { style: tmp.footer, children: null };
  const obj12 = {
    onPress() {
      return onClose(_undefined[21]).requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1,
    text: null
  };
  const intl6 = onClose(1236).intl;
  obj12[3] = intl6.string(onClose(1236).t["54b8V0"]);
  const items7 = [callback(onClose(4714).Button, obj12), ];
  const obj13 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore, children: null };
  const intl7 = onClose(1236).intl;
  obj13[3] = intl7.format(onClose(1236).t.ZbWsOF, { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK });
  items7[1] = callback(onClose(4299).Text, obj13);
  obj11[1] = items7;
  items6[3] = callback2(callback, obj11);
  obj1[1] = items6;
  obj[1] = callback2(callback, obj1);
  obj[2] = callback(onClose(5399).BottomSheetScrollView, obj);
  return callback(onClose(5397).BottomSheet, obj);
};