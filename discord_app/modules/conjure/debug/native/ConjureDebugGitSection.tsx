// === Module 13020: ConjureDebugGitSection ===

// Module 13020 (ConjureDebugGitSection)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import AlertModal from "AlertModal" /* 5964 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 13015 */;
import ConjureDebugGit from "ConjureDebugGit" /* 13033 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { controls: { gap: nativeDefault.space.PX_8 }, restartAgentRow: null, clearAlarm: null, disabled: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.restartAgentRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.clearAlarm = { flexShrink: 1 };
obj2.disabled = { opacity: 0.5 };
let closure_9 = createStyles.createStyles(obj2);
let obj5 = { checkout: fn(8646).FolderIcon, edit: fn(10232).PencilIcon, remote: fn(13021).CloudIcon, commits: fn(13023).ListNumberedIcon, calendar: fn(9115).CalendarIcon, save: fn(13025).SaveIcon, objects: fn(9758).ServerIcon, download: fn(13027).CloudDownloadIcon, size: fn(11926).SpeedometerIcon, file: fn(11062).FileIcon };
let obj6 = { ok: null, warning: null, error: null, ahead: null, behind: null };
let items = [fn(7340).CircleCheckIcon, nativeDefault.colors.ICON_FEEDBACK_POSITIVE];
obj6.ok = items;
let items1 = [fn(8026).WarningIcon, nativeDefault.colors.ICON_FEEDBACK_WARNING];
obj6.warning = items1;
let items2 = [fn(7092).CircleXIcon, nativeDefault.colors.ICON_FEEDBACK_CRITICAL];
obj6.error = items2;
let items3 = [fn(13029).ArrowSmallUpIcon, nativeDefault.colors.ICON_MUTED];
obj6.ahead = items3;
let items4 = [fn(13031).ArrowSmallDownIcon, nativeDefault.colors.ICON_MUTED];
obj6.behind = items4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugGitSection.tsx");

export function ConjureDebugGitSection(projectId) {
  const tmp = closure_9();
  const state = ConjureDebugGit.useConjureDebugGitInfo(projectId.projectId).state;
  const gitInfoStatusResult = ConjureDebugGit.gitInfoStatus(state);
  let obj3 = { style: tmp.controls, children: null };
  let tmp6Result = null;
  if ("" !== gitInfoStatusResult.line) {
    let str = "text-muted";
    if (gitInfoStatusResult.critical) {
      str = "text-feedback-critical";
    }
    const obj4 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: gitInfoStatusResult.line };
    tmp6Result = React5(Text_Text.Text, obj4);
  }
  obj3.children = tmp6Result;
  const children = [React5(timestampProducer, obj3), ];
  let mapped = null;
  if (null != state.info) {
    const tmp2Result = ConjureDebugGit;
    mapped = ConjureDebugGit.gitInfoRows(state.info).map((item) => {
      ({ label, state } = item);
      ({ value, hint } = item);
      if (null != state) {
        let items = obj6[state];
      } else {
        items = [null, undefined];
      }
      const tmpResult = _slicedToArray(items, 2);
      const first = tmpResult[0];
      const obj = { label, value, hint, critical: "error" === state, icon: closure_1_7(obj5[item.icon], { size: "xs", color: nativeDefault.colors.ICON_MUTED }), state: null };
      let tmp5Result;
      if (null != first) {
        const obj3 = { size: "xs", color: tmpResult[1] };
        tmp5Result = closure_1_7(first, obj3);
      }
      obj.state = tmp5Result;
      return closure_1_7(ConjureDebugPrimitives.DebugStatRow, obj, label);
    });
    const gitInfoRowsResult = ConjureDebugGit.gitInfoRows(state.info);
  }
  children[1] = mapped;
  return React6(ConjureDebugPrimitives.DebugSection, { title: "Git", children });
}
export function ConjureDebugRestartAgent(projectId) {
  clearAlarm = undefined;
  importDefault = undefined;
  confirmCopy = undefined;
  const tmp = closure_9();
  const conjureRestartAgent = clearAlarm(confirmCopy[21]).useConjureRestartAgent(projectId.projectId);
  ({ state, busy, clearAlarm } = conjureRestartAgent);
  ({ setClearAlarm: c1, confirmCopy } = conjureRestartAgent);
  const restart = conjureRestartAgent.restart;
  const obj = clearAlarm(confirmCopy[21]);
  const checkboxA11yNative = clearAlarm(confirmCopy[24]).useCheckboxA11yNative({ checked: clearAlarm, disabled: busy });
  const items = [confirmCopy, restart];
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj3 = { style: tmp.controls, children: null };
  const obj4 = { style: tmp.restartAgentRow, children: null };
  obj5 = { accessibilityRole, accessibilityState, accessibilityLabel: null, accessibilityHint: null, disabled: null, style: null, onPress: null, children: null };
  const callback = noop.useCallback(() => {
    AlertModal.showConfirmModal({ key: "ConjureDebugRestartAgent", title: confirmCopy.title, content: confirmCopy.body, confirmText: confirmCopy.confirm, onConfirm: restart });
  }, items);
  obj5.accessibilityLabel = clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_LABEL;
  obj5.accessibilityHint = clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_HINT;
  obj5.disabled = busy;
  const items1 = [tmp.clearAlarm, ];
  let disabled = null;
  if (busy) {
    disabled = tmp.disabled;
  }
  items1[1] = disabled;
  obj5.style = items1;
  obj5.onPress = function onPress() {
    return _undefined(!clearAlarm);
  };
  obj6 = { direction: "horizontal", spacing: 8, align: "center", children: null };
  const items2 = [closure_7(clearAlarm(confirmCopy[27]).FormCheckbox, { checked: clearAlarm }), ];
  const obj2 = clearAlarm(confirmCopy[24]);
  items2[1] = closure_7(clearAlarm(confirmCopy[23]).Text, { variant: "text-sm/medium", color: "text-default", children: clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_LABEL });
  obj6.children = items2;
  obj5.children = closure_8(clearAlarm(confirmCopy[26]).Stack, obj6);
  const items3 = [closure_7(closure_5, obj5), ];
  const obj8 = { variant: "critical-secondary", size: "sm", icon: null, text: null, loading: null, disabled: null, onPress: null };
  const obj7 = { variant: "text-sm/medium", color: "text-default", children: clearAlarm(confirmCopy[21]).RESTART_AGENT_CLEAR_ALARM_LABEL };
  obj8.icon = closure_7(clearAlarm(confirmCopy[29]).RetryIcon, { size: "xs", color: require("native").colors.TEXT_FEEDBACK_CRITICAL });
  obj8.text = clearAlarm(confirmCopy[21]).RESTART_AGENT_LABEL;
  obj8.loading = busy;
  obj8.disabled = busy;
  obj8.onPress = callback;
  items3[1] = closure_7(clearAlarm(confirmCopy[28]).Button, obj8);
  obj4.children = items3;
  const items4 = [closure_8(closure_6, obj4), ];
  let str = "text-muted";
  if ("failed" === state.phase) {
    str = "text-feedback-critical";
  }
  const obj10 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str, children: null };
  const obj9 = { size: "xs", color: require("native").colors.TEXT_FEEDBACK_CRITICAL };
  obj10.children = clearAlarm(confirmCopy[21]).restartAgentStatusLine(state);
  items4[1] = closure_7(clearAlarm(confirmCopy[23]).Text, obj10);
  obj3.children = items4;
  return closure_8(closure_6, obj3);
}