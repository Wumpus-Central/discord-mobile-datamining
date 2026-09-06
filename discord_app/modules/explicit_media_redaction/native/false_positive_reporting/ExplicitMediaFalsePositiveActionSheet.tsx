// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import utils_UploadUtils from "../../../../utils/native/UploadUtils.tsx";
import ExplicitMediaRedactionUtils from "../../ExplicitMediaRedactionUtils.tsx";
import _modDef8308 from "../../../../../_runtime/metro/08308__.js";
import _modDef9401 from "../../../../../_runtime/metro/09401__.js";
import ShieldIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ExplicitMediaFalsePositivePreviewEmbed(embed) {
  embed = embed.embed;
  if (undefined !== embed.video) {
    if ("gifv" !== embed.type) {
      let url = embed.video.url;
    }
    let tmp = null;
    if (null != url) {
      const obj = { url };
      tmp = React5(ExplicitMediaFalsePositivePreview, obj);
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
    const obj = { url };
    tmp = React5(ExplicitMediaFalsePositivePreview, obj);
  }
  return tmp;
}
function ExplicitMediaFalsePositivePreview(url) {
  url = url.url;
  const tmp = closure_12();
  let obj = { style: null, children: null };
  const items = [,];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  obj.style = items;
  if (obj.isVideo(url)) {
    obj = {
      volume: 0,
      resizeMode: "cover",
      repeat: true,
      style: tmp.media,
      source: null,
      controls: true,
      paused: true,
    };
    const obj1 = { uri: url };
    obj.source = obj1;
    let tmp3Result = tmp3(_modDef8308, obj);
  } else {
    const obj2 = { style: null, source: null };
    const items1 = [,];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj2.style = items1;
    const obj3 = { uri: url };
    obj2.source = obj3;
    tmp3Result = tmp3(hasOwnProperty, obj2);
  }
  obj.children = tmp3Result;
  return React5(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  content: null,
  contentContainer: null,
  heading: null,
  mediaContainer: null,
  elevationShadow: null,
  image: null,
  media: null,
  footer: null,
};
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.contentContainer = { justifyContent: "center", textAlign: "center", alignItems: "center" };
createStyles.heading = { marginBottom: nativeDefault.space.PX_8 };
let obj1 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.mediaContainer = {
  width: "100%",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  marginTop: nativeDefault.space.PX_8,
  aspectRatio: "4 / 3",
};
const native = fn(1178);
createStyles.elevationShadow = native.generateBoxShadowStyle(fn(1178).FOUR_DP_ELEVATION_SHADOW_PARAMS);
createStyles.image = { resizeMode: "contain" };
let obj2 = {
  width: "100%",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  marginTop: nativeDefault.space.PX_8,
  aspectRatio: "4 / 3",
};
createStyles.media = { flex: 1, borderRadius: nativeDefault.radii.xs };
let obj3 = { flex: 1, borderRadius: nativeDefault.radii.xs };
createStyles.footer = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx",
);

export const handleSuccess = function handleSuccess(arg0) {
  let obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(arg0);
  obj = {
    key: "explicit_media_report_false_positive_success",
    icon: _modDef9401,
    IconComponent: ShieldIcon.ShieldIcon,
    iconColor: "text-brand",
    content: null,
  };
  const intl = util.intl;
  obj.content = intl.string(util.t.gFsTKu);
  ToastActionCreatorsDefault.open(obj);
};
export const handleError = function handleError() {
  const intl = util.intl;
  ToastUtils.presentError(intl.string(util.t.R0RpRX));
};
export const ExplicitMediaFalsePositiveActionSheet = function ExplicitMediaFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ isReportFalsePositiveLoading, attachmentPreview, embedPreview, onConfirmPress } = channelId);
  const analyticsContext = channelId.analyticsContext;
  const tmp = closure_12();
  const items = [channelId, messageId, analyticsContext];
  const items1 = [channelId, messageId, analyticsContext, onConfirmPress];
  const callback = analyticsContext.useCallback(() => {
    const obj = {
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId,
      messageId,
      context: analyticsContext,
    };
    const result = obj.trackMediaRedactionAction(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    const obj = {
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId,
      messageId,
      context: analyticsContext,
    };
    const result = obj.trackMediaRedactionAction(obj);
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    const obj = {
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId,
      messageId,
      context: analyticsContext,
    };
    const result = obj.trackMediaRedactionAction(obj);
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { style: tmp.heading, variant: "heading-lg/bold", children: null };
  const intl = channelId(onConfirmPress[12]).intl;
  obj.children = intl.string(channelId(onConfirmPress[12]).t.TPpVkI);
  const items3 = [closure_7(channelId(onConfirmPress[16]).Text, obj), , ,];
  obj = { variant: "text-sm/normal", children: null };
  const intl2 = channelId(onConfirmPress[12]).intl;
  obj.children = intl2.string(channelId(onConfirmPress[12]).t["z4du/I"]);
  items3[1] = closure_7(channelId(onConfirmPress[16]).Text, obj);
  let tmp5Result = null != attachmentPreview;
  if (tmp5Result) {
    const obj1 = { attachment: attachmentPreview };
    tmp5Result = tmp5(ExplicitMediaFalsePositivePreviewAttachment, obj1);
  }
  items3[2] = tmp5Result;
  tmp5Result = null != embedPreview;
  if (tmp5Result) {
    const obj2 = { embed: embedPreview };
    tmp5Result = tmp5(ExplicitMediaFalsePositivePreviewEmbed, obj2);
  }
  const obj3 = { startExpanded: true, children: null };
  const obj4 = { children: null };
  items3[3] = tmp5Result;
  obj.children = items3;
  const items4 = [closure_8(closure_6, obj)];
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = {
    variant: "primary",
    size: "md",
    disabled: isReportFalsePositiveLoading,
    loading: isReportFalsePositiveLoading,
    text: null,
    onPress: null,
  };
  const intl3 = tmp6(tmp7[12]).intl;
  obj6.text = intl3.string(channelId(onConfirmPress[12]).t["cY+Oob"]);
  obj6.onPress = callback1;
  const items5 = [closure_7(channelId(onConfirmPress[17]).Button, obj6)];
  const obj7 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl4 = tmp6(tmp7[12]).intl;
  obj7.text = intl4.string(channelId(onConfirmPress[12]).t["ETE/oC"]);
  obj7.onPress = callback;
  items5[1] = closure_7(channelId(onConfirmPress[17]).Button, obj7);
  obj5.children = items5;
  items4[1] = closure_8(closure_4, obj5);
  obj4.children = items4;
  obj3.children = closure_8(closure_4, obj4);
  return closure_7(channelId(onConfirmPress[15]).BottomSheet, obj3);
};
