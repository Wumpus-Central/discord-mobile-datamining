// discord_app/modules/media_keyboard/native/components/MediaKeyboardList.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import NativePermissionManagerModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import openPrivacySettingsDefault from "../../../native_permissions/mobile/openPrivacySettings.native.tsx";
import DeviceMediaDefault from "../../../device/native/DeviceMedia.tsx";
import MediaKeyboardItem from "MediaKeyboardItem.tsx";
import MediaKeyboardFooterDefault from "MediaKeyboardFooter.tsx";
import MediaKeyboardLimitedPickerNoticeDefault from "MediaKeyboardLimitedPickerNotice.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DimensionsStore from "../../../screen/native/DimensionsStore.android.tsx";

const require = globalThis.__r;
const MediaKeyboardItemDefault = MediaKeyboardItem;

require = fn;
get_ActivityIndicator = fn(17);
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
let closure_6 = fn(1623).InAppCameraUsedCameraPreviewTypes;
let closure_7 = fn(5396).ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = fn(8064).NativePermissionStatus;
const jsx = fn(21).jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const createStyles = fn(5141);
let obj = {
  listContainer: {
    backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
    marginTop: 8,
    paddingTop: 8,
  },
};
let closure_11 = createStyles.createStyles(obj);
let closure_12 = {
  code: "(function MediaKeyboardListTsx1(){let[animatedIndex]=this.__closure;return animatedIndex.get();})",
};
let closure_13 = {
  code: "(function MediaKeyboardListTsx2(currentIndex){let[latch,scheduleOnRN,setIsExpanded]=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);scheduleOnRN(setIsExpanded,true);}})",
};
let closure_14 = {
  code: "(function MediaKeyboardListTsx3(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.get();})",
};
let closure_15 = {
  code: "(function MediaKeyboardListTsx4(snapPoints,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize]=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(setBottomSheetState,{minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});})",
};
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default noop.memo(function MediaKeyboardList(channel) {
  channel = channel.channel;
  _require = channel;
  const draftType = channel.draftType;
  importDefault = draftType;
  const onPressCamera = channel.onPressCamera;
  dependencyMap = onPressCamera;
  const onAttachPress = channel.onAttachPress;
  _slicedToArray = onAttachPress;
  const onPressItem = channel.onPressItem;
  noop = onPressItem;
  const onLongPressItem = channel.onLongPressItem;
  c5 = onLongPressItem;
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
  photoPermissionStatus = undefined;
  closure_15 = undefined;
  flag = undefined;
  c21 = undefined;
  let memo;
  let callback1;
  let width;
  minimum = undefined;
  let onHeightChange;
  const ref = noop.useRef(true);
  items = [ref];
  const callback = noop.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.contentOffset.y < 100;
  }, items);
  [photoPermissionStatus, closure_15] = noop.useState(null);
  const assets = DeviceMediaDefault.useAssets();
  const mediaKeyboardItemsPerRow = require("useMediaKeyboardItemsPerRow").useMediaKeyboardItemsPerRow();
  const itemsPerRow = mediaKeyboardItemsPerRow.itemsPerRow;
  const itemsPageSizeRef = mediaKeyboardItemsPerRow.itemsPageSizeRef;
  const effect = noop.useEffect(() => {
    const photoAuthorization = NativePermissionManagerModuleDefault.requestPhotoAuthorization();
    photoAuthorization.then((result) => {
      closure_1_15(result);
    });
  }, []);
  let items1 = [photoPermissionStatus, itemsPageSizeRef, extensions];
  const effect1 = noop.useEffect(() => {
    draftType(_undefined[12]).refreshAssets({ batchSize: itemsPageSizeRef.current, extensions });
    let addListenerResult;
    if (flag2 != null) {
      addListenerResult = flag2.addListener("photoLibraryChanged", () => {
        if (ref.current) {
          const obj2 = { batchSize: ref2.current, extensions };
          c1(dependencyMap[12]).refreshAssets(obj2);
          const obj = c1(dependencyMap[12]);
        }
      });
    }
    c0 = addListenerResult;
    return () => {
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items1);
  let obj3 = require("useMediaKeyboardItemsPerRow");
  closure_19 = require("AppEntryKeyContext").useAppEntryKey();
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  let result = height * onManageLimited;
  const diff = height - require("NavigatorConstants").NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  const obj4 = require("AppEntryKeyContext");
  const bottomSheetInternal = require("BottomSheetModal").useBottomSheetInternal();
  ({ animatedSnapPoints, animatedIndex } = bottomSheetInternal);
  const tmp16 = _slicedToArray(noop.useState({ minimum: result, maximum: diff }), 2);
  ({ minimum, maximum } = tmp16[0]);
  const obj5 = require("BottomSheetModal");
  let items2 = [photoPermissionStatus, animatedSnapPoints];
  _require = undefined;
  [tmp17, tmp18] = items2;
  class MediaKeyboardListTsx3 {
    constructor() {
      return closure_0.get();
    }
  }
  let items3 = [tmp18];
  MediaKeyboardListTsx3.__closure = items3;
  MediaKeyboardListTsx3.__workletHash = 3126759631912;
  MediaKeyboardListTsx3.__initData = tmp17;
  const items4 = [
    closure_15,
    require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    tmp16[1],
    height,
    result,
    diff,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class MediaKeyboardListTsx4 {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      if (!tmp2(channel, tmp)) {
        tmp5 = closure_3;
        first = channel[0];
        tmp3 = closure_1;
        tmp4 = closure_2;
        if (first == null) {
          first = closure_4;
        }
        obj = { minimum: null, maximum: null };
        obj.minimum = tmp5 - first;
        num = 1;
        tmp7 = channel[channel.length - 1];
        if (tmp7 == null) {
          tmp7 = closure_5;
        }
        obj.maximum = tmp5 - tmp7;
        tmp3Result = tmp3(tmp4, obj);
      }
      return;
    }
  }
  const items5 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  MediaKeyboardListTsx4.__closure = items5;
  MediaKeyboardListTsx4.__workletHash = 5873312059707;
  MediaKeyboardListTsx4.__initData = tmp19;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    MediaKeyboardListTsx3,
    MediaKeyboardListTsx4,
  );
  const obj6 = require("../../../../../_runtime/metro/01652__.js");
  [tmp28, tmp29] = noop.useState(false);
  const tmp3Result = _slicedToArray(noop.useState(false), 2);
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const tmp9Result = require("../../../../../_runtime/metro/01652__.js");
  const items6 = [disableWhenReachedLimit, animatedIndex];
  _require = undefined;
  [tmp31, tmp32] = items6;
  class MediaKeyboardListTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items7 = [tmp32];
  MediaKeyboardListTsx1.__closure = items7;
  MediaKeyboardListTsx1.__workletHash = 906652326218;
  MediaKeyboardListTsx1.__initData = tmp31;
  const items8 = [ref, sharedValue, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp29];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items8;
  class MediaKeyboardListTsx2 {
    constructor(arg0) {
      tmp = channel > 0.1;
      if (tmp) {
        tmp2 = closure_0;
        tmp = !closure_0.get();
      }
      if (tmp) {
        tmp3 = closure_0;
        flag = true;
        result = closure_0.set(true);
        tmp5 = closure_1;
        tmp6 = closure_2;
        tmp7 = closure_1(closure_2, true);
      }
      return;
    }
  }
  const items9 = [tmp34, tmp35, tmp36];
  MediaKeyboardListTsx2.__closure = items9;
  MediaKeyboardListTsx2.__workletHash = 8642745285010;
  MediaKeyboardListTsx2.__initData = tmp33;
  const animatedReaction1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    MediaKeyboardListTsx1,
    MediaKeyboardListTsx2,
  );
  const tmp9Result5 = require("../../../../../_runtime/metro/01652__.js");
  if (flag) {
    flag = tmp9(8346).isImageCaptureIntentSupported();
    const tmp9Result6 = tmp9(8346);
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
  c21 = sum;
  const items10 = [assets, itemsPerRow, flag];
  memo = obj.useMemo(() => {
    if (flag) {
      items = [{ type: "camera" }];
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
  }, items10);
  const items11 = [onPressCamera];
  callback1 = obj.useCallback(() => {
    _undefined(onViewAll.CAMERA_BUTTON);
  }, items11);
  const items12 = [itemsPageSizeRef, extensions];
  const items13 = [
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
    const nextAssetPage = DeviceMediaDefault.getNextAssetPage({ batchSize: itemsPageSizeRef.current, extensions });
  }, items12);
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
          handleAttachPress,
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
                tmp6Result2 = channel(_undefined[23]);
              }
              tmp6Result = channel(_undefined[23]);
            }
            obj3 = channel(_undefined[23]);
          }
        }, rowIndex.toString()),
      ),
    items13,
  );
  width = tmp6(1493)().width;
  const items14 = [width, itemsPerRow];
  const items15 = [onViewAll, flag2];
  const memo1 = obj.useMemo(() => {
    const result =
      (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) / itemsPerRow;
    return result + MediaKeyboardItem.SEPARATOR_SIZE;
  }, items14);
  const callback4 = obj.useCallback(() => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }), items15);
  if (tmp28) {
    minimum = maximum;
  }
  const items16 = [minimum];
  const memo2 = obj.useMemo(() => ({ height: minimum }), items16);
  const tmp3Result2 = _slicedToArray(
    noop.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale),
    2,
  );
  onHeightChange = tmp3Result2[1];
  const items17 = [onManageLimited];
  const callback5 = obj.useCallback(
    () => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }),
    items17,
  );
  const tmp38 = uploadLimit();
  const modalDismissGuardRefreshControl =
    require("useModalDismissGuardRefreshControl").useModalDismissGuardRefreshControl();
  const tmp9Result7 = require("useModalDismissGuardRefreshControl");
  const obj7 = {
    photoPermissionStatus,
    photosEmpty: null,
    showCameraButton: null,
    onPressCamera: null,
    onManageLimited: null,
    onPressPrivacySettings: null,
  };
  let tmp49 = null != assets;
  if (tmp49) {
    tmp49 = 0 === assets.edges.length;
  }
  obj7.photosEmpty = tmp49;
  obj7.showCameraButton = flag;
  obj7.onPressCamera = function onPressCamera() {
    return _undefined(onViewAll.TAKE_A_PHOTO_BUTTON);
  };
  obj7.onManageLimited = onManageLimited;
  obj7.onPressPrivacySettings = openPrivacySettingsDefault;
  let mediaEmptyStateComponentOrNull = require("MediaKeyboardEmptyState").getMediaEmptyStateComponentOrNull(obj7);
  if (null == mediaEmptyStateComponentOrNull) {
    let tmp51;
    if (photoPermissionStatus === includedUploadIds.LIMITED) {
      tmp51 = callback5;
    }
    const obj8 = {
      renderHeader: tmp51,
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
    if (photoPermissionStatus === includedUploadIds.LIMITED) {
      num3 = tmp3Result2[0];
    }
    obj8.headerSize = num3;
    const items18 = [memo2, tmp38.listContainer];
    obj8.style = items18;
    obj8.renderItem = callback3;
    const items19 = [memo.length];
    obj8.sections = items19;
    obj8.itemSize = memo1;
    obj8.refreshControl = modalDismissGuardRefreshControl;
    obj8.onEndReached = callback2;
    obj8.onScroll = callback;
    const intl = tmp9(1113).intl;
    obj8.accessibilityLabel = intl.string(tmp9(1113).t.XONG6A);
    obj8.footerSize = tmp9(10682).FOOTER_HEIGHT;
    obj8.renderFooter = callback4;
    obj8.chunkBase = minimum;
    let prop;
    if (!tmp28) {
      prop = tmp9(7361).MINIMUM_BATCHES_TO_RENDER;
    }
    obj8.batchesToRender = prop;
    mediaEmptyStateComponentOrNull = extensions(tmp6(7361), obj8);
    let tmp6Result = tmp6(7361);
  }
  return mediaEmptyStateComponentOrNull;
});
