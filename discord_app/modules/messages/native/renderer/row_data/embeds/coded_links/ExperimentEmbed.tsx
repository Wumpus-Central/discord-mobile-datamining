// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx
import c from "../../../../../../../../_runtime/00576_c.js";
import ExperimentManager from "../../../../../../experiments/ExperimentManager.tsx";
import ActionSheetActionCreatorsDefault from "../../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import renderer_EmbedUtils from "../../../EmbedUtils.tsx";
import ExperimentEmbedUtils from "../../../../../../experiments/ExperimentEmbedUtils.tsx";
import ExperimentDevToolsUtils from "../../../../../../experiments/devtools/ExperimentDevToolsUtils.tsx";
import useCodedLinksExperimentEmbeds from "../../../../../../experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx";
import useLegacyExperiments from "../../../../../../experiments/client_override_hooks/useLegacyExperiments.tsx";
import useApexExperiments from "../../../../../../experiments/client_override_hooks/useApexExperiments.tsx";
import _modDef11321 from "../../../../../../../../_runtime/metro/11321__.js";
import _modDef11322 from "../../../../../../../../_runtime/metro/11322__.js";
import useExperimentAssignments from "../../../../../../experiments/client_override_hooks/useExperimentAssignments.tsx";
import _modDef11324 from "../../../../../../../../_runtime/metro/11324__.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../../../../stores/AuthenticationStore.tsx";

