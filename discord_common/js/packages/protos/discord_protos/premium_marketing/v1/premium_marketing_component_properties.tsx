// discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx
import _slicedToArray from "_slicedToArray";
import { MessageType } from "module_1307";
import { 01307__ } from "../../../../../../../_runtime/metro/01307__.js";
import { create } from "admin_editor_test_component.tsx";
import { create } from "announcement_modal_variant_1_properties.tsx";
import { create } from "billing_settings_banner.tsx";
import { create } from "billing_settings_nitro_gift_banner.tsx";
import { create } from "gift_customization_banner.tsx";
import { create } from "gift_icon_coachmark.tsx";
import { create } from "gift_icon.tsx";
import { create } from "gift_plan_selection_card_banner.tsx";
import { create } from "gift_reminder_coachmark.tsx";
import { create } from "gift_reminder_nagbar.tsx";
import { create } from "marketing_page_banner.tsx";
import { create } from "mobile_bottom_sheet.tsx";
import { create } from "nagbar.tsx";
import { create } from "payment_modal_banner.tsx";
import { create } from "plan_select_card_banner.tsx";
import { create } from "premium_tab_popover.tsx";
import { create } from "premium_tab_tooltip.tsx";
import { create } from "premium_tab.tsx";
import { create } from "shop_nagbar.tsx";

