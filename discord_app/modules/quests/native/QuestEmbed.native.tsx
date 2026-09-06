// discord_app/modules/quests/native/QuestEmbed.native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import shared from "../../../design/shared.tsx";
import QuestTypes from "../QuestTypes.tsx";
import QuestDataUtils from "../utils/QuestDataUtils.tsx";
import AnalyticsActions from "../lib/analytics/AnalyticsActions.tsx";
import utils_QuestUtils from "../utils/QuestUtils.tsx";
import QuestTaskUtils from "../utils/QuestTaskUtils.tsx";
import Constants2 from "../../instant_invite/Constants.tsx";
import getEmbedThemeColorsDefault from "../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import QuestCopyHooks from "../hooks/QuestCopyHooks.tsx";
import _modDef13224 from "../../../../_runtime/metro/13224__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import QuestStore from "../QuestStore.tsx";
import QuestConstants from "../QuestConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    const intl9 = util.intl;
    const intl10 = util.intl;
    let intl11 = intl10.string(util.t.CXEb9p);
    const colors5 = acceptLabelGreenColor.colors;
    obj = {};
    const merged = Object.assign(acceptLabelGreenColor.baseColors);
    obj.headerColor = colors5.headerColor;
    obj.titleText = intl9.string(util.t["6LxbQM"]);
    ({
      titleColor: obj25.titleColor,
      bodyTextColor: obj25.subtitleColor,
      bodyTextColor: obj25.bodyTextColor,
    } = colors5);
    obj.thumbnailUrl = Image.resolveAssetSource(_modDef13224).uri;
    obj.embedCanBeTapped = true;
    obj.canBeAccepted = true;
    obj.type = InviteTypes.GUILD;
    let tmp2Result = PlatformUtils;
    obj = {};
    const stringResult = intl9.string(util.t["6LxbQM"]);
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
    intl11 = util.intl;
    obj.acceptLabelText = intl11.string(util.t.hvVgAZ);
    acceptBlurpleLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
    obj.acceptLabelBackgroundColor = acceptBlurpleLabelBackgroundColor;
    acceptLabelGreenColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
    obj.acceptLabelColor = acceptLabelGreenColor;
    isAndroidResult = tmp2Result.isAndroid();
  } else {
    tmp2Result = QuestDataUtils;
    const result = tmp2Result.findQuestOrReplacement(questId, QuestStore.quests, QuestStore.excludedQuests);
    const excludedQuests = QuestStore.excludedQuests;
    value = excludedQuests.get(questId);
    if (null == result) {
      if (QuestStore.isFetchingCurrentQuests) {
        const obj1 = { themeColors: acceptLabelGreenColor };
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
        const tmp2Result1 = PlatformUtils;
        const merged4 = Object.assign(obj2);
        if (isAndroidResult1) {
          obj3.headerText = null;
          obj3.subtitle = bodyText;
        } else {
          obj3.headerText = undefined;
          obj3.subtitle = bodyText;
        }
        isAndroidResult1 = PlatformUtils.isAndroid();
      }
    }
    if (null == result) {
      if (null == value) {
        const result1 = AnalyticsActions.trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const intl12 = util.intl;
        const tmp2Result2 = AnalyticsActions;
        const intl13 = util.intl;
        const stringResult2 = intl13.string(util.t.Ow5AQI);
        const colors6 = acceptLabelGreenColor.colors;
        const obj4 = {};
        const merged5 = Object.assign(acceptLabelGreenColor.baseColors);
        obj4.headerColor = colors6.headerColor;
        obj4.titleText = intl12.string(util.t["rxf+nx"]);
        ({
          titleColor: obj34.titleColor,
          bodyTextColor: obj34.subtitleColor,
          bodyTextColor: obj34.bodyTextColor,
        } = colors6);
        obj4.thumbnailUrl = Image.resolveAssetSource(_modDef13224).uri;
        obj4.embedCanBeTapped = true;
        obj4.canBeAccepted = true;
        obj4.type = InviteTypes.GUILD;
        const stringResult1 = intl12.string(util.t["rxf+nx"]);
        const obj5 = {};
        const tmp2Result3 = PlatformUtils;
        const merged6 = Object.assign(obj4);
        if (isAndroidResult2) {
          obj5.headerText = null;
          obj5.subtitle = stringResult2;
        } else {
          obj5.headerText = undefined;
          obj5.subtitle = stringResult2;
        }
        isAndroidResult2 = PlatformUtils.isAndroid();
      }
      const result2 = AnalyticsActions.trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
      const intl7 = util.intl;
      const tmp2Result4 = AnalyticsActions;
      const intl8 = util.intl;
      const stringResult4 = intl8.string(util.t.ii4mJo);
      const colors3 = acceptLabelGreenColor.colors;
      const obj6 = {};
      const merged7 = Object.assign(acceptLabelGreenColor.baseColors);
      obj6.headerColor = colors3.headerColor;
      obj6.titleText = intl7.string(util.t.Dd6Daw);
      ({
        titleColor: obj18.titleColor,
        bodyTextColor: obj18.subtitleColor,
        bodyTextColor: obj18.bodyTextColor,
      } = colors3);
      obj6.thumbnailUrl = Image.resolveAssetSource(_modDef13224).uri;
      obj6.embedCanBeTapped = true;
      obj6.canBeAccepted = true;
      obj6.type = InviteTypes.GUILD;
      const stringResult3 = intl7.string(util.t.Dd6Daw);
      const obj7 = {};
      const tmp2Result5 = PlatformUtils;
      const merged8 = Object.assign(obj6);
      if (isAndroidResult3) {
        obj7.headerText = null;
        obj7.subtitle = stringResult4;
      } else {
        obj7.headerText = undefined;
        obj7.subtitle = stringResult4;
      }
      isAndroidResult3 = PlatformUtils.isAndroid();
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
        const tmp2Result7 = shared;
        const intl3 = util.intl;
        const obj8 = { questName: result.config.messages.questName };
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const tmp29 = shared.isThemeDark(ThemeStore.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != QuestStore.questEnrollmentBlockedUntil;
        const date1 = new Date();
        if (result.config.expiresAt < date1.toISOString()) {
          const intl4 = util.intl;
          const obj9 = { questName: result.config.messages.questName };
          let formatToPlainStringResult1 = intl4.formatToPlainString(util.t["ge+AJp"], obj9);
        } else {
          const questTaskDetails = QuestTaskUtils.getQuestTaskDetails(result);
          const tmp2Result8 = QuestTaskUtils;
          const thirdPartyTaskDetails = QuestTaskUtils.getThirdPartyTaskDetails(result);
          const tmp2Result9 = QuestTaskUtils;
          const obj10 = {
            quest: result,
            taskDetails: questTaskDetails,
            location: constants.EMBED_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_EMBED_MOBILE,
            thirdPartyTaskDetails,
            withoutMarkdown: true,
            currentUser,
          };
          formatToPlainStringResult1 = QuestCopyHooks.getQuestsInstructionsToWinReward(obj10);
          const tmp2Result10 = QuestCopyHooks;
        }
        const formatToPlainStringResult = intl3.formatToPlainString(util.t.EAYZAr, obj8);
        const colors2 = acceptLabelGreenColor.colors;
        const obj11 = {};
        const merged9 = Object.assign(acceptLabelGreenColor.baseColors);
        obj11.headerColor = colors2.headerColor;
        obj11.titleText = formatToPlainStringResult;
        ({
          titleColor: obj13.titleColor,
          bodyTextColor: obj13.subtitleColor,
          bodyTextColor: obj13.bodyTextColor,
        } = colors2);
        obj11.thumbnailUrl = AssetUtils.getQuestAsset(result, AssetUtils.QuestAssetType.GAME_TILE, tmp29).url;
        obj11.embedCanBeTapped = true;
        obj11.canBeAccepted = true;
        obj11.type = InviteTypes.GUILD;
        const tmp2Result11 = AssetUtils;
        const obj12 = {};
        const tmp2Result12 = PlatformUtils;
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
            const intl5 = util.intl;
            const string = intl5.string;
            const t = util.t;
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
        const intl6 = util.intl;
        const string2 = intl6.string;
        let hvVgAZ = util.t;
        if (tmp26) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ["th2+0j"]);
        }
        isAndroidResult4 = PlatformUtils.isAndroid();
      } else {
        const result3 = AnalyticsActions.trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const intl = util.intl;
        const tmp2Result13 = AnalyticsActions;
        const intl2 = util.intl;
        const stringResult7 = intl2.string(util.t.NXrP3N);
        const colors = acceptLabelGreenColor.colors;
        const obj14 = {};
        const merged12 = Object.assign(acceptLabelGreenColor.baseColors);
        obj14.headerColor = colors.headerColor;
        obj14.titleText = intl.string(util.t.Dd6Daw);
        ({
          titleColor: obj4.titleColor,
          bodyTextColor: obj4.subtitleColor,
          bodyTextColor: obj4.bodyTextColor,
        } = colors);
        obj14.thumbnailUrl = Image.resolveAssetSource(_modDef13224).uri;
        obj14.embedCanBeTapped = true;
        obj14.canBeAccepted = true;
        obj14.type = InviteTypes.GUILD;
        const stringResult6 = intl.string(util.t.Dd6Daw);
        const obj15 = {};
        const tmp2Result14 = PlatformUtils;
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
      tmp2Result6 = utils_QuestUtils;
    }
  }
};
