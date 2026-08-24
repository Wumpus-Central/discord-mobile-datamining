// discord_app/modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx
import applyDefault from "../../../../../../_runtime/00012_apply.js";
import extractId from "../../../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import trackExposureToExperiment from "../../../../experiments/ExperimentManager.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useExperimentAssignment from "../../../../experiments/client_override_hooks/useExperimentAssignments.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../experiments/ExperimentStore.tsx";
import closure_7 from "../../../../../stores/AuthenticationStore.tsx";
import closure_8 from "../../../../../stores/GuildStore.tsx";
import ExperimentBuckets from "../../../../experiments/ExperimentConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function UserExperimentDebugView(id) {
  ({ override, experiment } = id);
  id = store2.getId();
  const installationForTracking = store2.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    let obj = extractId;
    maybeExtractIdResult = obj.maybeExtractId(installationForTracking);
  }
  let tmp7 = id;
  if ("installation" === experiment.kind) {
    tmp7 = id;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  obj1 = useExperimentAssignment;
  const experimentAssignment = obj1.useExperimentAssignment(experiment, tmp7);
  let obj2 = useExperimentAssignment;
  const experimentServerAssignment = obj2.useExperimentServerAssignment(experiment, tmp7);
  let obj3 = applyDefault;
  const tmp = callback3();
  const mapped = obj3.sortBy(store.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  }).map((arg0) => {
    [tmp, tmp2] = arg0;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  if (experiment.system === trackExposureToExperiment.ExperimentSystem.LEGACY) {
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
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  obj1 = { title: "Overview", hasIcons: false, children: tmp17(tmp8(6322).TableRow, obj) };
  obj[1] = str4;
  const items = [closure_11(TableRowGroupTitle.TableRowGroup, obj1), closure_11(Button.Spacer, { size: 16 }), , , , , ];
  let str5 = "None";
  let str6 = "None";
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  obj2 = { title: "Server Descriptor", hasIcons: false, children: tmp17(tmp8(6322).TableRow, { label: str6 }) };
  items[2] = closure_11(TableRowGroupTitle.TableRowGroup, obj2);
  items[3] = closure_11(Button.Spacer, { size: 16 });
  let json = str5;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  obj3 = { title: "Override Descriptor", hasIcons: false, children: tmp17(tmp8(6322).TableRow, { label: json }) };
  items[4] = closure_11(TableRowGroupTitle.TableRowGroup, obj3);
  items[5] = closure_11(Button.Spacer, { size: 16 });
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  const sortByResult = obj3.sortBy(store.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  const tmp15 = closure_12;
  const tmp16 = View;
  items[6] = closure_11(TableRowGroupTitle.TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: closure_11(TableRowInner.TableRow, { label: str5 }) });
  obj[1] = items;
  return tmp15(tmp16, obj);
}
function GuildExperimentDebugView(arg0) {
  ({ id, override } = arg0);
  let obj;
  const loadedGuildExperiment = store.getLoadedGuildExperiment(id);
  obj = applyDefault;
  const tmp = callback3();
  let mapped = obj.sortBy(store.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  }).map((arg0) => {
    [tmp, tmp2] = arg0;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  obj1 = applyDefault;
  const sortByResult = obj.sortBy(store.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  obj = {};
  const items = [];
  const iter = obj1.sortBy(guildsArray.getGuildsArray(), (name) => name.name.toLowerCase())[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp6 = store;
    let tmp5 = nextResult;
    let guildExperimentDescriptor = store.getGuildExperimentDescriptor(id, nextResult.id);
    let bucket;
    if (guildExperimentDescriptor != null) {
      bucket = guildExperimentDescriptor.bucket;
    }
    if (bucket == null) {
      let tmp9 = constants;
      bucket = constants.NOT_ELIGIBLE;
    }
    let tmp10 = bucket;
    if (!(bucket in obj)) {
      let tmp11 = bucket;
      obj[tmp10] = 0;
    }
    let tmp12 = bucket;
    obj[tmp10] = obj[tmp10] + 1;
    let tmp13 = nextResult;
    let _HermesInternal = HermesInternal;
    let arr = items.push("" + tmp5.name + ": " + tmp10);
    continue;
  }
  let obj3 = applyDefault(obj);
  const keys = obj3.keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((arg0) => "" + obj[arg0] + " guilds are in bucket " + arg0);
  obj = { style: tmp.debugContainer, children: null };
  const joined = mapped2.join(", ");
  obj1 = { label: "Current Assignments: " + joined, subLabel: null };
  let str = null;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  const sortByResult1 = obj1.sortBy(guildsArray.getGuildsArray(), (name) => name.name.toLowerCase());
  const tmp17 = closure_12;
  const tmp18 = View;
  obj1[1] = str;
  const items1 = [closure_11(obj(6317).TableRowGroup, { title: "Overview", hasIcons: false, children: closure_11(obj(6322).TableRow, obj1) }), closure_11(obj(1297).Spacer, { size: 16 }), , , , , , , ];
  obj3 = { title: "Guild Assignments", hasIcons: false, children: null };
  const obj2 = { title: "Overview", hasIcons: false, children: closure_11(obj(6322).TableRow, obj1) };
  obj3[2] = closure_11(obj(6322).TableRow, { label: items.join("\n") });
  items1[2] = closure_11(obj(6317).TableRowGroup, obj3);
  items1[3] = closure_11(obj(1297).Spacer, { size: 16 });
  let str2 = "None";
  let str3 = "None";
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  const obj4 = { label: items.join("\n") };
  items1[4] = closure_11(obj(6317).TableRowGroup, { title: "Server Descriptor", hasIcons: false, children: closure_11(obj(6322).TableRow, { label: str3 }) });
  items1[5] = closure_11(obj(1297).Spacer, { size: 16 });
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  const obj5 = { title: "Server Descriptor", hasIcons: false, children: closure_11(obj(6322).TableRow, { label: str3 }) };
  items1[6] = closure_11(obj(6317).TableRowGroup, { title: "Override Descriptor", hasIcons: false, children: closure_11(obj(6322).TableRow, { label: str2 }) });
  items1[7] = closure_11(obj(1297).Spacer, { size: 16 });
  if (0 === mapped.length) {
    mapped = tmp19(tmp20(6322).TableRow, { label: "none" });
  } else {
    mapped = mapped.map((label) => {
      obj = { label, labelLineClamp: 1 };
      return callback(obj(table[23]).TableRow, obj, label);
    });
  }
  items1[8] = closure_11(obj(6317).TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: mapped });
  obj[1] = items1;
  return tmp17(tmp18, obj);
}
class ExperimentDetails {
  constructor(arg0) {
    ({ experiment, override, id, options, onCopyLink } = global);
    closure_1 = undefined;
    tmp = closure_13();
    obj = require("regExp");
    uRLForExperiment = obj.getURLForExperiment(id);
    closure_1 = uRLForExperiment;
    items = [, ];
    items[0] = uRLForExperiment;
    items[1] = onCopyLink;
    obj = { style: null, children: null };
    obj1 = { paddingHorizontal: null };
    callback = closure_4.useCallback(() => {
      onCopyLink(closure_1_2[29]).copy(uRLForExperiment, () => {
        let obj = closure_1_1(closure_1_2[30]);
        obj = { key: "experiment-link-copied", content: "Copied experiment link", IconComponent: closure_1_0(closure_1_2[31]).CircleCheckIcon, iconColor: "status-positive" };
        obj.open(obj);
        if (callback != null) {
          callback();
        }
      });
    }, items);
    tmp4 = jsxs;
    tmp5 = View;
    obj1[0] = require("Themes").space.PX_12;
    obj[0] = obj1;
    tmp6 = jsx;
    obj2 = {
      title: "Experiment Assignments",
      hasIcons: false,
      children: options.map((arg0, arg1) => {
            ({ label, isDestructive, onPress } = arg0);
            let variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return closure_11(onCopyLink(table[23]).TableRow, { variant, label, onPress }, arg1);
          })
    };
    items1 = [, , ];
    items1[0] = jsx(require("TableRowGroupTitle").TableRowGroup, obj2);
    obj3 = { style: tmp.copyExperimentLink, children: null };
    obj4 = { title: "Share", hasIcons: false, children: jsx(require("TableRowInner").TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback }) };
    obj3[1] = jsx(require("TableRowGroupTitle").TableRowGroup, obj4);
    items1[1] = jsx(View, obj3);
    if ("guild" === experiment.kind) {
      tmp9 = GuildExperimentDebugView;
      obj5 = { id: null, override: null };
      obj5[0] = id;
      obj5[1] = override;
      tmp6Result = tmp6(GuildExperimentDebugView, obj5);
    } else {
      tmp7 = UserExperimentDebugView;
      obj6 = { id: null, override: null, experiment: null };
      obj6[0] = id;
      obj6[1] = override;
      obj6[2] = experiment;
      tmp6Result = tmp6(UserExperimentDebugView, obj6);
    }
    items1[2] = tmp6Result;
    obj[1] = items1;
    return tmp4(tmp5, obj);
  }
}
function ExperimentActionSheet(arg0) {
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  let obj = { header: null, children: null };
  obj = { title: experiment.title, subtitle: id };
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj[1] = callback(ExperimentDetails, { experiment, override, id, options, onCopyLink });
  return callback(Background.BottomSheet, obj);
}
let c4 = importAllResult;
({ ExperimentBuckets: c9, ExperimentTypes: c10 } = ExperimentBuckets);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { container: null, listContainer: null, searchBar: null, debugContainer: null, copyExperimentLink: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[0] = obj;
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12 };
obj[1] = createCacheKey;
obj[2] = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
let obj2 = { paddingVertical: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_12 };
obj[3] = { marginTop: ThemesDefault.space.PX_16 };
let obj3 = { marginTop: ThemesDefault.space.PX_16 };
obj[4] = { marginTop: ThemesDefault.space.PX_16 };
let closure_13 = createCacheKey.createStyles(obj);
let obj4 = { marginTop: ThemesDefault.space.PX_16 };
let closure_14 = importAllResult.memo((id) => {
  id = id.id;
  let variantId = id;
  const override = id.override;
  const experiment = id.experiment;
  let memo;
  let items = [experiment];
  ({ start, end } = id);
  memo = importAllResult.useMemo(() => variantId(experiment[20]).getExperimentVariantsForDevTools(experiment), items);
  const items1 = [id, experiment, override, memo];
  variantId = undefined;
  const callback = importAllResult.useCallback(() => {
    const map = new Map();
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      closure_0 = label;
      items.push({
        label: label.label,
        onPress() {
          map(closure_2_2[21]).overrideBucket(closure_1_2.system, label, label.id);
          const obj = map(closure_2_2[21]);
          items(closure_2_2[22]).hideActionSheet("UserSettingsExperimentBucket");
        }
      });
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        map(closure_1_2[21]).overrideBucket(system.system, map, null);
        const obj = map(closure_1_2[21]);
        items(closure_1_2[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    items.push(obj);
    obj = { default: closure_1_18 };
    obj = {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink(arg0) {
        return items(system[22]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    override(experiment[22]).openLazy(Promise.resolve(obj), "UserSettingsExperimentBucket", obj);
  }, items1);
  if (override != null) {
    variantId = override.variantId;
  }
  if (null == variantId) {
    let obj = { height: "100%", start: null, end: null, label: null, labelLineClamp: 1, onPress: null, trailing: null };
    obj[1] = start;
    obj[2] = end;
    obj[3] = experiment.title;
    obj[5] = callback;
    obj = { variant: "text-md/medium", color: "text-muted", children: null };
    obj[2] = "N/A";
    obj[6] = callback(variantId(experiment[24]).Text, obj);
    return callback(variantId(experiment[23]).TableRow, obj);
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
const memoResult = importAllResult.memo(() => {
  const tmp = callback3();
  [tmp3, tmp4] = overridesInfo2(memo1.useState(""), 2);
  let obj = experiments(experiments2[10]);
  const legacyExperiments = obj.useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  obj1 = experiments(experiments2[11]);
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
  const bestMatches = obj2.getBestMatches(obj3.sortEntries(experiments(experiments2[14]).getEntries(memo), memo1), tmp3);
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback((arg0, arg1) => closure_1_11(closure_1_14, { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 }), items3);
  const obj5 = experiments(experiments2[14]);
  if (obj6.isEmpty(memo)) {
    obj = { Illustration: null, title: "No Experiments", body: "No experiments are currently running." };
    obj[0] = tmp5(tmp6[17]).NoResults;
    let tmp19 = callback(tmp5(tmp6[16]).EmptyState, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.searchBar;
    obj2 = { size: "md", onChange: null };
    obj2[1] = tmp4;
    obj1[1] = callback(tmp5(tmp6[18]).SearchField, obj2);
    const items4 = [callback(bestMatches, obj1), ];
    obj3 = { style: null, sections: null, estimatedListSize: "windowSize", itemSize: null, insetEnd: null, renderItem: null };
    obj3[0] = tmp.listContainer;
    obj3[1] = memo2;
    obj3[3] = tmp12;
    obj3[4] = overridesInfo(experiments2[12])({ includeKeyboardHeight: true }).insets.bottom + tmp11(tmp6[9]).space.PX_16;
    obj3[5] = callback;
    items4[1] = callback(tmp11(tmp6[19]), obj3);
    obj[1] = items4;
    tmp19 = callback2(bestMatches, obj);
    const tmp11Result = tmp11(tmp6[19]);
  }
  return tmp19;
});
let result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default memoResult;
export { ExperimentDetails };