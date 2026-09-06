// === Module 12666: GatedContent ===

// Module 12666 (GatedContent)
import nativeDefault from "native" /* 576 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, description: null, buttonGroup: null };
createStyles = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
createStyles.container = createStyles;
createStyles.title = { textAlign: "center" };
createStyles.description = { textAlign: "center" };
createStyles.buttonGroup = { width: "100%", maxWidth: 400 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GatedContent.tsx");

export default function GatedContent(onAgree) {
  ({ agreement, agreementButtonVariant } = onAgree);
  ({ title, subtitle, description } = onAgree);
  if (agreementButtonVariant === undefined) {
    agreementButtonVariant = "primary";
  }
  ({ disagreementButtonVariant, disagreement } = onAgree);
  if (disagreementButtonVariant === undefined) {
    disagreementButtonVariant = "secondary";
  }
  onAgree = onAgree.onAgree;
  const onDisagree = onAgree.onDisagree;
  const modalType = onAgree.modalType;
  const channelId = onAgree.channelId;
  const guildId = onAgree.guildId;
  const tmp = closure_5();
  const items = [modalType, channelId, guildId];
  const effect = modalType.useEffect(() => {
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  const callback = modalType.useCallback(() => {
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  const callback1 = modalType.useCallback(() => {
    const result = AgeVerificationAnalyticsUtils.trackNsfwSpaceWarningModalClicked(AgeVerificationAnalyticsUtils.NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
    if (onAgree != null) {
      onAgree();
    }
  }, items2);
  let obj = { spacing: 16, style: tmp.container, children: null };
  obj = { align: "center", children: null };
  obj = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title };
  const items3 = [channelId(onAgree(onDisagree[6]).Text, obj), subtitle, channelId(onAgree(onDisagree[6]).Text, { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description })];
  obj.children = items3;
  const items4 = [guildId(onAgree(onDisagree[5]).Stack, obj), ];
  const obj2 = { style: tmp.buttonGroup, children: null };
  let tmp8Result = null != agreement;
  if (tmp8Result) {
    tmp8Result = null != onAgree;
  }
  if (tmp8Result) {
    const obj3 = { variant: agreementButtonVariant, onPress: callback1, text: agreement };
    tmp8Result = tmp8(tmp6(tmp7[8]).Button, obj3);
  }
  const items5 = [tmp8Result, channelId(onAgree(onDisagree[8]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback })];
  obj2.children = items5;
  items4[1] = guildId(onAgree(onDisagree[7]).ButtonGroup, obj2);
  obj.children = items4;
  return guildId(onAgree(onDisagree[5]).Stack, obj);
};