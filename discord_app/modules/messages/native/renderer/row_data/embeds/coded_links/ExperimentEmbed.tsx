// === Module 11807: ExperimentEmbed ===

// Module 11807 (ExperimentEmbed)
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7890 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 7892 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import useCodedLinksExperimentEmbeds from "useCodedLinksExperimentEmbeds" /* 11479 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11480 */;
import useApexExperiments from "useApexExperiments" /* 11481 */;
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
  let obj = { header: null, children: null };
  obj = { title: experiment.title, subtitle: id };
  obj.header = jsx(id(memo[20]).BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
  obj.children = jsx(id(memo[21]).ExperimentDetails, { experiment, override: override.override, id, options: memo1, onCopyLink: callback });
  return jsx(id(memo[19]).BottomSheet, { title: experiment.title, subtitle: id });
}
const Image = fn(17).Image;
const ExperimentEmbedType = fn(4477).ExperimentEmbedType;
const InviteTypes = fn(7736).InviteTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx");

export default function ConnectedExperimentOverrideActionSheet(id) {
  id = id.id;
  let obj = useLegacyExperiments;
  const legacyExperiments = obj.useLegacyExperiments();
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
      obj = { id, experiment: memo, override: memo1 };
      tmp7 = <ExperimentOverrideActionSheet id={id} experiment={memo} override={memo1} />;
    }
  }
  return tmp7;
};
export const createExperimentEmbed = function createExperimentEmbed(url, arg1) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
  let obj = ExperimentEmbedUtils;
  const experimentFromEmbedURL = obj.getExperimentFromEmbedURL(url);
  let obj1 = ExperimentEmbedUtils;
  const experimentTreatmentFromEmbedURL = obj1.getExperimentTreatmentFromEmbedURL(url);
  const tmp3 = getEmbedThemeColorsDefault(arg1);
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
      let tmp4Result = tmp4(7890);
      const experimentBuckets = tmp4Result.getExperimentBuckets(tmp10);
      const iter = experimentBuckets.find((value) => value.value === experimentTreatmentFromEmbedURL);
      if (null != iter) {
        let EXPERIMENT = ExperimentEmbedType.EXPERIMENT_TREATMENT;
        let tmp13 = ExperimentEmbedType;
      } else {
        tmp13 = ExperimentEmbedType;
        EXPERIMENT = ExperimentEmbedType.EXPERIMENT;
      }
      const id = AuthenticationStore.getId();
      tmp4Result = tmp4(11810);
      const experimentServerAssignment = tmp4Result.getExperimentServerAssignment(tmp10, id);
      const experimentServerAssignmentLabel = tmp4(7890).getExperimentServerAssignmentLabel(tmp10, experimentServerAssignment);
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
        obj.thumbnailUrl = tmp4(7946).getAssetUriForEmbed(tmp(11811));
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
        obj.thumbnailUrl = tmp4(7946).getAssetUriForEmbed(tmp(11811));
        ({ backgroundColor: obj13.thumbnailBackgroundColor, acceptLabelGreenColor: obj13.acceptLabelColor, acceptLabelGreenBackgroundColor: obj13.acceptLabelBackgroundColor } = colors);
        obj.acceptLabelText = "View Experiment Details";
        obj.embedCanBeTapped = true;
        obj.type = InviteTypes.GUILD;
        return obj;
      }
      const tmp4Result1 = tmp4(7890);
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
  if (tmp4Result4.isThemeDark(arg1)) {
    let tmpResult = tmp(11808);
  } else {
    tmpResult = tmp(11809);
  }
  obj1.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  obj1.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
  obj1.type = InviteTypes.GUILD;
  return obj1;
};