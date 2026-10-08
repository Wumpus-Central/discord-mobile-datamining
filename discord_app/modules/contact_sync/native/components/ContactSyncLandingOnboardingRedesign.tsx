// === Module 12452: ContactSyncLandingOnboardingRedesign ===

// Module 12452 (ContactSyncLandingOnboardingRedesign)
import nativeDefault from "native" /* 587 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7494 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12446 */;
import _modDef12453 from "module_12453" /* 12453 */;
import ContactSyncErrorDefault from "ContactSyncError" /* 12454 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const NativePermissionTypes = fn(7477).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { content: null, headerImage: null, title: null, subtitle: null, buttonContainer: null, trailing: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: -nativeDefault.space.PX_32 - fn(6261).NAV_BAR_HEIGHT };
obj2.content = obj3;
let size = { height: 135, width: 216, marginBottom: nativeDefault.space.PX_24 };
obj2.headerImage = size;
let tmp4 = -nativeDefault.space.PX_32;
obj2.title = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24 };
const size1 = { height: 48, width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonContainer = size1;
let obj5 = { marginBottom: nativeDefault.space.PX_24 };
obj2.trailing = { paddingBottom: nativeDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { paddingBottom: nativeDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncLandingOnboardingRedesign(onNext) {
  const cResult = require("c").c(35);
  onNext = onNext.onNext;
  _require = onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp4 = closure_11();
  if (cResult[0] !== onNext) {
    _require = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = 1;
              c2 = 1;
              const obj5 = { value: NativePermissionUtilsDefault.requestPermission(constants.CONTACTS), done: false };
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
              tmp4();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    });
    function t1() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = onNext;
    cResult[1] = t1;
    let tmp5 = t1;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.headerImage) {
    const obj2 = { resizeMode: "contain", style: tmp4.headerImage, source: _modDef12453 };
    const tmp11 = closure_8(closure_6, obj2);
    cResult[2] = tmp4.headerImage;
    cResult[3] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["/G+nci"]);
    cResult[4] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    let obj3 = { style: tmp4.title, variant: "heading-xl/bold", children: tmp12 };
    const tmp16 = closure_8(tmp(5086).Text, obj3);
    cResult[5] = tmp4.title;
    cResult[6] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.G8zcHt);
    cResult[7] = stringResult1;
    let tmp17 = stringResult1;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitle) {
    let obj4 = { style: tmp4.subtitle, variant: "text-sm/medium", children: tmp17 };
    const tmp21 = closure_8(tmp(5086).Text, obj4);
    cResult[8] = tmp4.subtitle;
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.LhlgY9);
    cResult[10] = stringResult2;
    let tmp22 = stringResult2;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] === tmp5) {
    if (cResult[12] === loading) {
      let tmp24 = cResult[13];
    }
    if (cResult[14] === tmp4.buttonContainer) {
      if (cResult[15] === tmp24) {
        let tmp26 = cResult[16];
      }
      if (cResult[17] !== error) {
        let obj5 = { error };
        const tmp33 = closure_8(ContactSyncErrorDefault, obj5);
        cResult[17] = error;
        cResult[18] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[18];
      }
      if (cResult[19] === tmp4.content) {
        if (cResult[20] === tmp26) {
          if (cResult[21] === tmp30) {
            if (cResult[22] === tmp7) {
              if (cResult[23] === tmp14) {
                if (cResult[24] === tmp19) {
                  let tmp34 = cResult[25];
                }
                if (cResult[26] === discoverabilityEnabled) {
                  if (cResult[27] === setDiscoverabilityEnabled) {
                    let tmp38 = cResult[28];
                  }
                  if (cResult[29] === tmp4.trailing) {
                    if (cResult[30] === tmp38) {
                      let tmp42 = cResult[31];
                    }
                    if (cResult[32] === tmp34) {
                      if (cResult[33] === tmp42) {
                        let tmp46 = cResult[34];
                      }
                      return tmp46;
                    }
                    const obj6 = { children: null };
                    const items = [tmp34, tmp42];
                    obj6.children = items;
                    const tmp49 = closure_9(closure_10, obj6);
                    cResult[32] = tmp34;
                    cResult[33] = tmp42;
                    cResult[34] = tmp49;
                    tmp46 = tmp49;
                  }
                  const obj7 = { style: tmp4.trailing, children: tmp38 };
                  const tmp45 = closure_8(closure_5, obj7);
                  cResult[29] = tmp4.trailing;
                  cResult[30] = tmp38;
                  cResult[31] = tmp45;
                  tmp42 = tmp45;
                }
                const obj8 = { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled };
                const tmp41 = closure_8(RedesignContactSyncDiscoverabilityFooterDefault, obj8);
                cResult[26] = discoverabilityEnabled;
                cResult[27] = setDiscoverabilityEnabled;
                cResult[28] = tmp41;
                tmp38 = tmp41;
              }
            }
          }
        }
      }
      const obj9 = { style: tmp4.content, children: null };
      const items1 = [tmp7, tmp14, tmp19, tmp26, tmp30];
      obj9.children = items1;
      const tmp37 = closure_9(closure_5, obj9);
      cResult[19] = tmp4.content;
      cResult[20] = tmp26;
      cResult[21] = tmp30;
      cResult[22] = tmp7;
      cResult[23] = tmp14;
      cResult[24] = tmp19;
      cResult[25] = tmp37;
      tmp34 = tmp37;
    }
    const obj10 = { style: tmp4.buttonContainer, children: tmp24 };
    const tmp29 = closure_8(closure_5, obj10);
    cResult[14] = tmp4.buttonContainer;
    cResult[15] = tmp24;
    cResult[16] = tmp29;
    tmp26 = tmp29;
  }
  const tmp25 = closure_8(require("components/Button/Button").Button, { variant: "primary", size: "lg", text: tmp22, onPress: tmp5, loading });
  cResult[11] = tmp5;
  cResult[12] = loading;
  cResult[13] = tmp25;
  tmp24 = tmp25;
  let obj = require("c");
}) : (function ContactSyncLandingOnboardingRedesign(onNext) {
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp = closure_11();
  const items = [onNext];
  let obj = { children: null };
  const obj2 = { style: tmp.content, children: null };
  let obj3 = { resizeMode: "contain", style: tmp.headerImage, source: null };
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "IconComponent", done: null };
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
            const obj5 = { value: v1(c2[10]).requestPermission(constants.CONTACTS), done: false };
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp11) {
        c2 = tmp;
        throw tmp11;
      }
    }
  }), items);
  obj3.source = _modDef12453;
  const items1 = [closure_8(closure_6, obj3), , , , ];
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", children: null };
  const intl = onNext(1126).intl;
  obj4.children = intl.string(onNext(1126).t["/G+nci"]);
  items1[1] = closure_8(onNext(5086).Text, obj4);
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", children: null };
  const intl2 = onNext(1126).intl;
  obj5.children = intl2.string(onNext(1126).t.G8zcHt);
  items1[2] = closure_8(onNext(5086).Text, obj5);
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl3 = onNext(1126).intl;
  obj7.text = intl3.string(onNext(1126).t.LhlgY9);
  obj7.onPress = callback;
  obj7.loading = loading;
  obj6.children = closure_8(onNext(5375).Button, obj7);
  items1[3] = closure_8(closure_5, obj6);
  items1[4] = closure_8(ContactSyncErrorDefault, { error });
  obj2.children = items1;
  const items2 = [closure_9(closure_5, obj2), closure_8(closure_5, { style: tmp.trailing, children: closure_8(RedesignContactSyncDiscoverabilityFooterDefault, { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) })];
  obj.children = items2;
  return closure_9(closure_10, obj);
});