// discord_app/components_native/warnings/GatedContent.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import closure_2 from "../../../_runtime/00019_noop.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, title: null, description: null, buttonGroup: null };
createCacheKey = { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, textAlign: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: "100%", maxWidth: 400 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("components_native/warnings/GatedContent.tsx");

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
  const tmp = callback();
  const items = [modalType, channelId, guildId];
  const effect = modalType.useEffect(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalViewed(modalType, channelId, guildId);
  }, items);
  const items1 = [onDisagree, modalType, channelId, guildId];
  const items2 = [onAgree, modalType, channelId, guildId];
  callback = modalType.useCallback(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalClicked(onAgree(onDisagree[4]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_DISAGREE_CTA, modalType, channelId, guildId);
    if (onDisagree != null) {
      onDisagree();
    }
  }, items1);
  const callback1 = modalType.useCallback(() => {
    const result = onAgree(onDisagree[4]).trackNsfwSpaceWarningModalClicked(onAgree(onDisagree[4]).NsfwSpaceWarningModalCta.NSFW_CHANNEL_AGREE_CTA, modalType, channelId, guildId);
    if (onAgree != null) {
      onAgree();
    }
  }, items2);
  let obj = { spacing: 16, style: tmp.container, children: null };
  obj = { align: "center", children: null };
  obj = { variant: "heading-xxl/bold", maxFontSizeMultiplier: 2, style: tmp.title, children: title };
  const items3 = [channelId(onAgree(onDisagree[6]).Text, obj), subtitle, channelId(onAgree(onDisagree[6]).Text, { color: "text-muted", variant: "text-md/medium", style: tmp.description, maxFontSizeMultiplier: 2, children: description })];
  obj[1] = items3;
  const items4 = [guildId(onAgree(onDisagree[5]).Stack, obj), ];
  const obj2 = { style: tmp.buttonGroup, children: null };
  let tmp8Result = null != agreement;
  if (tmp8Result) {
    tmp8Result = null != onAgree;
  }
  if (tmp8Result) {
    const obj3 = { variant: null, onPress: null, text: null };
    obj3[0] = agreementButtonVariant;
    obj3[1] = callback1;
    obj3[2] = agreement;
    tmp8Result = tmp8(tmp6(tmp7[8]).Button, obj3);
  }
  const items5 = [tmp8Result, channelId(onAgree(onDisagree[8]).Button, { variant: disagreementButtonVariant, text: disagreement, onPress: callback })];
  obj2[1] = items5;
  items4[1] = guildId(onAgree(onDisagree[7]).ButtonGroup, obj2);
  obj[2] = items4;
  return guildId(onAgree(onDisagree[5]).Stack, obj);
};