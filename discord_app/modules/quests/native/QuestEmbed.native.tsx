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
import _modDef13355 from "../../../../_runtime/metro/13355__.js";
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
  if (obj.isMetaQuest()) {
    const intl9 = util.intl;
    const intl10 = util.intl;
    let intl11 = intl10.string(util.t.CXEb9p);
    const colors5 = acceptLabelGreenColor.colors;
    const obj2 = {};
    const merged = Object.assign(acceptLabelGreenColor.baseColors);
    obj2.headerColor = colors5.headerColor;
    obj2.titleText = intl9.string(util.t["6LxbQM"]);
    ({
      titleColor: obj25.titleColor,
      bodyTextColor: obj25.subtitleColor,
      bodyTextColor: obj25.bodyTextColor,
    } = colors5);
    obj2.thumbnailUrl = Image.resolveAssetSource(_modDef13355).uri;
    obj2.embedCanBeTapped = true;
    obj2.canBeAccepted = true;
    obj2.type = InviteTypes.GUILD;
    const stringResult = intl9.string(util.t["6LxbQM"]);
    let obj3 = {};
    const tmp2Result = PlatformUtils;
    const merged1 = Object.assign(obj2);
    if (isAndroidResult) {
      obj3.headerText = null;
      obj3.subtitle = intl11;
      let tmp86 = obj3;
    } else {
      obj3.headerText = undefined;
      obj3.subtitle = intl11;
      tmp86 = obj3;
    }
    obj3 = {};
    const merged2 = Object.assign(tmp86);
    intl11 = util.intl;
    obj3.acceptLabelText = intl11.string(util.t.hvVgAZ);
    acceptBlurpleLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
    obj3.acceptLabelBackgroundColor = acceptBlurpleLabelBackgroundColor;
    acceptLabelGreenColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
    obj3.acceptLabelColor = acceptLabelGreenColor;
    isAndroidResult = PlatformUtils.isAndroid();
  } else {
    const result = QuestDataUtils.findQuestOrReplacement(questId, QuestStore.quests, QuestStore.excludedQuests);
    const excludedQuests = QuestStore.excludedQuests;
    value = excludedQuests.get(questId);
    if (null == result) {
      if (QuestStore.isFetchingCurrentQuests) {
        const obj5 = { themeColors: acceptLabelGreenColor };
        ({ bodyText, themeColors } = obj5);
        const colors4 = themeColors.colors;
        const obj6 = {};
        ({ titleText, thumbnailUrl } = obj5);
        const merged3 = Object.assign(themeColors.baseColors);
        obj6.headerColor = colors4.headerColor;
        obj6.titleText = titleText;
        ({
          titleColor: obj22.titleColor,
          bodyTextColor: obj22.subtitleColor,
          bodyTextColor: obj22.bodyTextColor,
        } = colors4);
        obj6.thumbnailUrl = thumbnailUrl;
        obj6.embedCanBeTapped = true;
        obj6.canBeAccepted = true;
        obj6.type = InviteTypes.GUILD;
        const obj7 = {};
        const tmp2Result17 = PlatformUtils;
        const merged4 = Object.assign(obj6);
        if (isAndroidResult1) {
          obj7.headerText = null;
          obj7.subtitle = bodyText;
        } else {
          obj7.headerText = undefined;
          obj7.subtitle = bodyText;
        }
        isAndroidResult1 = PlatformUtils.isAndroid();
      }
    }
    if (null == result) {
      if (null == value) {
        const result1 = AnalyticsActions.trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const intl12 = util.intl;
        const tmp2Result18 = AnalyticsActions;
        const intl13 = util.intl;
        const stringResult2 = intl13.string(util.t.Ow5AQI);
        const colors6 = acceptLabelGreenColor.colors;
        const obj8 = {};
        const merged5 = Object.assign(acceptLabelGreenColor.baseColors);
        obj8.headerColor = colors6.headerColor;
        obj8.titleText = intl12.string(util.t["rxf+nx"]);
        ({
          titleColor: obj34.titleColor,
          bodyTextColor: obj34.subtitleColor,
          bodyTextColor: obj34.bodyTextColor,
        } = colors6);
        obj8.thumbnailUrl = Image.resolveAssetSource(_modDef13355).uri;
        obj8.embedCanBeTapped = true;
        obj8.canBeAccepted = true;
        obj8.type = InviteTypes.GUILD;
        const stringResult1 = intl12.string(util.t["rxf+nx"]);
        const obj9 = {};
        const tmp2Result19 = PlatformUtils;
        const merged6 = Object.assign(obj8);
        if (isAndroidResult2) {
          obj9.headerText = null;
          obj9.subtitle = stringResult2;
        } else {
          obj9.headerText = undefined;
          obj9.subtitle = stringResult2;
        }
        isAndroidResult2 = PlatformUtils.isAndroid();
      }
      const result2 = AnalyticsActions.trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
      const intl7 = util.intl;
      const tmp2Result20 = AnalyticsActions;
      const intl8 = util.intl;
      const stringResult4 = intl8.string(util.t.ii4mJo);
      const colors3 = acceptLabelGreenColor.colors;
      const obj10 = {};
      const merged7 = Object.assign(acceptLabelGreenColor.baseColors);
      obj10.headerColor = colors3.headerColor;
      obj10.titleText = intl7.string(util.t.Dd6Daw);
      ({
        titleColor: obj18.titleColor,
        bodyTextColor: obj18.subtitleColor,
        bodyTextColor: obj18.bodyTextColor,
      } = colors3);
      obj10.thumbnailUrl = Image.resolveAssetSource(_modDef13355).uri;
      obj10.embedCanBeTapped = true;
      obj10.canBeAccepted = true;
      obj10.type = InviteTypes.GUILD;
      const stringResult3 = intl7.string(util.t.Dd6Daw);
      const obj11 = {};
      const tmp2Result21 = PlatformUtils;
      const merged8 = Object.assign(obj10);
      if (isAndroidResult3) {
        obj11.headerText = null;
        obj11.subtitle = stringResult4;
      } else {
        obj11.headerText = undefined;
        obj11.subtitle = stringResult4;
      }
      isAndroidResult3 = PlatformUtils.isAndroid();
    } else {
      if (tmp2Result22.isShareableQuest(result.config)) {
        const userStatus = result.userStatus;
        let enrolledAt;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        const _Date = Date;
        const date = new Date();
        const tmp26 = result.config.expiresAt < date.toISOString();
        const tmp21 = null != enrolledAt;
        const tmp2Result23 = shared;
        const intl3 = util.intl;
        const obj12 = { questName: result.config.messages.questName };
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const tmp29 = shared.isThemeDark(ThemeStore.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != QuestStore.questEnrollmentBlockedUntil;
        const date1 = new Date();
        if (result.config.expiresAt < date1.toISOString()) {
          const intl4 = util.intl;
          const obj14 = { questName: result.config.messages.questName };
          let formatToPlainStringResult1 = intl4.formatToPlainString(util.t["ge+AJp"], obj14);
        } else {
          const questTaskDetails = QuestTaskUtils.getQuestTaskDetails(result);
          const tmp2Result24 = QuestTaskUtils;
          const thirdPartyTaskDetails = QuestTaskUtils.getThirdPartyTaskDetails(result);
          const tmp2Result25 = QuestTaskUtils;
          const obj15 = {
            quest: result,
            taskDetails: questTaskDetails,
            location: constants.EMBED_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_EMBED_MOBILE,
            thirdPartyTaskDetails,
            withoutMarkdown: true,
            currentUser,
          };
          formatToPlainStringResult1 = QuestCopyHooks.getQuestsInstructionsToWinReward(obj15);
          const tmp2Result26 = QuestCopyHooks;
        }
        const formatToPlainStringResult = intl3.formatToPlainString(util.t.EAYZAr, obj12);
        const colors2 = acceptLabelGreenColor.colors;
        const obj16 = {};
        const merged9 = Object.assign(acceptLabelGreenColor.baseColors);
        obj16.headerColor = colors2.headerColor;
        obj16.titleText = formatToPlainStringResult;
        ({
          titleColor: obj13.titleColor,
          bodyTextColor: obj13.subtitleColor,
          bodyTextColor: obj13.bodyTextColor,
        } = colors2);
        obj16.thumbnailUrl = AssetUtils.getQuestAsset(result, AssetUtils.QuestAssetType.GAME_TILE, tmp29).url;
        obj16.embedCanBeTapped = true;
        obj16.canBeAccepted = true;
        obj16.type = InviteTypes.GUILD;
        const tmp2Result27 = AssetUtils;
        const obj17 = {};
        const tmp2Result28 = PlatformUtils;
        const merged10 = Object.assign(obj16);
        if (isAndroidResult4) {
          obj17.headerText = null;
          obj17.subtitle = formatToPlainStringResult1;
          let tmp44 = obj17;
        } else {
          obj17.headerText = undefined;
          obj17.subtitle = formatToPlainStringResult1;
          tmp44 = obj17;
        }
        const obj19 = {};
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
            obj19.acceptLabelText = stringResult5;
            obj19.acceptLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
            obj19.acceptLabelColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
            obj19.thumbnailCornerRadius = 8;
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
        const tmp2Result29 = AnalyticsActions;
        const intl2 = util.intl;
        const stringResult7 = intl2.string(util.t.NXrP3N);
        const colors = acceptLabelGreenColor.colors;
        const obj20 = {};
        const merged12 = Object.assign(acceptLabelGreenColor.baseColors);
        obj20.headerColor = colors.headerColor;
        obj20.titleText = intl.string(util.t.Dd6Daw);
        ({
          titleColor: obj4.titleColor,
          bodyTextColor: obj4.subtitleColor,
          bodyTextColor: obj4.bodyTextColor,
        } = colors);
        obj20.thumbnailUrl = Image.resolveAssetSource(_modDef13355).uri;
        obj20.embedCanBeTapped = true;
        obj20.canBeAccepted = true;
        obj20.type = InviteTypes.GUILD;
        const stringResult6 = intl.string(util.t.Dd6Daw);
        const obj21 = {};
        const tmp2Result30 = PlatformUtils;
        const merged13 = Object.assign(obj20);
        if (isAndroidResult5) {
          obj21.headerText = null;
          obj21.subtitle = stringResult7;
          let tmp19 = obj21;
        } else {
          obj21.headerText = undefined;
          obj21.subtitle = stringResult7;
          tmp19 = obj21;
        }
        return tmp19;
      }
      tmp2Result22 = utils_QuestUtils;
    }
    const tmp2Result16 = QuestDataUtils;
  }
  obj = MetaQuestUtils;
};
