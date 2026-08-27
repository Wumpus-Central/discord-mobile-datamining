// === Module 10355: NativeModules ===

// Module 10355 (NativeModules)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "getDimensionsStoreStateForEntry" /* 1495 */;
import { InAppCameraUsedCameraPreviewTypes as closure_7 } from "DRAG_HANDLE" /* 1624 */;
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_8 } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5575 */;
import { NativePermissionStatus } from "NativePermissionStatus" /* 4683 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let c4 = importAllResult;
const NativeModules = get_ActivityIndicator.NativeModules;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.PhotoLibraryHelper);
let obj = { listContainer: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
obj[0] = obj;
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}" };
let closure_14 = { code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}" };
let closure_15 = { code: "function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}" };
let closure_16 = { code: "function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}" };
const memoResult = importAllResult.memo(function MediaKeyboardList(channel) {
  channel = channel.channel;
  let animatedIndex = channel;
  const draftType = channel.draftType;
  importDefault = draftType;
  const onPressCamera = channel.onPressCamera;
  let sharedValue = onPressCamera;
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
  let ref;
  let first;
  closure_15 = undefined;
  let assets;
  let itemsPerRow;
  let itemsPageSizeRef;
  closure_19 = undefined;
  let height;
  c21 = undefined;
  c22 = undefined;
  let animatedSnapPoints;
  closure_24 = undefined;
  flag = undefined;
  c26 = undefined;
  let memo;
  let callback1;
  let width;
  let maximum;
  closure_31 = undefined;
  let obj = onPressItem;
  ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp4 = onAttachPress(onPressItem.useState(null), 2);
  first = tmp4[0];
  closure_15 = tmp4[1];
  obj1 = importDefault(sharedValue[11]);
  assets = obj1.useAssets();
  let obj2 = animatedIndex(sharedValue[12]);
  const mediaKeyboardItemsPerRow = obj2.useMediaKeyboardItemsPerRow();
  itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const NativePermissionManager = onLongPressItem.NativePermissionManager;
    const photoAuthorization = NativePermissionManager.requestPhotoAuthorization();
    photoAuthorization.then((arg0) => {
      callback(arg0);
    });
  }, []);
  let items1 = [first, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    let obj = _undefined(sharedValue[11]);
    obj = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj);
    let addListenerResult;
    if (uploadLimit != null) {
      addListenerResult = uploadLimit.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          let obj = closure_1_1(closure_1_2[11]);
          obj = { batchSize: null, extensions: null };
          obj[0] = ref2.current;
          obj[1] = closure_9;
          obj.refreshAssets(obj);
        }
      });
    }
    animatedIndex = addListenerResult;
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items1);
  closure_19 = animatedIndex(sharedValue[13]).useAppEntryKey();
  height = importDefault(sharedValue[15])({ ignoreKeyboard: true }).height;
  let result = height * includedUploadIds;
  c21 = result;
  const diff = height - animatedIndex(sharedValue[16]).NAV_BAR_HEIGHT_MULTILINE - importDefault(sharedValue[14])().top;
  c22 = diff;
  const obj4 = animatedIndex(sharedValue[13]);
  const tmp3 = onAttachPress;
  const bottomSheetInternal = animatedIndex(sharedValue[17]).useBottomSheetInternal();
  animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  animatedIndex = bottomSheetInternal.animatedIndex;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  maximum = first1.minimum;
  closure_24 = tmp18;
  const obj5 = animatedIndex(sharedValue[17]);
  class G {
    constructor() {
      return animatedSnapPoints.get();
    }
  }
  G.__closure = { animatedSnapPoints };
  G.__workletHash = 7279123713809;
  G.__initData = closure_15;
  const fn = function $(activeIndex) {
    let obj = animatedIndex(sharedValue[18]);
    if (!obj.cheapWorkletArrayShallowEqual(activeIndex, arg1)) {
      first = activeIndex[0];
      const tmp2Result = animatedIndex(sharedValue[10]);
      if (first == null) {
        first = c21;
      }
      obj = { minimum: null, maximum: null };
      obj[0] = height - first;
      let tmp8 = activeIndex[activeIndex.length - 1];
      if (tmp8 == null) {
        tmp8 = c22;
      }
      obj[1] = height - tmp8;
      animatedIndex(sharedValue[10]).runOnJS(closure_24)(obj);
      const runOnJSResult = animatedIndex(sharedValue[10]).runOnJS(closure_24);
    }
  };
  obj = { cheapWorkletArrayShallowEqual: animatedIndex(sharedValue[18]).cheapWorkletArrayShallowEqual, runOnJS: animatedIndex(sharedValue[10]).runOnJS, setBottomSheetState: tmp18, windowHeight: height, computedStartHeight: result, maxDynamicContentSize: diff };
  fn.__closure = obj;
  fn.__workletHash = 4619753074319;
  fn.__initData = assets;
  const animatedReaction = animatedIndex(sharedValue[10]).useAnimatedReaction(G, fn);
  importDefault = undefined;
  sharedValue = undefined;
  const obj6 = animatedIndex(sharedValue[10]);
  [tmp21, tmp22] = onAttachPress(onPressItem.useState(false), 2);
  importDefault = tmp22;
  const tmp20 = onAttachPress(onPressItem.useState(false), 2);
  sharedValue = animatedIndex(sharedValue[10]).useSharedValue(false);
  const obj8 = animatedIndex(sharedValue[10]);
  const fn2 = function i() {
    return animatedIndex.get();
  };
  fn2.__closure = { animatedIndex };
  fn2.__workletHash = 8982138292467;
  fn2.__initData = ref;
  const fn3 = function s(arg0) {
    let tmp = arg0 > 0.1;
    if (tmp) {
      tmp = !sharedValue.get();
    }
    if (tmp) {
      const result = sharedValue.set(true);
      animatedIndex(sharedValue[10]).runOnJS(c1)(true);
      const obj = animatedIndex(sharedValue[10]);
    }
  };
  obj = { latch: sharedValue, runOnJS: animatedIndex(sharedValue[10]).runOnJS, setIsExpanded: tmp22 };
  fn3.__closure = obj;
  fn3.__workletHash = 7990574449734;
  fn3.__initData = first;
  const animatedReaction1 = animatedIndex(sharedValue[10]).useAnimatedReaction(fn2, fn3);
  const obj9 = animatedIndex(sharedValue[10]);
  if (flag) {
    let tmp9Result = tmp9(tmp7[19]);
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
    if (flag) {
      const items = [{ type: "camera" }];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (null == assets) {
      const items2 = [];
      const _Array = Array;
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(Array(3 * itemsPerRow - items1.length).fill(null), arraySpreadResult);
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      return _undefined(sharedValue[20]).chunk(items2, itemsPerRow);
    } else {
      let edges;
      if (tmp != null) {
        edges = tmp.edges;
      }
      if (edges == null) {
        edges = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(edges, HermesBuiltin.arraySpread(items1, 0));
      return _undefined(sharedValue[20]).chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    sharedValue(onManageLimited.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [channel, draftType, callback1, onViewAll, onAttachPress, itemsPerRow, onPressItem, onLongPressItem, memo, includedUploadIds, flag2, uploadLimit, disableWhenReachedLimit, sum];
  const callback2 = obj.useCallback(() => {
    let obj = _undefined(sharedValue[11]);
    obj = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj);
  }, items4);
  const callback3 = obj.useCallback((arg0, rowIndex) => flag2(_undefined(sharedValue[21]), { draftType: _undefined, rowIndex, totalNumItems: c26, channel: animatedIndex, numPerRow: itemsPerRow, items: memo[rowIndex], onPressItem, onLongPressItem, includedUploadIds, uploadLimit, disableWhenReachedLimit, handleCameraPress: callback1, handleAttachPress: onAttachPress, handleViewAllPhotosPress: onViewAll, disabled: flag2 }, memo[rowIndex].reduce((arg0, node) => {
    if (null == node) {
      return arg0;
    } else {
      if (obj3.isMediaCameraNode(node)) {
        const _HermesInternal4 = HermesInternal;
        let combined = "" + arg0 + "-camera";
      } else {
        let tmp6Result = tmp6(tmp7[21]);
        if (tmp6Result.isAttachFilesNode(node)) {
          const _HermesInternal3 = HermesInternal;
          combined = "" + arg0 + "-attach";
        } else {
          tmp6Result = tmp6(tmp7[21]);
          if (tmp6Result.isViewAllPhotosNode(node)) {
            const _HermesInternal2 = HermesInternal;
            combined = "" + arg0 + "-view-all";
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + arg0 + "-" + node.node.image.uri;
          }
        }
      }
      obj3 = callback(table[21]);
    }
  }, rowIndex.toString())), items5);
  width = tmp6(tmp7[15])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result = (width - (animatedIndex(sharedValue[21]).PARENT_PADDING + animatedIndex(sharedValue[21]).CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + animatedIndex(sharedValue[21]).SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => flag2(_undefined(sharedValue[22]), { disabled: flag2, onViewAll }), items7);
  if (tmp21) {
    maximum = first1.maximum;
  }
  const items8 = [maximum];
  const memo2 = obj.useMemo(() => ({ height: maximum }), items8);
  const tmp3Result = tmp3(obj.useState(() => 32 + 36 * onViewAll.getState().byAppEntry[closure_19].fontScale), 2);
  closure_31 = tmp3Result[1];
  const items9 = [onManageLimited];
  const callback5 = obj.useCallback(() => flag2(_undefined(sharedValue[23]), { onPress: onManageLimited, onHeightChange: closure_31 }), items9);
  tmp9Result = tmp9(tmp7[24]);
  const modalDismissGuardRefreshControl = tmp9Result.useModalDismissGuardRefreshControl();
  const tmp25 = disableWhenReachedLimit();
  obj1 = { photoPermissionStatus: first, photosEmpty: null, showCameraButton: null, onPressCamera: null, onManageLimited: null, onPressPrivacySettings: null };
  let tmp36 = null != assets;
  if (tmp36) {
    tmp36 = 0 === assets.edges.length;
  }
  obj1[1] = tmp36;
  obj1[2] = flag;
  obj1[3] = function onPressCamera() {
    return sharedValue(onManageLimited.TAKE_A_PHOTO_BUTTON);
  };
  obj1[4] = onManageLimited;
  obj1[5] = importDefault(sharedValue[26]);
  let mediaEmptyStateComponentOrNull = animatedIndex(sharedValue[25]).getMediaEmptyStateComponentOrNull(obj1);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp38;
    if (first === extensions.LIMITED) {
      tmp38 = callback5;
    }
    obj2 = { renderHeader: null, headerSize: null, style: null, renderItem: null, sections: null, itemSize: null, inActionSheet: true, refreshControl: null, preserveScrollMomentum: true, automaticallyAdjustsScrollIndicatorInsets: false, keyboardDismissMode: "none", onEndReached: null, onScroll: null, endReachedThreshold: 400, accessibilityRole: "list", accessibilityLabel: null, showsVerticalScrollIndicator: false, footerSize: null, renderFooter: null, chunkBase: null, batchesToRender: null };
    obj2[0] = tmp38;
    let num3 = 0;
    if (first === extensions.LIMITED) {
      num3 = tmp3Result[0];
    }
    obj2[1] = num3;
    const items10 = [memo2, tmp25.listContainer];
    obj2[2] = items10;
    obj2[3] = callback3;
    const items11 = [memo.length];
    obj2[4] = items11;
    obj2[5] = memo1;
    obj2[7] = modalDismissGuardRefreshControl;
    obj2[11] = callback2;
    obj2[12] = callback;
    const intl = tmp9(tmp7[28]).intl;
    obj2[15] = intl.string(tmp9(tmp7[28]).t.XONG6A);
    obj2[17] = tmp9(tmp7[22]).FOOTER_HEIGHT;
    obj2[18] = callback4;
    obj2[19] = maximum;
    let prop;
    if (!tmp21) {
      prop = tmp9(tmp7[27]).MINIMUM_BATCHES_TO_RENDER;
    }
    obj2[20] = prop;
    mediaEmptyStateComponentOrNull = flag2(tmp6(tmp7[27]), obj2);
    const tmp41 = flag2;
    let tmp6Result = tmp6(tmp7[27]);
  }
  return mediaEmptyStateComponentOrNull;
});
let result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default memoResult;