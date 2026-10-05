// discord_app/modules/quests/native/QuestEmbed.native.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import intl14 from "../../../intl/index.native.tsx";
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
import AssetRegistryDefault from "../../../../_runtime/13063_AssetRegistry.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import QuestStore from "../QuestStore.tsx";
import QuestConstants from "../QuestConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
({ QuestsExperimentLocations: metroRequire, QuestEmbedFallbackReason: metroImportDefault } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
const InviteTypes = Constants2.InviteTypes;
let result = size.fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  let bodyText;
  let currentUser;
  let intl11;
  let theme;
  let themeColors;
  let thumbnailUrl;
  let titleText;
  let tmp21;
  let uri;
  let uri2;
  let uri3;
  let uri4;
  let url;
  questId = questId.questId;
  ({ theme, currentUser } = questId);
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const obj = MetaQuestUtils;
  if (obj.isMetaQuest()) {
    let tmp80;
    const intl9 = intl14.intl;
    const stringResult = intl9.string(intl14.t["6LxbQM"]);
    const intl10 = intl14.intl;
    const stringResult1 = intl10.string(intl14.t.CXEb9p);
    const colors6 = tmp3.colors;
    const obj2 = {
      headerColor: colors6.headerColor,
      titleText: stringResult,
      thumbnailUrl: uri3,
      embedCanBeTapped: true,
      canBeAccepted: true,
      type: InviteTypes.GUILD,
    };
    uri3 = Image.resolveAssetSource(AssetRegistryDefault).uri;
    const merged = Object.assign(tmp3.baseColors);
    ({
      titleColor: obj25.titleColor,
      bodyTextColor: obj25.subtitleColor,
      bodyTextColor: obj25.bodyTextColor,
    } = colors6);
    const obj3 = {};
    const tmp4Result = PlatformUtils;
    const isAndroidResult = tmp4Result.isAndroid();
    const merged1 = Object.assign(obj2);
    if (isAndroidResult) {
      obj3.headerText = null;
      obj3.subtitle = stringResult1;
      tmp80 = obj3;
    } else {
      obj3.headerText = undefined;
      obj3.subtitle = stringResult1;
      tmp80 = obj3;
    }
    const obj5 = {
      acceptLabelText: intl11.string(intl14.t.hvVgAZ),
      acceptLabelBackgroundColor: tmp3.colors.acceptBlurpleLabelBackgroundColor,
      acceptLabelColor: tmp3.colors.acceptLabelGreenColor,
    };
    const merged2 = Object.assign(tmp80);
    intl11 = intl14.intl;
    tmp21 = obj5;
  } else {
    const tmp4Result16 = QuestDataUtils;
    const result = tmp4Result16.findQuestOrReplacement(questId, QuestStore.quests, QuestStore.excludedQuests);
    const excludedQuests = QuestStore.excludedQuests;
    const value = excludedQuests.get(questId);
    if (null == result) {
      if (QuestStore.isFetchingCurrentQuests) {
        let tmp69;
        const obj6 = { themeColors: tmp3 };
        ({ bodyText, themeColors } = obj6);
        const colors5 = themeColors.colors;
        const obj7 = {
          headerColor: colors5.headerColor,
          titleText,
          thumbnailUrl,
          embedCanBeTapped: true,
          canBeAccepted: true,
          type: InviteTypes.GUILD,
        };
        ({ titleText, thumbnailUrl } = obj6);
        const merged3 = Object.assign(themeColors.baseColors);
        ({
          titleColor: obj22.titleColor,
          bodyTextColor: obj22.subtitleColor,
          bodyTextColor: obj22.bodyTextColor,
        } = colors5);
        const obj8 = {};
        const tmp4Result17 = PlatformUtils;
        const isAndroidResult1 = tmp4Result17.isAndroid();
        const merged4 = Object.assign(obj7);
        if (isAndroidResult1) {
          obj8.headerText = null;
          obj8.subtitle = bodyText;
          tmp69 = obj8;
        } else {
          obj8.headerText = undefined;
          obj8.subtitle = bodyText;
          tmp69 = obj8;
        }
        tmp21 = tmp69;
      }
    }
    if (null == result) {
      let tmp48;
      if (null != value) {
        let tmp61;
        const tmp4Result18 = AnalyticsActions;
        const result1 = tmp4Result18.trackQuestEmbedFallbackViewed(questId, metroImportDefault.EXCLUDED_QUEST);
        const intl7 = intl14.intl;
        const stringResult2 = intl7.string(intl14.t.Dd6Daw);
        const intl8 = intl14.intl;
        const stringResult3 = intl8.string(intl14.t.ii4mJo);
        const colors4 = tmp3.colors;
        const obj9 = {
          headerColor: colors4.headerColor,
          titleText: stringResult2,
          thumbnailUrl: uri2,
          embedCanBeTapped: true,
          canBeAccepted: true,
          type: InviteTypes.GUILD,
        };
        uri2 = Image.resolveAssetSource(AssetRegistryDefault).uri;
        const merged5 = Object.assign(tmp3.baseColors);
        ({
          titleColor: obj18.titleColor,
          bodyTextColor: obj18.subtitleColor,
          bodyTextColor: obj18.bodyTextColor,
        } = colors4);
        const obj10 = {};
        const tmp4Result19 = PlatformUtils;
        const isAndroidResult2 = tmp4Result19.isAndroid();
        const merged6 = Object.assign(obj9);
        if (isAndroidResult2) {
          obj10.headerText = null;
          obj10.subtitle = stringResult3;
          tmp61 = obj10;
        } else {
          obj10.headerText = undefined;
          obj10.subtitle = stringResult3;
          tmp61 = obj10;
        }
        tmp48 = tmp61;
      } else {
        const tmp4Result20 = AnalyticsActions;
        const result2 = tmp4Result20.trackQuestEmbedFallbackViewed(questId, metroImportDefault.UNKNOWN_QUEST);
        const intl12 = intl14.intl;
        const stringResult4 = intl12.string(intl14.t["rxf+nx"]);
        const intl13 = intl14.intl;
        const stringResult5 = intl13.string(intl14.t.Ow5AQI);
        const colors7 = tmp3.colors;
        const obj11 = {
          headerColor: colors7.headerColor,
          titleText: stringResult4,
          thumbnailUrl: uri4,
          embedCanBeTapped: true,
          canBeAccepted: true,
          type: InviteTypes.GUILD,
        };
        uri4 = Image.resolveAssetSource(AssetRegistryDefault).uri;
        const merged7 = Object.assign(tmp3.baseColors);
        ({
          titleColor: obj34.titleColor,
          bodyTextColor: obj34.subtitleColor,
          bodyTextColor: obj34.bodyTextColor,
        } = colors7);
        const obj12 = {};
        const tmp4Result21 = PlatformUtils;
        const isAndroidResult3 = tmp4Result21.isAndroid();
        const merged8 = Object.assign(obj11);
        if (isAndroidResult3) {
          obj12.headerText = null;
          obj12.subtitle = stringResult5;
          tmp48 = obj12;
        } else {
          obj12.headerText = undefined;
          obj12.subtitle = stringResult5;
          tmp48 = obj12;
        }
      }
      tmp21 = tmp48;
    } else {
      const tmp4Result22 = utils_QuestUtils;
      if (tmp4Result22.isShareableQuest(result.config)) {
        let formatToPlainStringResult1;
        let tmp42;
        let string2Result;
        const userStatus = result.userStatus;
        let enrolledAt;
        const colors2 = tmp3.colors;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        const _Date = Date;
        const self = this;
        const self2 = this;
        const expiresAt = result.config.expiresAt;
        const tmp23 = null != enrolledAt;
        const date = new Date();
        const tmp26 = expiresAt < date.toISOString();
        const theme2 = ThemeStore.getState().theme;
        const tmp4Result23 = shared;
        const tmp29 = tmp4Result23.isThemeDark(theme2) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != QuestStore.questEnrollmentBlockedUntil;
        const intl3 = intl14.intl;
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const expiresAt2 = result.config.expiresAt;
        const obj14 = { questName: result.config.messages.questName };
        const formatToPlainStringResult = intl3.formatToPlainString(intl14.t.EAYZAr, obj14);
        const date1 = new Date();
        if (expiresAt2 < date1.toISOString()) {
          const intl4 = intl14.intl;
          const obj15 = { questName: result.config.messages.questName };
          formatToPlainStringResult1 = intl4.formatToPlainString(intl14.t["ge+AJp"], obj15);
        } else {
          const tmp4Result24 = QuestTaskUtils;
          const questTaskDetails = tmp4Result24.getQuestTaskDetails(result);
          const tmp4Result25 = QuestTaskUtils;
          const thirdPartyTaskDetails = tmp4Result25.getThirdPartyTaskDetails(result);
          const obj16 = {
            quest: result,
            taskDetails: questTaskDetails,
            location: metroRequire.EMBED_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_EMBED_MOBILE,
            thirdPartyTaskDetails,
            withoutMarkdown: true,
            currentUser,
          };
          const getQuestsInstructionsToWinReward = QuestCopyHooks.getQuestsInstructionsToWinReward;
          QuestCopyHooks;
          formatToPlainStringResult1 = getQuestsInstructionsToWinReward(obj16);
        }
        const colors3 = tmp3.colors;
        const obj17 = {
          headerColor: colors3.headerColor,
          titleText: formatToPlainStringResult,
          thumbnailUrl: url,
          embedCanBeTapped: true,
          canBeAccepted: true,
          type: InviteTypes.GUILD,
        };
        const tmp4Result27 = AssetUtils;
        url = tmp4Result27.getQuestAsset(result, AssetUtils.QuestAssetType.GAME_TILE, tmp29).url;
        const merged9 = Object.assign(tmp3.baseColors);
        ({
          titleColor: obj13.titleColor,
          bodyTextColor: obj13.subtitleColor,
          bodyTextColor: obj13.bodyTextColor,
        } = colors3);
        const obj19 = {};
        const tmp4Result28 = PlatformUtils;
        const isAndroidResult4 = tmp4Result28.isAndroid();
        const merged10 = Object.assign(obj17);
        if (isAndroidResult4) {
          obj19.headerText = null;
          obj19.subtitle = formatToPlainStringResult1;
          tmp42 = obj19;
        } else {
          obj19.headerText = undefined;
          obj19.subtitle = formatToPlainStringResult1;
          tmp42 = obj19;
        }
        const obj20 = {};
        const merged11 = Object.assign(tmp42);
        if (!tmp23) {
          let stringResult6;
          if (!tmp26) {
            const intl5 = intl14.intl;
            const string = intl5.string;
            const t = intl14.t;
            if (tmp30) {
              stringResult6 = string(t["th2+0j"]);
            } else {
              stringResult6 = string(t.kUQLMJ);
            }
          }
          obj20.acceptLabelText = stringResult6;
          obj20.acceptLabelBackgroundColor = colors2.acceptBlurpleLabelBackgroundColor;
          obj20.acceptLabelColor = tmp3.colors.acceptLabelGreenColor;
          obj20.thumbnailCornerRadius = 8;
          tmp21 = obj20;
        }
        const intl6 = intl14.intl;
        const string2 = intl6.string;
        const t2 = intl14.t;
        if (tmp26) {
          string2Result = string2(t2.hvVgAZ);
        } else {
          string2Result = string2(t2["th2+0j"]);
        }
        stringResult6 = string2Result;
      } else {
        const tmp4Result29 = AnalyticsActions;
        const result3 = tmp4Result29.trackQuestEmbedFallbackViewed(questId, metroImportDefault.NOT_SHAREABLE_QUEST);
        const intl = intl14.intl;
        const stringResult7 = intl.string(intl14.t.Dd6Daw);
        const intl2 = intl14.intl;
        const stringResult8 = intl2.string(intl14.t.NXrP3N);
        const colors = tmp3.colors;
        const obj21 = {
          headerColor: colors.headerColor,
          titleText: stringResult7,
          thumbnailUrl: uri,
          embedCanBeTapped: true,
          canBeAccepted: true,
          type: InviteTypes.GUILD,
        };
        uri = Image.resolveAssetSource(AssetRegistryDefault).uri;
        const merged12 = Object.assign(tmp3.baseColors);
        ({
          titleColor: obj4.titleColor,
          bodyTextColor: obj4.subtitleColor,
          bodyTextColor: obj4.bodyTextColor,
        } = colors);
        const obj23 = {};
        const tmp4Result30 = PlatformUtils;
        const isAndroidResult5 = tmp4Result30.isAndroid();
        const merged13 = Object.assign(obj21);
        if (isAndroidResult5) {
          obj23.headerText = null;
          obj23.subtitle = stringResult8;
          tmp21 = obj23;
        } else {
          obj23.headerText = undefined;
          obj23.subtitle = stringResult8;
          tmp21 = obj23;
        }
      }
    }
  }
  return tmp21;
};
