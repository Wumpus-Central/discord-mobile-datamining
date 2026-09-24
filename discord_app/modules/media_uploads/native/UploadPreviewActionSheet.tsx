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
const DraftType = fn(5192).DraftType;
const ACTION_SHEET_MAX_WIDTH = fn(7484).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  contentContainer: { padding: 16 },
  imageWrap: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    padding: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.md,
    width: "100%",
  },
  imageContainer: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  width: "100%",
};
obj2.imageContainer = {
  overflow: "hidden",
  alignSelf: "center",
  borderRadius: nativeDefault.radii.md - nativeDefault.space.PX_4,
};
let closure_11 = createStyles.createStyles(obj2);
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
  const items = [width, item, tmp];
  let size = noop.useMemo(() => {
    ({ height, width } = item);
    const width1 =
      Math.min(width, ACTION_SHEET_MAX_WIDTH) -
      2 * closure_5.contentContainer.padding -
      2 * closure_5.imageWrap.padding;
    if (null != height) {
      if (null != width) {
        if (0 !== height) {
          if (0 !== width) {
            const _Math = Math;
            const result = width1 / Math.max(width, height);
            const size = { width: width * result, height: height * result };
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
          const obj2 = { key: "CROP_ERROR", IconComponent: onAdd(6940).CircleErrorIcon, content: error.message };
          onEdit(4523).open(obj2);
          const obj = onEdit(4523);
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
  let tmp22Result11 = tmp3(tmp4[19])(channelId, upload);
  const tmp5 = onEdit(onRemove[8]);
  const tmp16 = onEdit(onRemove[20])(channelId, upload);
  [tmp18, c11] = channelId(noop.useState(undefined), 2);
  let sum2;
  if (null != tmp18) {
    const sum = tmp18 + bottom;
    const sum1 = sum + tmp3(tmp4[7]).space.PX_32;
    sum2 = sum1 + tmp3(tmp4[7]).space.PX_16;
  }
  if (isImage) {
    isImage = null != onEdit;
  }
  let obj2 = { scrollable: true, startHeight: sum2, children: null };
  const obj3 = { contentContainerStyle: null, children: null };
  const tmp17 = channelId(noop.useState(undefined), 2);
  obj3.contentContainerStyle = { padding: onEdit(onRemove[7]).space.PX_16, paddingBottom: bottom };
  const obj5 = {
    spacing: 16,
    onLayout(nativeEvent) {
      _undefined(nativeEvent.nativeEvent.layout.height);
    },
    children: null,
  };
  const items5 = [spoiler(onAdd(onRemove[24]).Text, { variant: "text-md/semibold", children: item.filename }), , ,];
  const obj7 = { style: tmp.imageWrap, children: null };
  const obj8 = { style: null, children: null };
  const items6 = [tmp.imageContainer, { width: size.width, height: size.height }];
  obj8.style = items6;
  const obj4 = { padding: onEdit(onRemove[7]).space.PX_16, paddingBottom: bottom };
  const obj6 = { variant: "text-md/semibold", children: item.filename };
  if (tmp6Result.isIOS()) {
    if (isVideo) {
      const uri = item.uri;
      if (uri.startsWith("file://")) {
        const obj9 = {
          style: null,
          source: null,
          muted: true,
          paused: true,
          preventsDisplaySleepDuringVideoPlayback: false,
        };
        const size1 = { width: null, height: null };
        ({ width: obj12.width, height: obj12.height } = size);
        obj9.style = size1;
        const obj10 = { uri: item.uri };
        obj9.source = obj10;
        let tmp22Result = tmp22(tmp6(tmp4[26]).VideoComponent, obj9);
      }
      const items7 = [tmp22Result];
      let tmp22Result7 = null != memo;
      if (tmp22Result7) {
        tmp22Result7 = "" !== memo;
      }
      if (tmp22Result7) {
        const obj11 = { label: memo };
        tmp22Result7 = tmp22(tmp6(tmp4[27]).Caption, obj11);
      }
      items7[1] = tmp22Result7;
      obj8.children = items7;
      obj7.children = tmp23(tmp24, obj8);
      items5[1] = tmp22(tmp24, obj7);
      if (!tmp13) {
        if (!tmp14) {
          if (!tmp22Result11) {
            let tmp23Result = null;
          }
          items5[2] = tmp23Result;
          if (null != onRemove) {
            const obj13 = {
              icon: tmp22(tmp6(tmp4[39]).TrashIcon, { size: "sm", color: "control-primary-text-default" }),
              text: null,
              onPress: null,
              variant: "destructive",
            };
            const intl6 = tmp6(tmp4[32]).intl;
            obj13.text = intl6.string(tmp6(tmp4[32]).t["40jBO/"]);
            obj13.onPress = callback;
            let tmp22Result8 = tmp22(tmp6(tmp4[38]).Button, obj13);
          } else {
            tmp22Result8 = null;
            if (null != onAdd) {
              const obj14 = {
                icon: tmp22(tmp6(tmp4[30]).ImageFileIcon, { size: "sm", color: "control-primary-text-default" }),
                text: null,
                onPress: null,
              };
              const intl5 = tmp6(tmp4[32]).intl;
              obj14.text = intl5.string(tmp6(tmp4[32]).t.s7oPyG);
              obj14.onPress = callback1;
              tmp22Result8 = tmp22(tmp6(tmp4[38]).Button, obj14);
            }
          }
          items5[3] = tmp22Result8;
          obj5.children = items5;
          obj3.children = tmp23(tmp6(tmp4[23]).Stack, obj5);
          obj2.children = tmp22(tmp6(tmp4[22]).BottomSheetScrollView, obj3);
          return tmp22(tmp6(tmp4[21]).BottomSheet, obj2);
        }
      }
      let tmp22Result9 = null;
      if (tmp13) {
        const obj15 = {
          icon: tmp22(tmp6(tmp4[30]).ImageFileIcon, {}),
          onPress() {
            return AddImageDescriptionModalActionCreatorsDefault.open({ source: item, channelId, id });
          },
          label: null,
          arrow: true,
        };
        const intl = tmp6(tmp4[32]).intl;
        obj15.label = intl.string(tmp6(tmp4[32]).t["5S2AK+"]);
        tmp22Result9 = tmp22(tmp6(tmp4[29]).TableRow, obj15);
      }
      const items8 = [tmp22Result9, , ,];
      let tmp22Result10 = null;
      if (tmp14) {
        const obj16 = {
          icon: tmp22(tmp6(tmp4[34]).SpoilerIcon, {}),
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            UploadAttachmentActionCreatorsDefault.update(channelId, id, DraftType.ChannelMessage, {
              spoiler: !spoiler,
            });
          },
          label: null,
          checked: null,
        };
        const intl2 = tmp6(tmp4[32]).intl;
        obj16.label = intl2.string(tmp6(tmp4[32]).t["gsI+xC"]);
        obj16.checked = spoiler;
        tmp22Result10 = tmp22(tmp6(tmp4[33]).TableCheckboxRow, obj16);
      }
      items8[1] = tmp22Result10;
      if (tmp22Result11) {
        const obj17 = { icon: tmp22(tmp6(tmp4[36]).ImageIcon, {}), label: null, onPress: null, checked: null };
        const intl3 = tmp6(tmp4[32]).intl;
        obj17.label = intl3.string(tmp6(tmp4[32]).t.ews2pj);
        obj17.onPress = tmp16;
        obj17.checked = tmp2;
        tmp22Result11 = tmp22(tmp6(tmp4[33]).TableCheckboxRow, obj17);
      }
      items8[2] = tmp22Result11;
      let tmp22Result12 = null;
      if (isImage) {
        const obj18 = {
          icon: tmp22(tmp6(tmp4[37]).PencilSparkleIcon, {}),
          onPress: callback2,
          label: null,
          arrow: true,
        };
        const intl4 = tmp6(tmp4[32]).intl;
        obj18.label = intl4.string(tmp6(tmp4[32]).t.b0y3DL);
        tmp22Result12 = tmp22(tmp6(tmp4[29]).TableRow, obj18);
      }
      const obj19 = { hasIcons: true, children: null };
      items8[3] = tmp22Result12;
      obj19.children = items8;
      tmp23Result = tmp23(tmp6(tmp4[28]).TableRowGroup, obj19);
    }
  }
  tmp22Result = tmp22(closure_5, { style: { width: size.width, height: size.height }, source: item });
  const obj20 = { style: { width: size.width, height: size.height }, source: item };
  tmp6Result = onAdd(onRemove[25]);
}
