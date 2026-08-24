// discord_app/modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter.tsx";
import registerAssetDefault from "../../../../../_runtime/11915_registerAsset.js";
import ContactSyncErrorDefault from "ContactSyncError.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NativePermissionTypes } from "../../../native_permissions/NativePermissionConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = { content: null, headerImage: null, title: null, subtitle: null, buttonContainer: null, trailing: null };
createCacheKey = { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: -ThemesDefault.space.PX_32 - require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[0] = createCacheKey;
const tmp4 = -ThemesDefault.space.PX_32;
createCacheKey[1] = { height: 135, width: 216, marginBottom: ThemesDefault.space.PX_24 };
let obj1 = { height: 135, width: 216, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_8 };
let obj2 = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_24 };
let obj3 = { marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[4] = { height: 48, width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
let obj4 = { height: 48, width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[5] = { paddingBottom: ThemesDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj5 = { paddingBottom: ThemesDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default function ContactSyncLandingOnboardingRedesign(onNext) {
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp = callback4();
  const items = [onNext];
  let obj = { children: null };
  obj = { style: tmp.content, children: null };
  obj = { resizeMode: "contain", style: tmp.headerImage, source: null };
  callback = React.useCallback(callback(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        table = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp4;
            obj1 = v0(table[8]);
            v0 = 1;
            table = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.requestPermission(closure_1_7.CONTACTS);
            return obj1;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (arg1) {
            callback();
          }
          table = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        table = tmp;
        throw tmp11;
      }
    }
  }), items);
  obj[2] = registerAssetDefault;
  const items1 = [callback2(closure_6, obj), , , , ];
  obj1 = { style: tmp.title, variant: "heading-xl/bold", children: null };
  const intl = onNext(1236).intl;
  obj1[2] = intl.string(onNext(1236).t["/G+nci"]);
  items1[1] = callback2(onNext(4739).Text, obj1);
  const obj2 = { style: tmp.subtitle, variant: "text-sm/medium", children: null };
  const intl2 = onNext(1236).intl;
  obj2[2] = intl2.string(onNext(1236).t.G8zcHt);
  items1[2] = callback2(onNext(4739).Text, obj2);
  const obj3 = { style: tmp.buttonContainer, children: null };
  const obj4 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl3 = onNext(1236).intl;
  obj4[2] = intl3.string(onNext(1236).t.LhlgY9);
  obj4[3] = callback;
  obj4[4] = loading;
  obj3[1] = callback2(onNext(4750).Button, obj4);
  items1[3] = callback2(closure_5, obj3);
  items1[4] = callback2(ContactSyncErrorDefault, { error });
  obj[1] = items1;
  const items2 = [callback3(closure_5, obj), callback2(closure_5, { style: tmp.trailing, children: callback2(RedesignContactSyncDiscoverabilityFooterDefault, { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) })];
  obj[0] = items2;
  return callback3(closure_10, obj);
};