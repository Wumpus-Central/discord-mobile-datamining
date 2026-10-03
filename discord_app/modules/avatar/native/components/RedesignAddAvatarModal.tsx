// === Module 17565: RedesignAddAvatarModal ===

// Module 17565 (RedesignAddAvatarModal)
import nativeDefault from "native" /* 587 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17544 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1085).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, contentContainer: { flexGrow: 2, alignItems: "center" }, growContainer: null, headerContainer: null, buttonContainer: null, title: null, subtitle: null, errorContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.growContainer = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.headerContainer = { display: "flex", alignItems: "center" };
obj2.buttonContainer = { width: "100%" };
let obj4 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.title = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.subtitle = { textAlign: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.errorContainer = { alignSelf: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { alignSelf: "center", paddingTop: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = require("c").c(56);
  const onComplete = route.route.params.onComplete;
  _require = onComplete;
  const tmp4 = closure_12();
  let obj = require("c");
  [tmp6, importDefault] = stateFromStores(noop.useState(false), 2);
  const tmp7 = stateFromStores(noop.useState(), 2);
  first = tmp7[0];
  asyncGeneratorStep = tmp9;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    class A {
      constructor() {
        return closure_1_8.getPendingChanges().pendingAvatar;
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp11 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmp5 = stateFromStores(noop.useState(false), 2);
  stateFromStores = require("initialize").useStateFromStores(tmp11, A);
  if (cResult[2] !== first) {
    let pendingImage;
    if (null != first) {
      let obj2 = { imageUri: null, description: null };
      class A {
        constructor() {
          return closure_1_8.getPendingChanges().pendingAvatar;
        }
      }
      const tmpResult4 = tmp(tmp2[13]);
      obj2.description = tmp(tmp2[15]).generateAvatarDescription();
      pendingImage = tmpResult4.createPendingImage(obj2);
      const tmpResult5 = tmp(tmp2[15]);
    }
    class A {
      constructor() {
        return closure_1_8.getPendingChanges().pendingAvatar;
      }
    }
    cResult[3] = pendingImage;
    let tmp15 = pendingImage;
  } else {
    tmp15 = cResult[3];
  }
  if (tmp15 == null) {
    tmp15 = stateFromStores;
  }
  stateFromStores = tmp15;
  let imageUri;
  if (tmp15 != null) {
    imageUri = tmp15.imageUri;
  }
  if (cResult[4] !== imageUri) {
    const memoizedImageSourceResult = tmp(tmp2[16]).memoizedImageSource(imageUri);
    class A {
      constructor() {
        return closure_1_8.getPendingChanges().pendingAvatar;
      }
    }
    cResult[5] = memoizedImageSourceResult;
    let tmp19 = memoizedImageSourceResult;
    const tmpResult6 = tmp(tmp2[16]);
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    _require = asyncGeneratorStep(async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let base64;
              closure_128_1 = undefined;
              tmp5(false);
              const obj7 = { size };
              c2 = 1;
              v3 = 1;
              const obj9 = { value: tmp2(first[17]).openImagePicker(obj7), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            base64 = value.base64;
            if (null == base64) {
              let pendingImage;
              if (null != base64) {
                const obj11 = { imageUri: base64, description: null };
                const obj = tmp2(first[13]);
                obj11.description = tmp2(first[15]).generateAvatarDescription();
                pendingImage = obj.createPendingImage(obj11);
                const obj3 = tmp2(first[15]);
              }
              closure_128_1 = pendingImage;
              const obj12 = { avatar: closure_128_1 };
              tmp2(first[18]).setPendingChanges(obj12);
              const obj4 = tmp2(first[18]);
              let str = "set";
              if (null == closure_128_1) {
                str = "remove";
              }
              const result = tmp2(first[19]).announcePendingAvatarChange(str);
              v3(undefined);
              v3 = 3;
              const obj6 = tmp2(first[19]);
            }
            tmp5(true);
          }
        } catch (tmp42) {
          v3 = tmp;
          throw tmp42;
        }
      }
    });
    function handleSelectAvatar() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    class A {
      constructor() {
        return closure_1_8.getPendingChanges().pendingAvatar;
      }
    }
    cResult[6] = handleSelectAvatar;
    let tmp21 = handleSelectAvatar;
  } else {
    tmp21 = cResult[6];
  }
  const sum = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
  if (cResult[7] !== sum) {
    let obj3 = { paddingBottom: sum, paddingHorizontal: require("native").space.PX_16 };
    class A {
      constructor() {
        return closure_1_8.getPendingChanges().pendingAvatar;
      }
    }
    cResult[7] = sum;
    cResult[8] = obj3;
    let tmp24 = obj3;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] === tmp4.contentContainer) {
    if (cResult[10] === tmp24) {
      let tmp25 = cResult[11];
    }
    const _Symbol = Symbol;
    class A {
      constructor() {
        return closure_1_8.getPendingChanges().pendingAvatar;
      }
    }
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[20]).intl;
      const stringResult = intl.string(tmp(tmp2[20]).t.XQRWvR);
      class A {
        constructor() {
          return closure_1_8.getPendingChanges().pendingAvatar;
        }
      }
      cResult[12] = stringResult;
    }
    if (cResult[13] !== tmp4.title) {
      let obj4 = { style: tmp26, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      class A {
        constructor() {
          return closure_1_8.getPendingChanges().pendingAvatar;
        }
      }
      const tmp31 = closure_10(tmp(tmp2[21]).Text, obj4);
      cResult[13] = tmp4.title;
      cResult[14] = tmp31;
      let tmp29 = tmp31;
    } else {
      tmp29 = cResult[14];
    }
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[20]).intl;
      const stringResult1 = intl2.string(tmp(tmp2[20]).t.fH9TLT);
      class A {
        constructor() {
          return closure_1_8.getPendingChanges().pendingAvatar;
        }
      }
      cResult[15] = stringResult1;
    }
    if (cResult[16] !== tmp4.subtitle) {
      let obj5 = { style: tmp4.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
      class A {
        constructor() {
          return closure_1_8.getPendingChanges().pendingAvatar;
        }
      }
      const tmp36 = closure_10(tmp(tmp2[21]).Text, obj5);
      cResult[16] = tmp4.subtitle;
      cResult[17] = tmp36;
      let tmp34 = tmp36;
    } else {
      tmp34 = cResult[17];
    }
    if (cResult[18] === tmp29) {
      if (cResult[19] === tmp34) {
        let tmp37 = cResult[20];
      }
      if (cResult[21] === tmp19) {
        if (cResult[22] === tmp41) {
          let tmp42 = cResult[23];
        }
        if (cResult[24] !== tmp6) {
          let tmp45 = tmp6;
          if (tmp6) {
            let obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
            class A {
              constructor() {
                return closure_1_8.getPendingChanges().pendingAvatar;
              }
            }
            obj6.children = obj13.string(tmp(tmp2[20]).t.XyLlVm);
            tmp45 = closure_10(tmp(tmp2[21]).Text, obj6);
          }
          class A {
            constructor() {
              return closure_1_8.getPendingChanges().pendingAvatar;
            }
          }
          cResult[25] = tmp45;
          let tmp44 = tmp45;
        } else {
          tmp44 = cResult[25];
        }
        if (cResult[26] === tmp4.errorContainer) {
          if (cResult[27] === tmp44) {
            let tmp47 = cResult[28];
          }
          if (cResult[29] === tmp4.headerContainer) {
            if (cResult[30] === tmp37) {
              if (cResult[31] === tmp42) {
                if (cResult[32] === tmp47) {
                  let tmp50 = cResult[33];
                }
                if (cResult[34] !== first) {
                  let obj7 = { onAvatarSelect: tmp9, selectedAvatar: null };
                  class A {
                    constructor() {
                      return closure_1_8.getPendingChanges().pendingAvatar;
                    }
                  }
                  const tmp55 = closure_10(require("PresetAvatarSelect"), obj7);
                  cResult[34] = first;
                  cResult[35] = tmp55;
                  let tmp53 = tmp55;
                } else {
                  tmp53 = cResult[35];
                }
                if (cResult[36] !== tmp4.growContainer) {
                  class A {
                    constructor() {
                      return closure_1_8.getPendingChanges().pendingAvatar;
                    }
                  }
                  const tmp59 = closure_10(closure_6, { style: null });
                  cResult[36] = tmp4.growContainer;
                  cResult[37] = tmp59;
                  let tmp56 = tmp59;
                  const obj8 = { style: null };
                } else {
                  tmp56 = cResult[37];
                }
                class A {
                  constructor() {
                    return closure_1_8.getPendingChanges().pendingAvatar;
                  }
                }
                if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[20]).intl;
                  const stringResult2 = intl3.string(tmp(tmp2[20]).t.PDTjLN);
                  class A {
                    constructor() {
                      return closure_1_8.getPendingChanges().pendingAvatar;
                    }
                  }
                  cResult[38] = stringResult2;
                  let tmp60 = stringResult2;
                } else {
                  tmp60 = cResult[38];
                }
                if (cResult[39] === first) {
                  if (cResult[40] === onComplete) {
                    if (cResult[41] === tmp15) {
                      let tmp62 = cResult[42];
                    }
                    if (cResult[43] === tmp62) {
                      if (cResult[44] === tmp63) {
                        let tmp64 = cResult[45];
                      }
                      if (cResult[46] === tmp4.buttonContainer) {
                        if (cResult[47] === tmp64) {
                          let tmp66 = cResult[48];
                        }
                        if (cResult[49] === tmp4.container) {
                          if (cResult[50] === tmp25) {
                            if (cResult[51] === tmp50) {
                              if (cResult[52] === tmp53) {
                                if (cResult[53] === tmp56) {
                                  if (cResult[54] === tmp66) {
                                    let tmp69 = cResult[55];
                                  }
                                  return tmp69;
                                }
                              }
                            }
                          }
                        }
                        class A {
                          constructor() {
                            return closure_1_8.getPendingChanges().pendingAvatar;
                          }
                        }
                        let obj9 = { style: tmp4.container, alwaysBounceVertical: false, contentContainerStyle: tmp25, children: null };
                        const items1 = [tmp50, tmp53, tmp56, tmp66];
                        obj9.children = items1;
                        const tmp71 = closure_11(closure_7, obj9);
                        cResult[49] = tmp4.container;
                        cResult[50] = tmp25;
                        cResult[51] = tmp50;
                        cResult[52] = tmp53;
                        cResult[53] = tmp56;
                        cResult[54] = tmp66;
                        cResult[55] = tmp71;
                        tmp69 = tmp71;
                      }
                      class A {
                        constructor() {
                          return closure_1_8.getPendingChanges().pendingAvatar;
                        }
                      }
                      let obj10 = { style: tmp4.buttonContainer, children: tmp64 };
                      const tmp68 = closure_10(closure_6, obj10);
                      cResult[46] = tmp4.buttonContainer;
                      cResult[47] = tmp64;
                      cResult[48] = tmp68;
                      tmp66 = tmp68;
                    }
                    class A {
                      constructor() {
                        return closure_1_8.getPendingChanges().pendingAvatar;
                      }
                    }
                    let obj11 = { variant: "primary", size: "lg", text: tmp60, onPress: tmp62, disabled: null == tmp15 };
                    const tmp65 = closure_10(tmp(tmp2[24]).Button, obj11);
                    cResult[43] = tmp62;
                    cResult[44] = null == tmp15;
                    cResult[45] = tmp65;
                    tmp64 = tmp65;
                  }
                }
                function le() {
                  let fn = closure_0;
                  if (null == closure_0) {
                    fn = () => {

                    };
                  }
                  return AddAvatarModalActionCreators.handlePressNext(stateFromStores, first, fn);
                }
                cResult[39] = first;
                cResult[40] = onComplete;
                cResult[41] = tmp15;
                cResult[42] = le;
                tmp62 = le;
              }
            }
          }
          class A {
            constructor() {
              return closure_1_8.getPendingChanges().pendingAvatar;
            }
          }
          let obj12 = { style: tmp4.headerContainer, children: null };
          const items2 = [tmp37, tmp42, tmp47];
          obj12.children = items2;
          const tmp52 = closure_11(closure_6, obj12);
          cResult[29] = tmp4.headerContainer;
          cResult[30] = tmp37;
          cResult[31] = tmp42;
          cResult[32] = tmp47;
          cResult[33] = tmp52;
          tmp50 = tmp52;
        }
        class A {
          constructor() {
            return closure_1_8.getPendingChanges().pendingAvatar;
          }
        }
        const obj14 = { style: tmp4.errorContainer, children: tmp44 };
        const tmp49 = closure_10(closure_6, obj14);
        cResult[26] = tmp4.errorContainer;
        cResult[27] = tmp44;
        cResult[28] = tmp49;
        tmp47 = tmp49;
      }
      class A {
        constructor() {
          return closure_1_8.getPendingChanges().pendingAvatar;
        }
      }
      const obj15 = { avatarSource: tmp19, showPendingAvatar: null != tmp15, onSelectAvatar: tmp21 };
      const tmp43 = closure_10(require("TouchableUploadAvatar"), obj15);
      cResult[21] = tmp19;
      cResult[22] = null != tmp15;
      cResult[23] = tmp43;
      tmp42 = tmp43;
    }
    const obj16 = { children: null };
    const items3 = [tmp29, tmp34];
    obj16.children = items3;
    const tmp40 = closure_11(closure_6, obj16);
    cResult[18] = tmp29;
    cResult[19] = tmp34;
    cResult[20] = tmp40;
    tmp37 = tmp40;
  }
  const items4 = [tmp4.contentContainer, tmp24];
  cResult[9] = tmp4.contentContainer;
  cResult[10] = tmp24;
  cResult[11] = items4;
  tmp25 = items4;
  const tmpResult = require("initialize");
}) : ((route) => {
  const onComplete = route.route.params.onComplete;
  importDefault = undefined;
  let pendingImage;
  noop = async function _handleSelectAvatar2() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp5;
            let base64;
            closure_128_1 = undefined;
            importDefault(false);
            const obj7 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj9 = { value: tmp2(7274).openImagePicker(obj7), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          base64 = value.base64;
          if (null == base64) {
            pendingImage = undefined;
            if (null != base64) {
              const obj11 = { imageUri: base64, description: null };
              const obj = tmp2(14415);
              obj11.description = tmp2(7840).generateAvatarDescription();
              pendingImage = obj.createPendingImage(obj11);
              const obj3 = tmp2(7840);
            }
            closure_128_1 = pendingImage;
            const obj12 = { avatar: closure_128_1 };
            tmp2(7835).setPendingChanges(obj12);
            const obj4 = tmp2(7835);
            let str = "set";
            if (null == closure_128_1) {
              str = "remove";
            }
            const result = tmp2(7837).announcePendingAvatarChange(str);
            closure_129_3(undefined);
            c3 = 3;
            const obj6 = tmp2(7837);
          }
          closure_129_1(true);
        }
      } catch (tmp42) {
        c3 = tmp;
        throw tmp42;
      }
    }
  };
  const tmp = closure_12();
  [tmp3, c1] = pendingImage(noop.useState(false), 2);
  const tmp4 = pendingImage(noop.useState(), 2);
  const selectedAvatar = tmp4[0];
  closure_3 = tmp6;
  const tmp2 = pendingImage(noop.useState(false), 2);
  const items = [UserProfileSettingsStore];
  pendingImage = undefined;
  const stateFromStores = onComplete(selectedAvatar[12]).useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    let obj2 = { imageUri: tmp9(tmp8[14]).DEFAULT_AVATARS[selectedAvatar], description: null };
    const tmp9Result = tmp9(tmp8[13]);
    obj2.description = tmp9(tmp8[15]).generateAvatarDescription();
    pendingImage = tmp9Result.createPendingImage(obj2);
    const tmp9Result3 = tmp9(tmp8[15]);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  let obj = onComplete(selectedAvatar[12]);
  let imageUri;
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  let obj3 = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  const items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: null, paddingHorizontal: null };
  const tmp9Result4 = onComplete(selectedAvatar[16]);
  obj4.paddingBottom = require("useSafeAreaInsets")().bottom + require("native").space.PX_16;
  obj4.paddingHorizontal = require("native").space.PX_16;
  items1[1] = obj4;
  obj3.contentContainerStyle = items1;
  let obj5 = { style: tmp.headerContainer, children: null };
  let obj6 = { children: null };
  let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(tmp8[20]).intl;
  obj7.children = intl.string(onComplete(selectedAvatar[20]).t.XQRWvR);
  const items2 = [closure_10(onComplete(selectedAvatar[21]).Text, obj7), ];
  const obj8 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp9(tmp8[20]).intl;
  obj8.children = intl2.string(onComplete(selectedAvatar[20]).t.fH9TLT);
  items2[1] = closure_10(onComplete(selectedAvatar[21]).Text, obj8);
  obj6.children = items2;
  const items3 = [closure_11(closure_6, obj6), , ];
  const memoizedImageSourceResult = onComplete(selectedAvatar[16]).memoizedImageSource(imageUri);
  items3[1] = closure_10(require("TouchableUploadAvatar"), {
    avatarSource: onComplete(selectedAvatar[16]).memoizedImageSource(imageUri),
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  });
  let obj10 = { style: tmp.errorContainer, children: null };
  if (tmp17Result) {
    let obj11 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = tmp9(tmp8[20]).intl;
    obj11.children = intl3.string(tmp9(tmp8[20]).t.XyLlVm);
    tmp17Result = closure_10(tmp9(tmp8[21]).Text, obj11);
  }
  obj10.children = tmp17Result;
  items3[2] = closure_10(closure_6, obj10);
  obj5.children = items3;
  const items4 = [closure_11(closure_6, obj5), closure_10(require("PresetAvatarSelect"), { onAvatarSelect: tmp4[1], selectedAvatar }), closure_10(closure_6, { style: tmp.growContainer }), ];
  const obj13 = { style: tmp.buttonContainer, children: null };
  const obj14 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl4 = tmp9(tmp8[20]).intl;
  obj14.text = intl4.string(onComplete(selectedAvatar[20]).t.PDTjLN);
  obj14.onPress = function onPress() {
    let fn = onComplete;
    if (null == onComplete) {
      fn = () => {

      };
    }
    return AddAvatarModalActionCreators.handlePressNext(pendingImage, first, fn);
  };
  obj14.disabled = null == pendingImage;
  obj13.children = closure_10(onComplete(selectedAvatar[24]).Button, obj14);
  items4[3] = closure_10(closure_6, obj13);
  obj3.children = items4;
  return closure_11(closure_7, obj3);
});