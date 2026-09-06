// === Module 11501: AppStoreOverlayBottomSheet ===

// Module 11501 (AppStoreOverlayBottomSheet)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ headerBar: { zIndex: 1 }, bodyContainer: { flex: 1, minHeight: 0 } });
const result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default function AppStoreOverlayBottomSheet(metadata) {
  metadata = metadata.metadata;
  const onOpen = metadata.onOpen;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let first;
  let callback;
  let callback2;
  let callback3;
  const tmp = callback3();
  const tmp2 = onInstallPress(first.useState(0), 2);
  first = tmp2[0];
  callback = tmp2[1];
  let obj = metadata(onDismiss[5]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  callback2 = first.useRef(null);
  const items = [onOpen];
  const effect = first.useEffect(() => {
    closure_6.current = Date.now();
    onOpen();
  }, items);
  callback3 = first.useRef(false);
  const items1 = [onDismiss];
  callback = first.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      const current = ref.current;
      let num = 0;
      if (null != current) {
        const _Date = Date;
        num = Date.now() - current;
      }
      onDismiss(num);
      const tmp3 = onDismiss;
    }
  }, items1);
  obj1 = metadata(onDismiss[6]);
  const unmountEffect = obj1.useUnmountEffect(callback);
  const items2 = [metadata.storeUrl, onInstallPress];
  const callback1 = first.useCallback(() => {
    onInstallPress(metadata(onDismiss[7]).AppStoreOverlaySurfaces.MAIN_CTA);
    onOpen(onDismiss[8])(metadata.storeUrl);
  }, items2);
  const items3 = [, , , ];
  ({ appId: arr4[0], platform: arr4[1], storeUrl: arr4[2] } = metadata);
  items3[3] = onInstallPress;
  callback2 = first.useCallback(() => {
    onInstallPress(metadata(onDismiss[7]).AppStoreOverlaySurfaces.RATING_STAT);
    metadata(onDismiss[9]).openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items3);
  const items4 = [first];
  callback3 = first.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const memo = first.useMemo(() => ({ paddingBottom: first + metadata(onDismiss[10]).APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT }), items4);
  obj = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: onOpen(onDismiss[4])().height * metadata(onDismiss[10]).APP_STORE_OVERLAY_HEIGHT_RATIO, onDismiss: callback, footer: callback(metadata(onDismiss[10]).AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback3 }), children: null };
  obj = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  const items5 = [callback(metadata(onDismiss[12]).ActionSheetHeaderBar, obj), ];
  obj1 = { style: tmp.bodyContainer, contentContainerStyle: memo, children: callback(metadata(onDismiss[10]).AppStoreOverlayBody, { metadata, onOpenReviews: callback2, onMediaGetGamePress: callback1 }) };
  items5[1] = callback(metadata(onDismiss[13]).BottomSheetScrollView, obj1);
  obj[6] = items5;
  return callback2(metadata(onDismiss[11]).BottomSheet, obj);
};