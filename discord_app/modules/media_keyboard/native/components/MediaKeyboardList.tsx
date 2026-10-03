// discord_app/modules/media_keyboard/native/components/MediaKeyboardList.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import NativePermissionManagerModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
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
({ NativeEventEmitter, NativeModules } = get_ActivityIndicator);
let closure_6 = fn(1614).InAppCameraUsedCameraPreviewTypes;
let closure_7 = fn(6646).ACTION_SHEET_START_HEIGHT_RATIO;
const NativePermissionStatus = fn(5099).NativePermissionStatus;
const jsx = fn(21).jsx;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.PhotoLibraryHelper);
const photoLibraryChanged = "photoLibraryChanged";
const createStyles = fn(4890);
let obj = {
  listContainer: {
    backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND,
    marginTop: 8,
    paddingTop: 8,
  },
};
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function MediaKeyboardListTsx1(){const{animatedIndex}=this.__closure;return animatedIndex.get();}",
};
const __initData2 = {
  code: "function MediaKeyboardListTsx2(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}",
};
const __initData3 = {
  code: "function MediaKeyboardListTsx3(){const{animatedIndex}=this.__closure;return animatedIndex.get();}",
};
const __initData4 = {
  code: "function MediaKeyboardListTsx4(currentIndex){const{latch,runOnJS,setIsExpanded}=this.__closure;if(currentIndex>0.1&&!latch.get()){latch.set(true);runOnJS(setIsExpanded)(true);}}",
};
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animatedIndex) => {
      _require = animatedIndex;
      let tmp = _slicedToArray(noop.useState(false), 2);
      closure_1 = tmp2;
      sharedValue = require("ReanimatedRexport").useSharedValue(false);
      let obj = require("ReanimatedRexport");
      const fn = function i() {
        return animatedIndex.get();
      };
      fn.__closure = { animatedIndex };
      fn.__workletHash = 8982138292467;
      fn.__initData = __initData;
      const fn2 = function s(arg0) {
        let tmp = arg0 > 0.1;
        if (tmp) {
          tmp = !sharedValue.get();
        }
        if (tmp) {
          const result = sharedValue.set(true);
          ReanimatedRexport.runOnJS(closure_1)(true);
        }
      };
      const obj2 = require("ReanimatedRexport");
      fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] };
      fn2.__workletHash = 7990574449734;
      fn2.__initData = __initData2;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return tmp[0];
    }
  : (animatedIndex) => {
      _require = animatedIndex;
      let tmp = _slicedToArray(noop.useState(false), 2);
      closure_1 = tmp2;
      sharedValue = require("ReanimatedRexport").useSharedValue(false);
      let obj = require("ReanimatedRexport");
      const fn = function i() {
        return animatedIndex.get();
      };
      fn.__closure = { animatedIndex };
      fn.__workletHash = 9020222056753;
      fn.__initData = __initData3;
      const fn2 = function s(arg0) {
        let tmp = arg0 > 0.1;
        if (tmp) {
          tmp = !sharedValue.get();
        }
        if (tmp) {
          const result = sharedValue.set(true);
          ReanimatedRexport.runOnJS(closure_1)(true);
        }
      };
      const obj2 = require("ReanimatedRexport");
      fn2.__closure = { latch: sharedValue, runOnJS: require("ReanimatedRexport").runOnJS, setIsExpanded: tmp[1] };
      fn2.__workletHash = 7776330836992;
      fn2.__initData = __initData4;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return tmp[0];
    };
