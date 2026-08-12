// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx
import _slicedToArray from "_slicedToArray";
import ActionSheetHeaderBar from "ActionSheetHeaderBar";
import { View } from "ACTION_SHEET_HEIGHT_HALF";
import ME from "ME";
import jsxProd from "preload";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04765_LinearGradient.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function AppStoreOverlayFooter(arg0) {
  let onInstallPress;
  let onLayout;
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = createCacheKey();
  let obj = token(4065);
  token = obj.useToken(Themes.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  obj = { style: tmp.footer, onLayout, children: null };
  const memo = React.useMemo(() => {
    const obj = outer1_1(outer1_2[8])(token);
    const items = [outer1_1(outer1_2[8])(token).alpha(0).hex(), token];
    return items;
  }, items);
  obj = { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: constants.START, end: constants.END };
  const items1 = [callback(LinearGradient, obj), ];
  const obj1 = { bottom: true, children: null };
  const obj2 = { size: "lg", text: null, onPress: null };
  const intl = token(1236).intl;
  obj2[1] = intl.string(token(1236).t.lwQdjB);
  obj2[2] = onInstallPress;
  obj1[1] = callback(token(4754).Button, obj2);
  items1[1] = callback(token(5367).SafeAreaPaddingView, obj1);
  obj[2] = items1;
  return callback2(View, obj);
}
({ MEDIA_MODAL_KEY: closure_6, VerticalGradient: error } = ME);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { headerBar: { zIndex: 1 }, container: null, containerWithHeader: null, iconContainer: null, icon: null, textBlock: null, mediaSection: null, aboutSection: null, header: null, bodyContainer: null, footer: null, footerGradient: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingTop: 110 };
createCacheKey[3] = { width: 84, height: 84, borderRadius: require("Themes").radii.xl, overflow: "hidden", borderWidth: 6, borderColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[4] = { width: 72, height: 72 };
let obj1 = { width: 84, height: 84, borderRadius: require("Themes").radii.xl, overflow: "hidden", borderWidth: 6, borderColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[5] = { gap: require("Themes").space.PX_4 };
let obj2 = { gap: require("Themes").space.PX_4 };
createCacheKey[6] = { gap: require("Themes").space.PX_8 };
let obj3 = { gap: require("Themes").space.PX_8 };
createCacheKey[7] = { borderRadius: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey[8] = { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 };
createCacheKey[9] = { flex: 1, minHeight: 0 };
let obj4 = { borderRadius: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.CARD_SECONDARY_BACKGROUND_DEFAULT, padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey[10] = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[11] = { position: "absolute", top: -64, right: 0, left: 0, height: 64 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx");

export default function AppStoreOverlayBottomSheet(metadata) {
  let bottomSheetClose;
  let bottomSheetRef;
  metadata = metadata.metadata;
  const onOpen = metadata.onOpen;
  const onDismiss = metadata.onDismiss;
  const onInstallPress = metadata.onInstallPress;
  let React;
  let closure_5;
  let closure_6;
  let callback1;
  const tmp = createCacheKey();
  const tmp4 = onInstallPress(React.useState(0), 2);
  React = tmp4[1];
  let obj = metadata(onDismiss[14]);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  closure_5 = React.useRef(null);
  const items = [onOpen];
  const effect = React.useEffect(() => {
    closure_5.current = Date.now();
    onOpen();
  }, items);
  closure_6 = React.useRef(false);
  const items1 = [onDismiss];
  const callback = React.useCallback(() => {
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
  let obj1 = metadata(onDismiss[15]);
  const unmountEffect = obj1.useUnmountEffect(callback);
  const items2 = [metadata.storeUrl, onInstallPress];
  callback1 = React.useCallback(() => {
    onInstallPress();
    onOpen(onDismiss[16])(metadata.storeUrl);
  }, items2);
  const items3 = [callback1];
  const callback2 = React.useCallback(() => {
    onOpen(onDismiss[17]).hideActionSheet(closure_6);
    callback1();
  }, items3);
  let headerUrl = metadata.headerUrl;
  const callback3 = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (headerUrl == null) {
    headerUrl = null;
  }
  obj = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: 0.7 * onOpen(onDismiss[13])().height, onDismiss: callback, footer: null, children: null };
  obj[5] = callback(AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback3 });
  obj = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  const items4 = [callback(metadata(onDismiss[19]).ActionSheetHeaderBar, obj), ];
  obj1 = { style: tmp.bodyContainer, contentContainerStyle: { paddingBottom: tmp4[0] }, children: null };
  let tmp15Result = null != headerUrl;
  if (tmp15Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    const obj3 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj4 = { uri: null };
    obj4[0] = headerUrl;
    obj3[0] = obj4;
    obj3[1] = tmp.header;
    obj2[1] = tmp15(tmp2(tmp3[21]), obj3);
    tmp15Result = tmp15(closure_5, obj2);
  }
  const items5 = [tmp15Result, ];
  const items6 = [tmp.container, ];
  const obj5 = { style: items6, children: null };
  items6[1] = null != headerUrl && tmp.containerWithHeader;
  tmp15Result = null != metadata.iconUrl;
  if (tmp15Result) {
    tmp15Result = "" !== metadata.iconUrl;
  }
  if (tmp15Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.iconContainer;
    const obj7 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj8 = { uri: null };
    obj8[0] = metadata.iconUrl;
    obj7[0] = obj8;
    obj7[1] = tmp.icon;
    obj6[1] = tmp15(tmp2(tmp3[21]), obj7);
    tmp15Result = tmp15(tmp18, obj6);
  }
  const items7 = [tmp15Result, , , , ];
  const obj9 = { style: tmp.textBlock, children: null };
  const items8 = [callback(metadata(onDismiss[22]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title }), ];
  let tmp15Result1 = null != metadata.subtitle;
  if (tmp15Result1) {
    tmp15Result1 = "" !== metadata.subtitle;
  }
  if (tmp15Result1) {
    const obj11 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj11[2] = metadata.subtitle;
    tmp15Result1 = tmp15(tmp5(tmp3[22]).Text, obj11);
  }
  items8[1] = tmp15Result1;
  obj9[1] = items8;
  items7[1] = closure_9(closure_5, obj9);
  let tmp15Result2 = null != metadata.stats && metadata.stats.length > 0;
  if (tmp15Result2) {
    const obj12 = { stats: null };
    obj12[0] = metadata.stats;
    tmp15Result2 = tmp15(tmp2(tmp3[23]), obj12);
  }
  items7[2] = tmp15Result2;
  let tmp14Result = null != metadata.media && metadata.media.length > 0;
  if (tmp14Result) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.mediaSection;
    const obj14 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp5(tmp3[12]).intl;
    obj14[2] = intl.string(tmp5(tmp3[12]).t["EV1W/L"]);
    const items9 = [tmp15(tmp5(tmp3[22]).Text, obj14), ];
    const obj15 = { media: null, onGetGamePress: null };
    obj15[0] = metadata.media;
    obj15[1] = callback2;
    items9[1] = tmp15(tmp2(tmp3[24]), obj15);
    obj13[1] = items9;
    tmp14Result = tmp14(tmp18, obj13);
  }
  items7[3] = tmp14Result;
  tmp14Result = null != metadata.description;
  if (tmp14Result) {
    tmp14Result = "" !== metadata.description;
  }
  if (tmp14Result) {
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.aboutSection;
    const obj17 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp5(tmp3[12]).intl;
    obj17[2] = intl2.string(tmp5(tmp3[12]).t.CI0vSJ);
    const items10 = [tmp15(tmp5(tmp3[22]).Text, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", children: null };
    obj18[2] = metadata.description;
    items10[1] = tmp15(tmp5(tmp3[22]).Text, obj18);
    obj16[1] = items10;
    tmp14Result = tmp14(tmp18, obj16);
  }
  items7[4] = tmp14Result;
  obj5[1] = items7;
  items5[1] = closure_9(closure_5, obj5);
  obj1[2] = items5;
  items4[1] = closure_9(metadata(onDismiss[20]).BottomSheetScrollView, obj1);
  obj[6] = items4;
  return closure_9(metadata(onDismiss[18]).BottomSheet, obj);
};