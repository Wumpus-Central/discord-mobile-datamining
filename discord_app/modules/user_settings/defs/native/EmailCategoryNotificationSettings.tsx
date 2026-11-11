// === Module 18008: EmailCategoryNotificationSettings ===

// Module 18008 (EmailCategoryNotificationSettings)
import initialize from "initialize" /* 504 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 18004 */;
import EmailSettingsStore from "EmailSettingsStore" /* 16125 */;

require = fn;
function useMarketingEmailsDisabled() {
  items = [EmailSettingsStore];
  return initialize.useStateFromStores(items, () => {
    const categories = emailSettings.getEmailSettings().categories;
    return closure_1_5.every((item) => !categories[item]);
  });
}
function createEmailSettings(EMAIL_NOTIFICATIONS) {
  const COMMUNICATION = constants.COMMUNICATION;
  const found = closure_4.find((category) => category.category === COMMUNICATION);
  if (null == found) {
    const _Error5 = Error;
    const _HermesInternal5 = HermesInternal;
    const error = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + COMMUNICATION);
    throw error;
  } else {
    const obj = { communication: null, social: null, updatesAndAnnouncements: null, tips: null, recommendationsAndEvents: null, unsubscribeFromAllMarketing: null };
    const obj4 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
    ({ label: obj3.useTitle, subLabel: obj3.useDescription } = found);
    obj4.parent = EMAIL_NOTIFICATIONS;
    obj4.useValue = function useValue() {
      closure_0 = COMMUNICATION;
      items = [EmailSettingsStore];
      return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
    };
    obj4.onValueChange = function onValueChange(arg0) {
      return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
    };
    obj.communication = COMMUNICATION(12317).createToggle(obj4);
    const SOCIAL = constants.SOCIAL;
    closure_129_0 = SOCIAL;
    const found1 = closure_4.find((category) => category.category === COMMUNICATION);
    if (null == found1) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const error1 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + SOCIAL);
      throw error1;
    } else {
      const obj6 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
      ({ label: obj5.useTitle, subLabel: obj5.useDescription } = found1);
      obj6.parent = EMAIL_NOTIFICATIONS;
      obj6.useValue = function useValue() {
        closure_0 = COMMUNICATION;
        items = [EmailSettingsStore];
        return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
      };
      obj6.onValueChange = function onValueChange(arg0) {
        return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
      };
      obj.social = tmp29(12317).createToggle(obj6);
      const UPDATES_AND_ANNOUNCEMENTS = constants.UPDATES_AND_ANNOUNCEMENTS;
      closure_130_0 = UPDATES_AND_ANNOUNCEMENTS;
      const found2 = closure_4.find((category) => category.category === COMMUNICATION);
      if (null == found2) {
        const _Error3 = Error;
        const _HermesInternal3 = HermesInternal;
        const error2 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + UPDATES_AND_ANNOUNCEMENTS);
        throw error2;
      } else {
        const obj8 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
        ({ label: obj7.useTitle, subLabel: obj7.useDescription } = found2);
        obj8.parent = EMAIL_NOTIFICATIONS;
        obj8.useValue = function useValue() {
          closure_0 = COMMUNICATION;
          items = [EmailSettingsStore];
          return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
        };
        obj8.onValueChange = function onValueChange(arg0) {
          return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
        };
        obj.updatesAndAnnouncements = tmp29(12317).createToggle(obj8);
        const TIPS = constants.TIPS;
        closure_131_0 = TIPS;
        const found3 = closure_4.find((category) => category.category === COMMUNICATION);
        if (null == found3) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error3 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + TIPS);
          throw error3;
        } else {
          const obj10 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
          ({ label: obj9.useTitle, subLabel: obj9.useDescription } = found3);
          obj10.parent = EMAIL_NOTIFICATIONS;
          obj10.useValue = function useValue() {
            closure_0 = COMMUNICATION;
            items = [EmailSettingsStore];
            return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
          };
          obj10.onValueChange = function onValueChange(arg0) {
            return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
          };
          obj.tips = tmp29(12317).createToggle(obj10);
          const RECOMMENDATIONS_AND_EVENTS = constants.RECOMMENDATIONS_AND_EVENTS;
          closure_132_0 = RECOMMENDATIONS_AND_EVENTS;
          const found4 = closure_4.find((category) => category.category === COMMUNICATION);
          if (null == found4) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error4 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + RECOMMENDATIONS_AND_EVENTS);
            throw error4;
          } else {
            const obj12 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
            ({ label: obj11.useTitle, subLabel: obj11.useDescription } = found4);
            obj12.parent = EMAIL_NOTIFICATIONS;
            obj12.useValue = function useValue() {
              closure_0 = COMMUNICATION;
              items = [EmailSettingsStore];
              return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
            };
            obj12.onValueChange = function onValueChange(arg0) {
              return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
            };
            obj.recommendationsAndEvents = tmp29(12317).createToggle(obj12);
            const tmp29Result7 = tmp29(12317);
            const obj13 = {
              useTitle() {
                          const intl = COMMUNICATION(1113).intl;
                          return intl.string(COMMUNICATION(1113).t.Ra9Pwk);
                        },
              parent: EMAIL_NOTIFICATIONS,
              variant: "danger",
              useIsDisabled: useMarketingEmailsDisabled,
              onPress: tmp29(18004).updateMarketingEmailSettings
            };
            obj.unsubscribeFromAllMarketing = tmp29(12317).createPressable(obj13);
            return obj;
          }
          const tmp29Result6 = tmp29(12317);
        }
        const tmp29Result5 = tmp29(12317);
      }
      const tmp29Result = tmp29(12317);
    }
    const obj2 = COMMUNICATION(12317);
  }
}
const MobileUserSettings = fn(9136).MobileUserSettings;
const EmailSettingsConstants = fn(18005);
({ EmailCategories: c3, EmailCategoriesList: closure_4, MarketingEmailCategories: hasOwnProperty } = EmailSettingsConstants);
const emailSettings = createEmailSettings(MobileUserSettings.EMAIL_NOTIFICATIONS);
const emailSettings1 = createEmailSettings(MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmailCategoryNotificationSettings.tsx");

export const EmailSettings = emailSettings;
export const RedesignEmailSettings = emailSettings1;