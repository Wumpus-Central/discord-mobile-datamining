// === Module 9359: premium_marketing_component_properties ===

// Module 9359 (premium_marketing_component_properties)
import _mod1212 from "module_1212" /* 1212 */;
import announcement_modal_variant_1_properties from "announcement_modal_variant_1_properties" /* 9360 */;
import premium_tab from "premium_tab" /* 9364 */;
import marketing_page_banner from "marketing_page_banner" /* 9365 */;
import payment_modal_banner from "payment_modal_banner" /* 9366 */;
import mobile_bottom_sheet from "mobile_bottom_sheet" /* 9367 */;
import gift_icon from "gift_icon" /* 9368 */;
import gift_icon_coachmark from "gift_icon_coachmark" /* 9370 */;
import gift_plan_selection_card_banner from "gift_plan_selection_card_banner" /* 9372 */;
import gift_customization_banner from "gift_customization_banner" /* 9373 */;
import billing_settings_nitro_gift_banner from "billing_settings_nitro_gift_banner" /* 9374 */;
import gift_reminder_nagbar from "gift_reminder_nagbar" /* 9375 */;
import gift_reminder_coachmark from "gift_reminder_coachmark" /* 9376 */;
import premium_tab_tooltip from "premium_tab_tooltip" /* 9377 */;
import premium_tab_popover from "premium_tab_popover" /* 9378 */;
import nagbar from "nagbar" /* 9379 */;
import plan_select_card_banner from "plan_select_card_banner" /* 9380 */;
import billing_settings_banner from "billing_settings_banner" /* 9381 */;
import shop_nagbar from "shop_nagbar" /* 9382 */;
import admin_editor_test_component from "admin_editor_test_component" /* 9383 */;
import guild_header_coachmark from "guild_header_coachmark" /* 9384 */;
import guild_boost_checkout_banner from "guild_boost_checkout_banner" /* 9385 */;
import guild_boost_marketing_page_banner from "guild_boost_marketing_page_banner" /* 9386 */;
import guild_boost_tab_banner from "guild_boost_tab_banner" /* 9387 */;
import shop_tab_tooltip from "shop_tab_tooltip" /* 9388 */;
import premium_home_perk_card from "premium_home_perk_card" /* 9389 */;
import marketing_page_bento_box from "marketing_page_bento_box" /* 9390 */;
import outbound_promotion_popover from "outbound_promotion_popover" /* 9391 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const MessageType = fn(1212).MessageType;
class PremiumMarketingComponentProperties$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 };
    items[1] = {
      no: 2,
      name: "announcement_modal_variant_1",
      kind: "message",
      oneof: "properties",
      T() {
            return require("announcement_modal_variant_1_properties").AnnouncementModalVariant1Properties;
          }
    };
    items[2] = {
      no: 4,
      name: "premium_tab",
      kind: "message",
      oneof: "properties",
      T() {
            return require("premium_tab").PremiumTab;
          }
    };
    items[3] = {
      no: 5,
      name: "marketing_page_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("marketing_page_banner").MarketingPageBanner;
          }
    };
    items[4] = {
      no: 6,
      name: "payment_modal_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("payment_modal_banner").PaymentModalBanner;
          }
    };
    items[5] = {
      no: 7,
      name: "mobile_bottom_sheet",
      kind: "message",
      oneof: "properties",
      T() {
            return require("mobile_bottom_sheet").MobileBottomSheet;
          }
    };
    items[6] = {
      no: 8,
      name: "gift_icon",
      kind: "message",
      oneof: "properties",
      T() {
            return require("gift_icon").GiftIcon;
          }
    };
    items[7] = {
      no: 9,
      name: "gift_icon_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return require("gift_icon_coachmark").GiftIconCoachmark;
          }
    };
    items[8] = {
      no: 10,
      name: "gift_plan_selection_card_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("gift_plan_selection_card_banner").GiftPlanSelectionCardBanner;
          }
    };
    items[9] = {
      no: 11,
      name: "gift_customization_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("gift_customization_banner").GiftCustomizationBanner;
          }
    };
    items[10] = {
      no: 12,
      name: "billing_settings_nitro_gift_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("billing_settings_nitro_gift_banner").BillingSettingsNitroGiftBanner;
          }
    };
    items[11] = {
      no: 13,
      name: "gift_reminder_nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return require("gift_reminder_nagbar").GiftReminderNagbar;
          }
    };
    items[12] = {
      no: 14,
      name: "gift_reminder_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return require("gift_reminder_coachmark").GiftReminderCoachmark;
          }
    };
    items[13] = {
      no: 15,
      name: "premium_tab_tooltip",
      kind: "message",
      oneof: "properties",
      T() {
            return require("premium_tab_tooltip").PremiumTabTooltip;
          }
    };
    items[14] = {
      no: 16,
      name: "premium_tab_popover",
      kind: "message",
      oneof: "properties",
      T() {
            return require("premium_tab_popover").PremiumTabPopover;
          }
    };
    items[15] = {
      no: 17,
      name: "nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return require("nagbar").Nagbar;
          }
    };
    items[16] = {
      no: 19,
      name: "plan_select_card_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("plan_select_card_banner").PlanSelectCardBanner;
          }
    };
    items[17] = {
      no: 20,
      name: "billing_settings_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("billing_settings_banner").BillingSettingsBanner;
          }
    };
    items[18] = {
      no: 21,
      name: "shop_nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return require("shop_nagbar").ShopNagbar;
          }
    };
    items[19] = {
      no: 22,
      name: "admin_editor_test_component",
      kind: "message",
      oneof: "properties",
      T() {
            return require("admin_editor_test_component").AdminEditorTestComponent;
          }
    };
    items[20] = {
      no: 23,
      name: "guild_header_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return require("guild_header_coachmark").GuildHeaderCoachmark;
          }
    };
    items[21] = {
      no: 24,
      name: "guild_boost_checkout_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("guild_boost_checkout_banner").GuildBoostCheckoutBanner;
          }
    };
    items[22] = {
      no: 25,
      name: "guild_boost_marketing_page_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("guild_boost_marketing_page_banner").GuildBoostMarketingPageBanner;
          }
    };
    items[23] = {
      no: 26,
      name: "guild_boost_tab_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return require("guild_boost_tab_banner").GuildBoostTabBanner;
          }
    };
    items[24] = {
      no: 27,
      name: "shop_tab_tooltip",
      kind: "message",
      oneof: "properties",
      T() {
            return require("shop_tab_tooltip").ShopTabTooltip;
          }
    };
    items[25] = {
      no: 28,
      name: "premium_home_rewards_perk_card",
      kind: "message",
      oneof: "properties",
      T() {
            return require("premium_home_perk_card").PremiumHomePerkCard;
          }
    };
    obj = { no: 29, name: "marketing_page_rewards_bento_box", kind: "message", oneof: "properties", T: null };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[27]).MarketingPageBentoBox;
      }
    }
    obj.T = T;
    items[26] = obj;
    items[27] = {
      no: 30,
      name: "outbound_promotion_popover",
      kind: "message",
      oneof: "properties",
      T() {
            return require("outbound_promotion_popover").OutboundPromotionPopover;
          }
    };
    items[28] = { no: 3, name: "content_identifier", kind: "scalar", T: 9 };
    items[29] = { no: 18, name: "is_default_base", kind: "scalar", T: 8 };
    tmp1 = new tmp("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", items, T);
    return tmp1;
  }
}
const prototype = PremiumMarketingComponentProperties$Type.prototype;
prototype["create"] = function create(arr) {
  const obj = { properties: { oneofKind: "r" }, contentIdentifier: "", isDefaultBase: false };
  const _Object = Object;
  _Object.defineProperty(obj, _mod1212.MESSAGE_TYPE, { enumerable: false, value: this });
  if (undefined !== arr) {
    const result = _mod1212.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1212;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos, arg1, arg2, arg3) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = pos.tag();
    const tmp3 = _slicedToArray(pos.tag(), 2);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(properties, tag, writeUnknownFields) {
  if ("placeholder" === properties.properties.oneofKind) {
    tag.tag(1, _mod1212.WireType.LengthDelimited).string(properties.properties.placeholder);
    const tagResult = tag.tag(1, _mod1212.WireType.LengthDelimited);
  }
  if ("announcementModalVariant1" === properties.properties.oneofKind) {
    const AnnouncementModalVariant1Properties = announcement_modal_variant_1_properties.AnnouncementModalVariant1Properties;
    const tagResult1 = tag.tag(2, _mod1212.WireType.LengthDelimited);
    const joined = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTab" === properties.properties.oneofKind) {
    const PremiumTab = premium_tab.PremiumTab;
    const tagResult2 = tag.tag(4, _mod1212.WireType.LengthDelimited);
    const joined1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("marketingPageBanner" === properties.properties.oneofKind) {
    const MarketingPageBanner = marketing_page_banner.MarketingPageBanner;
    const tagResult3 = tag.tag(5, _mod1212.WireType.LengthDelimited);
    const joined2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("paymentModalBanner" === properties.properties.oneofKind) {
    const PaymentModalBanner = payment_modal_banner.PaymentModalBanner;
    const tagResult4 = tag.tag(6, _mod1212.WireType.LengthDelimited);
    const joined3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("mobileBottomSheet" === properties.properties.oneofKind) {
    const MobileBottomSheet = mobile_bottom_sheet.MobileBottomSheet;
    const tagResult5 = tag.tag(7, _mod1212.WireType.LengthDelimited);
    const joined4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftIcon" === properties.properties.oneofKind) {
    const GiftIcon = gift_icon.GiftIcon;
    const tagResult6 = tag.tag(8, _mod1212.WireType.LengthDelimited);
    const joined5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftIconCoachmark" === properties.properties.oneofKind) {
    const GiftIconCoachmark = gift_icon_coachmark.GiftIconCoachmark;
    const tagResult7 = tag.tag(9, _mod1212.WireType.LengthDelimited);
    const joined6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
    const GiftPlanSelectionCardBanner = gift_plan_selection_card_banner.GiftPlanSelectionCardBanner;
    const tagResult8 = tag.tag(10, _mod1212.WireType.LengthDelimited);
    const joined7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftCustomizationBanner" === properties.properties.oneofKind) {
    const GiftCustomizationBanner = gift_customization_banner.GiftCustomizationBanner;
    const tagResult9 = tag.tag(11, _mod1212.WireType.LengthDelimited);
    const joined8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
    const BillingSettingsNitroGiftBanner = billing_settings_nitro_gift_banner.BillingSettingsNitroGiftBanner;
    const tagResult10 = tag.tag(12, _mod1212.WireType.LengthDelimited);
    const joined9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftReminderNagbar" === properties.properties.oneofKind) {
    const GiftReminderNagbar = gift_reminder_nagbar.GiftReminderNagbar;
    const tagResult11 = tag.tag(13, _mod1212.WireType.LengthDelimited);
    const joined10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftReminderCoachmark" === properties.properties.oneofKind) {
    const GiftReminderCoachmark = gift_reminder_coachmark.GiftReminderCoachmark;
    const tagResult12 = tag.tag(14, _mod1212.WireType.LengthDelimited);
    const joined11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTabTooltip" === properties.properties.oneofKind) {
    const PremiumTabTooltip = premium_tab_tooltip.PremiumTabTooltip;
    const tagResult13 = tag.tag(15, _mod1212.WireType.LengthDelimited);
    const joined12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTabPopover" === properties.properties.oneofKind) {
    const PremiumTabPopover = premium_tab_popover.PremiumTabPopover;
    const tagResult14 = tag.tag(16, _mod1212.WireType.LengthDelimited);
    const joined13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("nagbar" === properties.properties.oneofKind) {
    const Nagbar = nagbar.Nagbar;
    const tagResult15 = tag.tag(17, _mod1212.WireType.LengthDelimited);
    const joined14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("planSelectCardBanner" === properties.properties.oneofKind) {
    const PlanSelectCardBanner = plan_select_card_banner.PlanSelectCardBanner;
    const tagResult16 = tag.tag(19, _mod1212.WireType.LengthDelimited);
    const joined15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("billingSettingsBanner" === properties.properties.oneofKind) {
    const BillingSettingsBanner = billing_settings_banner.BillingSettingsBanner;
    const tagResult17 = tag.tag(20, _mod1212.WireType.LengthDelimited);
    const joined16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("shopNagbar" === properties.properties.oneofKind) {
    const ShopNagbar = shop_nagbar.ShopNagbar;
    const tagResult18 = tag.tag(21, _mod1212.WireType.LengthDelimited);
    const joined17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("adminEditorTestComponent" === properties.properties.oneofKind) {
    const AdminEditorTestComponent = admin_editor_test_component.AdminEditorTestComponent;
    const tagResult19 = tag.tag(22, _mod1212.WireType.LengthDelimited);
    const joined18 = AdminEditorTestComponent.internalBinaryWrite(properties.properties.adminEditorTestComponent, tag.tag(22, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = AdminEditorTestComponent.internalBinaryWrite(properties.properties.adminEditorTestComponent, tag.tag(22, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildHeaderCoachmark" === properties.properties.oneofKind) {
    const GuildHeaderCoachmark = guild_header_coachmark.GuildHeaderCoachmark;
    const tagResult20 = tag.tag(23, _mod1212.WireType.LengthDelimited);
    const joined19 = GuildHeaderCoachmark.internalBinaryWrite(properties.properties.guildHeaderCoachmark, tag.tag(23, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult19 = GuildHeaderCoachmark.internalBinaryWrite(properties.properties.guildHeaderCoachmark, tag.tag(23, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildBoostCheckoutBanner" === properties.properties.oneofKind) {
    const GuildBoostCheckoutBanner = guild_boost_checkout_banner.GuildBoostCheckoutBanner;
    const tagResult21 = tag.tag(24, _mod1212.WireType.LengthDelimited);
    const joined20 = GuildBoostCheckoutBanner.internalBinaryWrite(properties.properties.guildBoostCheckoutBanner, tag.tag(24, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult20 = GuildBoostCheckoutBanner.internalBinaryWrite(properties.properties.guildBoostCheckoutBanner, tag.tag(24, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildBoostMarketingPageBanner" === properties.properties.oneofKind) {
    const GuildBoostMarketingPageBanner = guild_boost_marketing_page_banner.GuildBoostMarketingPageBanner;
    const tagResult22 = tag.tag(25, _mod1212.WireType.LengthDelimited);
    const joined21 = GuildBoostMarketingPageBanner.internalBinaryWrite(properties.properties.guildBoostMarketingPageBanner, tag.tag(25, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult21 = GuildBoostMarketingPageBanner.internalBinaryWrite(properties.properties.guildBoostMarketingPageBanner, tag.tag(25, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildBoostTabBanner" === properties.properties.oneofKind) {
    const GuildBoostTabBanner = guild_boost_tab_banner.GuildBoostTabBanner;
    const tagResult23 = tag.tag(26, _mod1212.WireType.LengthDelimited);
    const joined22 = GuildBoostTabBanner.internalBinaryWrite(properties.properties.guildBoostTabBanner, tag.tag(26, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult22 = GuildBoostTabBanner.internalBinaryWrite(properties.properties.guildBoostTabBanner, tag.tag(26, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("shopTabTooltip" === properties.properties.oneofKind) {
    const ShopTabTooltip = shop_tab_tooltip.ShopTabTooltip;
    const tagResult24 = tag.tag(27, _mod1212.WireType.LengthDelimited);
    const joined23 = ShopTabTooltip.internalBinaryWrite(properties.properties.shopTabTooltip, tag.tag(27, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult23 = ShopTabTooltip.internalBinaryWrite(properties.properties.shopTabTooltip, tag.tag(27, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumHomeRewardsPerkCard" === properties.properties.oneofKind) {
    const PremiumHomePerkCard = premium_home_perk_card.PremiumHomePerkCard;
    const tagResult25 = tag.tag(28, _mod1212.WireType.LengthDelimited);
    const joined24 = PremiumHomePerkCard.internalBinaryWrite(properties.properties.premiumHomeRewardsPerkCard, tag.tag(28, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult24 = PremiumHomePerkCard.internalBinaryWrite(properties.properties.premiumHomeRewardsPerkCard, tag.tag(28, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("marketingPageRewardsBentoBox" === properties.properties.oneofKind) {
    const MarketingPageBentoBox = marketing_page_bento_box.MarketingPageBentoBox;
    const tagResult26 = tag.tag(29, _mod1212.WireType.LengthDelimited);
    const joined25 = MarketingPageBentoBox.internalBinaryWrite(properties.properties.marketingPageRewardsBentoBox, tag.tag(29, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult25 = MarketingPageBentoBox.internalBinaryWrite(properties.properties.marketingPageRewardsBentoBox, tag.tag(29, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("outboundPromotionPopover" === properties.properties.oneofKind) {
    const OutboundPromotionPopover = outbound_promotion_popover.OutboundPromotionPopover;
    const tagResult27 = tag.tag(30, _mod1212.WireType.LengthDelimited);
    const joined26 = OutboundPromotionPopover.internalBinaryWrite(properties.properties.outboundPromotionPopover, tag.tag(30, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult26 = OutboundPromotionPopover.internalBinaryWrite(properties.properties.outboundPromotionPopover, tag.tag(30, _mod1212.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== properties.contentIdentifier) {
    tag.tag(3, _mod1212.WireType.LengthDelimited).string(properties.contentIdentifier);
    const tagResult28 = tag.tag(3, _mod1212.WireType.LengthDelimited);
  }
  if (false !== properties.isDefaultBase) {
    tag.tag(18, _mod1212.WireType.Varint).bool(properties.isDefaultBase);
    const tagResult29 = tag.tag(18, _mod1212.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1212.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, properties, tag);
  }
  return tag;
};
const premiumMarketingComponentPropertiesType = new PremiumMarketingComponentProperties$Type();
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx");

export const PremiumMarketingComponentProperties = premiumMarketingComponentPropertiesType;