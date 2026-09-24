// discord_app/modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const END_CARD_IMAGE_SIZE = fn(15391).END_CARD_IMAGE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles(() => {
  const obj = { image: null, info: null, ctaContainer: null };
  const size = {
    width: END_CARD_IMAGE_SIZE,
    height: END_CARD_IMAGE_SIZE,
    borderRadius: nativeDefault.radii.xl,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  obj.image = size;
  obj.info = { alignItems: "center", marginTop: nativeDefault.space.PX_12 };
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
  getQuestImpressionId = bounty(getQuestImpressionId[6]).useGetQuestImpressionId();
  let obj = bounty(getQuestImpressionId[6]);
  const bountyCtaInfo = bounty(getQuestImpressionId[7]).getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    const size = { assetUrl: bountyCtaInfo.iconImageUri, width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE };
    scaledImageUrl = tmp2(tmp3[8]).getScaledImageUrl(size);
    const tmp2Result = tmp2(tmp3[8]);
  }
  const items = [, , ,];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = getQuestImpressionId;
  items[3] = sourceQuestContent;
  let callback;
  if (!flag) {
    callback = noop.useCallback(() => {
      const obj = QuestPlatformUtils;
      const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
      const result = obj.openAdGameLinkDirectly(obj2, {
        content: QuestContent.QuestContent.VIDEO_MODAL_ICON_END_CARD,
        ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
        impressionId: getQuestImpressionId(),
        sourceQuestContent,
      });
    }, items);
  }
  const obj3 = {
    onPress: callback,
    disabled: flag,
    hitSlop: 16,
    accessibilityRole: "button",
    accessibilityLabel: bountyCtaInfo.label,
    style: tmp.ctaContainer,
    children: null,
  };
  const items1 = [
    closure_7(sourceQuestContent(getQuestImpressionId[13]), { source: { uri: scaledImageUrl }, style: tmp.image }),
  ];
  const obj5 = {
    style: tmp.info,
    children: closure_7(bounty(getQuestImpressionId[14]).Text, {
      variant: "text-md/semibold",
      color: "text-strong",
      children: bountyCtaInfo.label,
    }),
  };
  items1[1] = closure_7(closure_5, obj5);
  obj3.children = items1;
  return closure_8(closure_4, obj3);
}
