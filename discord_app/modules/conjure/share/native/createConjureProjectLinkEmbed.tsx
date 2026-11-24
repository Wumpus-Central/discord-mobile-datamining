// discord_app/modules/conjure/share/native/createConjureProjectLinkEmbed.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4192 from "../../intl/ConjureUntranslated.messages.js";
import conjureDefaultAppIcon2 from "../../projects/conjureDefaultAppIcon.tsx";
import conjureProjectLinkCard2 from "conjureProjectLinkCard.tsx";
import conjureSharedProjectSurfaces from "../conjureSharedProjectSurfaces.tsx";
import getEmbedThemeColorsDefault from "../../../messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx";
import CodedLinksConstants from "../../../messages/native/renderer/row_data/embeds/coded_links/CodedLinksConstants.tsx";
import CodedLinksTypes from "../../../messages/native/renderer/row_data/embeds/coded_links/CodedLinksTypes.tsx";
import resolveMessageContentColorsDefault from "../../../messages/native/renderer/resolveMessageContentColors.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const processColor = _mod17.processColor;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let closure_5 = createStyles.createNativeStyleProperties({
  titleColor: nativeDefault.colors.TEXT_STRONG,
  bodyTextColor: nativeDefault.colors.TEXT_SUBTLE,
  headerColor: nativeDefault.colors.TEXT_MUTED,
  coverBackgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  tagBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  tagCoverBackgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  tagTextColor: nativeDefault.colors.TEXT_DEFAULT,
});
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
    const merged1 = Object.assign(closure_5(theme));
    obj2.extendedType = CodedLinkExtendedType.CONJURE_PROJECT_EMBED;
    obj2.type = null;
    obj2.headerText = null;
    obj2.applicationId = applicationId;
    obj2.embedCanBeTapped = !tmp4;
    if (tmp4) {
      const intl7 = util.intl;
      if ("expired" === conjureProjectLinkCard.type) {
        let mQma36 = _modDef4192.wahvH2;
      } else {
        mQma36 = _modDef4192.mQma36;
      }
      const stringResult = intl7.string(mQma36);
      const obj3 = {};
      const merged2 = Object.assign(obj2);
      obj3.displayType = CodedLinksTypes.ConjureProjectEmbedDisplayType.NO_ACCESS;
      obj3.title = null;
      obj3.description = null;
      obj3.creatorContent = null;
      obj3.creatorAvatarUrl = null;
      obj3.projectTypes = [];
      obj3.noticeText = stringResult;
      obj3.iconUrl = null;
      obj3.iconFallback = null;
      obj3.coverUrl = null;
      obj3.installLabel = null;
      obj3.remixLabel = null;
      obj3.coverAction = null;
      obj3.coverActionLabel = null;
      obj3.accessibilityLabel = stringResult;
      return obj3;
    } else {
      const application = conjureProjectLinkCard.application;
      let iconURL = application.getIconURL(80);
      if (iconURL == null) {
        iconURL = null;
      }
      let str3;
      if (application.description != null) {
        str3 = str2.trim();
      }
      if (str3 == null) {
        str3 = "";
      }
      let canRemix = tmp14;
      if ("ready" === conjureProjectLinkCard.type) {
        canRemix = conjureProjectLinkCard.canRemix;
      }
      let coverAction = null;
      if ("ready" === conjureProjectLinkCard.type) {
        coverAction = conjureProjectLinkCard.coverAction;
      }
      let creator = null;
      if ("ready" === conjureProjectLinkCard.type) {
        creator = conjureProjectLinkCard.creator;
      }
      const obj4 = {};
      const merged3 = Object.assign(obj2);
      const ConjureProjectEmbedDisplayType = CodedLinksTypes.ConjureProjectEmbedDisplayType;
      obj4.displayType =
        "ready" === conjureProjectLinkCard.type
          ? ConjureProjectEmbedDisplayType.READY
          : ConjureProjectEmbedDisplayType.INFO_ONLY;
      obj4.title = application.name;
      let tmp20 = null;
      if ("" !== str3) {
        tmp20 = str3;
      }
      obj4.description = tmp20;
      let formatToPartsResult = null;
      if (null != creator) {
        const intl = util.intl;
        const obj5 = { name: creator.name, nameOnClick: null };
        const obj6 = {};
        const merged4 = Object.assign(creator.onClick);
        let defaultUsernameColor = creator.onClick.linkColor;
        if (defaultUsernameColor == null) {
          defaultUsernameColor = resolveMessageContentColorsDefault(theme).defaultUsernameColor;
        }
        obj6.linkColor = defaultUsernameColor;
        obj5.nameOnClick = obj6;
        formatToPartsResult = intl.formatToParts(_modDef4192.dMdop9, obj5);
      }
      obj4.creatorContent = formatToPartsResult;
      let creatorAvatarUrl = null;
      if ("ready" === conjureProjectLinkCard.type) {
        creatorAvatarUrl = conjureProjectLinkCard.creatorAvatarUrl;
      }
      obj4.creatorAvatarUrl = creatorAvatarUrl;
      if ("ready" === conjureProjectLinkCard.type) {
        const projectTypes = conjureProjectLinkCard.projectTypes;
        let mapped = projectTypes.map((type) => {
          const obj = { type, label: conjureSharedProjectSurfaces.conjureSharedProjectTypeLabel(type) };
          return obj;
        });
      } else {
        mapped = [];
      }
      obj4.projectTypes = mapped;
      let stringResult1 = null;
      if ("ready" !== conjureProjectLinkCard.type) {
        const intl2 = util.intl;
        stringResult1 = intl2.string(_modDef4192["2DSRxV"]);
      }
      obj4.noticeText = stringResult1;
      obj4.iconUrl = iconURL;
      let tmp26 = null;
      if (null == iconURL) {
        ({ id, name } = application);
        const tmpResult = conjureDefaultAppIcon2;
        const conjureDefaultAppIcon = tmpResult.getConjureDefaultAppIcon(id, name);
        ({ color, character } = conjureDefaultAppIcon);
        const internal = nativeDefault.internal;
        const conjureDefaultAppIconColors = tmpResult.getConjureDefaultAppIconColors(
          color,
          internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOWER),
        );
        const obj7 = { character, backgroundColor: null, foregroundColor: null };
        let tmp30 = processColor(conjureDefaultAppIconColors.backgroundColor);
        if (tmp30 == null) {
          tmp30 = null;
        }
        obj7.backgroundColor = tmp30;
        let tmp29Result = processColor(conjureDefaultAppIconColors.foregroundColor);
        if (tmp29Result == null) {
          tmp29Result = null;
        }
        obj7.foregroundColor = tmp29Result;
        tmp26 = obj7;
      }
      obj4.iconFallback = tmp26;
      let coverImageURL = application.getCoverImageURL(1024);
      if (coverImageURL == null) {
        coverImageURL = null;
      }
      obj4.coverUrl = coverImageURL;
      let stringResult2 = null;
      if (canRemix) {
        const intl3 = util.intl;
        stringResult2 = intl3.string(_modDef4192.XWgAfc);
      }
      obj4.installLabel = stringResult2;
      obj4.remixLabel = null;
      obj4.coverAction = coverAction;
      if ("launch" === coverAction) {
        const intl5 = util.intl;
        let stringResult3 = intl5.string(_modDef4192["1cF7L4"]);
      } else {
        stringResult3 = null;
        if ("open" === coverAction) {
          const intl4 = util.intl;
          stringResult3 = intl4.string(util.t["3xjX0U"]);
        }
      }
      obj4.coverActionLabel = stringResult3;
      const intl6 = util.intl;
      const obj8 = { name: application.name };
      obj4.accessibilityLabel = intl6.formatToPlainString(_modDef4192.c8DqSD, obj8);
      return obj4;
    }
  }
}
