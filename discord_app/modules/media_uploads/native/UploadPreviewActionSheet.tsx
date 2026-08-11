// discord_app/modules/media_uploads/native/UploadPreviewActionSheet.tsx
import getSystemLocale from "getSystemLocale";
import useCanSetThumbnail from "useCanSetThumbnail";
import get_ActivityIndicator from "CircleErrorIcon";
import { DraftType } from "handleChanged";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "Background";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { contentContainer: { padding: 16 }, imageWrap: null, imageContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, width: "100%" };
createCacheKey[1] = createCacheKey;
let obj1 = { overflow: "hidden", alignSelf: "center", borderRadius: null };
obj1[2] = require("Themes").radii.md - require("Themes").space.PX_4;
createCacheKey[2] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_uploads/native/UploadPreviewActionSheet.tsx");

export default function UploadPreviewActionSheet(onAdd) {
  let c11;
  let useCanSetThumbnail;
  let disableAddDescription;
  let isImage;
  let isThumbnail;
  let tmp18;
  onAdd = onAdd.onAdd;
  const onEdit = onAdd.onEdit;
  const onRemove = onAdd.onRemove;
  const channelId = onAdd.channelId;
  ({ onClose: useCanSetThumbnail, disableAddDescription } = onAdd);
  if (disableAddDescription === undefined) {
    disableAddDescription = false;
  }
  const upload = onAdd.upload;
  let c5;
  let id;
  let isVideo;
  let item;
  let spoiler;
  let width;
  let createCacheKey;
  const tmp = createCacheKey();
  c5 = tmp;
  id = upload.id;
  isVideo = upload.isVideo;
  ({ isImage, isThumbnail } = upload);
  item = upload.item;
  spoiler = upload.spoiler;
  onEdit(onRemove[8])(item.platform === onAdd(onRemove[9]).UploadPlatform.REACT_NATIVE, "Upload must be a React Native upload item.");
  width = onEdit(onRemove[10])().width;
  const bottom = onEdit(onRemove[11])().bottom;
  onEdit(onRemove[12])(() => () => {
    if (useCanSetThumbnail != null) {
      tmp();
    }
  });
  let obj = React;
  const items = [width, item, tmp];
  const size = React.useMemo(() => {
    let height;
    let width;
    ({ height, width } = item);
    width = Math.min(width, item) - 2 * _undefined.contentContainer.padding - 2 * _undefined.imageWrap.padding;
    if (null != height) {
      if (null != width) {
        if (0 !== height) {
          if (0 !== width) {
            const _Math = Math;
            const result = width / Math.max(width, height);
            const obj = { width: null, height: null };
            obj[0] = width * result;
            obj[1] = height * result;
            return obj;
          }
        }
        return { width: 300, height: 300 };
      }
    }
    return { width, height: width };
  }, items);
  const items1 = [onRemove, id];
  const items2 = [onAdd];
  const callback = React.useCallback(() => {
    onEdit(onRemove[13]).hideActionSheet();
    if (onRemove != null) {
      tmp2(id);
    }
  }, items1);
  const items3 = [onEdit, item];
  const callback1 = React.useCallback(() => {
    onEdit(onRemove[13]).hideActionSheet();
    if (onAdd != null) {
      onAdd();
    }
  }, items2);
  const items4 = [isVideo, item];
  const callback2 = React.useCallback(() => {
    let height;
    let uri;
    let width;
    let obj = onEdit(onRemove[13]);
    obj.hideActionSheet();
    ({ width, height, uri } = item);
    obj = { uri, freeStyleCropEnabled: true, width: null, height: null };
    let tmp2;
    if (0 !== width) {
      tmp2 = width;
    }
    obj[2] = tmp2;
    let tmp3;
    if (0 !== height) {
      tmp3 = height;
    }
    obj[3] = tmp3;
    const obj2 = onEdit(onRemove[14]);
    const launchCropperResult = onEdit(onRemove[14]).launchCropper(obj);
    onEdit(onRemove[14]).launchCropper(obj).then((path) => {
      if (closure_1 != null) {
        tmp(outer1_0(outer1_2[15]).cropResultToUploadItem(path));
        const obj = outer1_0(outer1_2[15]);
      }
    }).catch((code) => {
      if ("E_PICKER_CANCELLED" !== code.code) {
        let obj = callback2(4021);
        obj = { key: "CROP_ERROR", IconComponent: null, content: null };
        obj[1] = callback(7795).CircleErrorIcon;
        obj[2] = code.message;
        obj.open(obj);
      }
    });
  }, items3);
  const memo = React.useMemo(() => {
    const obj = onAdd(onRemove[18]);
    return obj.getCaptionLabel(onAdd(onRemove[18]).getType(item.uri), isVideo, item);
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
  const obj1 = { padding: null, paddingBottom: null };
  obj1[0] = onEdit(onRemove[7]).space.PX_16;
  obj1[1] = bottom;
  obj[0] = obj1;
  let obj2 = {
    spacing: 16,
    onLayout(nativeEvent) {
      _undefined2(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  const items5 = [spoiler(onAdd(onRemove[24]).Text, { variant: "text-md/semibold", children: item.filename }), , , ];
  const obj4 = { style: tmp.imageWrap, children: null };
  const obj5 = { style: items6, children: null };
  items6 = [tmp.imageContainer, { width: size.width, height: size.height }];
  const obj3 = { variant: "text-md/semibold", children: item.filename };
  const tmp17 = channelId(obj.useState(undefined), 2);
  if (tmp6Result.isIOS()) {
    if (isVideo) {
      const uri = item.uri;
      if (uri.startsWith("file://")) {
        const obj6 = { style: null, source: null, muted: true, paused: true, preventsDisplaySleepDuringVideoPlayback: false };
        ({ width: obj12[0], height: obj12[1] } = size);
        obj6[0] = { width: null, height: null };
        const obj8 = { uri: null };
        obj8[0] = item.uri;
        obj6[1] = obj8;
        let tmp22Result = tmp22(tmp6(tmp4[26]).VideoComponent, obj6);
        const obj7 = { width: null, height: null };
      }
      const items7 = [tmp22Result, ];
      tmp22Result = null != memo;
      if (tmp22Result) {
        tmp22Result = "" !== memo;
      }
      if (tmp22Result) {
        const obj9 = { label: null };
        obj9[0] = memo;
        tmp22Result = tmp22(tmp6(tmp4[27]).Caption, obj9);
      }
      items7[1] = tmp22Result;
      obj5[1] = items7;
      obj4[1] = tmp23(tmp24, obj5);
      items5[1] = tmp22(tmp24, obj4);
      if (!tmp13) {
        if (!tmp14) {
          if (!tmp22Result4) {
            let tmp23Result = null;
          }
          items5[2] = tmp23Result;
          if (null != onRemove) {
            const obj10 = { icon: null, text: null, onPress: null, variant: "destructive" };
            obj10[0] = tmp22(tmp6(tmp4[39]).TrashIcon, { size: "sm", color: "control-primary-text-default" });
            const intl6 = tmp6(tmp4[32]).intl;
            obj10[1] = intl6.string(tmp6(tmp4[32]).t["40jBO/"]);
            obj10[2] = callback;
            let tmp22Result1 = tmp22(tmp6(tmp4[38]).Button, obj10);
          } else {
            tmp22Result1 = null;
            if (null != onAdd) {
              const obj11 = { icon: null, text: null, onPress: null };
              obj11[0] = tmp22(tmp6(tmp4[30]).ImageFileIcon, { size: "sm", color: "control-primary-text-default" });
              const intl5 = tmp6(tmp4[32]).intl;
              obj11[1] = intl5.string(tmp6(tmp4[32]).t.s7oPyG);
              obj11[2] = callback1;
              tmp22Result1 = tmp22(tmp6(tmp4[38]).Button, obj11);
            }
          }
          items5[3] = tmp22Result1;
          obj2[2] = items5;
          obj[1] = tmp23(tmp6(tmp4[23]).Stack, obj2);
          obj[2] = tmp22(tmp6(tmp4[22]).BottomSheetScrollView, obj);
          return tmp22(tmp6(tmp4[21]).BottomSheet, obj);
        }
      }
      let tmp22Result2 = null;
      if (tmp13) {
        const obj12 = { icon: null, onPress: null, label: null, arrow: true };
        obj12[0] = tmp22(tmp6(tmp4[30]).ImageFileIcon, {});
        obj12[1] = function onPress() {
          let obj = onEdit(onRemove[31]);
          obj = { source: item, channelId, id };
          return obj.open(obj);
        };
        const intl = tmp6(tmp4[32]).intl;
        obj12[2] = intl.string(tmp6(tmp4[32]).t["5S2AK+"]);
        tmp22Result2 = tmp22(tmp6(tmp4[29]).TableRow, obj12);
      }
      const items8 = [tmp22Result2, , , ];
      let tmp22Result3 = null;
      if (tmp14) {
        const obj13 = { icon: null, onPress: null, label: null, checked: null };
        obj13[0] = tmp22(tmp6(tmp4[34]).SpoilerIcon, {});
        obj13[1] = function onPress() {
          let obj = onEdit(onRemove[13]);
          obj.hideActionSheet();
          obj = { spoiler: !spoiler };
          onEdit(onRemove[35]).update(channelId, id, isVideo.ChannelMessage, obj);
        };
        const intl2 = tmp6(tmp4[32]).intl;
        obj13[2] = intl2.string(tmp6(tmp4[32]).t["gsI+xC"]);
        obj13[3] = spoiler;
        tmp22Result3 = tmp22(tmp6(tmp4[33]).TableCheckboxRow, obj13);
      }
      items8[1] = tmp22Result3;
      if (tmp22Result4) {
        const obj14 = { icon: null, label: null, onPress: null, checked: null };
        obj14[0] = tmp22(tmp6(tmp4[36]).ImageIcon, {});
        const intl3 = tmp6(tmp4[32]).intl;
        obj14[1] = intl3.string(tmp6(tmp4[32]).t.ews2pj);
        obj14[2] = tmp16;
        obj14[3] = tmp2;
        tmp22Result4 = tmp22(tmp6(tmp4[33]).TableCheckboxRow, obj14);
      }
      items8[2] = tmp22Result4;
      let tmp22Result5 = null;
      if (isImage) {
        const obj15 = { icon: null, onPress: null, label: null, arrow: true };
        obj15[0] = tmp22(tmp6(tmp4[37]).PencilSparkleIcon, {});
        obj15[1] = callback2;
        const intl4 = tmp6(tmp4[32]).intl;
        obj15[2] = intl4.string(tmp6(tmp4[32]).t.b0y3DL);
        tmp22Result5 = tmp22(tmp6(tmp4[29]).TableRow, obj15);
      }
      const obj16 = { hasIcons: true, children: null };
      items8[3] = tmp22Result5;
      obj16[1] = items8;
      tmp23Result = tmp23(tmp6(tmp4[28]).TableRowGroup, obj16);
    }
  }
  tmp22Result = tmp22(c5, { style: { width: size.width, height: size.height }, source: item });
};