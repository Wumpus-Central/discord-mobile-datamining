// discord_app/modules/nuf/native/components/DiscoverabilityLanding.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const useContactSyncModalStore = fn(13025).useContactSyncModalStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  headerContainer: { flexGrow: 0, justifyContent: "center", marginBottom: 24 },
  header: { paddingHorizontal: 16, alignItems: "center" },
  image: { width: "100%", marginHorizontal: 0 },
  button: { flexGrow: 0, marginHorizontal: 16, marginBottom: 24 },
  title: { textAlign: "center", marginTop: 16 },
  subtitle: { textAlign: "center", marginTop: 8 },
  formRow: null,
  formText: null,
  footerContainer: null,
  info: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.formRow = { paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16),
);
obj2.formText = {};
obj2.footerContainer = { flexGrow: 1, width: "100%" };
obj2.info = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24 };
let closure_9 = createStyles.createStyles(obj2);
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13097, dependencyMap.paths), "Discoverability Landing", {
      allowPhone,
      allowEmail,
    });
  }, items);
  const obj = {
    style: tmp.container,
    contentContainerStyle: {
      paddingTop: onNext(allowPhone[12]).NAV_BAR_HEIGHT + 32,
      paddingBottom: allowEmail(allowPhone[8])().bottom + 16,
    },
    children: null,
  };
  const obj3 = { style: tmp.headerContainer, children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { resizeMode: "contain", style: tmp.image, source: null };
  const obj2 = {
    paddingTop: onNext(allowPhone[12]).NAV_BAR_HEIGHT + 32,
    paddingBottom: allowEmail(allowPhone[8])().bottom + 16,
  };
  obj5.source = allowEmail(allowPhone[14]);
  const items1 = [closure_7(allowEmail(allowPhone[13]), obj5), ,];
  const obj6 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = onNext(allowPhone[16]).intl;
  obj6.children = intl.string(onNext(allowPhone[16]).t.n8nw6j);
  items1[1] = closure_7(onNext(allowPhone[15]).Text, obj6);
  const obj7 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl2 = onNext(allowPhone[16]).intl;
  obj7.children = intl2.string(onNext(allowPhone[16]).t.KMW0kP);
  items1[2] = closure_7(onNext(allowPhone[15]).Text, obj7);
  obj4.children = items1;
  obj3.children = closure_8(closure_4, obj4);
  const items2 = [closure_7(closure_4, obj3)];
  const obj8 = { style: tmp.footerContainer, children: null };
  const obj9 = { DEPRECATED_style: tmp.formRow, label: null, onPress: null, selected: null };
  const obj10 = { style: tmp.formText, text: null };
  const intl3 = onNext(allowPhone[16]).intl;
  obj10.text = intl3.string(onNext(allowPhone[16]).t.gMUgpv);
  obj9.label = closure_7(onNext(allowPhone[17]).FormRow.Label, obj10);
  obj9.onPress = onNext(allowPhone[18]).toggleDiscoverabilityForUser;
  if (!allowEmail) {
    allowEmail = allowPhone;
  }
  obj9.selected = allowEmail;
  const items3 = [closure_7(onNext(allowPhone[17]).FormCheckboxRow, obj9), ,];
  const obj11 = { style: tmp.info, variant: "heading-deprecated-12/medium", color: "text-default", children: null };
  const intl4 = tmp6(tmp3[16]).intl;
  const items4 = [intl4.string(onNext(allowPhone[16]).t["DGZg+k"]), " "];
  const intl5 = tmp6(tmp3[16]).intl;
  items4[2] = intl5.format(onNext(allowPhone[16]).t.QmF5z4, {
    learnMoreHook(children, arg1) {
      return React5(Text_Text.Text, { onPress, variant: "text-sm/medium", color: "text-link", children }, arg1);
    },
  });
  obj11.children = items4;
  items3[1] = closure_8(onNext(allowPhone[15]).Text, obj11);
  const obj13 = { style: tmp.button, children: null };
  const obj14 = { text: null, onPress: null, grow: true };
  const intl6 = tmp6(tmp3[16]).intl;
  obj14.text = intl6.string(onNext(allowPhone[16]).t.PDTjLN);
  obj14.onPress = function onPress() {
    return onNext();
  };
  obj13.children = closure_7(onNext(allowPhone[19]).Button, obj14);
  items3[2] = closure_7(closure_4, obj13);
  obj8.children = items3;
  items2[1] = closure_8(closure_4, obj8);
  obj.children = items2;
  return closure_8(closure_5, obj);
}
