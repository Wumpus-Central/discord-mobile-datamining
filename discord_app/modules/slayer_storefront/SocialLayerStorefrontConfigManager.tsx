// discord_app/modules/slayer_storefront/SocialLayerStorefrontConfigManager.tsx
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
class SocialLayerStorefrontConfigManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: null };
    onPostConnectionOpen = applyArgumentsResult.onPostConnectionOpen;
    obj.POST_CONNECTION_OPEN = onPostConnectionOpen.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
SocialLayerStorefrontConfigManager.prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
};
const socialLayerStorefrontConfigManager = new SocialLayerStorefrontConfigManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontConfigManager.tsx");

export default socialLayerStorefrontConfigManager;
