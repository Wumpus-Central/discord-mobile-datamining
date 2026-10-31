// === Module 10540: MediaKeyboardList ===

// Module 10540 (MediaKeyboardList)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7963 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 10089 */;
import DeviceMediaDefault from "DeviceMedia" /* 10541 */;
import MediaKeyboardItem from "MediaKeyboardItem" /* 10545 */;
import MediaKeyboardFooterDefault from "MediaKeyboardFooter" /* 10552 */;
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice" /* 10554 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DimensionsStore from "DimensionsStore" /* 1492 */;

const MediaKeyboardItemDefault = MediaKeyboardItem;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
let closure_6 = fn(1621).InAppCameraUsedCameraPreviewTypes;
let closure_7 = fn(5273).ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = fn(7940).NativePermissionStatus;
const jsx = fn(21).jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const createStyles = fn(5014);
let obj = { listContainer: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 } };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
let closure_13 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let closure_14 = { code: "function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let __initData = { code: "function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default noop.memo(function MediaKeyboardList(channel) {
  channel = channel.channel;
  const draftType = channel.draftType;
  const onPressCamera = channel.onPressCamera;
  const onAttachPress = channel.onAttachPress;
  const onPressItem = channel.onPressItem;
  const onLongPressItem = channel.onLongPressItem;
  const onViewAll = channel.onViewAll;
  const onManageLimited = channel.onManageLimited;
  const includedUploadIds = channel.includedUploadIds;
  const extensions = channel.extensions;
  let flag = channel.allowCamera;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.uploadDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const uploadLimit = channel.uploadLimit;
  const disableWhenReachedLimit = channel.disableWhenReachedLimit;
  flag = undefined;
  c26 = undefined;
  let memo;
  let callback1;
  let width;
  let onHeightChange;
  const ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp4 = onAttachPress(onPressItem.useState(null), 2);
  const photoPermissionStatus = tmp4[0];
  __initData = tmp4[1];
  const assets = draftType(onPressCamera[11]).useAssets();
  let obj2 = draftType(onPressCamera[11]);
  const tmp3 = onAttachPress;
  const mediaKeyboardItemsPerRow = channel(onPressCamera[12]).useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const photoAuthorization = NativePermissionManagerModuleDefault.requestPhotoAuthorization();
    photoAuthorization.then((result) => {
      closure_1_15(result);
    });
  }, []);
  let items1 = [photoPermissionStatus, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    draftType(onPressCamera[11]).refreshAssets({ batchSize: itemsPageSizeRef.current, extensions });
    let addListenerResult;
    if (flag2 != null) {
      addListenerResult = flag2.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          draftType(onPressCamera[11]).refreshAssets(obj2);
          const obj = draftType(onPressCamera[11]);
        }
      });
    }
    channel = addListenerResult;
    return () => {
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items1);
  let obj3 = channel(onPressCamera[12]);
  closure_19 = channel(onPressCamera[14]).useAppEntryKey();
  const height = draftType(onPressCamera[16])({ ignoreKeyboard: true }).height;
  let result = height * onManageLimited;
  c21 = result;
  const diff = height - channel(onPressCamera[17]).NAV_BAR_HEIGHT_MULTILINE - draftType(onPressCamera[15])().top;
  c22 = diff;
  const obj4 = channel(onPressCamera[14]);
  const bottomSheetInternal = channel(onPressCamera[18]).useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedIndex = bottomSheetInternal.animatedIndex;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  let maximum = first1.minimum;
  closure_24 = tmp18;
  const obj5 = channel(onPressCamera[18]);
  const fn = function $() {
    return animatedSnapPoints.get();
  };
  fn.__closure = { animatedSnapPoints };
  fn.__workletHash = 7279123713809;
  fn.__initData = photoPermissionStatus;
  class U {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[19]);
      if (!obj.cheapWorkletArrayShallowEqual(channel, tmp)) {
        tmp2Result = tmp2(tmp3[10]);
        tmp4 = closure_24;
        tmp6 = height;
        first = channel[0];
        runOnJSResult = tmp2Result.runOnJS(closure_24);
        if (first == null) {
          first = closure_21;
        }
        obj1 = { minimum: null, maximum: null };
        obj1.minimum = tmp6 - first;
        num = 1;
        tmp8 = channel[channel.length - 1];
        if (tmp8 == null) {
          tmp8 = closure_22;
        }
        obj1.maximum = tmp6 - tmp8;
        tmp5Result = runOnJSResult(obj1);
      }
      return;
    }
  }
  const obj6 = channel(onPressCamera[10]);
  U.__closure = { cheapWorkletArrayShallowEqual: channel(onPressCamera[19]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[10]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  U.__workletHash = 4619753074319;
  U.__initData = __initData;
  const animatedReaction = obj6.useAnimatedReaction(fn, U);
  closure_129_0 = animatedIndex;
  const obj7 = { cheapWorkletArrayShallowEqual: channel(onPressCamera[19]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[10]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  [tmp21, tmp22] = onAttachPress(onPressItem.useState(false), 2);
  closure_129_1 = tmp22;
  const tmp20 = onAttachPress(onPressItem.useState(false), 2);
  const sharedValue = channel(onPressCamera[10]).useSharedValue(false);
  closure_129_2 = sharedValue;
  const obj8 = channel(onPressCamera[10]);
  const fn2 = function i() {
    return channel.get();
  };
  fn2.__closure = { animatedIndex };
  fn2.__workletHash = 8982138292467;
  fn2.__initData = disableWhenReachedLimit;
  const fn3 = function s(arg0) {
    let tmp = arg0 > 0.1;
    if (tmp) {
      tmp = !onPressCamera.get();
    }
    if (tmp) {
      const result = onPressCamera.set(true);
      ReanimatedRexport.runOnJS(draftType)(true);
    }
  };
  const obj9 = channel(onPressCamera[10]);
  fn3.__closure = { latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp22 };
  fn3.__workletHash = 7990574449734;
  fn3.__initData = ref;
  const animatedReaction1 = obj9.useAnimatedReaction(fn2, fn3);
  const obj10 = { latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp22 };
  if (flag) {
    flag = tmp9(tmp7[20]).isImageCaptureIntentSupported();
    const tmp9Result = tmp9(tmp7[20]);
  }
  let num;
  if (assets != null) {
    num = assets.edges.length;
  }
  if (num == null) {
    num = 0;
  }
  let num2 = 0;
  if (flag) {
    num2 = 1;
  }
  const sum = num + num2;
  c26 = sum;
  let items2 = [assets, itemsPerRow, flag];
  memo = obj.useMemo(() => {
    if (flag) {
      const items = [{ type: "camera" }];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (null == assets) {
      const items2 = [];
      const _Array = Array;
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      HermesBuiltin.arraySpread(Array(3 * itemsPerRow - items1.length).fill(null), arraySpreadResult);
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      return _modDef12.chunk(items2, itemsPerRow);
    } else {
      let edges;
      if (assets != null) {
        edges = assets.edges;
      }
      if (edges == null) {
        edges = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(edges, HermesBuiltin.arraySpread(items1, 0));
      return _modDef12.chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    onPressCamera(onViewAll.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = obj.useCallback(() => {
    const nextAssetPage = DeviceMediaDefault.getNextAssetPage({ batchSize: itemsPageSizeRef.current, extensions });
  }, items4);
  const callback3 = obj.useCallback((arg0, rowIndex) => jsx(MediaKeyboardItemDefault, { draftType, rowIndex, totalNumItems, channel, numPerRow: itemsPerRow, items: memo[rowIndex], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: callback1, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: flag2 }, memo[rowIndex].reduce((acc, node) => {
    if (null == node) {
      return acc;
    } else {
      if (obj3.isMediaCameraNode(node)) {
        const _HermesInternal4 = HermesInternal;
        let combined = "" + acc + "-camera";
      } else {
        if (tmp6Result.isAttachFilesNode(node)) {
          const _HermesInternal3 = HermesInternal;
          combined = "" + acc + "-attach";
        } else {
          if (tmp6Result2.isViewAllPhotosNode(node)) {
            const _HermesInternal2 = HermesInternal;
            combined = "" + acc + "-view-all";
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + acc + "-" + node.node.image.uri;
          }
          tmp6Result2 = channel(onPressCamera[22]);
        }
        tmp6Result = channel(onPressCamera[22]);
      }
      obj3 = channel(onPressCamera[22]);
    }
  }, rowIndex.toString())), items5);
  width = tmp6(tmp7[16])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items7);
  if (tmp21) {
    maximum = first1.maximum;
  }
  const items8 = [maximum];
  const memo2 = obj.useMemo(() => ({ height: maximum }), items8);
  const tmp3Result = tmp3(onPressItem.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale), 2);
  onHeightChange = tmp3Result[1];
  const items9 = [onManageLimited];
  const callback5 = obj.useCallback(() => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }), items9);
  const tmp25 = uploadLimit();
  const modalDismissGuardRefreshControl = channel(onPressCamera[25]).useModalDismissGuardRefreshControl();
  const tmp9Result3 = channel(onPressCamera[25]);
  const obj11 = { photoPermissionStatus, photosEmpty: null, showCameraButton: null, onPressCamera: null, onManageLimited: null, onPressPrivacySettings: null };
  let tmp36 = null != assets;
  if (tmp36) {
    tmp36 = 0 === assets.edges.length;
  }
  obj11.photosEmpty = tmp36;
  obj11.showCameraButton = flag;
  obj11.onPressCamera = function onPressCamera() {
    return onPressCamera(onViewAll.TAKE_A_PHOTO_BUTTON);
  };
  obj11.onManageLimited = onManageLimited;
  obj11.onPressPrivacySettings = draftType(onPressCamera[27]);
  let mediaEmptyStateComponentOrNull = channel(onPressCamera[26]).getMediaEmptyStateComponentOrNull(obj11);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp38;
    if (photoPermissionStatus === includedUploadIds.LIMITED) {
      tmp38 = callback5;
    }
    const obj12 = { renderHeader: tmp38, headerSize: null, style: null, renderItem: null, sections: null, itemSize: null, inActionSheet: true, refreshControl: null, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: null, onScroll: null, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: null, showsVerticalScrollIndicator: false, footerSize: null, renderFooter: null, chunkBase: null, batchesToRender: null };
    let num3 = 0;
    if (photoPermissionStatus === includedUploadIds.LIMITED) {
      num3 = tmp3Result[0];
    }
    obj12.headerSize = num3;
    const items10 = [memo2, tmp25.listContainer];
    obj12.style = items10;
    obj12.renderItem = callback3;
    const items11 = [memo.length];
    obj12.sections = items11;
    obj12.itemSize = memo1;
    obj12.refreshControl = modalDismissGuardRefreshControl;
    obj12.onEndReached = callback2;
    obj12.onScroll = callback;
    const intl = tmp9(tmp7[29]).intl;
    obj12.accessibilityLabel = intl.string(tmp9(tmp7[29]).t.XONG6A);
    obj12.footerSize = tmp9(tmp7[23]).FOOTER_HEIGHT;
    obj12.renderFooter = callback4;
    obj12.chunkBase = maximum;
    let prop;
    if (!tmp21) {
      prop = tmp9(tmp7[28]).MINIMUM_BATCHES_TO_RENDER;
    }
    obj12.batchesToRender = prop;
    mediaEmptyStateComponentOrNull = extensions(tmp6(tmp7[28]), obj12);
    let tmp6Result = tmp6(tmp7[28]);
  }
  return mediaEmptyStateComponentOrNull;
});