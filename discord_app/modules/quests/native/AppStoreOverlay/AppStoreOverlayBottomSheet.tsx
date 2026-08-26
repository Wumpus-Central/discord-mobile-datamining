// === Module 10731: AppStoreOverlayFooter ===

// Module 10731 (AppStoreOverlayFooter)
import ThemesDefault from "Themes" /* 712 */;
import LinearGradientDefault from "LinearGradient" /* 4891 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
function AppStoreOverlayFooter(arg0) {
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = callback3();
  let obj = token(4165);
  token = obj.useToken(ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  obj = { style: tmp.footer, onLayout, children: null };
  const memo = React.useMemo(() => {
    const obj = closure_1_1(closure_1_2[8])(token);
    const items = [closure_1_1(closure_1_2[8])(token).alpha(0).hex(), token];
    return items;
  }, items);
  obj = { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: constants.START, end: constants.END };
  const items1 = [callback(LinearGradientDefault, obj), ];
  obj1 = { bottom: true, children: null };
  const obj2 = { size: "lg", text: null, onPress: null };
  const intl = token(1236).intl;
  obj2[1] = intl.string(token(1236).t.lwQdjB);
  obj2[2] = onInstallPress;
  obj1[1] = callback(token(4879).Button, obj2);
  items1[1] = callback(token(5500).SafeAreaPaddingView, obj1);
  obj[2] = items1;
  return callback2(View, obj);
}
({ MEDIA_MODAL_KEY: closure_6, VerticalGradient: error } = ME);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { headerBar: { zIndex: 1 }, container: null, containerWithHeader: null, iconContainer: null, icon: null, textBlock: null, mediaSection: null, header: null, bodyContainer: null, footer: null, footerGradient: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingTop: 110 };
createCacheKey[3] = { width: 84, height: 84, borderRadius: ThemesDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[4] = { width: 72, height: 72 };
let obj1 = { width: 84, height: 84, borderRadius: ThemesDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[5] = { gap: ThemesDefault.space.PX_4 };
let obj2 = { gap: ThemesDefault.space.PX_4 };
createCacheKey[6] = { gap: ThemesDefault.space.PX_8 };
createCacheKey[7] = { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 };
createCacheKey[8] = { flex: 1, minHeight: 0 };
let obj3 = { gap: ThemesDefault.space.PX_8 };
createCacheKey[9] = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[10] = { position: "absolute", top: -64, right: 0, left: 0, height: 64 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default function AppStoreOverlayBottomSheet(metadata) {
  metadata = metadata.metadata;
  const onOpen = metadata.onOpen;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let callback1;
  const tmp = callback3();
  let obj = first;
  const tmp4 = onInstallPress(first.useState(0), 2);
  first = tmp4[0];
  closure_5 = tmp4[1];
  obj1 = metadata(onDismiss[14]);
  bottomSheetRef = obj1.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  closure_6 = first.useRef(null);
  const items = [onOpen];
  const effect = first.useEffect(() => {
    closure_6.current = Date.now();
    onOpen();
  }, items);
  closure_7 = first.useRef(false);
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
      const tmp3 = onDismiss;
    }
  }, items1);
  let obj2 = metadata(onDismiss[15]);
  const unmountEffect = obj2.useUnmountEffect(callback);
  const items2 = [metadata.storeUrl, onInstallPress];
  callback1 = first.useCallback(() => {
    onInstallPress();
    onOpen(onDismiss[16])(metadata.storeUrl);
  }, items2);
  const items3 = [callback1];
  const callback2 = first.useCallback(() => {
    onOpen(onDismiss[17]).hideActionSheet(closure_6);
    callback1();
  }, items3);
  let headerUrl = metadata.headerUrl;
  callback3 = first.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (headerUrl == null) {
    headerUrl = null;
  }
  const items4 = [first];
  const memo = obj.useMemo(() => ({ paddingBottom: first + 64 }), items4);
  obj = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: 0.7 * onOpen(onDismiss[13])().height, onDismiss: callback, footer: callback1(AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback3 }), children: null };
  obj = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  const items5 = [callback1(metadata(onDismiss[19]).ActionSheetHeaderBar, obj), ];
  obj1 = { style: tmp.bodyContainer, contentContainerStyle: memo, children: null };
  let tmp17Result = null != headerUrl;
  if (tmp17Result) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    const obj3 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj4 = { uri: null };
    obj4[0] = headerUrl;
    obj3[0] = obj4;
    obj3[1] = tmp.header;
    obj2[1] = tmp17(tmp2(tmp3[21]), obj3);
    tmp17Result = tmp17(closure_5, obj2);
  }
  const items6 = [tmp17Result, ];
  const items7 = [tmp.container, ];
  const obj5 = { style: items7, children: null };
  items7[1] = null != headerUrl && tmp.containerWithHeader;
  tmp17Result = null != metadata.iconUrl;
  if (tmp17Result) {
    tmp17Result = "" !== metadata.iconUrl;
  }
  if (tmp17Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.iconContainer;
    const obj7 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj8 = { uri: null };
    obj8[0] = metadata.iconUrl;
    obj7[0] = obj8;
    obj7[1] = tmp.icon;
    obj6[1] = tmp17(tmp2(tmp3[21]), obj7);
    tmp17Result = tmp17(tmp20, obj6);
  }
  const items8 = [tmp17Result, , , , ];
  const obj9 = { style: tmp.textBlock, children: null };
  const items9 = [callback1(metadata(onDismiss[22]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title }), ];
  let tmp17Result1 = null != metadata.subtitle;
  if (tmp17Result1) {
    tmp17Result1 = "" !== metadata.subtitle;
  }
  if (tmp17Result1) {
    const obj11 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj11[2] = metadata.subtitle;
    tmp17Result1 = tmp17(tmp6(tmp3[22]).Text, obj11);
  }
  items9[1] = tmp17Result1;
  obj9[1] = items9;
  items8[1] = closure_9(closure_5, obj9);
  let tmp17Result2 = null != metadata.stats && metadata.stats.length > 0;
  if (tmp17Result2) {
    const obj12 = { stats: null };
    obj12[0] = metadata.stats;
    tmp17Result2 = tmp17(tmp2(tmp3[23]), obj12);
  }
  items8[2] = tmp17Result2;
  let tmp16Result = null != metadata.media && metadata.media.length > 0;
  if (tmp16Result) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.mediaSection;
    const obj14 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp6(tmp3[12]).intl;
    obj14[2] = intl.string(tmp6(tmp3[12]).t["EV1W/L"]);
    const items10 = [tmp17(tmp6(tmp3[22]).Text, obj14), ];
    const obj15 = { media: null, onGetGamePress: null };
    obj15[0] = metadata.media;
    obj15[1] = callback2;
    items10[1] = tmp17(tmp2(tmp3[24]), obj15);
    obj13[1] = items10;
    tmp16Result = tmp16(tmp20, obj13);
  }
  items8[3] = tmp16Result;
  let tmp17Result3 = null != metadata.description;
  if (tmp17Result3) {
    tmp17Result3 = "" !== metadata.description;
  }
  if (tmp17Result3) {
    const obj16 = { description: null };
    obj16[0] = metadata.description;
    tmp17Result3 = tmp17(tmp2(tmp3[25]), obj16);
  }
  items8[4] = tmp17Result3;
  obj5[1] = items8;
  items6[1] = closure_9(closure_5, obj5);
  obj1[2] = items6;
  items5[1] = closure_9(metadata(onDismiss[20]).BottomSheetScrollView, obj1);
  obj[6] = items5;
  return closure_9(metadata(onDismiss[18]).BottomSheet, obj);
};