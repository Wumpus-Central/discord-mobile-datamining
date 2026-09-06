// === Module 11501: AppStoreOverlayBottomSheet ===

// Module 11501 (AppStoreOverlayBottomSheet)
import openURLDefault from "openURL" /* 4249 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 11498 */;
import AppStoreOverlayBody from "AppStoreOverlayBody" /* 11502 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ headerBar: { zIndex: 1 }, bodyContainer: { flex: 1, minHeight: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default function AppStoreOverlayBottomSheet(metadata) {
  metadata = metadata.metadata;
  const onOpen = metadata.onOpen;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let first;
  let ref2;
  const tmp = ref2();
  const tmp2 = onInstallPress(first.useState(0), 2);
  first = tmp2[0];
  closure_5 = tmp2[1];
  let obj = metadata(onDismiss[5]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
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
  let obj1 = metadata(onDismiss[6]);
  const unmountEffect = obj1.useUnmountEffect(callback);
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
    AppStoreOverlayContent.openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items3);
  const items4 = [first];
  const callback3 = first.useCallback((nativeEvent) => {
    closure_5(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo = first.useMemo(() => ({ paddingBottom: first + AppStoreOverlayBody.APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT }), items4);
  obj = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: onOpen(onDismiss[4])().height * metadata(onDismiss[10]).APP_STORE_OVERLAY_HEIGHT_RATIO, onDismiss: callback, footer: closure_5(metadata(onDismiss[10]).AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback3 }), children: null };
  obj = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  const items5 = [closure_5(metadata(onDismiss[12]).ActionSheetHeaderBar, obj), ];
  obj1 = { style: tmp.bodyContainer, contentContainerStyle: memo, children: closure_5(metadata(onDismiss[10]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1 }) };
  items5[1] = closure_5(metadata(onDismiss[13]).BottomSheetScrollView, obj1);
  obj.children = items5;
  return ref(metadata(onDismiss[11]).BottomSheet, obj);
};