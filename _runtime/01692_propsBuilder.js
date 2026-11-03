// _runtime/01692_propsBuilder.js
import _mod1671 from "metro/01671__.js";
import _modDef1693 from "metro/01693__.js";

let closure_3 = {
  code: "(function pnpm_propsBuilderTs1(value,context){let[configValue]=this.__closure;return configValue.process(value,context);})",
};
const STYLE_PROPERTIES_CONFIG = _mod1671.STYLE_PROPERTIES_CONFIG;

export function createNativePropsBuilder(config) {
  closure_0 = config;
  return _modDef1693({
    config,
    processConfigValue(arg0) {
      let as = arg0;
      if (true === arg0) {
        return tmp;
      } else {
        if (obj.isConfigPropertyAlias(as)) {
          as = as.as;
        } else {
          if (tmp2Result.hasValueProcessor(as)) {
            items = [closure_3, as];
            [tmp7, tmp8] = items;
            function pnpm_propsBuilderTs1(arg0, arg1) {
              return config.process(arg0, arg1);
            }
            const items1 = [tmp8];
            pnpm_propsBuilderTs1.__closure = items1;
            pnpm_propsBuilderTs1.__workletHash = 12070742086007;
            pnpm_propsBuilderTs1.__initData = tmp7;
          }
          tmp2Result = STYLE_PROPERTIES_CONFIG(1674);
        }
        obj = STYLE_PROPERTIES_CONFIG(1674);
      }
    },
  });
}
export const stylePropsBuilder = _modDef1693({
  config: STYLE_PROPERTIES_CONFIG,
  processConfigValue(arg0) {
    let as = arg0;
    if (true === arg0) {
      return tmp;
    } else {
      if (obj.isConfigPropertyAlias(as)) {
        as = as.as;
      } else {
        if (tmp2Result.hasValueProcessor(as)) {
          items = [closure_3, as];
          [tmp7, tmp8] = items;
          function pnpm_propsBuilderTs1(arg0, arg1) {
            return config.process(arg0, arg1);
          }
          const items1 = [tmp8];
          pnpm_propsBuilderTs1.__closure = items1;
          pnpm_propsBuilderTs1.__workletHash = 12070742086007;
          pnpm_propsBuilderTs1.__initData = tmp7;
        }
        tmp2Result = STYLE_PROPERTIES_CONFIG(1674);
      }
      obj = STYLE_PROPERTIES_CONFIG(1674);
    }
  },
});
