// === Module 8519: NativeMarkdownExperiment ===

// Module 8519 (NativeMarkdownExperiment)
import c from "c" /* 576 */;
import LabFeatureStore from "LabFeatureStore" /* 8520 */;

require = fn;
let ApexExperiment = fn(1453);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-04-native-markdown", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
ApexExperiment = fn(1453);
const apexExperiment1 = ApexExperiment.createApexExperiment({ name: "2026-10-native-markdown-setting", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const enable_native_markdown = "enable_native_markdown";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup_v2/NativeMarkdownExperiment.tsx");

export const NativeMarkdownExperiment = apexExperiment;
export const NativeMarkdownSettingExperiment = apexExperiment1;
export const NATIVE_MARKDOWN_LAB_FEATURE = "enable_native_markdown";
export function isNativeMarkdownEnabled(location, arg1) {
  const _location = location.location;
  if (apexExperiment1.getConfig({ location: _location }, arg1).enabled) {
    let enabled = LabFeatureStore.get(enable_native_markdown);
  } else {
    const obj = { location: _location };
    enabled = apexExperiment.getConfig(obj, arg1).enabled;
  }
  return enabled;
}
export const useNativeMarkdown = ReactCompilerGating.isReactCompilerEnabled() ? (function useNativeMarkdown(location) {
  const cResult = c.c(6);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== _location) {
    const obj3 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  let enabled = apexExperiment.useConfig(tmp5).enabled;
  if (apexExperiment1.useConfig(tmp3).enabled) {
    enabled = tmp4;
  }
  if (cResult[4] !== enabled) {
    const obj4 = { enabled };
    cResult[4] = enabled;
    cResult[5] = obj4;
    let tmp6 = obj4;
  } else {
    tmp6 = cResult[5];
  }
  return tmp6;
}) : (function useNativeMarkdown(location) {
  const _location = location.location;
  let enabled = apexExperiment.useConfig({ location: _location }).enabled;
  if (apexExperiment1.useConfig({ location: _location }).enabled) {
    enabled = tmp;
  }
  return { enabled };
});