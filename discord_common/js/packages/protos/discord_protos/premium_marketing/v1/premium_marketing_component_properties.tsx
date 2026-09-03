// === Module 8464: create ===

// Module 8464 (create)
import _mod1306 from "module_1306" /* 1306 */;
import create from "create" /* 8465 */;
import create2 from "create" /* 8469 */;
import create3 from "create" /* 8470 */;
import create4 from "create" /* 8471 */;
import create5 from "create" /* 8472 */;
import create6 from "create" /* 8473 */;
import create7 from "create" /* 8475 */;
import create8 from "create" /* 8477 */;
import create9 from "create" /* 8478 */;
import create10 from "create" /* 8479 */;
import create11 from "create" /* 8480 */;
import create12 from "create" /* 8481 */;
import create13 from "create" /* 8482 */;
import create14 from "create" /* 8483 */;
import create15 from "create" /* 8484 */;
import create16 from "create" /* 8485 */;
import create17 from "create" /* 8486 */;
import create18 from "create" /* 8487 */;
import create19 from "create" /* 8488 */;
import create20 from "create" /* 8489 */;
import create21 from "create" /* 8490 */;
import create22 from "create" /* 8491 */;
import create23 from "create" /* 8492 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { MessageType } from "module_1306" /* 1306 */;

