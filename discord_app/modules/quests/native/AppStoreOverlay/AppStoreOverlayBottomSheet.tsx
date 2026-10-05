// === Module 10923: AppStoreOverlayBottomSheet ===

// Module 10923 (AppStoreOverlayBottomSheet)
import openURLDefault from "openURL" /* 4559 */;
import AnalyticsActions from "AnalyticsActions" /* 7202 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 10920 */;
import AppStoreOverlayBody from "AppStoreOverlayBody" /* 10924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, metadata;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ headerBar: { zIndex: 1 }, bodyContainer: { flex: 1, minHeight: 0 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((metadata) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let onDismiss;
  let onOpen;
  let onOverlaySurfaceClick;
  let tmp7;
  let tmp8;
  let trackOverlayCarouselScroll;
  const tmp = metadata;
  let obj = metadata(onDismiss[5]);
  const cResult = obj.c(38);
  metadata = metadata.metadata;
  ({ trackOverlayCarouselScroll, onOverlaySurfaceClick, onOpen } = metadata);
  const tmp2 = onDismiss;
  onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  closure_7();
  const height = onOpen(onDismiss[6])().height;
  const tmp5 = onInstallPress(react.useState(0), 2);
  [r10029, react] = tmp5;
  const obj3 = metadata(onDismiss[7]);
  const bottomSheetRef1 = obj3.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const ref = react.useRef(null);
  if (cResult[0] !== onOpen) {
    const fn = function c() {
      ref.current = Date.now();
      onOpen();
    };
    const items = [onOpen];
    cResult[0] = onOpen;
    let num = 1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(tmp7, tmp8);
  const ref2 = react.useRef(false);
  if (cResult[3] !== onDismiss) {
    class D {
      constructor() {
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
      }
    }
    cResult[3] = onDismiss;
    cResult[4] = D;
  } else {
    class D {
      constructor() {
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
      }
    }
  }
  const tmpResult = tmp(tmp2[8]);
  const unmountEffect = tmpResult.useUnmountEffect(D);
  if (cResult[5] === metadata.storeUrl) {
    class D {
      constructor() {
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
      }
    }
    if (cResult[8] === metadata.appId) {
      class D {
        constructor() {
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
        }
      }
    }
    const fn2 = function w() {
      onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
      const obj = AppStoreOverlayContent;
      obj.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
    };
    cResult[8] = metadata.appId;
    cResult[9] = metadata.platform;
    cResult[10] = metadata.storeUrl;
    cResult[11] = onInstallPress;
    cResult[12] = fn2;
  }
  class U {
    constructor() {
      onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
      openURLDefault(metadata.storeUrl);
    }
  }
  cResult[5] = metadata.storeUrl;
  cResult[6] = onInstallPress;
  cResult[7] = U;
}) : ((metadata) => {
  let bottomSheetClose;
  let bottomSheetRef;
  let items5;
  let onOverlaySurfaceClick;
  let trackOverlayCarouselScroll;
  metadata = metadata.metadata;
  const onOpen = metadata.onOpen;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let first;
  let ref2;
  ({ trackOverlayCarouselScroll, onOverlaySurfaceClick } = metadata);
  const tmp = ref2();
  const height = onOpen(onDismiss[6])().height;
  const tmp2 = onInstallPress(first.useState(0), 2);
  first = tmp2[0];
  let closure_5 = tmp2[1];
  let obj = metadata(onDismiss[7]);
  const bottomSheetRef1 = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const ref = first.useRef(null);
  const items = [onOpen];
  const effect = first.useEffect(() => {
    ref.current = Date.now();
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
  const obj2 = metadata(onDismiss[8]);
  const unmountEffect = obj2.useUnmountEffect(callback);
  const items2 = [metadata.storeUrl, onInstallPress];
  const callback1 = first.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA);
    openURLDefault(metadata.storeUrl);
  }, items2);
  const items3 = [, , , ];
  ({ appId: arr4[0], platform: arr4[1], storeUrl: arr4[2] } = metadata);
  items3[3] = onInstallPress;
  const callback2 = first.useCallback(() => {
    onInstallPress(AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT);
    const obj = AppStoreOverlayContent;
    obj.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items3);
  const items4 = [first];
  const callback3 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo = first.useMemo(() => {
    const obj = { paddingBottom: first + AppStoreOverlayBody.APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT };
    return obj;
  }, items4);
  const obj3 = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: height * metadata(onDismiss[12]).APP_STORE_OVERLAY_HEIGHT_RATIO, onDismiss: callback, footer: closure_5(metadata(onDismiss[12]).AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback3 }), children: items5 };
  BottomSheet = metadata(onDismiss[15]).BottomSheet;
  items5 = [, ];
  const obj4 = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  items5[0] = closure_5(metadata(onDismiss[13]).ActionSheetHeaderBar, obj4);
  const obj5 = { style: tmp.bodyContainer, contentContainerStyle: memo, children: closure_5(metadata(onDismiss[12]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1, onCarouselScroll: trackOverlayCarouselScroll, onOverlaySurfaceClick }) };
  const BottomSheetScrollView = metadata(onDismiss[14]).BottomSheetScrollView;
  items5[1] = closure_5(BottomSheetScrollView, obj5);
  return ref(BottomSheet, obj3);
});
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default tmp3;