// discord_app/modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { END_CARD_IMAGE_SIZE } from "END_CARD_IMAGE_SIZE";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { image: null, info: null, ctaContainer: null };
  obj = { width: END_CARD_IMAGE_SIZE, height: END_CARD_IMAGE_SIZE, borderRadius: Themes.radii.xl, borderWidth: 1, borderColor: Themes.colors.BORDER_MUTED };
  obj[0] = obj;
  obj = { gap: Themes.space.PX_4, alignItems: "center", marginTop: Themes.space.PX_12 };
  obj[1] = obj;
  obj[2] = { position: "relative", alignItems: "center" };
  return obj;
});
let result = require("END_CARD_IMAGE_SIZE").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesEndCardPressableCta.tsx");

export default function BountiesEndCardPressableCta(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let getQuestImpressionId;
  const tmp = callback2();
  let obj = bounty(getQuestImpressionId[6]);
  getQuestImpressionId = obj.useGetQuestImpressionId();
  let obj1 = bounty(getQuestImpressionId[7]);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    obj = { assetUrl: null, width: null, height: null };
    obj[0] = bountyCtaInfo.iconImageUri;
    obj[1] = END_CARD_IMAGE_SIZE;
    obj[2] = END_CARD_IMAGE_SIZE;
    scaledImageUrl = tmp2(tmp3[8]).getScaledImageUrl(obj);
    const tmp2Result = tmp2(tmp3[8]);
  }
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = getQuestImpressionId;
  items[3] = sourceQuestContent;
  let callback;
  if (!flag) {
    callback = React.useCallback(() => {
      let obj = bounty(getQuestImpressionId[9]);
      obj = { adContentId: bounty.id, adCreativeType: bounty(getQuestImpressionId[10]).AdCreativeType.BOUNTY, cta: bounty.cta };
      obj = { content: bounty(getQuestImpressionId[11]).QuestContent.VIDEO_MODAL_ICON_END_CARD, ctaContent: bounty(getQuestImpressionId[12]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
      const result = obj.openAdGameLinkDirectly(obj, obj);
    }, items);
  }
  obj = { onPress: callback, disabled: flag, hitSlop: 16, accessibilityRole: "button", accessibilityLabel: bountyCtaInfo.label, style: tmp.ctaContainer, children: null };
  obj1 = { source: { uri: scaledImageUrl }, style: tmp.image };
  const items1 = [callback(sourceQuestContent(getQuestImpressionId[13]), obj1), ];
  const obj2 = { style: tmp.info, children: null };
  const items2 = [callback(bounty(getQuestImpressionId[14]).Text, { variant: "text-md/semibold", color: "text-strong", children: bountyCtaInfo.label }), callback(bounty(getQuestImpressionId[14]).Text, { variant: "text-sm/medium", color: "text-default", children: bountyCtaInfo.subtext })];
  obj2[1] = items2;
  items1[1] = closure_8(closure_5, obj2);
  obj[6] = items1;
  return closure_8(closure_4, obj);
};