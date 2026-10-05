// === Module 12341: ContactSyncLandingOnboardingRedesign ===

// Module 12341 (ContactSyncLandingOnboardingRedesign)
import nativeDefault from "native" /* 587 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7275 */;
import RedesignContactSyncDiscoverabilityFooterDefault from "RedesignContactSyncDiscoverabilityFooter" /* 12335 */;
import AssetRegistryDefault from "AssetRegistry" /* 12342 */;
import ContactSyncErrorDefault from "ContactSyncError" /* 12343 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, c2, onNext;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let tmp5;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerImage: size, title: obj3, subtitle: obj4, buttonContainer: size1, trailing: obj5 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: tmp5 - NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
tmp5 = -nativeDefault.space.PX_32;
size = { height: 135, width: 216, marginBottom: nativeDefault.space.PX_24 };
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
size1 = { height: 48, width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingBottom: nativeDefault.space.PX_4, justifyContent: "flex-end", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((onNext) => {
  let discoverabilityEnabled;
  let error;
  let items;
  let items1;
  let loading;
  let setDiscoverabilityEnabled;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp22;
  let tmp5;
  let tmp7;
  let obj = onNext(576);
  const cResult = obj.c(35);
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp4 = closure_11();
  if (cResult[0] !== onNext) {
    let closure_0 = _asyncToGenerator(async () => {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
              const obj5 = { value: obj2.requestPermission(constants.CONTACTS), done: false };
              obj2 = NativePermissionUtilsDefault;
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
              tmp3();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = onNext;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const content = tmp4.content;
  if (cResult[2] !== tmp4.headerImage) {
    let obj2 = { resizeMode: "contain", style: tmp4.headerImage, source: AssetRegistryDefault };
    const tmp11 = closure_8(closure_6, obj2);
    cResult[2] = tmp4.headerImage;
    cResult[3] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  const title = tmp4.title;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(onNext(1126).t["/G+nci"]);
    cResult[4] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    let obj3 = { style: title, variant: "heading-xl/bold", children: tmp12 };
    const tmp16 = closure_8(onNext(4886).Text, obj3);
    cResult[5] = tmp4.title;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  const subtitle = tmp4.subtitle;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(onNext(1126).t.G8zcHt);
    cResult[7] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitle) {
    let obj4 = { style: subtitle, variant: "text-sm/medium", children: tmp17 };
    const tmp21 = closure_8(onNext(4886).Text, obj4);
    cResult[8] = tmp4.subtitle;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  const buttonContainer = tmp4.buttonContainer;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(onNext(1126).t.LhlgY9);
    cResult[10] = stringResult2;
    tmp22 = stringResult2;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] === tmp5) {
    let tmp24;
    if (cResult[12] === loading) {
      tmp24 = cResult[13];
    }
    if (cResult[14] === tmp4.buttonContainer) {
      let tmp26;
      let tmp30;
      if (cResult[15] === tmp24) {
        tmp26 = cResult[16];
      }
      if (cResult[17] !== error) {
        let obj5 = { error };
        const tmp33 = closure_8(ContactSyncErrorDefault, obj5);
        cResult[17] = error;
        cResult[18] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[18];
      }
      if (cResult[19] === tmp4.content) {
        if (cResult[20] === tmp26) {
          if (cResult[21] === tmp30) {
            if (cResult[22] === tmp7) {
              if (cResult[23] === tmp14) {
                let tmp34;
                if (cResult[24] === tmp19) {
                  tmp34 = cResult[25];
                }
                if (cResult[26] === discoverabilityEnabled) {
                  let tmp38;
                  if (cResult[27] === setDiscoverabilityEnabled) {
                    tmp38 = cResult[28];
                  }
                  if (cResult[29] === tmp4.trailing) {
                    let tmp42;
                    if (cResult[30] === tmp38) {
                      tmp42 = cResult[31];
                    }
                    if (cResult[32] === tmp34) {
                      let tmp46;
                      if (cResult[33] === tmp42) {
                        tmp46 = cResult[34];
                      }
                      return tmp46;
                    }
                    const obj6 = { children: items };
                    items = [tmp34, tmp42];
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
      const obj9 = { style: content, children: items1 };
      items1 = [tmp7, tmp14, tmp19, tmp26, tmp30];
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
    const obj10 = { style: buttonContainer, children: tmp24 };
    const tmp29 = closure_8(closure_5, obj10);
    cResult[14] = tmp4.buttonContainer;
    cResult[15] = tmp24;
    cResult[16] = tmp29;
    tmp26 = tmp29;
  }
  const tmp25 = closure_8(onNext(5594).Button, { variant: "primary", size: "lg", text: tmp22, onPress: tmp5, loading });
  cResult[11] = tmp5;
  cResult[12] = loading;
  cResult[13] = tmp25;
  tmp24 = tmp25;
}) : ((onNext) => {
  let Button;
  let discoverabilityEnabled;
  let error;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let loading;
  let obj7;
  let setDiscoverabilityEnabled;
  onNext = onNext.onNext;
  ({ loading, error, discoverabilityEnabled, setDiscoverabilityEnabled } = onNext);
  const tmp = closure_11();
  const items = [onNext];
  let obj = { children: items2 };
  let obj2 = { style: tmp.content, children: items1 };
  let obj3 = { resizeMode: "contain", style: tmp.headerImage, source: AssetRegistryDefault };
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            let closure_0 = tmp3;
            const obj2 = v1(c2[10]);
            v1 = 1;
            c2 = 1;
            const obj5 = { value: obj2.requestPermission(constants.CONTACTS), done: false };
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
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  }), items);
  items1 = [closure_8(closure_6, obj3), , , , ];
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", children: intl.string(onNext(1126).t["/G+nci"]) };
  const Text = onNext(4886).Text;
  intl = onNext(1126).intl;
  items1[1] = closure_8(Text, obj4);
  let obj5 = { style: tmp.subtitle, variant: "text-sm/medium", children: intl2.string(onNext(1126).t.G8zcHt) };
  const Text2 = onNext(4886).Text;
  intl2 = onNext(1126).intl;
  items1[2] = closure_8(Text2, obj5);
  const obj6 = { style: tmp.buttonContainer, children: closure_8(Button, obj7) };
  obj7 = { variant: "primary", size: "lg", text: intl3.string(onNext(1126).t.LhlgY9), onPress: callback, loading };
  Button = onNext(5594).Button;
  intl3 = onNext(1126).intl;
  items1[3] = closure_8(closure_5, obj6);
  items1[4] = closure_8(ContactSyncErrorDefault, { error });
  items2 = [closure_9(closure_5, obj2), ];
  const obj8 = { style: tmp.trailing, children: closure_8(RedesignContactSyncDiscoverabilityFooterDefault, { discoverabilityEnabled, onValueChanged: setDiscoverabilityEnabled }) };
  items2[1] = closure_8(closure_5, obj8);
  return closure_9(closure_10, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingOnboardingRedesign.tsx");

export default tmp6;