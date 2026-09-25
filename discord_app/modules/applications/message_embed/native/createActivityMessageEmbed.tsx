// === Module 12764: createActivityMessageEmbed ===

// Module 12764 (createActivityMessageEmbed)
import createAppMessageEmbed from "createAppMessageEmbed" /* 11406 */;
import CustomActivityLinkUtils from "CustomActivityLinkUtils" /* 12478 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/message_embed/native/createActivityMessageEmbed.tsx");

export const createActivityMessageEmbed = function createActivityMessageEmbed(app) {
  app = app.app;
  ({ theme, embedUrl, message, params } = app);
  const appMessageEmbed = createAppMessageEmbed.createAppMessageEmbed({ theme, embedUrl, message, app });
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
        const obj3 = {};
        const merged = Object.assign(appMessageEmbed);
        obj3.title = app.name;
        ({ title: obj2.header, description: obj2.info } = orFetchCustomActivityLink);
        obj3.bannerRatio = "bot";
        let assetURL = orFetchCustomActivityLink.getAssetURL();
        if (assetURL == null) {
          assetURL = null;
        }
        obj3.staticBannerSrc = assetURL;
        obj3.tagline = null;
        tmp8 = obj3;
      }
      return tmp8;
    }
  }
};