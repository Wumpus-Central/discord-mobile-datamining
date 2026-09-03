// discord_app/modules/quests/native/QuestEmbed.native.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import InviteSendStates from "../../instant_invite/Constants.tsx";
import getEmbedThemeColorsDefault from "../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import registerAssetDefault from "../../../../_runtime/13124_registerAsset.js";
import closure_4 from "../../user_settings/ThemeStore.tsx";
import closure_5 from "../QuestStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";

const Image = get_ActivityIndicator.Image;
({ QuestsExperimentLocations: closure_6, QuestEmbedFallbackReason: error } = QuestsExperimentLocations);
const ThemeTypes = ME.ThemeTypes;
const InviteTypes = InviteSendStates.InviteTypes;
let result = set.fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  questId = questId.questId;
  let merged5 = importDefault;
  let acceptBlurpleLabelBackgroundColor = dependencyMap;
  ({ theme, currentUser } = questId);
  let acceptLabelGreenColor = getEmbedThemeColorsDefault(theme);
  let obj = isMetaQuest;
  if (obj.isMetaQuest()) {
    const intl9 = tmp2(1233).intl;
    const intl10 = tmp2(1233).intl;
    let intl11 = intl10.string(tmp2(1233).t.CXEb9p);
    const colors5 = acceptLabelGreenColor.colors;
    obj = {};
    const merged = Object.assign(acceptLabelGreenColor.baseColors);
    obj.headerColor = colors5.headerColor;
    obj.titleText = intl9.string(tmp2(1233).t["6LxbQM"]);
    ({
      titleColor: obj25.titleColor,
      bodyTextColor: obj25.subtitleColor,
      bodyTextColor: obj25.bodyTextColor,
    } = colors5);
    obj.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
    obj.embedCanBeTapped = true;
    obj.canBeAccepted = true;
    obj.type = InviteTypes.GUILD;
    let tmp2Result = tmp2(1234);
    obj = {};
    const stringResult = intl9.string(tmp2(1233).t["6LxbQM"]);
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
    intl11 = tmp2(1233).intl;
    obj.acceptLabelText = intl11.string(tmp2(1233).t.hvVgAZ);
    acceptBlurpleLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
    obj.acceptLabelBackgroundColor = acceptBlurpleLabelBackgroundColor;
    acceptLabelGreenColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
    obj.acceptLabelColor = acceptLabelGreenColor;
    isAndroidResult = tmp2Result.isAndroid();
  } else {
    tmp2Result = tmp2(7454);
    const result = tmp2Result.findQuestOrReplacement(questId, closure_5.quests, closure_5.excludedQuests);
    const excludedQuests = closure_5.excludedQuests;
    const value = excludedQuests.get(questId);
    if (null == result) {
      if (tmp3.isFetchingCurrentQuests) {
        obj1 = { themeColors: null };
        obj1[0] = acceptLabelGreenColor;
        ({ bodyText, themeColors } = obj1);
        const colors4 = themeColors.colors;
        const obj2 = {};
        ({ titleText, thumbnailUrl } = obj1);
        const merged3 = Object.assign(themeColors.baseColors);
        obj2.headerColor = colors4.headerColor;
        obj2.titleText = titleText;
        ({
          titleColor: obj22.titleColor,
          bodyTextColor: obj22.subtitleColor,
          bodyTextColor: obj22.bodyTextColor,
        } = colors4);
        obj2.thumbnailUrl = thumbnailUrl;
        obj2.embedCanBeTapped = true;
        obj2.canBeAccepted = true;
        obj2.type = InviteTypes.GUILD;
        const obj3 = {};
        const tmp2Result1 = tmp2(1234);
        const merged4 = Object.assign(obj2);
        if (isAndroidResult1) {
          obj3.headerText = null;
          obj3.subtitle = bodyText;
          let tmp75 = obj3;
        } else {
          obj3.headerText = undefined;
          obj3.subtitle = bodyText;
          tmp75 = obj3;
        }
        isAndroidResult1 = tmp2(1234).isAndroid();
      }
    }
    if (null == result) {
      if (null == value) {
        const result1 = tmp2(7474).trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const intl12 = tmp2(1233).intl;
        const tmp2Result2 = tmp2(7474);
        const intl13 = tmp2(1233).intl;
        const stringResult2 = intl13.string(tmp2(1233).t.Ow5AQI);
        const colors6 = acceptLabelGreenColor.colors;
        const obj4 = {};
        merged5 = Object.assign(acceptLabelGreenColor.baseColors);
        obj4.headerColor = colors6.headerColor;
        obj4.titleText = intl12.string(tmp2(1233).t["rxf+nx"]);
        ({
          titleColor: obj34.titleColor,
          bodyTextColor: obj34.subtitleColor,
          bodyTextColor: obj34.bodyTextColor,
        } = colors6);
        obj4.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
        obj4.embedCanBeTapped = true;
        obj4.canBeAccepted = true;
        merged5 = InviteTypes;
        obj4.type = InviteTypes.GUILD;
        const stringResult1 = intl12.string(tmp2(1233).t["rxf+nx"]);
        const obj5 = {};
        merged5 = obj5;
        merged5 = obj4;
        merged5 = tmp2(1234).isAndroid();
        merged5 = Object.assign(obj4);
        if (merged5) {
          obj5.headerText = null;
          obj5.subtitle = stringResult2;
          let tmp52 = obj5;
        } else {
          obj5.headerText = undefined;
          obj5.subtitle = stringResult2;
          tmp52 = obj5;
        }
        const tmp2Result3 = tmp2(1234);
      }
      const result2 = tmp2(7474).trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
      const intl7 = tmp2(1233).intl;
      const tmp2Result4 = tmp2(7474);
      const intl8 = tmp2(1233).intl;
      const stringResult4 = intl8.string(tmp2(1233).t.ii4mJo);
      const colors3 = acceptLabelGreenColor.colors;
      const obj6 = {};
      const merged6 = Object.assign(acceptLabelGreenColor.baseColors);
      obj6.headerColor = colors3.headerColor;
      obj6.titleText = intl7.string(tmp2(1233).t.Dd6Daw);
      ({
        titleColor: obj18.titleColor,
        bodyTextColor: obj18.subtitleColor,
        bodyTextColor: obj18.bodyTextColor,
      } = colors3);
      obj6.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
      obj6.embedCanBeTapped = true;
      obj6.canBeAccepted = true;
      obj6.type = InviteTypes.GUILD;
      const stringResult3 = intl7.string(tmp2(1233).t.Dd6Daw);
      const obj7 = {};
      const tmp2Result5 = tmp2(1234);
      const merged7 = Object.assign(obj6);
      if (isAndroidResult2) {
        obj7.headerText = null;
        obj7.subtitle = stringResult4;
        let tmp65 = obj7;
      } else {
        obj7.headerText = undefined;
        obj7.subtitle = stringResult4;
        tmp65 = obj7;
      }
      isAndroidResult2 = tmp2(1234).isAndroid();
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
        const tmp2Result7 = tmp2(1362);
        const intl3 = tmp2(1233).intl;
        const obj8 = { questName: null };
        obj8[0] = result.config.messages.questName;
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const tmp29 = tmp2(1362).isThemeDark(state.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != tmp3.questEnrollmentBlockedUntil;
        const date1 = new Date();
        if (result.config.expiresAt < date1.toISOString()) {
          const intl4 = tmp2(1233).intl;
          const obj9 = { questName: null };
          obj9[0] = result.config.messages.questName;
          let formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1233).t["ge+AJp"], obj9);
        } else {
          const questTaskDetails = tmp2(7480).getQuestTaskDetails(result);
          const tmp2Result8 = tmp2(7480);
          const thirdPartyTaskDetails = tmp2(7480).getThirdPartyTaskDetails(result);
          const tmp2Result9 = tmp2(7480);
          const obj10 = {
            quest: null,
            taskDetails: null,
            location: null,
            sourceQuestContent: null,
            thirdPartyTaskDetails: null,
            withoutMarkdown: true,
            currentUser: null,
          };
          obj10[0] = result;
          obj10[1] = questTaskDetails;
          obj10[2] = constants.EMBED_MOBILE;
          obj10[3] = tmp2(5399).QuestContent.QUEST_EMBED_MOBILE;
          obj10[4] = thirdPartyTaskDetails;
          obj10[6] = currentUser;
          formatToPlainStringResult1 = tmp2(11570).getQuestsInstructionsToWinReward(obj10);
          const tmp2Result10 = tmp2(11570);
        }
        const formatToPlainStringResult = intl3.formatToPlainString(tmp2(1233).t.EAYZAr, obj8);
        const colors2 = acceptLabelGreenColor.colors;
        const obj11 = {};
        const merged8 = Object.assign(acceptLabelGreenColor.baseColors);
        obj11.headerColor = colors2.headerColor;
        obj11.titleText = formatToPlainStringResult;
        ({
          titleColor: obj13.titleColor,
          bodyTextColor: obj13.subtitleColor,
          bodyTextColor: obj13.bodyTextColor,
        } = colors2);
        obj11.thumbnailUrl = tmp2(11146).getQuestAsset(result, tmp2(11146).QuestAssetType.GAME_TILE, tmp29).url;
        obj11.embedCanBeTapped = true;
        obj11.canBeAccepted = true;
        obj11.type = InviteTypes.GUILD;
        const tmp2Result11 = tmp2(11146);
        const obj12 = {};
        const tmp2Result12 = tmp2(1234);
        const merged9 = Object.assign(obj11);
        if (isAndroidResult3) {
          obj12.headerText = null;
          obj12.subtitle = formatToPlainStringResult1;
          let tmp44 = obj12;
        } else {
          obj12.headerText = undefined;
          obj12.subtitle = formatToPlainStringResult1;
          tmp44 = obj12;
        }
        const obj13 = {};
        const merged10 = Object.assign(tmp44);
        if (!tmp21) {
          if (!tmp26) {
            const intl5 = tmp2(1233).intl;
            const string = intl5.string;
            const t = tmp2(1233).t;
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
        const intl6 = tmp2(1233).intl;
        const string2 = intl6.string;
        let hvVgAZ = tmp2(1233).t;
        if (tmp26) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ["th2+0j"]);
        }
        isAndroidResult3 = tmp2(1234).isAndroid();
      } else {
        const result3 = tmp2(7474).trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const intl = tmp2(1233).intl;
        const tmp2Result13 = tmp2(7474);
        const intl2 = tmp2(1233).intl;
        const stringResult7 = intl2.string(tmp2(1233).t.NXrP3N);
        const colors = acceptLabelGreenColor.colors;
        const obj14 = {};
        const merged11 = Object.assign(acceptLabelGreenColor.baseColors);
        obj14.headerColor = colors.headerColor;
        obj14.titleText = intl.string(tmp2(1233).t.Dd6Daw);
        ({
          titleColor: obj4.titleColor,
          bodyTextColor: obj4.subtitleColor,
          bodyTextColor: obj4.bodyTextColor,
        } = colors);
        obj14.thumbnailUrl = Image.resolveAssetSource(registerAssetDefault).uri;
        obj14.embedCanBeTapped = true;
        obj14.canBeAccepted = true;
        obj14.type = InviteTypes.GUILD;
        const stringResult6 = intl.string(tmp2(1233).t.Dd6Daw);
        const obj15 = {};
        const tmp2Result14 = tmp2(1234);
        const merged12 = Object.assign(obj14);
        if (isAndroidResult4) {
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
      tmp2Result6 = tmp2(7478);
    }
  }
};
