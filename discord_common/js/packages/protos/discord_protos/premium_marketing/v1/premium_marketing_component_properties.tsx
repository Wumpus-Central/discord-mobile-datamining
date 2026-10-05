// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx
import _mod1198 from "../../../../../../../_runtime/metro/01198__.js";
import announcement_modal_variant_1_properties from "announcement_modal_variant_1_properties.tsx";
import premium_tab from "premium_tab.tsx";
import marketing_page_banner from "marketing_page_banner.tsx";
import payment_modal_banner from "payment_modal_banner.tsx";
import mobile_bottom_sheet from "mobile_bottom_sheet.tsx";
import gift_icon from "gift_icon.tsx";
import gift_icon_coachmark from "gift_icon_coachmark.tsx";
import gift_plan_selection_card_banner from "gift_plan_selection_card_banner.tsx";
import gift_customization_banner from "gift_customization_banner.tsx";
import billing_settings_nitro_gift_banner from "billing_settings_nitro_gift_banner.tsx";
import gift_reminder_nagbar from "gift_reminder_nagbar.tsx";
import gift_reminder_coachmark from "gift_reminder_coachmark.tsx";
import premium_tab_tooltip from "premium_tab_tooltip.tsx";
import premium_tab_popover from "premium_tab_popover.tsx";
import nagbar2 from "nagbar.tsx";
import plan_select_card_banner from "plan_select_card_banner.tsx";
import billing_settings_banner from "billing_settings_banner.tsx";
import shop_nagbar from "shop_nagbar.tsx";
import admin_editor_test_component from "admin_editor_test_component.tsx";
import guild_header_coachmark from "guild_header_coachmark.tsx";
import guild_boost_checkout_banner from "guild_boost_checkout_banner.tsx";
import guild_boost_marketing_page_banner from "guild_boost_marketing_page_banner.tsx";
import guild_boost_tab_banner from "guild_boost_tab_banner.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let internalBinaryWrite,
  internalBinaryWrite2,
  internalBinaryWrite3,
  internalBinaryWrite4,
  internalBinaryWrite5,
  internalBinaryWrite6,
  internalBinaryWrite7,
  internalBinaryWrite8;

