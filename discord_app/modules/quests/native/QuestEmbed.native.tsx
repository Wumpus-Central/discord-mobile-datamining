// === Module 12774: createQuestsEmbed ===

// Module 12774 (createQuestsEmbed)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import InviteSendStates from "InviteSendStates" /* 4371 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 6719 */;
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7451 */;
import trackQuestEvent from "trackQuestEvent" /* 7470 */;
import isSponsoredPlayQuest from "isSponsoredPlayQuest" /* 7474 */;
import getApplicationIdsByTaskTypes from "getApplicationIdsByTaskTypes" /* 7476 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8169 */;
import resolveAsset from "resolveAsset" /* 10486 */;
import _getQuestsInstructionsToWinReward from "_getQuestsInstructionsToWinReward" /* 10954 */;
import registerAssetDefault from "registerAsset" /* 12775 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import initializeState from "initializeState" /* 7453 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 6716 */;

const Image = get_ActivityIndicator.Image;
({ QuestsExperimentLocations: closure_6, QuestEmbedFallbackReason: error } = QuestsExperimentLocations);
const ThemeTypes = ME.ThemeTypes;
const InviteTypes = InviteSendStates.InviteTypes;
let result = obj132.fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  questId = questId.questId;
  let acceptBlurpleLabelBackgroundColor = dependencyMap;
  ({ theme, currentUser } = questId);
  let acceptLabelGreenColor = getEmbedThemeColorsDefault(theme);
  let obj = isMetaQuest;
  if (obj.isMetaQuest()) {
    const intl9 = getSystemLocale.intl;
    const intl10 = getSystemLocale.intl;
    let intl11 = intl10.string(getSystemLocale.t.CXEb9p);
    const colors5 = acceptLabelGreenColor.colors;
    obj = {};
    const merged = Object.assign(acceptLabelGreenColor.baseColors);
    obj.headerColor = colors5.headerColor;
    obj.titleText = intl9.string(getSystemLocale.t["6LxbQM"]);
    ({ titleColor: obj25.titleColor, bodyTextColor: obj25.subtitleColor, bodyTextColor: obj25.bodyTextColor } = colors5);
    obj.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
    obj.embedCanBeTapped = true;
    obj.canBeAccepted = true;
    obj.type = InviteTypes.GUILD;
    let tmp2Result = obj1322;
    obj = {};
    const stringResult = intl9.string(getSystemLocale.t["6LxbQM"]);
    const merged1 = Object.assign(obj);
    if (isAndroidResult) {
      obj.headerText = null;
      obj.subtitle = intl11;
      let tmp86 = obj;
    } else {
      obj.headerText = undefined;
      obj.subtitle = intl11;
      tmp86 = obj;
    }
    obj = {};
    const merged2 = Object.assign(tmp86);
    intl11 = getSystemLocale.intl;
    obj.acceptLabelText = intl11.string(getSystemLocale.t.hvVgAZ);
    acceptBlurpleLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
    obj.acceptLabelBackgroundColor = acceptBlurpleLabelBackgroundColor;
    acceptLabelGreenColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
    obj.acceptLabelColor = acceptLabelGreenColor;
    isAndroidResult = tmp2Result.isAndroid();
  } else {
    tmp2Result = getQuestDeliveryDataForPlacement;
    const result = tmp2Result.findQuestOrReplacement(questId, closure_5.quests, closure_5.excludedQuests);
    const excludedQuests = closure_5.excludedQuests;
    const value = excludedQuests.get(questId);
    if (null == result) {
      if (closure_5.isFetchingCurrentQuests) {
        obj1 = { themeColors: null };
        obj1[0] = acceptLabelGreenColor;
        ({ bodyText, themeColors } = obj1);
        const colors4 = themeColors.colors;
        const obj2 = {};
        ({ titleText, thumbnailUrl } = obj1);
        const merged3 = Object.assign(themeColors.baseColors);
        obj2.headerColor = colors4.headerColor;
        obj2.titleText = titleText;
        ({ titleColor: obj22.titleColor, bodyTextColor: obj22.subtitleColor, bodyTextColor: obj22.bodyTextColor } = colors4);
        obj2.thumbnailUrl = thumbnailUrl;
        obj2.embedCanBeTapped = true;
        obj2.canBeAccepted = true;
        obj2.type = InviteTypes.GUILD;
        const obj3 = {};
        const tmp2Result1 = obj1322;
        const merged4 = Object.assign(obj2);
        if (isAndroidResult1) {
          obj3.headerText = null;
          obj3.subtitle = bodyText;
        } else {
          obj3.headerText = undefined;
          obj3.subtitle = bodyText;
        }
        isAndroidResult1 = obj1322.isAndroid();
      }
    }
    if (null == result) {
      if (null == value) {
        const result1 = trackQuestEvent.trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const intl12 = getSystemLocale.intl;
        const tmp2Result2 = trackQuestEvent;
        const intl13 = getSystemLocale.intl;
        const stringResult2 = intl13.string(getSystemLocale.t.Ow5AQI);
        const colors6 = acceptLabelGreenColor.colors;
        const obj4 = {};
        const merged5 = Object.assign(acceptLabelGreenColor.baseColors);
        obj4.headerColor = colors6.headerColor;
        obj4.titleText = intl12.string(getSystemLocale.t["rxf+nx"]);
        ({ titleColor: obj34.titleColor, bodyTextColor: obj34.subtitleColor, bodyTextColor: obj34.bodyTextColor } = colors6);
        obj4.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
        obj4.embedCanBeTapped = true;
        obj4.canBeAccepted = true;
        obj4.type = InviteTypes.GUILD;
        const stringResult1 = intl12.string(getSystemLocale.t["rxf+nx"]);
        const obj5 = {};
        const tmp2Result3 = obj1322;
        const merged6 = Object.assign(obj4);
        if (isAndroidResult2) {
          obj5.headerText = null;
          obj5.subtitle = stringResult2;
        } else {
          obj5.headerText = undefined;
          obj5.subtitle = stringResult2;
        }
        isAndroidResult2 = obj1322.isAndroid();
      }
      const result2 = trackQuestEvent.trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
      const intl7 = getSystemLocale.intl;
      const tmp2Result4 = trackQuestEvent;
      const intl8 = getSystemLocale.intl;
      const stringResult4 = intl8.string(getSystemLocale.t.ii4mJo);
      const colors3 = acceptLabelGreenColor.colors;
      const obj6 = {};
      const merged7 = Object.assign(acceptLabelGreenColor.baseColors);
      obj6.headerColor = colors3.headerColor;
      obj6.titleText = intl7.string(getSystemLocale.t.Dd6Daw);
      ({ titleColor: obj18.titleColor, bodyTextColor: obj18.subtitleColor, bodyTextColor: obj18.bodyTextColor } = colors3);
      obj6.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
      obj6.embedCanBeTapped = true;
      obj6.canBeAccepted = true;
      obj6.type = InviteTypes.GUILD;
      const stringResult3 = intl7.string(getSystemLocale.t.Dd6Daw);
      const obj7 = {};
      const tmp2Result5 = obj1322;
      const merged8 = Object.assign(obj6);
      if (isAndroidResult3) {
        obj7.headerText = null;
        obj7.subtitle = stringResult4;
      } else {
        obj7.headerText = undefined;
        obj7.subtitle = stringResult4;
      }
      isAndroidResult3 = obj1322.isAndroid();
    } else {
      if (tmp2Result6.isShareableQuest(result.config)) {
        const userStatus = result.userStatus;
        let enrolledAt;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        const _Date = Date;
        const date = new Date();
        const tmp26 = result.config.expiresAt < date.toISOString();
        const tmp21 = null != enrolledAt;
        const tmp2Result7 = AccessibilityAnnouncer;
        const intl3 = getSystemLocale.intl;
        const obj8 = { questName: null };
        obj8[0] = result.config.messages.questName;
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const tmp29 = AccessibilityAnnouncer.isThemeDark(state.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != closure_5.questEnrollmentBlockedUntil;
        const date1 = new Date();
        if (result.config.expiresAt < date1.toISOString()) {
          const intl4 = getSystemLocale.intl;
          const obj9 = { questName: null };
          obj9[0] = result.config.messages.questName;
          let formatToPlainStringResult1 = intl4.formatToPlainString(getSystemLocale.t["ge+AJp"], obj9);
        } else {
          const questTaskDetails = getApplicationIdsByTaskTypes.getQuestTaskDetails(result);
          const tmp2Result8 = getApplicationIdsByTaskTypes;
          const thirdPartyTaskDetails = getApplicationIdsByTaskTypes.getThirdPartyTaskDetails(result);
          const tmp2Result9 = getApplicationIdsByTaskTypes;
          const obj10 = { quest: null, taskDetails: null, location: null, sourceQuestContent: null, thirdPartyTaskDetails: null, withoutMarkdown: true, currentUser: null };
          obj10[0] = result;
          obj10[1] = questTaskDetails;
          obj10[2] = constants.EMBED_MOBILE;
          obj10[3] = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_EMBED_MOBILE;
          obj10[4] = thirdPartyTaskDetails;
          obj10[6] = currentUser;
          formatToPlainStringResult1 = _getQuestsInstructionsToWinReward.getQuestsInstructionsToWinReward(obj10);
          const tmp2Result10 = _getQuestsInstructionsToWinReward;
        }
        const formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.EAYZAr, obj8);
        const colors2 = acceptLabelGreenColor.colors;
        const obj11 = {};
        const merged9 = Object.assign(acceptLabelGreenColor.baseColors);
        obj11.headerColor = colors2.headerColor;
        obj11.titleText = formatToPlainStringResult;
        ({ titleColor: obj13.titleColor, bodyTextColor: obj13.subtitleColor, bodyTextColor: obj13.bodyTextColor } = colors2);
        obj11.thumbnailUrl = resolveAsset.getQuestAsset(result, resolveAsset.QuestAssetType.GAME_TILE, tmp29).url;
        obj11.embedCanBeTapped = true;
        obj11.canBeAccepted = true;
        obj11.type = InviteTypes.GUILD;
        const tmp2Result11 = resolveAsset;
        const obj12 = {};
        const tmp2Result12 = obj1322;
        const merged10 = Object.assign(obj11);
        if (isAndroidResult4) {
          obj12.headerText = null;
          obj12.subtitle = formatToPlainStringResult1;
          let tmp44 = obj12;
        } else {
          obj12.headerText = undefined;
          obj12.subtitle = formatToPlainStringResult1;
          tmp44 = obj12;
        }
        const obj13 = {};
        const merged11 = Object.assign(tmp44);
        if (!tmp21) {
          if (!tmp26) {
            const intl5 = getSystemLocale.intl;
            const string = intl5.string;
            const t = getSystemLocale.t;
            if (tmp30) {
              let stringResult5 = string(t["th2+0j"]);
            } else {
              stringResult5 = string(t.kUQLMJ);
            }
            obj13.acceptLabelText = stringResult5;
            obj13.acceptLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
            obj13.acceptLabelColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
            obj13.thumbnailCornerRadius = 8;
          }
        }
        const intl6 = getSystemLocale.intl;
        const string2 = intl6.string;
        let hvVgAZ = getSystemLocale.t;
        if (tmp26) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ["th2+0j"]);
        }
        isAndroidResult4 = obj1322.isAndroid();
      } else {
        const result3 = trackQuestEvent.trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const intl = getSystemLocale.intl;
        const tmp2Result13 = trackQuestEvent;
        const intl2 = getSystemLocale.intl;
        const stringResult7 = intl2.string(getSystemLocale.t.NXrP3N);
        const colors = acceptLabelGreenColor.colors;
        const obj14 = {};
        const merged12 = Object.assign(acceptLabelGreenColor.baseColors);
        obj14.headerColor = colors.headerColor;
        obj14.titleText = intl.string(getSystemLocale.t.Dd6Daw);
        ({ titleColor: obj4.titleColor, bodyTextColor: obj4.subtitleColor, bodyTextColor: obj4.bodyTextColor } = colors);
        obj14.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
        obj14.embedCanBeTapped = true;
        obj14.canBeAccepted = true;
        obj14.type = InviteTypes.GUILD;
        const stringResult6 = intl.string(getSystemLocale.t.Dd6Daw);
        const obj15 = {};
        const tmp2Result14 = obj1322;
        const merged13 = Object.assign(obj14);
        if (isAndroidResult5) {
          obj15.headerText = null;
          obj15.subtitle = stringResult7;
          let tmp19 = obj15;
        } else {
          obj15.headerText = undefined;
          obj15.subtitle = stringResult7;
          tmp19 = obj15;
        }
        return tmp19;
      }
      tmp2Result6 = isSponsoredPlayQuest;
    }
  }
};