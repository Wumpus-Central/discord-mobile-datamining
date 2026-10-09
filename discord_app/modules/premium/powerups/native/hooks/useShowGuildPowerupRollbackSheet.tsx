// discord_app/modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx
import openGuildPowerupRollbackSheetDefault from "../utils/openGuildPowerupRollbackSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowGuildPowerupRollbackSheet(arg0, arg1, arg2) {
      const cResult = modalConfig(576).c(9);
      let obj = modalConfig(576);
      ({ shouldShow, modalConfig } = first(12202)(arg0, arg1));
      if (cResult[0] === modalConfig) {
        if (cResult[1] === shouldShow) {
          if (cResult[2] === tmp4) {
            let tmp6 = cResult[3];
          }
          const tmp11 = _slicedToArray(modalConfig(7093).useSelectedDismissibleContent(tmp6), 2);
          first = tmp11[0];
          dependencyMap = tmp13;
          _slicedToArray = noop.useRef(false);
          if (cResult[4] === tmp11[1]) {
            if (cResult[5] === modalConfig) {
              if (cResult[6] === first) {
                let tmp14 = cResult[7];
                let tmp15 = cResult[8];
              }
              const effect = noop.useEffect(tmp14, tmp15);
            }
          }
          let fn = function b() {
            let current = ref.current;
            if (!current) {
              current = null == modalConfig;
            }
            if (!current) {
              current = first !== modalConfig.dismissibleContent;
            }
            if (!current) {
              ref.current = true;
              const obj = { header: null, body: null, ctaText: null, onCtaPress: null, onDismiss: null };
              ({ header: obj.header, bodies } = modalConfig);
              obj.body = bodies.join("\n\n");
              obj.ctaText = modalConfig.primaryButtonText;
              let fn;
              if (null != modalConfig.primaryButtonText) {
                fn = () => {
                  dependencyMap(constants.TAKE_ACTION);
                  first(5055).hideActionSheet(modalConfig(12204).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
                };
              }
              obj.onCtaPress = fn;
              obj.onDismiss = function onDismiss() {
                dependencyMap(constants.USER_DISMISS);
              };
              openGuildPowerupRollbackSheetDefault(obj);
            }
          };
          const items = [first, modalConfig, tmp11[1]];
          cResult[4] = tmp11[1];
          cResult[5] = modalConfig;
          cResult[6] = first;
          cResult[7] = fn;
          cResult[8] = items;
          tmp15 = items;
          tmp14 = fn;
          const tmpResult = modalConfig(7093);
        }
      }
      let tmp7 = shouldShow;
      if (shouldShow) {
        tmp7 = null != modalConfig;
      }
      if (tmp7) {
        tmp7 = !tmp4;
      }
      const items1 = [];
      if (tmp7) {
        items1.push(modalConfig.dismissibleContent);
      }
      cResult[0] = modalConfig;
      cResult[1] = shouldShow;
      cResult[2] = undefined !== arg2 && arg2;
      cResult[3] = items1;
      tmp6 = items1;
      const tmp5 = first(12202)(arg0, arg1);
    }
  : function useShowGuildPowerupRollbackSheet(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      modalConfig = undefined;
      let first;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      ({ shouldShow, modalConfig } = first(12202)(arg0, arg1));
      if (shouldShow) {
        shouldShow = null != modalConfig;
      }
      if (shouldShow) {
        shouldShow = !flag;
      }
      const items = [];
      if (shouldShow) {
        items.push(modalConfig.dismissibleContent);
      }
      const tmp2 = first(12202)(arg0, arg1);
      const tmp5 = _slicedToArray(modalConfig(7093).useSelectedDismissibleContent(items), 2);
      first = tmp5[0];
      dependencyMap = tmp7;
      _slicedToArray = noop.useRef(false);
      const items1 = [first, modalConfig, tmp5[1]];
      const effect = noop.useEffect(() => {
        let current = ref.current;
        if (!current) {
          current = null == modalConfig;
        }
        if (!current) {
          current = first !== modalConfig.dismissibleContent;
        }
        if (!current) {
          ref.current = true;
          const obj = { header: null, body: null, ctaText: null, onCtaPress: null, onDismiss: null };
          ({ header: obj.header, bodies } = modalConfig);
          obj.body = bodies.join("\n\n");
          obj.ctaText = modalConfig.primaryButtonText;
          let fn;
          if (null != modalConfig.primaryButtonText) {
            fn = () => {
              dependencyMap(constants.TAKE_ACTION);
              first(5055).hideActionSheet(modalConfig(12204).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
            };
          }
          obj.onCtaPress = fn;
          obj.onDismiss = function onDismiss() {
            dependencyMap(constants.USER_DISMISS);
          };
          openGuildPowerupRollbackSheetDefault(obj);
        }
      }, items1);
    };
