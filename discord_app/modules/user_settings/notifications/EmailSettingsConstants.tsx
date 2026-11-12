// === Module 18000: EmailSettingsConstants ===

// Module 18000 (EmailSettingsConstants)
import util from "util" /* 1113 */;
import size from "module_2" /* 2 */;

const obj = { COMMUNICATION: "communication", SOCIAL: "social", TIPS: "tips", RECOMMENDATIONS_AND_EVENTS: "recommendations_and_events", UPDATES_AND_ANNOUNCEMENTS: "updates_and_announcements", FAMILY_CENTER_DIGEST: "family_center_digest" };
const items = [
  {
    category: obj.COMMUNICATION,
    label() {
      const intl = util.intl;
      return intl.string(util.t["B75+xe"]);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(util.t.ZHg9Tc);
    }
  },
  {
    category: obj.SOCIAL,
    label() {
      const intl = util.intl;
      return intl.string(util.t.sxn7lR);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(util.t.l7sdzF);
    }
  },
  {
    category: obj.UPDATES_AND_ANNOUNCEMENTS,
    label() {
      const intl = util.intl;
      return intl.string(util.t.EkxXhe);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(util.t["8ba9Q7"]);
    }
  },
  {
    category: obj.TIPS,
    label() {
      const intl = util.intl;
      return intl.string(util.t.jNrkrM);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(util.t["FF6/+B"]);
    }
  },
  {
    category: obj.RECOMMENDATIONS_AND_EVENTS,
    label() {
      const intl = util.intl;
      return intl.string(util.t.E8g1l8);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(util.t.X4JMt1);
    }
  }
];
const mapped = items.map((category) => category.category);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsConstants.tsx");

export const EmailCategories = obj;
export const EmailCategoriesList = items;
export const MarketingEmailCategories = mapped;