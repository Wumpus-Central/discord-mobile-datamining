// === Module 13202: ConjureProjectList ===

// Module 13202 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5382 */;
import Text_Text from "Text/Text" /* 5761 */;
import TableRowGroup from "TableRowGroup" /* 7201 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11026 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11054 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12282 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 12319 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12324 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 12435 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 13207 */;
import openConjureProjectsSheet from "openConjureProjectsSheet" /* 13224 */;
import ConjureNumberBadgeDefault from "ConjureNumberBadge" /* 13232 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  const onMore = project.onMore;
  const tmp = closure_11(0);
  const conjureProjectBadge = project(11056).useConjureProjectBadge(project.id);
  const obj = project(11056);
  items = [ConjureProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1113).intl;
    const obj3 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj3.time = tmp2(6995).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3995.AXydi3, obj3);
    const tmp2Result = tmp2(6995);
  }
  const obj4 = { label: project.name, subLabel: null, accessibilityHint: null, disabled: null, icon: null, trailing: null, onPress: null, onLongPress: null };
  if (stateFromStores) {
    const intl2 = tmp2(1113).intl;
    formatToPlainStringResult = intl2.string(_modDef3995.Yh5pAc);
  }
  obj4.subLabel = formatToPlainStringResult;
  let stringResult;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(_modDef3995.hfIuc7);
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
      const obj6 = { value: conjureProjectBadge };
      tmp15Result3 = closure_9(ConjureNumberBadgeDefault, obj6);
    }
    const items2 = [tmp15Result3, ];
    const obj7 = { IconComponent: tmp2(9906).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl4 = tmp2(1113).intl;
    obj7.accessibilityLabel = intl4.string(tmp2(1113).t["UKOtz+"]);
    items2[1] = closure_9(ConjureHeaderIconButtonDefault, obj7);
    obj5.children = items2;
    tmp13Result = closure_10(closure_6, obj5);
    const tmp19Result = ConjureHeaderIconButtonDefault;
  }
  obj4.trailing = tmp13Result;
  obj4.onPress = project.onPress;
  obj4.onLongPress = onMore;
  const children = [closure_9(project(7116).TableRow, obj4), ];
  let tmp15Result4 = null;
  if (null != conjureProjectBadge) {
    tmp15Result4 = null;
    if (!stateFromStores) {
      const obj8 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp15Result4 = closure_9(closure_6, obj8);
    }
  }
  children[1] = tmp15Result4;
  return closure_10(closure_6, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let closure_11 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, centered: null, listContent: null, section: null, projectRowTrailing: null, unreadPill: null, listError: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  const obj4 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.projectRowTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.unreadPill = size;
  const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectList.tsx");

export default function ConjureProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  let callback;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_11(0);
  importDefault = tmp3;
  navigation = guildId(navigation[8]).useNavigation();
  let obj = guildId(navigation[8]);
  ({ mine, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const arr = require("useConjureOtherOwnProjects")(guildId);
  items = [navigation];
  callback = callback.useCallback((projectId) => {
    let str = arg1;
    if (arg1 === undefined) {
      str = "project_list";
    }
    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, { projectId, entryPoint: str });
  }, items);
  const items1 = [guildId, callback];
  const memo = callback.useMemo(() => conjureStandaloneScenes.projectOpener(guildId, (arg0) => callback(arg0, "create")), items1);
  const items2 = [guildId, callback];
  const memo1 = callback.useMemo(() => conjureStandaloneScenes.projectOpener(guildId, (arg0) => callback(arg0, "remix")), items2);
  const items3 = [guildId, memo];
  const callback1 = callback.useCallback(() => {
    const obj2 = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: React6(ConjureCreateSheetDefault, { guildId, onCreated: memo }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items3);
  const items4 = [guildId, memo1];
  const callback2 = callback.useCallback((project) => {
    const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: React6(ConjureRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo1 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items4);
  const items5 = [guildId, callback, callback2];
  closure_8 = callback.useCallback((project) => {
    guildId = project;
    let obj2 = { project, guildId, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
    let obj = guildId(navigation[15]);
    obj2.muted = guildId(navigation[16]).isConjureProjectMuted(callback2.settings, project.id);
    let obj3 = guildId(navigation[16]);
    obj2.removeTarget = guildId(navigation[17]).readConjureRemoveTarget(project);
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
      obj2.content = React6(ConjureSettingsSheetDefault, obj3);
      return obj.showActionSheet(obj2);
    };
    const result = obj.conjureProjectActions(obj2);
    const obj4 = guildId(navigation[17]);
    const obj5 = guildId(navigation[19]);
    const result1 = obj5.showSimpleActionSheet({ key: "ConjureProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) });
  }, items5);
  const items6 = [navigation, callback1];
  const effect = callback.useEffect(() => {
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
            return closure_1_9(closure_1_0(closure_1_2[21]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: null
        };
        const intl = guildId(navigation[22]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[22]).t.CumH4u);
        return closure_2_9(guildId(navigation[20]).HeaderBackButton, obj);
      }
    });
  }, items6);
  if (tmp13) {
    let obj2 = { style: tmp3.content, children: null };
    let obj3 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items7 = [tmp3.listContent, ];
    let obj4 = { paddingBottom: tmp(tmp2[6]).space.PX_8 + bottom };
    items7[1] = obj4;
    obj3.contentContainerStyle = items7;
    let obj5 = { bottom };
    obj3.scrollIndicatorInsets = obj5;
    const items8 = [closure_9(tmp(tmp2[27]), {}), , , ];
    const obj6 = { key: "mine", title: tmp(tmp2[24])["8LfMqp"], projects: mine };
    const items9 = [obj6, ];
    const obj7 = { key: "shared", title: tmp(tmp2[24]).YHDMK6, projects: shared };
    items9[1] = obj7;
    items8[1] = items9.map((projects) => {
      let tmp = null;
      if (projects.projects.length > 0) {
        const obj = { style: section.section, children: null };
        const obj2 = { variant: "heading-sm/semibold", color: "text-default", accessibilityRole: "header", children: null };
        const intl = util.intl;
        obj2.children = intl.string(projects.title);
        items = [React6(Text_Text.Text, obj2), ];
        const obj3 = { hasIcons: true, children: null };
        projects = projects.projects;
        obj3.children = projects.map((project) => closure_1_9(closure_1_12, {
          project,
          onPress() {
            return callback(project.id);
          },
          onMore() {
            return closure_2_8(closure_0);
          }
        }, project.id));
        items[1] = React6(TableRowGroup.TableRowGroup, obj3);
        obj.children = items;
        tmp = closure_2_10(timestampProducer, obj, projects.key);
      }
      return tmp;
    });
    items8[2] = null;
    let tmp21Result = null;
    if (arr.length > 0) {
      const obj8 = { hasIcons: false, children: null };
      const obj9 = { label: null, arrow: true, onPress: null };
      const intl4 = tmp4(tmp2[22]).intl;
      const obj10 = { count: arr.length };
      obj9.label = intl4.formatToPlainString(tmp(tmp2[24]).vnoMFE, obj10);
      obj9.onPress = function onPress() {
        return openConjureProjectsSheet.openConjureProjectsSheetForGuild(guildId);
      };
      obj8.children = closure_9(tmp4(tmp2[29]).TableRow, obj9);
      tmp21Result = closure_9(tmp4(tmp2[28]).TableRowGroup, obj8);
    }
    items8[3] = tmp21Result;
    obj3.children = items8;
    obj2.children = closure_10(memo1, obj3);
    return closure_9(callback1, obj2);
  } else {
    const obj11 = { style: tmp3.centered, children: null };
    if ("error" === fetchState) {
      const obj12 = { style: tmp3.listError, children: null };
      const obj13 = { variant: "body-md/normal", color: "text-muted", children: null };
      const intl2 = tmp4(tmp2[22]).intl;
      obj13.children = intl2.string(tmp(tmp2[24]).DJAPMO);
      const items10 = [closure_9(tmp4(tmp2[23]).Text, obj13), ];
      const obj14 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp4(tmp2[22]).intl;
      obj14.text = intl3.string(tmp(tmp2[24])["WFJ/vb"]);
      obj14.onPress = function onPress() {
        return ConjureActionCreators.listProjects(guildId);
      };
      items10[1] = closure_9(tmp4(tmp2[25]).Button, obj14);
      obj12.children = items10;
      let tmp26Result = closure_10(tmp15, obj12);
    } else if ("success" !== fetchState) {
      tmp26Result = closure_9(memo, {});
    } else {
      const obj15 = { style: tmp3.listError, children: null };
      const intl5 = tmp4(tmp2[22]).intl;
      if (arr.length > 0) {
        let prop = tmp(tmp2[24])["/I2lbz"];
      } else {
        prop = tmp(tmp2[24])["9/5sLV"];
      }
      const obj16 = { variant: "body-md/normal", color: "text-muted", children: intl5.string(prop) };
      const items11 = [closure_9(tmp4(tmp2[23]).Text, obj16), ];
      const obj17 = { variant: "primary", size: "sm", text: null, onPress: null };
      let intl = tmp4(tmp2[22]).intl;
      obj17.text = intl.string(tmp4(tmp2[22]).t.CumH4u);
      obj17.onPress = callback1;
      items11[1] = closure_9(tmp4(tmp2[25]).Button, obj17);
      obj15.children = items11;
      tmp26Result = closure_10(tmp15, obj15);
    }
    obj11.children = tmp26Result;
    closure_9(callback1, obj11);
  }
  tmp13 = mine.length > 0 || shared.length > 0;
  const tmp6 = require("useConjureServerProjects")(guildId);
};