let closure_18 = {
  code: "function MediaKeyboardListTsx5(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}",
};
let closure_19 = {
  code: "function MediaKeyboardListTsx6(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined)){return;}runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}",
};
let closure_20 = {
  code: "function MediaKeyboardListTsx7(){const{animatedSnapPoints}=this.__closure;return animatedSnapPoints.get();}",
};
let __initData5 = {
  code: "function MediaKeyboardListTsx8(snapPoints,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setBottomSheetState,windowHeight,computedStartHeight,maxDynamicContentSize}=this.__closure;var _snapPoints$,_snapPoints;if(cheapWorkletArrayShallowEqual(snapPoints,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(setBottomSheetState)({minimum:windowHeight-((_snapPoints$=snapPoints[0])!==null&&_snapPoints$!==void 0?_snapPoints$:computedStartHeight),maximum:windowHeight-((_snapPoints=snapPoints[snapPoints.length-1])!==null&&_snapPoints!==void 0?_snapPoints:maxDynamicContentSize)});}",
};
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, marginTop: 8, paddingTop: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardList.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(onPressCamera[12]).c(74);
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
        closure_13 = onPressItem.useRef(true);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(nativeEvent) {
            closure_13.current = nativeEvent.nativeEvent.contentOffset.y < 100;
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        const tmp5 = onAttachPress(onPressItem.useState(null), 2);
        const first1 = tmp5[0];
        closure_15 = tmp5[1];
        let obj = channel(onPressCamera[12]);
        let tmp = channel;
        const assets = draftType(onPressCamera[13]).useAssets();
        let obj3 = draftType(onPressCamera[13]);
        const mediaKeyboardItemsPerRow = tmp(onPressCamera[14]).useMediaKeyboardItemsPerRow();
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
          let tmp10 = items;
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
                  draftType(onPressCamera[13]).refreshAssets(obj2);
                  const obj = draftType(onPressCamera[13]);
                }
              });
            }
            closure_0 = addListenerResult;
            return () => {
              if (addListenerResult != null) {
                addListenerResult.remove();
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
        const tmpResult = tmp(onPressCamera[14]);
      }
    : (channel) => {
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
        closure_15 = tmp4[1];
        const assets = draftType(onPressCamera[13]).useAssets();
        let obj2 = draftType(onPressCamera[13]);
        const tmp3 = onAttachPress;
        const mediaKeyboardItemsPerRow = channel(onPressCamera[14]).useMediaKeyboardItemsPerRow();
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
          draftType(onPressCamera[13]).refreshAssets({ batchSize: itemsPageSizeRef.current, extensions });
          let addListenerResult;
          if (flag2 != null) {
            addListenerResult = flag2.addListener(uploadLimit, () => {
              if (ref.current) {
                const obj2 = { batchSize: ref2.current, extensions };
                draftType(onPressCamera[13]).refreshAssets(obj2);
                const obj = draftType(onPressCamera[13]);
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
        let obj3 = channel(onPressCamera[14]);
        closure_19 = channel(onPressCamera[16]).useAppEntryKey();
        const height = draftType(onPressCamera[18])({ ignoreKeyboard: true }).height;
        let result = height * onManageLimited;
        __initData5 = result;
        const diff = height - channel(onPressCamera[19]).NAV_BAR_HEIGHT_MULTILINE - draftType(onPressCamera[17])().top;
        c22 = diff;
        const obj4 = channel(onPressCamera[16]);
        const bottomSheetInternal = channel(onPressCamera[20]).useBottomSheetInternal();
        const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
        const tmp16 = onAttachPress(onPressItem.useState({ minimum: result, maximum: diff }), 2);
        const first1 = tmp16[0];
        let maximum = first1.minimum;
        closure_24 = tmp18;
        const obj5 = channel(onPressCamera[20]);
        class U {
          constructor() {
            return animatedSnapPoints.get();
          }
        }
        U.__closure = { animatedSnapPoints };
        U.__workletHash = 8374269528981;
        U.__initData = height;
        const fn = function $(arg0, arg1) {
          if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
            let first = arg0[0];
            const tmp2Result = ReanimatedRexport;
            if (first == null) {
              first = c21;
            }
            const obj2 = { minimum: height - first, maximum: null };
            let tmp8 = arg0[arg0.length - 1];
            if (tmp8 == null) {
              tmp8 = c22;
            }
            obj2.maximum = height - tmp8;
            ReanimatedRexport.runOnJS(closure_24)(obj2);
            const runOnJSResult = ReanimatedRexport.runOnJS(closure_24);
          }
          obj = cheapWorkletShallowEqual;
          tmp = arg1;
        };
        const obj6 = channel(onPressCamera[11]);
        fn.__closure = {
          cheapWorkletArrayShallowEqual: channel(onPressCamera[21]).cheapWorkletArrayShallowEqual,
          runOnJS: channel(onPressCamera[11]).runOnJS,
          setBottomSheetState: tmp16[1],
          windowHeight: height,
          computedStartHeight: result,
          maxDynamicContentSize: diff,
        };
        fn.__workletHash = 1615707814147;
        fn.__initData = __initData5;
        const animatedReaction = obj6.useAnimatedReaction(U, fn);
        const tmp20 = itemsPerRow(bottomSheetInternal.animatedIndex);
        const obj7 = {
          cheapWorkletArrayShallowEqual: channel(onPressCamera[21]).cheapWorkletArrayShallowEqual,
          runOnJS: channel(onPressCamera[11]).runOnJS,
          setBottomSheetState: tmp16[1],
          windowHeight: height,
          computedStartHeight: result,
          maxDynamicContentSize: diff,
        };
        if (flag) {
          flag = tmp9(tmp7[22]).isImageCaptureIntentSupported();
          const tmp9Result = tmp9(tmp7[22]);
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
          const nextAssetPage = DeviceMediaDefault.getNextAssetPage({
            batchSize: itemsPageSizeRef.current,
            extensions,
          });
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
                      tmp6Result2 = channel(onPressCamera[24]);
                    }
                    tmp6Result = channel(onPressCamera[24]);
                  }
                  obj3 = channel(onPressCamera[24]);
                }
              }, rowIndex.toString()),
            ),
          items5,
        );
        width = tmp6(tmp7[18])().width;
        const items6 = [width, itemsPerRow];
        const items7 = [onViewAll, flag2];
        const memo1 = obj.useMemo(() => {
          const result =
            (width - (MediaKeyboardItem.PARENT_PADDING + MediaKeyboardItem.CHILD_PADDING * (itemsPerRow - 1))) /
            itemsPerRow;
          return result + MediaKeyboardItem.SEPARATOR_SIZE;
        }, items6);
        const callback4 = obj.useCallback(
          () => jsx(MediaKeyboardFooterDefault, { disabled: flag2, onViewAll }),
          items7,
        );
        if (tmp20) {
          maximum = first1.maximum;
        }
        const items8 = [maximum];
        const memo2 = obj.useMemo(() => ({ height: maximum }), items8);
        const tmp3Result = tmp3(
          onPressItem.useState(() => 32 + 36 * DimensionsStore.getState().byAppEntry[closure_19].fontScale),
          2,
        );
        onHeightChange = tmp3Result[1];
        const items9 = [onManageLimited];
        const callback5 = obj.useCallback(
          () => jsx(MediaKeyboardLimitedPickerNoticeDefault, { onPress: onManageLimited, onHeightChange }),
          items9,
        );
        const tmp21 = disableWhenReachedLimit();
        const modalDismissGuardRefreshControl = channel(onPressCamera[27]).useModalDismissGuardRefreshControl();
        const tmp9Result3 = channel(onPressCamera[27]);
        const obj8 = {
          photoPermissionStatus,
          photosEmpty: null,
          showCameraButton: null,
          onPressCamera: null,
          onManageLimited: null,
          onPressPrivacySettings: null,
        };
        let tmp32 = null != assets;
        if (tmp32) {
          tmp32 = 0 === assets.edges.length;
        }
        obj8.photosEmpty = tmp32;
        obj8.showCameraButton = flag;
        obj8.onPressCamera = function onPressCamera() {
          return onPressCamera(onViewAll.TAKE_A_PHOTO_BUTTON);
        };
        obj8.onManageLimited = onManageLimited;
        obj8.onPressPrivacySettings = draftType(onPressCamera[29]);
        let mediaEmptyStateComponentOrNull = channel(onPressCamera[28]).getMediaEmptyStateComponentOrNull(obj8);
        if (null == mediaEmptyStateComponentOrNull) {
          let tmp34;
          if (photoPermissionStatus === includedUploadIds.LIMITED) {
            tmp34 = callback5;
          }
          const obj9 = {
            renderHeader: tmp34,
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
            num3 = tmp3Result[0];
          }
          obj9.headerSize = num3;
          const items10 = [memo2, tmp21.listContainer];
          obj9.style = items10;
          obj9.renderItem = callback3;
          const items11 = [memo.length];
          obj9.sections = items11;
          obj9.itemSize = memo1;
          obj9.refreshControl = modalDismissGuardRefreshControl;
          obj9.onEndReached = callback2;
          obj9.onScroll = callback;
          const intl = tmp9(tmp7[30]).intl;
          obj9.accessibilityLabel = intl.string(tmp9(tmp7[30]).t.XONG6A);
          obj9.footerSize = tmp9(tmp7[25]).FOOTER_HEIGHT;
          obj9.renderFooter = callback4;
          obj9.chunkBase = maximum;
          let prop;
          if (!tmp20) {
            prop = tmp9(tmp7[31]).MINIMUM_BATCHES_TO_RENDER;
          }
          obj9.batchesToRender = prop;
          mediaEmptyStateComponentOrNull = extensions(tmp6(tmp7[31]), obj9);
          let tmp6Result = tmp6(tmp7[31]);
        }
        return mediaEmptyStateComponentOrNull;
      },
);
