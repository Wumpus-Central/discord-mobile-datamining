// === Module 15400: createConjureProjectLinkEmbed ===

// Module 15400 (createConjureProjectLinkEmbed)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8465 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10238 */;
import conjureProjectLinkCard2 from "conjureProjectLinkCard" /* 11715 */;
import CodedLinksTypes from "CodedLinksTypes" /* 13938 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let closure_4 = createStyles.createNativeStyleProperties({ titleColor: nativeDefault.colors.TEXT_STRONG, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, headerColor: nativeDefault.colors.TEXT_MUTED, acceptLabelBackgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT, acceptLabelColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, secondaryButtonBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, secondaryButtonTextColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, coverBackgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST });
const result = size.fileFinishedImporting("modules/conjure/share/native/createConjureProjectLinkEmbed.tsx");

export default function createConjureProjectLinkEmbed(applicationId, ticket, theme, memo2) {
  const conjureProjectLinkCard = conjureProjectLinkCard2.readConjureProjectLinkCard(applicationId, ticket, memo2);
  if (null == conjureProjectLinkCard) {
    return null;
  } else {
    let tmp4 = "no_access" === conjureProjectLinkCard.type;
    if (!tmp4) {
      tmp4 = "expired" === conjureProjectLinkCard.type;
    }
    const obj2 = {};
    const merged = Object.assign(getEmbedThemeColorsDefault(theme).baseColors);
    const merged1 = Object.assign(closure_4(theme));
    obj2.extendedType = CodedLinkExtendedType.CONJURE_PROJECT_EMBED;
    obj2.type = null;
    obj2.headerText = null;
    obj2.applicationId = applicationId;
    obj2.embedCanBeTapped = !tmp4;
    if (tmp4) {
      const intl8 = util.intl;
      if ("expired" === conjureProjectLinkCard.type) {
        let mQma36 = _modDef4026.wahvH2;
      } else {
        mQma36 = _modDef4026.mQma36;
      }
      const stringResult = intl8.string(mQma36);
      const obj3 = {};
      const merged2 = Object.assign(obj2);
      obj3.displayType = CodedLinksTypes.ConjureProjectEmbedDisplayType.NO_ACCESS;
      obj3.title = null;
      obj3.description = null;
      obj3.creatorText = null;
      obj3.noticeText = stringResult;
      obj3.iconUrl = null;
      obj3.coverUrl = null;
      obj3.installLabel = null;
      obj3.remixLabel = null;
      obj3.coverAction = null;
      obj3.coverActionLabel = null;
      obj3.accessibilityLabel = stringResult;
      return obj3;
    } else {
      const application = conjureProjectLinkCard.application;
      let str3;
      if (application.description != null) {
        str3 = str2.trim();
      }
      if (str3 == null) {
        str3 = "";
      }
      let canRemix = tmp13;
      if ("ready" === conjureProjectLinkCard.type) {
        canRemix = conjureProjectLinkCard.canRemix;
      }
      let coverAction = null;
      if ("ready" === conjureProjectLinkCard.type) {
        coverAction = conjureProjectLinkCard.coverAction;
      }
      const obj4 = {};
      const merged3 = Object.assign(obj2);
      const ConjureProjectEmbedDisplayType = CodedLinksTypes.ConjureProjectEmbedDisplayType;
      obj4.displayType = "ready" === conjureProjectLinkCard.type ? ConjureProjectEmbedDisplayType.READY : ConjureProjectEmbedDisplayType.INFO_ONLY;
      obj4.title = application.name;
      let tmp18 = null;
      if ("" !== str3) {
        tmp18 = str3;
      }
      obj4.description = tmp18;
      let formatToPlainStringResult = null;
      if ("ready" === conjureProjectLinkCard.type) {
        formatToPlainStringResult = null;
        if (null != conjureProjectLinkCard.creatorName) {
          const intl = util.intl;
          const obj5 = { name: conjureProjectLinkCard.creatorName };
          formatToPlainStringResult = intl.formatToPlainString(_modDef4026["6/x9LD"], obj5);
        }
      }
      obj4.creatorText = formatToPlainStringResult;
      let stringResult1 = null;
      if ("ready" !== conjureProjectLinkCard.type) {
        const intl2 = util.intl;
        stringResult1 = intl2.string(_modDef4026["2DSRxV"]);
      }
      obj4.noticeText = stringResult1;
      let iconURL = application.getIconURL(80);
      if (iconURL == null) {
        iconURL = null;
      }
      obj4.iconUrl = iconURL;
      let coverImageURL = application.getCoverImageURL(1024);
      if (coverImageURL == null) {
        coverImageURL = null;
      }
      obj4.coverUrl = coverImageURL;
      let stringResult2 = null;
      if (canRemix) {
        const intl3 = util.intl;
        stringResult2 = intl3.string(_modDef4026["UsUa/c"]);
      }
      obj4.installLabel = stringResult2;
      let stringResult3 = null;
      if (canRemix) {
        const intl4 = util.intl;
        stringResult3 = intl4.string(_modDef4026["6RGR3m"]);
      }
      obj4.remixLabel = stringResult3;
      obj4.coverAction = coverAction;
      if ("launch" === coverAction) {
        const intl6 = util.intl;
        let stringResult4 = intl6.string(_modDef4026["1cF7L4"]);
      } else {
        stringResult4 = null;
        if ("open" === coverAction) {
          const intl5 = util.intl;
          stringResult4 = intl5.string(util.t["3xjX0U"]);
        }
      }
      obj4.coverActionLabel = stringResult4;
      const intl7 = util.intl;
      const obj6 = { name: application.name };
      obj4.accessibilityLabel = intl7.formatToPlainString(_modDef4026.c8DqSD, obj6);
      return obj4;
    }
  }
};