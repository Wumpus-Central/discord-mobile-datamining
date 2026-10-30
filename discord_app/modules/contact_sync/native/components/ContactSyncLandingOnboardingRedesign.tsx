// discord_app/modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter.tsx";
import _modDef14212 from "../../../../../_runtime/metro/14212__.js";
import ContactSyncErrorDefault from "ContactSyncError.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const NativePermissionTypes = fn(7932).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { content: null, headerImage: null, title: null, subtitle: null, buttonContainer: null, trailing: null };
let obj3 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: -nativeDefault.space.PX_32 - fn(5581).NAV_BAR_HEIGHT,
};
obj2.content = obj3;
let size = { height: 135, width: 216, marginBottom: nativeDefault.space.PX_24 };
obj2.headerImage = size;
let tmp3 = -nativeDefault.space.PX_32;
obj2.title = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24 };
const size1 = { height: 48, width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonContainer = size1;
let obj5 = { marginBottom: nativeDefault.space.PX_24 };
obj2.trailing = {
  paddingBottom: nativeDefault.space.PX_4,
  justifyContent: "flex-end",
  paddingHorizontal: nativeDefault.space.PX_16,
};
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx",
);

export default function ContactSyncLandingOnboardingRedesign(onNext) {
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp = closure_10();
  const items = [onNext];
  let obj = { children: null };
  const obj2 = { style: tmp.content, children: null };
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              v1 = 1;
              c2 = 1;
              const obj5 = { value: v1(c2[8]).requestPermission(constants.CONTACTS), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
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
    }),
    items,
  );
  let obj3 = { resizeMode: "contain", style: tmp.headerImage, source: _modDef14212 };
  const items1 = [closure_7(FastImageDefault, obj3), , , ,];
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", children: null };
  const intl = onNext(1114).intl;
  obj4.children = intl.string(onNext(1114).t["/G+nci"]);
  items1[1] = closure_7(onNext(5619).Text, obj4);
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", children: null };
  const intl2 = onNext(1114).intl;
  obj5.children = intl2.string(onNext(1114).t.G8zcHt);
  items1[2] = closure_7(onNext(5619).Text, obj5);
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl3 = onNext(1114).intl;
  obj7.text = intl3.string(onNext(1114).t.LhlgY9);
  obj7.onPress = callback;
  obj7.loading = loading;
  obj6.children = closure_7(onNext(5629).Button, obj7);
  items1[3] = closure_7(View, obj6);
  items1[4] = closure_7(ContactSyncErrorDefault, { error });
  obj2.children = items1;
  const items2 = [closure_8(View, obj2)];
  items2[1] = closure_7(View, {
    style: tmp.trailing,
    children: closure_7(RedesignContactSyncDiscoverabilityFooterDefault, {
      discoverabilityEnabled,
      onValueChanged: setDiscoverabilityEnabled,
    }),
  });
  obj.children = items2;
  return closure_8(closure_9, obj);
}