require = arg1;
class PremiumMarketingComponentProperties$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , , , , , , , , , , , , , , ];
    items[0] = { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 };
    items[1] = {
      no: 2,
      name: "announcement_modal_variant_1",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8465).AnnouncementModalVariant1Properties;
          }
    };
    items[2] = {
      no: 4,
      name: "premium_tab",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8469).PremiumTab;
          }
    };
    items[3] = {
      no: 5,
      name: "marketing_page_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8470).MarketingPageBanner;
          }
    };
    items[4] = {
      no: 6,
      name: "payment_modal_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8471).PaymentModalBanner;
          }
    };
    items[5] = {
      no: 7,
      name: "mobile_bottom_sheet",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8472).MobileBottomSheet;
          }
    };
    items[6] = {
      no: 8,
      name: "gift_icon",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8473).GiftIcon;
          }
    };
    items[7] = {
      no: 9,
      name: "gift_icon_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8475).GiftIconCoachmark;
          }
    };
    items[8] = {
      no: 10,
      name: "gift_plan_selection_card_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8477).GiftPlanSelectionCardBanner;
          }
    };
    items[9] = {
      no: 11,
      name: "gift_customization_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8478).GiftCustomizationBanner;
          }
    };
    items[10] = {
      no: 12,
      name: "billing_settings_nitro_gift_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8479).BillingSettingsNitroGiftBanner;
          }
    };
    items[11] = {
      no: 13,
      name: "gift_reminder_nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8480).GiftReminderNagbar;
          }
    };
    items[12] = {
      no: 14,
      name: "gift_reminder_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8481).GiftReminderCoachmark;
          }
    };
    items[13] = {
      no: 15,
      name: "premium_tab_tooltip",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8482).PremiumTabTooltip;
          }
    };
    items[14] = {
      no: 16,
      name: "premium_tab_popover",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8483).PremiumTabPopover;
          }
    };
    items[15] = {
      no: 17,
      name: "nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8484).Nagbar;
          }
    };
    items[16] = {
      no: 19,
      name: "plan_select_card_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8485).PlanSelectCardBanner;
          }
    };
    items[17] = {
      no: 20,
      name: "billing_settings_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8486).BillingSettingsBanner;
          }
    };
    items[18] = {
      no: 21,
      name: "shop_nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8487).ShopNagbar;
          }
    };
    items[19] = {
      no: 22,
      name: "admin_editor_test_component",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8488).AdminEditorTestComponent;
          }
    };
    items[20] = {
      no: 23,
      name: "guild_header_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8489).GuildHeaderCoachmark;
          }
    };
    items[21] = {
      no: 24,
      name: "guild_boost_checkout_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8490).GuildBoostCheckoutBanner;
          }
    };
    obj = { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: null };
    class T {
      constructor() {
        return require("create").GuildBoostMarketingPageBanner;
      }
    }
    obj[4] = T;
    items[22] = obj;
    items[23] = {
      no: 26,
      name: "guild_boost_tab_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(8492).GuildBoostTabBanner;
          }
    };
    items[24] = { no: 3, name: "content_identifier", kind: "scalar", T: 9 };
    items[25] = { no: 18, name: "is_default_base", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = PremiumMarketingComponentProperties$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { properties: { oneofKind: "Array" }, contentIdentifier: "", isDefaultBase: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, _mod1306.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = _mod1306.reflectionMergePartial(this, obj, arr);
    const tmpResult = _mod1306;
  }
  return obj;
};
prototype["internalBinaryRead"] = function internalBinaryRead(pos) {
  const self = this;
  let obj = arg3;
  if (arg3 == null) {
    obj = self.create();
  }
  if (pos.pos < pos.pos + arg1) {
    [r10019, r10020] = callback(pos.tag(), 2);
    const tmp3 = callback(pos.tag(), 2);
  }
  return obj;
};
prototype["internalBinaryWrite"] = function internalBinaryWrite(properties, tag, writeUnknownFields) {
  if ("placeholder" === properties.properties.oneofKind) {
    tag.tag(1, _mod1306.WireType.LengthDelimited).string(properties.properties.placeholder);
    const tagResult = tag.tag(1, _mod1306.WireType.LengthDelimited);
  }
  if ("announcementModalVariant1" === properties.properties.oneofKind) {
    const AnnouncementModalVariant1Properties = create.AnnouncementModalVariant1Properties;
    const tagResult1 = tag.tag(2, _mod1306.WireType.LengthDelimited);
    const joined = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTab" === properties.properties.oneofKind) {
    const PremiumTab = create2.PremiumTab;
    const tagResult2 = tag.tag(4, _mod1306.WireType.LengthDelimited);
    const joined1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("marketingPageBanner" === properties.properties.oneofKind) {
    const MarketingPageBanner = create3.MarketingPageBanner;
    const tagResult3 = tag.tag(5, _mod1306.WireType.LengthDelimited);
    const joined2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("paymentModalBanner" === properties.properties.oneofKind) {
    const PaymentModalBanner = create4.PaymentModalBanner;
    const tagResult4 = tag.tag(6, _mod1306.WireType.LengthDelimited);
    const joined3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("mobileBottomSheet" === properties.properties.oneofKind) {
    const MobileBottomSheet = create5.MobileBottomSheet;
    const tagResult5 = tag.tag(7, _mod1306.WireType.LengthDelimited);
    const joined4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftIcon" === properties.properties.oneofKind) {
    const GiftIcon = create6.GiftIcon;
    const tagResult6 = tag.tag(8, _mod1306.WireType.LengthDelimited);
    const joined5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftIconCoachmark" === properties.properties.oneofKind) {
    const GiftIconCoachmark = create7.GiftIconCoachmark;
    const tagResult7 = tag.tag(9, _mod1306.WireType.LengthDelimited);
    const joined6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
    const GiftPlanSelectionCardBanner = create8.GiftPlanSelectionCardBanner;
    const tagResult8 = tag.tag(10, _mod1306.WireType.LengthDelimited);
    const joined7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftCustomizationBanner" === properties.properties.oneofKind) {
    const GiftCustomizationBanner = create9.GiftCustomizationBanner;
    const tagResult9 = tag.tag(11, _mod1306.WireType.LengthDelimited);
    const joined8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
    const BillingSettingsNitroGiftBanner = create10.BillingSettingsNitroGiftBanner;
    const tagResult10 = tag.tag(12, _mod1306.WireType.LengthDelimited);
    const joined9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftReminderNagbar" === properties.properties.oneofKind) {
    const GiftReminderNagbar = create11.GiftReminderNagbar;
    const tagResult11 = tag.tag(13, _mod1306.WireType.LengthDelimited);
    const joined10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftReminderCoachmark" === properties.properties.oneofKind) {
    const GiftReminderCoachmark = create12.GiftReminderCoachmark;
    const tagResult12 = tag.tag(14, _mod1306.WireType.LengthDelimited);
    const joined11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTabTooltip" === properties.properties.oneofKind) {
    const PremiumTabTooltip = create13.PremiumTabTooltip;
    const tagResult13 = tag.tag(15, _mod1306.WireType.LengthDelimited);
    const joined12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTabPopover" === properties.properties.oneofKind) {
    const PremiumTabPopover = create14.PremiumTabPopover;
    const tagResult14 = tag.tag(16, _mod1306.WireType.LengthDelimited);
    const joined13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("nagbar" === properties.properties.oneofKind) {
    const Nagbar = create15.Nagbar;
    const tagResult15 = tag.tag(17, _mod1306.WireType.LengthDelimited);
    const joined14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("planSelectCardBanner" === properties.properties.oneofKind) {
    const PlanSelectCardBanner = create16.PlanSelectCardBanner;
    const tagResult16 = tag.tag(19, _mod1306.WireType.LengthDelimited);
    const joined15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("billingSettingsBanner" === properties.properties.oneofKind) {
    const BillingSettingsBanner = create17.BillingSettingsBanner;
    const tagResult17 = tag.tag(20, _mod1306.WireType.LengthDelimited);
    const joined16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("shopNagbar" === properties.properties.oneofKind) {
    const ShopNagbar = create18.ShopNagbar;
    const tagResult18 = tag.tag(21, _mod1306.WireType.LengthDelimited);
    const joined17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("adminEditorTestComponent" === properties.properties.oneofKind) {
    const AdminEditorTestComponent = create19.AdminEditorTestComponent;
    const tagResult19 = tag.tag(22, _mod1306.WireType.LengthDelimited);
    const joined18 = AdminEditorTestComponent.internalBinaryWrite(properties.properties.adminEditorTestComponent, tag.tag(22, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = AdminEditorTestComponent.internalBinaryWrite(properties.properties.adminEditorTestComponent, tag.tag(22, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildHeaderCoachmark" === properties.properties.oneofKind) {
    const GuildHeaderCoachmark = create20.GuildHeaderCoachmark;
    const tagResult20 = tag.tag(23, _mod1306.WireType.LengthDelimited);
    const joined19 = GuildHeaderCoachmark.internalBinaryWrite(properties.properties.guildHeaderCoachmark, tag.tag(23, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult19 = GuildHeaderCoachmark.internalBinaryWrite(properties.properties.guildHeaderCoachmark, tag.tag(23, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildBoostCheckoutBanner" === properties.properties.oneofKind) {
    const GuildBoostCheckoutBanner = create21.GuildBoostCheckoutBanner;
    const tagResult21 = tag.tag(24, _mod1306.WireType.LengthDelimited);
    const joined20 = GuildBoostCheckoutBanner.internalBinaryWrite(properties.properties.guildBoostCheckoutBanner, tag.tag(24, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult20 = GuildBoostCheckoutBanner.internalBinaryWrite(properties.properties.guildBoostCheckoutBanner, tag.tag(24, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildBoostMarketingPageBanner" === properties.properties.oneofKind) {
    const GuildBoostMarketingPageBanner = create22.GuildBoostMarketingPageBanner;
    const tagResult22 = tag.tag(25, _mod1306.WireType.LengthDelimited);
    const joined21 = GuildBoostMarketingPageBanner.internalBinaryWrite(properties.properties.guildBoostMarketingPageBanner, tag.tag(25, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult21 = GuildBoostMarketingPageBanner.internalBinaryWrite(properties.properties.guildBoostMarketingPageBanner, tag.tag(25, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("guildBoostTabBanner" === properties.properties.oneofKind) {
    const GuildBoostTabBanner = create23.GuildBoostTabBanner;
    const tagResult23 = tag.tag(26, _mod1306.WireType.LengthDelimited);
    const joined22 = GuildBoostTabBanner.internalBinaryWrite(properties.properties.guildBoostTabBanner, tag.tag(26, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult22 = GuildBoostTabBanner.internalBinaryWrite(properties.properties.guildBoostTabBanner, tag.tag(26, _mod1306.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== properties.contentIdentifier) {
    tag.tag(3, _mod1306.WireType.LengthDelimited).string(properties.contentIdentifier);
    const tagResult24 = tag.tag(3, _mod1306.WireType.LengthDelimited);
  }
  if (false !== properties.isDefaultBase) {
    tag.tag(18, _mod1306.WireType.Varint).bool(properties.isDefaultBase);
    const tagResult25 = tag.tag(18, _mod1306.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = _mod1306.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, properties, tag);
  }
  return tag;
};
const premiumMarketingComponentPropertiesType = new PremiumMarketingComponentProperties$Type();
let result = require("set").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx");

export const PremiumMarketingComponentProperties = premiumMarketingComponentPropertiesType;