const MessageType = _mod1198.MessageType;
class PremiumMarketingComponentProperties$Type extends MessageType {
  constructor() {
    const items = [
      { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
      {
        no: 2,
        name: "announcement_modal_variant_1",
        kind: "message",
        oneof: "properties",
        T() {
          return require("announcement_modal_variant_1_properties").AnnouncementModalVariant1Properties;
        },
      },
      {
        no: 4,
        name: "premium_tab",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_tab").PremiumTab;
        },
      },
      {
        no: 5,
        name: "marketing_page_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("marketing_page_banner").MarketingPageBanner;
        },
      },
      {
        no: 6,
        name: "payment_modal_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("payment_modal_banner").PaymentModalBanner;
        },
      },
      {
        no: 7,
        name: "mobile_bottom_sheet",
        kind: "message",
        oneof: "properties",
        T() {
          return require("mobile_bottom_sheet").MobileBottomSheet;
        },
      },
      {
        no: 8,
        name: "gift_icon",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_icon").GiftIcon;
        },
      },
      {
        no: 9,
        name: "gift_icon_coachmark",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_icon_coachmark").GiftIconCoachmark;
        },
      },
      {
        no: 10,
        name: "gift_plan_selection_card_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_plan_selection_card_banner").GiftPlanSelectionCardBanner;
        },
      },
      {
        no: 11,
        name: "gift_customization_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_customization_banner").GiftCustomizationBanner;
        },
      },
      {
        no: 12,
        name: "billing_settings_nitro_gift_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("billing_settings_nitro_gift_banner").BillingSettingsNitroGiftBanner;
        },
      },
      {
        no: 13,
        name: "gift_reminder_nagbar",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_reminder_nagbar").GiftReminderNagbar;
        },
      },
      {
        no: 14,
        name: "gift_reminder_coachmark",
        kind: "message",
        oneof: "properties",
        T() {
          return require("gift_reminder_coachmark").GiftReminderCoachmark;
        },
      },
      {
        no: 15,
        name: "premium_tab_tooltip",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_tab_tooltip").PremiumTabTooltip;
        },
      },
      {
        no: 16,
        name: "premium_tab_popover",
        kind: "message",
        oneof: "properties",
        T() {
          return require("premium_tab_popover").PremiumTabPopover;
        },
      },
      {
        no: 17,
        name: "nagbar",
        kind: "message",
        oneof: "properties",
        T() {
          return require("nagbar").Nagbar;
        },
      },
      {
        no: 19,
        name: "plan_select_card_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("plan_select_card_banner").PlanSelectCardBanner;
        },
      },
      {
        no: 20,
        name: "billing_settings_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("billing_settings_banner").BillingSettingsBanner;
        },
      },
      {
        no: 21,
        name: "shop_nagbar",
        kind: "message",
        oneof: "properties",
        T() {
          return require("shop_nagbar").ShopNagbar;
        },
      },
      {
        no: 22,
        name: "admin_editor_test_component",
        kind: "message",
        oneof: "properties",
        T() {
          return require("admin_editor_test_component").AdminEditorTestComponent;
        },
      },
      {
        no: 23,
        name: "guild_header_coachmark",
        kind: "message",
        oneof: "properties",
        T() {
          return require("guild_header_coachmark").GuildHeaderCoachmark;
        },
      },
      {
        no: 24,
        name: "guild_boost_checkout_banner",
        kind: "message",
        oneof: "properties",
        T() {
          return require("guild_boost_checkout_banner").GuildBoostCheckoutBanner;
        },
      },
      ,
      ,
      ,
    ];
    const obj = { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T };
    class T {
      constructor() {
        return require("guild_boost_marketing_page_banner").GuildBoostMarketingPageBanner;
      }
    }
    items[22] = obj;
    items[23] = {
      no: 26,
      name: "guild_boost_tab_banner",
      kind: "message",
      oneof: "properties",
      T() {
        return require("guild_boost_tab_banner").GuildBoostTabBanner;
      },
    };
    items[24] = { no: 3, name: "content_identifier", kind: "scalar", T: 9 };
    items[25] = { no: 18, name: "is_default_base", kind: "scalar", T: 8 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { properties: { oneofKind: "r" }, contentIdentifier: "", isDefaultBase: false };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1198.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1198;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  internalBinaryWrite(properties, tag, writeUnknownFields) {
    if ("placeholder" === properties.properties.oneofKind) {
      const tagResult = tag.tag(1, _mod1198.WireType.LengthDelimited);
      tagResult.string(properties.properties.placeholder);
    }
    if ("announcementModalVariant1" === properties.properties.oneofKind) {
      const AnnouncementModalVariant1Properties =
        announcement_modal_variant_1_properties.AnnouncementModalVariant1Properties;
      internalBinaryWrite = AnnouncementModalVariant1Properties.internalBinaryWrite;
      const announcementModalVariant1 = properties.properties.announcementModalVariant1;
      const tagResult1 = tag.tag(2, _mod1198.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(
        announcementModalVariant1,
        tagResult1.fork(),
        writeUnknownFields,
      );
      const joined = internalBinaryWriteResult.join();
    }
    if ("premiumTab" === properties.properties.oneofKind) {
      const PremiumTab = premium_tab.PremiumTab;
      internalBinaryWrite2 = PremiumTab.internalBinaryWrite;
      const premiumTab = properties.properties.premiumTab;
      const tagResult2 = tag.tag(4, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(premiumTab, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if ("marketingPageBanner" === properties.properties.oneofKind) {
      const MarketingPageBanner = marketing_page_banner.MarketingPageBanner;
      internalBinaryWrite3 = MarketingPageBanner.internalBinaryWrite;
      const marketingPageBanner = properties.properties.marketingPageBanner;
      const tagResult3 = tag.tag(5, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(
        marketingPageBanner,
        tagResult3.fork(),
        writeUnknownFields,
      );
      const joined2 = internalBinaryWrite3Result.join();
    }
    if ("paymentModalBanner" === properties.properties.oneofKind) {
      const PaymentModalBanner = payment_modal_banner.PaymentModalBanner;
      internalBinaryWrite4 = PaymentModalBanner.internalBinaryWrite;
      const paymentModalBanner = properties.properties.paymentModalBanner;
      const tagResult4 = tag.tag(6, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(
        paymentModalBanner,
        tagResult4.fork(),
        writeUnknownFields,
      );
      const joined3 = internalBinaryWrite4Result.join();
    }
    if ("mobileBottomSheet" === properties.properties.oneofKind) {
      const MobileBottomSheet = mobile_bottom_sheet.MobileBottomSheet;
      internalBinaryWrite5 = MobileBottomSheet.internalBinaryWrite;
      const mobileBottomSheet = properties.properties.mobileBottomSheet;
      const tagResult5 = tag.tag(7, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite5Result = internalBinaryWrite5(mobileBottomSheet, tagResult5.fork(), writeUnknownFields);
      const joined4 = internalBinaryWrite5Result.join();
    }
    if ("giftIcon" === properties.properties.oneofKind) {
      const GiftIcon = gift_icon.GiftIcon;
      internalBinaryWrite6 = GiftIcon.internalBinaryWrite;
      const giftIcon = properties.properties.giftIcon;
      const tagResult6 = tag.tag(8, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite6Result = internalBinaryWrite6(giftIcon, tagResult6.fork(), writeUnknownFields);
      const joined5 = internalBinaryWrite6Result.join();
    }
    if ("giftIconCoachmark" === properties.properties.oneofKind) {
      const GiftIconCoachmark = gift_icon_coachmark.GiftIconCoachmark;
      internalBinaryWrite7 = GiftIconCoachmark.internalBinaryWrite;
      const giftIconCoachmark = properties.properties.giftIconCoachmark;
      const tagResult7 = tag.tag(9, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite7Result = internalBinaryWrite7(giftIconCoachmark, tagResult7.fork(), writeUnknownFields);
      const joined6 = internalBinaryWrite7Result.join();
    }
    if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
      const GiftPlanSelectionCardBanner = gift_plan_selection_card_banner.GiftPlanSelectionCardBanner;
      internalBinaryWrite8 = GiftPlanSelectionCardBanner.internalBinaryWrite;
      const giftPlanSelectionCardBanner = properties.properties.giftPlanSelectionCardBanner;
      const tagResult8 = tag.tag(10, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite8Result = internalBinaryWrite8(
        giftPlanSelectionCardBanner,
        tagResult8.fork(),
        writeUnknownFields,
      );
      const joined7 = internalBinaryWrite8Result.join();
    }
    if ("giftCustomizationBanner" === properties.properties.oneofKind) {
      const GiftCustomizationBanner = gift_customization_banner.GiftCustomizationBanner;
      const internalBinaryWrite9 = GiftCustomizationBanner.internalBinaryWrite;
      const giftCustomizationBanner = properties.properties.giftCustomizationBanner;
      const tagResult9 = tag.tag(11, _mod1198.WireType.LengthDelimited);
      const internalBinaryWrite9Result = internalBinaryWrite9(
        giftCustomizationBanner,
        tagResult9.fork(),
        writeUnknownFields,
      );
      const joined8 = internalBinaryWrite9Result.join();
    }
    if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
      const BillingSettingsNitroGiftBanner = billing_settings_nitro_gift_banner.BillingSettingsNitroGiftBanner;
      const internalBinaryWrite10 = BillingSettingsNitroGiftBanner.internalBinaryWrite;
      const billingSettingsNitroGiftBanner = properties.properties.billingSettingsNitroGiftBanner;
      const tagResult10 = tag.tag(12, _mod1198.WireType.LengthDelimited);
      const result = internalBinaryWrite10(billingSettingsNitroGiftBanner, tagResult10.fork(), writeUnknownFields);
      const joined9 = result.join();
    }
    if ("giftReminderNagbar" === properties.properties.oneofKind) {
      const GiftReminderNagbar = gift_reminder_nagbar.GiftReminderNagbar;
      const internalBinaryWrite11 = GiftReminderNagbar.internalBinaryWrite;
      const giftReminderNagbar = properties.properties.giftReminderNagbar;
      const tagResult11 = tag.tag(13, _mod1198.WireType.LengthDelimited);
      const result1 = internalBinaryWrite11(giftReminderNagbar, tagResult11.fork(), writeUnknownFields);
      const joined10 = result1.join();
    }
    if ("giftReminderCoachmark" === properties.properties.oneofKind) {
      const GiftReminderCoachmark = gift_reminder_coachmark.GiftReminderCoachmark;
      const internalBinaryWrite12 = GiftReminderCoachmark.internalBinaryWrite;
      const giftReminderCoachmark = properties.properties.giftReminderCoachmark;
      const tagResult12 = tag.tag(14, _mod1198.WireType.LengthDelimited);
      const result2 = internalBinaryWrite12(giftReminderCoachmark, tagResult12.fork(), writeUnknownFields);
      const joined11 = result2.join();
    }
    if ("premiumTabTooltip" === properties.properties.oneofKind) {
      const PremiumTabTooltip = premium_tab_tooltip.PremiumTabTooltip;
      const internalBinaryWrite13 = PremiumTabTooltip.internalBinaryWrite;
      const premiumTabTooltip = properties.properties.premiumTabTooltip;
      const tagResult13 = tag.tag(15, _mod1198.WireType.LengthDelimited);
      const result3 = internalBinaryWrite13(premiumTabTooltip, tagResult13.fork(), writeUnknownFields);
      const joined12 = result3.join();
    }
    if ("premiumTabPopover" === properties.properties.oneofKind) {
      const PremiumTabPopover = premium_tab_popover.PremiumTabPopover;
      const internalBinaryWrite14 = PremiumTabPopover.internalBinaryWrite;
      const premiumTabPopover = properties.properties.premiumTabPopover;
      const tagResult14 = tag.tag(16, _mod1198.WireType.LengthDelimited);
      const result4 = internalBinaryWrite14(premiumTabPopover, tagResult14.fork(), writeUnknownFields);
      const joined13 = result4.join();
    }
    if ("nagbar" === properties.properties.oneofKind) {
      const Nagbar = nagbar2.Nagbar;
      const internalBinaryWrite15 = Nagbar.internalBinaryWrite;
      const nagbar = properties.properties.nagbar;
      const tagResult15 = tag.tag(17, _mod1198.WireType.LengthDelimited);
      const result5 = internalBinaryWrite15(nagbar, tagResult15.fork(), writeUnknownFields);
      const joined14 = result5.join();
    }
    if ("planSelectCardBanner" === properties.properties.oneofKind) {
      const PlanSelectCardBanner = plan_select_card_banner.PlanSelectCardBanner;
      const internalBinaryWrite16 = PlanSelectCardBanner.internalBinaryWrite;
      const planSelectCardBanner = properties.properties.planSelectCardBanner;
      const tagResult16 = tag.tag(19, _mod1198.WireType.LengthDelimited);
      const result6 = internalBinaryWrite16(planSelectCardBanner, tagResult16.fork(), writeUnknownFields);
      const joined15 = result6.join();
    }
    if ("billingSettingsBanner" === properties.properties.oneofKind) {
      const BillingSettingsBanner = billing_settings_banner.BillingSettingsBanner;
      const internalBinaryWrite17 = BillingSettingsBanner.internalBinaryWrite;
      const billingSettingsBanner = properties.properties.billingSettingsBanner;
      const tagResult17 = tag.tag(20, _mod1198.WireType.LengthDelimited);
      const result7 = internalBinaryWrite17(billingSettingsBanner, tagResult17.fork(), writeUnknownFields);
      const joined16 = result7.join();
    }
    if ("shopNagbar" === properties.properties.oneofKind) {
      const ShopNagbar = shop_nagbar.ShopNagbar;
      const internalBinaryWrite18 = ShopNagbar.internalBinaryWrite;
      const shopNagbar = properties.properties.shopNagbar;
      const tagResult18 = tag.tag(21, _mod1198.WireType.LengthDelimited);
      const result8 = internalBinaryWrite18(shopNagbar, tagResult18.fork(), writeUnknownFields);
      const joined17 = result8.join();
    }
    if ("adminEditorTestComponent" === properties.properties.oneofKind) {
      const AdminEditorTestComponent = admin_editor_test_component.AdminEditorTestComponent;
      const internalBinaryWrite19 = AdminEditorTestComponent.internalBinaryWrite;
      const adminEditorTestComponent = properties.properties.adminEditorTestComponent;
      const tagResult19 = tag.tag(22, _mod1198.WireType.LengthDelimited);
      const result9 = internalBinaryWrite19(adminEditorTestComponent, tagResult19.fork(), writeUnknownFields);
      const joined18 = result9.join();
    }
    if ("guildHeaderCoachmark" === properties.properties.oneofKind) {
      const GuildHeaderCoachmark = guild_header_coachmark.GuildHeaderCoachmark;
      const internalBinaryWrite20 = GuildHeaderCoachmark.internalBinaryWrite;
      const guildHeaderCoachmark = properties.properties.guildHeaderCoachmark;
      const tagResult20 = tag.tag(23, _mod1198.WireType.LengthDelimited);
      const result10 = internalBinaryWrite20(guildHeaderCoachmark, tagResult20.fork(), writeUnknownFields);
      const joined19 = result10.join();
    }
    if ("guildBoostCheckoutBanner" === properties.properties.oneofKind) {
      const GuildBoostCheckoutBanner = guild_boost_checkout_banner.GuildBoostCheckoutBanner;
      const internalBinaryWrite21 = GuildBoostCheckoutBanner.internalBinaryWrite;
      const guildBoostCheckoutBanner = properties.properties.guildBoostCheckoutBanner;
      const tagResult21 = tag.tag(24, _mod1198.WireType.LengthDelimited);
      const result11 = internalBinaryWrite21(guildBoostCheckoutBanner, tagResult21.fork(), writeUnknownFields);
      const joined20 = result11.join();
    }
    if ("guildBoostMarketingPageBanner" === properties.properties.oneofKind) {
      const GuildBoostMarketingPageBanner = guild_boost_marketing_page_banner.GuildBoostMarketingPageBanner;
      const internalBinaryWrite22 = GuildBoostMarketingPageBanner.internalBinaryWrite;
      const guildBoostMarketingPageBanner = properties.properties.guildBoostMarketingPageBanner;
      const tagResult22 = tag.tag(25, _mod1198.WireType.LengthDelimited);
      const result12 = internalBinaryWrite22(guildBoostMarketingPageBanner, tagResult22.fork(), writeUnknownFields);
      const joined21 = result12.join();
    }
    if ("guildBoostTabBanner" === properties.properties.oneofKind) {
      const GuildBoostTabBanner = guild_boost_tab_banner.GuildBoostTabBanner;
      const internalBinaryWrite23 = GuildBoostTabBanner.internalBinaryWrite;
      const guildBoostTabBanner = properties.properties.guildBoostTabBanner;
      const tagResult23 = tag.tag(26, _mod1198.WireType.LengthDelimited);
      const result13 = internalBinaryWrite23(guildBoostTabBanner, tagResult23.fork(), writeUnknownFields);
      const joined22 = result13.join();
    }
    if ("" !== properties.contentIdentifier) {
      const tagResult24 = tag.tag(3, _mod1198.WireType.LengthDelimited);
      tagResult24.string(properties.contentIdentifier);
    }
    if (false !== properties.isDefaultBase) {
      const tagResult25 = tag.tag(18, _mod1198.WireType.Varint);
      tagResult25.bool(properties.isDefaultBase);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1198.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, properties, tag);
    }
    return tag;
  }
}
const prototype = PremiumMarketingComponentProperties$Type.prototype;
const premiumMarketingComponentPropertiesType = new PremiumMarketingComponentProperties$Type();
let result = size.fileFinishedImporting(
  "../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx",
);

export const PremiumMarketingComponentProperties = premiumMarketingComponentPropertiesType;
