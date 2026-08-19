// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import registerAssetDefault from "../../../../../../../../_runtime/10987_registerAsset.js";
import registerAssetDefault2 from "../../../../../../../../_runtime/10988_registerAsset.js";
import registerAssetDefault3 from "../../../../../../../../_runtime/10990_registerAsset.js";
import noop from "../../../../../../../../_runtime/00019_noop.js";
import { Image } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import fetchFingerprint from "../../../../../../../stores/AuthenticationStore.tsx";
import { ExperimentEmbedType } from "../../../../../../experiments/ExperimentConstants.tsx";
import { InviteTypes } from "../../../../../../instant_invite/Constants.tsx";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function ExperimentOverrideActionSheet(override) {
  const id = override.id;
  const experiment = override.experiment;
  let items = [experiment];
  const memo = React.useMemo(() => {
    if (null != experiment) {
      let experimentVariantsForDevTools = id(memo[16]).getExperimentVariantsForDevTools(tmp);
      const obj = id(memo[16]);
    } else {
      experimentVariantsForDevTools = [];
    }
    return experimentVariantsForDevTools;
  }, items);
  const items1 = [id, experiment, memo];
  const memo1 = React.useMemo(() => {
    if (null == items) {
      return [];
    } else {
      const _Map = Map;
      const map = new Map();
      const item = memo.forEach((item, index) => {
        const result = map.set(item.id, item);
      });
      items = [];
      const item1 = map.forEach((item, index) => {
        closure_0 = item;
        items.push({
          label: item.label,
          onPress() {
            items(memo[17]).hideActionSheet("ExperimentOverrideSheet");
            const obj = items(memo[17]);
            map(memo[18]).overrideBucket(closure_1_1.system, item, item.id);
          }
        });
      });
      let obj = { label: "Clear Override", isDestructive: true, onPress: null };
      obj[2] = function onPress() {
        items(memo[17]).hideActionSheet("ExperimentOverrideSheet");
        const obj = items(memo[17]);
        map(memo[18]).overrideBucket(items.system, map, null);
      };
      items.push(obj);
      return items;
    }
  }, items1);
  const callback = React.useCallback(() => {
    experiment(memo[17]).hideActionSheet("ExperimentOverrideSheet");
  }, []);
  let obj = { title: experiment.title, subtitle: id };
  obj[0] = jsx(id(memo[20]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
  obj[1] = jsx(id(memo[21]).ExperimentDetails, { experiment, override: override.override, id, options: memo1, onCopyLink: callback });
  return jsx(id(memo[19]).BottomSheet, { title: experiment.title, subtitle: id });
}
let result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx");

export default function ConnectedExperimentOverrideActionSheet(id) {
  id = id.id;
  let overridesInfo;
  let obj = id(overridesInfo[8]);
  const legacyExperiments = obj.useLegacyExperiments();
  const experiments = legacyExperiments.experiments;
  overridesInfo = legacyExperiments.overridesInfo;
  const apexExperiments = id(overridesInfo[9]).useApexExperiments();
  const experiments2 = apexExperiments.experiments;
  const overridesInfo2 = apexExperiments.overridesInfo;
  const items = [experiments, experiments2, id];
  const memo = experiments2.useMemo(() => {
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
  const memo1 = experiments2.useMemo(() => {
    let tmp2 = overridesInfo[id];
    if (tmp2 == null) {
      tmp2 = overridesInfo2[tmp];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items1);
  id(overridesInfo[22]);
  let tmp7 = null;
  if (null != memo) {
    tmp7 = null;
    if (tmp6) {
      obj = { id: null, experiment: null, override: null };
      obj[0] = id;
      obj[1] = memo;
      obj[2] = memo1;
      tmp7 = <ExperimentOverrideActionSheet id={null} experiment={null} override={null} />;
    }
  }
  return tmp7;
};
export const createExperimentEmbed = function createExperimentEmbed(url, closure_2) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(closure_2));
  let obj = experimentTreatmentFromEmbedURL(4364);
  const experimentFromEmbedURL = obj.getExperimentFromEmbedURL(url);
  obj1 = experimentTreatmentFromEmbedURL(4364);
  experimentTreatmentFromEmbedURL = obj1.getExperimentTreatmentFromEmbedURL(url);
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
  const legacyExperiments = experimentTreatmentFromEmbedURL(10681).getLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj3 = experimentTreatmentFromEmbedURL(10681);
  const apexExperiments = experimentTreatmentFromEmbedURL(10682).getApexExperiments();
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
      let tmp4Result = tmp4(4364);
      const experimentBuckets = tmp4Result.getExperimentBuckets(tmp10);
      const iter = experimentBuckets.find((item, index) => item.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        let EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
        let tmp13 = ExperimentEmbedType;
      } else {
        tmp13 = ExperimentEmbedType;
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      id = id.getId();
      tmp4Result = tmp4(10989);
      const experimentServerAssignment = tmp4Result.getExperimentServerAssignment(tmp10, id);
      const experimentServerAssignmentLabel = tmp4(4364).getExperimentServerAssignmentLabel(tmp10, experimentServerAssignment);
      if (EXPERIMENT === tmp13.EXPERIMENT_TREATMENT) {
        if (null != iter) {
          let label = iter.label;
        } else {
          const _HermesInternal3 = HermesInternal;
          label = "Server Config: " + experimentServerAssignmentLabel;
        }
        obj = {};
        const merged = Object.assign(baseColors);
        obj.headerText = "EXPERIMENT TREATMENT";
        obj.titleText = experimentFromEmbedURL;
        obj.titleColor = colors.titleColor;
        obj.subtitle = label;
        obj.subtitleColor = colors.subtitleColor;
        obj.thumbnailUrl = tmp4(8171).getAssetUriForEmbed(registerAssetDefault3);
        obj.thumbnailBackgroundColor = colors.backgroundColor;
        obj.acceptLabelColor = null != tmp12 && null != iter && tmp12.variantId === iter.value ? colors.clearLabelRedColor : colors.acceptLabelGreenColor;
        obj.acceptLabelBackgroundColor = null != tmp12 && null != iter && tmp12.variantId === iter.value ? colors.clearLabelRedBackgroundColor : colors.acceptLabelGreenBackgroundColor;
        const _HermesInternal4 = HermesInternal;
        if (null != tmp12 && null != iter && tmp12.variantId === iter.value) {
          let combined = concat(experimentTreatmentFromEmbedURL);
        } else {
          combined = concat(experimentTreatmentFromEmbedURL);
        }
        obj.acceptLabelText = combined;
        obj.embedCanBeTapped = true;
        obj.type = InviteTypes.GUILD;
        return obj;
      } else {
        obj = {};
        const merged1 = Object.assign(baseColors);
        obj.headerText = "EXPERIMENT";
        obj.titleText = experimentFromEmbedURL;
        obj.titleColor = colors.titleColor;
        if (null != tmp12) {
          const _HermesInternal2 = HermesInternal;
          let combined1 = "Client Override Applied: Treatment " + tmp12.variantId;
        } else {
          const _HermesInternal = HermesInternal;
          combined1 = "Server Assignment: " + experimentServerAssignmentLabel;
        }
        obj.subtitle = combined1;
        obj.subtitleColor = colors.subtitleColor;
        obj.thumbnailUrl = tmp4(8171).getAssetUriForEmbed(registerAssetDefault3);
        ({ backgroundColor: obj13.thumbnailBackgroundColor, acceptLabelGreenColor: obj13.acceptLabelColor, acceptLabelGreenBackgroundColor: obj13.acceptLabelBackgroundColor } = colors);
        obj.acceptLabelText = "View Experiment Details";
        obj.embedCanBeTapped = true;
        obj.type = InviteTypes.GUILD;
        return obj;
      }
      const tmp4Result1 = tmp4(4364);
    }
  }
  obj1 = {};
  const merged2 = Object.assign(baseColors);
  obj1.headerText = "EXPERIMENT";
  let str8 = "Unknown Experiment";
  if (null != experimentFromEmbedURL) {
    str8 = experimentFromEmbedURL;
  }
  obj1.titleText = str8;
  obj1.titleColor = colors.titleColor;
  obj1.subtitle = "Unknown Experiment";
  obj1.subtitleColor = colors.subtitleColor;
  obj1.bodyText = "This client is missing this experiment. You may need to open the surface where the experiment is used first.";
  obj1.bodyTextColor = colors.bodyTextColor;
  const obj4 = experimentTreatmentFromEmbedURL(10682);
  if (tmp4Result4.isThemeDark(closure_2)) {
    let tmpResult = registerAssetDefault;
  } else {
    tmpResult = registerAssetDefault2;
  }
  obj1.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  obj1.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
  obj1.type = InviteTypes.GUILD;
  return obj1;
};