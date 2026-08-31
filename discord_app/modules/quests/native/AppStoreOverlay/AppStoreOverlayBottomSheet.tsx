// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayBottomSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import { ACTION_SHEET_MINIMUM_BOTTOM_PADDING as closure_8 } from "../../../action_sheet/native/ActionSheetConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function AppStoreOverlayFooter(arg0) {
  let bottom;
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = callback3();
  bottom = token(1628)().bottom;
  let obj = bottom(4167);
  token = obj.useToken(token(712).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = React.useMemo(() => {
    const obj = token(closure_1_2[10])(token);
    const items = [token(closure_1_2[10])(token).alpha(0).hex(), token];
    return items;
  }, items);
  obj = { style: tmp.footer, onLayout, children: null };
  const memo1 = React.useMemo(() => ({ paddingBottom: Math.max(bottom, closure_1_8) }), items1);
  obj = { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: constants.START, end: constants.END };
  const items2 = [callback(token(4908), obj), ];
  obj1 = { style: memo1, children: null };
  const obj2 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1236).intl;
  obj2[1] = intl.string(bottom(1236).t.lwQdjB);
  obj2[2] = onInstallPress;
  obj1[1] = callback(bottom(4896).Button, obj2);
  items2[1] = callback(View, obj1);
  obj[2] = items2;
  return callback2(View, obj);
}
({ MEDIA_MODAL_KEY: closure_6, VerticalGradient: error } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
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
createCacheKey[10] = { position: "absolute", top: -32, right: 0, left: 0, height: 32 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
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
  obj1 = metadata(onDismiss[15]);
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
  let obj2 = metadata(onDismiss[16]);
  const unmountEffect = obj2.useUnmountEffect(callback);
  const items2 = [metadata.storeUrl, onInstallPress];
  callback1 = first.useCallback(() => {
    onInstallPress(metadata(onDismiss[17]).AppStoreOverlaySurfaces.MAIN_CTA);
    onOpen(onDismiss[18])(metadata.storeUrl);
  }, items2);
  const items3 = [, , , ];
  ({ appId: arr4[0], platform: arr4[1], storeUrl: arr4[2] } = metadata);
  items3[3] = onInstallPress;
  const items4 = [callback1];
  const callback2 = first.useCallback(() => {
    onInstallPress(metadata(onDismiss[17]).AppStoreOverlaySurfaces.RATING_STAT);
    metadata(onDismiss[19]).openAppStoreReviews(metadata.storeUrl, metadata.platform, metadata.appId);
  }, items3);
  callback3 = first.useCallback(() => {
    onOpen(onDismiss[20]).hideActionSheet(closure_6);
    callback1();
  }, items4);
  let headerUrl = metadata.headerUrl;
  const callback4 = first.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (headerUrl == null) {
    headerUrl = null;
  }
  const items5 = [first];
  const memo = obj.useMemo(() => ({ paddingBottom: first + 32 }), items5);
  obj = { ref: bottomSheetRef, scrollable: true, handleDisabled: true, startHeight: 0.7 * onOpen(onDismiss[14])().height, onDismiss: callback, footer: callback(AppStoreOverlayFooter, { onInstallPress: callback1, onLayout: callback4 }), children: null };
  obj = { variant: "overlay", style: tmp.headerBar, onPress: bottomSheetClose };
  const items6 = [callback(metadata(onDismiss[22]).ActionSheetHeaderBar, obj), ];
  obj1 = { style: tmp.bodyContainer, contentContainerStyle: memo, children: null };
  let tmp18Result = null != headerUrl;
  if (tmp18Result) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    const obj3 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj4 = { uri: null };
    obj4[0] = headerUrl;
    obj3[0] = obj4;
    obj3[1] = tmp.header;
    obj2[1] = tmp18(tmp2(tmp3[24]), obj3);
    tmp18Result = tmp18(closure_5, obj2);
  }
  const items7 = [tmp18Result, ];
  const items8 = [tmp.container, ];
  const obj5 = { style: items8, children: null };
  items8[1] = null != headerUrl && tmp.containerWithHeader;
  tmp18Result = null != metadata.iconUrl;
  if (tmp18Result) {
    tmp18Result = "" !== metadata.iconUrl;
  }
  if (tmp18Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.iconContainer;
    const obj7 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj8 = { uri: null };
    obj8[0] = metadata.iconUrl;
    obj7[0] = obj8;
    obj7[1] = tmp.icon;
    obj6[1] = tmp18(tmp2(tmp3[24]), obj7);
    tmp18Result = tmp18(tmp21, obj6);
  }
  const items9 = [tmp18Result, , , , ];
  const obj9 = { style: tmp.textBlock, children: null };
  const items10 = [callback(metadata(onDismiss[25]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title }), ];
  let tmp18Result1 = null != metadata.subtitle;
  if (tmp18Result1) {
    tmp18Result1 = "" !== metadata.subtitle;
  }
  if (tmp18Result1) {
    const obj11 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj11[2] = metadata.subtitle;
    tmp18Result1 = tmp18(tmp6(tmp3[25]).Text, obj11);
  }
  items10[1] = tmp18Result1;
  obj9[1] = items10;
  items9[1] = closure_10(closure_5, obj9);
  let tmp18Result2 = null != metadata.stats && metadata.stats.length > 0;
  if (tmp18Result2) {
    const obj12 = { stats: null, onRatingPress: null };
    obj12[0] = metadata.stats;
    obj12[1] = callback2;
    tmp18Result2 = tmp18(tmp2(tmp3[26]), obj12);
  }
  items9[2] = tmp18Result2;
  let tmp17Result = null != metadata.media && metadata.media.length > 0;
  if (tmp17Result) {
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.mediaSection;
    const obj14 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp6(tmp3[13]).intl;
    obj14[2] = intl.string(tmp6(tmp3[13]).t["EV1W/L"]);
    const items11 = [tmp18(tmp6(tmp3[25]).Text, obj14), ];
    const obj15 = { media: null, onGetGamePress: null };
    obj15[0] = metadata.media;
    obj15[1] = callback3;
    items11[1] = tmp18(tmp2(tmp3[27]), obj15);
    obj13[1] = items11;
    tmp17Result = tmp17(tmp21, obj13);
  }
  items9[3] = tmp17Result;
  let tmp18Result3 = null != metadata.description;
  if (tmp18Result3) {
    tmp18Result3 = "" !== metadata.description;
  }
  if (tmp18Result3) {
    const obj16 = { description: null };
    obj16[0] = metadata.description;
    tmp18Result3 = tmp18(tmp2(tmp3[28]), obj16);
  }
  items9[4] = tmp18Result3;
  obj5[1] = items9;
  items7[1] = closure_10(closure_5, obj5);
  obj1[2] = items7;
  items6[1] = closure_10(metadata(onDismiss[23]).BottomSheetScrollView, obj1);
  obj[6] = items6;
  return closure_10(metadata(onDismiss[21]).BottomSheet, obj);
};