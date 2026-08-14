// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx
import noop from "noop";
import get_ActivityIndicator from "Button";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import Button from "Button";
import { _isNativeReflectConstruct } from "../../../../../_runtime/08934__isNativeReflectConstruct.js";
import { registerAsset } from "../../../../../_runtime/10332_registerAsset.js";
import { ShieldIcon } from "../../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { openImagePickerUnhandled } from "../../../../utils/native/UploadUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";
import { presentAddedFriendToast } from "../../../toast/native/ToastUtils.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      let url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url: null };
      obj[0] = url;
      tmp = callback(ExplicitMediaFalsePositivePreview, obj);
    }
    return tmp;
  }
  const thumbnail = embed.thumbnail;
  if (thumbnail != null) {
    url = thumbnail.url;
  }
}
function ExplicitMediaFalsePositivePreviewAttachment(attachment) {
  const url = attachment.attachment.url;
  let tmp = null;
  if (null != url) {
    const obj = { url: null };
    obj[0] = url;
    tmp = callback(ExplicitMediaFalsePositivePreview, obj);
  }
  return tmp;
}
function ExplicitMediaFalsePositivePreview(url) {
  url = url.url;
  const tmp = createCacheKey();
  let obj = openImagePickerUnhandled;
  obj = { style: items, children: null };
  items = [, ];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  if (obj.isVideo(url)) {
    obj = { volume: 0, resizeMode: "cover", repeat: true, style: null, source: null, controls: true, paused: true };
    obj[3] = tmp.media;
    const obj1 = { uri: null };
    obj1[0] = url;
    obj[4] = obj1;
    let tmp3Result = tmp3(_isNativeReflectConstruct, obj);
  } else {
    const obj2 = { style: null, source: null };
    const items1 = [, ];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj2[0] = items1;
    const obj3 = { uri: null };
    obj3[0] = url;
    obj2[1] = obj3;
    tmp3Result = tmp3(closure_5, obj2);
  }
  obj[1] = tmp3Result;
  return closure_7(closure_4, obj);
}
({ View: c4, Image: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { content: null, contentContainer: null, heading: null, mediaContainer: null, elevationShadow: null, image: null, media: null, footer: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { justifyContent: "center", textAlign: "center", alignItems: "center" };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_8 };
let obj1 = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[3] = { width: "100%", padding: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.xs, marginTop: require("Themes").space.PX_8, aspectRatio: "4 / 3" };
createCacheKey[4] = Button.generateBoxShadowStyle(require("Button").FOUR_DP_ELEVATION_SHADOW_PARAMS);
createCacheKey[5] = { resizeMode: "contain" };
let obj2 = { width: "100%", padding: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.xs, marginTop: require("Themes").space.PX_8, aspectRatio: "4 / 3" };
createCacheKey[6] = { flex: 1, borderRadius: require("Themes").radii.xs };
let obj3 = { flex: 1, borderRadius: require("Themes").radii.xs };
createCacheKey[7] = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
let result = require("jsxProd").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx");

export const handleSuccess = function handleSuccess(arg0) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj.hideActionSheet(arg0);
  obj = { key: "explicit_media_report_false_positive_success", icon: registerAsset, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.gFsTKu);
  dispatcher.open(obj);
};
export const handleError = function handleError() {
  const intl = getSystemLocale.intl;
  presentAddedFriendToast.presentError(intl.string(getSystemLocale.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = function ExplicitMediaFalsePositiveActionSheet(channelId) {
  let attachmentPreview;
  let embedPreview;
  let isReportFalsePositiveLoading;
  let onConfirmPress;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = createCacheKey();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
    messageId(onConfirmPress[8]).hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    let obj = channelId(onConfirmPress[14]);
    obj = { action: channelId(onConfirmPress[14]).TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId, messageId, context: analyticsContext };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { style: tmp.heading, variant: "heading-lg/bold", children: null };
  const intl = channelId(onConfirmPress[12]).intl;
  obj[2] = intl.string(channelId(onConfirmPress[12]).t.TPpVkI);
  const items3 = [callback(channelId(onConfirmPress[16]).Text, obj), , , ];
  obj = { variant: "text-sm/normal", children: null };
  const intl2 = channelId(onConfirmPress[12]).intl;
  obj[1] = intl2.string(channelId(onConfirmPress[12]).t["z4du/I"]);
  items3[1] = callback(channelId(onConfirmPress[16]).Text, obj);
  let tmp5Result = null != attachmentPreview;
  if (tmp5Result) {
    const obj1 = { attachment: null };
    obj1[0] = attachmentPreview;
    tmp5Result = tmp5(ExplicitMediaFalsePositivePreviewAttachment, obj1);
  }
  items3[2] = tmp5Result;
  tmp5Result = null != embedPreview;
  if (tmp5Result) {
    const obj2 = { embed: null };
    obj2[0] = embedPreview;
    tmp5Result = tmp5(ExplicitMediaFalsePositivePreviewEmbed, obj2);
  }
  const obj3 = { startExpanded: true, children: null };
  const obj4 = { children: null };
  items3[3] = tmp5Result;
  obj[2] = items3;
  const items4 = [closure_8(closure_6, obj), ];
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = { variant: "primary", size: "md", disabled: isReportFalsePositiveLoading, loading: isReportFalsePositiveLoading, text: null, onPress: null };
  const intl3 = tmp6(tmp7[12]).intl;
  obj6[4] = intl3.string(channelId(onConfirmPress[12]).t["cY+Oob"]);
  obj6[5] = callback1;
  const items5 = [callback(channelId(onConfirmPress[17]).Button, obj6), ];
  const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl4 = tmp6(tmp7[12]).intl;
  obj7[2] = intl4.string(channelId(onConfirmPress[12]).t["ETE/oC"]);
  obj7[3] = callback;
  items5[1] = callback(channelId(onConfirmPress[17]).Button, obj7);
  obj5[1] = items5;
  items4[1] = closure_8(closure_4, obj5);
  obj4[0] = items4;
  obj3[1] = closure_8(closure_4, obj4);
  return callback(channelId(onConfirmPress[15]).BottomSheet, obj3);
};