// discord_app/modules/media_keyboard/native/components/MediaKeyboardList.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import DeviceMediaDefault from "../../../device/native/DeviceMedia.tsx";
import MediaKeyboardItem from "MediaKeyboardItem.tsx";
import MediaKeyboardFooterDefault from "MediaKeyboardFooter.tsx";
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DimensionsStore from "../../../screen/native/DimensionsStore.android.tsx";

const MediaKeyboardItemDefault = MediaKeyboardItem;

require = fn;
get_ActivityIndicator = fn(17);
const NativeModules = get_ActivityIndicator.NativeModules;
let closure_7 = fn(1607).InAppCameraUsedCameraPreviewTypes;
let closure_8 = fn(7151).ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = fn(4770).NativePermissionStatus;
const jsx = fn(21).jsx;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const createStyles = fn(4560);
let obj = { listContainer: null };
obj = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
obj.listContainer = obj;
let closure_12 = createStyles.createStyles(obj);
let closure_13 = {
  code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}",
};
let closure_14 = {
  code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}",
};
let __initData = {
  code: "function MediaKeyboardListTsx3(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}",
};
let closure_16 = {
  code: "function MediaKeyboardListTsx4(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}",
};
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
  let obj = onPressItem;
  const ref = onPressItem.useRef(true);
  let items = [ref];
  const callback = onPressItem.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  const tmp4 = onAttachPress(onPressItem.useState(null), 2);
  const photoPermissionStatus = tmp4[0];
  __initData = tmp4[1];
  let obj1 = draftType(onPressCamera[11]);
  const assets = obj1.useAssets();
  let obj2 = channel(onPressCamera[12]);
  const mediaKeyboardItemsPerRow = obj2.useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = onPressItem.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const photoAuthorization = NativePermissionManager.requestPhotoAuthorization();
    photoAuthorization.then((result) => {
      closure_1_15(result);
    });
  }, []);
  let items1 = [photoPermissionStatus, itemsPageSizeRef, extensions];
  const effect1 = onPressItem.useEffect(() => {
    draftType(onPressCamera[11]);
    let obj = { batchSize: itemsPageSizeRef.current, extensions };
    obj.refreshAssets(obj);
    let addListenerResult;
    if (uploadLimit != null) {
      addListenerResult = uploadLimit.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          draftType(onPressCamera[11]);
          const obj = { batchSize: ref2.current, extensions };
          obj.refreshAssets(obj);
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
  closure_19 = channel(onPressCamera[13]).useAppEntryKey();
  const height = draftType(onPressCamera[15])({ ignoreKeyboard: true }).height;
  let result = height * includedUploadIds;
  c21 = result;
  const diff = height - channel(onPressCamera[16]).NAV_BAR_HEIGHT_MULTILINE - draftType(onPressCamera[14])().top;
  c22 = diff;
  const obj4 = channel(onPressCamera[13]);
  const tmp3 = onAttachPress;
  const bottomSheetInternal = channel(onPressCamera[17]).useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedIndex = bottomSheetInternal.animatedIndex;
  const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
  const first1 = tmp16[0];
  let maximum = first1.minimum;
  closure_24 = tmp18;
  const obj5 = channel(onPressCamera[17]);
  class G {
    constructor() {
      return animatedSnapPoints.get();
    }
  }
  G.__closure = { animatedSnapPoints };
  G.__workletHash = 7279123713809;
  G.__initData = __initData;
  const fn = function $(arg0, arg1) {
    let obj = cheapWorkletShallowEqual;
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      first = arg0[0];
      const tmp2Result = ReanimatedRexport;
      if (first == null) {
        first = c21;
      }
      obj = { minimum: height - first, maximum: null };
      let tmp8 = arg0[arg0.length - 1];
      if (tmp8 == null) {
        tmp8 = c22;
      }
      obj.maximum = height - tmp8;
      ReanimatedRexport.runOnJS(closure_24)(obj);
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_24);
    }
  };
  obj = {
    cheapWorkletArrayShallowEqual: channel(onPressCamera[18]).cheapWorkletArrayShallowEqual,
    runOnJS: channel(onPressCamera[10]).runOnJS,
    setBottomSheetState: tmp18,
    windowHeight: height,
    computedStartHeight: result,
    maxDynamicContentSize: diff,
  };
  fn.__closure = obj;
  fn.__workletHash = 4619753074319;
  fn.__initData = assets;
  const animatedReaction = channel(onPressCamera[10]).useAnimatedReaction(G, fn);
  closure_129_0 = animatedIndex;
  const obj6 = channel(onPressCamera[10]);
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
  fn2.__initData = ref;
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
  obj = { latch: sharedValue, runOnJS: channel(onPressCamera[10]).runOnJS, setIsExpanded: tmp22 };
  fn3.__closure = obj;
  fn3.__workletHash = 7990574449734;
  fn3.__initData = photoPermissionStatus;
  const animatedReaction1 = channel(onPressCamera[10]).useAnimatedReaction(fn2, fn3);
  const obj9 = channel(onPressCamera[10]);
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
      arraySpreadResult = HermesBuiltin.arraySpread(
        Array(3 * itemsPerRow - items1.length).fill(null),
        arraySpreadResult,
      );
      const ArrayResult = Array(3 * itemsPerRow - items1.length);
      return _modDef12.chunk(items2, itemsPerRow);
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
      return _modDef12.chunk(items3, itemsPerRow);
    }
  }, items2);
  let items3 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    onPressCamera(onManageLimited.CAMERA_BUTTON);
  }, items3);
  const items4 = [itemsPageSizeRef, extensions];
  const items5 = [
    channel,
    draftType,
    callback1,
    onViewAll,
    onAttachPress,
    itemsPerRow,
    onPressItem,
    onLongPressItem,
    memo,
    includedUploadIds,
    flag2,
    uploadLimit,
    disableWhenReachedLimit,
    sum,
  ];
  const callback2 = obj.useCallback(() => {
    const obj = { batchSize: itemsPageSizeRef.current, extensions };
    const nextAssetPage = obj.getNextAssetPage(obj);
  }, items4);
  const callback3 = obj.useCallback(
    (arg0, rowIndex) =>
      jsx(
        MediaKeyboardItemDefault,
        {
          draftType,
          rowIndex,
          totalNumItems,
          channel,
          numPerRow: itemsPerRow,
          items: memo[rowIndex],
          onPressItem,
          onLongPressItem,
          includedUploadIds,
          uploadLimit,
          disableWhenReachedLimit,
          handleCameraPress: callback1,
          handleAttachPress: onAttachPress,
          handleViewAllPhotosPress: onViewAll,
          disabled: flag2,
        },
        memo[rowIndex].reduce((acc, node) => {
          if (null == node) {
            return acc;
          } else {
            if (obj3.isMediaCameraNode(node)) {
              const _HermesInternal4 = HermesInternal;
              let combined = "" + acc + "-camera";
            } else {
              let tmp6Result = tmp6(tmp7[21]);
              if (tmp6Result.isAttachFilesNode(node)) {
                const _HermesInternal3 = HermesInternal;
                combined = "" + acc + "-attach";
              } else {
                tmp6Result = tmp6(tmp7[21]);
                if (tmp6Result.isViewAllPhotosNode(node)) {
                  const _HermesInternal2 = HermesInternal;
                  combined = "" + acc + "-view-all";
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "" + acc + "-" + node.node.image.uri;
                }
              }
            }
            obj3 = channel(onPressCamera[21]);
          }
        }, rowIndex.toString()),
      ),
    items5,
  );
  width = tmp6(tmp7[15])().width;
  const items6 = [width, itemsPerRow];
  const items7 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result =
      (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items6);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items7);
  if (tmp21) {
    maximum = first1.maximum;
  }
  const items8 = [maximum];
  const memo2 = obj.useMemo(() => ({ height: maximum }), items8);
  const tmp3Result = tmp3(
    obj.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale),
    2,
  );
  onHeightChange = tmp3Result[1];
  const items9 = [onManageLimited];
  const callback5 = obj.useCallback(
    () => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }),
    items9,
  );
  tmp9Result = tmp9(tmp7[24]);
  const modalDismissGuardRefreshControl = tmp9Result.useModalDismissGuardRefreshControl();
  const tmp25 = disableWhenReachedLimit();
  obj1 = {
    photoPermissionStatus,
    photosEmpty: null,
    showCameraButton: null,
    onPressCamera: null,
    onManageLimited: null,
    onPressPrivacySettings: null,
  };
  let tmp36 = null != assets;
  if (tmp36) {
    tmp36 = 0 === assets.edges.length;
  }
  obj1.photosEmpty = tmp36;
  obj1.showCameraButton = flag;
  obj1.onPressCamera = function onPressCamera() {
    return onPressCamera(onManageLimited.TAKE_A_PHOTO_BUTTON);
  };
  obj1.onManageLimited = onManageLimited;
  obj1.onPressPrivacySettings = draftType(onPressCamera[26]);
  let mediaEmptyStateComponentOrNull = channel(onPressCamera[25]).getMediaEmptyStateComponentOrNull(obj1);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp38;
    if (photoPermissionStatus === extensions.LIMITED) {
      tmp38 = callback5;
    }
    obj2 = {
      renderHeader: tmp38,
      headerSize: null,
      style: null,
      renderItem: null,
      sections: null,
      itemSize: null,
      inActionSheet: true,
      refreshControl: null,
      preserveScrollMomentum: true,
      automaticallyAdjustsScrollIndicatorInsets: false,
      keyboardDismissMode: "none",
      onEndReached: null,
      onScroll: null,
      endReachedThreshold: 400,
      accessibilityRole: "list",
      accessibilityLabel: null,
      showsVerticalScrollIndicator: false,
      footerSize: null,
      renderFooter: null,
      chunkBase: null,
      batchesToRender: null,
    };
    let num3 = 0;
    if (photoPermissionStatus === extensions.LIMITED) {
      num3 = tmp3Result[0];
    }
    obj2.headerSize = num3;
    const items10 = [memo2, tmp25.listContainer];
    obj2.style = items10;
    obj2.renderItem = callback3;
    const items11 = [memo.length];
    obj2.sections = items11;
    obj2.itemSize = memo1;
    obj2.refreshControl = modalDismissGuardRefreshControl;
    obj2.onEndReached = callback2;
    obj2.onScroll = callback;
    const intl = tmp9(tmp7[28]).intl;
    obj2.accessibilityLabel = intl.string(tmp9(tmp7[28]).t.XONG6A);
    obj2.footerSize = tmp9(tmp7[22]).FOOTER_HEIGHT;
    obj2.renderFooter = callback4;
    obj2.chunkBase = maximum;
    let prop;
    if (!tmp21) {
      prop = tmp9(tmp7[27]).MINIMUM_BATCHES_TO_RENDER;
    }
    obj2.batchesToRender = prop;
    mediaEmptyStateComponentOrNull = flag2(tmp6(tmp7[27]), obj2);
    let tmp6Result = tmp6(tmp7[27]);
  }
  return mediaEmptyStateComponentOrNull;
});
