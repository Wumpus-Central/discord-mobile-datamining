// discord_app/modules/guild_settings/native/ServerTagPreviewActionSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { GuildProfileFetchStatus } from "handleUpdateStart";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { GuildSettingsServerTagPreview } from "GuildSettingsServerTagPreview.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { error: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_24, alignItems: "center", rowGap: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("handleUpdateStart").fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(9051);
  let guildProfile = obj.useGuildProfile(guildId);
  guildProfile = guildProfile.guildProfile;
  const items = [guildId];
  const effect = React.useEffect(() => {
    const guildProfile = guildId(outer1_2[7]).getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    obj = { guildId: null, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: false, variant: "plain", onAdopted: null };
    obj[0] = guildId;
    ({ tag: obj5[1], badge: obj5[2], badgeColorPrimary: obj5[3], badgeColorSecondary: obj5[4] } = guildProfile);
    obj[7] = function onAdopted(arg0) {
      return callback(table[9]).hideActionSheet();
    };
    let tmp7 = callback(GuildSettingsServerTagPreview, obj);
    let tmp8 = callback;
  } else if (guildProfile.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    obj = { style: null, children: null };
    obj[0] = tmp.error;
    const obj1 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(1236).intl;
    obj1[2] = intl.string(tmp2(1236).t.tmGHjc);
    const items1 = [callback(tmp2(4338).Text, obj1), ];
    const obj2 = { variant: "secondary", text: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj2[1] = intl2.string(tmp2(1236).t["5911Lb"]);
    obj2[2] = function onPress() {
      return guildId(outer1_2[7]).getGuildProfile(guildId, true);
    };
    items1[1] = callback(tmp2(4755).Button, obj2);
    obj[1] = items1;
    tmp7 = callback2(View, obj);
    tmp8 = callback;
  } else {
    tmp7 = callback(tmp2(5862).SceneLoadingIndicator, {});
    tmp8 = callback;
  }
  const obj3 = { children: null };
  const obj4 = { title: null };
  const intl3 = tmp2(1236).intl;
  obj4[0] = intl3.string(guildId(1236).t["2QmKZ2"]);
  const items2 = [tmp8(guildId(5436).BottomSheetTitleHeader, obj4), tmp7];
  obj3[0] = items2;
  return callback2(guildId(5804).ActionSheet, obj3);
};