const require = arg1;
class PremiumMarketingComponentProperties$Type extends MessageType {
  constructor() {
    items = [, , , , , , , , , , , , , , , , , , , , , ];
    items[0] = { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 };
    items[1] = {
      no: 2,
      name: "announcement_modal_variant_1",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7270).AnnouncementModalVariant1Properties;
          }
    };
    items[2] = {
      no: 4,
      name: "premium_tab",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7274).PremiumTab;
          }
    };
    items[3] = {
      no: 5,
      name: "marketing_page_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7275).MarketingPageBanner;
          }
    };
    items[4] = {
      no: 6,
      name: "payment_modal_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7276).PaymentModalBanner;
          }
    };
    items[5] = {
      no: 7,
      name: "mobile_bottom_sheet",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7277).MobileBottomSheet;
          }
    };
    items[6] = {
      no: 8,
      name: "gift_icon",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7278).GiftIcon;
          }
    };
    items[7] = {
      no: 9,
      name: "gift_icon_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7280).GiftIconCoachmark;
          }
    };
    items[8] = {
      no: 10,
      name: "gift_plan_selection_card_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7282).GiftPlanSelectionCardBanner;
          }
    };
    items[9] = {
      no: 11,
      name: "gift_customization_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7283).GiftCustomizationBanner;
          }
    };
    items[10] = {
      no: 12,
      name: "billing_settings_nitro_gift_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7284).BillingSettingsNitroGiftBanner;
          }
    };
    items[11] = {
      no: 13,
      name: "gift_reminder_nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7285).GiftReminderNagbar;
          }
    };
    items[12] = {
      no: 14,
      name: "gift_reminder_coachmark",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7286).GiftReminderCoachmark;
          }
    };
    items[13] = {
      no: 15,
      name: "premium_tab_tooltip",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7287).PremiumTabTooltip;
          }
    };
    items[14] = {
      no: 16,
      name: "premium_tab_popover",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7288).PremiumTabPopover;
          }
    };
    items[15] = {
      no: 17,
      name: "nagbar",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7289).Nagbar;
          }
    };
    items[16] = {
      no: 19,
      name: "plan_select_card_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7290).PlanSelectCardBanner;
          }
    };
    items[17] = {
      no: 20,
      name: "billing_settings_banner",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7291).BillingSettingsBanner;
          }
    };
    obj = { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: null };
    class T {
      constructor() {
        return require("create").ShopNagbar;
      }
    }
    obj[4] = T;
    items[18] = obj;
    items[19] = {
      no: 22,
      name: "admin_editor_test_component",
      kind: "message",
      oneof: "properties",
      T() {
            return callback(7293).AdminEditorTestComponent;
          }
    };
    items[20] = { no: 3, name: "content_identifier", kind: "scalar", T: 9 };
    items[21] = { no: 18, name: "is_default_base", kind: "scalar", T: 8 };
    tmp = new tmp("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", items, T);
    // ThrowIfThisInitialized (0x7c)
    return tmp;
  }
}
const prototype = PremiumMarketingComponentProperties$Type.prototype;
prototype["create"] = function create(arr) {
  let obj = { properties: { oneofKind: "r" }, contentIdentifier: "", isDefaultBase: false };
  const _Object = Object;
  obj = { enumerable: false, value: this };
  _Object.defineProperty(obj, 01307__.MESSAGE_TYPE, obj);
  if (undefined !== arr) {
    const result = 01307__.reflectionMergePartial(this, obj, arr);
    const tmpResult = 01307__;
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
    tag.tag(1, 01307__.WireType.LengthDelimited).string(properties.properties.placeholder);
    const tagResult = tag.tag(1, 01307__.WireType.LengthDelimited);
  }
  if ("announcementModalVariant1" === properties.properties.oneofKind) {
    const AnnouncementModalVariant1Properties = create.AnnouncementModalVariant1Properties;
    const tagResult1 = tag.tag(2, 01307__.WireType.LengthDelimited);
    const joined = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult = AnnouncementModalVariant1Properties.internalBinaryWrite(properties.properties.announcementModalVariant1, tag.tag(2, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTab" === properties.properties.oneofKind) {
    const PremiumTab = create.PremiumTab;
    const tagResult2 = tag.tag(4, 01307__.WireType.LengthDelimited);
    const joined1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult1 = PremiumTab.internalBinaryWrite(properties.properties.premiumTab, tag.tag(4, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("marketingPageBanner" === properties.properties.oneofKind) {
    const MarketingPageBanner = create.MarketingPageBanner;
    const tagResult3 = tag.tag(5, 01307__.WireType.LengthDelimited);
    const joined2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult2 = MarketingPageBanner.internalBinaryWrite(properties.properties.marketingPageBanner, tag.tag(5, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("paymentModalBanner" === properties.properties.oneofKind) {
    const PaymentModalBanner = create.PaymentModalBanner;
    const tagResult4 = tag.tag(6, 01307__.WireType.LengthDelimited);
    const joined3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult3 = PaymentModalBanner.internalBinaryWrite(properties.properties.paymentModalBanner, tag.tag(6, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("mobileBottomSheet" === properties.properties.oneofKind) {
    const MobileBottomSheet = create.MobileBottomSheet;
    const tagResult5 = tag.tag(7, 01307__.WireType.LengthDelimited);
    const joined4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult4 = MobileBottomSheet.internalBinaryWrite(properties.properties.mobileBottomSheet, tag.tag(7, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftIcon" === properties.properties.oneofKind) {
    const GiftIcon = create.GiftIcon;
    const tagResult6 = tag.tag(8, 01307__.WireType.LengthDelimited);
    const joined5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult5 = GiftIcon.internalBinaryWrite(properties.properties.giftIcon, tag.tag(8, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftIconCoachmark" === properties.properties.oneofKind) {
    const GiftIconCoachmark = create.GiftIconCoachmark;
    const tagResult7 = tag.tag(9, 01307__.WireType.LengthDelimited);
    const joined6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult6 = GiftIconCoachmark.internalBinaryWrite(properties.properties.giftIconCoachmark, tag.tag(9, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftPlanSelectionCardBanner" === properties.properties.oneofKind) {
    const GiftPlanSelectionCardBanner = create.GiftPlanSelectionCardBanner;
    const tagResult8 = tag.tag(10, 01307__.WireType.LengthDelimited);
    const joined7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult7 = GiftPlanSelectionCardBanner.internalBinaryWrite(properties.properties.giftPlanSelectionCardBanner, tag.tag(10, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftCustomizationBanner" === properties.properties.oneofKind) {
    const GiftCustomizationBanner = create.GiftCustomizationBanner;
    const tagResult9 = tag.tag(11, 01307__.WireType.LengthDelimited);
    const joined8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult8 = GiftCustomizationBanner.internalBinaryWrite(properties.properties.giftCustomizationBanner, tag.tag(11, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("billingSettingsNitroGiftBanner" === properties.properties.oneofKind) {
    const BillingSettingsNitroGiftBanner = create.BillingSettingsNitroGiftBanner;
    const tagResult10 = tag.tag(12, 01307__.WireType.LengthDelimited);
    const joined9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult9 = BillingSettingsNitroGiftBanner.internalBinaryWrite(properties.properties.billingSettingsNitroGiftBanner, tag.tag(12, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftReminderNagbar" === properties.properties.oneofKind) {
    const GiftReminderNagbar = create.GiftReminderNagbar;
    const tagResult11 = tag.tag(13, 01307__.WireType.LengthDelimited);
    const joined10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult10 = GiftReminderNagbar.internalBinaryWrite(properties.properties.giftReminderNagbar, tag.tag(13, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("giftReminderCoachmark" === properties.properties.oneofKind) {
    const GiftReminderCoachmark = create.GiftReminderCoachmark;
    const tagResult12 = tag.tag(14, 01307__.WireType.LengthDelimited);
    const joined11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult11 = GiftReminderCoachmark.internalBinaryWrite(properties.properties.giftReminderCoachmark, tag.tag(14, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTabTooltip" === properties.properties.oneofKind) {
    const PremiumTabTooltip = create.PremiumTabTooltip;
    const tagResult13 = tag.tag(15, 01307__.WireType.LengthDelimited);
    const joined12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult12 = PremiumTabTooltip.internalBinaryWrite(properties.properties.premiumTabTooltip, tag.tag(15, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("premiumTabPopover" === properties.properties.oneofKind) {
    const PremiumTabPopover = create.PremiumTabPopover;
    const tagResult14 = tag.tag(16, 01307__.WireType.LengthDelimited);
    const joined13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult13 = PremiumTabPopover.internalBinaryWrite(properties.properties.premiumTabPopover, tag.tag(16, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("nagbar" === properties.properties.oneofKind) {
    const Nagbar = create.Nagbar;
    const tagResult15 = tag.tag(17, 01307__.WireType.LengthDelimited);
    const joined14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult14 = Nagbar.internalBinaryWrite(properties.properties.nagbar, tag.tag(17, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("planSelectCardBanner" === properties.properties.oneofKind) {
    const PlanSelectCardBanner = create.PlanSelectCardBanner;
    const tagResult16 = tag.tag(19, 01307__.WireType.LengthDelimited);
    const joined15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult15 = PlanSelectCardBanner.internalBinaryWrite(properties.properties.planSelectCardBanner, tag.tag(19, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("billingSettingsBanner" === properties.properties.oneofKind) {
    const BillingSettingsBanner = create.BillingSettingsBanner;
    const tagResult17 = tag.tag(20, 01307__.WireType.LengthDelimited);
    const joined16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult16 = BillingSettingsBanner.internalBinaryWrite(properties.properties.billingSettingsBanner, tag.tag(20, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("shopNagbar" === properties.properties.oneofKind) {
    const ShopNagbar = create.ShopNagbar;
    const tagResult18 = tag.tag(21, 01307__.WireType.LengthDelimited);
    const joined17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult17 = ShopNagbar.internalBinaryWrite(properties.properties.shopNagbar, tag.tag(21, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("adminEditorTestComponent" === properties.properties.oneofKind) {
    const AdminEditorTestComponent = create.AdminEditorTestComponent;
    const tagResult19 = tag.tag(22, 01307__.WireType.LengthDelimited);
    const joined18 = AdminEditorTestComponent.internalBinaryWrite(properties.properties.adminEditorTestComponent, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields).join();
    const internalBinaryWriteResult18 = AdminEditorTestComponent.internalBinaryWrite(properties.properties.adminEditorTestComponent, tag.tag(22, 01307__.WireType.LengthDelimited).fork(), writeUnknownFields);
  }
  if ("" !== properties.contentIdentifier) {
    tag.tag(3, 01307__.WireType.LengthDelimited).string(properties.contentIdentifier);
    const tagResult20 = tag.tag(3, 01307__.WireType.LengthDelimited);
  }
  if (false !== properties.isDefaultBase) {
    tag.tag(18, 01307__.WireType.Varint).bool(properties.isDefaultBase);
    const tagResult21 = tag.tag(18, 01307__.WireType.Varint);
  }
  let onWrite = writeUnknownFields.writeUnknownFields;
  if (false !== onWrite) {
    if (1 == onWrite) {
      onWrite = 01307__.UnknownFieldHandler.onWrite;
    }
    const self = this;
    onWrite(this.typeName, properties, tag);
  }
  return tag;
};
const premiumMarketingComponentPropertiesType = new PremiumMarketingComponentProperties$Type();
let result = require("create").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx");

export const PremiumMarketingComponentProperties = premiumMarketingComponentPropertiesType;