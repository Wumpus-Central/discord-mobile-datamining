// === Module 12219: DiscoverabilityLanding ===

// Module 12219 (DiscoverabilityLanding)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { useContactSyncModalStore } from "ContactSyncModes" /* 12148 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importDefaultResult from "createTextStyle" /* 5426 */;

const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, header: null, image: null, button: null, title: null, subtitle: null, formRow: null, formText: null, footerContainer: null, info: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 0, justifyContent: "center", marginBottom: 24 };
createCacheKey[2] = { paddingHorizontal: 16, alignItems: "center" };
createCacheKey[3] = { width: "100%", marginHorizontal: 0 };
createCacheKey[4] = { flexGrow: 0, marginHorizontal: 16, marginBottom: 24 };
createCacheKey[5] = { textAlign: "center", marginTop: 16 };
createCacheKey[6] = { textAlign: "center", marginTop: 8 };
createCacheKey[7] = { paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj2 = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createCacheKey[8] = obj2;
createCacheKey[9] = { flexGrow: 1, width: "100%" };
createCacheKey[10] = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityLanding.tsx");

export default function DiscoverabilityLanding(onNext) {
  const tmp = callback3();
  onNext = onNext.onNext;
  const tmp2 = useContactSyncModalStore();
  let allowEmail = tmp2.allowEmail;
  const allowPhone = tmp2.allowPhone;
  const items = [allowPhone, allowEmail];
  React = React.useCallback(() => {
    let obj = allowEmail(allowPhone[9]);
    obj = { allowPhone, allowEmail };
    obj.openLazy(onNext(allowPhone[11])(allowPhone[10], allowPhone.paths), "Discoverability Landing", obj);
  }, items);
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  obj = { paddingTop: onNext(allowPhone[12]).NAV_BAR_HEIGHT + 32, paddingBottom: allowEmail(allowPhone[8])().bottom + 16 };
  obj[1] = obj;
  obj = { style: tmp.headerContainer, children: null };
  obj1 = { style: tmp.header, children: null };
  const obj2 = { resizeMode: "contain", style: tmp.image, source: allowEmail(allowPhone[14]) };
  const items1 = [callback(allowEmail(allowPhone[13]), obj2), , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = onNext(allowPhone[16]).intl;
  obj3[4] = intl.string(onNext(allowPhone[16]).t.n8nw6j);
  items1[1] = callback(onNext(allowPhone[15]).Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl2 = onNext(allowPhone[16]).intl;
  obj4[3] = intl2.string(onNext(allowPhone[16]).t.KMW0kP);
  items1[2] = callback(onNext(allowPhone[15]).Text, obj4);
  obj1[1] = items1;
  obj[1] = callback2(closure_4, obj1);
  const items2 = [callback(closure_4, obj), ];
  const obj5 = { style: tmp.footerContainer, children: null };
  const obj6 = { DEPRECATED_style: tmp.formRow, label: null, onPress: null, selected: null };
  const obj7 = { style: tmp.formText, text: null };
  const intl3 = onNext(allowPhone[16]).intl;
  obj7[1] = intl3.string(onNext(allowPhone[16]).t.gMUgpv);
  obj6[1] = callback(onNext(allowPhone[17]).FormRow.Label, obj7);
  obj6[2] = onNext(allowPhone[18]).toggleDiscoverabilityForUser;
  if (!allowEmail) {
    allowEmail = allowPhone;
  }
  obj6[3] = allowEmail;
  const items3 = [callback(onNext(allowPhone[17]).FormCheckboxRow, obj6), , ];
  const obj8 = { style: tmp.info, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
  const intl4 = tmp6(tmp3[16]).intl;
  const items4 = [intl4.string(onNext(allowPhone[16]).t["DGZg+k"]), " ", ];
  const intl5 = tmp6(tmp3[16]).intl;
  items4[2] = intl5.format(onNext(allowPhone[16]).t.QmF5z4, {
    learnMoreHook(children) {
      return closure_1_7(onNext(allowPhone[15]).Text, { onPress: closure_3, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  obj8[3] = items4;
  items3[1] = callback2(onNext(allowPhone[15]).Text, obj8);
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null, grow: true };
  const intl6 = tmp6(tmp3[16]).intl;
  obj11[0] = intl6.string(onNext(allowPhone[16]).t.PDTjLN);
  obj11[1] = function onPress() {
    return onNext();
  };
  obj10[1] = callback(onNext(allowPhone[19]).Button, obj11);
  items3[2] = callback(closure_4, obj10);
  obj5[1] = items3;
  items2[1] = callback2(closure_4, obj5);
  obj[2] = items2;
  return callback2(closure_5, obj);
};