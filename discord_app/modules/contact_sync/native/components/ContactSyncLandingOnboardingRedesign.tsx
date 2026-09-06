// === Module 12692: ContactSyncLandingOnboardingRedesign ===

// Module 12692 (ContactSyncLandingOnboardingRedesign)
import nativeDefault from "native" /* 576 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12686 */;
import _modDef12693 from "module_12693" /* 12693 */;
import ContactSyncErrorDefault from "ContactSyncError" /* 12694 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const NativePermissionTypes = fn(4770).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
fn(4560);
let createStyles = { content: null, headerImage: null, title: null, subtitle: null, buttonContainer: null, trailing: null };
createStyles = { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: -nativeDefault.space.PX_32 - fn(5682).NAV_BAR_HEIGHT };
createStyles.content = createStyles;
let size = { height: 135, width: 216, marginBottom: nativeDefault.space.PX_24 };
createStyles.headerImage = size;
const tmp4 = -nativeDefault.space.PX_32;
createStyles.title = { marginBottom: nativeDefault.space.PX_8 };
let obj1 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.subtitle = { marginBottom: nativeDefault.space.PX_24 };
const size1 = { height: 48, width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.buttonContainer = size1;
let obj2 = { marginBottom: nativeDefault.space.PX_24 };
createStyles.trailing = { paddingBottom: nativeDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default function ContactSyncLandingOnboardingRedesign(onNext) {
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp = closure_11();
  const items = [onNext];
  let obj = { children: null };
  obj = { style: tmp.content, children: null };
  obj = { resizeMode: "contain", style: tmp.headerImage, source: null };
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp4;
            let obj1 = v1(c2[8]);
            v1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.requestPermission(constants.CONTACTS);
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            closure_128_0();
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c2 = tmp;
        throw tmp11;
      }
    }
  }), items);
  obj.source = _modDef12693;
  const items1 = [closure_8(closure_6, obj), , , , ];
  let obj1 = { style: tmp.title, variant: "heading-xl/bold", children: null };
  const intl = onNext(1114).intl;
  obj1.children = intl.string(onNext(1114).t["/G+nci"]);
  items1[1] = closure_8(onNext(4556).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", children: null };
  const intl2 = onNext(1114).intl;
  obj2.children = intl2.string(onNext(1114).t.G8zcHt);
  items1[2] = closure_8(onNext(4556).Text, obj2);
  const obj3 = { style: tmp.buttonContainer, children: null };
  const obj4 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl3 = onNext(1114).intl;
  obj4.text = intl3.string(onNext(1114).t.LhlgY9);
  obj4.onPress = callback;
  obj4.loading = loading;
  obj3.children = closure_8(onNext(4975).Button, obj4);
  items1[3] = closure_8(closure_5, obj3);
  items1[4] = closure_8(ContactSyncErrorDefault, { error });
  obj.children = items1;
  const items2 = [closure_9(closure_5, obj), closure_8(closure_5, { style: tmp.trailing, children: closure_8(RedesignContactSyncDiscoverabilityFooterDefault, { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) })];
  obj.children = items2;
  return closure_9(closure_10, obj);
};