require = fn;
const Image = fn(17).Image;
const ExperimentEmbedType = fn(4978).ExperimentEmbedType;
const InviteTypes = fn(7423).InviteTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ExperimentOverrideActionSheet(id) {
      const cResult = id(items[17]).c(22);
      id = id.id;
      const experiment = id.experiment;
      const override = id.override;
      if (cResult[0] !== experiment) {
        if (null != experiment) {
          let experimentVariantsForDevTools = tmp(tmp2[18]).getExperimentVariantsForDevTools(experiment);
          const tmpResult = tmp(tmp2[18]);
        } else {
          experimentVariantsForDevTools = [];
        }
        cResult[0] = experiment;
        cResult[1] = experimentVariantsForDevTools;
      } else if (null != experiment) {
        if (cResult[3] === experiment.system) {
          if (cResult[4] === id) {
            if (cResult[5] === arr) {
              items = tmp9;
            }
          }
        }
        const _Map = Map;
        const map = new Map();
        const item = arr.forEach((id) => {
          const result = map.set(id.id, id);
        });
        items = [];
        const item1 = map.forEach((label) => {
          items.push({
            label: label.label,
            onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet("ExperimentOverrideSheet");
              ExperimentManager.overrideBucket(experiment.system, id, label.id);
            },
          });
        });
        if (cResult[7] === experiment.system) {
          if (cResult[8] === id) {
            let tmp16 = cResult[9];
          }
          items.push(tmp16);
          cResult[3] = experiment.system;
          cResult[4] = id;
          cResult[5] = arr;
          cResult[6] = items;
        }
        const obj2 = {
          label: "Clear Override",
          isDestructive: true,
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet("ExperimentOverrideSheet");
            ExperimentManager.overrideBucket(experiment.system, id, null);
          },
        };
        cResult[7] = experiment.system;
        cResult[8] = id;
        cResult[9] = obj2;
        tmp16 = obj2;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [];
          cResult[2] = items1;
          let tmp8 = items1;
        } else {
          tmp8 = cResult[2];
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              obj = experiment(closure_2[19]);
              hideActionSheetResult = obj.hideActionSheet("ExperimentOverrideSheet");
              return;
            }
          }
          cResult[10] = C;
        } else {
          class C {
            constructor() {
              obj = experiment(closure_2[19]);
              hideActionSheetResult = obj.hideActionSheet("ExperimentOverrideSheet");
              return;
            }
          }
        }
        if (cResult[11] === experiment.title) {
          class C {
            constructor() {
              obj = experiment(closure_2[19]);
              hideActionSheetResult = obj.hideActionSheet("ExperimentOverrideSheet");
              return;
            }
          }
          if (cResult[14] === experiment) {
            class C {
              constructor() {
                obj = experiment(closure_2[19]);
                hideActionSheetResult = obj.hideActionSheet("ExperimentOverrideSheet");
                return;
              }
            }
          }
          const obj3 = { experiment, override, id, options: tmp8, onCopyLink: C };
          const tmp27 = jsx(tmp(tmp2[22]).ExperimentDetails, {
            experiment,
            override,
            id,
            options: tmp8,
            onCopyLink: C,
          });
          cResult[14] = experiment;
          cResult[15] = id;
          cResult[16] = tmp8;
          cResult[17] = override;
          cResult[18] = tmp27;
        }
        const obj4 = { title: experiment.title, subtitle: id };
        const tmp24 = jsx(tmp(tmp2[21]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
        cResult[11] = experiment.title;
        cResult[12] = id;
        cResult[13] = tmp24;
      }
      let obj = id(items[17]);
    }
  : function ExperimentOverrideActionSheet(override) {
      const id = override.id;
      const experiment = override.experiment;
      let items = [experiment];
      const memo = noop.useMemo(() => {
        if (null != experiment) {
          let experimentVariantsForDevTools = ExperimentDevToolsUtils.getExperimentVariantsForDevTools(tmp);
        } else {
          experimentVariantsForDevTools = [];
        }
        return experimentVariantsForDevTools;
      }, items);
      const items1 = [id, experiment, memo];
      const memo1 = noop.useMemo(() => {
        if (null == items) {
          return [];
        } else {
          const _Map = Map;
          const map = new Map();
          const item = memo.forEach((id) => {
            const result = map.set(id.id, id);
          });
          items = [];
          const item1 = map.forEach((label) => {
            items.push({
              label: label.label,
              onPress() {
                experiment(memo[19]).hideActionSheet("ExperimentOverrideSheet");
                const obj = experiment(memo[19]);
                id(memo[20]).overrideBucket(items.system, map, label.id);
              },
            });
          });
          let obj = {
            label: "Clear Override",
            isDestructive: true,
            onPress() {
              experiment(memo[19]).hideActionSheet("ExperimentOverrideSheet");
              const obj = experiment(memo[19]);
              id(memo[20]).overrideBucket(items.system, map, null);
            },
          };
          items.push(obj);
          return items;
        }
      }, items1);
      const callback = noop.useCallback(() => {
        experiment(memo[19]).hideActionSheet("ExperimentOverrideSheet");
      }, []);
      let obj = {
        header: jsx(id(memo[21]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id }),
        children: jsx(id(memo[22]).ExperimentDetails, {
          experiment,
          override: override.override,
          id,
          options: memo1,
          onCopyLink: callback,
        }),
      };
      return jsx(id(memo[23]).BottomSheet, {
        header: jsx(id(memo[21]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id }),
        children: jsx(id(memo[22]).ExperimentDetails, {
          experiment,
          override: override.override,
          id,
          options: memo1,
          onCopyLink: callback,
        }),
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedExperimentOverrideActionSheet(id) {
      const cResult = c.c(4);
      id = id.id;
      const legacyExperiments = useLegacyExperiments.useLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = useApexExperiments.useApexExperiments();
      let tmp6 = experiments[id];
      if (tmp6 == null) {
        tmp6 = apexExperiments.experiments[id];
      }
      if (tmp6 == null) {
        tmp6 = null;
      }
      let tmp7 = overridesInfo[id];
      if (tmp7 == null) {
        tmp7 = apexExperiments.overridesInfo[id];
      }
      if (tmp7 == null) {
        tmp7 = null;
      }
      useCodedLinksExperimentEmbeds;
      let tmp10 = null;
      if (null != tmp6) {
        tmp10 = null;
        if (tmp9) {
          if (cResult[0] === tmp6) {
            if (cResult[1] === id) {
            }
          }
          const obj4 = { id, experiment: tmp6, override: tmp7 };
          const tmp14 = <closure_9 id={id} experiment={tmp6} override={tmp7} />;
          cResult[0] = tmp6;
          cResult[1] = id;
          cResult[2] = tmp7;
          cResult[3] = tmp14;
        }
      }
      return tmp10;
    }
  : function ConnectedExperimentOverrideActionSheet(id) {
      id = id.id;
      const legacyExperiments = useLegacyExperiments.useLegacyExperiments();
      const experiments = legacyExperiments.experiments;
      const overridesInfo = legacyExperiments.overridesInfo;
      const apexExperiments = useApexExperiments.useApexExperiments();
      const experiments2 = apexExperiments.experiments;
      const overridesInfo2 = apexExperiments.overridesInfo;
      const items = [experiments, experiments2, id];
      const memo = noop.useMemo(() => {
        let tmp2 = experiments[id];
        if (tmp2 == null) {
          tmp2 = experiments2[tmp];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }, items);
      const items1 = [overridesInfo, overridesInfo2, id];
      const memo1 = noop.useMemo(() => {
        let tmp2 = overridesInfo[id];
        if (tmp2 == null) {
          tmp2 = overridesInfo2[tmp];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }, items1);
      useCodedLinksExperimentEmbeds;
      let tmp7 = null;
      if (null != memo) {
        tmp7 = null;
        if (tmp6) {
          const obj3 = { id, experiment: memo, override: memo1 };
          tmp7 = <closure_9 id={id} experiment={memo} override={memo1} />;
        }
      }
      return tmp7;
    };
export const createExperimentEmbed = function createExperimentEmbed(url, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const experimentFromEmbedURL = ExperimentEmbedUtils.getExperimentFromEmbedURL(url);
  const experimentTreatmentFromEmbedURL = ExperimentEmbedUtils.getExperimentTreatmentFromEmbedURL(url);
  const legacyExperiments = useLegacyExperiments.getLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const apexExperiments = useApexExperiments.getApexExperiments();
  let tmp10 = null;
  if (null != experimentFromEmbedURL) {
    let tmp11 = experiments[experimentFromEmbedURL];
    if (tmp11 == null) {
      tmp11 = tmp9[experimentFromEmbedURL];
    }
    tmp10 = tmp11;
  }
  if (null != experimentFromEmbedURL) {
    if (null != tmp10) {
      let tmp12 = overridesInfo[experimentFromEmbedURL];
      if (tmp12 == null) {
        tmp12 = apexExperiments.overridesInfo[experimentFromEmbedURL];
      }
      if (tmp12 == null) {
        tmp12 = null;
      }
      const experimentBuckets = ExperimentEmbedUtils.getExperimentBuckets(tmp10);
      const iter = experimentBuckets.find((value) => value.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        let EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
        let tmp13 = ExperimentEmbedType;
      } else {
        tmp13 = ExperimentEmbedType;
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      const id = AuthenticationStore.getId();
      const tmp4Result = ExperimentEmbedUtils;
      const experimentServerAssignment = useExperimentAssignments.getExperimentServerAssignment(tmp10, id);
      const tmp4Result6 = useExperimentAssignments;
      const experimentServerAssignmentLabel = ExperimentEmbedUtils.getExperimentServerAssignmentLabel(
        tmp10,
        experimentServerAssignment,
      );
      if (EXPERIMENT === tmp13.EXPERIMENT_TREATMENT) {
        if (null != iter) {
          let label = iter.label;
        } else {
          const _HermesInternal3 = HermesInternal;
          label = "Server Config: " + experimentServerAssignmentLabel;
        }
        const obj5 = {};
        const merged = Object.assign(baseColors);
        obj5.headerText = "EXPERIMENT TREATMENT";
        obj5.titleText = experimentFromEmbedURL;
        obj5.titleColor = colors.titleColor;
        obj5.subtitle = label;
        obj5.subtitleColor = colors.subtitleColor;
        obj5.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef11324);
        obj5.thumbnailBackgroundColor = colors.backgroundColor;
        obj5.acceptLabelColor =
          null != tmp12 && null != iter && tmp12.variantId === iter.value
            ? colors.clearLabelRedColor
            : colors.acceptLabelGreenColor;
        obj5.acceptLabelBackgroundColor =
          null != tmp12 && null != iter && tmp12.variantId === iter.value
            ? colors.clearLabelRedBackgroundColor
            : colors.acceptLabelGreenBackgroundColor;
        const _HermesInternal4 = HermesInternal;
        if (null != tmp12 && null != iter && tmp12.variantId === iter.value) {
          let combined = concat(experimentTreatmentFromEmbedURL);
        } else {
          combined = concat(experimentTreatmentFromEmbedURL);
        }
        obj5.acceptLabelText = combined;
        obj5.embedCanBeTapped = true;
        obj5.type = InviteTypes.GUILD;
        return obj5;
      } else {
        const obj6 = {};
        const merged1 = Object.assign(baseColors);
        obj6.headerText = "EXPERIMENT";
        obj6.titleText = experimentFromEmbedURL;
        obj6.titleColor = colors.titleColor;
        if (null != tmp12) {
          const _HermesInternal2 = HermesInternal;
          let combined1 = "Client Override Applied: Treatment " + tmp12.variantId;
        } else {
          const _HermesInternal = HermesInternal;
          combined1 = "Server Assignment: " + experimentServerAssignmentLabel;
        }
        obj6.subtitle = combined1;
        obj6.subtitleColor = colors.subtitleColor;
        obj6.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef11324);
        ({
          backgroundColor: obj13.thumbnailBackgroundColor,
          acceptLabelGreenColor: obj13.acceptLabelColor,
          acceptLabelGreenBackgroundColor: obj13.acceptLabelBackgroundColor,
        } = colors);
        obj6.acceptLabelText = "View Experiment Details";
        obj6.embedCanBeTapped = true;
        obj6.type = InviteTypes.GUILD;
        return obj6;
      }
      const tmp4Result7 = ExperimentEmbedUtils;
    }
  }
  const obj7 = {};
  const merged2 = Object.assign(baseColors);
  obj7.headerText = "EXPERIMENT";
  let str8 = "Unknown Experiment";
  if (null != experimentFromEmbedURL) {
    str8 = experimentFromEmbedURL;
  }
  obj7.titleText = str8;
  obj7.titleColor = colors.titleColor;
  obj7.subtitle = "Unknown Experiment";
  obj7.subtitleColor = colors.subtitleColor;
  obj7.bodyText =
    "This client is missing this experiment. You may need to open the surface where the experiment is used first.";
  obj7.bodyTextColor = colors.bodyTextColor;
  if (tmp4Result10.isThemeDark(theme)) {
    let tmpResult = _modDef11321;
  } else {
    tmpResult = _modDef11322;
  }
  obj7.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  obj7.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
  obj7.type = InviteTypes.GUILD;
  return obj7;
};
