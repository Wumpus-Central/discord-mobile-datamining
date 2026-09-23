// discord_app/modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ExplicitMediaRedactionUtils from "../../ExplicitMediaRedactionUtils.tsx";
import _modDef8654 from "../../../../../_runtime/metro/08654__.js";
import _modDef9594 from "../../../../../_runtime/metro/09594__.js";
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
  const obj2 = { style: null, children: null };
  const items = [,];
  ({ mediaContainer: arr[0], elevationShadow: arr[1] } = tmp);
  obj2.style = items;
  if (obj.isVideo(url)) {
    const obj3 = {
      volume: 0,
      resizeMode: "cover",
      repeat: true,
      style: tmp.media,
      source: null,
      controls: true,
      paused: true,
    };
    const obj4 = { uri: url };
    obj3.source = obj4;
    let tmp3Result = React5(_modDef8654, obj3);
  } else {
    const obj5 = { style: null, source: null };
    const items1 = [,];
    ({ media: arr2[0], image: arr2[1] } = tmp);
    obj5.style = items1;
    const obj6 = { uri: url };
    obj5.source = obj6;
    tmp3Result = React5(hasOwnProperty, obj5);
  }
  obj2.children = tmp3Result;
  return React5(React4, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  content: { padding: nativeDefault.space.PX_16 },
  contentContainer: { justifyContent: "center", textAlign: "center", alignItems: "center" },
  heading: null,
  mediaContainer: null,
  elevationShadow: null,
  image: null,
  media: null,
  footer: null,
};
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.heading = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.mediaContainer = {
  width: "100%",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  marginTop: nativeDefault.space.PX_8,
  aspectRatio: "4 / 3",
};
const native = fn(1177);
obj2.elevationShadow = native.generateBoxShadowStyle(fn(1177).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj2.image = { resizeMode: "contain" };
let obj5 = {
  width: "100%",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xs,
  marginTop: nativeDefault.space.PX_8,
  aspectRatio: "4 / 3",
};
obj2.media = { flex: 1, borderRadius: nativeDefault.radii.xs };
let obj7 = { flex: 1, borderRadius: nativeDefault.radii.xs };
obj2.footer = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx",
);

export const handleSuccess = function handleSuccess(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet(arg0);
  const obj3 = {
    key: "explicit_media_report_false_positive_success",
    icon: _modDef9594,
    IconComponent: ShieldIcon.ShieldIcon,
    iconColor: "text-brand",
    content: null,
  };
  const intl = util.intl;
  obj3.content = intl.string(util.t.gFsTKu);
  ToastActionCreatorsDefault.open(obj3);
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
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId,
      messageId,
      context: analyticsContext,
    });
    const obj2 = {
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId,
      messageId,
      context: analyticsContext,
    };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [channelId, messageId, analyticsContext];
  const callback1 = analyticsContext.useCallback(() => {
    if (onConfirmPress != null) {
      tmp();
    }
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId,
      messageId,
      context: analyticsContext,
    });
  }, items1);
  const effect = analyticsContext.useEffect(() => {
    const obj = ExplicitMediaRedactionUtils;
    const result = obj.trackMediaRedactionAction({
      action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId,
      messageId,
      context: analyticsContext,
    });
  }, items2);
  let obj = { style: tmp.content, contentContainerStyle: tmp.contentContainer, children: null };
  let obj2 = { style: tmp.heading, variant: "heading-lg/bold", children: null };
  const intl = channelId(onConfirmPress[12]).intl;
  obj2.children = intl.string(channelId(onConfirmPress[12]).t.TPpVkI);
  const items3 = [closure_7(channelId(onConfirmPress[16]).Text, obj2), , ,];
  const obj3 = { variant: "text-sm/normal", children: null };
  const intl2 = channelId(onConfirmPress[12]).intl;
  obj3.children = intl2.string(channelId(onConfirmPress[12]).t["z4du/I"]);
  items3[1] = closure_7(channelId(onConfirmPress[16]).Text, obj3);
  let tmp5Result = null != attachmentPreview;
  if (tmp5Result) {
    const obj4 = { attachment: attachmentPreview };
    tmp5Result = closure_7(ExplicitMediaFalsePositivePreviewAttachment, obj4);
  }
  items3[2] = tmp5Result;
  let tmp5Result2 = null != embedPreview;
  if (tmp5Result2) {
    const obj5 = { embed: embedPreview };
    tmp5Result2 = closure_7(ExplicitMediaFalsePositivePreviewEmbed, obj5);
  }
  const obj6 = { startExpanded: true, children: null };
  const obj7 = { children: null };
  items3[3] = tmp5Result2;
  obj.children = items3;
  const items4 = [closure_8(closure_6, obj)];
  const obj8 = { style: tmp.footer, children: null };
  const obj9 = {
    variant: "primary",
    size: "md",
    disabled: isReportFalsePositiveLoading,
    loading: isReportFalsePositiveLoading,
    text: null,
    onPress: null,
  };
  const intl3 = tmp6(onConfirmPress[12]).intl;
  obj9.text = intl3.string(channelId(onConfirmPress[12]).t["cY+Oob"]);
  obj9.onPress = callback1;
  const items5 = [closure_7(channelId(onConfirmPress[17]).Button, obj9)];
  const obj10 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl4 = tmp6(onConfirmPress[12]).intl;
  obj10.text = intl4.string(channelId(onConfirmPress[12]).t["ETE/oC"]);
  obj10.onPress = callback;
  items5[1] = closure_7(channelId(onConfirmPress[17]).Button, obj10);
  obj8.children = items5;
  items4[1] = closure_8(closure_4, obj8);
  obj7.children = items4;
  obj6.children = closure_8(closure_4, obj7);
  return closure_7(channelId(onConfirmPress[15]).BottomSheet, obj6);
};
