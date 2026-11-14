// discord_app/modules/hexagon_campaign/native/HexagonCampaignExpiringPromoSheet.tsx
import QuestTypes from "../../quests/QuestTypes.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AnalyticsTypes from "../../quests/lib/analytics/AnalyticsTypes.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import HexagonCampaignAnalytics from "../HexagonCampaignAnalytics.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const premiumEndDate = fn(5331).HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS;
const Constants = fn(1072);
({ AnalyticsObjects: hasOwnProperty, AnalyticsPages: closure_6 } = Constants);
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsx = fn(21).jsx;
const EXPIRING_SOON_SHEET = fn(17085).HexagonCampaignContentSurface.EXPIRING_SOON_SHEET;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignExpiringPromoSheet.tsx");

export default function HexagonCampaignExpiringPromoSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let callback;
  noop = undefined;
  const trackHexagonCampaignContentViewed = markAsDismissed(callback[5]).useTrackHexagonCampaignContentViewed(
    markAsDismissed(callback[6]).QuestContent.AD_PERK_MODAL,
    EXPIRING_SOON_SHEET,
    true,
  );
  importDefault = noop.useRef(false);
  items = [markAsDismissed];
  callback = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  let obj = markAsDismissed(callback[5]);
  const unmountEffect = markAsDismissed(callback[7]).useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const callback1 = noop.useCallback(() => {
    const obj = HexagonCampaignAnalytics;
    const result = obj.trackHexagonCampaignContentClicked({
      content: QuestTypes.QuestContent.AD_PERK_MODAL,
      questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_NITRO_CHECKOUT,
    });
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj3 = {
      analyticsLocation: { page: constants2.IN_APP, object: constants.PREMIUM_UPSELL_BUTTON },
      analyticsLocations: [],
      premiumFeatureCardOrder: null,
    };
    const obj2 = {
      content: QuestTypes.QuestContent.AD_PERK_MODAL,
      questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_NITRO_CHECKOUT,
    };
    const obj4 = { page: constants2.IN_APP, object: constants.PREMIUM_UPSELL_BUTTON };
    obj3.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
    openPremiumModalDefault(obj3);
  }, items1);
  noop = noop.useCallback(() => {
    const obj = markAsDismissed(callback[5]);
    const result = obj.trackHexagonCampaignContentClicked({
      content: markAsDismissed(callback[6]).QuestContent.AD_PERK_MODAL,
      questContentCTA: markAsDismissed(callback[8]).QuestContentCTA.LEARN_MORE,
    });
    const obj2 = {
      content: markAsDismissed(callback[6]).QuestContent.AD_PERK_MODAL,
      questContentCTA: markAsDismissed(callback[8]).QuestContentCTA.LEARN_MORE,
    };
    const result1 = markAsDismissed(callback[11]).openHexagonCampaignLearnMore();
  }, []);
  const items2 = [callback];
  const callback2 = noop.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let obj3 = {
    illustration: jsx(markAsDismissed(callback[13]).BundleAbstractUI, { accessible: false }),
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  };
  const intl = markAsDismissed(callback[14]).intl;
  obj3.title = intl.string(require("../HexagonCampaign.messages.js").sL4EQm);
  const intl2 = markAsDismissed(callback[14]).intl;
  obj3.description = intl2.format(require("../HexagonCampaign.messages.js")["8WoUjt"], {
    premiumEndDate,
    learnMoreHook(children, key) {
      return jsx(
        Text_Text.Text,
        { variant: "heading-md/medium", color: "text-link", accessibilityRole: "link", onPress, children },
        key,
      );
    },
  });
  obj3.onDismiss = callback2;
  const obj5 = { text: null, onPress: null, shiny: false };
  let obj2 = markAsDismissed(callback[7]);
  let obj4 = {
    premiumEndDate,
    learnMoreHook(children, key) {
      return jsx(
        Text_Text.Text,
        { variant: "heading-md/medium", color: "text-link", accessibilityRole: "link", onPress, children },
        key,
      );
    },
  };
  const intl3 = markAsDismissed(callback[14]).intl;
  obj5.text = intl3.string(markAsDismissed(callback[14]).t.hIVbiP);
  obj5.onPress = callback1;
  obj3.actions = jsx(require("NitroUpsellButton"), { text: null, onPress: null, shiny: false });
  return jsx(markAsDismissed(callback[12]).PromoSheet, {
    illustration: jsx(markAsDismissed(callback[13]).BundleAbstractUI, { accessible: false }),
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  });
}
