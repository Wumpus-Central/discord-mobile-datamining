// === Module 13223: QuestEmbed ===

// Module 13223 (QuestEmbed)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import Constants2 from "Constants" /* 7736 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import QuestStore from "QuestStore" /* 7703 */;
import QuestConstants from "QuestConstants" /* 5444 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
({ QuestsExperimentLocations: metroRequire, QuestEmbedFallbackReason: closure_7 } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
const InviteTypes = Constants2.InviteTypes;
let result = size.fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  questId = questId.questId;
  let acceptBlurpleLabelBackgroundColor = dependencyMap;
  ({ theme, currentUser } = questId);
  let acceptLabelGreenColor = getEmbedThemeColorsDefault(theme);
  let obj = MetaQuestUtils;
  if (obj.isMetaQuest()) {
    const intl9 = tmp2(1114).intl;
    const intl10 = tmp2(1114).intl;
    let intl11 = intl10.string(tmp2(1114).t.CXEb9p);
    const colors5 = acceptLabelGreenColor.colors;
    obj = {};
    const merged = Object.assign(acceptLabelGreenColor.baseColors);
    obj.headerColor = colors5.headerColor;
    obj.titleText = intl9.string(tmp2(1114).t["6LxbQM"]);
    ({ titleColor: obj25.titleColor, bodyTextColor: obj25.subtitleColor, bodyTextColor: obj25.bodyTextColor } = colors5);
    obj.thumbnailUrl = Image.resolveAssetSource(tmp(13224)).uri;
    obj.embedCanBeTapped = true;
    obj.canBeAccepted = true;
    obj.type = InviteTypes.GUILD;
    let tmp2Result = tmp2(1115);
    obj = {};
    const stringResult = intl9.string(tmp2(1114).t["6LxbQM"]);
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
    intl11 = tmp2(1114).intl;
    obj.acceptLabelText = intl11.string(tmp2(1114).t.hvVgAZ);
    acceptBlurpleLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
    obj.acceptLabelBackgroundColor = acceptBlurpleLabelBackgroundColor;
    acceptLabelGreenColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
    obj.acceptLabelColor = acceptLabelGreenColor;
    isAndroidResult = tmp2Result.isAndroid();
  } else {
    tmp2Result = tmp2(7699);
    const result = tmp2Result.findQuestOrReplacement(questId, QuestStore.quests, QuestStore.excludedQuests);
    const excludedQuests = QuestStore.excludedQuests;
    value = excludedQuests.get(questId);
    if (null == result) {
      if (tmp3.isFetchingCurrentQuests) {
        const obj1 = { themeColors: acceptLabelGreenColor };
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
        const tmp2Result1 = tmp2(1115);
        const merged4 = Object.assign(obj2);
        if (isAndroidResult1) {
          obj3.headerText = null;
          obj3.subtitle = bodyText;
        } else {
          obj3.headerText = undefined;
          obj3.subtitle = bodyText;
        }
        isAndroidResult1 = tmp2(1115).isAndroid();
      }
    }
    if (null == result) {
      if (null == value) {
        const result1 = tmp2(7718).trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const intl12 = tmp2(1114).intl;
        const tmp2Result2 = tmp2(7718);
        const intl13 = tmp2(1114).intl;
        const stringResult2 = intl13.string(tmp2(1114).t.Ow5AQI);
        const colors6 = acceptLabelGreenColor.colors;
        const obj4 = {};
        const merged5 = Object.assign(acceptLabelGreenColor.baseColors);
        obj4.headerColor = colors6.headerColor;
        obj4.titleText = intl12.string(tmp2(1114).t["rxf+nx"]);
        ({ titleColor: obj34.titleColor, bodyTextColor: obj34.subtitleColor, bodyTextColor: obj34.bodyTextColor } = colors6);
        obj4.thumbnailUrl = Image.resolveAssetSource(tmp(13224)).uri;
        obj4.embedCanBeTapped = true;
        obj4.canBeAccepted = true;
        obj4.type = InviteTypes.GUILD;
        const stringResult1 = intl12.string(tmp2(1114).t["rxf+nx"]);
        const obj5 = {};
        const tmp2Result3 = tmp2(1115);
        const merged6 = Object.assign(obj4);
        if (isAndroidResult2) {
          obj5.headerText = null;
          obj5.subtitle = stringResult2;
        } else {
          obj5.headerText = undefined;
          obj5.subtitle = stringResult2;
        }
        isAndroidResult2 = tmp2(1115).isAndroid();
      }
      const result2 = tmp2(7718).trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
      const intl7 = tmp2(1114).intl;
      const tmp2Result4 = tmp2(7718);
      const intl8 = tmp2(1114).intl;
      const stringResult4 = intl8.string(tmp2(1114).t.ii4mJo);
      const colors3 = acceptLabelGreenColor.colors;
      const obj6 = {};
      const merged7 = Object.assign(acceptLabelGreenColor.baseColors);
      obj6.headerColor = colors3.headerColor;
      obj6.titleText = intl7.string(tmp2(1114).t.Dd6Daw);
      ({ titleColor: obj18.titleColor, bodyTextColor: obj18.subtitleColor, bodyTextColor: obj18.bodyTextColor } = colors3);
      obj6.thumbnailUrl = Image.resolveAssetSource(tmp(13224)).uri;
      obj6.embedCanBeTapped = true;
      obj6.canBeAccepted = true;
      obj6.type = InviteTypes.GUILD;
      const stringResult3 = intl7.string(tmp2(1114).t.Dd6Daw);
      const obj7 = {};
      const tmp2Result5 = tmp2(1115);
      const merged8 = Object.assign(obj6);
      if (isAndroidResult3) {
        obj7.headerText = null;
        obj7.subtitle = stringResult4;
      } else {
        obj7.headerText = undefined;
        obj7.subtitle = stringResult4;
      }
      isAndroidResult3 = tmp2(1115).isAndroid();
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
        const tmp2Result7 = tmp2(4411);
        const intl3 = tmp2(1114).intl;
        const obj8 = { questName: result.config.messages.questName };
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const tmp29 = tmp2(4411).isThemeDark(ThemeStore.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != tmp3.questEnrollmentBlockedUntil;
        const date1 = new Date();
        if (result.config.expiresAt < date1.toISOString()) {
          const intl4 = tmp2(1114).intl;
          const obj9 = { questName: result.config.messages.questName };
          let formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1114).t["ge+AJp"], obj9);
        } else {
          const questTaskDetails = tmp2(7724).getQuestTaskDetails(result);
          const tmp2Result8 = tmp2(7724);
          const thirdPartyTaskDetails = tmp2(7724).getThirdPartyTaskDetails(result);
          const tmp2Result9 = tmp2(7724);
          const obj10 = { quest: result, taskDetails: questTaskDetails, location: constants.EMBED_MOBILE, sourceQuestContent: tmp2(5447).QuestContent.QUEST_EMBED_MOBILE, thirdPartyTaskDetails, withoutMarkdown: true, currentUser };
          formatToPlainStringResult1 = tmp2(11775).getQuestsInstructionsToWinReward(obj10);
          const tmp2Result10 = tmp2(11775);
        }
        const formatToPlainStringResult = intl3.formatToPlainString(tmp2(1114).t.EAYZAr, obj8);
        const colors2 = acceptLabelGreenColor.colors;
        const obj11 = {};
        const merged9 = Object.assign(acceptLabelGreenColor.baseColors);
        obj11.headerColor = colors2.headerColor;
        obj11.titleText = formatToPlainStringResult;
        ({ titleColor: obj13.titleColor, bodyTextColor: obj13.subtitleColor, bodyTextColor: obj13.bodyTextColor } = colors2);
        obj11.thumbnailUrl = tmp2(11285).getQuestAsset(result, tmp2(11285).QuestAssetType.GAME_TILE, tmp29).url;
        obj11.embedCanBeTapped = true;
        obj11.canBeAccepted = true;
        obj11.type = InviteTypes.GUILD;
        const tmp2Result11 = tmp2(11285);
        const obj12 = {};
        const tmp2Result12 = tmp2(1115);
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
            const intl5 = tmp2(1114).intl;
            const string = intl5.string;
            const t = tmp2(1114).t;
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
        const intl6 = tmp2(1114).intl;
        const string2 = intl6.string;
        let hvVgAZ = tmp2(1114).t;
        if (tmp26) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ["th2+0j"]);
        }
        isAndroidResult4 = tmp2(1115).isAndroid();
      } else {
        const result3 = tmp2(7718).trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const intl = tmp2(1114).intl;
        const tmp2Result13 = tmp2(7718);
        const intl2 = tmp2(1114).intl;
        const stringResult7 = intl2.string(tmp2(1114).t.NXrP3N);
        const colors = acceptLabelGreenColor.colors;
        const obj14 = {};
        const merged12 = Object.assign(acceptLabelGreenColor.baseColors);
        obj14.headerColor = colors.headerColor;
        obj14.titleText = intl.string(tmp2(1114).t.Dd6Daw);
        ({ titleColor: obj4.titleColor, bodyTextColor: obj4.subtitleColor, bodyTextColor: obj4.bodyTextColor } = colors);
        obj14.thumbnailUrl = Image.resolveAssetSource(tmp(13224)).uri;
        obj14.embedCanBeTapped = true;
        obj14.canBeAccepted = true;
        obj14.type = InviteTypes.GUILD;
        const stringResult6 = intl.string(tmp2(1114).t.Dd6Daw);
        const obj15 = {};
        const tmp2Result14 = tmp2(1115);
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
      tmp2Result6 = tmp2(7722);
    }
  }
};