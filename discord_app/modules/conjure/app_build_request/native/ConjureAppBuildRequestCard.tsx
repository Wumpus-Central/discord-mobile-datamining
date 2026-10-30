// discord_app/modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ConjureAppBuildRequest from "../ConjureAppBuildRequest.tsx";
import ConjureAppBuildRequestProjectsSheetDefault from "ConjureAppBuildRequestProjectsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  header: null,
  heading: null,
  footer: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.heading = { flex: 1 };
obj2.footer = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx");

export default function ConjureAppBuildRequestCard(arg0) {
  ({ projectId, request, onInputFocusChange: require } = arg0);
  ({ canSend, onDismiss, onSent } = arg0);
  const tmp = closure_7();
  const conjureAppBuildRequestForm = ConjureAppBuildRequest.useConjureAppBuildRequestForm(
    projectId,
    request,
    canSend,
    onDismiss,
    onSent,
  );
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.filter((projectId) => {
    const targetIds = conjureAppBuildRequestForm.targetIds;
    return targetIds.includes(projectId.projectId);
  });
  const intl = util.intl;
  const stringResult = intl.string(conjureAppBuildRequestForm(3865)["29gr8j"]);
  dependencyMap = stringResult;
  let obj2 = { style: tmp.card, children: null };
  let obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.heading, children: null };
  obj4.children = closure_5(Text_Text.Text, {
    variant: "text-md/semibold",
    color: "text-default",
    accessibilityRole: "header",
    children: request.summary,
  });
  const items = [closure_5(closure_4, obj4)];
  const obj6 = {
    variant: "tertiary",
    size: "sm",
    icon: closure_5(XSmallIcon.XSmallIcon, { size: "sm" }),
    onPress: conjureAppBuildRequestForm.dismiss,
    accessibilityLabel: null,
  };
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.string(conjureAppBuildRequestForm(3865).KQUuAZ);
  items[1] = closure_5(IconButton.IconButton, obj6);
  obj3.children = items;
  const items1 = [closure_6(closure_4, obj3), , ,];
  if (0 === conjureAppBuildRequestForm.projects.length) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(tmp5(3865).TbbzW5);
    let tmp10Result = closure_5(Text_Text.Text, obj7);
  } else {
    const obj8 = { title: stringResult, hasIcons: false, children: null };
    if (0 === found.length) {
      const intl3 = util.intl;
      let stringResult1 = intl3.string(tmp5(3865).twlOb6);
    } else {
      const mapped = found.map((name) => name.name);
      stringResult1 = mapped.join(", ");
    }
    const obj9 = { label: stringResult1, subLabel: null, arrow: true, disabled: null, onPress: null };
    let tmp12;
    if (1 === found.length) {
      const serverName = found[0].serverName;
      tmp12 = serverName;
    }
    obj9.subLabel = tmp12;
    obj9.disabled = conjureAppBuildRequestForm.sending;
    obj9.onPress = function openSheet() {
      React3.dismiss();
      const obj2 = { content: null, key: "ConjureAppBuildRequestProjectSheet", stackingBehavior: "stack" };
      const obj3 = {
        title,
        projects: conjureAppBuildRequestForm.projects,
        initialIds: conjureAppBuildRequestForm.targetIds,
        maxSelected: null,
        onChange: null,
      };
      const obj = ActionSheetActionCreators;
      obj3.maxSelected = ConjureAppBuildRequest.CONJURE_APP_BUILD_MAX_TARGETS;
      obj3.onChange = conjureAppBuildRequestForm.setTargetIds;
      obj2.content = hasOwnProperty(ConjureAppBuildRequestProjectsSheetDefault, obj3);
      obj.showActionSheet(obj2);
    };
    obj8.children = closure_5(TableRow.TableRow, obj9);
    tmp10Result = closure_5(TableRowGroup.TableRowGroup, obj8);
  }
  items1[1] = tmp10Result;
  const obj11 = {
    label: null,
    value: null,
    onChange: null,
    maxLength: null,
    disabled: null,
    onFocus: null,
    onBlur: null,
    errorMessage: null,
  };
  const intl5 = util.intl;
  obj11.label = intl5.string(conjureAppBuildRequestForm(3865).XZNsDA);
  ({ prompt: obj10.value, setPrompt: obj10.onChange } = conjureAppBuildRequestForm);
  obj11.maxLength = ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH;
  obj11.disabled = conjureAppBuildRequestForm.sending;
  obj11.onFocus = function onFocus() {
    let tmpResult;
    if (require != null) {
      tmpResult = tmp(true);
    }
    return tmpResult;
  };
  obj11.onBlur = function onBlur() {
    let tmpResult;
    if (require != null) {
      tmpResult = tmp(false);
    }
    return tmpResult;
  };
  let stringResult2;
  if (conjureAppBuildRequestForm.failed) {
    const intl6 = util.intl;
    stringResult2 = intl6.string(tmp5(3865).kMZz8G);
  }
  obj11.errorMessage = stringResult2;
  items1[2] = closure_5(TextArea.TextArea, obj11);
  const obj13 = { style: tmp.footer, children: null };
  const obj24 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
  const intl7 = util.intl;
  obj24.text = intl7.string(conjureAppBuildRequestForm(3865).gG4j6o);
  obj24.disabled = !conjureAppBuildRequestForm.canSubmit;
  ({ sending: obj12.loading, submit: obj12.onPress } = conjureAppBuildRequestForm);
  obj13.children = closure_5(components_Button_Button.Button, obj24);
  items1[3] = closure_5(closure_4, obj13);
  obj2.children = items1;
  return closure_6(conjureAppBuildRequestForm(12442), obj2);
}
