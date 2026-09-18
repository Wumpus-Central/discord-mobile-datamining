// discord_app/modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import GuildProfileActionCreators from "../../guild_profile/GuildProfileActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

require = fn;
const View = fn(17).View;
let GuildProfileFetchStatus = fn(9303).GuildProfileFetchStatus;
const BADGES = fn(8163).BADGES;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4722);
let obj2 = {
  container: { flex: 1 },
  containerContent: { paddingTop: 16, paddingHorizontal: PX_16 },
  warning: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    alignItems: "flex-start",
    marginTop: nativeDefault.space.PX_8,
    padding: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  warningText: { flex: 1 },
};
let closure_13 = createStyles.createStyles(obj2);
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
  const result = guildId(stateFromStores[9]).canUseMobileServerTagSettings(guildId);
  const rounded = Math.floor((fetchStatus(stateFromStores[10])().width - 2 * PX_16 - 4 * PX_8) / 5);
  let obj = guildId(stateFromStores[9]);
  let guildProfile = guildId(stateFromStores[11]).useGuildProfile(guildId);
  fetchStatus = guildProfile.fetchStatus;
  let obj2 = guildId(stateFromStores[11]);
  const items = [callback2];
  stateFromStores = guildId(stateFromStores[12]).useStateFromStores(items, () => callback2.getGuildProfile());
  const obj3 = guildId(stateFromStores[12]);
  const tmp8 = callback2;
  const items1 = [callback2];
  const stateFromStores1 = guildId(stateFromStores[12]).useStateFromStores(
    items1,
    () => callback2.getProps().originalProfile,
  );
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
  const obj4 = guildId(stateFromStores[12]);
  const items3 = [tmp8];
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
    GuildSettingsActionCreatorsDefault.updateGuildProfile(guildId, { tag });
  }, items5);
  const items7 = [guildId];
  const callback1 = badge.useCallback((badge) => {
    GuildSettingsActionCreatorsDefault.updateGuildProfile(guildId, { badge });
  }, items6);
  callback2 = badge.useCallback((badgeColorPrimary, badgeColorSecondary) => {
    GuildSettingsActionCreatorsDefault.updateGuildProfile(guildId, { badgeColorPrimary, badgeColorSecondary });
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
      const obj5 = {
        onRetry() {
          return GuildProfileActionCreators.getGuildProfile(guildId, true);
        },
      };
      return closure_9(tmp5(tmp3[19]), obj5);
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
      const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
      const items9 = [tmp.containerContent, guildId.contentContainerStyle];
      obj6.contentContainerStyle = items9;
      const obj7 = { spacing: tmp5(tmp3[7]).space.PX_24, children: null };
      const obj8 = { label: null, value: null, onChange: null, placeholder: "WUMP", maxLength: 4, errorMessage: null };
      const intl = tmp2(tmp3[23]).intl;
      obj8.label = intl.string(tmp2(tmp3[23]).t.sOxim5);
      obj8.value = str;
      obj8.onChange = callback;
      obj8.errorMessage = tmp16;
      const items10 = [closure_9(tmp2(tmp3[22]).TextInput, obj8)];
      if (tmp28Result) {
        const obj9 = { accessible: true, accessibilityLabel: null, style: null, children: null };
        const intl2 = tmp2(tmp3[23]).intl;
        obj9.accessibilityLabel = intl2.string(tmp2(tmp3[23]).t["4tVt6P"]);
        obj9.style = tmp.warning;
        const obj10 = { size: "sm", color: tmp5(tmp3[7]).colors.ICON_SUBTLE };
        const items11 = [closure_9(tmp2(tmp3[24]).CircleInformationIcon, obj10)];
        const obj11 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.warningText, children: null };
        const intl3 = tmp2(tmp3[23]).intl;
        obj11.children = intl3.string(tmp2(tmp3[23]).t["4tVt6P"]);
        items11[1] = closure_9(tmp2(tmp3[25]).Text, obj11);
        obj9.children = items11;
        tmp28Result = closure_10(tmp29, obj9);
      }
      const obj12 = { children: null };
      items10[1] = tmp28Result;
      obj12.children = items10;
      const items12 = [closure_10(stateFromStores2, obj12), ,];
      const obj13 = { guildId, selectedBadge: badge, onSelectBadge: callback1, cellSize: rounded };
      items12[1] = closure_9(tmp5(tmp3[26]), obj13);
      const obj15 = {
        badge,
        primaryColor: null,
        secondaryColor: null,
        onSelectColor: null,
        onPressEyedropper: null,
        cellSize: null,
      };
      ({ badgeColorPrimary: obj14.primaryColor, badgeColorSecondary: obj14.secondaryColor } = stateFromStores);
      obj15.onSelectColor = callback2;
      obj15.onPressEyedropper = tmp23;
      obj15.cellSize = rounded;
      items12[2] = closure_9(tmp5(tmp3[27]), obj15);
      obj7.children = items12;
      obj6.children = closure_10(tmp2(tmp3[21]).Stack, obj7);
      return closure_9(tmp2(tmp3[20]).Form, obj6);
    }
  } else {
    return null;
  }
  const tmp15 = str(badge.useState(stateFromStores2), 2);
}
