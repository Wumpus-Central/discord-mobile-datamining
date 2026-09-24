// === Module 12149: ExperimentEmbed ===

// Module 12149 (ExperimentEmbed)
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8222 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 8224 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8293 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8294 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 11820 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11821 */;
import useApexExperiments from "useApexExperiments" /* 11822 */;
import _modDef12150 from "module_12150" /* 12150 */;
import _modDef12151 from "module_12151" /* 12151 */;
import useExperimentAssignments from "useExperimentAssignments" /* 12152 */;
import _modDef12153 from "module_12153" /* 12153 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function ExperimentOverrideActionSheet(override) {
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
            experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = experiment(memo[17]);
            id(memo[18]).overrideBucket(items.system, map, label.id);
          }
        });
      });
      let obj = {
        label: "Clear Override",
        isDestructive: true,
        onPress() {
            experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = experiment(memo[17]);
            id(memo[18]).overrideBucket(items.system, map, null);
          }
      };
      items.push(obj);
      return items;
    }
  }, items1);
  const callback = noop.useCallback(() => {
    experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
  }, []);
  let obj = { header: jsx(id(memo[20]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id }), children: jsx(id(memo[21]).ExperimentDetails, { experiment, override: override.override, id, options: memo1, onCopyLink: callback }) };
  return jsx(id(memo[19]).BottomSheet, { header: jsx(id(memo[20]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id }), children: jsx(id(memo[21]).ExperimentDetails, { experiment, override: override.override, id, options: memo1, onCopyLink: callback }) });
}
const Image = fn(17).Image;
const ExperimentEmbedType = fn(4745).ExperimentEmbedType;
const InviteTypes = fn(8065).InviteTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx");

export default function ConnectedExperimentOverrideActionSheet(id) {
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
      tmp7 = <ExperimentOverrideActionSheet id={id} experiment={memo} override={memo1} />;
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
      const experimentServerAssignmentLabel = ExperimentEmbedUtils.getExperimentServerAssignmentLabel(tmp10, experimentServerAssignment);
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
        obj5.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef12153);
        obj5.thumbnailBackgroundColor = colors.backgroundColor;
        obj5.acceptLabelColor = null != tmp12 && null != iter && tmp12.variantId === iter.value ? colors.clearLabelRedColor : colors.acceptLabelGreenColor;
        obj5.acceptLabelBackgroundColor = null != tmp12 && null != iter && tmp12.variantId === iter.value ? colors.clearLabelRedBackgroundColor : colors.acceptLabelGreenBackgroundColor;
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
        obj6.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef12153);
        ({ backgroundColor: obj13.thumbnailBackgroundColor, acceptLabelGreenColor: obj13.acceptLabelColor, acceptLabelGreenBackgroundColor: obj13.acceptLabelBackgroundColor } = colors);
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
  obj7.bodyText = "This client is missing this experiment. You may need to open the surface where the experiment is used first.";
  obj7.bodyTextColor = colors.bodyTextColor;
  if (tmp4Result10.isThemeDark(theme)) {
    let tmpResult = _modDef12150;
  } else {
    tmpResult = _modDef12151;
  }
  obj7.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  obj7.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
  obj7.type = InviteTypes.GUILD;
  return obj7;
};