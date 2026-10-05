// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import themes from "../../../../../../../design/utils/shared/themes.tsx";
import ExperimentConstants from "../../../../../../experiments/ExperimentConstants.tsx";
import ExperimentManager from "../../../../../../experiments/ExperimentManager.tsx";
import ActionSheetActionCreatorsDefault from "../../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import ExperimentEmbedUtils from "../../../../../../experiments/ExperimentEmbedUtils.tsx";
import ExperimentDevToolsUtils from "../../../../../../experiments/devtools/ExperimentDevToolsUtils.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import renderer_EmbedUtils from "../../../EmbedUtils.tsx";
import useCodedLinksExperimentEmbeds from "../../../../../../experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx";
import useLegacyExperiments from "../../../../../../experiments/client_override_hooks/useLegacyExperiments.tsx";
import useApexExperiments from "../../../../../../experiments/client_override_hooks/useApexExperiments.tsx";
import AssetRegistryDefault from "../../../../../../../../_runtime/11418_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../../../_runtime/11419_AssetRegistry.js";
import useExperimentAssignments from "../../../../../../experiments/client_override_hooks/useExperimentAssignments.tsx";
import AssetRegistryDefault3 from "../../../../../../../../_runtime/11421_AssetRegistry.js";
import react from "../../../../../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../../../../../stores/AuthenticationStore.tsx";
import ReactCompilerGating_mod from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let BottomSheet, map;

