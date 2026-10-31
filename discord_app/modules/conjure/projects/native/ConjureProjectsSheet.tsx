// discord_app/modules/conjure/projects/native/ConjureProjectsSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import BottomSheetModal from "../../../../../_runtime/05275_BottomSheetModal.js";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import getTimestampStringDefault from "../../../notification_center/getTimestampString.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Search_SearchBar from "../../../../design/components/Search/native/SearchBar.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import useConjureEntryPointPlacementDefault from "../../title_bar/native/useConjureEntryPointPlacement.tsx";
import ConjureActionCreators from "../ConjureActionCreators.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import _modDef10980 from "../../../../../_runtime/metro/10980__.js";
import ConjureProjectIcon from "ConjureProjectIcon.tsx";
import confirmConjureYouBarPinDefault from "../../title_bar/native/confirmConjureYouBarPin.tsx";
import useConjureOwnProjectListStateDefault from "../../home/useConjureOwnProjectListState.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjurePublishStatusStore from "../../publish/ConjurePublishStatusStore.tsx";

const ConjureProjectIconDefault = ConjureProjectIcon;

require = fn;
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
function ProjectList(query) {
  const tmp = closure_9(0);
  const tmp4 = useConjureOwnProjectListStateDefault(query.query);
  if ("projects" === tmp4.kind) {
    const obj2 = { hasIcons: true, children: null };
    const projects = tmp4.projects;
    obj2.children = projects.map((project) => closure_1_7(closure_1_10, { project }, project.id));
    let tmp8 = React5(TableRowGroup.TableRowGroup, obj2);
  } else if ("no_match" === tmp4.kind) {
    const obj3 = { style: tmp.state, children: null };
    const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl4 = util.intl;
    obj4.children = intl4.string(_modDef3868.X37fkR);
    obj3.children = React5(Text_Text.Text, obj4);
    tmp8 = React5(View, obj3);
  } else if ("error" === tmp4.kind) {
    const obj5 = { style: tmp.state, children: null };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(_modDef3868.DJAPMO);
    const items = [React5(Text_Text.Text, obj6)];
    const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef3868["WFJ/vb"]);
    obj7.onPress = function onPress() {
      return ConjureActionCreators.listProjects();
    };
    items[1] = React5(components_Button_Button.Button, obj7);
    obj5.children = items;
    tmp8 = React6(View, obj5);
  } else if ("loading" === tmp4.kind) {
    const obj8 = { style: tmp.state, children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    tmp8 = React5(View, obj8);
  } else {
    const obj = { style: tmp.state, children: null };
    const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl = util.intl;
    obj9.children = intl.string(_modDef3868["9/5sLV"]);
    obj.children = React5(Text_Text.Text, obj9);
    tmp8 = React5(View, obj);
  }
  return tmp8;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 },
    state: null,
    trailingIndicator: null,
    unreadDot: null,
  };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
  const size = {
    width: nativeDefault.space.PX_20,
    height: nativeDefault.space.PX_20,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.trailingIndicator = size;
  const size1 = {
    width: nativeDefault.space.PX_8,
    height: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  };
  obj.unreadDot = size1;
  return obj;
});
let closure_10 = noop.memo(function ProjectRow(project) {
  project = project.project;
  let unreadDot = closure_9(0);
  const conjureHomeProjectState = project(14699).useConjureHomeProjectState(project.id);
  const obj = project(14699);
  const items = [ConjurePublishStatusStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(
    items,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      return publishState;
    },
    items1,
  );
  const obj2 = project(504);
  const result = project(14699).conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj3 = project(14699);
  const result1 = project(14699).conjureProjectLastActivityTime(project);
  if ("deleting" === conjureHomeProjectState) {
    const intl3 = tmp(1113).intl;
    let stringResult = intl3.string(_modDef3868.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl2 = tmp(1113).intl;
    stringResult = intl2.string(_modDef3868["Y8pS+n"]);
  } else {
    let tmp7ResultResult = null;
    if (null != result1) {
      const obj5 = { since: result1, getFormatter: tmp(6076).getAbbreviatedFormatter, includeWeeks: true };
      tmp7ResultResult = getTimestampStringDefault(obj5);
      const tmp7Result = getTimestampStringDefault;
    }
    const items2 = [tmp7ResultResult, tmp8];
    let stringResult1 = null;
    if (result) {
      const intl = tmp(1113).intl;
      stringResult1 = intl.string(_modDef3868.CSAaT0);
    }
    items2[2] = stringResult1;
    const found = items2.filter((item) => null != item);
    stringResult = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult];
  let stringResult2 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl4 = tmp(1113).intl;
    stringResult2 = intl4.string(_modDef3868["N+3Pzk"]);
  }
  items3[2] = stringResult2;
  const found1 = items3.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  const joined = found1.join(", ");
  const obj6 = {
    label: project.name,
    subLabel: null,
    accessibilityLabel: null,
    icon: null,
    trailing: null,
    disabled: null,
    onPress: null,
  };
  let tmp18;
  if ("" !== stringResult) {
    tmp18 = stringResult;
  }
  obj6.subLabel = tmp18;
  obj6.accessibilityLabel = joined;
  obj6.icon = closure_7(ConjureProjectIconDefault, { project, size: "list" });
  if ("deleting" !== conjureHomeProjectState) {
    if ("in_progress" !== conjureHomeProjectState) {
      if (!tmp14) {
        obj6.trailing = undefined;
        obj6.disabled = tmp9;
        obj6.onPress = function onPress() {
          return openConjureHomeScreenDefault(project.id, { entryPoint: "project_list" });
        };
        return closure_7(tmp(6975).TableRow, obj6);
      }
    }
  }
  const obj7 = { style: unreadDot.trailingIndicator, children: null };
  if ("unread" === conjureHomeProjectState) {
    const obj8 = { style: null };
    unreadDot = unreadDot.unreadDot;
    obj8.style = unreadDot;
    let tmp17Result = closure_7(View, obj8);
  } else {
    tmp17Result = closure_7(tmp(6953).ActivityIndicator, { size: "small" });
  }
  obj7.children = tmp17Result;
  closure_7(View, obj7);
  const obj4 = project(14699);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default function ConjureProjectsSheet() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = closure_9(bottom);
  [tmp5, tmp6] = noop.useState("");
  const tmp7 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp7 != null) {
    placement = tmp7.placement;
  }
  useMountEffectDefault(() => {
    ConjureActionCreators.listProjects();
  });
  const obj = { title: null, trailing: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3868.uk6jhJ);
  let tmp10Result;
  if ("you_screen" === placement) {
    const obj2 = { icon: _modDef10980, variant: "tertiary", size: "sm", accessibilityLabel: null, onPress: null };
    const intl2 = util.intl;
    obj2.accessibilityLabel = intl2.string(_modDef3868.qCBh6V);
    obj2.onPress = confirmPin;
    tmp10Result = React5(IconButton.IconButton, obj2);
  }
  const obj3 = {
    scrollable: true,
    startExpanded: true,
    header: React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj),
    children: null,
  };
  obj.trailing = tmp10Result;
  const obj4 = {
    contentContainerStyle: tmp3.scrollContent,
    scrollIndicatorInsets: { bottom },
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  const obj5 = { size: "md", onChange: tmp6, placeholder: null, accessibilityLabel: null };
  const intl3 = util.intl;
  obj5.placeholder = intl3.string(_modDef3868["2y8sUh"]);
  const intl4 = util.intl;
  obj5.accessibilityLabel = intl4.string(_modDef3868.u0kEN9);
  const items = [React5(Search_SearchBar.SearchBar, obj5), ,];
  const obj6 = { hasIcons: true, children: null };
  const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
  const intl5 = util.intl;
  obj7.label = intl5.string(_modDef3868.bnVYYC);
  const intl6 = util.intl;
  obj7.subLabel = intl6.string(_modDef3868.gnzLwZ);
  obj7.icon = React5(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
  obj7.onPress = function onPress() {
    return openConjureHomeScreenDefault(undefined, { focusComposer: true });
  };
  obj6.children = React5(TableRow.TableRow, obj7);
  items[1] = React5(TableRowGroup.TableRowGroup, obj6);
  items[2] = React5(ProjectList, { query: tmp5 });
  obj4.children = items;
  obj3.children = React6(BottomSheetModal.BottomSheetScrollView, obj4);
  return React5(ActionSheet.ActionSheet, obj3);
}
