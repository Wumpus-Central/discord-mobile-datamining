// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx
import openURLDefault from "../../../../lib/openURL.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AppStoreOverlayContent from "AppStoreOverlayContent.tsx";
import AppStoreOverlayBody from "AppStoreOverlayBody.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ headerBar: { zIndex: 1 }, bodyContainer: { flex: 1, minHeight: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppStoreOverlayBottomSheet(metadata) {
      const cResult = metadata(onDismiss[5]).c(38);
      metadata = metadata.metadata;
      ({ trackOverlayCarouselScroll, onOverlaySurfaceClick, onOpen } = metadata);
      onDismiss = metadata.onDismiss;
      const onInstallPress = metadata.onInstallPress;
      closure_7();
      const height = onOpen(onDismiss[6])().height;
      const obj = metadata(onDismiss[5]);
      const tmp = metadata;
      const tmp2 = onDismiss;
      [r10029, noop] = onInstallPress(noop.useState(0), 2);
      const tmp5 = onInstallPress(noop.useState(0), 2);
      const bottomSheetRef1 = metadata(onDismiss[7]).useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      noop.useRef(null);
      if (cResult[0] !== onOpen) {
        const fn = function c() {
          closure_5.current = Date.now();
          onOpen();
        };
        const items = [onOpen];
        cResult[0] = onOpen;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = noop.useEffect(tmp7, tmp8);
      noop.useRef(false);
      if (cResult[3] !== onDismiss) {
        class D {
          constructor() {
            if (!closure_6.current) {
              flag = true;
              tmp.current = true;
              tmp2 = closure_5;
              current = closure_5.current;
              tmp4 = null;
              num = 0;
              tmp3 = onDismiss;
              if (null != current) {
                tmp5 = globalThis;
                _Date = Date;
                num = Date.now() - current;
              }
              tmp3Result = tmp3(num);
            }
            return;
          }
        }
        cResult[3] = onDismiss;
        cResult[4] = D;
      } else {
        class D {
          constructor() {
            if (!closure_6.current) {
              flag = true;
              tmp.current = true;
              tmp2 = closure_5;
              current = closure_5.current;
              tmp4 = null;
              num = 0;
              tmp3 = onDismiss;
              if (null != current) {
                tmp5 = globalThis;
                _Date = Date;
                num = Date.now() - current;
              }
              tmp3Result = tmp3(num);
            }
            return;
          }
        }
      }
      const obj3 = metadata(onDismiss[7]);
      const unmountEffect = tmp(tmp2[8]).useUnmountEffect(D);
      if (cResult[5] === metadata.storeUrl) {
        class D {
          constructor() {
            if (!closure_6.current) {
              flag = true;
              tmp.current = true;
              tmp2 = closure_5;
              current = closure_5.current;
              tmp4 = null;
              num = 0;
              tmp3 = onDismiss;
              if (null != current) {
                tmp5 = globalThis;
                _Date = Date;
                num = Date.now() - current;
              }
              tmp3Result = tmp3(num);
            }
            return;
          }
        }
        if (cResult[8] === metadata.appId) {
          class D {
            constructor() {
              if (!closure_6.current) {
                flag = true;
                tmp.current = true;
                tmp2 = closure_5;
                current = closure_5.current;
                tmp4 = null;
                num = 0;
                tmp3 = onDismiss;
                if (null != current) {
                  tmp5 = globalThis;
                  _Date = Date;
                  num = Date.now() - current;
                }
                tmp3Result = tmp3(num);
              }
              return;
            }
          }
        }
        const fn2 = function w() {
          onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
          AppStoreOverlayContent.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
        };
        cResult[8] = metadata.appId;
        cResult[9] = metadata.platform;
        cResult[10] = metadata.storeUrl;
        cResult[11] = onInstallPress;
        cResult[12] = fn2;
      }
      class U {
        constructor() {
          tmp = onInstallPress(closure_0(closure_2[9]).AppStoreOverlaySurfaces.MAIN_CTA);
          tmp2 = closure_1(closure_2[10])(metadata.storeUrl);
          return;
        }
      }
      cResult[5] = metadata.storeUrl;
      cResult[6] = onInstallPress;
      cResult[7] = U;
      const tmpResult = tmp(tmp2[8]);
    }
  : function AppStoreOverlayBottomSheet(metadata) {
      metadata = metadata.metadata;
      const onOpen = metadata.onOpen;
      const onDismiss = metadata.onDismiss;
      const onInstallPress = metadata.onInstallPress;
      let first;
      let ref2;
      ({ trackOverlayCarouselScroll, onOverlaySurfaceClick } = metadata);
      const tmp = ref2();
      const tmp2 = onInstallPress(first.useState(0), 2);
      first = tmp2[0];
      closure_5 = tmp2[1];
      const bottomSheetRef1 = metadata(onDismiss[7]).useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      const ref = first.useRef(null);
      const items = [onOpen];
      const effect = first.useEffect(() => {
        closure_6.current = Date.now();
        onOpen();
      }, items);
      ref2 = first.useRef(false);
      const items1 = [onDismiss];
      const callback = first.useCallback(() => {
        if (!ref2.current) {
          tmp.current = true;
          const current = ref.current;
          let num = 0;
          if (null != current) {
            const _Date = Date;
            num = Date.now() - current;
          }
          onDismiss(num);
        }
      }, items1);
      const obj = metadata(onDismiss[7]);
      const unmountEffect = metadata(onDismiss[8]).useUnmountEffect(callback);
      const items2 = [metadata.storeUrl, onInstallPress];
      const callback1 = first.useCallback(() => {
        onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
        openURLDefault(metadata.storeUrl);
      }, items2);
      const items3 = [, , ,];
      ({ appId: arr4[0], platform: arr4[1], storeUrl: arr4[2] } = metadata);
      items3[3] = onInstallPress;
      const callback2 = first.useCallback(() => {
        onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
        AppStoreOverlayContent.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
      }, items3);
      const items4 = [first];
      const callback3 = first.useCallback((nativeEvent) => {
        closure_5(nativeEvent.nativeEvent.layout.height);
      }, []);
      const memo = first.useMemo(
        () => ({ paddingBottom: first + AppStoreOverlayBody.APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT }),
        items4,
      );
      const obj3 = {
        ref: bottomSheetRef,
        scrollable: true,
        handleDisabled: true,
        startHeight: onOpen(onDismiss[6])().height * metadata(onDismiss[12]).APP_STORE_OVERLAY_HEIGHT_RATIO,
        onDismiss: callback,
        footer: closure_5(metadata(onDismiss[12]).AppStoreOverlayFooter, {
          onInstallPress: callback1,
          onLayout: callback3,
        }),
        children: null,
      };
      const items5 = [
        closure_5(metadata(onDismiss[13]).ActionSheetHeaderBar, {
          variant: "overlay",
          style: tmp.headerBar,
          onPress: bottomSheetClose,
        }),
      ];
      const obj2 = metadata(onDismiss[8]);
      const obj4 = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
      items5[1] = closure_5(metadata(onDismiss[14]).BottomSheetScrollView, {
        style: tmp.bodyContainer,
        contentContainerStyle: memo,
        children: closure_5(metadata(onDismiss[12]).AppStoreOverlayBody, {
          metadata,
          onOpenReviews: callback2,
          onMediaGetGamePress: callback1,
          onCarouselScroll: trackOverlayCarouselScroll,
          onOverlaySurfaceClick,
        }),
      });
      obj3.children = items5;
      return ref(metadata(onDismiss[15]).BottomSheet, obj3);
    };
