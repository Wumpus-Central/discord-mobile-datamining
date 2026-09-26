// === Module 11290: DevToolsExperimentsScreen ===

// Module 11290 (DevToolsExperimentsScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import ExperimentManager from "ExperimentManager" /* 4755 */;
import TableRow from "TableRow" /* 5917 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 7318 */;
import useExperimentAssignments from "useExperimentAssignments" /* 11288 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
function UserExperimentDebugView(id) {
  ({ override, experiment } = id);
  id = AuthenticationStore.getId();
  const installationForTracking = AuthenticationStore.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    maybeExtractIdResult = FingerprintUtils.maybeExtractId(installationForTracking);
  }
  let tmp7 = id;
  if ("installation" === experiment.kind) {
    tmp7 = id;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  const tmp = closure_13();
  const experimentAssignment = useExperimentAssignments.useExperimentAssignment(experiment, tmp7);
  const experimentServerAssignment = useExperimentAssignments.useExperimentServerAssignment(experiment, tmp7);
  const mapped = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  }).map((item) => {
    [tmp, tmp2] = item;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
    let NOT_ELIGIBLE = experimentAssignment;
    if (experimentAssignment == null) {
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal2 = HermesInternal;
    let str = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    str = "Currently unassigned";
    if (null != experimentAssignment) {
      const _HermesInternal = HermesInternal;
      str = "Currently assigned to variant " + experimentAssignment;
    }
  }
  const obj5 = { style: tmp.debugContainer, children: null };
  const obj6 = { label: str, subLabel: null };
  let str4;
  if (null == experimentServerAssignment) {
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  const sortByResult = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  obj6.subLabel = str4;
  const items = [closure_1_11(TableRowGroup.TableRowGroup, { title: "Overview", hasIcons: false, children: closure_1_11(TableRow.TableRow, obj6) }), closure_1_11(native.Spacer, { size: 16 }), , , , , ];
  let str5 = "None";
  let str6 = "None";
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  const obj7 = { title: "Overview", hasIcons: false, children: closure_1_11(TableRow.TableRow, obj6) };
  items[2] = closure_1_11(TableRowGroup.TableRowGroup, { title: "Server Descriptor", hasIcons: false, children: closure_1_11(TableRow.TableRow, { label: str6 }) });
  items[3] = closure_1_11(native.Spacer, { size: 16 });
  let json = str5;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  const obj8 = { title: "Server Descriptor", hasIcons: false, children: closure_1_11(TableRow.TableRow, { label: str6 }) };
  items[4] = closure_1_11(TableRowGroup.TableRowGroup, { title: "Override Descriptor", hasIcons: false, children: closure_1_11(TableRow.TableRow, { label: json }) });
  items[5] = closure_1_11(native.Spacer, { size: 16 });
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  const obj9 = { title: "Override Descriptor", hasIcons: false, children: closure_1_11(TableRow.TableRow, { label: json }) };
  items[6] = closure_1_11(TableRowGroup.TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: closure_1_11(TableRow.TableRow, { label: str5 }) });
  obj5.children = items;
  return closure_1_12(View, obj5);
}
function GuildExperimentDebugView(arg0) {
  ({ id, override } = arg0);
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  const tmp = closure_13();
  const mapped = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  }).map((item) => {
    [tmp, tmp2] = item;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  const sortByResult = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  const obj3 = {};
  const items = [];
  const iter = _modDef12.sortBy(GuildStore.getGuildsArray(), (name) => name.name.toLowerCase())[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, nextResult.id);
    let bucket;
    if (guildExperimentDescriptor != null) {
      bucket = guildExperimentDescriptor.bucket;
    }
    if (bucket == null) {
      bucket = constants.NOT_ELIGIBLE;
    }
    let tmp10 = bucket;
    if (!(bucket in obj3)) {
      obj3[tmp10] = 0;
    }
    obj3[tmp10] = obj3[tmp10] + 1;
    let _HermesInternal = HermesInternal;
    let arr = items.push("" + tmp5.name + ": " + tmp10);
    continue;
  }
  const sortByResult1 = _modDef12.sortBy(GuildStore.getGuildsArray(), (name) => name.name.toLowerCase());
  const keys = _modDef12(obj3).keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((item) => "" + obj3[item] + " guilds are in bucket " + item);
  const obj5 = { style: tmp.debugContainer, children: null };
  const joined = mapped2.join(", ");
  const obj6 = { label: "Current Assignments: " + joined, subLabel: null };
  let str = null;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  const obj4 = _modDef12(obj3);
  obj6.subLabel = str;
  const items1 = [closure_11(obj3(5999).TableRowGroup, { title: "Overview", hasIcons: false, children: closure_11(obj3(5917).TableRow, obj6) }), closure_11(obj3(1177).Spacer, { size: 16 }), , , , , , , ];
  const obj8 = { title: "Guild Assignments", hasIcons: false, children: null };
  const obj7 = { title: "Overview", hasIcons: false, children: closure_11(obj3(5917).TableRow, obj6) };
  obj8.children = closure_11(obj3(5917).TableRow, { label: items.join("\n") });
  items1[2] = closure_11(obj3(5999).TableRowGroup, obj8);
  items1[3] = closure_11(obj3(1177).Spacer, { size: 16 });
  let str2 = "None";
  let str3 = "None";
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  const obj9 = { label: items.join("\n") };
  items1[4] = closure_11(obj3(5999).TableRowGroup, { title: "Server Descriptor", hasIcons: false, children: closure_11(obj3(5917).TableRow, { label: str3 }) });
  items1[5] = closure_11(obj3(1177).Spacer, { size: 16 });
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  const obj10 = { title: "Server Descriptor", hasIcons: false, children: closure_11(obj3(5917).TableRow, { label: str3 }) };
  items1[6] = closure_11(obj3(5999).TableRowGroup, { title: "Override Descriptor", hasIcons: false, children: closure_11(obj3(5917).TableRow, { label: str2 }) });
  items1[7] = closure_11(obj3(1177).Spacer, { size: 16 });
  if (0 === mapped.length) {
    let mapped3 = closure_11(tmp20(5917).TableRow, { label: "none" });
  } else {
    mapped3 = mapped.map((label) => closure_1_11(obj3(dependencyMap[23]).TableRow, { label, labelLineClamp: 1 }, label));
  }
  items1[8] = closure_11(obj3(5999).TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: mapped3 });
  obj5.children = items1;
  return closure_12(View, obj5);
}
class ExperimentDetails {
  constructor(arg0) {
    ({ experiment, override, id, options, onCopyLink } = global);
    closure_1 = undefined;
    tmp = closure_13();
    obj = onCopyLink(closure_2[28]);
    uRLForExperiment = obj.getURLForExperiment(id);
    closure_1 = uRLForExperiment;
    items = [, ];
    items[0] = uRLForExperiment;
    items[1] = onCopyLink;
    obj1 = { style: null, children: null };
    obj9 = { paddingHorizontal: null };
    callback = closure_4.useCallback(() => {
      ClipboardUtils.copy(uRLForExperiment, () => {
        const obj = uRLForExperiment(4528);
        obj.open({ key: "experiment-link-copied", content: "Copied experiment link", IconComponent: onCopyLink(4792).CircleCheckIcon, iconColor: "status-positive" });
        if (closure_1_0 != null) {
          closure_1_0();
        }
      });
    }, items);
    tmp4 = jsxs;
    tmp5 = View;
    obj9.paddingHorizontal = closure_1(closure_2[9]).space.PX_12;
    obj1.style = obj9;
    tmp6 = jsx;
    obj10 = {
      title: "Experiment Assignments",
      hasIcons: false,
      children: options.map((item, index) => {
            ({ label, isDestructive, onPress } = item);
            let variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return closure_1_11(onCopyLink(5917).TableRow, { variant, label, onPress }, index);
          })
    };
    items1 = [, , ];
    items1[0] = jsx(onCopyLink(closure_2[27]).TableRowGroup, obj10);
    obj11 = { style: tmp.copyExperimentLink, children: null };
    obj12 = { title: "Share", hasIcons: false, children: jsx(onCopyLink(closure_2[23]).TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback }) };
    obj11.children = jsx(onCopyLink(closure_2[27]).TableRowGroup, obj12);
    items1[1] = jsx(View, obj11);
    if ("guild" === experiment.kind) {
      tmp9 = GuildExperimentDebugView;
      obj13 = { id: null, override: null };
      obj13.id = id;
      obj13.override = override;
      tmp6Result = tmp6(GuildExperimentDebugView, obj13);
    } else {
      tmp7 = UserExperimentDebugView;
      obj14 = { id: null, override: null, experiment: null };
      obj14.id = id;
      obj14.override = override;
      obj14.experiment = experiment;
      tmp6Result = tmp6(UserExperimentDebugView, obj14);
    }
    items1[2] = tmp6Result;
    obj1.children = items1;
    return tmp4(tmp5, obj1);
  }
}
function ExperimentActionSheet(arg0) {
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  const obj = { header: closure_1_11(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: experiment.title, subtitle: id }), children: closure_1_11(ExperimentDetails, { experiment, override, id, options, onCopyLink }) };
  return closure_1_11(Sheet_BottomSheet.BottomSheet, obj);
}
const View = fn(17).View;
const ExperimentConstants = fn(4751);
({ ExperimentBuckets: closure_9, ExperimentTypes: c10 } = ExperimentConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4836);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, listContainer: null, searchBar: null, debugContainer: null, copyExperimentLink: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.listContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.searchBar = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let obj5 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj.debugContainer = { marginTop: nativeDefault.space.PX_16 };
let obj6 = { marginTop: nativeDefault.space.PX_16 };
obj.copyExperimentLink = { marginTop: nativeDefault.space.PX_16 };
createStyles.createStyles(obj);
let obj7 = { marginTop: nativeDefault.space.PX_16 };
let closure_14 = noop.memo((id) => {
  id = id.id;
  const override = id.override;
  const experiment = id.experiment;
  let items = [experiment];
  ({ start, end } = id);
  const memo = noop.useMemo(() => ExperimentDevToolsUtils.getExperimentVariantsForDevTools(experiment), items);
  const items1 = [id, experiment, override, memo];
  let variantId;
  const callback = noop.useCallback(() => {
    const map = new Map();
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      items.push({
        label: label.label,
        onPress() {
          variantId(experiment[21]).overrideBucket(closure_2_2.system, map, label.id);
          const obj = variantId(experiment[21]);
          override(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
        }
      });
    });
    items.push({
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        variantId(experiment[21]).overrideBucket(closure_1_2.system, map, null);
        const obj = variantId(experiment[21]);
        override(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    });
    override(experiment[22]).openLazy(Promise.resolve({ default: ExperimentActionSheet }), "UserSettingsExperimentBucket", {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        return items(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    });
  }, items1);
  if (override != null) {
    variantId = override.variantId;
  }
  if (null == variantId) {
    let obj = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: callback, trailing: null };
    const obj2 = { variant: "text-md/medium", color: "text-muted", children: "N/A" };
    obj.trailing = closure_11(variantId(experiment[24]).Text, obj2);
    return closure_11(variantId(experiment[23]).TableRow, obj);
  } else {
    const found = memo.find((id) => id.id === variantId);
    if (null != found) {
      let label = found.label;
    } else {
      const _HermesInternal = HermesInternal;
      label = "Unknown (" + variantId + ")";
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default noop.memo(() => {
  const tmp = closure_13();
  [tmp3, tmp4] = overridesInfo2(memo1.useState(""), 2);
  const tmp2 = overridesInfo2(memo1.useState(""), 2);
  const legacyExperiments = experiments(experiments2[10]).useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const obj = experiments(experiments2[10]);
  const apexExperiments = experiments(experiments2[11]).useApexExperiments();
  experiments2 = apexExperiments.experiments;
  overridesInfo2 = apexExperiments.overridesInfo;
  let items = [experiments, experiments2];
  const memo = memo1.useMemo(() => {
    const merged = Object.assign(experiments);
    const merged1 = Object.assign(experiments2);
    return {};
  }, items);
  const items1 = [overridesInfo, overridesInfo2];
  memo1 = memo1.useMemo(() => {
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    return {};
  }, items1);
  const obj2 = experiments(experiments2[11]);
  const tmp12 = overridesInfo(experiments2[13])();
  const obj3 = experiments(experiments2[14]);
  const obj4 = experiments(experiments2[14]);
  const bestMatches = obj3.getBestMatches(obj4.sortEntries(experiments(experiments2[14]).getEntries(memo), memo1), tmp3);
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback((arg0, arg1) => closure_2_11(closure_14, { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 }), items3);
  const obj5 = experiments(experiments2[14]);
  if (obj6.isEmpty(memo)) {
    const obj7 = { Illustration: tmp5(tmp6[17]).NoResults, title: "No Experiments", body: "No experiments are currently running." };
    let tmp19 = closure_11(tmp5(tmp6[16]).EmptyState, obj7);
  } else {
    const obj8 = { style: tmp.container, children: null };
    const obj9 = { style: tmp.searchBar, children: null };
    const obj10 = { size: "md", onChange: tmp4 };
    obj9.children = closure_11(tmp5(tmp6[18]).SearchField, obj10);
    const items4 = [closure_11(bestMatches, obj9), ];
    const obj11 = { style: tmp.listContainer, sections: memo2, estimatedListSize: "windowSize", itemSize: tmp12, insetEnd: overridesInfo(experiments2[12])({ includeKeyboardHeight: true }).insets.bottom + tmp11(tmp6[9]).space.PX_16, renderItem: callback };
    items4[1] = closure_11(tmp11(tmp6[19]), obj11);
    obj8.children = items4;
    tmp19 = closure_12(bestMatches, obj8);
    const tmp11Result = tmp11(tmp6[19]);
  }
  return tmp19;
});
export { ExperimentDetails };