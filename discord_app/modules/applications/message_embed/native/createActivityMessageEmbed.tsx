// === Module 13207: createActivityMessageEmbed ===

// Module 13207 (createActivityMessageEmbed)
import createAppMessageEmbed from "createAppMessageEmbed" /* 11940 */;
import CustomActivityLinkUtils from "CustomActivityLinkUtils" /* 12940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/message_embed/native/createActivityMessageEmbed.tsx");

export const createActivityMessageEmbed = function createActivityMessageEmbed(app) {
  app = app.app;
  ({ theme, embedUrl, message, params } = app);
  let obj = createAppMessageEmbed;
  const appMessageEmbed = obj.createAppMessageEmbed({ theme, embedUrl, message, app });
  if (null == appMessageEmbed) {
    return null;
  } else {
    const linkId = params.linkId;
    if (null == linkId) {
      return appMessageEmbed;
    } else {
      const orFetchCustomActivityLink = CustomActivityLinkUtils.getOrFetchCustomActivityLink(app.id, linkId);
      let tmp8 = null;
      if (null != orFetchCustomActivityLink) {
        obj = {};
        const merged = Object.assign(appMessageEmbed);
        obj.title = app.name;
        ({ title: obj2.header, description: obj2.info } = orFetchCustomActivityLink);
        obj.bannerRatio = "bot";
        let assetURL = orFetchCustomActivityLink.getAssetURL();
        if (assetURL == null) {
          assetURL = null;
        }
        obj.staticBannerSrc = assetURL;
        obj.tagline = null;
        tmp8 = obj;
      }
      return tmp8;
    }
  }
};