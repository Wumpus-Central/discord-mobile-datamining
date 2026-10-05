// === Module 10819: useHandleUseNow ===

// Module 10819 (useHandleUseNow)
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import MainTabsConstants from "MainTabsConstants" /* 10820 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let product;

let react = react_mod;
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let analyticsLocations;
  let canUseNow;
  let closure_3;
  let isApplying;
  let stageCollectibleChangeForEditProfile;
  const tmp2 = stageCollectibleChangeForEditProfile;
  const tmp = require;
  let obj = require("react");
  const cResult = obj.c(22);
  product = product.product;
  require = product;
  const onSuccess = product.onSuccess;
  ({ analyticsLocations, stageCollectibleChangeForEditProfile } = product);
  if (cResult[0] === onSuccess) {
    let tmp4;
    let tmp6;
    if (cResult[1] === stageCollectibleChangeForEditProfile) {
      tmp4 = cResult[2];
    }
    react = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function h() {
        let intl;
        const obj = { key: "collectible shop apply error", content: intl.string(require("intl").t.CKsXk3) };
        const open = onSuccess(stageCollectibleChangeForEditProfile[7]).open;
        onSuccess(stageCollectibleChangeForEditProfile[7]);
        intl = require("intl").intl;
        open(obj);
      };
      cResult[3] = fn2;
      tmp6 = fn2;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === tmp4) {
      let tmp7;
      if (cResult[5] === product) {
        tmp7 = cResult[6];
      }
      const tmpResult = tmp(tmp2[9]);
      const handleUseNow1 = tmpResult.useHandleUseNow(tmp7);
      const handleUseNow = handleUseNow1.handleUseNow;
      ({ isApplying, canUseNow } = handleUseNow1);
      if (cResult[7] === tmp4) {
        if (cResult[8] === product) {
          if (cResult[9] === handleUseNow) {
            let tmp10;
            let tmp11;
            if (cResult[10] === stageCollectibleChangeForEditProfile) {
              tmp10 = cResult[11];
            }
            if (cResult[12] !== analyticsLocations) {
              let obj2 = { analyticsLocations };
              cResult[12] = analyticsLocations;
              cResult[13] = obj2;
              tmp11 = obj2;
            } else {
              tmp11 = cResult[13];
            }
            const tmp13 = onSuccess(tmp2[10])(tmp11);
            let closure_5 = tmp13;
            if (cResult[14] === onSuccess) {
              let tmp14;
              if (cResult[15] === tmp13) {
                tmp14 = cResult[16];
              }
              if (cResult[17] === canUseNow) {
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp10) {
                    let tmp15;
                    if (cResult[20] === isApplying) {
                      tmp15 = cResult[21];
                    }
                    return tmp15;
                  }
                }
              }
              let obj3 = { handleUseNow: tmp10, isApplying, canUseNow, handleEditProfile: tmp14 };
              class A {
                constructor() {
                  if (null != stageCollectibleChangeForEditProfile) {
                    tmp(require);
                    closure_3();
                  } else {
                    handleUseNow();
                  }
                }
              }
              cResult[18] = tmp14;
              cResult[19] = tmp10;
              cResult[20] = isApplying;
              cResult[21] = obj3;
              tmp15 = obj3;
            }
            const fn3 = function k() {
              closure_5();
              if (null == onSuccess) {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideAllActionSheets();
                const obj2 = ModalActionCreatorsDefault;
                obj2.popAll();
              } else {
                tmp2();
              }
            };
            class A {
              constructor() {
                if (null != stageCollectibleChangeForEditProfile) {
                  tmp(require);
                  closure_3();
                } else {
                  handleUseNow();
                }
              }
            }
            cResult[15] = tmp13;
            cResult[16] = fn3;
            tmp14 = fn3;
          }
        }
      }
      class A {
        constructor() {
          if (null != stageCollectibleChangeForEditProfile) {
            tmp(require);
            closure_3();
          } else {
            handleUseNow();
          }
        }
      }
      cResult[7] = tmp4;
      cResult[8] = product;
      cResult[9] = handleUseNow;
      cResult[10] = stageCollectibleChangeForEditProfile;
      cResult[11] = A;
      tmp10 = A;
    }
    tmp8[0] = product;
    tmp8[1] = tmp4;
    tmp8[2] = tmp6;
    cResult[4] = tmp4;
    cResult[5] = product;
    cResult[6] = tmp8;
    tmp7 = tmp8;
  }
  const fn = function n() {
    if (null == onSuccess) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = ModalActionCreatorsDefault;
      obj2.popAll();
      if (null == stageCollectibleChangeForEditProfile) {
        const obj3 = RootNavigationRef;
        const rootNavigationRef = obj3.getRootNavigationRef();
        const tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
        if (tmp9) {
          rootNavigationRef.navigate(RootNavigatorScreen.YOU);
        }
      }
    } else {
      tmp();
    }
  };
  cResult[0] = onSuccess;
  cResult[1] = stageCollectibleChangeForEditProfile;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((product) => {
  let canUseNow;
  let isApplying;
  let items2;
  product = product.product;
  require = product;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let onSuccess;
  const items = [onSuccess, stageCollectibleChangeForEditProfile];
  const analyticsLocations = product.analyticsLocations;
  onSuccess = onSuccess.useCallback(() => {
    if (null == onSuccess) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = ModalActionCreatorsDefault;
      obj2.popAll();
      if (null == stageCollectibleChangeForEditProfile) {
        const obj3 = RootNavigationRef;
        const rootNavigationRef = obj3.getRootNavigationRef();
        const tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
        if (tmp9) {
          rootNavigationRef.navigate(RootNavigatorScreen.YOU);
        }
      }
    } else {
      tmp();
    }
  }, items);
  const callback1 = onSuccess.useCallback(() => {
    let intl;
    const obj = { key: "collectible shop apply error", content: intl.string(require("intl").t.CKsXk3) };
    const open = onSuccess(stageCollectibleChangeForEditProfile[7]).open;
    onSuccess(stageCollectibleChangeForEditProfile[7]);
    intl = require("intl").intl;
    open(obj);
  }, []);
  let obj = require("hooks/useHandleUseNow");
  const handleUseNow1 = obj.useHandleUseNow({ product, onSuccess, onError: callback1 });
  const handleUseNow = handleUseNow1.handleUseNow;
  const items1 = [stageCollectibleChangeForEditProfile, product, onSuccess, handleUseNow];
  ({ isApplying, canUseNow } = handleUseNow1);
  const callback2 = onSuccess.useCallback(() => {
    if (null != stageCollectibleChangeForEditProfile) {
      tmp(require);
      callback();
    } else {
      handleUseNow();
    }
  }, items1);
  const tmp5 = onSuccess(stageCollectibleChangeForEditProfile[10])({ analyticsLocations });
  let closure_5 = tmp5;
  let obj2 = {
    handleUseNow: callback2,
    isApplying,
    canUseNow,
    handleEditProfile: onSuccess.useCallback(() => {
      closure_5();
      if (null == onSuccess) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popAll();
      } else {
        tmp2();
      }
    }, items2)
  };
  items2 = [tmp5, onSuccess];
  return obj2;
});
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = tmp2;