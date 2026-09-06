// discord_app/modules/applications/message_embed/native/createActivityMessageEmbed.tsx
import createAppMessageEmbed from "createAppMessageEmbed.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CustomActivityLinkUtils = tmp(12940);
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
