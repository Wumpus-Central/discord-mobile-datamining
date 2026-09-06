// discord_app/modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import GuildProfileActionCreators from "../../guild_profile/GuildProfileActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

require = fn;
const View = fn(17).View;
let GuildProfileFetchStatus = fn(9065).GuildProfileFetchStatus;
const BADGES = fn(7944).BADGES;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_16 = nativeDefault.space.PX_16;
fn(4560);
let createStyles = {
  container: { flex: 1 },
  containerContent: { paddingTop: 16, paddingHorizontal: PX_16 },
  warning: null,
  warningText: null,
};
createStyles = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "flex-start",
  marginTop: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
createStyles.warning = createStyles;
createStyles.warningText = { flex: 1 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx");

export default function GuildSettingsModalServerTagCustomize(guildId) {
  guildId = guildId.guildId;
  let fetchStatus;
  let stateFromStores;
  let badge;
  let stateFromStores2;
  GuildProfileFetchStatus = undefined;
  let callback2;
  let tmp = closure_13();
  let obj = guildId(stateFromStores[9]);
  const result = obj.canUseMobileServerTagSettings(guildId);
  const rounded = Math.floor((fetchStatus(stateFromStores[10])().width - 2 * PX_16 - 4 * PX_8) / 5);
  let obj1 = guildId(stateFromStores[11]);
  let guildProfile = obj1.useGuildProfile(guildId);
  fetchStatus = guildProfile.fetchStatus;
  let obj2 = guildId(stateFromStores[12]);
  const items = [callback2];
  stateFromStores = obj2.useStateFromStores(items, () => callback2.getGuildProfile());
  let obj3 = guildId(stateFromStores[12]);
  const items1 = [callback2];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => callback2.getProps().originalProfile);
  let str;
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
    if (fetchStatus === GuildProfileFetchStatus.NOT_FETCHED) {
      const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, false);
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
  [tmp16, c6] = str(badge.useState(stateFromStores2), 2);
  const items4 = [stateFromStores2];
  const effect1 = badge.useEffect(() => {
    _undefined(stateFromStores2);
  }, items4);
  const items5 = [guildId];
  const items6 = [guildId];
  const callback = badge.useCallback((tag) => {
    _undefined(null);
    const obj = { tag };
    obj.updateGuildProfile(guildId, obj);
  }, items5);
  const items7 = [guildId];
  const callback1 = badge.useCallback((badge) => {
    const obj = { badge };
    obj.updateGuildProfile(guildId, obj);
  }, items6);
  callback2 = badge.useCallback((badgeColorPrimary, badgeColorSecondary) => {
    const obj = { badgeColorPrimary, badgeColorSecondary };
    obj.updateGuildProfile(guildId, obj);
  }, items7);
  const items8 = [badge, callback2, , ,];
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
      return closure_9(tmp2(tmp3[18]).SceneLoadingIndicator, {});
    } else if (null == guildProfile.guildProfile) {
      obj = {
        onRetry() {
          return GuildProfileActionCreators.getGuildProfile(guildId, true);
        },
      };
      return closure_9(tmp5(tmp3[19]), obj);
    } else if (null == stateFromStores) {
      return closure_9(tmp2(tmp3[18]).SceneLoadingIndicator, {});
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
      obj = { style: tmp.container, contentContainerStyle: null, children: null };
      const items9 = [tmp.containerContent, guildId.contentContainerStyle];
      obj.contentContainerStyle = items9;
      obj1 = { spacing: tmp5(tmp3[7]).space.PX_24, children: null };
      obj2 = { label: null, value: null, onChange: null, placeholder: "WUMP", maxLength: 4, errorMessage: null };
      const intl = tmp2(tmp3[23]).intl;
      obj2.label = intl.string(tmp2(tmp3[23]).t.sOxim5);
      obj2.value = str;
      obj2.onChange = callback;
      obj2.errorMessage = tmp16;
      const items10 = [closure_9(tmp2(tmp3[22]).TextInput, obj2)];
      if (tmp28Result) {
        obj3 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const intl2 = tmp2(tmp3[23]).intl;
        obj3.accessibilityLabel = intl2.string(tmp2(tmp3[23]).t["4tVt6P"]);
        obj3.style = tmp.warning;
        const obj4 = { size: "sm", color: tmp5(tmp3[7]).colors.ICON_SUBTLE };
        const items11 = [tmp27(tmp2(tmp3[24]).CircleInformationIcon, obj4)];
        const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.warningText, children: null };
        const intl3 = tmp2(tmp3[23]).intl;
        obj5.children = intl3.string(tmp2(tmp3[23]).t["4tVt6P"]);
        items11[1] = tmp27(tmp2(tmp3[25]).Text, obj5);
        obj3.children = items11;
        tmp28Result = tmp28(tmp29, obj3);
      }
      const obj6 = { children: null };
      items10[1] = tmp28Result;
      obj6.children = items10;
      const items12 = [closure_10(stateFromStores2, obj6), ,];
      const obj7 = { guildId, selectedBadge: badge, onSelectBadge: callback1, cellSize: rounded };
      items12[1] = closure_9(tmp5(tmp3[26]), obj7);
      const obj8 = {
        badge,
        primaryColor: null,
        secondaryColor: null,
        onSelectColor: null,
        onPressEyedropper: null,
        cellSize: null,
      };
      ({ badgeColorPrimary: obj14.primaryColor, badgeColorSecondary: obj14.secondaryColor } = stateFromStores);
      obj8.onSelectColor = callback2;
      obj8.onPressEyedropper = tmp23;
      obj8.cellSize = rounded;
      items12[2] = closure_9(tmp5(tmp3[27]), obj8);
      obj1.children = items12;
      obj.children = closure_10(tmp2(tmp3[21]).Stack, obj1);
      return closure_9(tmp2(tmp3[20]).Form, obj);
    }
  } else {
    return null;
  }
  const tmp15 = str(badge.useState(stateFromStores2), 2);
}
