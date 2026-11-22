// === Module 18646: ConjureProjectList ===

// Module 18646 (ConjureProjectList)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import Text_Text from "Text/Text" /* 5504 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import TableRowGroup from "TableRowGroup" /* 7348 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 12298 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 13787 */;
import ConjureNumberBadgeDefault from "ConjureNumberBadge" /* 17732 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18240 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18282 */;
import ConjureHeaderIconButtonDefault from "ConjureHeaderIconButton" /* 18393 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 18650 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  const onMore = project.onMore;
  const tmp = closure_12(0);
  const conjureProjectBadge = project(6935).useConjureProjectBadge(project.id);
  const obj = project(6935);
  items = [ConjureProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => ConjureProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1112).intl;
    const obj3 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj3.time = tmp2(6638).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef4190.AXydi3, obj3);
    const tmp2Result = tmp2(6638);
  }
  const obj4 = { label: project.name, subLabel: null, accessibilityHint: null, disabled: null, icon: null, trailing: null, onPress: null, onLongPress: null };
  if (stateFromStores) {
    const intl2 = tmp2(1112).intl;
    formatToPlainStringResult = intl2.string(_modDef4190.Yh5pAc);
  }
  obj4.subLabel = formatToPlainStringResult;
  let stringResult;
  if (null != conjureProjectBadge && conjureProjectBadge > 0 && !stateFromStores) {
    const intl3 = tmp2(1112).intl;
    stringResult = intl3.string(_modDef4190.hfIuc7);
  }
  obj4.accessibilityHint = stringResult;
  obj4.disabled = stateFromStores;
  obj4.icon = closure_10(ConjureProjectIconDefault, { project, size: "list" });
  if (stateFromStores) {
    let tmp13Result = closure_10(closure_5, {});
  } else {
    const obj5 = { style: tmp.projectRowTrailing, children: null };
    let tmp15Result3 = null;
    if (tmp6) {
      const obj6 = { value: conjureProjectBadge };
      tmp15Result3 = closure_10(ConjureNumberBadgeDefault, obj6);
    }
    const items2 = [tmp15Result3, ];
    const obj7 = { IconComponent: tmp2(7022).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl4 = tmp2(1112).intl;
    obj7.accessibilityLabel = intl4.string(tmp2(1112).t["UKOtz+"]);
    items2[1] = closure_10(ConjureHeaderIconButtonDefault, obj7);
    obj5.children = items2;
    tmp13Result = closure_11(closure_7, obj5);
    const tmp19Result = ConjureHeaderIconButtonDefault;
  }
  obj4.trailing = tmp13Result;
  obj4.onPress = project.onPress;
  obj4.onLongPress = onMore;
  const children = [closure_10(project(7045).TableRow, obj4), ];
  let tmp15Result4 = null;
  if (null != conjureProjectBadge) {
    tmp15Result4 = null;
    if (!stateFromStores) {
      const obj8 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp15Result4 = closure_10(closure_7, obj8);
    }
  }
  children[1] = tmp15Result4;
  return closure_11(closure_7, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4913);
let closure_12 = createStyles.createStyles((paddingBottom) => {
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
  let memo;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_12(0);
  importDefault = tmp3;
  navigation = guildId(navigation[9]).useNavigation();
  let obj = guildId(navigation[9]);
  ({ participating, shared, fetchState } = require("useConjureServerProjects")(guildId));
  const arr = require("useConjureOtherOwnProjects")(guildId);
  items = [guildId];
  const callback = memo.useCallback((arg0) => {
    let str = project_list;
    if (project_list === undefined) {
      str = "project_list";
    }
    const result = conjureStandaloneScenes.pushServerProjectScreen(guildId, arg0, str);
  }, items);
  const items1 = [guildId, callback];
  memo = memo.useMemo(() => conjureStandaloneScenes.projectOpener(guildId, (arg0) => callback(arg0, "create")), items1);
  const items2 = [guildId, callback];
  const memo1 = memo.useMemo(() => conjureStandaloneScenes.projectOpener(guildId, (arg0) => callback(arg0, "remix")), items2);
  const tmp10 = callback(memo.useState(false), 2);
  const disabled = tmp10[0];
  const onSubmittingChange = tmp10[1];
  const tmp6 = require("useConjureServerProjects")(guildId);
  let obj2 = guildId(navigation[13]);
  let result = obj2.isConjureEligibleGuild(guildId(navigation[14]).useConjureEligibleGuilds("ConjureProjectList"), guildId);
  c8 = result;
  const items3 = [guildId, memo];
  const callback1 = memo.useCallback(() => {
    const obj2 = { key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY, content: refs(ConjureCreateSheetDefault, { guildId, onCreated: memo, onSubmittingChange }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items3);
  const items4 = [guildId, memo1];
  const callback2 = memo.useCallback((project) => {
    const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: refs(ConjureRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo1 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items4);
  const items5 = [guildId, callback, callback2];
  closure_11 = memo.useCallback((project) => {
    guildId = project;
    let obj2 = { project, guildId, muted: null, removeTarget: null, openChat: null, onRemix: null, onOpenSettings: null };
    let obj = guildId(navigation[18]);
    obj2.muted = guildId(navigation[19]).isConjureProjectMuted(_undefined.settings, project.id);
    let obj3 = guildId(navigation[19]);
    obj2.removeTarget = guildId(navigation[20]).readConjureRemoveTarget(project);
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
      obj2.content = refs(ConjureSettingsSheetDefault, obj3);
      return obj.showActionSheet(obj2);
    };
    const result = obj.conjureProjectActions(obj2);
    const obj4 = guildId(navigation[20]);
    const obj5 = guildId(navigation[22]);
    const result1 = obj5.showSimpleActionSheet({ key: "ConjureProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) });
  }, items5);
  const items6 = [disabled, navigation, callback1, result];
  const effect = memo.useEffect(() => {
    if (first) {
      let fn = () => callback2(guildId(navigation[23]).HeaderSubmittingIndicator, {});
    } else if (c8) {
      fn = (arg0) => {
        ({ tintColor, pressColor, pressOpacity } = arg0);
        const obj = {
          tintColor,
          pressColor,
          pressOpacity,
          onPress,
          displayMode: "minimal",
          backImage(color) {
            return closure_1_10(closure_1_0(closure_1_2[25]).PlusMediumIcon, { size: "md", color: color.tintColor });
          },
          accessibilityLabel: null
        };
        const intl = guildId(navigation[26]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[26]).t.CumH4u);
        return callback2(guildId(navigation[24]).HeaderBackButton, obj);
      };
    }
    navigation.setOptions({ headerRight: fn });
  }, items6);
  if (tmp16) {
    let obj4 = { style: tmp3.content, children: null };
    let obj5 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items7 = [tmp3.listContent, ];
    const obj6 = { paddingBottom: tmp(tmp2[7]).space.PX_8 + bottom };
    items7[1] = obj6;
    obj5.contentContainerStyle = items7;
    const obj7 = { bottom };
    obj5.scrollIndicatorInsets = obj7;
    const items8 = [callback2(tmp(tmp2[31]), {}), , , ];
    const obj8 = { key: "participating", title: null, projects: participating };
    const items9 = [obj8, ];
    const obj9 = { key: "shared", title: tmp(tmp2[28]).YHDMK6, projects: shared };
    items9[1] = obj9;
    items8[1] = items9.map((projects) => {
      let tmp = null;
      if (projects.projects.length > 0) {
        const obj = { style: section.section, children: null };
        let tmp5 = null;
        if (null != projects.title) {
          const obj2 = { variant: "heading-sm/semibold", color: "text-default", accessibilityRole: "header", children: null };
          const intl = util.intl;
          obj2.children = intl.string(projects.title);
          tmp5 = refs(Text_Text.Text, obj2);
        }
        items = [tmp5, ];
        const obj3 = { hasIcons: true, children: null };
        projects = projects.projects;
        obj3.children = projects.map((project) => callback2(closure_1_13, {
          project,
          onPress() {
            return callback(project.id);
          },
          onMore() {
            return closure_2_11(closure_0);
          }
        }, project.id));
        items[1] = refs(TableRowGroup.TableRowGroup, obj3);
        obj.children = items;
        tmp = closure_2_11(metroImportDefault, obj, projects.key);
      }
      return tmp;
    });
    items8[2] = null;
    let tmp25Result = null;
    if (arr.length > 0) {
      const obj10 = { hasIcons: false, children: null };
      const obj11 = { label: null, arrow: true, onPress: null };
      const intl4 = tmp4(tmp2[26]).intl;
      const obj12 = { count: arr.length };
      obj11.label = intl4.formatToPlainString(tmp(tmp2[28]).vnoMFE, obj12);
      obj11.onPress = tmp4(tmp2[34]).showConjureProjectsSheet;
      obj10.children = tmp25(tmp4(tmp2[33]).TableRow, obj11);
      tmp25Result = tmp25(tmp4(tmp2[32]).TableRowGroup, obj10);
    }
    items8[3] = tmp25Result;
    obj5.children = items8;
    obj4.children = closure_11(disabled, obj5);
    return callback2(onSubmittingChange, obj4);
  } else {
    const obj13 = { style: tmp3.centered, children: null };
    if ("error" === fetchState) {
      const obj14 = { style: tmp3.listError, children: null };
      const obj15 = { variant: "body-md/normal", color: "text-muted", children: null };
      const intl2 = tmp4(tmp2[26]).intl;
      obj15.children = intl2.string(tmp(tmp2[28]).DJAPMO);
      const items10 = [tmp17(tmp4(tmp2[27]).Text, obj15), ];
      const obj16 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp4(tmp2[26]).intl;
      obj16.text = intl3.string(tmp(tmp2[28])["WFJ/vb"]);
      obj16.onPress = function onPress() {
        return ConjureActionCreators.listProjects(guildId);
      };
      items10[1] = tmp17(tmp4(tmp2[29]).Button, obj16);
      obj14.children = items10;
      let tmp30Result = closure_11(tmp18, obj14);
    } else if ("success" !== fetchState) {
      tmp30Result = tmp17(memo1, {});
    } else {
      const obj17 = { style: tmp3.listError, children: null };
      const intl5 = tmp4(tmp2[26]).intl;
      if (arr.length > 0) {
        let prop = tmp(tmp2[28])["/I2lbz"];
      } else {
        prop = tmp(tmp2[28])["9/5sLV"];
      }
      const obj18 = { variant: "body-md/normal", color: "text-muted", children: intl5.string(prop) };
      const items11 = [tmp17(tmp4(tmp2[27]).Text, obj18), ];
      let tmp17Result3 = null;
      if (result) {
        const obj19 = { variant: "primary", size: "sm", text: null, loading: null, disabled: null, onPress: null };
        let intl = tmp4(tmp2[26]).intl;
        obj19.text = intl.string(tmp4(tmp2[26]).t.CumH4u);
        obj19.loading = disabled;
        obj19.disabled = disabled;
        obj19.onPress = callback1;
        tmp17Result3 = tmp17(tmp4(tmp2[29]).Button, obj19);
      }
      items11[1] = tmp17Result3;
      obj17.children = items11;
      tmp30Result = closure_11(tmp18, obj17);
    }
    obj13.children = tmp30Result;
    callback2(onSubmittingChange, obj13);
  }
};