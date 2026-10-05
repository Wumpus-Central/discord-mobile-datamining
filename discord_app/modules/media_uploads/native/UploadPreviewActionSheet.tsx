// === Module 10363: UploadPreviewActionSheet ===

// Module 10363 (UploadPreviewActionSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import DraftStore from "DraftStore" /* 7031 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7274 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8812 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10364 */;
import AddImageDescriptionModalActionCreatorsDefault from "AddImageDescriptionModalActionCreators" /* 11036 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, cropRect, onAdd;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const DraftType = DraftStore.DraftType;
const AnalyticEvents = Constants.AnalyticEvents;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: { padding: 16 }, imageWrap: obj2, imageContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { overflow: "hidden", alignSelf: "center", borderRadius: nativeDefault.radii.md - nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onAdd) => {
  let disableAddDescription;
  let height;
  let isImage;
  let isThumbnail;
  let isVideo;
  let item;
  let onRemove;
  let upload;
  let width2;
  const tmp = onAdd;
  const tmp2 = onRemove;
  let obj = onAdd(onRemove[10]);
  const cResult = obj.c(77);
  onAdd = onAdd.onAdd;
  const onEdit = onAdd.onEdit;
  onRemove = onAdd.onRemove;
  const channelId = onAdd.channelId;
  const onClose = onAdd.onClose;
  ({ disableAddDescription, upload } = onAdd);
  let tmp4 = undefined !== disableAddDescription && disableAddDescription;
  const tmp5 = closure_12();
  const id = upload.id;
  ({ isVideo, isImage, isThumbnail, item } = upload);
  const spoiler = upload.spoiler;
  let tmp7 = onEdit(tmp2[11]);
  tmp7(item.platform === tmp(tmp2[12]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  let width = onEdit(tmp2[13])().width;
  const bottom = onEdit(tmp2[14])().bottom;
  const tmp6 = onEdit;
  if (cResult[0] !== onClose) {
    class O {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    cResult[0] = onClose;
    cResult[1] = O;
  } else {
    class O {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
  }
  tmp6(tmp2[15])(O);
  ({ height, width: width2 } = item);
  const diff = Math.min(width, ACTION_SHEET_MAX_WIDTH) - 2 * tmp5.contentContainer.padding - 2 * tmp5.imageWrap.padding;
  if (null != height) {
    class O {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    if (cResult[8] === channelId) {
      class O {
        constructor() {
          return () => {
            if (onClose != null) {
              tmp();
            }
          };
        }
      }
    }
    const fn = function q() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = UploadAttachmentActionCreatorsDefault;
      const obj3 = { spoiler: !spoiler };
      obj2.update(channelId, id, DraftType.ChannelMessage, obj3);
    };
    cResult[8] = channelId;
    cResult[9] = spoiler;
    cResult[10] = id;
    cResult[11] = fn;
  }
  if (cResult[6] !== diff) {
    class O {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
    tmp13[0] = diff;
    tmp13[1] = diff;
    cResult[6] = diff;
    cResult[7] = tmp13;
  } else {
    class O {
      constructor() {
        return () => {
          if (onClose != null) {
            tmp();
          }
        };
      }
    }
  }
}) : ((onAdd) => {
  let _undefined;
  let c11;
  let disableAddDescription;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isImage;
  let isThumbnail;
  let items6;
  let obj10;
  let obj4;
  let size1;
  let tmp18;
  onAdd = onAdd.onAdd;
  const onEdit = onAdd.onEdit;
  const onRemove = onAdd.onRemove;
  const channelId = onAdd.channelId;
  ({ onClose: react, disableAddDescription } = onAdd);
  if (disableAddDescription === undefined) {
    disableAddDescription = false;
  }
  const upload = onAdd.upload;
  c11 = undefined;
  const disableSpoiler = onAdd.disableSpoiler;
  const tmp = closure_12();
  let closure_5 = tmp;
  const id = upload.id;
  const isVideo = upload.isVideo;
  ({ isImage, isThumbnail } = upload);
  const tmp2 = undefined !== isThumbnail && isThumbnail;
  const item = upload.item;
  const spoiler = upload.spoiler;
  let tmp3 = onEdit;
  let tmp4 = onRemove;
  const tmp5 = onEdit(onRemove[11]);
  tmp5(item.platform === onAdd(onRemove[12]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  let width = onEdit(onRemove[13])().width;
  const bottom = onEdit(onRemove[14])().bottom;
  let tmp8 = onEdit(onRemove[15])(() => () => {
    if (closure_1_4 != null) {
      tmp();
    }
  });
  const items = [width, item, tmp];
  size = react.useMemo(() => {
    let height;
    ({ height, width } = item);
    const width1 = Math.min(width, ACTION_SHEET_MAX_WIDTH) - 2 * closure_5.contentContainer.padding - 2 * closure_5.imageWrap.padding;
    if (null != height) {
      if (null != width) {
        if (0 !== height) {
          if (0 !== width) {
            const _Math = Math;
            const result = width1 / Math.max(width, height);
            size = { width: width * result, height: height * result };
            return size;
          }
        }
        return { width: 300, height: 300 };
      }
    }
    return { width: width1, height: width1 };
  }, items);
  const items1 = [onRemove, id];
  const items2 = [onAdd];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (onRemove != null) {
      tmp2(id);
    }
  }, items1);
  const items3 = [onEdit, item];
  const callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (onAdd != null) {
      onAdd();
    }
  }, items2);
  const items4 = [isVideo, item];
  const callback2 = react.useCallback(() => {
    let tmp3;
    let tmp4;
    let obj = onEdit(onRemove[16]);
    obj.hideActionSheet();
    width = item.width;
    const height = item.height;
    const uri = item.uri;
    size = { uri, freeStyleCropEnabled: true, width: tmp3, height: tmp4 };
    tmp3 = undefined;
    const launchCropper = onEdit(onRemove[18]).launchCropper;
    onEdit(onRemove[18]);
    if (0 !== width) {
      tmp3 = width;
    }
    tmp4 = undefined;
    if (0 !== height) {
      tmp4 = height;
    }
    const launchCropperResult = launchCropper(size);
    const nextPromise = launchCropperResult.then((cropRect) => {
      if (onEdit != null) {
        const obj = MediaKeyboardUtils;
        tmp(obj.cropResultToUploadItem(cropRect));
      }
      if (null != width) {
        if (null != height) {
          cropRect = cropRect.cropRect;
          let tmp7 = width !== height;
          if (tmp7) {
            const _Math = Math;
            tmp7 = Math.abs(width / height - cropRect.height / cropRect.width) <= 0.1;
          }
          let tmp8 = !tmp7 && null != cropRect;
          if (tmp8) {
            tmp8 = width - cropRect.width > 3 || height - cropRect.height > 3;
          }
          const obj3 = { cropped: tmp8, rotated: tmp7 };
          const obj2 = AnalyticsUtilsDefault;
          obj2.track(AnalyticEvents.MEDIA_DRAFT_EDITED, obj3);
        }
      }
    });
    nextPromise.catch((error) => {
      if ("E_PICKER_CANCELLED" !== error.code) {
        const obj = { key: "CROP_ERROR", IconComponent: width(onRemove[22]).CircleErrorIcon, content: error.message };
        const open = height(onRemove[21]).open;
        height(onRemove[21]);
        open(obj);
      }
    });
  }, items3);
  const memo = react.useMemo(() => {
    const getCaptionLabel = utils_UploadUtils.getCaptionLabel;
    utils_UploadUtils;
    const obj = utils_UploadUtils;
    return getCaptionLabel(obj.getType(item.uri), isVideo, item);
  }, items4);
  let tmp22Result11 = tmp3(tmp4[24])(channelId, upload);
  const tmp16 = tmp3(tmp4[25])(channelId, upload);
  [tmp18, c11] = channelId(react.useState(undefined), 2);
  let sum2;
  channelId(react.useState(undefined), 2);
  if (null != tmp18) {
    const sum = tmp18 + bottom;
    const sum1 = sum + tmp3(tmp4[8]).space.PX_32;
    sum2 = sum1 + tmp3(tmp4[8]).space.PX_16;
  }
  if (isImage) {
    isImage = null != onEdit;
  }
  let obj2 = { scrollable: true, startHeight: sum2, children: null };
  BottomSheet = tmp6(tmp4[43]).BottomSheet;
  let obj3 = { contentContainerStyle: obj4, children: null };
  obj4 = { padding: tmp3(tmp4[8]).space.PX_16, paddingBottom: bottom };
  const BottomSheetScrollView = tmp6(tmp4[42]).BottomSheetScrollView;
  const obj5 = {
    spacing: 16,
    onLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  const Stack = tmp6(tmp4[41]).Stack;
  const items5 = [, , , ];
  const obj6 = { variant: "text-md/semibold", children: item.filename };
  items5[0] = width(onAdd(tmp4[26]).Text, obj6);
  const obj7 = { style: tmp.imageWrap, children: null };
  const obj8 = { style: items6, children: null };
  items6 = [tmp.imageContainer, { width: size.width, height: size.height }];
  const tmp6Result = onAdd(tmp4[27]);
  if (tmp6Result.isIOS()) {
    if (isVideo) {
      let tmp22Result;
      let uri = item.uri;
      if (uri.startsWith("file://")) {
        const obj9 = { style: size1, source: obj10, muted: true, paused: true, preventsDisplaySleepDuringVideoPlayback: false };
        size1 = { width: null, height: null };
        ({ width: obj12.width, height: obj12.height } = size);
        obj10 = { uri: item.uri };
        tmp22Result = tmp22(tmp6(tmp4[28]).VideoComponent, obj9);
      }
      const items7 = [tmp22Result, ];
      let tmp22Result7 = null != memo && "" !== memo;
      if (tmp22Result7) {
        const obj11 = { label: memo };
        tmp22Result7 = tmp22(tmp6(tmp4[29]).Caption, obj11);
      }
      items7[1] = tmp22Result7;
      obj8.children = items7;
      obj7.children = c11(id, obj8);
      items5[1] = width(id, obj7);
      if (!(isImage && !disableAddDescription)) {
        if (!(!tmp2 && !disableSpoiler)) {
          let tmp23Result;
          let tmp22Result8;
          if (!tmp22Result11) {
            tmp23Result = null;
          }
          items5[2] = tmp23Result;
          if (null != onRemove) {
            const obj13 = { icon: width(onAdd(tmp4[40]).TrashIcon, { size: "sm", color: "control-primary-text-default" }), text: intl6.string(onAdd(tmp4[34]).t["40jBO/"]), onPress: callback, variant: "destructive" };
            const Button2 = tmp6(tmp4[39]).Button;
            intl6 = tmp6(tmp4[34]).intl;
            tmp22Result8 = tmp22(Button2, obj13);
          } else {
            tmp22Result8 = null;
            if (null != onAdd) {
              const obj14 = { icon: width(onAdd(tmp4[32]).ImageFileIcon, { size: "sm", color: "control-primary-text-default" }), text: intl5.string(onAdd(tmp4[34]).t.s7oPyG), onPress: callback1 };
              const Button = tmp6(tmp4[39]).Button;
              intl5 = tmp6(tmp4[34]).intl;
              tmp22Result8 = tmp22(Button, obj14);
            }
          }
          items5[3] = tmp22Result8;
          obj5.children = items5;
          obj3.children = c11(Stack, obj5);
          obj2.children = width(BottomSheetScrollView, obj3);
          return width(BottomSheet, obj2);
        }
      }
      let tmp22Result9 = null;
      const TableRowGroup = tmp6(tmp4[30]).TableRowGroup;
      if (isImage && !disableAddDescription) {
        const obj15 = {
          icon: width(onAdd(tmp4[32]).ImageFileIcon, {}),
          onPress() {
                  const obj = AddImageDescriptionModalActionCreatorsDefault;
                  const obj2 = { source: item, channelId, id };
                  return obj.open(obj2);
                },
          label: intl.string(onAdd(tmp4[34]).t["5S2AK+"]),
          arrow: true
        };
        const TableRow = tmp6(tmp4[31]).TableRow;
        intl = tmp6(tmp4[34]).intl;
        tmp22Result9 = tmp22(TableRow, obj15);
      }
      const items8 = [tmp22Result9, , , ];
      let tmp22Result10 = null;
      if (!tmp2 && !disableSpoiler) {
        const obj16 = {
          icon: width(onAdd(tmp4[36]).SpoilerIcon, {}),
          onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj2 = UploadAttachmentActionCreatorsDefault;
                  const obj3 = { spoiler: !spoiler };
                  obj2.update(channelId, id, DraftType.ChannelMessage, obj3);
                },
          label: intl2.string(onAdd(tmp4[34]).t["gsI+xC"]),
          checked: spoiler
        };
        const TableCheckboxRow = tmp6(tmp4[35]).TableCheckboxRow;
        intl2 = tmp6(tmp4[34]).intl;
        tmp22Result10 = tmp22(TableCheckboxRow, obj16);
      }
      items8[1] = tmp22Result10;
      if (tmp22Result11) {
        const obj17 = { icon: width(onAdd(tmp4[37]).ImageIcon, {}), label: intl3.string(onAdd(tmp4[34]).t.ews2pj), onPress: tmp16, checked: tmp2 };
        const TableCheckboxRow2 = tmp6(tmp4[35]).TableCheckboxRow;
        intl3 = tmp6(tmp4[34]).intl;
        tmp22Result11 = tmp22(TableCheckboxRow2, obj17);
      }
      items8[2] = tmp22Result11;
      let tmp22Result12 = null;
      if (isImage) {
        const obj18 = { icon: width(onAdd(tmp4[38]).PencilSparkleIcon, {}), onPress: callback2, label: intl4.string(onAdd(tmp4[34]).t.b0y3DL), arrow: true };
        const TableRow2 = tmp6(tmp4[31]).TableRow;
        intl4 = tmp6(tmp4[34]).intl;
        tmp22Result12 = tmp22(TableRow2, obj18);
      }
      const obj19 = { hasIcons: true, children: items8 };
      items8[3] = tmp22Result12;
      tmp23Result = tmp23(TableRowGroup, obj19);
    }
  }
  const obj20 = { style: { width: size.width, height: size.height }, source: item };
  tmp22Result = tmp22(closure_5, obj20);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_uploads/native/UploadPreviewActionSheet.tsx");

export default tmp5;