// discord_app/modules/media_uploads/native/UploadPreviewActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import ImagePickerDefault from "../../image/native/ImagePicker.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import AddImageDescriptionModalActionCreatorsDefault from "../../image_upload/native/AddImageDescriptionModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DraftType = fn(4901).DraftType;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { contentContainer: { padding: 16 }, imageWrap: null, imageContainer: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  width: "100%",
};
createStyles.imageWrap = createStyles;
createStyles.imageContainer = {
  overflow: "hidden",
  alignSelf: "center",
  borderRadius: nativeDefault.radii.md - nativeDefault.space.PX_4,
};
let closure_11 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_uploads/native/UploadPreviewActionSheet.tsx");

export default function UploadPreviewActionSheet(onAdd) {
  onAdd = onAdd.onAdd;
  const onEdit = onAdd.onEdit;
  const onRemove = onAdd.onRemove;
  const channelId = onAdd.channelId;
  ({ onClose: noop, disableAddDescription } = onAdd);
  if (disableAddDescription === undefined) {
    disableAddDescription = false;
  }
  const upload = onAdd.upload;
  c11 = undefined;
  const tmp = c11();
  closure_5 = tmp;
  const id = upload.id;
  const isVideo = upload.isVideo;
  ({ isImage, isThumbnail } = upload);
  const item = upload.item;
  const spoiler = upload.spoiler;
  onEdit(onRemove[8])(
    item.platform === onAdd(onRemove[9]).UploadPlatform.REACT_NATIVE,
    "Upload must be a React Native upload item.",
  );
  const width = onEdit(onRemove[10])().width;
  const bottom = onEdit(onRemove[11])().bottom;
  onEdit(onRemove[12])(() => () => {
    if (closure_1_4 != null) {
      tmp();
    }
  });
  let obj = noop;
  const items = [width, item, tmp];
  let size = noop.useMemo(() => {
    ({ height, width } = item);
    width =
      Math.min(width, ACTION_SHEET_MAX_WIDTH) -
      2 * closure_5.contentContainer.padding -
      2 * closure_5.imageWrap.padding;
    if (null != height) {
      if (null != width) {
        if (0 !== height) {
          if (0 !== width) {
            const _Math = Math;
            const result = width / Math.max(width, height);
            const size = { width: width * result, height: height * result };
            return size;
          }
        }
        return { width: 300, height: 300 };
      }
    }
    return { width, height: width };
  }, items);
  const items1 = [onRemove, id];
  const items2 = [onAdd];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (onRemove != null) {
      tmp2(id);
    }
  }, items1);
  const items3 = [onEdit, item];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (onAdd != null) {
      onAdd();
    }
  }, items2);
  const items4 = [isVideo, item];
  const callback2 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ({ width, height, uri } = item);
    const size = { uri, freeStyleCropEnabled: true, width: null, height: null };
    let tmp2;
    if (0 !== width) {
      tmp2 = width;
    }
    size.width = tmp2;
    let tmp3;
    if (0 !== height) {
      tmp3 = height;
    }
    size.height = tmp3;
    const launchCropperResult = ImagePickerDefault.launchCropper(size);
    ImagePickerDefault.launchCropper(size)
      .then((result) => {
        if (onEdit != null) {
          tmp(onAdd(onRemove[15]).cropResultToUploadItem(result));
          const obj = onAdd(onRemove[15]);
        }
      })
      .catch((error) => {
        if ("E_PICKER_CANCELLED" !== error.code) {
          onEdit(4259);
          const obj = { key: "CROP_ERROR", IconComponent: onAdd(6610).CircleErrorIcon, content: error.message };
          obj.open(obj);
        }
      });
  }, items3);
  const memo = noop.useMemo(() => {
    const obj = utils_UploadUtils;
    return obj.getCaptionLabel(utils_UploadUtils.getType(item.uri), isVideo, item);
  }, items4);
  let tmp13 = isImage;
  if (isImage) {
    tmp13 = !disableAddDescription;
  }
  let tmp14 = !tmp2;
  if (!(undefined !== isThumbnail && isThumbnail)) {
    tmp14 = !onAdd.disableSpoiler;
  }
  let tmp22Result4 = tmp3(tmp4[19])(channelId, upload);
  const tmp5 = onEdit(onRemove[8]);
  const tmp16 = onEdit(onRemove[20])(channelId, upload);
  [tmp18, c11] = channelId(obj.useState(undefined), 2);
  let sum2;
  if (null != tmp18) {
    const sum = tmp18 + bottom;
    const sum1 = sum + tmp3(tmp4[7]).space.PX_32;
    sum2 = sum1 + tmp3(tmp4[7]).space.PX_16;
  }
  if (isImage) {
    isImage = null != onEdit;
  }
  obj = { scrollable: true, startHeight: sum2, children: null };
  obj = { contentContainerStyle: null, children: null };
  const tmp17 = channelId(obj.useState(undefined), 2);
  obj.contentContainerStyle = { padding: onEdit(onRemove[7]).space.PX_16, paddingBottom: bottom };
  let obj2 = {
    spacing: 16,
    onLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.height);
    },
    children: null,
  };
  const items5 = [spoiler(onAdd(onRemove[24]).Text, { variant: "text-md/semibold", children: item.filename }), , ,];
  const obj4 = { style: tmp.imageWrap, children: null };
  const obj5 = { style: null, children: null };
  const items6 = [tmp.imageContainer, { width: size.width, height: size.height }];
  obj5.style = items6;
  const obj1 = { padding: onEdit(onRemove[7]).space.PX_16, paddingBottom: bottom };
  const obj3 = { variant: "text-md/semibold", children: item.filename };
  if (tmp6Result.isIOS()) {
    if (isVideo) {
      const uri = item.uri;
      if (uri.startsWith("file://")) {
        const obj6 = {
          style: null,
          source: null,
          muted: true,
          paused: true,
          preventsDisplaySleepDuringVideoPlayback: false,
        };
        size = { width: null, height: null };
        ({ width: obj12.width, height: obj12.height } = size);
        obj6.style = size;
        const obj7 = { uri: item.uri };
        obj6.source = obj7;
        let tmp22Result = tmp22(tmp6(tmp4[26]).VideoComponent, obj6);
      }
      const items7 = [tmp22Result];
      tmp22Result = null != memo;
      if (tmp22Result) {
        tmp22Result = "" !== memo;
      }
      if (tmp22Result) {
        const obj8 = { label: memo };
        tmp22Result = tmp22(tmp6(tmp4[27]).Caption, obj8);
      }
      items7[1] = tmp22Result;
      obj5.children = items7;
      obj4.children = tmp23(tmp24, obj5);
      items5[1] = tmp22(tmp24, obj4);
      if (!tmp13) {
        if (!tmp14) {
          if (!tmp22Result4) {
            let tmp23Result = null;
          }
          items5[2] = tmp23Result;
          if (null != onRemove) {
            const obj9 = {
              icon: tmp22(tmp6(tmp4[39]).TrashIcon, { size: "sm", color: "control-primary-text-default" }),
              text: null,
              onPress: null,
              variant: "destructive",
            };
            const intl6 = tmp6(tmp4[32]).intl;
            obj9.text = intl6.string(tmp6(tmp4[32]).t["40jBO/"]);
            obj9.onPress = callback;
            let tmp22Result1 = tmp22(tmp6(tmp4[38]).Button, obj9);
          } else {
            tmp22Result1 = null;
            if (null != onAdd) {
              const obj10 = {
                icon: tmp22(tmp6(tmp4[30]).ImageFileIcon, { size: "sm", color: "control-primary-text-default" }),
                text: null,
                onPress: null,
              };
              const intl5 = tmp6(tmp4[32]).intl;
              obj10.text = intl5.string(tmp6(tmp4[32]).t.s7oPyG);
              obj10.onPress = callback1;
              tmp22Result1 = tmp22(tmp6(tmp4[38]).Button, obj10);
            }
          }
          items5[3] = tmp22Result1;
          obj2.children = items5;
          obj.children = tmp23(tmp6(tmp4[23]).Stack, obj2);
          obj.children = tmp22(tmp6(tmp4[22]).BottomSheetScrollView, obj);
          return tmp22(tmp6(tmp4[21]).BottomSheet, obj);
        }
      }
      let tmp22Result2 = null;
      if (tmp13) {
        const obj11 = {
          icon: tmp22(tmp6(tmp4[30]).ImageFileIcon, {}),
          onPress() {
            const obj = { source: item, channelId, id };
            return obj.open(obj);
          },
          label: null,
          arrow: true,
        };
        const intl = tmp6(tmp4[32]).intl;
        obj11.label = intl.string(tmp6(tmp4[32]).t["5S2AK+"]);
        tmp22Result2 = tmp22(tmp6(tmp4[29]).TableRow, obj11);
      }
      const items8 = [tmp22Result2, , ,];
      let tmp22Result3 = null;
      if (tmp14) {
        const obj12 = {
          icon: tmp22(tmp6(tmp4[34]).SpoilerIcon, {}),
          onPress() {
            let obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            obj = { spoiler: !spoiler };
            UploadAttachmentActionCreatorsDefault.update(channelId, id, DraftType.ChannelMessage, obj);
          },
          label: null,
          checked: null,
        };
        const intl2 = tmp6(tmp4[32]).intl;
        obj12.label = intl2.string(tmp6(tmp4[32]).t["gsI+xC"]);
        obj12.checked = spoiler;
        tmp22Result3 = tmp22(tmp6(tmp4[33]).TableCheckboxRow, obj12);
      }
      items8[1] = tmp22Result3;
      if (tmp22Result4) {
        const obj13 = { icon: tmp22(tmp6(tmp4[36]).ImageIcon, {}), label: null, onPress: null, checked: null };
        const intl3 = tmp6(tmp4[32]).intl;
        obj13.label = intl3.string(tmp6(tmp4[32]).t.ews2pj);
        obj13.onPress = tmp16;
        obj13.checked = tmp2;
        tmp22Result4 = tmp22(tmp6(tmp4[33]).TableCheckboxRow, obj13);
      }
      items8[2] = tmp22Result4;
      let tmp22Result5 = null;
      if (isImage) {
        const obj14 = {
          icon: tmp22(tmp6(tmp4[37]).PencilSparkleIcon, {}),
          onPress: callback2,
          label: null,
          arrow: true,
        };
        const intl4 = tmp6(tmp4[32]).intl;
        obj14.label = intl4.string(tmp6(tmp4[32]).t.b0y3DL);
        tmp22Result5 = tmp22(tmp6(tmp4[29]).TableRow, obj14);
      }
      const obj15 = { hasIcons: true, children: null };
      items8[3] = tmp22Result5;
      obj15.children = items8;
      tmp23Result = tmp23(tmp6(tmp4[28]).TableRowGroup, obj15);
    }
  }
  tmp22Result = tmp22(closure_5, { style: { width: size.width, height: size.height }, source: item });
}
