// === Module 12417: DiscoverabilityLanding ===

// Module 12417 (DiscoverabilityLanding)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12326 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles from "TextStyles" /* 5915 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: { flexGrow: 0, justifyContent: "center", marginBottom: 24 }, header: { paddingHorizontal: 16, alignItems: "center" }, image: { width: "100%", marginHorizontal: 0 }, button: { flexGrow: 0, marginHorizontal: 16, marginBottom: 24 }, title: { textAlign: "center", marginTop: 16 }, subtitle: { textAlign: "center", marginTop: 8 }, formRow: obj3, formText: obj4, footerContainer: { flexGrow: 1, width: "100%" }, info: { paddingHorizontal: 16, marginTop: 8, marginBottom: 24 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityLanding.tsx");

export default function DiscoverabilityLanding(onNext) {
  let Button;
  let Label;
  let intl;
  let intl2;
  let intl3;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj14;
  let obj2;
  let obj4;
  let onPress;
  const tmp = closure_9();
  onNext = onNext.onNext;
  const tmp2 = useContactSyncModalStore();
  let allowEmail = tmp2.allowEmail;
  const allowPhone = tmp2.allowPhone;
  const items = [allowPhone, allowEmail];
  const bottom = allowEmail(allowPhone[8])().bottom;
  react = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { allowPhone, allowEmail };
    obj.openLazy(asyncRequire(12418, dependencyMap.paths), "Discoverability Landing", obj2);
  }, items);
  let obj = { style: tmp.container, contentContainerStyle: obj2, children: items2 };
  obj2 = { paddingTop: onNext(allowPhone[12]).NAV_BAR_HEIGHT + 32, paddingBottom: bottom + 16 };
  const obj3 = { style: tmp.headerContainer, children: closure_8(closure_4, obj4) };
  obj4 = { style: tmp.header, children: items1 };
  const obj5 = { resizeMode: "contain", style: tmp.image, source: allowEmail(allowPhone[14]) };
  const tmp9 = allowEmail(allowPhone[13]);
  items1 = [closure_7(tmp9, obj5), , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(onNext(allowPhone[16]).t.n8nw6j) };
  const Text = onNext(allowPhone[15]).Text;
  intl = onNext(allowPhone[16]).intl;
  items1[1] = closure_7(Text, obj6);
  const obj7 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-subtle", children: intl2.string(onNext(allowPhone[16]).t.KMW0kP) };
  const Text2 = onNext(allowPhone[15]).Text;
  intl2 = onNext(allowPhone[16]).intl;
  items1[2] = closure_7(Text2, obj7);
  items2 = [closure_7(closure_4, obj3), ];
  const obj8 = { style: tmp.footerContainer, children: items3 };
  const obj9 = { DEPRECATED_style: tmp.formRow, label: closure_7(Label, obj10), onPress: onNext(allowPhone[18]).toggleDiscoverabilityForUser, selected: allowEmail };
  const FormCheckboxRow = onNext(allowPhone[17]).FormCheckboxRow;
  obj10 = { style: tmp.formText, text: intl3.string(onNext(allowPhone[16]).t.gMUgpv) };
  Label = onNext(allowPhone[17]).FormRow.Label;
  intl3 = onNext(allowPhone[16]).intl;
  if (!allowEmail) {
    allowEmail = allowPhone;
  }
  items3 = [closure_7(FormCheckboxRow, obj9), , ];
  const obj11 = { style: tmp.info, variant: "heading-deprecated-12/medium", color: "text-default", children: items4 };
  const Text3 = tmp6(tmp3[15]).Text;
  const intl4 = tmp6(tmp3[16]).intl;
  items4 = [intl4.string(onNext(allowPhone[16]).t["DGZg+k"]), " ", ];
  const intl5 = tmp6(tmp3[16]).intl;
  const obj12 = {
    learnMoreHook(children, id) {
      const obj = { onPress, variant: "text-sm/medium", color: "text-link", children };
      return metroImportDefault(Text_Text.Text, obj, id);
    }
  };
  items4[2] = intl5.format(onNext(allowPhone[16]).t.QmF5z4, obj12);
  items3[1] = closure_8(Text3, obj11);
  const obj13 = { style: tmp.button, children: closure_7(Button, obj14) };
  obj14 = {
    text: intl6.string(onNext(allowPhone[16]).t.PDTjLN),
    onPress() {
      return onNext();
    },
    grow: true
  };
  Button = tmp6(tmp3[19]).Button;
  intl6 = tmp6(tmp3[16]).intl;
  items3[2] = closure_7(closure_4, obj13);
  items2[1] = closure_8(closure_4, obj8);
  return closure_8(closure_5, obj);
};