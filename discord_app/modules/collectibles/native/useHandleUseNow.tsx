// discord_app/modules/collectibles/native/useHandleUseNow.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const RootNavigatorScreen = fn(11182).RootNavigatorScreen;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHandleUseNow(product) {
      const cResult = require("c").c(22);
      product = product.product;
      require = product;
      const onSuccess = product.onSuccess;
      ({ analyticsLocations, stageCollectibleChangeForEditProfile } = product);
      if (cResult[0] === onSuccess) {
        if (cResult[1] === stageCollectibleChangeForEditProfile) {
          let tmp4 = cResult[2];
        }
        closure_3 = tmp4;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function h() {
            const obj2 = { key: "collectible shop apply error", content: null };
            const intl = product(stageCollectibleChangeForEditProfile[8]).intl;
            obj2.content = intl.string(product(stageCollectibleChangeForEditProfile[8]).t.CKsXk3);
            onSuccess(stageCollectibleChangeForEditProfile[7]).open(obj2);
          };
          cResult[3] = fn2;
          let tmp6 = fn2;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === tmp4) {
          if (cResult[5] === product) {
            let tmp7 = cResult[6];
          }
          const handleUseNow1 = require("hooks/useHandleUseNow").useHandleUseNow(tmp7);
          const handleUseNow = handleUseNow1.handleUseNow;
          ({ isApplying, canUseNow } = handleUseNow1);
          if (cResult[7] === tmp4) {
            if (cResult[8] === product) {
              if (cResult[9] === handleUseNow) {
                if (cResult[10] === stageCollectibleChangeForEditProfile) {
                  let tmp9 = cResult[11];
                }
                if (cResult[12] !== analyticsLocations) {
                  let obj2 = { analyticsLocations };
                  cResult[12] = analyticsLocations;
                  cResult[13] = obj2;
                  let tmp10 = obj2;
                } else {
                  tmp10 = cResult[13];
                }
                const tmp12 = onSuccess(tmp2[10])(tmp10);
                closure_5 = tmp12;
                if (cResult[14] === onSuccess) {
                  if (cResult[15] === tmp12) {
                    let tmp13 = cResult[16];
                  }
                  if (cResult[17] === canUseNow) {
                    if (cResult[18] === tmp13) {
                      if (cResult[19] === tmp9) {
                        if (cResult[20] === isApplying) {
                          let tmp14 = cResult[21];
                        }
                        return tmp14;
                      }
                    }
                  }
                  let obj3 = { handleUseNow: tmp9, isApplying, canUseNow, handleEditProfile: tmp13 };
                  cResult[17] = canUseNow;
                  cResult[18] = tmp13;
                  cResult[19] = tmp9;
                  cResult[20] = isApplying;
                  cResult[21] = obj3;
                  tmp14 = obj3;
                }
                const fn4 = function k() {
                  closure_5();
                  if (null == onSuccess) {
                    ActionSheetActionCreatorsDefault.hideAllActionSheets();
                    ModalActionCreatorsDefault.popAll();
                  } else {
                    tmp2();
                  }
                };
                cResult[14] = onSuccess;
                cResult[15] = tmp12;
                cResult[16] = fn4;
                tmp13 = fn4;
              }
            }
          }
          const fn3 = function y() {
            if (null != stageCollectibleChangeForEditProfile) {
              tmp(product);
              closure_3();
            } else {
              handleUseNow();
            }
          };
          cResult[7] = tmp4;
          cResult[8] = product;
          cResult[9] = handleUseNow;
          cResult[10] = stageCollectibleChangeForEditProfile;
          cResult[11] = fn3;
          tmp9 = fn3;
          const tmpResult = require("hooks/useHandleUseNow");
        }
        const obj4 = { product, onSuccess: tmp4, onError: tmp6 };
        cResult[4] = tmp4;
        cResult[5] = product;
        cResult[6] = obj4;
        tmp7 = obj4;
      }
      const fn = function n() {
        if (null == onSuccess) {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          ModalActionCreatorsDefault.popAll();
          if (null == stageCollectibleChangeForEditProfile) {
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            if (tmp9) {
              rootNavigationRef.navigate(RootNavigatorScreen.YOU);
            }
            tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
          }
        } else {
          tmp();
        }
      };
      cResult[0] = onSuccess;
      cResult[1] = stageCollectibleChangeForEditProfile;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : function useHandleUseNow(analyticsLocations) {
      const product = analyticsLocations.product;
      require = product;
      const stageCollectibleChangeForEditProfile = analyticsLocations.stageCollectibleChangeForEditProfile;
      let onSuccess;
      const items = [onSuccess, stageCollectibleChangeForEditProfile];
      onSuccess = onSuccess.useCallback(() => {
        if (null == onSuccess) {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          ModalActionCreatorsDefault.popAll();
          if (null == stageCollectibleChangeForEditProfile) {
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            if (tmp9) {
              rootNavigationRef.navigate(RootNavigatorScreen.YOU);
            }
            tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
          }
        } else {
          tmp();
        }
      }, items);
      const callback1 = onSuccess.useCallback(() => {
        const obj2 = { key: "collectible shop apply error", content: null };
        const intl = product(stageCollectibleChangeForEditProfile[8]).intl;
        obj2.content = intl.string(product(stageCollectibleChangeForEditProfile[8]).t.CKsXk3);
        onSuccess(stageCollectibleChangeForEditProfile[7]).open(obj2);
      }, []);
      const handleUseNow1 = require("hooks/useHandleUseNow").useHandleUseNow({
        product,
        onSuccess,
        onError: callback1,
      });
      const handleUseNow = handleUseNow1.handleUseNow;
      const items1 = [stageCollectibleChangeForEditProfile, product, onSuccess, handleUseNow];
      ({ isApplying, canUseNow } = handleUseNow1);
      const callback2 = onSuccess.useCallback(() => {
        if (null != stageCollectibleChangeForEditProfile) {
          tmp(product);
          callback();
        } else {
          handleUseNow();
        }
      }, items1);
      const tmp5 = onSuccess(stageCollectibleChangeForEditProfile[10])({
        analyticsLocations: analyticsLocations.analyticsLocations,
      });
      closure_5 = tmp5;
      let obj2 = { handleUseNow: callback2, isApplying, canUseNow, handleEditProfile: null };
      const items2 = [tmp5, onSuccess];
      obj2.handleEditProfile = onSuccess.useCallback(() => {
        closure_5();
        if (null == onSuccess) {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          ModalActionCreatorsDefault.popAll();
        } else {
          tmp2();
        }
      }, items2);
      return obj2;
    };
