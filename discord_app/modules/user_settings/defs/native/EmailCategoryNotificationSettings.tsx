// === Module 17063: EmailCategoryNotificationSettings ===

// Module 17063 (EmailCategoryNotificationSettings)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import _modDef3206 from "module_3206" /* 3206 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 17060 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15179 */;

require = fn;
function useMarketingEmailsDisabled() {
  items = [EmailSettingsStore];
  return initialize.useStateFromStores(items, () => {
    const categories = emailSettings.getEmailSettings().categories;
    return closure_1_7.every((item) => !categories[item]);
  });
}
function createEmailSettings(EMAIL_NOTIFICATIONS) {
  const COMMUNICATION = EmailCategories.COMMUNICATION;
  const found = closure_6.find((category) => category.category === COMMUNICATION);
  if (null == found) {
    const _Error5 = Error;
    const _HermesInternal5 = HermesInternal;
    const error = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + COMMUNICATION);
    throw error;
  } else {
    let tmp5 = found;
    if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
      let tmp4 = dependencyMap[COMMUNICATION];
      if (tmp4 == null) {
        tmp4 = found;
      }
      tmp5 = tmp4;
    }
    const obj = { communication: null, social: null, updatesAndAnnouncements: null, tips: null, recommendationsAndEvents: null, unsubscribeFromAllMarketing: null };
    const obj4 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
    ({ label: obj3.useTitle, subLabel: obj3.useDescription } = tmp5);
    obj4.parent = EMAIL_NOTIFICATIONS;
    obj4.useValue = function useValue() {
      closure_0 = COMMUNICATION;
      items = [EmailSettingsStore];
      return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
    };
    obj4.onValueChange = function onValueChange(arg0) {
      return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
    };
    obj.communication = COMMUNICATION(11914).createToggle(obj4);
    const SOCIAL = EmailCategories.SOCIAL;
    closure_129_0 = SOCIAL;
    const found1 = closure_6.find((category) => category.category === COMMUNICATION);
    if (null == found1) {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const error1 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + SOCIAL);
      throw error1;
    } else {
      let tmp11 = found1;
      if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
        let tmp10 = dependencyMap[SOCIAL];
        if (tmp10 == null) {
          tmp10 = found1;
        }
        tmp11 = tmp10;
      }
      const obj6 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
      ({ label: obj5.useTitle, subLabel: obj5.useDescription } = tmp11);
      obj6.parent = EMAIL_NOTIFICATIONS;
      obj6.useValue = function useValue() {
        closure_0 = COMMUNICATION;
        items = [EmailSettingsStore];
        return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
      };
      obj6.onValueChange = function onValueChange(arg0) {
        return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
      };
      obj.social = tmp6(11914).createToggle(obj6);
      const UPDATES_AND_ANNOUNCEMENTS = EmailCategories.UPDATES_AND_ANNOUNCEMENTS;
      closure_130_0 = UPDATES_AND_ANNOUNCEMENTS;
      const found2 = closure_6.find((category) => category.category === COMMUNICATION);
      if (null == found2) {
        const _Error3 = Error;
        const _HermesInternal3 = HermesInternal;
        const error2 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + UPDATES_AND_ANNOUNCEMENTS);
        throw error2;
      } else {
        let tmp15 = found2;
        if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
          let tmp14 = dependencyMap[UPDATES_AND_ANNOUNCEMENTS];
          if (tmp14 == null) {
            tmp14 = found2;
          }
          tmp15 = tmp14;
        }
        const obj8 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
        ({ label: obj7.useTitle, subLabel: obj7.useDescription } = tmp15);
        obj8.parent = EMAIL_NOTIFICATIONS;
        obj8.useValue = function useValue() {
          closure_0 = COMMUNICATION;
          items = [EmailSettingsStore];
          return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
        };
        obj8.onValueChange = function onValueChange(arg0) {
          return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
        };
        obj.updatesAndAnnouncements = tmp6(11914).createToggle(obj8);
        const TIPS = EmailCategories.TIPS;
        closure_131_0 = TIPS;
        const found3 = closure_6.find((category) => category.category === COMMUNICATION);
        if (null == found3) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error3 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + TIPS);
          throw error3;
        } else {
          let tmp19 = found3;
          if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
            let tmp18 = dependencyMap[TIPS];
            if (tmp18 == null) {
              tmp18 = found3;
            }
            tmp19 = tmp18;
          }
          const obj10 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
          ({ label: obj9.useTitle, subLabel: obj9.useDescription } = tmp19);
          obj10.parent = EMAIL_NOTIFICATIONS;
          obj10.useValue = function useValue() {
            closure_0 = COMMUNICATION;
            items = [EmailSettingsStore];
            return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
          };
          obj10.onValueChange = function onValueChange(arg0) {
            return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
          };
          obj.tips = tmp6(11914).createToggle(obj10);
          const RECOMMENDATIONS_AND_EVENTS = EmailCategories.RECOMMENDATIONS_AND_EVENTS;
          closure_132_0 = RECOMMENDATIONS_AND_EVENTS;
          const found4 = closure_6.find((category) => category.category === COMMUNICATION);
          if (null == found4) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error4 = new Error("[EmailCategoryNotificationSettings] Unknown email category: " + RECOMMENDATIONS_AND_EVENTS);
            throw error4;
          } else {
            let tmp23 = found4;
            if (EMAIL_NOTIFICATIONS === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
              let tmp22 = dependencyMap[RECOMMENDATIONS_AND_EVENTS];
              if (tmp22 == null) {
                tmp22 = found4;
              }
              tmp23 = tmp22;
            }
            const obj12 = { useTitle: null, useDescription: null, parent: null, useValue: null, onValueChange: null };
            ({ label: obj11.useTitle, subLabel: obj11.useDescription } = tmp23);
            obj12.parent = EMAIL_NOTIFICATIONS;
            obj12.useValue = function useValue() {
              closure_0 = COMMUNICATION;
              items = [EmailSettingsStore];
              return initialize.useStateFromStores(items, () => emailSettings.getEmailSettings().categories[closure_0]);
            };
            obj12.onValueChange = function onValueChange(arg0) {
              return EmailSettingsActionCreators.updateEmailSetting(COMMUNICATION, arg0);
            };
            obj.recommendationsAndEvents = tmp6(11914).createToggle(obj12);
            closure_133_0 = EMAIL_NOTIFICATIONS;
            const tmp6Result7 = tmp6(11914);
            const obj13 = {
              useTitle() {
                          const intl = util.intl;
                          if (COMMUNICATION === MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS) {
                            let Ra9Pwk = _modDef3206.tNdxQ1;
                          } else {
                            Ra9Pwk = util.t.Ra9Pwk;
                          }
                          return intl.string(Ra9Pwk);
                        },
              parent: EMAIL_NOTIFICATIONS,
              variant: "danger",
              useIsDisabled: useMarketingEmailsDisabled,
              onPress: tmp6(17060).updateMarketingEmailSettings
            };
            obj.unsubscribeFromAllMarketing = tmp6(11914).createPressable(obj13);
            return obj;
          }
          const tmp6Result6 = tmp6(11914);
        }
        const tmp6Result5 = tmp6(11914);
      }
      const tmp6Result = tmp6(11914);
    }
    const obj2 = COMMUNICATION(11914);
  }
}
const MobileUserSettings = fn(9513).MobileUserSettings;
const EmailSettingsConstants = fn(17061);
const EmailCategories = EmailSettingsConstants.EmailCategories;
({ EmailCategoriesList: closure_6, MarketingEmailCategories: metroImportDefault } = EmailSettingsConstants);
const dependencyMap = {
  [EmailCategories.COMMUNICATION]: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3206.KcqVQg);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(_modDef3206.rjpJyr);
    }
  },
  [EmailCategories.SOCIAL]: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3206.ZtaadX);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(_modDef3206.oBkSU3);
    }
  },
  [EmailCategories.UPDATES_AND_ANNOUNCEMENTS]: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3206.gsNOLn);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(_modDef3206.VKva4A);
    }
  },
  [EmailCategories.TIPS]: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3206.KniwB2);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(_modDef3206.KpbEAR);
    }
  },
  [EmailCategories.RECOMMENDATIONS_AND_EVENTS]: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3206.WEPL42);
    },
    subLabel() {
      const intl = util.intl;
      return intl.string(_modDef3206.AmcFNU);
    }
  }
};
const emailSettings = createEmailSettings(MobileUserSettings.EMAIL_NOTIFICATIONS);
const emailSettings1 = createEmailSettings(MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmailCategoryNotificationSettings.tsx");

export const EmailSettings = emailSettings;
export const RedesignEmailSettings = emailSettings1;