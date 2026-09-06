// === Module 15043: BountiesEndCardPressableCta ===

// Module 15043 (BountiesEndCardPressableCta)
import nativeDefault from "native" /* 576 */;
import QuestContent from "QuestContent" /* 5449 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11496 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const END_CARD_IMAGE_SIZE = fn(15044).END_CARD_IMAGE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = { image: null, info: null, ctaContainer: null };
  const size = { width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
  obj.image = size;
  obj = { gap: nativeDefault.space.PX_4, alignItems: "center", marginTop: nativeDefault.space.PX_12 };
  obj.info = obj;
  obj.ctaContainer = { position: "relative", alignItems: "center" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default function BountiesEndCardPressableCta(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let getQuestImpressionId;
  const tmp = closure_9();
  let obj = bounty(getQuestImpressionId[6]);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  let obj1 = bounty(getQuestImpressionId[7]);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    const size = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
    scaledImageUrl = tmp2(tmp3[8]).getScaledImageUrl(size);
    const tmp2Result = tmp2(tmp3[8]);
  }
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = getQuestImpressionId;
  items[3] = sourceQuestContent;
  let callback;
  if (!flag) {
    callback = noop.useCallback(() => {
      let obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
      obj = { content: QuestContent.QuestContent.VIDEO_MODAL_ICON_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result = obj.openAdGameLinkDirectly(obj, obj);
    }, items);
  }
  obj = { onPress: callback, disabled: flag, hitSlop: 16, accessibilityRole: "button", accessibilityLabel: bountyCtaInfo.label, style: tmp.ctaContainer, children: null };
  obj = { source: { uri: scaledImageUrl }, style: tmp.image };
  const items1 = [closure_7(sourceQuestContent(getQuestImpressionId[13]), obj), ];
  obj1 = { style: tmp.info, children: null };
  const items2 = [closure_7(bounty(getQuestImpressionId[14]).Text, { variant: "text-md/semibold", color: "text-strong", children: bountyCtaInfo.label }), closure_7(bounty(getQuestImpressionId[14]).Text, { variant: "text-sm/medium", color: "text-default", children: bountyCtaInfo.subtext })];
  obj1.children = items2;
  items1[1] = closure_8(closure_5, obj1);
  obj.children = items1;
  return closure_8(closure_4, obj);
};