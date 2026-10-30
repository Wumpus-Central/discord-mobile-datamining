// discord_app/modules/conjure/projects/native/ConjureProjectList.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import ConjureActionCreators from "../ConjureActionCreators.tsx";
import ConjureActivity from "../ConjureActivity.tsx";
import conjureStandaloneScenes from "../../builder/native/conjureStandaloneScenes.tsx";
import ConjureProjectIconDefault from "ConjureProjectIcon.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import ConjureHeaderIconButtonDefault from "../../shared/native/ConjureHeaderIconButton.tsx";
import ConjureCreateSheet from "../../create/native/ConjureCreateSheet.tsx";
import MentionsBadgeDefault from "../../../guild_sidebar/native/MentionsBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import ConjureProjectStore from "../ConjureProjectStore.tsx";

const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  const onMore = project.onMore;
  const tmp = closure_11(0);
  const conjureProjectBadge = project(10857).useConjureProjectBadge(project.id);
  const obj = project(10857);
  const items = [ConjureProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(
    items,
    () => ConjureProjectStore.isProjectDeleting(project.id),
    items1,
  );
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1114).intl;
    const obj3 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj3.time = tmp2(6854).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3865.AXydi3, obj3);
    const tmp2Result = tmp2(6854);
  }
  const obj4 = {
    label: project.name,
    subLabel: null,
    accessibilityHint: null,
    disabled: null,
    icon: null,
    trailing: null,
    onPress: null,
    onLongPress: null,
  };
  if (stateFromStores) {
    const intl2 = tmp2(1114).intl;
    formatToPlainStringResult = intl2.string(_modDef3865.Yh5pAc);
  }
  obj4.subLabel = formatToPlainStringResult;
  let stringResult;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(_modDef3865.hfIuc7);
  }
  obj4.accessibilityHint = stringResult;
  obj4.disabled = stateFromStores;
  obj4.icon = closure_9(ConjureProjectIconDefault, { project, size: "list" });
  if (stateFromStores) {
    let tmp13Result = closure_9(closure_4, {});
  } else {
    const obj5 = { style: tmp.projectRowTrailing, children: null };
    let tmp15Result3 = null;
    if (tmp6) {
      const obj6 = { mentionsCount: conjureProjectBadge };
      tmp15Result3 = closure_9(MentionsBadgeDefault, obj6);
    }
    const items2 = [tmp15Result3];
    const obj7 = { IconComponent: tmp2(9736).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl4 = tmp2(1114).intl;
    obj7.accessibilityLabel = intl4.string(tmp2(1114).t["UKOtz+"]);
    items2[1] = closure_9(ConjureHeaderIconButtonDefault, obj7);
    obj5.children = items2;
    tmp13Result = closure_10(closure_6, obj5);
    const tmp19Result = ConjureHeaderIconButtonDefault;
  }
  obj4.trailing = tmp13Result;
  obj4.onPress = project.onPress;
  obj4.onLongPress = onMore;
  const children = [closure_9(project(6969).TableRow, obj4)];
  let tmp15Result4 = null;
  if (null != conjureProjectBadge) {
    tmp15Result4 = null;
    if (!stateFromStores) {
      const obj8 = {
        style: tmp.unreadPill,
        pointerEvents: "none",
        accessibilityElementsHidden: true,
        importantForAccessibility: "no",
      };
      tmp15Result4 = closure_9(closure_6, obj8);
    }
  }
  children[1] = tmp15Result4;
  return closure_10(closure_6, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    centered: null,
    listContent: null,
    section: null,
    projectRowTrailing: null,
    unreadPill: null,
    sectionHeading: null,
    listError: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  const obj4 = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.projectRowTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const size = {
    position: "absolute",
    left: 0,
    top: "50%",
    width: nativeDefault.space.PX_4,
    height: nativeDefault.space.PX_8,
    marginTop: -nativeDefault.space.PX_4,
    borderTopRightRadius: nativeDefault.radii.xs,
    borderBottomRightRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  };
  obj.unreadPill = size;
  const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj7 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default function ConjureProjectList(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let stateFromStoresArray;
  closure_8 = undefined;
  const bottom = navigation(stateFromStoresArray[7])().bottom;
  const tmp3 = closure_11(0);
  navigation = guildId(stateFromStoresArray[8]).useNavigation();
  let obj = guildId(stateFromStoresArray[8]);
  const items = [closure_8];
  stateFromStoresArray = guildId(stateFromStoresArray[9]).useStateFromStoresArray(
    items,
    () => closure_8.getOwnedProjects(),
    [],
  );
  let obj2 = guildId(stateFromStoresArray[9]);
  const items1 = [closure_8];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(stateFromStoresArray[9]).useStateFromStoresArray(
    items1,
    () => ConjureProjectStore.getSharedProjects(guildId),
    items2,
  );
  let obj3 = guildId(stateFromStoresArray[9]);
  const items3 = [closure_8];
  const stateFromStores = guildId(stateFromStoresArray[9]).useStateFromStores(
    items3,
    () => closure_8.getProjectsFetchState(),
    [],
  );
  const items4 = [stateFromStoresArray, guildId];
  const memo = stateFromStoresArray1.useMemo(() => {
    const found = stateFromStoresArray.filter((item) =>
      guildId(stateFromStoresArray[10]).isConjureProjectInGuild(item, closure_1_0),
    );
    return found.sort(ConjureActivity.compareConjureProjectsByUpdatedAt);
  }, items4);
  const items5 = [stateFromStoresArray1];
  const memo1 = stateFromStoresArray1.useMemo(() => {
    const substr = stateFromStoresArray1.slice();
    return substr.sort(ConjureActivity.compareConjureProjectsByUpdatedAt);
  }, items5);
  const items6 = [navigation];
  const callback = stateFromStoresArray1.useCallback(
    (projectId) => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, { projectId }),
    items6,
  );
  const items7 = [guildId, callback];
  const memo2 = stateFromStoresArray1.useMemo(() => conjureStandaloneScenes.projectOpener(guildId, callback), items7);
  const items8 = [guildId, memo2];
  const callback1 = stateFromStoresArray1.useCallback(() => {
    const obj2 = {
      key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
      content: React7(ConjureCreateSheetDefault, { guildId, onCreated: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = stateFromStoresArray1.useCallback((project) => {
    const obj2 = {
      key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
      content: React7(ConjureRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, callback, callback2];
  closure_8 = stateFromStoresArray1.useCallback((project) => {
    guildId = project;
    let obj2 = {
      project,
      guildId,
      muted: null,
      removeTarget: null,
      openChat: null,
      onRemix: null,
      onOpenSettings: null,
    };
    let obj = guildId(stateFromStoresArray[16]);
    obj2.muted = guildId(stateFromStoresArray[17]).isConjureProjectMuted(callback2.settings, project.id);
    let obj3 = guildId(stateFromStoresArray[17]);
    obj2.removeTarget = guildId(stateFromStoresArray[18]).readConjureRemoveTarget(project);
    obj2.openChat = function openChat() {
      return callback(project.id);
    };
    obj2.onRemix = function onRemix() {
      return callback2(closure_0);
    };
    obj2.onOpenSettings = function onOpenSettings() {
      const obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
      const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
      let guild_id = project.guild_id;
      const obj = ActionSheetActionCreators;
      if (guild_id == null) {
        guild_id = guildId;
      }
      obj3.guildId = guild_id;
      obj2.content = React7(ConjureSettingsSheetDefault, obj3);
      return obj.showActionSheet(obj2);
    };
    const result = obj.conjureProjectActions(obj2);
    const obj4 = guildId(stateFromStoresArray[18]);
    const obj5 = guildId(stateFromStoresArray[20]);
    const result1 = obj5.showSimpleActionSheet({
      key: "ConjureProjectActions",
      header: { title: project.name },
      hasIcons: true,
      options: result.map((label) => ({
        label: label.label,
        IconComponent: label.IconComponent,
        isDestructive: label.destructive,
        onPress: label.action,
      })),
    });
  }, items10);
  const items11 = [navigation, callback1];
  const effect = stateFromStoresArray1.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        ({ tintColor, pressColor, pressOpacity } = arg0);
        const obj = {
          tintColor,
          pressColor,
          pressOpacity,
          onPress,
          displayMode: "minimal",
          backImage(color) {
            return closure_1_9(closure_1_0(closure_1_2[22]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: null,
        };
        const intl = guildId(stateFromStoresArray[23]).intl;
        obj.accessibilityLabel = intl.string(guildId(stateFromStoresArray[23]).t.CumH4u);
        return closure_2_9(guildId(stateFromStoresArray[21]).HeaderBackButton, obj);
      },
    });
  }, items11);
  if (tmp14) {
    let obj5 = { style: tmp3.content, children: null };
    const obj6 = {
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      keyboardShouldPersistTaps: "handled",
      children: null,
    };
    const items12 = [tmp3.listContent];
    const obj7 = { paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom };
    items12[1] = obj7;
    obj6.contentContainerStyle = items12;
    const obj8 = { bottom };
    obj6.scrollIndicatorInsets = obj8;
    const items13 = [closure_9(tmp(tmp2[28]), {}), , ,];
    let tmp23Result = null;
    if (memo.length > 0) {
      const obj9 = { style: tmp3.section, children: null };
      const obj10 = { style: tmp3.sectionHeading, children: null };
      const obj11 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[23]).intl;
      obj11.children = intl3.string(tmp(tmp2[25]).dWgSAa);
      const items14 = [closure_9(tmp4(tmp2[24]).Text, obj11)];
      const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[23]).intl;
      obj12.children = intl4.string(tmp(tmp2[25]).JQpNkh);
      items14[1] = closure_9(tmp4(tmp2[24]).Text, obj12);
      obj10.children = items14;
      const items15 = [closure_10(tmp22, obj10)];
      const obj13 = {
        hasIcons: true,
        children: memo.map((project) =>
          closure_1_9(
            ProjectRow,
            {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_8(closure_0);
              },
            },
            project.id,
          ),
        ),
      };
      items15[1] = closure_9(tmp4(tmp2[29]).TableRowGroup, obj13);
      obj9.children = items15;
      tmp23Result = closure_10(tmp22, obj9);
    }
    items13[1] = tmp23Result;
    let tmp23Result2 = null;
    if (memo1.length > 0) {
      const obj14 = { style: tmp3.section, children: null };
      const obj15 = { style: tmp3.sectionHeading, children: null };
      const obj16 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl5 = tmp4(tmp2[23]).intl;
      obj16.children = intl5.string(tmp(tmp2[25])["wFi8+o"]);
      const items16 = [closure_9(tmp4(tmp2[24]).Text, obj16)];
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp4(tmp2[23]).intl;
      obj17.children = intl6.string(tmp(tmp2[25]).dQ3U1J);
      items16[1] = closure_9(tmp4(tmp2[24]).Text, obj17);
      obj15.children = items16;
      const items17 = [closure_10(tmp22, obj15)];
      const obj18 = {
        hasIcons: true,
        children: memo1.map((project) =>
          closure_1_9(
            ProjectRow,
            {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_8(closure_0);
              },
            },
            project.id,
          ),
        ),
      };
      items17[1] = closure_9(tmp4(tmp2[29]).TableRowGroup, obj18);
      obj14.children = items17;
      tmp23Result2 = closure_10(tmp22, obj14);
    }
    items13[2] = tmp23Result2;
    items13[3] = null;
    obj6.children = items13;
    obj5.children = closure_10(memo2, obj6);
    return closure_9(callback1, obj5);
  } else {
    const obj19 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj20 = { style: tmp3.listError, children: null };
          const obj21 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[23]).intl;
          obj21.children = intl.string(tmp(tmp2[25]).DJAPMO);
          const items18 = [closure_9(tmp4(tmp2[24]).Text, obj21)];
          const obj22 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[23]).intl;
          obj22.text = intl2.string(tmp(tmp2[25])["WFJ/vb"]);
          obj22.onPress = function onPress() {
            return ConjureActionCreators.listProjects(guildId);
          };
          items18[1] = closure_9(tmp4(tmp2[26]).Button, obj22);
          obj20.children = items18;
          let tmp15Result2 = closure_10(tmp16, obj20);
        } else {
          const obj23 = { style: tmp3.listError, children: null };
          const obj24 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl7 = tmp4(tmp2[23]).intl;
          obj24.children = intl7.string(tmp(tmp2[25])["9/5sLV"]);
          const items19 = [closure_9(tmp4(tmp2[24]).Text, obj24)];
          const obj25 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl8 = tmp4(tmp2[23]).intl;
          obj25.text = intl8.string(tmp4(tmp2[23]).t.CumH4u);
          obj25.onPress = callback1;
          items19[1] = closure_9(tmp4(tmp2[26]).Button, obj25);
          obj23.children = items19;
          tmp15Result2 = closure_10(tmp16, obj23);
        }
      }
      obj19.children = tmp15Result2;
      closure_9(tmp16, obj19);
    }
    tmp15Result2 = closure_9(callback, {});
  }
  let obj4 = guildId(stateFromStoresArray[9]);
  tmp14 = memo.length > 0 || memo1.length > 0;
}
