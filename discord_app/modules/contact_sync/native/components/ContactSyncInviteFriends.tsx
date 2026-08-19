// discord_app/modules/contact_sync/native/components/ContactSyncInviteFriends.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUserDefault from "../../../../utils/UserUtils.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../../_runtime/11874_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
noopAll;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
const createCacheKey = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[4] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default function ContactSyncInviteFriends() {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_4];
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.art, source: registerAssetDefault };
  const items1 = [callback(preloadDefault, obj1), , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = require("../../../../intl/index.native.tsx").intl;
  obj2[4] = intl.string(require("../../../../intl/index.native.tsx").t.ZxBpLf);
  items1[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj2);
  const obj3 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj3[3] = intl2.string(require("../../../../intl/index.native.tsx").t["fXtCJ+"]);
  items1[2] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj3);
  obj[1] = items1;
  const items2 = [callback2(View, obj), ];
  const obj4 = { style: tmp.button, children: null };
  const obj5 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj5[2] = intl3.string(require("../../../../intl/index.native.tsx").t["6Qgrev"]);
  obj5[3] = function onPress() {
    const obj = { friend_add_type: "Invite", source_page: closure_1_6.CONTACT_SYNC_MODAL };
    obj.track(closure_1_5.FRIEND_ADD_VIEWED, obj);
    const intl = callback(dependencyMap[11]).intl;
    let str = "";
    if (null != callback) {
      str = nameFromUserDefault.getUserTag(tmp6);
      const tmpResult = nameFromUserDefault;
    }
    const formatToPlainStringResult = intl.formatToPlainString(callback(dependencyMap[11]).t["6E9a1J"], { url: "https://discord.com/", username: str });
    callback(dependencyMap[15]).showShareActionSheet({ message: formatToPlainStringResult }, closure_1_6.CONTACT_SYNC_MODAL);
    const tmp5Result = callback(dependencyMap[15]);
  };
  obj4[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx").Button, obj5);
  items2[1] = callback(View, obj4);
  obj[0] = items2;
  return callback2(closure_9, obj);
};