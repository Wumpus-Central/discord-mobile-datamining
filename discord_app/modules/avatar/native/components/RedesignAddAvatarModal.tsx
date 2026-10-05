// === Module 17589: RedesignAddAvatarModal ===

// Module 17589 (RedesignAddAvatarModal)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AddAvatarModalActionCreators from "AddAvatarModalActionCreators" /* 17568 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, importDefault;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flexGrow: 2, alignItems: "center" }, growContainer: obj3, headerContainer: { display: "flex", alignItems: "center" }, buttonContainer: { width: "100%" }, title: obj4, subtitle: { textAlign: "center" }, errorContainer: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { alignSelf: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let closure_3;
  let first;
  let items1;
  let items2;
  let items3;
  let onComplete;
  let pendingChanges;
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp20;
  let tmp22;
  let tmp25;
  let tmp6;
  let tmpResult5;
  const tmp = onComplete;
  let obj = onComplete(first[10]);
  const cResult = obj.c(56);
  onComplete = route.route.params.onComplete;
  const tmp4 = closure_12();
  [tmp6, importDefault] = stateFromStores(react.useState(false), 2);
  stateFromStores(react.useState(false), 2);
  const tmp7 = stateFromStores(react.useState(), 2);
  first = tmp7[0];
  _asyncToGenerator = tmp9;
  const bottom = require("useSafeAreaInsets")().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    class A {
      constructor() {
        return pendingChanges.getPendingChanges().pendingAvatar;
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp11 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult = tmp(first[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp11, A);
  if (cResult[2] !== first) {
    let pendingImage;
    if (null != first) {
      let obj2 = { imageUri: null, description: tmpResult5.generateAvatarDescription() };
      let createPendingImage = tmp(first[13]).createPendingImage;
      tmp(first[13]);
      class A {
        constructor() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        }
      }
      tmpResult5 = tmp(first[15]);
      pendingImage = createPendingImage(obj2);
    }
    class A {
      constructor() {
        return pendingChanges.getPendingChanges().pendingAvatar;
      }
    }
    cResult[3] = pendingImage;
    tmp15 = pendingImage;
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
    const tmpResult6 = tmp(first[16]);
    const memoizedImageSourceResult = tmpResult6.memoizedImageSource(imageUri);
    class A {
      constructor() {
        return pendingChanges.getPendingChanges().pendingAvatar;
      }
    }
    cResult[5] = memoizedImageSourceResult;
    tmp20 = memoizedImageSourceResult;
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let closure_0 = _asyncToGenerator(async () => {
      let closure_1;
      let obj2;
      let obj6;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let base64;
          let pendingImage;
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
              base64 = undefined;
              pendingImage = undefined;
              tmp4(false);
              const obj7 = { size };
              c2 = 1;
              v3 = 1;
              const obj8 = { value: obj6.openImagePicker(obj7), done: false };
              obj6 = tmp(first[17]);
              return obj8;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (null != base64.match(tmp(first[17]).base64GIFRegex)) {
                tmp4(true);
              }
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
            pendingImage = undefined;
            if (null != base64) {
              const obj = { imageUri: base64, description: obj2.generateAvatarDescription() };
              const createPendingImage = tmp(first[13]).createPendingImage;
              const tmp17 = tmp(first[13]);
              obj2 = tmp(first[15]);
              pendingImage = createPendingImage(obj);
            }
            const obj10 = { avatar: pendingImage };
            const obj3 = tmp(first[18]);
            obj3.setPendingChanges(obj10);
            let str = "set";
            const announcePendingAvatarChange = tmp(first[19]).announcePendingAvatarChange;
            const tmp29 = tmp(first[19]);
            if (null == pendingImage) {
              str = "remove";
            }
            const result = announcePendingAvatarChange(str);
            v3(undefined);
          }
        } catch (tmp43) {
          v3 = 3;
          throw tmp43;
        }
      }
    });
    function handleSelectAvatar() {
      return closure_0(...arguments);
    }
    class A {
      constructor() {
        return pendingChanges.getPendingChanges().pendingAvatar;
      }
    }
    cResult[6] = handleSelectAvatar;
    tmp22 = handleSelectAvatar;
  } else {
    tmp22 = cResult[6];
  }
  const container = tmp4.container;
  const sum = bottom + require("native").space.PX_16;
  if (cResult[7] !== sum) {
    let obj3 = { paddingBottom: sum, paddingHorizontal: require("native").space.PX_16 };
    class A {
      constructor() {
        return pendingChanges.getPendingChanges().pendingAvatar;
      }
    }
    cResult[7] = sum;
    cResult[8] = obj3;
    tmp25 = obj3;
  } else {
    tmp25 = cResult[8];
  }
  if (cResult[9] === tmp4.contentContainer) {
    let tmp26;
    let tmp30;
    let tmp35;
    if (cResult[10] === tmp25) {
      tmp26 = cResult[11];
    }
    const _Symbol = Symbol;
    const headerContainer = tmp4.headerContainer;
    class A {
      constructor() {
        return pendingChanges.getPendingChanges().pendingAvatar;
      }
    }
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[20]).intl;
      const stringResult = intl.string(tmp(first[20]).t.XQRWvR);
      class A {
        constructor() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        }
      }
      cResult[12] = stringResult;
    }
    if (cResult[13] !== tmp4.title) {
      let obj4 = { style: tmp27, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      class A {
        constructor() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        }
      }
      const tmp32 = closure_10(tmp(first[21]).Text, obj4);
      cResult[13] = tmp4.title;
      cResult[14] = tmp32;
      tmp30 = tmp32;
    } else {
      tmp30 = cResult[14];
    }
    const _Symbol2 = Symbol;
    const subtitle = tmp4.subtitle;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[20]).intl;
      const stringResult1 = intl2.string(tmp(first[20]).t.fH9TLT);
      class A {
        constructor() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        }
      }
      cResult[15] = stringResult1;
    }
    if (cResult[16] !== tmp4.subtitle) {
      let obj5 = { style: subtitle, variant: "text-sm/medium", color: "text-default", children: null };
      class A {
        constructor() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        }
      }
      const tmp37 = closure_10(tmp(tmp2[21]).Text, obj5);
      cResult[16] = tmp4.subtitle;
      cResult[17] = tmp37;
      tmp35 = tmp37;
    } else {
      tmp35 = cResult[17];
    }
    if (cResult[18] === tmp30) {
      let tmp38;
      if (cResult[19] === tmp35) {
        tmp38 = cResult[20];
      }
      if (cResult[21] === tmp20) {
        let tmp43;
        let tmp45;
        if (cResult[22] === null != tmp15) {
          tmp43 = cResult[23];
        }
        if (cResult[24] !== tmp6) {
          let tmp46 = tmp6;
          if (tmp46) {
            let obj6 = { variant: "text-sm/medium", color: "text-feedback-critical", children: obj12.string(tmp(first[20]).t.XyLlVm) };
            const Text = tmp(tmp2[21]).Text;
            class A {
              constructor() {
                return pendingChanges.getPendingChanges().pendingAvatar;
              }
            }
            tmp46 = closure_10(Text, obj6);
          }
          class A {
            constructor() {
              return pendingChanges.getPendingChanges().pendingAvatar;
            }
          }
          cResult[25] = tmp46;
          tmp45 = tmp46;
        } else {
          tmp45 = cResult[25];
        }
        if (cResult[26] === tmp4.errorContainer) {
          let tmp48;
          if (cResult[27] === tmp45) {
            tmp48 = cResult[28];
          }
          if (cResult[29] === tmp4.headerContainer) {
            if (cResult[30] === tmp38) {
              if (cResult[31] === tmp43) {
                let tmp51;
                let tmp54;
                let tmp57;
                let tmp61;
                if (cResult[32] === tmp48) {
                  tmp51 = cResult[33];
                }
                if (cResult[34] !== first) {
                  let obj7 = { onAvatarSelect: tmp7[1], selectedAvatar: null };
                  class A {
                    constructor() {
                      return pendingChanges.getPendingChanges().pendingAvatar;
                    }
                  }
                  const tmp56 = closure_10(require("PresetAvatarSelect"), obj7);
                  cResult[34] = first;
                  cResult[35] = tmp56;
                  tmp54 = tmp56;
                } else {
                  tmp54 = cResult[35];
                }
                if (cResult[36] !== tmp4.growContainer) {
                  let obj8 = { style: null };
                  class A {
                    constructor() {
                      return pendingChanges.getPendingChanges().pendingAvatar;
                    }
                  }
                  const tmp60 = closure_10(closure_6, obj8);
                  cResult[36] = tmp4.growContainer;
                  cResult[37] = tmp60;
                  tmp57 = tmp60;
                } else {
                  tmp57 = cResult[37];
                }
                class A {
                  constructor() {
                    return pendingChanges.getPendingChanges().pendingAvatar;
                  }
                }
                const buttonContainer = tmp4.buttonContainer;
                if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[20]).intl;
                  const stringResult2 = intl3.string(tmp(first[20]).t.PDTjLN);
                  class A {
                    constructor() {
                      return pendingChanges.getPendingChanges().pendingAvatar;
                    }
                  }
                  cResult[38] = stringResult2;
                  tmp61 = stringResult2;
                } else {
                  tmp61 = cResult[38];
                }
                if (cResult[39] === first) {
                  if (cResult[40] === onComplete) {
                    let tmp63;
                    if (cResult[41] === tmp15) {
                      tmp63 = cResult[42];
                    }
                    if (cResult[43] === tmp63) {
                      let tmp65;
                      if (cResult[44] === null == tmp15) {
                        tmp65 = cResult[45];
                      }
                      if (cResult[46] === tmp4.buttonContainer) {
                        let tmp67;
                        if (cResult[47] === tmp65) {
                          tmp67 = cResult[48];
                        }
                        if (cResult[49] === tmp4.container) {
                          if (cResult[50] === tmp26) {
                            if (cResult[51] === tmp51) {
                              if (cResult[52] === tmp54) {
                                if (cResult[53] === tmp57) {
                                  let tmp70;
                                  if (cResult[54] === tmp67) {
                                    tmp70 = cResult[55];
                                  }
                                  return tmp70;
                                }
                              }
                            }
                          }
                        }
                        class A {
                          constructor() {
                            return pendingChanges.getPendingChanges().pendingAvatar;
                          }
                        }
                        let obj9 = { style: container, alwaysBounceVertical: false, contentContainerStyle: tmp26, children: items1 };
                        items1 = [tmp51, tmp54, tmp57, tmp67];
                        const tmp72 = closure_11(closure_7, obj9);
                        cResult[49] = tmp4.container;
                        cResult[50] = tmp26;
                        cResult[51] = tmp51;
                        cResult[52] = tmp54;
                        cResult[53] = tmp57;
                        cResult[54] = tmp67;
                        cResult[55] = tmp72;
                        tmp70 = tmp72;
                      }
                      class A {
                        constructor() {
                          return pendingChanges.getPendingChanges().pendingAvatar;
                        }
                      }
                      let obj10 = { style: buttonContainer, children: tmp65 };
                      const tmp69 = closure_10(closure_6, obj10);
                      cResult[46] = tmp4.buttonContainer;
                      cResult[47] = tmp65;
                      cResult[48] = tmp69;
                      tmp67 = tmp69;
                    }
                    class A {
                      constructor() {
                        return pendingChanges.getPendingChanges().pendingAvatar;
                      }
                    }
                    const obj11 = { variant: "primary", size: "lg", text: tmp61, onPress: tmp63, disabled: null == tmp15 };
                    const tmp66 = closure_10(tmp(first[24]).Button, obj11);
                    cResult[43] = tmp63;
                    cResult[44] = null == tmp15;
                    cResult[45] = tmp66;
                    tmp65 = tmp66;
                  }
                }
                function le() {
                  let fn = onComplete;
                  const handlePressNext = AddAvatarModalActionCreators.handlePressNext;
                  AddAvatarModalActionCreators;
                  if (null == onComplete) {
                    fn = () => {

                    };
                  }
                  return handlePressNext(stateFromStores, first, fn);
                }
                cResult[39] = first;
                cResult[40] = onComplete;
                cResult[41] = tmp15;
                cResult[42] = le;
                tmp63 = le;
              }
            }
          }
          class A {
            constructor() {
              return pendingChanges.getPendingChanges().pendingAvatar;
            }
          }
          const obj13 = { style: headerContainer, children: items2 };
          items2 = [tmp38, tmp43, tmp48];
          const tmp53 = closure_11(closure_6, obj13);
          cResult[29] = tmp4.headerContainer;
          cResult[30] = tmp38;
          cResult[31] = tmp43;
          cResult[32] = tmp48;
          cResult[33] = tmp53;
          tmp51 = tmp53;
        }
        class A {
          constructor() {
            return pendingChanges.getPendingChanges().pendingAvatar;
          }
        }
        const obj14 = { style: tmp4.errorContainer, children: tmp45 };
        const tmp50 = closure_10(closure_6, obj14);
        cResult[26] = tmp4.errorContainer;
        cResult[27] = tmp45;
        cResult[28] = tmp50;
        tmp48 = tmp50;
      }
      class A {
        constructor() {
          return pendingChanges.getPendingChanges().pendingAvatar;
        }
      }
      const obj15 = { avatarSource: tmp20, showPendingAvatar: null != tmp15, onSelectAvatar: tmp22 };
      const tmp44 = closure_10(require("TouchableUploadAvatar"), obj15);
      cResult[21] = tmp20;
      cResult[22] = null != tmp15;
      cResult[23] = tmp44;
      tmp43 = tmp44;
    }
    const obj16 = { children: items3 };
    items3 = [tmp30, tmp35];
    const tmp41 = closure_11(closure_6, obj16);
    cResult[18] = tmp30;
    cResult[19] = tmp35;
    cResult[20] = tmp41;
    tmp38 = tmp41;
  }
  const items4 = [tmp4.contentContainer, tmp25];
  cResult[9] = tmp4.contentContainer;
  cResult[10] = tmp25;
  cResult[11] = items4;
  tmp26 = items4;
}) : ((route) => {
  let Button;
  let _undefined;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj14;
  let pendingChanges;
  let tmp19Result;
  let tmp3;
  let tmp9Result3;
  const onComplete = route.route.params.onComplete;
  importDefault = undefined;
  let pendingImage;
  let obj = function _handleSelectAvatar2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_1 = tmp4;
              base64 = undefined;
              pendingImage = undefined;
              _undefined(false);
              const obj7 = { size };
              const obj6 = tmp(c2[17]);
              c2 = 1;
              c3 = 1;
              const obj8 = { value: obj6.openImagePicker(obj7), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (null != base64.match(tmp(c2[17]).base64GIFRegex)) {
                closure_129_1(true);
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
            pendingImage = undefined;
            if (null != base64) {
              obj = { imageUri: base64, description: obj2.generateAvatarDescription() };
              const createPendingImage = tmp(c2[13]).createPendingImage;
              const tmp17 = tmp(c2[13]);
              obj2 = tmp(c2[15]);
              pendingImage = createPendingImage(obj);
            }
            const obj10 = { avatar: pendingImage };
            const obj3 = tmp(c2[18]);
            obj3.setPendingChanges(obj10);
            let str = "set";
            const announcePendingAvatarChange = tmp(c2[19]).announcePendingAvatarChange;
            const tmp29 = tmp(c2[19]);
            if (null == pendingImage) {
              str = "remove";
            }
            const result = announcePendingAvatarChange(str);
            closure_129_3(undefined);
          }
        } catch (tmp43) {
          c3 = 3;
          throw tmp43;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  [tmp3, c1] = pendingImage(obj.useState(false), 2);
  pendingImage(obj.useState(false), 2);
  const tmp4 = pendingImage(obj.useState(), 2);
  const selectedAvatar = tmp4[0];
  let closure_3 = tmp6;
  const bottom = require("useSafeAreaInsets")().bottom;
  obj = onComplete(selectedAvatar[12]);
  const items = [UserProfileSettingsStore];
  pendingImage = undefined;
  const stateFromStores = obj.useStateFromStores(items, () => pendingChanges.getPendingChanges().pendingAvatar);
  if (null != selectedAvatar) {
    let obj2 = { imageUri: tmp9(selectedAvatar[14]).DEFAULT_AVATARS[selectedAvatar], description: tmp9Result3.generateAvatarDescription() };
    let createPendingImage = tmp9(selectedAvatar[13]).createPendingImage;
    onComplete(selectedAvatar[13]);
    tmp9Result3 = onComplete(selectedAvatar[15]);
    pendingImage = createPendingImage(obj2);
  }
  if (pendingImage == null) {
    pendingImage = stateFromStores;
  }
  let imageUri;
  const memoizedImageSource = tmp9(selectedAvatar[16]).memoizedImageSource;
  onComplete(selectedAvatar[16]);
  if (pendingImage != null) {
    imageUri = pendingImage.imageUri;
  }
  let obj3 = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: items1, children: items4 };
  items1 = [tmp.contentContainer, ];
  let obj4 = { paddingBottom: bottom + tmp7(selectedAvatar[8]).space.PX_16, paddingHorizontal: tmp7(selectedAvatar[8]).space.PX_16 };
  items1[1] = obj4;
  let obj5 = { style: tmp.headerContainer, children: items3 };
  let obj6 = { children: items2 };
  const memoizedImageSourceResult = memoizedImageSource(imageUri);
  let obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp9(selectedAvatar[20]).t.XQRWvR) };
  const Text = tmp9(tmp8[21]).Text;
  intl = tmp9(tmp8[20]).intl;
  items2 = [closure_10(Text, obj7), ];
  let obj8 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(tmp9(selectedAvatar[20]).t.fH9TLT) };
  const Text2 = tmp9(tmp8[21]).Text;
  intl2 = tmp9(tmp8[20]).intl;
  items2[1] = closure_10(Text2, obj8);
  items3 = [closure_11(closure_6, obj6), , ];
  let obj9 = {
    avatarSource: memoizedImageSourceResult,
    showPendingAvatar: null != pendingImage,
    onSelectAvatar: function handleSelectAvatar() {
      return obj(...arguments);
    }
  };
  items3[1] = closure_10(require("TouchableUploadAvatar"), obj9);
  let obj10 = { style: tmp.errorContainer, children: tmp19Result };
  if (tmp19Result) {
    const obj11 = { variant: "text-sm/medium", color: "text-feedback-critical", children: intl3.string(onComplete(selectedAvatar[20]).t.XyLlVm) };
    const Text3 = tmp9(tmp8[21]).Text;
    intl3 = tmp9(tmp8[20]).intl;
    tmp19Result = closure_10(Text3, obj11);
  }
  items3[2] = closure_10(closure_6, obj10);
  items4 = [closure_11(closure_6, obj5), closure_10(tmp7(selectedAvatar[14]), { onAvatarSelect: tmp6, selectedAvatar }), , ];
  const obj12 = { style: tmp.growContainer };
  items4[2] = closure_10(closure_6, obj12);
  const obj13 = { style: tmp.buttonContainer, children: closure_10(Button, obj14) };
  obj14 = {
    variant: "primary",
    size: "lg",
    text: intl4.string(onComplete(selectedAvatar[20]).t.PDTjLN),
    onPress() {
      let fn = onComplete;
      const handlePressNext = AddAvatarModalActionCreators.handlePressNext;
      AddAvatarModalActionCreators;
      if (null == onComplete) {
        fn = () => {

        };
      }
      return handlePressNext(pendingImage, first, fn);
    },
    disabled: null == pendingImage
  };
  Button = tmp9(tmp8[24]).Button;
  intl4 = tmp9(tmp8[20]).intl;
  items4[3] = closure_10(closure_6, obj13);
  return closure_11(closure_7, obj3);
});
let result = size.fileFinishedImporting("modules/avatar/native/components/RedesignAddAvatarModal.tsx");

export default tmp5;