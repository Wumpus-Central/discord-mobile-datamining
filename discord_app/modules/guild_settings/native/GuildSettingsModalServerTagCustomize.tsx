// === Module 16901: PX_16 ===

// Module 16901 (PX_16)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildProfileFetchStatus } from "handleUpdateStart" /* 8891 */;
import closure_7 from "handleFormInit" /* 8912 */;
import { BADGES } from "items" /* 8207 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
const PX_16 = ThemesDefault.space.PX_16;
createCacheKey = { container: { flex: 1 }, containerContent: { paddingTop: 16, paddingHorizontal: PX_16 }, warning: null, warningText: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "flex-start", marginTop: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flex: 1 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx");

export default function GuildSettingsModalServerTagCustomize(guildId) {
  guildId = guildId.guildId;
  let fetchStatus;
  let stateFromStores;
  let str;
  let badge;
  let stateFromStores2;
  GuildProfileFetchStatus = undefined;
  let callback2;
  let tmp = callback2();
  let obj = guildId(stateFromStores[9]);
  const result = obj.canUseMobileServerTagSettings(guildId);
  const rounded = Math.floor((fetchStatus(stateFromStores[10])().width - 2 * PX_16 - 4 * PX_8) / 5);
  obj1 = guildId(stateFromStores[11]);
  let guildProfile = obj1.useGuildProfile(guildId);
  fetchStatus = guildProfile.fetchStatus;
  let obj2 = guildId(stateFromStores[12]);
  const items = [callback2];
  stateFromStores = obj2.useStateFromStores(items, () => callback2.getGuildProfile());
  let obj3 = guildId(stateFromStores[12]);
  const items1 = [callback2];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => callback2.getProps().originalProfile);
  str = undefined;
  if (stateFromStores != null) {
    str = stateFromStores.tag;
  }
  if (str == null) {
    str = "";
  }
  badge = undefined;
  if (stateFromStores != null) {
    badge = stateFromStores.badge;
  }
  if (badge == null) {
    badge = BADGES[0];
  }
  const items2 = [guildId, fetchStatus];
  const effect = badge.useEffect(() => {
    if (fetchStatus === _undefined.NOT_FETCHED) {
      const guildProfile = guildId(stateFromStores[13]).getGuildProfile(guildId, false);
      const obj = guildId(stateFromStores[13]);
    }
  }, items2);
  const items3 = [callback2];
  stateFromStores2 = guildId(stateFromStores[12]).useStateFromStores(items3, () => {
    const profileError = callback2.getProfileError();
    let tmp = null;
    if (null != profileError) {
      tmp = null;
      if (429 !== profileError.status) {
        let anyErrorMessage = profileError.getAnyErrorMessage();
        if (anyErrorMessage == null) {
          anyErrorMessage = null;
        }
        tmp = anyErrorMessage;
      }
    }
    return tmp;
  });
  const tmp2Result = guildId(stateFromStores[12]);
  const tmp8 = callback2;
  [tmp16, c6] = str(badge.useState(stateFromStores2), 2);
  const items4 = [stateFromStores2];
  const effect1 = badge.useEffect(() => {
    _undefined(stateFromStores2);
  }, items4);
  const items5 = [guildId];
  const items6 = [guildId];
  const callback = badge.useCallback((tag) => {
    _undefined(null);
    let obj = fetchStatus(stateFromStores[14]);
    obj = { tag };
    obj.updateGuildProfile(guildId, obj);
  }, items5);
  const items7 = [guildId];
  const callback1 = badge.useCallback((badge) => {
    let obj = fetchStatus(stateFromStores[14]);
    obj = { badge };
    obj.updateGuildProfile(guildId, obj);
  }, items6);
  callback2 = badge.useCallback((badgeColorPrimary, badgeColorSecondary) => {
    let obj = fetchStatus(stateFromStores[14]);
    obj = { badgeColorPrimary, badgeColorSecondary };
    obj.updateGuildProfile(guildId, obj);
  }, items7);
  const items8 = [badge, callback2, , , ];
  let badgeColorPrimary;
  if (stateFromStores != null) {
    badgeColorPrimary = stateFromStores.badgeColorPrimary;
  }
  items8[2] = badgeColorPrimary;
  let badgeColorSecondary;
  if (stateFromStores != null) {
    badgeColorSecondary = stateFromStores.badgeColorSecondary;
  }
  items8[3] = badgeColorSecondary;
  items8[4] = str;
  if (result) {
    if (fetchStatus !== GuildProfileFetchStatus.FETCHED) {
      return callback(tmp2(tmp3[18]).SceneLoadingIndicator, {});
    } else if (null == guildProfile.guildProfile) {
      obj = { onRetry: null };
      obj[0] = function onRetry() {
        return guildId(stateFromStores[13]).getGuildProfile(guildId, true);
      };
      return callback(tmp5(tmp3[19]), obj);
    } else if (null == stateFromStores) {
      return callback(tmp2(tmp3[18]).SceneLoadingIndicator, {});
    } else {
      let tag;
      if (stateFromStores1 != null) {
        tag = stateFromStores1.tag;
      }
      let tmp28Result = null != tag;
      if (tmp28Result) {
        tmp28Result = "" !== stateFromStores1.tag;
      }
      if (tmp28Result) {
        tmp28Result = str !== stateFromStores1.tag;
      }
      obj = { style: null, contentContainerStyle: null, children: null };
      obj[0] = tmp.container;
      const items9 = [tmp.containerContent, guildId.contentContainerStyle];
      obj[1] = items9;
      obj1 = { spacing: null, children: null };
      obj1[0] = tmp5(tmp3[7]).space.PX_24;
      obj2 = { label: null, value: null, onChange: null, placeholder: "WUMP", maxLength: 4, errorMessage: null };
      const intl = tmp2(tmp3[23]).intl;
      obj2[0] = intl.string(tmp2(tmp3[23]).t.sOxim5);
      obj2[1] = str;
      obj2[2] = callback;
      obj2[5] = tmp16;
      const items10 = [callback(tmp2(tmp3[22]).TextInput, obj2), ];
      if (tmp28Result) {
        obj3 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const intl2 = tmp2(tmp3[23]).intl;
        obj3[1] = intl2.string(tmp2(tmp3[23]).t["4tVt6P"]);
        obj3[2] = tmp.warning;
        const obj4 = { size: "sm", color: null };
        obj4[1] = tmp5(tmp3[7]).colors.ICON_SUBTLE;
        const items11 = [tmp27(tmp2(tmp3[24]).CircleInformationIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
        obj5[2] = tmp.warningText;
        const intl3 = tmp2(tmp3[23]).intl;
        obj5[3] = intl3.string(tmp2(tmp3[23]).t["4tVt6P"]);
        items11[1] = tmp27(tmp2(tmp3[25]).Text, obj5);
        obj3[3] = items11;
        tmp28Result = tmp28(tmp29, obj3);
      }
      const obj6 = { children: null };
      items10[1] = tmp28Result;
      obj6[0] = items10;
      const items12 = [closure_10(stateFromStores2, obj6), , ];
      const obj7 = { guildId: null, selectedBadge: null, onSelectBadge: null, cellSize: null };
      obj7[0] = guildId;
      obj7[1] = badge;
      obj7[2] = callback1;
      obj7[3] = rounded;
      items12[1] = callback(tmp5(tmp3[26]), obj7);
      const obj8 = { badge: null, primaryColor: null, secondaryColor: null, onSelectColor: null, onPressEyedropper: null, cellSize: null };
      obj8[0] = badge;
      ({ badgeColorPrimary: obj14[1], badgeColorSecondary: obj14[2] } = stateFromStores);
      obj8[3] = callback2;
      obj8[4] = tmp23;
      obj8[5] = rounded;
      items12[2] = callback(tmp5(tmp3[27]), obj8);
      obj1[1] = items12;
      obj[2] = closure_10(tmp2(tmp3[21]).Stack, obj1);
      return callback(tmp2(tmp3[20]).Form, obj);
    }
  } else {
    return null;
  }
  const tmp15 = str(badge.useState(stateFromStores2), 2);
};