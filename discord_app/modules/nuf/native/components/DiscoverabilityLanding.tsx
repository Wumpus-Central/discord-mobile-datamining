// === Module 12748: DiscoverabilityLanding ===

// Module 12748 (DiscoverabilityLanding)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const useContactSyncModalStore = fn(12677).useContactSyncModalStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerContainer: null, header: null, image: null, button: null, title: null, subtitle: null, formRow: null, formText: null, footerContainer: null, info: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.headerContainer = { flexGrow: 0, justifyContent: "center", marginBottom: 24 };
createStyles.header = { paddingHorizontal: 16, alignItems: "center" };
createStyles.image = { width: "100%", marginHorizontal: 0 };
createStyles.button = { flexGrow: 0, marginHorizontal: 16, marginBottom: 24 };
createStyles.title = { textAlign: "center", marginTop: 16 };
createStyles.subtitle = { textAlign: "center", marginTop: 8 };
createStyles.formRow = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
createStyles.formText = {};
createStyles.footerContainer = { flexGrow: 1, width: "100%" };
createStyles.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityLanding.tsx");

export default function DiscoverabilityLanding(onNext) {
  const tmp = closure_9();
  onNext = onNext.onNext;
  const tmp2 = useContactSyncModalStore();
  let allowEmail = tmp2.allowEmail;
  const allowPhone = tmp2.allowPhone;
  const items = [allowPhone, allowEmail];
  noop = noop.useCallback(() => {
    const obj = { allowPhone, allowEmail };
    obj.openLazy(asyncRequireImpl(12749, dependencyMap.paths), "Discoverability Landing", obj);
  }, items);
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  obj = { paddingTop: onNext(allowPhone[12]).NAV_BAR_HEIGHT + 32, paddingBottom: allowEmail(allowPhone[8])().bottom + 16 };
  obj.contentContainerStyle = obj;
  obj = { style: tmp.headerContainer, children: null };
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { resizeMode: "contain", style: tmp.image, source: allowEmail(allowPhone[14]) };
  const items1 = [closure_7(allowEmail(allowPhone[13]), obj2), , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = onNext(allowPhone[16]).intl;
  obj3.children = intl.string(onNext(allowPhone[16]).t.n8nw6j);
  items1[1] = closure_7(onNext(allowPhone[15]).Text, obj3);
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl2 = onNext(allowPhone[16]).intl;
  obj4.children = intl2.string(onNext(allowPhone[16]).t.KMW0kP);
  items1[2] = closure_7(onNext(allowPhone[15]).Text, obj4);
  obj1.children = items1;
  obj.children = closure_8(closure_4, obj1);
  const items2 = [closure_7(closure_4, obj), ];
  const obj5 = { style: tmp.footerContainer, children: null };
  const obj6 = { DEPRECATED_style: tmp.formRow, label: null, onPress: null, selected: null };
  const obj7 = { style: tmp.formText, text: null };
  const intl3 = onNext(allowPhone[16]).intl;
  obj7.text = intl3.string(onNext(allowPhone[16]).t.gMUgpv);
  obj6.label = closure_7(onNext(allowPhone[17]).FormRow.Label, obj7);
  obj6.onPress = onNext(allowPhone[18]).toggleDiscoverabilityForUser;
  if (!allowEmail) {
    allowEmail = allowPhone;
  }
  obj6.selected = allowEmail;
  const items3 = [closure_7(onNext(allowPhone[17]).FormCheckboxRow, obj6), , ];
  const obj8 = { style: tmp.info, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
  const intl4 = tmp6(tmp3[16]).intl;
  const items4 = [intl4.string(onNext(allowPhone[16]).t["DGZg+k"]), " ", ];
  const intl5 = tmp6(tmp3[16]).intl;
  items4[2] = intl5.format(onNext(allowPhone[16]).t.QmF5z4, {
    learnMoreHook(children, arg1) {
      return React5(Text_Text.Text, { onPress, variant: "text-sm/medium", color: "text-link", children }, arg1);
    }
  });
  obj8.children = items4;
  items3[1] = closure_8(onNext(allowPhone[15]).Text, obj8);
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null, grow: true };
  const intl6 = tmp6(tmp3[16]).intl;
  obj11.text = intl6.string(onNext(allowPhone[16]).t.PDTjLN);
  obj11.onPress = function onPress() {
    return onNext();
  };
  obj10.children = closure_7(onNext(allowPhone[19]).Button, obj11);
  items3[2] = closure_7(closure_4, obj10);
  obj5.children = items3;
  items2[1] = closure_8(closure_4, obj5);
  obj.children = items2;
  return closure_8(closure_5, obj);
};