import addVersionedDismissedContent from "addVersionedDismissedContent";
import { View } from "expandEventProperties";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import items from "items";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "module_4490";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
({ FamilyCenterSubPages: closure_6, UserLinkStatus: error, UserLinkType: metroImportAll } = items);
({ AnalyticEvents: c9, UserSettingsSections: c10 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const modal = "modal";
let closure_15 = require("DismissibleContent").DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING;
createCacheKey = { container: null, illustration: null, title: null, body: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", paddingTop: require("Themes").space.PX_12 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", paddingTop: require("Themes").space.PX_12 };
let result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningModal.tsx");

export default function ParentalConsentWarningModal(daysRemaining) {
  daysRemaining = daysRemaining.daysRemaining;
  let importDefault;
  let callback;
  let callback1;
  let tmp = createCacheKey();
  let obj = daysRemaining(callback[15]);
  const syncMessages = obj.useSyncMessages(daysRemaining(callback[16]).messagesLoader);
  const effect = callback1.useEffect(() => {
    let obj = ref(callback[17]);
    obj = { surface_type: outer1_14, days_remaining: daysRemaining };
    obj.track(outer1_9.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, obj);
    ref(callback[18]).dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
  }, []);
  importDefault = callback1.useRef(false);
  callback = callback1.useCallback(() => {
    const current = ref.current;
    let flag = !current;
    if (!current) {
      tmp.current = true;
      let obj = daysRemaining(callback[19]);
      obj = { dismissAction: null };
      obj[0] = outer1_11.USER_DISMISS;
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(outer1_15, obj);
      flag = true;
    }
    return flag;
  }, []);
  const items = [daysRemaining, callback];
  callback1 = callback1.useCallback(() => {
    if (callback()) {
      let obj = ref(callback[17]);
      obj = { surface_type: null, days_remaining: null };
      obj[0] = outer1_14;
      obj[1] = daysRemaining;
      obj.track(outer1_9.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, obj);
    }
  }, items);
  const items1 = [callback1];
  const items2 = [callback];
  const callback2 = callback1.useCallback(() => {
    callback1();
    ref(callback[20]).hideActionSheet();
  }, items1);
  const callback3 = callback1.useCallback(() => {
    callback();
    let obj = ref(callback[20]);
    obj.hideActionSheet();
    const values = Object.values(outer1_5.getLinkedUsers());
    if (values.some((link_status) => {
      let tmp = link_status.link_status === constants.PENDING;
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    })) {
      let tmp2Result = tmp2(tmp3[8]);
      const tab = tmp2Result.selectTab(outer1_6.REQUESTS);
      const rootNavigationRef = daysRemaining(tmp3[9]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          obj = { screen: null };
          obj[0] = outer1_10.FAMILY_CENTER;
          tmp9(tmp3[10]).openUserSettings(obj);
          const tmp9Result = tmp9(tmp3[10]);
        }
      }
      tmp2Result = tmp2(tmp3[11]);
      tmp2Result.enqueue(() => {
        let obj = callback(table[10]);
        obj = { screen: constants3.FAMILY_CENTER };
        return obj.openUserSettings(obj);
      });
      const obj5 = daysRemaining(tmp3[9]);
      tmp9 = daysRemaining;
    } else {
      tmp2(tmp3[21]).pushLazy(daysRemaining(tmp3[23])(tmp3[22], tmp3.paths));
      const tmp2Result1 = tmp2(tmp3[21]);
    }
  }, items2);
  const intl = daysRemaining(callback[15]).intl;
  if (0 === daysRemaining) {
    let stringResult = intl.string(tmp2(tmp3[16]).Zo5YZD);
  } else {
    obj = { count: null };
    obj[0] = daysRemaining;
    stringResult = intl.formatToPlainString(tmp2(tmp3[16]).b4sYUn, obj);
  }
  const intl2 = tmp4(tmp3[15]).intl;
  if (0 === daysRemaining) {
    let stringResult1 = intl2.string(tmp2(tmp3[16]).CRZBSY);
  } else {
    obj = { count: null };
    obj[0] = daysRemaining;
    stringResult1 = intl2.formatToPlainString(tmp2(tmp3[16]).mQcGGY, obj);
  }
  const obj1 = { startExpanded: true, onDismiss: callback1, children: null };
  const obj2 = { style: items3, children: null };
  items3 = [tmp.container, { paddingBottom: importDefault(callback[14])().bottom }];
  const obj3 = { spacing: null, children: null };
  obj3[0] = importDefault(callback[13]).space.PX_16;
  const items4 = [callback(View, { style: tmp.illustration, children: callback(daysRemaining(callback[26]).FamilyKeysSpotIllustration, { accessible: false }) }), callback(daysRemaining(callback[27]).Text, { variant: "heading-lg/bold", color: "text-default", style: tmp.title, accessibilityRole: "header", children: stringResult }), callback(daysRemaining(callback[27]).Text, { variant: "text-md/medium", color: "text-default", style: tmp.body, children: stringResult1 }), ];
  const obj7 = { spacing: null, children: null };
  obj7[0] = importDefault(callback[13]).space.PX_8;
  const obj8 = { size: "lg", variant: "primary", grow: true, text: null, onPress: null };
  const intl3 = tmp4(tmp3[15]).intl;
  obj8[3] = intl3.string(importDefault(callback[16]).Kp7sjX);
  obj8[4] = callback3;
  const items5 = [callback(daysRemaining(callback[28]).Button, obj8), ];
  const obj9 = { size: "lg", variant: "secondary", grow: true, text: null, accessibilityHint: null, onPress: null };
  const intl4 = tmp4(tmp3[15]).intl;
  obj9[3] = intl4.string(importDefault(callback[16]).hST5o8);
  const intl5 = tmp4(tmp3[15]).intl;
  obj9[4] = intl5.string(importDefault(callback[16])["4fZtHa"]);
  obj9[5] = callback2;
  items5[1] = callback(daysRemaining(callback[28]).Button, obj9);
  obj7[1] = items5;
  items4[3] = callback2(daysRemaining(callback[25]).Stack, obj7);
  obj3[1] = items4;
  obj2[1] = callback2(daysRemaining(callback[25]).Stack, obj3);
  obj1[2] = callback(View, obj2);
  return callback(daysRemaining(callback[24]).BottomSheet, obj1);
};