const Image = react_native.Image;
const ExperimentEmbedType = ExperimentConstants.ExperimentEmbedType;
const InviteTypes = Constants.InviteTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (id) {
      let arr;
      let items;
      let tmp6;
      let tmp7;
      let obj = id(items[17]);
      const cResult = obj.c(22);
      id = id.id;
      const experiment = id.experiment;
      const override = id.override;
      if (cResult[0] !== experiment) {
        let experimentVariantsForDevTools;
        if (null != experiment) {
          const tmpResult = id(items[18]);
          experimentVariantsForDevTools = tmpResult.getExperimentVariantsForDevTools(experiment);
        } else {
          experimentVariantsForDevTools = [];
        }
        cResult[0] = experiment;
        cResult[1] = experimentVariantsForDevTools;
        arr = experimentVariantsForDevTools;
      } else {
        arr = cResult[1];
      }
      if (null != experiment) {
        if (cResult[3] === experiment.system) {
          if (cResult[4] === id) {
            if (cResult[5] === arr) {
              items = cResult[6];
            }
            tmp6 = tmp7;
          }
        }
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        const item = arr.forEach((id) => {
          const result = map.set(id.id, id);
        });
        items = [];
        const item1 = map.forEach((label) => {
          let obj = {
            label: label.label,
            onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet("ExperimentOverrideSheet");
              const obj2 = ExperimentManager;
              obj2.overrideBucket(experiment.system, id, label.id);
            },
          };
          items.push(obj);
        });
        if (cResult[7] === experiment.system) {
          let tmp12;
          if (cResult[8] === id) {
            tmp12 = cResult[9];
          }
          items.push(tmp12);
          cResult[3] = experiment.system;
          cResult[4] = id;
          cResult[5] = arr;
          cResult[6] = items;
          tmp7 = items;
        }
        let obj2 = {
          label: "Clear Override",
          isDestructive: true,
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("ExperimentOverrideSheet");
            const obj2 = ExperimentManager;
            obj2.overrideBucket(experiment.system, id, null);
          },
        };
        cResult[7] = experiment.system;
        cResult[8] = id;
        cResult[9] = obj2;
        tmp12 = obj2;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [];
          cResult[2] = items1;
          tmp6 = items1;
        } else {
          tmp6 = cResult[2];
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            const obj = experiment(items[19]);
            obj.hideActionSheet("ExperimentOverrideSheet");
          }
        }
        cResult[10] = C;
      } else {
        class C {
          constructor() {
            const obj = experiment(items[19]);
            obj.hideActionSheet("ExperimentOverrideSheet");
          }
        }
      }
      if (cResult[11] === experiment.title) {
        class C {
          constructor() {
            const obj = experiment(items[19]);
            obj.hideActionSheet("ExperimentOverrideSheet");
          }
        }
        if (cResult[14] === experiment) {
          class C {
            constructor() {
              const obj = experiment(items[19]);
              obj.hideActionSheet("ExperimentOverrideSheet");
            }
          }
        }
        cResult[14] = experiment;
        cResult[15] = id;
        cResult[16] = tmp6;
        cResult[17] = override;
        cResult[18] = jsx(id(items[22]).ExperimentDetails, { experiment, override, id, options: tmp6, onCopyLink: C });
        const tmp18 = jsx(id(items[22]).ExperimentDetails, { experiment, override, id, options: tmp6, onCopyLink: C });
      }
      cResult[11] = experiment.title;
      cResult[12] = id;
      cResult[13] = jsx(id(items[21]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
      jsx(id(items[21]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
    }
  : (id) => {
      id = id.id;
      const experiment = id.experiment;
      let items = [experiment];
      const override = id.override;
      const memo = react.useMemo(() => {
        let experimentVariantsForDevTools;
        if (null != experiment) {
          const obj = ExperimentDevToolsUtils;
          experimentVariantsForDevTools = obj.getExperimentVariantsForDevTools(tmp);
        } else {
          experimentVariantsForDevTools = [];
        }
        return experimentVariantsForDevTools;
      }, items);
      const items1 = [id, experiment, memo];
      const memo1 = react.useMemo(function () {
        let items;
        if (null == items) {
          return [];
        } else {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map();
          const item = memo.forEach((id) => {
            const result = map.set(id.id, id);
          });
          items = [];
          const item1 = map.forEach((label) => {
            let system;
            let closure_0 = label;
            let obj = {
              label: label.label,
              onPress() {
                const obj = items(memo[19]);
                obj.hideActionSheet("ExperimentOverrideSheet");
                const obj2 = map(memo[20]);
                obj2.overrideBucket(system.system, closure_2_0, id.id);
              },
            };
            items.push(obj);
          });
          let obj = {
            label: "Clear Override",
            isDestructive: true,
            onPress() {
              const obj = experiment(memo[19]);
              obj.hideActionSheet("ExperimentOverrideSheet");
              const obj2 = id(memo[20]);
              obj2.overrideBucket(items.system, map, null);
            },
          };
          items.push(obj);
          return items;
        }
      }, items1);
      const callback = react.useCallback(() => {
        const obj = experiment(memo[19]);
        obj.hideActionSheet("ExperimentOverrideSheet");
      }, []);
      BottomSheet = id(memo[23]).BottomSheet;
      let obj2 = { title: experiment.title, subtitle: id };
      return <BottomSheet header={null}>{null}</BottomSheet>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let experiments;
      let overridesInfo;
      const obj = react2;
      const cResult = obj.c(4);
      id = id.id;
      const obj2 = useLegacyExperiments;
      const legacyExperiments = obj2.useLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const obj3 = useApexExperiments;
      const apexExperiments = obj3.useApexExperiments();
      let tmp6 = experiments[id];
      const overridesInfo2 = apexExperiments.overridesInfo;
      if (tmp6 == null) {
        tmp6 = apexExperiments.experiments[id];
      }
      if (tmp6 == null) {
        tmp6 = null;
      }
      let tmp7 = overridesInfo[id];
      if (tmp7 == null) {
        tmp7 = overridesInfo2[id];
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
              let tmp11;
              if (cResult[2] === tmp7) {
                tmp11 = cResult[3];
              }
              tmp10 = tmp11;
            }
          }
          const tmp14 = <closure_9 id={id} experiment={tmp6} override={tmp7} />;
          cResult[0] = tmp6;
          cResult[1] = id;
          cResult[2] = tmp7;
          cResult[3] = tmp14;
          tmp11 = tmp14;
        }
      }
      return tmp10;
    }
  : (id) => {
      id = id.id;
      const obj = useLegacyExperiments;
      const legacyExperiments = obj.useLegacyExperiments();
      const experiments = legacyExperiments.experiments;
      const overridesInfo = legacyExperiments.overridesInfo;
      const obj2 = useApexExperiments;
      const apexExperiments = obj2.useApexExperiments();
      const experiments2 = apexExperiments.experiments;
      const overridesInfo2 = apexExperiments.overridesInfo;
      const items = [experiments, experiments2, id];
      const memo = react.useMemo(() => {
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
      const memo1 = react.useMemo(() => {
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
          tmp7 = <closure_9 id={id} experiment={memo} override={memo1} />;
        }
      }
      return tmp7;
    };
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx",
);

export default tmp2;
export const createExperimentEmbed = function createExperimentEmbed(url, theme) {
  let baseColors;
  let colors;
  let combined;
  let combined1;
  let experiments;
  let overridesInfo;
  let resolveAssetSource;
  let str8;
  let tmp4Result8;
  let tmp4Result9;
  let tmpResult;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const obj = ExperimentEmbedUtils;
  const experimentFromEmbedURL = obj.getExperimentFromEmbedURL(url);
  const obj2 = ExperimentEmbedUtils;
  const experimentTreatmentFromEmbedURL = obj2.getExperimentTreatmentFromEmbedURL(url);
  const obj3 = useLegacyExperiments;
  const legacyExperiments = obj3.getLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj4 = useApexExperiments;
  const apexExperiments = obj4.getApexExperiments();
  let tmp10 = null;
  const overridesInfo2 = apexExperiments.overridesInfo;
  if (null != experimentFromEmbedURL) {
    let tmp11 = experiments[experimentFromEmbedURL];
    if (tmp11 == null) {
      tmp11 = tmp9[experimentFromEmbedURL];
    }
    tmp10 = tmp11;
  }
  if (null != experimentFromEmbedURL) {
    if (null != tmp10) {
      let EXPERIMENT;
      let tmp13;
      let tmp12 = overridesInfo[experimentFromEmbedURL];
      if (tmp12 == null) {
        tmp12 = overridesInfo2[experimentFromEmbedURL];
      }
      if (tmp12 == null) {
        tmp12 = null;
      }
      const tmp4Result = ExperimentEmbedUtils;
      const experimentBuckets = tmp4Result.getExperimentBuckets(tmp10);
      const iter = experimentBuckets.find((value) => value.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
        tmp13 = ExperimentEmbedType;
      } else {
        tmp13 = ExperimentEmbedType;
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      const id = AuthenticationStore.getId();
      const tmp4Result6 = useExperimentAssignments;
      const experimentServerAssignment = tmp4Result6.getExperimentServerAssignment(tmp10, id);
      const tmp4Result7 = ExperimentEmbedUtils;
      const experimentServerAssignmentLabel = tmp4Result7.getExperimentServerAssignmentLabel(
        tmp10,
        experimentServerAssignment,
      );
      if (EXPERIMENT === tmp13.EXPERIMENT_TREATMENT) {
        let label;
        if (null != iter) {
          label = iter.label;
        } else {
          const _HermesInternal3 = HermesInternal;
          label = "Server Config: " + experimentServerAssignmentLabel;
        }
        const obj5 = {
          headerText: "EXPERIMENT TREATMENT",
          titleText: experimentFromEmbedURL,
          titleColor: colors.titleColor,
          subtitle: label,
          subtitleColor: colors.subtitleColor,
          thumbnailUrl: tmp4Result8.getAssetUriForEmbed(AssetRegistryDefault3),
          thumbnailBackgroundColor: colors.backgroundColor,
          acceptLabelColor:
            null != tmp12 && null != iter && tmp12.variantId === iter.value
              ? colors.clearLabelRedColor
              : colors.acceptLabelGreenColor,
          acceptLabelBackgroundColor:
            null != tmp12 && null != iter && tmp12.variantId === iter.value
              ? colors.clearLabelRedBackgroundColor
              : colors.acceptLabelGreenBackgroundColor,
          acceptLabelText: combined,
          embedCanBeTapped: true,
          type: InviteTypes.GUILD,
        };
        const merged = Object.assign(baseColors);
        const _HermesInternal4 = HermesInternal;
        tmp4Result8 = renderer_EmbedUtils;
        if (null != tmp12 && null != iter && tmp12.variantId === iter.value) {
          combined = concat(experimentTreatmentFromEmbedURL);
        } else {
          combined = concat(experimentTreatmentFromEmbedURL);
        }
        return obj5;
      } else {
        const obj6 = {
          headerText: "EXPERIMENT",
          titleText: experimentFromEmbedURL,
          titleColor: colors.titleColor,
          subtitle: combined1,
          subtitleColor: colors.subtitleColor,
          thumbnailUrl: tmp4Result9.getAssetUriForEmbed(AssetRegistryDefault3),
          acceptLabelText: "View Experiment Details",
          embedCanBeTapped: true,
          type: InviteTypes.GUILD,
        };
        const merged1 = Object.assign(baseColors);
        if (null != tmp12) {
          const _HermesInternal2 = HermesInternal;
          combined1 = "Client Override Applied: Treatment " + tmp12.variantId;
        } else {
          const _HermesInternal = HermesInternal;
          combined1 = "Server Assignment: " + experimentServerAssignmentLabel;
        }
        ({
          backgroundColor: obj13.thumbnailBackgroundColor,
          acceptLabelGreenColor: obj13.acceptLabelColor,
          acceptLabelGreenBackgroundColor: obj13.acceptLabelBackgroundColor,
        } = colors);
        tmp4Result9 = renderer_EmbedUtils;
        return obj6;
      }
    }
  }
  const obj7 = {
    headerText: "EXPERIMENT",
    titleText: str8,
    titleColor: colors.titleColor,
    subtitle: "Unknown Experiment",
    subtitleColor: colors.subtitleColor,
    bodyText:
      "This client is missing this experiment. You may need to open the surface where the experiment is used first.",
    bodyTextColor: colors.bodyTextColor,
    thumbnailUrl: resolveAssetSource(tmpResult).uri,
    thumbnailBackgroundColor: colors.thumbnailBackgroundColor,
    type: InviteTypes.GUILD,
  };
  const merged2 = Object.assign(baseColors);
  str8 = "Unknown Experiment";
  if (null != experimentFromEmbedURL) {
    str8 = experimentFromEmbedURL;
  }
  resolveAssetSource = Image.resolveAssetSource;
  const tmp4Result10 = themes;
  if (tmp4Result10.isThemeDark(theme)) {
    tmpResult = AssetRegistryDefault;
  } else {
    tmpResult = AssetRegistryDefault2;
  }
  return obj7;
};
