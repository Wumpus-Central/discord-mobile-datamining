// === Module 10374: MediaKeyboardList ===

// Module 10374 (MediaKeyboardList)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import MediaKeyboardConstants from "MediaKeyboardConstants" /* 1614 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import react_nativeDefault from "react-native" /* 7282 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9074 */;
import DeviceMediaDefault from "DeviceMedia" /* 10375 */;
import MediaKeyboardItem from "MediaKeyboardItem" /* 10379 */;
import MediaKeyboardFooterDefault from "MediaKeyboardFooter" /* 10386 */;
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice" /* 10388 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import DimensionsStore from "DimensionsStore" /* 1485 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const MediaKeyboardItemDefault = MediaKeyboardItem;
let _require, channel, closure_0, nextPromise, obj1, refreshAssetsResult;

let NativeEventEmitter;
let NativeModules;
let obj2;
({ NativeEventEmitter, NativeModules } = react_native);
let closure_6 = MediaKeyboardConstants.InAppCameraUsedCameraPreviewTypes;
let closure_7 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
const jsx = Fragment.jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const photoLibraryChanged = "photoLibraryChanged";
let obj = { listContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
const __initData2 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
const __initData3 = { code: "function MediaKeyboardListTsx3(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
const __initData4 = { code: "function MediaKeyboardListTsx4(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedIndex) => {
  let sharedValue;
  _require = animatedIndex;
  let tmp = _slicedToArray(react.useState(false), 2);
  let closure_1 = tmp3;
  const first = tmp[0];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(false);
  const fn = function i() {
    return animatedIndex.get();
  };
  fn.__closure = { animatedIndex };
  fn.__workletHash = 8982138292467;
  fn.__initData = __initData;
  const fn2 = function s(arg0) {
    const tmp = arg0 > 0.1 && !sharedValue.get();
    if (tmp) {
      const result = sharedValue.set(true);
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_1)(true);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] };
  fn2.__workletHash = 7990574449734;
  fn2.__initData = __initData2;
  ({ latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return first;
}) : ((animatedIndex) => {
  let sharedValue;
  _require = animatedIndex;
  let tmp = _slicedToArray(react.useState(false), 2);
  let closure_1 = tmp3;
  const first = tmp[0];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(false);
  const fn = function i() {
    return animatedIndex.get();
  };
  fn.__closure = { animatedIndex };
  fn.__workletHash = 9020222056753;
  fn.__initData = __initData3;
  const fn2 = function s(arg0) {
    const tmp = arg0 > 0.1 && !sharedValue.get();
    if (tmp) {
      const result = sharedValue.set(true);
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_1)(true);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] };
  fn2.__workletHash = 7776330836992;
  fn2.__initData = __initData4;
  ({ latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  return first;
});
let closure_18 = { code: "function MediaKeyboardListTsx5(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_19 = { code: "function MediaKeyboardListTsx6(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined)){return;}runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
let closure_20 = { code: "function MediaKeyboardListTsx7(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let __initData5 = { code: "function MediaKeyboardListTsx8(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let allowCamera;
  let handleCameraPress;
  let onHeightChange;
  let onPressCamera;
  let tmp10;
  let totalNumItems;
  let uploadDisabled;
  let uploadLimit;
  let tmp = channel;
  let obj = channel(onPressCamera[12]);
  const cResult = obj.c(74);
  channel = channel.channel;
  const draftType = channel.draftType;
  onPressCamera = channel.onPressCamera;
  const onAttachPress = channel.onAttachPress;
  const onPressItem = channel.onPressItem;
  const onLongPressItem = channel.onLongPressItem;
  const onViewAll = channel.onViewAll;
  const onManageLimited = channel.onManageLimited;
  const includedUploadIds = channel.includedUploadIds;
  const extensions = channel.extensions;
  ({ allowCamera, uploadDisabled, uploadLimit } = channel);
  const disableWhenReachedLimit = channel.disableWhenReachedLimit;
  const disabled = undefined !== uploadDisabled && uploadDisabled;
  let obj2 = onPressItem;
  let closure_13 = onPressItem.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(nativeEvent) {
      closure_13.current = nativeEvent.nativeEvent.contentOffset.y < 100;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = onAttachPress(obj2.useState(null), 2);
  const first1 = tmp5[0];
  let closure_15 = tmp5[1];
  let obj3 = draftType(tmp2[13]);
  const assets = obj3.useAssets();
  const tmpResult = tmp(onPressCamera[14]);
  const mediaKeyboardItemsPerRow = tmpResult.useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        obj = closure_1(closure_2[15]);
        photoAuthorization = obj.requestPhotoAuthorization();
        nextPromise = photoAuthorization.then((result) => {
          closure_1_15(result);
        });
        return;
      }
    }
    const items = [];
    cResult[1] = B;
    cResult[2] = items;
    tmp10 = items;
  } else {
    class B {
      constructor() {
        obj = closure_1(closure_2[15]);
        photoAuthorization = obj.requestPhotoAuthorization();
        nextPromise = photoAuthorization.then((result) => {
          closure_1_15(result);
        });
        return;
      }
    }
    tmp10 = cResult[2];
  }
  const effect = obj2.useEffect(B, tmp10);
  if (cResult[3] === extensions) {
    class B {
      constructor() {
        obj = closure_1(closure_2[15]);
        photoAuthorization = obj.requestPhotoAuthorization();
        nextPromise = photoAuthorization.then((result) => {
          closure_1_15(result);
        });
        return;
      }
    }
  }
  class J {
    constructor() {
      if (closure_14 !== includedUploadIds.AUTHORIZED) {
        if (tmp !== includedUploadIds.LIMITED) {
          return;
        }
      }
      obj = draftType(onPressCamera[13]);
      obj1 = { batchSize: itemsPageSizeRef.current, extensions };
      refreshAssetsResult = obj.refreshAssets(obj1);
      obj3 = uploadLimit;
      addListenerResult = undefined;
      if (uploadLimit != null) {
        tmp4 = disableWhenReachedLimit;
        addListenerResult = obj3.addListener(disableWhenReachedLimit, () => {
          if (ref.current) {
            const obj2 = { batchSize: ref2.current, extensions };
            const obj = draftType(onPressCamera[13]);
            obj.refreshAssets(obj2);
          }
        });
      }
      closure_0 = addListenerResult;
      return () => {
        if (channel != null) {
          channel.remove();
        }
      };
    }
  }
  const items1 = [first1, itemsPageSizeRef, extensions];
  cResult[3] = extensions;
  cResult[4] = itemsPageSizeRef;
  cResult[5] = first1;
  cResult[6] = J;
  cResult[7] = items1;
}) : ((channel) => {
  let c21;
  let intl;
  let items10;
  let items11;
  let num3;
  let prop;
  let tmp34;
  let totalNumItems;
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
  let c26;
  let memo;
  let callback1;
  let width;
  let onHeightChange;
  let obj = onPressItem;
  const ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp4 = onAttachPress(onPressItem.useState(null), 2);
  const photoPermissionStatus = tmp4[0];
  let closure_15 = tmp4[1];
  let obj2 = draftType(onPressCamera[13]);
  const assets = obj2.useAssets();
  let tmp9 = channel;
  let obj3 = channel(onPressCamera[14]);
  const mediaKeyboardItemsPerRow = obj3.useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const obj = react_nativeDefault;
    const photoAuthorization = obj.requestPhotoAuthorization();
    photoAuthorization.then((result) => {
      closure_1_15(result);
    });
  }, []);
  let items1 = [photoPermissionStatus, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    let ref2;
    let obj = draftType(onPressCamera[13]);
    let obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj2);
    let addListenerResult;
    if (flag2 != null) {
      addListenerResult = flag2.addListener(uploadLimit, () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          const obj = draftType(onPressCamera[13]);
          obj.refreshAssets(obj2);
        }
      });
    }
    channel = addListenerResult;
    return () => {
      if (channel != null) {
        channel.remove();
      }
    };
  }, items1);
  const obj4 = channel(onPressCamera[16]);
  closure_19 = obj4.useAppEntryKey();
  const top = draftType(onPressCamera[17])().top;
  const height = draftType(onPressCamera[18])({ ignoreKeyboard: true }).height;
  let result = height * onManageLimited;
  __initData5 = result;
  const diff = height - channel(onPressCamera[19]).NAV_BAR_HEIGHT_MULTILINE - top;
  let c22 = diff;
  const obj5 = channel(onPressCamera[20]);
  const bottomSheetInternal = obj5.useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedIndex = bottomSheetInternal.animatedIndex;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  let minimum = first1.minimum;
  let closure_24 = tmp18;
  const maximum = first1.maximum;
  const obj6 = channel(onPressCamera[11]);
  const tmp3 = onAttachPress;
  class U {
    constructor() {
      return animatedSnapPoints.get();
    }
  }
  U.__closure = { animatedSnapPoints };
  U.__workletHash = 8374269528981;
  U.__initData = height;
  const fn = function $(arg0, arg1) {
    let tmp9;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual;
    const tmp = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
      let first = arg0[0];
      const tmp2Result = ReanimatedRexport;
      const runOnJSResult = tmp2Result.runOnJS(closure_24);
      if (first == null) {
        first = c21;
      }
      const obj = { minimum: height - first, maximum: height - tmp9 };
      tmp9 = arg0[arg0.length - 1];
      if (tmp9 == null) {
        tmp9 = c22;
      }
      runOnJSResult(obj);
    }
  };
  fn.__closure = { cheapWorkletArrayShallowEqual: channel(onPressCamera[21]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[11]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  fn.__workletHash = 1615707814147;
  fn.__initData = __initData5;
  ({ cheapWorkletArrayShallowEqual: channel(onPressCamera[21]).cheapWorkletArrayShallowEqual, runOnJS: channel(onPressCamera[11]).runOnJS, setBottomSheetState: tmp16[1], windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff });
  const animatedReaction = obj6.useAnimatedReaction(U, fn);
  const tmp20 = itemsPerRow(animatedIndex);
  const tmp21 = disableWhenReachedLimit();
  if (flag) {
    const tmp9Result = tmp9(onPressCamera[22]);
    flag = tmp9Result.isImageCaptureIntentSupported();
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
    let items1;
    if (flag) {
      const items = [{ type: "camera" }];
      items1 = items;
    } else {
      items1 = [];
    }
    if (null == assets) {
      const items2 = [];
      const _Array = Array;
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, items1, 0);
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      HermesBuiltin.arraySpread(items2, ArrayResult.fill(null), arraySpreadResult);
      const obj3 = _modDef12;
      return obj3.chunk(items2, itemsPerRow);
    } else {
      let edges;
      if (assets != null) {
        edges = assets.edges;
      }
      if (edges == null) {
        edges = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(items3, edges, HermesBuiltin.arraySpread(items3, items1, 0));
      const obj = _modDef12;
      return obj.chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    onPressCamera(onViewAll.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = obj.useCallback(() => {
    const obj = DeviceMediaDefault;
    const obj2 = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj2);
  }, items4);
  const callback3 = obj.useCallback((arg0, rowIndex) => {
    const arr = memo[rowIndex];
    let tmp = MediaKeyboardItemDefault;
    return <tmp key={arr.reduce((acc, node) => {
      let tmp = acc;
      if (null != node) {
        let combined;
        const obj3 = channel(onPressCamera[24]);
        if (obj3.isMediaCameraNode(node)) {
          const _HermesInternal4 = HermesInternal;
          combined = "" + acc + "-camera";
        } else {
          const tmp6Result = channel(onPressCamera[24]);
          if (tmp6Result.isAttachFilesNode(node)) {
            const _HermesInternal3 = HermesInternal;
            combined = "" + acc + "-attach";
          } else {
            const tmp6Result2 = channel(onPressCamera[24]);
            if (tmp6Result2.isViewAllPhotosNode(node)) {
              const _HermesInternal2 = HermesInternal;
              combined = "" + acc + "-view-all";
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + acc + "-" + node.node.image.uri;
            }
          }
        }
        tmp = combined;
      }
      return tmp;
    }, rowIndex.toString())} draftType={draftType} rowIndex={rowIndex} totalNumItems={totalNumItems} channel={channel} numPerRow={itemsPerRow} items={memo[rowIndex]} onPressItem={onPressItem} onLongPressItem={onLongPressItem} includedUploadIds={includedUploadIds} uploadLimit={uploadLimit} disableWhenReachedLimit={disableWhenReachedLimit} handleCameraPress={callback1} handleAttachPress={onAttachPress} handleViewAllPhotosPress={onViewAll} disabled={flag2} />;
  }, items5);
  width = tmp6(tmp7[18])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items7);
  if (tmp20) {
    minimum = maximum;
  }
  const items8 = [minimum];
  const memo2 = obj.useMemo(() => ({ height: minimum }), items8);
  const LIMITED = includedUploadIds.LIMITED;
  const tmp3Result = tmp3(obj.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale), 2);
  onHeightChange = tmp3Result[1];
  const items9 = [onManageLimited];
  const first2 = tmp3Result[0];
  const callback5 = obj.useCallback(() => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }), items9);
  const tmp9Result3 = tmp9(onPressCamera[27]);
  const modalDismissGuardRefreshControl = tmp9Result3.useModalDismissGuardRefreshControl();
  const obj8 = {
    photoPermissionStatus,
    photosEmpty: tmp34,
    showCameraButton: flag,
    onPressCamera() {
      return onPressCamera(onViewAll.TAKE_A_PHOTO_BUTTON);
    },
    onManageLimited,
    onPressPrivacySettings: draftType(onPressCamera[29])
  };
  tmp34 = null != assets;
  const getMediaEmptyStateComponentOrNull = tmp9(tmp7[28]).getMediaEmptyStateComponentOrNull;
  tmp9(onPressCamera[28]);
  if (tmp34) {
    tmp34 = 0 === assets.edges.length;
  }
  let mediaEmptyStateComponentOrNull = getMediaEmptyStateComponentOrNull(obj8);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp36;
    let tmp6Result = tmp6(tmp7[31]);
    const tmp39 = extensions;
    if (photoPermissionStatus === LIMITED) {
      tmp36 = callback5;
    }
    const obj9 = { renderHeader: tmp36, headerSize: num3, style: items10, renderItem: callback3, sections: items11, itemSize: memo1, inActionSheet: true, refreshControl: modalDismissGuardRefreshControl, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: callback2, onScroll: callback, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: intl.string(tmp9(onPressCamera[30]).t.XONG6A), showsVerticalScrollIndicator: false, footerSize: tmp9(onPressCamera[25]).FOOTER_HEIGHT, renderFooter: callback4, chunkBase: minimum, batchesToRender: prop };
    num3 = 0;
    if (photoPermissionStatus === LIMITED) {
      num3 = first2;
    }
    items10 = [memo2, tmp21.listContainer];
    items11 = [memo.length];
    intl = tmp9(tmp7[30]).intl;
    prop = undefined;
    if (!tmp20) {
      prop = tmp9(tmp7[31]).MINIMUM_BATCHES_TO_RENDER;
    }
    mediaEmptyStateComponentOrNull = tmp39(tmp6Result, obj9);
  }
  return mediaEmptyStateComponentOrNull;
}));
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;