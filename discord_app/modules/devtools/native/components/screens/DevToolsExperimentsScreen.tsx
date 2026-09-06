// discord_app/modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import FingerprintUtils from "../../../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import ExperimentManager from "../../../../experiments/ExperimentManager.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import ExperimentDevToolsUtils from "../../../../experiments/devtools/ExperimentDevToolsUtils.tsx";
import useExperimentAssignments from "../../../../experiments/client_override_hooks/useExperimentAssignments.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ExperimentStore from "../../../../experiments/ExperimentStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";

require = fn;
function UserExperimentDebugView(id) {
  ({ override, experiment } = id);
  id = AuthenticationStore.getId();
  const installationForTracking = AuthenticationStore.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    let obj = FingerprintUtils;
    maybeExtractIdResult = obj.maybeExtractId(installationForTracking);
  }
  let tmp7 = id;
  if ("installation" === experiment.kind) {
    tmp7 = id;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  let obj1 = useExperimentAssignments;
  const experimentAssignment = obj1.useExperimentAssignment(experiment, tmp7);
  let obj2 = useExperimentAssignments;
  const experimentServerAssignment = obj2.useExperimentServerAssignment(experiment, tmp7);
  let obj3 = _modDef12;
  const tmp = closure_13();
  const mapped = obj3
    .sortBy(ExperimentStore.getRecentExposures(constants2.USER, id.id), (arg0) => {
      [, tmp] = arg0;
      return -tmp;
    })
    .map((item) => {
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
  obj = { style: tmp.debugContainer, children: null };
  obj = { label: str, subLabel: null };
  let str4;
  if (null == experimentServerAssignment) {
    str4 =
      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.';
  }
  obj1 = { title: "Overview", hasIcons: false, children: tmp17(tmp8(5605).TableRow, obj) };
  obj.subLabel = str4;
  const items = [closure_1_11(TableRowGroup.TableRowGroup, obj1), closure_1_11(native.Spacer, { size: 16 }), , , , ,];
  let str5 = "None";
  let str6 = "None";
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  obj2 = { title: "Server Descriptor", hasIcons: false, children: tmp17(tmp8(5605).TableRow, { label: str6 }) };
  items[2] = closure_1_11(TableRowGroup.TableRowGroup, obj2);
  items[3] = closure_1_11(native.Spacer, { size: 16 });
  let json = str5;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  obj3 = { title: "Override Descriptor", hasIcons: false, children: tmp17(tmp8(5605).TableRow, { label: json }) };
  items[4] = closure_1_11(TableRowGroup.TableRowGroup, obj3);
  items[5] = closure_1_11(native.Spacer, { size: 16 });
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  const sortByResult = obj3.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  const tmp15 = closure_1_12;
  const tmp16 = View;
  items[6] = closure_1_11(TableRowGroup.TableRowGroup, {
    title: "Recent Exposures",
    hasIcons: false,
    children: closure_1_11(TableRow.TableRow, { label: str5 }),
  });
  obj.children = items;
  return tmp15(tmp16, obj);
}
function GuildExperimentDebugView(arg0) {
  ({ id, override } = arg0);
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  let obj = _modDef12;
  const tmp = closure_13();
  let mapped = obj
    .sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
      [, tmp] = arg0;
      return -tmp;
    })
    .map((item) => {
      [tmp, tmp2] = item;
      return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
    });
  let obj1 = _modDef12;
  const sortByResult = obj.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  obj = {};
  const items = [];
  const iter = obj1.sortBy(GuildStore.getGuildsArray(), (name) => name.name.toLowerCase())[Symbol.iterator]();
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
    if (!(bucket in obj)) {
      obj[tmp10] = 0;
    }
    obj[tmp10] = obj[tmp10] + 1;
    let _HermesInternal = HermesInternal;
    let arr = items.push("" + tmp5.name + ": " + tmp10);
    continue;
  }
  let obj3 = _modDef12(obj);
  const keys = obj3.keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((item) => "" + obj[item] + " guilds are in bucket " + item);
  obj = { style: tmp.debugContainer, children: null };
  const joined = mapped2.join(", ");
  obj1 = { label: "Current Assignments: " + joined, subLabel: null };
  let str = null;
  if (null == loadedGuildExperiment) {
    str =
      "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  const sortByResult1 = obj1.sortBy(GuildStore.getGuildsArray(), (name) => name.name.toLowerCase());
  const tmp17 = closure_12;
  const tmp18 = View;
  obj1.subLabel = str;
  const items1 = [
    closure_11(obj(5687).TableRowGroup, {
      title: "Overview",
      hasIcons: false,
      children: closure_11(obj(5605).TableRow, obj1),
    }),
    closure_11(obj(1178).Spacer, { size: 16 }),
    ,
    ,
    ,
    ,
    ,
    ,
  ];
  obj3 = { title: "Guild Assignments", hasIcons: false, children: null };
  const obj2 = { title: "Overview", hasIcons: false, children: closure_11(obj(5605).TableRow, obj1) };
  obj3.children = closure_11(obj(5605).TableRow, { label: items.join("\n") });
  items1[2] = closure_11(obj(5687).TableRowGroup, obj3);
  items1[3] = closure_11(obj(1178).Spacer, { size: 16 });
  let str2 = "None";
  let str3 = "None";
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  const obj4 = { label: items.join("\n") };
  items1[4] = closure_11(obj(5687).TableRowGroup, {
    title: "Server Descriptor",
    hasIcons: false,
    children: closure_11(obj(5605).TableRow, { label: str3 }),
  });
  items1[5] = closure_11(obj(1178).Spacer, { size: 16 });
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  const obj5 = {
    title: "Server Descriptor",
    hasIcons: false,
    children: closure_11(obj(5605).TableRow, { label: str3 }),
  };
  items1[6] = closure_11(obj(5687).TableRowGroup, {
    title: "Override Descriptor",
    hasIcons: false,
    children: closure_11(obj(5605).TableRow, { label: str2 }),
  });
  items1[7] = closure_11(obj(1178).Spacer, { size: 16 });
  if (0 === mapped.length) {
    mapped = tmp19(tmp20(5605).TableRow, { label: "none" });
  } else {
    mapped = mapped.map((label) => {
      obj = { label, labelLineClamp: 1 };
      return closure_1_11(obj(dependencyMap[23]).TableRow, obj, label);
    });
  }
  items1[8] = closure_11(obj(5687).TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: mapped });
  obj.children = items1;
  return tmp17(tmp18, obj);
}
class ExperimentDetails {
  constructor(arg0) {
    ({ experiment, override, id, options, onCopyLink } = global);
    closure_1 = undefined;
    tmp = closure_13();
    obj = onCopyLink(closure_2[28]);
    uRLForExperiment = obj.getURLForExperiment(id);
    closure_1 = uRLForExperiment;
    items = [,];
    items[0] = uRLForExperiment;
    items[1] = onCopyLink;
    obj = { style: null, children: null };
    obj1 = { paddingHorizontal: null };
    callback = closure_4.useCallback(() => {
      ClipboardUtils.copy(uRLForExperiment, () => {
        uRLForExperiment(4259);
        const obj = {
          key: "experiment-link-copied",
          content: "Copied experiment link",
          IconComponent: onCopyLink(4520).CircleCheckIcon,
          iconColor: "status-positive",
        };
        obj.open(obj);
        if (closure_1_0 != null) {
          closure_1_0();
        }
      });
    }, items);
    tmp4 = jsxs;
    tmp5 = View;
    obj1.paddingHorizontal = closure_1(closure_2[9]).space.PX_12;
    obj.style = obj1;
    tmp6 = jsx;
    obj2 = {
      title: "Experiment Assignments",
      hasIcons: false,
      children: options.map((item, index) => {
        ({ label, isDestructive, onPress } = item);
        let variant = "default";
        if (isDestructive) {
          variant = "danger";
        }
        return closure_1_11(onCopyLink(5605).TableRow, { variant, label, onPress }, index);
      }),
    };
    items1 = [, ,];
    items1[0] = jsx(onCopyLink(closure_2[27]).TableRowGroup, obj2);
    obj3 = { style: tmp.copyExperimentLink, children: null };
    obj4 = {
      title: "Share",
      hasIcons: false,
      children: jsx(onCopyLink(closure_2[23]).TableRow, {
        label: "Copy Link",
        subLabel: uRLForExperiment,
        onPress: callback,
      }),
    };
    obj3.children = jsx(onCopyLink(closure_2[27]).TableRowGroup, obj4);
    items1[1] = jsx(View, obj3);
    if ("guild" === experiment.kind) {
      tmp9 = GuildExperimentDebugView;
      obj5 = { id: null, override: null };
      obj5.id = id;
      obj5.override = override;
      tmp6Result = tmp6(GuildExperimentDebugView, obj5);
    } else {
      tmp7 = UserExperimentDebugView;
      obj6 = { id: null, override: null, experiment: null };
      obj6.id = id;
      obj6.override = override;
      obj6.experiment = experiment;
      tmp6Result = tmp6(UserExperimentDebugView, obj6);
    }
    items1[2] = tmp6Result;
    obj.children = items1;
    return tmp4(tmp5, obj);
  }
}
function ExperimentActionSheet(arg0) {
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  let obj = { header: null, children: null };
  obj = { title: experiment.title, subtitle: id };
  obj.header = closure_1_11(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj.children = closure_1_11(ExperimentDetails, { experiment, override, id, options, onCopyLink });
  return closure_1_11(Sheet_BottomSheet.BottomSheet, obj);
}
const View = fn(17).View;
const ExperimentConstants = fn(4477);
({ ExperimentBuckets: closure_9, ExperimentTypes: c10 } = ExperimentConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let obj = { container: null, listContainer: null, searchBar: null, debugContainer: null, copyExperimentLink: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.container = obj;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.listContainer = createStyles;
obj.searchBar = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let obj2 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj.debugContainer = { marginTop: nativeDefault.space.PX_16 };
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj.copyExperimentLink = { marginTop: nativeDefault.space.PX_16 };
createStyles.createStyles(obj);
let obj4 = { marginTop: nativeDefault.space.PX_16 };
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
        },
      });
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        variantId(experiment[21]).overrideBucket(closure_1_2.system, map, null);
        const obj = variantId(experiment[21]);
        override(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
      },
    };
    items.push(obj);
    obj = { default: ExperimentActionSheet };
    obj = {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        return items(experiment[22]).hideActionSheet("UserSettingsExperimentBucket");
      },
    };
    override(experiment[22]).openLazy(Promise.resolve(obj), "UserSettingsExperimentBucket", obj);
  }, items1);
  if (override != null) {
    variantId = override.variantId;
  }
  if (null == variantId) {
    let obj = {
      height: "100%",
      start,
      end,
      label: experiment.title,
      labelLineClamp: 1,
      onPress: callback,
      trailing: null,
    };
    obj = { variant: "text-md/medium", color: "text-muted", children: "N/A" };
    obj.trailing = closure_11(variantId(experiment[24]).Text, obj);
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
  let obj = experiments(experiments2[10]);
  const legacyExperiments = obj.useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  let obj1 = experiments(experiments2[11]);
  const apexExperiments = obj1.useApexExperiments();
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
  const tmp2 = overridesInfo2(memo1.useState(""), 2);
  let obj2 = experiments(experiments2[14]);
  let obj3 = experiments(experiments2[14]);
  const tmp12 = overridesInfo(experiments2[13])();
  const bestMatches = obj2.getBestMatches(
    obj3.sortEntries(experiments(experiments2[14]).getEntries(memo), memo1),
    tmp3,
  );
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback(
    (arg0, arg1) =>
      closure_2_11(closure_14, {
        id: bestMatches[arg1].id,
        experiment: bestMatches[arg1].experiment,
        override: memo1[bestMatches[arg1].id],
        start: 0 === arg1,
        end: arg1 === bestMatches.length - 1,
      }),
    items3,
  );
  const obj5 = experiments(experiments2[14]);
  if (obj6.isEmpty(memo)) {
    obj = {
      Illustration: tmp5(tmp6[17]).NoResults,
      title: "No Experiments",
      body: "No experiments are currently running.",
    };
    let tmp19 = closure_11(tmp5(tmp6[16]).EmptyState, obj);
  } else {
    obj = { style: tmp.container, children: null };
    obj1 = { style: tmp.searchBar, children: null };
    obj2 = { size: "md", onChange: tmp4 };
    obj1.children = closure_11(tmp5(tmp6[18]).SearchField, obj2);
    const items4 = [closure_11(bestMatches, obj1)];
    obj3 = {
      style: tmp.listContainer,
      sections: memo2,
      estimatedListSize: "windowSize",
      itemSize: tmp12,
      insetEnd:
        overridesInfo(experiments2[12])({ includeKeyboardHeight: true }).insets.bottom + tmp11(tmp6[9]).space.PX_16,
      renderItem: callback,
    };
    items4[1] = closure_11(tmp11(tmp6[19]), obj3);
    obj.children = items4;
    tmp19 = closure_12(bestMatches, obj);
    const tmp11Result = tmp11(tmp6[19]);
  }
  return tmp19;
});
export { ExperimentDetails };
